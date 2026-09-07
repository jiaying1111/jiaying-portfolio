# Jiaying Portfolio — Current Figma Design System

Status: **CURRENT — supersedes every earlier design token document**  
Reference package date: 2026-08-26, 06:02–06:04  
Desktop reference width: 1440px

## 2026-09-03 global editorial override

The 2026-09-03 editorial HTML is the layout, surface, and motion reference.
Typography stays on the shared Inter / Noto Sans scale below. Do not copy the
HTML’s 10px navigation; 12px nav with tracking is the site minimum.

- Use a 1160px editorial content measure, 78px header, thin gray rules, pale
  gray canvas `#fcfcfb`, black footer, generous vertical spacing, and line-based
  hierarchy.
- Apply the DreamWhorl case-study structure to every complete case study:
  full-bleed hero, overview and metadata, sticky chapter navigation, spacious
  chapter modules, neutral image surfaces, and restrained violet accents.
- Every route includes a fixed 2px reading progress bar.
- Sections and modules reveal with a 0.65s opacity/18px vertical transition.
- Images use a restrained 0.7s scale-to-1.02 hover treatment.
- Preserve the existing carousel, hover-loop, rail, tabs, accordion, and
  accessibility behavior; only restyle them to this editorial system.
- Disable nonessential motion under `prefers-reduced-motion`.

The remaining sections document the underlying typography and content-specific
measurements. Layout and motion follow this editorial override; type size and
hierarchy follow §3.

This specification is derived from the newest `home_figma.zip`,
`experience__figma.zip`, `artwork_figma.zip`, and `about_figma.zip` exports.
The authoritative rendered references are only the files inside:

`docs/figma-reference/export-2026-08-26/`

Files inside `docs/figma-reference/legacy/`, such as `homepage-desktop.png`,
are legacy. Do not use them for new implementation.

## Measurement note

The ZIPs contain raster PNG/JPG exports, not Figma node metadata or CSS. Canvas
dimensions, coordinates, rules, colors, and visible text are directly
measurable. CSS font sizes below are desktop target values inferred from the
rendered glyph heights and must be tuned by 1440px screenshot comparison when
necessary. The reference image always wins over an inferred number.

## 1. Global foundations

```css
:root {
  --canvas: #fcfcfb;
  --ink: #000000;
  --text-secondary: #808080;
  --text-disabled: #bfbfbf;
  --rule: #d9d9d9;
  --footer-bg: #000000;
  --footer-ink: #ffffff;
  --content-width: 1080px;
  --desktop-gutter: 180px;
  --header-height: 84px;
  --footer-height: 392px;
}
```

- Canvas is a pale warm gray `#fcfcfb`. Primary text is black.
- Listing category/year uses neutral gray, approximately `#808080`.
- `More In Progress...` uses `#BFBFBF`; rules use `#D9D9D9`.
- Footer is pure black with white text.
- The old red metadata token `#FF2020` is absent from the current references
  and must not be used.
- Listing pages have no rounded cards, shadows, colored surfaces, or decorative
  effects.

## 2. Font families

- Main UI, header, hero, listings, and About: `Inter`.
- Footer: `Noto Sans`.
- Load the actual font faces. Do not silently fall back to Arial.

## 3. Current desktop type scale

Shared site scale: **12 / 16 / 24 / 32**, plus a Hero-only display tier
(52 / 58) and a 13px wordmark. One step smaller than the previous 14 / 20 /
28 / 40 ladder, for a finer editorial texture. Orphan sizes from the old
scale are not used.

Every route — listings, About, Experience case studies, and Artwork — uses
this scale. Case studies may change color and spacing, not type size.

| Token | Family | Weight/style | Size | Line height | Color | Use |
| --- | --- | --- | ---: | ---: | --- | --- |
| `logo` | Inter | 800 | 13px | 54px | black | `JIAYING LI` wordmark |
| `nav` | Inter | 300 | 12px | 54px | black | Header nav |
| `back-link` | Inter | 300 | 12px | 18px | secondary | Back to Home |
| `listing-page-title` | Inter | 700 | 32px | 42px | black | Experience / Artwork |
| `listing-page-intro` | Inter | 300 | 16px | 26px | black | Page statement |
| `tab` | Inter | 400 | 16px | 26px | black | Page tabs |
| `work-title` | Inter | 700 | 24px | 32px | black | Listing title |
| `work-meta` | Inter | 300 | 12px | 18px | secondary | Category/year |
| `work-summary` | Inter | 400 | 16px | 26px | black | Description |
| `spec-label` | Inter | 700 | 12px | 18px | black | Type/Tools |
| `spec-value` | Inter | 400 | 12px | 18px | black | Spec value |
| `button-label` | Inter | 400 | 16px | 24px | black | View Project |
| `progress-label` | Inter | 400 | 16px | 26px | disabled | More In Progress |
| `case-study-title` | Inter | 500 | 32px | 42px | black | Project detail title, chapter headline |
| `case-module-title` | Inter | 400 | 24px | 32px | black | Case-study module heading |
| `footer-heading` | Noto Sans | 500 | 24px | 54px | white | Footer heading |
| `footer-link` | Noto Sans | 300 | 16px | 54px | white | Footer link |

The previous implementation's 40px listing H1, 20px page intro, and 28px
module titles are superseded by this smaller scale.

Components must reference the shared tokens rather than repeating values:

- Meta / captions: `--type-meta-size: 12px` / `--type-meta-line-height: 18px`
- Body / intros / UI: `--type-body-size: 16px` / `--type-body-line-height: 26px`
- Section and work titles: `--type-title-size: 24px` / `--type-title-line-height: 32px`
- Page titles: `--type-large-title-size: 32px` / `--type-large-title-line-height: 42px`

The homepage Hero remains a separate display-heading tier (52 / 58).

## 4. Header

- Full width × 84px; content aligns to the 180px gutters.
- Logo starts around x181; visible glyphs sit around y34–46.
- Nav is right aligned, uppercase, light weight, with a 1px active underline.
- Homepage header overlays the hero but remains black, not white.

## 5. Homepage

Current references are the five `home-*.png` files in the current export
folder. Intro canvas is 1440 × 2922; project states are 1440 × 2953.

### Hero typography

| Token | Weight/style | Size | Line height | Color |
| --- | --- | ---: | ---: | --- |
| Category / `Hi, this is` | Thin 100 | 52px | 68px | black |
| Project/name | Light 300 Italic | 58px | 68px | black |
| Summary/tagline | Light 300 | 16px | 32px | `#686868` |

- Intro hero is approximately 887px high.
- Main copy begins around x181.
- Intro greeting begins around y378; project category begins around y310.
- Circular social/next controls are 41 × 41px with a 1px black outline.
- Project states show one next control, not generic previous/dots/next controls.
- Hero text must also exist as semantic HTML.

### Homepage sections

| Element | Desktop target |
| --- | --- |
| Content | 1080px centered, 180px gutters |
| Section title / More | 24px/40px, regular |
| Experience grid | 2 columns, 28–29px gaps |
| Experience media | source ratios around 521–530 × 438 |
| Artwork tile | 350 × 350px |
| Artwork gap | 14–15px |
| Footer | 392px tall |

## 6. Experience and Artwork listings

Current canvases: Experience Projects/Practice and Artwork Installation are
1440 × 2112; Artwork Illustration is 1440 × 4646.

### Geometry

- Page content: x180–1260, width 1080px.
- Back link starts around y140; H1 starts around y192.
- Intro starts around y284 with 44px line rhythm.
- Tabs start around y453; rule is around y503 and uses `#D9D9D9`.
- First listing starts around y546.
- Media is 623 × 420px; text starts around x830, with a 27–30px gap.
- Rows end with a 1px `#D9D9D9` rule.
- CTA is approximately 202 × 53px, square corners, 1px black outline.
- Standard footer starts around y1720. Illustration uses repeated row rhythm
  and starts its footer around y4254; do not hard-code page height.

### Listing rhythm

- Title to meta: 36–40px.
- Meta to summary: 24–28px.
- Summary line height: 28px.
- Summary to dotted separator: 28–34px.
- Separator to Type: 34–40px.
- Type and Tools rows: about 34px apart.
- Rows are separated by about 60px plus the dividing rule.

## 7. About page

- `about-layout.jpg` (1440 × 6091) controls layout and visual hierarchy.
- `about-content-reference.png` (1264 × 1016) supplies lower-page content only.

### About type scale

| Token | Weight/style | Size | Line height | Use |
| --- | --- | ---: | ---: | --- |
| Page/section heading | Regular 400 | 32px | 42px | About, Education, etc. |
| Biography | Regular 400 | 16px | 34px | Introduction |
| Timeline index | Bold 700 | 24px | 32px | 01, 02... |
| Date | Regular 400 | 16px | 26px | Dates |
| Institution | Semi Bold 600 | 24px | 32px | Organization |
| Degree/role | Regular Italic | 24px | 32px | Degree/role |
| Bullet copy | Regular 400 | 16px | 26px | Details |
| Skill pill | Regular 400 | 24px | 32px | Final skill labels |

### About geometry

- Main content aligns around x178–1240.
- About title begins around x179, y298.
- Portrait is in the right column and must preserve its aspect ratio.
- Social controls are circular outline icons in the left column.
- Biography uses a narrow column and generous 42px leading.
- Major sections use large white space and thin light-gray rules.
- Timeline rows have a narrow index/date column and wide content column.
- Do not compress this page to ~4,000px; target the 6,091px reference rhythm.
- Do not copy repeated placeholder rows from the incomplete layout image. Use
  `docs/content.md` for final entries.

## 8. Responsive contract

No mobile reference exists. Preserve hierarchy while adapting:

- Keep the 12 / 16 / 24 / 32 ladder. Do not collapse module titles into body size.
- Page titles may clamp between 24 and 32. Homepage display may clamp down to 32.
- Stack listing media above details below approximately 900px.
- Keep titles, metadata, and actions visible without hover.
- Homepage hero must never collapse to zero height.
- No horizontal overflow at 390px.
- Disable carousel/rail/hover autoplay under reduced motion.

## 9. Acceptance

Compare every route at 1440px with its exact current reference. Match wording,
line breaks, family, weight, italic styling, size, leading, color, rules, crop,
white space, and footer position—not only approximate boxes.
