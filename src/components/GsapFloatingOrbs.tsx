'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export interface GsapFloatingOrbsProps {
  className?: string;
}

export const GsapFloatingOrbs: React.FC<GsapFloatingOrbsProps> = ({ className = '' }) => {
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (orb1Ref.current) {
        gsap.to(orb1Ref.current, {
          x: 40,
          y: -30,
          scale: 1.1,
          duration: 7,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      if (orb2Ref.current) {
        gsap.to(orb2Ref.current, {
          x: -35,
          y: 35,
          scale: 0.95,
          duration: 9,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1,
        });
      }

      if (orb3Ref.current) {
        gsap.to(orb3Ref.current, {
          x: 25,
          y: 20,
          scale: 1.05,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 0.5,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden -z-10 ${className}`}>
      {/* Orb 1: Warm Orange */}
      <div
        ref={orb1Ref}
        className="absolute top-10 left-[15%] w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-orange-400/20 via-orange-300/15 to-transparent blur-3xl"
      />
      {/* Orb 2: Warm Amber / Gold */}
      <div
        ref={orb2Ref}
        className="absolute top-1/3 right-[10%] w-80 h-80 sm:w-[450px] sm:h-[450px] rounded-full bg-gradient-to-bl from-amber-400/20 via-orange-400/10 to-transparent blur-3xl"
      />
      {/* Orb 3: Light Peach Accent */}
      <div
        ref={orb3Ref}
        className="absolute bottom-10 left-[40%] w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-r from-orange-200/25 to-amber-200/20 blur-3xl"
      />
    </div>
  );
};
