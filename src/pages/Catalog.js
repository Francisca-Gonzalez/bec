// import React, { useState, useEffect } from "react";
// import { useLocation, Link } from "react-router-dom";
// import librosData from "../assets/libros.json"; // Asegúrate de que este archivo sea el JSON proporcionado.
// import Breadcrumb from "../components/Breadcrumb"; // Importa tu componente Breadcrumb
// import "../styles/Catalog.css";

// const Catalog = () => {
//   const location = useLocation();

//   // Estados para búsqueda y filtros
//   const [searchQuery, setSearchQuery] = useState("");
//   const [appliedQuery, setAppliedQuery] = useState("");
//   const [showAvailableOnly, setShowAvailableOnly] = useState(false);
//   const [selectedGenre, setSelectedGenre] = useState("");

//   // Obtener géneros únicos del JSON
//   const genres = [...new Set(librosData.map((libro) => libro.genero))];

//   // Actualizar el género preseleccionado si viene desde otra página
//   useEffect(() => {
//     if (location.state?.generoSeleccionado) {
//       setSelectedGenre(location.state.generoSeleccionado);
//     }
//   }, [location.state]);

//   // Filtrar los libros
//   const filteredBooks = librosData.filter((libro) => {
//     return (
//       (libro.titulo.toLowerCase().includes(appliedQuery.toLowerCase()) ||
//         libro.autor.toLowerCase().includes(appliedQuery.toLowerCase())) &&
//       (!showAvailableOnly || libro.disponible) &&
//       (selectedGenre === "" || libro.genero === selectedGenre)
//     );
//   });

//   // Aplicar filtros al hacer clic o presionar Enter
//   const applyFilters = () => {
//     setAppliedQuery(searchQuery);
//   };

//   // Manejo de Enter en el input de búsqueda
//   const handleKeyPress = (event) => {
//     if (event.key === "Enter") {
//       applyFilters();
//     }
//   };

//   // Configuración de las migas de pan
//   const breadcrumbItems = [
//     { label: "Inicio", path: "/", active: false },
//     { label: "Catálogo", path: "/catalog", active: true },
//   ];

//   return (
//     <div className="container mt-5">
//       {/* Migas de Pan */}
//       <Breadcrumb items={breadcrumbItems} />

//       <h1 className="text-center mb-4">Catálogo Completo</h1>

//       {/* Barra de Búsqueda */}
//       <div className="mb-4 d-flex align-items-center">
//         <input
//           type="text"
//           placeholder="Buscar por título o autor"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           onKeyPress={handleKeyPress}
//           className="form-control"
//         />
//         <button className="btn btn-dark ms-2" onClick={applyFilters}>
//           Buscar
//         </button>
//       </div>

//       {/* Filtros y Barra de Búsqueda */}
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         {/* Dropdown para Género */}
//         <div className="dropdown">
//           <button
//             className="btn btn-dark dropdown-toggle"
//             type="button"
//             id="dropdownGenero"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//           >
//             {selectedGenre === "" ? "Todos los Géneros" : selectedGenre}
//           </button>
//           <ul className="dropdown-menu" aria-labelledby="dropdownGenero">
//             <li
//               onClick={() => setSelectedGenre("")}
//               className={`dropdown-item ${selectedGenre === "" ? "active" : ""}`}
//             >
//               Todos los Géneros
//             </li>
//             {genres.map((genre) => (
//               <li
//                 key={genre}
//                 onClick={() => setSelectedGenre(genre)}
//                 className={`dropdown-item ${
//                   selectedGenre === genre ? "active" : ""
//                 }`}
//               >
//                 {genre}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Checkbox para Disponibilidad */}
//         <div className="form-check">
//           <input
//             type="checkbox"
//             id="availableOnly"
//             checked={showAvailableOnly}
//             onChange={(e) => setShowAvailableOnly(e.target.checked)}
//             className="form-check-input"
//           />
//           <label className="form-check-label" htmlFor="availableOnly">
//             Mostrar solo disponibles
//           </label>
//         </div>
//       </div>

//       {/* Resultados del Catálogo */}
//       <div className="row">
//         {filteredBooks.length > 0 ? (
//           filteredBooks.map((libro) => (
//             <div className="col-md-4 mb-4 d-flex align-items-center" key={libro.id}>
//               <div className="card">
//                 <img
//                   src={libro.imagen}
//                   className="card-img-top"
//                   alt={libro.titulo}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{libro.titulo}</h5>
//                   <h6 className="card-subtitle text-muted">{libro.autor}</h6>
//                   <p>
//                     <span
//                       className={`badge ${
//                         libro.disponible ? "bg-success" : "bg-danger"
//                       }`}
//                     >
//                       {libro.disponible ? "Disponible" : "No Disponible"}
//                     </span>
//                   </p>
//                   <Link to={`/book/${libro.id}`} className="btn btn-dark">
//                     Ver Detalles
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center">No se encontraron resultados.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Catalog;

import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import librosData from "../assets/libros.json"; // Asegúrate de que este archivo sea el JSON proporcionado.
import Breadcrumb from "../components/Breadcrumb"; // Importa tu componente Breadcrumb
import "../styles/Catalog.css";

const Catalog = () => {
  const location = useLocation();

  // Estados para búsqueda y filtros
  const [searchQuery, setSearchQuery] = useState("");
  const [appliedQuery, setAppliedQuery] = useState("");
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("");

  // Obtener géneros únicos del JSON
  const genres = [...new Set(librosData.map((libro) => libro.genero))];

  // Asegurarse de que la página cargue desde la parte superior
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar al principio de la página
  }, []);

  // Actualizar el género preseleccionado si viene desde otra página
  useEffect(() => {
    if (location.state?.generoSeleccionado) {
      setSelectedGenre(location.state.generoSeleccionado);
    }
  }, [location.state]);

  // Filtrar los libros
  const filteredBooks = librosData.filter((libro) => {
    return (
      (libro.titulo.toLowerCase().includes(appliedQuery.toLowerCase()) ||
        libro.autor.toLowerCase().includes(appliedQuery.toLowerCase())) &&
      (!showAvailableOnly || libro.disponible) &&
      (selectedGenre === "" || libro.genero === selectedGenre)
    );
  });

  // Aplicar filtros al hacer clic o presionar Enter
  const applyFilters = () => {
    setAppliedQuery(searchQuery);
  };

  // Manejo de Enter en el input de búsqueda
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      applyFilters();
    }
  };

  // Configuración de las migas de pan
  const breadcrumbItems = [
    { label: "Inicio", path: "/", active: false },
    { label: "Catálogo", path: "/catalog", active: true },
  ];

  return (
    <div className="container mt-5">
      {/* Migas de Pan */}
      <Breadcrumb items={breadcrumbItems} />

      <h1 className="text-center mb-4">Catálogo</h1>

      {/* Barra de Búsqueda */}
      <div className="mb-4 d-flex align-items-center">
        <input
          type="text"
          placeholder="Buscar por título o autor"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="form-control"
        />
        <button className="btn btn-dark ms-2" onClick={applyFilters}>
          Buscar
        </button>
      </div>

      {/* Filtros y Barra de Búsqueda */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        {/* Dropdown para Género */}
        <div className="dropdown">
          <button
            className="btn btn-dark dropdown-toggle"
            type="button"
            id="dropdownGenero"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {selectedGenre === "" ? "Todos los Géneros" : selectedGenre}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownGenero">
            <li
              onClick={() => setSelectedGenre("")}
              className={`dropdown-item ${selectedGenre === "" ? "active" : ""}`}
            >
              Todos los Géneros
            </li>
            {genres.map((genre) => (
              <li
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`dropdown-item ${
                  selectedGenre === genre ? "active" : ""
                }`}
              >
                {genre}
              </li>
            ))}
          </ul>
        </div>

        {/* Checkbox para Disponibilidad */}
        <div className="form-check">
          <input
            type="checkbox"
            id="availableOnly"
            checked={showAvailableOnly}
            onChange={(e) => setShowAvailableOnly(e.target.checked)}
            className="form-check-input"
          />
          <label className="form-check-label" htmlFor="availableOnly">
            Mostrar solo disponibles
          </label>
        </div>
      </div>

      {/* Resultados del Catálogo */}
      <div className="row">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((libro) => (
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
          ))
        ) : (
          <p className="text-center">No se encontraron resultados.</p>
        )}
      </div>
    </div>
  );
};

export default Catalog;
