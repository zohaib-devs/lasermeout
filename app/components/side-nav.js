"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./side-nav.module.css";

const navigation = [
  { label: "Treatments", href: "#treatments" },
  { label: "Packages", href: "#packages" },
  { label: "Results", href: "#results" },
  { label: "The LMO way", href: "#how-it-works" },
  { label: "About us", href: "#lmo-difference" },
  { label: "Visit us", href: "#visit-us" },
  { label: "Contact", href: "#contact" },
];

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const railRef = useRef(null);
  const overlayRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    const content = document.querySelector(".site-content");
    const previousInert = content?.inert;
    document.body.style.overflow = "hidden";
    if (content) content.inert = true;
    overlayRef.current?.querySelector("nav a")?.focus({ preventScroll: true });

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        menuButtonRef.current?.focus({ preventScroll: true });
      }
      if (event.key !== "Tab") return;
      const controls = [railRef.current, overlayRef.current].flatMap((element) =>
        [...element.querySelectorAll("a[href], button")].filter((control) => control.getClientRects().length)
      );
      const first = controls[0];
      const last = controls.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (content) content.inert = previousInert;
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <aside ref={railRef} className={`${styles.rail} ${isOpen ? styles.railMenuOpen : ""}`} aria-label="Primary navigation">
        <a className={styles.logo} href="#top" aria-label="Laser Me Out home" onClick={closeMenu}>
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
            ref={menuButtonRef}
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
        ref={overlayRef}
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
              <li key={item.label} style={{ "--item-index": index }}>
                <a href={item.href} onClick={closeMenu}>
                  <span>0{index + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.menuFooter}>
            <a href="mailto:hello@lasermeout.com" onClick={closeMenu}>hello@lasermeout.com</a>
            <a href="#consultation" onClick={closeMenu}>Book a consultation ↗</a>
          </div>
        </nav>
      </div>
    </>
  );
}
