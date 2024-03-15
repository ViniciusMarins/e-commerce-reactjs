import "./ProductCard.css";
import { MdLocalShipping } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa6";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Product } from "../../types/ProductType";
import { calculateDiscount, convertPriceToBrl } from "../../utils/Currency";
import { notifySucess, notifyWarn } from "../../utils/Toasts";

function ProductCard({ product }: Product) {
  const { cartItems, setCartItems } = useContext(AppContext);

  function addItemToCart() {
    setCartItems([...cartItems, product]);
  }

  return (
    <div className="container_card">
      <img
        className="card_image"
        src={product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt="Product"
      />

      <div className="card_infos">
        <h2 className="card_title">{product.title}</h2>

        {product.original_price && (
          <p className="card_original-price">
            {convertPriceToBrl(product.original_price)}
          </p>
        )}

        <h2 className="card_price">
          {convertPriceToBrl(product.price)}
          {product.original_price &&
            product.original_price !== product.price && (
              <span>
                {calculateDiscount(product.original_price, product.price)}% OFF
              </span>
            )}
        </h2>

        {product.shipping.free_shipping && (
          <p className="card_shipping">
            <MdLocalShipping /> Frete Grátis
          </p>
        )}
      </div>

      <button
        className="card_add-button"
        type="button"
        onClick={() => {
          let flag = false;

          cartItems.map((item: any) => {
            if (item.id === product.id) {
              flag = true;
            }
          });

          if (!flag) {
            addItemToCart();
            notifySucess();
          } else {
            notifyWarn();
          }
        }}
      >
        <FaCartPlus />
      </button>
    </div>
  );
}

export default ProductCard;
