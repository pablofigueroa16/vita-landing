/**
 * Se modifica la columna izquierda para incluir la información de contacto
 * (Email, Teléfono, Dirección, Redes Sociales) en lugar del texto "Sobre Nosotros",
 * siguiendo el estilo de la imagen proporcionada.
 * Se utiliza el mismo botón Liquid Glass que se implementó en la versión anterior.
 */
"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

// Componente renombrado a 'VitaApp' (anteriormente App)
export default function VitaApp() {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [messageStatus, setMessageStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessageStatus(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessageStatus(null);

    // Simulación de envío
    setTimeout(() => {
      setMessageStatus(`¡Mensaje enviado! Gracias por conectar con Vita App, ${formData.nombre}.`);
      setFormData({ nombre: "", email: "", mensaje: "" });
      setIsSubmitting(false);
    }, 1000);
  };
  
  // Clase base del botón con el estilo Liquid Glass modificado
  const buttonClasses = `
    glass-button w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold
    transition-all hover:scale-[1.03] active:scale-[0.98]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand
  `;

  return (
    <main className="min-h-screen bg-bg text-text flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      
      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_60%)]"
        animate={{ opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-start" /* items-start para mejor alineación vertical */
      >
        {/* LADO IZQUIERDO: Información de Contacto (Estilo de la imagen) */}
        <div className="p-8 md:p-0">
          
          <motion.p
            className="text-sm uppercase tracking-widest text-brand mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Contacta con Nosotros
          </motion.p>

          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 text-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Hablemos de Vita
          </motion.h2>

          <motion.p
            className="text-lg leading-relaxed text-text-secondary mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            ¿Tienes preguntas, ideas o necesitas ayuda para comenzar tu negocio ? Nuestro equipo está listo para asistirte.
          </motion.p>
          
          {/* Detalles de Contacto */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            
            {/* Email */}
            <div>
              <p className="text-xl font-semibold mb-1 text-brand flex items-center gap-2">
                <Mail className="w-5 h-5" /> Email:
              </p>
              <p className="text-lg text-text">soporte@vitaapp.com</p>
            </div>
            
            {/* Teléfono */}
            <div>
              <p className="text-xl font-semibold mb-1 text-brand flex items-center gap-2">
                <Phone className="w-5 h-5" /> Teléfono:
              </p>
              <p className="text-lg text-text">+0 (800) 555-VITA</p>
            </div>
            
            {/* Dirección */}
            <div>
              <p className="text-xl font-semibold mb-1 text-brand flex items-center gap-2">
                <MapPin className="w-5 h-5" /> Dirección:
              </p>
              <p className="text-lg text-text">Vita Wellness Center, Av. Bienestar 123, Ciudad Digital</p>
            </div>

            {/* Redes Sociales */}
            <div className="pt-4">
              <p className="text-xl font-semibold mb-4 text-brand">Síguenos:</p>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="icon-btn">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" aria-label="Twitter" className="icon-btn">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" aria-label="Instagram" className="icon-btn">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            
          </motion.div>
          
        </div>

        {/* LADO DERECHO: Formulario de Contacto */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
          className="glass-card p-8 rounded-2xl shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-brand">
            Envía un mensaje rápido
          </h3>

          <div className="mb-4">
            <label htmlFor="nombre" className="block text-sm font-medium mb-1 text-text-secondary">Nombre</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="input-field w-full px-4 py-2"
              placeholder="Tu nombre"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-text-secondary">Correo electrónico</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field w-full px-4 py-2"
              placeholder="tu@email.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="mensaje" className="block text-sm font-medium mb-1 text-text-secondary">Mensaje</label>
            <textarea
              name="mensaje"
              id="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows={4}
              className="input-field w-full px-4 py-2"
              placeholder="Escribe tu mensaje o cuéntanos tu objetivo..."
            />
          </div>
          
          {/* Mensaje de estado */}
          {messageStatus && (
            <div
              role="status"
              aria-live="polite"
              className={`mt-4 mb-4 p-3 rounded-xl text-center font-medium transition duration-500
                ${messageStatus.includes("¡Mensaje enviado!")
                  ? 'bg-primary/35 text-brand border border-primary/40'
                  : 'bg-card text-text-secondary border border-primary/25'}`
              }
            >
              {messageStatus}
            </div>
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className={buttonClasses}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </span>
            ) : (
              <>
                Enviar Mensaje
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </motion.button>
        </motion.form>
      </motion.section>
    </main>
  );
}