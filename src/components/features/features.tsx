import ScrollFloat from "../ScrollFloat";
import SpotlightCard from "../SpotlightCard";
const features = () => {
  return (
    <div
      id="features"
      className="relative min-h-screen w-full z-10 flex flex-col items-center justify-center gap-4 px-6 text-center pt-20"
    >
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        textClassName="text-xl md:text-xl text-brand font-bold"
      >
        FUNCIONALIDADES
      </ScrollFloat>
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        textClassName="mx-[10%] text-xl md:text-5xl text-text font-bold"
      >
        Herramientas inteligentes para impulsar tu crecimiento digital
      </ScrollFloat>

      <h3 className="text-text-secondary mx-[10%] p-1 font-semibold text-lg md:text-xl">
        VITA reúne todo lo que necesitas para vender, conectar y escalar de
        forma segura, intuitiva y sin fricción.
      </h3>
      <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="hsl(200 100% 45%)"
        >
          <div className="relative p-7 md:p-4 text-left">
            <div className="absolute top-5 left-5 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-brand/80 border border-brand/40 shadow-md flex items-center justify-center">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="w-6 h-6 md:w-7 md:h-7"
                fill="#0B1727"
              >
                <path
                  d="M7 9c0-1 .7-1.8 1.6-2 .1-.3.4-.7.8-.9.5-.3 1.1-.2 1.5.2.4-.2.9-.1 1.2.2.3.3.4.8.3 1.2.4.1.7.4.9.8.2.5.1 1.1-.3 1.5-.3.3-.8.4-1.2.3-.1.4-.4.7-.8.9-.5.2-1.1.1-1.5-.3-.4.2-.9.1-1.2-.2-.3-.3-.4-.8-.3-1.3z"
                  fill="#ffffff"
                />
                <circle cx="15.5" cy="7.5" r="1.6" fill="#ffffff" />
                <circle cx="18.5" cy="10.5" r="1.2" fill="#ffffff" />
              </svg>
            </div>
            <h2 className="text-text font-bold text-xl md:text-xl mt-12 mb-2.5 md:mb-3">
              Social Feed
            </h2>
            <p className="text-text-secondary text-sm md:text-base leading-snug md:leading-relaxed">
              Descubre contenido real de creadores y marcas verificadas.
              Inspírate, confía y compra en un e-commerce que se vuelve social.
            </p>
          </div>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="hsl(200 100% 45%)"
        >
          <div className="relative p-7 md:p-4 text-left">
            <div className="absolute top-5 left-5 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-brand/80 border border-brand/40 shadow-md flex items-center justify-center">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="w-6 h-6 md:w-7 md:h-7"
                fill="#0B1727"
              >
                <path
                  d="M4 5h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H10l-4 3v-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"
                  fill="#ffffff"
                />
                <circle cx="8" cy="10" r="1" fill="#0B1727" />
                <circle cx="12" cy="10" r="1" fill="#0B1727" />
                <circle cx="16" cy="10" r="1" fill="#0B1727" />
              </svg>
            </div>
            <h2 className="text-text font-bold text-xl md:text-xl mt-12 mb-2.5 md:mb-3">
              Chat con IA
            </h2>
            <p className="text-text-secondary text-sm md:text-base leading-snug md:leading-relaxed">
              Tu asesor de ventas y productos 24/7. Responde, recomienda y
              optimiza en tiempo real dentro de tu tienda.
            </p>
          </div>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="hsl(200 100% 45%)"
        >
          <div className="relative p-7 md:p-4 text-left">
            <div className="absolute top-5 left-5 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-brand/80 border border-brand/40 shadow-md flex items-center justify-center">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="w-6 h-6 md:w-7 md:h-7"
                fill="#0B1727"
              >
                <rect
                  x="4"
                  y="5"
                  width="16"
                  height="12"
                  rx="2"
                  fill="#ffffff"
                />
                <path d="M7 9h10M7 12h6" stroke="#0B1727" strokeWidth="2" />
                <circle cx="17" cy="12" r="1.5" fill="#0B1727" />
              </svg>
            </div>
            <h2 className="text-text font-bold text-xl md:text-xl mt-12 mb-2.5 md:mb-3">
              CRM Inteligente con IA
            </h2>
            <p className="text-text-secondary text-sm md:text-base leading-snug md:leading-relaxed">
              Centraliza pedidos, clientes y oportunidades. Anticípate a tus
              clientes con datos predictivos y relaciones más humanas.
            </p>
          </div>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="hsl(200 100% 45%)"
        >
          <div className="relative p-7 md:p-4 text-left">
            <div className="absolute top-5 left-5 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-brand/80 border border-brand/40 shadow-md flex items-center justify-center">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="w-6 h-6 md:w-7 md:h-7"
                fill="#0B1727"
              >
                <path
                  d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z"
                  fill="#ffffff"
                />
                <path
                  d="M9.5 12l2 2 3.5-3.5"
                  stroke="#0B1727"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
            <h2 className="text-text font-bold text-xl md:text-xl mt-12 mb-2.5 md:mb-3">
              Verificación KYC / KYB Potenciada con IA
            </h2>
            <p className="text-text-secondary text-sm md:text-base leading-snug md:leading-relaxed">
              Validación automática en segundos. Garantiza identidades reales y
              elimina fraudes con tecnología avanzada.
            </p>
          </div>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="hsl(200 100% 45%)"
        >
          <div className="relative p-7 md:p-4 text-left">
            <div className="absolute top-5 left-5 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-brand/80 border border-brand/40 shadow-md flex items-center justify-center">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="w-6 h-6 md:w-7 md:h-7"
                fill="#0B1727"
              >
                <path d="M4 8h16l-2-3H6l-2 3z" fill="#ffffff" />
                <rect x="5" y="9" width="14" height="8" rx="2" fill="#ffffff" />
              </svg>
            </div>
            <h2 className="text-text font-bold text-xl md:text-xl mt-12 mb-2.5 md:mb-3">
              Tiendas Rápidas y Sin Comisión
            </h2>
            <p className="text-text-secondary text-sm md:text-base leading-snug md:leading-relaxed">
              Crea tu tienda en minutos, sin suscripciones. Diseña, vende y
              escala sin límites ni comisiones ocultas.
            </p>
          </div>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="hsl(200 100% 45%)"
        >
          <div className="relative p-7 md:p-4 text-left">
            <div className="absolute top-5 left-5 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-brand/80 border border-brand/40 shadow-md flex items-center justify-center">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="w-6 h-6 md:w-7 md:h-7"
                fill="#0B1727"
              >
                <path
                  d="M12 2l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z"
                  fill="#ffffff"
                />
              </svg>
            </div>
            <h2 className="text-text font-bold text-xl md:text-xl mt-12 mb-2.5 md:mb-3">
              Próximamente más
            </h2>
            <p className="text-text-secondary text-sm md:text-base leading-snug md:leading-relaxed">
              Nuevas herramientas e integraciones en camino. En VITA, el futuro
              del comercio digital nunca se detiene.
            </p>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
};
export default features;
