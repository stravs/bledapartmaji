# Unit presentation and Bentral

Each unit is displayed in `src/components/VistaUnit.astro`, with responsive styles in `src/styles/vista-units.css`. Facts are from the saved first-party unit pages under `../../runs/bled-vista/`.

`.data/bentral.json` preserves the public per-unit Bentral embed parameters from those pages. The iframe URL is the same URL produced by Bentral's official booking.js wrapper. Locale is selected per page. No account credentials or backend booking implementation are needed.

Booking forms load only after the visitor clicks the unit booking button. Without JavaScript, that link opens Bentral directly. The dialog also links to Bentral in a new tab and to the original unit page as fallbacks. Resize messages require the Bentral origin and matching frame window. Native dialogs support Escape, focus trapping, and focus restoration.

Checked: production build/typecheck; all seven unit cards; all six photo galleries; no horizontal overflow at 390, 768, 1440px; English and Slovenian; live Apartment 1 Bentral form loads with that unit selected; close button and Escape. No reservation, guest details, or payment submitted. Other unit embeds preserve their original IDs but have not been tested through a completed booking.

Preview server remains stopped after checks. Start manually:

```sh
npm run dev -- --host 0.0.0.0 --port 4324
```
