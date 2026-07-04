# Open Computing Garage

React SPA for the Open Computing Garage organization page.

Mission:

> Lowering the barrier so robust infrastructure can be built without massive capital.

## Stack

- React
- TypeScript
- Vite
- pnpm managed through mise
- GitHub Pages deployment through GitHub Actions

## Development

```bash
mise install
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

The production build is written to `dist/`.

## Deployment

The workflow in `.github/workflows/pages.yml` builds the SPA and deploys `dist/`
to GitHub Pages on pushes to `main`.

In the repository settings, set Pages source to **GitHub Actions**.
