# CommerceIQ academic project website

Next.js App Router, TypeScript, Tailwind CSS, Lucide and custom SVG. Public project presentation, not the proposed analytics application.

## Local development

Node.js 20.9+ is required. Use `npm ci`, `npm run dev`. Verify with `npm run lint`, `npm run typecheck` and `npm run build`.

## Content maintenance

- `content/project.json`: team, supervisor, jury and project identity.
- `content/documents.json`: deliverables, dates and manually maintained statuses.
- Put actual approved PDF reports in `public/documents/`, set `file` to `/documents/report.pdf` and status to `Published`. The archive only links published files that exist at build time. Commit and push to rebuild.
- Four proposed members are shown with an explicit approval note. Syllabus requires three students.
- Confirm High-Level Design deadline with coordinator before changing its date.
- Charts use synthetic illustrative data. There are no validated model results.

## Vercel Git deployment

Import the GitHub repository in Vercel with the Next.js preset, repository root directory, `npm run build`, and production branch `main`. No environment variables, database, authentication or API keys are needed. Every push to main deploys production; other branches produce previews through the native Git integration.

## Academic requirements

Syllabus pages 3–4 require a project website hosting reports. Proposal submission includes project name, website URL, names of members, supervisor and jury, and a 1–2 paragraph description. Schedule: 23 Oct proposal, 20 Nov specifications, 4 Dec analysis, 18 Dec multidisciplinary delivery. The High-Level Design date is inconsistent (Friday of week 14 vs 30 Dec); leave it unconfirmed. Presentations/demo date is TBD. Website publication does not replace email or LMS submissions.

See `docs/proposal-draft.md` for a reviewable two-paragraph proposal and `docs/syllabus-review.md` for the detailed submission checklist.

Live production: https://commerceaiq-website.vercel.app
GitHub: https://github.com/CommerceAIQ/commerceaiq-website
Native Vercel Git integration is connected to main. Repository is public with owner approval.

## Editing website content

All editable copy and project data live in the root content/ directory as JSON. Read content/README.md for the Turkish editing guide, report publication examples and GitHub-to-Vercel workflow. No TSX changes are needed for text, team, documents, dates or menu labels. Run npm run validate:content before publishing. Changes become live after committing and pushing to main and a successful Vercel build.

