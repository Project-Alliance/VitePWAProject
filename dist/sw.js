if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const l=e=>i(e,c),t={module:{uri:c},exports:o,require:l};s[c]=Promise.all(n.map((e=>t[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-b3e22772"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/main.b0457c6c.js",revision:null},{url:"assets/main.cd7064b2.css",revision:null},{url:"assets/pwa.571bfb7d.js",revision:null},{url:"assets/vendor.8e4e8cce.js",revision:null},{url:"index.html",revision:"6d11d6612abb3652175f5d1fba44ccbd"},{url:"models/car/Scene.js",revision:"1522db6fb83985b36d1f1b18ef590591"},{url:"favicon.svg",revision:"1821c958bbe5e0a6a4563025af907760"},{url:"favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"apple-touch-icon.png",revision:"f4ddbbe8016954c03f09468526778975"},{url:"App_icon192.png",revision:"a43735029876abcfc625d39cc0a8b4aa"},{url:"App_icon512.png",revision:"e261a2fd04561bbc99f70da507342a05"},{url:"manifest.webmanifest",revision:"788d45e4a340ff46eebdcacb76dffd8c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
