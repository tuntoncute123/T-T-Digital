'use client';

import React, { useState, useEffect } from 'react';
import { Button, Drawer } from 'antd';
import { 
  Phone, 
  Menu as MenuIcon, 
  X, 
  ArrowRight, 
  ChevronRight 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';

interface NavbarProps {
  onOpenConsultation: () => void;
  onScrollToEstimator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenConsultation,
  onScrollToEstimator 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section in viewport
      const sections = ['services', 'solutions', 'process', 'cost-estimator', 'projects', 'why-us', 'testimonials', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Dịch Vụ', id: 'services' },
    { label: 'Giải Pháp Số', id: 'solutions' },
    { label: 'Quy Trình', id: 'process' },
    { label: 'Dự Toán Chi Phí', id: 'cost-estimator' },
    { label: 'Dự Án', id: 'projects' },
    { label: 'Vì Sao Chọn T&T', id: 'why-us' },
    { label: 'Đánh Giá', id: 'testimonials' },
  ];

  return (
    <>
      {/* Main Navigation Bar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'glass-nav shadow-md py-3' 
            : 'bg-[#fffaf5]/95 backdrop-blur-md py-4 border-b border-orange-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo Brand */}
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center cursor-pointer select-none group py-1"
            >
              <img
                src="/logo.png"
                alt="T&T Digital Logo"
                className="h-9 sm:h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all relative cursor-pointer ${
                      isActive
                        ? 'text-orange-600 bg-orange-50 font-bold'
                        : 'text-slate-600 hover:text-orange-600 hover:bg-orange-50/50'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href={`tel:${COMPANY_INFO.hotline.replace(/\./g, '')}`}
                className="hidden xl:flex items-center space-x-2 px-3 py-2 text-slate-700 hover:text-orange-600 text-sm font-semibold transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{COMPANY_INFO.hotline}</span>
              </a>

              <Button
                type="primary"
                size="large"
                onClick={onOpenConsultation}
                className="rounded-xl font-bold bg-orange-600 hover:bg-orange-700 h-11 px-6 shadow-sm shadow-orange-500/20 flex items-center space-x-2"
              >
                <span>Nhận Tư Vấn Dự Án</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <div className="flex lg:hidden items-center space-x-2">
              <Button
                type="primary"
                size="small"
                onClick={onOpenConsultation}
                className="rounded-lg text-xs font-bold bg-orange-600"
              >
                Tư Vấn
              </Button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-orange-50 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <Drawer
        title={
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="T&T Digital Logo"
              className="h-8 w-auto object-contain"
            />
          </div>
        }
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        styles={{ body: { padding: '16px' } }}
      >
        <div className="flex flex-col space-y-2">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="flex items-center justify-between p-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors text-left"
            >
              <span>{item.label}</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          ))}

          <div className="pt-6 border-t border-slate-100 space-y-3">
            <div className="p-3 bg-orange-50 rounded-xl space-y-1 border border-orange-100">
              <span className="text-xs font-bold text-orange-800 block">Hotline tư vấn 24/7:</span>
              <a href={`tel:${COMPANY_INFO.hotline.replace(/\./g, '')}`} className="text-base font-black text-orange-600 block">
                {COMPANY_INFO.hotline}
              </a>
              <span className="text-xs text-slate-500 block">{COMPANY_INFO.workingHours}</span>
            </div>

            <Button
              type="primary"
              block
              size="large"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="rounded-xl font-bold bg-orange-600 hover:bg-orange-700 h-11"
            >
              Yêu Cầu Báo Giá Ngay
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};
