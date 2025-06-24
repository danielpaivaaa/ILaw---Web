import { useNavigate } from "react-router-dom";
import styles from "../../styles/WelcomeScreen.module.css";
import lawyerIcon from "../../assets/lawyericon.png";
import clientIcon from "../../assets/clienticon.png";
import PageWrapper from "../../components/PageWrapper";


export default function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <h1>iLaw</h1>
        <p>Conectando você à justiça de forma simples e rápida.</p>
        <p>Encontre o profissional ideal para sua necessidade jurídica!</p>
      </div>

      <div className={styles.rightPanel}>
        <h1 className={styles.title}>
          Bem vindo ao <span className={styles.ilaw}>iLaw</span>
        </h1>
        <p>Escolha como deseja continuar</p>

        <div className={styles.buttons}>
          <button className={styles.button} onClick={() => navigate("/login-Lawyer")}>
            <img src={lawyerIcon} alt="Advogado" />
            <span>Advogado</span>
          </button>

          <button className={styles.button} onClick={() => navigate("/login-client")}>
            <img src={clientIcon} alt="Cliente" />
            <span>Cliente</span>
          </button>
        </div>
      </div>
    </div>
    </PageWrapper>
  );
}
