'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface SparkleBackgroundProps {
  mouse?: React.MutableRefObject<[number, number]>;
}

export default function SparkleBackground({ mouse }: SparkleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'low-power',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // ── Particle Field (Star Dust Matrix) ──────────────────────────────────
    const particleCount = 280;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const velocities = new Float32Array(particleCount * 3);

    const palette = [
      new THREE.Color('#7C5CFC'), // Violet
      new THREE.Color('#22D3EE'), // Cyan
      new THREE.Color('#E879F9'), // Pink
      new THREE.Color('#F0EEFF'), // White/lavender
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 36;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 32;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 16 - 2;

      velocities[i * 3 + 0] = (Math.random() - 0.5) * 0.003;
      velocities[i * 3 + 1] = Math.random() * 0.004 + 0.001; // subtle upward drift
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.002;

      const chosenColor = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3 + 0] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;

      sizes[i] = Math.random() * 0.06 + 0.025;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.055,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // ── Resize and Loop ───────────────────────────────────────────────────
    let animationFrameId: number;

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const t = clock.getElapsedTime();
      const posAttr = geometry.attributes.position;
      const posArr = posAttr.array as Float32Array;

      const mouseX = mouse?.current ? mouse.current[0] : 0;
      const mouseY = mouse?.current ? mouse.current[1] : 0;

      for (let i = 0; i < particleCount; i++) {
        // Upward floating motion
        posArr[i * 3 + 0] += velocities[i * 3 + 0] + Math.sin(t * 0.5 + i) * 0.001;
        posArr[i * 3 + 1] += velocities[i * 3 + 1];

        // Wrap around bounds
        if (posArr[i * 3 + 1] > 16) {
          posArr[i * 3 + 1] = -16;
          posArr[i * 3 + 0] = (Math.random() - 0.5) * 36;
        }
        if (posArr[i * 3 + 0] > 18) posArr[i * 3 + 0] = -18;
        if (posArr[i * 3 + 0] < -18) posArr[i * 3 + 0] = 18;
      }
      posAttr.needsUpdate = true;

      // Soft mouse-driven particle field rotation
      particles.rotation.y = t * 0.02 + mouseX * 0.12;
      particles.rotation.x = t * 0.01 + mouseY * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [mouse]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
      aria-hidden="true"
    />
  );
}
