"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, X, Send } from "lucide-react";

// Colores de ejemplo para 'brand' y 'text'. En un proyecto real, estos
// deberían estar definidos en la configuración de Tailwind.
// Aquí se usan directamente para asegurar la visualización.
// bg-brand -> #2563EB (blue-600)
// text-text -> #F3F4F6 (gray-100)
// text-text-secondary -> #D1D5DB (gray-300)

// ---------------- BUTTON ----------------
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  isWhatsapp?: boolean;
  isGlass?: boolean;
};

const Button = ({
  children,
  onClick,
  disabled = false,
  className = "",
  isWhatsapp = false,
  isGlass = false,
}: ButtonProps) => {
  // Clases base y de Glass LED
  const glassClasses = `
    w-full flex items-center justify-center px-6 py-3 rounded-xl font-bold transition-all duration-300
    backdrop-blur-lg bg-white/10 border border-white/20 text-white
    shadow-lg hover:bg-white/20 hover:border-white/40 hover:shadow-2xl
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  // Clases para el botón de WhatsApp (con efecto Glass LED sutil)
  const whatsappClasses = `
    w-full flex items-center justify-center px-6 py-3 rounded-xl font-bold transition-all duration-300
    backdrop-blur-md bg-green-500/20 border border-green-500/40 text-green-300
    shadow-lg hover:bg-green-500/30 hover:border-green-500/60 hover:shadow-2xl
  `;

  // Clases primarias (fallback, aunque no se usa en el componente principal)
  const primaryClasses = `
    bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 rounded-lg shadow-lg px-6 py-3
  `;

  const finalClasses = isGlass
    ? glassClasses
    : isWhatsapp
    ? whatsappClasses
    : primaryClasses;

  return (
    <button onClick={onClick} disabled={disabled} className={finalClasses + " " + className}>
      {children}
    </button>
  );
};

// ---------------- DATA FAQ ----------------
const faqData = [
  {
    question: "¿VITA tiene algún costo o suscripción mensual?",
    answer:
      "No. Crear y usar tus tiendas en VITA es completamente gratis. Solo aplicamos un Service Fee de hasta 5.5% por venta, que cubre antifraude, soporte y protección al comprador. Si no vendes, no pagas.",
  },
  {
    question: "¿Necesito conocimientos técnicos o saber programar?",
    answer:
      "No. VITA fue creada para que cualquier persona pueda vender en minutos, sin código ni configuraciones complejas.",
  },
  {
    question: "¿Es seguro usar VITA para vender o comprar?",
    answer:
      "Sí. Contamos con verificación y sistema antifraude para asegurar transacciones seguras.",
  },
  {
    question: "¿Cómo funcionan los pagos y los retiros?",
    answer:
      "Recibes tus ingresos en tu wallet integrada y puedes retirar en MXN o USD, usar tu tarjeta Mastercard o convertir fondos a cripto.",
  },
  {
    question: "¿Qué puedo hacer si tengo un problema con una venta o envío?",
    answer:
      "Nuestro equipo de soporte está disponible 24/7 y contamos con un sistema de protección y disputas justo para vendedores y compradores.",
  },
];

// ---------------- FAQ ITEM ----------------
const FaqItem = ({ question, answer, isOpen, onClick }: any) => (
  <motion.div
    initial={false}
    // Animación de color de fondo al abrir/cerrar
    animate={{ backgroundColor: isOpen ? "rgba(32,54,68,0.35)" : "transparent" }}
    transition={{ duration: 0.3 }}
    onClick={onClick}
    className="cursor-pointer rounded-xl border-b border-gray-700 last:border-b-0"
  >
    <div className="flex justify-between items-center py-4">
      {/* Usamos blue-500 como color de 'brand' para que se vea la diferencia */}
      <h4 className={`text-md font-medium ${isOpen ? "text-gray-100" : "text-gray-300"}`}>
        {question}
      </h4>

      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
        {isOpen ? <Minus className="w-5 h-5 text-blue-500" /> : <Plus className="w-5 h-5 text-gray-300" />}
      </motion.div>
    </div>

    <motion.div
      initial={false}
      // Animación de altura y opacidad para el contenido de la respuesta
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden"
    >
      <p className="text-sm p-2 leading-relaxed text-gray-300 pb-4">{answer}</p>
    </motion.div>
  </motion.div>
);

// ---------------- COMPONENTE PRINCIPAL ----------------
export default function SeccionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [questionInput, setQuestionInput] = useState("");

  const toggleFaq = (index: number) => setOpenIndex(openIndex === index ? null : index);

  // Función de envío a WhatsApp
  const handleSendWhatsApp = () => {
    // Número de WhatsApp (debe incluir el código de país, p. ej., 57 para Colombia)
    const numeroWhatsApp = "971543034346"; 
    
    if (!questionInput.trim()) {
        console.warn("La pregunta está vacía. Abortando envío.");
        return;
    }
    
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(questionInput)}`;
    window.open(url, "_blank");
    
    // Opcional: Cerrar modal y limpiar input después de enviar
    setIsModalOpen(false);
    setQuestionInput("");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gray-900 text-gray-100">
      
      {/* Fondo estético (opcional) */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-full">
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style={{stopColor:"#1f2937", stopOpacity:0.5}} />
              <stop offset="100%" style={{stopColor:"#111827", stopOpacity:0}} />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad1)" />
        </svg>
      </div>

      <section className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-start">
        
        {/* Columna de Título y Botón */}
        <div>
          {/* Usamos blue-500 como 'brand' */}
          <p className="text-sm uppercase tracking-widest mb-2 font-medium text-blue-500">
            Preguntas frecuentes
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            ¿Tienes preguntas? Tenemos respuestas.
          </h2>

          <p className="text-lg leading-relaxed mb-6 text-gray-300">
            Si no encuentras tu respuesta aquí, puedes enviarnos tu duda.
          </p>

          <Button onClick={() => setIsModalOpen(true)} isGlass>
            Hacer una pregunta
          </Button>
        </div>

        {/* Columna de FAQ */}
        <div className="rounded-2xl border border-gray-700/50 p-4 bg-gray-800/30 backdrop-blur-md">
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

      {/* Modal de Contacto por WhatsApp */}
      {isModalOpen && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} // Usamos exit para framer-motion si el componente se desmonta
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-md rounded-xl p-6 bg-gray-900/80 backdrop-blur-xl border border-gray-700"
          >

            <button 
              className="absolute right-4 top-4 text-gray-300 hover:text-white transition-colors" 
              onClick={() => setIsModalOpen(false)}
              aria-label="Cerrar modal"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-bold mb-4 text-white">Haz tu pregunta</h3>
            <p className="text-sm text-gray-400 mb-4">
                Escribe tu pregunta y te redirigiremos a WhatsApp para contactar a nuestro equipo.
            </p>

            <textarea
              value={questionInput}
              onChange={(e) => setQuestionInput(e.target.value)}
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-gray-100 resize-none focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              rows={4}
              placeholder="Escribe aquí tu duda..."
            />

            <Button onClick={handleSendWhatsApp} disabled={!questionInput.trim()} isWhatsapp className="mt-5">
              <Send className="w-5 h-5 mr-2" />
              Enviar por WhatsApp
            </Button>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}