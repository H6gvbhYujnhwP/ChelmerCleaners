/*
  CHELMER CLEANERS — Prices Page
  Design: "Clean Lines, Bright Skies"
  Palette: Sky Blue #29ABE2 | Navy #1B3A6B | Orange #F7941D | Green #39B54A
  Real prices from Sandra's price sheets (April 2026)
*/

import { motion } from "framer-motion";
import { Phone, Info, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45 },
  }),
};

const categories = [
  {
    title: "Dry Cleaning",
    icon: "👔",
    items: [
      { item: "Suit (2 piece)", price: "£19.00" },
      { item: "Suit (3 piece)", price: "£23.50" },
      { item: "Jacket / Blazer", price: "£11.50" },
      { item: "Trousers", price: "£8.50" },
      { item: "Dress (standard)", price: "£19.00" },
      { item: "Dress (evening/formal)", price: "£25.00" },
      { item: "Coat / Overcoat", price: "£19.50" },
      { item: "Skirt", price: "£8.50" },
      { item: "Blouse / Shirt", price: "£5.50" },
      { item: "Tie", price: "£6.50" },
      { item: "Knitwear", price: "£8.50" },
    ],
  },
  {
    title: "Household Items",
    icon: "🪶",
    note: "Duvets priced by fill type — Feather / Hollowfibre",
    items: [
      { item: "Single Duvet — Feather", price: "£29.00" },
      { item: "Single Duvet — Hollowfibre", price: "£25.00" },
      { item: "Double Duvet — Feather", price: "£31.00" },
      { item: "Double Duvet — Hollowfibre", price: "£27.00" },
      { item: "King Size Duvet — Feather", price: "£33.00" },
      { item: "King Size Duvet — Hollowfibre", price: "£29.00" },
      { item: "Pillow (each)", price: "£11.00" },
      { item: "Mattress Topper", price: "£38.00" },
      { item: "Curtains", price: "From £7 per sq metre" },
      { item: "Blanket", price: "From £15.00" },
      { item: "Covers (sofa, cushion, garden furniture)", price: "From £8.00" },
      { item: "Bedspread", price: "£30.00" },
    ],
  },
  {
    title: "Bedding — Laundered & Pressed",
    icon: "🛏️",
    note: "Complete set laundered and pressed. Includes cover, sheet & pillowcases.",
    items: [
      { item: "Single Set (cover, sheet, 2 pillowcases)", price: "£20.00" },
      { item: "Double Set (cover, sheet, 4 pillowcases)", price: "£25.00" },
      { item: "King Set (cover, sheet, 4 pillowcases)", price: "£28.00" },
      { item: "Super King Set (cover, sheet, 4 pillowcases)", price: "£30.00" },
    ],
  },
  {
    title: "Service Washing",
    icon: "🧺",
    note: "Minimum order £20.00",
    items: [
      { item: "Wash, Dry & Fold (per kg)", price: "£4.50" },
    ],
  },
  {
    title: "Ironing",
    icon: "👕",
    items: [
      { item: "Shirt / Blouse", price: "£3.00" },
      { item: "Trousers", price: "£3.50" },
      { item: "Dress", price: "£4.00" },
      { item: "Any other items", price: "POA" },
    ],
  },
  {
    title: "Repairs & Alterations",
    icon: "🪡",
    items: [
      { item: "Button replacement (each)", price: "£3.50" },
      { item: "Zip replacement (standard)", price: "£18.50" },
      { item: "Hem (trousers/skirt)", price: "£18.00" },
      { item: "Take in / let out (seam)", price: "£19.00" },
      { item: "Patch repair", price: "£12.00" },
      { item: "Custom alterations", price: "POA" },
    ],
  },
];

export default function Prices() {
  return (
    <div style={{ backgroundColor: "white" }}>
      {/* ── HERO ── */}
      <section style={{
        background: "linear-gradient(135deg, #29ABE2 0%, #1B3A6B 100%)",
        padding: "4rem 0 5rem",
        position: "relative",
        overflow: "hidden",
      }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "white", fontSize: "clamp(2rem, 6vw, 3rem)", marginBottom: "0.75rem" }}>
              Price List
            </h1>
            <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.05rem", maxWidth: "520px", lineHeight: 1.6 }}>
              Competitive prices for all our cleaning services. Free collection &amp; delivery on orders over £20.
            </p>
          </motion.div>
        </div>
        {/* Wave divider */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
            <path d="M0,60 L0,30 Q80,0 160,22 Q240,44 320,22 Q400,0 480,22 Q560,44 640,22 Q720,0 800,22 Q880,44 960,22 Q1040,0 1120,22 Q1200,44 1280,22 Q1360,0 1440,22 L1440,60 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ── DISCLAIMER ── */}
      <section style={{ backgroundColor: "white", paddingTop: "2rem", paddingBottom: "0.5rem" }}>
        <div className="container">
          <div style={{
            backgroundColor: "#FFF8ED",
            border: "1px solid #F7941D",
            borderRadius: "0.75rem",
            padding: "1rem 1.25rem",
            display: "flex",
            alignItems: "flex-start",
            gap: "0.75rem",
          }}>
            <Info size={20} color="#F7941D" style={{ flexShrink: 0, marginTop: "0.1rem" }} />
            <p style={{ color: "#7a4a00", fontSize: "0.875rem", lineHeight: 1.55, margin: 0 }}>
              <strong>Please note:</strong> Prices shown are indicative and subject to confirmation. For an accurate quote or to discuss a specific item, please call or text Sandra on <a href="tel:07855716659" style={{ color: "#1B3A6B", fontWeight: 700 }}>07855 716659</a>.
            </p>
          </div>
        </div>
      </section>

      {/* ── FREE DELIVERY BADGE ── */}
      <section style={{ backgroundColor: "white", paddingTop: "1.5rem", paddingBottom: "0" }}>
        <div className="container">
          <div style={{
            backgroundColor: "#39B54A",
            borderRadius: "0.75rem",
            padding: "1rem 1.25rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}>
            <span style={{ fontSize: "1.5rem" }}>🚚</span>
            <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, color: "white", fontSize: "1rem" }}>
              FREE collection &amp; delivery on all orders over £20
            </span>
          </div>
        </div>
      </section>

      {/* ── PRICE TABLES ── */}
      <section style={{ backgroundColor: "white", paddingTop: "2rem", paddingBottom: "3rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }} className="price-grid">
            {categories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={ci}
                variants={fadeUp}
                style={{
                  borderRadius: "1rem",
                  overflow: "hidden",
                  boxShadow: "0 2px 16px rgba(27,58,107,0.08)",
                  border: "1px solid #e8f4fb",
                }}
              >
                {/* Table header */}
                <div style={{ backgroundColor: "#1B3A6B", padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ fontSize: "1.5rem" }}>{cat.icon}</span>
                  <div>
                    <h3 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, color: "white", fontSize: "1.1rem", margin: 0 }}>
                      {cat.title}
                    </h3>
                    {cat.note && (
                      <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.78rem", margin: "0.2rem 0 0" }}>{cat.note}</p>
                    )}
                  </div>
                </div>
                {/* Table rows */}
                <table className="price-table">
                  <tbody>
                    {cat.items.map((row, ri) => (
                      <tr key={ri}>
                        <td style={{ color: "#333", fontSize: "0.9rem" }}>{row.item}</td>
                        <td style={{ color: "#1B3A6B", fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "0.95rem", textAlign: "right", whiteSpace: "nowrap" }}>
                          {row.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <p style={{ color: "#555", fontSize: "0.95rem", marginBottom: "1.25rem" }}>
              Not sure about pricing? Just give Sandra a call — she's happy to help.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:07855716659" className="btn-orange">
                <Phone size={16} /> Call Sandra
              </a>
              <Link href="/contact" className="btn-navy">
                Send an Enquiry <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STICKY MOBILE CALL BAR ── */}
      <a href="tel:07855716659" className="sticky-call-bar">
        <Phone size={20} />
        Tap to Call Sandra — 07855 716659
      </a>

      <style>{`
        @media (min-width: 768px) {
          .price-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
