/*
  CHELMER CLEANERS — Contact Page
  Design: "Clean Lines, Bright Skies"
  Prominent phone, enquiry form (Formspree-ready), service area info
  TODO: Replace FORMSPREE_ENDPOINT with real Formspree form ID
*/

import { useState } from "react";
import { Phone, Mail, Globe, CheckCircle, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // TODO: Replace with real Formspree endpoint
    // const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json", Accept: "application/json" },
    //   body: JSON.stringify(formData),
    // });
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div style={{ overflowX: "hidden" }}>

      {/* ── PAGE HEADER ── */}
      <section style={{ backgroundColor: "#29ABE2", paddingTop: "3rem", paddingBottom: "0" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, fontSize: "clamp(1.75rem, 6vw, 2.75rem)", color: "white", marginBottom: "0.75rem" }}>
              Get in Touch
            </h1>
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1rem", lineHeight: 1.6, maxWidth: "520px", marginBottom: "2rem" }}>
              Have a question or want to arrange a collection? Sandra is always happy to help.
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
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }} className="contact-grid">

            {/* ── CONTACT INFO ── */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>

              {/* BIG PHONE */}
              <div style={{
                backgroundColor: "#EEF8FD",
                borderRadius: "1.25rem",
                padding: "2rem 1.5rem",
                textAlign: "center",
                marginBottom: "1.5rem",
                boxShadow: "0 2px 16px rgba(27,58,107,0.07)",
              }}>
                <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, color: "#555", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
                  Call or Text Sandra on:
                </p>
                <a href="tel:07855716659" className="phone-hero" style={{ fontSize: "clamp(2rem, 9vw, 3rem)", marginBottom: "0.75rem", display: "block" }}>
                  07855 716659
                </a>
                <a
                  href="tel:07855716659"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    backgroundColor: "#39B54A",
                    color: "white",
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 800,
                    fontSize: "1rem",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "9999px",
                    textDecoration: "none",
                  }}
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>

              {/* Other contact details */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", padding: "1rem 1.25rem", backgroundColor: "#f8f9fa", borderRadius: "0.75rem" }}>
                  <MessageSquare size={22} color="#29ABE2" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, color: "#1B3A6B", fontSize: "0.9rem" }}>Text Message</div>
                    <div style={{ color: "#555", fontSize: "0.875rem" }}>Text Sandra on 07855 716659 and she'll reply as soon as possible.</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", padding: "1rem 1.25rem", backgroundColor: "#f8f9fa", borderRadius: "0.75rem" }}>
                  <Globe size={22} color="#29ABE2" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, color: "#1B3A6B", fontSize: "0.9rem" }}>Website</div>
                    <a href="https://www.chelmercleaners.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: "#29ABE2", fontSize: "0.875rem" }}>
                      www.chelmercleaners.co.uk
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", padding: "1rem 1.25rem", backgroundColor: "#f8f9fa", borderRadius: "0.75rem" }}>
                  <Mail size={22} color="#29ABE2" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, color: "#1B3A6B", fontSize: "0.9rem" }}>Email</div>
                    <div style={{ color: "#555", fontSize: "0.875rem" }}>Use the form opposite or call for the fastest response.</div>
                  </div>
                </div>
              </div>

              {/* Service area */}
              <div style={{ marginTop: "1.5rem", backgroundColor: "#1B3A6B", borderRadius: "1rem", padding: "1.25rem" }}>
                <h3 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, color: "white", fontSize: "1rem", marginBottom: "0.5rem" }}>
                  Service Area
                </h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>
                  Chelmer Cleaners operates across Chelmsford and the surrounding areas. Not sure if we cover your postcode? Just give Sandra a call and she'll let you know.
                </p>
              </div>
            </motion.div>

            {/* ── ENQUIRY FORM ── */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
              {submitted ? (
                <div style={{
                  textAlign: "center",
                  backgroundColor: "#EEF8FD",
                  borderRadius: "1.25rem",
                  padding: "3rem 2rem",
                  boxShadow: "0 4px 24px rgba(27,58,107,0.1)",
                }}>
                  <CheckCircle size={52} color="#39B54A" style={{ margin: "0 auto 1rem" }} />
                  <h2 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, color: "#1B3A6B", fontSize: "1.5rem", marginBottom: "0.75rem" }}>
                    Message Sent!
                  </h2>
                  <p style={{ color: "#555", lineHeight: 1.65 }}>
                    Thanks, <strong>{formData.name}</strong>! Sandra will be in touch with you soon.
                  </p>
                </div>
              ) : (
                <div style={{ backgroundColor: "white", borderRadius: "1.25rem", padding: "1.75rem", boxShadow: "0 2px 16px rgba(27,58,107,0.08)", border: "1px solid #e8f4fb" }}>
                  <h2 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, color: "#1B3A6B", fontSize: "1.25rem", marginBottom: "1.25rem" }}>
                    Send an Enquiry
                  </h2>
                  {/* Formspree-ready form */}
                  {/* TODO: Add action="https://formspree.io/f/YOUR_ID" method="POST" when live */}
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div>
                      <label style={labelStyle}>Your Name *</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="e.g. Jane Smith" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone Number *</label>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="e.g. 07700 900000" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="e.g. jane@example.com" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Your Message *</label>
                      <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell Sandra what you need — items to clean, questions about pricing, or anything else..."
                        rows={5}
                        style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-orange"
                      style={{ justifyContent: "center", opacity: submitting ? 0.7 : 1, width: "100%", fontSize: "1rem" }}
                    >
                      {submitting ? "Sending..." : "Send Message"}
                    </button>
                    <p style={{ color: "#888", fontSize: "0.8rem", textAlign: "center" }}>
                      We aim to respond within a few hours during business hours.
                    </p>
                  </form>
                </div>
              )}
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
          .contact-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "Nunito, sans-serif",
  fontWeight: 700,
  color: "#1B3A6B",
  fontSize: "0.875rem",
  marginBottom: "0.35rem",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.65rem 0.875rem",
  borderRadius: "0.6rem",
  border: "1.5px solid #cde8f5",
  fontSize: "0.9rem",
  fontFamily: "Open Sans, sans-serif",
  color: "#333",
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box",
};
