"use client";

import Image from "next/image";
import Link from "next/link";

export type BadgeVariant = "green" | "amber" | "pink" | "purple" | "blue";

export interface PillItem {
    label: string;
    variant: "outline" | "solidGreen" | "solidAmber";
}

export interface TaskCardProps {
    timeLabel: string;
    nodeColor: string;         // full Tailwind class, e.g. "bg-blue-400"
    nodeIcon: React.ReactNode;
    title: string;
    badge?: { label: string; variant: BadgeVariant };
    description: string;
    pills?: PillItem[];
    aiAdvice?: string;
    image?: string;
    footerLink?: { label: string; href: string };
    cardBg?: string;           // e.g. "bg-amber-50" or "bg-pink-50"
}

const badgeStyles: Record<BadgeVariant, string> = {
    green: "bg-green-50 text-green-700 border border-green-200",
    amber: "bg-amber-50 text-amber-700 border border-amber-200",
    pink: "bg-pink-50 text-pink-600 border border-pink-200",
    purple: "bg-purple-50 text-purple-700 border border-purple-200",
    blue: "bg-blue-50 text-blue-700 border border-blue-200",
};

const pillStyles: Record<PillItem["variant"], string> = {
    outline: "border border-gray-200 text-gray-600 bg-white",
    solidGreen: "bg-green-100 text-green-700",
    solidAmber: "bg-amber-100 text-amber-700",
};

export default function TaskCard({
    timeLabel,
    nodeColor,
    nodeIcon,
    title,
    badge,
    description,
    pills,
    aiAdvice,
    image,
    footerLink,
    cardBg = "bg-white",
}: TaskCardProps) {
    return (
        <div className="flex gap-5 items-start">
            {/* Timeline node */}
            <div className="flex flex-col items-center flex-shrink-0">
                <div className={`w-11 h-11 rounded-full ${nodeColor} flex items-center justify-center text-white shadow-md`}>
                    {nodeIcon}
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 pb-10">
                <p className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-2">{timeLabel}</p>
                <div className={`${cardBg} rounded-2xl border border-gray-100 p-5 shadow-sm`}>
                    <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="text-[17px] font-bold text-gray-900 leading-snug">{title}</h3>
                        {badge && (
                            <span className={`flex-shrink-0 text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 ${badgeStyles[badge.variant]}`}>
                                {badge.variant === "green" && (
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                )}
                                {badge.variant === "amber" && (
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                    </svg>
                                )}
                                {badge.label}
                            </span>
                        )}
                    </div>

                    {/* Optional image + description row for Diwali-style card */}
                    {image ? (
                        <div className="flex gap-4 items-start">
                            <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                                <Image src={image} alt={title} fill className="object-cover" sizes="80px" />
                            </div>
                            <div>
                                <p className="text-[13px] text-gray-500 leading-relaxed mb-3">{description}</p>
                                {pills && (
                                    <div className="flex flex-wrap gap-2">
                                        {pills.map((pill, i) => (
                                            <span key={i} className={`text-[12px] font-semibold px-3 py-1 rounded-full ${pillStyles[pill.variant]}`}>
                                                {pill.label}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <>
                            <p className="text-[13px] text-gray-500 leading-relaxed mb-3">{description}</p>

                            {/* Weather / condition pills */}
                            {pills && (
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {pills.map((pill, i) => (
                                        <span key={i} className={`text-[12px] font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 ${pillStyles[pill.variant]}`}>
                                            {pill.label}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* AI Advice chip */}
                            {aiAdvice && (
                                <div className="bg-green-50 border border-green-100 rounded-xl px-3 py-2 flex items-center gap-2">
                                    <span className="text-green-500 flex-shrink-0">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                                        </svg>
                                    </span>
                                    <p className="text-[12px] text-green-800 font-medium">{aiAdvice}</p>
                                </div>
                            )}
                        </>
                    )}

                    {/* Footer link */}
                    {footerLink && (
                        <div className="mt-3">
                            <Link href={footerLink.href} className="text-[13px] font-semibold text-pink-500 hover:text-pink-600 flex items-center gap-1 transition-colors">
                                {footerLink.label}
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
