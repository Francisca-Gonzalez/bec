import React from "react";
import { Link, useNavigate } from "react-router-dom";
import librosDestacados from "../assets/libros.json"; // Importa tu JSON
import "../styles/Home.css";

const Home = () => {
  const librosPorGenero = agruparPorGenero(librosDestacados);
  const navigate = useNavigate();

  // Función para manejar la redirección con el filtro de género
  const handleVerMas = (genero) => {
    navigate("/catalog", { state: { generoSeleccionado: genero } });
  };

  return (
    <div>
      {/* Jumbotron */}
      <div
        className="jumbotron text-center"
        style={{
          marginTop: "1rem",
          padding: "2rem",
          borderRadius: "10px",
          marginBottom: "1rem",
        }}
      >
        <h1>Bienvenido a la Biblioteca BEC</h1>
        <p>Descubre nuestra colección de libros y multimedia.</p>
        <Link to="/catalog" className="btn btn-dark">
          Ver Catálogo Completo
        </Link>
      </div>

      {/* Libros por Género */}
      <div className="container mt-5">
        {Object.keys(librosPorGenero).map((genero) => (
          <div key={genero} className="mb-5">
            <div className="section-container">
              <div className="section-title">
                <h3>{genero}</h3>
              </div>
              <div className="home-line"></div>
              <div className="section-more-info">
                <button
                  className="btn btn-dark"
                  onClick={() => handleVerMas(genero)}
                >
                  Ver más
                </button>
              </div>
            </div>

            {/* Lista de Libros */}
            <div className="row d-flex align-items-center justify-content-center">
              {librosPorGenero[genero]
                .slice(0, 3) // Mostrar hasta 3 libros por género
                .map((libro) => (
                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex align-items-center justify-content-center" key={libro.id}>
                    <Link to={`/book/${libro.id}`} className="text-decoration-none">
                      <div
                        className="card"
                        style={{
                          cursor: "pointer",
                          border: "1px solid #ddd",
                          borderRadius: "10px",
                          overflow: "hidden",
                          padding: "5px",
                          transition: "transform 0.2s",
                          width: "200px", // Ancho fijo para la card
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                      >
                        {/* Imagen del libro */}
                        <div
                          style={{
                            width: "100%",
                            height: "300px", // Altura fija para el contenedor
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            overflow: "hidden", // Asegurar que la imagen no se salga del contenedor
                          }}
                        >
                          <img
                            src={libro.imagen}
                            alt={libro.titulo}
                            style={{
                              borderRadius: "12px",
                              width: "200px", // Ancho fijo
                              height: "300px", // Alto fijo
                              objectFit: "cover", // Asegurar que la imagen cubra todo el contenedor sin deformarse
                            }}
                          />
                        </div>

                        {/* Título debajo */}
                        <div
                          className="card-body"
                          style={{
                            padding: "10px",
                            textAlign: "left", // Alineación a la izquierda
                          }}
                        >
                          <h5
                            className="card-title text-dark"
                            style={{
                              textTransform: "capitalize", // camelCase
                              fontSize: "1rem",
                              lineHeight: "1.2", // Altura para dos líneas (1.2rem * 2 líneas)
                              overflow: "hidden", // Esconder el texto adicional
                              textOverflow: "ellipsis", // Mostrar "..." al final del texto
                              whiteSpace: "nowrap", // Evitar saltos de línea
                            }}
                          >
                            {libro.titulo.toLowerCase()}
                          </h5>
                          <h5
                            className="card-title text-dark"
                            style={{
                              textTransform: "capitalize", // camelCase
                              fontSize: "1rem",
                              lineHeight: "1.2",// Altura para dos líneas (1.2rem * 2 líneas)
                              overflow: "hidden", // Esconder el texto adicional
                              textOverflow: "ellipsis", // Mostrar "..." al final del texto
                              whiteSpace: "nowrap", // Evitar saltos de línea
                            }}
                          >
                            {libro.autor.toLowerCase()}
                          </h5>
                        </div>
                      </div>
                    </Link>

                  </div>
                ))}
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

export default Home;
