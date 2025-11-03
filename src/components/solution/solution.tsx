import ScrollFloat from "../ScrollFloat";
const solution = () => {
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
        Solución
      </ScrollFloat>
    </div>
  );
}
export default solution;