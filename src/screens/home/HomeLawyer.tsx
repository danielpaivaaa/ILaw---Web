import styles from "../../styles/HomeLawyer.module.css";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import RequestCard from "../../components/RequestCard";

export default function HomeLawyer(){
    return (
        <div className={styles.container}>
            <Sidebar />
            <main className={styles.main}>
                <Topbar nome="Layslla Oreti de Paiva" />
                <div className={styles.panel} >

                <div className={styles.cards}>
                    <div className={styles.card}>
                        <h2>Solicitações Pendentes</h2>
                        <RequestCard nome="Ana Souza" especialidade="Direito de Família" />
                        <RequestCard nome="Lucas Pereira" especialidade ="Direito do Idoso" />
                    </div>

                    <div className={styles.card}>
                        <h2>Avaliações Recentes</h2>
                        <div className={styles.review}>
                            <img src="https://i.pravatar.cc/40" alt="avatar" />
                        </div>
                            <p><strong>Marcos Lima</strong>⭐⭐⭐⭐⭐</p>
                            <p>Ótimo atendimento, muito prestativo e esclarecedor</p>
                    </div>
                </div>
                </div>
            </main>
        </div> 

);
}