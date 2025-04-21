# ---- Builder Stage ----
FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
WORKDIR /app
COPY ./ /app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm -r install --frozen-lockfile
RUN pnpm -r run build
RUN pnpm deploy --filter=@typescript-cli-template/cli /prod/cli

FROM base AS cli
LABEL org.opencontainers.image.source=https://github.com/PeteFromGlasgow/typescript-cli-template
WORKDIR /app

# Copy necessary files from the builder stage
COPY --from=build /prod/cli /app

# Set the entrypoint
ENTRYPOINT ["node", "./dist/src/app.js"]
