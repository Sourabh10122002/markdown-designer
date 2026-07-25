# Marketplace Submission Kit

Status tracker + paste-ready content for listing markdown-design everywhere. (Local working file — not committed.)

## Already live / automatic — nothing to do

| Registry | Status |
|---|---|
| [skills.sh](https://skills.sh/Sourabh10122002/markdown-designer) | ✅ Live |
| [SkillsMP](https://skillsmp.com) | 🔄 Auto-crawls public GitHub repos with SKILL.md — will appear on their next index pass |
| [claudemarketplaces.com](https://claudemarketplaces.com) | 🔄 Auto-discovers repos with `.claude-plugin/marketplace.json` (added 2026-07-25); ranks by stars/installs. Optional nudge: https://claudemarketplaces.com/feedback |
| npm (`markdown-designer-skills`) | ⏳ 1.0.0 live, 1.1.0 ready — needs `npm login` then `npm publish` |

## Needs your GitHub account (~2 min each)

GitHub's web editor auto-forks: open the repo, click README.md → pencil icon → paste → "Propose changes" → open PR.

### 1. karanb192/awesome-claude-skills (biggest list, 50+ skills)

https://github.com/karanb192/awesome-claude-skills — add under **✍️ Writing & Research**:

```markdown
#### markdown-design

**Source:** [Sourabh10122002/markdown-designer](https://github.com/Sourabh10122002/markdown-designer) | **Description:** Design system that makes every generated .md visually rich — Mermaid diagrams, comparison tables, GitHub alerts, collapsible sections — plus a retrofit mode that upgrades existing plain files with zero information loss **Use Case:** READMEs, architecture docs, status reports, and runbooks that communicate visually instead of as walls of text
```

PR title: `Add markdown-design (visual markdown design system)`

### 2. Other awesome lists (same one-line entry works for all)

- https://github.com/travisvn/awesome-claude-skills
- https://github.com/ComposioHQ/awesome-claude-skills
- https://github.com/mingrath/awesome-claude-skills
- https://github.com/BehiSecc/awesome-claude-skills

```markdown
- [markdown-design](https://github.com/Sourabh10122002/markdown-designer) - Makes every generated markdown file visually rich (Mermaid diagrams, comparison tables, GitHub alerts, collapsible sections) and retrofits existing plain .md files with zero information loss. Install: `npx skills add Sourabh10122002/markdown-designer`
```

Match each list's section naming (Documentation / Writing / Productivity) when pasting.

## Optional / higher effort

| Target | What it takes | Worth it? |
|---|---|---|
| [anthropics/skills](https://github.com/anthropics/skills) | Port the skill into their repo via full PR; high review bar | Biggest visibility if accepted — try after the skill has traction |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Rewrite skill in their template (frontmatter, red flags, verification sections) | Creates a second copy to maintain — skip for now |
| [Agensi](https://www.agensi.io) | Account signup + security scan submission | Commercial marketplace — only if targeting paid distribution |

## After submitting

- Add GitHub repo **description**: `Agent skill for visually rich markdown — Mermaid diagrams, tables, alerts. Works with Claude Code, Cursor, Codex + 15 more.`
- Add repo **topics**: `agent-skills`, `claude-code`, `markdown`, `mermaid`, `skills`, `documentation`
- Share the one-liner: `npx skills add Sourabh10122002/markdown-designer` — install count is what moves every leaderboard.
