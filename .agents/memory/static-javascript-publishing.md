---
name: Static JavaScript publishing
description: Production build behavior for standalone JavaScript entry points in the static web artifact.
---

Standalone JavaScript referenced by the HTML entry point must use a module script declaration for the Vite production build to emit it into the static output.

**Why:** A classic script tag produced a successful-looking build while Vite omitted the application JavaScript bundle, leaving the published login screen visible but non-interactive.

**How to apply:** When adding or preserving standalone JavaScript in this static artifact, verify the production output contains the emitted JavaScript bundle and run an interaction smoke test before publishing.