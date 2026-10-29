const BOOKSY_URL =
  "https://booksy.com/es-es/155435_fields-barbers_barberia_27080_cordoba#ba_s=seo";

const services = [
  {
    name: "Corte fade / taper",
    description: "Corte degradado o taper con afeitadora.",
    price: "13 €",
    duration: "40 min",
  },
  {
    name: "Corte y arreglo de barba",
    description: "Corte de pelo acompañado de arreglo de barba.",
    price: "17 €",
    duration: "1 h",
  },
  {
    name: "Corte normal de caballero",
    description: "Corte en los laterales desde el número 0,5.",
    price: "12 €",
    duration: "30 min",
  },
  {
    name: "Recorte de barba",
    description: "Repaso y definición de la barba.",
    price: "7 €",
    duration: "20 min",
  },
  {
    name: "Mantenimiento semanal de cabello",
    description: "Mantenimiento del corte para mantenerlo impecable.",
    price: "11 €",
    duration: "30 min",
  },
  {
    name: "Mantenimiento semanal de cabello y barba",
    description: "Repaso del cabello y arreglo de barba.",
    price: "13 €",
    duration: "40 min",
  },
  {
    name: "Corte completo a tijera",
    description: "Corte trabajado íntegramente con tijera.",
    price: "14 €",
    duration: "40 min",
  },
  {
    name: "Corte + lavado",
    description: "Corte de pelo con lavado incluido.",
    price: "14 €",
    duration: "45 min",
  },
  {
    name: "Rapado",
    description: "Corte completo a máquina, todo al mismo número.",
    price: "8 €",
    duration: "20 min",
  },
];

function Services() {
  return (
    <section className="section services" id="servicios">
      <p className="eyebrow">CORTES Y PRECIOS</p>
      <h2>NUESTROS SERVICIOS</h2>

      <p className="services-intro">
        Precisión, estilo y atención al detalle. Encuentra tu próximo corte.
      </p>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.name}>
            <div className="service-info">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <span className="service-time">{service.duration}</span>
            </div>

            <div className="service-price">
              <strong>{service.price}</strong>
            </div>
          </article>
        ))}
      </div>

      <a
        className="button"
        href={BOOKSY_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        RESERVAR CITA EN BOOKSY ↗
      </a>
    </section>
  );
}

export default Services;
