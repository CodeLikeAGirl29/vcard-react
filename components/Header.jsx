export default function Header({ resume }) {
  return (
    <header className="flex justify-between items-end border-b-[1.5px] border-ink pb-[22px] mb-2 flex-col sm:flex-row gap-3 sm:gap-0">
      <div>
        <h1 className="font-display font-semibold text-[36px] sm:text-[44px] leading-none tracking-tight">
          {resume.name}
        </h1>
        <div className="font-display italic text-[17px] text-ink-soft mt-2">
          {resume.role}
        </div>
      </div>
      <div className="font-mono text-[11px] text-ink-soft leading-loose text-left sm:text-right">
        <div>{resume.contact.email}</div>
        <div>
          {resume.contact.location} · {resume.contact.site}
        </div>
        <div>{resume.contact.linkedin}</div>
      </div>
    </header>
  );
}
