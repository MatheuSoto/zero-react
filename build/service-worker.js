if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return c[e]||(i=new Promise(async i=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=i}else importScripts(e),i()})),i.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},i=(i,c)=>{Promise.all(i.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(i)};self.define=(i,r,s)=>{c[i]||(c[i]=Promise.resolve().then(()=>{let c={};const d={uri:location.origin+i.slice(1)};return Promise.all(r.map(i=>{switch(i){case"exports":return c;case"module":return d;default:return e(i)}})).then(e=>{const i=s(...e);return c.default||(c.default=i),c})}))}}define("./service-worker.js",["./workbox-31f52c8a"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/app.bundle.js",revision:"e583963e503be5df459f6b1ff541378e"},{url:"/build/css/main.css",revision:"0e787685cb78815bc34fa84114f47046"},{url:"/icons/ios/icon_128x128.cb6bc1330bf839f4aeddadbdd1d1f796.png",revision:"cb6bc1330bf839f4aeddadbdd1d1f796"},{url:"/icons/ios/icon_192x192.83c95cdd023d99fd3abd555b8da83117.png",revision:"83c95cdd023d99fd3abd555b8da83117"},{url:"/icons/ios/icon_256x256.aa1849c7fdd60d71809aaf2ef1327a01.png",revision:"aa1849c7fdd60d71809aaf2ef1327a01"},{url:"/icons/ios/icon_384x384.d34886ef88cd22603762ead38cb34976.png",revision:"d34886ef88cd22603762ead38cb34976"},{url:"/icons/ios/icon_512x512.fd7c71534a339c732365e16959e30dd9.png",revision:"fd7c71534a339c732365e16959e30dd9"},{url:"/icons/ios/icon_96x96.0a1cd5bfa47c05e364b8ff78e138417a.png",revision:"0a1cd5bfa47c05e364b8ff78e138417a"},{url:"/index.html",revision:"946ac11d76879f90bda6f2eef716f7ab"},{url:"/manifest.5045e94387f1d0b13962c5b3ac283721.json",revision:"5045e94387f1d0b13962c5b3ac283721"},{url:"/robots.txt",revision:"987497bfb623e1059632e5a607d56454"}],{}),e.registerRoute(/https:\/\/zero-react.vercel.app\//,new e.CacheFirst({cacheName:"images",plugins:[]}),"GET"),e.registerRoute(/https:\/\/zero-react.vercel.app\//,new e.NetworkFirst({cacheName:"api",plugins:[]}),"GET")}));
