import { Briefcase } from "lucide-react";
import SectionHead from "./SectionHead";

export default function Experience({ jobs }) {
  return (
    <section className="mb-11">
      <SectionHead title="Experience" icon={Briefcase} />
      {jobs.map((job, i) => (
        <div key={i} className="grid grid-cols-1 sm:grid-cols-[170px_1fr] gap-3 sm:gap-5 mb-6">
          <div>
            <div className="font-bold text-[14.5px]">{job.company}</div>
            <div className="font-mono text-[10.5px] text-ink-soft mt-1">
              {job.dates}
            </div>
          </div>
          <div>
            <div className="font-display italic text-lilac text-sm mb-2">
              {job.title}
            </div>
            <ul className="list-disc pl-[18px] text-[13.5px] leading-relaxed marker:text-accent">
              {job.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
