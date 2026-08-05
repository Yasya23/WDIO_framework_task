# WebdriverIO Test Automation Framework (TAF)

A modular, TypeScript-based WebdriverIO E2E testing framework structured around clean layer separation and Page Object Model (POM) design patterns.

---

## Architecture & Layering

The framework follows a strict 3-layer architecture to ensure maintainability, scalability, and clean code separation:

- **1. Core Layer (`src/core`)**
  - Contains global configuration/environment helpers (`get-env.util.ts`).
  - Free of application-specific domain logic or selectors.

- **2. Business Layer (`src/business`)**
  - Implements the Page Object Model (`BasePage`, `LoginPage`).
  - Stores domain-specific types (`paths.ts`) and constants (`paths.constants.ts`).

- **3. Tests Layer (`src/test`)**
  - Contains test suites (`specs/`) and framework runner configurations (`configs/wdio.conf.ts`).

---

## Highlights & Improvements Done

- **ESM Path Resolution:** Updated `wdio.conf.ts` to use `process.cwd()` with `path.resolve` for cross-environment, ESM-compatible absolute pathing (`tsConfigPath`, `specs`).
- **Glob Pattern Spec Matching:** Configured dynamic spec matching (`src/test/specs/**/*.spec.ts`) to automatically include new test suites.
- **Path Aliases:** Configured TS path aliases (`@pages/*`, `@constants/*`, `@utils/*`, `@business-types/*`) for clean imports across all layers.

---

## Local Installation & Execution

1. Clone the repository and enter the directory:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
npm install
```

3. Set up the environment variables:

```bash
cp .env-template .env
```

4. Run the test suite:

```bash
npm run test
```
