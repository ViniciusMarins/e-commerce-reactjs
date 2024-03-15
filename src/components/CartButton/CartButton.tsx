import { FaCartShopping } from "react-icons/fa6";
import "./CartButton.css";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

function ShoppingCart() {
  const { cartItems, setIsMenuVisible } = useContext(AppContext);

  return (
    <>
      <button
        type="button"
        className="cart_button"
        onClick={() => setIsMenuVisible((prev: boolean) => !prev)}
      >
        <FaCartShopping />
        <span className="cart_status">{cartItems.length}</span>
      </button>
    </>
  );
}

export default ShoppingCart;
