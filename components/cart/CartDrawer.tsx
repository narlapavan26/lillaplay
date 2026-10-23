"use client";

import { useCart } from "@/services/cart";
import { useEffect } from "react";
import { X, ShoppingBag, Trash2, Plus, Minus } from "lucide-react";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const { state, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  useEffect(() => {
    if (!state.isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closeCart(); };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [state.isOpen, closeCart]);

  if (!state.isOpen) return null;

  return (
    <>
      <div className="drawer-overlay" onClick={closeCart} aria-hidden="true" />

      <aside className="drawer" role="dialog" aria-modal="true" aria-label="Varukorg" id="cart-drawer">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: "1px solid var(--color-border)" }}>
          <div className="flex items-center gap-2">
            <ShoppingBag size={22} style={{ color: "var(--color-purple)" }} />
            <span className="font-bold text-lg" style={{ color: "var(--color-text)" }}>Varukorg</span>
            {itemCount > 0 && (
              <span className="badge" style={{ background: "var(--color-purple-pale)", color: "var(--color-purple)" }}>
                {itemCount}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="p-2 rounded-full transition-colors hover:bg-[var(--color-purple-pale)]"
            style={{ color: "var(--color-text-muted)" }}
            aria-label="Stäng varukorgen"
            id="cart-close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Demo notice */}
        <div
          className="mx-5 mt-4 rounded-xl px-4 py-2.5 text-xs text-center font-semibold"
          style={{ background: "var(--color-amber)", color: "#3a2800" }}
        >
          Demovarukorg — utcheckning är inte tillgänglig ännu
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
              <ShoppingBag size={48} style={{ color: "var(--color-text-light)" }} aria-hidden="true" />
              <p className="font-semibold" style={{ color: "var(--color-text-muted)" }}>Din varukorg är tom</p>
              <button onClick={closeCart} className="btn btn-secondary btn-sm" id="cart-continue-shopping">
                Fortsätt handla
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-4" role="list">
              {state.items.map((item) => (
                <li
                  key={`${item.productId}-${item.variantId ?? "default"}`}
                  className="flex gap-4"
                  style={{ padding: "1rem", background: "var(--color-bg)", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)" }}
                >
                  <div className="rounded-xl overflow-hidden flex-shrink-0" style={{ width: 72, height: 72, background: "white" }}>
                    <Image src={item.image.src} alt={item.image.alt} width={72} height={72} className="object-contain w-full h-full" />
                  </div>
                  <div className="flex-1 flex flex-col gap-1.5 min-w-0">
                    <div className="font-bold text-sm truncate" style={{ color: "var(--color-text)" }}>{item.name}</div>
                    {item.variantLabel && (
                      <div className="text-xs" style={{ color: "var(--color-text-muted)" }}>{item.variantLabel}</div>
                    )}
                    <div className="font-bold text-sm" style={{ color: "var(--color-coral)" }}>
                      {formatPrice(item.price * item.quantity)}
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="qty-control" style={{ transform: "scale(0.85)", transformOrigin: "left" }}>
                        <button className="qty-btn" onClick={() => updateQuantity(item.productId, item.variantId, item.quantity - 1)} aria-label="Minska antal" id={`cart-qty-dec-${item.productId}`}>
                          <Minus size={12} />
                        </button>
                        <span className="qty-value text-sm">{item.quantity}</span>
                        <button className="qty-btn" onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)} aria-label="Öka antal" id={`cart-qty-inc-${item.productId}`}>
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.productId, item.variantId)}
                        className="p-1.5 rounded-lg transition-colors hover:bg-red-50"
                        style={{ color: "var(--color-text-light)" }}
                        aria-label={`Ta bort ${item.name} från varukorgen`}
                        id={`cart-remove-${item.productId}`}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="px-5 pb-6 pt-4 flex flex-col gap-4" style={{ borderTop: "1px solid var(--color-border)" }}>
            <div className="flex items-center justify-between">
              <span className="font-semibold" style={{ color: "var(--color-text-muted)" }}>Delsumma</span>
              <span className="font-bold text-lg" style={{ color: "var(--color-text)" }}>{formatPrice(subtotal)}</span>
            </div>
            <div className="rounded-xl p-4 text-sm text-center" style={{ background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", color: "var(--color-text-muted)" }}>
              <strong style={{ color: "var(--color-text)" }}>Utcheckning kommer snart!</strong>
              <br />
              Vår butik öppnar inom kort. Du kan inte slutföra ett köp ännu.
            </div>
            <button className="btn btn-secondary" onClick={closeCart} id="cart-close-footer">
              Fortsätt handla
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
