import ScrollFloat from "../ScrollFloat";
import SpotlightCard from "../SpotlightCard";
const solution = () => {
  return (
    <div id="solution" className="relative min-h-screen w-full z-10 flex flex-col items-center justify-center gap-4 px-6 text-center pt-24">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        containerClassName="text-brand font-bold text-4xl md:text-4xl"
      >
        LA SOLUCIÓN
      </ScrollFloat>
      <h2 className="text-text-secondary font-bold text-3xl md:text-3xl mb-4">
        Una experiencia de comercio sin fricción, más rápida y más humana.
      </h2>
      <p className="text-text-secondary font-bold text-2xl md:text-2xl mb-4">
        Hemos rediseñado cada parte del e-commerce para eliminar los tres
        mayores obstáculos del mercado: falta de confianza, pagos lentos y
        logística ineficiente. Con VITA, vender y comprar se siente tan fácil
        como debería ser.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="hsl(200 100% 45%)"
        >
          <div className="relative p-7 md:p-8 text-left">
            <div className="absolute top-5 left-5 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-brand/80 border border-brand/40 shadow-md flex items-center justify-center">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7" fill="#0B1727">
                <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" fill="#ffffff" />
                <path d="M9.5 12l2 2 3.5-3.5" stroke="#0B1727" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <h2 className="text-text font-bold text-xl md:text-xl mt-12 mb-2.5 md:mb-3">
              Verificación inteligente
            </h2>
            <p className="text-text text-sm md:text-base leading-snug md:leading-relaxed">
              Usuarios reales. Tiendas reales. Ventas reales.
            </p>
            <p className="text-text-secondary text-sm md:text-base leading-snug md:leading-relaxed">
              Nuestro sistema de verificación digital KYC/KYB garantiza que cada
              comprador y vendedor sea una persona o empresa legítima. La IA
              valida documentos, biometría y señales de riesgo en segundos,
              reduciendo el fraude y los contracargos hasta en un 70 %. La
              confianza deja de ser un valor añadido y se convierte en la base
              de cada transacción.
            </p>
          </div>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="hsl(200 100% 45%)"
        >
          <div className="relative p-7 md:p-8 text-left">
            <div className="absolute top-5 left-5 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-brand/80 border border-brand/40 shadow-md flex items-center justify-center">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7" fill="#0B1727">
                <rect x="3" y="6" width="18" height="12" rx="2" fill="#ffffff" />
                <rect x="3" y="9" width="18" height="3" fill="#0B1727" opacity="0.15" />
                <circle cx="8" cy="13" r="1.2" fill="#0B1727" />
                <circle cx="12" cy="13" r="1.2" fill="#0B1727" />
                <circle cx="16" cy="13" r="1.2" fill="#0B1727" />
              </svg>
            </div>
            <h2 className="text-text font-bold text-xl md:text-xl mt-12 mb-2.5 md:mb-3">
              Verificación inteligente
            </h2>
            <p className="text-text text-sm md:text-base leading-snug md:leading-relaxed">
              Usuarios reales. Tiendas reales. Ventas reales.
            </p>
            <p className="text-text-secondary text-sm md:text-base leading-snug md:leading-relaxed">
              Nuestro sistema de verificación digital KYC/KYB garantiza que cada
              comprador y vendedor sea una persona o empresa legítima. La IA
              valida documentos, biometría y señales de riesgo en segundos,
              reduciendo el fraude y los contracargos hasta en un 70 %. La
              confianza deja de ser un valor añadido y se convierte en la base
              de cada transacción.
            </p>
          </div>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="hsl(200 100% 45%)"
        >
          <div className="relative p-7 md:p-8 text-left">
            <div className="absolute top-5 left-5 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-brand/80 border border-brand/40 shadow-md flex items-center justify-center">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7" fill="#0B1727">
                <rect x="3" y="8" width="12" height="8" rx="2" fill="#ffffff" />
                <path d="M15 10h3l3 3v3h-6v-6z" fill="#ffffff" />
                <path d="M5 12h8" stroke="#0B1727" strokeWidth="2" />
                <circle cx="6" cy="14" r="0.8" fill="#0B1727" />
              </svg>
            </div>
            <h2 className="text-text font-bold text-xl md:text-xl mt-12 mb-2.5 md:mb-3">
              Envíos integrados y confiables
            </h2>
            <p className="text-text text-sm md:text-base leading-snug md:leading-relaxed">
              Entrega más rápido. Gana más confianza.
            </p>
            <p className="text-text-secondary text-sm md:text-base leading-snug md:leading-relaxed">
              Con nuestra integración con Cubbo, cada pedido se almacena,
              prepara y envía automáticamente con seguimiento en tiempo real.
              Ofrecemos same-day delivery en CDMX, tiempos promedio de 1–2 días
              a nivel nacional y procesos de devolución simplificados. La
              experiencia post-compra se convierte en tu mejor estrategia de
              recompra.
            </p>
          </div>
        </SpotlightCard>
      </div>
      <h2 className="text-text font-bold text-xl md:text-xl mt-12 mb-2.5 md:mb-3">
        El comercio digital no necesita ser complicado. Con verificación, pagos
        y envíos integrados, VITA convierte la confianza en crecimiento y la
        tecnología en resultados.
      </h2>
    </div>
  );
};
export default solution;
