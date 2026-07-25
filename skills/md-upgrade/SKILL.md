---
name: md-upgrade
description: Retrofit an existing plain-text markdown file with visual design — Mermaid diagrams, tables, GitHub alerts, collapsible sections, status markers — without changing its meaning. Use when the user asks to upgrade, beautify, redesign, visualize, or "make visual" an existing .md file, or invokes /md-upgrade <path>.
argument-hint: <path-to-file.md>
---

# Markdown Upgrade

Take an existing plain markdown file and redesign it visually. The argument (or the user's message) names the file; if no file is named, ask which one or look for the obvious candidate (e.g. the README, or the .md file just discussed).

## Process

1. **Read the entire file first.** Never upgrade a file you've partially read.
2. **Load the design system**: read [../markdown-design/SKILL.md](../markdown-design/SKILL.md) and use its structure→element mapping. Pull exact syntax from its `references/` files as needed.
3. **Inventory upgrade opportunities** — walk the doc and mark:
   - Prose describing a process/flow → flowchart or sequence diagram
   - Prose comparing options or listing ≥3 parallel facts → table
   - "Note that…", "Be careful…", "Make sure…" paragraphs → alerts with correct severity
   - Long code/log/config blocks that aren't the main point → collapsible `<details>`
   - Lists of dates/phases → gantt or timeline
   - Status words scattered in prose → ✅ 🔄 ❌ markers or a status table
   - Missing summary line under the title, missing TOC on long docs → add them
4. **Rewrite the file** (Edit/Write) applying the upgrades.
5. **Report** a short summary: which sections became diagrams/tables/alerts, one line each.

## Hard rules

- **Zero information loss.** Every fact in the original must survive. Diagrams *restructure* existing content; they never replace details that aren't captured in the diagram — keep the essential prose.
- **Zero invention.** No made-up numbers, dates, percentages, or steps to make a chart look fuller. If a gantt needs dates the doc doesn't have, don't make a gantt.
- **Preserve heading text** where possible — external links may target those anchors. If a heading must change, keep the old anchor: `<a id="old-anchor"></a>`.
- **Preserve author voice** in prose you keep. You are redesigning layout, not rewriting their words.
- Apply the mermaid safety rules from the design skill (quoted labels, no `end` node IDs, ≤20 nodes per diagram).
- If the file is already visual or has no upgradeable structure, say so instead of decorating it.
