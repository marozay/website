# Agent Guide

This file defines how AI agents should work in this repository. Rules here apply to the entire repository. For package-specific rules, see the nested `AGENTS.md` files listed below.

## Language

- Write all code, comments, commit messages, and documentation in English.
- Use English for internal reasoning and planning.
- Respond to the user in the user's language.
- Be concise. Lead with the result; skip preamble and do not restate the request.

## Toolchain

- Runtime & package manager: **Bun** (not Node.js, not npm/pnpm/yarn)
- Frontend framework: **Astro** (not React, not Vue)
- Language: **TypeScript** in strict mode

### Commands

- Typecheck: `bun run typecheck`
- Lint: `bun run lint:fix`

## Repository-wide rules

1. **Do not change anything unless explicitly asked.**
   Only act when the user asks for a change. Research, questions, and discussion are not requests to modify the project.

2. **Do not treat a problem description as a request to fix it.**
   If the user describes a bug, error, or odd behavior without asking to fix it, treat it as context. Ask first.

3. **Do not assume — verify.**
   Never claim "it works because...". Show real evidence: actual command output or actual code. This applies to code too — run `bun oxlint` and `bun run --workspaces typecheck`, and confirm you left no errors, including errors that were not yours before you touched the file.

4. **Do not touch what was not asked about.**
   Modify only files directly necessary for the task. Do not refactor, reformat, or "improve" neighboring code.

5. **State uncertainty explicitly.**
   If you cannot verify a claim, mark it as unverified. Do not present assumptions as facts.

6. **Stop before irreversible actions.**
   Before any command that deletes, overwrites, or reverts (`rm`, `git reset`, `git checkout`, `git clean`), stop and ask. Even if it seems like part of verification.

7. **Write comments that explain why, not what — strictly following ASD-STE100 (Simplified Technical English).**
   Code shows _what_ happens. Comments state _why_ — the reasoning, constraint, workaround, or tradeoff.
   - Apply ASD-STE100 rules: use active voice, simple present tense, approved base verbs, and concrete nouns. Eliminate articles (`a`, `an`, `the`), idioms, phrasal verbs, and passive constructions.
   - Keep sentences under 15 words; limit comments to 1–2 lines. Ban multi-paragraph JSDoc.
   - On public APIs, state the contract in one direct clause; skip `@example` unless usage is non-obvious.
   - Bad: `// We should retry this request because the upstream server occasionally drops it`
   - Good: `// Retry once: upstream server drops first request intermittently`

8. **Use the `.tmp` folder for temporary files.**
   This folder is completely at your disposal; use it to store temporary files for scripts. If the folder doesn't exist and you need it, create it. If it contains any interfering content, you can delete whatever you need.

## Documentation

This is an Astro project. Astro is not a traditional SPA framework: it ships zero client-side JavaScript by default, renders static HTML/CSS at build time or on the server (Islands Architecture), and hydrates interactive UI islands selectively via client:* directives. Do not port SPA or client-first patterns.

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
