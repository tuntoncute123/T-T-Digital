'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Activity, Cpu, RotateCw, Sparkles, ShieldCheck } from 'lucide-react';

export interface ThreeTechGlobeProps {
  className?: string;
  autoRotateSpeed?: number;
}

export const ThreeTechGlobe: React.FC<ThreeTechGlobeProps> = ({
  className = '',
  autoRotateSpeed = 0.008,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeNodesCount, setActiveNodesCount] = useState(128);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      // Fallback if WebGL isn't supported
      return;
    }

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 360;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0); // Transparent background
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6.2;

    // Create Main 3D Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Core Geometry (Icosahedron wireframe)
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 2);
    const coreWireMat = new THREE.MeshBasicMaterial({
      color: 0xea580c, // Brand orange
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });
    const coreWireMesh = new THREE.Mesh(coreGeo, coreWireMat);
    mainGroup.add(coreWireMesh);

    // 2. Inner Glowing Solid Core (Small crystal center)
    const innerGeo = new THREE.OctahedronGeometry(0.85, 1);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0xf97316,
      emissive: 0xc2410c,
      emissiveIntensity: 0.7,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // 3. Orbital Ring 1 (Inclined XY)
    const ring1Geo = new THREE.TorusGeometry(2.35, 0.02, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0xfbbf24, // Amber gold
      transparent: true,
      opacity: 0.75,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    mainGroup.add(ring1);

    // 4. Orbital Ring 2 (Counter inclined)
    const ring2Geo = new THREE.TorusGeometry(2.55, 0.025, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xea580c,
      transparent: true,
      opacity: 0.6,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 3;
    mainGroup.add(ring2);

    // 5. Constellation Cloud / Floating Tech Particles
    const particlesCount = 280;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    const colorOrange = new THREE.Color(0xea580c);
    const colorAmber = new THREE.Color(0xf59e0b);
    const colorWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < particlesCount; i++) {
      // Distribute in a spherical shell around radius 2.0 -> 3.2
      const radius = 2.0 + Math.random() * 1.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = Math.random() > 0.4 ? (Math.random() > 0.5 ? colorOrange : colorAmber) : colorWhite;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.07,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const particles = new THREE.Points(particlesGeo, particlesMat);
    mainGroup.add(particles);

    // 6. Dynamic Point Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xea580c, 3, 20);
    pointLight1.position.set(4, 3, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xf59e0b, 2.5, 20);
    pointLight2.position.set(-4, -3, 3);
    scene.add(pointLight2);

    // Mouse and Touch Interaction State
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;
    let isVisible = true;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      setIsInteracting(true);
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      previousPointerX = clientX;
      previousPointerY = clientY;
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const rect = container.getBoundingClientRect();
      const normX = ((clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((clientY - rect.top) / rect.height) * 2 - 1);

      mouseX = normX * 0.45;
      mouseY = normY * 0.45;

      if (isDragging) {
        const deltaX = clientX - previousPointerX;
        const deltaY = clientY - previousPointerY;
        targetRotationY += deltaX * 0.009;
        targetRotationX += deltaY * 0.009;
        previousPointerX = clientX;
        previousPointerY = clientY;
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    container.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);

    container.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);

    // Responsive Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // IntersectionObserver to pause rendering when scrolled out of view (saves battery/GPU)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    setIsLoaded(true);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return; // Skip work when out of viewport!

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Auto rotation
      if (!isDragging) {
        targetRotationY += autoRotateSpeed;
      }

      // Smooth interpolation (Lerp)
      mainGroup.rotation.y += (targetRotationY + mouseX - mainGroup.rotation.y) * 0.07;
      mainGroup.rotation.x += (targetRotationX - mouseY - mainGroup.rotation.x) * 0.07;

      // Independent sub-rotations for intricate mechanical 3D depth
      coreWireMesh.rotation.y += 0.004;
      coreWireMesh.rotation.x -= 0.003;

      innerMesh.rotation.y -= 0.009;
      innerMesh.rotation.z += 0.005;

      ring1.rotation.z = elapsedTime * 0.35;
      ring2.rotation.z = -elapsedTime * 0.45;

      particles.rotation.y = elapsedTime * 0.05;

      // Subtle breathing pulse on the core
      const pulse = 1 + Math.sin(elapsedTime * 2.2) * 0.035;
      coreWireMesh.scale.set(pulse, pulse, pulse);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();

      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);

      container.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Three.js resources
      coreGeo.dispose();
      coreWireMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();
    };
  }, [autoRotateSpeed]);

  return (
    <div className={`relative w-full h-[320px] sm:h-[380px] flex items-center justify-center select-none overflow-hidden ${className}`}>
      {/* 3D Canvas Mount Point */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing relative z-10"
        title="Kéo chuột hoặc vuốt để xoay tương tác 3D"
      />

      {/* Floating HUD status indicator in top-left of canvas */}
      <div className="absolute top-3 left-3 z-20 pointer-events-none flex items-center space-x-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-orange-200/80 shadow-xs">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="text-[11px] font-mono font-bold text-slate-700">
          WebGL 3D Core • 60 FPS
        </span>
      </div>

      {/* Interactive Helper Hint in bottom center */}
      <div className="absolute bottom-3 inset-x-0 mx-auto w-fit z-20 pointer-events-none bg-orange-950/80 text-white backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-bold flex items-center space-x-1.5 shadow-sm border border-orange-500/30">
        <RotateCw className="w-3 h-3 text-orange-400 animate-spin" style={{ animationDuration: '4s' }} />
        <span>Kéo chuột / Chạm để xoay mô hình 3D</span>
      </div>

      {/* Radial soft glow behind the 3D globe */}
      <div className="absolute inset-0 m-auto w-64 h-64 rounded-full bg-gradient-to-r from-orange-500/20 via-amber-400/15 to-transparent blur-3xl pointer-events-none -z-0" />
    </div>
  );
};
