import { useState } from 'react';

const EMAIL = 'lelybutarbutar15@gmail.com';

const contacts = [
  { icon: '@', label: 'Email', text: EMAIL, href: `mailto:${EMAIL}` },
  {
    icon: 'in',
    label: 'LinkedIn',
    text: 'Lely N.F. Butarbutar',
    href: 'https://www.linkedin.com/in/lely-n-f-butarbutar-5b2419362',
  },
];

const inputClass =
  'w-full rounded-xl border border-base-line bg-surface px-4 py-2.5 text-sm placeholder:text-ink-faint focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="kontak" className="px-6 md:px-10 pt-20 pb-10">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-3xl md:text-4xl font-extrabold tracking-tight">
          Mari <span className="text-brand">Terhubung</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-ink-muted">
          Terbuka untuk peran IT Developer atau Programmer. Hubungi saya lewat
          salah satu kanal di bawah, saya akan merespons secepatnya.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {/* Kiri: daftar kontak */}
          <ul className="space-y-4">
            {contacts.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-4 focus-ring rounded-xl"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-sm font-bold text-brand">
                    {c.icon}
                  </span>
                  <span>
                    <span className="block text-xs text-ink-muted">{c.label}</span>
                    <span className="block text-sm font-semibold group-hover:text-brand transition-colors">
                      {c.text}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Kanan: form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl bg-surface/80 backdrop-blur border border-base-line shadow-lg shadow-blue-900/5 p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nama Lengkap"
                aria-label="Nama Lengkap"
                required
                className={inputClass}
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Alamat Email"
                aria-label="Alamat Email"
                required
                className={inputClass}
              />
            </div>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subjek Pesan"
              aria-label="Subjek Pesan"
              required
              className={inputClass}
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Pesan Anda"
              aria-label="Pesan Anda"
              rows={5}
              required
              className={inputClass}
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-brand to-cyan-500 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity focus-ring"
            >
              Kirim Pesan
            </button>
          </form>
        </div>

        <p className="mt-16 text-center text-xs text-ink-faint">
          © 2026 Lely N.F. Butarbutar
        </p>
      </div>
    </section>
  );
}

export default Contact;