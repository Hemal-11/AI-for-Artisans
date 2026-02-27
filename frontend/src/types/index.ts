// ── Nudge types ──────────────────────────────────────────────────────────────
export type NudgeCategory = "MAKE" | "PRICE" | "BUY" | "STOP";
export type NudgePriority = "HIGH" | "MEDIUM" | "LOW";

export interface Nudge {
    id: string;
    title: string;
    title_hi: string;            // Hindi translation
    reason: string;
    reason_icon: string;         // emoji
    category: NudgeCategory;
    priority: NudgePriority;
    product_image_url: string;
    quantity_suggested: number;
    unit: string;                // e.g. "pieces", "metres"
    estimated_revenue: number;
    cost_price: number;
    market_price: number;
    budget_required: number;
    days_until_event: number;
    event_name: string;
}

// ── Commodity alert types ────────────────────────────────────────────────────
export interface CommodityAlert {
    id: string;
    material: string;
    material_hi: string;
    price_inr: number;
    change_percent: number;
    trend: "UP" | "DOWN" | "STABLE";
    recommendation: string;
}

// ── Constraint types ─────────────────────────────────────────────────────────
export interface Constraints {
    budget: number;
    materials: string[];
}

// ── Catalog types ────────────────────────────────────────────────────────────
export interface CatalogResult {
    title: string;
    description: string;
    tags: string[];
    suggested_price: number;
    category: string;
    image_url?: string;
}
