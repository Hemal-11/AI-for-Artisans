import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Add New Product | ArtisanGPS",
    description: "Let AI assist you in creating a professional listing for the global market.",
};

export default function AddProductLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-white font-sans">
            {children}
        </div>
    );
}
