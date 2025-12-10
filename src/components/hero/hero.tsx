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
      <div
        id="home"
        className="relative z-10 flex min-h-svh w-full flex-col items-center justify-center gap-4 px-4 pt-24 pb-10 text-center sm:px-6 md:min-h-screen md:gap-6 md:pt-36 md:pb-24"
      >
        <AnnouncementPill className="mb-2" />
        <div className="flex items-center justify-center">
          <TextType
            as="h1"
            className="max-w-3xl text-balance text-3xl font-bold leading-tight text-white sm:text-4xl md:max-w-5xl md:text-7xl md:leading-tight"
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
          className="text-balance text-3xl font-bold leading-tight text-center text-white sm:text-4xl md:text-6xl md:leading-tight"
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
        <p className="max-w-xl text-balance text-sm font-medium text-text-secondary sm:text-base md:text-lg">
          Diseña tu tienda en menos de 5 minutos, recibe pagos globales con
          Mastercard y vende solo a clientes verificados. Simple, rápido y
          seguro para todos.
        </p>

        <div className="mt-5 flex w-full max-w-lg flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <Button href="#contact" variant="primary">Lista de espera</Button>
          <Button target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/vitaplatform/posts/" variant="secondary">Contactar ejecutivo</Button>
        </div>
      </div>
    </>
  );
};
export default hero;