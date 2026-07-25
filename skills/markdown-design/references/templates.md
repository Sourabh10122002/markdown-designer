# Document Templates

Skeletons for the five most common doc types. Replace bracketed placeholders; delete sections that don't apply. Every template already places visuals where they belong.

## 1. README

```markdown
# [Project Name]

**[One-sentence pitch: what it does and for whom.]**

![Status](https://img.shields.io/badge/status-active-brightgreen)
![Version](https://img.shields.io/badge/version-x.y.z-blue)

## How it works

[flowchart LR of the core pipeline — 5–10 nodes]

## Quick start

​```bash
[install command]
[run command]
​```

> [!IMPORTANT]
> [The one prerequisite people always miss.]

## Features

| Feature | Status | Notes |
|---|:-:|---|
| [Feature A] | ✅ | |
| [Feature B] | 🔄 | [ETA] |

## Configuration

<details>
<summary><b>All options</b></summary>

[full config table]

</details>
```

## 2. Architecture doc

```markdown
# [System] Architecture

**[One line: what the system does and its key constraint.]**

## System overview

[flowchart LR with subgraphs per tier: Client / Backend / Data]

## Key flows

### [Flow name, e.g. "Login"]

[sequenceDiagram of the flow]

## Data model

[erDiagram of core entities]

## Decisions & trade-offs

| Decision | Chosen | Alternative | Why |
|---|---|---|---|
| [Storage] | [Postgres] | [Mongo] | [reason] |

> [!WARNING]
> [Known limitation or scaling cliff.]
```

## 3. Project status report

```markdown
# [Project] — Status [YYYY-MM-DD]

**Overall: [🟢 on track / 🟡 at risk / 🔴 blocked] — [one-line reason]**

## Progress

| Workstream | Owner | Progress | Status |
|---|---|---|:-:|
| [Backend] | [name] | `███████░░░` 70% | ✅ |
| [Frontend] | [name] | `████░░░░░░` 40% | ⚠️ |

## Timeline

[gantt with done/active/crit tags matching reality]

## Risks

> [!WARNING]
> [Top risk + mitigation.]

## Next week
- [ ] [item]
- [ ] [item]
```

## 4. Decision record (ADR)

```markdown
# ADR-[N]: [Decision title]

**Status:** [Proposed / ✅ Accepted / ❌ Superseded by ADR-M]
**Date:** [YYYY-MM-DD]

## Context

[2–4 sentences: the forcing problem.]

## Options considered

| | [Option A] | [Option B] | [Option C] |
|---|:-:|:-:|:-:|
| [Criterion 1] | ✅ | ⚠️ | ❌ |
| [Criterion 2] | ⚠️ | ✅ | ✅ |
| Cost | $ | $$ | $$$ |

## Decision

**[Option chosen].** [Why, in 2–3 sentences.]

## Consequences

[stateDiagram-v2 or flowchart if the decision changes a lifecycle; otherwise bullets: what gets easier, what gets harder.]
```

## 5. Runbook / how-to

```markdown
# Runbook: [Task name]

**When to use:** [trigger condition]. **Time:** ~[N] min. **Access needed:** [roles].

> [!CAUTION]
> [The irreversible step, called out before anything else.]

## Procedure

[flowchart TD of the decision path — especially if there are branches]

### Step 1 — [name]

​```bash
[command]
​```

Expected output:

<details>
<summary>Example</summary>

​```text
[output]
​```

</details>

## Rollback

[Exact steps to undo, always present for anything that mutates state.]
```
