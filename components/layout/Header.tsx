"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/services/cart";
import { siteConfig } from "@/config/site";

export default function Header() {
  const { itemCount, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        id="site-header"
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,250,247,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "var(--shadow-sm)" : "none",
          borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        }}
      >
        <div className="container">
          <nav className="flex items-center justify-between h-16 md:h-20" aria-label="Main navigation">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0" aria-label="LillaPlay — till startsidan" id="header-logo">
              <Image
                src={siteConfig.logo}
                alt="LillaPlay"
                width={200}
                height={73}
                className="object-contain"
                priority
                style={{ height: "34px", width: "auto" }}
              />
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-1" role="list">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="px-4 py-2 rounded-full font-semibold text-sm transition-colors duration-200 hover:bg-[var(--color-purple-pale)] hover:text-[var(--color-purple)]"
                    style={{ color: scrolled ? "var(--color-text)" : "white" }}
                    id={`nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                id="header-cart"
                onClick={openCart}
                className="relative flex items-center justify-center w-11 h-11 rounded-full transition-colors"
                style={{ color: scrolled ? "var(--color-text)" : "white" }}
                aria-label={`Varukorg — ${itemCount} ${itemCount === 1 ? "vara" : "varor"}`}
              >
                <ShoppingBag size={22} />
                {itemCount > 0 && (
                  <span
                    className="absolute -top-0.5 -right-0.5 flex items-center justify-center w-5 h-5 rounded-full text-[11px] font-bold text-white animate-scale-in"
                    style={{ background: "var(--color-coral)" }}
                    aria-hidden="true"
                  >
                    {itemCount > 9 ? "9+" : itemCount}
                  </span>
                )}
              </button>

              <button
                id="mobile-menu-toggle"
                className="flex md:hidden items-center justify-center w-11 h-11 rounded-full transition-colors"
                style={{ color: scrolled ? "var(--color-text)" : "white" }}
                onClick={() => setMenuOpen((o) => !o)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? "Stäng menyn" : "Öppna menyn"}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div id="mobile-menu" className="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobilmeny">
          <nav aria-label="Mobil navigation">
            <ul className="flex flex-col gap-1" role="list">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 text-xl font-bold transition-colors hover:text-[var(--color-coral)]"
                    style={{ color: "var(--color-text)", borderBottom: "1px solid var(--color-border)" }}
                    id={`mobile-nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto pt-8">
            <Image src={siteConfig.logo} alt="" aria-hidden="true" width={120} height={44} className="object-contain opacity-25" />
          </div>
        </div>
      )}
    </>
  );
}
