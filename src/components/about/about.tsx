import ScrollFloat from "../ScrollFloat";
import ScrollReveal from "../ScrollReveal";
import SpotlightCard from "../SpotlightCard";
const about = () => {
  return (
    <div id="about" className="relative w-full z-10 flex flex-col items-center justify-center gap-4  text-center px-6 pt-24">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        containerClassName="text-text font-bold text-4xl md:text-7xl"
      >
        Sobre nosotros
      </ScrollFloat>
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
      >
        Las soluciones de comercio digital impulsadas por Inteligencia
        Artificial están transformando la manera en que las personas venden,
        compran y confían en línea. VITA combina automatización inteligente,
        verificación de identidad y pagos globales para crear un ecosistema
        donde las tiendas, los creadores y los consumidores pueden crecer sin
        límites y sin fricción. De eliminar fraudes y errores hasta acelerar
        pagos y entregas, estamos construyendo la nueva generación del
        e-commerce: más ágil, más humano y más confiable.
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="hsl(200 100% 45%)"
        >
          Content goes here
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="hsl(200 100% 45%)"
        >
          Content goes here
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="hsl(200 100% 45%)"
        >
          Content goes here
        </SpotlightCard>
      </div>
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
      >
        VITA no solo es tecnología. Es propósito, seguridad y oportunidad. Un
        espacio donde cada vendedor, creador y comprador puede construir algo
        real, sin miedo y sin límites.
      </ScrollReveal>
    </div>
  );
};
export default about;
