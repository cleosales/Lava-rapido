const integrantes = [
  { nome: 'Nicolly Martins', rm: 'RM563221', foto: '/img/nicolly.jpg' },
  { nome: 'Cléo Sales', rm: 'RM561298', foto: '/img/cleo.jpg' },
]

export default function Sobre() {
  return (
    <section aria-labelledby="titulo-sobre">
      <h2 id="titulo-sobre" className="text-3xl font-extrabold">Sobre o grupo</h2>
      <p className="mt-2 max-w-2xl text-asfalto/80">
        Projeto do checkpoint de roteamento de páginas e uso de contexto com React, TypeScript e Tailwind CSS.
      </p>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {integrantes.map((i) => (
          <li key={i.rm}>
            <article className="rounded-lg bg-white p-6 text-center ring-1 ring-asfalto/10">
              <img src={i.foto} alt={`Foto de ${i.nome}`}
                className="mx-auto h-32 w-32 rounded-full object-cover" />
              <h3 className="mt-4 text-lg font-bold">{i.nome}</h3>
              <p className="font-mono text-sm text-asfalto/70">{i.rm}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
