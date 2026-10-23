import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description: `${siteConfig.name}s integritetspolicy — så hanterar vi dina personuppgifter.`,
  robots: { index: false, follow: false },
};

export default function IntegritetspolicyPage() {
  return (
    <div className="container section-padding" style={{ paddingTop: "7rem" }}>
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold mb-8" style={{ color: "var(--color-purple)" }}>
          ← Tillbaka till startsidan
        </Link>
        <h1 className="text-heading-1 mb-8">Integritetspolicy</h1>
        <div className="rounded-2xl p-8 text-sm leading-relaxed" style={{ background: "var(--color-surface)", border: "1px dashed var(--color-purple-light)", color: "var(--color-text-muted)" }}>
          <p className="font-bold mb-2" style={{ color: "var(--color-purple)" }}>📝 Platshållare — kompletteras innan lansering</p>
          <p>
            Integritetspolicyn för {siteConfig.name} är inte färdigställd ännu.
            Ersätt detta avsnitt med den faktiska policyn innan sidan går live.
            Inkludera: vilka personuppgifter som samlas in, syfte, rättslig grund,
            lagringstid, dina rättigheter samt kontaktuppgifter till personuppgiftsansvarig.
          </p>
        </div>
      </div>
    </div>
  );
}
