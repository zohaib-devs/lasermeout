"use client";

import { useEffect, useRef } from "react";
import styles from "./horizontal-scroll-section.module.css";

export default function HorizontalScrollSection({ children }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;

    if (!container || !track) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameId;

    function updatePosition() {
      const distance = reducedMotion.matches ? 0 : Math.max(0, track.scrollWidth - window.innerWidth);

      container.style.height = distance ? `${Math.ceil(window.innerHeight + distance)}px` : "auto";

      const travelled = Math.min(Math.max(-container.getBoundingClientRect().top, 0), distance);
      track.style.transform = distance ? `translate3d(${-travelled}px, 0, 0)` : "";
    }

    function requestUpdate() {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updatePosition);
    }

    const resizeObserver = new ResizeObserver(requestUpdate);
    resizeObserver.observe(track);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", requestUpdate);
    requestUpdate();

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.viewport}>
        <div ref={trackRef} className={styles.track}>{children}</div>
      </div>
    </div>
  );
}
