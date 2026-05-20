import { useState } from "react";

// ─── MOCK DATA ──────────────────────────────────────────────────────────────
const products = [
  { id: 1, title: "Dragon Study Print", type: "Print", price: 28, badge: "Best Seller", aspect: "portrait" },
  { id: 2, title: "Concept Series Tee", type: "Apparel", price: 36, badge: null, aspect: "square" },
  { id: 3, title: "World-Builder Mug", type: "Mug", price: 22, badge: "New", aspect: "square" },
  { id: 4, title: "Forest Spirit Print", type: "Print", price: 35, badge: null, aspect: "portrait" },
  { id: 5, title: "Character Sheet Poster", type: "Print", price: 42, badge: "Limited", aspect: "landscape" },
  { id: 6, title: "Sketch Archive Tee", type: "Apparel", price: 36, badge: null, aspect: "square" },
];

const categories = ["All", "Prints", "Apparel", "Mugs", "Limited"];

// ─── PLACEHOLDER IMAGE BLOCKS ────────────────────────────────────────────────
function ImgPlaceholder({ aspect, theme }) {
  const dims = {
    portrait: { w: "100%", pb: "140%" },
    landscape: { w: "100%", pb: "66%" },
    square: { w: "100%", pb: "100%" },
  }[aspect];

  const patterns = {
    studio: { bg: "#e8e0d5", lines: "#c8bfb2" },
    print: { bg: "#e8f0ff", lines: "#b8c8f0" },
    gallery: { bg: "#e4ede8", lines: "#c0d0c4" },
  }[theme];

  return (
    <div style={{ position: "relative", width: dims.w, paddingBottom: dims.pb, overflow: "hidden", borderRadius: "inherit" }}>
      <div style={{
        position: "absolute", inset: 0,
        background: `repeating-linear-gradient(45deg, ${patterns.bg} 0px, ${patterns.bg} 8px, ${patterns.lines} 8px, ${patterns.lines} 9px)`,
        display: "flex", alignItems: "center", justifyContent: "center"
      }}>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" style={{ opacity: 0.4 }}>
          <rect x="4" y="4" width="28" height="28" rx="3" stroke={patterns.lines} strokeWidth="2" fill="none" />
          <circle cx="12" cy="13" r="3" fill={patterns.lines} />
          <path d="M4 26l8-8 6 6 6-8 8 10" stroke={patterns.lines} strokeWidth="2" fill="none" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// THEME 1: STUDIO LIGHT
// ════════════════════════════════════════════════════════════════════
function StudioLight() {
  const [active, setActive] = useState("All");

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');
    .sl-root { font-family: 'DM Sans', sans-serif; background: #faf7f2; color: #1a1614; min-height: 100vh; }
    .sl-nav { display: flex; align-items: center; justify-content: space-between; padding: 20px 48px; border-bottom: 1px solid #e2dcd4; background: #faf7f2; position: sticky; top: 0; z-index: 10; }
    .sl-wordmark { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 600; letter-spacing: 0.04em; color: #1a1614; }
    .sl-wordmark span { color: #b5490a; }
    .sl-nav-links { display: flex; gap: 32px; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: #6b5f55; font-weight: 400; }
    .sl-nav-links a { cursor: pointer; transition: color 0.2s; }
    .sl-nav-links a:hover { color: #b5490a; }
    .sl-nav-right { display: flex; align-items: center; gap: 16px; }
    .sl-cart { background: #1a1614; color: #faf7f2; border: none; padding: 10px 22px; font-family: 'DM Sans', sans-serif; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; }

    .sl-hero { display: grid; grid-template-columns: 1fr 1fr; min-height: 520px; }
    .sl-hero-text { padding: 72px 48px; display: flex; flex-direction: column; justify-content: center; }
    .sl-eyebrow { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #b5490a; margin-bottom: 20px; font-weight: 500; }
    .sl-hero-title { font-family: 'Cormorant Garamond', serif; font-size: 64px; line-height: 1.05; font-weight: 400; color: #1a1614; margin-bottom: 24px; }
    .sl-hero-title em { font-style: italic; color: #b5490a; }
    .sl-hero-sub { font-size: 15px; color: #6b5f55; line-height: 1.7; max-width: 400px; margin-bottom: 40px; font-weight: 300; }
    .sl-hero-cta { display: flex; gap: 16px; align-items: center; }
    .sl-btn-primary { background: #1a1614; color: #faf7f2; border: none; padding: 14px 36px; font-family: 'DM Sans', sans-serif; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; }
    .sl-btn-ghost { background: none; color: #1a1614; border: 1.5px solid #1a1614; padding: 13px 36px; font-family: 'DM Sans', sans-serif; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; }
    .sl-hero-img { background: #e8e2d8; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }
    .sl-hero-img-inner { width: 100%; height: 100%; background: repeating-linear-gradient(45deg, #e8e2d8 0px, #e8e2d8 8px, #d5cfc6 8px, #d5cfc6 9px); display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 12px; }
    .sl-hero-label { position: absolute; bottom: 32px; left: 32px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #6b5f55; background: rgba(250,247,242,0.9); padding: 8px 16px; }

    .sl-band { background: #b5490a; color: #faf7f2; padding: 14px 48px; display: flex; gap: 48px; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 500; overflow: hidden; }
    .sl-band span::before { content: "— "; }

    .sl-section { padding: 72px 48px; }
    .sl-section-header { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 48px; }
    .sl-section-title { font-family: 'Cormorant Garamond', serif; font-size: 42px; font-weight: 400; }
    .sl-section-title em { font-style: italic; }
    .sl-view-all { font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: #b5490a; cursor: pointer; border-bottom: 1px solid #b5490a; padding-bottom: 2px; }

    .sl-filters { display: flex; gap: 8px; margin-bottom: 40px; }
    .sl-filter { background: none; border: 1px solid #d0c8be; padding: 8px 20px; font-family: 'DM Sans', sans-serif; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer; color: #6b5f55; transition: all 0.2s; }
    .sl-filter.active { background: #1a1614; color: #faf7f2; border-color: #1a1614; }

    .sl-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
    .sl-card { position: relative; cursor: pointer; }
    .sl-card-img { border-radius: 2px; overflow: hidden; margin-bottom: 16px; position: relative; }
    .sl-card-badge { position: absolute; top: 14px; left: 14px; background: #b5490a; color: white; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; padding: 4px 10px; z-index: 2; }
    .sl-card-type { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: #9a8f86; margin-bottom: 6px; }
    .sl-card-title { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 600; color: #1a1614; margin-bottom: 8px; }
    .sl-card-price { font-size: 14px; color: #1a1614; font-weight: 400; }
    .sl-card-add { position: absolute; bottom: 0; right: 0; background: #1a1614; color: white; border: none; width: 40px; height: 40px; font-size: 20px; cursor: pointer; display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.2s; }
    .sl-card:hover .sl-card-add { opacity: 1; }

    .sl-footer { background: #1a1614; color: #faf7f2; padding: 48px; margin-top: 80px; }
    .sl-footer-top { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 48px; margin-bottom: 48px; }
    .sl-footer-wordmark { font-family: 'Cormorant Garamond', serif; font-size: 28px; margin-bottom: 16px; }
    .sl-footer-tagline { font-size: 13px; color: #9a8f86; line-height: 1.7; font-weight: 300; max-width: 280px; }
    .sl-footer-heading { font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #b5490a; margin-bottom: 20px; }
    .sl-footer-links { display: flex; flex-direction: column; gap: 10px; font-size: 13px; color: #9a8f86; }
    .sl-footer-bottom { border-top: 1px solid #2e2926; padding-top: 24px; display: flex; justify-content: space-between; font-size: 11px; color: #6b5f55; letter-spacing: 0.06em; }
  `;

  return (
    <div className="sl-root">
      <style>{css}</style>
      <nav className="sl-nav">
        <div className="sl-wordmark">WILLIAM <span>McGUIRE</span></div>
        <div className="sl-nav-links">
          <a>Shop</a><a>Prints</a><a>Apparel</a><a>About</a><a>Portfolio ↗</a>
        </div>
        <div className="sl-nav-right">
          <button className="sl-cart">Bag (0)</button>
        </div>
      </nav>

      <section className="sl-hero">
        <div className="sl-hero-text">
          <div className="sl-eyebrow">New Collection — Summer 2026</div>
          <h1 className="sl-hero-title">Art you can<br /><em>live with.</em></h1>
          <p className="sl-hero-sub">Original prints, apparel, and objects from the studio of illustrator and concept artist William McGuire.</p>
          <div className="sl-hero-cta">
            <button className="sl-btn-primary">Shop Prints</button>
            <button className="sl-btn-ghost">View All</button>
          </div>
        </div>
        <div className="sl-hero-img">
          <div className="sl-hero-img-inner">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style={{ opacity: 0.3 }}>
              <rect x="8" y="8" width="48" height="48" rx="4" stroke="#6b5f55" strokeWidth="2" fill="none" />
              <circle cx="22" cy="24" r="5" fill="#6b5f55" />
              <path d="M8 46l14-14 10 10 10-14 14 18" stroke="#6b5f55" strokeWidth="2" fill="none" strokeLinejoin="round" />
            </svg>
            <div style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a8f86" }}>Featured Artwork</div>
          </div>
          <div className="sl-hero-label">Dragon Study No. 7 — Limited Print</div>
        </div>
      </section>

      <div className="sl-band">
        <span>Free shipping on orders over $75</span>
        <span>Signed prints available</span>
        <span>Limited edition runs</span>
        <span>Printed in the USA</span>
      </div>

      <section className="sl-section">
        <div className="sl-section-header">
          <h2 className="sl-section-title">The <em>Collection</em></h2>
          <span className="sl-view-all">View all →</span>
        </div>
        <div className="sl-filters">
          {categories.map(c => (
            <button key={c} className={`sl-filter${active === c ? " active" : ""}`} onClick={() => setActive(c)}>{c}</button>
          ))}
        </div>
        <div className="sl-grid">
          {products.map(p => (
            <div key={p.id} className="sl-card">
              <div className="sl-card-img">
                {p.badge && <div className="sl-card-badge">{p.badge}</div>}
                <ImgPlaceholder aspect={p.aspect} theme="studio" />
                <button className="sl-card-add">+</button>
              </div>
              <div className="sl-card-type">{p.type}</div>
              <div className="sl-card-title">{p.title}</div>
              <div className="sl-card-price">${p.price}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#f0ece4", padding: "72px 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <div>
          <div className="sl-eyebrow">The Artist</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 40, fontWeight: 400, marginBottom: 20, lineHeight: 1.1 }}>Concept art for<br /><em style={{ color: "#b5490a" }}>Microsoft, Amazon,<br />NPR</em> and beyond.</h2>
          <p style={{ fontSize: 14, color: "#6b5f55", lineHeight: 1.8, fontWeight: 300, maxWidth: 380 }}>Every product in the shop starts as a piece made with intention — characters, worlds, and creatures from years of professional illustration work.</p>
          <button className="sl-btn-ghost" style={{ marginTop: 32 }}>About William →</button>
        </div>
        <div style={{ background: "#e8e2d8", height: 360, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 2 }}>
          <div style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a8f86" }}>Portrait Photo</div>
        </div>
      </section>

      <footer className="sl-footer">
        <div className="sl-footer-top">
          <div>
            <div className="sl-footer-wordmark">William McGuire</div>
            <div className="sl-footer-tagline">Illustrator, concept artist, world-builder. Prints and goods shipped from Portland, OR.</div>
          </div>
          <div>
            <div className="sl-footer-heading">Shop</div>
            <div className="sl-footer-links">
              <span>All Products</span><span>Prints</span><span>Apparel</span><span>Mugs</span><span>Limited</span>
            </div>
          </div>
          <div>
            <div className="sl-footer-heading">Studio</div>
            <div className="sl-footer-links">
              <span>Portfolio</span><span>About</span><span>Contact</span><span>Instagram</span>
            </div>
          </div>
        </div>
        <div className="sl-footer-bottom">
          <span>© 2026 William McGuire. All rights reserved.</span>
          <span>Privacy · Terms · Refunds</span>
        </div>
      </footer>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// THEME 2: PRINT SHOP BOLD
// ════════════════════════════════════════════════════════════════════
function PrintShopBold() {
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState(null);

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Outfit:wght@300;400;600&display=swap');
    .ps-root { font-family: 'Outfit', sans-serif; background: #f5f5f0; color: #0d0d0d; min-height: 100vh; }
    .ps-nav { display: flex; align-items: center; justify-content: space-between; padding: 16px 40px; background: #0d0d0d; position: sticky; top: 0; z-index: 10; }
    .ps-wordmark { font-family: 'Bebas Neue', sans-serif; font-size: 28px; letter-spacing: 0.1em; color: #f5f5f0; }
    .ps-wordmark span { color: #00c2ff; }
    .ps-nav-links { display: flex; gap: 28px; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: #8a8a80; font-weight: 400; }
    .ps-nav-links a { cursor: pointer; transition: color 0.15s; }
    .ps-nav-links a:hover { color: #00c2ff; }
    .ps-cart-btn { background: #00c2ff; color: #0d0d0d; border: none; padding: 10px 24px; font-family: 'Outfit', sans-serif; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 600; cursor: pointer; }

    .ps-hero { display: grid; grid-template-columns: 1fr 1fr; min-height: 560px; }
    .ps-hero-left { background: #0d0d0d; padding: 64px 40px; display: flex; flex-direction: column; justify-content: flex-end; position: relative; overflow: hidden; }
    .ps-hero-bg-text { position: absolute; top: -20px; left: -10px; font-family: 'Bebas Neue', sans-serif; font-size: 200px; color: rgba(0,194,255,0.04); line-height: 1; user-select: none; letter-spacing: -0.02em; }
    .ps-hero-tag { font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: #00c2ff; margin-bottom: 24px; }
    .ps-hero-title { font-family: 'Bebas Neue', sans-serif; font-size: 96px; line-height: 0.92; color: #f5f5f0; margin-bottom: 32px; letter-spacing: 0.02em; }
    .ps-hero-title span { color: #00c2ff; display: block; }
    .ps-hero-cta { display: flex; gap: 12px; }
    .ps-btn-primary { background: #00c2ff; color: #0d0d0d; border: none; padding: 14px 36px; font-family: 'Outfit', sans-serif; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 600; cursor: pointer; }
    .ps-btn-ghost { background: none; color: #f5f5f0; border: 1.5px solid rgba(245,245,240,0.3); padding: 13px 36px; font-family: 'Outfit', sans-serif; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer; }

    .ps-hero-right { display: grid; grid-template-rows: 1fr 1fr; }
    .ps-hero-top { background: #ffe94d; display: flex; align-items: center; justify-content: center; position: relative; }
    .ps-hero-bottom { background: #e8f5ff; display: flex; align-items: center; justify-content: center; position: relative; }
    .ps-hero-product-label { position: absolute; bottom: 16px; right: 16px; background: #0d0d0d; color: #f5f5f0; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; padding: 6px 12px; font-family: 'Space Mono', monospace; }

    .ps-ticker { background: #00c2ff; color: #0d0d0d; padding: 12px 0; overflow: hidden; white-space: nowrap; }
    .ps-ticker-inner { display: inline-block; font-family: 'Bebas Neue', sans-serif; font-size: 16px; letter-spacing: 0.2em; animation: ticker 20s linear infinite; }
    @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }

    .ps-section { padding: 64px 40px; }
    .ps-section-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 40px; gap: 24px; }
    .ps-section-title { font-family: 'Bebas Neue', sans-serif; font-size: 56px; line-height: 1; letter-spacing: 0.04em; }
    .ps-section-title span { color: #00c2ff; }
    .ps-count { font-family: 'Space Mono', monospace; font-size: 11px; color: #6a6a60; margin-bottom: 6px; }
    .ps-view-all { font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #0d0d0d; cursor: pointer; border-bottom: 2px solid #00c2ff; padding-bottom: 2px; }

    .ps-filters { display: flex; gap: 6px; margin-bottom: 36px; flex-wrap: wrap; }
    .ps-filter { background: none; border: 1.5px solid #d0d0c8; padding: 7px 18px; font-family: 'Outfit', sans-serif; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; cursor: pointer; color: #4a4a40; transition: all 0.15s; }
    .ps-filter.active { background: #0d0d0d; color: #f5f5f0; border-color: #0d0d0d; }

    .ps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
    .ps-card { background: white; cursor: pointer; transition: transform 0.15s; position: relative; }
    .ps-card:hover { transform: translateY(-4px); }
    .ps-card-img { overflow: hidden; position: relative; }
    .ps-card-badge { position: absolute; top: 0; right: 0; background: #ffe94d; color: #0d0d0d; font-family: 'Space Mono', monospace; font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; padding: 6px 10px; z-index: 2; font-weight: 700; }
    .ps-card-body { padding: 16px; }
    .ps-card-type { font-family: 'Space Mono', monospace; font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; color: #00c2ff; margin-bottom: 6px; }
    .ps-card-title { font-size: 16px; font-weight: 600; color: #0d0d0d; margin-bottom: 12px; line-height: 1.3; }
    .ps-card-footer { display: flex; align-items: center; justify-content: space-between; }
    .ps-card-price { font-family: 'Bebas Neue', sans-serif; font-size: 24px; color: #0d0d0d; letter-spacing: 0.05em; }
    .ps-card-add-btn { background: #0d0d0d; color: white; border: none; padding: 8px 16px; font-family: 'Outfit', sans-serif; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer; font-weight: 600; }

    .ps-feature { background: #ffe94d; padding: 64px 40px; display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; margin: 0; }
    .ps-feature-eyebrow { font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #6a6a60; margin-bottom: 20px; }
    .ps-feature-title { font-family: 'Bebas Neue', sans-serif; font-size: 64px; line-height: 0.95; margin-bottom: 24px; }
    .ps-feature-body { font-size: 15px; line-height: 1.7; color: #2a2a20; font-weight: 300; max-width: 400px; }
    .ps-feature-img { background: #0d0d0d; height: 400px; display: flex; align-items: center; justify-content: center; }

    .ps-footer { background: #0d0d0d; color: #f5f5f0; padding: 48px 40px; }
    .ps-footer-top { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 48px; margin-bottom: 40px; }
    .ps-footer-wordmark { font-family: 'Bebas Neue', sans-serif; font-size: 36px; color: #f5f5f0; margin-bottom: 12px; letter-spacing: 0.05em; }
    .ps-footer-wordmark span { color: #00c2ff; }
    .ps-footer-sub { font-size: 13px; color: #4a4a40; line-height: 1.7; font-weight: 300; }
    .ps-footer-heading { font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #00c2ff; margin-bottom: 20px; }
    .ps-footer-links { display: flex; flex-direction: column; gap: 10px; font-size: 13px; color: #6a6a60; }
    .ps-footer-bottom { border-top: 1px solid #1e1e18; padding-top: 24px; display: flex; justify-content: space-between; font-family: 'Space Mono', monospace; font-size: 10px; color: #3a3a30; }
  `;

  const tickerText = Array(6).fill("FREE SHIPPING OVER $75 — LIMITED EDITION PRINTS — SIGNED AVAILABLE — NEW APPAREL JUST DROPPED — ").join("");

  return (
    <div className="ps-root">
      <style>{css}</style>
      <nav className="ps-nav">
        <div className="ps-wordmark">WM<span>.</span>SHOP</div>
        <div className="ps-nav-links">
          <a>Prints</a><a>Apparel</a><a>Objects</a><a>Limited</a><a>Portfolio ↗</a>
        </div>
        <button className="ps-cart-btn">Cart (0)</button>
      </nav>

      <section className="ps-hero">
        <div className="ps-hero-left">
          <div className="ps-hero-bg-text">ART</div>
          <div className="ps-hero-tag">// mcguire-studio — 2026 collection</div>
          <h1 className="ps-hero-title">BOLD<span>WORK.</span></h1>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: "#8a8a80", lineHeight: 1.7, marginBottom: 32, fontWeight: 300, maxWidth: 360 }}>Prints, gear, and objects from the studio of a concept artist who has shaped worlds for Microsoft, Amazon, and NPR.</p>
          <div className="ps-hero-cta">
            <button className="ps-btn-primary">Shop Now</button>
            <button className="ps-btn-ghost">See All →</button>
          </div>
        </div>
        <div className="ps-hero-right">
          <div className="ps-hero-top">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ opacity: 0.4 }}>
                <rect x="6" y="6" width="36" height="36" rx="3" stroke="#0d0d0d" strokeWidth="2" fill="none" />
                <circle cx="17" cy="18" r="4" fill="#0d0d0d" />
                <path d="M6 35l10-10 8 8 8-10 10 12" stroke="#0d0d0d" strokeWidth="2" fill="none" strokeLinejoin="round" />
              </svg>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0d0d0d", opacity: 0.5 }}>Featured Print</span>
            </div>
            <div className="ps-hero-product-label">Dragon Study — $28</div>
          </div>
          <div className="ps-hero-bottom">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ opacity: 0.35 }}>
                <rect x="14" y="6" width="20" height="36" rx="2" stroke="#0d0d0d" strokeWidth="2" fill="none" />
                <line x1="18" y1="12" x2="30" y2="12" stroke="#0d0d0d" strokeWidth="1.5" />
                <line x1="18" y1="18" x2="30" y2="18" stroke="#0d0d0d" strokeWidth="1.5" />
                <line x1="18" y1="24" x2="26" y2="24" stroke="#0d0d0d" strokeWidth="1.5" />
              </svg>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0d0d0d", opacity: 0.5 }}>New Apparel</span>
            </div>
            <div className="ps-hero-product-label">Concept Tee — $36</div>
          </div>
        </div>
      </section>

      <div className="ps-ticker">
        <span className="ps-ticker-inner">{tickerText}{tickerText}</span>
      </div>

      <section className="ps-section">
        <div className="ps-section-header">
          <div>
            <div className="ps-count">06 products</div>
            <h2 className="ps-section-title">THE<span> SHOP</span></h2>
          </div>
          <span className="ps-view-all">View all →</span>
        </div>
        <div className="ps-filters">
          {categories.map(c => (
            <button key={c} className={`ps-filter${active === c ? " active" : ""}`} onClick={() => setActive(c)}>{c}</button>
          ))}
        </div>
        <div className="ps-grid">
          {products.map(p => (
            <div key={p.id} className="ps-card" onMouseEnter={() => setHovered(p.id)} onMouseLeave={() => setHovered(null)}>
              <div className="ps-card-img">
                {p.badge && <div className="ps-card-badge">{p.badge}</div>}
                <ImgPlaceholder aspect={p.aspect} theme="print" />
              </div>
              <div className="ps-card-body">
                <div className="ps-card-type">{p.type}</div>
                <div className="ps-card-title">{p.title}</div>
                <div className="ps-card-footer">
                  <div className="ps-card-price">${p.price}</div>
                  <button className="ps-card-add-btn">+ Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ps-feature">
        <div>
          <div className="ps-feature-eyebrow">// the artist</div>
          <h2 className="ps-feature-title">WORK THAT SHIPS.</h2>
          <p className="ps-feature-body">William McGuire has built worlds for Microsoft, Amazon, BigFish, NPR and dozens more. Everything in this shop is his actual work — not stock, not templates.</p>
          <button className="ps-btn-primary" style={{ marginTop: 32 }}>Read the story</button>
        </div>
        <div className="ps-feature-img">
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3a3a30" }}>Artist Photo</span>
        </div>
      </section>

      <footer className="ps-footer">
        <div className="ps-footer-top">
          <div>
            <div className="ps-footer-wordmark">WM<span>.</span>SHOP</div>
            <div className="ps-footer-sub">Concept art goods. Ships from Portland, OR. Designed for collectors who live with their walls.</div>
          </div>
          <div>
            <div className="ps-footer-heading">Shop</div>
            <div className="ps-footer-links"><span>Prints</span><span>Apparel</span><span>Mugs</span><span>Limited</span></div>
          </div>
          <div>
            <div className="ps-footer-heading">Studio</div>
            <div className="ps-footer-links"><span>Portfolio</span><span>About</span><span>Contact</span><span>Instagram</span></div>
          </div>
        </div>
        <div className="ps-footer-bottom">
          <span>© 2026 William McGuire Studio</span>
          <span>Privacy · Terms · Refunds</span>
        </div>
      </footer>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// THEME 3: GALLERY EDITION
// ════════════════════════════════════════════════════════════════════
function GalleryEdition() {
  const [active, setActive] = useState("All");

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Jost:wght@200;300;400;500&display=swap');
    .ge-root { font-family: 'Jost', sans-serif; background: #f8f6f1; color: #1c2417; min-height: 100vh; }
    .ge-topbar { background: #2a3d24; color: #c9d4a0; padding: 10px 56px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; display: flex; justify-content: space-between; font-weight: 300; }
    .ge-nav { display: flex; align-items: center; justify-content: space-between; padding: 24px 56px; border-bottom: 1px solid #e0dbd0; background: #f8f6f1; position: sticky; top: 0; z-index: 10; }
    .ge-wordmark { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; color: #1c2417; letter-spacing: 0.02em; }
    .ge-wordmark em { font-style: italic; font-weight: 400; color: #2a3d24; }
    .ge-nav-links { display: flex; gap: 36px; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: #7a8a72; font-weight: 300; }
    .ge-nav-links a { cursor: pointer; transition: color 0.2s; }
    .ge-nav-links a:hover { color: #2a3d24; }
    .ge-nav-right { display: flex; align-items: center; gap: 20px; }
    .ge-cart { background: #2a3d24; color: #f8f6f1; border: none; padding: 11px 28px; font-family: 'Jost', sans-serif; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; cursor: pointer; font-weight: 400; }

    .ge-hero { position: relative; min-height: 580px; display: grid; grid-template-columns: 5fr 4fr; overflow: hidden; }
    .ge-hero-content { padding: 80px 56px; display: flex; flex-direction: column; justify-content: center; position: relative; z-index: 2; }
    .ge-hero-season { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #2a3d24; margin-bottom: 32px; font-weight: 400; display: flex; align-items: center; gap: 12px; }
    .ge-hero-season::before { content: ""; display: block; width: 32px; height: 1px; background: #2a3d24; }
    .ge-hero-title { font-family: 'Playfair Display', serif; font-size: 70px; line-height: 1.02; font-weight: 700; color: #1c2417; margin-bottom: 8px; }
    .ge-hero-title em { font-style: italic; font-weight: 400; color: #2a3d24; display: block; }
    .ge-hero-sub { font-size: 15px; color: #5a6a52; line-height: 1.8; max-width: 420px; margin: 28px 0 44px; font-weight: 300; }
    .ge-hero-actions { display: flex; gap: 20px; align-items: center; }
    .ge-btn-primary { background: #2a3d24; color: #f8f6f1; border: none; padding: 15px 40px; font-family: 'Jost', sans-serif; font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; cursor: pointer; }
    .ge-btn-link { font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: #2a3d24; cursor: pointer; border-bottom: 1px solid currentColor; padding-bottom: 2px; font-weight: 400; }
    .ge-hero-img { background: #dde4d5; display: flex; align-items: center; justify-content: center; position: relative; }
    .ge-hero-img-inner { width: 100%; height: 100%; background: repeating-linear-gradient(45deg, #dde4d5 0px, #dde4d5 8px, #cdd8c4 8px, #cdd8c4 9px); display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 10px; }
    .ge-hero-tag { position: absolute; bottom: 32px; left: 32px; background: rgba(248,246,241,0.95); padding: 12px 20px; }
    .ge-hero-tag-title { font-family: 'Playfair Display', serif; font-size: 14px; font-weight: 700; color: #1c2417; }
    .ge-hero-tag-sub { font-size: 11px; color: #7a8a72; letter-spacing: 0.1em; text-transform: uppercase; margin-top: 2px; }
    .ge-hero-price { position: absolute; top: 32px; right: 32px; background: #c9a84c; color: #1c2417; padding: 8px 16px; font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 700; }

    .ge-divider { height: 1px; background: linear-gradient(to right, transparent, #c9a84c, transparent); margin: 0 56px; }

    .ge-section { padding: 72px 56px; }
    .ge-section-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 56px; }
    .ge-section-label { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #7a8a72; margin-bottom: 12px; display: flex; align-items: center; gap: 10px; }
    .ge-section-label::before { content: ""; display: block; width: 24px; height: 1px; background: #c9a84c; }
    .ge-section-title { font-family: 'Playfair Display', serif; font-size: 48px; font-weight: 700; line-height: 1.05; }
    .ge-section-title em { font-style: italic; font-weight: 400; }
    .ge-view-all { font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #2a3d24; cursor: pointer; border-bottom: 1px solid #c9a84c; padding-bottom: 3px; margin-top: 16px; font-weight: 300; }

    .ge-filters { display: flex; gap: 4px; margin-bottom: 48px; }
    .ge-filter { background: none; border: 1px solid #d8d3c8; padding: 8px 22px; font-family: 'Jost', sans-serif; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; color: #7a8a72; transition: all 0.2s; font-weight: 300; }
    .ge-filter.active { background: #2a3d24; color: #f8f6f1; border-color: #2a3d24; }

    .ge-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
    .ge-card { cursor: pointer; position: relative; }
    .ge-card-img { overflow: hidden; margin-bottom: 20px; position: relative; }
    .ge-card-badge { position: absolute; top: 14px; left: 14px; background: #c9a84c; color: #1c2417; font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; padding: 5px 10px; z-index: 2; font-weight: 500; }
    .ge-card-type { font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: #7a8a72; margin-bottom: 8px; font-weight: 300; }
    .ge-card-title { font-family: 'Playfair Display', serif; font-size: 19px; font-weight: 700; color: #1c2417; margin-bottom: 10px; line-height: 1.2; }
    .ge-card-footer { display: flex; align-items: center; justify-content: space-between; }
    .ge-card-price { font-size: 16px; color: #1c2417; font-weight: 400; }
    .ge-card-add { background: #2a3d24; color: #f8f6f1; border: none; padding: 8px 18px; font-family: 'Jost', sans-serif; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; opacity: 0; transition: opacity 0.2s; }
    .ge-card:hover .ge-card-add { opacity: 1; }
    .ge-card-divider { height: 1px; background: #e0dbd0; margin: 16px 0; }

    .ge-about { background: #2a3d24; padding: 72px 56px; display: grid; grid-template-columns: 3fr 2fr; gap: 72px; align-items: center; }
    .ge-about-label { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #c9a84c; margin-bottom: 24px; }
    .ge-about-title { font-family: 'Playfair Display', serif; font-size: 48px; font-weight: 400; font-style: italic; color: #f8f6f1; line-height: 1.1; margin-bottom: 24px; }
    .ge-about-body { font-size: 15px; color: #8a9a82; line-height: 1.8; font-weight: 300; max-width: 480px; }
    .ge-about-img { background: #3a5030; height: 320px; display: flex; align-items: center; justify-content: center; }
    .ge-about-clients { display: flex; gap: 24px; flex-wrap: wrap; margin-top: 36px; }
    .ge-about-client { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: #4a5a42; font-weight: 400; border: 1px solid #3a4a32; padding: 6px 14px; }

    .ge-footer { background: #1c2417; color: #f8f6f1; padding: 56px; }
    .ge-footer-top { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 56px; margin-bottom: 48px; }
    .ge-footer-wordmark { font-family: 'Playfair Display', serif; font-size: 26px; font-weight: 700; margin-bottom: 16px; }
    .ge-footer-wordmark em { font-style: italic; font-weight: 400; color: #c9a84c; }
    .ge-footer-sub { font-size: 13px; color: #4a5a42; line-height: 1.7; font-weight: 300; }
    .ge-footer-heading { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #c9a84c; margin-bottom: 20px; }
    .ge-footer-links { display: flex; flex-direction: column; gap: 12px; font-size: 13px; color: #4a5a42; font-weight: 300; }
    .ge-footer-bottom { border-top: 1px solid #2a3a24; padding-top: 28px; display: flex; justify-content: space-between; font-size: 11px; color: #3a4a32; letter-spacing: 0.08em; }
  `;

  return (
    <div className="ge-root">
      <style>{css}</style>
      <div className="ge-topbar">
        <span>Free shipping on orders over $75 — New prints just arrived</span>
        <span>Portfolio ↗ · Instagram ↗</span>
      </div>
      <nav className="ge-nav">
        <div className="ge-wordmark">William <em>McGuire</em></div>
        <div className="ge-nav-links">
          <a>The Shop</a><a>Prints</a><a>Apparel</a><a>Limited</a><a>About</a>
        </div>
        <div className="ge-nav-right">
          <span style={{ fontSize: 12, color: "#7a8a72", letterSpacing: "0.1em" }}>USD ▾</span>
          <button className="ge-cart">Bag (0)</button>
        </div>
      </nav>

      <section className="ge-hero">
        <div className="ge-hero-content">
          <div className="ge-hero-season">Summer Collection 2026</div>
          <h1 className="ge-hero-title">
            Art for the
            <em>Collector.</em>
          </h1>
          <p className="ge-hero-sub">Original prints, limited apparel, and studio objects from illustrator and concept artist William McGuire — creator of worlds for Microsoft, Amazon, and NPR.</p>
          <div className="ge-hero-actions">
            <button className="ge-btn-primary">Explore the Collection</button>
            <span className="ge-btn-link">View all →</span>
          </div>
        </div>
        <div className="ge-hero-img">
          <div className="ge-hero-img-inner">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" style={{ opacity: 0.3 }}>
              <rect x="7" y="7" width="42" height="42" rx="3" stroke="#2a3d24" strokeWidth="2" fill="none" />
              <circle cx="20" cy="21" r="4.5" fill="#2a3d24" />
              <path d="M7 42l12-12 9 9 9-12 12 15" stroke="#2a3d24" strokeWidth="2" fill="none" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="ge-hero-tag">
            <div className="ge-hero-tag-title">Dragon Study No. 7</div>
            <div className="ge-hero-tag-sub">Limited Edition Print · 18×24"</div>
          </div>
          <div className="ge-hero-price">$35</div>
        </div>
      </section>

      <div className="ge-divider" style={{ margin: "0" }} />

      <section className="ge-section">
        <div className="ge-section-header">
          <div>
            <div className="ge-section-label">The Collection</div>
            <h2 className="ge-section-title">Featured<br /><em>Works</em></h2>
          </div>
          <span className="ge-view-all">Browse all →</span>
        </div>
        <div className="ge-filters">
          {categories.map(c => (
            <button key={c} className={`ge-filter${active === c ? " active" : ""}`} onClick={() => setActive(c)}>{c}</button>
          ))}
        </div>
        <div className="ge-grid">
          {products.map(p => (
            <div key={p.id} className="ge-card">
              <div className="ge-card-img">
                {p.badge && <div className="ge-card-badge">{p.badge}</div>}
                <ImgPlaceholder aspect={p.aspect} theme="gallery" />
              </div>
              <div className="ge-card-type">{p.type}</div>
              <div className="ge-card-title">{p.title}</div>
              <div className="ge-card-divider" />
              <div className="ge-card-footer">
                <div className="ge-card-price">${p.price}</div>
                <button className="ge-card-add">Add to Bag</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ge-about">
        <div>
          <div className="ge-about-label">The Artist</div>
          <h2 className="ge-about-title">"Making the invisible worlds visible."</h2>
          <p className="ge-about-body">William McGuire has spent over a decade creating characters, environments, and visual systems for some of the most recognizable brands in entertainment and tech. Every piece in this shop comes from that same creative practice.</p>
          <div className="ge-about-clients">
            {["Microsoft", "Amazon", "NPR", "BigFish", "Dreambox"].map(c => (
              <div key={c} className="ge-about-client">{c}</div>
            ))}
          </div>
        </div>
        <div className="ge-about-img">
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#3a5030" }}>Portrait</span>
        </div>
      </section>

      <footer className="ge-footer">
        <div className="ge-footer-top">
          <div>
            <div className="ge-footer-wordmark">William <em>McGuire</em></div>
            <div className="ge-footer-sub">Illustrator and concept artist. Prints, apparel, and objects shipped from Portland, OR. Every piece is made with intent.</div>
          </div>
          <div>
            <div className="ge-footer-heading">Shop</div>
            <div className="ge-footer-links"><span>All Products</span><span>Prints</span><span>Apparel</span><span>Mugs</span><span>Limited</span></div>
          </div>
          <div>
            <div className="ge-footer-heading">Studio</div>
            <div className="ge-footer-links"><span>Portfolio</span><span>About</span><span>Contact</span><span>Instagram</span></div>
          </div>
        </div>
        <div className="ge-footer-bottom">
          <span>© 2026 William McGuire. All rights reserved.</span>
          <span>Privacy · Terms · Returns</span>
        </div>
      </footer>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// ROOT — SWITCHER
// ════════════════════════════════════════════════════════════════════
const themes = [
  { id: "studio", label: "Studio Light", sub: "Warm ivory · Terracotta · Editorial" },
  { id: "print", label: "Print Shop Bold", sub: "Black · Cyan · Yellow · High energy" },
  { id: "gallery", label: "Gallery Edition", sub: "Forest green · Gold · Refined" },
];

export default function App() {
  const [active, setActive] = useState("studio");

  const switchCss = `
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap');
    .switcher { position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%); z-index: 9999; background: rgba(10,10,10,0.92); border: 1px solid rgba(255,255,255,0.1); padding: 10px 12px; display: flex; gap: 8px; backdrop-filter: blur(12px); border-radius: 40px; box-shadow: 0 8px 32px rgba(0,0,0,0.4); }
    .sw-btn { padding: 8px 20px; border: none; background: transparent; color: rgba(255,255,255,0.5); font-family: 'DM Sans', sans-serif; font-size: 12px; cursor: pointer; border-radius: 32px; transition: all 0.2s; white-space: nowrap; letter-spacing: 0.04em; }
    .sw-btn.active { background: white; color: #0a0a0a; font-weight: 500; }
    .sw-btn sub { display: block; font-size: 9px; opacity: 0.6; margin-top: 1px; }
  `;

  return (
    <>
      <style>{switchCss}</style>
      {active === "studio" && <StudioLight />}
      {active === "print" && <PrintShopBold />}
      {active === "gallery" && <GalleryEdition />}
      <div className="switcher">
        {themes.map(t => (
          <button key={t.id} className={`sw-btn${active === t.id ? " active" : ""}`} onClick={() => setActive(t.id)}>
            {t.label}
            <sub>{t.sub}</sub>
          </button>
        ))}
      </div>
    </>
  );
}
