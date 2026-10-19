# naim-mckee-site

Personal portfolio site for Na'im McKee, built with [Astro](https://astro.build) from the "To boldly go" Figma comps.
Static output, deployed on Cloudflare Pages.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # writes the site to dist/
```

Requires Node 22.22 or newer.

## Where to edit things

| What | File |
|---|---|
| Hero, stats, builds, videos and talks, About, contact links | `src/data/site.ts` |
| Case studies (one Markdown file each) | `src/content/work/*.md` |
| Colors, fonts, type sizes | `src/styles/global.css` |
| Photos | `public/images/` |

- **Links set to `null` are hidden** until you fill them in, so the site never shows a dead link. Search `site.ts` for `TODO`.
- **Résumé:** drop `resume.pdf` into `public/`, then set `resume: '/resume.pdf'` in `site.ts`. The Resume buttons appear automatically.
- **Case studies:** `infotrust.md` and `aboveboard.md` are drafts (`draft: true`). Fill in the `TODO` fields and set `draft: false` to publish. Their home-page cards link up automatically.

## Deploy on Cloudflare Pages

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git** → pick `heismckee/naim-mckee-site`.
2. Framework preset: **Astro**. Build command `npm run build`, output directory `dist`.
3. Add an environment variable `NODE_VERSION` = `22` so the build uses a current Node.
4. Save and deploy. Every push to `main` redeploys.

## Point the Wix domain at it

The domain can stay registered at Wix. Two options:

- **Simplest (keep Wix DNS):** in Cloudflare Pages → your project → **Custom domains**, add `www.yourdomain.com`. Cloudflare shows a CNAME target (`naim-mckee-site.pages.dev`). In Wix → Domains → Manage DNS records, add a **CNAME** for `www` with that value. In Wix, set the root domain to forward to `www`.
- **Full control (move DNS to Cloudflare):** add the domain to Cloudflare (free plan), then in Wix → Domains → Advanced → **Change name servers** to the two Cloudflare nameservers. After it activates, add the root and `www` as custom domains in Pages. This lets the bare domain work directly.

After the domain is live, change `site` in `astro.config.mjs` to the real URL so the sitemap and share links use it.
