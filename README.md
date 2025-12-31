# NewYear-2026

## Deployment 📦

This repository contains a small site in the `new-year-gift/` folder that is published to GitHub Pages.

- Local deploy (from repo root):

```bash
npm run deploy
```

This runs `npm --prefix new-year-gift run deploy`, which builds `new-year-gift` and publishes the `dist/` directory using `gh-pages`.

- Local deploy (from package folder):

```bash
cd new-year-gift
npm install      # only if dependencies aren't installed
npm run deploy
```

- CI / Auto-deploy:

A GitHub Actions workflow has been added at `.github/workflows/deploy.yml` which runs on pushes to `main` and executes `npm run deploy` automatically.

- Published URL:

`https://abhayrajpatel420.github.io/NewYear-2026`

If you want the workflow to trigger only for tags, pull requests, or a different branch, tell me and I can adjust it.