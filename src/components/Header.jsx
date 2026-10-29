import { useState } from "react";

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  function cerrarMenu() {
    setMenuAbierto(false);
  }

  return (
    <header className="header">
      <a href="#inicio" onClick={cerrarMenu} className="logo">
        <img
          src="/fields-logo.png"
          alt="Fields Barbers"
          className="header-logo"
        />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuAbierto}
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        {menuAbierto ? "✕" : "☰"}
      </button>

      <nav className={menuAbierto ? "nav nav-open" : "nav"}>
        <a href="#inicio" onClick={cerrarMenu}>
          INICIO
        </a>
        <a href="#servicios" onClick={cerrarMenu}>
          SERVICIOS
        </a>
        <a href="#fernando" onClick={cerrarMenu}>
          FERNANDO
        </a>
        <a href="#contacto" onClick={cerrarMenu}>
          CONTACTO
        </a>
      </nav>

      <a
        className="button header-booking"
        href="https://booksy.com/es-es/155435-fields-barbers_barberia_27080_cordoba#ba_s=seo"
        target="_blank"
        rel="noopener noreferrer"
      >
        RESERVAR ↗
      </a>
    </header>
  );
}

export default Header;
