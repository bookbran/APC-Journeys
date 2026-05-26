# APC Journeys

Visual reference material for **A Portland Career**'s three coaching journeys — Career Explorer, Pivot, and Advancing Job Search — plus the Inquiry Call Guide that intake coaches use during prospect calls.

## What's in here

| Folder | What it is | How it's used |
|--------|-----------|---------------|
| `Inquiry Call Guide/apc-inquiry-call-guide/` | React + Vite app — call flow, key questions, fee response flow, journey maps tab, email templates | **Deployed** to https://bookbran.github.io/APC-Journeys/ via GitHub Actions on every push to `main` |
| `Career Explorer/portland-career-journey-map/` | React + Vite app rendering the Explorer journey as an 11"×8.5" landscape PDF (download via html2canvas) | Coach hands the PDF to clients on the Explorer track |
| `Advancing Job Search/apc-job-search-journey/` | React + Vite app rendering the Advancing journey as an 11"×8.5" landscape print layout | Coach hands the PDF to clients on the Advancing track |
| `Job Search Pivot/apc-pivot-journey-map/` | React + Vite app rendering the Pivot journey as an 11"×8.5" landscape PDF | Coach hands the PDF to clients on the Pivot track |
| `*-Pathway-Screenshot.png` | Snapshot exports of each journey map | Embedded references; not currently deployed |
| `take-screenshot.mjs` | Playwright script that captures a journey map app's `[class*="w-[11in]"]` element to PNG | `node take-screenshot.mjs http://localhost:3001/ Pivot-Pathway.png` |

## Where journey content lives

**Source of truth:** [`bookbran/apc-journeys-data`](https://github.com/bookbran/apc-journeys-data) — a tiny private npm package that exports `JOURNEYS`, `Journey` types, `getJourneyByKey`, and `isJourneyKey`. The Inquiry Call Guide imports from it; the [APC Intake Builder](https://github.com/bookbran/APC-Intake-Builder) and (planned) `apc-crm` milestone library do too.

When journey phases, sessions, activities, or homework change, **edit `apc-journeys-data` first**, then `npm update apc-journeys-data` in each consumer. Don't add inline journey data back into any consumer.

The three standalone journey-map apps (Career Explorer, Advancing, Pivot) currently keep their own copy of the data because they're standalone print artifacts that pre-date the shared package. They can be migrated to consume `apc-journeys-data` next time they need an update.

## Local development

Each subfolder is its own Vite project. To run any of them:

```bash
cd "Inquiry Call Guide/apc-inquiry-call-guide"   # or any of the journey-map folders
npm install
npm run dev
```

The Inquiry Call Guide runs at http://localhost:3001 by default.

To rebuild and verify the GitHub Pages bundle locally:

```bash
cd "Inquiry Call Guide/apc-inquiry-call-guide"
npm run build
npm run preview
```

## Deployment

`.github/workflows/deploy-github-pages.yml` builds the Inquiry Call Guide and publishes its `dist/` to the `gh-pages` branch on every push to `main`. The other three journey-map apps aren't deployed — they're run locally to generate PDFs as needed.

The base path is set in `Inquiry Call Guide/apc-inquiry-call-guide/vite.config.ts`:

```ts
base: process.env.GITHUB_ACTIONS === 'true' ? '/APC-Journeys/' : '/'
```

## Related repos

- [bookbran/apc-journeys-data](https://github.com/bookbran/apc-journeys-data) — canonical journey content (npm package)
- [bookbran/APC-Intake-Builder](https://github.com/bookbran/APC-Intake-Builder) — booking + intake system; consumes `apc-journeys-data` for its `/journeys` reference page
- [bookbran/apc-crm](https://github.com/bookbran/apc-crm) — coach CRM with milestone tracking; planned consumer of `apc-journeys-data`

## License

Private — A Portland Career.
