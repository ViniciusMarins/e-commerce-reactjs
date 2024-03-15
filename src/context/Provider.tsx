import { useState } from "react";
import AppContext from "./AppContext";

type Props = {
  children: React.ReactNode;
};

function Provider({ children }: Props) {
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cartItems, setCartItems] = useState<any[]>([]);

  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const value = {
    products,
    setProducts,
    isLoading,
    setIsLoading,
    cartItems,
    setCartItems,
    isMenuVisible,
    setIsMenuVisible,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default Provider;
