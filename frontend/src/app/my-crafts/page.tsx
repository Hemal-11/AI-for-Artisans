"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// ── Icons ──────────────────────────────────────────────────────────────────────

const LogoLeaf = () => (
    <svg width="26" height="26" viewBox="0 0 40 40" fill="none">
        <path d="M20 30 C20 30 8 26 8 14 C8 14 14 16 18 24" fill="#22c55e" />
        <path d="M20 30 C20 30 32 26 32 14 C32 14 26 16 22 24" fill="#22c55e" />
        <path d="M20 30 C20 30 14 18 20 8 C26 18 20 30 20 30Z" fill="#16a34a" />
    </svg>
);

const HomeHubIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 12L12 4l9 8v8a1 1 0 01-1 1h-5v-5H9v5H4a1 1 0 01-1-1v-8z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
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

const MaterialIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="2" />
    </svg>
);


const TrendIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 17l5-5 4 4 6-7 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const LogoutIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M17 16l4-4m0 0l-4-4m4 4H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 20H5a2 2 0 01-2-2V6a2 2 0 012-2h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const SearchIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const FilterIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <line x1="4" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="7" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="18" x2="14" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <polyline points="6 9 12 15 18 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// ── Nav items ──────────────────────────────────────────────────────────────────

const navItems = [
    { href: "/home", label: "Home", Icon: HomeHubIcon },
    { href: "/trends", label: "Trends", Icon: TrendIcon },
    { href: "/constraints", label: "Material Costs", Icon: MaterialIcon },
    { href: "/my-crafts", label: "My Crafts", Icon: CraftsIcon },
];

// ── Product data ───────────────────────────────────────────────────────────────

type BadgeType = "High Demand" | "Stable" | "Growing" | "Trending";

const badgeStyles: Record<BadgeType, { dot: string; text: string; bg: string }> = {
    "High Demand": { dot: "bg-green-500", text: "text-green-700", bg: "bg-green-50" },
    "Stable": { dot: "bg-green-400", text: "text-green-600", bg: "bg-green-50" },
    "Growing": { dot: "bg-emerald-500", text: "text-emerald-700", bg: "bg-emerald-50" },
    "Trending": { dot: "bg-amber-500", text: "text-amber-700", bg: "bg-amber-50" },
};

interface Product {
    id: number;
    name: string;
    material: string;
    stock: number;
    price: string;
    badge: BadgeType;
    image: string;
}

const products: Product[] = [
    { id: 1, name: "Banarasi Silk Saree", material: "Hand-woven traditional silk", stock: 12, price: "₹18,500", badge: "High Demand", image: "/images/banarasi_saree.jpg" },
    { id: 2, name: "Hand-painted Pot", material: "Organic clay terracotta", stock: 45, price: "₹850", badge: "Stable", image: "/images/terracotta_pot.jpg" },
    { id: 3, name: "Brass Dhokra Art", material: "Lost-wax metal casting", stock: 8, price: "₹4,200", badge: "Growing", image: "/images/brass_dhokra.jpg" },
    { id: 4, name: "Pashmina Shawl", material: "Premium hand-spun wool", stock: 5, price: "₹25,000", badge: "High Demand", image: "/images/pashmina_shawl.jpg" },
    { id: 5, name: "Channapatna Toys", material: "Lacquered wood craft", stock: 32, price: "₹1,250", badge: "Trending", image: "/images/channapatna_toy.jpg" },
    { id: 6, name: "Jaipur Blue Pottery", material: "Quartz-based ceramic vase", stock: 18, price: "₹3,400", badge: "High Demand", image: "/images/ceramic_vase.jpg" },
];

// ── Product Card ───────────────────────────────────────────────────────────────

function ProductCard({ product }: { product: Product }) {
    const badge = badgeStyles[product.badge];
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
            {/* Image */}
            <div className="relative h-44 bg-gray-50 flex-shrink-0">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Badge */}
                <div className={`absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold ${badge.bg} ${badge.text} shadow-sm`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                    {product.badge}
                </div>
            </div>

            {/* Info */}
            <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-[17px] font-extrabold text-[#1a1a1a] leading-snug mb-1">{product.name}</h3>
                <p className="text-[13px] text-gray-400 mb-4">{product.material}</p>

                {/* Stock + Price */}
                <div className="mt-auto grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Stock</p>
                        <p className="text-[15px] font-extrabold text-[#1a1a1a]">{product.stock} Units</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Price</p>
                        <p className="text-[15px] font-extrabold text-[#1A6B3C]">{product.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function MyCraftsPage() {
    const pathname = usePathname();
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All Categories");

    const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.material.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="flex h-screen w-full bg-[#FAFAFA] overflow-hidden font-sans">

            {/* ══ LEFT SIDEBAR ══ */}
            <aside className="w-[240px] flex-shrink-0 flex flex-col bg-white py-6 border-r border-gray-200">
                {/* Logo */}
                <div className="flex items-center gap-2 px-6 mb-16">
                    <LogoLeaf />
                    <div>
                        <p className="text-[16px] font-bold text-[#1a1a1a] leading-none">ArtisanGPS</p>
                        <p className="text-[11px] text-gray-400 mt-0.5">Market Intelligence</p>
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
                <header className="flex items-center justify-between px-10 py-4 border-b border-gray-200 bg-white">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search crafts..."
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
                </header>

                <div className="flex-1 overflow-y-auto px-10 py-8">

                    {/* Page Header */}
                    <div className="flex items-start justify-between mb-7">
                        <div>
                            <h1 className="text-[30px] font-extrabold text-[#1a1a1a] tracking-tight">My Crafts Inventory</h1>
                            <p className="text-[14px] text-gray-400 mt-1">Manage your craft products and track market performance.</p>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 text-[14px] font-bold text-[#1a1a1a] hover:bg-gray-50 transition-colors shadow-sm">
                                View Drafts
                            </button>
                            <Link
                                href="/add-product"
                                className="flex items-center gap-2 bg-[#1A6B3C] text-white text-[14px] font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity shadow-md"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                                Add New Craft
                            </Link>
                        </div>
                    </div>

                    {/* Filter Bar */}
                    <div className="flex items-center gap-3 mb-7">
                        {/* Search */}
                        <div className="relative flex-1 max-w-[480px]">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <SearchIcon />
                            </div>
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search crafts..."
                                className="w-full pl-11 pr-4 py-3 text-[14px] bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1A6B3C] focus:border-transparent placeholder-gray-300"
                            />
                        </div>

                        {/* Category dropdown */}
                        <div className="relative">
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="appearance-none bg-white border border-gray-200 rounded-xl px-5 py-3 pr-10 text-[14px] font-medium text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#1A6B3C] cursor-pointer"
                            >
                                {["All Categories", "Textiles", "Pottery", "Metal Art", "Wood Craft", "Jewellery"].map((c) => (
                                    <option key={c}>{c}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <ChevronDownIcon />
                            </div>
                        </div>

                        {/* Filter button */}
                        <button className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition-colors text-gray-500">
                            <FilterIcon />
                        </button>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-4 gap-5">
                        {filtered.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div className="text-center py-20 text-gray-400">
                            <p className="text-[16px] font-medium">No crafts found for &ldquo;{search}&rdquo;</p>
                        </div>
                    )}
                </div>
            </main >
        </div >
    );
}
