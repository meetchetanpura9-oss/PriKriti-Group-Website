"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 shadow-md bg-gradient-to-r from-red-600 via-red-400 to-red-200">
      <nav className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-6 relative">
        <Link
          href="/"
          className="font-extrabold text-2xl md:text-3xl tracking-wide text-white drop-shadow-lg hover:scale-105 transition-transform"
          style={{ letterSpacing: '0.04em' }}
        >
          PRIKRITI GROUP
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="ml-auto md:hidden flex items-center px-2 py-1 text-white focus:outline-none"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Open main menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="ml-auto gap-2 md:gap-4 text-sm items-center hidden md:flex">
          <Link href="/about" className="text-white/90 hover:text-white font-medium px-2 py-1 rounded transition">About</Link>
          <Link href="/services" className="text-white/90 hover:text-white font-medium px-2 py-1 rounded transition">Services</Link>
          <Link href="/industries" className="text-white/90 hover:text-white font-medium px-2 py-1 rounded transition">Industries</Link>
          <Link href="/case-studies" className="text-white/90 hover:text-white font-medium px-2 py-1 rounded transition">Case Studies</Link>
          <Link href="/faq" className="text-white/90 hover:text-white font-medium px-2 py-1 rounded transition">FAQ</Link>
          <Link href="/team" className="text-white/90 hover:text-white font-medium px-2 py-1 rounded transition">Team</Link>
          <Link href="/resources" className="text-white/90 hover:text-white font-medium px-2 py-1 rounded transition">Resources</Link>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-full bg-white text-red-600 font-semibold shadow hover:bg-red-100 hover:text-red-700 transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-gradient-to-r from-red-600 via-red-400 to-red-200 shadow-lg rounded-b-xl flex flex-col py-4 z-50 md:hidden animate-fade-in">
            <Link href="/about" className="text-white font-medium px-6 py-2 hover:bg-red-700/30 transition" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/services" className="text-white font-medium px-6 py-2 hover:bg-red-700/30 transition" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="/industries" className="text-white font-medium px-6 py-2 hover:bg-red-700/30 transition" onClick={() => setMobileMenuOpen(false)}>Industries</Link>
            <Link href="/case-studies" className="text-white font-medium px-6 py-2 hover:bg-red-700/30 transition" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
            <Link href="/faq" className="text-white font-medium px-6 py-2 hover:bg-red-700/30 transition" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
            <Link href="/team" className="text-white font-medium px-6 py-2 hover:bg-red-700/30 transition" onClick={() => setMobileMenuOpen(false)}>Team</Link>
            <Link href="/resources" className="text-white font-medium px-6 py-2 hover:bg-red-700/30 transition" onClick={() => setMobileMenuOpen(false)}>Resources</Link>
            <Link href="/contact" className="px-6 py-2 rounded-full bg-white text-red-600 font-semibold shadow hover:bg-red-100 hover:text-red-700 transition mx-4 mt-2" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;