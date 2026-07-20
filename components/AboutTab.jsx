import SectionHead from "./SectionHead";
import ImpactStrip from "./ImpactStrip";

export default function AboutTab({ resume }) {
  return (
    <div>
      <SectionHead title="About" />
      <p className="font-display text-[19px] sm:text-[22px] font-medium leading-relaxed max-w-[620px] mb-6">
        {resume.thesis}
      </p>
      <p className="text-[14px] leading-relaxed text-ink-soft max-w-[620px] mb-10">
        {resume.bio}
      </p>
      <ImpactStrip items={resume.impact} />
    </div>
  );
}
