# Cursor Start Here

This folder is ready to open directly in Cursor.

## Final export update — 2026-08-26

The final Homepage, Experience Design, Artwork, and About exports have now been
organized locally. Start with:

- `docs/design-system.md` for current color, typography, size, line-height,
  spacing, and geometry
- `docs/content.md` for exact current visible copy and metadata
- `docs/media-library.md` for the authoritative image map and interaction rules
- `docs/figma-reference/export-2026-08-26/` for the final full-page comparisons
- `docs/cursor-figma-correction-prompt.md` for the current complete Cursor prompt

These local exports supersede older `Pending` asset notes for the four listing
pages. No Figma request is required for this implementation pass. The About
layout is intentionally incomplete and must be completed using both
`about-layout.jpg` and `about-content-reference.png` as described in the prompt.

## Current mode

- Next.js, TypeScript, Tailwind CSS, Supabase client utilities, database
  migration, and Vercel deployment documentation are ready.
- Figma read/extraction is enabled for file `Yxh4ZBgzy7N7KdV4PDxVGA` and the
  approved nodes in `docs/figma-links.md`.
- The connected and verified Figma account is `jiayingli0128@gmail.com`.
  Figma access remains read-only unless separately authorized.
- Homepage imagery has been organized locally, including the Hero source and
  exact gradient composite, four current project sources, five Artwork rail
  sources, an exact rail composite, social icons, and earlier card-state
  references. Read `docs/asset-manifest.md` before using them.
- The verified Homepage layout, type scale, line heights, colors, crops,
  measurements, responsive constraints, and accessibility rules are in
  `docs/design-system.md`. This file must be read before Homepage implementation.
- Eleven current reference states are available only in
  `docs/figma-reference/export-2026-08-26/`. Images inside
  `docs/figma-reference/legacy/` must not be used.
- Further Figma extraction is temporarily paused because the Figma MCP reported
  that the Starter-plan tool-call limit has been reached. Do not invent the
  remaining assets or silently substitute screenshots.
- Placeholder routes exist only to prove that the application builds. Do not
  treat their visual style or copy as approved design.

## First prompt to give Cursor

```text
Read docs/cursor-figma-correction-prompt.md and execute it in order. Use only
docs/figma-reference/export-2026-08-26/ for visual comparison,
docs/design-system.md for color/type/size/line-height/spacing, docs/content.md
for exact wording, and docs/media-library.md for assets and motion. Files
inside docs/figma-reference/legacy/ are obsolete. Do not preserve old red
metadata or old undersized typography. Do not deploy or change cloud systems.
```

## Current safe work

- Verify and maintain the local Next.js project
- Resume approved Figma extraction when MCP calls are available, using only the
  entries marked `Pending` in `docs/asset-manifest.md`
- Organize approved copy and asset filenames
- Review Supabase migrations without applying them
- Prepare Vercel environment-variable and deployment checklists
- Add tests or accessibility infrastructure that does not invent visual design

## Work that remains blocked

- Modifying the Figma source without separate write authorization
- Implementing nodes that have not yet been inspected and documented
- Making pixel-level responsive or animation decisions
- Deploying or changing Supabase/Vercel cloud resources without explicit user
  authorization

Follow `docs/cursor-figma-workflow.md`. Do not skip source extraction and asset
capture before UI code.
