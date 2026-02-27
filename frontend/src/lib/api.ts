import { Nudge, CommodityAlert, Constraints, CatalogResult } from "@/types";

// Base URL – falls back to mock data if backend is down
const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

// ── Mock data (used when backend is unavailable) ─────────────────────────────

const MOCK_NUDGES: Nudge[] = [
    {
        id: "n1",
        title: "Make 40 Silk Sarees",
        title_hi: "40 रेशमी साड़ियाँ बनाओ",
        reason: "Diwali is in 38 days — demand spikes 3×",
        reason_icon: "🪔",
        category: "MAKE",
        priority: "HIGH",
        product_image_url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
        quantity_suggested: 40,
        unit: "pieces",
        estimated_revenue: 80000,
        cost_price: 1200,
        market_price: 2000,
        budget_required: 18000,
        days_until_event: 38,
        event_name: "Diwali",
    },
    {
        id: "n2",
        title: "Buy Cotton Yarn Today",
        title_hi: "आज सूती धागा खरीदो",
        reason: "Cotton price dropped 4.2% — buy before it rises",
        reason_icon: "📉",
        category: "BUY",
        priority: "HIGH",
        product_image_url: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80",
        quantity_suggested: 20,
        unit: "kg",
        estimated_revenue: 0,
        cost_price: 480,
        market_price: 480,
        budget_required: 9600,
        days_until_event: 38,
        event_name: "Diwali",
    },
    {
        id: "n3",
        title: "Raise Brass Idol Price",
        title_hi: "पीतल की मूर्ति की कीमत बढ़ाओ",
        reason: "Navratri in 12 days — buyers are searching now",
        reason_icon: "🪄",
        category: "PRICE",
        priority: "MEDIUM",
        product_image_url: "https://images.unsplash.com/photo-1609372332255-611485350f25?w=600&q=80",
        quantity_suggested: 15,
        unit: "pieces",
        estimated_revenue: 45000,
        cost_price: 900,
        market_price: 3000,
        budget_required: 6000,
        days_until_event: 12,
        event_name: "Navratri",
    },
    {
        id: "n4",
        title: "Stop Making Clay Pots",
        title_hi: "मिट्टी के बर्तन बनाना बंद करो",
        reason: "Market price ₹300 < your cost ₹420 — loss-making",
        reason_icon: "⛔",
        category: "STOP",
        priority: "HIGH",
        product_image_url: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
        quantity_suggested: 0,
        unit: "pieces",
        estimated_revenue: 0,
        cost_price: 420,
        market_price: 300,
        budget_required: 0,
        days_until_event: 0,
        event_name: "",
    },
    {
        id: "n5",
        title: "Make Block-Print Kurtas",
        title_hi: "ब्लॉक-प्रिंट कुर्ते बनाओ",
        reason: "Wedding season starts in 25 days — trending on Instagram",
        reason_icon: "💍",
        category: "MAKE",
        priority: "MEDIUM",
        product_image_url: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
        quantity_suggested: 30,
        unit: "pieces",
        estimated_revenue: 54000,
        cost_price: 700,
        market_price: 1800,
        budget_required: 12000,
        days_until_event: 25,
        event_name: "Wedding Saya",
    },
];

const MOCK_COMMODITIES: CommodityAlert[] = [
    { id: "c1", material: "Cotton Yarn", material_hi: "सूती धागा", price_inr: 187, change_percent: -4.2, trend: "DOWN", recommendation: "Good time to buy in bulk." },
    { id: "c2", material: "Silk Thread", material_hi: "रेशमी धागा", price_inr: 820, change_percent: 2.1, trend: "UP", recommendation: "Prices rising — finish stock first." },
    { id: "c3", material: "Brass Sheet", material_hi: "पीतल की शीट", price_inr: 510, change_percent: 0.3, trend: "STABLE", recommendation: "Stable — buy as needed." },
    { id: "c4", material: "Natural Dye", material_hi: "प्राकृतिक रंग", price_inr: 95, change_percent: -1.8, trend: "DOWN", recommendation: "Buy now — festive demand incoming." },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

function filterByBudget(nudges: Nudge[], budget: number): Nudge[] {
    return nudges.filter((n) => n.budget_required <= budget || n.category === "STOP");
}

// ── API functions ─────────────────────────────────────────────────────────────

export async function fetchNudges(constraints?: Constraints): Promise<Nudge[]> {
    try {
        const budget = constraints?.budget ?? 50000;
        const res = await fetch(`${BASE_URL}/daily-nudges?user_id=1&budget=${budget}`, {
            cache: "no-store",
        });
        if (!res.ok) throw new Error("Backend unavailable");
        return await res.json();
    } catch {
        // Fall back to mock data filtered by budget
        const budget = constraints?.budget ?? 50000;
        return filterByBudget(MOCK_NUDGES, budget);
    }
}

export async function fetchCommodities(): Promise<CommodityAlert[]> {
    try {
        const res = await fetch(`${BASE_URL}/commodity-alerts?cluster_id=1`, { cache: "no-store" });
        if (!res.ok) throw new Error("Backend unavailable");
        return await res.json();
    } catch {
        return MOCK_COMMODITIES;
    }
}

export async function logInventory(item: string, quantity: number): Promise<void> {
    try {
        await fetch(`${BASE_URL}/log-inventory`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ item, quantity }),
        });
    } catch {
        // Silently fail — offline mode
    }
}

export async function generateCatalog(imageFile: File): Promise<CatalogResult> {
    try {
        const form = new FormData();
        form.append("file", imageFile);
        const res = await fetch(`${BASE_URL}/upload-catalog-image`, { method: "POST", body: form });
        if (!res.ok) throw new Error("Backend unavailable");
        return await res.json();
    } catch {
        // Return rich mock catalog
        return {
            title: "Handcrafted Block-Print Silk Saree — Artisan Edition",
            description:
                "A stunning handwoven silk saree featuring traditional Bagru block-print motifs in earthy terracotta and indigo. Crafted by skilled artisans from Rajasthan using 100% natural dyes. Perfect for festive occasions, weddings, and cultural celebrations. Each piece is unique and made with zero synthetic chemicals.",
            tags: ["Handloom", "Block Print", "Silk Saree", "Rajasthani Craft", "Natural Dye", "Festive Wear"],
            suggested_price: 2800,
            category: "Women's Ethnic Wear",
        };
    }
}
