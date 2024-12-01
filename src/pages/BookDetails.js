import React from "react";
import { useParams, Link } from "react-router-dom";
import libros from "../assets/libros.json"; // Importa tu JSON
import Breadcrumb from "../components/Breadcrumb"; // Importa tu componente Breadcrumb

const BookDetails = () => {
  const { id } = useParams(); // Obtén el ID desde los parámetros de la URL

  // Busca el libro en el JSON según el ID
  const libro = libros.find((book) => book.id === parseInt(id));

  // Si no encuentra el libro, muestra un mensaje de error
  if (!libro) {
    return (
      <div className="container mt-5">
        <p>Libro no encontrado.</p>
        <Link to="/catalog" className="btn btn-dark">
          Volver al Catálogo
        </Link>
      </div>
    );
  }

  // Configuración de las migas de pan
  const breadcrumbItems = [
    { label: "Inicio", path: "/", active: false },
    { label: "Catálogo", path: "/catalog", active: false },
    { label: libro.titulo, path: `/book/${id}`, active: true },
  ];

  return (
    <div className="container mt-5">
      {/* Migas de Pan */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Detalles del Libro */}
      <div
        className="d-flex flex-column flex-md-row align-items-start"
        style={{
          padding: "20px"
        }}
      >
        {/* Imagen a la izquierda */}
        <div
          style={{
            flex: "0 0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
            marginRight: "20px",
          }}
        >
          <img
            src={libro.imagen}
            alt={libro.titulo}
            style={{
              maxHeight: "600px",
              maxWidth: "100%",
              borderRadius: "10px",
            }}
          />
        </div>

        {/* Detalles a la derecha */}
        <div style={{ flex: "1", display: "flex", textAlign: "left", flexDirection: "column"}}>
          <h1>{libro.titulo}</h1>
          <h7 className="text-muted">{libro.autor}</h7>
          <h7><strong>Género:</strong> {libro.genero}</h7>
          <p><strong>Sinopsis:</strong> {libro.sinopsis}</p>
          <p>
            <strong>Estado: </strong>
            <span
              className={`badge ${libro.disponible ? "bg-success" : "bg-danger"}`}
            >
              {libro.disponible ? "Disponible" : "No Disponible"}
            </span>
          </p>

          {/* Botón de Reservar */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <button
              className="btn btn-primary"
              disabled={!libro.disponible}
              onClick={() => alert(`Has reservado: ${libro.titulo}`)}
              style={{
                cursor: libro.disponible ? "pointer" : "not-allowed",
                opacity: libro.disponible ? "1" : "0.6",
              }}
            >
              Reservar
            </button>
          </div>
        </div>



      </div>


    </div>
  );
};

export default BookDetails;