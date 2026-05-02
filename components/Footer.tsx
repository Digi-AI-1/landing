export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-white font-bold text-lg tracking-tight">
          Digi<span className="text-[var(--color-primary)]">-AI</span>
        </span>
        <p className="text-[var(--color-muted)] text-sm">
          © {new Date().getFullYear()} Digi-AI. Todos los derechos reservados.
        </p>
        <div className="flex gap-6 text-sm text-[var(--color-muted)]">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
