import ScrollFloat from "@/components/ScrollFloat";
import SpotlightCard from "../SpotlightCard";
const issues = () => {
  return (
    <div id="issues" className="relative min-h-screen w-full z-10 flex flex-col items-center justify-center gap-4 px-6 text-center pt-24">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        containerClassName="text-brand font-bold text-4xl md:text-4xl"
      >
        EL PROBLEMA
      </ScrollFloat>
      <h2 className="text-text font-bold text-4xl md:text-5xl">
        Tu problema no es vender… es todo lo que pasa antes y después de una
        venta.
      </h2>
      <h3 className="text-text-secondary p-4 font-bold mx-10 text-xl md:text-2xl">
        El 55 % de las tiendas online en Latinoamérica pierden dinero por algo
        que no ven: fricción. Pagos que fallan, usuarios falsos y envíos lentos
        que apagan la confianza y matan la recompra.
      </h3>
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {/* Card 1: Pagos */}
        <SpotlightCard>
          <div className="relative p-2 md:p-2 text-left">
            {/* Icono personalizado arriba-izquierda (ajuste de espaciado según referencia) */}
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand/80 border border-brand/40 shadow-md flex items-center justify-center">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7" fill="#0B1727">
                <rect x="3" y="7" width="18" height="10" rx="2" ry="2" fill="#ffffff" />
                <rect x="3" y="11" width="8" height="2" fill="#0B1727" />
                <circle cx="17" cy="12" r="1.5" fill="#0B1727" />
              </svg>
            </div>
            <h3 className="text-text font-bold text-2xl md:text-2xl mt-4 mb-3 md:mb-4">
              Pagos que frenan tu crecimiento
            </h3>
            <p className="text-text-secondary text-base md:text-base leading-relaxed">
              El 18 % de los carritos se abandona por fallas o lentitud en el proceso de pago. En México,
              1 de cada 4 transacciones legítimas es rechazada por errores de seguridad o verificación.
            </p>
          </div>
        </SpotlightCard>

        {/* Card 2: Confianza */}
        <SpotlightCard>
          <div className="relative p-2 md:p-2 text-left">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand/80 border border-brand/40 shadow-md flex items-center justify-center">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7" fill="#0B1727">
                <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" fill="#ffffff" />
                <path d="M9.5 12l2 2 3.5-3.5" stroke="#0B1727" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <h3 className="text-text font-bold text-2xl md:text-2xl mt-4 mb-3 md:mb-4">
              Falta de confianza y usuarios falsos
            </h3>
            <p className="text-text-secondary text-base md:text-base leading-relaxed">
              El 62 % abandona si no percibe seguridad visible. El fraude de identidad digital creció +35 % el último año.
            </p>
          </div>
        </SpotlightCard>

        {/* Card 3: Envíos */}
        <SpotlightCard>
          <div className="relative p-2 md:p-2 text-left">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand/80 border border-brand/40 shadow-md flex items-center justify-center">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7" fill="#0B1727">
                <rect x="3" y="6" width="12" height="8" rx="2" fill="#ffffff" />
                <path d="M15 10h3l2 2v2h-5z" fill="#ffffff" />
                <circle cx="7" cy="16" r="2" fill="#0B1727" />
                <circle cx="18" cy="16" r="2" fill="#0B1727" />
              </svg>
            </div>
            <h3 className="text-text font-bold text-2xl md:text-2xl mt-4 mb-3 md:mb-4">
              Envíos lentos, promesas rotas
            </h3>
            <p className="text-text-secondary text-base md:text-base leading-relaxed">
              El 70 % espera su pedido en menos de 48 horas, pero solo el 38 % cumple. El 42 % abandona si no hay claridad.
            </p>
          </div>
        </SpotlightCard>
      </div>
      <h2 className="text-text p-4 font-bold text-4xl md:text-3xl">
        La fricción mata la conversión.
      </h2>
      <p className="text-text-secondary mx-4 font-bold text-xl md:text-base">
        Cada segundo perdido, cada pago rechazado y cada entrega tardía le
        cuesta vida a tu marca. Por eso nacimos para eliminar lo que más frena a
        los negocios digitales: pagos lentos, desconfianza y logística rota.
      </p>
    </div>
  );
};
export default issues;
