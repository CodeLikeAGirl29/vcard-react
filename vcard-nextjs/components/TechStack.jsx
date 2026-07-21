import * as Si from "react-icons/si";
import SectionHead from "./SectionHead";

// Namespace import + lookup (rather than named imports) so this keeps working
// even if a specific icon name shifts between react-icons versions.
const ICONS = {
  javascript: Si.SiJavascript,
  typescript: Si.SiTypescript,
  react: Si.SiReact,
  nextdotjs: Si.SiNextdotjs,
  tailwindcss: Si.SiTailwindcss,
  nodedotjs: Si.SiNodedotjs,
  html5: Si.SiHtml5,
  css3: Si.SiCss3 || Si.SiCss,
  postgresql: Si.SiPostgresql,
};

export default function TechStack({ stack }) {
  return (
    <section className="mb-11">
      <SectionHead title="Tech Stack" />
      <div className="grid grid-cols-5 sm:grid-cols-9 gap-2">
        {stack.map((tech, i) => {
          const Icon = ICONS[tech.icon];
          return (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <div className="w-10 h-10 rounded-full bg-card border border-rule flex items-center justify-center">
                {Icon && <Icon size={18} color={tech.color} />}
              </div>
              <span className="font-mono text-[8px] uppercase tracking-wide text-ink-soft text-center leading-tight">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
