if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const l=e=>s(e,t),c={module:{uri:t},exports:o,require:l};i[t]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-d169e1d7"],(function(e){"use strict";e.setCacheNameDetails({prefix:"my-web"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"favicon1.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"favoicon.png",revision:"8258189774222e4019680218e4133556"},{url:"index.html",revision:"68d77c792e796d7feb136c8c39264d03"},{url:"manifest.json",revision:"58922adcde61fb6a83574ab32e642249"},{url:"robots.txt",revision:"735ab4f94fbcd57074377afca324c813"},{url:"static/css/app.bf628ca7.css",revision:null},{url:"static/fonts/primeicons.310a7310.ttf",revision:null},{url:"static/fonts/primeicons.7f772274.woff",revision:null},{url:"static/fonts/primeicons.8ca441e1.eot",revision:null},{url:"static/fonts/primeicons.e1a53edb.woff2",revision:null},{url:"static/img/StartBild.af170e05.jpg",revision:null},{url:"static/img/primeicons.19e14e48.svg",revision:null},{url:"static/js/app.aaaa5e0e.js",revision:null},{url:"static/js/chunk-vendors.c3434188.js",revision:null}],{})}));
//# sourceMappingURL=service-worker.js.map
