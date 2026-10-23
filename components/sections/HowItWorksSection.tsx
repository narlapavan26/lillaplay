import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "Ladda upp",
    description:
      "Anslut Queaky Charge med den medföljande USB-kabeln. En röd lampa lyser för att visa att laddningen pågår.",
    color: "var(--color-sky)",
    bgColor: "rgba(82,184,216,0.12)",
  },
  {
    number: "2",
    title: "Slå på",
    description:
      "Skjut på strömbrytaren. Queaky Charge vaknar till liv — redo för äventyr!",
    color: "var(--color-amber)",
    bgColor: "rgba(245,181,47,0.12)",
  },
  {
    number: "3",
    title: "Håll i ett handtag — tystnad",
    description:
      "Greppa bara ett öronhandtag. Ännu händer ingenting — kretsen är öppen.",
    color: "var(--color-lilac)",
    bgColor: "rgba(155,109,200,0.12)",
  },
  {
    number: "4",
    title: "Håll i båda handtagen — musik!",
    description:
      "Greppa båda öronhandtagen och kretsen sluts — Queaky Charge spelar glad musik!",
    color: "var(--color-coral)",
    bgColor: "rgba(240,92,40,0.12)",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="section-padding scroll-mt-20"
      style={{ background: "var(--color-bg-alt)" }}
      aria-labelledby="how-it-works-heading"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tag mb-4">Så funkar det</span>
          <h2 id="how-it-works-heading" className="text-heading-1 mb-4">
            Fyra enkla steg till{" "}
            <span style={{ color: "var(--color-coral)" }}>musikalisk lek</span>
          </h2>
          <p className="text-body-lg max-w-xl mx-auto" style={{ color: "var(--color-text-muted)" }}>
            Queaky Charge fungerar på ett förvånansvärt enkelt sätt — och just den
            enkelheten gör den så rolig att upptäcka.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, i) => (
            <div
              key={i}
              className="card flex flex-col gap-4 p-6"
              style={{ borderTop: `3px solid ${step.color}`, transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="step-number w-12 h-12"
                style={{ background: step.bgColor, color: step.color }}
                aria-hidden="true"
              >
                {step.number}
              </div>
              <h3 className="font-bold text-lg" style={{ color: "var(--color-text)" }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Science explainer */}
        <div
          className="rounded-2xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          style={{ background: "var(--color-purple)", color: "white" }}
        >
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold mb-4"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              ⚡ Fysik som är kul
            </div>
            <h3 className="text-heading-2 text-white mb-3">
              Vad är en elektrisk krets?
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
              När du håller i båda handtagen blir din kropp en del av kretsen —
              och fungerar som en ledare. Queaky Charge känner av den slutna
              kretsen och startar musiken. Det är vetenskap i miniatyr, inlindad i lek!
            </p>
          </div>
          <div className="flex justify-center">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ maxWidth: 260, border: "4px solid rgba(255,255,255,0.2)" }}
            >
              <Image
                src="/product-main.jpg"
                alt="Queaky Charge — de två ledande öronhandtagen syns på vardera sida"
                width={260}
                height={280}
                className="object-contain w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
