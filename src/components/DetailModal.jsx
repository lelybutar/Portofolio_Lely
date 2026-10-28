import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

function DetailModal({ item, onClose }) {
  const [index, setIndex] = useState(0);
  const photos = item.photos ?? [];
  const total = photos.length;

  const go = (step) => setIndex((i) => (i + step + total) % total);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (total > 1 && e.key === 'ArrowRight') setIndex((i) => (i + 1) % total);
      if (total > 1 && e.key === 'ArrowLeft') setIndex((i) => (i - 1 + total) % total);
    };
    document.addEventListener('keydown', onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, total]);

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-3 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-title"
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[94vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-surface p-5 shadow-2xl sm:p-8"
      >
        <button
          onClick={onClose}
          aria-label="Tutup"
          className="absolute right-4 top-4 h-9 w-9 rounded-full text-ink-muted hover:bg-brand-soft hover:text-ink transition-colors focus-ring"
        >
          ✕
        </button>

        <div className="flex flex-wrap items-center gap-2 pr-10">
          <span className="rounded-md bg-brand-soft px-2 py-0.5 text-xs font-semibold text-brand">
            {item.label}
          </span>
          <span className="text-xs text-ink-muted">{item.period}</span>
        </div>
        <h3 id="detail-title" className="mt-3 pr-10 font-display text-2xl font-bold text-ink">
          {item.title}
        </h3>
        {item.place && <p className="text-base text-ink">{item.place}</p>}

        {total > 0 && (
          <div className="relative mt-5 overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {photos.map((p, i) => (
                <img
                  key={p.src}
                  src={p.src}
                  alt={p.alt ?? `${item.title}, foto ${i + 1}`}
                  loading="lazy"
                  className={`h-[45vh] w-full shrink-0 sm:h-[60vh] ${
                    item.fit === 'contain' ? 'bg-brand-soft/60 object-contain' : 'object-cover'
                  }`}
                />
              ))}
            </div>

            {total > 1 && (
              <>
                <button
                  onClick={() => go(-1)}
                  aria-label="Foto sebelumnya"
                  className="absolute left-2 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full bg-surface/90 text-lg shadow hover:bg-surface focus-ring"
                >
                  ‹
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Foto berikutnya"
                  className="absolute right-2 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full bg-surface/90 text-lg shadow hover:bg-surface focus-ring"
                >
                  ›
                </button>
                <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
                  {photos.map((p, i) => (
                    <button
                      key={p.src}
                      onClick={() => setIndex(i)}
                      aria-label={`Lihat foto ${i + 1}`}
                      aria-current={i === index}
                      className={`h-2 rounded-full shadow transition-all ${
                        i === index ? 'w-5 bg-brand' : 'w-2 bg-ink/30 hover:bg-ink/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {item.detail && (
          <p className="mt-6 whitespace-pre-line text-base leading-relaxed text-ink sm:text-lg">
            {item.detail}
          </p>
        )}

        {item.stack?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {item.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-base-line bg-surface px-3 py-1 text-sm font-medium text-ink"
              >
                {s}
              </span>
            ))}
          </div>
        )}

        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus-ring"
          >
            Buka Proyek ↗
          </a>
        )}
      </div>
    </div>,
    document.body
  );
}

export default DetailModal;
