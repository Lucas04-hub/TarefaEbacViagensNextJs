import { destinos } from "../../data/destinos";
import CardDestino from "../../components/CardDestino";
import styles from "./page.module.css";
import Link from "next/link";

export default function DestinosPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.tituloDestaque}>Destinos Turísticos</h1>
      <div className={styles.grid}>
        {destinos.map((destino) => (
          <Link
            key={destino.id}
            href={`/destinos/${destino.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <CardDestino
              nome={destino.nome}
              imagem={destino.imagem}
              descricao={destino.descricao}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}