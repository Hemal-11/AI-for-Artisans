import Image from "next/image";
import Link from "next/link";

export default function LeftSidebar() {
    return (
        <aside className="w-full flex flex-col gap-6 sticky top-[96px]">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl p-4 border border-dashboard-border flex items-center gap-4 shadow-sm">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                        src="/images/artisan_wide.png"
                        alt="Ramesh Kumar"
                        fill
                        className="object-cover"
                        sizes="48px"
                    />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-[15px] font-bold text-dashboard-text tracking-tight">Ramesh Kumar</h3>
                    <p className="text-[13px] text-dashboard-muted">Master Weaver</p>
                </div>
            </div>

            {/* Navigation Menu */}
            <nav className="flex flex-col gap-1">
                {[
                    { label: "Home", active: false, href: "/", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg> },
                    { label: "Trend Feed", active: true, href: "/trends", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg> },
                    { label: "Material Costs", active: false, href: "#", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg> },
                    { label: "My Orders", active: false, href: "#", badge: "3", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg> },
                ].map((item, i) => (
                    <Link
                        key={i}
                        href={item.href}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${item.active
                            ? "bg-dashboard-greenBg text-dashboard-greenText font-semibold font-sans"
                            : "text-dashboard-muted hover:bg-dashboard-border/50 hover:text-dashboard-text font-medium"
                            }`}
                    >
                        <div className="flex items-center gap-4">
                            <span className={item.active ? "text-dashboard-greenPill" : "text-[#9CA3AF]"}>
                                {item.icon}
                            </span>
                            <span className="text-[14.5px]">{item.label}</span>
                        </div>
                        {item.badge && (
                            <span className="bg-dashboard-border text-dashboard-text text-[11px] font-bold px-2 py-0.5 rounded-full">
                                {item.badge}
                            </span>
                        )}
                    </Link>
                ))}
            </nav>

            {/* Smart Pricing Widget */}
            <div className="bg-white rounded-2xl border border-dashboard-border p-5 mt-4 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                    <div className="w-7 h-7 bg-blue-50 rounded flex items-center justify-center text-blue-500">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                    </div>
                    <h4 className="font-extrabold text-[#1a1a1a] tracking-wider text-[11px] uppercase">Smart Pricing</h4>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-[13px] text-dashboard-muted font-medium mb-0.5">Raw Silk</p>
                            <div className="flex items-baseline gap-1">
                                <span className="font-bold text-[#1a1a1a]">₹4,200</span>
                                <span className="text-[11px] text-dashboard-muted">/kg</span>
                            </div>
                        </div>
                        <span className="bg-dashboard-greenBg text-dashboard-greenText px-2 py-1 rounded-full text-[12px] font-bold flex items-center gap-0.5">
                            +5.2%
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                        </span>
                    </div>

                    <div className="h-[1px] bg-dashboard-border w-full" />

                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-[13px] text-dashboard-muted font-medium mb-0.5">Gold Zari</p>
                            <div className="flex items-baseline gap-1">
                                <span className="font-bold text-[#1a1a1a]">₹2,100</span>
                                <span className="text-[11px] text-dashboard-muted">/bdl</span>
                            </div>
                        </div>
                        <span className="bg-dashboard-redBg text-dashboard-redText px-2 py-1 rounded-full text-[12px] font-bold flex items-center gap-0.5">
                            -0.5%
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6" /><polyline points="17 18 23 18 23 12" /></svg>
                        </span>
                    </div>
                </div>
            </div>
        </aside>
    );
}
