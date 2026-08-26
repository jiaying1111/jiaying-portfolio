# Final Media Library

Updated: 2026-08-26

This document is the source of truth for the final local media exports used by
Homepage, Experience Design, Artwork, and About. These files are complete and
do not require another Figma request.

All paths below are public URL paths relative to `public/`.

## Figma page references

Full-page exports are stored in:

`docs/figma-reference/export-2026-08-26/`

| Page/state | Reference file |
| --- | --- |
| Homepage intro | `home-intro.png` |
| Homepage / Digital No More Mad | `home-digital-no-more-mad.png` |
| Homepage / DreamWhorl | `home-dreamwhorl.png` |
| Homepage / Little Red Riding Hood | `home-little-red-riding-hood.png` |
| Homepage / Nushu | `home-nushu.png` |
| Experience / Projects | `experience-projects.png` |
| Experience / Practice | `experience-practice.png` |
| Artwork / Installation | `artwork-installation.png` |
| Artwork / Illustration | `artwork-illustration.png` |
| About visual layout | `about-layout.jpg` |
| About content supplement | `about-content-reference.png` |

Reference files are for visual comparison only. Never render a complete page
reference as a webpage background or as one full-page image.

## Homepage hero carousel

Use the five assets in this exact order:

1. `/images/home/hero/slide-01-intro.svg`
2. `/images/home/hero/slide-02-digital-no-more-mad.svg`
3. `/images/home/hero/slide-03-dreamwhorl.svg`
4. `/images/home/hero/slide-04-little-red-riding-hood.svg`
5. `/images/home/hero/slide-05-nushu.svg`

These SVGs are complete Figma exports containing the intended image, crop,
gradient, typography, and composition. Treat each one as a carousel slide, not
as five layers displayed simultaneously.

## Homepage Experience Design cards

Each card has exactly two states. Display `regular` initially; switch to
`hover` while the card is hovered or keyboard-focused.

| Project | Regular | Hover |
| --- | --- | --- |
| Digital No More Mad | `/images/home/experience-cards/digital-no-more-mad-regular.svg` | `/images/home/experience-cards/digital-no-more-mad-hover.svg` |
| DreamWhorl | `/images/home/experience-cards/dreamwhorl-regular.svg` | `/images/home/experience-cards/dreamwhorl-hover.svg` |
| Little Red Riding Hood | `/images/home/experience-cards/little-red-riding-hood-regular.svg` | `/images/home/experience-cards/little-red-riding-hood-hover.svg` |
| Nushu | `/images/home/experience-cards/nushu-regular.svg` | `/images/home/experience-cards/nushu-hover.svg` |

Keep a stable media wrapper and crossfade the two layers. Never replace the
entire card DOM on hover; doing so causes flicker.

## Homepage Artwork rail

Use all eight assets, in order, as one continuous horizontal rail:

1. `/images/home/artwork-rail/rail-item-01.svg`
2. `/images/home/artwork-rail/rail-item-02.svg`
3. `/images/home/artwork-rail/rail-item-03.svg`
4. `/images/home/artwork-rail/rail-item-04.svg`
5. `/images/home/artwork-rail/rail-item-05.svg`
6. `/images/home/artwork-rail/rail-item-06.svg`
7. `/images/home/artwork-rail/rail-item-07.svg`
8. `/images/home/artwork-rail/rail-item-08.svg`

The rail should loop continuously. Duplicate the rendered track in the DOM for
the seamless loop; do not create duplicate asset files.

## Experience Design listing images

Each project folder contains three hover-loop frames. `frame-01` is the resting
image. On hover or keyboard focus, loop `01 → 02 → 03 → 01` inside a fixed-size
media wrapper.

| Project | Folder |
| --- | --- |
| Digital No More Mad | `/images/experience/digital-no-more-mad/` |
| DreamWhorl | `/images/experience/dreamwhorl/` |
| Little Red Riding Hood | `/images/experience/little-red-riding-hood/` |
| Nushu | `/images/experience/nushu/` |

Every folder contains `frame-01`, `frame-02`, and `frame-03`; extensions may be
SVG, PNG, or JPG. Use the actual extension on disk.

## Artwork listing images

Each artwork folder also contains three hover-loop frames with the same
`01 → 02 → 03 → 01` behavior.

- `/images/artwork/resounding-nature/`
- `/images/artwork/present-and-absent/`
- `/images/artwork/circular-ruins/`
- `/images/artwork/invisible-man/`
- `/images/artwork/dreamgaze/`
- `/images/artwork/your-destination/`
- `/images/artwork/animal-city/`
- `/images/artwork/imaginary-beings/`
- `/images/artwork/hypnagogia/`

Every folder contains `frame-01`, `frame-02`, and `frame-03`. `frame-01` is the
reference/listing image shown in the Figma page export.

## About

- Portrait: `/images/about/portrait.jpg`
- Visual layout: `docs/figma-reference/export-2026-08-26/about-layout.jpg`
- Content supplement: `docs/figma-reference/export-2026-08-26/about-content-reference.png`

The About export is intentionally incomplete. Reconstruct it as real HTML and
complete the page using both references. Required sections:

1. About intro, social links, biography, and portrait
2. Education
3. Experience
4. Extracurricular Activities
5. Awards
6. Personal Skills
7. Global footer

Use `about-layout.jpg` for grid, spacing, typography, rules, and hierarchy. Use
`about-content-reference.png` to supplement the lower-page content. Repeated
placeholder entries visible in the layout export are not authoritative copy
and must not be duplicated blindly.

## Shared icons

- `/icons/social/email.svg`
- `/icons/social/instagram.svg`
- `/icons/social/linkedin.svg`
- `/icons/social/next-arrow.svg`

## Interaction contract

- Preserve each exported asset's aspect ratio; never stretch.
- Keep card titles and project information as semantic HTML even if an SVG
  already contains visual text.
- Keep hover hit areas stable to prevent flicker.
- Pause auto-animation when the page is hidden.
- Pause the Homepage Artwork rail on hover/focus.
- Respect `prefers-reduced-motion`: show a static first frame and disable
  autoplay/continuous motion.
- On touch devices, show `frame-01` and keep all project titles/actions visible;
  hover must never be the only way to discover content.
- Use meaningful alt text for informative images and empty alt text only for
  genuinely decorative images.

