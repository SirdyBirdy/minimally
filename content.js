/* =========================================================
   PORTFOLIO CONTENT
   Edit this array with your real Shopify/website clients.
   - name:      client / project name
   - tag:       "Shopify" or "Website"
   - blurb:     one-line description (optional — leave "" to omit)
   - href:      link to the live site
   - image:     filename in assets/images/ (jpeg). If missing, a plain
                color swatch (accent) shows instead — nothing breaks.
   - accent:    hex used for the fallback swatch if the image is missing
   - highlight: optional standout badge, e.g. "Featured on Shark Tank India"
   ========================================================= */
const portfolio = [
  { name:"Upliance",               tag:"Shopify", blurb:"", href:"https://upliance.ai",                  image:"upliance.jpeg",               accent:"#7fd7ff", highlight:"Featured on Shark Tank India" },
  { name:"Mainstreet",            tag:"Shopify", blurb:"", href:"https://mainstreet.co.in",           image:"mainstreet.jpeg",           accent:"#c6ff4f", highlight:"Their first website — built when they were just starting out, grown multifold since" },
  { name:"IMWIP",                  tag:"Shopify", blurb:"", href:"https://imwip.co.in",                 image:"imwip.jpeg",                 accent:"#7fd7ff" },
  { name:"Cocoamelts",             tag:"Shopify", blurb:"", href:"https://cocoamelts.in",               image:"cocoamelts.jpeg",             accent:"#ff9fd6" },
  { name:"AZE Dubai",              tag:"Shopify", blurb:"", href:"https://azedubai.com",                image:"azedubai.jpeg",               accent:"#c6ff4f" },
  { name:"Writing Wonders",        tag:"Shopify", blurb:"", href:"https://writingwonders.in",           image:"writingwonders.jpeg",         accent:"#7fd7ff" },
  { name:"Aya",                    tag:"Shopify", blurb:"", href:"https://ayatextiles.com",             image:"aya.jpeg",                   accent:"#ff9fd6" },
  { name:"Bombay Closet Cleanse",  tag:"Shopify", blurb:"", href:"https://bombayclosetcleanse.in",      image:"bombayclosetcleanse.jpeg",   accent:"#c6ff4f", highlight:"Featured on Shark Tank India" },
  { name:"Namaste Psychology",     tag:"Shopify", blurb:"", href:"https://namastepsychology.com",       image:"namastepsychology.jpeg",     accent:"#7fd7ff" },
  { name:"Satgurus",               tag:"Shopify", blurb:"", href:"https://satgurus.com",                image:"satgurus.jpeg",               accent:"#ff9fd6" },
  { name:"Dilation",               tag:"Shopify", blurb:"", href:"https://dilation.in",                 image:"dilation.jpeg",               accent:"#c6ff4f" },
  { name:"The Bae Club",           tag:"Shopify", blurb:"", href:"https://thebaeclub.in",                image:"thebaeclub.jpeg",             accent:"#7fd7ff" },
  { name:"Mala and Kinnary",       tag:"Shopify", blurb:"", href:"https://malaandkinnary.com",          image:"malaandkinnary.jpeg",         accent:"#ff9fd6" },
];

/* preview panel: real image if present, otherwise a plain color swatch */
function previewMarkup(p){
  return `<span class="prev" aria-hidden="true" style="background:${p.accent}22">
    <img src="assets/images/${p.image}" alt="" loading="lazy"
      onerror="this.parentElement.classList.add('img-fallback');this.remove()">
  </span>`;
}

function renderWork(filter){
  const list = document.getElementById('workList');
  if(!list) return;
  const items = filter && filter !== 'All' ? portfolio.filter(p => p.tag === filter) : portfolio;
  list.innerHTML = items.map((p,i)=>`
    <li>
      <a href="${p.href}" target="_blank" rel="noopener">
        <span class="m">${String(i+1).padStart(2,'0')}</span>
        <span>
          <h3>${p.name}</h3>
          <div class="chips">
            <span class="pill">${p.tag}</span>
            ${p.highlight ? `<span class="pill pill-highlight">✦ ${p.highlight}</span>` : ``}
          </div>
          ${p.blurb ? `<p class="d">${p.blurb}</p>` : ``}
        </span>
        ${previewMarkup(p)}
        <span class="arrow" aria-hidden="true">↗</span>
      </a>
    </li>
  `).join('');
}

function initFilter(){
  const tabs = document.getElementById('filterTabs');
  const list = document.getElementById('workList');
  if(!tabs || !list) return;
  tabs.addEventListener('click', e => {
    const btn = e.target.closest('button[data-filter]');
    if(!btn) return;
    tabs.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', b === btn));
    list.classList.add('fading');
    setTimeout(() => {
      renderWork(btn.dataset.filter);
      list.classList.remove('fading');
    }, 200);
  });
}

/* ---- scroll reveal ---- */
function initReveal(){
  const io = new IntersectionObserver(es => es.forEach((e,i) => {
    if(e.isIntersecting){
      e.target.style.transitionDelay = (Math.min(i,5) * 60) + 'ms';
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  }), { threshold:.1, rootMargin:'0px 0px -6%' });
  document.querySelectorAll('.rv').forEach(el => io.observe(el));
}

/* =========================================================
   MUSIC PLAYER
   Drop royalty-free mp3 files into assets/tracks/ and list
   them here. File names must match exactly (case-sensitive).
   ========================================================= */
const tracks = [
  { title:"Track 1 — add your title", artist:"Add artist name", src:"assets/tracks/track-1.mp3" },
  { title:"Track 2 — add your title", artist:"Add artist name", src:"assets/tracks/track-2.mp3" },
  { title:"Track 3 — add your title", artist:"Add artist name", src:"assets/tracks/track-3.mp3" },
];

function initPlayer(){
  const player = document.getElementById('player'),
        fab = document.getElementById('fab'),
        audio = document.getElementById('audio'),
        playToggle = document.getElementById('playToggle'),
        trackTitle = document.getElementById('trackTitle'),
        trackArtist = document.getElementById('trackArtist'),
        seek = document.getElementById('seek'),
        seekFill = document.getElementById('seekFill'),
        list = document.getElementById('trackList');

  if(!player) return;

  let idx = 0;
  const icons = {
    play:'<path d="M8 5v14l11-7z"/>',
    pause:'<path d="M6 5h4v14H6zM14 5h4v14h-4z"/>'
  };

  function renderList(){
    list.innerHTML = tracks.map((t,i) => `<button data-i="${i}" aria-current="${i===idx}">${t.title}</button>`).join('');
    list.querySelectorAll('button').forEach(b => b.addEventListener('click', () => load(+b.dataset.i, true)));
  }
  function load(i, autoplay){
    idx = (i + tracks.length) % tracks.length;
    const t = tracks[idx];
    audio.src = t.src;
    trackTitle.textContent = t.title;
    trackArtist.textContent = t.artist;
    list.querySelectorAll('button').forEach(b => b.setAttribute('aria-current', +b.dataset.i === idx));
    if(autoplay) audio.play().catch(()=>{});
  }
  function setPlaying(p){
    player.dataset.playing = p;
    playToggle.innerHTML = `<svg id="playIcon" viewBox="0 0 24 24" fill="currentColor">${p ? icons.pause : icons.play}</svg>`;
    playToggle.setAttribute('aria-label', p ? 'Pause' : 'Play');
  }

  fab.addEventListener('click', () => {
    const open = player.dataset.open !== 'true';
    player.dataset.open = open;
    fab.setAttribute('aria-expanded', open);
  });
  playToggle.addEventListener('click', () => {
    if(!audio.src) load(0, true);
    else if(audio.paused) audio.play().catch(()=>{});
    else audio.pause();
  });
  document.getElementById('prevBtn').addEventListener('click', () => load(idx - 1, true));
  document.getElementById('nextBtn').addEventListener('click', () => load(idx + 1, true));
  audio.addEventListener('play', () => setPlaying(true));
  audio.addEventListener('pause', () => setPlaying(false));
  audio.addEventListener('ended', () => load(idx + 1, true));
  audio.addEventListener('timeupdate', () => {
    if(audio.duration) seekFill.style.width = (audio.currentTime / audio.duration * 100) + '%';
  });
  seek.addEventListener('click', e => {
    if(!audio.duration) return;
    const r = seek.getBoundingClientRect();
    audio.currentTime = ((e.clientX - r.left) / r.width) * audio.duration;
  });

  renderList();
}

/* ---- mobile nav island: highlight current section ---- */
function initIslandSpy(){
  const links = document.querySelectorAll('.island a[data-section]');
  const sections = ['work','contact'].map(id => document.getElementById(id)).filter(Boolean);
  if(!links.length || !sections.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        links.forEach(l => l.removeAttribute('aria-current'));
        const active = document.querySelector(`.island a[data-section="${entry.target.id}"]`);
        if(active) active.setAttribute('aria-current','true');
      }
    });
  }, { rootMargin:'-45% 0px -45% 0px' });
  sections.forEach(s => io.observe(s));
}

document.addEventListener('DOMContentLoaded', () => {
  renderWork('All');
  initFilter();
  initReveal();
  initPlayer();
  initIslandSpy();
});
