# WDIO Framework EPAM Task

This repository contains the practical task implementation for Module 2, focusing on building an automation framework from scratch and mastering various assertion styles.

## Tasks Completed

### 1. Framework Architecture Setup

- Initialized a WebdriverIO (WDIO) automation framework.
- Configured the project using **Mocha** as the test runner and **TypeScript** for static type safety.
- Integrated cross-browser drivers to execute end-to-end tests against a public sandbox environment.

### 2. Assertion Library Integration

- Explicitly installed and configured the **Chai** assertion library as a development dependency to complement native WDIO matchers.
- Set up global environment references to ensure smooth type-checking when injecting custom properties.

### 3. Assertion Interface Practice (`test/specs/`)

Created a dedicated test suite demonstrating practical mastery of Chai's distinct evaluation interfaces:

- **Assert (TDD Style):** Implemented functional, message-driven validations using `assert.equal()`.
- **Expect (BDD Style):** Constructed natural-language wrapper chains using `expect().to.equal()` (aliased to avoid runtime collisions with global WDIO matchers).
- **Should (BDD Style):** Handled object property extensions using `.should` syntax alongside type-safe fallbacks for native TypeScript primitives.

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
