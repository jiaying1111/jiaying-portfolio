# Jiaying Li Portfolio

A local Next.js foundation for implementing Jiaying Li's Figma portfolio in
small, verifiable tasks, with Supabase for structured content and Vercel as the
deployment target.

## Open in Cursor

1. Open Cursor.
2. Choose **File → Open Folder**.
3. Select this `jiaying-portfolio` folder.
4. Open `CURSOR_START_HERE.md` and paste its first prompt into Cursor.
5. Give Cursor only one scoped task at a time.

## Run locally

```bash
nvm install
nvm use
npm ci
npm run dev
```

Then open `http://localhost:3000`.

Only create `.env.local` after you have real Supabase credentials. The neutral
placeholder routes build without it.

Before accepting an implementation task, run:

```bash
npm run check
```

## Structure

```text
docs/                 Figma reference, design specification, content, tasks
public/               Images, icons, videos, and font files
src/app/              Routes and global styles
src/components/       Reusable layout, UI, and section components
src/data/             Structured projects and artwork content
src/lib/              Shared utilities
supabase/migrations/  Versioned database schema and RLS policies
.cursor/rules/        Persistent instructions for Cursor
CURSOR_START_HERE.md   First handoff prompt and scope boundaries
```

## Supabase and Vercel

The client foundation and first database migration are ready for review. Add a real
Supabase project and the two public environment variables before switching page
content from local placeholders to database queries. Follow
`docs/stack-and-deployment.md` for the complete setup and Vercel deployment
workflow.

## Figma status

Figma is intentionally pending. Cursor must not access Figma or infer the final
visual design until the user explicitly re-enables that phase. See
`docs/figma-links.md` and `docs/project-status.md` for the current boundary.
