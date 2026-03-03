import { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Crafts | ArtisanGPS",
    description: "Manage your craft products and track market performance.",
};

export default function MyCraftsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
