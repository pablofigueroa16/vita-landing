import Image from "next/image";
import { ShowcaseCard } from "./showcase";

export const showcaseCards: ShowcaseCard[] = [
  {
    title: "Identidad",
    subtitle: "100% Usuarios reales",
    badge: "01",
    icon: (
      <Image
        src="/iconos-showcase/IDENTIDAD.png"
        alt="Identidad"
        width={40}
        height={40}
        className="w-full h-full object-contain"
        priority={false}
      />
    ),
    description: "Administra tu inventario, pedidos, envíos y pagos desde un solo lugar. Todo lo que necesitas para tu negocio en una sola plataforma integrada.",
  },
  {
    title: "Antifraude",
    subtitle: "98% menos fraude",
    badge: "02",
    icon: (
      <Image
        src="/iconos-showcase/ANTIFRAUDE.png"
        alt="Antifraude"
        width={40}
        height={40}
        className="w-full h-full object-contain"
        priority={false}
      />
    ),
    description: "Detección en tiempo real antes del pago.",
  },
  {
    title: "Checkout",
    subtitle: "Compra en 5 segundos",
    badge: "03",
    icon: (
      <Image
        src="/iconos-showcase/CHECKOUT.png"
        alt="Checkout"
        width={40}
        height={40}
        className="w-full h-full object-contain"
        priority={false}
      />
    ),
    description: "1 clic. Sin fricción. Sin formularios."
  },
  {
    title: "Comercios",
    subtitle: "100% Vendedores verificados",
    badge: "04",
    icon: (
      <Image
        src="/iconos-showcase/TIENDA.png"
        alt="Tienda"
        width={40}
        height={40}
        className="w-full h-full object-contain"
        priority={false}
      />
    ),
    description: "Solo negocios auténticos. Máxima confianza."
  },
  {
    title: "Abandono",
    subtitle: "70% menos carritos abandonados",
    badge: "05",
    icon: (
      <Image
        src="/iconos-showcase/ABANDONO.png"
        alt="Abandono"
        width={40}
        height={40}
        className="w-full h-full object-contain"
        priority={false}
      />
    ),
    description: "Checkout inteligente que no deja escapar ventas."
  }
];

