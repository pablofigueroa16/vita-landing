import styles from "./navbar.module.css"
import { cn } from "@/lib/utils"
import { HomeIcon } from "@/components/icons/home-icon"
import { AboutIcon } from "@/components/icons/about-icon"
import { FeaturesIcon } from "@/components/icons/features-icon"
import { QuestionIcon } from "@/components/icons/question-icon"
import ContactIcon from "@/components/icons/contact-icon"
import Image from "next/image"

export default function NavBar() {
  return (
    <>
      <Image
        src="/vita-logo-blanco.png"
        alt="Logo de VITA"
        width={180}
        height={60}
        className={styles.navLogo}
        priority
      />
      <nav className={styles.navbar} aria-label="Navegación principal">
      <ul className={styles.navList} role="list">
        <li className={cn(styles.navItem, "group")} data-active="true">
          <button
            type="button"
            className={cn(styles.navButton, "hover:bg-secondary/15")}
            aria-label="Inicio"
            aria-current="page"
          >
            <HomeIcon
              className={cn(
                styles.navIcon,
                "text-secondary/80 hover:text-primary group-data-[active=true]:text-primary"
              )}
            />
            <span className={cn(styles.navLabel, "text-secondary/70 hover:text-primary group-data-[active=true]:text-primary")}>Inicio</span>
          </button>
        </li>
        <li className={cn(styles.navItem, "group")}> 
          <button
            type="button"
            className={cn(styles.navButton, "hover:bg-secondary/15")}
            aria-label="Características"
          >
            <FeaturesIcon
              className={cn(
                styles.navIcon,
                "text-secondary/80 hover:text-primary group-data-[active=true]:text-primary"
              )}
            />
            <span className={cn(styles.navLabel, "text-secondary/70 hover:text-primary group-data-[active=true]:text-primary")}>Características</span>
          </button>
        </li>
        <li className={cn(styles.navItem, "group")}>
          <button
            type="button"
            className={cn(styles.navButton, "hover:bg-secondary/15")}
            aria-label="Acerca de"
          >
            <AboutIcon
              className={cn(
                styles.navIcon,
                "text-secondary/80 hover:text-primary group-data-[active=true]:text-primary"
              )}
            />
            <span className={cn(styles.navLabel, "text-secondary/70 hover:text-primary group-data-[active=true]:text-primary")}>Acerca de</span>
          </button>
        </li>
        <li className={cn(styles.navItem, "group")}>
          <button
            type="button"
            className={cn(styles.navButton, "hover:bg-secondary/15")}
            aria-label="Preguntas"
          >
            <QuestionIcon
              className={cn(
                styles.navIcon,
                "text-secondary/80 hover:text-primary group-data-[active=true]:text-primary"
              )}
            />
            <span className={cn(styles.navLabel, "text-secondary/70 hover:text-primary group-data-[active=true]:text-primary")}>Preguntas</span>
          </button>
        </li>
        <li className={cn(styles.navItem, "group")}>
          <button
            type="button"
            className={cn(styles.navButton, "hover:bg-secondary/15")}
            aria-label="Contacto"
          >
            <ContactIcon
              className={cn(
                styles.navIcon,
                "text-secondary/80 hover:text-primary group-data-[active=true]:text-primary"
              )}
            />
            <span className={cn(styles.navLabel, "text-secondary/70 hover:text-primary group-data-[active=true]:text-primary")}>Contacto</span>
          </button>
        </li>
      </ul>
      </nav>
    </>
  )
}