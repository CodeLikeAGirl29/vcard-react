"use client";

const TABS = ["About", "Resume", "Projects", "Contact"];

export default function Sidebar({ resume, activeTab, setActiveTab }) {
  return (
    <aside className="lg:w-[280px] lg:shrink-0 bg-ink text-paper lg:sticky lg:top-0 lg:h-screen flex flex-col">
      <div className="p-8 flex flex-col items-center text-center border-b border-white/10">
        <div className="w-24 h-24 rounded-full bg-accent/90 text-paper font-display font-semibold text-2xl flex items-center justify-center mb-5">
          {resume.initials}
        </div>
        <h1 className="font-display font-semibold text-xl leading-tight">
          {resume.name}
        </h1>
        <div className="font-mono text-[11px] uppercase tracking-widest text-accent mt-2">
          {resume.role}
        </div>

        <div className="font-mono text-[11px] text-paper/60 mt-5 space-y-1">
          <div>{resume.location}</div>
          <div>{resume.availability}</div>
        </div>

        <a
          href={resume.resumeUrl.startsWith("[") ? "#" : resume.resumeUrl}
          className="mt-6 w-full font-mono text-[10.5px] uppercase tracking-wider border border-paper/30 py-2.5 hover:bg-paper hover:text-ink transition-colors"
        >
          Download CV
        </a>
        <button
          onClick={() => setActiveTab("Contact")}
          className="mt-2.5 w-full font-mono text-[10.5px] uppercase tracking-wider bg-accent text-paper py-2.5 hover:bg-paper hover:text-accent transition-colors"
        >
          Hire Me
        </button>

        <div className="flex gap-4 mt-6 font-mono text-[10px] uppercase tracking-wider text-paper/50">
          {resume.socials.map((s) => (
            <a
              key={s.label}
              href={s.href.startsWith("[") ? "#" : s.href}
              className="hover:text-accent transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <nav className="flex lg:flex-col flex-1">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            aria-current={activeTab === tab ? "page" : undefined}
            className={`flex-1 lg:flex-none text-left px-8 py-4 font-mono text-[11px] uppercase tracking-widest border-b border-white/10 lg:border-b-0 lg:border-l-2 transition-colors ${
              activeTab === tab
                ? "border-accent text-accent bg-white/5"
                : "border-transparent text-paper/60 hover:text-paper hover:bg-white/5"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </aside>
  );
}
