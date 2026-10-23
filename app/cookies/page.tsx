import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Cookies",
  description: `${siteConfig.name}s information om cookies och lokal lagring.`,
  robots: { index: false, follow: false },
};

export default function CookiesPage() {
  return (
    <div className="container section-padding" style={{ paddingTop: "7rem" }}>
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold mb-8" style={{ color: "var(--color-purple)" }}>
          ← Tillbaka
        </Link>
        <h1 className="text-heading-1 mb-8">Cookies</h1>
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl p-8 text-sm leading-relaxed" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", color: "var(--color-text-muted)" }}>
            <p>
              Den här webbplatsen använder i nuläget ingen spårning via cookies.
              För att varukorgen ska fungera mellan besök sparas dina valda varor
              lokalt i din webbläsare (så kallad <strong>local storage</strong>),
              aldrig på en server och aldrig delat med tredje part.
            </p>
          </div>
          <div className="rounded-2xl p-8 text-sm leading-relaxed" style={{ background: "var(--color-surface)", border: "1px dashed var(--color-purple-light)", color: "var(--color-text-muted)" }}>
            <p className="font-bold mb-2" style={{ color: "var(--color-purple)" }}>📝 Platshållare — kompletteras innan lansering</p>
            <p>
              Om {siteConfig.name} i framtiden använder cookies för exempelvis
              analys eller marknadsföring kommer en fullständig cookiepolicy
              med samtyckeshantering att läggas till här.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
