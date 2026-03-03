import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Material Costs & Alerts | ArtisanGPS",
    description: "Live tracking and AI predictions for your key commodities.",
};

export default function ConstraintsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#FAFAFA] text-[#1a1a1a] font-sans">
            {children}
        </div>
    );
}
