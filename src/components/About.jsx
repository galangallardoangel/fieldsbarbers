function ServiceCard({ service, onBook }) {
  return (
    <article className="service-card">
      <span className="service-number">
        {String(service.id).padStart(2, "0")}
      </span>

      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <p>{service.duration} minutos</p>

      <div className="service-footer">
        <strong>{service.price} €</strong>

        <button
          type="button"
          className="service-book"
          onClick={() => onBook(service)}
        >
          RESERVAR ↗
        </button>
      </div>
    </article>
  );
}

export default ServiceCard;
