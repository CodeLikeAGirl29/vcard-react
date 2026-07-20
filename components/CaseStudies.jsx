import SectionHead from "./SectionHead";

export default function CaseStudies({ studies }) {
  return (
    <section className="mb-11">
      <SectionHead title="Case Studies" />
      {studies.map((cs, i) => (
        <div key={i} className="bg-card border border-rule px-[30px] py-7 mb-5">
          <span className="inline-block font-mono text-[10px] uppercase tracking-wider text-accent border border-accent px-2 py-[3px] mb-3">
            Case Study
          </span>
          <h3 className="font-display font-semibold text-[20px] mb-1.5">
            {cs.title}
          </h3>
          <div className="text-[13px] text-ink-soft mb-4">{cs.subtitle}</div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-4">
            <div>
              <div className="font-mono text-[9.5px] uppercase tracking-wider text-lilac mb-1">
                Problem
              </div>
              <div className="text-[13px] leading-relaxed">{cs.problem}</div>
            </div>
            <div>
              <div className="font-mono text-[9.5px] uppercase tracking-wider text-lilac mb-1">
                Approach
              </div>
              <div className="text-[13px] leading-relaxed">{cs.approach}</div>
            </div>
            <div>
              <div className="font-mono text-[9.5px] uppercase tracking-wider text-lilac mb-1">
                Constraints
              </div>
              <div className="text-[13px] leading-relaxed">{cs.constraints}</div>
            </div>
          </div>

          <div className="border-t border-dashed border-rule pt-3.5 text-[13.5px] leading-relaxed">
            <span className="font-mono font-medium text-accent">Result: </span>
            {cs.result}
          </div>
        </div>
      ))}
    </section>
  );
}
