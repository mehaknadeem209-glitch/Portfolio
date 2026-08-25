import { stats } from "../data/portfolioData";
import Reveal from "./Reveal";
export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">About Me</h2>
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-text">
            <p>
              I&apos;m a passionate web developer focused on creating clean,
              user-friendly digital experiences. With a strong foundation in the
              MERN stack, I turn ideas into scalable full-stack applications.
            </p>
            <p>
              From RESTful APIs to interactive frontends, I enjoy every part of
              the development process — writing maintainable code, solving
              problems, and delivering products that make an impact.
            </p>
          </Reveal>
          <Reveal className="about-stats">
            {stats.map(({ number, label }) => (
              <div key={label} className="stat-card">
                <span className="stat-number">{number}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
