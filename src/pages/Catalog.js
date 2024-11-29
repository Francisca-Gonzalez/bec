import React, { useState } from "react";
import "../styles/Catalog.css";

const Catalog = () => {
  const libros = [
    {
      id: 1,
      titulo: "El Principito",
      autor: "Antoine de Saint-Exupéry",
      categoria: "Filosofía",
      disponible: true,
      imagen: "https://th.bing.com/th/id/OIP.4jjqK8r4niDGIu1EzysUaAHaL8?rs=1&pid=ImgDetMain",
    },
    {
      id: 2,
      titulo: "Cien Años de Soledad",
      autor: "Gabriel García Márquez",
      categoria: "Literatura",
      disponible: false,
      imagen: "https://th.bing.com/th/id/OIP.V_zRhQVc2o3qUvlc7KwpxgHaLT?w=600&h=916&rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      titulo: "1984",
      autor: "George Orwell",
      categoria: "Distopía",
      disponible: true,
      imagen: "https://th.bing.com/th/id/OIP.8weipgxeZASSI2nt9APKNAAAAA?rs=1&pid=ImgDetMain",
    },
  ];

  const [searchTitle, setSearchTitle] = useState("");
  const [searchAuthor, setSearchAuthor] = useState("");

  const filteredBooks = libros.filter(
    (libro) =>
      libro.titulo.toLowerCase().includes(searchTitle.toLowerCase()) &&
      libro.autor.toLowerCase().includes(searchAuthor.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Catálogo Completo</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar por título"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          className="form-control mb-2"
        />
        <input
          type="text"
          placeholder="Buscar por autor"
          value={searchAuthor}
          onChange={(e) => setSearchAuthor(e.target.value)}
          className="form-control mb-2"
        />
      </div>

      <div className="row">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((libro) => (
            <div className="col-md-4 mb-4" key={libro.id}>
              <div className="card">
                <img src={libro.imagen} className="card-img-top" alt={libro.titulo} />
                <div className="card-body">
                  <h5 className="card-title">{libro.titulo}</h5>
                  <h6 className="card-subtitle text-muted">{libro.autor}</h6>
                  <p className="card-text">{libro.categoria}</p>
                  <span className={`badge ${libro.disponible ? "bg-success" : "bg-danger"}`}>
                    {libro.disponible ? "Disponible" : "No Disponible"}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No se encontraron resultados.</p>
        )}
      </div>
    </div>
  );
};

export default Catalog;
