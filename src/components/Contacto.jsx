import React, { useState } from "react";
import "./Contacto.css";

function Contacto() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.");
        setNombre("");
        setEmail("");
        setMensaje("");
    };

    return (
        <div className="contacto-container">
            <h1>Contacto</h1>
            <p>¿Tienes alguna pregunta o necesitas ayuda? ¡Estamos aquí para ayudarte!</p>

            <div className="informacion-contacto">
                <h2>Información de Contacto</h2>
                <p><strong>Teléfono:</strong> +34 123 456 789</p>
                <p><strong>Email:</strong> soporte@allcarszone.com</p>
            </div>

            <form className="formulario-contacto" onSubmit={handleSubmit}>
                <h2>Formulario de Contacto</h2>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea
                        id="mensaje"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="boton-enviar">Enviar Mensaje</button>
            </form>
        </div>
    );
}

export default Contacto;