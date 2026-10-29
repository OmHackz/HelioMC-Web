# HelioMC Website

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-000000?style=for-the-badge&logo=gnu)](https://www.gnu.org/licenses/agpl-3.0)
[![Website](https://img.shields.io/badge/Website-helio.omhackz.top-000000?style=for-the-badge&logo=vercel)](https://helio.omhackz.top)
[![GitHub](https://img.shields.io/badge/GitHub-OmHackz%2FHelio-000000?style=for-the-badge&logo=github)](https://github.com/OmHackz/Helio)
[![Discord](https://img.shields.io/badge/Discord-Join%20Server-000000?style=for-the-badge&logo=discord)](https://dsc.gg/HelioMC-launcher)
[![Built with](https://img.shields.io/badge/Built%20With-Vanilla%20HTML%2FCSS%2FJS-000000?style=for-the-badge)](.)

Official website for [Helio](https://github.com/OmHackz/Helio), an open-source CLI-first Minecraft launcher built with Rust and Ratatui.

## About

Helio is a keyboard-friendly, resource-conscious alternative to traditional GUI-heavy Minecraft launchers. It provides both a CLI and TUI interface for managing Minecraft instances.

## Features

- Minimal black and white design
- Responsive design for mobile and desktop
- Three-way theme support (System, Light, Dark)
- Terminal-inspired UI elements
- No emojis, clean and professional
- Accessible navigation

## Tech Stack

- Vanilla HTML, CSS, and JavaScript
- No frameworks or build tools required
- Google Fonts (Poppins)
- Lucide-style SVG icons

## Development

This is a static website. Simply open `index.html` in a browser or serve with any static server.

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

## Project Structure

```
/
├── index.html           # Home page
├── downloads/           # Downloads page
├── docs/               # Documentation (Coming Soon)
├── wiki/               # Wiki (Coming Soon)
├── assets/
│   ├── css/main.css    # Main stylesheet
│   ├── js/main.js      # Main JavaScript
│   ├── js/downloads.js # Downloads page JS
│   ├── data/releases.json # Release configuration
│   ├── images/         # Images
│   └── icons/          # Icons
├── scripts/            # Installer templates
│   ├── install.sh
│   └── install.ps1
└── ...
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This website is licensed under [AGPL-3.0](LICENSE).

## Links

- [Helio GitHub](https://github.com/OmHackz/Helio)
- [Discord](https://dsc.gg/HelioMC-launcher)
