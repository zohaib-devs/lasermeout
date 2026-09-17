"use client";

import { useEffect, useState } from "react";
import styles from "./side-nav.module.css";

const navigation = [
  "Treatments",
  "Packages",
  "Results",
  "The LMO way",
  "About us",
  "Visit us",
  "Contact",
];

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <aside className={`${styles.rail} ${isOpen ? styles.railMenuOpen : ""}`} aria-label="Primary navigation">
        <a className={styles.logo} href="#top" aria-label="Laser Me Out home">
          <span className={styles.wordmark}>
            <span>Laser</span>
            <span>Me</span>
            <span>Out</span>
          </span>
        </a>

        <div className={styles.actions}>
          <a className={styles.consultation} href="#consultation" onClick={closeMenu}>
            <span className={styles.consultationShort}>Book</span>
            <span className={styles.consultationFull}>Book a consultation</span>
          </a>
          <button
            className={styles.menuButton}
            type="button"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            aria-controls="site-navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className={styles.menuLabel}>{isOpen ? "Close" : "Menu"}</span>
            <span className={`${styles.menuIcon} ${isOpen ? styles.menuIconOpen : ""}`} aria-hidden="true">
              <i />
              <i />
            </span>
          </button>
        </div>

        <a className={styles.instagram} href="https://www.instagram.com/lasermeout" target="_blank" rel="noreferrer" aria-label="Laser Me Out on Instagram">
          IG
        </a>
      </aside>

      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`}
        id="site-navigation"
        aria-hidden={!isOpen}
      >
        <div className={styles.menuArt} aria-hidden="true">
          <span>LMO</span>
          <span>✦</span>
        </div>
        <nav className={styles.menuPanel} aria-label="Site pages">
          <p className={styles.kicker}>Smooth moves only</p>
          <ul>
            {navigation.map((item, index) => (
              <li key={item} style={{ "--item-index": index }}>
                <a href={`#${item.toLowerCase().replaceAll(" ", "-")}`} onClick={closeMenu}>
                  <span>0{index + 1}</span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.menuFooter}>
            <a href="mailto:hello@lasermeout.com">hello@lasermeout.com</a>
            <a href="#consultation" onClick={closeMenu}>Book a consultation ↗</a>
          </div>
        </nav>
      </div>
    </>
  );
}
