# Minimally — website

A single-page, mobile-first site: hero → work (Shopify clients) → contact,
plus a floating funky music player (bottom-right).

## Structure
```
index.html        → markup only
style.css          → all styling
content.js         → portfolio data, work-list rendering + linking,
                     scroll animations, and the music player
favicon.svg        → vector favicon (what modern browsers use)
favicon.ico        → fallback favicon (older browsers)
apple-touch-icon.png, favicon-192.png, favicon-512.png → other icon sizes
assets/tracks/     → put your royalty-free MP3s here (see README inside)
assets/images/     → client thumbnails + og-image.jpg (social share preview)
```
No build step — open `index.html` directly, or serve the folder as-is.

## Before you deploy
- **Update the domain placeholder.** The `<head>` of `index.html` has
  `https://minimally.in/` hardcoded in the canonical link and the Open
  Graph / Twitter image URLs — replace this with your actual live domain
  (or your Netlify subdomain if you haven't attached a custom domain yet),
  otherwise link previews on WhatsApp/Twitter/etc. won't find the image.
- The `portfolio` array at the top of `content.js` already has your real
  Shopify clients, links, and industry tags. Add each client's image to
  `assets/images/` (exact filenames are listed in that folder's README) —
  if an image is missing, that item just shows a plain color swatch instead
  of breaking.
- To add non-Shopify clients, add more entries with `tag: "Website"`.
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
