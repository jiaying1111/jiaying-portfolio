# Figma Reference Status

## Current — use these

Use only `docs/figma-reference/export-2026-08-26/`.

These 11 files are byte-for-byte identical to the newest files supplied in
`home_figma.zip`, `experience__figma.zip`, `artwork_figma.zip`, and
`about_figma.zip` on 2026-08-26 at 06:02–06:04.

| New ZIP file | Current repository reference |
| --- | --- |
| Home `Frame 8.png` | `export-2026-08-26/home-intro.png` |
| Home `Frame 11.png` | `export-2026-08-26/home-digital-no-more-mad.png` |
| Home `Frame 22.png` | `export-2026-08-26/home-dreamwhorl.png` |
| Home `Frame 23.png` | `export-2026-08-26/home-little-red-riding-hood.png` |
| Home `Frame 24.png` | `export-2026-08-26/home-nushu.png` |
| Experience `Frame 12.png` | `export-2026-08-26/experience-projects.png` |
| Experience `Frame 20.png` | `export-2026-08-26/experience-practice.png` |
| Artwork `Frame 17.png` | `export-2026-08-26/artwork-installation.png` |
| Artwork `Frame 21.png` | `export-2026-08-26/artwork-illustration.png` |
| About `layout.jpg` | `export-2026-08-26/about-layout.jpg` |
| About `reference.png` | `export-2026-08-26/about-content-reference.png` |

## Legacy — ignore these

Older files are isolated inside `docs/figma-reference/legacy/`, including
`homepage-desktop.png`, `experience-projects-desktop.png`,
`experience-practice-desktop.png`, `artwork-installation-desktop.png`, and
`artwork-illustration-desktop.png`. They are retained only for provenance. Cursor
must not compare implementation against them.

Supporting current documents:

- Type, colors, leading, spacing: `docs/design-system.md`
- Exact wording: `docs/content.md`
- Media paths and motion: `docs/media-library.md`

Never render a full-page reference as production UI or crop project media from
it. Build semantic React/HTML with the individual assets in `public/`.
