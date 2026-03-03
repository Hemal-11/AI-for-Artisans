"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ProductionAdvisorFeed from "@/components/production-advisor/ProductionAdvisorFeed";

// ── Icons ──────────────────────────────────────────────────────────────────────

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

const navItems = [
    { href: "/home", label: "Home", Icon: HomeIcon },
    { href: "/trends", label: "Trends", Icon: TrendIcon },
    { href: "/constraints", label: "Material Costs", Icon: MaterialIcon },
    { href: "/my-crafts", label: "My Crafts", Icon: CraftsIcon },
];

// ── Page ────────────────────────────────────────────────────────────────────────

export default function ProductionAdvisorPage() {
    const pathname = usePathname();

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
                        <Link href="/production-advisor" className="px-4 py-2 text-[14px] font-semibold text-[#1A6B3C] bg-[#E8F5EE] rounded-lg">
                            Production
                        </Link>
                        <Link href="/constraints" className="px-4 py-2 text-[14px] font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
                            Materials
                        </Link>
                        <Link href="/pricing" className="px-4 py-2 text-[14px] font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
                            Pricing
                        </Link>
                    </nav>

                    {/* Right: Search + Profile */}
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search tasks..."
                                className="w-[240px] pl-10 pr-4 py-2 text-[13px] bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A6B3C] focus:border-transparent"
                            />
                            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none">
                                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden relative">
                            <Image
                                src="/images/ramesh_kumar.png"
                                alt="Profile"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </header>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto">
                    <div className="px-10 py-8">
                        <ProductionAdvisorFeed />
                    </div>
                </div>

            </main>
        </div>
    );
}
