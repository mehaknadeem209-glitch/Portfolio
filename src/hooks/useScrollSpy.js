import { useEffect, useState } from "react";
export function useScrollSpy(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 400);
      const scrollPos = window.scrollY + 100;
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(id);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);
  return { activeSection, scrolled, showBackToTop };
}
