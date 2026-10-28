'use client';

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Calculator, 
  ArrowUp, 
  FileText 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';
import { GsapMagneticButton } from './GsapMagneticButton';

interface FloatingSideCTAProps {
  onOpenConsultation: () => void;
  onScrollToEstimator: () => void;
}

export const FloatingSideCTA: React.FC<FloatingSideCTAProps> = ({
  onOpenConsultation,
  onScrollToEstimator
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Fixed Side Buttons with GSAP Magnetic Effect */}
      <aside 
        aria-label="Liên hệ nhanh"
        className="hidden md:flex fixed right-4 bottom-8 z-40 flex-col items-end space-y-3 pointer-events-auto"
      >
        {/* Estimator Quick Launch */}
        <GsapMagneticButton strength={0.3} textStrength={0.15}>
          <button
            onClick={onScrollToEstimator}
            className="group flex items-center bg-white text-slate-800 p-2.5 rounded-2xl shadow-lg border border-slate-200/90 hover:border-orange-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
            title="Ước tính chi phí dự án"
          >
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold text-orange-600 px-0 group-hover:px-2">
              Tính giá dự án
            </span>
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <Calculator className="w-5 h-5" />
            </div>
          </button>
        </GsapMagneticButton>

        {/* Consultation Form Quick Trigger */}
        <GsapMagneticButton strength={0.3} textStrength={0.15}>
          <button
            onClick={onOpenConsultation}
            className="group flex items-center bg-white text-slate-800 p-2.5 rounded-2xl shadow-lg border border-slate-200/90 hover:border-orange-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
            title="Nhận tư vấn miễn phí"
          >
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold text-orange-600 px-0 group-hover:px-2">
              Nhận tư vấn
            </span>
            <div className="w-10 h-10 rounded-xl bg-orange-100/70 text-orange-700 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <FileText className="w-5 h-5" />
            </div>
          </button>
        </GsapMagneticButton>

        {/* Zalo Direct Chat */}
        <GsapMagneticButton strength={0.3} textStrength={0.15}>
          <a
            href="https://zalo.me/0849632852"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center bg-white text-slate-800 p-2.5 rounded-2xl shadow-lg border border-slate-200/90 hover:border-orange-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
            title="Chat Zalo hỗ trợ"
          >
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold text-orange-600 px-0 group-hover:px-2">
              Chat Zalo
            </span>
            <div className="w-10 h-10 rounded-xl bg-sky-500 text-white font-black text-xs flex items-center justify-center shadow-xs">
              Zalo
            </div>
          </a>
        </GsapMagneticButton>

        {/* Hotline Ring */}
        <GsapMagneticButton strength={0.3} textStrength={0.15}>
          <a
            href={`tel:${COMPANY_INFO.hotline.replace(/\./g, '')}`}
            className="group flex items-center bg-orange-600 text-white p-2.5 rounded-2xl shadow-xl shadow-orange-500/30 hover:bg-orange-700 transition-all duration-300 cursor-pointer"
            title="Gọi Hotline 24/7"
          >
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold text-white px-0 group-hover:px-2">
              {COMPANY_INFO.hotline}
            </span>
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Phone className="w-5 h-5 animate-pulse" />
            </div>
          </a>
        </GsapMagneticButton>

        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg hover:bg-slate-800 transition-all cursor-pointer"
            title="Lên đầu trang"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </aside>

      {/* Mobile Bottom Fixed Quick Actions Bar */}
      <nav 
        aria-label="Liên hệ di động"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2.5 px-3.5 shadow-2xl flex items-center justify-between"
      >
        <a
          href={`tel:${COMPANY_INFO.hotline.replace(/\./g, '')}`}
          className="flex-1 mr-2 flex items-center justify-center space-x-1.5 py-3 rounded-xl bg-slate-100 text-slate-800 text-sm font-bold active:bg-slate-200 transition-colors"
        >
          <Phone className="w-4 h-4 text-orange-600" />
          <span>Gọi Hotline</span>
        </a>

        <button
          onClick={onScrollToEstimator}
          className="flex-1 mr-2 flex items-center justify-center space-x-1.5 py-3 rounded-xl bg-orange-50 text-orange-800 border border-orange-200/60 text-sm font-bold active:bg-orange-100 transition-colors"
        >
          <Calculator className="w-4 h-4" />
          <span>Dự Toán</span>
        </button>

        <button
          onClick={onOpenConsultation}
          className="flex-1 flex items-center justify-center space-x-1.5 py-3 rounded-xl bg-orange-600 text-white text-sm font-bold active:bg-orange-700 transition-colors shadow-xs shadow-orange-500/25"
        >
          <span>Báo Giá</span>
        </button>
      </nav>
    </>
  );
};
