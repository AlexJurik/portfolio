---
name: portfolio-add-side-project
description: Add a new side project entry to this portfolio site's `src/content/projects/` collection. Use when Codex is asked to add a project card, side project, or portfolio project from a website, URL, or product name in this Astro repo. Research the project on the web first, inspect the repo's existing project entries and `src/content.config.ts`, ask the user which card position or `order` to use when placement is not already specified, create the markdown entry and any needed asset reference, shift conflicting `order` values when inserting into the middle, and validate with `pnpm build`.
---

# Portfolio Add Side Project

## Overview

Use this skill to add a new entry under `src/content/projects/` that matches the portfolio's existing side-project cards.

Treat the website and other primary public sources as the source of truth for product facts, then mirror the repo's current markdown structure and ordering conventions.

## Workflow

### 1. Research the project on the web first

Start with the project's website or the URL the user provided. If the user only gives a name, search for the official site first.

Collect only facts you can verify from public sources, such as:

- product name
- short description
- launch year or current year shown in public materials
- core features
- stack details, if clearly stated
- canonical URL for the `links` field

If the homepage is too thin, inspect clearly linked public sources such as GitHub, docs, product pages, or announcement posts. Do not invent missing details.

## 2. Inspect the repo before writing

Read `src/content.config.ts` to confirm the current schema for `sideProjects`.

Read at least two existing files from `src/content/projects/` before creating the new entry. Mirror the frontmatter pattern, writing tone, and body structure already used in the collection.

Check `src/assets/` for an existing logo or image that already fits the project before adding or referencing anything new.

## 3. Confirm the card placement

If the user has not already specified the card position or `order`, stop and ask one concise question for the intended placement.

Interpret placement like this:

- "first" or "top" means `order: 1`
- "last" or "append" means the current maximum order plus 1
- a numbered position means insert at that numeric order

If the requested `order` is already used, shift the existing project entries at that order and after it by `+1` so each card keeps a unique order value.

## 4. Create the content entry

Create a lowercase kebab-case markdown filename in `src/content/projects/` that matches the project name.

Use `src/content.config.ts` as the source of truth. For side projects, the expected fields are:

- `name`
- `date`
- `order`
- `links`
- optional `logo`
- optional `markdown`
- optional `background`

Follow these rules while writing:

- Keep the body concise and consistent with nearby entries.
- Prefer a short opening description followed by simple sections like `## Features` or `## Technology Stack` only when the source supports them.
- Use ASCII unless the file already needs something else.
- Format `links` like the existing examples.
- Prefer an existing asset when possible; otherwise only add a new asset when there is a credible, usable source. If no suitable logo is available, omit `logo` because the schema allows that.
- Only use `markdown` and `background` when the project genuinely needs an embedded custom element or another pattern already present in the collection.

## 5. Validate and report

Run `pnpm build` after the content change.

In the final response, summarize:

- the new file you added
- any existing project files whose `order` changed
- whether a logo was added or omitted
- any facts you had to leave out because the public sources did not support them

## Guardrails

Do not fabricate dates, stack details, or claims that are not supported by the website or clearly related public sources.

If the web sources still do not provide enough information to create a credible entry, pause and ask the user for the missing facts instead of guessing.
