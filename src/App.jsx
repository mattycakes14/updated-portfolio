import "./App.css";
import { connect } from "./data/resume";

import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ConnectSection from "./components/ConnectSection";

import headshot from "./assets/headshot.png";

import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("Experience");

  const heading = "Hey, I'm Matthew Lau";
  const description =
    "I'm a CS student from the University of Washington focused on building full-stack applications and AI-driven systems!";

  const subNav = ["Experience", "Skills", "Education", "Connect"];

  const subNavContent = {
    Experience: <ProjectSection />,
    Skills: <SkillsSection />,
    Education: <EducationSection />,
    Connect: <ConnectSection />,
  };

  return (
    <>
      <div className="mainContainer">
        <img className="headShotImage" alt="headshot" src={headshot}></img>
        <div className="introHeader">
          <h1>{heading}</h1>
        </div>
        <div className="introDescription">
          <p>{description}</p>
        </div>
        <div className="socialsContainer">
          {connect.map((item) => (
            <a key={item.id} href={item.link} target="_blank">
              <img
                className="externalSourceImage"
                alt="externalSource"
                src={item.icon}
              />
            </a>
          ))}
        </div>
        <div className="subNav">
          {subNav.map((item) => (
            <div
              key={item}
              className={`subNavTitles ${activeTab === item ? "activePill" : ""}`}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="subTabContainer">{subNavContent[activeTab]}</div>
      </div>
    </>
  );
}

export default App;
