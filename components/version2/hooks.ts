'use client';

import { useState, useEffect, useRef } from 'react';

export function use3DTilt(strength = 12) {
  const ref = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const rx = ((e.clientY - rect.top) / rect.height - 0.5) * -strength;
    const ry = ((e.clientX - rect.left) / rect.width - 0.5) * strength;
    setTiltStyle({
      transform: `perspective(800px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale3d(1.02,1.02,1.02)`,
      transition: 'transform 0.1s ease-out',
    });
  };

  const onMouseLeave = () =>
    setTiltStyle({
      transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)',
      transition: 'transform 0.5s ease-out',
    });

  return { ref, tiltStyle, onMouseMove, onMouseLeave };
}

export function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}
