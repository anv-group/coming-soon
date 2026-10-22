# ANV Group — Redirect & Coming Soon

Temporary landing and redirect page for **anvgroup.my.id** pointing to the official [ANV Group GitHub organization](https://github.com/anv-group).

## Overview

- **Stack**: Plain HTML5, CSS3, JavaScript (no frameworks or build step required).
- **Features**:
  - Displays the official ANV Group logo and "Coming Soon" badge.
  - Automatic 5-second countdown with animated progress bar before redirecting to `https://github.com/anv-group`.
  - Instant redirect button ("Visit GitHub Now") and pause/resume control ("Pause Redirect").
  - Graceful fallback with `<noscript>` meta refresh for browsers with JavaScript disabled.
  - Responsive, modern dark UI with ambient glowing accents.
  - OpenGraph and SEO meta tags pre-configured.

## Project Structure

```text
anv-redirect/
├── index.html        # Main landing page markup
├── style.css         # Modern dark theme styles & animations
├── script.js         # Countdown timer, progress bar, & redirect logic
├── assets/
│   └── logo.png      # ANV Group official logo / favicon
└── README.md         # Documentation
```

## Configuration

To customize redirect duration or destination URL, edit `script.js` and `index.html`:

```javascript
// script.js
const TARGET_URL = "https://github.com/anv-group";
const TOTAL_SECONDS = 5;
```

And in `index.html`:
```html
<noscript>
  <meta http-equiv="refresh" content="5;url=https://github.com/anv-group" />
</noscript>
```

## Deployment Options

### 1. Cloudflare Pages / Vercel / Netlify
Deploy directly from this repository without any build commands:
- **Build command**: _None_
- **Publish directory**: `.` (root directory)

### 2. GitHub Pages
1. Push this repository to GitHub under `anv-group/anv-redirect` (or `.github.io`).
2. Go to repository **Settings** &rarr; **Pages**.
3. Under **Branch**, select `main` and root `/`.
4. Add custom domain `anvgroup.my.id`.
