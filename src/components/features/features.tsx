import ScrollFloat from "../ScrollFloat";
import SpotlightCard from "../SpotlightCard";
const features = () => {
  return (
    <div className="relative min-h-screen w-full z-10 flex flex-col items-center justify-center gap-4 px-6 text-center pt-24">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        containerClassName="text-text font-bold text-4xl md:text-7xl"
      >
        Funcionalidades Principales
      </ScrollFloat>
      <h2 className="text-text font-semibold text-2xl md:text-4xl">Herramientas inteligentes para impulsar tu crecimiento digital.</h2>
      <h3 className="text-text-secondary font-semibold text-xl md:text-2xl">VITA reúne todo lo que necesitas para vender, conectar y escalar — de forma segura, intuitiva y sin fricción.</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
    </div>
  );
}
export default features;