(function () {
  const D = window.DRONES, key = document.body.dataset.drone, d = D && D[key];
  if (!d) return;
  document.title = d.name + ' | Clover Systems';
  const others = Object.values(D).filter(x => x.key !== key);
  const on = 'bg-clover-500 text-ink', off = 'border border-clover-500/40 text-clover-400';

  document.getElementById('drone-root').innerHTML = `
  <section class="relative pt-32 pb-16 grid-bg overflow-hidden">
    <canvas id="particles" class="absolute inset-0 w-full h-full"></canvas>
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-ink"></div>
    <div class="relative max-w-7xl mx-auto px-5">
      <nav class="text-xs uppercase tracking-widest text-gray-500 mb-6"><a href="index.html" class="hover:text-clover-400">Home</a> / <a href="fleet.html" class="hover:text-clover-400">Fleet</a> / <span class="text-clover-400">${d.name}</span></nav>
      <div class="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div class="flex gap-2 mb-3" id="viewTabs">
            <button data-v="3d" class="px-4 py-1.5 rounded text-xs uppercase tracking-widest font-semibold transition ${on}">3D · 360°</button>
            <button data-v="photo" class="px-4 py-1.5 rounded text-xs uppercase tracking-widest font-semibold transition ${off}">Photo</button>
          </div>
          <div class="relative h-[420px] md:h-[540px]">
            <div class="absolute inset-0 bg-clover-500/10 blur-3xl rounded-full"></div>
            <div id="v3d" class="absolute inset-0"><div class="drone-viewer" data-model="${d.key}" data-ui="full" data-photo="${d.photo}"></div></div>
            <div id="vphoto" class="absolute inset-0 hidden flex items-center justify-center">
              <img src="${d.photo}" alt="${d.name}" class="photo-fade w-full h-full object-contain"
                   onerror="this.replaceWith(Object.assign(document.createElement('p'),{className:'text-center text-gray-500 text-sm',textContent:'Add your photo at ${d.photo}'}))">
            </div>
          </div>
        </div>
        <div>
          <span class="inline-block px-3 py-1 rounded bg-clover-500 text-ink text-xs font-mono uppercase tracking-widest">${d.role}</span>
          <h1 class="font-display text-6xl md:text-7xl font-bold text-white mt-3">${d.name}</h1>
          <p class="text-clover-400 mt-1 mb-5 font-medium">${d.tagline}</p>
          <p class="text-gray-400 leading-relaxed mb-7">${d.desc}</p>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">${d.specs.map(s => `<div class="glass rounded-lg p-4"><div class="text-[11px] uppercase tracking-widest text-gray-500">${s[0]}</div><div class="font-display text-2xl text-white">${s[1]}</div></div>`).join('')}</div>
          <div class="flex flex-wrap gap-4">
            <a href="contact.html?drone=${encodeURIComponent(d.name)}" class="px-7 py-3 rounded bg-clover-500 text-ink font-semibold hover:bg-clover-400 hover:-translate-y-0.5 transition">Request a briefing</a>
            <a href="fleet.html" class="px-7 py-3 rounded border border-clover-500/60 text-clover-400 hover:bg-clover-500/10 transition">← All platforms</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="max-w-7xl mx-auto px-5 py-20 grid lg:grid-cols-2 gap-12">
    <div class="reveal">
      <p class="text-clover-400 uppercase tracking-[.3em] text-xs mb-3">Capability profile</p>
      <h2 class="font-display text-4xl font-bold text-white mb-8">Performance at a glance</h2>
      <div class="space-y-5" id="bars">${d.bars.map(b => `<div><div class="flex justify-between text-xs uppercase tracking-widest mb-1"><span>${b[0]}</span><span class="text-clover-400">${b[1]}%</span></div><div class="bar h-2 bg-white/10 rounded"><span data-w="${b[1]}"></span></div></div>`).join('')}</div>
      <p class="text-xs text-gray-600 mt-4">Relative comparison across the Clover fleet.</p>
    </div>
    <div class="reveal">
      <p class="text-clover-400 uppercase tracking-[.3em] text-xs mb-3">Key features</p>
      <h2 class="font-display text-4xl font-bold text-white mb-8">What it delivers</h2>
      <ul class="space-y-3">${d.highlights.map(h => `<li class="glass rounded-lg px-5 py-4 flex gap-3 items-start"><span class="text-clover-400 mt-0.5">✔</span><span>${h}</span></li>`).join('')}</ul>
    </div>
  </section>

  <section class="bg-panel border-y border-clover-500/10 py-20">
    <div class="max-w-7xl mx-auto px-5">
      <div class="text-center mb-10 reveal"><p class="text-clover-400 uppercase tracking-[.3em] text-xs mb-3">Explore more</p><h2 class="font-display text-4xl font-bold text-white">Other Clover platforms</h2></div>
      <div class="grid md:grid-cols-2 gap-6">${others.map(o => `<div class="reveal glass rounded-2xl overflow-hidden card-glow flex flex-col sm:flex-row">
        <div class="sm:w-1/2 h-60"><div class="drone-viewer" data-model="${o.key}" data-ui="none"></div></div>
        <div class="p-6 sm:w-1/2 flex flex-col"><span class="text-xs uppercase tracking-[.25em] text-clover-400">${o.role}</span><h3 class="font-display text-3xl text-white font-bold mt-1">${o.name}</h3><p class="text-sm text-gray-400 mt-2 flex-1">${o.tagline}</p><a href="${o.page}" class="mt-4 text-clover-400 font-semibold">View details →</a></div></div>`).join('')}</div>
    </div>
  </section>`;

  /* 3D / photo tabs */
  document.querySelectorAll('#viewTabs button').forEach(b => b.addEventListener('click', () => {
    const photo = b.dataset.v === 'photo';
    document.getElementById('v3d').classList.toggle('hidden', photo);
    document.getElementById('vphoto').classList.toggle('hidden', !photo);
    document.querySelectorAll('#viewTabs button').forEach(x => { x.className = 'px-4 py-1.5 rounded text-xs uppercase tracking-widest font-semibold transition ' + (x === b ? on : off); });
  }));

  /* animate bars when visible */
  const bio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.querySelectorAll('.bar > span').forEach(s => s.style.width = s.dataset.w + '%'); bio.unobserve(e.target); } }), { threshold: .3 });
  bio.observe(document.getElementById('bars'));
  if (window.initReveal) window.initReveal();
})();
