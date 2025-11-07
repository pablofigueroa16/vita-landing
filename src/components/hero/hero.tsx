import NavBar from "@/components/navbar";
import Particles from "@/components/Particles";
import TextType from "@/components/TextType";
import SplitText from "@/components/SplitText";
import AnnouncementPill from "@/components/AnnouncementPill";
import Button from "@/components/Button";
const hero = () => {
  return (
    <>
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#004c73"]}
          particleCount={7000}
          particleSpread={10}
          speed={0.05}
          particleBaseSize={120}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
          backgroundColor="#060d12"
          className="pointer-events-none absolute inset-0 z-0"
        />
      </div>
      <NavBar />
      <div id="home" className="relative min-h-screen w-full z-10 flex flex-col items-center justify-center gap-4 px-6 text-center pt-24">
            <AnnouncementPill className="mb-2" />
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
        <p className="max-w-lg text-sm font-medium text-text-secondary md:text-lg">
          Diseña tu tienda en menos de 5 minutos, recibe pagos globales con
          Mastercard y vende solo a clientes verificados. Simple, rápido y
          seguro para todos.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <Button variant="primary">Lista de espera</Button>
          <Button variant="secondary">Contactar ejecutivo</Button>
        </div>

        {/* <div className="mt-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <StarBorder
            as="button"
            className="custom-class"
            color="cyan"
            speed="3s"
          >
            Lista de espera
          </StarBorder>
          <StarBorder
            as="button"
            className="custom-class"
            color="cyan"
            speed="3s"
          >
            Contactar ejecutivo
          </StarBorder>
        </div> */}
      </div>
    </>
  );
};
export default hero;