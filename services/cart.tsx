"use client";

import React, { createContext, useContext, useReducer, useEffect, useCallback } from "react";
import type { CartItem, CartState, ToastMessage } from "@/types";
import { generateId, clamp } from "@/lib/utils";

// ─── Actions ────────────────────────────────────────────────
type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> }
  | { type: "REMOVE_ITEM"; payload: { productId: string; variantId: string | null } }
  | { type: "UPDATE_QUANTITY"; payload: { productId: string; variantId: string | null; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "OPEN_CART" }
  | { type: "CLOSE_CART" }
  | { type: "HYDRATE"; payload: CartItem[] };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "HYDRATE":
      return { ...state, items: action.payload };

    case "ADD_ITEM": {
      const existing = state.items.find(
        (i) => i.productId === action.payload.productId && i.variantId === action.payload.variantId
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.productId === action.payload.productId && i.variantId === action.payload.variantId
              ? { ...i, quantity: clamp(i.quantity + 1, 1, 99) }
              : i
          ),
        };
      }
      return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter(
          (i) => !(i.productId === action.payload.productId && i.variantId === action.payload.variantId)
        ),
      };

    case "UPDATE_QUANTITY": {
      const qty = clamp(action.payload.quantity, 0, 99);
      if (qty === 0) {
        return {
          ...state,
          items: state.items.filter(
            (i) => !(i.productId === action.payload.productId && i.variantId === action.payload.variantId)
          ),
        };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.productId === action.payload.productId && i.variantId === action.payload.variantId
            ? { ...i, quantity: qty }
            : i
        ),
      };
    }

    case "CLEAR_CART":  return { ...state, items: [] };
    case "OPEN_CART":   return { ...state, isOpen: true };
    case "CLOSE_CART":  return { ...state, isOpen: false };
    default:            return state;
  }
}

// ─── Context ────────────────────────────────────────────────
interface CartContextValue {
  state: CartState;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (productId: string, variantId: string | null) => void;
  updateQuantity: (productId: string, variantId: string | null, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  itemCount: number;
  subtotal: number;
  toasts: ToastMessage[];
  dismissToast: (id: string) => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "lillaplay-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false });
  const [toasts, setToasts] = React.useState<ToastMessage[]>([]);

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) dispatch({ type: "HYDRATE", payload: JSON.parse(stored) as CartItem[] });
    } catch { /* ignore */ }
  }, []);

  // Persist to localStorage
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items)); } catch { /* ignore */ }
  }, [state.items]);

  const showToast = useCallback((message: string, type: ToastMessage["type"] = "success") => {
    const id = generateId();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3500);
  }, []);

  const addItem = useCallback(
    (item: Omit<CartItem, "quantity">) => {
      dispatch({ type: "ADD_ITEM", payload: item });
      showToast(`${item.name} har lagts i varukorgen`);
      dispatch({ type: "OPEN_CART" });
    },
    [showToast]
  );

  const removeItem = useCallback(
    (productId: string, variantId: string | null) =>
      dispatch({ type: "REMOVE_ITEM", payload: { productId, variantId } }),
    []
  );

  const updateQuantity = useCallback(
    (productId: string, variantId: string | null, quantity: number) =>
      dispatch({ type: "UPDATE_QUANTITY", payload: { productId, variantId, quantity } }),
    []
  );

  const clearCart  = useCallback(() => dispatch({ type: "CLEAR_CART" }), []);
  const openCart   = useCallback(() => dispatch({ type: "OPEN_CART" }), []);
  const closeCart  = useCallback(() => dispatch({ type: "CLOSE_CART" }), []);

  const dismissToast = useCallback(
    (id: string) => setToasts((prev) => prev.filter((t) => t.id !== id)),
    []
  );

  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal  = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ state, addItem, removeItem, updateQuantity, clearCart, openCart, closeCart, itemCount, subtotal, toasts, dismissToast }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
