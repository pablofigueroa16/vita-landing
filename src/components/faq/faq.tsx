"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

// Datos de las preguntas frecuentes
const faqData = [
  {
    question: "¿Qué está incluido en la prueba gratuita?",
    answer:
      "Nuestra prueba gratuita te da acceso a las herramientas principales, paneles de control y uso limitado para que explores la plataforma antes de mejorar tu plan.",
  },
  {
    question: "¿Puedo actualizar o degradar mi plan en cualquier momento?",
    answer:
      "Sí, puedes cambiar tu plan en cualquier momento desde la configuración de tu cuenta. Los ajustes se aplican al inicio del siguiente ciclo de facturación.",
  },
  {
    question: "¿Necesito saber programar para usar la plataforma?",
    answer:
      "No, nuestra plataforma está diseñada para todos los niveles. Puedes comenzar a crear y explorar sin necesidad de escribir una sola línea de código.",
  },
  {
    question: "¿Mis datos están seguros en la plataforma?",
    answer:
      "Absolutamente. Utilizamos cifrado avanzado y cumplimos con los estándares globales de privacidad de datos para mantener tu información protegida.",
  },
  {
    question: "¿Puedo integrar sus herramientas con mi software existente?",
    answer:
      "Sí, nuestra plataforma ofrece integraciones fluidas con las principales herramientas y APIs, para que puedas conectarlas fácilmente con tu flujo de trabajo actual.",
  },
];

// Item del acordeón FAQ
const FaqItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={false}
      animate={{
        backgroundColor: isOpen ? "rgba(255,255,255,0.05)" : "transparent",
      }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="cursor-pointer rounded-lg"
    >
      <div className="flex justify-between items-center p-5 border-b border-gray-200/20">
        <h4
          className={`text-[16px] font-medium ${
            isOpen ? "text-black dark:text-white" : "text-gray-700 dark:text-gray-300"
          }`}
        >
          {question}
        </h4>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          {isOpen ? (
            <Minus className="w-5 h-5 text-blue-500" />
          ) : (
            <Plus className="w-5 h-5 text-gray-400" />
          )}
        </motion.div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-gray-600 dark:text-gray-400 text-sm p-5 pt-0 leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
};

// Componente principal FAQ
export default function SeccionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen text-black dark:text-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden relative">
      <section className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-start">
        {/* Columna izquierda */}
        <div className="p-8 md:p-0">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2 font-medium">
            Preguntas frecuentes
          </p>
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">
            Estamos aquí para ayudarte
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 mb-10">
            ¿Tienes preguntas? Tenemos respuestas. Explora las consultas más comunes sobre nuestra plataforma, precios, funciones y soporte.
          </p>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 py-3 px-8 rounded-lg font-semibold
            border border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10 transition-all"
          >
            Hacer una pregunta
          </motion.a>
        </div>

        {/* Columna derecha */}
        <div className="rounded-xl overflow-hidden border border-gray-300/30 dark:border-gray-700/50 shadow-lg">
          <div className="divide-y divide-gray-200/20 dark:divide-gray-700/40">
            {faqData.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => toggleFaq(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
