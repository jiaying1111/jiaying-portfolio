# Cursor Prompt — Final Figma Media Integration

Copy the prompt below into Cursor at the root of this repository.

```text
You are implementing the final visual pass for Jiaying Li's Next.js portfolio.

Before editing code, read these files in full:
- AGENTS.md
- CURSOR_START_HERE.md
- docs/media-library.md
- docs/design-system.md
- docs/design-spec.md
- docs/content.md
- docs/figma-reference/export-2026-08-26/README.md
- src/data/assets.ts
- src/data/projects.ts
- src/data/artworks.ts
- src/data/site.ts

CURRENT REFERENCE WARNING:
- Use only docs/figma-reference/export-2026-08-26/ for visual comparison.
- Files inside docs/figma-reference/legacy/ are obsolete.
- docs/design-system.md is the current authority for text color, font size,
  weight, italic styling, line height, spacing, and geometry.
- docs/content.md is the current authority for exact wording and metadata.
- Remove old red metadata and old undersized type values; do not preserve them
  merely because they exist in globals.css.

The local final exports are now the source of truth. Do not call Figma, do not
use Figma MCP, and do not use the old entries marked Pending when they conflict
with docs/media-library.md. Do not use full-page reference images as webpage
backgrounds. Rebuild the pages with semantic React/HTML and use the independent
assets already organized under public/images/.

Goal:
Complete the visual implementation of Homepage, Experience Design, Artwork,
and About so that they closely match the final page references in
docs/figma-reference/export-2026-08-26/ while remaining responsive and
accessible.

1. Create a single typed asset configuration
- Update src/data/assets.ts so every completed local asset has a real src.
- Remove obsolete Pending states for Homepage, Experience Design, Artwork, and
  About media covered by docs/media-library.md.
- Keep project/artwork arrays in src/data/projects.ts and src/data/artworks.ts;
  do not hard-code repeated media paths inside components.
- Use the exact public paths in docs/media-library.md.

2. Homepage
- Match home-intro.png for the initial page layout: header, hero proportions,
  Experience Design grid, Artwork rail, spacing, and footer.
- Implement the five hero assets as a real carousel in this exact order:
  intro, Digital No More Mad, DreamWhorl, Little Red Riding Hood, Nushu.
- Show slide 01 initially. Add accessible previous/next and dot controls.
- Autoplay only when reduced motion is not requested. If no existing timing is
  documented, keep timing in named constants and use a restrained default of
  5 seconds per slide with a 600ms crossfade. Pause on hover, keyboard focus,
  and document visibility loss.
- The four Homepage Experience cards each have regular and hover SVGs. Layer
  both states in one stable aspect-ratio wrapper and crossfade on :hover,
  :focus-visible, and :focus-within. Do not mount/unmount the whole card and do
  not move the hover hit target.
- Make the Artwork rail continuously scroll horizontally using all eight rail
  items in the documented order. Duplicate the rendered track, not the files,
  for a seamless loop. Pause on hover/focus. Disable motion for
  prefers-reduced-motion.

3. Experience Design page
- Match experience-projects.png and experience-practice.png exactly in layout:
  global header, back link, large title/intro, tabs, rules, two-column listing
  rows, project metadata, View Project button, More In Progress, and footer.
- Projects tab: Digital No More Mad and DreamWhorl.
- Practice tab: Little Red Riding Hood and Nushu.
- Each project's media folder contains frame-01, frame-02, and frame-03.
  frame-01 is the resting image. On card hover/focus, loop 01 → 02 → 03 → 01.
- Use one fixed-size media wrapper with absolutely stacked frames and opacity
  transitions so there is no layout shift or hover flicker. Stop the loop and
  reset to frame-01 when pointer/focus leaves.

4. Artwork page
- Match artwork-installation.png and artwork-illustration.png in the same way.
- Installation: Re:Sounding Nature and Present & Absent.
- Illustration: The Circular Ruins, The Invisible Man, DreamGaze,
  Your Destination, Animal City, Imaginary Beings, and Hypnagogia.
- Every artwork folder contains three frames. Apply the same stable hover/focus
  loop used by Experience Design.
- Build one reusable HoverLoopMedia component used by both Experience and
  Artwork. It must accept an array of sources, alt text, interval, className,
  and reduced-motion behavior.

5. About page — required completion
- The current About implementation is not final and must be replaced.
- Use about-layout.jpg as the visual/layout reference and portrait.jpg as the
  portrait.
- Use about-content-reference.png to complete missing lower-page information.
- Required sections: About intro/social links/biography, Education, Experience,
  Extracurricular Activities, Awards, Personal Skills, and the global footer.
- Do not reproduce duplicated placeholder jobs or awards from the incomplete
  layout reference. Use structured arrays in src/data/site.ts and render each
  entry once.
- Match the reference's restrained black/white design, numbered entries,
  column alignment, horizontal rules, typography scale, and whitespace.

6. Shared implementation requirements
- Preserve the existing Next.js App Router, TypeScript strict mode, and
  Tailwind/CSS architecture. Do not add a carousel dependency.
- Use next/image for raster media when dimensions are known. Preserve SVGs as
  exported assets without rewriting them into new inline SVG illustrations.
- Keep global Header and Footer shared across all four routes.
- Make tabs keyboard accessible and keep the selected tab in the URL/query as
  the current implementation does.
- Desktop should be compared against the 1440px references. Add intentional
  tablet and mobile adaptations without changing content hierarchy.
- Titles, buttons, and project details must remain visible on touch devices;
  hover animation is enhancement only.
- Add visible focus states, correct landmarks/headings, meaningful alt text,
  and no horizontal overflow.
- Do not deploy, modify Supabase, change environment variables, or create cloud
  resources.

7. Verification
- Run npm run lint, npm run typecheck, and npm run build.
- Check /, /experience-design?tab=projects,
  /experience-design?tab=practice, /artwork?tab=installation,
  /artwork?tab=illustration, and /about.
- Verify there are no missing asset requests, no hover flicker, no layout shift,
  no duplicated project images, and no full-page reference images rendered in
  production UI.

When finished, report:
1. Files changed.
2. What works on each route.
3. Animation timing constants and reduced-motion behavior.
4. Any remaining differences from the references.
5. Lint, typecheck, and build results.
```
