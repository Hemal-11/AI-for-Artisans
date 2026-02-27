import Link from "next/link";
import Image from "next/image";

export default function DashboardNavbar() {
    return (
        <header className="bg-white border-b border-dashboard-border h-[72px] sticky top-0 z-50">
            <div className="max-w-[1440px] mx-auto px-6 h-full flex items-center justify-between">

                {/* Left: Logo & Navigation */}
                <div className="flex items-center gap-12">
                    <Link href="/trends" className="flex items-center gap-2">
                        <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 30 C20 30 8 26 8 14 C8 14 14 16 18 24" fill="#22c55e" />
                            <path d="M20 30 C20 30 32 26 32 14 C32 14 26 16 22 24" fill="#22c55e" />
                            <path d="M20 30 C20 30 14 18 20 8 C26 18 20 30 20 30Z" fill="#16a34a" />
                        </svg>
                        <span className="text-[20px] font-bold text-[#1a1a1a] tracking-tight">ArtisanGPS</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {/* Active link */}
                        <Link href="/trends" className="relative text-sm font-semibold text-[#1a1a1a]">
                            Trends
                            <span className="absolute -bottom-[25px] left-0 w-full h-[3px] bg-dashboard-greenPill rounded-t-sm" />
                        </Link>
                        <Link href="#" className="text-sm font-medium text-dashboard-muted hover:text-[#1a1a1a] transition-colors">My Shop</Link>
                        <Link href="#" className="text-sm font-medium text-dashboard-muted hover:text-[#1a1a1a] transition-colors">Materials</Link>
                        <Link href="#" className="text-sm font-medium text-dashboard-muted hover:text-[#1a1a1a] transition-colors">Pricing</Link>
                    </nav>
                </div>

                {/* Right: Search & Profile */}
                <div className="flex items-center gap-6">
                    <div className="relative hidden lg:block w-[320px]">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search designs..."
                            className="w-full pl-10 pr-4 py-2.5 bg-dashboard-bg border-none rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-dashboard-border transition-shadow placeholder-dashboard-muted text-dashboard-text"
                        />
                    </div>

                    {/* Profile Avatar */}
                    <button className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm hover:ring-2 hover:ring-dashboard-greenPill transition-all">
                        <Image
                            src="/images/ramesh_kumar.png"
                            alt="Profile"
                            fill
                            className="object-cover"
                            sizes="40px"
                        />
                        {/* Online Indicator */}
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full z-10" />
                    </button>
                </div>

            </div>
        </header>
    );
}
