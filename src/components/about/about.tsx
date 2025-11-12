import ScrollFloat from "../ScrollFloat";
import ScrollReveal from "../ScrollReveal";
import SpotlightCard from "../SpotlightCard";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full z-10 flex flex-col items-start text-left gap-10 px-6 pt-24 "
    >
      {/* Título */}
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        containerClassName="text-text font-bold text-left w-full max-w-4xl text-4xl md:text-7xl"
      >
        
      </ScrollFloat>

      {/* Texto */}
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
        textClassName="w-full max-w-4xl text-left text-text-secondary text-lg leading-relaxed"
      >
        VITA no solo es tecnología. Es propósito, seguridad y oportunidad.
        Un espacio donde cada vendedor, creador y comprador puede construir algo
        real, sin miedo y sin límites.
      </ScrollReveal>

      {/* BOTÓN */}
    <button
  className="relative px-7 py-3 rounded-lg font-semibold text-white
             bg-gradient-to-b from-[#0B1A34] to-[#041024]
             border border-[#3A76FF]/70
             shadow-[0_0_18px_#3A76FF40]
             hover:shadow-[0_0_28px_#3A76FF90]
             hover:border-[#3A76FF]
             transition-all duration-300">
  Aprender más
</button>


      {/* Tarjetas Main */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">

        {/* Card 1 */}
        <SpotlightCard spotlightColor="hsl(215 100% 65%)">
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

        {/* Card 2 */}
        <SpotlightCard spotlightColor="hsl(215 100% 65%)">
          <div className="space-y-3">
            <div className="flex -space-x-2 mb-2">
              <img className="h-6 w-6 rounded-full" src="/pablo3-removebg-preview10.png" />
              <img className="h-6 w-6 rounded-full" src="/victor-removebg-preview.png" />
              <img className="h-6 w-6 rounded-full" src="/manuel-removebg-preview.png" />
            </div>

            <p className="text-4xl font-bold text-white">15 M</p>

            <p className="text-sm text-slate-300">Proyectos Completados</p>

            <p className="text-slate-400 text-xs leading-relaxed mt-4">
              Soluciones entregadas con calidad y resultados consistentes.
            </p>
          </div>
        </SpotlightCard>

        {/* Card 3 */}
        <SpotlightCard spotlightColor="hsl(215 100% 65%)">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-300 text-sm">
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
    </section>
  );
};

export default About;
