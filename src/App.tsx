import { useRef } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import SlideTop from "./components/SlideTop/SlideTop";
import Provider from "./context/Provider";
import { ToastContainer } from "react-toastify";
import CardSection from "./components/CardSection/CardSection";
import Footer from "./components/Footer/Footer";
import Banner from "./assets/banner.webp";

function App() {
  const topRef = useRef(null);

  return (
    <Provider>
      <main ref={topRef}>
        <ToastContainer />
        <Header />

        <section className="banner-image ">
          <img src={Banner} alt="Anuncio" />
        </section>

        <CardSection />
        <Products />
        <Cart />
        <Footer />
        <SlideTop topRef={topRef} />
      </main>
    </Provider>
  );
}

export default App;
