"use client";

import { useEffect, useRef } from "react";
import styles from "./horizontal-scroll-section.module.css";

export default function HorizontalScrollSection({ children, stackOnMobile = false, compact = false }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const viewportRef = useRef(null);

  function handleScrollKey(event) {
    const viewport = event.currentTarget;
    if (event.target !== viewport || viewport.tabIndex !== 0) return;
    const step = viewport.clientWidth * .8;
    const destinations = {
      ArrowLeft: viewport.scrollLeft - step,
      ArrowRight: viewport.scrollLeft + step,
      Home: 0,
      End: viewport.scrollWidth,
    };
    if (!(event.key in destinations)) return;
    event.preventDefault();
    viewport.scrollLeft = destinations[event.key];
  }

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    const viewport = viewportRef.current;

    if (!container || !track || !viewport) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopLayout = window.matchMedia("(min-width: 768px)");
    let frameId;

    function updatePosition() {
      viewport.tabIndex = reducedMotion.matches && desktopLayout.matches ? 0 : -1;
      if (stackOnMobile && !desktopLayout.matches) {
        container.style.height = "auto";
        track.style.transform = "";
        return;
      }

      const distance = reducedMotion.matches ? 0 : Math.max(0, track.scrollWidth - window.innerWidth);

      const sceneHeight = compact ? viewport.clientHeight : window.innerHeight;
      const stickyTop = compact ? parseFloat(getComputedStyle(viewport).top) || 0 : 0;
      container.style.height = distance ? `${Math.ceil(sceneHeight + distance)}px` : "auto";

      const travelled = Math.min(Math.max(stickyTop - container.getBoundingClientRect().top, 0), distance);
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
    desktopLayout.addEventListener("change", requestUpdate);
    requestUpdate();

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
      desktopLayout.removeEventListener("change", requestUpdate);
    };
  }, [stackOnMobile, compact]);

  return (
    <div ref={containerRef} className={`${styles.container} ${stackOnMobile ? styles.stackOnMobile : ""} ${compact ? styles.compact : ""}`}>
      <div ref={viewportRef} className={styles.viewport} tabIndex={-1} role="region" aria-label={stackOnMobile ? "Three steps to touchable skin" : "Laser Me Out treatment information"} onKeyDown={handleScrollKey}>
        <div ref={trackRef} className={styles.track}>{children}</div>
      </div>
    </div>
  );
}
