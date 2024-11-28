if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const d=e=>n(e,c),a={module:{uri:c},exports:r,require:d};i[c]=Promise.all(o.map((e=>a[e]||d(e)))).then((e=>(s(...e),r)))}}define(["./workbox-c9c1d482"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"images/icons/icon-128x128.png",revision:"1b9552da292435893d7ef14a6c527755"},{url:"images/icons/icon-144x144.png",revision:"eb1ca69a412683854a1e50a8d7dde7f8"},{url:"images/icons/icon-152x152.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/icons/icon-192x192.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/icons/icon-384x384.png",revision:"388633936619e5f7f141a14eb44c09a4"},{url:"images/icons/icon-512x512.png",revision:"2764e989eb0fb089cb57a41b4b9adbee"},{url:"images/icons/icon-72x72.png",revision:"a737ff604e942ab3d6352b86e6dd093a"},{url:"images/icons/icon-96x96.png",revision:"44530425da313d4a1e77b0bc92806b50"},{url:"index.html",revision:"14406c821645e3e5f4bcd93487a2d9d9"},{url:"manifest.json",revision:"14ac8d04a6961a79dc02f33fce2d3d88"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
caches.open(cacheName).then(function(cache){
    //# Todo el codigo del cache
});

const currentCache = 'cache-v1.0';

const files =[
    "favicon.ico",
    "icons/icon-72x72.png",
    "icons/icon-96x96.png",
    "icons/icon-128x128.png",
    "icons/icon-144x144.png",
    "icons/icon-152x152.png",
    "icons/icon-192x192.png",
    "icons/icon-384x384.png",
    "icons/icon-512x512.png",
    "index.html",
    "manifest.json",
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(currentCache).then(cache => {
            return cache.addAll(files);
        })
    )
});

self.addEventListener('activate', event =>{
    event.waitUntil(
       caches.keys().then(cacheName => Promise.all(
        cacheNames.filter(cacheName => {
            return cacheName !== currentCache
        }).map(cacheName => caches.delete(cacheName))
       ))
    )
})

self.addEventListener('fetch', event => {
    event.respondWith(
        //Verifica si hay cache sino busca en la red
        caches.match(event.request).then(function(response){
            return response || fetch(event.request)
        })
    )
})

//Estategia cache only
self.addEventListener('fetch', event => {
    event.respondWith(
        //Verifica si hay cache sino busca en la red
        caches.match(event.request)
    )
})

//Estrategia Netwok First
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(function(){
            return caches.match(event.request)
        })
    )
})

//Estrategia stale-with-revalidate
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(currentCache)
        .then(async function(cache){
            return await cache.match(event.request)
            .then(function(response){
                let fetchPromise = fetch(event.request)
                .then(function(netWorkResponse){
                    cache.put(event.request, netWorkResponse)
                    return netWorkResponse;
                })
                return response || fetchPromise;
            })
        })
    )
})