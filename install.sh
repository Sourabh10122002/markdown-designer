#!/usr/bin/env bash
# Sync skills from this repo into ~/.claude/skills/ (global for all Claude Code sessions).
set -euo pipefail

SRC="$(cd "$(dirname "$0")/skills" && pwd)"
DEST="$HOME/.claude/skills"
mkdir -p "$DEST"

for skill in "$SRC"/*/; do
  name="$(basename "$skill")"
  rm -rf "$DEST/$name"
  cp -R "$skill" "$DEST/$name"
  echo "installed: $DEST/$name"
done

echo "Done. New Claude Code sessions will pick these up automatically."
