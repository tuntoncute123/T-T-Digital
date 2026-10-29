'use client';

import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Cpu, 
  ShieldCheck, 
  Server, 
  Database, 
  Globe, 
  Layers, 
  Activity, 
  Sparkles,
  ArrowUpRight,
  RefreshCw,
  Terminal,
  Lock,
  Cloud
} from 'lucide-react';

export const HeroMotionGraphic: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'flow' | 'metrics'>('overview');
  const [trafficBoost, setTrafficBoost] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [liveReqCount, setLiveReqCount] = useState(14820);
  const [latency, setLatency] = useState(18);

  // Dynamic simulation ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveReqCount((prev) => prev + Math.floor(Math.random() * 8) + 1);
      if (trafficBoost) {
        setLatency((prev) => Math.max(12, Math.min(24, prev + (Math.random() > 0.5 ? 1 : -1))));
      } else {
        setLatency((prev) => Math.max(16, Math.min(22, prev + (Math.random() > 0.5 ? 1 : -1))));
      }
    }, 1800);
    return () => clearInterval(interval);
  }, [trafficBoost]);

  const triggerBoost = () => {
    setTrafficBoost(true);
    setTimeout(() => {
      setTrafficBoost(false);
    }, 4500);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-3.5 sm:p-5 select-none overflow-hidden relative font-sans">
      {/* Background radial ambient lights */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-orange-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top HUD Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3 border-b border-orange-200/70 z-10">
        <div className="flex items-center space-x-2.5">
          <div className="relative flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="absolute w-4 h-4 rounded-full bg-emerald-400/60 animate-ping" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Hệ Thống Trực Tuyến</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold border border-emerald-200/80">
                99.98%
              </span>
            </div>
            <p className="text-[11px] font-mono text-slate-500">
              Độ trễ: <span className="font-bold text-orange-600">{latency}ms</span> • Tải: <span className="font-bold text-slate-700">{trafficBoost ? '84%' : '26%'}</span>
            </p>
          </div>
        </div>

        {/* Action Button: Simulate Traffic Surge */}
        <button
          onClick={triggerBoost}
          disabled={trafficBoost}
          className={`group flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer border ${
            trafficBoost 
              ? 'bg-orange-500 text-white border-orange-600 animate-pulse'
              : 'bg-white hover:bg-orange-50 text-orange-700 border-orange-200 hover:border-orange-300'
          }`}
          title="Kích hoạt mô phỏng dòng lưu lượng tải cao"
        >
          <Sparkles className={`w-3.5 h-3.5 ${trafficBoost ? 'animate-spin' : 'text-orange-500'}`} />
          <span>{trafficBoost ? 'Đang Tăng Tải...' : 'Mô Phỏng Lưu Lượng'}</span>
        </button>
      </div>

      {/* Main Interactive SVG Motion Graphic Board */}
      <div className="relative my-2 sm:my-3 flex-1 flex items-center justify-center">
        <svg
          viewBox="0 0 720 380"
          className="w-full h-auto max-h-[340px] drop-shadow-sm overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Glowing Gradients */}
            <linearGradient id="primaryOrangeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ea580c" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#f97316" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="circuitLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#ea580c" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#fed7aa" stopOpacity="0.4" />
            </linearGradient>

            <linearGradient id="chartFillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ea580c" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0.0" />
            </linearGradient>

            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Pattern for background cyber grid */}
            <pattern id="smallGrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#fdba74" strokeWidth="0.5" strokeOpacity="0.25" />
            </pattern>
          </defs>

          {/* Background grid */}
          <rect width="720" height="380" fill="url(#smallGrid)" rx="16" />

          {/* ================= BACKGROUND CIRCUIT HIGHWAYS ================= */}
          {/* Path 1: Client to Gateway */}
          <path
            d="M 150 190 C 230 190, 250 190, 310 190"
            fill="none"
            stroke="#fed7aa"
            strokeWidth="2.5"
            strokeDasharray="4 4"
          />

          {/* Path 2: Gateway to Top Service (AI / Cloud) */}
          <path
            d="M 410 190 C 470 190, 480 100, 560 100"
            fill="none"
            stroke="#fed7aa"
            strokeWidth="2.5"
            strokeDasharray="4 4"
          />

          {/* Path 3: Gateway to Middle Service (Database / Core) */}
          <path
            d="M 410 190 L 560 190"
            fill="none"
            stroke="#fed7aa"
            strokeWidth="2.5"
            strokeDasharray="4 4"
          />

          {/* Path 4: Gateway to Bottom Service (Security & CDN) */}
          <path
            d="M 410 190 C 470 190, 480 280, 560 280"
            fill="none"
            stroke="#fed7aa"
            strokeWidth="2.5"
            strokeDasharray="4 4"
          />

          {/* ================= ANIMATED DATA STREAM PACKETS ================= */}
          {/* Fast Moving Energy Pulses */}
          <g>
            {/* Packet 1: Left to Center */}
            <circle r={trafficBoost ? "4.5" : "3.5"} fill="#ea580c" filter="url(#softGlow)">
              <animateMotion
                path="M 150 190 C 230 190, 250 190, 310 190"
                dur={trafficBoost ? "0.9s" : "2.2s"}
                repeatCount="indefinite"
              />
            </circle>
            <circle r={trafficBoost ? "4.5" : "3.5"} fill="#f59e0b" filter="url(#softGlow)">
              <animateMotion
                path="M 150 190 C 230 190, 250 190, 310 190"
                dur={trafficBoost ? "0.9s" : "2.2s"}
                begin="0.7s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Packet 2: Center to Top Service */}
            <circle r={trafficBoost ? "4" : "3"} fill="#ea580c" filter="url(#softGlow)">
              <animateMotion
                path="M 410 190 C 470 190, 480 100, 560 100"
                dur={trafficBoost ? "1.0s" : "2.4s"}
                repeatCount="indefinite"
              />
            </circle>

            {/* Packet 3: Center to Middle */}
            <circle r={trafficBoost ? "4" : "3"} fill="#f97316" filter="url(#softGlow)">
              <animateMotion
                path="M 410 190 L 560 190"
                dur={trafficBoost ? "0.8s" : "2.0s"}
                begin="0.4s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Packet 4: Center to Bottom */}
            <circle r={trafficBoost ? "4" : "3"} fill="#10b981" filter="url(#softGlow)">
              <animateMotion
                path="M 410 190 C 470 190, 480 280, 560 280"
                dur={trafficBoost ? "1.1s" : "2.6s"}
                begin="0.8s"
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* ================= 1. NODE: CLIENT LAYER (Frontend & Mobile) ================= */}
          <g 
            className="cursor-pointer transition-transform duration-300 hover:scale-105"
            onMouseEnter={() => setHoveredNode('client')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            {/* Outer halo */}
            <rect
              x="50"
              y="125"
              width="100"
              height="130"
              rx="16"
              fill="#ffffff"
              stroke={hoveredNode === 'client' ? '#ea580c' : '#fed7aa'}
              strokeWidth="2"
              className="transition-colors shadow-sm"
            />
            {/* Browser top dots */}
            <circle cx="70" cy="143" r="3" fill="#f87171" />
            <circle cx="80" cy="143" r="3" fill="#fbbf24" />
            <circle cx="90" cy="143" r="3" fill="#34d399" />

            {/* Wireframe UI blocks */}
            <rect x="66" y="157" width="68" height="8" rx="3" fill="#fdba74" opacity="0.6" />
            <rect x="66" y="171" width="32" height="24" rx="4" fill="#ffedd5" />
            <rect x="102" y="171" width="32" height="24" rx="4" fill="#ffedd5" />
            <rect x="66" y="202" width="68" height="6" rx="2" fill="#fed7aa" opacity="0.5" />
            <rect x="66" y="213" width="50" height="6" rx="2" fill="#fed7aa" opacity="0.5" />

            {/* Ping indicator */}
            <rect x="66" y="228" width="68" height="16" rx="5" fill="#ea580c" />
            <text x="100" y="239" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="sans-serif">
              UI/UX REACT
            </text>

            {/* Label below */}
            <text x="100" y="272" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="700">
              Web &amp; App UI
            </text>
            <text x="100" y="287" textAnchor="middle" fill="#64748b" fontSize="10">
              Next.js 16 Turbo
            </text>
          </g>

          {/* ================= 2. CENTRAL NODE: API GATEWAY & MICROSERVICES ================= */}
          <g 
            className="cursor-pointer transition-transform duration-300"
            onMouseEnter={() => setHoveredNode('core')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            {/* Radar Pulsing concentric circles */}
            <circle cx="360" cy="190" r="68" fill="none" stroke="#ea580c" strokeWidth="1" strokeOpacity="0.25">
              <animate attributeName="r" values="50;75;50" dur="4s" repeatCount="indefinite" />
              <animate attributeName="stroke-opacity" values="0.3;0.05;0.3" dur="4s" repeatCount="indefinite" />
            </circle>

            <circle cx="360" cy="190" r="54" fill="none" stroke="#f97316" strokeWidth="1.5" strokeOpacity="0.4">
              <animate attributeName="r" values="46;62;46" dur="3s" repeatCount="indefinite" />
            </circle>

            {/* Rotating Gear/Tech Ring */}
            <g transform="translate(360, 190)">
              <circle r="44" fill="#ffffff" stroke="#ea580c" strokeWidth="2.5" />
              <circle r="40" fill="none" stroke="#fed7aa" strokeWidth="2" strokeDasharray="8 6">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0"
                  to="360"
                  dur="12s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>

            {/* Center Core Chip Icon */}
            <rect
              x="338"
              y="168"
              width="44"
              height="44"
              rx="12"
              fill="url(#primaryOrangeGlow)"
              className="drop-shadow-md"
            />
            {/* Microchip Pins */}
            <path
              d="M 334 178 L 338 178 M 334 190 L 338 190 M 334 202 L 338 202 M 382 178 L 386 178 M 382 190 L 386 190 M 382 202 L 386 202"
              stroke="#ea580c"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Inner icon text */}
            <text x="360" y="194" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="900" fontFamily="sans-serif">
              T&amp;T
            </text>

            {/* Core Label */}
            <text x="360" y="258" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="800">
              API Gateway Core
            </text>
            <text x="360" y="274" textAnchor="middle" fill="#ea580c" fontSize="10.5" fontWeight="700">
              Microservices Engine
            </text>
          </g>

          {/* ================= 3. RIGHT NODE TOP: AI & CLOUD SCALING ================= */}
          <g 
            className="cursor-pointer transition-transform duration-300 hover:scale-105"
            onMouseEnter={() => setHoveredNode('ai')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <rect
              x="560"
              y="60"
              width="120"
              height="68"
              rx="14"
              fill="#ffffff"
              stroke={hoveredNode === 'ai' ? '#ea580c' : '#fed7aa'}
              strokeWidth="2"
              className="transition-colors shadow-sm"
            />
            <rect x="572" y="72" width="28" height="28" rx="8" fill="#ffedd5" />
            <path
              d="M 586 78 C 582 78 579 81 579 85 C 579 89 582 92 586 92 C 590 92 593 89 593 85 C 593 81 590 78 586 78 Z"
              fill="#ea580c"
            />
            <text x="608" y="85" fill="#0f172a" fontSize="11" fontWeight="700">
              Cloud AI &amp; Sync
            </text>
            <text x="608" y="98" fill="#16a34a" fontSize="9.5" fontWeight="600">
              Auto-Scaling (Active)
            </text>
            {/* Sparkle ping */}
            <circle cx="664" cy="74" r="3" fill="#10b981" />
          </g>

          {/* ================= 4. RIGHT NODE MIDDLE: HIGH-SPEED DATABASE ================= */}
          <g 
            className="cursor-pointer transition-transform duration-300 hover:scale-105"
            onMouseEnter={() => setHoveredNode('db')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <rect
              x="560"
              y="156"
              width="120"
              height="68"
              rx="14"
              fill="#ffffff"
              stroke={hoveredNode === 'db' ? '#ea580c' : '#fed7aa'}
              strokeWidth="2"
              className="transition-colors shadow-sm"
            />
            <rect x="572" y="168" width="28" height="28" rx="8" fill="#ffedd5" />
            {/* Database cylinder stack */}
            <ellipse cx="586" cy="177" rx="8" ry="3" fill="#ea580c" />
            <path d="M 578 177 L 578 187 C 578 190 594 190 594 187 L 594 177 Z" fill="#f97316" />
            <text x="608" y="181" fill="#0f172a" fontSize="11" fontWeight="700">
              Cơ Sở Dữ Liệu
            </text>
            <text x="608" y="195" fill="#ea580c" fontSize="9.5" fontWeight="600">
              PostgreSQL / Redis
            </text>
          </g>

          {/* ================= 5. RIGHT NODE BOTTOM: SECURITY & WAF ================= */}
          <g 
            className="cursor-pointer transition-transform duration-300 hover:scale-105"
            onMouseEnter={() => setHoveredNode('sec')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <rect
              x="560"
              y="250"
              width="120"
              height="68"
              rx="14"
              fill="#ffffff"
              stroke={hoveredNode === 'sec' ? '#ea580c' : '#fed7aa'}
              strokeWidth="2"
              className="transition-colors shadow-sm"
            />
            <rect x="572" y="262" width="28" height="28" rx="8" fill="#ecfdf5" />
            {/* Shield Icon */}
            <path
              d="M 586 268 L 592 271 L 592 277 C 592 281 586 284 586 284 C 586 284 580 281 580 277 L 580 271 Z"
              fill="#10b981"
            />
            <text x="608" y="275" fill="#0f172a" fontSize="11" fontWeight="700">
              Bảo Mật Đa Tầng
            </text>
            <text x="608" y="289" fill="#059669" fontSize="9.5" fontWeight="600">
              SSL / WAF Shield
            </text>
          </g>

          {/* ================= REVENUE / SPEED GROWTH CURVE AT BOTTOM ================= */}
          <g opacity="0.85">
            {/* Animated Bezier Growth Curve */}
            <path
              d="M 40 355 Q 200 345, 340 310 T 680 260"
              fill="none"
              stroke="#ea580c"
              strokeWidth="2.5"
              strokeDasharray="600"
              strokeDashoffset="0"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="600;0"
                dur="2.5s"
                fill="freeze"
              />
            </path>
            {/* Shaded Area under curve */}
            <path
              d="M 40 355 Q 200 345, 340 310 T 680 260 L 680 375 L 40 375 Z"
              fill="url(#chartFillGrad)"
            />

            {/* Growth Pill floating at curve climax */}
            <g transform="translate(560, 318)">
              <rect x="0" y="0" width="126" height="26" rx="13" fill="#ea580c" />
              <text x="63" y="17" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="bold">
                ▲ +140% Tăng Tốc Xử Lý
              </text>
            </g>
          </g>
        </svg>
      </div>

      {/* Interactive Bottom Infobar with Real-time metrics */}
      <div className="grid grid-cols-3 gap-2 pt-2.5 border-t border-orange-100 text-center">
        <div className="bg-orange-50/80 rounded-xl py-1.5 px-2 border border-orange-100/90">
          <p className="text-[10px] sm:text-xs font-semibold text-slate-500">Tổng Request</p>
          <p className="text-xs sm:text-sm font-black text-slate-800 font-mono">
            {liveReqCount.toLocaleString()}
          </p>
        </div>

        <div className="bg-orange-50/80 rounded-xl py-1.5 px-2 border border-orange-100/90">
          <p className="text-[10px] sm:text-xs font-semibold text-slate-500">Tốc Độ Tải</p>
          <p className="text-xs sm:text-sm font-black text-emerald-600 font-mono">
            &lt; 0.68s (Google 99)
          </p>
        </div>

        <div className="bg-orange-50/80 rounded-xl py-1.5 px-2 border border-orange-100/90">
          <p className="text-[10px] sm:text-xs font-semibold text-slate-500">Mã Nguồn Bàn Giao</p>
          <p className="text-xs sm:text-sm font-black text-orange-600">
            100% Độc Quyền
          </p>
        </div>
      </div>
    </div>
  );
};
