import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white" style={{ fontFamily: "'Inter', 'Poppins', sans-serif" }}>

            {/* ══════════════════════════════════════════
                HERO — 100vh, navbar floated on top
            ══════════════════════════════════════════ */}
            <section className="relative w-full" style={{ height: "100vh", minHeight: "600px" }}>

                {/* Background image — full cover */}
                <Image
                    src="/images/artisan_hero_clean.png"
                    alt="Indian artisan craftsman in workshop"
                    fill
                    priority
                    className="object-cover object-center"
                />

                {/* Subtle left-to-right gradient — only darkens left, right stays clear */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(to right, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.30) 40%, rgba(0,0,0,0.0) 65%)",
                    }}
                />

                {/* ── NAVBAR — transparent, floated over hero ── */}
                <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Left leaf */}
                            <path d="M20 30 C20 30 8 26 8 14 C8 14 14 16 18 24" fill="#22c55e" />
                            {/* Right leaf */}
                            <path d="M20 30 C20 30 32 26 32 14 C32 14 26 16 22 24" fill="#22c55e" />
                            {/* Center leaf */}
                            <path d="M20 30 C20 30 14 18 20 8 C26 18 20 30 20 30Z" fill="#16a34a" />
                        </svg>
                        <span className="text-[18px] font-bold text-white tracking-tight">ArtisanGPS</span>
                    </Link>

                    {/* Center Nav */}
                    <nav className="flex items-center gap-9">
                        <Link href="#" className="text-[14px] font-medium text-white/90 hover:text-white transition-colors">Platform</Link>
                        <Link href="#" className="text-[14px] font-medium text-white/90 hover:text-white transition-colors">Our Impact</Link>
                        <Link href="#" className="text-[14px] font-medium text-white/90 hover:text-white transition-colors">Partnerships</Link>
                    </nav>

                    {/* CTA */}
                    <Link
                        href="/home"
                        className="bg-[#C0392B] hover:bg-[#a93226] text-white px-5 py-2 rounded-full font-semibold text-[13px] transition-colors"
                    >
                        Get Started
                    </Link>
                </header>

                {/* ── HERO TEXT — left side, vertically centered ── */}
                <div
                    className="absolute inset-0 flex flex-col justify-center"
                    style={{ paddingLeft: "9%", paddingRight: "40%" }}
                >
                    {/* Eyebrow label */}
                    <p
                        className="text-[#F5A623] font-bold uppercase mb-5"
                        style={{ fontSize: "11px", letterSpacing: "2.5px" }}
                    >
                        Preserving Indian Heritage
                    </p>

                    {/* Main headline */}
                    <h1
                        className="text-white font-extrabold mb-6"
                        style={{ fontSize: "clamp(2.4rem, 4vw, 3.4rem)", lineHeight: "1.12", letterSpacing: "-0.5px" }}
                    >
                        Empowering Indian<br />
                        Craft with{" "}
                        <span style={{ color: "#F5A623" }}>AI</span>
                        <br />
                        Intelligence
                    </h1>

                    {/* Subtext */}
                    <p
                        className="text-white/70 mb-10"
                        style={{ fontSize: "15px", lineHeight: "1.65", maxWidth: "370px" }}
                    >
                        Bridge the gap between traditional heritage and global
                        markets. AI-driven insights designed for the Indian rural
                        artisan ecosystem.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex items-center" style={{ gap: "18px" }}>
                        <Link
                            href="/home"
                            className="bg-[#F5A623] hover:bg-[#e09518] text-white font-semibold rounded-full transition-colors"
                            style={{ padding: "12px 28px", fontSize: "14px" }}
                        >
                            For Partners →
                        </Link>
                        <Link
                            href="#"
                            className="text-white font-semibold rounded-full transition-colors hover:bg-white/10"
                            style={{
                                padding: "11px 28px",
                                fontSize: "14px",
                                border: "1.5px solid rgba(255,255,255,0.55)",
                            }}
                        >
                            Learn More
                        </Link>
                    </div>
                </div>

            </section>

            {/* ══════════════════════════════════════════
                FEATURES SECTION
            ══════════════════════════════════════════ */}
            <section style={{ background: '#ffffff', padding: '96px 48px' }}>
                {/* Section heading */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '14px', fontFamily: 'inherit' }}>
                        Precision Intelligence for Every Loom
                    </h2>
                    <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: '1.7', maxWidth: '500px', margin: '0 auto', fontFamily: 'inherit' }}>
                        Combining auspicious traditions with cutting-edge data to help artisans thrive in a digital first economy.
                    </p>
                </div>

                {/* 3 Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px', maxWidth: '1100px', margin: '0 auto' }}>

                    {/* Market Intelligence */}
                    <div style={{ background: '#ffffff', borderRadius: '20px', padding: '40px 36px', boxShadow: '0 2px 20px rgba(0,0,0,0.07)', border: '1px solid #f0f0f0' }}>
                        <div style={{ width: '56px', height: '56px', background: '#FFF3E0', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="8" r="4" fill="#F5A623" />
                                <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#1a1a1a', marginBottom: '10px', fontFamily: 'inherit' }}>Market Intelligence</h3>
                        <p style={{ fontSize: '13.5px', color: '#6b7280', lineHeight: '1.75', fontFamily: 'inherit', margin: 0 }}>
                            Understand global demand shifts. Our AI translates complex market signals into actionable local advice.
                        </p>
                    </div>

                    {/* Trend Forecasting */}
                    <div style={{ background: '#ffffff', borderRadius: '20px', padding: '40px 36px', boxShadow: '0 2px 20px rgba(0,0,0,0.07)', border: '1px solid #f0f0f0' }}>
                        <div style={{ width: '56px', height: '56px', background: '#FFF3E0', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                                <polyline points="3,16 7,11 11,14 16,7 21,10" stroke="#F5A623" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            </svg>
                        </div>
                        <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#1a1a1a', marginBottom: '10px', fontFamily: 'inherit' }}>Trend Forecasting</h3>
                        <p style={{ fontSize: '13.5px', color: '#6b7280', lineHeight: '1.75', fontFamily: 'inherit', margin: 0 }}>
                            Predict colors, motifs, and textures for upcoming seasons based on real-time fashion week data.
                        </p>
                    </div>

                    {/* Smart Pricing */}
                    <div style={{ background: '#ffffff', borderRadius: '20px', padding: '40px 36px', boxShadow: '0 2px 20px rgba(0,0,0,0.07)', border: '1px solid #f0f0f0' }}>
                        <div style={{ width: '56px', height: '56px', background: '#FFF3E0', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                                <path d="M17 6H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H7M12 3v18" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#1a1a1a', marginBottom: '10px', fontFamily: 'inherit' }}>Smart Pricing</h3>
                        <p style={{ fontSize: '13.5px', color: '#6b7280', lineHeight: '1.75', fontFamily: 'inherit', margin: 0 }}>
                            Optimize margins with transparent cost-benefit analysis and dynamic raw material tracking.
                        </p>
                    </div>

                </div>
            </section>

            {/* ══════════════════════════════════════════
                3-STEPS SECTION
            ══════════════════════════════════════════ */}
            <section style={{ background: '#ffffff', padding: '96px 48px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '72px', alignItems: 'flex-start' }}>

                    {/* Left: Steps */}
                    <div style={{ flex: 1, paddingTop: '8px' }}>
                        <h2 style={{ fontSize: '30px', fontWeight: '800', color: '#8B1A1A', lineHeight: '1.25', marginBottom: '44px', fontFamily: 'inherit' }}>
                            Simplified Intelligence in Three Steps
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            {[
                                { n: "1", title: "Connect Your Craft", body: "Register as an artisan, NGO, or partner through our visual-first onboarding interface." },
                                { n: "2", title: "Receive Daily Feed", body: "Get personalized trend videos and market insights tailored to your specific craft type." },
                                { n: "3", title: "Optimize & Grow", body: "Use smart pricing calculators and forecast tools to maximize every product's value." },
                            ].map(({ n, title, body }) => (
                                <div key={n} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                    <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#F5A623', color: 'white', fontSize: '13px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px', fontFamily: 'inherit' }}>{n}</div>
                                    <div>
                                        <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#F5A623', marginBottom: '5px', fontFamily: 'inherit' }}>{title}</h4>
                                        <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.7', fontFamily: 'inherit', margin: 0 }}>{body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Loom image + badge overlapping below */}
                    <div style={{ position: 'relative', width: '400px', flexShrink: 0, paddingBottom: '48px' }}>
                        <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.13)' }}>
                            <Image
                                src="/images/loom_weaving.png"
                                alt="Loom weaving"
                                width={400}
                                height={360}
                                style={{ objectFit: 'cover', width: '100%', display: 'block' }}
                            />
                        </div>
                        {/* Badge — overlaps image bottom, extends below */}
                        <div style={{ position: 'absolute', bottom: '0px', left: '20px', right: '40px', background: 'white', borderRadius: '14px', padding: '14px 20px', boxShadow: '0 6px 24px rgba(0,0,0,0.13)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M3 17l5-5 4 4 6-7" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div>
                                <p style={{ fontSize: '9px', fontWeight: '700', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1.5px', margin: 0, fontFamily: 'inherit' }}>Efficiency Gain</p>
                                <p style={{ fontSize: '20px', fontWeight: '800', color: '#1a1a1a', lineHeight: '1.2', margin: 0, fontFamily: 'inherit' }}>+34% Revenue</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ══════════════════════════════════════════
                CTA BANNER
            ══════════════════════════════════════════ */}
            <section style={{ background: '#f5f5f0', padding: '60px 48px' }}>
                <div style={{ maxWidth: '740px', margin: '0 auto', background: '#8B1A1A', borderRadius: '24px', padding: '60px 56px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: '800', color: 'white', lineHeight: '1.2', marginBottom: '16px', fontFamily: 'inherit' }}>
                        Join the Revolution of<br />Digital Craftsmanship
                    </h2>
                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.7', marginBottom: '36px', maxWidth: '460px', margin: '0 auto 36px', fontFamily: 'inherit' }}>
                        Be part of the platform that is preserving Indian heritage through modern
                        intelligence. We are looking for partners and visionaries.
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
                        <Link
                            href="/home"
                            style={{ background: '#F5A623', color: 'white', padding: '13px 32px', borderRadius: '999px', fontWeight: '600', fontSize: '14px', textDecoration: 'none', display: 'inline-block', fontFamily: 'inherit' }}
                        >
                            Become a Partner
                        </Link>
                        <Link
                            href="#"
                            style={{ border: '1.5px solid rgba(255,255,255,0.45)', color: 'white', padding: '12px 32px', borderRadius: '999px', fontWeight: '600', fontSize: '14px', textDecoration: 'none', display: 'inline-block', fontFamily: 'inherit' }}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            <footer style={{ background: '#ffffff', borderTop: '1px solid #f0f0f0', padding: '56px 48px 32px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    {/* Top row: brand left + nav columns right */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '56px' }}>

                        {/* Brand */}
                        <div style={{ maxWidth: '240px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                                <div style={{ width: '32px', height: '32px', background: '#F5A623', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg width="18" height="18" viewBox="0 0 40 40" fill="none">
                                        <path d="M20 30 C20 30 8 26 8 14 C8 14 14 16 18 24" fill="white" />
                                        <path d="M20 30 C20 30 32 26 32 14 C32 14 26 16 22 24" fill="white" />
                                        <path d="M20 30 C20 30 14 18 20 8 C26 18 20 30 20 30Z" fill="rgba(255,255,255,0.75)" />
                                    </svg>
                                </div>
                                <span style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a1a', fontFamily: 'inherit' }}>ArtisanGPS</span>
                            </div>
                            <p style={{ fontSize: '12px', color: '#888', lineHeight: '1.7', marginBottom: '20px', fontFamily: 'inherit' }}>
                                An AI-first market intelligence platform designed to empower rural Indian artisans with global insights.
                            </p>
                            {/* Social icons */}
                            <div style={{ display: 'flex', gap: '12px' }}>
                                <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1.5px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" stroke="#888" strokeWidth="2" />
                                        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#888" strokeWidth="2" />
                                    </svg>
                                </div>
                                <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1.5px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                                        <path d="M4 4l16 16M4 20L20 4" stroke="#888" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Nav columns */}
                        <div style={{ display: 'flex', gap: '72px' }}>
                            {[
                                { title: "Platform", links: ["How it Works", "Pricing Data", "Success Stories"] },
                                { title: "Connect", links: ["For NGOs", "For Government", "Retail Partners"] },
                                { title: "Resources", links: ["Blog", "Report", "Terms"] },
                            ].map(({ title, links }) => (
                                <div key={title}>
                                    <h5 style={{ fontSize: '11px', fontWeight: '700', color: '#8B1A1A', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '20px', fontFamily: 'inherit' }}>{title}</h5>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                        {links.map(item => (
                                            <li key={item}>
                                                <Link href="#" style={{ fontSize: '13px', color: '#555', textDecoration: 'none', fontFamily: 'inherit' }}>{item}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Partners row */}
                    <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '36px', marginBottom: '28px' }}>
                        <p style={{ textAlign: 'center', fontSize: '10px', fontWeight: '600', color: '#C0392B', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px', fontFamily: 'inherit' }}>
                            Our Ecosystem Partners
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '32px' }}>
                            {[80, 110, 90, 130].map((w, i) => (
                                <div key={i} style={{ height: '28px', width: `${w}px`, background: '#e5e7eb', borderRadius: '6px', opacity: 0.6 }} />
                            ))}
                        </div>
                    </div>

                    {/* Copyright */}
                    <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '20px' }}>
                        <p style={{ textAlign: 'center', fontSize: '11px', color: '#bbb', fontFamily: 'inherit' }}>
                            © 2024 ArtisanGPS Market Intelligence. All Rights Reserved.
                        </p>
                    </div>

                </div>
            </footer>

        </div>
    );
}
