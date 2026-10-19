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

## Deploy on Cloudflare (Workers)

The repo already includes `wrangler.jsonc`, which tells Cloudflare to serve the built `dist/` folder.

1. Cloudflare dashboard → **Compute** → **Workers & Pages** → **Create application**.
2. Under **Import a repository**, connect GitHub and pick `heismckee/naim-mckee-site`.
3. Build command: `npm run build` · Deploy command: `npx wrangler deploy`.
4. Under the build variables, add `NODE_VERSION` = `22`.
5. **Save and Deploy.** The site goes live at `naim-mckee-site.<your-subdomain>.workers.dev`, and every push to `main` redeploys.

## Point the Wix domain at it

The domain can stay registered at Wix. Move its DNS to Cloudflare (free):

1. In Cloudflare's **Add a domain** box, enter the domain and choose the Free plan. Cloudflare gives you two nameservers.
2. In Wix → Domains → your domain → **Advanced** → **Change name servers**, replace Wix's nameservers with Cloudflare's two.
3. Once Cloudflare shows the domain as Active (minutes to a few hours), open the Worker → **Settings** → **Domains & Routes** → **Add** → **Custom domain**, and add the root domain and `www`.

After the domain is live, change `site` in `astro.config.mjs` to the real URL so the sitemap and share links use it.
