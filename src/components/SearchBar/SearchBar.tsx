import { useContext, useRef } from "react";
import "./SearchBar.css";
import { LuSearch } from "react-icons/lu";
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../../context/AppContext";

function SearchBar() {
  const searchInput = useRef<HTMLInputElement>(null);

  const { setProducts, setIsLoading } = useContext(AppContext);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    const searchValue = searchInput.current?.value;

    if (searchValue) {
      const products = await fetchProducts(searchValue);
      setProducts(products);
      searchInput.current.value = "";
      setIsLoading(false);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="search_input"
        ref={searchInput}
        type="search"
        placeholder="Buscar produtos"
        required
      />

      <button className="search_button" type="submit">
        <LuSearch />
      </button>
    </form>
  );
}

export default SearchBar;
