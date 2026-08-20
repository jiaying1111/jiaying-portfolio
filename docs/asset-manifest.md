# Figma Asset Manifest

Updated: 2026-08-20

Source file: `Yxh4ZBgzy7N7KdV4PDxVGA`  
Verified read-only account: `jiayingli0128@gmail.com`

This file is the durable bridge between Figma and Cursor. Use `Local path` for
implementation and retain the Figma node IDs for visual verification. Do not
replace `Pending` entries with guessed or unrelated images.

## Completed project-card exports

All completed files are PNGs with alpha. The regular files were exported at 2×
resolution. The hover files are exact 1× renders of the Figma variants; they
include the source dark overlay and rasterized title and are primarily visual
state references. In accessible implementation, the title must also exist as
semantic HTML.

| Card / state | Figma node | Local path | Pixels | SHA-256 |
| --- | --- | --- | --- | --- |
| Digital Nomad — regular | `203:277` | `/images/projects/cards/project-card-01-regular@2x.png` | 1042 × 876 | `75e96ca062f51028b5e6fff3f6da0cf23ce52cd6202027b9bdae3f8e9e03a572` |
| Digital Nomad — hover | `203:293` | `/images/projects/cards/project-card-01-hover.png` | 521 × 438 | `f33848d48d38dce1df7a8d508f3b02e8b40ed1a0cb32e25e6487f3e42881a1ab` |
| DreamWhorl — regular | `215:318` | `/images/projects/cards/project-card-02-regular@2x.png` | 1058 × 876 | `6aa04e9629de3ca9870d5adb24b6c648a33ae277f58170f7016a0fae0e42aa4c` |
| DreamWhorl — hover | `215:320` | `/images/projects/cards/project-card-02-hover.png` | 529 × 438 | `f70664864ec3147f0491d4d2bb844dda4426c918fa2a0b08af380be407f30f7a` |
| Little Red Riding Hood — regular | `215:329` | `/images/projects/cards/project-card-03-regular@2x.png` | 1044 × 876 | `06a48ed8b8347ab5e0360390f266c140b32bb61ff3503494c73aa563224358ef` |
| Little Red Riding Hood — hover | `215:331` | `/images/projects/cards/project-card-03-hover.png` | 522 × 438 | `243750041d60da6070cf4eca6e7a6ca18a074456aa9c568cce9894579674a4af` |
| Nushu — regular | `215:343` | `/images/projects/cards/project-card-04-regular@2x.png` | 1060 × 876 | `bc49d63407d5ddced5aea4a398bb4ad9093d9f0ba28aee6a9fa1cf0a4cf5cb9b` |
| Nushu — hover | `215:345` | `/images/projects/cards/project-card-04-hover.png` | 530 × 438 | `2cfe5f4ac8db800914cece1689e629182b3799cfba37b0d06d1eb5c322d679fb` |

Source component sets:

- Digital Nomad: `203:290`
- DreamWhorl: `215:319`
- Little Red Riding Hood: `215:330`
- Nushu: `215:344`

## Pending exports

The following layers were discovered successfully, but their files have not
been saved because the Figma MCP reported that the Starter-plan tool-call limit
was reached. Resume this table instead of rediscovering the file from scratch.

| Area | Figma node(s) | Intended local destination | Status / note |
| --- | --- | --- | --- |
| Homepage hero | `160:72` | `public/images/home/` | Pending; 1590 × 887 source layer |
| Homepage artwork rail | `83:21`, `83:22`, `83:23`, `83:24`, `83:25` | `public/images/artwork/` | Pending; each visible node is 350 × 350; `83:25` contains three image fills |
| Homepage social icons | `261:57`, `261:81`, `261:78` | `public/icons/social/` | Pending; semantic icon names must be confirmed visually before naming |
| Experience Projects listing card sequence | `215:374`, `215:376`, `215:383` | `public/images/projects/` | Pending; three component variants, each 623 × 420; prototype timing still unverified |
| Experience Projects listing media | `115:898` | `public/images/projects/` | Pending; 623 × 420 |
| Experience Practice listing media | `152:463`, `152:478` | `public/images/projects/` | Pending; each 623 × 420 |
| Artwork Installation listing media | `134:139`, `134:185` | `public/images/artwork/` | Pending; each 623 × 420 |
| Artwork Illustration listing media | `157:716`, `157:731`, `157:755`, `157:799`, `158:21`, `158:38`, `158:55` | `public/images/artwork/` | Pending; each 623 × 420 |

## Cursor usage rules

1. Use the completed local paths directly; Figma-generated download URLs are
   temporary.
2. Preserve the documented aspect ratio. Do not stretch a card to a different
   ratio.
3. For hover, implement an image transition plus real overlay text when
   possible. The exported hover render remains the pixel reference.
4. Make the title visible or otherwise available on touch devices; hover cannot
   be the only way to discover a project name.
5. Do not infer autoplay duration, easing, or loop behavior for component set
   `215:375` until its prototype reactions are read.
6. When a pending file is exported, add its pixel dimensions and SHA-256 here,
   then update `docs/design-spec.md` before UI implementation.
