import styles from "./CardDestino.module.css";

type Props = {
  nome: string;
  imagem: string;
  descricao: string;
};

export default function CardDestino({ nome, imagem, descricao }: Props) {
  return (
    <div className={styles.card}>
      <img
        src={imagem}
        alt={nome}
        style={{ width: "200px", height: "140px", objectFit: "cover", borderRadius: "4px" }}
      />
      <h3 className={styles.nome}>{nome}</h3>
      <p className={styles.descricao}>{descricao}</p>
    </div>
  );
}