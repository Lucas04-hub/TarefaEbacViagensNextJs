import { destinos } from "@/src/data/destinos";

export default async function DetalheDestino({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const destino = destinos.find((d) => d.id === Number(id));

  if (!destino) return <div>Destino não encontrado.</div>;

  return (
    <main>
      <h1>{destino.nome}</h1>
      <img src={destino.imagem} alt={destino.nome} />
      <p>{destino.descricao}</p>
    </main>
  );
}
