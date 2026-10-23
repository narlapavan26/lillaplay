import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding scroll-mt-20"
      style={{
        background: "linear-gradient(to bottom, var(--color-bg-alt) 0%, var(--color-bg) 100%)",
      }}
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Logo image */}
          <div className="relative" style={{ maxWidth: 420 }}>
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full flex items-center justify-center text-3xl font-black"
              style={{
                background: "var(--color-amber)",
                color: "#3a2800",
                fontFamily: "var(--font-heading)",
              }}
              aria-hidden="true"
            >
              LP
            </div>
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                aspectRatio: "1/1",
                boxShadow: "var(--shadow-xl)",
                border: "4px solid white",
              }}
            >
              <Image
                src="/icon.png"
                alt="LillaPlays stjärnsymbol i varma, lekfulla färger"
                fill
                className="object-contain p-10"
                style={{ background: "var(--color-purple-pale)" }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5">
            <span className="section-tag self-start">Om LillaPlay</span>
            <h2 id="about-heading" className="text-heading-1">
              Leksaker som väcker{" "}
              <span style={{ color: "var(--color-coral)" }}>nyfikenhet</span>
            </h2>
            <p className="text-body-lg" style={{ color: "var(--color-text-muted)" }}>
              LillaPlay är en leksaksmärke med en enkel övertygelse: bra leksaker
              gör barn nyfikna, inte passiva.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              Vi tror på leksaker som ger barn en ”aha-upplevelse” — ett litet
              under som öppnar upp världen lite mer. Queaky Charge är vår
              första leksak, och den är ett perfekt exempel på vad LillaPlay handlar om.
            </p>

            {/* Brand story placeholder */}
            <div
              className="rounded-xl p-4 text-sm"
              style={{
                background: "var(--color-purple-pale)",
                color: "var(--color-text-muted)",
                border: "1px dashed var(--color-purple-light)",
              }}
            >
              <strong style={{ color: "var(--color-purple)" }}>
                📝 Platshållare för varumärkesberättelse:
              </strong>{" "}
              Ersätt detta stycke med er egen berättelse — varför ni startade
              LillaPlay, vad som driver er, och visionen bakom varumärket.
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {[
                { label: "Nyfikenhet", desc: "Leksaker som väcker frågor — inte bara ger svar." },
                { label: "Enkelhet", desc: "Smarta mekanismer utan onödig komplexitet." },
                { label: "Glädje", desc: "Leendena är det som räknas." },
                { label: "Kvalitet", desc: "Leksaker byggda för att hålla." },
              ].map((v, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4"
                  style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
                >
                  <div className="font-bold mb-0.5 text-sm" style={{ color: "var(--color-purple)" }}>
                    {v.label}
                  </div>
                  <div className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                    {v.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
