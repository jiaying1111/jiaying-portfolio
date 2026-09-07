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

Each card has a `default` image plus three hover frames. Display `*-default`
initially. On hover or `:focus-visible`, hide the default image, loop
`01 → 02 → 03 → 01` at about 3000ms per frame with a 300ms ease crossfade, and
layer `shared-hover-overlay.png` above the frames so the looping photos remain
visible through the mask. Center `project.title` in
white HTML over the overlay. Leaving or blurring resets to frame 01 and the
default image. Reduced motion shows frame 01, the overlay, and the title with
no loop.

Shared overlay: `/images/home/experience-cards/shared-hover-overlay.png`

Keep all layers in one stable media wrapper and switch with opacity. Never
replace the card DOM on hover; doing so causes flicker. Use the overlay PNG as
exported; do not recreate the mask in CSS.

| Project | Default | Hover frames |
| --- | --- | --- |
| Digital No More Mad | `digital-no-more-mad-default.svg` | `digital-no-more-mad-hover-frame-01.svg`, `02.png`, `03.png` |
| DreamWhorl | `dreamwhorl-default.svg` | `dreamwhorl-hover-frame-01.svg`, `02.png`, `03.png` |
| Little Red Riding Hood | `little-red-riding-hood-default.svg` | `little-red-riding-hood-hover-frame-01.svg`, `02.jpg`, `03.jpg` |
| Nushu | `nushu-default.svg` | `nushu-hover-frame-01.png`, `02.png`, `03.png` |

Paths are under `/images/home/experience-cards/`.

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

## Little Red Riding Hood case study

The detail page uses semantic assets under
`/images/projects/little-red-riding-hood/`. The original filenames from the
ZIP are not used in application code.

| Section | Asset |
| --- | --- |
| Hero | `hero/installation-detail.jpg` |
| Idea | `idea/fairy-tale-visual-references.png` |
| Research | narrative analysis cards only |
| Process | `process/blender-geometry-nodes.png` and `process/generative-code.png` sit beside the larger `research/red-hat-generation-grid.png`; then `process/paper-prototype.png` |
| Website | `process/environment-drawing-interface.png` (1830×1054), `process/generated-elements-library.png` (1930×1110) |
| Outcome flow | `process/environment-drawing-interface.png`, `process/generated-elements-library.png`, `process/generated-shapes/shape-yellow.png`, `shape-green.png`, `shape-blue.png`, `outcome/installation-layers.jpg`, `outcome/installation-assembly.jpg` |
| Outcome film | `/videos/5-Reimagination of Little Red Riding Hood.mp4` |

The high-resolution section exports come from `李家莹-总排版-9.zip`. Outcome
stills autoplay in a slow carousel. The hero retains its approved
high-resolution listing image. Each rendered photograph appears only once.

## Nüshu case study

The detail route `/projects/nushu` uses the structured exports under
`/images/projects/nushu/`. Assets are grouped by `hero`, `idea`, `research`,
`process`, and `outcome`. Each still is referenced once. Listing hover frames
stay at `/images/experience/nushu/` as `frame-01` / `frame-02` / `frame-03`.
Original messy filenames are archived in `_source/` and are not served by the
page. The Outcome film is `/videos/3-Nushu.mp4`. See `docs/nushu-refresh.md`.

## Present & Absent case study

The detail route `/artwork/present-and-absent` uses the structured exports
under `/images/artwork/present-and-absent/`. Original dump filenames are
archived in `_source/` and are not served by the page. The Outcome film is
`/videos/2-Present&Absent.mp4`. See `docs/present-and-absent-refresh.md`.

## Re:Sounding Nature case study

The detail route `/artwork/resounding-nature` uses only stills that remain in
`/images/artwork/resounding-nature/`. Each still is referenced once. Listing
hover frames stay at the folder root as `frame-01` / `frame-02` / `frame-03`.
Studio stills from the ARW files in `plants/`, `waves/`, and `wind/` autoplay
in a slow carousel. Waves and wind mechanism stills sit as full-width cards
beside Process, each with a caption. Final outcome carousels the three finished
group shots.
The only served film is `/videos/resounding/final.mp4`.

## Digital No More Mad case study

The detail route `/projects/digital-nomad` follows the narrative wording from
`reference.zip` (pages 17–21). The high-resolution exports from
`李家莹-总排版-10/` are renamed under `/images/projects/digital-no-more-mad/`:

| Section | New semantic assets |
| --- | --- |
| Idea | `idea/digital-nomad-remote-work-observation.png` |
| Research | `digital-nomad-enabling-factors-v2.png`, `digital-nomad-growth-chart-v2.png`, `digital-nomad-definition-matrix.png`, `interview-colin.png`, `interview-ivy.png`, `digital-nomad-resource-ecosystem.png`, `dao-distribution-case-study-v2.png`, `skill-exchange-community-case-study.png` |
| Process | `conceptualization-mapping.png` |
| Outcome | `home-page-interface-v2.png`, `community-forum-interface-v2.png`, `token-wallet-interface-v2.png`, `ai-feedback-interface-v2.png` |

Existing hero, system-map, service-flow, persona, icon-system, and storyboard
exports remain only where the new folder has no equivalent high-resolution
replacement. Application code uses the semantic filenames above rather than the
original Figma export names.
