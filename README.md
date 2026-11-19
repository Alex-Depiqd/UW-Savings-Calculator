# UW Savings Calculator

Two self-contained static pages. There is no build step.

Repo: https://github.com/Alex-Depiqd/UW-Savings-Calculator

- `/` (`index.html`) is the UW Savings Calculator.
- `/partner/` (`partner/index.html`) is the same calculator. A partner’s name, phone, and link are stored in the visitor’s own browser (`localStorage`).

Each page is a single HTML file. CSS, JavaScript, and images are inline.

Production:

- https://uwsavingscalculator.app/
- https://uwsavingscalculator.app/partner/

A push to `main` deploys the site. Netlify publishes the repository root and does not run a build command.

Version tracking starts at v1.0.0 in `package.json`. Each later commit on `main` bumps the minor version (`v1.1.0`, `v1.2.0`, …) and GitHub tags that release. A commit message containing `[major]` bumps the main version instead (`v1.4.0` → `v2.0.0`).
