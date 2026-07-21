import ProjectsGrid from "./ProjectsGrid";

export default function ProjectsTab({ resume }) {
  return (
    <div>
      <ProjectsGrid projects={resume.projects} heading="Projects" />
    </div>
  );
}
