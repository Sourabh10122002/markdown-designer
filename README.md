# Markdown Designer

**Two Claude Code skills that stop Claude from generating plain-text markdown — every `.md` it writes gets diagrams, tables, alerts, and structure by default.**

## How the skills work

```mermaid
flowchart LR
    subgraph Triggers
        W["Claude writes any .md file"]
        U["You run /md-upgrade file.md"]
    end
    subgraph Skills
        MD["markdown-design<br/>(auto-applied design system)"]
        UP["md-upgrade<br/>(retrofit existing files)"]
    end
    subgraph References
        R1["mermaid-cheatsheet.md"]
        R2["visual-elements.md"]
        R3["templates.md"]
    end
    W --> MD
    U --> UP
    UP --> MD
    MD --> R1
    MD --> R2
    MD --> R3
```

| Skill | Trigger | What it does |
|---|---|---|
| `markdown-design` | Automatic, whenever Claude creates/rewrites a `.md` file | Applies a design system: Mermaid diagrams, comparison tables, GitHub alerts, collapsible sections, status markers, doc templates |
| `md-upgrade` | `/md-upgrade <path>` (or "upgrade this markdown") | Redesigns an **existing** plain file visually — zero information loss, zero invented data |

## Install

```bash
npx markdown-designer-skills
```

Copies both skills into `~/.claude/skills/`, making them active in **all** your Claude Code sessions (new sessions pick them up on start).

| Command | Effect |
|---|---|
| `npx markdown-designer-skills` | Install globally (`~/.claude/skills/`) |
| `npx markdown-designer-skills --project` | Install only for the current project (`./.claude/skills/`) |
| `npx markdown-designer-skills --uninstall` | Remove the skills |

> [!IMPORTANT]
> The `npx` command works once the package is published (`npm publish`). Until then, install from a local checkout with `npx /path/to/markdown-designer` or `./install.sh`.

> [!NOTE]
> This repo is the editable source. After changing anything under [skills/](skills/), re-run the install command to sync.

## Layout

```text
bin/
└── install.js                        # npx installer (--project, --uninstall, --help)
skills/
├── markdown-design/
│   ├── SKILL.md                      # design system + structure→element mapping
│   └── references/
│       ├── mermaid-cheatsheet.md     # 11 diagram types, verified syntax, failure fixes
│       ├── visual-elements.md        # alerts, tables, collapsible, badges, progress bars
│       └── templates.md              # README / architecture / status / ADR / runbook skeletons
└── md-upgrade/
    └── SKILL.md                      # retrofit workflow with hard no-loss rules
```

## Try it

After installing, open a **new** Claude Code session and ask:

- *"Write an architecture doc for a URL shortener"* → should come back with flowchart + sequence diagram + ER diagram + decision table.
- */md-upgrade README.md* on any old plain file → redesigned in place.
