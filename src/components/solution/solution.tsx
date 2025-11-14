import ScrollFloat from "../ScrollFloat";
import SpotlightCard from "../SpotlightCard";
import Image from "next/image";
const solution = () => {
  return (
    <div
      id="solution"
      className="relative min-h-screen w-full z-10 flex flex-col items-center justify-center gap-4 px-6 text-center pt-24"
    >
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        containerClassName="text-brand font-bold"
        textClassName="text-brand font-bold text-sm md:text-base"
      >
        LA SOLUCIÓN
      </ScrollFloat>
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        containerClassName="text-brand font-bold"
        textClassName="mx-[10%] text-text font-bold text-xl md:text-5xl"
      >
        Una experiencia de comercio sin fricción, más rápida y más humana.
      </ScrollFloat>
      <p className="text-text-secondary mx-[10%] font-bold text-2xl md:text-2xl mb-4">
        VITA reinventa el e-commerce eliminando la falta de confianza, los pagos
        lentos y la logística ineficiente, haciendo que vender y comprar sea
        simple y fluido.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="hsl(200 100% 45%)"
        >
          <div className="flex flex-col items-start gap-2 justify-center md:p-4 text-left">
            <Image
                src="/solution/1.png"
                alt="Icono verificación inteligente"
                width={88}
                height={88}
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
                priority={false}
              />
            <h2 className="text-text font-bold text-xl md:text-xl">
              Verificación inteligente
            </h2>
            <p className="text-text text-sm md:text-base leading-snug md:leading-relaxed">
              Usuarios reales. Tiendas reales. Ventas reales.
            </p>
            <p className="text-text-secondary text-sm md:text-base leading-snug md:leading-relaxed">
              Nuestro sistema KYC/KYB con IA valida identidad, documentos y
              biometría en segundos, garantizando usuarios legítimos y
              reduciendo fraudes y contracargos hasta en un 70 %.
            </p>
          </div>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="hsl(200 100% 45%)"
        >
          <div className="flex flex-col items-scenter gap-2 justify-center md:p-4 text-left">
              <Image
                src="/solution/2.png"
                alt="Icono pagos rápidos y globales"
                width={88}
                height={88}
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
                priority={false}
              />
            <h2 className="text-text font-bold text-xl md:text-xl">
              Pagos rápidos y globales
            </h2>
            <p className="text-text text-sm md:text-base leading-snug md:leading-relaxed">
              Cobra desde México. Recibe desde el mundo.
            </p>
            <p className="text-text-secondary text-sm md:text-base leading-snug md:leading-relaxed">
              Acepta pagos en pesos, dólares o criptomonedas con retiros
              instantáneos a tu wallet o tarjeta Mastercard. Cobra sin fronteras
              con tecnología que optimiza tasas y aprobaciones.
            </p>
          </div>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="hsl(200 100% 45%)"
        >
          <div className="flex flex-col items-scenter gap-2 justify-center md:p-4 text-left">
              <Image
                src="/solution/3.png"
                alt="Icono envíos integrados y confiables"
                width={98}
                height={98}
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
                priority={false}
              />
            <h2 className="text-text font-bold text-xl md:text-xl">
              Envíos integrados y confiables
            </h2>
            <p className="text-text text-sm md:text-base leading-snug md:leading-relaxed">
              Entrega más rápido. Gana más confianza.
            </p>
            <p className="text-text-secondary text-sm md:text-base leading-snug md:leading-relaxed">
              Gracias a nuestra integración con Cubbo, tus pedidos se gestionan
              y envían automáticamente con seguimiento en tiempo real, entregas
              rápidas y devoluciones simples que impulsan la recompra.
            </p>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
};
export default solution;
