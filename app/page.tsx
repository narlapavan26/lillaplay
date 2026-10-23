import type { Metadata } from "next";
import { siteConfig, featuredProduct } from "@/config/site";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import GallerySection from "@/components/sections/GallerySection";
import GiftSection from "@/components/sections/GiftSection";
import FAQSection from "@/components/sections/FAQSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductCard from "@/components/product/ProductCard";

export const metadata: Metadata = {
  title: `${siteConfig.name} – ${siteConfig.tagline}`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} – ${siteConfig.tagline}`,
    description: siteConfig.description,
    type: "website",
    locale: siteConfig.locale,
  },
};

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Product introduction */}
      <section
        className="section-padding"
        style={{ background: "var(--color-bg)" }}
        aria-labelledby="intro-heading"
      >
        <div className="container max-w-3xl text-center">
          <span className="section-tag mb-4">Leksaken</span>
          <h2 id="intro-heading" className="text-heading-1 mb-5">
            Möt{" "}
            <span style={{ color: "var(--color-coral)" }}>Queaky Charge</span>
          </h2>
          <p className="text-body-lg" style={{ color: "var(--color-text-muted)" }}>
            En leksak med ett leende, ett batteri och en enkel hemlighet: håll i
            båda handtagen så börjar musiken. Slut kretsen — och utforskandet
            börjar. Queaky Charge är en uppladdningsbar leksak som blandar lek
            med ett grundläggande vetenskapligt fenomen på ett sätt som känns
            roligt och naturligt.
          </p>
        </div>
      </section>

      {/* 3. Featured product */}
      <section
        className="section-padding"
        style={{ background: "var(--color-bg-alt)" }}
        aria-labelledby="product-section-heading"
      >
        <div className="container">
          <h2 id="product-section-heading" className="sr-only">
            Produktdetaljer — {featuredProduct.name}
          </h2>
          <ProductCard product={featuredProduct} />
        </div>
      </section>

      {/* 4. How it works */}
      <HowItWorksSection />

      {/* 5. Benefits */}
      <BenefitsSection />

      {/* 6. Gallery */}
      <GallerySection />

      {/* 7. Gift */}
      <GiftSection />

      {/* 8. About */}
      <AboutSection />

      {/* 9. FAQ */}
      <FAQSection />
    </>
  );
}
