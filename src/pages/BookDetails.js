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
        className="d-flex align-items-start"
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Imagen a la izquierda */}
        <img
          src={libro.imagen}
          alt={libro.titulo}
          style={{
            height: "200px",
            width: "auto",
            borderRadius: "10px",
            marginRight: "20px",
          }}
        />

        {/* Detalles a la derecha */}
        <div>
          <h1>{libro.titulo}</h1>
          <h5 className="text-muted">Autor: {libro.autor}</h5>
          <h6>Género: {libro.genero}</h6>
          <p className="mt-3">{libro.sinopsis}</p>
          <p>
            <strong>Estado:</strong>{" "}
            <span className={`badge ${libro.disponible ? "bg-success" : "bg-danger"}`}>
              {libro.disponible ? "Disponible" : "No Disponible"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;