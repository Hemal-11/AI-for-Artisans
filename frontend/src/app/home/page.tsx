"use client";

import Image from "next/image";
import Link from "next/link";

// ── Icons ────────────────────────────────────────────────────────────────────

const LogoIcon = () => (
    <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 30 C20 30 8 26 8 14 C8 14 14 16 18 24" fill="#22c55e" />
        <path d="M20 30 C20 30 32 26 32 14 C32 14 26 16 22 24" fill="#22c55e" />
        <path d="M20 30 C20 30 14 18 20 8 C26 18 20 30 20 30Z" fill="#16a34a" />
    </svg>
);

const HomeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 12L12 4l9 8v8a1 1 0 01-1 1h-5v-5H9v5H4a1 1 0 01-1-1v-8z"
            stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
    </svg>
);

const TrendIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 17l5-5 4 4 6-7 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const MaterialIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="2" />
    </svg>
);

const CraftsIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
    </svg>
);

const LogoutIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M17 16l4-4m0 0l-4-4m4 4H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 20H5a2 2 0 01-2-2V6a2 2 0 012-2h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const PlayIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7L8 5z" />
    </svg>
);

const CheckIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
    </svg>
);

const ChevronRight = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const MicIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="9" y="2" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M5 10a7 7 0 0014 0M12 19v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const WalletIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="13.5" r="1.5" fill="currentColor" />
    </svg>
);

const TruckIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M1 3h13v13H1zM14 8h4l3 3v5h-7V8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="5.5" cy="18.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18.5" cy="18.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
);

const navItems = [
    { href: "/home", label: "Home", Icon: HomeIcon },
    { href: "/trends", label: "Trends", Icon: TrendIcon },
    { href: "/constraints", label: "Material Costs", Icon: MaterialIcon },
    { href: "/my-crafts", label: "My Crafts", Icon: CraftsIcon },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
    return (
        <div className="flex h-screen w-full bg-[#FAFAFA] overflow-hidden font-sans">

            {/* ══ LEFT SIDEBAR ══ */}
            <aside className="w-[240px] flex-shrink-0 flex flex-col bg-white py-6 border-r border-gray-200">
                {/* Logo */}
                <div className="flex items-center gap-2 px-6 mb-16">
                    <LogoIcon />
                    <div>
                        <p className="text-[16px] font-bold text-[#1a1a1a] leading-none">ArtisanGPS</p>
                        <p className="text-[11px] text-gray-400 font-normal mt-0.5">Market Intelligence</p>
                    </div>
                </div>

                {/* Nav */}
                <nav className="flex-1 px-3 space-y-1">
                    {navItems.map(({ href, label, Icon }) => {
                        const active = href === "/home";
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-medium transition-all ${active
                                    ? "bg-[#E8F5EE] text-[#1A6B3C]"
                                    : "text-gray-600 hover:bg-gray-50"
                                    }`}
                            >
                                <Icon />
                                {label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Logout */}
                <div className="px-3 mt-4">
                    <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl text-[14px] font-semibold text-[#2563EB] bg-[#F0F9FF] hover:bg-[#E0F2FE] border border-[#BFDBFE] transition-all">
                        <LogoutIcon />
                        Logout
                    </button>
                </div>
            </aside>

            {/* ══ MAIN CONTENT ══ */}
            <main className="flex-1 flex flex-col overflow-hidden">

                {/* Top Header Bar */}
                <header className="flex items-center justify-end gap-3 px-10 py-4 bg-white border-b border-gray-200 flex-shrink-0">
                    <div className="flex items-center gap-3">
                        {/* Market Status */}
                        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-[12px] font-semibold text-gray-700">MARKET: STRONG</span>
                        </div>
                        {/* Weather */}
                        <div className="flex items-center gap-2 bg-[#FFF9E6] border border-[#FFE999] rounded-full px-4 py-1.5">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
                                <circle cx="12" cy="12" r="5" />
                            </svg>
                            <span className="text-[12px] font-semibold text-[#B45309]">32°C</span>
                        </div>
                        {/* Profile Card */}
                        <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-full pl-1.5 pr-4 py-1.5">
                            <div className="w-9 h-9 rounded-full bg-gray-300 overflow-hidden relative flex-shrink-0">
                                <Image
                                    src="/images/ramesh_kumar.png"
                                    alt="Ramesh Kumar"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <p className="text-[13px] font-semibold text-[#1a1a1a] leading-tight">Ramesh Kumar</p>
                                <p className="text-[11px] text-gray-400">Master Weaver</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Scrollable Body */}
                <div className="flex-1 overflow-y-auto px-10 py-8 space-y-8">

                    {/* ── Greeting ── */}
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-[32px] font-bold text-[#1a1a1a] leading-tight mb-1">Namaste, Ramesh ji</h2>
                            <p className="text-[14px] text-gray-500">
                                Here is your plan for <span className="text-[#1A6B3C] font-semibold">Tuesday, 14 Oct</span>
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide mb-1">Next Market Day</p>
                            <p className="text-[20px] font-bold text-[#1a1a1a]">in 2 Days</p>
                        </div>
                    </div>

                    {/* ── Priority Action Card ── */}
                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex border border-gray-200">
                        {/* Left: Hero image */}
                        <div className="relative w-[320px] flex-shrink-0 bg-[#3D2817]">
                            <div className="absolute top-4 left-4 z-10 bg-white px-3 py-1.5 rounded-full">
                                <span className="text-[11px] font-bold text-[#1a1a1a] tracking-wide flex items-center gap-1.5">
                                    <span className="text-[#F59E0B]">!</span> PRIORITY ACTION
                                </span>
                            </div>
                            <Image
                                src="/images/loom_weaving.png"
                                alt="Festive sarees for Diwali stock"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Right: Content */}
                        <div className="flex-1 p-8">
                            <h3 className="text-[28px] font-bold text-[#1a1a1a] leading-tight mb-2">
                                Start Weaving for Diwali Stock
                            </h3>
                            <p className="text-[14px] font-medium text-[#1A6B3C] mb-4">
                                दिवाली स्टॉक के लिए बुनाई शुरू करें
                            </p>
                            <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
                                Market demand for festive red & gold sarees is peaking. If you start today, you will catch the prime selling window next week.
                            </p>
                            <div className="flex items-center gap-3">
                                <button className="flex items-center gap-2 bg-[#1A6B3C] hover:bg-[#155c33] text-white text-[14px] font-semibold px-5 py-2.5 rounded-xl transition-colors">
                                    <PlayIcon />
                                    Hear Instructions
                                </button>
                                <button className="flex items-center gap-2 bg-[#E8F5EE] hover:bg-[#d4eddf] text-[#1A6B3C] text-[14px] font-semibold px-5 py-2.5 rounded-xl transition-colors">
                                    <CheckIcon />
                                    Check Materials
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ── Market Insights & Nudges ── */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 rounded-sm bg-[#1A6B3C]"></div>
                            <h3 className="text-[18px] font-bold text-[#1a1a1a]">Market Insights & Nudges</h3>
                        </div>

                        <div className="grid grid-cols-3 gap-5">
                            {/* Card 1: Cost Saving */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-shadow relative overflow-hidden">
                                {/* Background blob */}
                                <div className="absolute top-0 right-0 w-48 h-48 bg-[#E8F5EE] rounded-full -translate-y-1/2 translate-x-1/2 opacity-60"></div>

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-full bg-[#E8F5EE] flex items-center justify-center mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="10" stroke="#1A6B3C" strokeWidth="2" />
                                            <path d="M12 8v8M9 10.5C9 9.12 10.34 8 12 8s3 1.12 3 2.5c0 1.38-1.34 2.5-3 2.5s-3 1.12-3 2.5C9 16.88 10.34 18 12 18s3-1.12 3-2.5"
                                                stroke="#1A6B3C" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <p className="text-[11px] font-bold text-[#1A6B3C] tracking-wider uppercase mb-2">COST SAVING</p>
                                    <h4 className="text-[18px] font-bold text-[#1a1a1a] mb-2">Cotton Yarn Price Drop</h4>
                                    <p className="text-[13px] text-gray-600 mb-4">Down 15% in Jaipur Mandi today.</p>

                                    <button className="flex items-center justify-between w-full p-3 bg-[#2C2C2C] rounded-lg hover:bg-[#1a1a1a] transition-colors">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-[#1A6B3C] rounded-md flex items-center justify-center">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="white" strokeWidth="2" />
                                                    <path d="M8 8h8M8 12h8M8 16h4" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                            </div>
                                            <div className="text-left">
                                                <p className="text-[13px] font-semibold text-white">Buy Bulk Now</p>
                                                <p className="text-[11px] text-gray-300">बड़ी खरीदारी करें</p>
                                            </div>
                                        </div>
                                        <ChevronRight />
                                    </button>
                                </div>
                            </div>

                            {/* Card 2: Design Trend */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-shadow relative overflow-hidden">
                                {/* Background blob */}
                                <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFF4E6] rounded-full -translate-y-1/2 translate-x-1/2 opacity-60"></div>

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-full bg-[#FFF4E6] flex items-center justify-center mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                                stroke="#D97706" strokeWidth="2" fill="none" />
                                        </svg>
                                    </div>
                                    <p className="text-[11px] font-bold text-[#D97706] tracking-wider uppercase mb-2">DESIGN TREND</p>
                                    <h4 className="text-[18px] font-bold text-[#1a1a1a] mb-2">Peacock Motifs</h4>
                                    <p className="text-[13px] text-gray-600 mb-4">High demand in upcoming wedding season.</p>

                                    <button className="flex items-center justify-between w-full p-3 bg-[#FFF4E6] rounded-lg hover:bg-[#FFE8B3] transition-colors border border-[#FFE8B3]">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-[#F59E0B] rounded-md flex items-center justify-center">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                                        stroke="white" strokeWidth="2" fill="white" />
                                                </svg>
                                            </div>
                                            <div className="text-left">
                                                <p className="text-[13px] font-semibold text-[#92400E]">View 3 Patterns</p>
                                                <p className="text-[11px] text-[#B45309]">3 डिज़ाइन देखें</p>
                                            </div>
                                        </div>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M9 18l6-6-6-6" stroke="#92400E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Card 3: Operations */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-shadow relative overflow-hidden">
                                {/* Background blob */}
                                <div className="absolute top-0 right-0 w-48 h-48 bg-[#EFF6FF] rounded-full -translate-y-1/2 translate-x-1/2 opacity-60"></div>

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-full bg-[#EFF6FF] flex items-center justify-center mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" stroke="#2563EB" strokeWidth="2" fill="none" />
                                        </svg>
                                    </div>
                                    <p className="text-[11px] font-bold text-[#2563EB] tracking-wider uppercase mb-2">OPERATIONS</p>
                                    <h4 className="text-[18px] font-bold text-[#1a1a1a] mb-2">Humidity Alert</h4>
                                    <p className="text-[13px] text-gray-600 mb-4">High humidity may affect dyeing process.</p>

                                    <button className="flex items-center justify-between w-full p-3 bg-[#EFF6FF] rounded-lg hover:bg-[#DBEAFE] transition-colors border border-[#BFDBFE]">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-[#3B82F6] rounded-md flex items-center justify-center">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" stroke="white" strokeWidth="2" fill="white" />
                                                </svg>
                                            </div>
                                            <div className="text-left">
                                                <p className="text-[13px] font-semibold text-[#1E40AF]">Dry Indoors</p>
                                                <p className="text-[11px] text-[#1D4ED8]">अंदर सुखाएं</p>
                                            </div>
                                        </div>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M9 18l6-6-6-6" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Quick Questions ── */}
                    <div>
                        <h3 className="text-[18px] font-bold text-[#1a1a1a] mb-4">Quick Questions</h3>
                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2 text-[14px] font-medium text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 rounded-lg px-4 py-2.5 transition-all">
                                <MicIcon />
                                Ask Assistant
                            </button>
                            <button className="flex items-center gap-2 text-[14px] font-medium text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 rounded-lg px-4 py-2.5 transition-all">
                                <WalletIcon />
                                Check Payments
                            </button>
                            <button className="flex items-center gap-2 text-[14px] font-medium text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 rounded-lg px-4 py-2.5 transition-all">
                                <TruckIcon />
                                Track Shipment
                            </button>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
