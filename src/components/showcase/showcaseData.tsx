import { ShowcaseCard } from "./showcase";

export const showcaseCards: ShowcaseCard[] = [
  {
    title: "Identidad",
    subtitle: "100% Usuarios reales",
    badge: "01",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="hsl(200 100% 45%)" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    description: "Administra tu inventario, pedidos, envíos y pagos desde un solo lugar. Todo lo que necesitas para tu negocio en una sola plataforma integrada.",
  },
  {
    title: "Antifraude",
    subtitle: "98% menos fraude",
    badge: "02",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="hsl(200 100% 45%)" strokeWidth="2">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
        <circle cx="12" cy="17" r="0.5" fill="hsl(200 100% 45%)"/>
      </svg>
    ),
    description: "Detección en tiempo real antes del pago.",
  },
  {
    title: "Checkout",
    subtitle: "Compra en 5 segundos",
    badge: "03",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="hsl(200 100% 45%)" strokeWidth="2">
        <path d="M3 3v18h18"/>
        <path d="M18 17V9"/>
        <path d="M13 17V5"/>
        <path d="M8 17v-3"/>
      </svg>
    ),
    description: "1 clic. Sin fricción. Sin formularios."
  },
  {
    title: "Comercios",
    subtitle: "100% Vendedores verificados",
    badge: "04",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="hsl(200 100% 45%)" strokeWidth="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        <polyline points="2 12 12 2 22 12"/>
      </svg>
    ),
    description: "Solo negocios auténticos. Máxima confianza."
  },
  {
    title: "Abandono",
    subtitle: "70% menos carritos abandonados",
    badge: "05",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="hsl(200 100% 45%)" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
        <circle cx="12" cy="17" r="0.5" fill="hsl(200 100% 45%)"/>
      </svg>
    ),
    description: "Checkout inteligente que no deja escapar ventas."
  }
];

