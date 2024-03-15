import { BsFillCartXFill } from "react-icons/bs";
import "./CarItem.css";
import { MdLocalShipping } from "react-icons/md";
import { calculateDiscount, convertPriceToBrl } from "../../utils/Currency";
import { Product } from "../../types/ProductType";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

function CartItem({ product }: Product) {
  const { cartItems, setCartItems } = useContext(AppContext);

  function removeItemFromCart(productIdToRemove: string) {
    const tempCartItems = cartItems.filter(
      (item: any) => item.id !== productIdToRemove
    );

    setCartItems(tempCartItems);
  }

  return (
    <section className="cart-item">
      <img
        className="cart-item-image"
        src={product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt="Product image"
      />

      <div className="cart-item-infos">
        <h3 className="cart-item-title"> {product.title}</h3>

        {product.original_price && (
          <p className="cart-item-original-price">
            {convertPriceToBrl(product.original_price)}
          </p>
        )}

        <h3 className="cart-item-price">
          {convertPriceToBrl(product.price)}
          {product.original_price &&
            product.original_price !== product.price && (
              <span>
                {calculateDiscount(product.original_price, product.price)}% OFF
              </span>
            )}
        </h3>

        {product.shipping.free_shipping && (
          <p className="card_shipping">
            <MdLocalShipping /> Frete Grátis
          </p>
        )}
      </div>

      <button
        className="cart-item-remove-button"
        type="button"
        onClick={() => removeItemFromCart(product.id)}
      >
        <BsFillCartXFill />
      </button>
    </section>
  );
}

export default CartItem;
