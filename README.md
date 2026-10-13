# Shadcn/UI Landing Page Template

## <a href="https://ui.shadcn.com/" target="_blank">ShadcnUI</a> + <a href="https://react.dev/" target="_blank">React</a> + <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> + <a href="https://tailwindcss.com/" target="_blank">Tailwind</a>.

![shadch-landing-page](https://github.com/leoMirandaa/shadcn-landing-page/assets/61714687/3ba7b51f-9589-4541-800a-5ab7cecad1b5)

Build your React landing page effortlessly with the required sections to your project. <a href="https://shadcn-landing-page.vercel.app/" target="_blank">Live Demo</a>

## Sections

- [x] Navbar
- [x] Sidebar(mobile)
- [x] Hero
- [x] Sponsors
- [x] About
- [x] Stats
- [x] How It Works
- [x] Features
- [x] Services
- [x] Call-to-Action (CTA)
- [x] Testimonials
- [x] Team
- [x] Pricing
- [x] Newsletter
- [x] Frequently Asked Questions(FAQ)
- [x] Footer

## Features

- [x] Fully Responsive Design
- [x] User Friendly Navigation
- [x] Dark Mode
- [x] Meta tags

## How to install

1. Clone this repository:

```bash
git clone https://github.com/leoMirandaa/shadcn-landing-page.git
```

2. Go into project

```bash
cd shadcn-landing-page
```

3. Install dependencies

```bash
pnpm install
```

4. Run project

```bash
pnpm dev
```

## Code quality

This project uses Oxlint for linting TypeScript and TSX files and Oxfmt for formatting.
Run these commands from the project directory:

```bash
pnpm lint         # Check code; warnings fail the check
pnpm lint:fix     # Apply safe automatic lint fixes
pnpm format       # Format source, configuration, and documentation
pnpm format:check # Check formatting without changing files
pnpm build        # Type-check and build the production application
```

Lint rules are configured in `oxlint.config.ts`, preserving the existing ESLint,
TypeScript, React Hooks, and Fast Refresh checks. Formatting rules are configured
in `oxfmt.config.ts`, using Oxfmt's default style with import and Tailwind class
sorting disabled. Dependencies, build output, and the pnpm lockfile are excluded
from formatting.

Both TypeScript configurations use `defineConfig` for type checking and editor
autocomplete. Use Node.js 22.18.x or a later 22.x release, or Node.js 24 and newer,
to load the TypeScript lint configuration.

Shared styles are exported from `src/components/ui/button-variants.ts`,
`src/components/ui/badge-variants.ts`, and
`src/components/ui/navigation-menu-styles.ts`. Import `useTheme` from
`src/components/theme-context.ts`. Component modules export components and types
to keep Fast Refresh checks enabled.
