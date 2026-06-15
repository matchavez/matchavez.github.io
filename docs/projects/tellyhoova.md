---
share: "true"
path: /docs/projects
title: tellyhoova
---

# Tellyhoova 📺

**Save your own copy of any video you find online. Paste the link, press Get, and it's on your Mac - locally!**

## How it works

1. Copy the link to a video you want to keep.
2. Paste it into Tellyhoova.
3. Pick a quality, then press Get.

The video saves to your Downloads folder, or wherever you point it. Hit Show in Finder to jump straight to it.

## Why you'd want it

- Keep a copy for offline viewing, archiving, or editing, instead of hoping it stays online.
- Choose full quality, a smaller file, or just the audio.
- The QuickTime Compatible option saves files that play on your Mac with nothing extra to install.

## Install

### Download

Grab the latest `.dmg` from the [Releases page](https://github.com/matchavez/tellyhoova/releases/latest), open it, and drag Tellyhoova into your Applications folder.

First launch: macOS may say it can't verify the developer. Right-click the app, choose Open, then Open again in the dialog. One-time step.

### Homebrew

```bash
brew tap matchavez/tellyhoova
brew install --cask tellyhoova
```

Opens straight away, no extra prompts.

### One-time setup

Tellyhoova uses a small free helper to fetch the videos. Install it once with Homebrew:

```bash
brew install yt-dlp ffmpeg
```

---

[GitHub](https://github.com/matchavez/tellyhoova) · [Releases](https://github.com/matchavez/tellyhoova/releases) · [Homebrew tap](https://github.com/matchavez/homebrew-tellyhoova)
