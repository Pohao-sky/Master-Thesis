# Angular Master Thesis Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Prerequisites

- Node.js (v22 or later recommended)
- npm

## specific Commands

- **Start Development Server**: `npm start` (Runs on `http://localhost:3000/`)
- **Build for Production**: `npm run build` (Artifacts will be stored in the `dist/` directory)
- **Run Tests**: `npm test`
- **Watch Mode**: `npm run watch`

## Deployment

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Workflow

The workflow file is located at `.github/workflows/deploy.yml`.

1.  **Trigger**: Pushing to the `main` branch.
2.  **Process**:
    - Installs dependencies.
    - Builds the project using the `production` configuration.
    - Sets base-href (Update this in the workflow file if your repo name is not `master_thesis`).
    - Deploys the content of the `dist` folder to the `gh-pages` branch.

### Manual Setup

If this is a fresh setup, ensure you have enabled GitHub Pages in your repository settings:
1.  Go to **Settings** > **Pages**.
2.  Under **Source**, select **Deploy from a branch**.
3.  Select `gh-pages` and `/ (root)`. (This branch will be created after the first successful action run).
