import { create } from 'zustand';

interface CartItem {
  id: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

interface Cart {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  decreaseQty: (id: string) => void;
}

export const useCartStore = create<Cart>((set) => ({
  items: [],
  addItem: (item: CartItem) => {
    set((state) => {
      const existingItem = state.items.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return {
          items: state.items.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      } else {
        return {
          items: [...state.items, { ...item, quantity: 1 }],
        };
      }
    });
  },
  decreaseQty: (id: string) => {
    set((state) => {
      const item = state.items.find((cartItem) => cartItem.id === id);
      if (item) {
        if (item.quantity > 1) {
          return {
            items: state.items.map((cartItem) =>
              cartItem.id === id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
            ),
          };
        } else {
          return {
            items: state.items.filter((cartItem) => cartItem.id !== id),
          };
        }
      }
      return state;
    });
  },
}));

