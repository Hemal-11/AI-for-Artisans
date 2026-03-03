"use client";

import TaskCard from "./TaskCard";

// Water drop icon for TODAY
const WaterDropIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 7.52 2 13c0 4.97 3.61 9.12 8.44 9.86C10.96 22.95 11.48 23 12 23c.52 0 1.04-.05 1.56-.14C18.39 22.12 22 17.97 22 13c0-5.48-4.48-11-10-11z" />
    </svg>
);

// Weave/grid icon for TOMORROW
const WeaveIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
);

// Party/celebration icon for IN 3 WEEKS
const PartyIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
);

// Wand/magic icon for NEXT MONTH
const WandIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 6.2l1.4-1.4M17.8 11.8l1.4 1.4M12.2 6.2L10.8 4.8M12.2 11.8l-1.4 1.4" />
        <path d="M3 21l9-9" />
        <path d="M12.22 3.22a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5z" />
    </svg>
);

const TIMELINE_ITEMS = [
    {
        timeLabel: "TODAY",
        nodeColor: "bg-blue-400",
        nodeIcon: <WaterDropIcon />,
        title: "Indigo Dyeing Phase",
        badge: { label: "Safe for Dyeing", variant: "green" as const },
        description: "Humidity is currently at 45% with clear skies. Perfect conditions for outdoor drying of the new indigo batch.",
        pills: [
            { label: "☀️ Full Sun, 32°C", variant: "outline" as const },
            { label: "💧 Low Humidity", variant: "outline" as const },
        ],
        cardBg: "bg-white",
    },
    {
        timeLabel: "TOMORROW",
        nodeColor: "bg-green-500",
        nodeIcon: <WeaveIcon />,
        title: "Silk Weaving",
        badge: { label: "High Priority", variant: "amber" as const },
        description: "Begin weaving the red and gold silk sarees. AI predicts a 20% surge in demand in the next 3 weeks.",
        aiAdvice: "Keep silk yarns away from direct afternoon heat.",
        cardBg: "bg-green-50/40",
    },
    {
        timeLabel: "IN 3 WEEKS",
        nodeColor: "bg-amber-400",
        nodeIcon: <PartyIcon />,
        title: "Diwali Festival Readiness",
        description: "All festive stock should be ready for dispatch to major mandis. Target completion for all red/gold patterns.",
        pills: [
            { label: "Target: 50 Sarees", variant: "solidAmber" as const },
            { label: "Current: 12 Ready", variant: "solidGreen" as const },
        ],
        image: "/images/diwali_sarees.jpg",
        cardBg: "bg-amber-50",
    },
    {
        timeLabel: "NEXT MONTH",
        nodeColor: "bg-pink-400",
        nodeIcon: <WandIcon />,
        title: "Design Planning: Wedding Season",
        badge: { label: "Planning", variant: "pink" as const },
        description: "Start drafting new peacock and floral motifs. Review AI market trends for trending color palettes in urban markets.",
        footerLink: { label: "View Trend Report", href: "/trends" },
        cardBg: "bg-pink-50/40",
    },
];

export default function ProductionAdvisorFeed() {
    return (
        <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
                <div>
                    <h1 className="text-[28px] font-extrabold text-gray-900 tracking-tight leading-tight">Production Advisor</h1>
                    <p className="text-[14px] text-gray-400 mt-1 max-w-sm">
                        AI-optimized schedule based on weather, market demand, and upcoming cultural festivals.
                    </p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                    {/* Filter button */}
                    <button className="flex items-center gap-2 border border-gray-200 bg-white text-gray-600 text-[13px] font-semibold px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="4" y1="6" x2="20" y2="6" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                            <line x1="11" y1="18" x2="13" y2="18" />
                        </svg>
                        Filter
                    </button>
                    {/* New Task button */}
                    <button className="flex items-center gap-2 bg-dashboard-greenText text-white text-[13px] font-bold px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity shadow-md">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                        New Task
                    </button>
                </div>
            </div>

            {/* Timeline */}
            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[21px] top-11 bottom-0 w-[2px] bg-gray-100 z-0" />

                {/* Task cards */}
                <div className="relative z-10 flex flex-col">
                    {TIMELINE_ITEMS.map((item, i) => (
                        <TaskCard key={i} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
