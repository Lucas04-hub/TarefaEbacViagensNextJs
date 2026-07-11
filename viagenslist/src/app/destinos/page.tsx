import { destinos } from "../../data/destinos";
import CardDestino from "../../components/CardDestino";
import styles from "./page.module.css";

export default function DestinosPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.tituloDestacado}>Destinos Turísticos</h1>
      <div className={styles.grid}>
        {destinos.map((destino) => (
          <CardDestino
            key={destino.id}
            nome={destino.nome}
            imagem={destino.imagem}
            descricao={destino.descricao}
          />
        ))}
      </div>
    </main>
  );
}