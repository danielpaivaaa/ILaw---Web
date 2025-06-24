import { useNavigate } from 'react-router-dom';
import '../../styles/LoginLawyer.css';
import { FiArrowLeft } from 'react-icons/fi'; // ícone da seta

export default function LoginLawyer() {
    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1);
    }
  return (
    <div className="login-container">
      <FiArrowLeft className="back-icon"  onClick={handleGoBack}/>
      <h1 className="login-title">Advogado</h1>
      <p className="login-subtitle">Efetue seu login</p>

        <div className="input-group">
          <input type="text" id="email" placeholder=" " required />   
          <label htmlFor="email">E-mail ou usuário</label>    
          </div>

          <div className="input-group">
            <input type="password" id="senha" placeholder=" " required />
            <label htmlFor="senha">Senha</label>

            <div className="login-footer">
              <button className="login-button" onClick={() => navigate("/home-lawyer")}>Acessar</button>
              <p className="textt">Não possui conta?<span className="cadastre-link" onClick={() => navigate("/register-lawyer")}> Cadastre-se</span></p>
            </div>
          </div>
      </div>
  );
}
