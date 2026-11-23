"""Prepare AI Blog posts in the CI runner, before `zensical build`.

This script changes the runner copy only. It never commits.

For each Markdown file under docs/ with `category: AI Blog` in its
front matter, it does three things:

1. If the post has no `date:`, it adds the date of the commit that first
   added the file (git). The RSS feed and the post pages use this date.
2. It adds `minutes:`, the reading time (200 words a minute, minimum 1).
   The post pages and the AI Blog list page show it.
3. If the post is not in the AI Blog menu in zensical.toml, it adds it at
   the end of that menu, so a new post is never live but unlisted.

Each change writes a GitHub Actions warning, so it shows in the run log.
"""

import math
import os
import re
import subprocess
import sys

DOCS = "docs"
CONFIG = "zensical.toml"
FRONT = re.compile(r"\A---\n(.*?)\n---\n", re.S)


def warn(message):
    print(f"::warning::{message}")


def first_commit_date(path):
    out = subprocess.run(
        ["git", "log", "--diff-filter=A", "--follow", "--format=%as", "--", path],
        capture_output=True, text=True, check=False,
    ).stdout.split()
    return out[-1] if out else None


def front_value(front, key):
    m = re.search(rf"^{key}:\s*(.+?)\s*$", front, re.M)
    if not m:
        return None
    return m.group(1).strip().strip('"').strip("'")


def posts():
    for root, _dirs, files in os.walk(DOCS):
        for name in sorted(files):
            if not name.endswith(".md"):
                continue
            path = os.path.join(root, name)
            with open(path, encoding="utf-8") as f:
                text = f.read()
            m = FRONT.match(text)
            if m and front_value(m.group(1), "category") == "AI Blog":
                yield path, text, m


def add_to_menu(config, title, rel):
    lines = config.split("\n")
    start = next((i for i, l in enumerate(lines) if '"AI Blog" = [' in l), None)
    if start is None:
        warn("No AI Blog menu in zensical.toml, so the menu was not checked.")
        return config
    end = next((i for i in range(start + 1, len(lines)) if lines[i].strip() == "] },"), None)
    if end is None:
        warn("Could not find the end of the AI Blog menu in zensical.toml.")
        return config
    safe = title.replace("\\", "\\\\").replace('"', '\\"')
    lines.insert(end, f'    {{ "{safe}" = "{rel}" }},')
    return "\n".join(lines)


def main():
    with open(CONFIG, encoding="utf-8") as f:
        config = f.read()
    menu_changed = False

    for path, text, m in posts():
        front = m.group(1)
        body = text[m.end():]
        rel = os.path.relpath(path, DOCS).replace(os.sep, "/")
        title = front_value(front, "title") or os.path.splitext(os.path.basename(path))[0]

        extra = []
        if not front_value(front, "date"):
            date = first_commit_date(path)
            if date:
                extra.append(f"date: {date}")
                warn(f"No date: in {rel}. Used the first commit date, {date}.")
            else:
                warn(f"No date: in {rel}, and git has no date for it.")
        if not front_value(front, "minutes"):
            words = len(re.sub(r"<[^>]+>", " ", body).split())
            extra.append(f"minutes: {max(1, math.ceil(words / 200))}")
        if extra:
            new_front = front + "\n" + "\n".join(extra)
            with open(path, "w", encoding="utf-8") as f:
                f.write("---\n" + new_front + "\n---\n" + body)

        if f'= "{rel}"' not in config:
            config = add_to_menu(config, title, rel)
            menu_changed = True
            warn(f"{rel} was not in the AI Blog menu. Added it for this build. Add it to zensical.toml too.")

    if menu_changed:
        with open(CONFIG, "w", encoding="utf-8") as f:
            f.write(config)


if __name__ == "__main__":
    try:
        main()
    except Exception as error:  # the build must still run
        warn(f"ai_blog.py failed, the site builds without its changes: {error}")
        sys.exit(0)
