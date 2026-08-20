# Cursor Task Board

Give Cursor only one task at a time. Ask it to read `AGENTS.md` first and to
report its verification results when finished.

## Available now — Local foundation check

```text
Read CURSOR_START_HERE.md, AGENTS.md, README.md, and docs/project-status.md.
Figma is partially extracted and its current MCP call limit has been reached.
Do not call Figma tools or implement the final UI. Run npm ci and npm run check.
Report the exact results, then stop without changing code, deploying, applying
migrations, or modifying cloud resources.
```

## Task 00 — Connect external services

Complete this manually before Cursor replaces local placeholder data.

```text
Read docs/stack-and-deployment.md. Confirm that .env.local exists with the
Supabase project URL and publishable key, but never print their values. Check
that the migration has been applied and that the Vercel project has the same
two variables in Development, Preview, and Production. Report connection
status only; do not create or rotate credentials.
```

## Task 01 — Inspect the project

```text
Read AGENTS.md, README.md, and every file in docs/. Inspect the existing Next.js
structure without changing code. Summarize what is ready, what content is
missing, and which Figma frames or assets you need. Do not implement yet.
```

## Deferred — Finish the Figma specification

Do not run this until Figma MCP calls are available again. The permitted account
has already been verified as `jiayingli0128@gmail.com`.

```text
Read docs/asset-manifest.md first, then use the Figma links and pending nodes
recorded there. Inspect the relevant
desktop and mobile frames, components, typography, colors, spacing, imagery, and
prototype interactions. Do not re-export completed assets unless their source
changed. Update docs/design-spec.md and docs/asset-manifest.md with exact
findings. Do not write page code in this task, and do not infer values that are
not visible.
```

## Task 03 — Build foundations

```text
Using the completed docs/design-spec.md, implement design tokens, typography,
the site container, header/navigation, footer, and shared UI primitives. Keep the
current routes working. Match Figma, include accessible focus states, and run
npm run check.
```

## Task 04 — Build the homepage

```text
Implement only the homepage from the approved Figma frames and docs/content.md.
Create reusable section and project-card components. Match desktop and mobile
layouts, include all documented hover/motion behavior, and support
prefers-reduced-motion. Run npm run check.
```

## Task 05 — Build project case studies

```text
Implement the dynamic /projects/[slug] case-study template and populate
src/data/projects.ts from approved content. Support the documented in-page
navigation and scroll behavior. Do not invent missing project copy or imagery.
Run npm run check.
```

## Task 06 — Build Artwork and About

```text
Implement the /artwork and /about routes using their Figma frames and approved
content. Add any documented gallery or continuous-scroll interaction with a
reduced-motion fallback. Run npm run check.
```

## Task 07 — Final QA

```text
Audit every route against Figma at desktop, tablet, and mobile sizes. Fix visual
differences, keyboard accessibility, focus states, image loading, layout shift,
broken links, and motion fallbacks. Run npm run check, then list
remaining content or asset gaps without hiding them behind placeholders.
```

## Task 08 — Move approved content to Supabase

```text
After approved content has been entered in Supabase, replace the temporary data
arrays with the server queries in src/lib/supabase/queries.ts. Preserve static
SEO behavior where practical, handle empty and error states, and do not expose
private or unpublished rows. Run npm run check.
```
