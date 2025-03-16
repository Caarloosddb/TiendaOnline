import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "./Catalogo.css";

const productosCatalogo = [
    {
      "id": 1,
      "nombre": "Elevalunas Delantero Derecho",
      "descripcion": "Elevalunas delantero derecho compatible con Ford Grand C-MAX.",
      "precio": 58.62,
      "imagen": "/assets/elevalunas.jpeg"
    },
    {
      "id": 2,
      "nombre": "Caudalímetro",
      "descripcion": "Caudalímetro compatible con Nissan Juke Fastback (2010-2022) 1.5 DCI 110CV.",
      "precio": 59.85,
      "imagen": "/assets/caudalimetro.jpg"
    },
    {
      "id": 3,
      "nombre": "Piloto Trasero Derecho Interior",
      "descripcion": "Piloto trasero derecho interior para Ford Fiesta III Turnier (2014-2022) 1.5 TDCI 120CV.",
      "precio": 45.98,
      "imagen": "/assets/piloto_trasero.jpeg"
    },
    {
      "id": 4,
      "nombre": "Transmisión Delantera Izquierda",
      "descripcion": "Transmisión delantera izquierda para Citroën C4 Coupé (2004-2011) 1.6 HDI 109CV.",
      "precio": 23.47,
      "imagen": "/assets/transmision_delantera.jpeg"
    },
    {
      "id": 5,
      "nombre": "Kit de Reparación de Techo Corredizo",
      "descripcion": "Kit de reparación de techo corredizo para Ford F150/F250/F350/F450 (2000-2014).",
      "precio": 23.78,
      "imagen": "/assets/kit_techo.jpg"
    },
    {
      "id": 6,
      "nombre": "Soporte de Asiento de Carreras",
      "descripcion": "Soporte de acero extensible para asiento de carreras, compatible con Nissan 350Z Z33.",
      "precio": 101.66,
      "imagen": "/assets/soporte_asiento.jpeg"
    },
    {
      "id": 7,
      "nombre": "Parrilla delantera cromada",
      "descripcion": "Parrilla delantera cromada para Benz Clase C W204 (2008-2014) C300/C350.",
      "precio": 89.66,
      "imagen": "/assets/parrilla_cromada.jpeg"
    },
    {
      "id": 8,
      "nombre": "Rejilla de Parachoques Delantero",
      "descripcion": "Rejilla de parachoques delantero para Benz GLK X204 GLK350 (2008-2012).",
      "precio": 111.66,
      "imagen": "/assets/rejilla_parachoques.jpg"
    },
    {
      "id": 9,
      "nombre": "Rejilla delantera ABS Negra",
      "descripcion": "Rejilla delantera ABS negra brillante para Benz Clase C W204 (2008-2014) C300/C350.",
      "precio": 99.66,
      "imagen": "/assets/rejilla_abs.jpg"
    },
    {
      "id": 10,
      "nombre": "Parrilla de Parachoques Delantero",
      "descripcion": "Parrilla de parachoques delantero para Benz W211 E350 (2007-2009) E500 E63 AMG.",
      "precio": 77.66,
      "imagen": "/assets/parrilla_parachoques_delantero.jpg"
    },
    {
      "id": 11,
      "nombre": "Parrilla Diamante Plateada",
      "descripcion": "Parrilla plateada Diamond Star para Benz W117 CLA200 (2013-2019).",
      "precio": 135.66,
      "imagen": "/assets/parrilla_diamante.jpg"
    },
    {
      "id": 12,
      "nombre": "Hebilla para Cinturón de Seguridad",
      "descripcion": "Juego de 2 hebillas para cinturón de seguridad de coche, retráctiles, ajustables.",
      "precio": 32.78,
      "imagen": "/assets/hebilla_cinturon.jpg"
    },
    {
      "id": 13,
      "nombre": "Organizador para Puerta de Wrangler JK",
      "descripcion": "Organizador para puerta delantera y trasera de Wrangler JK (2011-2017).",
      "precio": 44.78,
      "imagen": "/assets/organizador_wrangler.jpg"
    },
    {
      "id": 14,
      "nombre": "Apoyabrazos de Cuero para Audi A4",
      "descripcion": "Apoyabrazos de cuero negro para Audi A4 (2002-2008), tapa de consola central.",
      "precio": 13.78,
      "imagen": "/assets/apoyabrazos_audi.jpg"
    },
    {
      "id": 15,
      "nombre": "Kit de Reparación de Montaje de Techo Corredizo",
      "descripcion": "Kit de reparación de montaje de pista de techo corredizo para Ford F150/F250/F350/F450.",
      "precio": 26.78,
      "imagen": "/assets/kit_reparacion_techo.jpg"
    },
    {
      "id": 16,
      "nombre": "Visera para Toyota Camry",
      "descripcion": "Visera gris para el conductor izquierdo sin luz de tocador, compatible con Toyota Camry (2007-2011).",
      "precio": 28.78,
      "imagen": "/assets/visera_camry.jpg"
    },
    {
      "id": 17,
      "nombre": "Filtro de Aire Deportivo",
      "descripcion": "Filtro de aire de alto rendimiento para Honda Civic (2006-2011).",
      "precio": 49.99,
      "imagen": "/assets/filtro_aire.jpeg"
    },
    {
      "id": 18,
      "nombre": "Luz LED para Placa",
      "descripcion": "Luz LED blanca para la placa de matrícula, compatible con BMW Serie 3 E90.",
      "precio": 19.99,
      "imagen": "/assets/luz_led_placa.jpg"
    },
    {
      "id": 19,
      "nombre": "Pedales Deportivos Universales",
      "descripcion": "Set de pedales deportivos en aluminio para vehículos manuales.",
      "precio": 27.50,
      "imagen": "/assets/pedales_deportivos.jpg"
    },
    {
      "id": 20,
      "nombre": "Alfombrillas de Goma Universales",
      "descripcion": "Juego de 4 alfombrillas de goma resistente para cualquier vehículo.",
      "precio": 35.99,
      "imagen": "/assets/alfombrillas_goma.jpg"
    }
  ];


  function Catalogo() {
      const [searchQuery, setSearchQuery] = useState("");
      const [carrito, setCarrito] = useState([]); // Estado para el carrito
      const [mostrarCarrito, setMostrarCarrito] = useState(false); // Estado para mostrar/ocultar el carrito
      const [mostrarFormularioPago, setMostrarFormularioPago] = useState(false); // Estado para mostrar/ocultar el formulario de pago
      const [metodoPago, setMetodoPago] = useState(""); // Estado para el método de pago seleccionado
      const navigate = useNavigate(); //Para redirigir
  
      // Filtrar productos según el nombre
      const filteredProducts = productosCatalogo.filter((producto) =>
          producto.nombre.toLowerCase().includes(searchQuery.toLowerCase())
      );
  
      // Función para añadir productos al carrito
      const añadirAlCarrito = (producto) => {
          setCarrito([...carrito, producto]);
      };
  
      // Función para eliminar un producto del carrito
      const eliminarDelCarrito = (id) => {
          const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
          setCarrito(nuevoCarrito);
      };
  
      // Función para alternar la visibilidad del carrito
      const toggleCarrito = () => {
          setMostrarCarrito(!mostrarCarrito);
          setMostrarFormularioPago(false); // Ocultar el formulario de pago al cerrar el carrito
      };
  
      // Calcular el precio total del carrito
      const precioTotal = carrito.reduce((total, producto) => total + producto.precio, 0);
  
      // Función para manejar el clic en "Proceder al pago"
      const handleProcederAlPago = () => {
          setMostrarFormularioPago(true);
      };
  
      // Función para manejar el clic en "Comprar"
      const handleComprar = () => {
          if (!metodoPago) {
              alert("Por favor, selecciona un método de pago.");
              return;
          }
          alert("Pedido realizado correctamente.");
          setCarrito([]); // Vaciar el carrito
          setMostrarFormularioPago(false); // Ocultar el formulario de pago
          setMostrarCarrito(false); // Ocultar el carrito
      };
  
      // Función para redirigir a la vista detallada del producto
      const verDetalleProducto = (id) => {
          navigate(`/producto/${id}`); // Redirige a la ruta del producto
      };
  
      return (
          <div className="catalogo-container">
              <header className="catalogo-header">
                  <div className="catalogo-logo-container">
                      <img src="/assets/logo.png" alt="Logo" className="catalogo-logo" />
                      <span className="catalogo-title">AllCarsZone</span>
                  </div>
  
                  <nav className="catalogo-nav">
                      <ul>
                          <li><Link to="/home">Inicio</Link></li>
                          <li><Link to="/catalogo">Catálogo</Link></li>
                          <li><Link to="/contacto">Contacto</Link></li>
                      </ul>
                      {/* Buscador en el nav */}
                      <input
                          type="text"
                          placeholder="Buscar productos..."
                          className="catalogo-search-input"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                      />
                  </nav>
  
                  <div className="catalogo-cart-container" onClick={toggleCarrito}>
                      <img src="/assets/carrito.png" alt="Carrito" className="catalogo-cart-icon" />
                      <span className="catalogo-cart-count">{carrito.length}</span> {/* Mostrar cantidad de productos en el carrito */}
                  </div>
  
                  {/* Ventana del carrito */}
                  {mostrarCarrito && (
                      <div className="carrito-ventana">
                          <h3>Carrito de Compras</h3>
                          {carrito.length === 0 ? (
                              <p>No hay productos en el carrito.</p>
                          ) : (
                              <>
                                  <ul>
                                      {carrito.map((producto) => (
                                          <li key={producto.id} className="carrito-item">
                                              <img src={producto.imagen} alt={producto.nombre} className="carrito-item-imagen" />
                                              <div className="carrito-item-info">
                                                  <span>{producto.nombre}</span>
                                                  <span>$ {producto.precio.toFixed(2)}</span>
                                              </div>
                                              <button
                                                  className="carrito-eliminar"
                                                  onClick={() => eliminarDelCarrito(producto.id)}
                                              >
                                                  Eliminar
                                              </button>
                                          </li>
                                      ))}
                                  </ul>
                                  {/* Mostrar el precio total */}
                                  <div className="carrito-total">
                                      <span>Total:</span>
                                      <span>$ {precioTotal.toFixed(2)}</span>
                                  </div>
                                  {/* Botón de "Proceder al pago" */}
                                  <button className="carrito-proceder-pago" onClick={handleProcederAlPago}>
                                      Proceder al pago
                                  </button>
                                  {/* Formulario de pago */}
                                  {mostrarFormularioPago && (
                                      <div className="formulario-pago">
                                          <h4>Método de pago</h4>
                                          <select
                                              value={metodoPago}
                                              onChange={(e) => setMetodoPago(e.target.value)}
                                          >
                                              <option value="">Selecciona un método de pago</option>
                                              <option value="tarjeta">Tarjeta de crédito</option>
                                              <option value="paypal">PayPal</option>
                                              <option value="transferencia">Transferencia bancaria</option>
                                          </select>
                                          <button className="carrito-comprar" onClick={handleComprar}>
                                              Comprar
                                          </button>
                                      </div>
                                  )}
                              </>
                          )}
                      </div>
                  )}
              </header>
  
              <section className="catalogo-content">
                  <h2 className="catalogo-title">Catálogo de Productos</h2>
                  <div className="catalogo-card-container">
                      {filteredProducts.map((producto) => (
                          <div
                              className="catalogo-product-card"
                              key={producto.id}
                              onClick={() => verDetalleProducto(producto.id)} // Redirige al hacer clic
                          >
                              <img src={producto.imagen} alt={producto.nombre} className="catalogo-product-image" />
                              <div className="catalogo-product-info">
                                  <h3 className="catalogo-product-name">{producto.nombre}</h3>
                                  <p className="catalogo-product-description">{producto.descripcion}</p>
                                  <span className="catalogo-product-price">$ {producto.precio.toFixed(2)}</span>
                                  <button
                                      className="catalogo-add-to-cart"
                                      onClick={(e) => {
                                          e.stopPropagation();
                                          añadirAlCarrito(producto);
                                      }}
                                  >
                                      Añadir al carrito
                                  </button>
                              </div>
                          </div>
                      ))}
                  </div>
              </section>
  
              {/* Footer */}
              <footer className="footer">
                  <div className="socials">
                      <a href="https://www.facebook.com" className="social-icon">Facebook</a>
                      <a href="https://www.instagram.com" className="social-icon">Instagram</a>
                      <a href="https://x.com/?lang=es" className="social-icon">Twitter</a>
                  </div>
                  <p>&copy; 2025 AllCarsZone</p>
              </footer>
          </div>
      );
  }
  
  export default Catalogo;