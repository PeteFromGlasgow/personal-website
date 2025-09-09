# Personal Website

This is a multi-package Typescript project for my personal website.

## Features

*   📦 **Multi-package Monorepo:** Uses `pnpm` workspaces to manage the different parts of the project.
*   🚀 **Frontend:** A modern, fast, and content-focused website built with Astro, Vue, and Tailwind CSS.
*   📄 **Resume Data:** A dedicated package to manage my resume data in a structured format.
*   🧪 **Unit Testing:** Integrated unit testing setup with examples using Vitest.
*   💅 **Linting & Style:** Consistent code style enforced by ESLint & Stylistic.
*   훅 **Git Hooks:** Pre-commit hooks configured using Husky to ensure code quality before commits.
*   ⚙️ **Editor Configuration:** Includes a `.editorconfig` file for consistent editor settings.
*   ✨ **Automated Versioning & Changelogs:** Uses Changesets for streamlined package versioning and changelog generation.
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

To build all packages:

```bash
pnpm build
```

This command runs the `build` script defined in the `package.json` of each individual package.

### Testing

There are separate commands for running tests:

*   **Run tests for all packages:**

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
