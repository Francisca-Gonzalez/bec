// import React from "react";
// import { Link } from "react-router-dom";
// import librosDestacados from "../assets/libros.json"; // Importa tu JSON
// import "../styles/Home.css";

// const Home = () => {
//   const librosPorGenero = agruparPorGenero(librosDestacados);

//   return (
//     <div>
//       {/* Jumbotron */}
//       <div
//         className="jumbotron text-center"
//         style={{
//           marginTop: "1rem",
//           padding: "2rem",
//           borderRadius: "10px",
//           marginBottom: "1rem",
//         }}
//       >
//         <h1>Bienvenido a la Biblioteca BEC</h1>
//         <p>Descubre nuestra colección de libros y multimedia.</p>
//         <Link to="/catalog" className="btn btn-dark">
//           Ver Catálogo Completo
//         </Link>
//       </div>

//       {/* Libros por Género */}
//       <div className="container mt-5">
//         {Object.keys(librosPorGenero).map((genero) => (
//           <div key={genero} className="mb-5">
//             <div className="section-container">
//               <div className="section-title">
//                 <h3>{genero}</h3>
//               </div>
//               <div className="home-line"></div>
//               <div className="section-more-info">
//                 <Link to={`/${genero}`} className="btn btn-dark">
//                   Ver más
//                 </Link>
//               </div>
//             </div>

//             {/* Lista de Libros */}
//             <div className="row d-flex align-items-center justify-content-center">
//               {librosPorGenero[genero]
//                 .slice(0, 3) // Mostrar hasta 3 libros por género
//                 .map((libro) => (
//                   <div className="col-xs-12 col-md-4 mb-4 align-items-center" key={libro.id}>
//                     <div className="card">
//                       <img
//                         src={libro.imagen}
//                         className="card-img-top"
//                         alt={libro.titulo}
//                       />
//                       <div className="card-body">
//                         <h5 className="card-title">{libro.titulo}</h5>
//                         <p className="card-text text-muted">{libro.autor}</p>
//                         <Link to={`/book/${libro.id}`} className="btn btn-dark">
//                           Ver Detalles
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const agruparPorGenero = (libros) => {
//   return libros.reduce((resultado, libro) => {
//     if (!resultado[libro.genero]) {
//       resultado[libro.genero] = [];
//     }
//     resultado[libro.genero].push(libro);
//     return resultado;
//   }, {});
// };

// export default Home;

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
                  <div
                    className="col-xs-12 col-md-4 mb-4 align-items-center"
                    key={libro.id}
                  >
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
