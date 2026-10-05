import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { NovoTicket, Ticket } from '../types'

interface AgendamentoContextData {
  tickets: Ticket[]
  adicionar: (ticket: NovoTicket) => void
  remover: (id: string) => void
}

const CHAVE = 'lava-rapido:tickets'

const AgendamentoContext = createContext<AgendamentoContextData | undefined>(undefined)

function carregar(): Ticket[] {
  try {
    const salvo = localStorage.getItem(CHAVE)
    return salvo ? (JSON.parse(salvo) as Ticket[]) : []
  } catch {
    return []
  }
}

export function AgendamentoProvider({ children }: { children: ReactNode }) {
  const [tickets, setTickets] = useState<Ticket[]>(carregar)

  useEffect(() => {
    localStorage.setItem(CHAVE, JSON.stringify(tickets))
  }, [tickets])

  const adicionar = (ticket: NovoTicket) =>
    setTickets((atual) => [...atual, { ...ticket, id: crypto.randomUUID() }])

  const remover = (id: string) =>
    setTickets((atual) => atual.filter((t) => t.id !== id))

  return (
    <AgendamentoContext.Provider value={{ tickets, adicionar, remover }}>
      {children}
    </AgendamentoContext.Provider>
  )
}

export function useAgendamento() {
  const contexto = useContext(AgendamentoContext)
  if (!contexto) {
    throw new Error('useAgendamento deve ser usado dentro de AgendamentoProvider')
  }
  return contexto
}
