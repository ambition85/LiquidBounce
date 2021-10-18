var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function l(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i;function c(t,e){return i||(i=document.createElement("a")),i.href=e,t===i.href}const a="undefined"!=typeof window;let u=a?()=>window.performance.now():()=>Date.now(),f=a?t=>requestAnimationFrame(t):t;const d=new Set;function g(t){d.forEach((e=>{e.c(t)||(d.delete(e),e.f())})),0!==d.size&&f(g)}function m(t){let e;return 0===d.size&&f(g),{promise:new Promise((n=>{d.add(e={c:t,f:n})})),abort(){d.delete(e)}}}function h(t,e){t.appendChild(e)}function p(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $(t){const e=w("style");return function(t,e){h(t.head||t,e)}(p(t),e),e}function v(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function b(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function _(){return x(" ")}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function E(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function M(t,e,n){t.classList[n?"add":"remove"](e)}const S=new Set;let N,R=0;function B(t,e,n,o,r,l,s,i=0){const c=16.666/o;let a="{\n";for(let t=0;t<=1;t+=c){const o=e+(n-e)*l(t);a+=100*t+`%{${s(o,1-o)}}\n`}const u=a+`100% {${s(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${i}`,d=p(t);S.add(d);const g=d.__svelte_stylesheet||(d.__svelte_stylesheet=$(t).sheet),m=d.__svelte_rules||(d.__svelte_rules={});m[f]||(m[f]=!0,g.insertRule(`@keyframes ${f} ${u}`,g.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${f} ${o}ms linear ${r}ms 1 both`,R+=1,f}function L(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),R-=r,R||f((()=>{R||(S.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),S.clear())})))}function j(n,o,r,l){if(!o)return t;const s=n.getBoundingClientRect();if(o.left===s.left&&o.right===s.right&&o.top===s.top&&o.bottom===s.bottom)return t;const{delay:i=0,duration:c=300,easing:a=e,start:f=u()+i,end:d=f+c,tick:g=t,css:h}=r(n,{from:o,to:s},l);let p,$=!0,v=!1;function y(){h&&L(n,p),$=!1}return m((t=>{if(!v&&t>=f&&(v=!0),v&&t>=d&&(g(1,0),y()),!$)return!1;if(v){const e=0+1*a((t-f)/c);g(e,1-e)}return!0})),h&&(p=B(n,0,1,c,i,a,h)),i||(v=!0),g(0,1),y}function A(t){const e=getComputedStyle(t);if("absolute"!==e.position&&"fixed"!==e.position){const{width:n,height:o}=e,r=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=o,O(t,r)}}function O(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const o=getComputedStyle(t),r="none"===o.transform?"":o.transform;t.style.transform=`${r} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}function P(t){N=t}function T(t){(function(){if(!N)throw new Error("Function called outside component initialization");return N})().$$.after_update.push(t)}const q=[],z=[],D=[],F=[],H=Promise.resolve();let I=!1;function W(t){D.push(t)}let K=!1;const V=new Set;function G(){if(!K){K=!0;do{for(let t=0;t<q.length;t+=1){const e=q[t];P(e),J(e.$$)}for(P(null),q.length=0;z.length;)z.pop()();for(let t=0;t<D.length;t+=1){const e=D[t];V.has(e)||(V.add(e),e())}D.length=0}while(q.length);for(;F.length;)F.pop()();I=!1,K=!1,V.clear()}}function J(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(W)}}let Q;function U(t,e,n){t.dispatchEvent(function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(`${e?"intro":"outro"}${n}`))}const X=new Set;let Y;function Z(){Y={r:0,c:[],p:Y}}function tt(){Y.r||r(Y.c),Y=Y.p}function et(t,e){t&&t.i&&(X.delete(t),t.i(e))}function nt(t,e,n,o){if(t&&t.o){if(X.has(t))return;X.add(t),Y.c.push((()=>{X.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const ot={duration:0};function rt(n,o,s,i){let c=o(n,s),a=i?0:1,f=null,d=null,g=null;function h(){g&&L(n,g)}function p(t,e){const n=t.b-a;return e*=Math.abs(n),{a:a,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function $(o){const{delay:l=0,duration:s=300,easing:i=e,tick:$=t,css:v}=c||ot,y={start:u()+l,b:o};o||(y.group=Y,Y.r+=1),f||d?d=y:(v&&(h(),g=B(n,a,o,s,l,i,v)),o&&$(0,1),f=p(y,s),W((()=>U(n,o,"start"))),m((t=>{if(d&&t>d.start&&(f=p(d,s),d=null,U(n,f.b,"start"),v&&(h(),g=B(n,a,f.b,f.duration,0,i,c.css))),f)if(t>=f.end)$(a=f.b,1-a),U(n,f.b,"end"),d||(f.b?h():--f.group.r||r(f.group.c)),f=null;else if(t>=f.start){const e=t-f.start;a=f.a+f.d*i(e/f.duration),$(a,1-a)}return!(!f&&!d)})))}return{run(t){l(c)?(Q||(Q=Promise.resolve(),Q.then((()=>{Q=null}))),Q).then((()=>{c=c(),$(t)})):$(t)},end(){h(),f=d=null}}}function lt(t,e){t.f(),function(t,e){nt(t,1,1,(()=>{e.delete(t.key)}))}(t,e)}function st(t,e,n,o,r,l,s,i,c,a,u,f){let d=t.length,g=l.length,m=d;const h={};for(;m--;)h[t[m].key]=m;const p=[],$=new Map,v=new Map;for(m=g;m--;){const t=f(r,l,m),i=n(t);let c=s.get(i);c?o&&c.p(t,e):(c=a(i,t),c.c()),$.set(i,p[m]=c),i in h&&v.set(i,Math.abs(m-h[i]))}const y=new Set,b=new Set;function w(t){et(t,1),t.m(i,u),s.set(t.key,t),u=t.first,g--}for(;d&&g;){const e=p[g-1],n=t[d-1],o=e.key,r=n.key;e===n?(u=e.first,d--,g--):$.has(r)?!s.has(o)||y.has(o)?w(e):b.has(r)?d--:v.get(o)>v.get(r)?(b.add(o),w(e)):(y.add(r),d--):(c(n,s),d--)}for(;d--;){const e=t[d];$.has(e.key)||c(e,s)}for(;g;)w(p[g-1]);return p}function it(t){t&&t.c()}function ct(t,e,o,s){const{fragment:i,on_mount:c,on_destroy:a,after_update:u}=t.$$;i&&i.m(e,o),s||W((()=>{const e=c.map(n).filter(l);a?a.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(W)}function at(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){-1===t.$$.dirty[0]&&(q.push(t),I||(I=!0,H.then(G)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ft(e,n,l,s,i,c,a,u=[-1]){const f=N;P(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:o(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};a&&a(d.root);let g=!1;if(d.ctx=l?l(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),g&&ut(e,t)),n})):[],d.update(),g=!0,r(d.before_update),d.fragment=!!s&&s(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(y)}else d.fragment&&d.fragment.c();n.intro&&et(e.$$.fragment),ct(e,n.target,n.anchor,n.customElement),G()}P(f)}class dt{$destroy(){at(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function gt(t){const e=t-1;return e*e*e+1}function mt(t,{delay:n=0,duration:o=400,easing:r=e}={}){const l=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:r,css:t=>"opacity: "+t*l}}function ht(t,{delay:e=0,duration:n=400,easing:o=gt,x:r=0,y:l=0,opacity:s=0}={}){const i=getComputedStyle(t),c=+i.opacity,a="none"===i.transform?"":i.transform,u=c*(1-s);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*r}px, ${(1-t)*l}px);\n\t\t\topacity: ${c-u*e}`}}function pt(t){let e,n,o,r;return{c(){e=w("img"),c(e.src,n="img/tabgui/"+t[0].toLowerCase()+".svg")||k(e,"src",n),k(e,"alt","icon"),k(e,"class","svelte-1882las")},m(t,n){v(t,e,n),r=!0},p(t,o){(!r||1&o&&!c(e.src,n="img/tabgui/"+t[0].toLowerCase()+".svg"))&&k(e,"src",n)},i(t){r||(W((()=>{o||(o=rt(e,mt,{duration:200},!0)),o.run(1)})),r=!0)},o(t){o||(o=rt(e,mt,{duration:200},!1)),o.run(0),r=!1},d(t){t&&y(e),t&&o&&o.end()}}}function $t(t){let e,n,o,r;return{c(){e=w("img"),c(e.src,n="img/tabgui/"+t[0].toLowerCase()+"-active.svg")||k(e,"src",n),k(e,"alt","icon"),k(e,"class","svelte-1882las")},m(t,n){v(t,e,n),r=!0},p(t,o){(!r||1&o&&!c(e.src,n="img/tabgui/"+t[0].toLowerCase()+"-active.svg"))&&k(e,"src",n)},i(t){r||(W((()=>{o||(o=rt(e,mt,{duration:200},!0)),o.run(1)})),r=!0)},o(t){o||(o=rt(e,mt,{duration:200},!1)),o.run(0),r=!1},d(t){t&&y(e),t&&o&&o.end()}}}function vt(t){let e,n,o,r,l,s,i,c;const a=[$t,pt],u=[];function f(t,e){return t[1]?0:1}return o=f(t),r=u[o]=a[o](t),{c(){e=w("div"),n=w("div"),r.c(),l=_(),s=w("div"),i=x(t[0]),k(n,"class","category-icon svelte-1882las"),k(s,"class","category-name svelte-1882las"),k(e,"class","category svelte-1882las"),M(e,"active",t[1])},m(t,r){v(t,e,r),h(e,n),u[o].m(n,null),h(e,l),h(e,s),h(s,i),c=!0},p(t,[l]){let s=o;o=f(t),o===s?u[o].p(t,l):(Z(),nt(u[s],1,1,(()=>{u[s]=null})),tt(),r=u[o],r?r.p(t,l):(r=u[o]=a[o](t),r.c()),et(r,1),r.m(n,null)),(!c||1&l)&&C(i,t[0]),2&l&&M(e,"active",t[1])},i(t){c||(et(r),c=!0)},o(t){nt(r),c=!1},d(t){t&&y(e),u[o].d()}}}function yt(t,e,n){let{name:o}=e,{active:r}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name),"active"in t&&n(1,r=t.active)},[o,r]}class bt extends dt{constructor(t){super(),ft(this,t,yt,vt,s,{name:0,active:1})}}function wt(e){let n,o,r;return{c(){n=w("div"),o=w("div"),r=x(e[0]),k(o,"class","name svelte-2jg18e"),k(n,"class","module svelte-2jg18e"),M(n,"active",e[1]),M(n,"enabled",e[2])},m(t,l){v(t,n,l),h(n,o),h(o,r),e[4](n)},p(t,[e]){1&e&&C(r,t[0]),2&e&&M(n,"active",t[1]),4&e&&M(n,"enabled",t[2])},i:t,o:t,d(t){t&&y(n),e[4](null)}}}function xt(t,e,n){let o,{name:r}=e,{active:l}=e,{enabled:s}=e;return T((()=>{l&&o.scrollIntoView({block:"start",behavior:"smooth"})})),t.$$set=t=>{"name"in t&&n(0,r=t.name),"active"in t&&n(1,l=t.active),"enabled"in t&&n(2,s=t.enabled)},[r,l,s,o,function(t){z[t?"unshift":"push"]((()=>{o=t,n(3,o)}))}]}class _t extends dt{constructor(t){super(),ft(this,t,xt,wt,s,{name:0,active:1,enabled:2})}}function kt(t,e,n){const o=t.slice();return o[10]=e[n],o[12]=n,o}function Ct(t,e,n){const o=t.slice();return o[13]=e[n],o[12]=n,o}function Et(t){let e,n;return e=new bt({props:{name:t[13],active:t[12]===t[2]}}),{c(){it(e.$$.fragment)},m(t,o){ct(e,t,o),n=!0},p(t,n){const o={};4&n&&(o.active=t[12]===t[2]),e.$set(o)},i(t){n||(et(e.$$.fragment,t),n=!0)},o(t){nt(e.$$.fragment,t),n=!1},d(t){at(e,t)}}}function Mt(t){let e,n,o,r=t[0],l=[];for(let e=0;e<r.length;e+=1)l[e]=St(kt(t,r,e));const s=t=>nt(l[t],1,1,(()=>{l[t]=null}));return{c(){e=w("div");for(let t=0;t<l.length;t+=1)l[t].c();E(e,"height",t[3].offsetHeight+"px"),k(e,"class","modules svelte-oeam5d")},m(t,n){v(t,e,n);for(let t=0;t<l.length;t+=1)l[t].m(e,null);o=!0},p(t,n){if(3&n){let o;for(r=t[0],o=0;o<r.length;o+=1){const s=kt(t,r,o);l[o]?(l[o].p(s,n),et(l[o],1)):(l[o]=St(s),l[o].c(),et(l[o],1),l[o].m(e,null))}for(Z(),o=r.length;o<l.length;o+=1)s(o);tt()}(!o||8&n)&&E(e,"height",t[3].offsetHeight+"px")},i(t){if(!o){for(let t=0;t<r.length;t+=1)et(l[t]);W((()=>{n||(n=rt(e,ht,{x:-10,duration:200},!0)),n.run(1)})),o=!0}},o(t){l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)nt(l[t]);n||(n=rt(e,ht,{x:-10,duration:200},!1)),n.run(0),o=!1},d(t){t&&y(e),b(l,t),t&&n&&n.end()}}}function St(t){let e,n;return e=new _t({props:{name:t[10].name,enabled:t[10].enabled,active:t[1]===t[12]}}),{c(){it(e.$$.fragment)},m(t,o){ct(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.name=t[10].name),1&n&&(o.enabled=t[10].enabled),2&n&&(o.active=t[1]===t[12]),e.$set(o)},i(t){n||(et(e.$$.fragment,t),n=!0)},o(t){nt(e.$$.fragment,t),n=!1},d(t){at(e,t)}}}function Nt(t){let e,n,o,r,l=t[4],s=[];for(let e=0;e<l.length;e+=1)s[e]=Et(Ct(t,l,e));const i=t=>nt(s[t],1,1,(()=>{s[t]=null}));let c=t[0].length>0&&Mt(t);return{c(){e=w("div"),n=w("div");for(let t=0;t<s.length;t+=1)s[t].c();o=_(),c&&c.c(),k(n,"class","categories svelte-oeam5d"),k(e,"class","tabgui svelte-oeam5d")},m(l,i){v(l,e,i),h(e,n);for(let t=0;t<s.length;t+=1)s[t].m(n,null);t[5](n),h(e,o),c&&c.m(e,null),r=!0},p(t,[o]){if(20&o){let e;for(l=t[4],e=0;e<l.length;e+=1){const r=Ct(t,l,e);s[e]?(s[e].p(r,o),et(s[e],1)):(s[e]=Et(r),s[e].c(),et(s[e],1),s[e].m(n,null))}for(Z(),e=l.length;e<s.length;e+=1)i(e);tt()}t[0].length>0?c?(c.p(t,o),1&o&&et(c,1)):(c=Mt(t),c.c(),et(c,1),c.m(e,null)):c&&(Z(),nt(c,1,1,(()=>{c=null})),tt())},i(t){if(!r){for(let t=0;t<l.length;t+=1)et(s[t]);et(c),r=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)nt(s[t]);nt(c),r=!1},d(n){n&&y(e),b(s,n),t[5](null),c&&c.d()}}}function Rt(t,e,n){const o=["Movement","Combat","Render","Exploit","Player","World","Misc","Fun"],r=[];try{const t=client.getModuleManager().iterator();for(;t.hasNext();){const e=t.next();r.push({name:e.getName(),category:e.getCategory().getReadableName(),enabled:e.getEnabled(),setEnabled:e.setEnabled})}}catch(t){console.log(t)}function l(){return r.filter((t=>t.category===o[c]))}let s=[],i=0,c=0,a=document.createElement("div");function u(t){if(1===t.getAction())switch(t.getKey().toString()){case"key.keyboard.down":0===s.length?n(2,c=c===o.length-1?0:c+1):n(1,i=i===s.length-1?0:i+1);break;case"key.keyboard.up":0===s.length?n(2,c=0===c?o.length-1:c-1):n(1,i=0===i?s.length-1:i-1);break;case"key.keyboard.right":n(0,s=[]),n(0,s=l()),n(1,i=0);break;case"key.keyboard.left":n(0,s=[]);break;case"key.keyboard.enter":if(-1!=i){const t=s[i];t.setEnabled(!t.enabled)}}}try{events.on("key",u),events.on("toggleModule",(function(t){r.find((e=>e.name===t.getModule().getName())).enabled=t.getNewState(),s.length>0&&n(0,s=l())}))}catch(t){window.addEventListener("keydown",u),console.log(t)}return[s,i,c,a,o,function(t){z[t?"unshift":"push"]((()=>{a=t,n(3,a)}))}]}class Bt extends dt{constructor(t){super(),ft(this,t,Rt,Nt,s,{})}}function Lt(e){let n,o;return{c(){n=w("img"),k(n,"class","watermark svelte-l5vd49"),c(n.src,o="img/watermark/lb-logo.svg")||k(n,"src","img/watermark/lb-logo.svg"),k(n,"alt","watermark")},m(t,e){v(t,n,e)},p:t,i:t,o:t,d(t){t&&y(n)}}}class jt extends dt{constructor(t){super(),ft(this,t,null,Lt,s,{})}}function At(t,{from:e,to:n},o={}){const r=getComputedStyle(t),s="none"===r.transform?"":r.transform,[i,c]=r.transformOrigin.split(" ").map(parseFloat),a=e.left+e.width*i/n.width-(n.left+i),u=e.top+e.height*c/n.height-(n.top+c),{delay:f=0,duration:d=(t=>120*Math.sqrt(t)),easing:g=gt}=o;return{delay:f,duration:l(d)?d(Math.sqrt(a*a+u*u)):d,easing:g,css:(t,o)=>{const r=o*a,l=o*u,i=t+o*e.width/n.width,c=t+o*e.height/n.height;return`transform: ${s} translate(${r}px, ${l}px) scale(${i}, ${c});`}}}function Ot(e){let n,o;return{c(){n=w("div"),o=x(e[0]),k(n,"class","module svelte-1r5j4px")},m(t,e){v(t,n,e),h(n,o)},p(t,[e]){1&e&&C(o,t[0])},i:t,o:t,d(t){t&&y(n)}}}function Pt(t,e,n){let{name:o}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name)},[o]}class Tt extends dt{constructor(t){super(),ft(this,t,Pt,Ot,s,{name:0})}}function qt(t,e,n){const o=t.slice();return o[4]=e[n],o}function zt(e,n){let o,r,l,s,i,c,a=t;return r=new Tt({props:{name:n[4].name}}),{key:e,first:null,c(){o=w("div"),it(r.$$.fragment),l=_(),this.first=o},m(t,e){v(t,o,e),ct(r,o,null),h(o,l),c=!0},p(t,e){n=t;const o={};1&e&&(o.name=n[4].name),r.$set(o)},r(){i=o.getBoundingClientRect()},f(){A(o),a(),O(o,i)},a(){a(),a=j(o,i,At,{duration:200})},i(t){c||(et(r.$$.fragment,t),W((()=>{s||(s=rt(o,ht,{x:10,duration:200},!0)),s.run(1)})),c=!0)},o(t){nt(r.$$.fragment,t),s||(s=rt(o,ht,{x:10,duration:200},!1)),s.run(0),c=!1},d(t){t&&y(o),at(r),t&&s&&s.end()}}}function Dt(t){let e,n,o=[],r=new Map,l=t[0];const s=t=>t[4];for(let e=0;e<l.length;e+=1){let n=qt(t,l,e),i=s(n);r.set(i,o[e]=zt(i,n))}return{c(){e=w("div");for(let t=0;t<o.length;t+=1)o[t].c();k(e,"class","arraylist svelte-1cn0km2")},m(t,r){v(t,e,r);for(let t=0;t<o.length;t+=1)o[t].m(e,null);n=!0},p(t,[n]){if(1&n){l=t[0],Z();for(let t=0;t<o.length;t+=1)o[t].r();o=st(o,n,s,1,t,l,r,e,lt,zt,null,qt);for(let t=0;t<o.length;t+=1)o[t].a();tt()}},i(t){if(!n){for(let t=0;t<l.length;t+=1)et(o[t]);n=!0}},o(t){for(let t=0;t<o.length;t+=1)nt(o[t]);n=!1},d(t){t&&y(e);for(let t=0;t<o.length;t+=1)o[t].d()}}}function Ft(t,e,n){function o(t){void 0===o.ruler&&(o.ruler=document.getElementById("ruler"));const e=o.ruler;return e.innerText=t,e.offsetWidth}function r(){n(0,l=l.sort(((t,e)=>o(e.name)-o(t.name))))}let l=[];try{const t=client.getModuleManager().iterator();for(;t.hasNext();){const e=t.next();e.getEnabled()&&l.push({name:e.getName()})}r()}catch(t){console.log(t)}try{events.on("toggleModule",(function(t){const e=t.getModule().getName();t.getNewState()?l.push({name:e}):n(0,l=l.filter((t=>t.name!=e))),r()}))}catch(t){console.log(t)}return[l]}class Ht extends dt{constructor(t){super(),ft(this,t,Ft,Dt,s,{})}}function It(e){let n,o,r,l,s,i,c,a,u;return{c(){n=w("div"),o=w("div"),l=_(),s=w("div"),i=x(e[0]),c=_(),a=w("div"),u=x(e[1]),k(o,"class",r="icon "+e[2].toString().toLowerCase()+" svelte-17vxr6n"),k(s,"class","title svelte-17vxr6n"),k(a,"class","content svelte-17vxr6n"),k(n,"class","notification svelte-17vxr6n")},m(t,e){v(t,n,e),h(n,o),h(n,l),h(n,s),h(s,i),h(n,c),h(n,a),h(a,u)},p(t,[e]){4&e&&r!==(r="icon "+t[2].toString().toLowerCase()+" svelte-17vxr6n")&&k(o,"class",r),1&e&&C(i,t[0]),2&e&&C(u,t[1])},i:t,o:t,d(t){t&&y(n)}}}function Wt(t,e,n){let{title:o}=e,{content:r}=e,{severity:l}=e;return t.$$set=t=>{"title"in t&&n(0,o=t.title),"content"in t&&n(1,r=t.content),"severity"in t&&n(2,l=t.severity)},[o,r,l]}class Kt extends dt{constructor(t){super(),ft(this,t,Wt,It,s,{title:0,content:1,severity:2})}}function Vt(t,e,n){const o=t.slice();return o[2]=e[n],o}function Gt(e,n){let o,r,l,s,i,c,a=t;return r=new Kt({props:{title:n[2].title,content:n[2].content,severity:n[2].severity}}),{key:e,first:null,c(){o=w("div"),it(r.$$.fragment),l=_(),this.first=o},m(t,e){v(t,o,e),ct(r,o,null),h(o,l),c=!0},p(t,e){n=t;const o={};1&e&&(o.title=n[2].title),1&e&&(o.content=n[2].content),1&e&&(o.severity=n[2].severity),r.$set(o)},r(){i=o.getBoundingClientRect()},f(){A(o),a(),O(o,i)},a(){a(),a=j(o,i,At,{duration:200})},i(t){c||(et(r.$$.fragment,t),W((()=>{s||(s=rt(o,ht,{x:15,duration:200},!0)),s.run(1)})),c=!0)},o(t){nt(r.$$.fragment,t),s||(s=rt(o,ht,{x:15,duration:200},!1)),s.run(0),c=!1},d(t){t&&y(o),at(r),t&&s&&s.end()}}}function Jt(t){let e,n,o=[],r=new Map,l=t[0];const s=t=>t[2];for(let e=0;e<l.length;e+=1){let n=Vt(t,l,e),i=s(n);r.set(i,o[e]=Gt(i,n))}return{c(){e=w("div");for(let t=0;t<o.length;t+=1)o[t].c();k(e,"class","notifications svelte-wyz01u")},m(t,r){v(t,e,r);for(let t=0;t<o.length;t+=1)o[t].m(e,null);n=!0},p(t,[n]){if(1&n){l=t[0],Z();for(let t=0;t<o.length;t+=1)o[t].r();o=st(o,n,s,1,t,l,r,e,lt,Gt,null,Vt);for(let t=0;t<o.length;t+=1)o[t].a();tt()}},i(t){if(!n){for(let t=0;t<l.length;t+=1)et(o[t]);n=!0}},o(t){for(let t=0;t<o.length;t+=1)nt(o[t]);n=!1},d(t){t&&y(e);for(let t=0;t<o.length;t+=1)o[t].d()}}}function Qt(t,e,n){let o=[];try{events.on("notification",(t=>{!function(t,e,r){const l=Date.now();n(0,o=[{id:l,title:t,content:e,severity:r},...o]),setTimeout((()=>{n(0,o=o.filter((t=>t.id!=l)))}),3e3)}(t.getTitle(),t.getMessage(),t.getSeverity())}))}catch(t){console.log(t)}return[o]}class Ut extends dt{constructor(t){super(),ft(this,t,Qt,Jt,s,{})}}function Xt(e){let n,o,r,l,s,i,c,a,u;return o=new Ht({}),l=new jt({}),i=new Bt({}),a=new Ut({}),{c(){n=w("main"),it(o.$$.fragment),r=_(),it(l.$$.fragment),s=_(),it(i.$$.fragment),c=_(),it(a.$$.fragment)},m(t,e){v(t,n,e),ct(o,n,null),h(n,r),ct(l,n,null),h(n,s),ct(i,n,null),h(n,c),ct(a,n,null),u=!0},p:t,i(t){u||(et(o.$$.fragment,t),et(l.$$.fragment,t),et(i.$$.fragment,t),et(a.$$.fragment,t),u=!0)},o(t){nt(o.$$.fragment,t),nt(l.$$.fragment,t),nt(i.$$.fragment,t),nt(a.$$.fragment,t),u=!1},d(t){t&&y(n),at(o),at(l),at(i),at(a)}}}return new class extends dt{constructor(t){super(),ft(this,t,null,Xt,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
