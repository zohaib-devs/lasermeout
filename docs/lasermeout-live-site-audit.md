# Laser Me Out live-site audit

**Scope.** Research-only visual and functional audit of the public home page, [lasermeout.com](https://www.lasermeout.com/), inspected 13 September 2026. This is a replication brief, not an instruction to copy third-party assets, proprietary code, testimonials, or copy without permission.

## Executive read

Laser Me Out is a deliberately maximal, editorial single-page clinic site: off-white paper, near-black type, violently bright yellow/orange/pink/lavender accents, oversized all-caps type, collage-like product/people illustrations, and an always-present vertical navigation rail. The page alternates conventional content blocks with interaction-led, horizontally scrolled story sections. Its voice is casual, playful, inclusive, and highly conversion-oriented (consultation booking and WhatsApp appear repeatedly).

The live HTML identifies the build as Webflow and loads its first-party Webflow CSS plus a small public LMO stylesheet. It also loads GSAP/ScrollTrigger, dotLottie, Swiper-marked carousels, Webflow tab/form primitives, and a Phorest booking destination. [Live HTML](https://www.lasermeout.com/) · [first-party stylesheet](https://cdn.prod.website-files.com/66f2b369a6c44f05deaef068/css/lmo-optimized.webflow.shared.cf5c83e0d.css) · [LMO interaction stylesheet](https://cdn.jsdelivr.net/npm/@lmo-uk/lmo@1/dist/index.css)

## Brand system

### Colour palette

| Role | Hex | Use observed in the live CSS |
| --- | --- | --- |
| Paper / main background | `#F9F9F3` | Primary page ground; light button and tab surface. |
| Ink | `#0D0D0D` | Primary text, dark panels, selected tabs. |
| Acid yellow | `#FCFD02` | Main pill CTAs, navigation and emphasis. |
| Hot orange-red | `#FE4C28` | Hero wordmark/type and inline heading highlights. |
| Pink | `#FDAEDE` | Alternating content field and decorative accent. |
| Lavender | `#C6B0D4` | Alternate field and purple highlighted word treatment. |
| Pale green | `#CEF5CA` | Supporting alternate field/success colour. |

These are named custom properties in the first-party stylesheet, rather than estimated from screenshots. The orange-highlight heading treatment uses light text on an orange inline block; the purple variant swaps the block to lavender. [Stylesheet source](https://cdn.prod.website-files.com/66f2b369a6c44f05deaef068/css/lmo-optimized.webflow.shared.cf5c83e0d.css)

### Typography

- **Family:** `MadeTommy-Personal`, with sans-serif fallback. The live CSS self-hosts MADE Tommy Light (300), Regular (400), Medium (500), Bold (700), ExtraBold (800), and Black (900), all `font-display: swap`. Do not substitute the starter project's Geist if visual fidelity is the goal. [Font declarations](https://cdn.prod.website-files.com/66f2b369a6c44f05deaef068/css/lmo-optimized.webflow.shared.cf5c83e0d.css)
- **Heading personality:** uppercase, extra-heavy/black, compact leading. H2 is `6rem`, weight 900, line-height `.9`; H3 is `2.5rem`, weight 800, line-height `.9`; eyebrow/subhead is `1.5rem`, weight 900. The mobile rules reduce H2 to `13vw` and H3 to `6vw`. [Type rules](https://cdn.prod.website-files.com/66f2b369a6c44f05deaef068/css/lmo-optimized.webflow.shared.cf5c83e0d.css)
- **Body:** conversational regular-weight sans; lead/body intro (`.infoheading`) is `1.25rem` with a 32rem max width, narrowed to 20rem on the smallest breakpoint. Small text is 1.25rem desktop/1rem mobile. [Type rules](https://cdn.prod.website-files.com/66f2b369a6c44f05deaef068/css/lmo-optimized.webflow.shared.cf5c83e0d.css)
- **Hero:** deliberately non-uniform scale: `skip the` 3.75rem, `shave` 11.25rem, `go hair-free` 5.625rem, `forever` 12.5rem; all uppercase, orange, 900 weight, `.85` line-height. It converts to vw sizing at narrower widths. [Hero CSS](https://cdn.prod.website-files.com/66f2b369a6c44f05deaef068/css/lmo-optimized.webflow.shared.cf5c83e0d.css)

### Components and spacing

- Content is centred in a large 80rem container; global horizontal gutters are 2.5rem desktop and 1.25rem mobile. Large vertical sections use 8rem desktop, 6rem tablet, and 4rem mobile padding. [Layout CSS](https://cdn.prod.website-files.com/66f2b369a6c44f05deaef068/css/lmo-optimized.webflow.shared.cf5c83e0d.css)
- Primary controls are high-contrast yellow pills: uppercase, 700 weight, 0.938rem, 1rem padding, 60px radius, 15.625rem minimum width, and a transform transition. The selected tab becomes near-black with paper-coloured text. [Button CSS](https://cdn.prod.website-files.com/66f2b369a6c44f05deaef068/css/lmo-optimized.webflow.shared.cf5c83e0d.css)
- Imagery is not generic stock-card decoration: it mixes cutout people, 3D-ish laser/product objects, body-zone illustrations, hand-drawn icons, pattern/background word art, and stickers/arrows. The live page uses responsive `srcset` assets, mostly lazy loaded. [Live image inventory and alt text](https://www.lasermeout.com/)

## Header and hero

1. A full-width, dismissible sale banner sits above the rail: yellow/orange gradient, centred 14px message, compact red `SALE` badge, and underlined red **Book Now** link to Birmingham Phorest booking. Its present message is “The Birmingham clinic is now open and the sale is live.” [Live page](https://www.lasermeout.com/)
2. The main navigation is a **fixed left-side rail** on desktop (`z-index: 9000`, max width 5rem) with translucent grey-blue ground. It contains the square LMO mark, a vertical/rotated consultation CTA, social/menu controls, and a full-height overlay menu. The menu list uses 3rem, 800-weight yellow uppercase links; on hover, a yellow plane expands behind the text and the text becomes black. [Navigation CSS](https://cdn.prod.website-files.com/66f2b369a6c44f05deaef068/css/lmo-optimized.webflow.shared.cf5c83e0d.css)
3. The hero is a centred, nearly viewport-height scene (`100dvh`, 68rem min desktop; constrained to `80svh`/48rem max on a small viewport), with the four-line orange word stack, a jumping-woman cutout, cloud/sunset banner art, and an animated flying laser. [Live hero](https://www.lasermeout.com/)
4. The “book your consultation” control opens a location-choice modal for London or Birmingham, then uses external Phorest URLs. This is an important flow to reproduce functionally, not a normal in-page anchor. [Live page](https://www.lasermeout.com/)

## Page architecture and content blocks

The home page is exceptionally long. Use these section families and order as the structural map; exact promotional prices, staff roster, blog cards, and clinic information are live content that will need an agreed content strategy rather than blind copying.

1. **Hero / location chooser** — “skip the shave / go hair-free forever”.
2. **Hair removal for every body** — “Stop shaving forever. Wave waxing goodbye.” Women/Men Webflow tabs, then a secondary horizontal body-area selector with corresponding body-line artwork (legs through intimate zones and face). [Live section](https://www.lasermeout.com/)
3. **Fuzz-free / LMO difference** — dry-brushing proposition, founder portrait/quote, audience reassurance (“Who we help” and “Newbie friendly”).
4. **Equipment and social proof** — “A BUNCH OF SERIOUS KIT / BIG BRANDS FOR REAL RESULTS”; followed by filter-free results, gender audience tabs (for her/him/them), facts, and treatment benefits. [Live section](https://www.lasermeout.com/)
5. **Process** — “Three Steps to touchable skin”: Chat, Treat, Enjoy, with illustration-led cards and a more technical “How it works” explanation.
6. **Audience landing panels** — dark/light editorial panels for women, men, and gender-affirming care; each has a direct booking CTA.
7. **Packages and comparison** — “No Horror. STORIES.”, package category tabs/cards, durations, price/course options, zone-overview triggers, PCOS membership, then educational anti-coupon/home-kit/dry-brushing/skin-care cards. [Live pricing content](https://www.lasermeout.com/)
8. **Results/testimonials and PCOS** — before/after imagery, testimonial heading, PCOS membership, a Shireen story video trigger, Southeast Asian skin and PCOS callouts.
9. **Team and community** — horizontal team roster cards, social/careers prompts, opening-hours note.
10. **LMO Talk** — an extensive latest-post list/cards linked to the blog; this must be CMS/data-driven if replicated, rather than hardcoded decorative text. [Live blog list](https://www.lasermeout.com/blog)
11. **Contact and map** — two location detail panels, WhatsApp and telephone controls, a contact form (name/email/mobile/message), a “where to find us” anchor, and visual map.

## Footer

The footer continues the editorial feel rather than becoming a generic dark utility bar: a large branded background image, LMO logo, “most visited” link groups, social icons, legal/copyright, and a Wagemut Studio credit. Desktop uses a wide flex composition (logo left, content roughly 75% wide, two link columns); it becomes a centred vertical stack on smaller screens. Footer heading is 2.5rem/900 uppercase and links are 1.25rem/700 uppercase. [Live footer](https://www.lasermeout.com/) · [footer CSS](https://cdn.prod.website-files.com/66f2b369a6c44f05deaef068/css/lmo-optimized.webflow.shared.cf5c83e0d.css)

## Motion, interaction, and responsive requirements

- **Intro choreography:** the hero word spans slide apart horizontally, the woman and banner move away vertically, then desktop navigation shifts into place. The site uses GSAP timelines. [Live source](https://www.lasermeout.com/)
- **Scroll storytelling:** desktop/tablet (`min-width: 768px`) turns several wide tracks into pinned horizontal scroll narratives, including the long section, short-card section, and team section. On mobile, these horizontal-scroll triggers are not registered—content must remain readable in ordinary vertical flow. [Live source](https://www.lasermeout.com/)
- **Entrance animation:** marked objects slide left/right approximately 4rem with opacity transition when they enter the viewport; select items pulse. Floating laser art and Lottie animations play/pause based on viewport visibility. [Live source](https://www.lasermeout.com/)
- **Interactive elements:** Webflow women/men tabs; body-area Swiper-like carousels; package tabs/cards; popup overlay (contact and booking/location); video play controls; nav overlay; anchor links; form state/success/failure; WhatsApp and external booking. The site also invokes a timed information popup after 10 seconds. [Live source](https://www.lasermeout.com/)
- **Breakpoints observed:** core rules cover max 991px, 767px, and 479px. The rail becomes a top-oriented/header interaction at smaller widths, gutters halve to 1.25rem, sections compress, hero type uses viewport-relative sizes, and footer turns into one centred column. The auxiliary public CSS adds several intermediate desktop/tablet safeguards. [Webflow CSS](https://cdn.prod.website-files.com/66f2b369a6c44f05deaef068/css/lmo-optimized.webflow.shared.cf5c83e0d.css) · [responsive interaction CSS](https://cdn.jsdelivr.net/npm/@lmo-uk/lmo@1/dist/index.css)

## Replication priorities and cautions

1. Build the visual system first: MADE Tommy (or a licensed close substitute), the exact six-colour palette, oversized uppercase scale, inline colour-block words, pill buttons, and collage asset language carry more of the identity than standard layout alone.
2. Make a deliberate mobile alternative for every desktop horizontal scroll scene. Do not merely hide overflow; retain every card/step in a linear, accessible reading order.
3. Treat booking, location selection, navigation, popups, tabs, form validation, video, and accessible keyboard/focus behaviour as separate functional workstreams.
4. Prefer original/licensed illustrations, photos, copy, testimonials, and marks. The audit documents the design grammar and information architecture, not a licence to reuse source assets.
5. Preserve reduced-motion support when implementing. The current source is motion-rich but does not itself demonstrate a visible reduced-motion policy in this audit; an accessible replica should add one.

