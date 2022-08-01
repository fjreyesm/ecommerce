import { createContext, ReactNode, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";

type ShoppingCartProviderProps = { children: ReactNode };

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CarItem[];
};
type CarItem = {
  id: number;
  quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CarItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const cartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const openCart = () => setIsOpen(true);

  const closeCart = () => setIsOpen(false);

  const getItemQuantity = (id: number) => {
    return (
      cartItems.find((item: { id: number }) => item.id === id)?.quantity || 0
    );
  };

  const increaseCartQuantity = (id: number) => {
    setCartItems((currentItems: { id: number; quantity: number }[]) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      }
    });
  };

  const decreaseCartQuantity = (id: number) => {
    setCartItems((currentItems: { id: number; quantity: number }[]) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
      }
    });
  };
  const removeFromCart = (id: number) => {
    setCartItems((currentItems: { id: number; quantity: number }[]) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        openCart,
        closeCart,
        cartQuantity,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
