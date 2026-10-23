import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Köpvillkor",
  description: `${siteConfig.name}s köpvillkor.`,
  robots: { index: false, follow: false },
};

export default function VillkorPage() {
  return (
    <div className="container section-padding" style={{ paddingTop: "7rem" }}>
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold mb-8" style={{ color: "var(--color-purple)" }}>
          ← Tillbaka
        </Link>
        <h1 className="text-heading-1 mb-8">Köpvillkor</h1>
        <div className="rounded-2xl p-8 text-sm leading-relaxed" style={{ background: "var(--color-surface)", border: "1px dashed var(--color-purple-light)", color: "var(--color-text-muted)" }}>
          <p className="font-bold mb-2" style={{ color: "var(--color-purple)" }}>📝 Platshållare</p>
          <p>
            Köpvillkoren för {siteConfig.name} är inte färdigställda ännu.
            Inkludera: köpvillkor, betalningsvillkor, ångerrätt och övriga
            avtalsvillkor innan butiken öppnar för beställningar.
          </p>
        </div>
      </div>
    </div>
  );
}
