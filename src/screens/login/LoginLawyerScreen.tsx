import { useState} from "react";
import type { FormEvent} from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import styles from "../../styles/LoginClient.module.css";


export default function LoginClientScreen() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if(!username || !password) {
            alert("preencha e-mail e senha");
            return;
        }

        console.log({username, password});
        navigate("/dashboard");
    };
    const goToSignUp = () => navigate ("/register/client");

    const forgotPassword = () => navigate ("/forgotPassword")

    return (
        <div className={styles.screen}>
            <form onSubmit={handleSubmit} className={styles.card}>
                <h1 className={styles.title}>faça seu login de</h1>
                <h1 className={styles.subtitle}>Advogado</h1>

                <input 
                type="email"
                placeholder="Username"
                className={styles.input}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />

                <input 
                type="password"
                placeholder="Password"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <span onClick={forgotPassword} className={styles.forgot}>
                    Forgot Password?
                </span>

                <button type="button" className={`${styles.btn} ${styles.btnAlt}`}>
                    <FaGoogle size={18} /> Sign In with google
                </button>
                <button type="button" className={`${styles.btn} ${styles.btnAltFacebook}`}>
                    <FaFacebook size={18} /> Sign In with Facebook
                </button>


                <div className={styles.footer}>
                    não possui uma conta?
                    <span onClick={goToSignUp} className={styles.link}>Cadastre-se
                    </span>
                </div>
            </form>
        </div>
    );

}