import styles from "./stylesComponents/Topbar.module.css";
import { Bell, Power } from "phosphor-react";

interface TopbarProps {
    nome: string;
}

export default function Topbar({ nome }: TopbarProps) {
    return (
        <header className={styles.topbar}>
            <h1>{nome}</h1>
            <div className={styles.actions}>
                <Bell size={20} />
                <Power size={20} />
            </div>
        </header>
    )
}
