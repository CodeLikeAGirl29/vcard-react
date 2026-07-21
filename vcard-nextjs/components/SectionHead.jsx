export default function SectionHead({ title, icon: Icon }) {
  return (
    <div className="flex items-center gap-3.5 mb-[18px]">
      {Icon && <Icon size={16} className="text-accent shrink-0" />}
      <h2 className="font-display font-semibold text-[15px] uppercase tracking-widest">
        {title}
      </h2>
      <div className="flex-1 h-px bg-rule" />
    </div>
  );
}
