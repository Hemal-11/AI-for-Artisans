import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard | ArtisanGPS",
    description: "Your personalized market intelligence feed.",
};

export default function DashboardLayout({
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
