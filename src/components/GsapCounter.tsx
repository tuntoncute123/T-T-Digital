'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface GsapCounterProps {
  end: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const GsapCounter: React.FC<GsapCounterProps> = ({
  end,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 2.0,
  className = '',
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!numberRef.current || !containerRef.current) return;

    const targetObj = { value: 0 };

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targetObj,
        { value: 0 },
        {
          value: end,
          duration: duration,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            if (numberRef.current) {
              const formatted = decimals > 0 
                ? targetObj.value.toFixed(decimals) 
                : Math.round(targetObj.value).toString();
              numberRef.current.innerText = formatted;
            }
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [end, decimals, duration]);

  return (
    <span ref={containerRef} className={`inline-flex items-baseline font-black ${className}`}>
      {prefix && <span>{prefix}</span>}
      <span ref={numberRef}>0</span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
};
