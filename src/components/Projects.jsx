import { projects } from "../data/portfolioData";
import Reveal from "./Reveal";
export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Projects</h2>
        </Reveal>
        <Reveal>
          <p className="section-subtitle">Selected work</p>
        </Reveal>
        <div className="projects-grid">
          {projects.map((project) => (
            <Reveal key={project.id}>
              <article className="project-card">
                <div className={`project-image ${project.imageClass}`}>
                  <div className="project-overlay">
                    <a href={project.demo} className="btn btn-sm">
                      Live Demo
                    </a>
                    <a href={project.github} className="btn btn-sm btn-outline">
                      GitHub
                    </a>
                  </div>
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
