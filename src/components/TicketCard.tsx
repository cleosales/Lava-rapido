import type { Ticket } from '../types'

interface Props {
  ticket: Ticket
  onRemover: (id: string) => void
}

export default function TicketCard({ ticket, onRemover }: Props) {
  return (
    <article className="flex items-stretch overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-asfalto/10">
      <div className="flex w-28 shrink-0 flex-col items-center justify-center bg-esponja px-2 py-3 text-center">
        <span className="text-xs font-semibold">Placa</span>
        <span className="font-mono text-lg font-extrabold tracking-wider">{ticket.placa}</span>
      </div>

      <div className="flex flex-1 flex-col gap-1 border-l-2 border-dashed border-asfalto/30 p-4">
        <h3 className="text-lg font-bold">{ticket.cliente}</h3>
        <p className="text-sm text-asfalto/80">
          {ticket.modelo} · Lavagem {ticket.tipo.toLowerCase()}
        </p>
        <button
          type="button"
          onClick={() => onRemover(ticket.id)}
          aria-label={`Excluir tíquete de ${ticket.cliente}`}
          className="mt-2 self-start rounded bg-ferrugem px-3 py-1 text-sm font-semibold text-white hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ferrugem"
        >
          Excluir tíquete
        </button>
      </div>
    </article>
  )
}
