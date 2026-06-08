/*
  CHELMER CLEANERS — Book a Collection Page
  Design: "Clean Lines, Bright Skies"
  Bookings confirmed via telephone or email — no live calendar.
  Formspree endpoint: https://formspree.io/f/mdavgpwo
*/

import { useForm, ValidationError } from "@formspree/react";
import { Phone, Mail, CheckCircle, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const SERVICES_LIST = [
  "Dry Cleaning",
  "Curtains & Covers",
  "Duvets & Pillows — Laundered & Packaged",
  "Bedding — Laundered & Pressed",
  "Wedding, Bridesmaid & Prom Dress Cleaning",
  "Service Washing",
  "Ironing",
  "Repairs & Alterations",
  "Corporate / Business",
  "Mixed / Multiple Services",
];

export default function Book() {
  const [state, handleSubmit] = useForm("mdavgpwo");

  return (
    <div style={{ overflowX: "hidden" }}>

      {/* ── PAGE HEADER ── */}
      <section style={{ backgroundColor: "#29ABE2", paddingTop: "3rem", paddingBottom: "0" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, fontSize: "clamp(1.75rem, 6vw, 2.75rem)", color: "white", marginBottom: "0.75rem" }}>
              Book a Collection
            </h1>
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1rem", lineHeight: 1.6, maxWidth: "520px", marginBottom: "2rem" }}>
              All collection slots are confirmed directly by Sandra via telephone or email. Fill in the form below and she will be in touch to arrange a convenient time.
            </p>
          </motion.div>
        </div>
        <div className="cloud-divider">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,60 L0,30 Q80,0 160,22 Q240,44 320,22 Q400,0 480,22 Q560,44 640,22 Q720,0 800,22 Q880,44 960,22 Q1040,0 1120,22 Q1200,44 1280,22 Q1360,0 1440,22 L1440,60 Z" fill="white"/>
          </svg>
        </div>
      </section>

      <section style={{ backgroundColor: "white", paddingTop: "2.5rem", paddingBottom: "4rem" }}>
        <div className="container">

          {/* ── HOW TO BOOK CARDS ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", marginBottom: "2.5rem" }}
            className="how-book-grid"
          >
            {/* Call / Text */}
            <a href="tel:07855716659" style={{ textDecoration: "none" }}>
              <div style={{
                backgroundColor: "#39B54A",
                borderRadius: "1rem",
                padding: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                boxShadow: "0 4px 16px rgba(57,181,74,0.25)",
                transition: "transform 0.15s",
              }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <div style={{ backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "50%", width: "52px", height: "52px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Phone size={24} color="white" />
                </div>
                <div>
                  <div style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, color: "white", fontSize: "1rem", marginBottom: "0.2rem" }}>
                    Call or Text Sandra
                  </div>
                  <div style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "white", fontSize: "1.5rem", letterSpacing: "-0.02em" }}>
                    07855 716659
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", marginTop: "0.2rem" }}>
                    Quickest way to arrange a slot
                  </div>
                </div>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:info@chelmercleaners.co.uk" style={{ textDecoration: "none" }}>
              <div style={{
                backgroundColor: "#1B3A6B",
                borderRadius: "1rem",
                padding: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                boxShadow: "0 4px 16px rgba(27,58,107,0.2)",
                transition: "transform 0.15s",
              }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <div style={{ backgroundColor: "rgba(255,255,255,0.15)", borderRadius: "50%", width: "52px", height: "52px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Mail size={24} color="white" />
                </div>
                <div>
                  <div style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, color: "white", fontSize: "1rem", marginBottom: "0.2rem" }}>
                    Send an Email
                  </div>
                  <div style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, color: "rgba(255,255,255,0.9)", fontSize: "1rem" }}>
                    info@chelmercleaners.co.uk
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.82rem", marginTop: "0.2rem" }}>
                    Sandra will reply to confirm your slot
                  </div>
                </div>
              </div>
            </a>
          </motion.div>

          {/* ── DIVIDER ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
            <div style={{ flex: 1, height: "1px", backgroundColor: "#e0eef6" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#888", fontSize: "0.85rem", fontFamily: "Nunito, sans-serif", fontWeight: 700, whiteSpace: "nowrap" }}>
              <MessageSquare size={16} />
              Or send a booking request below
            </div>
            <div style={{ flex: 1, height: "1px", backgroundColor: "#e0eef6" }} />
          </div>

          {/* ── ENQUIRY FORM ── */}
          {state.succeeded ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                maxWidth: "520px",
                margin: "0 auto",
                textAlign: "center",
                backgroundColor: "#EEF8FD",
                borderRadius: "1.25rem",
                padding: "3rem 2rem",
                boxShadow: "0 4px 24px rgba(27,58,107,0.1)",
              }}
            >
              <CheckCircle size={56} color="#39B54A" style={{ margin: "0 auto 1rem" }} />
              <h2 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "#1B3A6B", fontSize: "1.75rem", marginBottom: "0.75rem" }}>
                Request Sent!
              </h2>
              <p style={{ color: "#555", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                Thank you! Sandra will be in touch shortly to confirm your collection slot.
              </p>
              <p style={{ color: "#555", fontSize: "0.9rem" }}>
                Need to speak to Sandra urgently? Call <a href="tel:07855716659" style={{ color: "#39B54A", fontWeight: 700 }}>07855 716659</a>.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                maxWidth: "640px",
                margin: "0 auto",
                backgroundColor: "#EEF8FD",
                borderRadius: "1.25rem",
                padding: "2rem",
                boxShadow: "0 2px 16px rgba(27,58,107,0.08)",
              }}
            >
              <h2 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, color: "#1B3A6B", fontSize: "1.25rem", marginBottom: "1.5rem" }}>
                Booking Request Form
              </h2>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }} className="form-row">
                  <div>
                    <label className="form-label" htmlFor="book-name">Your Name *</label>
                    <input id="book-name" className="form-input" name="name" required placeholder="e.g. Jane Smith" />
                    <ValidationError field="name" prefix="Name" errors={state.errors} style={{ color: "#e53e3e", fontSize: "0.8rem" }} />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="book-phone">Phone Number *</label>
                    <input id="book-phone" className="form-input" name="phone" required placeholder="e.g. 07700 900000" />
                    <ValidationError field="phone" prefix="Phone" errors={state.errors} style={{ color: "#e53e3e", fontSize: "0.8rem" }} />
                  </div>
                </div>

                <div>
                  <label className="form-label" htmlFor="book-email">Email Address</label>
                  <input id="book-email" className="form-input" name="email" type="email" placeholder="e.g. jane@email.com" />
                  <ValidationError field="email" prefix="Email" errors={state.errors} style={{ color: "#e53e3e", fontSize: "0.8rem" }} />
                </div>

                <div>
                  <label className="form-label" htmlFor="book-address">Collection Address *</label>
                  <input id="book-address" className="form-input" name="address" required placeholder="Your full address including postcode" />
                  <ValidationError field="address" prefix="Address" errors={state.errors} style={{ color: "#e53e3e", fontSize: "0.8rem" }} />
                </div>

                <div>
                  <label className="form-label" htmlFor="book-service">Service Required *</label>
                  <select id="book-service" className="form-input" name="service" required defaultValue="">
                    <option value="" disabled>Select a service...</option>
                    {SERVICES_LIST.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <ValidationError field="service" prefix="Service" errors={state.errors} style={{ color: "#e53e3e", fontSize: "0.8rem" }} />
                </div>

                <div>
                  <label className="form-label" htmlFor="book-day">Preferred Collection Day</label>
                  <input id="book-day" className="form-input" name="preferredDay" placeholder="e.g. Monday morning, any weekday afternoon" />
                </div>

                <div>
                  <label className="form-label" htmlFor="book-notes">Additional Notes</label>
                  <textarea id="book-notes" className="form-input" name="notes" rows={3} placeholder="Any special instructions, item details, or questions for Sandra..." style={{ resize: "vertical" }} />
                </div>

                <ValidationError errors={state.errors} style={{ color: "#e53e3e", fontSize: "0.85rem" }} />

                <button
                  type="submit"
                  disabled={state.submitting}
                  style={{
                    backgroundColor: state.submitting ? "#aaa" : "#F7941D",
                    color: "white",
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 800,
                    fontSize: "1rem",
                    padding: "0.875rem 1.5rem",
                    borderRadius: "9999px",
                    border: "none",
                    cursor: state.submitting ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    transition: "background-color 0.2s",
                  }}
                >
                  {state.submitting ? "Sending..." : "Send Booking Request"}
                </button>

                <p style={{ color: "#888", fontSize: "0.8rem", textAlign: "center", margin: 0 }}>
                  Sandra will contact you to confirm your slot. Minimum order £20 for free collection &amp; delivery.
                </p>
              </form>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── STICKY MOBILE CALL BAR ── */}
      <a href="tel:07855716659" className="sticky-call-bar">
        <Phone size={20} />
        Tap to Call Sandra — 07855 716659
      </a>

      <style>{`
        .form-label {
          display: block;
          font-family: Nunito, sans-serif;
          font-weight: 700;
          color: #1B3A6B;
          font-size: 0.875rem;
          margin-bottom: 0.35rem;
        }
        .form-input {
          width: 100%;
          padding: 0.65rem 0.875rem;
          border: 1.5px solid #cde8f5;
          border-radius: 0.625rem;
          font-family: 'Open Sans', sans-serif;
          font-size: 0.9rem;
          color: #333;
          background: white;
          outline: none;
          box-sizing: border-box;
          transition: border-color 0.15s;
        }
        .form-input:focus { border-color: #29ABE2; }
        @media (min-width: 480px) {
          .form-row { grid-template-columns: 1fr 1fr !important; }
          .how-book-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}
