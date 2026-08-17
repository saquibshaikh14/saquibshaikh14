'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface HeroWaveBackgroundProps {
  mouse?: React.MutableRefObject<[number, number]>;
}

export default function HeroWaveBackground({ mouse }: HeroWaveBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Atmospheric Scene with deep void fog matching background #04040A
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x04040A, 0.045);

    const getWidth = () => window.innerWidth;
    const getHeight = () => container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(
      55,
      getWidth() / getHeight(),
      0.1,
      1000
    );
    camera.position.set(0, 3.4, 9.0);
    camera.lookAt(0, 0, -2.5);

    // High performance WebGL renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(getWidth(), getHeight());
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    // ── Extra Wide Full-Width 3D Cyber Wave Mesh ───────────────────────────
    const gridWidth = 170;
    const gridDepth = 100;
    const segmentsX = 130;
    const segmentsZ = 100;

    const planeGeo = new THREE.PlaneGeometry(gridWidth, gridDepth, segmentsX, segmentsZ);
    planeGeo.rotateX(-Math.PI / 2);

    const count = planeGeo.attributes.position.count;
    const originalPositions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const primaryColor = new THREE.Color('#7C5CFC'); // Violet
    const accentColor = new THREE.Color('#22D3EE');  // Cyan
    const darkVoid = new THREE.Color('#04040A');     // Void

    for (let i = 0; i < count; i++) {
      const x = planeGeo.attributes.position.getX(i);
      const y = planeGeo.attributes.position.getY(i);
      const z = planeGeo.attributes.position.getZ(i);

      originalPositions[i * 3 + 0] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      // Smooth multi-axis falloff so left/right/bottom melt seamlessly with zero sharp cutoffs
      const lateralFade = Math.min(1, Math.pow(Math.abs(x) / 45, 2.0));
      const frontFade = Math.min(1, Math.pow(Math.max(0, z + 8) / 32, 1.6));
      const horizonFade = Math.min(1, Math.pow(Math.max(0, -z - 20) / 30, 1.8));
      const totalFade = THREE.MathUtils.clamp(Math.max(lateralFade, frontFade, horizonFade), 0, 1);

      // Gradient color between primary violet and cyan accent
      const baseColor = primaryColor.clone().lerp(accentColor, Math.sin(x * 0.15 + z * 0.08) * 0.5 + 0.5);
      baseColor.lerp(darkVoid, totalFade * 0.99);

      colors[i * 3 + 0] = baseColor.r;
      colors[i * 3 + 1] = baseColor.g;
      colors[i * 3 + 2] = baseColor.b;
    }

    planeGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const gridMaterial = new THREE.MeshBasicMaterial({
      vertexColors: true,
      wireframe: true,
      transparent: true,
      opacity: 0.36,
    });

    const terrainMesh = new THREE.Mesh(planeGeo, gridMaterial);
    terrainMesh.position.set(0, -2.8, -6.0);
    scene.add(terrainMesh);

    // Node Glow Points
    const pointsMat = new THREE.PointsMaterial({
      size: 0.048,
      vertexColors: true,
      transparent: true,
      opacity: 0.58,
      sizeAttenuation: true,
    });
    const pointsMesh = new THREE.Points(planeGeo, pointsMat);
    pointsMesh.position.copy(terrainMesh.position);
    scene.add(pointsMesh);

    // Distant Ambient Ring Horizon
    const ringGeo = new THREE.TorusGeometry(10.5, 0.015, 8, 140);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x7c5cfc,
      transparent: true,
      opacity: 0.1,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.4;
    ring.position.set(0, -2.0, -15);
    scene.add(ring);

    // ── Animation Loop ────────────────────────────────────────────────────
    let animationFrameId: number;
    let targetCameraX = 0;
    let targetCameraY = 3.4;

    const handleResize = () => {
      if (!container) return;
      const w = getWidth();
      const h = getHeight();
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const t = clock.getElapsedTime();
      const posAttr = planeGeo.attributes.position;
      const positions = posAttr.array as Float32Array;

      const mouseX = mouse?.current ? mouse.current[0] : 0;
      const mouseY = mouse?.current ? mouse.current[1] : 0;

      // Parallax tracking
      targetCameraX = mouseX * 1.8;
      targetCameraY = 3.4 - mouseY * 0.75;
      camera.position.x += (targetCameraX - camera.position.x) * 0.035;
      camera.position.y += (targetCameraY - camera.position.y) * 0.035;
      camera.lookAt(0, 0, -2.5);

      // Undulate wave mesh smoothly
      for (let i = 0; i < count; i++) {
        const ox = originalPositions[i * 3 + 0];
        const oz = originalPositions[i * 3 + 2];

        const wave1 = Math.sin(ox * 0.22 + t * 1.1) * 0.65;
        const wave2 = Math.cos(oz * 0.18 + t * 0.9) * 0.55;
        const wave3 = Math.sin((ox + oz) * 0.14 + t * 0.7) * 0.38;

        const distToMouse = Math.sqrt(Math.pow(ox - mouseX * 14, 2) + Math.pow(oz - mouseY * 14, 2));
        const mouseRipple = Math.sin(distToMouse * 0.55 - t * 2.4) * Math.max(0, 1 - distToMouse / 14) * 0.5;

        positions[i * 3 + 1] = wave1 + wave2 + wave3 + mouseRipple;
      }
      posAttr.needsUpdate = true;

      ring.rotation.z = t * 0.012;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      planeGeo.dispose();
      gridMaterial.dispose();
      pointsMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [mouse]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none w-full h-full overflow-hidden"
      style={{ opacity: 0.95 }}
      aria-hidden="true"
    />
  );
}
