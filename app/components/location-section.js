import Image from "next/image";
import styles from "./location-section.module.css";

const mapUrl = "https://www.google.com/maps/place/Laser+Me+Out/@51.5176063,-0.1491393,17z/data=!3m1!4b1!4m6!3m5!1s0x48761be62407ada9:0x8744de3aa7be638!8m2!3d51.5176063!4d-0.1465644!16s%2Fg%2F11t0wfn_dc?entry=tts";

export default function LocationSection() {
  return (
    <section id="visit-us" className={styles.section} aria-labelledby="find-us-title">
      <span className={styles.watermark} aria-hidden="true">LMO / FIND US / LMO</span>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Visit us</p>
        <h2 id="find-us-title" className={styles.title}>Where to <span>find us</span></h2>
        <div className={styles.details}>
          <article>
            <h3>London</h3>
            <address>146 Marylebone Rd, London<br />NW1 5PH</address>
            <p>Two minutes from Baker Street station.</p>
          </article>
          <article>
            <h3>Opening hours</h3>
            <p>Every day<br />9:00am — 9:00pm</p>
            <a href="tel:+442077884712">020 7788 4712</a>
            <a href="mailto:hello@lasermeout.com">hello@lasermeout.com</a>
          </article>
        </div>
        <a className={styles.mapLink} href={mapUrl} target="_blank" rel="noreferrer" aria-label="Open Laser Me Out London in Google Maps">
          <Image src="/images/laser-me-out-location-map.webp" alt="Map showing Laser Me Out near Baker Street, London" width={2000} height={1166} sizes="(max-width: 767px) calc(100vw - 2.5rem), 38rem" />
          <span>Open in Google Maps ↗</span>
        </a>
      </div>
    </section>
  );
}
