/*
  CHELMER CLEANERS — Header Component
  Design: "Clean Lines, Bright Skies"
  Navy background, white logo text, orange CTA, mobile hamburger menu
  Sticky on scroll, phone number always visible on desktop
*/

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/prices", label: "Prices" },
  { href: "/book", label: "Book a Slot" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <>
      <header
        style={{
          backgroundColor: "#1B3A6B",
          boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.18)" : "none",
          transition: "box-shadow 0.3s",
          position: "sticky",
          top: 0,
          zIndex: 40,
        }}
      >
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
            {/* Logo */}
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div style={{
                width: "38px",
                height: "38px",
                backgroundColor: "#29ABE2",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                <span style={{ color: "white", fontFamily: "Nunito, sans-serif", fontWeight: 900, fontSize: "1.1rem" }}>C</span>
              </div>
              <div>
                <div style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, fontSize: "1.1rem", color: "white", lineHeight: 1.1 }}>
                  CHELMER
                </div>
                <div style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "0.75rem", color: "#29ABE2", lineHeight: 1.1, letterSpacing: "0.08em" }}>
                  CLEANERS
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav style={{ display: "none", alignItems: "center", gap: "0.25rem" }} className="md-nav">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: location === link.href ? "#F7941D" : "rgba(255,255,255,0.88)",
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    padding: "0.4rem 0.75rem",
                    borderRadius: "0.5rem",
                    textDecoration: "none",
                    transition: "color 0.2s, background 0.2s",
                    backgroundColor: location === link.href ? "rgba(247,148,29,0.12)" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop phone */}
            <a
              href="tel:07855716659"
              style={{
                display: "none",
                alignItems: "center",
                gap: "0.4rem",
                backgroundColor: "#39B54A",
                color: "white",
                fontFamily: "Nunito, sans-serif",
                fontWeight: 800,
                fontSize: "0.95rem",
                padding: "0.5rem 1rem",
                borderRadius: "9999px",
                textDecoration: "none",
                transition: "background-color 0.2s",
              }}
              className="desktop-phone"
            >
              <Phone size={16} />
              07855 716659
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              style={{
                color: "white",
                background: "none",
                border: "none",
                padding: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="mobile-menu-btn"
              aria-label="Toggle menu"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{
            backgroundColor: "#122a50",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            padding: "0.75rem 0 1rem",
          }}>
            <div className="container">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    color: location === link.href ? "#F7941D" : "rgba(255,255,255,0.9)",
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    padding: "0.75rem 0.5rem",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:07855716659"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginTop: "1rem",
                  backgroundColor: "#39B54A",
                  color: "white",
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: 800,
                  fontSize: "1.15rem",
                  padding: "0.875rem 1rem",
                  borderRadius: "0.75rem",
                  textDecoration: "none",
                  justifyContent: "center",
                }}
              >
                <Phone size={20} />
                Call Sandra: 07855 716659
              </a>
            </div>
          </div>
        )}
      </header>

      <style>{`
        @media (min-width: 768px) {
          .md-nav { display: flex !important; }
          .desktop-phone { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
