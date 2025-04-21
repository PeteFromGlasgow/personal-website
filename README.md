# Typescript CLI Base

This is a powerful, multi package Typescript project base which has examples for a CLI, Browser and library.

## Features

*   📦 **Multi-package Monorepo:** Uses `pnpm` workspaces to manage `core` library, `cli`, and `browser` packages.
*   📚 **Core Library Example:** Demonstrates a reusable TypeScript library (`packages/core`).
*   💻 **CLI Application Example:** Includes a command-line interface built with TypeScript (`packages/cli`).
*   🌐 **Browser Script Example:** Shows how to bundle TypeScript for use in a web browser (`packages/browser`).
*   🧪 **Unit Testing:** Integrated unit testing setup with examples using Vitest across all packages.
*   💅 **Linting & Style:** Consistent code style enforced by ESLint & Stylistic.
*   🐳 **Docker Support:** Dockerfile provided for building the CLI application (`packages/cli/Dockerfile`).
*   훅 **Git Hooks:** Pre-commit hooks configured using Husky to ensure code quality before commits.
*   ⚙️ **Editor Configuration:** Includes a `.editorconfig` file for consistent editor settings.
*   ✨ **Automated Versioning & Changelogs:** Uses Changesets for streamlined package versioning and changelog generation.
*   🚀 **CI/CD:** GitHub Actions workflows for automated testing, building, and releasing.
*   🛡️ **Vulnerability Scanning:** Uses Trivy in CI to scan project dependencies (`pnpm-lock.yaml`) and the CLI Docker image for known vulnerabilities.
*   📖 **Documentation Site:** Uses VitePress for generating documentation, deployed via GitHub Actions.
*   🔒 **Security Policy:** Includes a `SECURITY.md` file outlining how to report vulnerabilities.
*   🤝 **Code of Conduct:** Includes a `CODE_OF_CONDUCT.md` to foster an inclusive community.

## Usage

This project uses `pnpm` to support multiple packages in the same repository.

### Setup

```bash
# Enable Corepack
corepack enable

# Install all packages recursively
pnpm install -r
```

### Building

To build all packages (`core`, `cli`, `browser`):

```bash
pnpm build
```

This command runs the `build` script defined in the `package.json` of each individual package.

### Testing

There are separate commands for running tests:

*   **Run tests for `core` and `cli` packages:**

    ```bash
    pnpm test
    ```

*   **Run tests specifically for the `browser` package:**

    ```bash
    pnpm test:browser
    ```

### Linting

To check the code style across all packages:

```bash
pnpm lint
```

To automatically fix linting issues:

```bash
pnpm lint:fix
```

### Versioning & Releasing (using Changesets)

This project uses [Changesets](https://github.com/changesets/changesets) to manage versioning and generate changelogs.

1.  **Add a changeset:** When you make a change that should trigger a package release, run:

    ```bash
    pnpm changeset
    ```
    Follow the prompts to specify which packages are affected and the type of change (patch, minor, major).

2.  **Create a release pull request:** The `changeset-bot` (if configured in CI) or a manual run of `pnpm changeset version` will consume the changeset files and update package versions and changelogs.

3.  **Publish packages:** After merging the release PR, you can publish the updated packages:

    ```bash
    pnpm release
    ```
    This script typically runs `pnpm build` first, then publishes the packages using `pnpm publish -r`. *Note: The `--no-git-checks` flag is used here, be mindful of your release workflow.*

