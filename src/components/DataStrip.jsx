const readings = [
];

function DataStrip() {
  const loop = [...readings, ...readings];
  return (
    <div className="w-full overflow-hidden border-b border-base-line bg-base-panel/60">
      <div className="flex whitespace-nowrap py-2 animate-[scroll_32s_linear_infinite] motion-reduce:animate-none">
        {loop.map((item, i) => (
          <span
            key={i}
            className="mx-4 font-mono text-[11px] tracking-wide text-ink-faint"
          >
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default DataStrip;
