# sfrosenk.github.io

Personal website — a static React (Vite) app deployed to GitHub Pages.

## Project structure

```
└── frontend/              React + Vite app
    ├── public/data/       JSON files — edit these to update site content
    └── src/
        ├── api.js            Loads the JSON files above
        ├── pages/            About, Projects, ProjectCard, Blog
        └── components/       NavBar, Footer
```

## Running locally

```bash
cd frontend
npm install
npm run dev
```

Site runs at http://localhost:5173

## Updating content

- **About page:** edit `frontend/public/data/about.json`
- **Projects:** edit `frontend/public/data/projects.json` — add a new object to the list per project
- **Blog:** edit `frontend/public/data/blog.json`

Changes take effect on the next build/deploy (these are static files bundled with the site, not served live by a backend).

## Deploying

Deploys are manual, not automatic on push. To publish the current `main` branch:

1. Go to the repo on GitHub → **Actions** tab → **Deploy to GitHub Pages** (left sidebar)
2. Click **Run workflow** → **Run workflow**

That builds [frontend/](frontend/) and publishes it via [.github/workflows/deploy.yml](.github/workflows/deploy.yml). You can also trigger it from the CLI with `gh workflow run deploy.yml`.

One-time setup: in the repo's **Settings → Pages**, set **Source** to "GitHub Actions".

No backend, no separate hosting account, no CORS config — it's all static files served by GitHub Pages.
