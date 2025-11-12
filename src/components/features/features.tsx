import ScrollFloat from "../ScrollFloat";
import SpotlightCard from "../SpotlightCard";
import Image from "next/image";
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
          <div className="flex flex-col items-start gap-2 justify-center md:p-4 text-left">
              <Image
                src="/features/1.png"
                alt="Icono Social Feed"
                width={88}
                height={88}
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
                priority={false}
              />
            <h2 className="text-text font-bold text-xl md:text-xl">
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
          <div className="flex flex-col items-start gap-2 justify-center md:p-4 text-left">
              <Image
                src="/features/2.png"
                alt="Icono Chat con IA"
                width={88}
                height={88}
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
                priority={false}
              />
            <h2 className="text-text font-bold text-xl">
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
          <div className="flex flex-col items-start gap-2 justify-center md:p-4 text-left">
              <Image
                src="/features/3.png"
                alt="Icono CRM Inteligente con IA"
                width={88}
                height={88}
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
                priority={false}
              />
            <h2 className="text-text font-bold text-xl">
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
          <div className="flex flex-col items-start gap-2 justify-center md:p-4 text-left">
              <Image
                src="/features/4.png"
                alt="Icono Verificación KYC/KYB"
                width={88}
                height={88}
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
                priority={false}
              />
            <h2 className="text-text font-bold text-xl">
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
          <div className="flex flex-col items-start gap-2 justify-center md:p-4 text-left">
              <Image
                src="/features/5.png"
                alt="Icono Tiendas rápidas y sin comisión"
                width={88}
                height={88}
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
                priority={false}
              />
            <h2 className="text-text font-bold text-xl">
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
          <div className="flex flex-col items-start gap-2 justify-center md:p-4 text-left">
              <Image
                src="/features/6.png"
                alt="Icono Próximamente más"
                width={88}
                height={88}
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
                priority={false}
              />
            <h2 className="text-text font-bold text-xl">
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
