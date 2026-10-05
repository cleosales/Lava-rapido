import { Outlet } from 'react-router-dom'
import Cabecalho from './Cabecalho'
import Rodape from './Rodape'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-espuma font-sans text-asfalto">
      <Cabecalho />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <Outlet />
      </main>
      <Rodape />
    </div>
  )
}
