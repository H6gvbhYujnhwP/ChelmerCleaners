/*
  CHELMER CLEANERS — Footer Component
  Design: "Clean Lines, Bright Skies"
  Navy background, white text, prominent phone number, links
*/

import { Link } from "wouter";
import { Phone, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1B3A6B", color: "white", paddingBottom: "5rem" }} className="footer-pb">
      {/* Cloud wave top */}
      <div className="cloud-divider" style={{ marginTop: "-1px" }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,60 L0,30 Q60,0 120,20 Q180,40 240,20 Q300,0 360,20 Q420,40 480,20 Q540,0 600,20 Q660,40 720,20 Q780,0 840,20 Q900,40 960,20 Q1020,0 1080,20 Q1140,40 1200,20 Q1260,0 1320,20 Q1380,40 1440,20 L1440,60 Z" fill="white"/>
        </svg>
      </div>

      <div className="container" style={{ paddingTop: "2.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }} className="footer-grid">
          {/* Brand column */}
          <div>
            <div style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, fontSize: "1.5rem", color: "white", marginBottom: "0.25rem" }}>
              CHELMER CLEANERS
            </div>
            <div style={{ color: "#29ABE2", fontWeight: 600, marginBottom: "1rem", fontSize: "0.9rem" }}>
              Home Delivery Service
            </div>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", lineHeight: 1.6, maxWidth: "280px" }}>
              All your cleaning collected and delivered to your doorstep. Professional, reliable, and friendly service across the local area.
            </p>
          </div>

          {/* Contact column */}
          <div>
            <div style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#29ABE2", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Contact Sandra
            </div>
            <a
              href="tel:07855716659"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#39B54A", fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "1.4rem", textDecoration: "none", marginBottom: "0.75rem" }}
            >
              <Phone size={20} />
              07855 716659
            </a>
            <a
              href="https://www.chelmercleaners.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", textDecoration: "none" }}
            >
              <Globe size={16} />
              www.chelmercleaners.co.uk
            </a>
          </div>

          {/* Links column */}
          <div>
            <div style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#29ABE2", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Quick Links
            </div>
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Our Services" },
              { href: "/prices", label: "Price List" },
              { href: "/book", label: "Book a Collection" },
              { href: "/contact", label: "Contact Us" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ display: "block", color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", textDecoration: "none", marginBottom: "0.5rem", transition: "color 0.2s" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Free delivery badge */}
        <div style={{
          marginTop: "2rem",
          padding: "0.875rem 1.25rem",
          backgroundColor: "#F7941D",
          borderRadius: "0.75rem",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          flexWrap: "wrap",
        }}>
          <span style={{ fontSize: "1.5rem" }}>🚚</span>
          <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, color: "white", fontSize: "1rem" }}>
            FREE delivery on orders over £15
          </span>
        </div>

        {/* Bottom bar */}
        <div style={{
          marginTop: "2rem",
          paddingTop: "1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.12)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.5rem",
        }}>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} Chelmer Cleaners. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem" }}>
            Website by <a href="https://www.thegreenagents.com" target="_blank" rel="noopener noreferrer" style={{ color: "#39B54A", textDecoration: "none" }}>TheGreenAgents.com</a>
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr 1fr !important; }
          .footer-pb { padding-bottom: 0 !important; }
        }
      `}</style>
    </footer>
  );
}
