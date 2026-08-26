# Cursor Prompt — Implement Homepage from Figma

Copy the prompt below into Cursor when you are ready to implement Homepage.

```text
Implement and visually refine only the Homepage route `/` from Figma node
`78:61`.

Before editing code, read these files in full:
- AGENTS.md
- CURSOR_START_HERE.md
- .cursor/rules/portfolio.mdc
- docs/design-system.md
- docs/asset-manifest.md
- docs/figma-reference/README.md
- docs/content.md
- docs/project-status.md

Use `docs/design-system.md` as the verified source for layout, typography,
font weights, font sizes, line heights, colors, spacing, card dimensions, Hero
crop, gradient stops, Artwork rail geometry, Header, and Footer.

Use local production assets from `public/` according to
`docs/asset-manifest.md`. Do not use temporary Figma URLs. Compare the result at
1440px against `docs/figma-reference/export-2026-08-26/home-intro.png`, but never use the
full-page PNG as a background.

Do not use files inside docs/figma-reference/legacy/ for comparison. Follow
current colors, font sizes, weights, and line heights
in docs/design-system.md and exact hero wording in docs/content.md.

If an image is still missing, use a neutral placeholder. The placeholder must
keep the exact documented Figma position, dimensions, aspect ratio, crop area,
and hierarchy. Do not simplify or redesign the layout because media is missing.

Implementation requirements:
- Build semantic, reusable React components rather than one absolute-positioned
  screenshot recreation.
- Preserve the exact 1440px desktop appearance while making the layout fluid.
- Do not invent a mobile design; use the responsive and accessibility contract
  in docs/design-system.md and clearly report adaptive decisions.
- Use semantic HTML project titles even when hover reference images contain
  rasterized text.
- Match hover behavior for pointer and keyboard focus; keep project names
  discoverable on touch devices.
- Preserve image ratios and crops; never stretch images.
- Support prefers-reduced-motion for any Artwork rail animation.
- Do not change Supabase, environment variables, Vercel settings, migrations,
  Figma files, or unrelated routes.

After implementation:
1. Run npm run check.
2. Preview `/` at 1440px and compare it section by section with the reference.
3. Report files changed, what matches, remaining differences, placeholder media,
   accessibility adaptations, and test results.
```
