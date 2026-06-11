"use client";

import React, { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/#home" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/#projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
      <nav className="container flex justify-between items-center py-4 relative">
        {/* Logo with Image */}
        <Link href="/#home" className="logo flex items-center gap-2 relative z-10">
          <img
            src="/images/joshuaIcon.png" // path to your icon image
            alt="Logo"
            className="w-8 h-8 rounded-lg object-cover"
          />
          <h2 className="text-xl font-bold text-white">Joshua Sibanda</h2>
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-slate-300 focus:outline-none relative z-10"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 py-4 px-6 md:hidden flex flex-col space-y-4 shadow-xl z-50">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-medium py-1"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
