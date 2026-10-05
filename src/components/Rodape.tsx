export default function Rodape() {
  return (
    <footer className="bg-asfalto text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Lava-Rápido Espuma. Todos os direitos reservados.</p>
        <address className="not-italic">
          Rua das Espumas, 123 · São Paulo/SP · (11) 99999-9999
        </address>
        <p>Seg a Sáb, das 8h às 18h</p>
      </div>
    </footer>
  )
}
