import "../App.css";

const ProjectSectionTab = ({
  name,
  role,
  location,
  startDate,
  endDate,
  desc,
  icon,
  iconClassName,
}) => {
  return (
    <div className="projectSectionTab">
      <div className="projectContentContainer">
        <img
          src={icon}
          alt="small image"
          className={`projectImage ${iconClassName || ""}`}
        ></img>
        <div className="projectName">{name}</div>
        <div className="projectMeta">
          <span className="projectRole">
            {role}
            {location ? ` · ${location}` : ""}
          </span>
          <span className="projectDates">
            {startDate} – {endDate}
          </span>
        </div>
        <div className="projectDesc">{desc}</div>
      </div>
    </div>
  );
};

export default ProjectSectionTab;
