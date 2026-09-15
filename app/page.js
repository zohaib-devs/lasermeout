import Image from "next/image";
import styles from "./page.module.css";
import TreatmentFinder from "./components/treatment-finder";
import NoHorrorStories from "./components/no-horror-stories";
import PackageCarousel from "./components/package-carousel";
import HorizontalScrollSection from "./components/horizontal-scroll-section";
import BeforeAfterSlider from "./components/before-after-slider";

export default function Home() {
  return (
    <>
      <main id="top" className={styles.hero}>
        <h1 className={styles.heroTitle}>
          <span>Skip the</span>
          <span>Shave</span>
          <span>Go hair-free</span>
          <span>Forever</span>
        </h1>
        <Image
          className={styles.heroLaser}
          src="/images/hero-flying-laser.png"
          alt="Illustrated flying laser"
          width={1293}
          height={1200}
          priority
          sizes="(max-width: 767px) 34vw, 23vw"
        />
        <Image
          className={styles.heroModel}
          src="/images/hero-jumping-woman.png"
          alt="Woman jumping joyfully"
          width={1024}
          height={1536}
          priority
          sizes="(max-width: 767px) 72vw, 38vw"
        />
        <span className={styles.heroLocations}>London + Birmingham</span>
      </main>
      <section className={styles.sopranoSection} aria-labelledby="soprano-title">
        <Image
          className={styles.sopranoApplicator}
          src="/images/laser-applicator.png"
          alt="Soprano Titanium laser applicator"
          width={1086}
          height={1448}
          sizes="(max-width: 767px) 34vw, 19vw"
        />
        <div className={styles.sopranoContent}>
          <h2 id="soprano-title" className={styles.sopranoTitle}>
            <span>Soprano</span>
            <span>Titanium</span>
          </h2>
          <div className={styles.sopranoDivider} aria-hidden="true" />
          <p className={styles.sopranoCopy}>
            Synergistic technologies<br />
            superior results
          </p>
        </div>
        <Image
          className={styles.sopranoHandpiece}
          src="/images/laser-hand-machine.png"
          alt="Soprano Titanium laser handpiece"
          width={1122}
          height={1402}
          sizes="(max-width: 767px) 30vw, 16vw"
        />
      </section>
      <div className={styles.blackContainer}>
        <span className={styles.blackContainerText}>
          Keeping you smooth since 2022
        </span>
      </div>
      <section id="consultation" className={styles.whiteSection} aria-labelledby="consultation-title">
        <h2 id="consultation-title" className={styles.consultationTitle}>
          <span className={styles.consultationLead}>CHOOSE A LOCATION</span>
          <span className={styles.consultationAccent}>for consultation</span>
        </h2>
        <div className={styles.locationImages}>
          <div className={styles.londonImageWrap}>
            <Image
              className={styles.locationImage}
              src="/images/london.png"
              alt="Laser Me Out London clinic exterior"
              fill
              sizes="(max-width: 767px) 64vw, 30vw"
            />
          </div>
          <span className={`${styles.locationLabel} ${styles.londonLabel}`}>
            London
          </span>
          <div className={styles.birminghamImageWrap}>
            <Image
              className={styles.locationImage}
              src="/images/girmingham.png"
              alt="Laser Me Out Birmingham clinic exterior"
              fill
              sizes="(max-width: 767px) 48vw, 23vw"
            />
          </div>
          <span className={`${styles.locationLabel} ${styles.birminghamLabel}`}>
            Birmingham
          </span>
        </div>
      </section>
      <TreatmentFinder />
      <HorizontalScrollSection>
      <section className={styles.fuzzFreeZone} aria-labelledby="fuzz-free-title">
        <div className={styles.fuzzFreeCopy}>
          <h2 id="fuzz-free-title">
            <span>This is a fuzz</span>
            <span>Free zone</span>
          </h2>
          <p className={styles.fuzzFreeText}>If you’re ready to say goodbye to ingrowns, strawberry legs and dark patches, it’s time to get serious and Laser Me Out. Our secret weapon is the LMO prep step - dry brushing. It lets the light get right down deep, zapping even more hairs than with a basic laser treatment alone.</p>
          <a className={styles.fuzzFreeCta} href="#consultation">Claim your smooth <span aria-hidden="true">→</span></a>
        </div>
        <div className={styles.strawberryFrame}>
          <Image
            className={styles.strawberry}
            src="/images/fuzz-free-strawberry.png"
            alt="Illustrated strawberry with smooth legs"
            width={1024}
            height={1536}
            sizes="(max-width: 767px) 62vw, 30vw"
          />
        </div>
        <div className={styles.shavingFrame}>
          <div className={styles.lmoDifferenceCopy}>
            <h2 id="lmo-difference-title">The LMO difference</h2>
            <p className={styles.lmoDifferenceText}>We’re not a laser chop shop package deal you got for 50% off online or a cheap DIY home kit you impulse bought on the ‘gram. Our clinic is located in London’s medical district and uses top-of-the-range equipment with expert prep practices to give you the trans-formative skinsperience you’re looking for. It’s time to invest adult money into your skin so you can get real results.</p>
          </div>
          <Image
            className={styles.shavingImage}
            src="/images/fuzz-free-shaving.png"
            alt="Illustrated razor and prickly cactus"
            width={1280}
            height={1280}
            sizes="(max-width: 767px) 70vw, 28vw"
          />
        </div>
        <div className={styles.shireenFrame}>
          <div className={styles.shireenImageBox}>
            <Image
              className={styles.shireenImage}
              src="/images/shireen-forster.jpg"
              alt="Shireen Forster at the clinic"
              width={500}
              height={500}
              sizes="(max-width: 767px) 52vw, 12vw"
            />
          </div>
          <p className={styles.shireenName}>Shireen Forster</p>
          <p className={styles.shireenRole}>Founder, Laser Me Out</p>
        </div>
        <section className={styles.whoWeHelp} aria-labelledby="who-we-help-title">
          <p className={styles.whoWeHelpEyebrow}>Laser for every body</p>
          <h2 id="who-we-help-title">Who we help</h2>
          <ul>
            <li><strong>All skin types</strong><span>Our laser hair treatments work on any pigmented hair.</span></li>
            <li><strong>PCOS &amp; problem hair</strong><span>Even the coarsest, most hormonal hair can be treated.</span></li>
            <li><strong>Strawberry legs &amp; ingrowns</strong><span>Banish hair from problem zones so you can bare more.</span></li>
            <li><strong>South East Asian skin</strong><span>Get rid of thick, rough hair and dark patches anywhere.</span></li>
          </ul>
        </section>
        <div className={styles.whoWeHelpStrawberry}>
          <Image
            className={styles.whoWeHelpStrawberryImage}
            src="/images/fuzz-free-strawberry.png"
            alt="Illustrated strawberry with smooth legs"
            width={1024}
            height={1536}
            sizes="(max-width: 767px) 64vw, 18vw"
          />
        </div>
        <section className={styles.newbieFriendly} aria-labelledby="newbie-friendly-title">
          <div className={styles.newbieCopy}>
            <h2 id="newbie-friendly-title">Newbie friendly</h2>
            <p>We think it’s super important for newbies to come to a high-quality clinic like ours. Why? For the prep work. Poor prep leads to bad results and we want your first experience to be excellent. So, we always recommend you get the shaving add-on with your service too. Then you can just rock up and we’ll do the rest! Simple!</p>
            <div className={styles.newbieActions}>
              <a href="#consultation">Make a booking <span aria-hidden="true">→</span></a>
              <a href="#consultation">Talk to us first <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div className={styles.newbieRaja}>
            <p className={styles.rajaBubble}>Speak to an<br />expert</p>
            <Image
              className={styles.rajaImage}
              src="/images/raja-sahib.webp"
              alt="Raja, Laser Me Out marketing manager"
              width={500}
              height={561}
              sizes="(max-width: 767px) 64vw, 22vw"
            />
            <p className={styles.rajaBadge}><strong>Raja</strong><span>Marketing manager</span></p>
          </div>
        </section>
      </section>
      </HorizontalScrollSection>
      <section className={styles.seriousKit} aria-labelledby="serious-kit-title">
        <div className={styles.seriousKitIntro}>
          <p className={styles.seriousKitEyebrow}>A bunch of serious kit</p>
          <h2 id="serious-kit-title">
            <span>Big brands for</span>
            <span>Real results.</span>
          </h2>
          <p className={styles.seriousKitCopy}>From the lasers we use to our aftercare recommendations; every product and system we use has a world-wide fanbase that includes the whole LMO team.</p>
        </div>
        <div className={styles.seriousKitProduct}>
          <p className={styles.sopranoWordmark}><span>Soprano</span><small>Titanium</small></p>
          <Image
            className={styles.seriousKitMachine}
            src="/images/laser-hand-machine.png"
            alt="Soprano Titanium laser handpiece"
            width={1122}
            height={1402}
            sizes="(max-width: 767px) 42vw, 18vw"
          />
        </div>
      </section>
      <section className={styles.smoothSkin} aria-labelledby="smooth-skin-title">
        <p className={styles.smoothSkinEyebrow}>Bye hair</p>
        <h2 id="smooth-skin-title">
          <span>Who needs</span>
          <span>filters? Flaunt</span>
          <span>Smooth <strong>skin.</strong></span>
        </h2>
        <p className={styles.smoothSkinCopy}>What are your hair-free vibes? Wanna be more comfy raising your arms or willing to show off your legs? Do you have a touchable back or a slick-feeling chest? It&apos;s all possible. Peep our gag-worthy results.</p>
        <nav className={styles.smoothSkinLinks} aria-label="Browse treatments by audience">
          <a href="#treatments">For her <span aria-hidden="true">→</span></a>
          <a href="#treatments">For him <span aria-hidden="true">→</span></a>
          <a href="#treatments">For them <span aria-hidden="true">→</span></a>
        </nav>
        <span className={styles.smoothSkinWatermark} aria-hidden="true">NO FILTERS</span>
      </section>
      <section className={styles.resultsComparison} aria-label="Laser hair removal before and after comparison">
        <BeforeAfterSlider />
      </section>
      <section className={styles.whyChooseUs} aria-labelledby="why-choose-us-title">
        <div className={styles.whyChooseUsCard}>
          <span className={styles.justFacts}>Just facts</span>
          <div className={styles.whyChooseUsCopy}>
            <h2 id="why-choose-us-title">Why choose us</h2>
            <ul className={styles.whyChooseUsList}>
              <li><strong>Faster</strong><span> — see results in just one session</span></li>
              <li><strong>Simpler</strong><span> — same-day consultation and patch test</span></li>
              <li><strong>Better</strong><span> — proven dry-brushing step preps skin</span></li>
              <li><strong>Gentler</strong><span> — pain-free treatment, even on tans</span></li>
              <li><strong>Easier</strong><span> — works great on all pigmented hair</span></li>
            </ul>
          </div>
          <Image
            className={styles.whyChooseUsKit}
            src="/images/why-choose-us-kit.png"
            alt="Illustrated dry-brushing kit with an aloe plant, book, and body brush"
            width={1024}
            height={1024}
            sizes="(max-width: 767px) 70vw, 22rem"
          />
        </div>
      </section>
      <section className={styles.howItWorks} aria-labelledby="how-it-works-title">
        <div className={styles.howItWorksIntro}>
          <div className={styles.rabiaProfile}>
            <Image
              className={styles.rabiaImage}
              src="/images/rabia.webp"
              alt="Rabia, senior therapist at Laser Me Out"
              width={800}
              height={800}
              sizes="(max-width: 767px) 75vw, 24rem"
            />
            <div className={styles.rabiaBadge}>
              <strong>Rabia</strong>
              <span>Senior therapist</span>
            </div>
          </div>
          <div className={styles.howItWorksLead}>
            <h2>Three steps to<br />touchable skin</h2>
            <p>It&apos;s as close as you can get to ‘abracadabra’ without a magic wand.</p>
            <span className={styles.howItWorksArrow} aria-hidden="true">↓</span>
          </div>
        </div>
        <article className={styles.howItWorksCard}>
          <span className={styles.goPro}>Go pro</span>
          <h2 id="how-it-works-title">How it works</h2>
          <p>We do laser right! Not only is our machine top-of-the-line, but it has a cooling tip to keep treatments gentle. It works on all skin tones (even tans) and the 3 wavelengths mean it banishes hair faster than other laser hair removal machines. Plus, our unique dry brushing approach takes all your exfoliation worries away for perfectly-prepped skin every time.</p>
          <nav className={styles.howItWorksLinks} aria-label="How it works actions">
            <a href="#treatments">Book now</a>
            <a href="#contact">Talk to us</a>
          </nav>
        </article>
      </section>
      <HorizontalScrollSection>
        <section className={styles.treatmentSteps} aria-label="The three steps to touchable skin">
          <article className={styles.treatmentStep}>
            <span className={styles.stepNumber}>Step one</span>
            <Image className={styles.stepIllustration} src="/images/board.webp" alt="Illustrated consultation clipboard" width={500} height={500} sizes="(max-width: 767px) 55vw, 14rem" />
            <div className={styles.stepGlow} aria-hidden="true" />
            <div className={styles.stepCopy}>
              <h2>Chat</h2>
              <p>A quick consultation.</p>
            </div>
          </article>
          <article className={styles.treatmentStep}>
            <span className={styles.stepNumber}>Step two</span>
            <Image className={styles.stepIllustration} src="/images/lasermachine.webp" alt="Illustrated laser and dry-brushing tools" width={500} height={500} sizes="(max-width: 767px) 55vw, 14rem" />
            <div className={styles.stepGlow} aria-hidden="true" />
            <div className={styles.stepCopy}>
              <h2>Treat</h2>
              <p>Shave, dry brush, zap.</p>
            </div>
          </article>
          <article className={styles.treatmentStep}>
            <span className={styles.stepNumber}>Step three</span>
            <Image className={styles.stepIllustration} src="/images/body.webp" alt="Illustrated smooth body" width={500} height={500} sizes="(max-width: 767px) 55vw, 14rem" />
            <div className={styles.stepGlow} aria-hidden="true" />
            <div className={styles.stepCopy}>
              <h2>Enjoy</h2>
              <p>Silky skin from sesh one.</p>
            </div>
          </article>
        </section>
      </HorizontalScrollSection>
      <section id="forher" className={styles.audienceTreatments} aria-label="Laser hair removal for women and men">
        <Image
          className={styles.audienceLaser}
          src="/images/hero-flying-laser.png"
          alt=""
          width={1293}
          height={1200}
          sizes="(max-width: 767px) 34vw, 17rem"
        />
        <article className={styles.audienceCardHer}>
          <span className={styles.audienceTab}>For her</span>
          <div className={styles.audienceHerCopy}>
            <h2>Laser hair<br />removal<br />for women</h2>
            <p>Forget plucking your chin, waxing your bikini and shaving your legs. It&apos;s time to embrace the hair-free lifestyle, sis. You&apos;ve got better things to do than hair removal.</p>
            <a href="#consultation">Book now</a>
          </div>
          <Image
            className={styles.audienceFemaleIcon}
            src="/images/for-her-icon.webp"
            alt=""
            width={300}
            height={398}
            sizes="(max-width: 767px) 28vw, 10rem"
          />
          <Image
            className={styles.audienceWoman}
            src="/images/for-her-woman.webp"
            alt="Woman enjoying smooth skin"
            width={500}
            height={1125}
            sizes="(max-width: 767px) 52vw, 17rem"
          />
        </article>
        <Image
          className={styles.audienceMaleIcon}
          src="/images/for-him-icon.webp"
          alt=""
          width={300}
          height={300}
          sizes="(max-width: 767px) 28vw, 11rem"
        />
        <article className={styles.audienceCardHim}>
          <span className={styles.audienceTab}>For him</span>
          <Image
            className={styles.audienceMen}
            src="/images/for-him-men.webp"
            alt="Two men enjoying smooth skin"
            width={600}
            height={900}
            sizes="(max-width: 767px) 56vw, 19rem"
          />
          <div className={styles.audienceHimCopy}>
            <h2>Laser hair<br />removal<br />for men</h2>
            <p>Bacne is not a life sentence and you can get smooth skin without bumps and prickles. Edge up your beard and make ingrowns history. Let&apos;s simplify your routine.</p>
            <a href="#consultation">Book today</a>
          </div>
        </article>
        <Image
          className={styles.audienceLaserHim}
          src="/images/hero-flying-laser.png"
          alt=""
          width={1293}
          height={1200}
          sizes="(max-width: 767px) 34vw, 17rem"
        />
        <article className={styles.audienceCardThem}>
          <span className={styles.audienceTab}>For them</span>
          <div className={styles.audienceThemCopy}>
            <h2>Laser hair<br />removal<br />for them</h2>
            <p>No matter what kind of fuzz you want (or don&apos;t) we&apos;re doing gender-affirming care differently. Let&apos;s talk about your dream hair goals and make a plan together.</p>
            <a href="#consultation">Get started</a>
          </div>
          <Image
            className={styles.audienceThemIcon}
            src="/images/for-them-icon.webp"
            alt=""
            width={500}
            height={500}
            sizes="(max-width: 767px) 28vw, 11rem"
          />
          <Image
            className={styles.audienceGroup}
            src="/images/for-them-group.webp"
            alt="A diverse group of Laser Me Out clients"
            width={1056}
            height={557}
            sizes="(max-width: 767px) 88vw, 33rem"
          />
        </article>
        <Image
          className={styles.audienceLaserThem}
          src="/images/hero-flying-laser.png"
          alt=""
          width={1293}
          height={1200}
          sizes="(max-width: 767px) 34vw, 17rem"
        />
      </section>
      <section className={styles.lastBit} aria-labelledby="last-bit-title">
        <div className={styles.lastBitPortrait}>
          <Image
            className={styles.lastBitChloe}
            src="/images/chloe-yellow-uniform.avif"
            alt="Laser Me Out therapist in a yellow uniform"
            width={800}
            height={1200}
            sizes="(max-width: 767px) 72vw, 22rem"
          />
          <div className={styles.lastBitRuler} aria-hidden="true">
            <span />
            <p>Bye bye razors<br />hello smooth skin</p>
          </div>
        </div>
        <article className={styles.lastBitCopy}>
          <h2 id="last-bit-title">We mean every last bit!</h2>
          <p>At Laser Me Out, our top-to-tail laser hair removal package covers every area you can imagine. From head to toe, including the face, genitals and even the peri-anal area; we&apos;ve got you covered.</p>
          <p>Our skilled professionals are trained to handle larger areas like your legs, arms and back, as well as more delicate areas like the face and bum. Whether you want a completely hair-free face or a Hollywood-style bikini line, we&apos;ll tailor every treatment to meet your unique needs.</p>
          <nav className={styles.lastBitActions} aria-label="Make an appointment or contact us">
            <a href="#consultation">Make an appointment <span aria-hidden="true">→</span></a>
            <a href="#contact">Talk to us <span aria-hidden="true">→</span></a>
          </nav>
        </article>
      </section>
      <NoHorrorStories />
      <PackageCarousel />
      <footer id="contact" className={styles.siteFooter}>
        <span className={styles.footerWatermark} aria-hidden="true">LASER ME OUT</span>
        <Image
          className={`${styles.footerLaser} ${styles.footerLaserLeft}`}
          src="/images/flying-laser-footer-left.webp"
          alt=""
          width={600}
          height={600}
          sizes="(max-width: 767px) 38vw, 17vw"
        />
        <div className={styles.footerInner}>
          <a className={styles.footerLogo} href="#top" aria-label="Laser Me Out home">
            <span>Laser</span><span>Me</span><span>Out</span>
          </a>
          <div className={styles.footerLinks}>
            <section aria-labelledby="footer-visit-title">
              <h2 id="footer-visit-title">Most visited</h2>
              <a href="#treatments">Bye hair</a>
              <a href="#package-carousel">Guilt-free pricing</a>
              <a href="#treatments">PCOS membership</a>
              <a href="#terms">Terms &amp; conditions</a>
            </section>
            <section aria-label="More Laser Me Out links">
              <a href="#about">Team LMO</a>
              <a href="#talk">LMO talk</a>
              <a href="#contact">Contact us</a>
              <a href="#faqs">FAQs</a>
            </section>
          </div>
          <nav className={styles.footerSocials} aria-label="Social media">
            <a href="https://www.instagram.com/lasermeout" target="_blank" rel="noreferrer" aria-label="Instagram"><span aria-hidden="true">◎</span></a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><span aria-hidden="true">f</span></a>
            <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok"><span aria-hidden="true">♪</span></a>
            <a href="https://wa.me/" target="_blank" rel="noreferrer" aria-label="WhatsApp"><span aria-hidden="true">◔</span></a>
          </nav>
        </div>
        <Image
          className={`${styles.footerLaser} ${styles.footerLaserRight}`}
          src="/images/hero-flying-laser.png"
          alt=""
          width={1293}
          height={1200}
          sizes="(max-width: 767px) 46vw, 23vw"
        />
        <div className={styles.footerBar}>
          <span>© Laser Me Out 2026</span>
          <a id="terms" href="#terms">Legal</a>
          <span>Designed &amp; developed by Wagemut.studio</span>
        </div>
      </footer>
    </>
  );
}
