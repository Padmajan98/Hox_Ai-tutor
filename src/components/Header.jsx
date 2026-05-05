import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header cinematic-nav" id="top">
      <div className="container header-inner">
        <a href="#top" className="logo" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img src="/favicon.png" alt="Hox Ai Tutor Logo" width="28" height="28" style={{ objectFit: "contain" }} />
          Hox Ai Tutor
        </a>
        <nav className={`main-nav ${isOpen ? "open" : ""}`} aria-label="Primary Navigation">
          <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#schools" onClick={() => setIsOpen(false)}>For Schools</a>
          <a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a>
          <a href="#demo" onClick={() => setIsOpen(false)}>Demo</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>
        <a href="#demo" className="btn btn-coral">Request Demo</a>
        <button 
          className="menu-btn" 
          aria-label="Open navigation" 
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
        </button>
      </div>
    </header>
  );
}
