export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-white font-bold text-xl tracking-tight">
          Digi<span className="text-[var(--color-primary)]">-AI</span>
        </span>
        <nav className="hidden md:flex items-center gap-8 text-sm text-[var(--color-muted)]">
          <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
          <a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a>
          <a href="#por-que" className="hover:text-white transition-colors">¿Por qué elegirnos?</a>
          <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
        </nav>
        <a
          href="#contacto"
          className="text-sm px-4 py-2 rounded-lg bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-medium transition-colors"
        >
          Hablemos
        </a>
      </div>
    </header>
  );
}
