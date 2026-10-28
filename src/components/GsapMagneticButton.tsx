'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';

export interface GsapMagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // Distance multiplier (default: 0.3)
  textStrength?: number; // Inner text/icon parallax multiplier
  onClick?: () => void;
}

export const GsapMagneticButton: React.FC<GsapMagneticButtonProps> = ({
  children,
  className = '',
  strength = 0.32,
  textStrength = 0.18,
  onClick,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    // Pull outer container
    gsap.to(buttonRef.current, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: 'power2.out',
    });

    // Pull inner content slightly more for parallax depth
    if (innerRef.current) {
      gsap.to(innerRef.current, {
        x: deltaX * textStrength,
        y: deltaY * textStrength,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;

    // Smooth elastic spring back to zero
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: 'elastic.out(1, 0.4)',
    });

    if (innerRef.current) {
      gsap.to(innerRef.current, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'elastic.out(1, 0.4)',
      });
    }
  };

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`inline-block will-change-transform ${className}`}
    >
      <div ref={innerRef} className="will-change-transform">
        {children}
      </div>
    </div>
  );
};
