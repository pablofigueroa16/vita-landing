import ProfileCard from "../ProfileCard";
import ScrollFloat from "../ScrollFloat";

const Team = () => {
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
        Dream Team
      </ScrollFloat>

      {/* CONTENEDOR DE TARJETAS */}
      <div className="grid grid-cols-4 w-full place-items-center gap-2 mt-10 overflow-x-auto p-2">

        <div className="scale-[0.75]">
          <ProfileCard
            name="Victor Corvalan"
            title="Software Engineer"
            handle="victorcorvalan"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/victor-removebg-preview.png"
            iconUrl="/vita-logo-blanco.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
          />
        </div>

        <div className="scale-[0.75]">
          <ProfileCard
            name="Pablo E. Figueroa"
            title="Software Engineer"
            handle="pablofigueroa"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/pablo3-removebg-preview10.png"
            iconUrl="/vita-logo-blanco.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
          />
        </div>

        <div className="scale-[0.75]">
          <ProfileCard
            name="Manuel Ramos"
            title="Software Engineer"
            handle="manuelramos"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/manuel-removebg-preview.png"
            iconUrl="/vita-logo-blanco.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
          />
        </div>

        <div className="scale-[0.75]">
          <ProfileCard
            name="Laura Jimenez"
            title="Software Engineer"
            handle="laurajimenez"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/laura.png"
            iconUrl="/vita-logo-blanco.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
          />
        </div>

      </div>
    </div>
  );
};

export default Team;

