# Cursor Prompt — Strict Figma Correction Pass

Paste the text below into Cursor from the repository root.

```text
You are performing a correction pass on Jiaying Li's Next.js portfolio. The
current implementation is a responsive skeleton, not a finished visual match.

READ FIRST, IN FULL:
- docs/qa-report-2026-08-26.md
- docs/design-system.md
- docs/media-library.md
- docs/figma-reference/export-2026-08-26/README.md
- docs/content.md
- src/data/assets.ts
- src/data/projects.ts
- src/data/artworks.ts
- src/data/site.ts

STRICT SOURCE-OF-TRUTH ORDER:
1. Full-page visual/layout references in
   docs/figma-reference/export-2026-08-26/
2. Exact dimensions and typography in docs/design-system.md
3. Exact visible wording and metadata in docs/content.md
4. Asset paths and animation order in docs/media-library.md
5. The QA report for defects only; when wording conflicts, docs/content.md wins
6. Existing code only where it does not conflict with 1–5

REFERENCE VERSION WARNING:
- The only current visual folder is
  docs/figma-reference/export-2026-08-26/.
- Do not use anything inside docs/figma-reference/legacy/, including
  homepage-desktop.png, experience-projects-desktop.png,
  experience-practice-desktop.png, artwork-installation-desktop.png, and
  artwork-illustration-desktop.png.
- The current references change wording, text color, size, weight, italic
  styling, and line height—not only images and boxes. Replace old CSS tokens.
- Remove the old red metadata color #FF2020. Current category/year text is
  neutral gray as specified in docs/design-system.md.

The reference exports are comparison images only. Never use a full-page PNG or
JPG as a production background. Rebuild the composition with semantic React,
CSS, and the individual local assets already under public/.

PRIMARY GOAL
Make /, /experience-design, /experience-design?tab=practice, /artwork,
/artwork?tab=illustration, and /about match their 1440px Figma exports as
closely as possible. This is a visual-fidelity pass, not an opportunity to
invent a new design. Do not replace the restrained Figma style with cards,
rounded panels, shadows, gradients, or component-library defaults that do not
appear in the references.

TYPOGRAPHY IS PART OF THE REQUIRED MATCH
- Do not keep the old 52px listing H1, 16px page intro, 14px CTA, or 18px
  footer heading.
- Desktop listing targets are approximately: 72/86 page title, 32/44 intro,
  20/28 tabs, 32/40 work title, 14/28 summary, 20/24 CTA, 28/54 footer
  heading, and 20/54 footer links.
- Match text wrapping and line breaks at 1440px. Correct boxes with incorrect
  font size, weight, color, or leading do not pass review.

WORK ORDER

1. Fix data before layout
- Remove every `This project etc...` placeholder.
- Correct Digital Nomad to Digital No More Mad wherever the public title is
  rendered.
- Correct DreamScope to DreamWhorl.
- Replace category, year, type, tools, and summaries with the exact values in
  docs/content.md. Do not paraphrase them.
- Correct the Artwork intro sentence exactly as written in docs/content.md.
- Do not guess the Imaginary Beings summary; mark it as needing author copy if
  no verified text exists.
- Correct About education and experience against both About references. Remove
  invented roles, dates, and bullets. Preserve approved extracurricular and
  award content once, not duplicated.
- Do not change Supabase, Vercel, environment variables, or deployment.

2. Rebuild the Homepage hero faithfully
- Compare against all five home-*.png references, not only home-intro.png.
- Restore visible semantic HTML for “Hi, this is”, “JIAYING LI”, the tagline,
  and social controls at the Figma positions. The current visually hidden H1
  is not an acceptable substitute.
- Make the logo/navigation dark and legible as in the Figma Homepage.
- Replace the generic previous + dots + next control cluster with the exact
  control presentation shown in each Figma state. Keep accessible names even
  when the visual control is icon-only.
- Render only one active slide visually/interactively. Inactive slides must use
  opacity 0, pointer-events none, aria-hidden true, and an appropriate stacking
  order.
- Implement verified autoplay with named timing constants, pause on hover,
  keyboard focus, and document visibility loss, and respect reduced motion.
- Fix the mobile regression where .hero-carousel computes to height: 0. On a
  390px viewport the hero must remain visible, proportionate, and legible.

3. Match Homepage sections
- Match the 1080px desktop content width, approximately 180px side gutters,
  2-column Experience grid, exact card aspect ratios, 28px gaps, section-label
  alignment, and footer geometry in docs/design-system.md.
- Fix hover title `Digital Nomad` to `Digital No More Mad`.
- Keep regular and hover assets absolutely layered in one stable wrapper. Use a
  clean 250–400ms crossfade that reaches opacity 1; do not leave both images
  visibly blended after 800ms.
- Keep the current working three-frame hover-loop architecture for listing
  pages; do not regress it.
- Keep the Artwork rail as one eight-item sequence duplicated once in the DOM.
  Use the exact order in docs/media-library.md and tune its initial offset so
  the 1440px crop matches home-intro.png. Pause on hover/focus and disable
  continuous animation for prefers-reduced-motion.

4. Correct Experience Design
- Match experience-projects.png and experience-practice.png at 1440px:
  header, back link, title/intro, tabs, horizontal rules, two-column rows,
  metadata columns, CTA alignment, More In Progress, and footer.
- Projects: Digital No More Mad and DreamWhorl.
- Practice: Little Red Riding Hood and Nushu.
- Preserve the verified hover behavior: fixed 623×420 media area and the loop
  frame-01 → frame-02 → frame-03 → frame-01 on hover/focus, resetting to
  frame-01 on leave. Titles and actions must remain visible on touch devices.

5. Correct Artwork
- Match artwork-installation.png and artwork-illustration.png at 1440px.
- Installation contains Re:Sounding Nature and Present & Absent.
- Illustration contains The Circular Ruins, The Invisible Man, DreamGaze,
  Your Destination, Animal City, Imaginary Beings, and Hypnagogia.
- Replace all generic metadata and summaries with the exact docs/content.md
  values.
- Tune Illustration vertical rhythm toward the approximately 4,646px reference
  height; do not hard-code the entire page height.
- A View Project control must either be a real accessible link with a valid
  destination or not be presented as an enabled-looking CTA. Do not ship the
  current aria-disabled fake buttons.
- Mark the first above-the-fold image on each Artwork tab as priority/eager to
  remove the observed Next.js LCP warning. Keep later images lazy.

6. Complete About from both references
- about-layout.jpg defines visual layout, grid, typography, numbering, rules,
  spacing, and whitespace.
- about-content-reference.png supplements content missing from the layout.
- Required sections: About, Education, Experience, Extracurricular Activities,
  Awards, Personal Skills, and the shared footer.
- The current page is much too compressed. Restore the generous vertical
  rhythm of the roughly 6,091px desktop reference instead of forcing a fixed
  height.
- Remove the redundant Introduction heading unless it is visually present in
  the reference.
- Preserve portrait aspect ratio and eliminate the Next/Image one-dimension
  warning.
- Use verified personal social links only. Do not leave generic Instagram or
  LinkedIn homepages as if they were final.

7. Treat project detail routes honestly
- Audit /projects/digital-nomad, /projects/dreamwhorl,
  /projects/little-red-riding-hood, and /projects/nushu.
- Immediately correct their wrong title/metadata/placeholder copy.
- The current repeated listing images and provisional disclaimer are not a
  finished case study.
- Do not invent a strict Figma layout when no approved detail-page Figma export
  exists. If an approved Idea / Research / Process / Outcome reference is
  available in the repository, implement it with independent images and text;
  otherwise report these four routes as blocked by missing final case-study
  references rather than claiming completion.

8. Responsive and accessibility
- Desktop comparison viewport is 1440px. Use responsive CSS below it without
  changing the Figma content hierarchy.
- Verify 390px mobile width. There must be no horizontal overflow and the hero
  must not disappear.
- Ensure menu and carousel controls have accessible names, selected/expanded
  state, visible focus, keyboard access, and sensible touch targets.
- Use meaningful alt text for informative first frames and empty alt text for
  decorative transition frames.
- Keep animations disabled or static under prefers-reduced-motion.

DO NOT
- Do not call Figma MCP; all required final references and assets are local.
- Do not redesign the pages.
- Do not introduce rounded cards, shadows, glassmorphism, or decorative effects
  absent from Figma.
- Do not stretch images or use screenshots/full-page references as UI layers.
- Do not hide missing content behind placeholder text.
- Do not change infrastructure or deploy.

VERIFICATION
1. Run npm run lint, npm run typecheck, and npm run build.
2. Compare all six primary route states side by side with their named Figma
   reference at 1440px.
3. Verify Homepage autoplay, card hover, artwork continuous rail, Experience
   and Artwork three-frame hover loops, tab URLs, keyboard focus, reduced
   motion, and mobile layout.
4. Check for missing asset requests, Next/Image warnings, layout shift,
   accidental duplicate DOM, disabled fake CTAs, placeholder prose, and wrong
   metadata.

FINAL REPORT REQUIRED
- Files changed
- Corrections completed per route
- Remaining deviations from each Figma reference
- Any content blocked by missing verified source material
- Animation timing constants and reduced-motion behavior
- Lint, typecheck, and build results
```
