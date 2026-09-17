import Image from "next/image";
import styles from "./proof-points.module.css";

const points = [
  {
    title: "Skip the coupon deals",
    copy: "Sure, there are offers for super-cheap laser hair removal packages floating around online. But you won’t love the experience. From the one-size-fits-all approach to the revolving door, market-fest feel, it’s not the premium, personalised treatment program we offer from our Baker Street location.",
    image: "/images/proof-discount.webp",
    alt: "Illustration rejecting a 90 percent discount",
  },
  {
    title: "Don’t buy home kits",
    copy: "For a few quid, you can get an at-home laser device, but don’t be fooled. These handhelds have a fraction of the power that our medical-grade lasers do and more of them hurt. You’ll go through months of mini pinches to see very minimal changes in your total hair growth.",
    image: "/images/proof-home-lasers.webp",
    alt: "Illustration of home laser devices crossed out",
  },
  {
    title: "You’re missing a trick",
    copy: "At Laser Me Out, we go the extra mile with dry brushing as a pre-treatment step. Dry brushing reduces the occurrence of ingrown hairs and promotes better circulation for beautiful-looking skin. It also helps prepare the skin before laser hair removal, so you can achieve and maintain smoother results.",
    image: "/images/proof-brushes.webp",
    alt: "Illustration of two dry brushes",
  },
];

export default function ProofPoints() {
  return (
    <section className={styles.section} aria-label="Why choose Laser Me Out">
      {points.map((point, index) => (
        <article className={`${styles.point} ${index === 1 ? styles.reverse : ""}`} key={point.title}>
          <div className={styles.copy}>
            <h2>{point.title}</h2>
            <p>{point.copy}</p>
          </div>
          <div className={styles.art}>
            <Image src={point.image} alt={point.alt} width={800} height={800} sizes="(max-width: 767px) min(72vw, 22rem), 20rem" />
          </div>
        </article>
      ))}
    </section>
  );
}
