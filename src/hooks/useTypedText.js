import { useEffect, useState } from "react";
export function useTypedText(titles) {
  const [text, setText] = useState("");
  useEffect(() => {
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;
    const tick = () => {
      const current = titles[titleIndex];
      if (isDeleting) {
        setText(current.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setText(current.substring(0, charIndex + 1));
        charIndex++;
      }
      let delay = isDeleting ? 40 : 80;
      if (!isDeleting && charIndex === current.length) {
        delay = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        delay = 400;
      }
      timeoutId = window.setTimeout(tick, delay);
    };
    timeoutId = window.setTimeout(tick, 400);
    return () => window.clearTimeout(timeoutId);
  }, [titles]);
  return text;
}