"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
    {
        href: "/nudges",
        label: "Nudges",
        icon: (active: boolean) => (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 2C7.13 2 4 5.13 4 9c0 2.38 1.19 4.47 3 5.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26C16.81 13.47 18 11.38 18 9c0-3.87-3.13-7-7-7z"
                    stroke={active ? "#F5A623" : "#9CA3AF"} strokeWidth="1.8" fill="none" />
                <path d="M9 21h4" stroke={active ? "#F5A623" : "#9CA3AF"} strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        href: "/constraints",
        label: "Budget",
        icon: (active: boolean) => (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="3" y="6" width="16" height="12" rx="2" stroke={active ? "#F5A623" : "#9CA3AF"} strokeWidth="1.8" />
                <path d="M3 10h16" stroke={active ? "#F5A623" : "#9CA3AF"} strokeWidth="1.8" />
                <circle cx="7" cy="14" r="1" fill={active ? "#F5A623" : "#9CA3AF"} />
                <path d="M15 4H7" stroke={active ? "#F5A623" : "#9CA3AF"} strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        href: "/",
        label: "Home",
        icon: (active: boolean) => (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M3 10.5L11 3l8 7.5V19a1 1 0 01-1 1H14v-5H8v5H4a1 1 0 01-1-1V10.5z"
                    stroke={active ? "#F5A623" : "#9CA3AF"} strokeWidth="1.8" fill="none" />
            </svg>
        ),
    },
    {
        href: "/guard",
        label: "Guard",
        icon: (active: boolean) => (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 2L4 5.5V11c0 3.87 2.97 7.5 7 8.5 4.03-1 7-4.63 7-8.5V5.5L11 2z"
                    stroke={active ? "#D62828" : "#9CA3AF"} strokeWidth="1.8" fill="none" />
                <path d="M11 8v4M11 14v1" stroke={active ? "#D62828" : "#9CA3AF"} strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        href: "/camera",
        label: "Camera",
        icon: (active: boolean) => (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M2 8a2 2 0 012-2h1.5l2-3h7l2 3H18a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V8z"
                    stroke={active ? "#F5A623" : "#9CA3AF"} strokeWidth="1.8" fill="none" />
                <circle cx="11" cy="12" r="3" stroke={active ? "#F5A623" : "#9CA3AF"} strokeWidth="1.8" />
            </svg>
        ),
    },
];

export default function BottomNav() {
    const pathname = usePathname();

    // Don't show BottomNav on the landing page itself
    if (pathname === "/") return null;

    return (
        <nav className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white/95 backdrop-blur-lg border-t border-gray-100 z-50">
            <div className="flex items-center justify-around px-2 py-2">
                {NAV_ITEMS.map(({ href, label, icon }) => {
                    const active = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl transition-all ${active ? "text-brand-saffron" : "text-gray-400"
                                }`}
                        >
                            {icon(active)}
                            <span className={`text-[9px] font-semibold tracking-wide ${active ? "text-brand-saffron" : "text-gray-400"}`}>
                                {label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
