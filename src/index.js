import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skillsData = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "C",
    level: "beginner",
    color: "#FF3B00"
  }
];


function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="./Avatar fit.jpg" alt="avatar"></img>;
}

function Intro() {
  return (
    <div>
      <h1>Qudus Adebiyi</h1>
      <p>
        Front-End Web Developer and Assistant Manager at Shokuns Security
        Solutions Ltd. When not coding, i like to play video games or watch
        movies.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">

      {skillsData.map((skillObj) => (
        <Skill skillProps={skillObj.skill} 
        colorProps={skillObj.color} levelprops={skillObj.level} 
        key={skillObj.skill}/>
      ))}
    </div>
  );
}

//  Using Destructuring Props
function Skill({skillProps, colorProps, levelprops}) {
  return (
    <div className="skill" style={{backgroundColor: colorProps}}>
      <span>{skillProps}</span>
      <span>
 {/* When the current levelProps is = beginner return "👶", if it is intermediate return "👍" and if it is advanced return "💪" */}
      {levelprops === "beginner" && "👶"}
        {levelprops === "intermediate" && "👍"}
        {levelprops === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
