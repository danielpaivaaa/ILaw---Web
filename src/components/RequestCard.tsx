import styles from "./stylesComponents/RequestCard.module.css";

interface Props {
    nome: string;
    especialidade:string;
}

export default function RequestCard({ nome, especialidade } : Props) {
    return(
        <div className={styles.card}>
            <div>
                <p><strong>{nome}</strong></p>
                <p><strong>{especialidade}</strong></p>
            </div>
            <div className={styles.botoes}>
                <button className={styles.aceitar}>Aceitar</button>
                <button className={styles.recusar}>Recusar</button>
            </div>
        </div>
    );
}