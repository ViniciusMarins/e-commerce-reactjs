import { useContext, useEffect, useState } from "react";
import "./Products.css";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";
import AppContext from "../../context/AppContext";
import Paginator from "../Paginator/Paginator";

function Products() {
  const { products, setProducts, isLoading, setIsLoading } =
    useContext(AppContext);

  let [valorInicial, setValorInicial] = useState(0);
  let [valorFinal, setValorFinal] = useState(25);

  useEffect(() => {
    fetchProducts("eletronicos").then((res) => setProducts(res));
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <div className="container container-products">
        <h1 className="title-products"> Confira nossos produtos! </h1>

        <hr />
        <Paginator
          products={products}
          valorInicial={valorInicial}
          setValorInicial={setValorInicial}
          valorFinal={valorFinal}
          setValorFinal={setValorFinal}
        />
        <section className="products">
          {products.slice(valorInicial, valorFinal).map((product: any) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </section>
      </div>
    </>
  );
}

export default Products;
