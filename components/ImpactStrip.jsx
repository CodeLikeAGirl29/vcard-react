export default function ImpactStrip({ items }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-b border-rule py-[26px] mb-11 gap-y-5">
      {items.map((item, i) => (
        <div
          key={i}
          className={`px-5 text-center first:pl-0 ${i !== 0 ? "sm:border-l sm:border-rule" : ""} ${
            i % 2 !== 0 ? "" : "border-l-0 sm:border-l"
          }`}
        >
          <div className="font-display font-semibold text-[20px] sm:text-[22px] text-accent leading-none">
            {item.metric}
          </div>
          <div className="font-mono text-[10px] uppercase tracking-wider text-ink-soft mt-2 leading-relaxed">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
