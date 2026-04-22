/*
  CHELMER CLEANERS — Prices Page
  Design: "Clean Lines, Bright Skies"
  Mock price list tables — Sandra will supply real prices
  Note: All prices are PLACEHOLDER values — to be updated by Sandra
*/

import { Link } from "wouter";
import { Phone, ArrowRight, Info } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.45 } }),
};

const categories = [
  {
    title: "Dry Cleaning",
    icon: "👔",
    items: [
      { item: "Suit (2 piece)", price: "£12.50" },
      { item: "Suit (3 piece)", price: "£15.00" },
      { item: "Jacket / Blazer", price: "£8.50" },
      { item: "Trousers", price: "£5.50" },
      { item: "Dress (standard)", price: "£9.00" },
      { item: "Dress (evening/formal)", price: "£14.00" },
      { item: "Coat / Overcoat", price: "£12.00" },
      { item: "Skirt", price: "£5.50" },
      { item: "Blouse / Shirt", price: "£5.00" },
    ],
  },
  {
    title: "Household Items",
    icon: "🛏️",
    items: [
      { item: "Single Duvet", price: "£15.00" },
      { item: "Double Duvet", price: "£18.00" },
      { item: "King Size Duvet", price: "£22.00" },
      { item: "Pillow (each)", price: "£5.00" },
      { item: "Curtains (per pair, small)", price: "£14.00" },
      { item: "Curtains (per pair, large)", price: "£22.00" },
      { item: "Blanket", price: "£10.00" },
      { item: "Bedspread", price: "£14.00" },
    ],
  },
  {
    title: "Service Washing",
    icon: "🧺",
    items: [
      { item: "Wash & Dry (per kg)", price: "£3.50" },
      { item: "Wash, Dry & Fold (per kg)", price: "£4.50" },
      { item: "Minimum charge", price: "£8.00" },
    ],
  },
  {
    title: "Ironing",
    icon: "🧹",
    items: [
      { item: "Shirt / Blouse", price: "£2.50" },
      { item: "Trousers", price: "£2.50" },
      { item: "Dress", price: "£3.50" },
      { item: "Bedsheet (single)", price: "£2.00" },
      { item: "Bedsheet (double/king)", price: "£3.00" },
      { item: "Duvet cover (single)", price: "£3.00" },
      { item: "Duvet cover (double/king)", price: "£4.00" },
    ],
  },
  {
    title: "Repairs & Alterations",
    icon: "🪡",
    items: [
      { item: "Button replacement (each)", price: "£2.00" },
      { item: "Zip replacement (standard)", price: "£8.00" },
      { item: "Hem (trousers/skirt)", price: "£7.00" },
      { item: "Take in / let out (seam)", price: "£9.00" },
      { item: "Patch repair", price: "£6.00" },
      { item: "Custom alterations", price: "POA" },
    ],
  },
];

export default function Prices() {
  return (
    <div style={{ overflowX: "hidden" }}>

      {/* ── PAGE HEADER ── */}
      <section style={{ backgroundColor: "#29ABE2", paddingTop: "3rem", paddingBottom: "0" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, fontSize: "clamp(1.75rem, 6vw, 2.75rem)", color: "white", marginBottom: "0.75rem" }}>
              Price List
            </h1>
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1rem", lineHeight: 1.6, maxWidth: "520px", marginBottom: "1.5rem" }}>
              Competitive prices for all our cleaning services. Free delivery on orders over £15.
            </p>
          </motion.div>
        </div>
        <div className="cloud-divider">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
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
              FREE collection &amp; delivery on all orders over £15
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
                  <h3 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, color: "white", fontSize: "1.1rem", margin: 0 }}>
                    {cat.title}
                  </h3>
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
              <Link href="/book" className="btn-navy">
                Book a Collection <ArrowRight size={16} />
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
