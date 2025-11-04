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
    w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all 
    hover:scale-[1.03] active:scale-[0.98]
    
    // Estilo Liquid Glass
    bg-violet-900/10 backdrop-blur-md
    border border-violet-500/30 shadow-lg shadow-violet-500/10
    
    // Colores
    text-white hover:text-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500
  `;

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      
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
            className="text-sm uppercase tracking-widest text-teal-400 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Contacta con Nosotros
          </motion.p>

          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Hablemos de Vita
          </motion.h2>

          <motion.p
            className="text-lg leading-relaxed text-gray-400 mb-10"
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
              <p className="text-xl font-semibold mb-1 text-teal-300 flex items-center gap-2">
                <Mail className="w-5 h-5" /> Email:
              </p>
              <p className="text-lg text-gray-300">soporte@vitaapp.com</p>
            </div>
            
            {/* Teléfono */}
            <div>
              <p className="text-xl font-semibold mb-1 text-teal-300 flex items-center gap-2">
                <Phone className="w-5 h-5" /> Teléfono:
              </p>
              <p className="text-lg text-gray-300">+0 (800) 555-VITA</p>
            </div>
            
            {/* Dirección */}
            <div>
              <p className="text-xl font-semibold mb-1 text-teal-300 flex items-center gap-2">
                <MapPin className="w-5 h-5" /> Dirección:
              </p>
              <p className="text-lg text-gray-300">Vita Wellness Center, Av. Bienestar 123, Ciudad Digital</p>
            </div>

            {/* Redes Sociales */}
            <div className="pt-4">
              <p className="text-xl font-semibold mb-4 text-teal-300">Síguenos:</p>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="p-3 rounded-full bg-gray-800 hover:bg-teal-600 transition-colors border border-gray-700">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a href="#" aria-label="Twitter" className="p-3 rounded-full bg-gray-800 hover:bg-teal-600 transition-colors border border-gray-700">
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a href="#" aria-label="Instagram" className="p-3 rounded-full bg-gray-800 hover:bg-teal-600 transition-colors border border-gray-700">
                  <Instagram className="w-5 h-5 text-white" />
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
          className="bg-gray-900/70 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-violet-700/50"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-teal-400">
            Envía un mensaje rápido
          </h3>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-300">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              placeholder="Tu nombre"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-300">Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              placeholder="tu@email.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1 text-gray-300">Mensaje</label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              placeholder="Escribe tu mensaje o cuéntanos tu objetivo..."
            />
          </div>
          
          {/* Mensaje de estado */}
          {messageStatus && (
            <div className={`mt-4 mb-4 p-3 rounded-xl text-center font-medium transition duration-500
                ${messageStatus.includes("¡Mensaje enviado!") 
                    ? 'bg-teal-900/50 text-teal-300 border border-teal-600'
                    : 'bg-gray-800 text-gray-400 border border-gray-700'}`
                }>
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