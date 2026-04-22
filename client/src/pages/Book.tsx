/*
  CHELMER CLEANERS — Book a Slot Page
  Design: "Clean Lines, Bright Skies"
  Mock booking calendar (Calendly placeholder) + enquiry form (Formspree-ready)
  TODO: Replace CALENDLY_PLACEHOLDER with real Calendly embed URL
  TODO: Replace FORMSPREE_ENDPOINT with real Formspree form ID
*/

import { useState } from "react";
import { Phone, Calendar, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// ── MOCK CALENDAR DATA ──
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_NAME = "May 2025";

// Mock available slots (true = available, false = unavailable/booked)
const mockCalendar: { date: number; slots: string[] }[] = [
  { date: 5, slots: ["9:00am", "11:00am", "2:00pm"] },
  { date: 6, slots: ["10:00am", "3:00pm"] },
  { date: 7, slots: [] },
  { date: 8, slots: ["9:00am", "1:00pm", "4:00pm"] },
  { date: 9, slots: ["11:00am"] },
  { date: 12, slots: ["9:00am", "2:00pm"] },
  { date: 13, slots: ["10:00am", "12:00pm", "3:00pm"] },
  { date: 14, slots: [] },
  { date: 15, slots: ["9:00am", "11:00am"] },
  { date: 16, slots: ["2:00pm", "4:00pm"] },
  { date: 19, slots: ["9:00am", "1:00pm"] },
  { date: 20, slots: ["10:00am", "3:00pm"] },
  { date: 21, slots: [] },
  { date: 22, slots: ["9:00am", "2:00pm", "4:00pm"] },
  { date: 23, slots: ["11:00am"] },
];

const SERVICES_LIST = [
  "Dry Cleaning",
  "Curtains",
  "Duvets",
  "Service Washing",
  "Ironing",
  "Repairs & Alterations",
  "Mixed / Multiple Services",
];

export default function Book() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const selectedDay = mockCalendar.find((d) => d.date === selectedDate);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedSlot) {
      alert("Please select a collection date and time slot.");
      return;
    }
    setSubmitting(true);
    // TODO: Replace with real Formspree endpoint
    // const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json", Accept: "application/json" },
    //   body: JSON.stringify({ ...formData, date: `${MONTH_NAME} ${selectedDate}`, slot: selectedSlot }),
    // });
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 1200));
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
              Book a Collection Slot
            </h1>
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1rem", lineHeight: 1.6, maxWidth: "520px", marginBottom: "2rem" }}>
              Choose a convenient date and time for Sandra to collect your items. Or simply call or text if you prefer.
            </p>
            <a
              href="tel:07855716659"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "#39B54A", color: "white", fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "1.1rem", padding: "0.75rem 1.25rem", borderRadius: "9999px", textDecoration: "none", marginBottom: "2rem" }}
            >
              <Phone size={18} />
              Prefer to call? 07855 716659
            </a>
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

          {submitted ? (
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
                Booking Request Sent!
              </h2>
              <p style={{ color: "#555", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                Thank you, <strong>{formData.name}</strong>! Sandra will be in touch shortly to confirm your collection slot on <strong>May {selectedDate}</strong> at <strong>{selectedSlot}</strong>.
              </p>
              <p style={{ color: "#555", fontSize: "0.9rem" }}>
                If you need to speak to Sandra urgently, call <a href="tel:07855716659" style={{ color: "#39B54A", fontWeight: 700 }}>07855 716659</a>.
              </p>
            </motion.div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }} className="book-grid">

              {/* ── MOCK CALENDAR ── */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div style={{ backgroundColor: "#EEF8FD", borderRadius: "1.25rem", padding: "1.5rem", boxShadow: "0 2px 16px rgba(27,58,107,0.07)" }}>
                  
                  {/* Calendly notice */}
                  <div style={{ backgroundColor: "#FFF8ED", border: "1px solid #F7941D", borderRadius: "0.5rem", padding: "0.75rem 1rem", marginBottom: "1.25rem", fontSize: "0.8rem", color: "#7a4a00" }}>
                    <Calendar size={14} style={{ display: "inline", marginRight: "0.4rem", verticalAlign: "middle" }} />
                    <strong>Live booking calendar coming soon.</strong> This is a preview — Calendly integration will be activated shortly.
                  </div>

                  {/* Month header */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <button style={{ background: "none", border: "1px solid #cde8f5", borderRadius: "0.5rem", padding: "0.4rem 0.6rem", color: "#1B3A6B", cursor: "pointer" }}>
                      <ChevronLeft size={18} />
                    </button>
                    <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, color: "#1B3A6B", fontSize: "1.05rem" }}>{MONTH_NAME}</span>
                    <button style={{ background: "none", border: "1px solid #cde8f5", borderRadius: "0.5rem", padding: "0.4rem 0.6rem", color: "#1B3A6B", cursor: "pointer" }}>
                      <ChevronRight size={18} />
                    </button>
                  </div>

                  {/* Day headers */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "0.35rem", marginBottom: "0.5rem" }}>
                    {DAYS.map((d) => (
                      <div key={d} style={{ textAlign: "center", fontFamily: "Nunito, sans-serif", fontWeight: 700, color: "#888", fontSize: "0.75rem" }}>
                        {d}
                      </div>
                    ))}
                  </div>

                  {/* Date grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "0.35rem" }}>
                    {mockCalendar.map((day) => {
                      const hasSlots = day.slots.length > 0;
                      const isSelected = selectedDate === day.date;
                      return (
                        <button
                          key={day.date}
                          onClick={() => { if (hasSlots) { setSelectedDate(day.date); setSelectedSlot(null); } }}
                          disabled={!hasSlots}
                          style={{
                            padding: "0.5rem 0.25rem",
                            borderRadius: "0.5rem",
                            border: isSelected ? "2px solid #1B3A6B" : "2px solid transparent",
                            backgroundColor: isSelected ? "#1B3A6B" : hasSlots ? "#29ABE2" : "#e8f4fb",
                            color: isSelected ? "white" : hasSlots ? "white" : "#aac5d4",
                            fontFamily: "Nunito, sans-serif",
                            fontWeight: 700,
                            fontSize: "0.85rem",
                            cursor: hasSlots ? "pointer" : "not-allowed",
                            transition: "all 0.15s",
                          }}
                        >
                          {day.date}
                        </button>
                      );
                    })}
                  </div>

                  {/* Legend */}
                  <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                      <div style={{ width: "14px", height: "14px", borderRadius: "3px", backgroundColor: "#29ABE2" }} />
                      <span style={{ fontSize: "0.75rem", color: "#555" }}>Available</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                      <div style={{ width: "14px", height: "14px", borderRadius: "3px", backgroundColor: "#1B3A6B" }} />
                      <span style={{ fontSize: "0.75rem", color: "#555" }}>Selected</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                      <div style={{ width: "14px", height: "14px", borderRadius: "3px", backgroundColor: "#e8f4fb" }} />
                      <span style={{ fontSize: "0.75rem", color: "#555" }}>Unavailable</span>
                    </div>
                  </div>

                  {/* Time slots */}
                  {selectedDate && selectedDay && (
                    <div style={{ marginTop: "1.25rem" }}>
                      <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, color: "#1B3A6B", fontSize: "0.9rem", marginBottom: "0.6rem" }}>
                        Available times on May {selectedDate}:
                      </p>
                      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                        {selectedDay.slots.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => setSelectedSlot(slot)}
                            style={{
                              padding: "0.45rem 0.9rem",
                              borderRadius: "9999px",
                              border: selectedSlot === slot ? "2px solid #1B3A6B" : "2px solid #29ABE2",
                              backgroundColor: selectedSlot === slot ? "#1B3A6B" : "white",
                              color: selectedSlot === slot ? "white" : "#1B3A6B",
                              fontFamily: "Nunito, sans-serif",
                              fontWeight: 700,
                              fontSize: "0.85rem",
                              cursor: "pointer",
                              transition: "all 0.15s",
                            }}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedDate && selectedSlot && (
                    <div style={{ marginTop: "1rem", backgroundColor: "#39B54A", borderRadius: "0.6rem", padding: "0.75rem 1rem" }}>
                      <p style={{ color: "white", fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "0.9rem", margin: 0 }}>
                        ✓ Selected: May {selectedDate} at {selectedSlot}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* ── BOOKING FORM ── */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
                <div style={{ backgroundColor: "white", borderRadius: "1.25rem", padding: "1.5rem", boxShadow: "0 2px 16px rgba(27,58,107,0.08)", border: "1px solid #e8f4fb" }}>
                  <h2 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, color: "#1B3A6B", fontSize: "1.25rem", marginBottom: "1.25rem" }}>
                    Your Details
                  </h2>

                  {/* Formspree-ready form */}
                  {/* TODO: Add action="https://formspree.io/f/YOUR_ID" method="POST" when live */}
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Jane Smith"
                        style={inputStyle}
                      />
                    </div>

                    <div>
                      <label style={labelStyle}>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 07700 900000"
                        style={inputStyle}
                      />
                    </div>

                    <div>
                      <label style={labelStyle}>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. jane@example.com"
                        style={inputStyle}
                      />
                    </div>

                    <div>
                      <label style={labelStyle}>Collection Address *</label>
                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Your full address including postcode"
                        style={inputStyle}
                      />
                    </div>

                    <div>
                      <label style={labelStyle}>Service Required *</label>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        style={{ ...inputStyle, backgroundColor: "white" }}
                      >
                        <option value="">Select a service...</option>
                        {SERVICES_LIST.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={labelStyle}>Additional Notes</label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Any special instructions, item descriptions, or questions..."
                        rows={4}
                        style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
                      />
                    </div>

                    {/* Selected slot summary */}
                    {selectedDate && selectedSlot && (
                      <div style={{ backgroundColor: "#EEF8FD", borderRadius: "0.6rem", padding: "0.75rem 1rem", border: "1px solid #cde8f5" }}>
                        <p style={{ color: "#1B3A6B", fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "0.875rem", margin: 0 }}>
                          📅 Requested slot: May {selectedDate} at {selectedSlot}
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-orange"
                      style={{ justifyContent: "center", opacity: submitting ? 0.7 : 1, width: "100%", fontSize: "1rem" }}
                    >
                      {submitting ? "Sending..." : "Request This Collection Slot"}
                    </button>

                    <p style={{ color: "#888", fontSize: "0.8rem", textAlign: "center" }}>
                      Sandra will confirm your booking by phone or text.
                    </p>
                  </form>
                </div>
              </motion.div>

            </div>
          )}
        </div>
      </section>

      {/* ── STICKY MOBILE CALL BAR ── */}
      <a href="tel:07855716659" className="sticky-call-bar">
        <Phone size={20} />
        Tap to Call Sandra — 07855 716659
      </a>

      <style>{`
        @media (min-width: 900px) {
          .book-grid { grid-template-columns: 1fr 1fr !important; }
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
