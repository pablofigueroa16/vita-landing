import { LightRays } from "@/components/ui/light-rays"
import NavBar from "@/components/navbar"
export default function Home() {
  const baseBtn =
    "group relative inline-flex items-center justify-center rounded-xl px-5 py-3 md:px-6 md:py-3.5 text-sm md:text-base font-semibold backdrop-blur-md transition-all duration-300 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
  const overlayCommon =
    "absolute inset-0 rounded-xl bg-gradient-to-t from-white/10 to-transparent pointer-events-none transition-opacity duration-300";

  return (
      <div className="relative h-screen w-full overflow-hidden light-rays-surface">
      <NavBar />
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
        
        <h1 className="max-w-5xl text-white text-4xl font-bold md:text-7xl">
          Crea. Cobra. Escala.
        </h1>
        <h2 className="max-w-5xl text-white text-2xl font-semibold md:text-5xl">
          Todo en una sola plataforma
        </h2>
        <p className="max-w-lg text-sm font-medium text-slate-200/80 md:text-lg">
          Diseña tu tienda en menos de 5 minutos, recibe pagos globales con Mastercard y vende solo a clientes verificados. Simple, rápido y seguro para todos.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <button
            type="button"
            aria-label="Unirse a la lista de espera"
            title="Lista de espera"
            className={
              baseBtn +
              " bg-primary/25 text-white border border-white/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,.28),0_8px_24px_rgba(16,24,40,.45)] hover:bg-primary/35 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,.36),0_12px_28px_rgba(16,24,40,.55)]"
            }
          >
            <span className="relative z-10">Lista de espera</span>
            <span
              aria-hidden
              className={overlayCommon + " opacity-70 group-hover:opacity-90"}
            />
          </button>

          <button
            type="button"
            aria-label="Contactar a un ejecutivo"
            title="Contactar ejecutivo"
            className={
              baseBtn +
              " bg-secondary/20 text-white border border-white/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,.22),0_6px_20px_rgba(16,24,40,.35)] hover:bg-secondary/30 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,.30),0_10px_24px_rgba(16,24,40,.45)]"
            }
          >
            <span className="relative z-10">Contactar ejecutivo</span>
            <span
              aria-hidden
              className={overlayCommon + " opacity-10 group-hover:opacity-15"}
            />
          </button>
          
        </div>
      </div>
      <LightRays color="rgba(102, 194, 255, 0.35)" blur={40} speed={5} count={10} length="100%" />
    </div>
  )
}
