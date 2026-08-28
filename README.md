# Minimally — website

A single-page, mobile-first site: hero → work (Shopify clients) → contact,
plus a floating funky music player (bottom-right).

## Structure
```
index.html              → the whole site (HTML/CSS/JS, no build step)
assets/tracks/           → put your royalty-free MP3s here (see README inside)
```

## Before you deploy
- Edit the `clients` array in `index.html` with your real client list.
- Edit the `tracks` array in `index.html` to match the MP3 file names you add
  to `assets/tracks/`.
- Update the phone/email in the contact section if needed.

## Deploy — GitHub (drag & drop, no command line)
1. Go to github.com → New repository → name it (e.g. `minimally-site`) → Create.
2. On the new repo page, click "uploading an existing file".
3. Drag the whole project folder (or all its files, including the `assets`
   folder) into the browser window and drop it.
4. Scroll down, click "Commit changes".

## Deploy — Netlify
1. Go to app.netlify.com → Add new site → Deploy manually.
2. Drag the same project folder onto the Netlify upload box. Done — you'll
   get a live URL immediately.
   - Or: Add new site → Import from Git → pick the GitHub repo from step
     above, so every future push auto-deploys. Build command: none.
     Publish directory: `/` (repo root).
3. Optional: Site settings → Domain management → add your own domain.
