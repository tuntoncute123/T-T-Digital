'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';

export interface Interactive3DTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  scale?: number;
}

export const Interactive3DTilt: React.FC<Interactive3DTiltProps> = ({
  children,
  className = '',
  maxTilt = 7,
  perspective = 1000,
  scale = 1.015,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xNorm = (x / rect.width) * 2 - 1;
    const yNorm = (y / rect.height) * 2 - 1;

    gsap.to(cardRef.current, {
      rotateX: -yNorm * maxTilt,
      rotateY: xNorm * maxTilt,
      scale: scale,
      transformPerspective: perspective,
      transformOrigin: 'center center',
      ease: 'power1.out',
      duration: 0.35,
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      ease: 'power2.out',
      duration: 0.6,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`will-change-transform ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};
