import Image from "next/image";

export default function RightSidebar() {
    return (
        <aside className="w-full flex flex-col gap-6 sticky top-[96px]">

            {/* Header */}
            <div className="flex items-center gap-3 px-2">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                <h3 className="text-[18px] font-bold text-[#1a1a1a]">Market Intelligence</h3>
            </div>

            {/* AI Suggestion Card */}
            <div className="bg-dashboard-blueBg rounded-2xl p-5 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-sm flex-shrink-0">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2a8 8 0 0 0-8 8c0 5.4 6 11.2 7.3 12.3.4.3 1 .3 1.4 0 1.3-1.1 7.3-6.9 7.3-12.3a8 8 0 0 0-8-8z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-[14px] font-bold text-[#1e3a8a]">Artisan AI Suggestion</h4>
                        <p className="text-[11px] text-blue-600/80 font-medium tracking-wide">Based on your browsing history</p>
                    </div>
                </div>

                <p className="text-[14px] leading-relaxed text-[#1e3a8a] mb-5">
                    The magenta lotus design shown in the feed has a <span className="font-extrabold text-blue-700">20% higher profit margin</span> if produced using the locally sourced raw silk currently on sale.
                </p>

                <button className="w-full py-2.5 bg-white rounded-lg text-blue-600 font-bold text-[13px] border border-blue-200 hover:bg-blue-50 transition-colors shadow-sm">
                    Calculate Potential Profit
                </button>
            </div>

            {/* Raw Material Forecast */}
            <div className="flex flex-col gap-4 px-2 mt-2">
                <div className="flex items-center justify-between pointer-events-none">
                    <h4 className="text-[14px] font-bold text-[#1a1a1a]">Raw Material Forecast</h4>
                    <span className="text-[12px] font-bold text-dashboard-greenPill cursor-pointer pointer-events-auto">View All</span>
                </div>

                <div className="space-y-3">
                    {/* Item 1 */}
                    <div className="bg-white p-3.5 rounded-2xl border border-dashboard-border flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-dashboard-bg rounded-full flex items-center justify-center text-dashboard-muted">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                            </div>
                            <div>
                                <h5 className="text-[13px] font-bold text-[#1a1a1a]">Mulberry Silk</h5>
                                <p className="text-[11px] text-dashboard-warning font-semibold">Low Stock Alert</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-[14px] font-bold text-[#1a1a1a]">₹4,200</span>
                            <span className="bg-dashboard-greenBg text-dashboard-greenText px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-0.5 mt-0.5">
                                +5.2% ↗
                            </span>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-white p-3.5 rounded-2xl border border-dashboard-border flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-dashboard-bg rounded-full flex items-center justify-center text-dashboard-muted">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                            </div>
                            <div>
                                <h5 className="text-[13px] font-bold text-[#1a1a1a]">Cotton Yarn</h5>
                                <p className="text-[11px] text-dashboard-muted font-medium">Stable Demand</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-[14px] font-bold text-[#1a1a1a]">₹850</span>
                            <span className="bg-dashboard-greenBg text-dashboard-greenText px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-0.5 mt-0.5">
                                +1.1% ↗
                            </span>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="bg-white p-3.5 rounded-2xl border border-dashboard-border flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-dashboard-bg rounded-full flex items-center justify-center text-dashboard-muted">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><line x1="21.17" y1="8" x2="12" y2="8" /><line x1="3.95" y1="6.06" x2="8.54" y2="14" /></svg>
                            </div>
                            <div>
                                <h5 className="text-[13px] font-bold text-[#1a1a1a]">Natural Indigo</h5>
                                <p className="text-[11px] text-dashboard-greenPill font-semibold">Price Drop</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-[14px] font-bold text-[#1a1a1a]">₹1,800</span>
                            <span className="bg-dashboard-redBg text-dashboard-redText px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-0.5 mt-0.5">
                                -2.4% ↘
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Upcoming Demand Spikes */}
            <div className="flex flex-col gap-3 px-2 mt-4">
                <h4 className="text-[14px] font-bold text-[#1a1a1a]">Upcoming Demand Spikes</h4>
                <div className="relative w-full h-[140px] rounded-2xl overflow-hidden shadow-md">
                    <Image
                        src="/images/loom_weaving.png" /* using existing image, but styling as demand spike */
                        alt="Wedding Season"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block bg-dashboard-greenPill px-2 py-1 rounded-[4px] text-[9px] font-extrabold text-white tracking-widest uppercase mb-1">
                            IN 24 DAYS
                        </span>
                        <h5 className="text-[16px] font-extrabold text-white tracking-wide">Wedding Season Begins</h5>
                    </div>
                </div>
            </div>

        </aside>
    );
}
