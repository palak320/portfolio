import "./Skills.css";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB"
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h1 className="section-title">My Skills</h1>
        <p className="section-subtitle">
          Technologies and tools I work with
        </p>

        <div className="skill-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">
                <span>✨</span>
              </div>
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;