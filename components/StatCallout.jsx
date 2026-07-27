export default function StatCallout({ value, label }) {
  return (
    <div className="my-2 flex items-center gap-5 sm:gap-6 py-5 px-6 sm:px-7 bg-canvas border border-rule">
      <span className="font-display font-semibold text-[34px] sm:text-[40px] leading-none text-accent shrink-0">
        {value}
      </span>
      <span className="font-mono text-[11px] uppercase tracking-wider text-ink-soft leading-snug">
        {label}
      </span>
    </div>
  );
}
