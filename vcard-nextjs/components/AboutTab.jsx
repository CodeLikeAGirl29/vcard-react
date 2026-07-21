import { User } from "lucide-react";
import SectionHead from "./SectionHead";
import ImpactStrip from "./ImpactStrip";
import TechStack from "./TechStack";

export default function AboutTab({ resume }) {
  return (
    <div>
      <SectionHead title="About" icon={User} />
      <p className="font-display text-[19px] sm:text-[22px] font-medium leading-relaxed max-w-[620px] mb-6">
        {resume.thesis}
      </p>
      <p className="text-[14px] leading-relaxed text-ink-soft max-w-[620px] mb-10">
        {resume.bio}
      </p>
      <ImpactStrip items={resume.impact} />
      <TechStack stack={resume.techStack} />
    </div>
  );
}
