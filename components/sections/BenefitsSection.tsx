import Link from "next/link";
import { Zap, Battery, Music, Smile, Gift } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Omedelbar orsak och verkan",
    description:
      "Kretsen sluts, musiken startar — barn förstår direkt att deras handlingar får konsekvenser.",
    color: "var(--color-amber)",
    bg: "rgba(245,181,47,0.12)",
  },
  {
    icon: Battery,
    title: "Alltid redo att leka",
    description:
      "Enkel USB-laddning. En röd lampa visar laddningsstatus — barnen kan följa den själva.",
    color: "var(--color-sky)",
    bg: "rgba(82,184,216,0.12)",
  },
  {
    icon: Music,
    title: "Glad, inbjudande musik",
    description:
      "Queaky Charge spelar uppiggande, glad musik som uppmuntrar till upprepad utforskning och lek.",
    color: "var(--color-coral)",
    bg: "rgba(240,92,40,0.12)",
  },
  {
    icon: Smile,
    title: "Nyfikenhetsdriven lek",
    description:
      "Barn utforskar naturligt skillnaden mellan att hålla i ett handtag eller båda — upptäckarglädje i fokus.",
    color: "var(--color-purple)",
    bg: "var(--color-purple-pale)",
  },
  {
    icon: Gift,
    title: "En minnesvärd present",
    description:
      "En leksak som sticker ut — rolig, smart och annorlunda. Perfekt att ge till ett nyfiket barn.",
    color: "var(--color-lilac)",
    bg: "rgba(155,109,200,0.10)",
  },
];

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="section-padding"
      style={{ background: "var(--color-bg)" }}
      aria-labelledby="benefits-heading"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-tag mb-4">Varför Queaky Charge?</span>
          <h2 id="benefits-heading" className="text-heading-1 mb-4">
            Mer än en vanlig{" "}
            <span style={{ color: "var(--color-purple)" }}>leksak</span>
          </h2>
          <p
            className="text-body-lg max-w-xl mx-auto"
            style={{ color: "var(--color-text-muted)" }}
          >
            Queaky Charge kombinerar ren lek med en mjuk introduktion till hur
            elektricitet fungerar — utan att det känns som en lektion.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="card p-6 flex flex-col gap-4"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div
                  className="rounded-xl flex items-center justify-center"
                  style={{ width: "3.25rem", height: "3.25rem", background: b.bg }}
                >
                  <Icon size={24} style={{ color: b.color }} />
                </div>
                <h3 className="font-bold text-lg" style={{ color: "var(--color-text)" }}>
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  {b.description}
                </p>
              </div>
            );
          })}

          {/* CTA card */}
          <div
            className="rounded-2xl p-6 flex flex-col justify-between"
            style={{ background: "var(--color-coral)", color: "white" }}
          >
            <div>
              <div className="text-2xl font-black mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Queaky Charge
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.85)" }}>
                Redo att uppleva den? Utforska leksaken och lägg den i varukorgen.
              </p>
            </div>
            <Link href="/#product" className="btn btn-ghost btn-sm self-start" id="benefits-cta">
              Se leksaken →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
