if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const l=e=>t(e,o),d={module:{uri:o},exports:r,require:l};s[o]=Promise.all(n.map((e=>d[e]||l(e)))).then((e=>(i(...e),r)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/builds/latest.json",revision:"b955a362c2f4d93733943040c11e4246"},{url:"assets/builds/meta/2f9cdfd0-6aa7-4460-8381-d74a0d454590.json",revision:null},{url:"manifest.webmanifest",revision:"af2045a936aa18cd80287ef7b0a3e5e4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/nganiapps/")))}));
