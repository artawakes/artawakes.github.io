# New Deck — Claude Instructions

Read `.claude/DECK_CONTEXT.md` before touching any file, git command, or nav code. It is the source of truth for this project.

---

## Critical: Two-Version Architecture

There are two separate versions of every deck. They are NOT the same.

| | Local (presentation) | Web (`l/presso/`) |
|---|---|---|
| Path | `/Users/dario/New Deck/tooling-ds/` etc. | `l/presso/tooling-ds/` etc. |
| Shell | `shell.html` (presenter mode, speaker notes) | `l/presso/shell.html` (read-only) |
| Nav | `shared/nav.js` — full feature set | `l/presso/shared/nav.js` — simplified |
| Purpose | Owner presents live | External viewers browse online |

**`shared/nav.js` (local) has ~73 lines that do NOT exist in the web version:** cross-deck auto-advance (`goNextProject`), programmatic navigation (`goToProject`), and presenter BroadcastChannel wiring. Never copy these to `l/presso` deck subfolders.

---

## Never Do These

- Never merge `origin/main` into this repo (it's the full artawakes.github.io site — pulling it causes chaos)
- Never commit directly to `main` — always work on `nav-pulse`
- Never copy `shell.html` or `shared/nav.js` into `l/presso` deck subfolders
- Never overwrite the root `index.html` (it's an 8-line local redirect only)

---

## Git Branches

- `nav-pulse` — active working branch, all development here
- `main` — deployment branch, merged from nav-pulse then pushed to GitHub Pages

---

## Local Dev Server

```bash
python3 -m http.server 3000   # configured in .claude/launch.json
```

- **"Run the local deck" = `http://localhost:3000/`** -- root `index.html` redirects to `intro/index.html`
- `l/presso/` is the web/GitHub Pages version, not the local deck
- `shell.html` is unrelated to this flow

---

## Deploy

Local folder structure ≠ remote structure. Deploy is via `rsync` into a separate clone of `artawakes/artawakes.github.io`, not `git push` from this repo. See `.claude/DECK_CONTEXT.md` for the exact commands.

---

## Design System

`DESIGN.md` — full design token spec, typography, component patterns, layout classes. Use as source of truth for all visual decisions.
