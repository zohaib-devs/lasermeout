"use client";

import { useEffect, useRef } from "react";

export default function SectionReveal({ children, className, id, labelledBy }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const motion = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    if (!("IntersectionObserver" in window)) return undefined;

    let played = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || !motion.matches || played) return;
      played = true;
      section.dataset.reveal = "active";
      observer.disconnect();
    }, { threshold: .25 });

    function updatePreference() {
      if (played) return;
      if (motion.matches) {
        section.dataset.reveal = "ready";
        observer.observe(section);
      } else {
        delete section.dataset.reveal;
        observer.disconnect();
      }
    }

    updatePreference();
    motion.addEventListener("change", updatePreference);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", updatePreference);
      delete section.dataset.reveal;
    };
  }, []);

  return (
    <section ref={sectionRef} id={id} className={className} aria-labelledby={labelledBy}>
      {children}
    </section>
  );
}
