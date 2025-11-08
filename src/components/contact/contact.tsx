"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Youtube, Instagram, Linkedin, Music2 } from "lucide-react";

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

    setTimeout(() => {
      setMessageStatus(`¡Mensaje enviado! Gracias por conectar con Vita App, ${formData.nombre}.`);
      setFormData({ nombre: "", email: "", mensaje: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const buttonClasses = `
    glass-button w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold
    transition-all hover:scale-[1.03] active:scale-[0.98]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand
  `;

  return (
    <main className="min-h-screen bg-bg text-text flex flex-col items-center justify-center px-6 py-20 overflow-hidden">

      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_60%)]"
        animate={{ opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-start"
      >

        {/* LADO IZQUIERDO */}
        <div className="p-8 md:p-0">

          <motion.p
            className="text-sm uppercase tracking-widest text-brand mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Contactate con Nosotros
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
¿Tienes una pregunta, una idea o necesitas ayuda para comenzar?
Nuestro equipo está aquí para apoyarte. Envíanos un mensaje — ¡nos encantará saber de ti!

          </motion.p>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >

            <div>
              <p className="text-xl font-semibold mb-1 text-brand flex items-center gap-2">
                <Mail className="w-5 h-5" /> Email:
              </p>
              <p className="text-lg text-text">Info@the-vita.com</p>
            </div>

            <div>
              <p className="text-xl font-semibold mb-1 text-brand flex items-center gap-2">
                <Phone className="w-5 h-5" /> Teléfono:
              </p>
              <p className="text-lg text-text">+971543034346</p>
            </div>

            <div>
              <p className="text-xl font-semibold mb-1 text-brand flex items-center gap-2">
                <MapPin className="w-5 h-5" /> Dirección:
              </p>
              <p className="text-lg text-text">Vita Wellness Center, Av. Bienestar 123, Ciudad Digital</p>
            </div>

            {/* Redes Sociales - Actualizadas con Framer Motion */}
            <div className="pt-4">
              <p className="text-xl font-semibold mb-4 text-brand">Síguenos:</p>

              <div className="flex space-x-4">
                <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="#" aria-label="YouTube" className="icon-btn">
                  <Youtube className="w-6 h-6" />
                </motion.a>

                <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="https://www.instagram.com/thevita.global?igsh=cGJzcXhmNHFnZWhi" aria-label="Instagram" className="icon-btn">
                  <Instagram className="w-6 h-6" />
                </motion.a>

                <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="#" aria-label="TikTok" className="icon-btn">
                  <Music2 className="w-6 h-6" />
                </motion.a>

                <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="https://www.linkedin.com/company/vitaplatform/" aria-label="LinkedIn" className="icon-btn">
                  <Linkedin className="w-6 h-6" />
                </motion.a>
              </div>
            </div>

          </motion.div>
        </div>

        {/* FORMULARIO */}
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
            <label className="block text-sm font-medium mb-1 text-text-secondary">Nombre</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required className="input-field w-full px-4 py-2" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-text-secondary">Correo electrónico</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="input-field w-full px-4 py-2" />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1 text-text-secondary">Mensaje</label>
            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required rows={4} className="input-field w-full px-4 py-2" />
          </div>

          {messageStatus && (
            <div className="mt-4 mb-4 p-3 rounded-xl text-center font-medium transition duration-500 bg-primary/35 text-brand border border-primary/40">
              {messageStatus}
            </div>
          )}

          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} type="submit" disabled={isSubmitting} className={buttonClasses}>
            {isSubmitting ? "Enviando..." : <>Enviar Mensaje <ArrowRight className="w-5 h-5" /></>}
          </motion.button>
        </motion.form>
      </motion.section>
    </main>
  );
}
