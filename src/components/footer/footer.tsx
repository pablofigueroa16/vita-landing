"use client";

import Image from "next/image";
import { Linkedin, Instagram, Youtube, Music2 } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative w-full">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 md:gap-24">
          {/* Left Section - Logo */}
          <div className="flex items-start">
            <Image
              src="/vita-logo-blanco.png"
              alt="VITA Logo"
              width={192}
              height={192}
              className="w-48 h-48 object-contain"
              priority={false}
            />
          </div>

          {/* Right Section - Description */}
          <div className="flex flex-col justify-cente my-2 max-w-xs">
            <div className="inline-block mb-3 px-4 py-1.5 bg-brand/10 border border-brand/30 rounded-full w-fit">
              <span className="text-brand text-xs md:text-sm font-semibold">
                E-commerce del Futuro
              </span>
            </div>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              La plataforma que reinventa el comercio digital.
              Confianza verificada, pagos instantáneos y logística eficiente
              en un solo ecosistema.
            </p>
          </div>
        </div>

        {/* Bottom Section - Copyright & Social */}
        <div className="flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-8 justify-between gap-6 py-8 border-t border-white/5">
          {/* Copyright */}
          <div className="text-text-secondary text-sm text-center md:text-left">
            © 2025 VITA Platform. Todos los derechos reservados.
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              aria-label="YouTube"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 text-text-secondary hover:bg-brand/10 hover:text-brand transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/thevita.global?igsh=cGJzcXhmNHFnZWhi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 text-text-secondary hover:bg-brand/10 hover:text-brand transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              aria-label="TikTok"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 text-text-secondary hover:bg-brand/10 hover:text-brand transition-colors"
            >
              <Music2 className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/company/vitaplatform/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 text-text-secondary hover:bg-brand/10 hover:text-brand transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;