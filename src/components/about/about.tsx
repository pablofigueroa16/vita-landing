import Button from "../Button";
import ScrollFloat from "../ScrollFloat";
import SpotlightCard from "../SpotlightCard";

const about = () => {
  return (
    <div id="about" className="relative min-h-screen w-full z-10 flex flex-col items-start justify-center px-6 text-center pt-24">
      {/* Título principal */}
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        textClassName="text-brand font-bold text-sm md:text-base"
      >
        Sobre Nosotros
      </ScrollFloat>

      {/* Subtítulo descriptivo */}
    
<h2 className="text-text text-left font-medium text-2xl md:text-3xl lg:text-4xl leading-snug md:leading-tight mb-8">
  <span className="text-text">
    VITA impulsa el comercio digital con IA,
  </span>{" "}

  {/* ✨ TEXTO SOLO CON EFECTO PULSE */}
  <span
    className="
      text-text-secondary
      animate-[pulse_3s_ease-in-out_infinite]
    "
  >
    automatización inteligente, verificación de identidad y pagos globales,
  </span>{" "}

  <span className="text-text">
    creando un e-commerce más rápido, seguro, confiable y humano.
  </span>
</h2>




      {/* Botón */}
      <Button variant="primary">Aprender más</Button>

      {/* Tarjetas principales */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-9 mt-8">
        {/* Card 1: IA */}
        <SpotlightCard>
          <div className="flex flex-col items-start gap-3 justify-center md:p-4 text-left">
            <h3 className="text-text font-bold text-xl md:text-xl">
              VITA
            </h3>

            <p className="flex items-baseline gap-1">
              <span className="text-text text-5xl md:text-6xl font-bold">90</span>
              <span className="text-brand text-3xl md:text-4xl font-bold">%</span>
            </p>

            <h4 className="text-text font-semibold text-lg md:text-xl">
              Impulsada por Inteligencia Artificial
            </h4>

            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              Más del 90 % de nuestra infraestructura opera con IA: desde detección de fraude y verificación de usuarios hasta pagos, envíos y recomendaciones.
            </p>
          </div>
        </SpotlightCard>

        {/* Card 2: Donaciones */}
        <SpotlightCard>
          <div className="flex flex-col items-start gap-3 justify-center md:p-4 text-left">

            <h3 className="text-text font-semibold text-lg md:text-xl">
              Tecnología con propósito
            </h3>

            <p className="flex items-baseline gap-1">
              <span className="text-text text-5xl md:text-6xl font-bold">10</span>
              <span className="text-brand text-3xl md:text-4xl font-bold">%</span>
              <span className="text-text text-sm md:text-base leading-relaxed">Donado</span>
            </p>

            <h5 className="text-text-secondary font-medium text-base md:text-lg">
              Basada en principios cristianos
            </h5>

            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              Destinamos el 10 % de nuestras ganancias a iglesias y causas nobles en Latinoamérica y el mundo.
            </p>
          </div>
        </SpotlightCard>

        {/* Card 3: Impacto Global */}
        <SpotlightCard>
          <div className="flex flex-col items-start gap-3 justify-center md:p-4 text-left">
            <h3 className="text-text font-semibold text-lg md:text-xl">
              El futuro del e-commerce
            </h3>

            <p className="flex items-baseline gap-1">
              <span className="text-text text-4xl md:text-5xl font-bold">$6.3 B</span>
              <span className="text-brand text-xl md:text-2xl font-bold">USD+</span>
            </p>

            <h4 className="text-text font-semibold text-lg md:text-xl">
              Impacto global en expansión
            </h4>

            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              Latinoamérica lidera el crecimiento digital mundial, con México al frente de esta nueva era del comercio.
            </p>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
};

export default about;
