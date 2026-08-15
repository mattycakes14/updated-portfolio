import ProjectSectionTab from "./ProjectSectionTab";
import { experiences } from "../data/resume";

const ProjectSection = () => {
  return (
    <div className="projectContainer">
      {experiences.map((exp) => (
        <ProjectSectionTab
          key={exp.id}
          name={exp.projectName}
          role={exp.role}
          location={exp.location}
          startDate={exp.startDate}
          endDate={exp.endDate}
          desc={exp.projectDescription}
          icon={exp.icon}
          iconClassName={exp.iconClassName}
        />
      ))}
    </div>
  );
};

export default ProjectSection;
