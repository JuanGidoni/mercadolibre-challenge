import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-100 bg-white text-dark py-3 small">
      <div className="container d-flex flex-column justify-content-center align-items-start">
        <div className="list-links">
          <ul className="list-style-none d-flex nav">
            <li className="pr-2">
              <Link to="/workwithus" className="text-dark text-decoration-none">
                Trabajá con nosotros
              </Link>
            </li>
            <li className="pr-2">
              <Link to="/terms" className="text-dark text-decoration-none">
                Términos y condiciones
              </Link>
            </li>
            <li className="pr-2">
              <Link to="/policy" className="text-dark text-decoration-none">
                Cómo cuidamos tu privacidad
              </Link>
            </li>
            <li className="pr-2">
              <Link to="/userinfo" className="text-dark text-decoration-none">
                Información al usuario financiero
              </Link>
            </li>
            <li className="pr-2">
              <Link to="/help" className="text-dark text-decoration-none">
                Ayuda
              </Link>
            </li>
            <li className="pr-2">
              <Link to="legaly" className="text-dark text-decoration-none">
                Avisos legales
              </Link>
            </li>
          </ul>
        </div>
        <div className="copyright text-muted">
          Copyright © 1999-2021 MercadoLibre S.R.L.
        </div>
        <div className="adress text-muted">
          Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA
        </div>
      </div>
    </footer>
  );
};

export default Footer;
