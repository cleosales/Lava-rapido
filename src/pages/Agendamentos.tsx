import { useState, type FormEvent } from 'react'
import { useAgendamento } from '../context/AgendamentoContext'
import TicketCard from '../components/TicketCard'
import { TIPOS_LAVAGEM, type TipoLavagem } from '../types'

const campo =
  'w-full rounded-md border border-asfalto/30 bg-white px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-agua'

export default function Agendamentos() {
  const { tickets, adicionar, remover } = useAgendamento()
  const [cliente, setCliente] = useState('')
  const [modelo, setModelo] = useState('')
  const [placa, setPlaca] = useState('')
  const [tipo, setTipo] = useState<TipoLavagem>('Simples')

  const enviar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    adicionar({
      cliente: cliente.trim(),
      modelo: modelo.trim(),
      placa: placa.trim().toUpperCase(),
      tipo,
    })
    setCliente('')
    setModelo('')
    setPlaca('')
    setTipo('Simples')
  }

  return (
    <section className="grid gap-8 md:grid-cols-2" aria-labelledby="titulo-agendamentos">
      <form onSubmit={enviar} className="h-fit space-y-4 rounded-lg bg-white p-6 ring-1 ring-asfalto/10">
        <h2 id="titulo-agendamentos" className="text-2xl font-extrabold">Novo agendamento</h2>

        <div>
          <label htmlFor="cliente" className="mb-1 block text-sm font-semibold">Nome do cliente</label>
          <input id="cliente" name="cliente" type="text" required autoComplete="name"
            value={cliente} onChange={(e) => setCliente(e.target.value)} className={campo} />
        </div>

        <div>
          <label htmlFor="modelo" className="mb-1 block text-sm font-semibold">Modelo do carro</label>
          <input id="modelo" name="modelo" type="text" required
            value={modelo} onChange={(e) => setModelo(e.target.value)} className={campo} />
        </div>

        <div>
          <label htmlFor="placa" className="mb-1 block text-sm font-semibold">Placa</label>
          <input id="placa" name="placa" type="text" required maxLength={7} minLength={7}
            pattern="[A-Za-z]{3}[0-9][A-Za-z0-9][0-9]{2}"
            title="Formato da placa: ABC1D23 ou ABC1234"
            placeholder="ABC1D23"
            value={placa} onChange={(e) => setPlaca(e.target.value)}
            className={`${campo} font-mono uppercase`} />
        </div>

        <div>
          <label htmlFor="tipo" className="mb-1 block text-sm font-semibold">Tipo de lavagem</label>
          <select id="tipo" name="tipo" value={tipo}
            onChange={(e) => setTipo(e.target.value as TipoLavagem)} className={campo}>
            {TIPOS_LAVAGEM.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <button type="submit"
          className="w-full rounded-md bg-agua px-4 py-2 font-bold text-white hover:bg-agua-escuro focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-agua">
          Criar tíquete
        </button>
      </form>

      <div>
        <h2 className="mb-4 text-2xl font-extrabold">Fila de lavagem ({tickets.length})</h2>
        {tickets.length === 0 ? (
          <p className="rounded-lg border-2 border-dashed border-asfalto/30 p-6 text-asfalto/70">
            Nenhum carro na fila. Preencha o formulário para criar o primeiro tíquete.
          </p>
        ) : (
          <ul className="space-y-3">
            {tickets.map((t) => (
              <li key={t.id}><TicketCard ticket={t} onRemover={remover} /></li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
