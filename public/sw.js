if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const o=e=>n(e,a),r={module:{uri:a},exports:t,require:o};s[a]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(c(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/PAK9ppONl74YtdD2AWio7/_buildManifest.js",revision:"586c9d31d35877a2a29eda31f023a690"},{url:"/_next/static/PAK9ppONl74YtdD2AWio7/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/PAK9ppONl74YtdD2AWio7/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/29-b12d2f88e46dae00.js",revision:"b12d2f88e46dae00"},{url:"/_next/static/chunks/29107295-fbcfe2172188e46f.js",revision:"fbcfe2172188e46f"},{url:"/_next/static/chunks/56-3d3114bf07034cf0.js",revision:"3d3114bf07034cf0"},{url:"/_next/static/chunks/7-b8a4efc72b2ba211.js",revision:"b8a4efc72b2ba211"},{url:"/_next/static/chunks/894.9047cda612e8fce0.js",revision:"9047cda612e8fce0"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-37297f27a5472ca7.js",revision:"37297f27a5472ca7"},{url:"/_next/static/chunks/pages/_app-cb0c217e2ed99956.js",revision:"cb0c217e2ed99956"},{url:"/_next/static/chunks/pages/_error-427958541d1e32b7.js",revision:"427958541d1e32b7"},{url:"/_next/static/chunks/pages/index-cebb7fb1d0d726fd.js",revision:"cebb7fb1d0d726fd"},{url:"/_next/static/chunks/pages/m-987d591681cfe4d8.js",revision:"987d591681cfe4d8"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-74c7f9c6e5341e4a.js",revision:"74c7f9c6e5341e4a"},{url:"/_next/static/css/1f39d3835107498c.css",revision:"1f39d3835107498c"},{url:"/favicon.ico",revision:"04f83b523f51ef67f86ccea1e5c370ef"},{url:"/images/icons/favicon-16x16.png",revision:"04f83b523f51ef67f86ccea1e5c370ef"},{url:"/images/icons/favicon-32x32.png",revision:"845a378b3c1f3a2d25edd609b467d16a"},{url:"/images/icons/icon-128x128.png",revision:"add7c322b035a9152c30f28df3f275e3"},{url:"/images/icons/icon-144x144.png",revision:"880df9df02c180aae5c61e7d31a35657"},{url:"/images/icons/icon-180x180.png",revision:"736b7156c570167e3982e0c6d08aa6a4"},{url:"/images/icons/icon-192x192.png",revision:"7b509eb20b56371595d4f1df0d0dead6"},{url:"/images/icons/icon-256x256.png",revision:"abec387ada184e88c9398a331f1897e1"},{url:"/images/icons/icon-512x512.png",revision:"ca7a6f97428c9f25d3ceea46319ac427"},{url:"/manifest.json",revision:"cbe190362f799c07759149ef9350084c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));