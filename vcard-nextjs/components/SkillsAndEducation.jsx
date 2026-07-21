import { Wrench, Award, GraduationCap } from "lucide-react";
import SectionHead from "./SectionHead";

export function Skills({ skills }) {
  return (
    <section className="mb-11">
      <SectionHead title="Tools & Skills" icon={Wrench} />
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="font-mono text-[11px] px-3 py-1.5 border border-rule text-ink-soft"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export function Certifications({ certifications }) {
  return (
    <section className="mb-11">
      <SectionHead title="Certifications" icon={Award} />
      <div className="flex flex-wrap gap-2.5">
        {certifications.map((cert, i) => (
          <span
            key={i}
            className="font-mono text-[11px] px-3 py-1.5 border border-rule text-ink-soft"
          >
            {cert}
          </span>
        ))}
      </div>
    </section>
  );
}

export function Education({ education }) {
  return (
    <section className="mb-3">
      <SectionHead title="Education" icon={GraduationCap} />
      <div className="flex flex-col gap-4">
        {education.map((edu, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row justify-between text-[13.5px] gap-1"
          >
            <div>
              <div className="font-bold">{edu.school}</div>
              <div className="text-ink-soft mt-0.5">{edu.program}</div>
            </div>
            <div className="font-mono text-[10.5px] text-ink-soft whitespace-nowrap">
              {edu.dates}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
