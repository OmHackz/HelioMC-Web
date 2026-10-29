# HelioMC — Official Website Development Prompt

## Role and objective

Act as an experienced front-end developer and UI/UX designer. Build a polished, responsive, production-ready website for **HelioMC**, the home of **Helio**, an open-source Minecraft launcher built primarily around a command-line interface (CLI) and a terminal user interface (TUI).

The website should be modern, lightweight, intuitive, and visually distinctive without becoming cluttered. Implement the complete website and repository structure in a single pass; do not stop after creating a mockup or ask to implement individual pages later.

## Product identity

- **Website/brand:** HelioMC
- **Product:** Helio
- **Command:** `helio`
- **Technology:** Rust, with Ratatui for the TUI
- **Experience:** CLI-first, TUI-capable, keyboard-friendly, approachable for beginners and useful for power users
- **Positioning:** Open-source, resource-conscious, and an alternative to traditional GUI-heavy launchers

Explain these advantages clearly, but do not invent benchmarks, release dates, supported authentication providers, or compatibility claims. Communicate that the launcher is **not exclusively for offline or unofficial accounts**; describe account modes only when their support is confirmed.

## Visual design and UX

- Use a minimal **black-and-white visual identity**, with subtle grayscale accents, strong typography, generous spacing, and restrained animation.
- Prefer a clean font such as **Poppins**, **Quicksand**, or a comparable freely licensed typeface. Ensure readable fallbacks.
- Use a consistent set of **free, properly licensed icons** (for example, Lucide). **Do not use emojis anywhere on the website.**
- Create a compact, **floating/sticky navigation bar** containing Home, Downloads, Docs, and Wiki, followed by GitHub, Discord, and theme controls.
- Make the design responsive from small phones to large desktops, with accessible navigation, visible focus states, sufficient contrast, and reduced-motion support.
- Support **System**, **Light**, and **Dark** themes using a monitor, sun, and moon icon respectively. Respect the system preference by default; persist explicit selections locally and avoid a flash of the wrong theme.
- Use subtle hover states, tidy cards, clear calls to action, and tasteful terminal-inspired elements where they improve clarity.

## Required pages

### 1. Home — `/`

Create an inviting landing page that explains what Helio is and gives visitors a clear path to download it.

Include:

1. A distinctive hero section with a strong headline, short explanation, a primary **Download Helio** button, and a secondary **View on GitHub** action.
2. A tasteful CLI/TUI-inspired preview or terminal illustration. Clearly mark simulated terminal content if actual commands or features are not verified.
3. A concise introduction to Helio and its CLI/TUI workflow.
4. Feature highlights covering ease of use, open source, keyboard-first interaction, and efficient design. Avoid unverified performance numbers.
5. A technology section introducing Rust and Ratatui.
6. A compact downloads preview linking to the full Downloads page.
7. A polished footer with navigation, community links, and license information.

### 2. Downloads — `/downloads`

Make the page simple for first-time visitors while retaining detailed options for advanced users.

**Recommended download**

- Detect the visitor's operating system using available browser signals and show a prominent recommended download **only when a matching, published artifact is known**.
- Phrase the recommendation carefully, such as **“Recommended for your detected platform”**, not as a guarantee of compatibility.
- If OS or architecture cannot be determined reliably, offer a manual choice rather than guessing. Always provide a **Choose another platform** option.
- Show the release version, operating system, architecture, file type, and download size **only when real metadata is supplied**.
- Never create fake release assets, functional-looking dead download buttons, or invented download URLs. If no release is available, show an elegant **Coming soon** state.

**Manual downloads**

Organize the available files in collapsible sections or well-spaced cards for:

| Platform | Packages and architectures to support when published |
| --- | --- |
| Windows | `.exe`, `.msi`, or portable `.zip`; x64, x86, ARM64 |
| Linux | `.deb` for Debian/Ubuntu, `.rpm` for Fedora/RHEL, universal `.AppImage`, and optional `.tar.gz`; x64, ARM64, or other released builds |
| macOS | `.dmg`, `.pkg`, or `.tar.gz`; Apple Silicon (ARM64) and Intel (x64) |

Display **only formats and architectures that have actual releases**. Keep the release manifest/configuration easy to maintain.

**Command-line installation — a dedicated section**

Below the graphical downloads, add a professional **Install from your terminal** section with platform tabs (Windows, Linux, macOS), readable syntax-highlighted code blocks, one-click copy buttons, brief explanations, and a note describing prerequisites.

Show example commands using clearly marked **placeholder URLs** until official installers are actually hosted:

**Linux and macOS — cURL**

```bash
curl -fsSL https://YOUR_DOMAIN/install.sh | sh
```

**Linux and macOS — wget alternative**

```bash
wget -qO- https://YOUR_DOMAIN/install.sh | sh
```

**Windows — PowerShell**

```powershell
irm https://YOUR_DOMAIN/install.ps1 | iex
```

These are **illustrative commands, not working installation instructions** until `YOUR_DOMAIN` is replaced with a verified official host and the corresponding scripts are published. On the live website, never present a placeholder command as ready to execute. Prefer a safe **download, inspect, then run** option alongside any one-liner, and advise users to review remote scripts before running them.

Implement or provide well-documented templates for `install.sh` and `install.ps1` that:

- Detect supported OS and CPU architecture, then select a **real** matching release artifact.
- Download only from documented official release URLs using HTTPS.
- Check SHA-256 checksums against trusted published checksums; fail securely if verification is unavailable or fails.
- Install to an appropriate location, explain PATH setup, avoid unnecessary administrator privileges, and handle errors cleanly.
- Support rerunning the installer safely without creating duplicate PATH entries.
- Print a verification step such as `helio --version` **only if that command is supported by the actual CLI**.
- Make no claims of working installation until the artifact URLs, checksums, and scripts have been tested.

If package-manager distributions become available, reserve a small optional area for **winget**, **Homebrew**, **APT**, or **DNF**, but do not invent package IDs or publish fake commands.

### 3. Docs — `/docs`

For now, create a visually consistent **Coming Soon** page with a short explanation and a link back to Home or GitHub. Do not fabricate documentation.

### 4. Wiki — `/wiki`

Create a separate **Coming Soon** page following the same visual language. Do not fabricate Wiki articles.

## Navigation and external links

Use the following verified project destinations consistently in the navigation and footer:

- **GitHub:** https://github.com/OmHackz/Helio
- **Discord:** https://dsc.gg/HelioMC-launcher

Use proper accessible anchor elements with visible labels or accessible names. External links should open safely when configured to open in a new tab.

## Technology and implementation

- Build the website using **vanilla HTML, CSS, and JavaScript**. Keep the implementation straightforward and avoid adding a framework unless genuinely necessary.
- Use separate, reusable CSS and JavaScript files rather than putting all code in one HTML document.
- Use semantic HTML, responsive layout techniques, accessible controls, meaningful page titles, descriptions, and appropriate Open Graph metadata.
- Use lightweight, optimized assets; minimize unnecessary dependencies and ensure the site remains usable without elaborate animations.
- Keep download/release data in one maintainable configuration rather than duplicating platform and asset information across pages.
- Implement clean paths such as `/downloads`, `/docs`, and `/wiki` using valid deployment routing configuration.
- Make all navigation, theme controls, copy buttons, platform tabs, and download states functional. Avoid decorative or non-working UI elements.

## Repository and file structure

Use a clear multi-file layout similar to:

```text
/
├── index.html
├── downloads/index.html
├── docs/index.html
├── wiki/index.html
├── assets/
│   ├── css/main.css
│   ├── js/main.js
│   ├── js/downloads.js
│   ├── data/releases.json
│   ├── images/favicon.png
│   └── icons/
├── scripts/
│   ├── install.sh
│   └── install.ps1
├── robots.txt
├── sitemap.xml
├── vercel.json
├── .gitignore
├── README.md
├── AGENTS.md
├── LICENSE
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── SECURITY.md
└── .github/
    ├── ISSUE_TEMPLATE/
    └── PULL_REQUEST_TEMPLATE.md
```

Use **GNU Affero General Public License v3.0 (AGPL-3.0)** for `LICENSE` (the correct name, rather than “APGLv3”), with the authentic license text. Include `routes.json` only if the chosen deployment setup actually requires it; avoid meaningless or conflicting configuration files. Ensure `vercel.json` matches the real route structure.

If installer scripts cannot function without unpublished releases, include clearly labeled templates without claiming they are ready for use.

## Acceptance criteria

Before finishing, verify that:

- All four pages are built, linked, and responsive.
- The floating navigation and three-way theme selector work correctly.
- The site uses a consistent black/white visual system and **no emojis**.
- GitHub and Discord URLs match the links above.
- Download detection is cautious, and users can always manually select a platform.
- Only published release files are offered as actual downloads.
- Terminal installation examples are grouped by OS, copyable, and transparently labeled until usable.
- No invented release versions, installers, performance benchmarks, or compatibility guarantees appear.
- Repository documentation and deployment configuration are present and coherent.
- The result feels like a complete official project website, not a placeholder template, while Docs and Wiki intentionally remain Coming Soon.

**Deliver the complete implementation in one go.** Make reasonable design decisions without asking for approval at every step, but use explicit placeholders wherever real release information or hosting details are unavailable.
