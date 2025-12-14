// Se declara la vesion de la cache y los assets a cachear
const STATIC_CACHE_NAME = 'app-shell-v1'
const ASSETS = ['./', './index.html', './app.js', './style.css']
// Espera a que se instale el service worker y luego cachea los assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME).then((cache) => {
      cache.addAll(ASSETS)
    })
  )
  console.log('Service Worker: Installed')
})

/*
Aqui verificamos los assets
*/
self.addEventListener('fetch', (event) => {
  const isAppShellResource = ASSETS.includes(
    new URL(event.request.url).pathname
  )
  if (isAppShellResource) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response
      })
    )
  }
})
