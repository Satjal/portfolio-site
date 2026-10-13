# ARISE: Real-Life Leveling System

Original browser-only self-improvement RPG. The existing React portfolio and its Vercel deployment remain in the repository root; this is a separate Vite application.

## Local launch (Mac, Windows, Linux)

Install Node.js 24 LTS, download/clone this repository, then open a terminal in its `arise` folder:

```sh
npm ci
npm run dev
```

Open the address printed by Vite. No backend, database, account, or API key is required.

## Rules and privacy

Create a hunter (E-Rank, Level 1). Focus and selected goals are personal intentions. All attributes and quests are available to everyone. Daily quests reward XP once per local calendar day, +2 to the related attribute, and 1 battle energy. Every 200 XP grants a level; rank rises every five levels, up to S. Missed days never erase XP. Spend 1 energy per boss attack. Damage depends on level and Strength. Victory grants 150 XP once per encounter and an achievement. Start another encounter after victory.

Custom quests and optional personal boundaries grant 40 XP each. Log workouts, reading, nutrition, sleep and habits; claim matching daily quests for XP (logs do not grant extra rewards). Complete the 10-minute meditation timer to save a session and claim the eligible daily meditation reward. A running timer resets after refresh, but completed progress persists. Plan recovery days without penalties.

State is stored in localStorage (`arise.v1`) in this browser. Settings exports a JSON backup or resets the demo. Optional sensitive goals and notes are stored locally, visible to anyone sharing the browser profile, and included in backups. No cloud sync. Clearing storage loses progress. Game stats are not IQ, medical assessments, or health advice. Quest completion is self-reported.

## Tests and production build

```sh
npm test
npm run build
npm run preview
```

## GitHub Pages

In repository **Settings → Pages → Source**, select **GitHub Actions**. The repository-root workflow `.github/workflows/arise-pages.yml` tests, builds and deploys ARISE on relevant pushes to `main` or manual workflow runs. It derives the base path from the repository name. Navigation uses React state (no route paths), so refreshing a section avoids Pages routing 404s.

For Satjal/portfolio-site the expected Pages address is `https://satjal.github.io/portfolio-site/`. This is separate from the existing Vercel portfolio. An existing GitHub Pages site in this same repository would be replaced by ARISE; check Pages settings before activating it. No secrets are required. For a root custom domain or username.github.io repository, change `ARISE_BASE` in the workflow to `/`.

To test the Pages build locally:

```sh
ARISE_BASE=/portfolio-site/ npm run build
ARISE_BASE=/portfolio-site/ npm run preview
```

Open the printed repository-prefixed address. Assets use original inline SVGs; no external images or fonts are required.
