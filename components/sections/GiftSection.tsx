import Image from "next/image";
import Link from "next/link";
import { featuredProduct } from "@/config/site";

export default function GiftSection() {
  const image = featuredProduct.images[0];

  return (
    <section
      id="gift"
      className="section-padding"
      style={{ background: "var(--color-bg)" }}
      aria-labelledby="gift-heading"
    >
      <div className="container">
        <div
          className="rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
          style={{
            background: "linear-gradient(135deg, var(--color-amber) 0%, #f9a52a 100%)",
            boxShadow: "var(--shadow-xl)",
          }}
        >
          {/* Text side */}
          <div className="flex flex-col justify-center p-10 md:p-14">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold mb-6 self-start"
              style={{ background: "rgba(255,255,255,0.3)", color: "#3a2800" }}
            >
              🎁 Den perfekta presenten
            </span>
            <h2
              id="gift-heading"
              className="text-heading-1 mb-4"
              style={{ color: "#3a2800" }}
            >
              En leksak som sticker ut
            </h2>
            <p
              className="text-body-lg mb-6"
              style={{ color: "rgba(58,40,0,0.80)" }}
            >
              Queaky Charge är ingen vanlig leksak. Den kombinerar lek med ett
              naturligt wow-ögonblick — den glada överraskningen när musiken
              plötsligt börjar spela.
            </p>
            <p className="text-sm mb-8" style={{ color: "rgba(58,40,0,0.65)" }}>
              Letar du efter en present som barn faktiskt pratar om? Queaky
              Charge är något utöver det vanliga — rolig, enkel och minnesvärd.
            </p>
            <Link
              href="/#product"
              className="btn self-start"
              id="gift-cta"
              style={{ background: "#3a2800", color: "white", borderColor: "#3a2800" }}
            >
              Utforska leksaken
            </Link>
          </div>

          {/* Image side */}
          <div
            className="relative min-h-64 md:min-h-80 flex items-center justify-center p-10"
            style={{ background: "rgba(255,255,255,0.25)" }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={360}
              height={360}
              className="object-contain w-full h-full max-w-[280px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
