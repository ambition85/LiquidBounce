var app=function(){"use strict";function t(){}const n=t=>t;function e(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(e)}function c(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n,e,o){if(t){const s=l(t,n,e,o);return t[0](s)}}function l(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function u(t,n,e,o,s,c,r){const i=function(t,n,e,o){if(t[2]&&o){const s=t[2](o(e));if(void 0===n.dirty)return s;if("object"==typeof s){const t=[],e=Math.max(n.dirty.length,s.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|s[o];return t}return n.dirty|s}return n.dirty}(n,o,s,c);if(i){const s=l(n,e,o,r);t.p(s,i)}}const a="undefined"!=typeof window;let $=a?()=>window.performance.now():()=>Date.now(),f=a?t=>requestAnimationFrame(t):t;const d=new Set;function m(t){d.forEach((n=>{n.c(t)||(d.delete(n),n.f())})),0!==d.size&&f(m)}function p(t,n){t.appendChild(n)}function g(t,n,e){t.insertBefore(n,e||null)}function v(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function b(){return x(" ")}function y(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function w(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function _(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function k(t,n,e){t.classList[e?"add":"remove"](n)}function C(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}const E=new Set;let S,U=0;function M(t,n,e,o,s,c,r,i=0){const l=16.666/o;let u="{\n";for(let t=0;t<=1;t+=l){const o=n+(e-n)*c(t);u+=100*t+`%{${r(o,1-o)}}\n`}const a=u+`100% {${r(e,1-e)}}\n}`,$=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(a)}_${i}`,f=t.ownerDocument;E.add(f);const d=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(h("style")).sheet),m=f.__svelte_rules||(f.__svelte_rules={});m[$]||(m[$]=!0,d.insertRule(`@keyframes ${$} ${a}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${$} ${o}ms linear ${s}ms 1 both`,U+=1,$}function j(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),s=e.length-o.length;s&&(t.style.animation=o.join(", "),U-=s,U||f((()=>{U||(E.forEach((t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}})),E.clear())})))}function z(t){S=t}function A(){if(!S)throw new Error("Function called outside component initialization");return S}function B(){const t=A();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const s=C(n,e);o.slice().forEach((n=>{n.call(t,s)}))}}}const L=[],O=[],q=[],N=[],R=Promise.resolve();let T=!1;function F(t){q.push(t)}let P=!1;const X=new Set;function D(){if(!P){P=!0;do{for(let t=0;t<L.length;t+=1){const n=L[t];z(n),G(n.$$)}for(z(null),L.length=0;O.length;)O.pop()();for(let t=0;t<q.length;t+=1){const n=q[t];X.has(n)||(X.add(n),n())}q.length=0}while(L.length);for(;N.length;)N.pop()();T=!1,P=!1,X.clear()}}function G(t){if(null!==t.fragment){t.update(),s(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(F)}}let H;function K(t,n,e){t.dispatchEvent(C(`${n?"intro":"outro"}${e}`))}const Y=new Set;let I;function J(){I={r:0,c:[],p:I}}function Q(){I.r||s(I.c),I=I.p}function V(t,n){t&&t.i&&(Y.delete(t),t.i(n))}function W(t,n,e,o){if(t&&t.o){if(Y.has(t))return;Y.add(t),I.c.push((()=>{Y.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const Z={duration:0};function tt(e,o,r,i){let l=o(e,r),u=i?0:1,a=null,p=null,g=null;function v(){g&&j(e,g)}function h(t,n){const e=t.b-u;return n*=Math.abs(e),{a:u,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function x(o){const{delay:c=0,duration:r=300,easing:i=n,tick:x=t,css:b}=l||Z,y={start:$()+c,b:o};o||(y.group=I,I.r+=1),a||p?p=y:(b&&(v(),g=M(e,u,o,r,c,i,b)),o&&x(0,1),a=h(y,r),F((()=>K(e,o,"start"))),function(t){let n;0===d.size&&f(m),new Promise((e=>{d.add(n={c:t,f:e})}))}((t=>{if(p&&t>p.start&&(a=h(p,r),p=null,K(e,a.b,"start"),b&&(v(),g=M(e,u,a.b,a.duration,0,i,l.css))),a)if(t>=a.end)x(u=a.b,1-u),K(e,a.b,"end"),p||(a.b?v():--a.group.r||s(a.group.c)),a=null;else if(t>=a.start){const n=t-a.start;u=a.a+a.d*i(n/a.duration),x(u,1-u)}return!(!a&&!p)})))}return{run(t){c(l)?(H||(H=Promise.resolve(),H.then((()=>{H=null}))),H).then((()=>{l=l(),x(t)})):x(t)},end(){v(),a=p=null}}}function nt(t){t&&t.c()}function et(t,n,o,r){const{fragment:i,on_mount:l,on_destroy:u,after_update:a}=t.$$;i&&i.m(n,o),r||F((()=>{const n=l.map(e).filter(c);u?u.push(...n):s(n),t.$$.on_mount=[]})),a.forEach(F)}function ot(t,n){const e=t.$$;null!==e.fragment&&(s(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function st(t,n){-1===t.$$.dirty[0]&&(L.push(t),T||(T=!0,R.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function ct(n,e,c,r,i,l,u=[-1]){const a=S;z(n);const $=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:e.context||[]),callbacks:o(),dirty:u,skip_bound:!1};let f=!1;if($.ctx=c?c(n,e.props||{},((t,e,...o)=>{const s=o.length?o[0]:e;return $.ctx&&i($.ctx[t],$.ctx[t]=s)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](s),f&&st(n,t)),e})):[],$.update(),f=!0,s($.before_update),$.fragment=!!r&&r($.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);$.fragment&&$.fragment.l(t),t.forEach(v)}else $.fragment&&$.fragment.c();e.intro&&V(n.$$.fragment),et(n,e.target,e.anchor,e.customElement),D()}z(a)}class rt{$destroy(){ot(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function it(t){const n=t-1;return n*n*n+1}function lt(t,{delay:e=0,duration:o=400,easing:s=n}={}){const c=+getComputedStyle(t).opacity;return{delay:e,duration:o,easing:s,css:t=>"opacity: "+t*c}}function ut(t,{delay:n=0,duration:e=400,easing:o=it,x:s=0,y:c=0,opacity:r=0}={}){const i=getComputedStyle(t),l=+i.opacity,u="none"===i.transform?"":i.transform,a=l*(1-r);return{delay:n,duration:e,easing:o,css:(t,n)=>`\n\t\t\ttransform: ${u} translate(${(1-t)*s}px, ${(1-t)*c}px);\n\t\t\topacity: ${l-a*n}`}}function at(t){let n,e,o,s;return{c(){n=h("div"),e=x(t[0]),w(n,"class","tooltip svelte-upwthj")},m(t,o){g(t,n,o),p(n,e),s=!0},p(t,n){(!s||1&n)&&_(e,t[0])},i(t){s||(F((()=>{o||(o=tt(n,ut,{y:-10,duration:200},!0)),o.run(1)})),s=!0)},o(t){o||(o=tt(n,ut,{y:-10,duration:200},!1)),o.run(0),s=!1},d(t){t&&v(n),t&&o&&o.end()}}}function $t(t){let n,e,o=t[2]&&at(t);return{c(){n=h("div"),o&&o.c()},m(s,c){g(s,n,c),o&&o.m(n,null),t[3](n),e=!0},p(t,[e]){t[2]?o?(o.p(t,e),4&e&&V(o,1)):(o=at(t),o.c(),V(o,1),o.m(n,null)):o&&(J(),W(o,1,1,(()=>{o=null})),Q())},i(t){e||(V(o),e=!0)},o(t){W(o),e=!1},d(e){e&&v(n),o&&o.d(),t[3](null)}}}function ft(t,n,e){let o,{text:s}=n,c=!1;var r;return r=()=>{o.parentNode.addEventListener("mouseenter",(t=>{e(2,c=!0)})),o.parentNode.addEventListener("mouseleave",(t=>{e(2,c=!1)}))},A().$$.after_update.push(r),t.$$set=t=>{"text"in t&&e(0,s=t.text)},[s,o,c,function(t){O[t?"unshift":"push"]((()=>{o=t,e(1,o)}))}]}class dt extends rt{constructor(t){super(),ct(this,t,ft,$t,r,{text:0})}}function mt(t){let n,e,o,c,r,i,l,u,a,$,f,d,m,k,C,E,S,U,M,j,z;return c=new dt({props:{text:"Change location"}}),{c(){n=h("div"),e=h("div"),o=h("div"),nt(c.$$.fragment),r=b(),i=h("img"),u=b(),a=h("img"),f=b(),d=h("div"),m=x(t[0]),k=b(),C=h("div"),E=x(t[1]),S=b(),U=h("div"),U.innerHTML='<img src="img/icons/pen.svg" alt="pen"/>',w(i,"class","location svelte-4tm950"),i.src!==(l="img/flags/"+t[2]+".svg")&&w(i,"src",l),w(i,"alt",t[2]),w(o,"class","location-wrapper svelte-4tm950"),w(a,"class","head svelte-4tm950"),a.src!==($=t[3])&&w(a,"src",$),w(a,"alt","head"),w(e,"class","icon svelte-4tm950"),w(d,"class","username svelte-4tm950"),w(C,"class","last-used svelte-4tm950"),w(U,"class","change-account svelte-4tm950"),w(n,"class","account svelte-4tm950")},m(s,l){g(s,n,l),p(n,e),p(e,o),et(c,o,null),p(o,r),p(o,i),p(e,u),p(e,a),p(n,f),p(n,d),p(d,m),p(n,k),p(n,C),p(C,E),p(n,S),p(n,U),M=!0,j||(z=[y(i,"click",t[5]),y(U,"click",t[4])],j=!0)},p(t,[n]){(!M||4&n&&i.src!==(l="img/flags/"+t[2]+".svg"))&&w(i,"src",l),(!M||4&n)&&w(i,"alt",t[2]),(!M||8&n&&a.src!==($=t[3]))&&w(a,"src",$),(!M||1&n)&&_(m,t[0]),(!M||2&n)&&_(E,t[1])},i(t){M||(V(c.$$.fragment,t),M=!0)},o(t){W(c.$$.fragment,t),M=!1},d(t){t&&v(n),ot(c),j=!1,s(z)}}}function pt(t,n,e){const o=B();let{username:s}=n,{lastUsed:c}=n,{location:r}=n,{faceUrl:i}=n;return t.$$set=t=>{"username"in t&&e(0,s=t.username),"lastUsed"in t&&e(1,c=t.lastUsed),"location"in t&&e(2,r=t.location),"faceUrl"in t&&e(3,i=t.faceUrl)},[s,c,r,i,function(t){o("altManagerClick")},function(t){o("proxyManagerClick")}]}class gt extends rt{constructor(t){super(),ct(this,t,pt,mt,r,{username:0,lastUsed:1,location:2,faceUrl:3})}}function vt(n){let e,o;return{c(){e=h("img"),w(e,"class","logo svelte-hsfuen"),e.src!==(o="img/logo.svg")&&w(e,"src","img/logo.svg"),w(e,"alt","logo")},m(t,n){g(t,e,n)},p:t,i:t,o:t,d(t){t&&v(e)}}}class ht extends rt{constructor(t){super(),ct(this,t,null,vt,r,{})}}function xt(t){let n,e,o,s;return{c(){n=h("img"),n.src!==(e="img/icons/"+t[0]+".svg")&&w(n,"src",e),w(n,"alt","icon"),w(n,"class","svelte-1vslbf1")},m(t,e){g(t,n,e),s=!0},p(t,o){(!s||1&o&&n.src!==(e="img/icons/"+t[0]+".svg"))&&w(n,"src",e)},i(t){s||(F((()=>{o||(o=tt(n,lt,{duration:200},!0)),o.run(1)})),s=!0)},o(t){o||(o=tt(n,lt,{duration:200},!1)),o.run(0),s=!1},d(t){t&&v(n),t&&o&&o.end()}}}function bt(t){let n,e,o,s;return{c(){n=h("img"),n.src!==(e="img/icons/"+t[0]+"-hover.svg")&&w(n,"src",e),w(n,"alt","icon"),w(n,"class","svelte-1vslbf1")},m(t,e){g(t,n,e),s=!0},p(t,o){(!s||1&o&&n.src!==(e="img/icons/"+t[0]+"-hover.svg"))&&w(n,"src",e)},i(t){s||(F((()=>{o||(o=tt(n,lt,{duration:200},!0)),o.run(1)})),s=!0)},o(t){o||(o=tt(n,lt,{duration:200},!1)),o.run(0),s=!1},d(t){t&&v(n),t&&o&&o.end()}}}function yt(t){let n,e,o,s,c,r,i,l,u;e=new dt({props:{text:t[1]}});const a=[bt,xt],$=[];function f(t,n){return t[2]?0:1}return c=f(t),r=$[c]=a[c](t),{c(){n=h("div"),nt(e.$$.fragment),o=b(),s=h("div"),r.c(),w(s,"class","icon svelte-1vslbf1"),k(s,"hovered",t[2]),w(n,"class","button svelte-1vslbf1")},m(r,a){var f;g(r,n,a),et(e,n,null),p(n,o),p(n,s),$[c].m(s,null),i=!0,l||(u=y(n,"click",(f=t[3],function(t){return t.stopPropagation(),f.call(this,t)})),l=!0)},p(t,[n]){const o={};2&n&&(o.text=t[1]),e.$set(o);let i=c;c=f(t),c===i?$[c].p(t,n):(J(),W($[i],1,1,(()=>{$[i]=null})),Q(),r=$[c],r?r.p(t,n):(r=$[c]=a[c](t),r.c()),V(r,1),r.m(s,null)),4&n&&k(s,"hovered",t[2])},i(t){i||(V(e.$$.fragment,t),V(r),i=!0)},o(t){W(e.$$.fragment,t),W(r),i=!1},d(t){t&&v(n),ot(e),$[c].d(),l=!1,u()}}}function wt(t,n,e){const o=B();let{icon:s}=n,{text:c}=n,{hovered:r}=n;return t.$$set=t=>{"icon"in t&&e(0,s=t.icon),"text"in t&&e(1,c=t.text),"hovered"in t&&e(2,r=t.hovered)},[s,c,r,function(t){o("click",t)}]}class _t extends rt{constructor(t){super(),ct(this,t,wt,yt,r,{icon:0,text:1,hovered:2})}}const kt=t=>({hovered:4&t}),Ct=t=>({hovered:t[2]});function Et(t){let n,e,o,s;return{c(){n=h("img"),n.src!==(e="img/icons/"+t[1]+".svg")&&w(n,"src",e),w(n,"alt","icon"),w(n,"class","svelte-gpb02u")},m(t,e){g(t,n,e),s=!0},p(t,o){(!s||2&o&&n.src!==(e="img/icons/"+t[1]+".svg"))&&w(n,"src",e)},i(t){s||(F((()=>{o||(o=tt(n,lt,{duration:200},!0)),o.run(1)})),s=!0)},o(t){o||(o=tt(n,lt,{duration:200},!1)),o.run(0),s=!1},d(t){t&&v(n),t&&o&&o.end()}}}function St(t){let n,e,o,s;return{c(){n=h("img"),n.src!==(e="img/icons/"+t[1]+"-hover.svg")&&w(n,"src",e),w(n,"alt","icon"),w(n,"class","svelte-gpb02u")},m(t,e){g(t,n,e),s=!0},p(t,o){(!s||2&o&&n.src!==(e="img/icons/"+t[1]+"-hover.svg"))&&w(n,"src",e)},i(t){s||(F((()=>{o||(o=tt(n,lt,{duration:200},!0)),o.run(1)})),s=!0)},o(t){o||(o=tt(n,lt,{duration:200},!1)),o.run(0),s=!1},d(t){t&&v(n),t&&o&&o.end()}}}function Ut(t){let n,e,o,c,r,l,a,$,f,d,m;const k=[St,Et],C=[];function E(t,n){return t[2]?0:1}o=E(t),c=C[o]=k[o](t);const S=t[7].default,U=i(S,t,t[6],Ct);return{c(){n=h("div"),e=h("div"),c.c(),r=b(),l=h("div"),a=x(t[0]),$=b(),U&&U.c(),w(e,"class","icon svelte-gpb02u"),w(l,"class","text svelte-gpb02u"),w(n,"class","button svelte-gpb02u")},m(s,c){g(s,n,c),p(n,e),C[o].m(e,null),p(n,r),p(n,l),p(l,a),p(n,$),U&&U.m(n,null),f=!0,d||(m=[y(n,"mouseenter",t[3]),y(n,"mouseleave",t[4]),y(n,"click",t[5])],d=!0)},p(t,[n]){let s=o;o=E(t),o===s?C[o].p(t,n):(J(),W(C[s],1,1,(()=>{C[s]=null})),Q(),c=C[o],c?c.p(t,n):(c=C[o]=k[o](t),c.c()),V(c,1),c.m(e,null)),(!f||1&n)&&_(a,t[0]),U&&U.p&&(!f||68&n)&&u(U,S,t,t[6],n,kt,Ct)},i(t){f||(V(c),V(U,t),f=!0)},o(t){W(c),W(U,t),f=!1},d(t){t&&v(n),C[o].d(),U&&U.d(t),d=!1,s(m)}}}function Mt(t,n,e){let{$$slots:o={},$$scope:s}=n;const c=B();let{text:r}=n,{icon:i}=n,l=!1;return t.$$set=t=>{"text"in t&&e(0,r=t.text),"icon"in t&&e(1,i=t.icon),"$$scope"in t&&e(6,s=t.$$scope)},[r,i,l,function(t){e(2,l=!0)},function(t){e(2,l=!1)},function(t){c("click",t)},s,o]}class jt extends rt{constructor(t){super(),ct(this,t,Mt,Ut,r,{text:0,icon:1})}}function zt(t){let n,e;const o=t[1].default,s=i(o,t,t[0],null);return{c(){n=h("div"),s&&s.c(),w(n,"class","buttons svelte-1np6dk1")},m(t,o){g(t,n,o),s&&s.m(n,null),e=!0},p(t,[n]){s&&s.p&&(!e||1&n)&&u(s,o,t,t[0],n,null,null)},i(t){e||(V(s,t),e=!0)},o(t){W(s,t),e=!1},d(t){t&&v(n),s&&s.d(t)}}}function At(t,n,e){let{$$slots:o={},$$scope:s}=n;return t.$$set=t=>{"$$scope"in t&&e(0,s=t.$$scope)},[s,o]}class Bt extends rt{constructor(t){super(),ct(this,t,At,zt,r,{})}}function Lt(t){let n,e,o,s,c,r,i,l,u;return e=new dt({props:{text:t[0]}}),{c(){n=h("div"),nt(e.$$.fragment),o=b(),s=h("div"),c=h("img"),c.src!==(r="img/icons/"+t[1]+".svg")&&w(c,"src",r),w(c,"alt","icon"),w(s,"class","icon svelte-1e1mre3"),w(n,"class","button svelte-1e1mre3")},m(r,a){g(r,n,a),et(e,n,null),p(n,o),p(n,s),p(s,c),i=!0,l||(u=y(n,"click",t[2]),l=!0)},p(t,[n]){const o={};1&n&&(o.text=t[0]),e.$set(o),(!i||2&n&&c.src!==(r="img/icons/"+t[1]+".svg"))&&w(c,"src",r)},i(t){i||(V(e.$$.fragment,t),i=!0)},o(t){W(e.$$.fragment,t),i=!1},d(t){t&&v(n),ot(e),l=!1,u()}}}function Ot(t,n,e){let{text:o}=n,{icon:s}=n;const c=B();return t.$$set=t=>{"text"in t&&e(0,o=t.text),"icon"in t&&e(1,s=t.icon)},[o,s,function(t){c("click",t)}]}class qt extends rt{constructor(t){super(),ct(this,t,Ot,Lt,r,{text:0,icon:1})}}function Nt(n){let e,o,s,c,r,i,l,u,a;return{c(){e=h("div"),o=h("div"),s=h("img"),r=b(),i=h("div"),l=x(n[0]),s.src!==(c="img/icons/"+n[1]+".svg")&&w(s,"src",c),w(s,"alt","icon"),w(o,"class","icon svelte-9wwe2r"),w(i,"class","text svelte-9wwe2r"),w(e,"class","button svelte-9wwe2r")},m(t,c){g(t,e,c),p(e,o),p(o,s),p(e,r),p(e,i),p(i,l),u||(a=y(e,"click",n[2]),u=!0)},p(t,[n]){2&n&&s.src!==(c="img/icons/"+t[1]+".svg")&&w(s,"src",c),1&n&&_(l,t[0])},i:t,o:t,d(t){t&&v(e),u=!1,a()}}}function Rt(t,n,e){let{text:o}=n,{icon:s}=n;const c=B();return t.$$set=t=>{"text"in t&&e(0,o=t.text),"icon"in t&&e(1,s=t.icon)},[o,s,function(t){c("click",t)}]}class Tt extends rt{constructor(t){super(),ct(this,t,Rt,Nt,r,{text:0,icon:1})}}function Ft(t){let n,e;const o=t[1].default,s=i(o,t,t[0],null);return{c(){n=h("div"),s&&s.c(),w(n,"class","buttons svelte-htoe5z")},m(t,o){g(t,n,o),s&&s.m(n,null),e=!0},p(t,[n]){s&&s.p&&(!e||1&n)&&u(s,o,t,t[0],n,null,null)},i(t){e||(V(s,t),e=!0)},o(t){W(s,t),e=!1},d(t){t&&v(n),s&&s.d(t)}}}function Pt(t,n,e){let{$$slots:o={},$$scope:s}=n;return t.$$set=t=>{"$$scope"in t&&e(0,s=t.$$scope)},[s,o]}class Xt extends rt{constructor(t){super(),ct(this,t,Pt,Ft,r,{})}}function Dt(t){let n,e;const o=t[1].default,s=i(o,t,t[0],null);return{c(){n=h("div"),s&&s.c(),w(n,"class","buttons svelte-1er56mp")},m(t,o){g(t,n,o),s&&s.m(n,null),e=!0},p(t,[n]){s&&s.p&&(!e||1&n)&&u(s,o,t,t[0],n,null,null)},i(t){e||(V(s,t),e=!0)},o(t){W(s,t),e=!1},d(t){t&&v(n),s&&s.d(t)}}}function Gt(t,n,e){let{$$slots:o={},$$scope:s}=n;return t.$$set=t=>{"$$scope"in t&&e(0,s=t.$$scope)},[s,o]}class Ht extends rt{constructor(t){super(),ct(this,t,Gt,Dt,r,{})}}function Kt(t){let n,e;return n=new _t({props:{text:"Realms",icon:"realms",hovered:t[2]}}),n.$on("click",nn),{c(){nt(n.$$.fragment)},m(t,o){et(n,t,o),e=!0},p(t,e){const o={};4&e&&(o.hovered=t[2]),n.$set(o)},i(t){e||(V(n.$$.fragment,t),e=!0)},o(t){W(n.$$.fragment,t),e=!1},d(t){ot(n,t)}}}function Yt(t){let n,e,o,s,c,r,i,l;return n=new jt({props:{text:"Singleplayer",icon:"singleplayer"}}),n.$on("click",Zt),o=new jt({props:{text:"Multiplayer",icon:"multiplayer",$$slots:{default:[Kt,({hovered:t})=>({2:t}),({hovered:t})=>t?4:0]},$$scope:{ctx:t}}}),o.$on("click",tn),c=new jt({props:{text:"Customize",icon:"customize"}}),i=new jt({props:{text:"Options",icon:"options"}}),i.$on("click",en),{c(){nt(n.$$.fragment),e=b(),nt(o.$$.fragment),s=b(),nt(c.$$.fragment),r=b(),nt(i.$$.fragment)},m(t,u){et(n,t,u),g(t,e,u),et(o,t,u),g(t,s,u),et(c,t,u),g(t,r,u),et(i,t,u),l=!0},p(t,n){const e={};12&n&&(e.$$scope={dirty:n,ctx:t}),o.$set(e)},i(t){l||(V(n.$$.fragment,t),V(o.$$.fragment,t),V(c.$$.fragment,t),V(i.$$.fragment,t),l=!0)},o(t){W(n.$$.fragment,t),W(o.$$.fragment,t),W(c.$$.fragment,t),W(i.$$.fragment,t),l=!1},d(t){ot(n,t),t&&v(e),ot(o,t),t&&v(s),ot(c,t),t&&v(r),ot(i,t)}}}function It(n){let e,o,s,c;return e=new Tt({props:{text:"Change Background",icon:"change-background"}}),s=new Tt({props:{text:"Exit",icon:"exit"}}),s.$on("click",on),{c(){nt(e.$$.fragment),o=b(),nt(s.$$.fragment)},m(t,n){et(e,t,n),g(t,o,n),et(s,t,n),c=!0},p:t,i(t){c||(V(e.$$.fragment,t),V(s.$$.fragment,t),c=!0)},o(t){W(e.$$.fragment,t),W(s.$$.fragment,t),c=!1},d(t){ot(e,t),t&&v(o),ot(s,t)}}}function Jt(n){let e,o,s,c,r,i,l,u,a,$,f,d;return e=new qt({props:{text:"Forum",icon:"nodebb"}}),e.$on("click",sn),s=new qt({props:{text:"GitHub",icon:"github"}}),s.$on("click",cn),r=new qt({props:{text:"Guilded",icon:"guilded"}}),r.$on("click",rn),l=new qt({props:{text:"Twitter",icon:"twitter"}}),l.$on("click",ln),a=new qt({props:{text:"YouTube",icon:"youtube"}}),a.$on("click",un),f=new Tt({props:{text:"liquidbounce.net",icon:"liquidbounce.net"}}),f.$on("click",an),{c(){nt(e.$$.fragment),o=b(),nt(s.$$.fragment),c=b(),nt(r.$$.fragment),i=b(),nt(l.$$.fragment),u=b(),nt(a.$$.fragment),$=b(),nt(f.$$.fragment)},m(t,n){et(e,t,n),g(t,o,n),et(s,t,n),g(t,c,n),et(r,t,n),g(t,i,n),et(l,t,n),g(t,u,n),et(a,t,n),g(t,$,n),et(f,t,n),d=!0},p:t,i(t){d||(V(e.$$.fragment,t),V(s.$$.fragment,t),V(r.$$.fragment,t),V(l.$$.fragment,t),V(a.$$.fragment,t),V(f.$$.fragment,t),d=!0)},o(t){W(e.$$.fragment,t),W(s.$$.fragment,t),W(r.$$.fragment,t),W(l.$$.fragment,t),W(a.$$.fragment,t),W(f.$$.fragment,t),d=!1},d(t){ot(e,t),t&&v(o),ot(s,t),t&&v(c),ot(r,t),t&&v(i),ot(l,t),t&&v(u),ot(a,t),t&&v($),ot(f,t)}}}function Qt(t){let n,e,o,s,c,r,i,l,u,a,$,f,d;return s=new ht({}),r=new gt({props:{username:t[0],location:"de",faceUrl:t[1],lastUsed:"2021-05-07"}}),r.$on("proxyManagerClick",Vt),r.$on("altManagerClick",Wt),l=new Bt({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),a=new Xt({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),f=new Ht({props:{$$slots:{default:[Jt]},$$scope:{ctx:t}}}),{c(){n=h("main"),e=h("div"),o=h("div"),nt(s.$$.fragment),c=b(),nt(r.$$.fragment),i=b(),nt(l.$$.fragment),u=b(),nt(a.$$.fragment),$=b(),nt(f.$$.fragment),w(o,"class","wrapper svelte-o2dcoh"),w(e,"class","scale svelte-o2dcoh"),w(n,"class","svelte-o2dcoh")},m(t,m){g(t,n,m),p(n,e),p(e,o),et(s,o,null),p(o,c),et(r,o,null),p(o,i),et(l,o,null),p(o,u),et(a,o,null),p(o,$),et(f,o,null),d=!0},p(t,[n]){const e={};8&n&&(e.$$scope={dirty:n,ctx:t}),l.$set(e);const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),a.$set(o);const s={};8&n&&(s.$$scope={dirty:n,ctx:t}),f.$set(s)},i(t){d||(V(s.$$.fragment,t),V(r.$$.fragment,t),V(l.$$.fragment,t),V(a.$$.fragment,t),V(f.$$.fragment,t),d=!0)},o(t){W(s.$$.fragment,t),W(r.$$.fragment,t),W(l.$$.fragment,t),W(a.$$.fragment,t),W(f.$$.fragment,t),d=!1},d(t){t&&v(n),ot(s),ot(r),ot(l),ot(a),ot(f)}}}function Vt(){ui.open("proxymanager",screen)}function Wt(){ui.open("altmanager",screen)}function Zt(){ui.open("singleplayer",screen)}function tn(){ui.open("multiplayer",screen)}function nn(){ui.open("multiplayer_realms",screen)}function en(){ui.open("options",screen)}function on(){minecraft.scheduleStop()}function sn(){utils.browse("https://forums.ccbluex.net")}function cn(){utils.browse("https://github.com/CCBlueX")}function rn(){utils.browse("https://guilded.gg/CCBlueX?r=pmbDp7K4")}function ln(){utils.browse("https://twitter.com/CCBlueX")}function un(){utils.browse("https://youtube.com/CCBlueX")}function an(){utils.browse("https://liquidbounce.net")}function $n(t){return[client.getSessionService().getUsername(),client.getSessionService().getFaceUrl()]}return new class extends rt{constructor(t){super(),ct(this,t,$n,Qt,r,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
