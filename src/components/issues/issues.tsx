import ScrollFloat from "@/components/ScrollFloat";
import SpotlightCard from "../SpotlightCard";
import Image from "next/image";
const issues = () => {
  return (
    <div id="issues" className="relative min-h-screen w-full z-10 flex flex-col items-center justify-center px-6 text-center pt-24">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        textClassName="text-brand font-bold text-sm md:text-base"
      >
        La Realidad
      </ScrollFloat>
      {/* Título principal */}
      <h2 className="mx-[10%] text-text text-center font-bold text-2xl md:text-3xl lg:text-4xl leading-snug md:leading-tight mb-4">
        Tu problema no es vender… es todo lo que pasa antes y después de una
        venta.
      </h2>
      <h3 className="text-text-secondary mx-[10%] p-4 font-semibold mx-[10%] text-xl md:text-base mb-6">
        El 55 % de las tiendas online en Latinoamérica pierden dinero por algo
        que no ven: fricción. Pagos que fallan, usuarios falsos y envíos lentos
        que apagan la confianza y matan la recompra.
      </h3>
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {/* Card 1: Pagos */}
        <SpotlightCard>
          <div className="flex flex-col items-start gap-2 justify-center md:p-4 text-left">
            {/* Icono personalizado arriba-izquierda (reemplazado por imagen optimizada) */}
            <Image
              src="/issues/1.png"
              alt="Icono pagos que frenan tu crecimiento"
              width={64}
              height={64}
              quality={75}
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
              priority={true}
            />
            <h3 className="text-text font-bold text-2xl md:text-2xl">
              Pagos que frenan tu crecimiento
            </h3>
            <p className="text-text-secondary text-base md:text-base leading-relaxed">
              El 18 % de los carritos se abandona por fallas o lentitud en el proceso de pago. En México,
              1 de cada 4 transacciones legítimas es rechazada por errores de seguridad o verificación.
            </p>

            <p className="text-brand text-sm italic mt-2">
              Tu cliente quiere pagar, pero el sistema no lo deja.
            </p>
          </div>
        </SpotlightCard>

        {/* Card 2: Confianza */}
        <SpotlightCard>
          <div className="flex flex-col items-start gap-2 justify-center md:p-4 text-left">
            <Image
              src="/issues/2.png"
              alt="Icono falta de confianza y usuarios falsos"
              width={64}
              height={64}
              quality={75}
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
              priority={true}
            />
            <h3 className="text-text font-bold text-2xl md:text-2xl">
              Falta de confianza y usuarios falsos
            </h3>
            <p className="text-text-secondary text-base md:text-base leading-relaxed">
              El 62 % abandona si no percibe seguridad visible. El fraude de identidad digital creció +35 % el último año.
            </p>

            <p className="text-brand text-sm italic mt-2">
              Sin verificación, no hay confianza. Sin confianza, no hay ventas.
            </p>
          </div>
        </SpotlightCard>

        {/* Card 3: Envíos */}
        <SpotlightCard>
          <div className="flex flex-col items-start gap-2 justify-center md:p-4 text-left">
            <Image
              src="/issues/3.png"
              alt="Icono envíos lentos, promesas rotas"
              width={64}
              height={64}
              quality={75}
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
              priority={true}
            />
            <h3 className="text-text font-bold text-2xl md:text-2xl">
              Envíos lentos, promesas rotas
            </h3>
            <p className="text-text-secondary text-base md:text-base leading-relaxed">
              El 70 % espera su pedido en menos de 48 horas, pero solo el 38 % cumple. El 42 % abandona si no hay claridad.
            </p>

            <p className="text-brand text-sm italic mt-2">
              Un mal envío cuesta más que una comisión: cuesta tu reputación.
            </p>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
};
export default issues;
