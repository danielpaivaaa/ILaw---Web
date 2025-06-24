import styles from "../styles/HomeClient.module.css"

interface Props {
  name: string;
  area: string;
  rating: number;
  image: string;
}

export function LawyerCard({ name, area, rating, image }: Props) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.avatar} />
      <div>
        <strong>{name}</strong>
        <p>{area}</p>
        <p>{"⭐".repeat(rating)}</p>
        <div className={styles.buttons}>
          <button className={styles.secondary}>Ver perfil</button>
          <button className={styles.primary}>Solicitar agora</button>
        </div>
      </div>
    </div>
  );
}
