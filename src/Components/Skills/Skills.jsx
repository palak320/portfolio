import "./Skills.css";

function Skills() {

  const skills=[
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Java",
    "Python",
    "Git"
  ];

  return (
    <section id="skills" className="skills">

      <h1>Skills</h1>

      <div className="skill-box">

        {skills.map((skill)=>(
          <div className="card">
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;