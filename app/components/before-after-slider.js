"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./before-after-slider.module.css";

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const rangeRef = useRef(null);
  const gestureRef = useRef(null);

  function moveComparison(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    setPosition(Math.round(Math.max(0, Math.min(100, (event.clientX - bounds.left) / bounds.width * 100))));
  }

  function startGesture(event) {
    if (event.button !== 0) return;
    gestureRef.current = { x: event.clientX, y: event.clientY, direction: null };
    event.currentTarget.setPointerCapture(event.pointerId);
    rangeRef.current?.focus({ preventScroll: true });
  }

  function moveGesture(event) {
    const gesture = gestureRef.current;
    if (!gesture) return;
    const horizontal = Math.abs(event.clientX - gesture.x);
    const vertical = Math.abs(event.clientY - gesture.y);
    if (!gesture.direction && Math.max(horizontal, vertical) > 6) {
      gesture.direction = horizontal > vertical ? "horizontal" : "vertical";
    }
    if (gesture.direction === "horizontal") moveComparison(event);
  }

  function endGesture(event) {
    const gesture = gestureRef.current;
    if (gesture && gesture.direction !== "vertical") moveComparison(event);
    gestureRef.current = null;
  }

  return (
    <figure className={styles.figure}>
      <div className={styles.slider} style={{ "--comparison-position": `${position}%` }}>
        <Image
          className={styles.image}
          src="/images/chest-after.png"
          alt="Chest after laser hair removal treatment"
          fill
          sizes="(max-width: 767px) calc(100vw - 2.5rem), min(72vw, 52rem)"
        />
        <div className={styles.beforeLayer}>
          <Image
            className={styles.image}
            src="/images/chest-before.png"
            alt="Chest before laser hair removal treatment"
            fill
            sizes="(max-width: 767px) calc(100vw - 2.5rem), min(72vw, 52rem)"
          />
        </div>
        <div className={styles.divider} aria-hidden="true">
          <span>↔<svg className={styles.mobileArrow} width="23" height="11" viewBox="0 0 23 11" fill="none"><path d="M1 5.5h21M6 1 1 5.5 6 10m11-9 5 4.5-5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
        </div>
        <input
          ref={rangeRef}
          aria-label="Drag to compare before and after laser hair removal"
          aria-valuetext={`${position}% before, ${100 - position}% after`}
          className={styles.range}
          max="100"
          min="0"
          onChange={(event) => setPosition(Number(event.target.value))}
          type="range"
          value={position}
        />
        <div
          className={styles.mobileTouchSurface}
          aria-hidden="true"
          onPointerDown={startGesture}
          onPointerMove={moveGesture}
          onPointerUp={endGesture}
          onPointerCancel={() => { gestureRef.current = null; }}
        />
        <span className={`${styles.label} ${styles.beforeLabel}`}>Before</span>
        <span className={`${styles.label} ${styles.afterLabel}`}>After</span>
      </div>
      <figcaption><span className={styles.captionLine}>Comparison of before and after </span><span className={styles.captionLine}>laser hair removal</span></figcaption>
    </figure>
  );
}
