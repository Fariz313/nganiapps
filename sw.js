if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const l=e=>n(e,o),u={module:{uri:o},exports:r,require:l};s[o]=Promise.all(t.map((e=>u[e]||l(e)))).then((e=>(i(...e),r)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/builds/latest.json",revision:"16b1ea56723d43858f2924826e833aa1"},{url:"assets/builds/meta/9e22b4c4-bd8d-47b3-b71a-28855de0b247.json",revision:null},{url:"assets/builds/meta/dev.json",revision:null},{url:"manifest.webmanifest",revision:"af2045a936aa18cd80287ef7b0a3e5e4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/nganiapps/")))}));
