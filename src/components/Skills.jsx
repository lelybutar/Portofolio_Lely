const groups = [
  {
    label: 'Web Development',
    items: [
      'PHP',
      'JavaScript',
      'HTML',
      'CSS',
      'CodeIgniter 3 & 4',
      'REST API',
      'Tailwind CSS',
    ],
  },
  {
    label: 'Database & Testing',
    items: [
      'MySQL',
      'PostgreSQL',
      'Database Management',
      'Software Testing',
      'Debugging',
      'Bug Reporting',
    ],
  },
  {
    label: 'Tools & Technologies',
    items: [
      'Git',
      'GitHub',
      'PhpWord',
      'PhpSpreadsheet',
      'mPDF',
      'Dompdf',
      'Chart.js',
    ],
  },
];

function Skills() {
  return (
    <section id="keahlian" className="px-6 md:px-10 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-3xl md:text-4xl font-extrabold tracking-tight">
          Keahlian <span className="text-brand">Saya</span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {groups.map((g) => (
            <div
              key={g.label}
              className="rounded-2xl bg-surface/80 backdrop-blur border border-surface shadow-lg shadow-blue-900/5 p-6"
            >
              <h3 className="font-display text-lg font-bold">
                {g.label}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;