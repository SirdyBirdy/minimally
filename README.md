# Minimally — website

A single-page, mobile-first site: hero → work (Shopify clients) → contact,
plus a floating funky music player (bottom-right).

## Structure
```
index.html        → markup only
style.css          → all styling
content.js         → portfolio data, work-list rendering + linking,
                     scroll animations, and the music player
assets/tracks/     → put your royalty-free MP3s here (see README inside)
```
No build step — open `index.html` directly, or serve the folder as-is.

## Before you deploy
- Edit the `portfolio` array at the top of `content.js` with your real
  clients: `name`, `tag` (e.g. "Shopify"/"Website"), an optional one-line
  `blurb`, and the `href` to link each item to (live site or case study —
  defaults to `#contact` as a placeholder).
- Edit the `tracks` array in `content.js` to match the MP3 file names you add
  to `assets/tracks/`.
- Update the phone/email in the contact section of `index.html` if needed.

## Deploy — GitHub (drag & drop, no command line)
1. Go to github.com → New repository → name it (e.g. `minimally-site`) → Create.
2. On the new repo page, click "uploading an existing file".
3. Drag all the project files — `index.html`, `style.css`, `content.js`,
   `README.md`, and the `assets` folder — into the browser window and drop
   them in.
4. Scroll down, click "Commit changes".

## Deploy — Netlify
1. Go to app.netlify.com → Add new site → Deploy manually.
2. Drag the same project folder onto the Netlify upload box. Done — you'll
   get a live URL immediately.
   - Or: Add new site → Import from Git → pick the GitHub repo from step
     above, so every future push auto-deploys. Build command: none.
     Publish directory: `/` (repo root).
3. Optional: Site settings → Domain management → add your own domain.
