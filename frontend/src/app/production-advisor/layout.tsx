import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Production Advisor | ArtisanGPS",
    description: "AI-optimized production schedule based on weather, market demand, and upcoming cultural festivals.",
};

export default function ProductionAdvisorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-dashboard-bg text-dashboard-text font-sans">
            {children}
        </div>
    );
}
