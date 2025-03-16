import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Home.css" ;

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/assets/foto1.jpg",
    "/assets/foto2.jpg",
    "/assets/foto3.jpg",
    "/assets/foto4.png",
  ];

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Función para manejar el logout
  const handleLogout = () => {
    navigate("/login"); // Redirige al login
  };

  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <div className="home-logo-container">
          <img src="/assets/logo.png" alt="Logo" className="home-logo" />
          <div className="home-title">AllCarsZone</div>
        </div>
        <nav className="home-nav">
          <div className="home-nav-links">
            <ul>
              <li><Link to="/home">Inicio</Link></li> {}
              <li><Link to="/catalogo">Catálogo</Link></li> {}
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </header>

      {/* Slider */}
      <section className="home-slider">
        <div className="home-slider-image">
          <img src={images[currentIndex]} alt="Producto destacado" />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="socials">
          <a href="https://www.facebook.com/" className="social-icon">Facebook</a>
          <a href="https://www.instagram.com/" className="social-icon">Instagram</a>
          <a href="https://x.com/?lang=es" className="social-icon">Twitter</a>
        </div>
        <p>&copy; 2025 AllCarsZone</p>
      </footer>
    </div>
  );
};

export default Home;
