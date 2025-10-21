import React from "react";

const skills = [
  "C++", "Object-Oriented Programming (OOP)", "Data Structures", "Security+", "Linux Basics", "Network Basics"
];

function Skills() {
  return (
    <section className="skills container card">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((s) => (
          <div key={s} className="skill-pill">{s}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;