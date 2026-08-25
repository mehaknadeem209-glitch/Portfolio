import { socialLinks, typedTitles } from "../data/portfolioData";
import { useTypedText } from "../hooks/useTypedText";
import Reveal from "./Reveal";
import MoltenMetal from "../MoltenMetal.jsx";


export default function Hero() {
  const typedText = useTypedText(typedTitles);
  return (
    <section id="home" className="hero">
      <div className="hero-molten-bg ">
        <MoltenMetal
          color1="#5227FF"
          color2="#FF9FFC"
          color3="#FFffff"
          speed={0.35}
          scale={4}
          detail={3}
          glow={1.7}
          coreSize={0.1}
          swirl={0.8}
          fold={-0.16}
          blackPoint={0.07}
          brightness={1.45}
          colorMode="molten"
          grain
          grainIntensity={0.1}
          mouseInteraction
          mouseStrength={0.3}
          opacity={1}
        >
          <div className="container hero-content">
            <Reveal>
              <p className="hero-greeting">Hi, I&apos;m</p>
            </Reveal>
            <Reveal>
              <h1 className="hero-name">Mehak Nadeem</h1>
            </Reveal>
            <Reveal>
              <p className="hero-title">
                <span className="typed-text">{typedText}</span>
                <span className="cursor">|</span>
              </p>
            </Reveal>
            <Reveal>
              <p className="hero-desc">
                I build fast, responsive web apps with MongoDB, Express, React
                &amp; Node.js.
              </p>
            </Reveal>
            <Reveal>
              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  View My Work
                </a>
                <a href="#contact" className="btn btn-outline">
                  Get In Touch
                </a>
              </div>
            </Reveal>
            <Reveal>
              <div className="hero-social">
                {socialLinks.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={label}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="hero-bg"></div>
        </MoltenMetal>
      </div>
    </section>
  );
}
