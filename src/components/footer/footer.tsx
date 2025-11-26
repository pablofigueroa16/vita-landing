"use client";

import Image from "next/image";
import { Twitter, Linkedin, Instagram, Youtube, Github, Music2 } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative w-full text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-2">
        {/* Logo Central Grande */}
        <div className="flex justify-center items-center">
          <div className="relative w-full h-32 md:h-[60vh]">
            <Image
              src="/piedepagina.png"
              alt="Logo Footer"
              fill
              className="object-contain opacity-20"
              priority={false}
            />
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 border-t border-white/10">
          {/* Left Section - Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-sm text-gray-400">
            <span>© 2025 VITA</span>
            <span className="hidden md:inline">|</span>
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Términos de Uso
            </a>
            <span className="hidden md:inline">|</span>
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Política de Privacidad
            </a>
            {/* <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-1">
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>Argentina</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span>Estado del Sistema</span>
            </span> */}
          </div>

          {/* Right Section - Social Icons */}
          <div className="flex items-center gap-4">

            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              aria-label="YouTube"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </motion.a>


            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.instagram.com/thevita.global?igsh=cGJzcXhmNHFnZWhi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              aria-label="TikTok"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Music2 className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/company/vitaplatform/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;