import ProfileCard from "../ProfileCard";
import ScrollFloat from "../ScrollFloat";

const Team = () => {
  return (
    <div
      id="team"
      className="relative min-h-screen w-full z-10 flex flex-col items-center justify-center gap-4 px-6 text-center pt-24"
    >
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
      >
        <h1 className="text-brand font-bold text-4xl md:text-4xl">
          DREAM TEAM
        </h1>
      </ScrollFloat>

      <h2 className="text-text font-bold text-4xl md:text-5xl">
        En busca de los cofundadores ideales
      </h2>
      <h2 className="text-text-secondary font-bold text-3xl md:text-3xl mb-4">
        Los más grandes están por llegar
      </h2>

      <div className="flex flex-row flex-wrap items-center justify-center gap-4">
        <ProfileCard
          name="Victor Corvalan"
          title="CEO & Founder"
          handle="victorcorvalan"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/victor-removebg-preview.png"
          iconUrl="/vita-logo-blanco.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
        />


        <ProfileCard
          name="Manuel Ramos"
          title="Software Engineer"
          handle="menuelramos"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/manuel-removebg-preview.png"
          iconUrl="/vita-logo-blanco.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
        />

        <ProfileCard
          className="pc-vacant"
          name="En búsqueda"
          title="Director de marketing"
          status="Vacante"
          contactText="Aplicar"
          contactUrl="/careers"
          avatarUrl="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><circle cx='32' cy='24' r='14' fill='%23000000' opacity='0.9'/><path d='M8 58c0-12 10-22 24-22s24 10 24 22' fill='%23000000' opacity='0.6'/></svg>"
          iconUrl="/vita-logo-blanco.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
        />

        <ProfileCard
          className="pc-vacant"
          name="En búsqueda"
          title="Cofundador de negocios"
          status="Vacante"
          contactText="Aplicar"
          contactUrl="/careers"
          avatarUrl="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><circle cx='32' cy='24' r='14' fill='%23000000' opacity='0.9'/><path d='M8 58c0-12 10-22 24-22s24 10 24 22' fill='%23000000' opacity='0.6'/></svg>"
          iconUrl="/vita-logo-blanco.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
        />

        <ProfileCard
          className="pc-vacant"
          name="En búsqueda"
          title="Community manager"
          status="Vacante"
          contactText="Aplicar"
          contactUrl="/careers"
          avatarUrl="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><circle cx='32' cy='24' r='14' fill='%23000000' opacity='0.9'/><path d='M8 58c0-12 10-22 24-22s24 10 24 22' fill='%23000000' opacity='0.6'/></svg>"
          iconUrl="/vita-logo-blanco.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
        />

        <ProfileCard
          className="pc-vacant"
          name="En búsqueda"
          title="Diseñadora gráfica"
          status="Vacante"
          contactText="Aplicar"
          contactUrl="/careers"
          avatarUrl="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><circle cx='32' cy='24' r='14' fill='%23000000' opacity='0.9'/><path d='M8 58c0-12 10-22 24-22s24 10 24 22' fill='%23000000' opacity='0.6'/></svg>"
          iconUrl="/vita-logo-blanco.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
        />

        <ProfileCard
          className="pc-vacant"
          name="En búsqueda"
          title="Diseñador de videos"
          status="Vacante"
          contactText="Aplicar"
          contactUrl="/careers"
          avatarUrl="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><circle cx='32' cy='24' r='14' fill='%23000000' opacity='0.9'/><path d='M8 58c0-12 10-22 24-22s24 10 24 22' fill='%23000000' opacity='0.6'/></svg>"
          iconUrl="/vita-logo-blanco.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
        />
      </div>
    </div>
  );
};

export default Team;
