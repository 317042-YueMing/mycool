# Refero implementation notes

Read the embedded DESIGN.md / Style Reference of all three sources before changing the homepage:

- [Brisbane Web Developer](https://styles.refero.design/style/23d83a89-8f22-405a-aa33-74fd0ebde9d8): warm neutral canvas; media above captions; spacious gallery rather than text panels. Adapted to a full-width lead case and a 2.1:1 screenshot/archive row, with 20–28px gutters. Artwork shadows apply only to actual Mycool screenshots.
- [Cori Corinne](https://styles.refero.design/style/2c18e573-0ffb-4f0d-848c-ff72a5839fd3): display-only serif nameplate; minimal navigation; one identity sentence; text contact links. Mycool uses local Chinese serif fallbacks, no remote font dependency. Hero size is fluid, up to 216px; body and navigation remain sans-serif.
- [Verse](https://styles.refero.design/style/486c3132-9ff7-4e27-9eef-ca2e130bd827): project unit consists of media plus technical metadata beneath it. Use 13–14px monospace metadata, square media surfaces and compact link cues. Do not adopt its all-page dark theme, dense borders or 11px body typography.

## Responsive implementation

Below 700px the gallery becomes one column. Project media uses the entire content width; captions stay beneath it. Case covers retain readable titles and metadata. The working stack uses a compact two-column index. Major section gaps reduce from 80–92px to 60–65px.

## Evidence boundaries

Mycool media is captured from the actual pre-redesign V2 page, documented in `public/media/mycool/README.md`. Robot cover is HTML typography, not an equipment photo. LSTM has no fabricated preview. Engineering case tiles expand with native `details` to show only existing problem observations; investigation, changes and results remain unfilled. All project media and covers have explicit roles in the page.

## Checks

Browser validation and the measured media/cover area ratio are stored in `output/playwright/refero/checks.json`. Screenshots use 1440 × 900 and 390 × 844 viewports. The ratio counts non-overlapping `.media-surface` rectangles against the full page area, excluding the LSTM no-preview surface and all captions.
