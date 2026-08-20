# Project Status

Updated: 2026-08-20

| Area | Status | Notes |
| --- | --- | --- |
| Local Next.js project | Ready | App Router, TypeScript strict mode, Tailwind CSS |
| Package installation | Ready | Use `npm ci`; lockfile is included |
| Local verification | Ready | Run `npm run check` |
| Supabase clients | Ready | Public environment variables are documented |
| Supabase schema | Ready to review | Migration is local only and has not been applied |
| Supabase cloud data | Not configured | No project credentials are stored in this folder |
| Vercel deployment docs | Ready | Cloud project has not been created or modified here |
| Content | Pending user input | See `docs/content.md` |
| Figma | Partially extracted | Correct identity and Homepage read verified; 8 card-state assets are local; further calls are blocked by the Starter-plan MCP limit |
| Final visual implementation | Pending extraction/content | Neutral route placeholders only |

The Figma-to-Cursor handoff is documented in
`docs/cursor-figma-workflow.md`. The user re-enabled read-only extraction for
the approved source file on 2026-08-20.

The usable local Figma files and remaining source nodes are recorded in
`docs/asset-manifest.md`. Cursor may use completed entries, but must not infer or
replace entries marked `Pending`.

## Last local verification

Verified on 2026-08-20:

- `npm ci`: passed; 0 reported vulnerabilities
- `npm run lint`: passed
- `npm run typecheck`: passed
- Latest Codex sandbox run: the default Turbopack build was prevented from
  binding an internal port by the sandbox (`Operation not permitted`). This is
  an environment restriction, not an application error.
- `npx next build --webpack`: passed after the Turbopack-only restriction.
- All 8 exported project-card PNGs passed local image decoding and dimension
  checks.
- Generated routes: `/`, `/about`, `/artwork`, and `/projects/[slug]`

The verification host used Node 23 and therefore displayed the expected engine
warning. The project itself is pinned to Node 24 through `.nvmrc` and
`package.json`; Cursor should run `nvm install && nvm use` before installation.

## Definition of local readiness

The folder is locally ready when all of the following succeed:

```bash
npm ci
npm run check
```

This verifies dependency lock consistency, lint rules, TypeScript, and the
production Next.js build. It does not verify Supabase cloud connectivity,
database migrations, Figma access, or a Vercel deployment.

## External actions requiring explicit approval

- Create, pause, restore, branch, or modify a Supabase project
- Apply SQL to a remote database
- Create or deploy a Vercel project
- Add, change, or reveal environment-variable values
- Modify the Figma source or expand extraction beyond the approved file/nodes
