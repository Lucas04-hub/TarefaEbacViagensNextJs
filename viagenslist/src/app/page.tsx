import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.tituloDestacado}>
        Bem-vindo ao Portal de Destinos Turísticos!
      </h1>
      <p className={styles.paragrafo}>
        Explore os principais destinos turísticos do mundo, conheça curiosidades e escolha sua próxima viagem.
      </p>
      <div className={styles.botaoContainer}>
        <Link href="/destinos">
          <button className={styles.botaoDestacado}>
            Ver Destinos
          </button>
        </Link>
      </div>
    </main>
  );
}
