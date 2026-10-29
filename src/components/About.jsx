import { useState } from 'react';
import DetailModal from './DetailModal';

const timeline = [
  {
    label: 'Pendidikan',
    period: 'Agu 2023 – Sep 2026',
    title: 'D3 Teknologi Komputer',
    place: 'Institut Teknologi Del, Laguboti, Sumatera Utara',
    note: 'IPK 3.39',
    detail:
     'Selama menempuh pendidikan Teknologi Komputer, saya berkesempatan mempelajari berbagai bidang yang sebelumnya belum pernah saya kenal, mulai dari jaringan komputer, keamanan sistem, Internet of Things (IoT), pengembangan aplikasi web, hingga cloud computing. Dari berbagai bidang tersebut, saya paling tertarik pada IoT dan pengembangan aplikasi karena saya menikmati proses membangun sesuatu dari ide hingga menjadi sistem yang dapat digunakan.\n\nKetertarikan tersebut saya kembangkan melalui berbagai proyek selama perkuliahan, mulai dari aplikasi web, sistem monitoring, hingga proyek IoT. Melalui proyek-proyek tersebut, saya belajar tidak hanya tentang pemrograman, tetapi juga bagaimana merancang sistem, mengelola database, mengintegrasikan berbagai teknologi, melakukan pengujian, dan menyelesaikan masalah yang muncul selama proses pengembangan.\n\nPada tugas akhir, saya mengembangkan sistem monitoring cuaca berbasis IoT menggunakan ESP32 dan LoRa, yang dilengkapi komunikasi MQTT, Node-RED, MySQL, serta dashboard web untuk menampilkan dan memantau data cuaca.',
    photos: [
      { src: '/foto/d3tk4.png' },
      { src: '/foto/d3tk.png'},
      { src: '/foto/d3tk2.png'},
      { src: '/foto/d3tk3.png'},
    ],
  },
 {
  label: 'Organisasi',
  period: 'Agu 2025 – Jan 2026',
  title: 'Anggota Komisi E — Humas, Publikasi, dan Kekaryaan',
  place: 'Majelis Permusyawaratan Mahasiswa KM IT Del',
  note: 'Public Relations · Publication · Creative Content',
  detail:
    'Sebagai anggota Komisi E di Majelis Permusyawaratan Mahasiswa KM IT Del, saya terlibat dalam kegiatan hubungan masyarakat, publikasi informasi, dan dukungan kreatif untuk program organisasi. Saya membantu menyampaikan informasi kegiatan kepada mahasiswa serta mendukung kebutuhan komunikasi dan visual publikasi agar pesan dapat tersampaikan dengan jelas dan menarik.\n\nSalah satu pengalaman saya adalah menjadi panitia TikTok Content 2025, sebuah lomba pembuatan konten edukasi yang mengangkat nilai-nilai moral dalam kehidupan kampus. Dalam kegiatan ini, saya berkontribusi pada tim desain dan komunikasi, termasuk mendukung kebutuhan visual publikasi serta penyampaian informasi lomba kepada mahasiswa.\n\nMelalui pengalaman ini, saya belajar bekerja sama dalam tim, mengomunikasikan informasi secara efektif, mengembangkan ide kreatif, dan mendukung pelaksanaan kegiatan dari sisi publikasi maupun komunikasi.',
  photos: [
    { src: '/foto/mpm.png'},
    { src: '/foto/mpm2.png'},
    { src: '/foto/mpm3.png'},
    { src: '/foto/mpm4.png'},
  ],
}
];

function About() {
  const [selected, setSelected] = useState(null);
  return (
    <section id="tentang" className="px-6 md:px-10 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-3xl md:text-4xl font-extrabold tracking-tight">
          Tentang <span className="text-brand">Saya</span>
        </h2>

        <div className="mt-12 grid items-start gap-12 md:grid-cols-2">
          {/* Kolom kiri: perkenalan */}
          <div className="space-y-4 text-ink-muted leading-relaxed">
            <p className="text-lg font-semibold text-ink">
              Perkenalkan, saya Lely N.F. Butarbutar.
            </p>
            <p>
              Saya merupakan lulusan D3 Teknologi Komputer Institut Teknologi Del
              yang memiliki minat dan pengalaman dalam pengembangan aplikasi web.
              Saya memiliki kemampuan menggunakan PHP, CodeIgniter 3 dan 4,
              JavaScript, HTML, CSS, serta MySQL.
            </p>
            <p>
              Selama menjalani magang di PT Angkasa Pura Indonesia, saya terlibat
              dalam pengembangan dan pemeliharaan aplikasi web internal, pengujian
              fitur, debugging, serta perbaikan aplikasi sesuai kebutuhan. Saya
              juga terbiasa bekerja dengan database dan berkolaborasi dengan tim
              untuk mendukung pengembangan sistem.
            </p>
            <p>
              Saya memiliki semangat belajar yang tinggi, kemampuan problem
              solving, serta kemauan untuk terus mengembangkan keterampilan
              teknis. Saya siap berkontribusi sebagai Programmer, mempelajari
              teknologi baru sesuai kebutuhan perusahaan, dan bekerja sama dengan
              tim untuk menghasilkan aplikasi yang berkualitas.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/cv-lely.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-full bg-brand text-white text-sm font-semibold hover:bg-brand-dark transition-colors focus-ring"
              >
                Lihat CV ↗
              </a>
            </div>
          </div>

          {/* Kolom kanan: timeline */}
          <ol className="relative border-l-2 border-brand/20 pl-8 space-y-6">
            {timeline.map((item) => (
              <li key={item.title} className="relative">
                <span className="absolute -left-[41px] top-6 h-4 w-4 rounded-full border-4 border-brand bg-surface" />
                <div className="rounded-2xl bg-surface/80 backdrop-blur border border-base-line shadow-lg shadow-blue-900/5 p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-brand-soft px-2 py-0.5 text-[11px] font-semibold text-brand">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-ink-faint">{item.period}</span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-bold text-ink">{item.title}</h3>
                  <p className="text-sm text-ink-muted">{item.place}</p>
                  <p className="mt-2 text-sm font-medium text-brand">{item.note}</p>
                  {item.detail && (
                  <button
                    onClick={() => setSelected(item)}
                    aria-haspopup="dialog"
                    className="mt-3 rounded text-sm font-semibold text-brand hover:text-brand-dark focus-ring"
                  >
                    Lihat Detail →
                  </button>
                )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      {selected && (
  <DetailModal item={selected} onClose={() => setSelected(null)} />
)}
    </section>
  );
}

export default About;