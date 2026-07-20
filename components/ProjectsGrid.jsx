import SectionHead from "./SectionHead";

function toHref(link) {
  if (!link || link.startsWith("[")) return "#";
  if (link.startsWith("http://") || link.startsWith("https://")) return link;
  return `https://${link}`;
}

export default function ProjectsGrid({ projects, heading = "Projects" }) {
  return (
    <section className="mb-11">
      <SectionHead title={heading} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <a
            key={i}
            href={toHref(project.link)}
            target={project.link.startsWith("[") ? undefined : "_blank"}
            rel={project.link.startsWith("[") ? undefined : "noopener noreferrer"}
            className="group border border-rule bg-card p-5 flex flex-col justify-between transition-colors hover:border-accent focus-visible:border-accent"
          >
            <div>
              <span className="font-mono text-[9.5px] uppercase tracking-wider text-lilac">
                {project.tag}
              </span>
              <h3 className="font-display font-semibold text-[16px] mt-2 mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-ink-soft">
                {project.description}
              </p>
            </div>
            <div className="font-mono text-[10.5px] text-ink-soft mt-4 group-hover:text-accent transition-colors">
              {project.link} →
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
