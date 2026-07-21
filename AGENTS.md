<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# expo-interview

Blank Next.js app for a live frontend coding interview. A small Figma design gets implemented in two parts. Part 1 must work end to end and match the design; Part 2 happens only if time remains and must never destabilize Part 1. Speed matters, but the interviewer reads every line: prefer code that is obviously correct over code that is clever.

## Stack

- Next.js 16.2 App Router (`src/app`), React 19, TypeScript strict
- Tailwind CSS v4: there is no tailwind.config, tokens live in `@theme` in `src/app/globals.css`
- bun as package manager (`bun dev`, `bun run build`)
- Components go in `src/components`; keep `page.tsx` readable as a map of the design

## Working rules

1. Behavior first: make the primary interaction work end to end before visual polish.
2. Match the design values exactly: spacing, font size/weight/line-height, colors, radii, shadows, aspect ratios. Use arbitrary values like `text-[13px]` when the design does not land on a Tailwind step; accuracy beats round numbers. Promote a value into `@theme` only once it repeats.
3. Never invent design details. If a value, asset, or state is not visible in the provided design or task, say so or leave a `TODO:` marker instead of guessing.
4. Build the states the design shows or implies: hover, focus-visible, selected, disabled, empty.
5. Use semantic elements (`button` for actions, lists for lists, `label` with inputs) and keep keyboard focus visible.

## Code rules

- Minimum code that works. No new dependencies. No speculative abstraction, config, helpers, or design system.
- Server components by default; add `"use client"` only at the interactive boundary.
- State: store the minimum source of truth, derive display values instead of duplicating, keep state next to its consumers, lift only when multiple areas actually coordinate.
- TypeScript: type the boundaries (props, data shapes, handlers) explicitly; let inference cover locals; never `any`.
- Extract a component when a pattern repeats or owns a distinct interaction, not because a block is long. Name components by role, not appearance.

## Task scope (subagents)

- Edit only the files named in your task; other files belong to other tasks.
- No new dependencies, no reformatting of untouched code, no renames, no drive-by refactors.
- If the task seems to require work outside its scope, report that instead of doing it.
- Do not run builds or start the dev server; the human verifies in the browser.

## Style

- Never use em dashes or en dashes anywhere (code, comments, copy). Use " - ", commas, colons, or parentheses.
- No emojis in code, comments, or copy.
