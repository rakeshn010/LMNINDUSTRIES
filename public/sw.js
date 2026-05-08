/* LMN Industries Service Worker */
const CACHE = 'lmn-v1'
const PRECACHE = ['/', '/about', '/services', '/products', '/contact']

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', e => {
  // Skip non-GET requests and dev server requests
  if (e.request.method !== 'GET' || e.request.url.includes('localhost')) return
  
  e.respondWith(
    caches.match(e.request).then(cached => {
      const fresh = fetch(e.request).then(res => {
        // Only cache successful responses
        if (res && res.ok && res.status === 200) {
          const clone = res.clone()
          caches.open(CACHE).then(c => c.put(e.request, clone))
        }
        return res
      }).catch(() => {
        // Return cached version if fetch fails
        return cached || new Response('Offline', { status: 503, statusText: 'Service Unavailable' })
      })
      return cached || fresh
    }).catch(() => {
      // Fallback for any cache errors
      return new Response('Error', { status: 500, statusText: 'Internal Server Error' })
    })
  )
})
