import {useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import styles from "../../styles/RegisterTwoLawyer.module.css";
import PageWrapper from "../../components/PageWrapper";


export default function RegisterTwoLawyer () {
    const navigate = useNavigate();
    const handleGoBack = () => navigate(-1);

    return (
        <PageWrapper>
        <div className={styles.screenContainer}>
            <div className={styles.leftPanel}>
                <FiArrowLeft className={styles.arrow} onClick={handleGoBack} />
                <h1 className={styles.title}>Contratante, conclua seu cadastro.</h1>
                <p className={styles.sub}>Finalize com suas informações.</p>
        </div>
            <div className={styles.rightPanel}>
                <h1 className={styles.rightTitle}>Contratante</h1>
                <p className={styles.subRight}>Cadastro</p>

                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <input type="text" id="nome" placeholder=" " required />
                        <label htmlFor="nome">Nome</label>
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="email" id="nome" placeholder=" " required />
                        <label htmlFor="email">E-mail</label>
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="password" id="senha" placeholder=" " required />
                        <label htmlFor="senha">Senha</label>
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="text" id="telefone" placeholder=" " required />
                        <label htmlFor="telefone">Telefone</label>
                    </div>
                    <button type="submit" className={styles.submitButton} onClick={() => navigate("/home-client")}>
                        Cadastrar
                    </button>
                </form>
            </div>
    </div>
    </PageWrapper>


    );

}