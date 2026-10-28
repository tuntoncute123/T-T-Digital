'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button, Tag } from 'antd';
import gsap from 'gsap';
import { 
  ArrowRight, 
  Calculator, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Activity, 
  BarChart3, 
  Server, 
  Globe, 
  TrendingUp,
  Cpu,
  Layers,
  FileCode2,
  Box,
  Monitor
} from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';
import { HandDrawnMarker, AnimatedMarkerText } from './HandDrawnMarker';
import { GsapCounter } from './GsapCounter';
import { Interactive3DTilt } from './Interactive3DTilt';
import { GsapFloatingOrbs } from './GsapFloatingOrbs';
import { ThreeTechGlobe } from './ThreeTechGlobe';
import { GsapMagneticButton } from './GsapMagneticButton';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onScrollToEstimator: () => void;
  onScrollToProjects: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onScrollToEstimator,
  onScrollToProjects,
}) => {
  const [showcaseMode, setShowcaseMode] = useState<'3d' | 'mockup'>('3d');
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP entrance stagger animation for Hero elements
    const ctx = gsap.context(() => {
      gsap.from('.gsap-hero-item', {
        y: 28,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power3.out',
        clearProps: 'all',
      });
    }, heroContentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden tech-mesh-bg pt-8 sm:pt-14 pb-16 sm:pb-24 border-b border-orange-200/60">
      {/* Dynamic GSAP ambient floating background orbs */}
      <GsapFloatingOrbs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Value Proposition with GSAP entrance */}
          <div ref={heroContentRef} className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top pill badge */}
            <div className="gsap-hero-item inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-900 text-xs font-bold tracking-wide uppercase shadow-xs border border-orange-200/90">
              <span className="w-2 h-2 rounded-full bg-orange-600 animate-ping" />
              <span>ĐỐI TÁC CÔNG NGHỆ CHIẾN LƯỢC</span>
              <span className="text-orange-300">•</span>
              <span className="text-orange-700 font-semibold">T&amp;T DIGITAL</span>
            </div>

            {/* Main Headline with organic hand-drawn markers & animated sweeps */}
            <h1 className="gsap-hero-item text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-black text-slate-900 tracking-tight leading-[1.28] sm:leading-[1.25]">
              Kiến Tạo{' '}
              <HandDrawnMarker color="text-[#ea580c]" variant="heroTop" delay={0.15}>
                Website Chuẩn SEO
              </HandDrawnMarker>
              <br className="hidden sm:inline" />
              {' '}&amp; Giải Pháp Phần Mềm{' '}
              <HandDrawnMarker color="text-[#f97316]" variant="heroBottom" delay={0.35}>
                Đột Phá Doanh Thu
              </HandDrawnMarker>
            </h1>

            {/* Subtitle with colored highlighter strokes */}
            <p className="gsap-hero-item text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              T&amp;T Digital đồng hành cùng doanh nghiệp từ{' '}
              <AnimatedMarkerText markerColor="bg-yellow-300/80" delay={0.4}>
                phân tích nghiệp vụ chuyên sâu
              </AnimatedMarkerText>
              , thiết kế giao diện UI/UX độc quyền đến xây dựng nền tảng phần mềm quản trị (ERP/CRM), Web App &amp; Mobile App{' '}
              <AnimatedMarkerText markerColor="bg-orange-200/90" delay={0.55}>
                tối ưu 40% chi phí vận hành
              </AnimatedMarkerText>
              .
            </p>

            {/* Action Buttons with GSAP Magnetic Hover Effect */}
            <div className="gsap-hero-item flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <GsapMagneticButton strength={0.25} textStrength={0.15}>
                <Button
                  type="primary"
                  size="large"
                  onClick={onOpenConsultation}
                  className="rounded-xl font-bold bg-orange-600 hover:bg-orange-700 h-12 px-7 text-base shadow-md shadow-orange-500/25 flex items-center space-x-2"
                >
                  <span>Nhận Tư Vấn &amp; Báo Giá Ngay</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </GsapMagneticButton>

              <GsapMagneticButton strength={0.2} textStrength={0.1}>
                <button
                  onClick={onScrollToEstimator}
                  className="flex items-center space-x-2 px-6 h-12 rounded-xl bg-white hover:bg-orange-50/50 border border-orange-200 text-slate-800 font-bold text-sm sm:text-base transition-all duration-200 shadow-xs hover:shadow cursor-pointer"
                >
                  <Calculator className="w-4 h-4 text-orange-600" />
                  <span>Dự Toán Chi Phí (30s)</span>
                </button>
              </GsapMagneticButton>

              <button
                onClick={onScrollToProjects}
                className="flex items-center space-x-2 px-5 h-12 rounded-xl bg-orange-50/80 hover:bg-orange-100 text-orange-800 font-bold text-sm transition-all border border-orange-200 cursor-pointer"
              >
                <Layers className="w-4 h-4 text-orange-600" />
                <span>Xem Dự Án Đã Làm</span>
              </button>
            </div>

            {/* Core Commitments List */}
            <div className="gsap-hero-item pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-600 font-medium">
              <span className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-1.5 flex-shrink-0" />
                Bàn giao 100% mã nguồn sở hữu
              </span>
              <span className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-1.5 flex-shrink-0" />
                Bảo hành chu đáo 12 - 24 tháng
              </span>
              <span className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-1.5 flex-shrink-0" />
                Tối ưu tốc độ tải trang &lt; 0.8s
              </span>
            </div>
          </div>

          {/* Right Column: Interactive 3D WebGL Tech Core Showcase with Three.js & GSAP Tilt */}
          <div className="lg:col-span-5 relative" data-aos="fade-left">
            
            {/* Floating Top Pill */}
            <div className="absolute -top-5 -left-4 sm:-left-6 z-20 bg-white/95 backdrop-blur-md px-4.5 py-2.5 rounded-2xl shadow-lg border border-slate-100 flex items-center space-x-2.5 animate-float">
              <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 leading-none mb-0.5">Tối Ưu Tốc Độ</p>
                <p className="text-sm font-black text-emerald-600">Google PageSpeed 99/100</p>
              </div>
            </div>

            {/* Floating Bottom Pill */}
            <div className="absolute -bottom-5 -right-2 sm:-right-4 z-20 bg-white/95 backdrop-blur-md px-4.5 py-2.5 rounded-2xl shadow-lg border border-orange-100 flex items-center space-x-2.5 animate-float-reverse">
              <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 leading-none mb-0.5">Hạ Tầng Điện Toán Đám Mây</p>
                <p className="text-sm font-black text-orange-700">Cam kết Uptime 99.98%</p>
              </div>
            </div>

            {/* Central Visual Showcase: 3D Tech Architecture with GSAP interactive mouse perspective */}
            <Interactive3DTilt maxTilt={7} scale={1.015} enableGlare={true}>
              <div className="relative rounded-3xl bg-white/95 backdrop-blur-xl p-3.5 sm:p-4 shadow-2xl shadow-orange-500/15 border border-orange-200/90 overflow-hidden group">
                
                {/* Browser-like window header bar with view toggle */}
                <div className="flex items-center justify-between px-3.5 py-2.5 mb-2.5 bg-orange-50/70 rounded-2xl border border-orange-100/80">
                  <div className="flex items-center space-x-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-400" />
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-400" />
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-400" />
                    <span className="text-xs sm:text-sm font-mono text-slate-500 pl-1 hidden sm:inline">tt-digital-system.live</span>
                  </div>

                  {/* Mode switcher tabs: 3D Core vs Mockup */}
                  <div className="flex items-center p-1 bg-white/90 rounded-xl border border-orange-200/70 shadow-xs">
                    <button
                      onClick={() => setShowcaseMode('3d')}
                      className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        showcaseMode === '3d'
                          ? 'bg-orange-600 text-white shadow-xs'
                          : 'text-slate-600 hover:text-orange-600'
                      }`}
                    >
                      <Box className="w-3.5 h-3.5" />
                      <span>3D WebGL</span>
                    </button>
                    <button
                      onClick={() => setShowcaseMode('mockup')}
                      className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        showcaseMode === 'mockup'
                          ? 'bg-orange-600 text-white shadow-xs'
                          : 'text-slate-600 hover:text-orange-600'
                      }`}
                    >
                      <Monitor className="w-3.5 h-3.5" />
                      <span>Giao Diện</span>
                    </button>
                  </div>
                </div>

                {/* Showcase Content: Either 3D Three.js Tech Core or Image Showcase */}
                <div className="relative rounded-2xl overflow-hidden shadow-xs border border-orange-100/70 bg-gradient-to-b from-orange-50/50 via-white to-orange-50/30 min-h-[300px] sm:min-h-[340px] flex items-center justify-center">
                  {showcaseMode === '3d' ? (
                    <ThreeTechGlobe />
                  ) : (
                    <img
                      src="/hero-showcase.jpg"
                      alt="T&T Digital Giải Pháp Phần Mềm & Thiết Kế Website"
                      className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  )}
                </div>

                {/* Bottom micro metrics bar */}
                <div className="mt-3.5 px-2 flex flex-wrap items-center justify-between text-xs sm:text-sm font-semibold text-slate-700 gap-2">
                  <div className="flex items-center space-x-1.5 text-orange-800">
                    <Activity className="w-4 h-4 text-orange-600 flex-shrink-0 animate-pulse" />
                    <span>Kiến Trúc Microservices &amp; API Chuẩn Quốc Tế</span>
                  </div>
                  <div className="flex items-center space-x-1 text-emerald-600 font-bold">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Bảo Mật Đa Tầng</span>
                  </div>
                </div>
              </div>
            </Interactive3DTilt>
          </div>
        </div>

        {/* Impressive Stats Bar with GSAP animated counter & 3D Tilt Cards */}
        <div className="mt-14 sm:mt-20 pt-10 border-t border-orange-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <Interactive3DTilt maxTilt={6} scale={1.03} enableGlare={false}>
            <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-xs border border-orange-100 shadow-xs" data-aos="fade-up" data-aos-delay="100">
              <div className="text-3xl sm:text-4xl font-black text-orange-600 mb-1">
                <GsapCounter end={350} suffix="+" />
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-800">Dự Án Đã Bàn Giao</div>
              <div className="text-xs sm:text-sm text-slate-500">Website &amp; Phần mềm hoàn thành</div>
            </div>
          </Interactive3DTilt>

          <Interactive3DTilt maxTilt={6} scale={1.03} enableGlare={false}>
            <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-xs border border-orange-100 shadow-xs" data-aos="fade-up" data-aos-delay="200">
              <div className="text-3xl sm:text-4xl font-black text-amber-600 mb-1">
                <GsapCounter end={99.2} decimals={1} suffix="%" />
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-800">Khách Hàng Hài Lòng</div>
              <div className="text-xs sm:text-sm text-slate-500">Đánh giá 5 sao về chất lượng</div>
            </div>
          </Interactive3DTilt>

          <Interactive3DTilt maxTilt={6} scale={1.03} enableGlare={false}>
            <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-xs border border-orange-100 shadow-xs" data-aos="fade-up" data-aos-delay="300">
              <div className="text-3xl sm:text-4xl font-black text-orange-600 mb-1">
                <GsapCounter end={10} suffix="+ Năm" />
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-800">Kinh Nghiệm Đội Ngũ</div>
              <div className="text-xs sm:text-sm text-slate-500">Kỹ sư công nghệ cấp cao</div>
            </div>
          </Interactive3DTilt>

          <Interactive3DTilt maxTilt={6} scale={1.03} enableGlare={false}>
            <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-xs border border-orange-100 shadow-xs" data-aos="fade-up" data-aos-delay="400">
              <div className="text-3xl sm:text-4xl font-black text-emerald-600 mb-1">
                <GsapCounter end={15} suffix=" Phút" />
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-800">Cam Kết Phản Hồi</div>
              <div className="text-xs sm:text-sm text-slate-500">Hỗ trợ kỹ thuật 24/7/365</div>
            </div>
          </Interactive3DTilt>
        </div>
      </div>
    </section>
  );
};
