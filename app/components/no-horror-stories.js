"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./no-horror-stories.module.css";

const packageOptions = {
  packages: {
    label: "Hair removal packages",
    note: "Shaving: £50 per area (excluding intimate areas and face)",
  },
  pcos: {
    label: "PCOS membership",
    note: "A flexible membership built around your hair-removal goals.",
  },
};

export default function NoHorrorStories() {
  const [activeOption, setActiveOption] = useState("packages");
  const activePackage = packageOptions[activeOption];

  return (
    <section id="packages" className={styles.section} aria-labelledby="packages-title">
      <Image
        className={styles.machine}
        src="/images/lasermachine-fliped.png"
        alt="Illustrated Laser Me Out treatment machine"
        width={900}
        height={900}
        sizes="(max-width: 767px) 70px, 27vw"
      />

      <header className={styles.heading}>
        <p className={styles.eyebrow}>Hollywood hair-free</p>
        <h2 id="packages-title" className={styles.title}>
          <span>No horror.</span>
          <strong>Stories.</strong>
        </h2>
        <p className={styles.intro}>
          When you decide to get serious about hair-free living, Laser Me Out just makes sense. Our fuss-free packages aren&apos;t bargain-basement but it&apos;s worth it for A-list results without any removal regrets.
        </p>
      </header>

      <div className={styles.packageControls} aria-label="Package type">
        {Object.entries(packageOptions).map(([key, option]) => (
          <button
            className={`${styles.packageButton} ${activeOption === key ? styles.packageButtonActive : ""}`}
            key={key}
            type="button"
            aria-pressed={activeOption === key}
            onClick={() => setActiveOption(key)}
          >
            {option.label}
          </button>
        ))}
      </div>

      <p className={styles.packageNote} aria-live="polite">{activeOption === "packages" ? <>Shaving: £50 per area<span className={styles.noteDetail}> (excluding intimate areas and face)</span></> : activePackage.note}</p>
      <a className={styles.overviewLink} href="#treatments">
        Show zone overview <span aria-hidden="true">→</span><svg className={styles.mobileArrow} aria-hidden="true" viewBox="0 0 16 10" fill="none"><path d="M1 5h14m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </a>
    </section>
  );
}
