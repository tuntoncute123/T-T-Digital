'use client';

import React, { useState, useMemo } from 'react';
import { Button, Tag } from 'antd';
import { 
  Calculator, 
  Check, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Sliders, 
  Zap, 
  ShieldCheck,
  Gift
} from 'lucide-react';
import { HandDrawnMarker, AnimatedMarkerText } from './HandDrawnMarker';
import { PRICING_PACKAGES } from '../data/landingData';
import { GsapFloatingOrbs } from './GsapFloatingOrbs';
import { Interactive3DTilt } from './Interactive3DTilt';
import { GsapMagneticButton } from './GsapMagneticButton';

interface CostEstimatorProps {
  onRequestQuoteWithDetails: (details: {
    projectType: string;
    selectedAddons: string[];
    estimatedPrice: string;
    estimatedTime: string;
  }) => void;
}

interface ProjectTypeOption {
  id: string;
  name: string;
  basePrice: number;
  baseDays: number;
  description: string;
}

interface AddonOption {
  id: string;
  label: string;
  price: number;
  days: number;
  category: string;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onRequestQuoteWithDetails }) => {
  const projectTypes: ProjectTypeOption[] = [
    {
      id: 'landing-page',
      name: 'Thiết Kế Landing Page Tối Ưu Chuyển Đổi',
      basePrice: 1500000,
      baseDays: 3,
      description: 'Giao diện 1 trang duy nhất, cực kỳ sắc nét, tốc độ < 1s, chuẩn chuyển đổi chốt đơn và chạy Ads.'
    },
    {
      id: 'web-corporate',
      name: 'Website Doanh Nghiệp Chuẩn SEO',
      basePrice: 3500000,
      baseDays: 5,
      description: 'Thiết kế giao diện chuẩn thương hiệu, chuẩn SEO On-page Google, hiển thị mượt mà trên di động.'
    },
    {
      id: 'web-ecommerce',
      name: 'Website Bán Hàng & Sàn TMĐT (Tặng Kèm Hosting)',
      basePrice: 7000000,
      baseDays: 10,
      description: 'Trọn gói tặng Hosting tốc độ cao 1 năm, giỏ hàng, đồng bộ sàn Shopee & TikTok Shop, thanh toán online.'
    },
    {
      id: 'web-app',
      name: 'Web App / Nền Tảng Trực Tuyến (SaaS)',
      basePrice: 12000000,
      baseDays: 18,
      description: 'Hệ thống tương tác cao, phân quyền người dùng phức tạp, xử lý dữ liệu lớn trên nền tảng Cloud.'
    },
    {
      id: 'software-erp',
      name: 'Phần Mềm Quản Trị Nội Bộ (ERP / CRM)',
      basePrice: 18000000,
      baseDays: 25,
      description: 'Số hóa toàn diện kho bãi, nhân sự, công nợ và báo cáo dòng tiền theo quy trình riêng.'
    },
    {
      id: 'mobile-app',
      name: 'Ứng Dụng Di Động (iOS & Android)',
      basePrice: 16000000,
      baseDays: 20,
      description: 'App khách hàng thân thiết, đặt lịch, thông báo đẩy và mua sắm một chạm.'
    }
  ];

  const addonsList: AddonOption[] = [
    { id: 'payment', label: 'Cổng thanh toán Online (VNPay / MoMo / Visa)', price: 1200000, days: 2, category: 'Thanh toán' },
    { id: 'ecommerce-sync', label: 'Đồng bộ đơn hàng Shopee & TikTok Shop', price: 2000000, days: 2, category: 'Đa kênh' },
    { id: 'multilingual', label: 'Hỗ trợ Đa ngôn ngữ (Anh / Hàn / Nhật / Trung)', price: 1000000, days: 2, category: 'Mở rộng' },
    { id: 'sms-zalo', label: 'Tự động gửi thông báo SMS & Zalo ZNS', price: 1200000, days: 2, category: 'Chăm sóc' },
    { id: 'accounting-sync', label: 'Kết nối phần mềm kế toán (MISA / FAST)', price: 2500000, days: 3, category: 'Tích hợp' },
    { id: 'custom-figma', label: 'Thiết kế trọn bộ UI/UX độc quyền trên Figma', price: 1800000, days: 2, category: 'Giao diện' },
    { id: 'seo-audit', label: 'Gói tối ưu SEO On-page Google Chuyên sâu', price: 1500000, days: 2, category: 'Marketing' },
    { id: 'cloud-cluster', label: 'Hạ tầng Cloud chịu tải cao & Bảo mật chống DDoS', price: 1800000, days: 2, category: 'Hạ tầng' }
  ];

  const [selectedProjectId, setSelectedProjectId] = useState<string>('landing-page');
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([]);
  const [urgency, setUrgency] = useState<'standard' | 'express'>('standard');

  const selectedProject = useMemo(() => {
    return projectTypes.find((p) => p.id === selectedProjectId) || projectTypes[0];
  }, [selectedProjectId, projectTypes]);

  const toggleAddon = (id: string) => {
    setSelectedAddonIds((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculation = useMemo(() => {
    let price = selectedProject.basePrice;
    let days = selectedProject.baseDays;

    selectedAddonIds.forEach((addonId) => {
      const addon = addonsList.find((a) => a.id === addonId);
      if (addon) {
        price += addon.price;
        days += addon.days;
      }
    });

    if (urgency === 'express') {
      price = Math.round(price * 1.15); // 15% phụ phí đẩy nhanh tiến độ
      days = Math.max(3, Math.round(days * 0.7)); // Giảm 30% thời gian
    }

    const formattedPrice = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0
    }).format(price);

    return {
      price,
      days,
      formattedPrice,
      estimatedTime: `${days} - ${days + 3} ngày làm việc`
    };
  }, [selectedProject, selectedAddonIds, urgency, addonsList]);

  const handleSendQuote = () => {
    const selectedAddonLabels = selectedAddonIds.map((id) => {
      const found = addonsList.find((a) => a.id === id);
      return found ? found.label : id;
    });

    onRequestQuoteWithDetails({
      projectType: selectedProject.name,
      selectedAddons: selectedAddonLabels,
      estimatedPrice: calculation.formattedPrice,
      estimatedTime: calculation.estimatedTime
    });
  };

  const handleSelectPackageDirectly = (pkgId: string) => {
    if (pkgId === 'pkg-landing') {
      setSelectedProjectId('landing-page');
    } else if (pkgId === 'pkg-corporate') {
      setSelectedProjectId('web-corporate');
    } else if (pkgId === 'pkg-ecommerce') {
      setSelectedProjectId('web-ecommerce');
    } else if (pkgId === 'pkg-custom') {
      setSelectedProjectId('software-erp');
    }
    setSelectedAddonIds([]);
    
    // Smooth scroll to calculator
    const el = document.getElementById('custom-calculator-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cost-estimator" className="relative py-16 sm:py-24 bg-[#fffbf8] scroll-mt-20 overflow-hidden">
      {/* Dynamic ambient floating orbs in background */}
      <GsapFloatingOrbs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14" data-aos="fade-up">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-900 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-orange-600" />
            <span>BẢNG GIÁ DỊCH VỤ &amp; DỰ TOÁN THÔNG MINH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-snug">
            Bảng Báo Giá Minh Bạch{' '}
            <HandDrawnMarker color="text-[#ea580c]" variant="heroBottom" delay={0.2}>
              Tiết Kiệm 50%
            </HandDrawnMarker>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Chính sách giá trợ lực doanh nghiệp tối đa: Landing Page chỉ từ{' '}
            <AnimatedMarkerText markerColor="bg-yellow-300/80" delay={0.25}>
              1.500.000&nbsp;đ
            </AnimatedMarkerText>
            , Website bán hàng sàn TMĐT tặng kèm Hosting chỉ{' '}
            <AnimatedMarkerText markerColor="bg-orange-200/90" delay={0.35}>
              7.000.000&nbsp;đ
            </AnimatedMarkerText>
            , bàn giao trọn gói chìa khóa trao tay.
          </p>
        </div>

        {/* 1. Core Pricing Packages Cards (4 Columns with staggered AOS animation) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PRICING_PACKAGES.map((pkg, idx) => {
            const isHot = pkg.isPopular || pkg.id === 'pkg-ecommerce';
            return (
              <Interactive3DTilt
                key={pkg.id}
                maxTilt={6}
                scale={1.02}
                enableGlare={true}
                className="h-full"
              >
                <div
                  data-aos="fade-up"
                  data-aos-delay={idx * 120}
                  className={`h-full relative bg-white rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between hover-lift ${
                    isHot
                      ? 'border-orange-500 shadow-xl shadow-orange-500/15 ring-2 ring-orange-500/30'
                      : 'border-orange-100 shadow-sm hover:border-orange-300'
                  }`}
                >
                  {/* Popular or Special Badge */}
                  {pkg.badge && (
                    <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-black px-3.5 py-1 rounded-full shadow-sm whitespace-nowrap z-20 ${
                      isHot
                        ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white animate-pulse'
                        : 'bg-orange-100 text-orange-900 border border-orange-200'
                    }`}>
                      {pkg.badge}
                    </div>
                  )}

                  <div>
                    <div className="pt-2 mb-4">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug min-h-[48px] flex items-center">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed min-h-[42px] line-clamp-3">
                        {pkg.suitable}
                      </p>
                    </div>

                    {/* Price Banner */}
                    <div className="py-3.5 px-2.5 sm:px-3 rounded-2xl bg-orange-50/80 border border-orange-100 mb-5 text-center">
                      <span className="text-xl sm:text-2xl lg:text-xl xl:text-2xl font-black text-orange-600 tracking-tight block whitespace-nowrap">
                        {pkg.priceEstimate}
                      </span>
                      <span className="text-xs font-semibold text-slate-600 block mt-1">
                        {pkg.unit}
                      </span>
                    </div>

                    {/* Time Estimate */}
                    <div className="flex items-center text-xs font-bold text-slate-700 mb-4 px-1">
                      <Clock className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0" />
                      <span>Thời gian bàn giao: {pkg.timeEstimate}</span>
                    </div>

                    {/* Features list */}
                    <div className="space-y-2.5 mb-6 pt-3 border-t border-slate-100">
                      {pkg.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start text-xs sm:text-sm text-slate-700 leading-snug">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <Button
                      type={isHot ? 'primary' : 'default'}
                      block
                      onClick={() => handleSelectPackageDirectly(pkg.id)}
                      className={`rounded-xl font-bold h-11 text-sm flex items-center justify-center space-x-1.5 ${
                        isHot 
                          ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-md shadow-orange-500/20' 
                          : 'text-slate-800 hover:text-orange-600 hover:border-orange-500'
                      }`}
                    >
                      <span>Chọn Gói &amp; Tùy Biến</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Interactive3DTilt>
            );
          })}
        </div>

        {/* 2. Interactive Estimator Sub-header */}
        <div id="custom-calculator-form" className="text-center max-w-2xl mx-auto space-y-2 mb-10 pt-4 border-t border-orange-200/60" data-aos="fade-up">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase">
            <Sliders className="w-3.5 h-3.5 text-orange-600" />
            <span>TỰ ĐỘNG TÍNH TOÁN THEO NHU CẦU</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Tùy Biến Hạng Mục &amp; Xem Ngân Sách Tức Thì
          </h3>
          <p className="text-sm sm:text-base text-slate-600">
            Tích chọn loại dự án và các tính năng mở rộng bên dưới để hệ thống tính toán chi phí chính xác.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Selections (7 cols) */}
          <div className="lg:col-span-7 space-y-8" data-aos="fade-right">
            
            {/* Step 1: Choose Project Type */}
            <div className="space-y-3">
              <label className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>1. Chọn loại hình dự án bạn cần triển khai:</span>
                <span className="text-xs sm:text-sm text-orange-600 font-semibold">Bắt buộc</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {projectTypes.map((type) => {
                  const isSelected = selectedProjectId === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedProjectId(type.id)}
                      className={`text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-orange-500 bg-orange-50/70 shadow-sm ring-1 ring-orange-500'
                          : 'border-orange-100 hover:border-orange-300 bg-white'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="text-base font-bold text-slate-900 mb-1.5 block">
                          {type.name}
                        </span>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-orange-600 text-white flex items-center justify-center flex-shrink-0">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mb-2.5">
                        {type.description}
                      </p>
                      <span className="text-xs sm:text-sm font-bold text-orange-700">
                        Giá khởi điểm: từ {new Intl.NumberFormat('vi-VN').format(type.basePrice)} đ
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Choose Add-on Features */}
            <div className="space-y-3">
              <label className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>2. Chọn các tính năng mở rộng &amp; tích hợp nâng cao:</span>
                <span className="text-xs sm:text-sm text-slate-500 font-normal">Tùy chọn theo nhu cầu</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddonIds.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-start p-3.5 rounded-xl border transition-all cursor-pointer select-none ${
                        isChecked
                          ? 'border-orange-500 bg-orange-50/60 shadow-xs'
                          : 'border-orange-100 hover:border-orange-300 bg-white'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded mt-0.5 mr-3 flex items-center justify-center border flex-shrink-0 transition-colors ${
                        isChecked ? 'bg-orange-600 border-orange-600 text-white' : 'border-slate-300 bg-white'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div className="flex-1">
                        <span className="text-sm font-semibold text-slate-800 block leading-tight">
                          {addon.label}
                        </span>
                        <span className="text-xs sm:text-[13px] font-bold text-orange-600">
                          +{new Intl.NumberFormat('vi-VN').format(addon.price)} đ
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Priority & Timeline urgency */}
            <div className="space-y-3">
              <label className="text-base font-bold text-slate-900 block">
                3. Yêu cầu về thời gian bàn giao:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <button
                  onClick={() => setUrgency('standard')}
                  className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                    urgency === 'standard'
                      ? 'border-orange-600 bg-orange-50/70 ring-1 ring-orange-500'
                      : 'border-orange-100 bg-white hover:border-orange-300'
                  }`}
                >
                  <div className="font-bold text-sm text-slate-900 mb-1">Tiến Độ Tiêu Chuẩn (Khuyên dùng)</div>
                  <div className="text-xs sm:text-sm text-slate-500">Tối ưu chi phí, đảm bảo kiểm thử toàn diện từng bước.</div>
                </button>

                <button
                  onClick={() => setUrgency('express')}
                  className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                    urgency === 'express'
                      ? 'border-orange-600 bg-orange-50/70 ring-1 ring-orange-500'
                      : 'border-orange-100 bg-white hover:border-orange-300'
                  }`}
                >
                  <div className="font-bold text-sm text-slate-900 flex items-center justify-between mb-1">
                    <span>Tiến Độ Cần Gấp (Express)</span>
                    <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded font-bold">+15% Phí</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500">Huy động đội ngũ chuyên trách rút ngắn 30% thời gian.</div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Live Summary & Price Estimation (5 cols) */}
          <div className="lg:col-span-5" data-aos="fade-left">
            <div className="sticky top-28 bg-white rounded-3xl p-6 sm:p-8 text-slate-800 shadow-2xl shadow-orange-500/15 border-2 border-orange-200">
              
              <div className="flex items-center justify-between pb-4 border-b border-orange-100">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
                  Dự toán sơ bộ
                </span>
                <span className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full font-bold border border-emerald-200">
                  Thời gian thực
                </span>
              </div>

              {/* Price display */}
              <div className="py-5">
                <span className="text-sm text-slate-600 block mb-1 font-medium">Tổng chi phí ước tính trọn gói:</span>
                <div className="text-3xl sm:text-4xl font-black text-orange-600 tracking-tight whitespace-nowrap">
                  {calculation.formattedPrice}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  * Chưa bao gồm 8% thuế VAT (nếu xuất hóa đơn điện tử)
                </p>
              </div>

              {/* Key details list */}
              <div className="space-y-3.5 pt-3.5 border-t border-orange-100 mb-6 text-sm text-slate-700">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Loại dự án:</span>
                  <span className="font-bold text-slate-900 text-right max-w-[210px] truncate">{selectedProject.name}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Tính năng chọn thêm:</span>
                  <span className="font-bold text-orange-600">{selectedAddonIds.length} hạng mục</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Thời gian dự kiến:</span>
                  <span className="font-bold text-slate-900 flex items-center">
                    <Clock className="w-4 h-4 mr-1.5 text-orange-500" />
                    {calculation.estimatedTime}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Ưu đãi kèm theo:</span>
                  <span className="font-bold text-emerald-600 flex items-center">
                    <Gift className="w-4 h-4 mr-1 text-emerald-500" />
                    Tặng Hosting SSD &amp; SSL
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Chính sách bảo hành:</span>
                  <span className="font-bold text-emerald-600">12 - 24 Tháng miễn phí</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Bàn giao mã nguồn:</span>
                  <span className="font-bold text-slate-900">100% Trọn đời</span>
                </div>
              </div>

              {/* Action Button with GSAP Magnetic Hover Effect */}
              <GsapMagneticButton strength={0.2} textStrength={0.1} className="w-full">
                <Button
                  type="primary"
                  block
                  size="large"
                  onClick={handleSendQuote}
                  className="rounded-xl font-bold bg-orange-600 hover:bg-orange-700 text-white h-13 text-sm sm:text-base shadow-lg shadow-orange-500/25 flex items-center justify-center space-x-2"
                >
                  <span>Nhận Bản Báo Giá Đầy Đủ</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </GsapMagneticButton>

              <p className="text-xs text-slate-500 text-center mt-3 leading-relaxed">
                Kỹ sư T&amp;T Digital sẽ liên hệ phân tích chi tiết và tư vấn giải pháp tiết kiệm nhất cho bạn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
