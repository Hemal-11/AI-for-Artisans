"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// ── Icons ──────────────────────────────────────────────────────────────────────

const LogoLeaf = () => (
    <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
        <path d="M20 30 C20 30 8 26 8 14 C8 14 14 16 18 24" fill="#22c55e" />
        <path d="M20 30 C20 30 32 26 32 14 C32 14 26 16 22 24" fill="#22c55e" />
        <path d="M20 30 C20 30 14 18 20 8 C26 18 20 30 20 30Z" fill="#16a34a" />
    </svg>
);

const HomeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12L12 4l9 8v8a1 1 0 01-1 1h-5v-5H9v5H4a1 1 0 01-1-1v-8z" fill="none" />
    </svg>
);

const TrendIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
);

const MaterialIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    </svg>
);

const CraftsIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
);

const CartIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.98-1.69L23 6H6" />
    </svg>
);

const navItems = [
    { href: "/", label: "Home", Icon: HomeIcon },
    { href: "/trends", label: "Trend Feed", Icon: TrendIcon },
    { href: "/constraints", label: "Material Costs", Icon: MaterialIcon },
    { href: "/my-crafts", label: "My Crafts", Icon: CraftsIcon },
];

// ── Sparkline SVG (inline mini chart) ─────────────────────────────────────────

function Sparkline({ points, color, fill }: { points: string; color: string; fill: string }) {
    return (
        <svg viewBox="0 0 120 40" className="w-full h-10" preserveAspectRatio="none">
            <defs>
                <linearGradient id={`grad-${color}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
            </defs>
            <path d={`${fill} Z`} fill={`url(#grad-${color})`} />
            <polyline points={points} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

// ── Commodity price cards ──────────────────────────────────────────────────────

const commodities = [
    {
        name: "Cotton\nYarn",
        price: "₹245",
        unit: "/ kg",
        change: "-2.4%",
        trend: "down",
        color: "#22c55e",
        points: "0,20 20,25 40,18 60,28 80,22 100,30 120,35",
        fill: "M0,20 20,25 40,18 60,28 80,22 100,30 120,35 L120,40 L0,40",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.8">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
        ),
    },
    {
        name: "Mulberry\nSilk",
        price: "₹4,200",
        unit: "/ kg",
        change: "+1.8%",
        trend: "up",
        color: "#ef4444",
        points: "0,35 20,30 40,32 60,25 80,20 100,15 120,10",
        fill: "M0,35 20,30 40,32 60,25 80,20 100,15 120,10 L120,40 L0,40",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.8">
                <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
                <path d="M12 7V5m0 14v-2" />
            </svg>
        ),
    },
    {
        name: "Brass\nSheet",
        price: "₹580",
        unit: "/ kg",
        change: "— 0.0%",
        trend: "flat",
        color: "#9ca3af",
        points: "0,20 20,21 40,19 60,20 80,21 100,20 120,20",
        fill: "M0,20 20,21 40,19 60,20 80,21 100,20 120,20 L120,40 L0,40",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.8">
                <rect x="3" y="8" width="18" height="12" rx="2" />
                <path d="M7 8V6a2 2 0 012-2h6a2 2 0 012 2v2" />
            </svg>
        ),
    },
    {
        name: "Copper\nWire",
        price: "₹790",
        unit: "/ kg",
        change: "+3.1%",
        trend: "up",
        color: "#ef4444",
        points: "0,38 20,32 40,34 60,28 80,22 100,16 120,8",
        fill: "M0,38 20,32 40,34 60,28 80,22 100,16 120,8 L120,40 L0,40",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.8">
                <path d="M12 3v18M5 7l7-4 7 4M5 17l7 4 7-4" />
            </svg>
        ),
    },
];

// ── Mandi comparison data ──────────────────────────────────────────────────────

const mandiData = {
    Textiles: [
        {
            commodity: "Cotton Yarn (40s)",
            sub: "Per kg",
            local: { value: "₹245", best: false },
            surat: { value: "₹230", best: true },
            delhi: { value: "₹240", best: false },
            action: "Source from Surat",
        },
        {
            commodity: "Mulberry Silk",
            sub: "Per kg",
            local: { value: "₹4,200", best: true },
            surat: { value: "₹4,350", best: false },
            delhi: { value: "₹4,280", best: false },
            action: "Buy Local",
        },
        {
            commodity: "Zari (Imitation)",
            sub: "Per spool",
            local: { value: "₹850", best: false },
            surat: { value: "₹840", best: false },
            delhi: { value: "₹810", best: true },
            action: "Source from Delhi",
        },
    ],
    Metals: [
        {
            commodity: "Brass Sheet",
            sub: "Per kg",
            local: { value: "₹580", best: false },
            surat: { value: "₹560", best: true },
            delhi: { value: "₹575", best: false },
            action: "Source from Surat",
        },
        {
            commodity: "Copper Wire",
            sub: "Per kg",
            local: { value: "₹790", best: false },
            surat: { value: "₹810", best: false },
            delhi: { value: "₹770", best: true },
            action: "Source from Delhi",
        },
        {
            commodity: "Silver Thread",
            sub: "Per gram",
            local: { value: "₹95", best: true },
            surat: { value: "₹98", best: false },
            delhi: { value: "₹97", best: false },
            action: "Buy Local",
        },
    ],
};

// ── Page ────────────────────────────────────────────────────────────────────────

export default function MaterialCostsPage() {
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState<"Textiles" | "Metals">("Textiles");

    return (
        <div className="flex h-screen w-full bg-[#F7F7F3] overflow-hidden font-sans">

            {/* ══ LEFT SIDEBAR ══ */}
            <aside className="w-[240px] flex-shrink-0 flex flex-col bg-white py-6 border-r border-gray-200">
                {/* Logo */}
                <div className="flex items-center gap-2 px-6 mb-16">
                    <LogoLeaf />
                    <div>
                        <p className="text-[16px] font-bold text-[#1a1a1a] leading-none">ArtisanGPS</p>
                        <p className="text-[11px] text-gray-400 font-normal mt-0.5">Market Intelligence</p>
                    </div>
                </div>

                {/* Nav */}
                <nav className="flex-1 px-3 space-y-1">
                    {navItems.map(({ href, label, Icon }) => {
                        const active = pathname === href;
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
            </aside>

            {/* ══ MAIN CONTENT ══ */}
            <main className="flex-1 flex flex-col overflow-hidden">

                {/* Top Navbar */}
                <header className="flex items-center justify-between px-10 py-4 bg-white border-b border-gray-200 flex-shrink-0">
                    <nav className="flex items-center gap-1">
                        <Link href="/trends" className="px-4 py-2 text-[14px] font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
                            Trends
                        </Link>
                        <Link href="/production-advisor" className="px-4 py-2 text-[14px] font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
                            Production
                        </Link>
                        <Link href="/constraints" className="px-4 py-2 text-[14px] font-semibold text-[#1A6B3C] bg-[#E8F5EE] rounded-lg">
                            Materials
                        </Link>
                        <Link href="/pricing" className="px-4 py-2 text-[14px] font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
                            Pricing
                        </Link>
                    </nav>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search materials..."
                                className="w-[220px] pl-9 pr-4 py-2 text-[13px] bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A6B3C] focus:border-transparent"
                            />
                            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none">
                                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-gray-300 overflow-hidden relative">
                            <img src="/images/artisan_wide.png" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </header>

                {/* Scrollable Content */}

                <div className="flex-1 overflow-y-auto px-10 py-8 space-y-8">

                    {/* ── Page Header ── */}
                    <div className="flex items-start justify-between">
                        <div>
                            <h1 className="text-[30px] font-extrabold text-[#1a1a1a] tracking-tight">Material Costs & Alerts</h1>
                            <p className="text-[14px] text-gray-400 mt-1">Live tracking and AI predictions for your key commodities.</p>
                        </div>
                        <div className="flex items-center gap-3 mt-1">
                            <div className="flex items-center gap-2 text-[13px] font-semibold text-[#1A6B3C] bg-[#E8F5EE] px-4 py-2 rounded-full border border-green-200">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
                                Live Market Open
                            </div>
                            <button className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition-colors">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                    <path d="M4 6h16M4 12h16M4 18h10" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* ── AI Prediction Banner ── */}
                    <div className="bg-[#F0FAF4] border border-green-200 rounded-2xl p-6 flex items-center gap-6">
                        {/* Sparkle icon */}
                        <div className="w-12 h-12 rounded-full bg-white border border-green-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2l1.2 5.8L19 9l-5.8 1.2L12 16l-1.2-5.8L5 9l5.8-1.2L12 2z" fill="#22c55e" />
                                <path d="M5 3l.6 2.4L8 6l-2.4.6L5 9l-.6-2.4L2 6l2.4-.6L5 3z" fill="#86efac" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <p className="text-[11px] font-bold text-[#1A6B3C] tracking-widest uppercase mb-1">AI Market Prediction</p>
                            <h2 className="text-[22px] font-extrabold text-[#1a1a1a] mb-2">Buy Cotton Yarn Now</h2>
                            <p className="text-[14px] text-gray-500 leading-relaxed max-w-xl">
                                Prices for 40s count cotton yarn are expected to rise by 8–12% next week due to reduced supply from Gujarat mills. Stocking up today will optimize your margins for the upcoming festive season.
                            </p>
                        </div>
                        <button className="flex items-center gap-2 bg-[#1A6B3C] text-white text-[14px] font-bold px-6 py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-lg flex-shrink-0">
                            <CartIcon />
                            Find Suppliers
                        </button>
                    </div>

                    {/* ── Price Cards Grid ── */}
                    <div className="grid grid-cols-4 gap-4">
                        {commodities.map((item) => {
                            const isUp = item.trend === "up";
                            const isDown = item.trend === "down";
                            const changeColor = isUp ? "text-red-500 bg-red-50" : isDown ? "text-green-600 bg-green-50" : "text-gray-400 bg-gray-100";

                            return (
                                <div key={item.name} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                                                {item.icon}
                                            </div>
                                            <p className="text-[13px] font-semibold text-[#1a1a1a] whitespace-pre-line leading-tight">{item.name}</p>
                                        </div>
                                        <span className={`text-[11px] font-bold px-2 py-1 rounded-full flex items-center gap-0.5 ${changeColor}`}>
                                            {isUp && "↑ "}
                                            {isDown && "↓ "}
                                            {item.change}
                                        </span>
                                    </div>

                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-[26px] font-extrabold text-[#1a1a1a]">{item.price}</span>
                                        <span className="text-[12px] text-gray-400 font-medium">{item.unit}</span>
                                    </div>

                                    {/* Mini sparkline */}
                                    <Sparkline points={item.points} color={item.color} fill={item.fill} />
                                </div>
                            );
                        })}
                    </div>

                    {/* ── Local Mandi Comparison ── */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        {/* Header */}
                        <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-gray-100">
                            <div>
                                <h2 className="text-[20px] font-extrabold text-[#1a1a1a]">Local Mandi Comparison</h2>
                                <p className="text-[13px] text-gray-400 mt-0.5">Prices updated 2 hours ago</p>
                            </div>
                            <div className="flex items-center gap-2">
                                {(["Textiles", "Metals"] as const).map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all border ${activeTab === tab
                                            ? "bg-[#1A6B3C] text-white border-[#1A6B3C]"
                                            : "border-gray-200 text-gray-500 hover:bg-gray-50"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-100">
                                        <th className="text-left px-6 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Commodity</th>
                                        <th className="text-left px-6 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Your Local (Varanasi)</th>
                                        <th className="text-left px-6 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Surat Mandi</th>
                                        <th className="text-left px-6 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Delhi Hub</th>
                                        <th className="text-left px-6 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {mandiData[activeTab].map((row, i) => (
                                        <tr key={i} className="hover:bg-gray-50/60 transition-colors">
                                            <td className="px-6 py-4">
                                                <p className="text-[14px] font-bold text-[#1a1a1a]">{row.commodity}</p>
                                                <p className="text-[12px] text-gray-400">{row.sub}</p>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`text-[14px] font-semibold ${row.local.best ? "text-[#1A6B3C]" : "text-[#1a1a1a]"}`}>
                                                    {row.local.value}
                                                </span>
                                                {row.local.best && (
                                                    <span className="ml-2 text-[11px] font-bold text-[#1A6B3C] bg-green-50 px-2 py-0.5 rounded-full">Best</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`text-[14px] font-semibold ${row.surat.best ? "text-[#1A6B3C]" : "text-[#1a1a1a]"}`}>
                                                    {row.surat.value}
                                                </span>
                                                {row.surat.best && (
                                                    <span className="ml-2 text-[11px] font-bold text-[#1A6B3C] bg-green-50 px-2 py-0.5 rounded-full">Best</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`text-[14px] font-semibold ${row.delhi.best ? "text-[#1A6B3C]" : "text-[#1a1a1a]"}`}>
                                                    {row.delhi.value}
                                                </span>
                                                {row.delhi.best && (
                                                    <span className="ml-2 text-[11px] font-bold text-[#1A6B3C] bg-green-50 px-2 py-0.5 rounded-full">Best</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                                <button className="text-[13px] font-bold text-[#1A6B3C] hover:underline transition-all">
                                                    {row.action}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Bottom padding */}
                    <div className="h-4" />
                </div>
            </main>
        </div>
    );
}
