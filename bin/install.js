#!/usr/bin/env node
// Installs the bundled Claude Code skills into ~/.claude/skills/ (or ./.claude/skills with --project).
const fs = require('fs');
const path = require('path');
const os = require('os');

const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  console.log(`
Usage: npx markdown-designer-skills [options]

Installs the markdown-design Claude Code skill.

Options:
  (none)        install globally into ~/.claude/skills/
  --project     install into ./.claude/skills/ of the current directory
  --uninstall   remove the skills (combine with --project for local removal)
  --help        show this help
`);
  process.exit(0);
}

const uninstall = args.includes('--uninstall');
const project = args.includes('--project');

const src = path.join(__dirname, '..', 'skills');
const dest = project
  ? path.join(process.cwd(), '.claude', 'skills')
  : path.join(os.homedir(), '.claude', 'skills');

const skills = fs
  .readdirSync(src, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

if (uninstall) {
  for (const name of skills) {
    const target = path.join(dest, name);
    if (fs.existsSync(target)) {
      fs.rmSync(target, { recursive: true, force: true });
      console.log(`removed:   ${target}`);
    } else {
      console.log(`not found: ${target}`);
    }
  }
  process.exit(0);
}

fs.mkdirSync(dest, { recursive: true });
for (const name of skills) {
  const target = path.join(dest, name);
  fs.rmSync(target, { recursive: true, force: true });
  fs.cpSync(path.join(src, name), target, { recursive: true });
  console.log(`installed: ${target}`);
}

console.log(
  `\nDone. ${project ? 'Claude Code sessions in this project' : 'New Claude Code sessions'} will pick these up automatically.`
);
