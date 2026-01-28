import { skills } from "../data/resume";

const SkillsSection = () => {
  return (
    <div className="skillsContainer">
      {skills.map((skill) => (
        <div className="skillRow" key={skill.category}>
          <div className="skillCategory">{skill.category}</div>
          <div className="skillItems">
            {skill.items.map((item) => (
              <span className="skillTag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
