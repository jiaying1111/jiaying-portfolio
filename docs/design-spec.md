# Design Specification

Status: **Read-only Figma extraction partially complete**

Complete this document after inspecting the source frames. Do not guess missing
values from the prototype thumbnail.

## Source verification

- File key: `Yxh4ZBgzy7N7KdV4PDxVGA`
- Entry node: `78:61`
- Connected account: `jiayingli0128@gmail.com`
- Last verification: `2026-08-20`
- Identity verified: `jiayingli0128@gmail.com` (`Full` seat, Starter plan).
- Access test: `get_design_context` successfully read Homepage node `78:61`.
- Homepage asset discovery: more than 20 raw source images; smaller approved
  nodes are required to avoid the per-call truncation limit.
- Eight project-card state images are now stored locally. Their exact source
  nodes, dimensions, checksums, and paths are in `docs/asset-manifest.md`.
- Further extraction is paused because the Figma MCP reported that the
  Starter-plan tool-call limit has been reached.

Figma operations for this task are read-only. Record the verified identity,
inspected node IDs, and local asset paths before UI implementation.

## Extraction checklist

When Figma calls are available again, inspect and record all remaining items
before final page implementation:

- Page and frame hierarchy, including desktop and mobile variants
- Component instances, variants, and reusable navigation/footer structures
- Local styles and variables for typography, color, spacing, radius, and effects
- Auto Layout direction, gaps, padding, alignment, min/max sizes, and constraints
- Image crops, asset export formats, filenames, dimensions, and alt-text intent
- Prototype connections, triggers, transition types, easing, and duration
- Fixed/sticky layers, clipping, horizontal/vertical scrolling, and anchor targets
- Hover/focus/pressed states and touch-screen alternatives
- Responsive differences that are explicit in the source design
- Accessibility gaps that require a documented implementation adaptation

## Target frames

| Route | Desktop frame | Mobile frame | Status |
| --- | --- | --- | --- |
| `/` | `78:61` — Frame 8, 1440 × 2922; Frame 11 alternate hero, 1440 × 2953 | None supplied | Full-page references available |
| `/experience-design` — Projects tab | `97:66` — Frame 12, 1440 × 2112 | None supplied | Full-page reference available |
| `/experience-design` — Practice tab | `152:448` — Frame 20, 1440 × 2112 | None supplied | Full-page reference available |
| `/projects/[slug]` | No approved project-detail frame | None supplied | Blocked |
| `/artwork` — Installation | `134:87` — Frame 17, 1440 × 2112 | None supplied | Full-page reference available |
| `/artwork` — Illustration | `157:679` — Frame 21, 1440 × 4646 | None supplied | Full-page reference available |
| `/about` | No approved source node | None supplied | Blocked |

The six desktop reference PNGs and their exact meanings are documented in
`docs/figma-reference/README.md`. Frame 12 and Frame 20 are Experience Design
listing-page tab states, not individual project-detail pages.

## Foundation tokens

Measured from `docs/figma-reference/` desktop PNGs at 1440px. Pending Figma
MCP values remain unconfirmed; these are PNG measurements, not Figma variables.

- Typefaces: Inter, Noto Sans (CSS stack; no remote webfont download)
- Page background: `#FFFFFF`
- Text primary: `#000000`
- Text muted: `#BFBFBF`
- Accent red (category / year): `#FF2020`
- Border subtle: `#D9D9D9`
- Placeholder fill: `#E6E6E6`
- Footer background: `#000000`
- Content left inset: `181px` (gutter); content width `1078px`
- Header logo: y ≈ 35, 14px bold, wide tracking, all-caps
- Footer: full-bleed black, height `392px`; columns start ≈ 187 / 408 / 708 / 869
- Listing photo: `623 × 420`; text column `427px`; column gap `30px`
- Homepage project cards: ≈ `521 × 438`, 2×2, gap ≈ `29px`
- Homepage artwork rail tiles: `350 × 350`, gap `15px`
- Homepage hero: ≈ `900px` tall; header overlays hero
- Breakpoints (provisional, no mobile frames): tablet `< 1440`, stack `< 900`

## Components

- Header/navigation: TBD
- Hero: TBD
- Project card/grid: four source component sets; regular and hover exports are
  available locally. See the component-state table below.
- Artwork rail/gallery: TBD
- Footer: TBD
- Buttons and links: TBD

## Project-card component states

| Card | Component set | Regular variant | Hover variant | Visual result |
| --- | --- | --- | --- | --- |
| Digital Nomad | `203:290` | `203:277` | `203:293` | Grayscale regular image; color image with dark overlay and centered title on hover |
| DreamWhorl | `215:319` | `215:318` | `215:320` | Grayscale regular image; color image with dark overlay and centered title on hover |
| Little Red Riding Hood | `215:330` | `215:329` | `215:331` | Grayscale regular image; color image with dark overlay and centered title on hover |
| Nushu | `215:344` | `215:343` | `215:345` | Grayscale regular image; color image with dark overlay and centered title on hover |

The last two hover variants are named `Variant2` in Figma rather than `Hover`.
Treat their source-node relationship and visual state as authoritative; do not
rename or modify the Figma components.

The Experience Page component set `215:375` contains three variants:
`215:374`, `215:376`, and `215:383`. They appear intended for a regular state
followed by two image states, but trigger timing, transition, and looping must
be read from prototype reactions before implementation.

## Interaction and motion

- Hover states: use the exported paired card images above. On touch devices,
  expose the project title without requiring hover.
- Image transitions: TBD
- Anchor scrolling: TBD
- Continuous artwork motion: TBD
- Mobile interaction alternatives: TBD
- Reduced-motion behavior: TBD

Do not invent easing, duration, autoplay timing, or scroll behavior while the
prototype reactions remain uninspected.

## Accessibility review

- Heading structure: Pending
- Keyboard behavior: Pending
- Focus states: Pending
- Color contrast: Pending
- Image alt text: Pending

Current project-card alt-text intent should describe the project preview image,
while the visible project title remains real text in implementation. The local
hover exports include rasterized title text because they are exact Figma state
references; Cursor should not use them as the final accessible title layer
without a semantic text equivalent.
