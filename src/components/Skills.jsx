import { useEffect, useRef, useState } from "react";
import { skills, techTags } from "../data/portfolioData";
import Reveal from "./Reveal";
function SkillBar({ level }) {
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <div className="skill-bar" ref={ref}>
      <span style={{ width: animated ? `${level}%` : "0%" }}></span>
    </div>
  );
}
export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Skills</h2>
        </Reveal>
        <Reveal>
          <p className="section-subtitle">My MERN stack toolkit</p>
        </Reveal>
        <div className="skills-grid">
          {skills.map((skill) => (
            <Reveal key={skill.name}>
              <article className="skill-card">
                <div className={`skill-icon ${skill.iconClass}`}>
                  {skill.icon}
                </div>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
                <SkillBar level={skill.level} />
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="tech-tags">
            {techTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
