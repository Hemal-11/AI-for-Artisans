import Image from "next/image";

export default function TrendFeed() {
    return (
        <main className="w-full flex flex-col gap-6">

            {/* Filter Bar */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none sticky top-[96px] bg-dashboard-bg z-10 py-1">
                <button className="flex-shrink-0 w-10 h-10 bg-white border border-dashboard-border rounded-full flex items-center justify-center text-dashboard-text hover:bg-gray-50 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="2" y1="14" x2="6" y2="14" /><line x1="10" y1="8" x2="14" y2="8" /><line x1="18" y1="16" x2="22" y2="16" /></svg>
                </button>
                <div className="h-6 w-px bg-dashboard-border mx-1" />
                {["All Trends", "Wedding Season", "Cotton", "Sustainable Dyes"].map((filter, i) => (
                    <button
                        key={filter}
                        className={`flex-shrink-0 px-5 py-2 rounded-full text-[14px] font-bold transition-all ${i === 0
                            ? "bg-dashboard-greenPill text-white border border-transparent shadow-sm"
                            : "bg-white text-dashboard-text border border-dashboard-border hover:bg-gray-50"
                            }`}
                    >
                        {filter}
                    </button>
                ))}
                <button className="flex-shrink-0 w-10 h-10 bg-white border border-dashboard-border rounded-full flex items-center justify-center text-dashboard-muted hover:bg-gray-50 transition-colors ml-auto shadow-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                </button>
            </div>

            {/* Feed Cards container */}
            <div className="flex flex-col gap-6">

                {/* Post 1: Top Trending Design */}
                <article className="bg-white rounded-3xl border border-dashboard-border p-6 shadow-sm">
                    {/* Post Header */}
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-extrabold text-[18px]">
                                M
                            </div>
                            <div>
                                <h3 className="text-[18px] font-bold text-[#1a1a1a]">Meera Textile Insights</h3>
                                <p className="text-[13px] text-dashboard-muted font-medium flex items-center gap-1.5">
                                    Silk Weaving Trends <span className="w-1 h-1 bg-dashboard-muted rounded-full" /> 2 hours ago
                                </p>
                            </div>
                        </div>
                        <button className="text-dashboard-muted hover:text-dashboard-text">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                        </button>
                    </div>

                    {/* Post Media */}
                    <div className="relative w-full h-[340px] rounded-2xl overflow-hidden mb-5 group cursor-pointer">
                        {/* Placeholder yellow/gold pattern image to match mock */}
                        <div className="absolute inset-0 bg-yellow-600/20 backdrop-blur-sm">
                            <Image
                                src="/images/artisan_wide.png" /* Temporary placeholder */
                                alt="Trending Silk"
                                fill
                                className="object-cover opacity-80 mix-blend-overlay"
                            />
                        </div>

                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white border border-white/40 group-hover:scale-110 transition-transform">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                            </div>
                        </div>

                        {/* Tags over image */}
                        <div className="absolute bottom-4 left-4 flex gap-2">
                            <span className="bg-black/50 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-[12px] font-bold border border-white/20">#WeddingSilk</span>
                            <span className="bg-black/50 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-[12px] font-bold border border-white/20">#FloralMotif</span>
                        </div>
                    </div>

                    {/* Post Content */}
                    <p className="text-[15px] text-[#1a1a1a] leading-relaxed mb-6 font-medium">
                        Traditional Banarasi handlooms with festive reds, deep golds, and royal blues are seeing peak demand this wedding season. Weavers in Varanasi and Banaras report a <strong>40% surge in orders</strong>. Lotus and peacock motifs in magenta-gold combinations are the top request — start weaving now to catch the prime delivery window before the next 3 wedding weekends.
                        <span className="text-dashboard-greenPill cursor-pointer ml-1 font-bold hover:underline">Read more</span>
                    </p>

                    {/* Post Actions */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <button className="flex items-center gap-2 text-dashboard-muted hover:text-gray-900 transition-colors group">
                                <svg className="group-hover:fill-current" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                                <span className="font-bold text-[14px]">4.2k</span>
                            </button>
                            <button className="flex items-center gap-2 text-dashboard-muted hover:text-gray-900 transition-colors group">
                                <svg className="group-hover:fill-current" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                <span className="font-bold text-[14px]">284</span>
                            </button>
                            <button className="flex items-center gap-2 text-dashboard-muted hover:text-gray-900 transition-colors">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                            </button>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="text-dashboard-muted hover:text-gray-900 transition-colors">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
                            </button>
                            <button className="bg-dashboard-greenPill hover:bg-green-700 text-white px-5 py-2.5 rounded-xl font-bold text-[14px] flex items-center gap-2 transition-colors shadow-sm">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                                Buy Silk
                            </button>
                        </div>
                    </div>
                </article>

                {/* Post 2: Market Insight */}
                <article className="bg-white rounded-3xl border border-dashboard-border p-6 shadow-sm">
                    {/* Post Header */}
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                            </div>
                            <div>
                                <h3 className="text-[18px] font-bold text-[#1a1a1a]">Market Insight</h3>
                                <p className="text-[13px] text-dashboard-muted font-medium flex items-center gap-1.5">
                                    Cotton Prices <span className="w-1 h-1 bg-dashboard-muted rounded-full" /> 5 hours ago
                                </p>
                            </div>
                        </div>
                        <button className="text-dashboard-muted hover:text-dashboard-text">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                        </button>
                    </div>

                    {/* Post Media */}
                    <div className="relative w-full h-[340px] rounded-2xl overflow-hidden mb-5 group cursor-pointer">
                        <Image
                            src="/images/loom_weaving.png"
                            alt="Market trends"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white border border-white/40 group-hover:scale-110 transition-transform">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                            </div>
                        </div>
                        <div className="absolute bottom-4 left-4 flex gap-2">
                            <span className="bg-black/50 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-[12px] font-bold border border-white/20">#Inventory</span>
                            <span className="bg-black/50 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-[12px] font-bold border border-white/20">#Cotton</span>
                        </div>
                    </div>

                    {/* Post Content */}
                    <p className="text-[15px] text-[#1a1a1a] leading-relaxed mb-6 font-medium">
                        Good time to stock up on blue and green dyes. The market is shifting towards cooler tones for the monsoon collection.
                    </p>

                    {/* Post Actions */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <button className="flex items-center gap-2 text-dashboard-muted hover:text-gray-900 transition-colors group">
                                <svg className="group-hover:fill-current" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                                <span className="font-bold text-[14px]">1.8k</span>
                            </button>
                            <button className="flex items-center gap-2 text-dashboard-muted hover:text-gray-900 transition-colors group">
                                <svg className="group-hover:fill-current" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                <span className="font-bold text-[14px]">120</span>
                            </button>
                            <button className="flex items-center gap-2 text-dashboard-muted hover:text-gray-900 transition-colors">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                            </button>
                        </div>
                        <button className="text-dashboard-muted hover:text-gray-900 transition-colors">
                            <svg className="fill-current text-dashboard-muted" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
                        </button>
                    </div>
                </article>

            </div>
        </main>
    );
}
