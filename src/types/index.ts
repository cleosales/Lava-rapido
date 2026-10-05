export const TIPOS_LAVAGEM = ['Simples', 'Completa', 'Polimento'] as const

export type TipoLavagem = (typeof TIPOS_LAVAGEM)[number]

export interface Ticket {
  id: string
  cliente: string
  modelo: string
  placa: string
  tipo: TipoLavagem
}

export type NovoTicket = Omit<Ticket, 'id'>
