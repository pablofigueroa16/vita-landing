import ScrollFloat from "../ScrollFloat";
import SpotlightCard from "../SpotlightCard";
import Image from "next/image";
import type { CSSProperties } from "react";
import Globe from "@/components/lightswind/globe";

const orbitIcons = [
  {
    angle: 0,
    image: "/iconos/visa.png",
    alt: "Visa",
  },
  {
    angle: 72,
    image: "/iconos/stripe.png",
    alt: "Stripe",
  },
  {
    angle: 144,
    image: "/iconos/bitcoin.png",
    alt: "Bitcoin",
  },
  {
    angle: 216,
    image: "/iconos/usdt.png",
    alt: "USDT",
  },
  {
    angle: 288,
    image: "/iconos/cregis.png",
    alt: "Cregis",
  },
];

const solution = () => {
  return (
    <div
      id="solution"
      className="relative min-h-screen w-full z-10 flex flex-col items-center justify-center gap-4 px-6 text-center pt-24"
    >
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        containerClassName="text-brand font-bold"
        textClassName="text-brand font-semibold text-sm md:text-base"
      >
        La Solución
      </ScrollFloat>
      <h2 className="text-text font-bold text-xl md:text-5xl">
        Una experiencia de comercio sin fricción, más rápida y más humana.
      </h2>
      <p className="text-text-secondary mx-[10%] font-semibold text-xl md:text-base mb-4">
        VITA reinventa el e-commerce eliminando la falta de confianza, los pagos
        lentos y la logística ineficiente, haciendo que vender y comprar sea
        simple y fluido.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        <SpotlightCard
          className="custom-spotlight-card col-span-2 md:col-span-2"
          spotlightColor="hsl(200 100% 45%)"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:p-4 text-left">
            <div className="flex-1 flex flex-col gap-4 items-start justify-center">
              <div className="flex flex-row items-center gap-2">
                <Image
                  src="/solution/1.png"
                  alt="Icono verificación inteligente"
                  width={88}
                  height={88}
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                  priority={false}
                />
                <h2 className="mx-2 text-text font-bold text-xl md:text-2xl">
                  Verificación inteligente
                </h2>
              </div>

              <p className="mx-2 text-text font-semibold text-sm md:text-base leading-snug md:leading-relaxed">
                Usuarios reales. Tiendas reales. Ventas reales.
              </p>
              <p className="mx-2 text-text-secondary text-sm md:text-base leading-snug md:leading-relaxed">
                Nuestro sistema KYC/KYB con IA valida identidad, documentos y
                biometría en segundos, garantizando usuarios legítimos y
                reduciendo fraudes y contracargos hasta en un 70 %.
              </p>
            </div>
            <div className="hidden md:block w-px self-stretch bg-brand/40" aria-hidden="true" />
            <div className="flex-1 flex items-center justify-center">
              <Image
                src="/didit.gif"
                alt="Flujo de verificación Didit"
                width={360}
                height={760}
                className="w-full max-w-2xs"
                priority={false}
                unoptimized={true}
              />
            </div>
          </div>

        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="hsl(200 100% 45%)"
        >
          <div className="flex flex-col gap-4 md:p-4 text-left w-full min-h-[320px]">
            <div className="flex-1 flex flex-col py-10 gap-4 items-start justify-center">
              <div className="flex flex-row items-center gap-2">
                <Image
                  src="/solution/2.png"
                  alt="Icono pagos rápidos y globales"
                  width={88}
                  height={88}
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                  priority={false}
                />
                <h2 className="mx-2 text-text font-bold text-xl md:text-xl">
                  Pagos rápidos y globales
                </h2>
              </div>
              <p className="mx-2 text-text font-semibold text-sm md:text-base leading-snug md:leading-relaxed">
                Cobra desde México. Recibe desde el mundo.
              </p>
              <p className="mx-2 text-text-secondary text-sm md:text-base leading-snug md:leading-relaxed">
                Acepta pagos en pesos, dólares o criptomonedas con retiros
                instantáneos a tu wallet o tarjeta Mastercard. Cobra sin fronteras
                con tecnología que optimiza tasas y aprobaciones.
              </p>
            </div>
            <div className="hidden md:block h-px w-full bg-brand/30" aria-hidden="true" />
            <div className="flex-1 flex items-center justify-center p-4 md:p-6">
              <div
                className="relative w-full max-w-[250px] md:max-w-[290px] aspect-square"
                style={{ "--orbit-radius": "clamp(90px, 12.6vw, 144px)" } as CSSProperties}
              >
                <div className="absolute inset-[12%]" />
                <div
                  className="absolute inset-0 rounded-full border border-brand/40 animate-spin"
                  style={{ animationDuration: "18s" }}
                >
                  {orbitIcons.map((icon) => (
                    <div
                      key={icon.angle}
                      className="absolute top-1/2 left-1/2 w-12 h-12 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                      style={{
                        transform: `rotate(${icon.angle}deg) translateY(calc(var(--orbit-radius) * -1)) rotate(-${icon.angle}deg)`,
                      }}
                    >
                      <Image
                        src={icon.image}
                        alt={icon.alt}
                        width={24}
                        height={24}
                        className="w-full h-full object-contain"
                        priority={false}
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute inset-[26%] rounded-full bg-white/5 border border-white/20 flex items-center justify-center">
                  <Image
                    src="/vita-logo-blanco.png"
                    alt="Logo VITA"
                    width={80}
                    height={80}
                    className="object-contain"
                    style={{ width: "4.5rem", height: "4.5rem" }}
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="hsl(200 100% 45%)"
        >
          <div className="flex flex-col gap-4 md:p-4 text-left w-full min-h-[320px]">
            <div className="flex-1 flex flex-col py-10 gap-4 items-start justify-center">
              <div className="flex flex-row items-center gap-2">
                <Image
                  src="/solution/3.png"
                  alt="Icono envíos integrados y confiables"
                  width={98}
                  height={98}
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                  priority={false}
                />
                <h2 className="mx-2 text-text font-bold text-xl md:text-xl">
                  Envíos integrados y confiables
                </h2>
              </div>
              <p className="mx-2 text-text font-semibold text-sm md:text-base leading-snug md:leading-relaxed">
                Entrega más rápido. Gana más confianza.
              </p>
              <p className="mx-2 text-text-secondary text-sm md:text-base leading-snug md:leading-relaxed">
                Gracias a nuestras integraciones, tus pedidos se gestionan
                y envían automáticamente con seguimiento en tiempo real, entregas
                rápidas y devoluciones simples que impulsan la recompra.
              </p>
            </div>
            <div className="hidden md:block h-px w-full bg-brand/30" aria-hidden="true" />
            <div className="flex-1 p-4">
              <Globe
                theta={0.2}
                dark={1}
                scale={1.2}
                diffuse={1.5}
                baseColor="#0099e6"
                markerColor="#ff0000"
                glowColor="#0e212f"
              />
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
};
export default solution;
