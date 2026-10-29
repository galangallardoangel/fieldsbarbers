import "./Reviews.css";
import { useEffect, useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Adolfo Romero Martínez",
    rating: 5,
    date: "Hace 4 meses",
    text: "Experiencia inmejorable, trato super profesional, corte personalizado y recomendado para todos los públicos. Volveré a repetir sin duda alguna 👏🏻",
  },
  {
    id: 2,
    name: "Sergio Rojas Lendines",
    rating: 5,
    date: "Hace 8 meses",
    text: "Genial la experiencia. Fernando es un muy buen profesional, cuidadoso en su trabajo y se nota que disfruta lo que hace.",
  },
  {
    id: 3,
    name: "raednores",
    rating: 5,
    date: "Hace 11 meses",
    text: "Gran experiencia. Ambiente muy cercano y gran profesionalidad. Fernando se supo adaptar a lo que yo quería, aconsejándome lo que me podía quedar mejor según mi tipo de pelo. Mi novia me ha dicho que ya no cambie de peluquero. Repito 100%",
  },
  {
    id: 4,
    name: "Rafael Sánchez Córdoba",
    rating: 5,
    date: "Hace 3 meses",
    text: "Genial la experiencia! Gran profesional y gran servicio. Lo recomiendo!",
  },
  {
    id: 5,
    name: "Alex G",
    rating: 5,
    date: "Hace un año",
    text: "Excelente servicio! Fui a cortarme el pelo con él y quedé encantado con el resultado. Desde el momento en que llegué, me atendió con mucha amabilidad.",
  },
  {
    id: 6,
    name: "Javi Susín",
    rating: 5,
    date: "Hace un año",
    text: "Muy contento con el resultado. Fernando es muy amable y profesional, me asesoró para conseguir el corte ideal para mi tipo de pelo. Recomendable 100%!!",
  },
  {
    id: 7,
    name: "Francisco José Fernández Báez",
    rating: 5,
    date: "Hace un año",
    text: "Profesionalidad, buen trato y un resultado 10/10. Desde luego, un servicio excelente y de calidad es lo que se ofrece en esta barbería a manos de Fernando. Se nota la dedicación puesta en el trabajo, viéndose reflejada en cada corte.",
  },
  {
    id: 8,
    name: "Alvaro Salmoral Lopez",
    rating: 5,
    date: "Hace 4 meses",
    text: "Peluquero excelente, buen trato y servicio excelente. Desde luego alguien en que depositar tu confianza!",
  },
  {
    id: 9,
    name: "Álvaro Rodríguez Onieva",
    rating: 5,
    date: "Hace un año",
    text: "El mejor corte que me han hecho en Córdoba, trato increíble y muy cercano. Para repetir siempre 100%. Buen trabajo Fernando.",
  },
  {
    id: 10,
    name: "Luis De Haro Soler",
    rating: 5,
    date: "Hace un año",
    text: "Fernando es muy simpático y profesional. Recomiendo 100% sus servicios. Destacar la ubicación y la original decoración del local. Siempre en las mejores manos ✂️💇‍♂️.",
  },
  {
    id: 11,
    name: "Juan Manuel García Jaraba",
    rating: 5,
    date: "Hace 4 meses",
    text: "Excelente resultado, trato inmejorable y recomendaciones muy acertadas! Campos es un profesional de los pies a la cabeza.",
  },
  {
    id: 12,
    name: "Oscar Garrido",
    rating: 5,
    date: "Hace un año",
    text: "¡Excelentísima atención! Gran experto y profesional, que se nota que disfruta con lo que hace. Un lugar que rompe un poco con el estereotipo de peluquería-barbería para bien. Lo recomiendo 100%. Nos volveremos a ver.",
  },
  {
    id: 13,
    name: "Luis Vacas Ruiz",
    rating: 5,
    date: "Hace un año",
    text: "Gran peluquero, profesional y apasionado en su trabajo. Recomiendo totalmente acudir a la peluquería por el resultado y por el proceso. La decoración del local es moderna y amplia.",
  },
  {
    id: 14,
    name: "Adriano Romero",
    rating: 5,
    date: "Hace un año",
    text: "Muy contento con el servicio, Fernando me asesoró en todo momento lo que me podría venir bien. Gran profesional, recomendable 100%.",
  },
  {
    id: 15,
    name: "Juan Carlos Rodriguez",
    rating: 5,
    date: "Hace un año",
    text: "Muy buen profesional, buen trato de Fernando y me gustó mucho el corte realizado.",
  },
  {
    id: 16,
    name: "Juanki Acosta",
    rating: 5,
    date: "Hace un año",
    text: "Fernando es todo un profesional, muy atento a todo siempre.",
  },
  {
    id: 17,
    name: "Antonio Del Moral",
    rating: 5,
    date: "Hace un mes",
    text: "Genial, Fernando un Crack!!!",
  },
  {
    id: 18,
    name: "Esteban Campos.",
    rating: 5,
    date: "Hace un año",
    text: "Muy bueno... Hace poquito que está pero el servicio es excelente. Amable y educado.",
  },
  {
    id: 19,
    name: "Álvaro Garrido",
    rating: 5,
    date: "Hace un año",
    text: "Trato y resultado de 10, las recomendaciones de Fernando todo un acierto!",
  },
  {
    id: 20,
    name: "Alfon99 Esp",
    rating: 5,
    date: "Hace un año",
    text: "Peluquero de confianza! Profesional y servicio de calidad.",
  },
];
const BOOKSY_URL =
  "https://booksy.com/es-es/155435_fields-barbers_barberia_27080_cordoba#ba_s=seo";

// const GOOGLE_URL =
//   "https://www.google.com/maps/place/Fields+barbers/@37.8739792,-4.7971519,17z/";

function Stars({ rating }) {
  return (
    <div className="review-stars" aria-label={`${rating} de 5 estrellas`}>
      {"★".repeat(rating)}
      <span className="empty-stars">{"★".repeat(5 - rating)}</span>
    </div>
  );
}

function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Avanza una reseña cada 10 segundos.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % reviews.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Muestra 3 reseñas consecutivas, incluyendo el final del array.
  const visibleReviews = Array.from(
    { length: 3 },
    (_, i) => reviews[(currentIndex + i) % reviews.length],
  );

  const nextReview = () => {
    setCurrentIndex((current) => (current + 1) % reviews.length);
  };

  const previousReview = () => {
    setCurrentIndex(
      (current) => (current - 1 + reviews.length) % reviews.length,
    );
  };

  return (
    <section className="section reviews" id="resenas">
      <p className="eyebrow">LA OPINIÓN DE NUESTROS CLIENTES</p>

      <h2>LO QUE DICEN DE NOSOTROS</h2>

      <div className="reviews-summary">
        <span className="reviews-score">5.0</span>
        <div>
          <Stars rating={5} />
          <p>Reseñas de clientes en Google</p>
        </div>
      </div>

      <div className="reviews-grid">
        {visibleReviews.map((review) => (
          <article className="review-card" key={review.id}>
            <Stars rating={review.rating} />

            <p className="review-text">“{review.text}”</p>

            <div className="review-author">
              <span className="review-avatar" aria-hidden="true">
                {review.name.charAt(0).toUpperCase()}
              </span>

              <div>
                <h3>{review.name}</h3>
                <span className="review-date">{review.date} · Google</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="reviews-controls">
        <button
          className="reviews-arrow"
          onClick={previousReview}
          aria-label="Ver reseñas anteriores"
        >
          ←
        </button>

        <span className="reviews-counter">
          {currentIndex + 1} / {reviews.length}
        </span>

        <button
          className="reviews-arrow"
          onClick={nextReview}
          aria-label="Ver siguientes reseñas"
        >
          →
        </button>
      </div>

      <div className="reviews-actions">
        <a
          className="button"
          href={BOOKSY_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          RESERVAR CITA ↗
        </a>
      </div>
    </section>
  );
}

export default Reviews;
