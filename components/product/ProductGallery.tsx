"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
}

// ─── Lightbox ───────────────────────────────────────────────

function Lightbox({
  images,
  initialIndex,
  onClose,
}: {
  images: GalleryImage[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(initialIndex);

  const prev = useCallback(() => setCurrent((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((i) => (i + 1) % images.length), [images.length]);

  return (
    <div
      className="lightbox-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Bildvisare"
    >
      <div className="relative max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
        <Image
          src={images[current].src}
          alt={images[current].alt}
          width={900}
          height={700}
          className="rounded-xl object-contain max-h-[80vh] w-full"
          style={{ objectFit: "contain" }}
          priority
        />
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white rounded-full hover:bg-white/20 transition-colors"
          aria-label="Stäng bildvisaren"
          id="lightbox-close"
        >
          <X size={28} />
        </button>

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 text-white bg-black/40 hover:bg-black/60 rounded-full transition-colors"
              aria-label="Föregående bild"
              id="lightbox-prev"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-white bg-black/40 hover:bg-black/60 rounded-full transition-colors"
              aria-label="Nästa bild"
              id="lightbox-next"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        <div className="text-center text-white/70 text-sm mt-3 font-semibold">
          {current + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}

// ─── Product Gallery ────────────────────────────────────────

export default function ProductGallery({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const active = images[activeIndex];

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div
        className="relative rounded-2xl overflow-hidden bg-white cursor-zoom-in group"
        style={{ aspectRatio: "1/1", boxShadow: "var(--shadow-md)", border: "2px solid var(--color-border)" }}
        onClick={() => setLightboxOpen(true)}
        role="button"
        aria-label="Öppna bilden i helskärm"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setLightboxOpen(true)}
        id="product-main-image"
      >
        <Image
          src={active.src}
          alt={active.alt}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        <div className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
          <ZoomIn size={18} style={{ color: "var(--color-purple)" }} />
        </div>
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="thumbnail-strip" role="tablist" aria-label="Produktbilder">
          {images.map((img, i) => (
            <button
              key={img.src}
              className={`thumbnail ${i === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(i)}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={img.alt}
              id={`product-thumb-${i}`}
            >
              <Image src={img.src} alt={img.alt} width={72} height={72} className="object-cover w-full h-full" />
            </button>
          ))}
        </div>
      )}

      {lightboxOpen && (
        <Lightbox images={images} initialIndex={activeIndex} onClose={() => setLightboxOpen(false)} />
      )}
    </div>
  );
}
