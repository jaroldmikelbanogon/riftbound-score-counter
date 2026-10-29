const C='rbc-v3';
const FILES=['./','index.html','legends.js','manifest.webmanifest','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>Promise.all(FILES.map(f=>c.add(f).catch(()=>{})))))});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).then(r=>{const k=r.clone();caches.open(C).then(c=>c.put(e.request,k));return r}).catch(()=>caches.match(e.request)))});
