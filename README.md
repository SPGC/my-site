# Personal Site — GitHub Pages

A static, no-build, one-page site. Modern CSS, accessible, responsive, dark mode included.

## Quick start (no Actions)

1. Create a new repository on GitHub, e.g. `portfolio`.
2. Upload all files from this folder to the repository root.
3. Go to **Settings → Pages** and set:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`, folder `/root`
4. Wait for Pages to deploy and open `https://<your-username>.github.io/<your-repo>/`.

## Customize

- Replace `<your-username>`, `<your-repo>`, and `<your-handle>` in `index.html`, `robots.txt`, and `sitemap.xml`.
- Update social links and `data-email` attributes.
- Put your real CV at `assets/cv.pdf` (create the `assets/` folder if missing).
- Edit content sections (About/Projects/Publications/Teaching) in `index.html`.
- Tweak colors/spacing in `styles.css`.

## Optional: GitHub Actions

If you prefer Actions-based deploy instead of "Deploy from a branch", add:

`.github/workflows/pages.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ "main" ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Pages
        uses: actions/configure-pages@v5
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: "."
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Then enable **Pages** for the repo. No build step is required.

## License

MIT — do whatever, please keep attribution.
