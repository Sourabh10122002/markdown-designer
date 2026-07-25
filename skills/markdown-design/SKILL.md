---
name: markdown-design
description: Use whenever creating or substantially rewriting ANY Markdown (.md) file — READMEs, docs, plans, architecture notes, reports, summaries, runbooks, comparisons. Never ship plain-text-only markdown. Turns documents visual with Mermaid diagrams (flowchart, sequence, gantt, state, ER, pie, timeline), GitHub alerts, comparison tables, collapsible sections, and status indicators.
---

# Markdown Design

Plain walls of text are a failure mode. Every markdown document you produce must communicate **visually first, textually second**: show the structure in a diagram or table, then explain in prose.

Target renderer is **GitHub-flavored markdown** (GitHub, VS Code, GitLab, Obsidian all render it). Mermaid and alerts render natively on GitHub — use them freely.

## Workflow

1. **Scan the content for visualizable structure** using the mapping table below.
2. **Lay out the document**: title → one-line summary → status/badges line (if applicable) → diagram or table near the top ("show, then tell") → prose sections → collapsible appendices.
3. **Load the reference you need before writing the element** (do not guess syntax):
   - Exact Mermaid syntax for any diagram type → [references/mermaid-cheatsheet.md](references/mermaid-cheatsheet.md)
   - Alerts, tables, collapsible sections, badges, progress bars, kbd, footnotes → [references/visual-elements.md](references/visual-elements.md)
   - Full document skeletons (README, architecture doc, status report, ADR, runbook) → [references/templates.md](references/templates.md)
4. **Self-check against the quality bar** before finishing.

## Structure → element mapping

| If the content contains… | Render it as… |
|---|---|
| Steps, workflow, pipeline, decision logic | `flowchart` |
| Two+ components exchanging messages (API calls, auth flows) | `sequenceDiagram` |
| System / service architecture | `flowchart` with `subgraph` blocks |
| Lifecycle, statuses, transitions | `stateDiagram-v2` |
| Schedule, phases, milestones, deadlines | `gantt` |
| Chronological events, history, roadmap | `timeline` |
| Database schema, entities and relations | `erDiagram` |
| Proportions, percentage breakdown | `pie` |
| Class / type hierarchies | `classDiagram` |
| Git branching strategy | `gitGraph` |
| Hierarchical concepts, brainstorm | `mindmap` |
| Options compared against criteria | Table with ✅ / ⚠️ / ❌ cells |
| Key numbers / metrics | Compact table or bold inline stats, never buried in prose |
| Warnings, tips, prerequisites, gotchas | GitHub alerts (`> [!WARNING]` etc.) |
| Long logs, raw output, optional deep-dives | `<details><summary>` collapsible |
| Task/progress status | ✅ 🔄 ⏳ ❌ markers or `█████░░░░░ 50%` bars |
| Document longer than ~4 sections | Table of contents with anchor links |

## Mermaid safety rules (always apply)

These prevent the most common render failures — full details in the cheatsheet:

- Wrap node labels containing `( ) [ ] { } # ; :` or other punctuation in double quotes: `A["Deploy (prod)"]`.
- Never use lowercase `end` as a node ID in flowcharts — it terminates subgraphs. Use `End` or `finish`.
- Use `<br/>` for line breaks inside labels, not `\n`.
- Keep one diagram to **one idea and ≤ ~20 nodes**; split larger systems into multiple diagrams.
- Prefer `flowchart` over the legacy `graph` keyword.
- Don't add `%%{init}%%` theme overrides unless asked — GitHub's default themes handle light/dark mode automatically.

## Quality bar (self-check before finishing)

- [ ] Any doc explaining a process, system, or plan has **at least one diagram**.
- [ ] Any comparison or set of ≥3 related facts is a **table**, not a prose list.
- [ ] Warnings and prerequisites use **alerts**, not plain paragraphs.
- [ ] Content over ~30 lines that's secondary (logs, full configs, edge cases) is **collapsed**.
- [ ] Diagrams appear **before** the prose that explains them.
- [ ] Nothing is invented: diagrams and tables only restructure facts already established. No fake numbers in pie/gantt charts.

## Restraint

Visual ≠ decorated. Do **not** force diagrams onto content with no structure (changelogs, short answers, license files, code-heavy snippets). A 5-line note stays a 5-line note. Emoji are for status semantics (✅ ❌ ⚠️), not sprinkles — never more than one per line, none in headings unless the doc already uses them.
