import { useState } from 'react';
import DetailModal from './DetailModal';

const experience = {
  label: 'Magang',
  org: 'PT Angkasa Pura Indonesia',
  role: 'IT Intern — IT Non-Public',
  period: 'Mar 2026 – Jun 2026',

  tags: [
  'PHP',
  'CodeIgniter 3 & 4',
  'MySQL',
  'JavaScript',
  'Software Testing',
  'Debugging',
  'Git',
  'PhpWord',
  'PhpSpreadsheet',
  'mPDF',
],

  duties: [
    'Melakukan pengujian fitur dan pengecekan fungsi aplikasi web internal untuk memastikan aplikasi berjalan sesuai kebutuhan.',
    'Mengidentifikasi, mendokumentasikan, dan membantu memperbaiki bug yang ditemukan selama proses pengujian.',
    'Mengembangkan dan memperbaiki fitur aplikasi web internal menggunakan PHP dan CodeIgniter.',
    'Melakukan verifikasi data dan pengujian fitur untuk mendukung kesiapan aplikasi sebelum digunakan dalam kegiatan operasional.',
    'Terlibat dalam pengembangan dan maintenance tiga aplikasi internal, yaitu SIDEDEN, BannerPosko, dan CGK Monitor.',
  ],

  photos: [
    {
      src: '/foto/magang/dokumentasi1.jpeg',
    },
    {
      src: '/foto/magang/dokumentasi2.jpeg',
    },
    {
      src: '/foto/magang/dokumentasi3.jpeg', 
    },
    {
      src: '/foto/magang/dokumentasi4.jpeg',
    },
    {
      src: '/foto/magang/dokumentasi5.png',
    },
    {
      src: '/foto/magang/dokumentasi6.png',
    },
    {
      src: '/foto/magang/dokumentasi7.png',
    },
    {
      src: '/foto/magang/dokumentasi8.png',
    },
    {
      src: '/foto/magang/dokumentasi9.png',
    },
    {
      src: '/foto/magang/dokumentasi10.png',
    },
    {
      src: '/foto/magang/dokumentasi11.png',
    } 
  ],
};

function Experience() {
  const { label, org, role, period, tags, duties, photos } = experience;
  const [showDocs, setShowDocs] = useState(false);

  const docItem = {
    label: 'Dokumentasi',
    period,
    title: org,
    place: role,
    photos,
  };

  return (
    <section id="pengalaman" className="px-6 md:px-10 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-3xl md:text-4xl font-extrabold tracking-tight">
          Pengalaman <span className="text-brand">Saya</span>
        </h2>

        <div className="mx-auto mt-12 grid max-w-4xl overflow-hidden rounded-3xl border border-base-line bg-surface shadow-xl shadow-blue-900/5 md:grid-cols-[2fr_3fr]">
          {/* Kiri: ringkasan pengalaman */}
          <div className="flex flex-col bg-brand p-8 text-white">
            <span className="self-start rounded-full border border-white px-3 py-1 text-[11px] font-bold uppercase tracking-wide">
              {label}
            </span>

            <h3 className="mt-5 font-display text-2xl font-extrabold leading-tight">
              {org}
            </h3>

            <p className="mt-2 font-semibold">{role}</p>
            <p className="mt-1 text-sm">{period}</p>

            <div className="mt-8 flex flex-wrap gap-2 md:mt-auto md:pt-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-brand-dark px-3 py-1 text-[11px] font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Kanan: tanggung jawab dan tautan */}
          <div className="p-8">
            <p className="text-xs font-bold uppercase tracking-wide text-ink-muted">
              Tanggung Jawab & Kontribusi
            </p>

            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-ink-muted marker:text-brand">
              {duties.map((duty) => (
                <li key={duty}>{duty}</li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
              <a
                href="#proyek"
                className="rounded text-sm font-semibold text-brand hover:text-brand-dark focus-ring"
              >
                Lihat proyek yang saya kerjakan →
              </a>

              {photos.length > 0 && (
                <button
                  onClick={() => setShowDocs(true)}
                  aria-haspopup="dialog"
                  className="rounded-full border border-base-line px-4 py-1.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand focus-ring"
                >
                  Dokumentasi
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {showDocs && (
        <DetailModal item={docItem} onClose={() => setShowDocs(false)} />
      )}
    </section>
  );
}

export default Experience;