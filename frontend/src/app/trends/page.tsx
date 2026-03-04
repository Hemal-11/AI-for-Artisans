"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

const OrdersIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const LogoutIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M17 16l4-4m0 0l-4-4m4 4H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 20H5a2 2 0 01-2-2V6a2 2 0 012-2h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const HeartIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
            stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
);

const CommentIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
            stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
);

const ShareIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const PlayIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
        <circle cx="12" cy="12" r="12" fill="rgba(0,0,0,0.6)" />
        <path d="M10 8l6 4-6 4V8z" fill="white" />
    </svg>
);

const navItems = [
    { href: "/home", label: "Home", Icon: HomeIcon, active: false },
    { href: "/trends", label: "Trend Feed", Icon: TrendIcon, active: true },
    { href: "/constraints", label: "Material Costs", Icon: MaterialIcon, active: false },
    { href: "/guard", label: "My Orders", Icon: OrdersIcon, active: false },
];

const trendTabs = ["All Trends", "Wedding Season", "Cotton", "Sustainable Dyes"];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function TrendsPage() {
    const [activeTab, setActiveTab] = useState("All Trends");

    return (
        <div className="flex flex-col h-screen w-full bg-[#FAFAFA] overflow-hidden font-sans">
            {/* ══ TOP NAVBAR ══ */}
            <header className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200 flex-shrink-0 z-10 w-full">
                <div className="flex items-center gap-8">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#E8F5EE] flex items-center justify-center">
                            <LogoIcon />
                        </div>
                        <span className="text-[18px] font-bold text-[#1A6B3C]">ArtisanGPS</span>
                    </Link>

                    {/* Navigation Tabs */}
                    <nav className="flex items-center gap-2">
                        <Link href="/trends" className="px-4 py-1.5 text-[14px] font-semibold text-[#1A6B3C] bg-[#E8F5EE] rounded-full">
                            Trends
                        </Link>
                        <Link href="/shop" className="px-4 py-1.5 text-[14px] font-medium text-gray-500 hover:text-gray-800 rounded-full transition-colors">
                            My Shop
                        </Link>
                        <Link href="/constraints" className="px-4 py-1.5 text-[14px] font-medium text-gray-500 hover:text-gray-800 rounded-full transition-colors">
                            Materials
                        </Link>
                        <Link href="/pricing" className="px-4 py-1.5 text-[14px] font-medium text-gray-500 hover:text-gray-800 rounded-full transition-colors">
                            Pricing
                        </Link>
                    </nav>
                </div>

                {/* Right: Search + Profile */}
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none">
                            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                            <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search designs..."
                            className="w-[240px] pl-9 pr-4 py-2 text-[13px] bg-gray-50 text-gray-800 placeholder-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1A6B3C] border border-gray-200 transition-all"
                        />
                    </div>
                    <div className="relative">
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 shadow-sm">
                            <Image
                                src="/images/ramesh_kumar.png"
                                alt="Profile"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#10B981] border-2 border-white rounded-full"></div>
                    </div>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                {/* ══ LEFT SIDEBAR ══ */}
                <aside className="w-[240px] flex-shrink-0 flex flex-col bg-white border-r border-gray-200 overflow-y-auto py-6">

                    {/* Nav */}
                    <nav className="flex-1 px-3 space-y-1">
                        {navItems.map(({ href, label, Icon, active }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-[14px] font-medium transition-all ${active
                                    ? "bg-[#E8F5EE] text-[#1A6B3C]"
                                    : "text-gray-600 hover:bg-gray-50"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Icon />
                                    {label}
                                </div>
                                {label === "My Orders" && (
                                    <span className="w-5 h-5 rounded-full bg-gray-100 text-[11px] font-bold text-gray-600 flex items-center justify-center">3</span>
                                )}
                            </Link>
                        ))}
                    </nav>
                </aside>

                {/* ══ MAIN CONTENT ══ */}
                <main className="flex-1 flex flex-col overflow-y-auto bg-[#FAFAFA]">

                    <div className="flex justify-center gap-10 px-8 py-6 w-full max-w-[1200px] mx-auto">

                        {/* ══ TREND FEED ══ */}
                        <div className="w-full max-w-[680px] flex-shrink-0 space-y-6">

                            {/* Filter Tabs Bar */}
                            <div className="flex items-center justify-between p-3 bg-white rounded-[24px] shadow-sm border border-gray-100">
                                <button className="p-2 text-[#1A6B3C] hover:bg-gray-50 rounded-lg transition-colors ml-2">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </button>

                                <div className="flex items-center gap-3">
                                    {trendTabs.map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`min-w-[70px] px-5 py-2.5 flex items-center justify-center text-center rounded-[20px] text-[13px] font-bold transition-all leading-[1.2] ${activeTab === tab
                                                ? "bg-[#1A6B3C] text-white"
                                                : "bg-[#F4F5F7] text-[#6B7280] hover:bg-gray-200"
                                                }`}
                                        >
                                            <span className="whitespace-pre-line">{tab.replace(' ', '\n')}</span>
                                        </button>
                                    ))}
                                </div>

                                <div className="flex items-center pr-3">
                                    <div className="w-[1px] h-8 bg-gray-200 mr-4"></div>
                                    <button className="p-2 text-gray-400 hover:text-gray-800 transition-colors">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                                            <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Trend Card 1 */}
                            <div className="bg-white rounded-[20px] overflow-hidden border border-gray-100 shadow-sm">
                                {/* Card Header */}
                                <div className="flex items-start justify-between p-4 bg-white">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-[16px]">
                                            M
                                        </div>
                                        <div>
                                            <h3 className="text-[15px] font-bold text-[#1a1a1a]">Meera Textile Insights</h3>
                                            <p className="text-[12px] text-gray-500">Silk Weaving Trends · 2 hours ago</p>
                                        </div>
                                    </div>
                                    <button className="text-gray-400 hover:text-gray-600">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                                            <circle cx="12" cy="5" r="1.5" fill="currentColor" />
                                            <circle cx="12" cy="19" r="1.5" fill="currentColor" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Media */}
                                <div className="relative w-full h-[400px] bg-gray-100 border-y border-gray-100">
                                    <Image
                                        src="/images/loom_weaving.png"
                                        alt="Trend"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <PlayIcon />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <p className="text-[13px] text-gray-700 leading-relaxed mb-3">
                                        Traditional Banarasi handlooms with festive reds, deep golds, and royal blues are seeing peak demand this wedding season. Weavers report a <span className="font-semibold text-[#1a1a1a]">40% surge in orders</span> — lotus and peacock motifs in magenta-gold are the top request. Start weaving now to catch the prime delivery window. <span className="text-[#16A34A] font-semibold cursor-pointer hover:underline">Read more</span>
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-3 py-1 bg-[#1a1a1a] text-white text-[12px] font-semibold rounded-full">#WeddingSilk</span>
                                        <span className="px-3 py-1 bg-[#1a1a1a] text-white text-[12px] font-semibold rounded-full">#FloralMotif</span>
                                    </div>

                                    {/* Engagement */}
                                    <div className="flex items-center gap-6 pt-3 border-t border-gray-100">
                                        <button className="flex items-center gap-2 text-gray-600 hover:text-[#E11D48] transition-colors">
                                            <HeartIcon />
                                            <span className="text-[14px] font-medium">1.2k</span>
                                        </button>
                                        <button className="flex items-center gap-2 text-gray-600 hover:text-[#1A6B3C] transition-colors">
                                            <CommentIcon />
                                            <span className="text-[14px] font-medium">89</span>
                                        </button>
                                        <button className="flex items-center gap-2 text-gray-600 hover:text-[#2563EB] transition-colors">
                                            <ShareIcon />
                                            <span className="text-[14px] font-medium">Share</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Trend Card 2 */}
                            <div className="bg-white rounded-[20px] overflow-hidden border border-gray-100 shadow-sm">
                                <div className="flex items-start justify-between p-4 bg-white">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-[16px]">
                                            A
                                        </div>
                                        <div>
                                            <h3 className="text-[15px] font-bold text-[#1a1a1a]">Arjun Dye Works</h3>
                                            <p className="text-[12px] text-gray-500">Natural Dyes & Sustainability · 5 hours ago</p>
                                        </div>
                                    </div>
                                    <button className="text-gray-400 hover:text-gray-600">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                                            <circle cx="12" cy="5" r="1.5" fill="currentColor" />
                                            <circle cx="12" cy="19" r="1.5" fill="currentColor" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="relative w-full h-[400px] bg-gray-200">
                                    <Image
                                        src="/images/natural_dyes.png"
                                        alt="Natural dye pots in artisan workshop"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-5">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <span className="text-[13px] font-semibold text-teal-600">#NaturalDyes</span>
                                        <span className="text-[13px] font-semibold text-teal-600">#IndigoRevival</span>
                                        <span className="text-[13px] font-semibold text-teal-600">#SustainableCraft</span>
                                    </div>
                                    <p className="text-[14px] text-gray-700 mb-4">
                                        Eco-conscious global buyers are actively sourcing naturally dyed cotton — indigo, turmeric, and madder red are the top picks. Market demand is up <span className="font-semibold text-[#1a1a1a]">25% this quarter</span>, with premium pricing for certified natural dye products. Artisans using plant-based dyes are fetching 30–40% higher margins.
                                    </p>
                                    <div className="flex items-center gap-6 pt-3 border-t border-gray-100">
                                        <button className="flex items-center gap-2 text-gray-600 hover:text-[#E11D48] transition-colors">
                                            <HeartIcon />
                                            <span className="text-[14px] font-medium">856</span>
                                        </button>
                                        <button className="flex items-center gap-2 text-gray-600 hover:text-[#1A6B3C] transition-colors">
                                            <CommentIcon />
                                            <span className="text-[14px] font-medium">42</span>
                                        </button>
                                        <button className="flex items-center gap-2 text-gray-600 hover:text-[#2563EB] transition-colors">
                                            <ShareIcon />
                                            <span className="text-[14px] font-medium">Share</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Trend Card 3 */}
                            <div className="bg-white rounded-[20px] overflow-hidden border border-gray-100 shadow-sm">
                                <div className="flex items-start justify-between p-4 bg-white">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-[16px]">
                                            R
                                        </div>
                                        <div>
                                            <h3 className="text-[15px] font-bold text-[#1a1a1a]">Rajasthan Craft Hub</h3>
                                            <p className="text-[12px] text-gray-500">Block Printing · Jaipur · 1 day ago</p>
                                        </div>
                                    </div>
                                    <button className="text-gray-400 hover:text-gray-600">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                                            <circle cx="12" cy="5" r="1.5" fill="currentColor" />
                                            <circle cx="12" cy="19" r="1.5" fill="currentColor" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="relative w-full h-[400px] bg-gray-200">
                                    <Image
                                        src="/images/block_print.png"
                                        alt="Traditional Rajasthani block printing workshop"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <PlayIcon />
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <span className="text-[13px] font-semibold text-indigo-600">#BlockPrint</span>
                                        <span className="text-[13px] font-semibold text-indigo-600">#SanganeriPrint</span>
                                        <span className="text-[13px] font-semibold text-indigo-600">#RajasthanCraft</span>
                                    </div>
                                    <p className="text-[14px] text-gray-700 mb-4">
                                        Sanganeri and Bagru block-printed kurtas and dupattas are surging in export orders — the US and EU markets alone have seen a <span className="font-semibold text-[#1a1a1a]">35% increase</span> in demand for authentic hand-block prints this season. Premium buyers are paying 2× retail for certified handmade pieces.
                                    </p>
                                    <div className="flex items-center gap-6 pt-3 border-t border-gray-100">
                                        <button className="flex items-center gap-2 text-gray-600 hover:text-[#E11D48] transition-colors">
                                            <HeartIcon />
                                            <span className="text-[14px] font-medium">2.1k</span>
                                        </button>
                                        <button className="flex items-center gap-2 text-gray-600 hover:text-[#1A6B3C] transition-colors">
                                            <CommentIcon />
                                            <span className="text-[14px] font-medium">156</span>
                                        </button>
                                        <button className="flex items-center gap-2 text-gray-600 hover:text-[#2563EB] transition-colors">
                                            <ShareIcon />
                                            <span className="text-[14px] font-medium">Share</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* ══ RIGHT SIDEBAR - Market Intelligence ══ */}
                        <aside className="w-[380px] flex-shrink-0 space-y-6">

                            {/* Market Intelligence Header */}
                            <div className="flex items-center gap-2">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 17l5-5 4 4 6-7 3 3" stroke="#1A6B3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h3 className="text-[16px] font-bold text-[#1a1a1a]">Market Intelligence</h3>
                            </div>

                            {/* Artisan AI Suggestion Card */}
                            <div className="bg-[#F0F7FF] rounded-2xl p-5 border border-[#BFDBFE] shadow-sm">
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center flex-shrink-0">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                                fill="white" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-[14px] font-bold text-[#1a1a1a] mb-0.5">Artisan AI Suggestion</h4>
                                        <p className="text-[11px] text-[#2563EB]">Based on your browsing history</p>
                                    </div>
                                </div>

                                <p className="text-[13px] text-[#1a1a1a] leading-relaxed mb-4">
                                    The magenta lotus design shown in the feed has a <span className="font-semibold text-[#2563EB]">20% higher profit margin</span> if produced using the locally sourced raw silk currently on sale.
                                </p>

                                <button className="w-full bg-white text-[#2563EB] text-[13px] font-semibold py-2.5 rounded-lg hover:bg-gray-50 transition-colors border border-[#BFDBFE]">
                                    Calculate Potential Profit
                                </button>
                            </div>

                            {/* Material Forecast Card */}
                            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="text-[14px] font-bold text-[#1a1a1a]">Raw Material Forecast</h4>
                                    <button className="text-[#2563EB] text-[12px] font-semibold hover:underline">
                                        View All
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    {/* Mulberry Silk */}
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                                    stroke="#6B7280" strokeWidth="2" fill="none" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-[13px] font-semibold text-[#1a1a1a]">Mulberry Silk</span>
                                                <span className="text-[14px] font-bold text-[#1a1a1a]">₹4,200</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-[11px] text-[#DC2626] font-medium">Low Stock Alert</span>
                                                <span className="text-[12px] font-semibold text-[#16A34A]">+8.3% ↗</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Cotton Yarn */}
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <circle cx="12" cy="12" r="8" stroke="#6B7280" strokeWidth="2" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-[13px] font-semibold text-[#1a1a1a]">Cotton Yarn</span>
                                                <span className="text-[14px] font-bold text-[#1a1a1a]">₹850</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-[11px] text-[#16A34A] font-medium">Stable Demand</span>
                                                <span className="text-[12px] font-semibold text-[#16A34A]">+1.1% ↗</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Natural Indigo */}
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" stroke="#6B7280" strokeWidth="2" fill="none" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-[13px] font-semibold text-[#1a1a1a]">Natural Indigo</span>
                                                <span className="text-[14px] font-bold text-[#1a1a1a]">₹1,800</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-[11px] text-[#DC2626] font-medium">Price Drop</span>
                                                <span className="text-[12px] font-semibold text-[#DC2626]">-3.4% ↘</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </aside>

                    </div>
                </main>
            </div>
        </div>
    );
}
