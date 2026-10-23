"use client";

import Link from "next/link";
import HeroVideo from "@/components/ui/HeroVideo";
import { ChevronDown } from "lucide-react";
import { featuredProduct } from "@/config/site";

export default function HeroSection() {
  const heroVideo = featuredProduct.videos[0];

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh" }}
      aria-label="Välkommen till LillaPlay"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <HeroVideo src={heroVideo.src} poster={heroVideo.poster} className="w-full h-full" />
        <div className="hero-overlay absolute inset-0" aria-hidden="true" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 container flex flex-col justify-center h-full"
        style={{ minHeight: "100svh", paddingTop: "5rem", paddingBottom: "6rem" }}
      >
        <div className="max-w-2xl">
          {/* Kicker badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-sm font-bold"
            style={{
              background: "rgba(240,92,40,0.85)",
              color: "white",
              backdropFilter: "blur(8px)",
              animation: "fadeUp 0.5s 0.1s var(--ease-bounce) both",
            }}
          >
            <span>✦</span>
            <span>LillaPlay presenterar Queaky Charge</span>
          </div>

          {/* H1 */}
          <h1
            className="text-display text-white mb-5"
            style={{ animation: "fadeUp 0.6s 0.2s var(--ease-bounce) both" }}
          >
            Leksaker som väcker{" "}
            <span style={{ color: "var(--color-amber)" }}>
              nyfikenhet och glädje
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="text-body-lg mb-8 max-w-lg"
            style={{
              color: "rgba(255,255,255,0.88)",
              animation: "fadeUp 0.6s 0.35s var(--ease-bounce) both",
            }}
          >
            Hos LillaPlay hittar du leksaker som bjuder in till lek,
            utforskande och små aha-ögonblick — skapade för nyfikna barn
            i alla åldrar.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-3"
            style={{ animation: "fadeUp 0.6s 0.5s var(--ease-bounce) both" }}
          >
            <Link href="/#product" className="btn btn-primary btn-lg" id="hero-cta-primary">
              Upptäck leksaken
            </Link>
            <Link href="/#how-it-works" className="btn btn-ghost btn-lg" id="hero-cta-secondary">
              Så fungerar den
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
        aria-hidden="true"
        style={{ animation: "fadeIn 0.8s 1.2s ease both" }}
      >
        <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
          Utforska
        </span>
        <ChevronDown
          size={20}
          style={{ color: "rgba(255,255,255,0.5)", animation: "pulse-soft 2s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}
