export default function Pullquote({ quote, cite }) {
  return (
    <blockquote className="my-2 pl-6 sm:pl-8 border-l-2 border-accent">
      <p className="font-display italic text-[19px] sm:text-[22px] leading-snug text-ink">
        “{quote}”
      </p>
      {cite && (
        <cite className="block not-italic font-mono text-[11px] uppercase tracking-wider text-ink-soft mt-3">
          — {cite}
        </cite>
      )}
    </blockquote>
  );
}
