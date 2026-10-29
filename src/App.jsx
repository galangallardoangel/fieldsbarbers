import "./App.css";
import Header from "./components/Header";
import Services from "./components/Services";
import Reviews from "./components/Reviews";

function App() {
  return (
    <>
      <Header />

      <main>
        <section className="hero" id="inicio">
          <p className="eyebrow">BARBERÍA · CÓRDOBA</p>

          <h1>
            TU ESTILO.
            <br />
            TUS REGLAS.
          </h1>

          <p className="hero-text">
            Más que un corte, una forma de expresarte. Bienvenido a Fields
            Barbers.
          </p>

          <a
            className="button button-light"
            href="https://booksy.com/es-es/155435_fields-barbers_barberia_27080_cordoba#ba_s=seo"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESERVA TU CITA ↗
          </a>
        </section>

        <Services />
        <Reviews />

        <section className="section about" id="nosotros">
          <p className="eyebrow">FIELDS BARBERS</p>
          <h2>ESTILO CON PERSONALIDAD.</h2>
          <p>
            Creemos que cada detalle cuenta. Nuestro objetivo es que salgas de
            la barbería con un estilo que te represente.
          </p>
        </section>

        <section className="section contact" id="contacto">
          <p className="eyebrow">¿PREPARADO PARA EL CAMBIO?</p>
          <h2>TE ESPERAMOS EN LA BARBERÍA.</h2>

          <a
            className="button button-light"
            href="https://booksy.com/es-es/155435_fields-barbers_barberia_27080_cordoba#ba_s=seo"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESERVAR EN BOOKSY ↗
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Fields Barbers</p>
      </footer>
    </>
  );
}

export default App;
