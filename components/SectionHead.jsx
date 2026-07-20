export default function SectionHead({ title }) {
  return (
    <div className="flex items-baseline gap-3.5 mb-[18px]">
      <h2 className="font-display font-semibold text-[15px] uppercase tracking-widest">
        {title}
      </h2>
      <div className="flex-1 h-px bg-rule" />
    </div>
  );
}
