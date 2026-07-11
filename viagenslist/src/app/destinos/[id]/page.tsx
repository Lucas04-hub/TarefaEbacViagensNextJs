import { destinos } from '@/src/data/destinos';

export default function DetalheDestino({ params }: { params: { id: string } }) {
  const id = Number(params.id); // convertendo string para number
  const destino = destinos.find((d) => d.id === id);

  if (!destino) return <div>Destino não encontrado.</div>;

  return (
    <main>
      <h1>{destino.nome}</h1>
      <img src={destino.imagem} alt={destino.nome} />
      <p>{destino.descricao}</p>
    </main>
  );
}