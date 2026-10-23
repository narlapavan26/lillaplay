"use client";

import { useCart } from "@/services/cart";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

export default function ToastContainer() {
  const { toasts, dismissToast } = useCart();

  if (toasts.length === 0) return null;

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-3 pointer-events-none"
      role="region"
      aria-live="polite"
      aria-label="Aviseringar"
    >
      {toasts.map((toast) => {
        const Icon =
          toast.type === "success"
            ? CheckCircle2
            : toast.type === "error"
            ? AlertCircle
            : Info;

        return (
          <div
            key={toast.id}
            className="toast"
            role="status"
            aria-atomic="true"
          >
            <Icon size={18} style={{ color: "var(--color-amber)", flexShrink: 0 }} />
            <span className="flex-1">{toast.message}</span>
            <button
              onClick={() => dismissToast(toast.id)}
              className="p-1 rounded-full hover:bg-white/10 transition-colors flex-shrink-0"
              aria-label="Stäng aviseringen"
            >
              <X size={14} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
