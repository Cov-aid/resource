(function(e){function t(t){for(var r,o,s=t[0],l=t[1],c=t[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return l.p+"js/"+({beds:"beds",oxygen:"oxygen",vaccine:"vaccine"}[e]||e)+"."+{beds:"814f5e88",oxygen:"16e99e33",vaccine:"e33b6666"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={beds:1,oxygen:1,vaccine:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({beds:"beds",oxygen:"oxygen",vaccine:"vaccine"}[e]||e)+"."+{beds:"616f23a2",oxygen:"a005ec15",vaccine:"f311ece5"}[e]+".css",a=l.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===r||u===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/resource/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"247d":function(e,t,n){"use strict";n("bed4")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/oxygen"}},[e._v("Oxygen on Rent")]),e._v(" | "),n("router-link",{attrs:{to:"/vaccine"}},[e._v("Vaccine")]),e._v(" | "),n("router-link",{attrs:{to:"/beds"}},[e._v("Beds + Ventilators")])],1),n("router-view")],1)},a=[],i=(n("034f"),n("2877")),s={},l=Object(i["a"])(s,o,a,!1,null,null,null),c=l.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("d98d")}}),r("HelloWorld",{attrs:{msg:"Welcome to Cov-aid"}})],1)},f=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello container"},[e._m(0),n("p",[e._v(" Note: This list of resources is crowdsourced. The purpose of this is to ensure that all the information scattered across various social media platforms is organised methodically in one place, accessible to all, and easy to find at times of need. Those who submit leads directly through the google form attached here will be credited by name, the rest of the information has primarily been gathered from Facebook, Instagram and Twitter. ")]),n("p",[e._v(" While we are doing our best to verify and update these leads, we are a very small group of individuals with classes or full-time jobs. Unless specified otherwise, the leads are unverified, but we will try our best to get them verified at the earliest. We request you to exercise caution when engaging with these resources and if there's anything amiss, please report to the authorities, and let us know as well using the google form linked above so that we may update this portal accordingly. Thank you. ")]),n("h3",[e._v("Essential Links")]),e._m(1),n("hr"),e._v(" Visitor "),n("h2",[e._v(e._s(e.count)+" ")])])},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"lead"},[n("a",{staticClass:"btn btn-lg btn-success fw-bold border-white bg-dark",attrs:{href:"/oxygen"}},[e._v("Oxygen on Rent")]),n("a",{staticClass:"btn btn-lg btn-secondary fw-bold border-white bg-dark  ",attrs:{href:"/vaccine"}},[e._v("Vaccine")]),n("a",{staticClass:"btn btn-lg btn-secondary fw-bold border-white bg-dark  ",attrs:{href:"/beds"}},[e._v("Beds + Ventilators")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://www.wbhealth.gov.in",target:"_blank",rel:"noopener"}},[e._v("Health & Family Welfare")])]),n("li",[n("a",{attrs:{href:"https://excise.wb.gov.in",target:"_blank",rel:"noopener"}},[e._v("Forum")])])])}],v=n("bc3a"),m=n.n(v),g={name:"HelloWorld",props:{msg:String},data:function(){return{count:0}},created:function(){this.updateVisitCount()},methods:{updateVisitCount:function(){var e=this;m.a.get("https://api.countapi.xyz/hit/cov-aid/kolkata").then((function(t){console.log("hit",t.data),e.count=t.data.value}))},LocalVisitCount:function(){var e=localStorage.getItem("homepage_counter");null===e&&(e=0),e++,localStorage.setItem("homepage_counter",e),this.count=e}}},b=g,y=(n("247d"),Object(i["a"])(b,h,p,!1,null,"13c72346",null)),w=y.exports,x={name:"Home",components:{HelloWorld:w}},T=x,k=Object(i["a"])(T,d,f,!1,null,null,null),A=k.exports;r["a"].use(u["a"]);var B=[{path:"/",name:"Home",component:A},{path:"/oxygen",name:"Oxygen",component:function(){return n.e("oxygen").then(n.bind(null,"bc10"))}},{path:"/beds",name:"Beds",component:function(){return n.e("beds").then(n.bind(null,"4166"))}},{path:"/vaccine",name:"Vaccine",component:function(){return n.e("vaccine").then(n.bind(null,"eb82"))}}],j=new u["a"]({mode:"history",base:"/resource/",routes:B}),E=j;r["a"].config.productionTip=!1,new r["a"]({router:E,render:function(e){return e(c)}}).$mount("#app")},"85ec":function(e,t,n){},bed4:function(e,t,n){},d98d:function(e,t){e.exports="data:image/webp;base64,UklGRtwIAABXRUJQVlA4INAIAABwIgCdASp4AHgAPm0ylEakIyIhKZXriIANiWIA0uCmUppAeRPL0f49Gm2p8wHRv3pz0GOl9n7njD6UkVuBP9nwdezmU7b/4iO2A42/656EfIY1COlnp/Sy7eMNq84l0hRpw6E6/6g6OZIo0netZ+k+C2tEZAkl5DY1s+dSLS7FbyyEk9IiNGnjFE6qEdQOTfcYvQto3hYCfvtM3OHnb9+D5j4Tuz+obe/kGrY1Mi9g2zhVxE5+NzVnMJhEYVjCiRi+jonpsnZ8tRaPi1Bn3OGWtHOPmniboalgNdUQozPl/leVoOLXuO9nfruVlpT/raEVvgYhrkHYi2uWGvTfGptDkiwbUHMWopPfcK58pq4iLrafKCa7c1lFm3bqoAD+/hSklozxWMWz4Oc1drfgxLgsGeZH4DXTMMwIl+3j63dBLIDlZBp7W31b6g9CX7xqQOBxlNvf/1vRBOhAijH1xL+RBhM+uea7I/+ilmw8/nf0fVkl/TNiiPu/+Nf0fp7Wlkhd9BiHIefqTtprne5F88D+xrRBOrjCjM+DOXkM7JeyjzPeyRWRz0735/8lfr4l+AOcPnhLfnyiEQucx/HiSeMO7wt33QVEEW4aOxbH+ZDdLVGd7dqEndDAT57el+i/uZf/ZHct759dCuddUaJQ1QBE9nX2n2aWJDefml5erT5jL+w2b7iGh1WmB9TT2VFx8hYNaAxw4yV6Rb3Xg0DqlwnZQ2R1TzPjLRga/GACDthn9LQuxKUlLPjY5ytwelkE3eR8/0+zeWyTkb3E0KHfc+Niqb2xChx2YEfPhTLMEZkPK15sf0YZyzk6PeuTR3Ro4tTFzGA08jB7bWdahq4+3J+aahcGHwfJyiogp2hYsnSoA3jB/tbyg40e5TRDfCEU3j/7+SxmD2f/EMHRUTJccfj74P2vfinbt2QrI2fhemzI9/7cDOr8wtkP+lGg2+xaD/zDJKMMu4yIlWP4doOc8cZ52TWcAphbGwp7GrsmlFFsrScm+rHPWY71BgbES9tuqv/e1TtcjG9z23qBf0LNjyeneYwo3PoTL4LPYu13idAf2Om9X5nFZ5cRJobu3y4NrM7OYFMGyQvOmAKJZeBe1oHGoZYwoe/IGNt/EdrHQDPK0I+32O/jNWWGU7iQt4XYo6BsMqpkTdImSw3+1FBNU5jQU9UJqtklFPqh4bGziiwEGXqCqweWNaBiio2Q59yVR74mebdUsj8omCV2esio8rM5vylQvCZ9vVyJWkIjy6H78sCt1awumYF1pGIUjymkDO3ytz5tYAgMjff2cVoYOsVvr/kvsF9x/wgg5gu+f/YH3S+9MowBWwIExXTlBt19zXUWlEBQcd7UioMXcH/q4up+UyXOPBR2j+BsgSM3lzfwuT3yXi+9ZaAmMFnAb/u5+JTQmLCYkYmFpYNwuZAmYBX9Sd/hyZ2EZXDl8icr4Ls4ESNhbx0n0n1aeB3DJO4zv5+jf7tHswE2jLFKLa8K/JvomfCjW/vz0kgzN4L+JQTUjRUGzaxKPRpK11lvptbixPn3bRWXmBYZjNGUBDdqF9fx71OIvTKkOWIWGyXv5kLJaQiARCtxzTScrLeWF3b42umAdo4x+3jeZL9LNO5eYosTe+jemFQeT77eOJu1yot1myNvoQyGQtEDS/ob+Lq/TVhg4QRpF/BHZZK9vLq+JULB6vQwiZlkN3yP4Az2nqyfqIyYdgmmAZhD0SCl1fv/iUPVqGy/U+Z3Xf88hZwrc0smt4o3sBd34Pw3yXYPv1vs+Qm44gu2H5gf7LuqenFFtvxp5vjexVC6OwPaDzcYaaFjSf0sryaZbxOzAjzInFt1MfH3we7S4sAcUwaJWZS43VwvH801cSHujRBjsauWmwk7JGTDnBQWxkRaTeDRWJCw8BxWvyuMpUWXh7TQLC7CJM8LexQLxuQpzoTOGgacycJW/LieKyxhNKslAtX5Dx7lV78bgRuBREM+nDIHliM6cyBRvTe/bbBZuZlbUwIdm9xxmCWpkcATHWPgPrg+OyihCOHhYAEBOazgAqBCHxXMwSwXd0Iz+eUiWBkO8/D88l4AKX13BUeeibgmsror9FnuQxLBt7NlCK3Uv0T4DJP3nVbfUE+v3vNVFIFS3MwmzE62EsLXicKAJY56k2PXZZJfk6zSxT8fe/j9rzZuOhhxgML2rMsIWYfV4L41hZbZWIQfcC22oqLbWRX4qDzzsAEft/yOxrf2vTPZ7cp7vT05tV16tXwQtY1uEPQLDKKZVFgdGyULw7En32/m84TbMTLG7T1Mwd20Ai7yJFTWo4GFNayCqJ+iLcuDz6FdH1Kox3lplnqat6p/7reoUQHJsJgiPibVqhoveoLNeDPGLsDXtPPQz05MaCRsB4fyfw9qIEBlrDeX0WG+FER/Ghd1BwLcl1jdQ6KVIJVhN8SSk93Rk7jALJelLAASYSorD69jEMM5dFajaAP94jr/H8CBAoNVAJJ9gRR436IN8DEn9cXB+J2Mpr7nu6oYJFnb9ERtw2HDNu8u1+/Km/CSIQD86Yq6tPPGwPiqtfCBoE1BkxOHsMNeMc86OrzX9X7mIHaSLFwQcn4s0PvLKxQkbE0H/e7vgtHV2/cvhFdD/jW/YMu3ryx0mllzxwowbxJpsQAt93sIq8GrEghRGtpKo7szkX14/lz96BhVafAbCWRhIHANoXHNTpXOv4jBvt4Zx1wXHyn8R54119Ftflgwe+Vl5fvxb118z/KQLL2YEjRzCn7xFTBLUl6AKTAN/hHz6leBcr59Zx/UsZN+jAGroFMKM0zPJqMfzj44YoSfB2EZ1TZMi4RmHuqwnafRUx3ZxJvIXP3082vGy0rH0v7VLZvdYXXsh5tBlTnmFUCtqezdyIN7Q8KF46duQkDZRiS356GlSTT4o1VdLXkedo/9Be8cN62/wkcAzaqrLNkdBeuNlRti1KT/mRq5waUNDgraTXeS1gtl9jzEC5f8LOa9mq4nFBrtczVDuXtPTwGgQxgMuW8AAAA="}});
//# sourceMappingURL=app.bbb52ec5.js.map