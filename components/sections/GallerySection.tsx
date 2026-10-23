import Image from "next/image";
import { Camera } from "lucide-react";
import { featuredProduct } from "@/config/site";

export default function GallerySection() {
  const mainImage = featuredProduct.images[0];

  return (
    <section
      id="gallery"
      className="section-padding"
      style={{ background: "var(--color-bg-alt)" }}
      aria-labelledby="gallery-heading"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-tag mb-4">Bildgalleri</span>
          <h2 id="gallery-heading" className="text-heading-1 mb-4">
            Se leksaken{" "}
            <span style={{ color: "var(--color-coral)" }}>på riktigt</span>
          </h2>
          <p className="text-body-lg max-w-lg mx-auto" style={{ color: "var(--color-text-muted)" }}>
            Queaky Charge — en leksak med ett stort leende och ett ännu större ljud.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div
            className="rounded-2xl overflow-hidden flex items-center justify-center"
            style={{ boxShadow: "var(--shadow-md)", background: "white", minHeight: 320 }}
          >
            <Image
              src={mainImage.src}
              alt={mainImage.alt}
              width={600}
              height={500}
              className="object-contain w-full"
              style={{ height: "320px" }}
              loading="eager"
            />
          </div>

          {/* Branded card */}
          <div
            className="rounded-2xl flex items-center justify-center p-10 text-center"
            style={{ background: "var(--color-purple)", color: "white", minHeight: 260 }}
          >
            <div>
              <div
                className="text-5xl font-black mb-3"
                style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.03em" }}
              >
                Queaky
              </div>
              <div className="text-xl font-bold mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>
                Charge
              </div>
              <p className="text-sm max-w-xs mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
                Musik när du vill ha det — tystnad när du släpper taget.
                Upplev den elektriska kretsens lilla magi!
              </p>
            </div>
          </div>

          {/* More photos coming soon */}
          <div
            className="rounded-2xl flex flex-col items-center justify-center gap-3 p-10 text-center sm:col-span-2"
            style={{
              border: "2px dashed var(--color-purple-light)",
              background: "var(--color-surface)",
              minHeight: 180,
            }}
          >
            <Camera size={28} style={{ color: "var(--color-purple)" }} aria-hidden="true" />
            <p className="font-semibold" style={{ color: "var(--color-text)" }}>
              Fler bilder är på väg
            </p>
            <p className="text-sm max-w-sm" style={{ color: "var(--color-text-muted)" }}>
              Vi fyller snart på med fler livsstils- och produktbilder av Queaky Charge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
