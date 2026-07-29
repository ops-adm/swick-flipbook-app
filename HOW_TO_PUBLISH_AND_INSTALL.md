# Swick Flipbook App — Publish on GitHub Pages & Install Guide

## Part 1 — Put it online with GitHub Pages (one-time setup)

1. Create a new GitHub repository (e.g. `swick-flipbook-app`). Public repo (Pages needs a public repo on the free plan).
2. Upload **everything in this folder** to the repo root, keeping the folder structure exactly as-is:
   - `swick-flipbook-app.dc.html`
   - `FlipbookApp.dc.html`
   - `support.js`
   - `image-slot.js`
   - `manifest.json`
   - `sw.js`
   - `icons/` (all 4 PNGs)
   - `uploads/Swick logo transparent 3d.png`
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source: Deploy from a branch**, branch: `main`, folder: `/ (root)`. Save.
5. Wait ~1 minute, then GitHub shows your live URL, e.g.:
   `https://YOUR-USERNAME.github.io/swick-flipbook-app/`
6. **Important:** the app's home page is `swick-flipbook-app.dc.html`, not `index.html`. Either:
   - Share the direct link: `https://YOUR-USERNAME.github.io/swick-flipbook-app/swick-flipbook-app.dc.html`, or
   - Rename a copy of that file to `index.html` in the repo so the bare Pages URL opens it directly.

That's it — the site is now live over HTTPS, which is required for the one-tap Android install and the offline service worker to work.

## Part 2 — Send this to your users

Text or email them the link from step 5/6 above. Nothing to download or install first — it opens straight in their phone's browser.

## Part 3 — How users install it on their phone

**On iPhone (Safari):**
1. Open the link.
2. On the welcome card, tap **"Add to Home Screen"** (or tap the Share icon in Safari's toolbar).
3. Tap **"Add to Home Screen"** in the share sheet, then tap **"Add"**.
4. The Swick Flipbook icon now appears on their Home Screen like a real app.

**On Android (Chrome):**
1. Open the link.
2. On the welcome card, tap **"Add to Home Screen"** — Chrome shows its native install prompt, one tap installs it.
3. If that doesn't appear, tap the ⋮ menu → **"Add to Home screen"** or **"Install app"**.

No app store, no account, no download required — it installs straight from the browser.
