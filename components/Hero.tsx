export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-3 py-1 rounded-full border border-[var(--color-cyan)]/30 bg-[var(--color-cyan)]/10 text-[var(--color-cyan)] text-sm font-medium">
          Consultoría Digital para empresas argentinas
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Transformá tu empresa<br />
          con <span className="text-[var(--color-primary)]">inteligencia digital</span>
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-muted)] max-w-2xl mx-auto mb-10">
          Ayudamos a negocios argentinos a crecer con estrategia digital, tecnología e inteligencia artificial.
          Resultados reales, sin vueltas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="px-8 py-4 rounded-lg bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold text-lg transition-colors"
          >
            Empezá hoy
          </a>
          <a
            href="#servicios"
            className="px-8 py-4 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 text-white font-semibold text-lg transition-colors"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
