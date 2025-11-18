import Button from "@/components/Button";
import ProfileCard from "@/components/ProfileCard";
import ScrollFloat from "@/components/ScrollFloat";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-bg text-text flex flex-col items-center justify-center px-6 py-20">
      <section className="max-w-7xl w-full text-center">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          textClassName="text-brand font-semibold text-sm md:text-base"
        >
          Oportunidades
        </ScrollFloat>
        <h1 className="text-5xl font-extrabold mb-6 mt-4">Carreras en VITA</h1>
        <p className="text-lg text-text-secondary mb-12 max-w-3xl mx-auto">
          Gracias por tu interés. Estamos siempre en búsqueda de talento para sumar al equipo.
          Revisa las posiciones disponibles o contáctanos directamente.
        </p>

        {/* Vacantes Grid */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-6 mb-12">
          <ProfileCard
            className="pc-vacant"
            name="Diseñador Gráfico"
            title="Creativo Visual"
            handle="VITA"
            status="Vacante"
            contactText="Aplicar"
            contactUrl="https://www.linkedin.com/company/vitaplatform/posts/"
            avatarUrl="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><circle cx='32' cy='24' r='14' fill='%23000000' opacity='0.9'/><path d='M8 58c0-12 10-22 24-22s24 10 24 22' fill='%23000000' opacity='0.6'/></svg>"
            iconUrl="/vita-logo-blanco.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
          />
          
          <ProfileCard
            className="pc-vacant"
            name="Marketing Manager"
            title="Estratega de Crecimiento"
            handle="VITA"
            status="Vacante"
            contactText="Aplicar"
            contactUrl="https://www.linkedin.com/company/vitaplatform/posts/"
            avatarUrl="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><circle cx='32' cy='24' r='14' fill='%23000000' opacity='0.9'/><path d='M8 58c0-12 10-22 24-22s24 10 24 22' fill='%23000000' opacity='0.6'/></svg>"
            iconUrl="/vita-logo-blanco.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
          />
          
          <ProfileCard
            className="pc-vacant"
            name="Front End Developer"
            title="Desarrollador UI/UX"
            handle="VITA"
            status="Vacante"
            contactText="Aplicar"
            contactUrl="https://www.linkedin.com/company/vitaplatform/posts/"
            avatarUrl="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><circle cx='32' cy='24' r='14' fill='%23000000' opacity='0.9'/><path d='M8 58c0-12 10-22 24-22s24 10 24 22' fill='%23000000' opacity='0.6'/></svg>"
            iconUrl="/vita-logo-blanco.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
          />
          
          <ProfileCard
            className="pc-vacant"
            name="Community Manager"
            title="Gestor de Comunidad"
            handle="VITA"
            status="Vacante"
            contactText="Aplicar"
            contactUrl="https://www.linkedin.com/company/vitaplatform/posts/"
            avatarUrl="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><circle cx='32' cy='24' r='14' fill='%23000000' opacity='0.9'/><path d='M8 58c0-12 10-22 24-22s24 10 24 22' fill='%23000000' opacity='0.6'/></svg>"
            iconUrl="/vita-logo-blanco.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
          />
          
          <ProfileCard
            className="pc-vacant"
            name="Closer de Venta"
            title="Especialista en Conversión"
            handle="VITA"
            status="Vacante"
            contactText="Aplicar"
            contactUrl="https://www.linkedin.com/company/vitaplatform/posts/"
            avatarUrl="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><circle cx='32' cy='24' r='14' fill='%23000000' opacity='0.9'/><path d='M8 58c0-12 10-22 24-22s24 10 24 22' fill='%23000000' opacity='0.6'/></svg>"
            iconUrl="/vita-logo-blanco.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
          />
          
          <ProfileCard
            className="pc-vacant"
            name="Setter"
            title="Prospección de Ventas"
            handle="VITA"
            status="Vacante"
            contactText="Aplicar"
            contactUrl="https://www.linkedin.com/company/vitaplatform/posts/"
            avatarUrl="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><circle cx='32' cy='24' r='14' fill='%23000000' opacity='0.9'/><path d='M8 58c0-12 10-22 24-22s24 10 24 22' fill='%23000000' opacity='0.6'/></svg>"
            iconUrl="/vita-logo-blanco.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" variant="secondary">Volver al inicio</Button>
          <Button target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/vitaplatform/posts/" variant="primary">Contacto General</Button>
        </div>
      </section>
    </main>
  );
}