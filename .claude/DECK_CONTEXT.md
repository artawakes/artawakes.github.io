# Deck System — Claude Context

**Read this before touching any files, git, or nav code.**

---

## Two-Version Architecture

There are two versions of every deck. They are NOT the same thing.

| | Local (presentation) | Web (l/presso/) |
|---|---|---|
| Path | `/Users/dario/New Deck/tooling-ds/` etc. | `l/presso/tooling-ds/` etc. |
| Entry point | `shell.html` or deck directly | `l/presso/shell.html` |
| Features | Speaker notes, edit mode, presenter sync | Read-only for external viewers |
| Nav | Inline pill nav embedded in each deck | shell.html provides the nav wrapper |
| Purpose | Owner presents from this | Others browse online at artawakes.github.io/l/presso/ |

### The 4 Decks
- `intro/` — Intro / About
- `tooling-ds/` — Instacart Tooling Design System
- `orders-dashboard/` — Orders Dashboard
- `northstar/` — Shopper Northstar

### Shared Files (local only, do NOT copy to l/presso)
- `shell.html` — persistent nav shell for local presentation
- `shared/nav.js` — standalone deck nav script
- `shared/nav.css` — nav styles

---

## Git Branch Structure

- `nav-pulse` — **active working branch**, all development happens here
- `main` — deployment branch, mirrors to GitHub Pages
- `deploy-shell` — legacy, ignore

**Always work on `nav-pulse`. Never commit directly to `main`.**

---

## Sync Workflow — The Only Correct Way

### When deck CONTENT changes (slides, images, copy):
1. Edit local deck files (`tooling-ds/index.html`, `orders-dashboard/index.html`, etc.)
2. Mirror the SAME files to `l/presso/` using `cp`:
   ```bash
   cp tooling-ds/index.html l/presso/tooling-ds/index.html
   cp -r tooling-ds/images/. l/presso/tooling-ds/images/
   # repeat for each changed deck
   ```
3. Commit BOTH local + l/presso changes together on `nav-pulse`
4. Merge `nav-pulse` into `main` and push

### When nav/shell changes (shell.html, nav.js, nav.css):
- Edit locally, commit on `nav-pulse`
- Do NOT copy shell.html or nav.js into l/presso deck folders
- l/presso/shell.html is a SEPARATE file — only update it intentionally

---

## NEVER DO These Things

- **Never merge origin/main into the local repo** — the remote main contains the full artawakes.github.io website (CSS, JS, CNAME, portfolio pages). Merging it pulls unrelated website files into the deck project folder and causes chaos.
- **Never overwrite the root `index.html`** — it is an 8-line redirect to `intro/index.html`, not the portfolio website.
- **Never commit l/presso changes without also having the matching local changes** — they must stay in sync.
- **Never push directly to main** — always go through nav-pulse.
- **Never copy shell.html or nav.js to l/presso deck subfolders** — those are only in l/presso root.

---

## Merge Conflict Resolution

When merging nav-pulse into main causes add/add conflicts in l/presso/:
- **Always take the nav-pulse version** — it is the source of truth
- Use: `git checkout --theirs -- <conflicted-file>`
- Then: `git add -A && git commit`

These conflicts happen because main has a diverged history from a previous direct push. Always resolve by keeping nav-pulse.

---

## Presenter Mode

Each deck has a presenter window (press `p`). All 4 decks are wired for cross-deck navigation:
- Pills at the top of each presenter window let you jump between projects
- Both the main window and presenter window navigate together via `BroadcastChannel('deck-sync:' + location.pathname)`
- The active deck's pill has class `p-project-btn--active` (no `data-href`)
- Other decks' pills have `data-href="../other-deck/index.html"`

If presenter sync breaks, check that all decks use `'deck-sync:' + location.pathname` (NOT `'deck-sync-v1'`).

---

## Local Dev Server

```bash
cd /Users/dario/New\ Deck
python3 -m http.server 3000
```

Open: `http://localhost:3000/shell.html`

The server is configured in `.claude/launch.json`.

---

## File Layout Reference

```
/Users/dario/New Deck/          ← local working directory (nav-pulse)
├── shell.html                  ← LOCAL ONLY: presentation nav shell
├── index.html                  ← 8-line redirect to intro/index.html
├── l-presso-index.html         ← deck landing page (Darío Fidanza — Presentations)
├── shared/
│   ├── nav.js                  ← LOCAL ONLY: standalone deck nav
│   └── nav.css                 ← LOCAL ONLY: nav styles
├── intro/
│   ├── index.html              ← deck HTML (local copy)
│   └── images/
├── tooling-ds/
│   ├── index.html
│   ├── cover-tds.png
│   └── images/
├── orders-dashboard/
│   ├── index.html
│   └── images/
├── northstar/
│   ├── index.html
│   └── images/
└── l/
    └── presso/                 ← WEB VERSION (mirrors above, deployed to GitHub Pages)
        ├── shell.html          ← web nav shell
        ├── index.html          ← web landing page
        ├── shared/
        ├── intro/
        ├── tooling-ds/
        ├── orders-dashboard/
        └── northstar/
```
