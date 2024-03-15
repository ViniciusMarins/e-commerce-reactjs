export type Product = {
  product: {
    id: string;
    title: string;
    thumbnail: string;
    price: number;
    original_price: number;
    shipping: {
      free_shipping: boolean;
    };
  };
};
