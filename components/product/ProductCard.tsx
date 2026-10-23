"use client";

import { useState, useCallback } from "react";
import { Zap, Battery, Music, BookOpen, ShoppingBag, Package, Check } from "lucide-react";
import type { Product } from "@/config/site";
import { useCart } from "@/services/cart";
import { formatPrice, clamp } from "@/lib/utils";
import ProductGallery from "./ProductGallery";

const iconMap: Record<string, React.ElementType> = {
  Zap, Battery, Music, BookOpen, ShoppingBag, Package, Check,
};

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(
    product.variants.length > 0 ? product.variants[0].id : null
  );
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = useCallback(async () => {
    if (product.price === null || product.availability === "out_of_stock") return;
    setIsAdding(true);
    const variantLabel = product.variants.find((v) => v.id === selectedVariant)?.label ?? null;
    for (let i = 0; i < quantity; i++) {
      addItem({
        productId: product.id,
        variantId: selectedVariant,
        name: product.name,
        variantLabel,
        price: product.price,
        image: product.images[0],
      });
    }
    setTimeout(() => setIsAdding(false), 800);
  }, [product, selectedVariant, quantity, addItem]);

  const availabilityBadge = () => {
    switch (product.availability) {
      case "in_stock":     return <span className="badge badge-in-stock">I lager</span>;
      case "out_of_stock": return <span className="badge badge-out-of-stock">Slut i lager</span>;
      case "coming_soon":  return <span className="badge badge-coming-soon">Kommer snart</span>;
    }
  };

  return (
    <div id="product" className="scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <ProductGallery images={product.images} />

        <div className="flex flex-col gap-6">
          <div>{availabilityBadge()}</div>

          <h1 className="text-heading-1" style={{ color: "var(--color-text)" }}>
            {product.name}
          </h1>

          <p className="text-body-lg" style={{ color: "var(--color-text-muted)" }}>
            {product.shortDescription}
          </p>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            {product.price !== null ? (
              <span className="text-heading-2" style={{ color: "var(--color-coral)", fontWeight: 800 }}>
                {formatPrice(product.price, product.currency)}
              </span>
            ) : (
              <span className="text-lg font-semibold" style={{ color: "var(--color-text-muted)" }}>
                Pris meddelas snart
              </span>
            )}
          </div>

          {/* Variants */}
          {product.variants.length > 0 && (
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-sm">Variant</span>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    id={`variant-${v.id}`}
                    onClick={() => setSelectedVariant(v.id)}
                    disabled={!v.available}
                    className="btn btn-sm"
                    style={{
                      background: selectedVariant === v.id ? "var(--color-purple)" : "white",
                      color: selectedVariant === v.id ? "white" : "var(--color-text)",
                      borderColor: selectedVariant === v.id ? "var(--color-purple)" : "var(--color-border)",
                    }}
                    aria-pressed={selectedVariant === v.id}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-sm">Antal</span>
            <div className="qty-control">
              <button className="qty-btn" onClick={() => setQuantity((q) => clamp(q - 1, 1, 10))} aria-label="Minska antal" id="qty-decrease">−</button>
              <span className="qty-value" aria-live="polite" aria-label={`Antal: ${quantity}`}>{quantity}</span>
              <button className="qty-btn" onClick={() => setQuantity((q) => clamp(q + 1, 1, 10))} aria-label="Öka antal" id="qty-increase">+</button>
            </div>
          </div>

          {/* Add to cart / Coming soon */}
          {product.availability === "coming_soon" ? (
            <div className="rounded-2xl p-4 text-center font-semibold" style={{ background: "var(--color-amber)", color: "#3a2800" }}>
              🔔 Butiken öppnar snart — håll utkik!
            </div>
          ) : (
            <button
              id="add-to-cart"
              className="btn btn-primary btn-lg"
              onClick={handleAddToCart}
              disabled={product.price === null || product.availability === "out_of_stock" || isAdding}
              aria-label={`Lägg ${product.name} i varukorgen`}
            >
              <ShoppingBag size={20} />
              {isAdding ? "Tillagd!" : "Lägg i varukorg"}
            </button>
          )}

          {/* What's in the box */}
          <div className="rounded-2xl p-5" style={{ background: "var(--color-purple-pale)", border: "1px solid var(--color-border)" }}>
            <div className="flex items-center gap-2 font-bold mb-3" style={{ color: "var(--color-purple)" }}>
              <Package size={18} />
              <span>Vad ingår i paketet?</span>
            </div>
            <ul className="flex flex-col gap-1.5">
              {product.whatsInTheBox.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
                  <Check size={14} className="mt-1 flex-shrink-0" style={{ color: "var(--color-purple)" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {product.recommendedAge && (
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              <strong>Rekommenderad ålder:</strong> {product.recommendedAge}
            </p>
          )}
        </div>
      </div>

      {/* Features & Specs */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-heading-3 mb-6">Funktioner</h2>
          <div className="flex flex-col gap-4">
            {product.features.map((feature, i) => {
              const Icon = iconMap[feature.icon] ?? Zap;
              return (
                <div key={i} className="flex gap-4 items-start">
                  <div className="rounded-xl p-3 flex-shrink-0" style={{ background: "var(--color-coral-pale)" }}>
                    <Icon size={20} style={{ color: "var(--color-coral)" }} />
                  </div>
                  <div>
                    <div className="font-bold mb-0.5">{feature.title}</div>
                    <div className="text-sm" style={{ color: "var(--color-text-muted)" }}>{feature.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-heading-3 mb-6">Specifikationer</h2>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--color-border)" }}>
            {product.specifications.map((spec, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-5 py-3.5"
                style={{
                  background: i % 2 === 0 ? "white" : "var(--color-bg-alt)",
                  borderBottom: i < product.specifications.length - 1 ? "1px solid var(--color-border)" : "none",
                }}
              >
                <span className="text-sm font-semibold" style={{ color: "var(--color-text-muted)" }}>{spec.label}</span>
                <span className="text-sm font-bold" style={{ color: "var(--color-text)" }}>{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
