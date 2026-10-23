import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      style={{ background: "var(--color-text)", color: "white", paddingTop: "4rem", paddingBottom: "2rem" }}
    >
      <div className="container">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
        >
          {/* Brand */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Link href="/" aria-label="LillaPlay — till startsidan" id="footer-logo">
              <Image
                src={siteConfig.logo}
                alt="LillaPlay"
                width={200}
                height={73}
                className="object-contain brightness-0 invert"
                style={{ height: "34px", width: "auto" }}
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
              LillaPlay skapar leksaker som väcker nyfikenhet och glädje hos barn.
              Välkommen till en värld av lek och upptäckter.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="font-bold text-sm mb-4 uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.45)" }}>
              Navigation
            </h2>
            <ul className="flex flex-col gap-2.5" role="list">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                    id={`footer-nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-bold text-sm mb-4 uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.45)" }}>
              Kontakt
            </h2>
            <ul className="flex flex-col gap-3" role="list">
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="mt-0.5 flex-shrink-0" style={{ color: "var(--color-coral-light)" }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {siteConfig.contactEmail}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="mt-0.5 flex-shrink-0" style={{ color: "var(--color-coral-light)" }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {siteConfig.contactPhone}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" style={{ color: "var(--color-coral-light)" }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {siteConfig.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            © {year} LillaPlay. Alla rättigheter förbehållna.
          </p>
          <nav aria-label="Juridisk information">
            <ul className="flex flex-wrap gap-4" role="list">
              {[
                { label: "Integritetspolicy", href: "/integritetspolicy" },
                { label: "Cookies", href: "/cookies" },
                { label: "Köpvillkor", href: "/villkor" },
                { label: "Leverans & retur", href: "/leverans-retur" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                    id={`footer-legal-${link.label.toLowerCase().replace(/[\s&]/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
