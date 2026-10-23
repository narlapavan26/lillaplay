// Shared TypeScript types for LillaPlay
// Import from here in all components — never redefine locally.

export interface CartItem {
  productId: string;
  variantId: string | null;
  name: string;
  variantLabel: string | null;
  price: number;
  quantity: number;
  image: { src: string; alt: string };
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

export interface ToastMessage {
  id: string;
  message: string;
  type: "success" | "info" | "error";
}
