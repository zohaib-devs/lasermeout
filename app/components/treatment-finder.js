"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./treatment-finder.module.css";

const treatments = {
  Women: [
    { name: "Stomach", note: "A smooth middle, minus the maintenance", sessions: "6–10 sessions" },
    { name: "Face", note: "Upper lip, chin & sides", sessions: "6–8 sessions" },
    { name: "Underarms", note: "A tiny zone, a huge win", sessions: "6–8 sessions" },
    { name: "Arms", note: "Half or full arms", sessions: "6–10 sessions" },
    { name: "Legs", note: "Lower or full legs", sessions: "6–10 sessions" },
    { name: "Bikini", note: "Your choice, your comfort", sessions: "6–10 sessions" },
    { name: "Full body", note: "Build your smooth routine", sessions: "Custom plan" },
  ],
  Men: [
    { name: "Face", note: "A clean, low-maintenance finish", sessions: "8–10 sessions" },
    { name: "Neck", note: "Keep your neckline sharp", sessions: "8–10 sessions" },
    { name: "Beard Line", note: "Define your shape with less upkeep", sessions: "8–10 sessions" },
    { name: "Forearms", note: "Smooth from wrist to elbow", sessions: "6–10 sessions" },
    { name: "Legs", note: "Lower or full legs", sessions: "6–10 sessions" },
    { name: "Arms", note: "Half or full arms", sessions: "6–10 sessions" },
    { name: "Underarms", note: "A tiny zone, a huge win", sessions: "6–8 sessions" },
    { name: "Back", note: "The hard-to-reach bits", sessions: "8–12 sessions" },
    { name: "Chest", note: "A smooth, even finish", sessions: "8–12 sessions" },
    { name: "Stomach", note: "A smooth middle, minus the maintenance", sessions: "8–12 sessions" },
    { name: "Male Brazilian", note: "Your choice, your comfort", sessions: "8–12 sessions" },
    { name: "Peri-Anal", note: "A discreet treatment plan", sessions: "8–12 sessions" },
  ],
};

const featuredAreas = {
  Women: ["Face", "Underarms", "Arms", "Stomach", "Chest", "Back", "Legs", "Bikini", "Full body"],
  Men: treatments.Men.map((treatment) => treatment.name),
};
const bodyArt = {
  Face: "face",
  Neck: "neck",
  "Beard Line": "beardLine",
  Forearms: "forearms",
  Underarms: "underarms",
  Arms: "arms",
  Stomach: "stomach",
  Chest: "chest",
  Back: "back",
  Legs: "legs",
  Bikini: "bikini",
  "Male Brazilian": "brazilian",
  "Peri-Anal": "periAnal",
  "Full body": "fullBody",
};

export default function TreatmentFinder() {
  const [audience, setAudience] = useState("Women");
  const [featuredArea, setFeaturedArea] = useState("Stomach");
  const audienceFeaturedAreas = featuredAreas[audience];
  const featuredIndex = Math.max(0, audienceFeaturedAreas.indexOf(featuredArea));
  const visibleFeaturedAreas = [-1, 0, 1].map((offset) => audienceFeaturedAreas[(featuredIndex + offset + audienceFeaturedAreas.length) % audienceFeaturedAreas.length]);

  function chooseAudience(nextAudience) {
    setAudience(nextAudience);
    setFeaturedArea(treatments[nextAudience][0].name);
  }

  function cycleFeaturedArea(direction) {
    const currentIndex = audienceFeaturedAreas.indexOf(featuredArea);
    const nextIndex = (currentIndex + direction + audienceFeaturedAreas.length) % audienceFeaturedAreas.length;
    setFeaturedArea(audienceFeaturedAreas[nextIndex]);
  }

  return (
    <section id="treatments" className={styles.section} aria-labelledby="hair-removal-title">
      <Image
        className={styles.machine}
        src="/images/lasermachine-fliped.png"
        alt="Illustrated winged laser machine"
        width={1299}
        height={1200}
        sizes="(max-width: 767px) 25.6vw, 14.4rem"
      />
      <header className={styles.intro}>
        <h2 id="hair-removal-title">Hair removal for every body</h2>
        <p className={styles.tagline}>Stop shaving <span className={styles.forever}>forever</span>. Wave waxing goodbye.</p>
        <p className={styles.introCopy}>Get serious about your look and experience the Baker Street difference. Our laser hair removal and skin treatment plans will transform your complexion and your confidence.</p>
      </header>

      <div className={styles.finder}>
        <div className={styles.tabs} role="tablist" aria-label="Treatment audience">
          {Object.keys(treatments).map((option) => (
            <button
              key={option}
              className={audience === option ? styles.tabActive : styles.tab}
              type="button"
              role="tab"
              aria-selected={audience === option}
              onClick={() => chooseAudience(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <p className={styles.mustHave}>
          <span>Must-have</span>
          <span>Silky smooth</span>
          <strong>{featuredArea}</strong>
        </p>
        <div className={styles.featuredAreaButtons} aria-label="Featured treatment areas">
          <div className={styles.featuredAreaStack}>
            {visibleFeaturedAreas.map((featured, index) => (
              <button
                key={`featured-slot-${index}`}
                className={index === 1 ? styles.featuredAreaActive : styles.featuredArea}
                type="button"
                aria-pressed={index === 1}
                onClick={() => setFeaturedArea(featured)}
              >
                {featured}
              </button>
            ))}
          </div>
          <div className={styles.featuredArrows}>
            <button type="button" aria-label="Previous treatment area" onClick={() => cycleFeaturedArea(-1)}>↑</button>
            <button type="button" aria-label="Next treatment area" onClick={() => cycleFeaturedArea(1)}>↓</button>
          </div>
        </div>
        <div
          className={`${styles.bodyArt} ${styles[audience === "Women" ? "womenArt" : "menArt"]} ${styles[bodyArt[featuredArea] || "fullBody"]}`}
          role="img"
          aria-label={`${featuredArea} treatment area illustration`}
        />

          {/* <aside className={styles.selection} aria-live="polite">
            <p className={styles.selectionKicker}>Your selection</p>
            <h3>{area.name}</h3>
            <p className={styles.selectionNote}>{area.note}</p>
            <div className={styles.sessionLine}>
              <span>Most people need</span>
              <strong>{area.sessions}</strong>
            </div>
            <a className={styles.cta} href="#consultation">Book a free consultation <span aria-hidden="true">↗</span></a>
          </aside> */}
      </div>
      <p className={styles.footerNote}>All skin tones welcome. Your plan starts with a free consultation.</p>
    </section>
  );
}
