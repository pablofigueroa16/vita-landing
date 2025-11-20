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
        textClassName="text-brand font-semibold text-sm md:text-base"
      >
        Dream Team
      </ScrollFloat>

      <h2 className="text-text font-bold text-4xl md:text-5xl">
        En busca de los cofundadores ideales
      </h2>
      <h2 className="text-text-secondary font-semibold text-xl md:text-base mb-4">
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
          name="Pablo E. Figueroa"
          title="CTO & Tech Lead"
          handle="pablofigueroa"
          status="Online"
          contactText="Contact Me"
          contactUrl="/https://www.linkedin.com/in/pablofigueroa16/"
          avatarUrl="/pablo3-removebg-preview10.png"
          iconUrl="/vita-logo-blanco.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
        />
        <ProfileCard
          name="Claudia Montiel"
          title="Co-Founder & CCO"
          handle="claudiamontiel"
          status="Online"
          contactText="Contact Me"
          contactUrl="/careers"
          avatarUrl="/claudia.png"
          iconUrl="/vita-logo-blanco.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
        />
        <ProfileCard
          name="Manuel Ramos"
          title="Co-Founder & Software Engineer"
          handle="manuelramos"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/manuel1-removebg-preview.png"
          iconUrl="/vita-logo-blanco.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
        />
        <ProfileCard
          name="Laura Jimenez"
          title="Co-Founder & Software Engineer"
          handle="laurajimenez"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/laura.png"
          iconUrl="/vita-logo-blanco.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
        />
        <ProfileCard
          className="pc-vacant"
          name="En búsqueda"
          title="Todas las vacantes"
          handle="Vita"
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
