/*
  CHELMER CLEANERS — Home Page
  Design: "Clean Lines, Bright Skies"
  Hero with van image, prominent phone, services overview, how it works, CTA
*/

import { Link } from "wouter";
import { Phone, Truck, Star, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/Nf6Hjaym7JRvVDcK4DDdeK/chelmer-hero-gJ22o7Wezyog9tcZta3KJ9.webp";
const DELIVERY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/Nf6Hjaym7JRvVDcK4DDdeK/chelmer-delivery-ArfHaCcKkYoJcUtFeiiMz7.webp";

const services = [
  { icon: "👔", label: "Dry Cleaning" },
  { icon: "🪞", label: "Curtains & Covers" },
  { icon: "🪶", label: "Duvets & Pillows" },
  { icon: "🛏️", label: "Bedding" },
  { icon: "💍", label: "Wedding & Prom Dresses" },
  { icon: "🧺", label: "Service Washing" },
  { icon: "👕", label: "Ironing" },
  { icon: "🪡", label: "Repairs & Alterations" },
];

const steps = [
  { num: "1", title: "Get in Touch", desc: "Call or text Sandra to arrange a convenient collection time that suits you." },
  { num: "2", title: "We Collect", desc: "Sandra collects your items from your doorstep — no need to go anywhere." },
  { num: "3", title: "We Clean", desc: "Your items are professionally cleaned, pressed, and packaged." },
  { num: "4", title: "We Deliver", desc: "Your fresh, clean items are returned straight to your door." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function Home() {
  return (
    <div style={{ overflowX: "hidden" }}>

      {/* ── HERO ── */}
      <section style={{ backgroundColor: "#29ABE2", position: "relative", overflow: "hidden" }}>
        <div className="container" style={{ paddingTop: "2.5rem", paddingBottom: "0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem", alignItems: "center" }} className="hero-grid">
            {/* Text */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                backgroundColor: "#F7941D",
                color: "white",
                fontFamily: "Nunito, sans-serif",
                fontWeight: 700,
                fontSize: "0.8rem",
                padding: "0.3rem 0.85rem",
                borderRadius: "9999px",
                marginBottom: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}>
                <Truck size={14} /> Free Delivery on Orders Over £20
              </div>

              <h1 style={{
                fontFamily: "Nunito, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2rem, 7vw, 3.25rem)",
                color: "white",
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}>
                All Your Cleaning,<br />
                <span style={{ color: "#1B3A6B" }}>Collected &amp; Delivered</span>
              </h1>

              <p style={{ color: "rgba(255,255,255,0.92)", fontSize: "1.05rem", lineHeight: 1.65, marginBottom: "1.5rem", maxWidth: "440px" }}>
                Professional dry cleaning, laundry, ironing and more — picked up from your door and returned fresh and clean.
              </p>

              {/* Phone number — the hero CTA */}
              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{
                  backgroundColor: "white",
                  borderRadius: "0.875rem",
                  padding: "1rem 1.25rem",
                  display: "inline-block",
                  boxShadow: "0 4px 16px rgba(27,58,107,0.18)",
                }}>
                  <p style={{ color: "#555", fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.25rem" }}>
                    Call or Text Sandra to Book:
                  </p>
                  <a href="tel:07855716659" style={{
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 900,
                    color: "#1B3A6B",
                    fontSize: "clamp(1.75rem, 8vw, 2.75rem)",
                    textDecoration: "none",
                    display: "block",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                  }}>
                    07855 716659
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link href="/book" className="btn-orange">
                  Book a Collection <ArrowRight size={16} />
                </Link>
                <Link href="/services" className="btn-navy">
                  Our Services
                </Link>
              </div>
            </motion.div>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src={HERO_IMG}
                alt="Chelmer Cleaners delivery van"
                style={{ width: "100%", maxWidth: "520px", borderRadius: "1rem", boxShadow: "0 8px 32px rgba(27,58,107,0.25)" }}
              />
            </motion.div>
          </div>
        </div>

        {/* Cloud wave bottom */}
        <div className="cloud-divider" style={{ marginTop: "1.5rem" }}>
          <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,70 L0,40 Q80,5 160,30 Q240,55 320,30 Q400,5 480,30 Q560,55 640,30 Q720,5 800,30 Q880,55 960,30 Q1040,5 1120,30 Q1200,55 1280,30 Q1360,5 1440,30 L1440,70 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ── SERVICES STRIP ── */}
      <section style={{ backgroundColor: "white", paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <h2 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 5vw, 2rem)", color: "#1B3A6B", textAlign: "center", marginBottom: "0.5rem" }}>
              What We Clean
            </h2>
            <p style={{ textAlign: "center", color: "#666", marginBottom: "2rem", fontSize: "0.95rem" }}>
              A full range of cleaning services, all collected and delivered to your door.
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }} className="services-grid">
            {services.map((s, i) => (
              <motion.div
                key={s.label}
                className="service-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
              >
                <span style={{ fontSize: "1.75rem" }}>{s.icon}</span>
                <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, color: "#1B3A6B", fontSize: "0.95rem" }}>{s.label}</span>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/services" className="btn-orange">
              View All Services & Prices <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ backgroundColor: "#EEF8FD", paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <h2 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 5vw, 2rem)", color: "#1B3A6B", textAlign: "center", marginBottom: "0.5rem" }}>
              How It Works
            </h2>
            <p style={{ textAlign: "center", color: "#666", marginBottom: "2.5rem", fontSize: "0.95rem" }}>
              Simple, hassle-free cleaning from your doorstep.
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem" }} className="steps-grid">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                  backgroundColor: "white",
                  borderRadius: "1rem",
                  padding: "1.25rem",
                  boxShadow: "0 2px 12px rgba(27,58,107,0.07)",
                }}
              >
                <div style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "#29ABE2",
                  color: "white",
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: 900,
                  fontSize: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {step.num}
                </div>
                <div>
                  <div style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, color: "#1B3A6B", fontSize: "1rem", marginBottom: "0.25rem" }}>
                    {step.title}
                  </div>
                  <div style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.55 }}>{step.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DELIVERY IMAGE + PHONE CTA ── */}
      <section style={{ backgroundColor: "white", paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem", alignItems: "center" }} className="cta-grid">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img
                src={DELIVERY_IMG}
                alt="Doorstep delivery of clean laundry"
                style={{ width: "100%", borderRadius: "1.25rem", boxShadow: "0 6px 28px rgba(27,58,107,0.12)" }}
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", backgroundColor: "#39B54A", color: "white", fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "0.8rem", padding: "0.3rem 0.85rem", borderRadius: "9999px", marginBottom: "1rem" }}>
                <CheckCircle size={14} /> Trusted Local Service
              </div>
              <h2 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, fontSize: "clamp(1.5rem, 5vw, 2.25rem)", color: "#1B3A6B", lineHeight: 1.2, marginBottom: "1rem" }}>
                Ready to Book Your First Collection?
              </h2>
              <p style={{ color: "#555", lineHeight: 1.65, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                Give Sandra a call or text and she'll arrange a convenient slot to collect your items. It couldn't be simpler.
              </p>

              <div style={{ backgroundColor: "#EEF8FD", borderRadius: "1rem", padding: "1.25rem", marginBottom: "1.5rem", textAlign: "center" }}>
                <p style={{ color: "#555", fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.4rem" }}>
                  Call or Text Sandra:
                </p>
                <a href="tel:07855716659" className="phone-hero" style={{ fontSize: "clamp(1.75rem, 8vw, 2.75rem)" }}>
                  07855 716659
                </a>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <a href="tel:07855716659" className="btn-orange">
                  <Phone size={16} /> Call Now
                </a>
                <Link href="/book" className="btn-navy">
                  Book Online <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section style={{ backgroundColor: "#EEF8FD", paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem", alignItems: "center" }} className="story-grid">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                backgroundColor: "#1B3A6B",
                color: "white",
                fontFamily: "Nunito, sans-serif",
                fontWeight: 700,
                fontSize: "0.8rem",
                padding: "0.3rem 0.85rem",
                borderRadius: "9999px",
                marginBottom: "1rem",
                textTransform: "uppercase" as const,
                letterSpacing: "0.06em",
              }}>
                ❤️ A Family Business
              </div>
              <h2 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, fontSize: "clamp(1.5rem, 5vw, 2.25rem)", color: "#1B3A6B", lineHeight: 1.2, marginBottom: "1.25rem" }}>
                Built on Care, Carried with Pride
              </h2>
              <p style={{ color: "#444", lineHeight: 1.75, fontSize: "0.97rem", marginBottom: "1rem" }}>
                Chelmer Cleaners has always been more than just a cleaning service — it’s a family story. Sandra had the privilege of working alongside her father in the business, learning the trade from someone who took real pride in every garment returned to a customer. Those values of care, attention to detail, and genuine personal service were passed down with every lesson.
              </p>
              <p style={{ color: "#444", lineHeight: 1.75, fontSize: "0.97rem", marginBottom: "1.5rem" }}>
                Today, Sandra carries that legacy forward. Chelmer Cleaners remains a local, personal service — no call centres, no drop-off points, just Sandra collecting from your door and returning everything clean, fresh, and perfectly cared for. When you use Chelmer Cleaners, you’re not just a customer; you’re part of a tradition built on trust.
              </p>
              <a href="tel:07855716659" className="btn-orange">
                <Phone size={16} /> Call Sandra
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{
                backgroundColor: "white",
                borderRadius: "1.25rem",
                padding: "2rem",
                boxShadow: "0 4px 24px rgba(27,58,107,0.1)",
                textAlign: "center" as const,
              }}
            >
              <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🚐</div>
              <blockquote style={{
                fontFamily: "Nunito, sans-serif",
                fontStyle: "italic",
                fontSize: "1.1rem",
                color: "#1B3A6B",
                lineHeight: 1.65,
                margin: "0 0 1rem",
                fontWeight: 600,
              }}>
                &ldquo;I learned this trade from my father, and I carry it on with the same care and pride he always showed. Every item matters.&rdquo;
              </blockquote>
              <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, color: "#F7941D", fontSize: "0.95rem" }}>
                — Sandra, Chelmer Cleaners
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section style={{ backgroundColor: "#1B3A6B", paddingTop: "2rem", paddingBottom: "2rem" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem 2.5rem" }}>
            {[
              { icon: <Star size={20} fill="#F7941D" color="#F7941D" />, text: "5-Star Local Service" },
              { icon: <Truck size={20} color="#29ABE2" />, text: "Free Delivery Over £20" },
              { icon: <CheckCircle size={20} color="#39B54A" />, text: "Fully Insured" },
              { icon: <Phone size={20} color="#F7941D" />, text: "Call or Text to Book" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                {item.icon}
                <span style={{ color: "white", fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "0.9rem" }}>{item.text}</span>
              </div>
            ))}
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
          .hero-grid { grid-template-columns: 1fr 1fr !important; }
          .services-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .cta-grid { grid-template-columns: 1fr 1fr !important; }
          .story-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}
