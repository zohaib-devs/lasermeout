"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./before-after-slider.module.css";

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);

  return (
    <figure className={styles.figure}>
      <div className={styles.slider} style={{ "--comparison-position": `${position}%` }}>
        <Image
          className={styles.image}
          src="/images/chest-after.png"
          alt="Chest after laser hair removal treatment"
          fill
          sizes="(max-width: 767px) 94vw, min(72vw, 52rem)"
        />
        <div className={styles.beforeLayer}>
          <Image
            className={styles.image}
            src="/images/chest-before.png"
            alt="Chest before laser hair removal treatment"
            fill
            sizes="(max-width: 767px) 94vw, min(72vw, 52rem)"
          />
        </div>
        <div className={styles.divider} aria-hidden="true"><span>↔</span></div>
        <input
          aria-label="Drag to compare before and after laser hair removal"
          className={styles.range}
          max="100"
          min="0"
          onChange={(event) => setPosition(Number(event.target.value))}
          type="range"
          value={position}
        />
        <span className={`${styles.label} ${styles.beforeLabel}`}>Before</span>
        <span className={`${styles.label} ${styles.afterLabel}`}>After</span>
      </div>
      <figcaption>Comparison of before and after laser hair removal</figcaption>
    </figure>
  );
}
