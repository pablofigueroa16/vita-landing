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
  <div className="space-y-3">
    <h3 className="text-white font-semibold text-lg">VITA</h3>

    <p>
      <span className="text-4xl font-bold text-white">98</span>
      <span className="text-blue-400 text-2xl font-bold"> %</span>
    </p>

    <p className="text-sm text-slate-300">Rendimiento Confiable</p>

    <p className="text-slate-400 text-xs leading-relaxed mt-4">
      Operación constante y estable que garantiza un rendimiento fluido.
    </p>
  </div>
</SpotlightCard>



<SpotlightCard
  className="custom-spotlight-card"
  spotlightColor="hsl(200 100% 45%)"
>
  <div className="space-y-3">
    <div className="flex -space-x-2 mb-2">
      <img className="h-6 w-6 rounded-full" src="/pablo3-removebg-preview10.png" alt="A" />
      <img className="h-6 w-6 rounded-full" src="/victor-removebg-preview.png" alt="B" />
      <img className="h-6 w-6 rounded-full" src="/manuel-removebg-preview.png" alt="C" />
    </div>

    <p className="text-4xl font-bold text-white">15 M</p>

    <p className="text-sm text-slate-300">Proyectos Completados</p>

    <p className="text-slate-400 text-xs leading-relaxed mt-4">
      Soluciones entregadas con calidad y resultados consistentes.
    </p>
  </div>
</SpotlightCard>



<SpotlightCard
  className="custom-spotlight-card"
  spotlightColor="hsl(200 100% 45%)"
>
  <div className="space-y-3">
    <div className="flex items-center gap-2 text-blue-300 text-sm">
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
      Sistema de Tickets de Soporte
    </div>

    <p className="text-4xl font-bold text-white">43 +</p>

    <p className="text-sm text-slate-300">Diseño Intuitivo</p>

    <p className="text-slate-400 text-xs leading-relaxed mt-4">
      Soluciones accesibles y confiables para usuarios alrededor del mundo.
    </p>
  </div>
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
