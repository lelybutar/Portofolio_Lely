function Hero() {
  return (
    <header className="px-6 md:px-10 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-14 items-center">
        {/* Kolom kiri: teks */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-[11px] font-semibold tracking-wide text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            PORTFOLIO // 2026
          </span>

          <h1 className="mt-5 font-display text-4xl md:text-5xl font-extrabold leading-[1.15] tracking-tight">
            Hai, saya <br />
            <span className="bg-gradient-to-r from-brand to-cyan-400 bg-clip-text text-transparent">
              Lely N.F. Butarbutar
            </span>
          </h1>

          <p className="mt-4 text-ink-muted leading-relaxed max-w-md">
            Lulusan D3 Teknologi Komputer yang membangun sistem, dari sensor
            cuaca berbasis IoT sampai dashboard web untuk operasional
            perusahaan. Sedang mencari peran sebagai IT Developer atau
            Programmer.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#proyek"
              className="px-6 py-2.5 rounded-full bg-brand text-white text-sm font-semibold hover:bg-brand-dark transition-colors focus-ring"
            >
              Lihat Proyek →
            </a>
            <a
              href="#kontak"
              className="px-6 py-2.5 rounded-full bg-surface border border-base-line text-ink text-sm font-semibold hover:border-brand transition-colors focus-ring"
            >
              Hubungi Saya
            </a>
          </div>
        </div>

        {/* Kolom kanan: kartu profil */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="rounded-3xl bg-surface/80 backdrop-blur border border-base-line shadow-xl shadow-blue-900/10 p-4">
            <img
              src="/lely.jpeg"
              alt="Foto Lely N.F. Butarbutar"
              className="aspect-[4/5] w-full rounded-2xl object-cover object-top"
            />
            <div className="px-2 pt-4 pb-1">
              <p className="font-semibold">Lely N.F. Butarbutar</p>
              <p className="text-xs text-ink-muted">
               · D3 Teknologi Komputer
              </p>
            </div>
          </div>

          <span className="absolute -top-3 -right-2 flex items-center gap-2 rounded-full bg-surface shadow-md px-3 py-1.5 text-xs font-semibold">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Open for Work
          </span>
          <span className="absolute -bottom-3 -left-3 rounded-full bg-surface shadow-md px-3 py-1.5 text-xs font-semibold">
            Fresh Graduate
          </span>
        </div>
      </div>
    </header>
  );
}

export default Hero;