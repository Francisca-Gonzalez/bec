import React from "react";
import { Link } from "react-router-dom";
import librosDestacados from "../assets/libros.json"; // Importa tu JSON
import "../styles/Home.css";

const Home = () => {
  const librosPorGenero = agruparPorGenero(librosDestacados);

  return (
    <div>
      {/* Jumbotron */}
      <div
        className="jumbotron text-center"
        style={{
          marginTop: "1rem",
          padding: "2rem",
          borderRadius: "10px",
          marginBottom: "1rem"
        }}
      >
        <h1>Bienvenido a la Biblioteca BEC</h1>
        <p>Descubre nuestra colección de libros y multimedia.</p>
        <Link to="/catalog" className="btn btn-dark">
          Ver Catálogo Completo
        </Link>
      </div>

      {/* Carrusel por Género */}
      <div className="container mt-5">
        {Object.keys(librosPorGenero).map((genero) => (
          <div key={genero} className="mb-5">
            <div className="section-container">
              <div className="section-title">
                <h3>{genero}</h3>
              </div>
              <div className="home-line"></div>
            </div>

            {/* Carrusel */}
            <div
              id={`carousel-${genero}`}
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {chunkArray(librosPorGenero[genero], 3).map((grupo, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    key={index}
                  >
                    <div className="row">
                      {grupo.map((libro) => (
                        <div className="col-md-4" key={libro.id}>
                          <div className="card">
                            <img
                              src={libro.imagen}
                              className="card-img-top"
                              alt={libro.titulo}
                            />
                            <div className="card-body">
                              <h5 className="card-title">{libro.titulo}</h5>
                              <p className="card-text text-muted">{libro.autor}</p>
                              <Link
                                to={`/book/${libro.id}`}
                                className="btn btn-dark"
                              >
                                Ver Detalles
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#carousel-${genero}`}
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Anterior</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#carousel-${genero}`}
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Siguiente</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const agruparPorGenero = (libros) => {
  return libros.reduce((resultado, libro) => {
    if (!resultado[libro.genero]) {
      resultado[libro.genero] = [];
    }
    resultado[libro.genero].push(libro);
    return resultado;
  }, {});
};

const chunkArray = (array, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

export default Home;
