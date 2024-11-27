import React from 'react';
import '../styles/Home.css';

const Home = () => {
  const libros = [
    {
      titulo: 'El Principito',
      autor: 'Antoine de Saint-Exupéry',
      descripcion: 'Un libro clásico que combina aventuras y filosofía.',
      imagen: 'https://th.bing.com/th/id/OIP.4jjqK8r4niDGIu1EzysUaAHaL8?rs=1&pid=ImgDetMain', // Reemplaza con una URL real de imagen
    },
    {
      titulo: 'Cien Años de Soledad',
      autor: 'Gabriel García Márquez',
      descripcion: 'Un relato épico de la familia Buendía en Macondo.',
      imagen: 'https://th.bing.com/th/id/OIP.V_zRhQVc2o3qUvlc7KwpxgHaLT?w=600&h=916&rs=1&pid=ImgDetMain',
    },
    {
      titulo: '1984',
      autor: 'George Orwell',
      descripcion: 'Un vistazo distópico al futuro de la sociedad.',
      imagen: 'https://th.bing.com/th/id/OIP.8weipgxeZASSI2nt9APKNAAAAA?rs=1&pid=ImgDetMain',
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Catálogo de Libros</h1>
      <div className="row">
        {libros.map((libro, index) => (
          <div className="col-md-4 mb-4 d-flex justify-content-center" key={index}>
            <div className="card">
              <img src={libro.imagen} className="card-img-top" alt={libro.titulo} />
              <div className="card-body">
                <h5 className="card-title">{libro.titulo}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{libro.autor}</h6>
                <p className="card-text">{libro.descripcion}</p>
              </div>
              <div className="card-footer text-center">
                <button className="btn">Ver Detalles</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
