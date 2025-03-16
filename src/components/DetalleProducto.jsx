import React from "react";
import { useParams, Link } from "react-router-dom";
import "./DetalleProducto.css";

function DetalleProducto({ productos }) {
    const { id } = useParams(); // Obtener el ID del producto de la URL
    const producto = productos.find((p) => p.id === parseInt(id)); // Buscar el producto por ID

    if (!producto) {
        return <div>Producto no encontrado</div>; // Manejo de error si el producto no existe
    }

    return (
        <div className="detalle-producto-container">
            <h1>{producto.nombre}</h1>
            <img src={producto.imagen} alt={producto.nombre} className="detalle-producto-imagen" />
            <div className="detalle-producto-info">
                <p><strong>Fabricante:</strong> {producto.fabricante || "No disponible"}</p>
                <p><strong>Año de fabricación:</strong> {producto.anioFabricacion || "No disponible"}</p>
                <p><strong>Descripción:</strong> {producto.descripcion || "No disponible"}</p>
                <p><strong>Precio:</strong> $ {producto.precio.toFixed(2)}</p>
            </div>
            <Link to="/catalogo" className="boton-volver">Volver al catálogo</Link>
        </div>
    );
}

export default DetalleProducto;