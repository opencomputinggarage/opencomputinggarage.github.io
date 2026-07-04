# Open Computing Garage

Organization homepage for Open Computing Garage.

Live site: <https://opencomputinggarage.github.io/>

GitHub repository:
<https://github.com/opencomputinggarage/opencomputinggarage.github.io>

## Mission

> Lowering the barrier so robust infrastructure can be built without massive capital.

This site presents Open Computing Garage as a public workbench for practical
cloud-native tooling, automation, containers, observability, and infrastructure
building blocks that small teams can inspect, run, and extend.

## Tech Stack

- React 19
- TypeScript 6
- Vite 8
- pnpm 11
- Node.js 24 or newer
- mise for local runtime management
- GitHub Actions for CI and GitHub Pages deployment

## Requirements

Install [mise](https://mise.jdx.dev/) first, then let mise install the pinned
runtime versions from `mise.toml`.

```bash
mise install
```

Pinned versions:

- Node.js `24.17.0`
- pnpm `11.7.0`

The package also declares:

- `engines.node`: `>=24`
- `engines.pnpm`: `>=11`

## Development

```bash
pnpm install
pnpm dev
```

The Vite dev server usually starts at:

```text
http://127.0.0.1:5173/
```

## Quality Checks

Run linting:

```bash
pnpm lint
```

Run a production build:

```bash
pnpm build
```

The production output is written to `dist/`.

## Project Structure

```text
src/
  App.tsx          Main page content and repository cards
  App.css          Page layout and responsive styling
  index.css        Global browser defaults
  assets/hero.png  Homepage hero image
public/
  favicon.svg
.github/workflows/
  ci.yml           Lint and build checks
  pages.yml        GitHub Pages deployment
```

## Deployment

This is an organization GitHub Pages repository. The repository name must remain:

```text
opencomputinggarage.github.io
```

The public URL is:

```text
https://opencomputinggarage.github.io/
```

Deployment is handled by `.github/workflows/pages.yml` on pushes to `main`.
The workflow:

1. Checks out the repository.
2. Installs Node.js and pnpm through mise.
3. Verifies Node.js 24 or newer.
4. Installs dependencies with `pnpm install --frozen-lockfile`.
5. Runs `pnpm lint`.
6. Runs `pnpm build`.
7. Uploads `dist/` as a GitHub Pages artifact.
8. Deploys through the official GitHub Pages action.

GitHub Pages should be configured with:

```text
Settings -> Pages -> Source -> GitHub Actions
```

## CI

`.github/workflows/ci.yml` runs on pull requests and pushes to `main`.

It verifies the same runtime baseline as deployment:

- Node.js 24 or newer
- pnpm 11 or newer
- lint pass
- production build pass

The workflows set `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24=true` so GitHub Actions
JavaScript actions run on Node.js 24 where supported by GitHub's runner.

## Content Notes

The homepage currently links to public repositories under the organization:

- `forklift`
- `cargo-scanner`
- `containers`
- `snowflake-exporter`

Update `src/App.tsx` when repository descriptions or featured projects change.
