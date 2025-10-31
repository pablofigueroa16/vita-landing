import styles from "./navbar.module.css"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function NavBar() {
  return (
    <nav className={styles.navbar} aria-label="Navegación principal">
      <div className={styles.navInner}>
        <div className={styles.brand} aria-label="Marca">
          <Image
            src="/vita-logo-blanco.png"
            alt="Logo de VITA"
            width={58}
            height={58}
            className={styles.brandLogo}
            priority
          />
        </div>
        <ul className={styles.navList} role="list">
          <li className={cn(styles.navItem)} data-active="true">
            <button
              type="button"
              className={cn(styles.navButton)}
              aria-label="Home"
              aria-current="page"
            >
              <span className={styles.navLabel}>Inicio</span>
            </button>
          </li>
          <li className={cn(styles.navItem)}>
            <button type="button" className={cn(styles.navButton)} aria-label="features">
              <span className={styles.navLabel}>Características</span>
            </button>
          </li>
          <li className={cn(styles.navItem)}>
            <button type="button" className={cn(styles.navButton)} aria-label="About">
              <span className={styles.navLabel}>Acerca de</span>
            </button>
          </li>
          <li className={cn(styles.navItem)}>
            <button type="button" className={cn(styles.navButton)} aria-label="questions">
              <span className={styles.navLabel}>Preguntas</span>
            </button>
          </li>
          <li className={cn(styles.navItem)}>
            <button type="button" className={cn(styles.navButton)} aria-label="contact">
              <span className={styles.navLabel}>Contacto</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}