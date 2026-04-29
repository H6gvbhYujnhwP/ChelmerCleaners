/*
  CHELMER CLEANERS — Services Page
  Design: "Clean Lines, Bright Skies"
  Full service descriptions with icons, service image, and CTA
*/

import { Link } from "wouter";
import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const SERVICES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/Nf6Hjaym7JRvVDcK4DDdeK/chelmer-services-KiDWcXu7Q3C4jFAY8G3JFn.webp";

const services = [
  {
    icon: "👔",
    title: "Dry Cleaning",
    desc: "Professional dry cleaning for suits, dresses, coats, and delicate garments. We treat every item with care using industry-standard processes to ensure the best results.",
    badge: null,
  },
  {
    icon: "🪟",
    title: "Curtains & Covers",
    desc: "Full cleaning service for curtains of all sizes and fabrics, plus sofa cushion covers, scatter cushions, and garden furniture covers. Collected, cleaned, and returned ready to use.",
    badge: null,
  },
  {
    icon: "🛏️",
    title: "Duvets & Pillows — Laundered & Packaged",
    desc: "Thorough cleaning for duvets and pillows of all sizes — feather or hollowfibre. Every item is hygienically laundered and returned neatly packaged in a duvet bag, fresh and ready to use.",
    badge: null,
  },
  {
    icon: "🌿",
    title: "Bedding — Laundered & Pressed",
    desc: "Complete bedding sets washed and pressed to a crisp finish. We handle full sets — duvet cover, sheets, and pillowcases — returned beautifully laundered and pressed, ready to put straight on the bed.",
    badge: "Popular",
  },
  {
    icon: "💍",
    title: "Wedding, Bridesmaid & Prom Dress Cleaning",
    desc: "Your special dress deserves special care. We professionally clean wedding, bridesmaid and prom dresses and can return them in a specially designed preservation box to protect them for years to come, or in a luxury gown bag.",
    badge: "Special",
  },
  {
    icon: "🧺",
    title: "Service Washing",
    desc: "Bag up your laundry and we'll wash, dry, and fold it for you. Perfect for busy households who want clean clothes without the effort. Minimum order £20.",
    badge: "Popular",
  },
  {
    icon: "🧹",
    title: "Ironing",
    desc: "Crisp, professionally ironed shirts, blouses, trousers and more. Returned on hangers or neatly folded — your choice.",
    badge: "Popular",
  },
  {
    icon: "🪡",
    title: "Repairs & Alterations",
    desc: "From replacing a button to taking in a dress, Sandra offers a range of clothing repairs and alterations to keep your wardrobe in top condition.",
    badge: null,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

export default function Services() {
  return (
    <div style={{ overflowX: "hidden" }}>

      {/* ── PAGE HEADER ── */}
      <section style={{ backgroundColor: "#29ABE2", paddingTop: "3rem", paddingBottom: "0" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, fontSize: "clamp(1.75rem, 6vw, 2.75rem)", color: "white", marginBottom: "0.75rem" }}>
              Our Services
            </h1>
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1rem", lineHeight: 1.6, maxWidth: "520px", marginBottom: "2rem" }}>
              Everything collected from your door and returned fresh, clean, and ready to use. No trips to the dry cleaner — we come to you.
            </p>
          </motion.div>
        </div>
        <div className="cloud-divider">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,60 L0,30 Q80,0 160,22 Q240,44 320,22 Q400,0 480,22 Q560,44 640,22 Q720,0 800,22 Q880,44 960,22 Q1040,0 1120,22 Q1200,44 1280,22 Q1360,0 1440,22 L1440,60 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section style={{ backgroundColor: "white", paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem" }} className="services-detail-grid">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                className="service-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <span style={{ fontSize: "2.25rem", flexShrink: 0 }}>{s.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.4rem", flexWrap: "wrap" }}>
                      <h3 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, color: "#1B3A6B", fontSize: "1.1rem", margin: 0 }}>
                        {s.title}
                      </h3>
                      {s.badge && (
                        <span style={{ backgroundColor: "#F7941D", color: "white", fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "0.7rem", padding: "0.15rem 0.6rem", borderRadius: "9999px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                          {s.badge}
                        </span>
                      )}
                    </div>
                    <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMAGE + FREE DELIVERY ── */}
      <section style={{ backgroundColor: "#EEF8FD", paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem", alignItems: "center" }} className="img-cta-grid">
            <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img
                src={SERVICES_IMG}
                alt="Chelmer Cleaners service items"
                style={{ width: "100%", borderRadius: "1.25rem", boxShadow: "0 6px 28px rgba(27,58,107,0.12)" }}
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              <h2 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, fontSize: "clamp(1.4rem, 5vw, 2rem)", color: "#1B3A6B", marginBottom: "1rem" }}>
                Free Collection &amp; Delivery
              </h2>
              <p style={{ color: "#555", lineHeight: 1.65, marginBottom: "1.25rem", fontSize: "0.95rem" }}>
                On all orders over £20, Sandra will collect your items from your doorstep and return them clean and fresh — completely free of charge.
              </p>
              <div style={{ backgroundColor: "#F7941D", borderRadius: "0.75rem", padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <span style={{ fontSize: "1.5rem" }}>🚚</span>
                <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, color: "white", fontSize: "1rem" }}>
                  FREE delivery on orders over £20
                </span>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link href="/prices" className="btn-orange">
                  View Prices <ArrowRight size={16} />
                </Link>
                <a href="tel:07855716659" className="btn-navy">
                  <Phone size={16} /> Call Sandra
                </a>
              </div>
            </motion.div>
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
          .services-detail-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .img-cta-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}
