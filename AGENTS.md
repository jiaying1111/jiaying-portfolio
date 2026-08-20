# Jiaying Portfolio — Agent Instructions

## Stack

- Next.js App Router
- TypeScript in strict mode
- Tailwind CSS
- Supabase Postgres via `@supabase/ssr`
- Vercel deployment target
- Local assets in `public/`

## Design source of truth

- The linked Figma file is the visual and interaction source of truth.
- Figma read/extraction work is enabled for file
  `Yxh4ZBgzy7N7KdV4PDxVGA` and the nodes recorded in `docs/figma-links.md`.
- The authenticated Figma account is `jiayingli0128@gmail.com` (verified
  2026-08-20). Verify the identity before the first source read and record it
  in `docs/design-spec.md`.
- Figma access is read-only for this task. Do not modify the Figma source.
- Do not invent layouts, colors, typography, assets, breakpoints, or motion when
  the Figma source has not been inspected.
- Record extracted values in `docs/design-spec.md` before implementing a page.
- Read `docs/asset-manifest.md` before using or re-exporting Figma imagery.
  Reuse completed local assets and do not substitute entries marked `Pending`.
- Use `docs/figma-reference/` for route-level desktop visual comparison. Never
  ship a full-page reference PNG as a webpage background.
- Preserve the intent of the Figma design while making responsive and accessible
  adaptations explicit.

## Implementation rules

- Work on one scoped task from `docs/cursor-tasks.md` at a time.
- Read `CURSOR_START_HERE.md` and `docs/project-status.md` before selecting work.
- Build reusable sections and UI components instead of duplicating markup.
- Keep page content in `src/data/` when it is repeated or structured.
- Use semantic HTML, keyboard-accessible controls, meaningful alt text, and
  visible focus states.
- Optimize images with `next/image` when dimensions are known.
- Do not add packages unless the requested feature clearly needs them.
- Do not overwrite final content with placeholder copy.
- Never expose a Supabase secret/service-role key in client code or a
  `NEXT_PUBLIC_` environment variable.
- Keep Row Level Security enabled and update the checked-in migration whenever
  the database schema changes.
- Run `npm run check` before marking an implementation task complete.
- Do not create cloud resources, apply remote migrations, deploy, or modify
  environment variables unless the user explicitly authorizes that action.

## Handoff format

At the end of each task, report:

1. Files changed.
2. What now works.
3. Any differences from Figma and why.
4. Lint/build results.
5. The next recommended task.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
