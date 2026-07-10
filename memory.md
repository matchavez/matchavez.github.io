# memory.md — matchavez/matchavez.github.io

Self-context for Claude. README.md is short and accurate (what it is, how it deploys) but doesn't describe conventions — this file covers those. Last refreshed: 2026-07-11.

## What this repo is
Mat's personal site, matchavez.com — a "personal reference site and digital garden" (notetaking, golf, Apple, hockey link-out) built with **Zensical** (not MkDocs — actively being migrated away from MkDocs remnants as of early July 2026, see commit history). Deploys via GitHub Actions (`.github/workflows/ci.yml`, triggers on push to `master` or `main`) straight to GitHub Pages using `actions/deploy-pages` — **the published site is NOT simply the `main` branch's raw files**, it's the `zensical build --clean` output (a `site/` artifact), so don't expect to find rendered HTML by browsing `main` directly; only `docs/` markdown sources and `zensical.toml` config live there.

## Layout
- `zensical.toml` — full site config: nav tree, theme (`variant = "modern"`, pinned so future Zensical default changes can't restyle the site), palette toggle (light/dark via `lucide/sun`/`lucide/moon`), markdown extensions (pymdownx family, admonitions, footnotes, mermaid via superfences, tabbed alternate style, tasklist).
- `docs/` — actual page content. Nav tree (from zensical.toml) currently: Welcome, Hockey (external link to matchavez.com/hockey/), Projects (Tellyhoova, Dumptruck), Notetaking (+ Winner First, Applications, GFM vs JSON), Favourite Quotes, Golf (Tournaments, Equipment, Chch Info), Apple (Fixes, Commands), Test Pages (Typography, Linux Shortcuts).
- `overrides/main.html` — Zensical theme override (`custom_dir = "overrides"` in config).
- **Known cruft, don't be surprised by it:** `docs/` has some duplicate/orphaned files not in the nav tree (e.g. `Favourite Quotes.md` alongside `favourite_quotes.md`, `Welcome.md` + `Personal Reference and Digital Garden Welcome.md` + `index.md`, `testsnip.md`, `steps.md`, `unit_testing.md`, `streaming.md`) — likely leftovers from the MkDocs→Zensical migration or Obsidian-vault sync. A cleanup pass ("Zensical compliance pass: drop MkDocs remnants", 2026-07-03) already removed some; more may remain. Don't delete any of these without confirming with Mat first (repeats the "never delete without explicit direction" rule).
- `Test Workbench.md` (repo root, not under `docs/`) — a personal scratch file testing iframe embeds of another doc via raw.githubusercontent.com / github.com / matchavez.com URLs. Not part of the built site (outside `docs/`), leave it alone.
- Typography: uses Inter as body font in some capacity plus **Geist Mono for code** (added 2026-07-03, "separate from InterMC Machine machinery font" per commit message — the exact font-stack rationale is in that commit's diff if it needs revisiting).

## Recent focus (as of 2026-07-03)
"Ledger redesign: one ink, one accent, one typeface in two cuts" — a deliberate minimalist visual pass. Scheme-aware `theme-color` meta (matches day/night background instead of a fixed brand red) landed 2026-06-16. Hockey nav tab added 2026-06-26 linking to the matchavez/hockey portal.

## Sync note
Keep this file and README.md in sync with every meaningful change. If they drift, flag it to Mat and get approval before publishing the sync rather than doing it silently.
