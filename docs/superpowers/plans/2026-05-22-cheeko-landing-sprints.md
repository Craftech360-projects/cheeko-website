# Cheeko Landing Sprints Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the Cheeko landing page sprint-by-sprint from the PRD, with mobile-first quality gates and user approval after each sprint.

**Architecture:** The app will use a Next.js App Router project with typed content data, reusable section components, Tailwind design tokens, and public asset paths from `public/assets`. Each sprint delivers a visible, testable slice of the landing page and stops for approval.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, Framer Motion, lucide-react, Vitest, Testing Library, ESLint.

---

## File Structure

- `package.json`: scripts and dependencies for development, build, lint, and tests.
- `next.config.ts`: Next.js configuration.
- `tsconfig.json`: TypeScript strict configuration.
- `postcss.config.mjs`: Tailwind PostCSS integration.
- `tailwind.config.ts`: Cheeko theme tokens, content paths, animation helpers.
- `vitest.config.ts`: test environment setup.
- `src/app/layout.tsx`: root metadata, fonts, global shell.
- `src/app/page.tsx`: page composition by sections.
- `src/app/globals.css`: CSS variables, base styles, accessibility helpers.
- `src/data/assets.ts`: typed asset path registry.
- `src/data/site-content.ts`: typed copy/content for all sections.
- `src/components/ui/*`: reusable UI primitives.
- `src/components/sections/*`: landing page sections.
- `src/test/*`: test setup and foundational tests.

## Sprint 1: Foundation And Design System Shell

**Files:**
- Create: `package.json`
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `postcss.config.mjs`
- Create: `tailwind.config.ts`
- Create: `vitest.config.ts`
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/globals.css`
- Create: `src/data/assets.ts`
- Create: `src/data/site-content.ts`
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/SectionHeading.tsx`
- Create: `src/components/ui/AssetImage.tsx`
- Create: `src/components/sections/FoundationPreview.tsx`
- Create: `src/test/setup.ts`
- Create: `src/data/assets.test.ts`
- Create: `src/data/site-content.test.ts`

- [x] **Step 1: Write failing content and asset tests**

Create tests that expect approved positioning and known asset paths to exist.

- [x] **Step 2: Run tests to verify RED**

Run: `npm test -- --run`
Expected: tests fail because project scripts/modules do not exist yet.

- [x] **Step 3: Create project foundation**

Create Next.js, Tailwind, Vitest, app shell, content registry, asset registry, and basic reusable UI components.

- [x] **Step 4: Install dependencies**

Run: `npm install`
Expected: dependencies install and `package-lock.json` is created.

- [x] **Step 5: Run tests to verify GREEN**

Run: `npm test -- --run`
Expected: all tests pass.

- [x] **Step 6: Run lint and build**

Run: `npm run lint` and `npm run build`
Expected: both exit 0.

- [x] **Step 7: Stop for approval**

Share changed files, verification output, and ask for approval to begin Sprint 2.

## Sprint 2: Hero, Promo Bar, And Navigation

Build promo bar, responsive navigation, hero background, positioning headline, signup card, and mobile hero treatment. Verify desktop and mobile layout.

## Sprint 3: Meet Cheeko And Product Options

Build Meet Cheeko section and Pro/Basic cards using real assets. Stop for feedback on product positioning and pricing presentation.

## Sprint 4: Feature Cards And Language Section

Build `What Cheeko can do` cards and multilingual language section. Verify mobile stacking and copy clarity.

## Sprint 5: Parent Trust And Age Stages

Build parent/app/safety/offline cards and age-stage section. Stop for feedback on trust messaging.

## Sprint 6: Reviews, Originals, Journey, Footer

Build social proof, Cheeko Originals, timeline, and footer. Verify claims/copy are acceptable.

## Sprint 7: Final Polish And QA

Run full responsive QA, accessibility pass, Lighthouse-style checks where possible, performance optimization, image sizing, final copy cleanup, and handoff notes.

## Self-Review

- Spec coverage: All PRD sections map to Sprint 2 through Sprint 6; mobile QA is covered in each sprint and final Sprint 7.
- Placeholder scan: Later sprints are intentionally high-level because each sprint will receive its own detailed task plan before execution.
- Type consistency: Foundation creates shared `assets` and `siteContent` contracts to keep later section components consistent.
