
import { useState } from 'react';

const links = [
  { href: '#top', label: 'Home' },
  { href: '#tentang', label: 'Tentang' },
  { href: '#pengalaman', label: 'Pengalaman' },
  { href: '#proyek', label: 'Proyek' },
  { href: '#kontak', label: 'Kontak' },
];

function Nav() {
  const [active, setActive] = useState('#top');
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 inset-x-0 z-50 px-4">
      <div className="mx-auto max-w-3xl flex items-center justify-between rounded-full bg-surface/80 backdrop-blur border border-base-line shadow-lg shadow-blue-900/5 px-4 py-2">
        {/* Nama */}
        <a
          href="#top"
          onClick={() => {
            setActive('#top');
            setOpen(false);
          }}
          className="whitespace-nowrap pl-2 font-display text-sm font-bold tracking-tight text-black focus-ring rounded-full md:text-base"
        >
          Lely N.F. Butarbutar
          <span className="hidden font-bold text-black lg:inline">
            {' '}A.Md.T.
          </span>
        </a>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setActive(l.href)}
                className={`block px-4 py-1.5 rounded-full text-sm font-medium transition-colors focus-ring ${
                  active === l.href
                    ? 'bg-brand text-white'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Tombol Mobile */}
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          className="md:hidden px-3 py-1.5 text-sm font-medium text-ink-muted rounded-full focus-ring"
        >
          {open ? 'Tutup' : 'Menu'}
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <ul className="md:hidden mx-auto max-w-3xl mt-2 rounded-3xl bg-surface/90 backdrop-blur border border-base-line shadow-lg shadow-blue-900/5 p-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => {
                  setActive(l.href);
                  setOpen(false);
                }}
                className={`block px-4 py-2.5 rounded-2xl text-sm font-medium ${
                  active === l.href
                    ? 'bg-brand text-white'
                    : 'text-ink-muted'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Nav;
