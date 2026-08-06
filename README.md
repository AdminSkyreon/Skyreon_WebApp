# Skyreon WebApp

Static Next.js marketing site for Skyreon, hosted on **GitHub Pages**.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Push to `main` and GitHub Actions builds a static export and publishes it to GitHub Pages.

Workflow: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

Site URL (after Pages is enabled):

`https://adminskyreon.github.io/Skyreon_WebApp/`

### One-time GitHub setup

1. Repo **Settings → Pages**
2. Source: **GitHub Actions**

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Local development |
| `npm run build` | Static export to `out/` |
| `npm run lint` | ESLint |
