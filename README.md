# OnCloud Static Site

A fast, SEO-friendly static website for OnCloud, built with plain HTML, CSS, and JavaScript.

## Local development

### macOS / Linux
```bash
python3 -m http.server 8000
```

### Windows (PowerShell)
```powershell
py -m http.server 8000
```

Then open <http://localhost:8000> in your browser.

## Project structure

- `index.html` – Home
- `products.html` – Products and packs
- `platforms.html` – Platform capability areas
- `solutions.html` – Solutions / use cases
- `services.html` – Services and bespoke engineering
- `case-studies.html` – Anonymised case studies
- `trust.html` – Trust & compliance
- `country-readiness.html` – Country readiness table
- `about.html` – Company story
- `blog.html` – Notes
- `contact.html` – Contact
- `partner-onboarding.html` – Partner onboarding pack
- `styles.css` – Styling
- `script.js` – Navigation behaviour
- `sitemap.xml` / `robots.txt` – SEO helpers
- `favicon.svg` / `og-image.svg` – Brand assets

## Deployment

The site is fully static and deployable on GitHub Pages or Cloudflare Pages. A GitHub Actions workflow is included in `.github/workflows/pages.yml`.
