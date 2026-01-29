const CACHE_NAME = 'snake-game-v1';
const ASSETS = [
    './',
    './index.html',
    './manifest.json'
];

// 安装 Service Worker 并缓存资源
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// 拦截网络请求，优先使用缓存
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response |

| fetch(e.request);
        })
    );
});
