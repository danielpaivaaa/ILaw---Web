import styles from "./stylesComponents/Sidebar.module.css";
import { House, User, Clock, ClockCounterClockwise} from "phosphor-react";
import logo from "../assets/icontransparent.png"

export default function SideBar() {
    return(
        <aside className={styles.sidebar}>
            <div className={styles.logo}><img src={logo}  className={styles.logo2}/></div>
            <nav>
                <ul>
                    <li className={styles.active}><House />Resumo</li>
                    <li><User />Meu Perfil</li>
                    <li><Clock />Meus horários</li>
                    <li><ClockCounterClockwise />Histórico</li>
                </ul>
            </nav>
        </aside>
    );
}
