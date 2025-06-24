import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiCamera } from "react-icons/fi";
import styles from "../../styles/RegisterLawyer.module.css";
import PageWrapper from "../../components/PageWrapper";



export default function RegisterLawyer() {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);

  return (
    <PageWrapper>
    <div className={styles.screenContainer}>
      <div className={styles.leftPanel}>
        <FiArrowLeft className={styles.arrow} onClick={handleGoBack} />
        <h1 className={styles.title}>Faça a primeira etapa de seu cadastro.</h1>
        <p className={styles.sub}>Adicione suas informações pessoais.</p>
      </div>

      <div className={styles.rightPanel}>
        <h1 className={styles.titleRight}>Advogado</h1>
        <p className={styles.subRight}>Cadastro</p>

        <div className={styles.imageUpload}>
          <FiCamera className={styles.cameraIcon} />
        </div>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <input type="text" id="nome" placeholder=" " required />
            <label htmlFor="nome">Nome</label>
          </div>
          <div className={styles.inputGroup}>
            <input type="email" id="email" placeholder=" " required />
            <label htmlFor="email">E-mail</label>
          </div>
          <div className={styles.inputGroup}>
            <input type="password" id="senha" placeholder=" " required />
            <label htmlFor="senha">Senha</label>
          </div>
          <button type="submit" className={styles.submitButton} onClick={() => navigate("/register-two-lawyer")}>
            Avançar 
          </button>
        </form>
      </div>
    </div>
    </PageWrapper>
  );
}
