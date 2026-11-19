# UW Savings Calculator

Two self-contained static pages. There is no build step.

- `/` (`index.html`) is the UW Savings Calculator.
- `/partner/` (`partner/index.html`) is the same calculator. A partner’s name, phone, and link are stored in the visitor’s own browser (`localStorage`).

Each page is a single HTML file. CSS, JavaScript, and images are inline.

Production:

- https://uwsavingscalculator.app/
- https://uwsavingscalculator.app/partner/

A push to `main` deploys the site. Netlify publishes the repository root and does not run a build command.
