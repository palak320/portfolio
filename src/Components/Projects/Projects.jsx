import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Vite featuring smooth animations and interactive sections.",
      link: "https://palak320.github.io/portfolio/"
    },
    {
      id: 2,
      title: "React Todo App",
      description: "A task management application built with React that helps users organize and manage their daily tasks efficiently.",
      link: "#"
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with product listing, shopping cart, and checkout functionality.",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h1 className="section-title">My Projects</h1>
        <p className="section-subtitle">
          Some of my recent works and side projects
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-header">
                <h2>{project.title}</h2>
              </div>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-link">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;