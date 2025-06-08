import { useState } from "react";;
import type {FormEvent} from "react";
import { useNavigate} from "react-router-dom";
import styles from "../../styles/RegisterClient.module.css";

export default function LoginClientScreen() {
  const navigate = useNavigate();

  const [name, setName] = useState ("");
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState ("");
  const [city, setCity] = useState ("");
  const [telephone, setTelephone] = useState ("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

      if(!name) {
        alert("Preencha o nome");
        return;
      }
      
      if(!email) {
        alert("Preencha o email");
        return;
      }
      
      if(!password) {
        alert("Preencha a senha");
        return;
      }
      
      if(!city) {
        alert("Preencha a cidade");
        return;
      }
      
      if(!telephone) {
        alert("Preencha o telefone");
        return;
      }
      console.log({name, email, password, city, telephone}); 
      navigate("/login-client");
    }

    const goToSignIn = () => navigate ("/login-client");

  
    return (
      <div className={styles.screen}>
        <form onSubmit={handleSubmit} className={styles.card}>
          <h1 className={styles.title}>Faça seu cadastro de cliente</h1>

          <input 
          type="text"
          placeholder="Name"
          className={styles.input} 
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
          <input 
          type="email"
          placeholder="E-mail"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <input
          type="password"
          placeholder="Senha"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <input 
          type="text"
          placeholder="Cidade" 
          className={styles.input}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          />
          <input 
          type="tel"
          placeholder="Telefone"
          className={styles.input}
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)} 
          />

          <button className={styles.button}>
            Cadastrar-se
          </button>

          <div className={styles.footer}>
            Já possui uma conta?
            <span onClick={goToSignIn} className={styles.link}>Login</span>
          </div>
        </form>
      </div>
    );
}