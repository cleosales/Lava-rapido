import { Link } from 'react-router-dom'

const servicos = [
  { nome: 'Simples', descricao: 'Lavagem externa com shampoo neutro e secagem.', preco: 'R$ 40' },
  { nome: 'Completa', descricao: 'Externa e interna: aspiração, painel e vidros.', preco: 'R$ 80' },
  { nome: 'Polimento', descricao: 'Lavagem completa e polimento com cera de carnaúba.', preco: 'R$ 180' },
]

const depoimentos = [
  { nome: 'Carlos Silva', carro: 'Honda Civic', texto: 'Entreguei sujo de lama e peguei o carro parecendo zero. Atendimento muito bom.', foto: '/img/carro1.svg' },
  { nome: 'Ana Souza', carro: 'Fiat Argo', texto: 'Agendei pelo site, cheguei e já estava tudo pronto. Rápido e com preço justo.', foto: '/img/carro2.svg' },
  { nome: 'Marcos Lima', carro: 'VW Gol', texto: 'O polimento tirou riscos que eu achava que eram permanentes. Recomendo.', foto: '/img/carro3.svg' },
]

export default function Home() {
  return (
    <>
      <section className="grid items-center gap-8 rounded-2xl bg-agua px-6 py-12 text-white md:grid-cols-2 md:px-12">
        <div>
          <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Seu carro sai daqui brilhando.
          </h2>
          <p className="mt-4 max-w-md text-lg text-white/90">
            Lavagem simples, completa e polimento feitos por quem entende de carro. Agende o horário e acompanhe a fila pelo site.
          </p>
          <Link
            to="/agendamentos"
            className="mt-8 inline-block rounded-lg bg-esponja px-6 py-3 font-bold text-asfalto hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Agendar lavagem
          </Link>
        </div>
        <img
          src="/img/hero.svg"
          alt="Ilustração de um carro sendo lavado com espuma"
          className="w-full rounded-xl"
        />
      </section>

      <section className="mt-14" aria-labelledby="titulo-servicos">
        <h2 id="titulo-servicos" className="mb-6 text-3xl font-extrabold">Nossos serviços</h2>
        <ul className="grid gap-4 md:grid-cols-3">
          {servicos.map((s) => (
            <li key={s.nome} className="rounded-lg bg-white p-6 ring-1 ring-asfalto/10">
              <h3 className="text-xl font-bold">{s.nome}</h3>
              <p className="mt-2 text-asfalto/80">{s.descricao}</p>
              <p className="mt-4 text-2xl font-extrabold text-agua-escuro">{s.preco}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14" aria-labelledby="titulo-depoimentos">
        <h2 id="titulo-depoimentos" className="mb-6 text-3xl font-extrabold">
          Quem lavou aqui, aprovou
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {depoimentos.map((d) => (
            <figure key={d.nome} className="overflow-hidden rounded-lg bg-white ring-1 ring-asfalto/10">
              <img
                src={d.foto}
                alt={`${d.carro} de ${d.nome} depois da lavagem`}
                className="h-44 w-full object-cover"
              />
              <figcaption className="p-5">
                <blockquote className="text-asfalto/90">“{d.texto}”</blockquote>
                <p className="mt-3 font-bold text-agua-escuro">{d.nome}</p>
                <p className="text-sm text-asfalto/70">{d.carro}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}
