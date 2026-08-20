# Cursor + Figma Workflow

Status: **Enabled for read-only extraction** from the approved source file and
nodes in `docs/figma-links.md`. Do not modify Figma.

## How Cursor receives the design

A Figma URL alone is not enough. Cursor needs all four layers below:

1. The official Figma plugin/MCP, authenticated with a permitted account
2. A node-specific Figma URL, including the file key and `node-id`
3. Repository documentation that records extracted design decisions
4. Local copies of final assets that must remain stable in production

The Figma source is used to extract facts. `docs/design-spec.md` becomes the
durable implementation specification that future Cursor tasks can read without
reinterpreting the full file every time.

## Phase 1 — Connect Figma to Cursor

Recommended: open Cursor **Customize / Marketplace**, install the official
Figma plugin published by Figma, and complete its OAuth flow.

Alternative project-specific MCP configuration:

```json
{
  "mcpServers": {
    "figma": {
      "url": "https://mcp.figma.com/mcp"
    }
  }
}
```

Cursor will request authentication. Do not store OAuth tokens in the
repository.

## Phase 2 — Verify identity and access

Before any file read, give Cursor this prompt:

```text
Use the Figma MCP only to report the currently authenticated Figma email. Do not
open the design file yet. The verified account for file
Yxh4ZBgzy7N7KdV4PDxVGA is jiayingli0128@gmail.com. Record the authenticated
identity before continuing and keep all Figma operations read-only.
```

After confirming a permitted account, use this prompt:

```text
Use the Figma MCP to test read access to file Yxh4ZBgzy7N7KdV4PDxVGA, node
78:61. Do not write code. If access fails, report the exact error and stop. If
access succeeds, report that the node is readable and wait.
```

## Phase 3 — Extract the design before coding

Use this as a separate Cursor task:

```text
Read CURSOR_START_HERE.md, AGENTS.md, docs/figma-links.md, and
docs/design-spec.md. The user enabled read-only Figma extraction for this task.
Verify and record the authenticated account, then use the Figma MCP to inspect
file Yxh4ZBgzy7N7KdV4PDxVGA starting at node 78:61 and the approved nodes in
docs/figma-links.md.

Do not implement UI yet. Update docs/design-spec.md with source-backed facts:
- page and frame hierarchy, with route mapping
- desktop and mobile frame IDs and dimensions
- typography families, weights, sizes, line heights, and letter spacing
- colors, effects, radii, spacing, grids, constraints, and breakpoints
- components, instances, variants, and states
- prototype triggers, transitions, easing, duration, scrolling, and fixed layers
- asset inventory with source node, dimensions, format, crop, and alt-text intent
- uncertainties or missing mobile/interaction states

Do not infer values that are not available in Figma. End by listing the exact
nodes inspected and the remaining gaps. Do not edit application code.
```

## Phase 4 — Make assets durable

Figma MCP asset URLs can be temporary. Before production implementation:

- Export/download exact image and icon assets
- Store them under `public/images/`, `public/icons/`, or `public/videos/`
- Use descriptive filenames and record their Figma node IDs
- Never redraw an exported icon from memory
- Keep a short asset inventory in `docs/design-spec.md`

The current durable inventory is in `docs/asset-manifest.md`. Reuse its local
paths and do not re-export completed entries unless their Figma source changed.
Entries marked `Pending` remain blocked by the current Figma MCP call limit.

## Phase 5 — Implement one route at a time

After `docs/design-spec.md` is complete, give Cursor a narrowly scoped task:

```text
Implement only the homepage using the approved Figma nodes and
docs/design-spec.md. Reuse the existing Next.js structure and local assets.
Match the documented desktop and mobile layouts, interactions, and
reduced-motion behavior. Do not change Supabase schema or deploy. Run npm run
check and report files changed, visual differences, and verification results.
```

Repeat separately for `/projects/[slug]`, `/artwork`, and `/about`.

## Phase 6 — Visual verification

For each route, Cursor should:

1. Start the local app.
2. Capture desktop and mobile screenshots.
3. Compare them with the source Figma frames.
4. Fix measurable differences without inventing undocumented behavior.
5. Test keyboard access and `prefers-reduced-motion`.
6. Run `npm run check`.

The final UI is ready only after source extraction, local asset capture,
route-by-route implementation, and screenshot comparison are complete.
