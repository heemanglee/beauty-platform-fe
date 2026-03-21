# Repository Guidelines

## Tech Stack
- **App framework**: React 18 + TypeScript + Vite
- **Routing**: React Router
- **State**: TanStack Query for server state, Zustand for client/session state
- **Forms & validation**: React Hook Form + Zod
- **Styling**: Tailwind CSS with shared UI components under `src/components/`
- **Testing**: Vitest + Testing Library for unit/component tests, Playwright for E2E

## Project Structure & Module Organization
- `src/` contains the app code:
  - `app/` router, providers, layout, route guards
  - `features/` domain areas such as `auth/`, `catalog/`, `admin/`, `seller/`, `orders/`
  - `components/` shared UI and common building blocks
  - `lib/` helpers and API client
  - `store/` Zustand state
  - `types/` shared TypeScript types
- `src/test/` holds unit and component-adjacent tests.
- `tests/e2e/` holds Playwright smoke and end-to-end tests.
- `docs/` contains the MVP PRD and milestone specs; read `docs/frontend-prd.md` first.
- Build output goes to `dist/` and should not be edited manually.

## Coding Style & Naming Conventions
- Use **TypeScript** with strict typing; avoid `any`.
- Follow existing formatting: 2-space indentation, semicolons, single quotes.
- Use **PascalCase** for React components (`LoginPage.tsx`), **camelCase** for functions/variables, and **kebab-case** only for non-code filenames when needed.
- Keep feature code inside its domain folder before creating new shared abstractions.
- Use `@/` imports for code under `src/`.

## Testing Guidelines
- Unit/component tests use **Vitest** and **Testing Library**.
- E2E tests use **Playwright**.
- Name test files `*.test.ts` or `*.test.tsx`; keep e2e specs under `tests/e2e/*.spec.ts`.
- Add tests for route guards, auth flows, and role-based UI changes when behavior changes.

## Commit & Pull Request Guidelines
- When the user asks to commit changes, create a git commit, or mentions `/commit`, use the local `git-commit` skill.
- `git-commit` skill core flow: inspect `git diff` / `git diff --staged` / `git status --porcelain`, stage files by logical work unit, then generate a concise commit message from the diff while honoring this repo's commit policy.
- Never commit secrets, never skip hooks with `--no-verify` unless explicitly asked, and never force-push without explicit request.
- Use short, imperative commit subjects, e.g. `Add seller product route skeleton`.
- Prefer structured commits with rationale and verification notes when changes are non-trivial.
- PRs should include: summary, affected areas, verification evidence, and screenshots for UI changes.

