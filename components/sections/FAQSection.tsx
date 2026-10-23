"use client";

import { useState, useRef, useId, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Vad är LillaPlays leksak?",
    answer:
      "Queaky Charge är en uppladdningsbar leksak som spelar glad musik när barnet håller i båda de ledande handtagen — och tystnar så fort ett handtag släpps. Det är ett enkelt och roligt sätt att uppleva hur en elektrisk krets fungerar.",
  },
  {
    question: "Hur fungerar leksaken?",
    answer:
      "När du håller i båda handtagen sluter du en elektrisk krets — din kropp fungerar som ledare. Queaky Charge känner av den slutna kretsen och startar musiken. Släpp ett handtag och kretsen bryts. Håll i båda igen — så är musiken tillbaka!",
  },
  {
    question: "Hur laddas den?",
    answer:
      "Queaky Charge laddas via den medföljande USB-kabeln. Anslut den till valfri USB-port. En röd lampa lyser under laddning för att visa att batteriet fylls på. Laddningstid och batteritid bekräftas och läggs till här innan lansering.",
  },
  {
    question: "Vad ingår i förpackningen?",
    answer:
      "I förpackningen ingår Queaky Charge-leksaken och en USB-laddkabel. En fullständig innehållsförteckning läggs till här innan lansering.",
  },
  {
    question: "Vilken ålder passar leksaken för?",
    answer:
      "Rekommenderad ålder är inte bekräftad ännu — den läggs till här så snart LillaPlay har verifierat tillverkarens åldersrekommendation. Föräldrar uppmuntras alltid att själva bedöma om leksaken passar deras barns ålder och mognad.",
  },
  {
    question: "Hur fungerar leverans och retur?",
    answer:
      "Information om leveranstider, fraktkostnader och returpolicy läggs till här innan butiken öppnar. Det går inte att genomföra ett köp ännu.",
  },
  {
    question: "Hur kontaktar jag kundservice?",
    answer: `Du är varmt välkommen att skicka e-post till ${siteConfig.contactEmail}. Vi återkommer så snart vi kan.`,
  },
  {
    question: "Kan jag köpa leksaken nu?",
    answer:
      "Queaky Charge lanseras mycket snart! Nätbutiken öppnar inom kort. Håll utkik på lillaplay.se för de senaste uppdateringarna om när du kan beställa.",
  },
];

function AccordionItem({
  item,
  index,
  parentId,
}: {
  item: FaqItem;
  index: number;
  parentId: string;
}) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const triggerId = `${parentId}-trigger-${index}`;
  const panelId = `${parentId}-panel-${index}`;

  useEffect(() => {
    if (open && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [open]);

  return (
    <div className="accordion-item">
      <button
        id={triggerId}
        className="accordion-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span>{item.question}</span>
        <ChevronDown size={20} className={`accordion-icon ${open ? "open" : ""}`} aria-hidden="true" />
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className="accordion-content"
        style={{ height: open ? height : 0 }}
      >
        <div ref={contentRef} className="accordion-content-inner">
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const id = useId().replace(/:/g, "");

  return (
    <section
      id="faq"
      className="section-padding scroll-mt-20"
      style={{ background: "var(--color-bg)" }}
      aria-labelledby="faq-heading"
    >
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-tag mb-4">Vanliga frågor</span>
          <h2 id="faq-heading" className="text-heading-1 mb-4">
            Har du{" "}
            <span style={{ color: "var(--color-purple)" }}>frågor?</span>
          </h2>
          <p className="text-body-lg" style={{ color: "var(--color-text-muted)" }}>
            Här hittar du svar på de vanligaste frågorna om Queaky Charge och LillaPlay.
          </p>
        </div>

        <div
          className="rounded-2xl"
          style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", padding: "0 2rem" }}
        >
          {faqs.map((item, i) => (
            <AccordionItem key={i} item={item} index={i} parentId={`faq-${id}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
