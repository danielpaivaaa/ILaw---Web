import { useNavigate } from 'react-router-dom';

export default function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2>Bem-vindo ao iLaw</h2>
      <p>Escolha como deseja acessar:</p>
      <div style={styles.buttonGroup}>
        <button onClick={() => navigate('/login-lawyer')} style={styles.button}>Sou Advogado</button>
        <button onClick={() => navigate('/login-client')} style={styles.button}>Sou Cliente</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
  buttonGroup: {
    display: 'flex',
    gap: 15
  },
  button: {
    padding: '10px 20px',
    fontSize: 16,
    backgroundColor: '#004aad',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer'
  }
};
