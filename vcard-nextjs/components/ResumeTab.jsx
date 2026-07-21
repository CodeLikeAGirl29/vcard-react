import Experience from "./Experience";
import { Skills, Certifications, Education } from "./SkillsAndEducation";

export default function ResumeTab({ resume }) {
  return (
    <div>
      <Experience jobs={resume.experience} />
      <Education education={resume.education} />
      <Skills skills={resume.skills} />
      <Certifications certifications={resume.certifications} />
    </div>
  );
}
