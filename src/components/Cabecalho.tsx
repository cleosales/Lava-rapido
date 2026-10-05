import { NavLink } from 'react-router-dom'
import { useAgendamento } from '../context/AgendamentoContext'

export default function Cabecalho() {
  const { tickets } = useAgendamento()
  const total = tickets.length

  const classeLink = ({ isActive }: { isActive: boolean }) =>
    `rounded-md px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-esponja ${
      isActive ? 'bg-esponja text-asfalto' : 'text-white hover:bg-white/15'
    }`

  return (
    <header className="bg-agua-escuro">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-3">
        <NavLink to="/" className="flex items-center gap-2 text-xl font-extrabold text-white">
          <img src="/img/favicon.svg" alt="" className="h-8 w-8" />
          Lava-Rápido Espuma
        </NavLink>

        <nav aria-label="Menu principal" className="flex items-center gap-1">
          <NavLink to="/" end className={classeLink}>Home</NavLink>
          <NavLink to="/agendamentos" className={classeLink}>Agendamentos</NavLink>
          <NavLink to="/sobre" className={classeLink}>Sobre</NavLink>
        </nav>

        <p
          className="rounded-full bg-white px-4 py-1 text-sm font-semibold text-asfalto"
          aria-live="polite"
        >
          {total === 0
            ? 'Nenhum carro aguardando'
            : `${total} ${total === 1 ? 'carro aguardando' : 'carros aguardando'} lavagem`}
        </p>
      </div>
    </header>
  )
}
