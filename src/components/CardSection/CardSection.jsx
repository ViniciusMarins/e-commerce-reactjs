import "./CardSection.css";
import Offer from "../../assets/offer.png";
import Offer2 from "../../assets/offer2.png";
import Payment from "../../assets/payment.png";
import Save_money from "../../assets/save-money.png";

function CardSection() {
  return (
    <>
      <h1
        style={{
          display: "block",
          textAlign: "center",
          letterSpacing: "5px",
          margin: "10px",
        }}
      >
        Não perca essa oportunidade!
      </h1>
      <section className="cards-container">
        <div className="card">
          <aside>
            <div className="card-infos">
              <span className="info-title">aproveite</span>
              <span className="info-text">pague menos e</span>
              <span className="info-text">leve mais</span>
            </div>
          </aside>
          <img src={Offer2} alt="Marketing Image" />
        </div>

        <div className="card">
          <aside>
            <div className="card-infos">
              <span className="info-title">imperdível</span>
              <span className="info-text">aproveite as</span>
              <span className="info-text">melhores ofertas</span>
            </div>
          </aside>
          <img src={Offer} alt="Marketing Image" />
        </div>

        <div className="card">
          <aside>
            <div className="card-infos">
              <span className="info-title">pagamento</span>
              <span className="info-text">parcele em</span>
              <span className="info-text">até 10x sem juros</span>
            </div>
          </aside>
          <img src={Payment} alt="Marketing Image" />
        </div>

        <div className="card">
          <aside>
            <div className="card-infos">
              <span className="info-title">variedade</span>
              <span className="info-text">uma infinidade</span>
              <span className="info-text">de produtos para você</span>
            </div>
          </aside>
          <img src={Save_money} alt="Marketing Image" />
        </div>
      </section>
    </>
  );
}

export default CardSection;
