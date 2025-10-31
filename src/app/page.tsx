import NavBar from "@/components/navbar";
import Particles from "@/components/Particles";
import StarBorder from "@/components/StarBorder";
import TextType from "@/components/TextType";
import ShinyText from "@/components/ShinyText";
import SplitText from "@/components/SplitText";
export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#0B0A17] overflow-x-hidden">
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
          backgroundColor="#0B0A17"
          className="pointer-events-none absolute inset-0 z-0"
        />
      </div>
      <NavBar />
      <div className="relative min-h-screen w-full z-10 flex flex-col items-center justify-center gap-4 px-6 text-center pt-24">
        <button
          type="button"
          disabled={false}
          className="rounded-full bg-[#141416]/95 border border-white/10 px-5 py-2 shadow-inner text-[#b5b5b5]"
          aria-label="Shiny Button"
        >
          <ShinyText
            text="Bienvenidos al E-commerce Intelligence"
            disabled={false}
            speed={3}
            className="custom-class"
          />
        </button>
        <div className="flex items-center justify-center">
          <TextType
            as="h1"
            className="max-w-5xl text-white text-4xl font-bold md:text-7xl"
            text={["Crea, Cobra, Escala"]}
            typingSpeed={60}
            deletingSpeed={60}
            pauseDuration={1500}
            loop={true}
            showCursor={true}
            hideCursorWhileTyping={false}
            cursorCharacter="."
            cursorBlinkDuration={0.5}
            textColors={["white", "white", "white"]}
            startOnVisible={true}
            variableSpeed={{ min: 50, max: 90 }}
            cursorClassName="text-white"
            aria-live="polite"
          />
        </div>
        <SplitText
          text="Todo en una sola plataforma"
          className="text-6xl font-bold text-center text-white"
          delay={100}
          duration={0.8}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <p className="max-w-lg text-sm font-medium text-slate-200/80 md:text-lg">
          Diseña tu tienda en menos de 5 minutos, recibe pagos globales con
          Mastercard y vende solo a clientes verificados. Simple, rápido y
          seguro para todos.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <StarBorder
            as="button"
            className="custom-class"
            color="violet"
            speed="3s"
          >
            Lista de espera
          </StarBorder>
          <StarBorder
            as="button"
            className="custom-class"
            color="violet"
            speed="3s"
          >
            Contactar ejecutivo
          </StarBorder>
        </div>
      </div>
    </div>
  );
}
