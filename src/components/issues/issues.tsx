import SpotlightCard from "../SpotlightCard";
import Image from "next/image";

const Issues = () => {
  return (
    <section
      id="issues"
      className="relative min-h-screen w-full flex flex-col items-center justify-center gap-6 px-6 text-center pt-24"
    >
      <h2 className="text-text font-bold text-3xl md:text-4xl max-w-4xl leading-tight">
        Tu problema no es vender… es todo lo que pasa antes y después de una venta.
      </h2>

      <p className="text-text-secondary font-medium mx-auto text-lg md:text-xl max-w-3xl mb-12">
        El 55 % de las tiendas online en Latinoamérica pierden dinero por algo
        que no ven: fricción. Pagos que fallan, usuarios falsos y envíos lentos
        que apagan la confianza y matan la recompra.
      </p>

      {/* Tarjetas */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

        <SpotlightCard>
          <div className="flex flex-col items-start gap-3 justify-center md:p-2 text-left">
            <Image src="/issues1.png" alt="Pagos" width={48} height={48} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            <h3 className="text-text font-bold text-2xl">Pagos que frenan tu crecimiento</h3>
            <p className="text-text-secondary text-base leading-relaxed">
              El 18 % de los carritos se abandona por fallas o lentitud en el pago.
              En México, <span className="text-text font-semibold">1 de cada 4 transacciones legítimas</span> es rechazada.
            </p>
            <p className="text-brand text-sm italic mt-2">Tu cliente quiere pagar, pero el sistema no lo deja.</p>
          </div>
        </SpotlightCard>

        <SpotlightCard>
          <div className="flex flex-col items-start gap-3 justify-center md:p-2 text-left">
            <Image src="/issues2.png" alt="Confianza" width={48} height={48} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            <h3 className="text-text font-bold text-2xl">Falta de confianza y usuarios falsos</h3>
            <p className="text-text-secondary text-base leading-relaxed">
              El 62 % abandona si no percibe seguridad. El fraude por identidad creció <span className="text-text font-semibold">+35 %</span> en México el último año.
            </p>
            <p className="text-brand text-sm italic mt-2">Sin verificación, no hay confianza. Sin confianza, no hay ventas.</p>
          </div>
        </SpotlightCard>

        <SpotlightCard>
          <div className="flex flex-col items-start gap-3 justify-center md:p-2 text-left">
            <Image src="/issues3.png" alt="Envíos" width={48} height={48} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            <h3 className="text-text font-bold text-2xl">Envíos lentos, promesas rotas</h3>
            <p className="text-text-secondary text-base leading-relaxed">
              El 70 % espera el pedido en menos de 48h, pero solo el 38 % cumple.
              El <span className="text-text font-semibold">42 % abandona</span> si no hay claridad en tiempos.
            </p>
            <p className="text-brand text-sm italic mt-2">Un mal envío cuesta más que una comisión: cuesta tu reputación.</p>
          </div>
        </SpotlightCard>

      </div>

      {/* Sección final con efecto LED blanco */}
      
        <div className="mt-20 max-w-2xl flex items-center justify-center">
          <h2
            className="
              font-marker
              text-text 
              text-2xl md:text-3xl 
              font-bold 
              p-4 
              drop-shadow-[0_0_14px_white]
              md:drop-shadow-[0_0_22px_white]
            "
          >
            La fricción mata la conversión.
          </h2>
        </div>
 

      <p className="font-marker text-text-secondary mx-auto max-w-3xl text-xl md:text-lg leading-relaxed mt-6">
        Cada segundo perdido, cada pago rechazado y cada entrega tardía le cuesta vida a tu marca.
        Por eso nacimos para eliminar lo que más frena a los negocios digitales:
        pagos lentos, desconfianza y logística rota.
      </p>

    </section>
  );
};

export default Issues;
