# Deployment

This package builds a small React + Vite app that is published to GitHub Pages.

- Local deploy (inside package):

```bash
npm install
npm run deploy
```

- Deploy from repo root:

```bash
npm run deploy
```

The repository also contains a GitHub Actions workflow at `.github/workflows/deploy.yml` which runs on pushes to `main` and triggers `npm run deploy` from the repo root.

**Published URL:** `https://abhayrajpatel420.github.io/NewYear-2026`

If you want deployments only on tags or PRs, I can update the workflow triggers.