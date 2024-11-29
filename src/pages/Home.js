import React, { useState } from 'react';
import '../styles/Home.css';

const Home = () => {
  const [selectedBook, setSelectedBook] = useState(null); // Libro seleccionado para préstamo
  const [loanType, setLoanType] = useState(''); // Tipo de préstamo

  const libros = [
    {
      id: 1,
      titulo: 'El Principito',
      autor: 'Antoine de Saint-Exupéry',
      descripcion: 'Un libro clásico que combina aventuras y filosofía.',
      imagen: 'https://th.bing.com/th/id/OIP.4jjqK8r4niDGIu1EzysUaAHaL8?rs=1&pid=ImgDetMain', // Reemplaza con una URL real de imagen
      disponible: true,
    },
    {
      id: 2,
      titulo: 'Cien Años de Soledad',
      autor: 'Gabriel García Márquez',
      descripcion: 'Un relato épico de la familia Buendía en Macondo.',
      imagen: 'https://th.bing.com/th/id/OIP.V_zRhQVc2o3qUvlc7KwpxgHaLT?w=600&h=916&rs=1&pid=ImgDetMain',
      disponible: false,
    },
    {
      id: 3,
      titulo: '1984',
      autor: 'George Orwell',
      descripcion: 'Un vistazo distópico al futuro de la sociedad.',
      imagen: 'https://th.bing.com/th/id/OIP.8weipgxeZASSI2nt9APKNAAAAA?rs=1&pid=ImgDetMain',
      disponible: true,
    },
  ];

  const handleRequestLoan = (libro) => {
    if (libro.disponible) {
      setSelectedBook(libro);
    }
  };

  const confirmLoan = () => {
    if (selectedBook && loanType) {
      alert(`Préstamo registrado: ${selectedBook.titulo} (${loanType})`);
      setSelectedBook(null); // Limpiar selección
      setLoanType(''); // Limpiar tipo
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Catálogo de Libros</h1>
      <div className="row">
        {libros.map((libro) => (
          <div className="col-md-4 mb-4 d-flex justify-content-center" key={libro.id}>
            <div className="card">
              <img src={libro.imagen} className="card-img-top" alt={libro.titulo} />
              <div className="card-body">
                <h5 className="card-title">{libro.titulo}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{libro.autor}</h6>
                <p className="card-text">{libro.descripcion}</p>
              </div>
              <div className="card-footer text-center">
                <button
                  className="btn"
                  onClick={() => handleRequestLoan(libro)}
                  disabled={!libro.disponible}
                >
                  {libro.disponible ? 'Solicitar Préstamo' : 'No Disponible'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para seleccionar tipo de préstamo */}
      {selectedBook && (
        <div style={modalStyle}>
          <h2>Solicitud de Préstamo</h2>
          <p>
            <strong>Libro:</strong> {selectedBook.titulo}
          </p>
          <label>
            Tipo de Préstamo:
            <select value={loanType} onChange={(e) => setLoanType(e.target.value)}>
              <option value="">Seleccionar</option>
              <option value="En Sala">En Sala</option>
              <option value="A Domicilio">A Domicilio</option>
            </select>
          </label>
          <br />
          <button onClick={confirmLoan}>Confirmar</button>
          <button onClick={() => setSelectedBook(null)}>Cancelar</button>
        </div>
      )}
    </div>
  );
};

// Estilo para el modal
const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  padding: '20px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
};

export default Home;
