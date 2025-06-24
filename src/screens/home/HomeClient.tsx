import styles from "../../styles/HomeClient.module.css";
import logo from "../../assets/icontransparent.png";
import pessoa1 from "../../assets/pessoa1.jpg";
import pessoa2 from "../../assets/pessoa2.jpg";
import pessoa3 from "../../assets/pessoa3.jpg";
import pessoa4 from "../../assets/pessoa4.jpg"
import { FaGavel, FaCommentAlt, FaFileAlt, FaSignOutAlt, FaUser, FaFileArchive,} from "react-icons/fa";

interface Lawyer {
  name: string;
  specialty: string;
  rating: number;
  image: string;
}

const lawyers: Lawyer[] = [
  {
    name: "Carla Santos",
    specialty: "Advogada Criminal",
    rating: 5,
    image: pessoa1,
  },
  {
    name: "Paulo Melo",
    specialty: "Advogado de Família",
    rating: 5,
    image: pessoa2,
  },
  {
    name: "Mariana Almeida",
    specialty: "Advogada Trabalhista",
    rating: 5,
    image: pessoa3,
  },
  {
    name: "Gustavo Pereira",
    specialty: "Advogado Civil",
    rating: 5,
    image: pessoa4,
  },
];

export default function HomeClient() {
  return (
    <div className={styles.container}>
      <header className={styles.navbar}>
        <div className={styles.logo}><img src={logo} className={styles.logo} /></div>
        <nav className={styles.navTabs}>
          <a href="#" className={styles.navLink}><FaGavel /> Advogados</a>
          <a href="#" className={styles.navLink}><FaCommentAlt /> Chat</a>
          <a href="#" className={styles.navLink}><FaFileAlt /> Processos</a>
          <a href="#" className={styles.navLink}><FaFileArchive /> Artigos</a>
        </nav>
        <div className={styles.userArea}>
          <FaUser />
          <span>Daniel</span>
          <button className={styles.logout}><FaSignOutAlt /> Sair</button>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.panel}>
          <h1 className={styles.title}>Encontre o advogado ideal para seu caso</h1>

          <div className={styles.filtersCentered}>
            <select><option>Especialidade</option></select>
            <select><option>Localização</option></select>
            <select><option>Disponibilidade</option></select>
          </div>

          <div className={styles.cardGrid}>
            {lawyers.map((lawyer, index) => (
              <div className={styles.lawyerCard} key={index}>
                <img
                  src={lawyer.image}
                  alt={lawyer.name}
                  className={styles.avatar}
                />
                <strong>{lawyer.name}</strong>
                <p>{lawyer.specialty}</p>
                <div className={styles.stars}>{"★".repeat(lawyer.rating)}</div>
                <div className={styles.buttons}>
                  <button className={styles.secondary}>Ver perfil</button>
                  <button className={styles.primary}>Solicitar agora</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}