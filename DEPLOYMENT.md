# Cloudflare deployment

This is a static Astro site. Image optimization runs during the build; no Astro Cloudflare adapter, KV session binding, or Cloudflare Images binding is needed.

## Cloudflare Workers Builds

- Repository root: `/`
- Deploy command: `npx wrangler deploy`
- `wrangler.jsonc` runs `npm run build` and uploads `dist` as static assets.
- Do not run `astro add cloudflare` or auto-configure an Astro server adapter. The explicit Wrangler configuration replaces framework auto-configuration.
- If a custom Cloudflare command previously installed `@astrojs/cloudflare` or rewrote `astro.config.mjs`, remove that command before retrying.

Validate without publishing: `npx wrangler deploy --dry-run`.

## Cloudflare Pages (alternative)

- Build command: `npm run build`
- Output directory: `dist`
- No adapter required.
