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
                <h1 className={styles.title}>Advogado, conclua seu cadastro.</h1>
                <p className={styles.sub}>Adicione suas informações finais.</p>
        </div>
            <div className={styles.rightPanel}>
                <h1 className={styles.rightTitle}>Advogado</h1>
                <p className={styles.subRight}>Conclua seu cadastro</p>

                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <input type="text" id="endereço" placeholder=" " required />
                        <label htmlFor="endereco">Endereço</label>
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="tel" id="telfone" placeholder=" " required />
                        <label htmlFor="telefone">Telefone</label>
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="text" id="endereçoComercial" placeholder=" " required />
                        <label htmlFor="telefoneComercial">Telefone Comercial</label>
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="text" id="oab" placeholder=" " required />
                        <label htmlFor="oab">OAB</label>
                    </div>
                    <button type="submit" className={styles.submitButton} onClick={() => navigate("/home-lawyer")}>
                        Cadastrar
                    </button>
                </form>
            </div>
    </div>
    </PageWrapper>


    );

}