import { useState } from 'react';
import DetailModal from './DetailModal';

const KAMPUS = '/foto/projectkampus';
const MAGANG = '/foto/projectmagang';

const projects = [
  {
    tag: 'TUGAS AKHIR',
    category: 'Kampus',
    title: 'IoT Weather Monitoring System',
    desc: 'Sistem monitoring cuaca berbasis jaringan sensor ESP32 dan LoRa, dengan dashboard web untuk data realtime dan riwayat pengukuran.',
    detail:
      'Sistem monitoring cuaca berbasis jaringan sensor ESP32 yang mengukur suhu, kelembapan, intensitas cahaya, curah hujan, dan kecepatan angin. Data dari node sensor dikirim melalui LoRa SX1278 ke gateway ESP32, kemudian diteruskan menggunakan MQTT dan Node-RED untuk diproses dan disimpan ke MySQL. Data ditampilkan melalui dashboard web untuk monitoring realtime dan riwayat pengukuran, dengan perangkat lapangan didukung sistem tenaga surya.',
    stack: ['ESP32', 'LoRa', 'DHT22', 'Anemometer', 'BH1750', 'Raingau', 'MQTT', 'Node-RED', 'MySQL', 'PHP', 'JavaScript'],
    photos: [
      { src: `${KAMPUS}/weather.png`, alt: 'Arsitektur sistem: node sensor, gateway, server, dan dashboard web' },
      { src: `${KAMPUS}/weather2.png`, alt: 'Skema rangkaian node sensor dengan panel surya' },
      { src: `${KAMPUS}/weather3.png`, alt: 'Dashboard realtime monitoring cuaca' },
      { src: `${KAMPUS}/weather4.png`, alt: 'Grafik data sensor pada dashboard' },
      { src: `${KAMPUS}/weather5.png`, alt: 'Halaman riwayat pengukuran' },
      { src: `${KAMPUS}/weather6.png`, alt: 'Flow Node-RED untuk MQTT dan penyimpanan ke database' },
    ],
    link: null,
  },
  {
    tag: 'IOT · 2024',
    category: 'Kampus',
    title: 'Automatic Barrier System (RFID)',
    desc: 'Palang pintu otomatis berbasis Arduino, RFID, dan sensor ultrasonik dengan umpan balik buzzer.',
    detail:
      'Mengembangkan sistem palang pintu otomatis menggunakan Arduino, autentikasi RFID, dan sensor ultrasonik. Sistem memvalidasi kartu RFID yang terdaftar, mendeteksi kendaraan yang mendekat, dan menggerakkan lengan palang dengan motor servo secara presisi. Umpan balik audio-visual diberikan melalui buzzer dan indikator saat akses diterima atau ditolak.\n\nProyek ini meningkatkan keamanan karena hanya pengguna yang berwenang yang dapat masuk, meningkatkan efisiensi dengan menghilangkan kerja manual, dan menunjukkan kinerja yang konsisten pada berbagai skenario pengujian.',
    stack: ['Arduino', 'RFID Module', 'Ultrasonic Sensor', 'Servo Motor', 'C/C++', 'Buzzer'],
    photos: [
      { src: `${KAMPUS}/IOT.png`, alt: 'Prototipe palang pintu otomatis dengan modul RFID' },
      { src: `${KAMPUS}/IOT2.jpg`, alt: 'Diagram blok sistem' },
      { src: `${KAMPUS}/IOT3.jpg`, alt: 'Skema rangkaian di Fritzing' },
      { src: `${KAMPUS}/IOT4.png`, alt: 'Flowchart alur kerja sistem' },
    ],
    link: null,
  },
  {
    tag: 'WEB · 2024',
    category: 'Kampus',
    title: 'Website Informasi Apotek Porsea-Balige',
    desc: 'Website informasi apotek untuk mencari dan membandingkan harga obat di wilayah Porsea-Balige.',
    detail:
      'Membangun website informasi apotek menggunakan WordPress dan XAMPP, yang membantu pengguna menemukan dan membandingkan harga obat di berbagai apotek di wilayah Porsea-Balige. Platform ini menyediakan informasi apotek yang dikelompokkan berdasarkan lokasi, sehingga pengguna lebih mudah menemukan apotek terdekat.',
    stack: ['WordPress', 'XAMPP', 'PHP', 'MySQL', 'CSS'],
    photos: [
      { src: `${KAMPUS}/apotek.png`, alt: 'Halaman beranda website informasi apotek' },
      { src: `${KAMPUS}/apotek2.png`, alt: 'Daftar apotek dan tabel perbandingan harga obat' },
      { src: `${KAMPUS}/apotek3.png`, alt: 'Halaman tentang kami' },
    ],
    link: null,
  },
  {
    tag: 'MAGANG',
    category: 'Magang',
    title: 'SIDEDEN',
    desc: 'Aplikasi web untuk mendigitalisasi pengisian, pembuatan, dan pengelolaan dokumen pengadaan di unit IT Non-Public Services PT Angkasa Pura Indonesia.',
    detail:
      'Aplikasi web untuk mendigitalisasi proses pengisian, pembuatan, dan pengelolaan dokumen pengadaan di unit IT Non-Public Services PT Angkasa Pura Indonesia. Pengguna mengisi data melalui form terstruktur, kemudian sistem menghasilkan dokumen Word dan PDF berdasarkan template. Dilengkapi pengelolaan file, tanda tangan digital, arsip dokumen, activity log, serta akses pengguna berbasis role.',
    stack: ['CodeIgniter 4', 'PHP', 'MySQL', 'Tailwind CSS', 'PhpWord', 'mPDF', 'LibreOffice', 'Git'],
    photos: [
    { src: `${MAGANG}/1.png` },
    { src: `${MAGANG}/2.png` },
    { src: `${MAGANG}/3.png` },
    { src: `${MAGANG}/4.png` },
    { src: `${MAGANG}/5.png` },
    { src: `${MAGANG}/6.png` },
    { src: `${MAGANG}/7.png` },
    { src: `${MAGANG}/8.png` },
    { src: `${MAGANG}/9.png` },
    { src: `${MAGANG}/10.png` },
    { src: `${MAGANG}/11.png` },
    { src: `${MAGANG}/12.png` },
    { src: `${MAGANG}/13.png` },
    { src: `${MAGANG}/14.png` },
    { src: `${MAGANG}/15.png` },
    ],
    link: null,
  },
  {
    tag: 'MAGANG',
    category: 'Magang',
    title: 'BannerPosko',
    desc: 'Aplikasi web untuk mengelola dan menampilkan konten banner digital pada layar informasi di lingkungan operasional bandara.',
    detail:
      'Aplikasi web untuk mengelola dan menampilkan konten banner digital pada layar informasi di lingkungan operasional bandara. Admin dapat mengunggah gambar, video, atau YouTube link, mengatur jadwal tayang, mengatur interval slideshow dan running text, serta melakukan preview sebelum konten ditampilkan. Sistem secara otomatis mengaktifkan dan menonaktifkan banner berdasarkan jadwal yang telah ditentukan.',
    stack: ['CodeIgniter 3', 'PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    photos: [
      { src: `${MAGANG}/banner1.png` },
      { src: `${MAGANG}/banner2.png` },
      { src: `${MAGANG}/banner3.png` },
      { src: `${MAGANG}/banner4.png` },
      { src: `${MAGANG}/banner5.png` },
      { src: `${MAGANG}/banner6.png` },
      { src: `${MAGANG}/banner7.png` },
      { src: `${MAGANG}/banner8.png` },
      { src: `${MAGANG}/banner9.png` },
      { src: `${MAGANG}/banner10.png` },
    ],
    link: null,
  },
  {
    tag: 'MAGANG',
    category: 'Magang',
    title: 'CGK Monitor',
    desc: 'Dashboard monitoring untuk memantau maintenance printer serta penggunaan dan ketersediaan toner atau tinta.',
    detail:
      'Dashboard monitoring untuk membantu tim IT memantau aktivitas maintenance printer serta penggunaan dan ketersediaan toner atau tinta. Setiap printer terhubung dengan QR code untuk mempercepat pencatatan maintenance dan memastikan data tercatat pada perangkat yang tepat. Sistem menyediakan dashboard statistik, riwayat maintenance, monitoring stok dan proses toner, filter laporan berdasarkan periode, serta ekspor laporan ke Excel dan PDF.',
    stack: ['CodeIgniter 3', 'PHP', 'MySQL', 'Chart.js', 'QR Code', 'PhpSpreadsheet', 'Dompdf'],
    photos: [
      { src: `${MAGANG}/monitoring1.png` },
      { src: `${MAGANG}/monitoring2.png` },
      { src: `${MAGANG}/monitoring3.png` },
      { src: `${MAGANG}/monitoring4.png` },
      { src: `${MAGANG}/monitoring5.png` },
      { src: `${MAGANG}/monitoring6.png` },
      { src: `${MAGANG}/monitoring7.png` },
      { src: `${MAGANG}/monitoring8.png` },
      { src: `${MAGANG}/monitoring9.png` },
      { src: `${MAGANG}/monitoring10.png` }
    ],
    link: null,
  },
];

const filters = ['Semua', 'Magang', 'Kampus'];
const MAX_TAGS = 4;

function Projects() {
  const [filter, setFilter] = useState('Semua');
  const [active, setActive] = useState(null);

  const shown =
    filter === 'Semua'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="proyek" className="px-6 md:px-10 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-3xl md:text-4xl font-extrabold tracking-tight">
          Proyek <span className="text-brand">Saya</span>
        </h2>

        {/* Tab filter */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors focus-ring ${
                filter === f
                  ? 'bg-brand text-white shadow-md shadow-brand/30'
                  : 'bg-surface border border-base-line text-ink-muted hover:border-brand'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Kartu proyek */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-2xl bg-surface/80 backdrop-blur border border-base-line shadow-lg shadow-blue-900/5 p-6 transition-transform hover:-translate-y-1"
            >
              <span className="self-start rounded-md bg-brand-soft px-2 py-0.5 text-[11px] font-semibold text-brand">
                {p.tag}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold">{p.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm text-ink-muted leading-relaxed">
                {p.desc}
              </p>

              {/* Bagian bawah selalu menempel di dasar kartu */}
              <div className="mt-auto pt-4">
                <div className="flex flex-wrap gap-2">
                  {p.stack.slice(0, MAX_TAGS).map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-base-line bg-surface px-2.5 py-1 text-[11px] font-medium text-ink-muted"
                    >
                      {s}
                    </span>
                  ))}
                  {p.stack.length > MAX_TAGS && (
                    <span className="rounded-full bg-brand-soft px-2.5 py-1 text-[11px] font-semibold text-brand">
                      +{p.stack.length - MAX_TAGS}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setActive(p)}
                  aria-haspopup="dialog"
                  className="mt-5 rounded text-sm font-semibold text-brand hover:text-brand-dark focus-ring"
                >
                  Selengkapnya →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {active && (
        <DetailModal
          item={{
            label: active.tag,
            period: active.category,
            title: active.title,
            detail: active.detail ?? active.desc,
            stack: active.stack,
            photos: active.photos,
            link: active.link,
            fit: 'contain',
          }}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  );
}

export default Projects;