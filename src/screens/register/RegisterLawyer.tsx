export default function RegisterClient() {
  return (
    <div style={styles.container}>
      <h2>Cadastro Cliente</h2>
      <input type="text" placeholder="Nome completo" style={styles.input} />
      <input type="email" placeholder="Email" style={styles.input} />
      <input type="password" placeholder="Senha" style={styles.input} />
      <input type="password" placeholder="Confirmar senha" style={styles.input} />
      <button style={styles.button}>Cadastrar</button>
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
    gap: 15
  },
  input: {
    padding: 10,
    width: 250,
    fontSize: 16
  },
  button: {
    backgroundColor: '#004aad',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    padding: '10px 20px',
    fontSize: 16,
    cursor: 'pointer'
  }
};
