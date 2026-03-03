"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// ── Icons ──────────────────────────────────────────────────────────────────────

const LeafIcon = () => (
    <svg width="26" height="26" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#E8F5EE" />
        <path d="M20 30 C20 30 8 26 8 14 C8 14 14 16 18 24" fill="#22c55e" />
        <path d="M20 30 C20 30 32 26 32 14 C32 14 26 16 22 24" fill="#22c55e" />
        <path d="M20 30 C20 30 14 18 20 8 C26 18 20 30 20 30Z" fill="#16a34a" />
    </svg>
);

const SparkleIcon = ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2z" fill="currentColor" />
        <path d="M5 3l.8 2.2L8 6l-2.2.8L5 9l-.8-2.2L2 6l2.2-.8L5 3z" fill="currentColor" opacity="0.6" />
    </svg>
);

const CameraAddIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
        <circle cx="12" cy="13" r="4" />
        <line x1="12" y1="11" x2="12" y2="15" />
        <line x1="10" y1="13" x2="14" y2="13" />
    </svg>
);

const RocketIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
);

const DollarCircleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="#1A6B3C" />
        <path d="M12 6v12M9 9.5c0-1.1.9-2 2-2h2a2 2 0 010 4h-2a2 2 0 000 4h2a2 2 0 002-2" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
);

const TrendUpIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A6B3C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
    </svg>
);

const InfoIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
    </svg>
);

// ── Trend bar chart (30-day) ───────────────────────────────────────────────────
const barHeights = [30, 35, 28, 40, 45, 38, 50, 55, 48, 62, 70, 80];

function TrendBars() {
    return (
        <div className="flex items-end gap-1 h-12">
            {barHeights.map((h, i) => (
                <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                        height: `${h}%`,
                        backgroundColor: i >= 8 ? "#1A6B3C" : i >= 5 ? "#4ade80" : "#bbf7d0",
                    }}
                />
            ))}
        </div>
    );
}

// ── Progress bar ───────────────────────────────────────────────────────────────
function ProgressBar({ value, color = "#1A6B3C" }: { value: number; color?: string }) {
    return (
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all" style={{ width: `${value}%`, backgroundColor: color }} />
        </div>
    );
}

// ── Toggle ─────────────────────────────────────────────────────────────────────
function Toggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
    return (
        <button
            onClick={onToggle}
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none ${on ? "bg-[#1A6B3C]" : "bg-gray-200"}`}
        >
            <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${on ? "translate-x-6" : "translate-x-0"}`}
            />
        </button>
    );
}

// ── Page component ─────────────────────────────────────────────────────────────
export default function AddProductPage() {
    const [bgRemoval, setBgRemoval] = useState(true);
    const [keywords, setKeywords] = useState("");
    const [price, setPrice] = useState("1250");
    const [stockQty, setStockQty] = useState("1");
    const [category, setCategory] = useState("Textiles");
    const [generated, setGenerated] = useState(true); // show sample output by default

    return (
        <div className="min-h-screen bg-white font-sans flex flex-col">

            {/* ══ TOP NAVBAR ══ */}
            <header className="flex items-center justify-between px-10 py-4 border-b border-gray-100 bg-white sticky top-0 z-30">
                <Link href="/" className="flex items-center gap-2">
                    <LeafIcon />
                    <span className="text-[16px] font-bold text-[#1a1a1a]">ArtisanGPS</span>
                </Link>

                <nav className="flex items-center gap-1">
                    {[
                        { label: "Home", href: "/home" },
                        { label: "Trends", href: "/trends" },
                        { label: "My Crafts", href: "/my-crafts" },
                        { label: "Profile", href: "#" },
                    ].map((item) => (
                        <Link key={item.label} href={item.href} className="px-4 py-2 text-[14px] font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all">
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 bg-[#1A6B3C] text-white text-[13px] font-bold px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity shadow-sm">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                        </svg>
                        Upload New
                    </button>
                    <div className="w-9 h-9 rounded-full overflow-hidden bg-amber-200 relative">
                        <Image src="/images/artisan_wide.png" alt="Profile" fill className="object-cover" sizes="36px" />
                    </div>
                </div>
            </header>

            {/* ══ BODY ══ */}
            <div className="flex-1 max-w-[1100px] w-full mx-auto px-8 py-8">

                {/* Page Header */}
                <div className="flex items-start justify-between mb-8">
                    <div>
                        <h1 className="text-[32px] font-extrabold text-[#1a1a1a] tracking-tight">Add New Product</h1>
                        <p className="text-[14px] text-gray-400 mt-1">Let AI assist you in creating a professional listing for the global market.</p>
                    </div>
                    <div className="flex items-center gap-2 bg-[#E8F5EE] border border-green-200 text-[#1A6B3C] text-[12px] font-bold px-4 py-2.5 rounded-full">
                        <SparkleIcon size={13} />
                        AI ASSISTANT ACTIVE
                    </div>
                </div>

                {/* ── Two-column layout ── */}
                <div className="flex gap-7 items-start">

                    {/* ══ LEFT: IMAGE PANEL ══ */}
                    <div className="w-[420px] flex-shrink-0 flex flex-col gap-4">

                        {/* Split preview card */}
                        <div className="border-2 border-dashed border-gray-200 rounded-2xl overflow-hidden bg-gray-50 relative" style={{ height: "320px" }}>
                            {/* Left half — Original */}
                            <div className="absolute inset-0 w-1/2 overflow-hidden">
                                <Image
                                    src="/images/ceramic_vase.jpg"
                                    alt="Original"
                                    fill
                                    className="object-cover grayscale-[20%] brightness-90"
                                    sizes="210px"
                                />
                            </div>
                            {/* Right half — AI Enhanced */}
                            <div className="absolute inset-0 left-1/2 overflow-hidden">
                                <div className="relative w-full h-full" style={{ marginLeft: "-100%" }}>
                                    <div className="relative w-[200%] h-full">
                                        <Image
                                            src="/images/ceramic_vase.jpg"
                                            alt="AI Enhanced"
                                            fill
                                            className="object-cover"
                                            sizes="210px"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Divider line */}
                            <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-white opacity-80 z-10" />
                            {/* Icon on divider */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#1A6B3C] flex items-center justify-center shadow-lg">
                                <SparkleIcon size={14} />
                            </div>
                            {/* Badges */}
                            <div className="absolute bottom-3 left-3 z-20">
                                <span className="bg-black/60 text-white text-[11px] font-semibold px-3 py-1 rounded-full backdrop-blur-sm">Original</span>
                            </div>
                            <div className="absolute bottom-3 right-3 z-20">
                                <span className="bg-[#1A6B3C] text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow">AI Enhanced</span>
                            </div>
                        </div>

                        {/* AI Background Removal toggle */}
                        <div className="bg-white border border-gray-100 rounded-2xl px-5 py-4 flex items-center justify-between shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-[#E8F5EE] flex items-center justify-center text-[#1A6B3C]">
                                    <SparkleIcon size={16} />
                                </div>
                                <div>
                                    <p className="text-[14px] font-bold text-[#1a1a1a]">AI Background Removal</p>
                                    <p className="text-[12px] text-gray-400">Automatically remove clutter from your photo</p>
                                </div>
                            </div>
                            <Toggle on={bgRemoval} onToggle={() => setBgRemoval(!bgRemoval)} />
                        </div>

                        {/* Photo grid */}
                        <div className="grid grid-cols-4 gap-2">
                            {/* First slot — filled */}
                            <div className="aspect-square rounded-xl overflow-hidden border-2 border-[#1A6B3C] relative">
                                <Image src="/images/ceramic_vase.jpg" alt="Photo 1" fill className="object-cover" sizes="90px" />
                            </div>
                            {/* Empty slots */}
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="aspect-square rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 flex items-center justify-center text-gray-300 hover:border-gray-300 hover:bg-gray-100 transition-colors cursor-pointer">
                                    <CameraAddIcon />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ══ RIGHT: DETAILS PANEL ══ */}
                    <div className="flex-1 flex flex-col gap-5">

                        {/* Title + Material row */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[13px] font-semibold text-[#1a1a1a] mb-1.5">Product Title</label>
                                <input
                                    type="text"
                                    placeholder="e.g., Blue Silk Scarf"
                                    className="w-full px-4 py-3 text-[14px] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1A6B3C] focus:border-transparent bg-gray-50 placeholder-gray-300"
                                />
                            </div>
                            <div>
                                <label className="block text-[13px] font-semibold text-[#1a1a1a] mb-1.5">Base Material</label>
                                <input
                                    type="text"
                                    placeholder="e.g., Pure Mulberry Silk"
                                    className="w-full px-4 py-3 text-[14px] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1A6B3C] focus:border-transparent bg-gray-50 placeholder-gray-300"
                                />
                            </div>
                        </div>

                        {/* AI Description Generator */}
                        <div className="border border-green-200 rounded-2xl p-5 bg-white shadow-sm">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-7 h-7 rounded-full bg-[#1A6B3C] flex items-center justify-center text-white flex-shrink-0">
                                    <SparkleIcon size={13} />
                                </div>
                                <h3 className="text-[14px] font-bold text-[#1a1a1a]">AI Description Generator</h3>
                            </div>
                            <p className="text-[12px] text-gray-400 mb-3 ml-9">Enter keywords (e.g., &apos;blue silk, floral pattern, hand-woven&apos;)</p>
                            <div className="flex gap-2 mb-4">
                                <input
                                    type="text"
                                    value={keywords}
                                    onChange={(e) => setKeywords(e.target.value)}
                                    placeholder="Type keywords here..."
                                    className="flex-1 px-4 py-2.5 text-[13px] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1A6B3C] bg-gray-50 placeholder-gray-300"
                                />
                                <button
                                    onClick={() => setGenerated(true)}
                                    className="flex items-center gap-1.5 bg-[#1A6B3C] text-white text-[13px] font-bold px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity flex-shrink-0"
                                >
                                    Generate
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                    </svg>
                                </button>
                            </div>

                            {/* Bilingual output */}
                            {generated && (
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                                        <p className="text-[10px] font-bold text-[#1A6B3C] tracking-widest uppercase mb-2">English</p>
                                        <p className="text-[12px] text-gray-600 leading-relaxed">
                                            Exquisite hand-woven scarf crafted from pure mulberry silk. Featuring a vibrant floral pattern in deep ocean blues, this piece embodies traditional craftsmanship with a modern touch.
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                                        <p className="text-[10px] font-bold text-orange-500 tracking-widest uppercase mb-2">Hindi (हिंदी)</p>
                                        <p className="text-[12px] text-gray-600 leading-relaxed">
                                            शुद्ध शहतूत रेशम से तैयार किया गया उत्तम हाथ से बुना हुआ दुपट्टा। गहरे समुद्री नीले रंग में एक जीवंत पुष्प पैटर्न की विशेषता...
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Price + Stock + Category */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* Left: price + trend chart */}
                            <div className="flex flex-col gap-3">
                                <div>
                                    <div className="flex items-center gap-1 mb-1.5">
                                        <label className="text-[13px] font-semibold text-[#1a1a1a]">Price (₹)</label>
                                        <span className="text-gray-300"><InfoIcon /></span>
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <input
                                            type="text"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                            className="w-28 px-4 py-3 text-[15px] font-bold border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1A6B3C] bg-gray-50"
                                        />
                                        {/* Market reference bars */}
                                        <div className="flex-1 space-y-1.5 pt-1">
                                            <div className="flex items-center gap-2">
                                                <div className="h-2 rounded-full bg-[#1A6B3C]" style={{ width: "62%" }} />
                                                <span className="text-[11px] text-gray-400 whitespace-nowrap">Market Avg (₹950)</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-2 rounded-full bg-[#4ade80]" style={{ width: "85%" }} />
                                                <span className="text-[11px] text-gray-400 whitespace-nowrap">Top Comp (₹1400)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 30-day chart */}
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">30-Day Market Price Trend</span>
                                        <span className="text-[10px] font-bold text-[#1A6B3C] bg-green-50 px-2 py-0.5 rounded-full">+4.2% demand increase</span>
                                    </div>
                                    <TrendBars />
                                </div>
                            </div>

                            {/* Right: Stock + Category */}
                            <div className="flex flex-col gap-4">
                                <div>
                                    <label className="block text-[13px] font-semibold text-[#1a1a1a] mb-1.5">Stock Qty</label>
                                    <input
                                        type="number"
                                        value={stockQty}
                                        onChange={(e) => setStockQty(e.target.value)}
                                        className="w-full px-4 py-3 text-[14px] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1A6B3C] bg-gray-50"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[13px] font-semibold text-[#1a1a1a] mb-1.5">Category</label>
                                    <div className="relative">
                                        <select
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                            className="w-full appearance-none px-4 py-3 text-[14px] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1A6B3C] bg-gray-50 pr-10 cursor-pointer"
                                        >
                                            {["Textiles", "Pottery", "Jewellery", "Woodwork", "Metalwork"].map((c) => (
                                                <option key={c}>{c}</option>
                                            ))}
                                        </select>
                                        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                            <ChevronDownIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* AI Pricing Insight */}
                        <div className="border border-green-100 bg-green-50/40 rounded-2xl p-5 flex items-start gap-4">
                            <div className="flex-shrink-0 mt-0.5">
                                <DollarCircleIcon />
                            </div>
                            <div>
                                <h4 className="text-[14px] font-extrabold text-[#1A6B3C] mb-1">AI Pricing Insight: High Profitability Potential</h4>
                                <p className="text-[13px] text-gray-600 leading-relaxed">
                                    Your price is 30% above the average market rate, but aligned with the &ldquo;Artisanal Premium&rdquo; segment. High demand for hand-woven silk is expected due to the upcoming festive season.{" "}
                                    <span className="font-bold text-[#1A6B3C]">Estimated Margin: 65%</span> based on your ₹450 raw material cost estimate.
                                </p>
                            </div>
                        </div>

                        {/* Market Compatibility Check */}
                        <div className="border border-gray-100 bg-white rounded-2xl p-5 shadow-sm">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <h4 className="text-[15px] font-extrabold text-[#1a1a1a] mb-0.5">Market Compatibility Check</h4>
                                    <p className="text-[12px] text-gray-400 mb-5">Based on current trends in &ldquo;Handmade Silk Textiles&rdquo;</p>

                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex items-center justify-between mb-1.5">
                                                <span className="text-[13px] font-semibold text-[#1a1a1a]">Color Trend Match</span>
                                                <span className="text-[13px] font-bold text-[#1A6B3C]">92%</span>
                                            </div>
                                            <ProgressBar value={92} />
                                        </div>
                                        <div>
                                            <div className="flex items-center justify-between mb-1.5">
                                                <span className="text-[13px] font-semibold text-[#1a1a1a]">Pricing Sweet Spot</span>
                                                <span className="text-[13px] font-bold text-[#1A6B3C]">Excellent</span>
                                            </div>
                                            <ProgressBar value={82} />
                                        </div>
                                    </div>
                                </div>

                                {/* HIGH DEMAND badge */}
                                <div className="flex flex-col items-center gap-1 ml-8 flex-shrink-0">
                                    <TrendUpIcon />
                                    <span className="text-[11px] font-extrabold text-[#1A6B3C] tracking-widest uppercase">High Demand</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* ══ FOOTER ACTION BAR ══ */}
            <div className="sticky bottom-0 bg-white border-t border-gray-100 px-10 py-5 flex items-center justify-end gap-4 shadow-[0_-4px_24px_rgba(0,0,0,0.04)]">
                <button className="px-7 py-3 text-[14px] font-semibold text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                    Save Draft
                </button>
                <button className="flex items-center gap-2 px-7 py-3 text-[14px] font-bold text-white bg-[#1A6B3C] rounded-xl hover:opacity-90 transition-opacity shadow-md">
                    Save &amp; Publish
                    <RocketIcon />
                </button>
            </div>

        </div>
    );
}
