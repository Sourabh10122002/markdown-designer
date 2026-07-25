# Visual Elements Toolkit (GitHub-flavored Markdown)

Everything here renders on GitHub without plugins. Most also renders in VS Code preview, GitLab, and Obsidian.

## Alerts (callouts)

Use for anything a reader must not miss. Pick the right severity — don't default everything to NOTE.

```markdown
> [!NOTE]
> Neutral supplementary info the reader may find useful.

> [!TIP]
> A better/faster way to do something.

> [!IMPORTANT]
> Required knowledge to succeed (prerequisites, must-do config).

> [!WARNING]
> Risky — could cause errors or data issues if ignored.

> [!CAUTION]
> Dangerous — destructive or irreversible consequences.
```

Rules: max ~2 alerts per screen of text, never nest them, keep each to 1–3 lines.

## Tables

Always align: text left, numbers right, status columns center.

```markdown
| Option        | Speed |  Cost | Verdict |
|:--------------|:-----:|------:|:-------:|
| Approach A    | Fast  |  $120 |   ✅    |
| Approach B    | Slow  |   $40 |   ⚠️    |
| Approach C    | Fast  |  $900 |   ❌    |
```

- Bold the winning row's verdict or add a one-line "**Recommendation:**" under the table.
- Cells hold facts, not paragraphs — put explanation in prose below.
- ≥3 comparable items in prose = convert to a table.

## Collapsible sections

For logs, full configs, lengthy examples, FAQs, or anything secondary that would bloat the page:

```markdown
<details>
<summary><b>Full error log</b> (click to expand)</summary>

```text
...200 lines of log output...
```

</details>
```

> Blank lines after `<summary>` and before `</details>` are required, or the markdown inside won't render.

## Status indicators

| Semantics | Marker |
|---|---|
| Done / passing | ✅ |
| In progress | 🔄 |
| Pending / queued | ⏳ |
| Failed / removed | ❌ |
| At risk / caveat | ⚠️ |
| Blocked | 🚫 |

Text progress bars for percent-complete (monospace-safe):

```markdown
| Workstream | Progress |
|---|---|
| Backend  | `████████░░` 80% |
| Frontend | `█████░░░░░` 50% |
| Docs     | `██░░░░░░░░` 20% |
```

## Badges (needs internet to render — GitHub READMEs only)

```markdown
![Status](https://img.shields.io/badge/status-active-brightgreen)
![Version](https://img.shields.io/badge/version-2.1.0-blue)
![Coverage](https://img.shields.io/badge/coverage-94%25-brightgreen)
```

Format: `https://img.shields.io/badge/<label>-<value>-<color>`. URL-encode spaces as `%20`, percent as `%25`. Colors: `brightgreen`, `green`, `yellow`, `orange`, `red`, `blue`, `lightgrey`. Skip badges in offline/internal docs — use the status table instead.

## Table of contents

For docs with >4 sections. Anchor = heading lowercased, spaces→`-`, punctuation stripped.

```markdown
## Contents
- [Quick start](#quick-start)
- [Architecture](#architecture)
- [API reference](#api-reference)
- [Troubleshooting](#troubleshooting)
```

## Task lists

```markdown
- [x] Schema migration written
- [x] API endpoint implemented
- [ ] Frontend wired up
- [ ] E2E tests
```

## Keyboard keys, footnotes, math

```markdown
Press <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> to open the palette.

Latency budget derives from the SLA[^1].

[^1]: 99.9% of requests under 200ms, measured at the load balancer.

Inline math: $O(n \log n)$ — block math:

$$
\text{score} = \frac{\sum w_i x_i}{\sum w_i}
$$
```

## Centered hero (GitHub READMEs)

```markdown
<p align="center">
  <img src="docs/logo.png" width="160" alt="Project logo">
</p>
<h1 align="center">Project Name</h1>
<p align="center"><i>One-line pitch.</i></p>
```

## Section rhythm

- `---` horizontal rule between major parts of long docs, not between every section.
- Headings: `#` once (title), `##` sections, `###` subsections. Never skip levels.
- Blank line before and after every block element (table, fence, alert, list) — missing blank lines are the #1 cause of broken rendering.
- One-line **bold summary** directly under the title so scanners get the point in 3 seconds.
