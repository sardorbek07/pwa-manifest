<script>
self.addEventListener('install', (event) => {
  console.log('Service Worker o‘rnatildi');
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  console.log('Fetching:', event.request.url);
});
</script>