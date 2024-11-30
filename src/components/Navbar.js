import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{fontWeight: "bold"}}>
          <img src={logo} alt="logo" style={{width: "4vw", paddingRight: "0.6rem"}}/>
          BEC
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">
                Catálogo Completo
              </Link>
            </li>
          </ul>
          <div className="nav-login">
            <Link className="nav-link" to="/login">
              <i class="bi bi-person-circle"></i>
              Ingresar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
