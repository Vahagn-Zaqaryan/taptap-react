"use strict";var precacheConfig=[["/taptap/index.html","0805baab3586983c8c89f4ee0f24ba41"],["/taptap/static/css/main.e4b8413f.css","be1876a8f0ec4e56b32ac863f986d311"],["/taptap/static/js/main.9ee8f261.js","9848210a19bb74ee7f28de4b12421d3c"],["/taptap/static/media/FredokaOne-Regular.5165c0fa.ttf","5165c0facbfede7afe6c9ef3fd635f11"],["/taptap/static/media/arrow-down.a9d3bf21.svg","a9d3bf218cde10e81171a3b6380ef3bc"],["/taptap/static/media/arrow_right.3e11119e.svg","3e11119ec55466e68d939354302801fa"],["/taptap/static/media/autor_img.97a80a38.jpg","97a80a38eeebb1c5872e89dcfab7ea50"],["/taptap/static/media/clock.fb3cb1f0.jpg","fb3cb1f0a3cb1fe35fb8f178587b6c23"],["/taptap/static/media/facebook.2badf142.svg","2badf142804f31994e88703f454f584b"],["/taptap/static/media/location.aa0b46eb.svg","aa0b46ebfbba0c2e5f27f76a8cb05bd3"],["/taptap/static/media/logo.20c79684.svg","20c796846943ec8e4c0795b0dcb025a6"],["/taptap/static/media/mail.2954084f.svg","2954084ff6c6305a3d39cfdda15180fe"],["/taptap/static/media/share.a4d12ac2.svg","a4d12ac23828b47725251cb596e9dd3b"],["/taptap/static/media/star.16a5a708.svg","16a5a70832a044084f373b906ee79009"],["/taptap/static/media/unstar.1ce8d561.svg","1ce8d56127a4f9a6e030d39cd97ad160"],["/taptap/static/media/yerevan.da028c4f.jpg","da028c4f6caa865356d01fcb615fec82"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/taptap/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});