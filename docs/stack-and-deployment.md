# Stack and Deployment

## Architecture

- **Figma**: visual and interaction source of truth.
- **Next.js App Router**: pages, server rendering, metadata, and image delivery.
- **Supabase**: Postgres content for projects and artworks; Storage can be added
  later if image management should move out of `public/`.
- **Vercel**: preview and production deployments for the Next.js app.

The portfolio does not currently require visitor authentication. The Supabase
foundation therefore exposes only published rows for public reads, while Row
Level Security blocks anonymous writes. Add the auth proxy only if a protected
editor/admin area is introduced later.

The migration includes explicit read-only Data API grants for `anon` and
`authenticated` roles. Grants determine whether the roles can reach each table;
RLS policies then restrict reads to rows where `published = true`.

## 1. Create and configure Supabase

1. Create a Supabase project.
2. Run `supabase/migrations/20260820000000_create_portfolio_content.sql` in the
   Supabase SQL Editor, or apply it with the Supabase CLI, only after explicit
   user authorization.
3. In the Supabase project Connect dialog, copy the Project URL and publishable
   key.
4. Copy `.env.example` to `.env.local` and replace both placeholders.
5. Keep any secret/service-role key server-only. This project does not need one
   for public reads.

```bash
cp .env.example .env.local
npm run dev
```

## 2a. China mirror (Tencent Cloud Lighthouse)

For stable access inside mainland China, run a second production copy on
Tencent Cloud Lighthouse with ICP filing. Step-by-step checklist, nginx/pm2
configs, and sync script:

- `docs/china-deploy-tencent.md`
- `deploy/`

Keep Vercel as the international deployment. Do not point an unfiled China
domain at a mainland IP for public use.

## 2. Connect and deploy with Vercel

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel; the framework should be detected as
   Next.js automatically.
3. Add these variables in Vercel Project Settings for Development, Preview, and
   Production:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
```

4. Deploy. When variables change, redeploy because existing deployments do not
   receive newly added values.
5. After linking the local folder with the Vercel CLI, development variables
   can also be downloaded with `vercel env pull`.

## 3. Content workflow

- Keep assets in `public/` during the first Figma implementation pass.
- Enter approved project and artwork metadata in Supabase after the visual
  structure is stable.
- Replace the temporary local arrays in `src/data/` with the queries in
  `src/lib/supabase/queries.ts` only after the database contains published data.
- Regenerate `src/types/database.ts` from the live Supabase schema whenever the
  schema changes.

## 4. Security rules

- Never commit `.env.local`.
- Never expose a Supabase secret/service-role key through a `NEXT_PUBLIC_`
  variable.
- Keep Row Level Security enabled on public tables.
- Use published-row policies for portfolio content; add separate authenticated
  write policies only when an admin workflow exists.
