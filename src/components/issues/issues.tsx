import ScrollFloat from "@/components/ScrollFloat";
import SpotlightCard from "../SpotlightCard";
const issues = () => {
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
        Problemas comunes
      </ScrollFloat>
      <h2 className="text-text font-bold text-4xl md:text-5xl">
        Tu problema no es vender… es todo lo que pasa antes y después de una
        venta.
      </h2>
      <h3 className="text-text-secondary font-bold text-xl md:text-2xl">
        {" "}
        El 55 % de las tiendas online en Latinoamérica pierden dinero por algo
        que no ven: fricción. Pagos que fallan, usuarios falsos y envíos lentos
        que apagan la confianza y matan la recompra.
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SpotlightCard>Content goes here</SpotlightCard>
        <SpotlightCard>Content goes here</SpotlightCard>
        <SpotlightCard>Content goes here</SpotlightCard>
        <SpotlightCard>Content goes here</SpotlightCard>
      </div>
    </div>
  );
};
export default issues;
