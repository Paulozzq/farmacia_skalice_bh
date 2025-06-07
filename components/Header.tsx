export function Header() {
  return (
    <header className="bg-zinc-900 text-green-200 p-4 flex justify-between items-center font-serif border-b border-green-700">
      <h1 className="text-2xl">⚗️ Herbolaria Skalice</h1>
      <nav className="flex gap-4 text-lg">
        <a href="/">Inicio</a>
        <a href="/medicamentos">Remedios</a>
        <a href="/medicamentos/nuevo">Agregar</a>
      </nav>
    </header>
  )
}