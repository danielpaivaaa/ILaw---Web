import styles from "../styles/HomeClient.module.css"

export function FilterBar() {
  return (
    <div className={styles.filterBar}>
      <select><option>Especialidade</option></select>
      <select><option>Localização</option></select>
      <select><option>Disponibilidade</option></select>
      <button>Buscar</button>
    </div>
  );
}
