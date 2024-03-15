import { useContext } from "react";
import CartItem from "../CartItem/CarItem";
import "./Cart.css";
import AppContext from "../../context/AppContext";
import { convertPriceToBrl } from "../../utils/Currency";

function Cart() {
  const { cartItems, isMenuVisible } = useContext(AppContext);

  const subTotal = cartItems.reduce(
    (acc: number, item: any) => item.price + acc,
    0
  );

  return (
    <aside className={`cart ${isMenuVisible ? "cart-active" : ""}`}>
      <h2 style={{ fontSize: "1.4rem" }}>Carrinho de Compras</h2>
      <div className="cart-items">
        {cartItems.map((product: any, key: any) => {
          return <CartItem key={key} product={product} />;
        })}
      </div>
      <div className="cart-resume">
        <p>Subtotal: {convertPriceToBrl(subTotal)}</p>
        <button>Finalizar pedido</button>
      </div>
    </aside>
  );
}

export default Cart;
