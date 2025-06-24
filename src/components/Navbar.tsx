import { Bell, User } from "phosphor-react";
import styles from "../styles/HomeClient.module.css"

export function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>⚖️ LOGO</div>
      <nav>
        <a href="#">Advogados na região</a>
      </nav>
      <div className={styles.userInfo}>
        <span>Daniel</span>
        <Bell size={20} />
        <User size={20} />
        <button className={styles.logout}>Sair</button>
      </div>
    </header>
  );
}
