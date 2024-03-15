import SearchBar from "../SearchBar/SearchBar";
import ShoppingCart from "../CartButton/CartButton";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>ShopStore</h1>
        <SearchBar />
        <ShoppingCart />
      </div>
    </header>
  );
}

export default Header;
