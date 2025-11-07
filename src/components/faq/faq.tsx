"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Button from "../Button";

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
        backgroundColor: isOpen ? "rgba(32,54,68,0.35)" : "transparent",
      }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className="cursor-pointer rounded-xl"
    >
      <div className="accordion-btn">
        <h4
          className={`text-md font-medium ${
            isOpen ? "text-text" : "text-text-secondary"
          }`}
        >
          {question}
        </h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <Minus className="w-5 h-5 text-brand" />
          ) : (
            <Plus className="w-5 h-5 text-text-secondary" />
          )}
        </motion.div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="accordion-panel mb-2"
      >
        <p className="text-sm p-2 leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

export default function SeccionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main id="faq" className="min-h-screen text-text flex flex-col items-center justify-center px-6 py-20 overflow-hidden relative">
      <section className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-start">
        {/* Columna izquierda */}
        <div className="p-8 md:p-0">
          <p className="text-sm uppercase tracking-widest text-brand mb-2 font-medium">
            Preguntas frecuentes
          </p>
          <h2 className="text-5xl font-extrabold mb-6 leading-tight text-text">
            Estamos aquí para ayudarte
          </h2>
          <p className="text-lg leading-relaxed text-text-secondary mb-10">
            ¿Tienes preguntas? Tenemos respuestas. Explora las consultas más
            comunes sobre nuestra plataforma, precios, funciones y soporte.
          </p>
          <Button variant="primary">Hacer una pregunta</Button>
        </div>

        {/* Columna derecha */}
        <div className="rounded-2xl overflow-hidden">
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
      </section>
    </main>
  );
}
