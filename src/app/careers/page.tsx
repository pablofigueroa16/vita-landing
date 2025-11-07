import Link from "next/link";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-bg text-text flex flex-col items-center justify-center px-6 py-20">
      <section className="max-w-4xl w-full text-center">
        <p className="text-sm uppercase tracking-widest text-brand mb-2 font-medium">Oportunidades</p>
        <h1 className="text-5xl font-extrabold mb-6">Carreras en VITA</h1>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Gracias por tu interés. Estamos siempre en búsqueda de talento para sumar al equipo.
          Revisa las posiciones disponibles o contáctanos directamente.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/" className="glass-button px-6 py-3 rounded-xl font-semibold focus-visible:ring-2 focus-visible:ring-brand">
            Volver al inicio
          </Link>
          <Link href="/#contact" className="glass-button px-6 py-3 rounded-xl font-semibold focus-visible:ring-2 focus-visible:ring-brand">
            Contacto
          </Link>
        </div>
      </section>
    </main>
  );
}