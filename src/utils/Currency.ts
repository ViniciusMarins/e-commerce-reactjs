export function convertPriceToBrl(price: number): string {
  return price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}

export function calculateDiscount(original_price: number, price: number) {
  return (((original_price - price) / original_price) * 100).toPrecision(2);
}
