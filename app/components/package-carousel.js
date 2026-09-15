"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./package-carousel.module.css";

const packages = [
  {
    id: "top-to-tail",
    duration: "90mins",
    title: "Top to tail",
    description: "Full body and face.",
    badge: "Multiple areas",
    palette: "orange",
    prices: [["1 session", "£500"], ["Course of 3", "£1300"], ["Course of 6", "£2300"]],
  },
  {
    id: "small-area",
    duration: "30mins",
    title: "One & done\nsmall area",
    description: "Lip, chin, ears, eyebrows, bikini line, nipples, naval line, underarms, beard line/cheeks/neck, forearms, and lower/upper leg.",
    badge: "Packages",
    palette: "yellow",
    prices: [["1 session", "£100"], ["Course of 3", "£250"], ["Course of 6", "£450"]],
  },
  {
    id: "large-area",
    duration: "30mins",
    title: "One and done\nlarge area",
    description: "Hollywood, face, full arms, full legs, chest and stomach, back and shoulders and buttocks.",
    badge: "Packages",
    palette: "pink",
    prices: [["1 session", "£150"], ["Course of 3", "£350"], ["Course of 6", "£650"]],
  },
  {
    id: "pick-mix",
    duration: "45mins",
    title: "Pick n’Mix",
    description: "Package of any 3 areas OF YOUR CHOICE.",
    badge: "Multiple areas",
    palette: "lilac",
    prices: [["1 session", "£300"], ["Course of 3", "£750"], ["Course of 6", "£1200"]],
  },
];

export default function PackageCarousel() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function goTo(index) {
    const nextIndex = (index + packages.length) % packages.length;
    const card = trackRef.current?.children[nextIndex];
    card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    setActiveIndex(nextIndex);
  }

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    let frameId;
    function updateActiveCard() {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const center = track.scrollLeft + track.clientWidth / 2;
        let nearestIndex = 0;
        let nearestDistance = Infinity;

        [...track.children].forEach((card, index) => {
          const cardCenter = card.offsetLeft + card.offsetWidth / 2;
          const distance = Math.abs(center - cardCenter);
          if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestIndex = index;
          }
        });
        setActiveIndex(nearestIndex);
      });
    }

    track.addEventListener("scroll", updateActiveCard, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      track.removeEventListener("scroll", updateActiveCard);
    };
  }, []);

  return (
    <section id="package-carousel" className={styles.section} aria-labelledby="package-carousel-title">
      <h2 id="package-carousel-title" className={styles.visuallyHidden}>Laser hair removal packages</h2>
      <div ref={trackRef} className={styles.track} aria-live="polite">
        {packages.map((item, index) => (
          <article
            className={`${styles.card} ${styles[item.palette]} ${activeIndex === index ? styles.active : ""}`}
            key={item.id}
            aria-label={`${item.title.replace("\n", " ")} package`}
            onClick={() => goTo(index)}
          >
            <span className={styles.badge}>{item.badge}</span>
            <div className={styles.details}>
              <p className={styles.duration}>{item.duration}</p>
              <h3>{item.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
            <dl className={styles.priceList}>
              {item.prices.map(([label, price]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{price}</dd>
                </div>
              ))}
            </dl>
            <div className={styles.links}>
              <a href="#consultation" onClick={(event) => event.stopPropagation()}>Book your package</a>
              <a href="#treatments" onClick={(event) => event.stopPropagation()}>Show zone overview</a>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.controls} aria-label="Browse packages">
        <button type="button" onClick={() => goTo(activeIndex - 1)} aria-label="Previous package">←</button>
        <button type="button" onClick={() => goTo(activeIndex + 1)} aria-label="Next package">→</button>
      </div>
    </section>
  );
}
