(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function D(){}const Yt=n=>n;function In(n,e){for(const t in e)n[t]=e[t];return n}function dd(n){return!!n&&(typeof n=="object"||typeof n=="function")&&typeof n.then=="function"}function jc(n){return n()}function Xa(){return Object.create(null)}function De(n){n.forEach(jc)}function Vt(n){return typeof n=="function"}function pe(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function pd(n){return Object.keys(n).length===0}function md(n,...e){if(n==null)return D;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function zt(n,e,t){n.$$.on_destroy.push(md(e,t))}function Mn(n,e,t,r){if(n){const i=zc(n,e,t,r);return n[0](i)}}function zc(n,e,t,r){return n[1]&&r?In(t.ctx.slice(),n[1](r(e))):t.ctx}function Ln(n,e,t,r){if(n[2]&&r){const i=n[2](r(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|i[a];return s}return e.dirty|i}return e.dirty}function Fn(n,e,t,r,i,s){if(i){const o=zc(e,t,r,s);n.p(o,i)}}function Un(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let r=0;r<t;r++)e[r]=-1;return e}return-1}function Ja(n){const e={};for(const t in n)t[0]!=="$"&&(e[t]=n[t]);return e}function Ya(n){return n==null?"":n}function Hc(n){return n&&Vt(n.destroy)?n.destroy:D}function Za(n){const e=typeof n=="string"&&n.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[n,"px"]}const Kc=typeof window<"u";let br=Kc?()=>window.performance.now():()=>Date.now(),Mo=Kc?n=>requestAnimationFrame(n):D;const pn=new Set;function Wc(n){pn.forEach(e=>{e.c(n)||(pn.delete(e),e.f())}),pn.size!==0&&Mo(Wc)}function Cr(n){let e;return pn.size===0&&Mo(Wc),{promise:new Promise(t=>{pn.add(e={c:n,f:t})}),abort(){pn.delete(e)}}}function C(n,e){n.appendChild(e)}function Gc(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function gd(n){const e=S("style");return _d(Gc(n),e),e.sheet}function _d(n,e){return C(n.head||n,e),e.sheet}function M(n,e,t){n.insertBefore(e,t||null)}function O(n){n.parentNode&&n.parentNode.removeChild(n)}function Lo(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function S(n){return document.createElement(n)}function Bt(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function Je(n){return document.createTextNode(n)}function K(){return Je(" ")}function tt(){return Je("")}function oe(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function y(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}const yd=["width","height"];function vd(n,e){const t=Object.getOwnPropertyDescriptors(n.__proto__);for(const r in e)e[r]==null?n.removeAttribute(r):r==="style"?n.style.cssText=e[r]:r==="__value"?n.value=n[r]=e[r]:t[r]&&t[r].set&&yd.indexOf(r)===-1?n[r]=e[r]:y(n,r,e[r])}function Ed(n,e){Object.keys(e).forEach(t=>{Td(n,t,e[t])})}function Td(n,e,t){e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:y(n,e,t)}function Id(n){return/-/.test(n)?Ed:vd}function wd(n){return Array.from(n.childNodes)}function St(n,e){e=""+e,n.data!==e&&(n.data=e)}function Tt(n,e){n.value=e==null?"":e}function el(n,e,t){for(let r=0;r<n.options.length;r+=1){const i=n.options[r];if(i.__value===e){i.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function Ad(n){const e=n.querySelector(":checked");return e&&e.__value}function we(n,e,t){n.classList[t?"add":"remove"](e)}function Qc(n,e,{bubbles:t=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(n,t,r,e),i}class Rd{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,r=null){this.e||(this.is_svg?this.e=Bt(t.nodeName):this.e=S(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(r)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)M(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(O)}}function tl(n,e){return new n(e)}const vi=new Map;let Ei=0;function bd(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function Cd(n,e){const t={stylesheet:gd(e),rules:{}};return vi.set(n,t),t}function sr(n,e,t,r,i,s,o,a=0){const l=16.666/r;let c=`{
`;for(let _=0;_<=1;_+=l){const m=e+(t-e)*s(_);c+=_*100+`%{${o(m,1-m)}}
`}const u=c+`100% {${o(t,1-t)}}
}`,h=`__svelte_${bd(u)}_${a}`,f=Gc(n),{stylesheet:d,rules:p}=vi.get(f)||Cd(f,n);p[h]||(p[h]=!0,d.insertRule(`@keyframes ${h} ${u}`,d.cssRules.length));const g=n.style.animation||"";return n.style.animation=`${g?`${g}, `:""}${h} ${r}ms linear ${i}ms 1 both`,Ei+=1,h}function or(n,e){const t=(n.style.animation||"").split(", "),r=t.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),i=t.length-r.length;i&&(n.style.animation=r.join(", "),Ei-=i,Ei||Sd())}function Sd(){Mo(()=>{Ei||(vi.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&O(e)}),vi.clear())})}function Pd(n,e,t,r){if(!e)return D;const i=n.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return D;const{delay:s=0,duration:o=300,easing:a=Yt,start:l=br()+s,end:c=l+o,tick:u=D,css:h}=t(n,{from:e,to:i},r);let f=!0,d=!1,p;function g(){h&&(p=sr(n,0,1,o,s,a,h)),s||(d=!0)}function _(){h&&or(n,p),f=!1}return Cr(m=>{if(!d&&m>=l&&(d=!0),d&&m>=c&&(u(1,0),_()),!f)return!1;if(d){const T=m-l,v=0+1*a(T/o);u(v,1-v)}return!0}),g(),u(0,1),_}function kd(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:r}=e,i=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=r,Xc(n,i)}}function Xc(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const r=getComputedStyle(n),i=r.transform==="none"?"":r.transform;n.style.transform=`${i} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}let ar;function rt(n){ar=n}function Zt(){if(!ar)throw new Error("Function called outside component initialization");return ar}function Sr(n){Zt().$$.on_mount.push(n)}function Dd(n){Zt().$$.after_update.push(n)}function Jc(n){Zt().$$.on_destroy.push(n)}function vI(){const n=Zt();return(e,t,{cancelable:r=!1}={})=>{const i=n.$$.callbacks[e];if(i){const s=Qc(e,t,{cancelable:r});return i.slice().forEach(o=>{o.call(n,s)}),!s.defaultPrevented}return!0}}function Vd(n,e){return Zt().$$.context.set(n,e),e}function Yc(n){return Zt().$$.context.get(n)}const cn=[],Ht=[];let mn=[];const Xs=[],Zc=Promise.resolve();let Js=!1;function eu(){Js||(Js=!0,Zc.then(Fo))}function Nd(){return eu(),Zc}function Oe(n){mn.push(n)}function Ys(n){Xs.push(n)}const Cs=new Set;let sn=0;function Fo(){if(sn!==0)return;const n=ar;do{try{for(;sn<cn.length;){const e=cn[sn];sn++,rt(e),Od(e.$$)}}catch(e){throw cn.length=0,sn=0,e}for(rt(null),cn.length=0,sn=0;Ht.length;)Ht.pop()();for(let e=0;e<mn.length;e+=1){const t=mn[e];Cs.has(t)||(Cs.add(t),t())}mn.length=0}while(cn.length);for(;Xs.length;)Xs.pop()();Js=!1,Cs.clear(),rt(n)}function Od(n){if(n.fragment!==null){n.update(),De(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Oe)}}function Md(n){const e=[],t=[];mn.forEach(r=>n.indexOf(r)===-1?e.push(r):t.push(r)),t.forEach(r=>r()),mn=e}let Hn;function Uo(){return Hn||(Hn=Promise.resolve(),Hn.then(()=>{Hn=null})),Hn}function $t(n,e,t){n.dispatchEvent(Qc(`${e?"intro":"outro"}${t}`))}const ui=new Set;let He;function qe(){He={r:0,c:[],p:He}}function je(){He.r||De(He.c),He=He.p}function P(n,e){n&&n.i&&(ui.delete(n),n.i(e))}function N(n,e,t,r){if(n&&n.o){if(ui.has(n))return;ui.add(n),He.c.push(()=>{ui.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}const xo={duration:0};function Ld(n,e,t){const r={direction:"in"};let i=e(n,t,r),s=!1,o,a,l=0;function c(){o&&or(n,o)}function u(){const{delay:f=0,duration:d=300,easing:p=Yt,tick:g=D,css:_}=i||xo;_&&(o=sr(n,0,1,d,f,p,_,l++)),g(0,1);const m=br()+f,T=m+d;a&&a.abort(),s=!0,Oe(()=>$t(n,!0,"start")),a=Cr(v=>{if(s){if(v>=T)return g(1,0),$t(n,!0,"end"),c(),s=!1;if(v>=m){const V=p((v-m)/d);g(V,1-V)}}return s})}let h=!1;return{start(){h||(h=!0,or(n),Vt(i)?(i=i(r),Uo().then(u)):u())},invalidate(){h=!1},end(){s&&(c(),s=!1)}}}function Fd(n,e,t){const r={direction:"out"};let i=e(n,t,r),s=!0,o;const a=He;a.r+=1;function l(){const{delay:c=0,duration:u=300,easing:h=Yt,tick:f=D,css:d}=i||xo;d&&(o=sr(n,1,0,u,c,h,d));const p=br()+c,g=p+u;Oe(()=>$t(n,!1,"start")),Cr(_=>{if(s){if(_>=g)return f(0,1),$t(n,!1,"end"),--a.r||De(a.c),!1;if(_>=p){const m=h((_-p)/u);f(1-m,m)}}return s})}return Vt(i)?Uo().then(()=>{i=i(r),l()}):l(),{end(c){c&&i.tick&&i.tick(1,0),s&&(o&&or(n,o),s=!1)}}}function xe(n,e,t,r){const i={direction:"both"};let s=e(n,t,i),o=r?0:1,a=null,l=null,c=null;function u(){c&&or(n,c)}function h(d,p){const g=d.b-o;return p*=Math.abs(g),{a:o,b:d.b,d:g,duration:p,start:d.start,end:d.start+p,group:d.group}}function f(d){const{delay:p=0,duration:g=300,easing:_=Yt,tick:m=D,css:T}=s||xo,v={start:br()+p,b:d};d||(v.group=He,He.r+=1),a||l?l=v:(T&&(u(),c=sr(n,o,d,g,p,_,T)),d&&m(0,1),a=h(v,g),Oe(()=>$t(n,d,"start")),Cr(V=>{if(l&&V>l.start&&(a=h(l,g),l=null,$t(n,a.b,"start"),T&&(u(),c=sr(n,o,a.b,a.duration,0,_,s.css))),a){if(V>=a.end)m(o=a.b,1-o),$t(n,a.b,"end"),l||(a.b?u():--a.group.r||De(a.group.c)),a=null;else if(V>=a.start){const z=V-a.start;o=a.a+a.d*_(z/a.duration),m(o,1-o)}}return!!(a||l)}))}return{run(d){Vt(s)?Uo().then(()=>{s=s(i),f(d)}):f(d)},end(){u(),a=l=null}}}function Ti(n,e){const t=e.token={};function r(i,s,o,a){if(e.token!==t)return;e.resolved=a;let l=e.ctx;o!==void 0&&(l=l.slice(),l[o]=a);const c=i&&(e.current=i)(l);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,f)=>{f!==s&&h&&(qe(),N(h,1,1,()=>{e.blocks[f]===h&&(e.blocks[f]=null)}),je())}):e.block.d(1),c.c(),P(c,1),c.m(e.mount(),e.anchor),u=!0),e.block=c,e.blocks&&(e.blocks[s]=c),u&&Fo()}if(dd(n)){const i=Zt();if(n.then(s=>{rt(i),r(e.then,1,e.value,s),rt(null)},s=>{if(rt(i),r(e.catch,2,e.error,s),rt(null),!e.hasCatch)throw s}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,n),!0;e.resolved=n}}function tu(n,e,t){const r=e.slice(),{resolved:i}=n;n.current===n.then&&(r[n.value]=i),n.current===n.catch&&(r[n.error]=i),n.block.p(r,t)}function Ud(n,e){N(n,1,1,()=>{e.delete(n.key)})}function xd(n,e){n.f(),Ud(n,e)}function Bd(n,e,t,r,i,s,o,a,l,c,u,h){let f=n.length,d=s.length,p=f;const g={};for(;p--;)g[n[p].key]=p;const _=[],m=new Map,T=new Map,v=[];for(p=d;p--;){const A=h(i,s,p),G=t(A);let R=o.get(G);R?r&&v.push(()=>R.p(A,e)):(R=c(G,A),R.c()),m.set(G,_[p]=R),G in g&&T.set(G,Math.abs(p-g[G]))}const V=new Set,z=new Set;function q(A){P(A,1),A.m(a,u),o.set(A.key,A),u=A.first,d--}for(;f&&d;){const A=_[d-1],G=n[f-1],R=A.key,b=G.key;A===G?(u=A.first,f--,d--):m.has(b)?!o.has(R)||V.has(R)?q(A):z.has(b)?f--:T.get(R)>T.get(b)?(z.add(R),q(A)):(V.add(b),f--):(l(G,o),f--)}for(;f--;){const A=n[f];m.has(A.key)||l(A,o)}for(;d;)q(_[d-1]);return De(v),_}function $d(n,e){const t={},r={},i={$$scope:1};let s=n.length;for(;s--;){const o=n[s],a=e[s];if(a){for(const l in o)l in a||(r[l]=1);for(const l in a)i[l]||(t[l]=a[l],i[l]=1);n[s]=a}else for(const l in o)i[l]=1}for(const o in r)o in t||(t[o]=void 0);return t}function qd(n){return typeof n=="object"&&n!==null?n:{}}function Zs(n,e,t){const r=n.$$.props[e];r!==void 0&&(n.$$.bound[r]=t,t(n.$$.ctx[r]))}function ee(n){n&&n.c()}function Y(n,e,t,r){const{fragment:i,after_update:s}=n.$$;i&&i.m(e,t),r||Oe(()=>{const o=n.$$.on_mount.map(jc).filter(Vt);n.$$.on_destroy?n.$$.on_destroy.push(...o):De(o),n.$$.on_mount=[]}),s.forEach(Oe)}function Z(n,e){const t=n.$$;t.fragment!==null&&(Md(t.after_update),De(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function jd(n,e){n.$$.dirty[0]===-1&&(cn.push(n),eu(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Ve(n,e,t,r,i,s,o,a=[-1]){const l=ar;rt(n);const c=n.$$={fragment:null,ctx:[],props:s,update:D,not_equal:i,bound:Xa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Xa(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(h,f,...d)=>{const p=d.length?d[0]:f;return c.ctx&&i(c.ctx[h],c.ctx[h]=p)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](p),u&&jd(n,h)),f}):[],c.update(),u=!0,De(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const h=wd(e.target);c.fragment&&c.fragment.l(h),h.forEach(O)}else c.fragment&&c.fragment.c();e.intro&&P(n.$$.fragment),Y(n,e.target,e.anchor,e.customElement),Fo()}rt(l)}class Ne{$destroy(){Z(this,1),this.$destroy=D}$on(e,t){if(!Vt(t))return D;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!pd(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},zd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ru={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),r.push(t[u],t[h],t[f],t[d])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(nu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):zd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new Hd;const f=s<<2|a>>4;if(r.push(f),c!==64){const d=a<<4&240|c>>2;if(r.push(d),h!==64){const p=c<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Hd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kd=function(n){const e=nu(n);return ru.encodeByteArray(e,!0)},Ii=function(n){return Kd(n).replace(/\./g,"")},iu=function(n){try{return ru.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=()=>Wd().__FIREBASE_DEFAULTS__,Qd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Xd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&iu(n[1]);return e&&JSON.parse(e)},Bo=()=>{try{return Gd()||Qd()||Xd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},su=n=>{var e,t;return(t=(e=Bo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Jd=n=>{const e=su(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ou=()=>{var n;return(n=Bo())===null||n===void 0?void 0:n.config},au=n=>{var e;return(e=Bo())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Ii(JSON.stringify(t)),Ii(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ep(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function tp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function np(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rp(){const n=Ce();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ip(){try{return typeof indexedDB=="object"}catch{return!1}}function sp(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op="FirebaseError";class gt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=op,Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pr.prototype.create)}}class Pr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ap(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new gt(i,a,r)}}function ap(n,e){return n.replace(lp,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const lp=/\{\$([^}]+)}/g;function cp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function wi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(nl(s)&&nl(o)){if(!wi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function nl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function up(n,e){const t=new hp(n,e);return t.subscribe.bind(t)}class hp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");fp(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ss),i.error===void 0&&(i.error=Ss),i.complete===void 0&&(i.complete=Ss);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ss(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(n){return n&&n._delegate?n._delegate:n}class Kt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Yd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mp(e))try{this.getOrInitializeService({instanceIdentifier:Mt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Mt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mt){return this.instances.has(e)}getOptions(e=Mt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(!!r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mt){return this.component?this.component.multipleInstances?e:Mt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pp(n){return n===Mt?void 0:n}function mp(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new dp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const _p={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},yp=X.INFO,vp={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},Ep=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=vp[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $o{constructor(e){this.name=e,this._logLevel=yp,this._logHandler=Ep,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_p[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Tp=(n,e)=>e.some(t=>n instanceof t);let rl,il;function Ip(){return rl||(rl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wp(){return il||(il=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lu=new WeakMap,eo=new WeakMap,cu=new WeakMap,Ps=new WeakMap,qo=new WeakMap;function Ap(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(wt(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&lu.set(t,n)}).catch(()=>{}),qo.set(e,n),e}function Rp(n){if(eo.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});eo.set(n,e)}let to={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return eo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||cu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return wt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function bp(n){to=n(to)}function Cp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ks(this),e,...t);return cu.set(r,e.sort?e.sort():[e]),wt(r)}:wp().includes(n)?function(...e){return n.apply(ks(this),e),wt(lu.get(this))}:function(...e){return wt(n.apply(ks(this),e))}}function Sp(n){return typeof n=="function"?Cp(n):(n instanceof IDBTransaction&&Rp(n),Tp(n,Ip())?new Proxy(n,to):n)}function wt(n){if(n instanceof IDBRequest)return Ap(n);if(Ps.has(n))return Ps.get(n);const e=Sp(n);return e!==n&&(Ps.set(n,e),qo.set(e,n)),e}const ks=n=>qo.get(n);function Pp(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=wt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(wt(o.result),l.oldVersion,l.newVersion,wt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const kp=["get","getKey","getAll","getAllKeys","count"],Dp=["put","add","delete","clear"],Ds=new Map;function sl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ds.get(e))return Ds.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Dp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||kp.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return Ds.set(e,s),s}bp(n=>({...n,get:(e,t,r)=>sl(e,t)||n.get(e,t,r),has:(e,t)=>!!sl(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Np(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Np(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const no="@firebase/app",ol="0.9.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new $o("@firebase/app"),Op="@firebase/app-compat",Mp="@firebase/analytics-compat",Lp="@firebase/analytics",Fp="@firebase/app-check-compat",Up="@firebase/app-check",xp="@firebase/auth",Bp="@firebase/auth-compat",$p="@firebase/database",qp="@firebase/database-compat",jp="@firebase/functions",zp="@firebase/functions-compat",Hp="@firebase/installations",Kp="@firebase/installations-compat",Wp="@firebase/messaging",Gp="@firebase/messaging-compat",Qp="@firebase/performance",Xp="@firebase/performance-compat",Jp="@firebase/remote-config",Yp="@firebase/remote-config-compat",Zp="@firebase/storage",em="@firebase/storage-compat",tm="@firebase/firestore",nm="@firebase/firestore-compat",rm="firebase",im="10.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro="[DEFAULT]",sm={[no]:"fire-core",[Op]:"fire-core-compat",[Lp]:"fire-analytics",[Mp]:"fire-analytics-compat",[Up]:"fire-app-check",[Fp]:"fire-app-check-compat",[xp]:"fire-auth",[Bp]:"fire-auth-compat",[$p]:"fire-rtdb",[qp]:"fire-rtdb-compat",[jp]:"fire-fn",[zp]:"fire-fn-compat",[Hp]:"fire-iid",[Kp]:"fire-iid-compat",[Wp]:"fire-fcm",[Gp]:"fire-fcm-compat",[Qp]:"fire-perf",[Xp]:"fire-perf-compat",[Jp]:"fire-rc",[Yp]:"fire-rc-compat",[Zp]:"fire-gcs",[em]:"fire-gcs-compat",[tm]:"fire-fst",[nm]:"fire-fst-compat","fire-js":"fire-js",[rm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=new Map,io=new Map;function om(n,e){try{n.container.addComponent(e)}catch(t){Wt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function wn(n){const e=n.name;if(io.has(e))return Wt.debug(`There were multiple attempts to register component ${e}.`),!1;io.set(e,n);for(const t of Ai.values())om(t,n);return!0}function jo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},At=new Pr("app","Firebase",am);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=im;function uu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ro,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw At.create("bad-app-name",{appName:String(i)});if(t||(t=ou()),!t)throw At.create("no-options");const s=Ai.get(i);if(s){if(wi(t,s.options)&&wi(r,s.config))return s;throw At.create("duplicate-app",{appName:i})}const o=new gp(i);for(const l of io.values())o.addComponent(l);const a=new lm(t,r,o);return Ai.set(i,a),a}function hu(n=ro){const e=Ai.get(n);if(!e&&n===ro&&ou())return uu();if(!e)throw At.create("no-app",{appName:n});return e}function Rt(n,e,t){var r;let i=(r=sm[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wt.warn(a.join(" "));return}wn(new Kt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm="firebase-heartbeat-database",um=1,lr="firebase-heartbeat-store";let Vs=null;function fu(){return Vs||(Vs=Pp(cm,um,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(lr)}}}).catch(n=>{throw At.create("idb-open",{originalErrorMessage:n.message})})),Vs}async function hm(n){try{return await(await fu()).transaction(lr).objectStore(lr).get(du(n))}catch(e){if(e instanceof gt)Wt.warn(e.message);else{const t=At.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wt.warn(t.message)}}}async function al(n,e){try{const r=(await fu()).transaction(lr,"readwrite");await r.objectStore(lr).put(e,du(n)),await r.done}catch(t){if(t instanceof gt)Wt.warn(t.message);else{const r=At.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Wt.warn(r.message)}}}function du(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=1024,dm=30*24*60*60*1e3;class pm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new gm(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ll();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=dm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ll(),{heartbeatsToSend:t,unsentEntries:r}=mm(this._heartbeatsCache.heartbeats),i=Ii(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ll(){return new Date().toISOString().substring(0,10)}function mm(n,e=fm){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),cl(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),cl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class gm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ip()?sp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await hm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return al(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return al(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function cl(n){return Ii(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(n){wn(new Kt("platform-logger",e=>new Vp(e),"PRIVATE")),wn(new Kt("heartbeat",e=>new pm(e),"PRIVATE")),Rt(no,ol,n),Rt(no,ol,"esm2017"),Rt("fire-js","")}_m("");var ym="firebase",vm="10.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt(ym,vm,"app");function zo(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function pu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Em=pu,mu=new Pr("auth","Firebase",pu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=new $o("@firebase/auth");function Tm(n,...e){Ri.logLevel<=X.WARN&&Ri.warn(`Auth (${xn}): ${n}`,...e)}function hi(n,...e){Ri.logLevel<=X.ERROR&&Ri.error(`Auth (${xn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(n,...e){throw Ho(n,...e)}function Ge(n,...e){return Ho(n,...e)}function gu(n,e,t){const r=Object.assign(Object.assign({},Em()),{[e]:t});return new Pr("auth","Firebase",r).create(e,{appName:n.name})}function Im(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ye(n,"argument-error"),gu(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ho(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return mu.create(n,...e)}function $(n,e,...t){if(!n)throw Ho(e,...t)}function it(n){const e="INTERNAL ASSERTION FAILED: "+n;throw hi(e),new Error(e)}function ut(n,e){n||it(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function wm(){return ul()==="http:"||ul()==="https:"}function ul(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wm()||tp()||"connection"in navigator)?navigator.onLine:!0}function Rm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,t){this.shortDelay=e,this.longDelay=t,ut(t>e,"Short delay should be less than long delay!"),this.isMobile=ep()||np()}get(){return Am()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(n,e){ut(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;it("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;it("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;it("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=new Dr(3e4,6e4);function yu(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Vr(n,e,t,r,i={}){return vu(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=kr(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),_u.fetch()(Eu(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function vu(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},bm),e);try{const i=new Pm(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Jr(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jr(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Jr(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Jr(n,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw gu(n,u,c);Ye(n,u)}}catch(i){if(i instanceof gt)throw i;Ye(n,"network-request-failed",{message:String(i)})}}async function Sm(n,e,t,r,i={}){const s=await Vr(n,e,t,r,i);return"mfaPendingCredential"in s&&Ye(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Eu(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Ko(n.config,i):`${n.config.apiScheme}://${i}`}class Pm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),Cm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Ge(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function km(n,e){return Vr(n,"POST","/v1/accounts:delete",e)}async function Dm(n,e){return Vr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vm(n,e=!1){const t=ke(n),r=await t.getIdToken(e),i=Wo(r);$(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Zn(Ns(i.auth_time)),issuedAtTime:Zn(Ns(i.iat)),expirationTime:Zn(Ns(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ns(n){return Number(n)*1e3}function Wo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return hi("JWT malformed, contained fewer than 3 sections"),null;try{const i=iu(t);return i?JSON.parse(i):(hi("Failed to decode base64 JWT payload"),null)}catch(i){return hi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Nm(n){const e=Wo(n);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof gt&&Om(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Om({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zn(this.lastLoginAt),this.creationTime=Zn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(n){var e;const t=n.auth,r=await n.getIdToken(),i=await cr(n,Dm(t,{idToken:r}));$(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Um(s.providerUserInfo):[],a=Fm(n.providerData,o),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Tu(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function Lm(n){const e=ke(n);await bi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Fm(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Um(n){return n.map(e=>{var{providerId:t}=e,r=zo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xm(n,e){const t=await vu(n,{},async()=>{const r=kr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Eu(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",_u.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await xm(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new ur;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ur,this.toJSON())}_performRefresh(){return it("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(n,e){$(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class qt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=zo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Mm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Tu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await cr(this,this.stsTokenManager.getToken(this.auth,e));return $(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Vm(this,e)}reload(){return Lm(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new qt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await bi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await cr(this,km(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,l,c,u;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,f=(i=t.email)!==null&&i!==void 0?i:void 0,d=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,g=(a=t.tenantId)!==null&&a!==void 0?a:void 0,_=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,m=(c=t.createdAt)!==null&&c!==void 0?c:void 0,T=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:v,emailVerified:V,isAnonymous:z,providerData:q,stsTokenManager:A}=t;$(v&&A,e,"internal-error");const G=ur.fromJSON(this.name,A);$(typeof v=="string",e,"internal-error"),_t(h,e.name),_t(f,e.name),$(typeof V=="boolean",e,"internal-error"),$(typeof z=="boolean",e,"internal-error"),_t(d,e.name),_t(p,e.name),_t(g,e.name),_t(_,e.name),_t(m,e.name),_t(T,e.name);const R=new qt({uid:v,auth:e,email:f,emailVerified:V,displayName:h,isAnonymous:z,photoURL:p,phoneNumber:d,tenantId:g,stsTokenManager:G,createdAt:m,lastLoginAt:T});return q&&Array.isArray(q)&&(R.providerData=q.map(b=>Object.assign({},b))),_&&(R._redirectEventId=_),R}static async _fromIdTokenResponse(e,t,r=!1){const i=new ur;i.updateFromServerResponse(t);const s=new qt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await bi(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=new Map;function st(n){ut(n instanceof Function,"Expected a class definition");let e=hl.get(n);return e?(ut(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,hl.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Iu.type="NONE";const fl=Iu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(n,e,t){return`firebase:${n}:${e}:${t}`}class gn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=fi(this.userKey,i.apiKey,s),this.fullPersistenceKey=fi("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new gn(st(fl),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||st(fl);const o=fi(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const h=qt._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new gn(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new gn(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ru(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cu(e))return"Blackberry";if(Su(e))return"Webos";if(Go(e))return"Safari";if((e.includes("chrome/")||Au(e))&&!e.includes("edge/"))return"Chrome";if(bu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wu(n=Ce()){return/firefox\//i.test(n)}function Go(n=Ce()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Au(n=Ce()){return/crios\//i.test(n)}function Ru(n=Ce()){return/iemobile/i.test(n)}function bu(n=Ce()){return/android/i.test(n)}function Cu(n=Ce()){return/blackberry/i.test(n)}function Su(n=Ce()){return/webos/i.test(n)}function Hi(n=Ce()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Bm(n=Ce()){var e;return Hi(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $m(){return rp()&&document.documentMode===10}function Pu(n=Ce()){return Hi(n)||bu(n)||Su(n)||Cu(n)||/windows phone/i.test(n)||Ru(n)}function qm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(n,e=[]){let t;switch(n){case"Browser":t=dl(Ce());break;case"Worker":t=`${dl(Ce())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${xn}/${r}`}async function Du(n,e){return Vr(n,"GET","/v2/recaptchaConfig",yu(n,e))}function pl(n){return n!==void 0&&n.enterprise!==void 0}class Vu{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Nu(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Ge("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",jm().appendChild(r)})}function zm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Hm="https://www.google.com/recaptcha/enterprise.js?render=",Km="recaptcha-enterprise",Wm="NO_RECAPTCHA";class Gm{constructor(e){this.type=Km,this.auth=Nr(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Du(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Vu(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;pl(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Wm)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&pl(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Nu(Hm+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ml(this),this.idTokenSubscription=new ml(this),this.beforeStateQueue=new Qm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=st(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await gn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await bi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Rm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ke(e):null;return t&&$(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(st(e))})}async initializeRecaptchaConfig(){const e=await Du(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Vu(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Gm(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&st(e)||this._popupRedirectResolver;$(t,this,"argument-error"),this.redirectPersistenceManager=await gn.create(this,[st(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ku(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Tm(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Nr(n){return ke(n)}class ml{constructor(e){this.auth=e,this.observer=null,this.addObserver=up(t=>this.observer=t)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(n,e){const t=jo(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(wi(s,e!=null?e:{}))return i;Ye(i,"already-initialized")}return t.initialize({options:e})}function Ym(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(st);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Zm(n,e,t){const r=Nr(n);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=Ou(e),{host:o,port:a}=eg(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||tg()}function Ou(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function eg(n){const e=Ou(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:gl(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:gl(o)}}}function gl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function tg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return it("not implemented")}_getIdTokenResponse(e){return it("not implemented")}_linkToIdToken(e,t){return it("not implemented")}_getReauthenticationResolver(e){return it("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(n,e){return Sm(n,"POST","/v1/accounts:signInWithIdp",yu(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng="http://localhost";class Gt extends Mu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Gt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ye("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=zo(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Gt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return _n(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,_n(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,_n(e,t)}buildRequest(){const e={requestUri:ng,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=kr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends Qo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Or{constructor(){super("facebook.com")}static credential(e){return Gt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";yt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends Or{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Gt._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return nt.credential(t,r)}catch{return null}}}nt.GOOGLE_SIGN_IN_METHOD="google.com";nt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Or{constructor(){super("github.com")}static credential(e){return Gt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.GITHUB_SIGN_IN_METHOD="github.com";vt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Or{constructor(){super("twitter.com")}static credential(e,t){return Gt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Et.credential(t,r)}catch{return null}}}Et.TWITTER_SIGN_IN_METHOD="twitter.com";Et.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await qt._fromIdTokenResponse(e,r,i),o=_l(r);return new An({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=_l(r);return new An({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function _l(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends gt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ci.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ci(e,t,r,i)}}function Lu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ci._fromErrorAndOperation(n,s,e,r):s})}async function rg(n,e,t=!1){const r=await cr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return An._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ig(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await cr(n,Lu(r,i,e,n),t);$(s.idToken,r,"internal-error");const o=Wo(s.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(n.uid===a,r,"user-mismatch"),An._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ye(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sg(n,e,t=!1){const r="signIn",i=await Lu(n,r,e),s=await An._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(n,e){return ke(n).setPersistence(e)}function ag(n,e,t,r){return ke(n).onIdTokenChanged(e,t,r)}function lg(n,e,t){return ke(n).beforeAuthStateChanged(e,t)}const Si="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Si,"1"),this.storage.removeItem(Si),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(){const n=Ce();return Go(n)||Hi(n)}const ug=1e3,hg=10;class Uu extends Fu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=cg()&&qm(),this.fallbackToPolling=Pu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);$m()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,hg):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},ug)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Uu.type="LOCAL";const xu=Uu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu extends Fu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Bu.type="SESSION";const $u=Bu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Ki(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,s)),l=await fg(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ki.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Xo("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return window}function pg(n){Qe().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function mg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function _g(){return qu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju="firebaseLocalStorageDb",yg=1,Pi="firebaseLocalStorage",zu="fbase_key";class Mr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Wi(n,e){return n.transaction([Pi],e?"readwrite":"readonly").objectStore(Pi)}function vg(){const n=indexedDB.deleteDatabase(ju);return new Mr(n).toPromise()}function oo(){const n=indexedDB.open(ju,yg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Pi,{keyPath:zu})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Pi)?e(r):(r.close(),await vg(),e(await oo()))})})}async function yl(n,e,t){const r=Wi(n,!0).put({[zu]:e,value:t});return new Mr(r).toPromise()}async function Eg(n,e){const t=Wi(n,!1).get(e),r=await new Mr(t).toPromise();return r===void 0?null:r.value}function vl(n,e){const t=Wi(n,!0).delete(e);return new Mr(t).toPromise()}const Tg=800,Ig=3;class Hu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await oo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Ig)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ki._getInstance(_g()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await mg(),!this.activeServiceWorker)return;this.sender=new dg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((t=r[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await oo();return await yl(e,Si,"1"),await vl(e,Si),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>yl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Eg(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>vl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Wi(i,!1).getAll();return new Mr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Tg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hu.type="LOCAL";const wg=Hu;new Dr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(n,e){return e?st(e):($(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends Mu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _n(e,this._buildIdpRequest())}_linkToIdToken(e,t){return _n(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return _n(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ag(n){return sg(n.auth,new Jo(n),n.bypassAuthState)}function Rg(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),ig(t,new Jo(n),n.bypassAuthState)}async function bg(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),rg(t,new Jo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ag;case"linkViaPopup":case"linkViaRedirect":return bg;case"reauthViaPopup":case"reauthViaRedirect":return Rg;default:Ye(this.auth,"internal-error")}}resolve(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=new Dr(2e3,1e4);async function Sg(n,e,t){const r=Nr(n);Im(n,e,Qo);const i=Ku(r,t);return new Lt(r,"signInViaPopup",e,i).executeNotNull()}class Lt extends Wu{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Lt.currentPopupAction&&Lt.currentPopupAction.cancel(),Lt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){ut(this.filter.length===1,"Popup operations only handle one event");const e=Xo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Cg.get())};e()}}Lt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="pendingRedirect",di=new Map;class kg extends Wu{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=di.get(this.auth._key());if(!e){try{const r=await Dg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}di.set(this.auth._key(),e)}return this.bypassAuthState||di.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Dg(n,e){const t=Og(e),r=Ng(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Vg(n,e){di.set(n._key(),e)}function Ng(n){return st(n._redirectPersistence)}function Og(n){return fi(Pg,n.config.apiKey,n.name)}async function Mg(n,e,t=!1){const r=Nr(n),i=Ku(r,e),o=await new kg(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=10*60*1e3;class Fg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ug(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Gu(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ge(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Lg&&this.cachedEventUids.clear(),this.cachedEventUids.has(El(e))}saveEventToCache(e){this.cachedEventUids.add(El(e)),this.lastProcessedEventTime=Date.now()}}function El(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Gu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ug(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xg(n,e={}){return Vr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$g=/^https?/;async function qg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await xg(n);for(const t of e)try{if(jg(t))return}catch{}Ye(n,"unauthorized-domain")}function jg(n){const e=so(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!$g.test(t))return!1;if(Bg.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=new Dr(3e4,6e4);function Tl(){const n=Qe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Hg(n){return new Promise((e,t)=>{var r,i,s;function o(){Tl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tl(),t(Ge(n,"network-request-failed"))},timeout:zg.get()})}if(!((i=(r=Qe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Qe().gapi)===null||s===void 0)&&s.load)o();else{const a=zm("iframefcb");return Qe()[a]=()=>{gapi.load?o():t(Ge(n,"network-request-failed"))},Nu(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw pi=null,e})}let pi=null;function Kg(n){return pi=pi||Hg(n),pi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=new Dr(5e3,15e3),Gg="__/auth/iframe",Qg="emulator/auth/iframe",Xg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yg(n){const e=n.config;$(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ko(e,Qg):`https://${n.config.authDomain}/${Gg}`,r={apiKey:e.apiKey,appName:n.name,v:xn},i=Jg.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${kr(r).slice(1)}`}async function Zg(n){const e=await Kg(n),t=Qe().gapi;return $(t,n,"internal-error"),e.open({where:document.body,url:Yg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xg,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ge(n,"network-request-failed"),a=Qe().setTimeout(()=>{s(o)},Wg.get());function l(){Qe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},t_=500,n_=600,r_="_blank",i_="http://localhost";class Il{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function s_(n,e,t,r=t_,i=n_){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},e_),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ce().toLowerCase();t&&(a=Au(c)?r_:t),wu(c)&&(e=e||i_,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[d,p])=>`${f}${d}=${p},`,"");if(Bm(c)&&a!=="_self")return o_(e||"",a),new Il(null);const h=window.open(e||"",a,u);$(h,n,"popup-blocked");try{h.focus()}catch{}return new Il(h)}function o_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="__/auth/handler",l_="emulator/auth/handler",c_=encodeURIComponent("fac");async function wl(n,e,t,r,i,s){$(n.config.authDomain,n,"auth-domain-config-required"),$(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:xn,eventId:i};if(e instanceof Qo){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",cp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof Or){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await n._getAppCheckToken(),c=l?`#${c_}=${encodeURIComponent(l)}`:"";return`${u_(n)}?${kr(a).slice(1)}${c}`}function u_({config:n}){return n.emulator?Ko(n,l_):`https://${n.authDomain}/${a_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="webStorageSupport";class h_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$u,this._completeRedirectFn=Mg,this._overrideRedirectResult=Vg}async _openPopup(e,t,r,i){var s;ut((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await wl(e,t,r,so(),i);return s_(e,o,Xo())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await wl(e,t,r,so(),i);return pg(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(ut(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Zg(e),r=new Fg(e);return t.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Os,{type:Os},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Os];o!==void 0&&t(!!o),Ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=qg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Pu()||Go()||Hi()}}const f_=h_;var Al="@firebase/auth",Rl="1.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function m_(n){wn(new Kt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ku(n)},c=new Xm(r,i,s,l);return Ym(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),wn(new Kt("auth-internal",e=>{const t=Nr(e.getProvider("auth").getImmediate());return(r=>new d_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rt(Al,Rl,p_(n)),Rt(Al,Rl,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=5*60,__=au("authIdTokenMaxAge")||g_;let bl=null;const y_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>__)return;const i=t==null?void 0:t.token;bl!==i&&(bl=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function v_(n=hu()){const e=jo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Jm(n,{popupRedirectResolver:f_,persistence:[wg,xu,$u]}),r=au("authTokenSyncURL");if(r){const s=y_(r);lg(t,s,()=>s(t.currentUser)),ag(t,o=>s(o))}const i=su("auth");return i&&Zm(t,`http://${i}`),t}m_("Browser");var E_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w,Yo=Yo||{},x=E_||self;function Gi(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Lr(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function T_(n){return Object.prototype.hasOwnProperty.call(n,Ms)&&n[Ms]||(n[Ms]=++I_)}var Ms="closure_uid_"+(1e9*Math.random()>>>0),I_=0;function w_(n,e,t){return n.call.apply(n.bind,arguments)}function A_(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function Ae(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ae=w_:Ae=A_,Ae.apply(null,arguments)}function Yr(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function me(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Nt(){this.s=this.s,this.o=this.o}var R_=0;Nt.prototype.s=!1;Nt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),R_!=0)&&T_(this)};Nt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Qu=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Zo(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function Cl(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(Gi(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function Re(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var b_=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{x.addEventListener("test",()=>{},e),x.removeEventListener("test",()=>{},e)}catch{}return n}();function hr(n){return/^[\s\xa0]*$/.test(n)}function Qi(){var n=x.navigator;return n&&(n=n.userAgent)?n:""}function ze(n){return Qi().indexOf(n)!=-1}function ea(n){return ea[" "](n),n}ea[" "]=function(){};function C_(n,e){var t=vy;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var S_=ze("Opera"),Rn=ze("Trident")||ze("MSIE"),Xu=ze("Edge"),ao=Xu||Rn,Ju=ze("Gecko")&&!(Qi().toLowerCase().indexOf("webkit")!=-1&&!ze("Edge"))&&!(ze("Trident")||ze("MSIE"))&&!ze("Edge"),P_=Qi().toLowerCase().indexOf("webkit")!=-1&&!ze("Edge");function Yu(){var n=x.document;return n?n.documentMode:void 0}var lo;e:{var Ls="",Fs=function(){var n=Qi();if(Ju)return/rv:([^\);]+)(\)|;)/.exec(n);if(Xu)return/Edge\/([\d\.]+)/.exec(n);if(Rn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(P_)return/WebKit\/(\S+)/.exec(n);if(S_)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Fs&&(Ls=Fs?Fs[1]:""),Rn){var Us=Yu();if(Us!=null&&Us>parseFloat(Ls)){lo=String(Us);break e}}lo=Ls}var co;if(x.document&&Rn){var Sl=Yu();co=Sl||parseInt(lo,10)||void 0}else co=void 0;var k_=co;function fr(n,e){if(Re.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Ju){e:{try{ea(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:D_[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&fr.$.h.call(this)}}me(fr,Re);var D_={2:"touch",3:"pen",4:"mouse"};fr.prototype.h=function(){fr.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Fr="closure_listenable_"+(1e6*Math.random()|0),V_=0;function N_(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++V_,this.fa=this.ia=!1}function Xi(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function ta(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function O_(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function Zu(n){const e={};for(const t in n)e[t]=n[t];return e}const Pl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function eh(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<Pl.length;s++)t=Pl[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function Ji(n){this.src=n,this.g={},this.h=0}Ji.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=ho(n,e,r,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new N_(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function uo(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=Qu(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Xi(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function ho(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var na="closure_lm_"+(1e6*Math.random()|0),xs={};function th(n,e,t,r,i){if(r&&r.once)return rh(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)th(n,e[s],t,r,i);return null}return t=sa(t),n&&n[Fr]?n.O(e,t,Lr(r)?!!r.capture:!!r,i):nh(n,e,t,!1,r,i)}function nh(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=Lr(i)?!!i.capture:!!i,a=ia(n);if(a||(n[na]=a=new Ji(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=M_(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)b_||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(sh(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function M_(){function n(t){return e.call(n.src,n.listener,t)}const e=L_;return n}function rh(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)rh(n,e[s],t,r,i);return null}return t=sa(t),n&&n[Fr]?n.P(e,t,Lr(r)?!!r.capture:!!r,i):nh(n,e,t,!0,r,i)}function ih(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)ih(n,e[s],t,r,i);else r=Lr(r)?!!r.capture:!!r,t=sa(t),n&&n[Fr]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=ho(s,t,r,i),-1<t&&(Xi(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=ia(n))&&(e=n.g[e.toString()],n=-1,e&&(n=ho(e,t,r,i)),(t=-1<n?e[n]:null)&&ra(t))}function ra(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[Fr])uo(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(sh(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=ia(e))?(uo(t,n),t.h==0&&(t.src=null,e[na]=null)):Xi(n)}}}function sh(n){return n in xs?xs[n]:xs[n]="on"+n}function L_(n,e){if(n.fa)n=!0;else{e=new fr(e,this);var t=n.listener,r=n.la||n.src;n.ia&&ra(n),n=t.call(r,e)}return n}function ia(n){return n=n[na],n instanceof Ji?n:null}var Bs="__closure_events_fn_"+(1e9*Math.random()>>>0);function sa(n){return typeof n=="function"?n:(n[Bs]||(n[Bs]=function(e){return n.handleEvent(e)}),n[Bs])}function de(){Nt.call(this),this.i=new Ji(this),this.S=this,this.J=null}me(de,Nt);de.prototype[Fr]=!0;de.prototype.removeEventListener=function(n,e,t,r){ih(this,n,e,t,r)};function ye(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new Re(e,n);else if(e instanceof Re)e.target=e.target||n;else{var i=e;e=new Re(r,n),eh(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=Zr(o,r,!0,e)&&i}if(o=e.g=n,i=Zr(o,r,!0,e)&&i,i=Zr(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=Zr(o,r,!1,e)&&i}de.prototype.N=function(){if(de.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)Xi(t[r]);delete n.g[e],n.h--}}this.J=null};de.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};de.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function Zr(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,l=o.la||o.src;o.ia&&uo(n.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var oa=x.JSON.stringify;class F_{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function U_(){var n=aa;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class x_{constructor(){this.h=this.g=null}add(e,t){const r=oh.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var oh=new F_(()=>new B_,n=>n.reset());class B_{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function $_(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function q_(n){x.setTimeout(()=>{throw n},0)}let dr,pr=!1,aa=new x_,ah=()=>{const n=x.Promise.resolve(void 0);dr=()=>{n.then(j_)}};var j_=()=>{for(var n;n=U_();){try{n.h.call(n.g)}catch(t){q_(t)}var e=oh;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}pr=!1};function Yi(n,e){de.call(this),this.h=n||1,this.g=e||x,this.j=Ae(this.qb,this),this.l=Date.now()}me(Yi,de);w=Yi.prototype;w.ga=!1;w.T=null;w.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ye(this,"tick"),this.ga&&(la(this),this.start()))}};w.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function la(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}w.N=function(){Yi.$.N.call(this),la(this),delete this.g};function ca(n,e,t){if(typeof n=="function")t&&(n=Ae(n,t));else if(n&&typeof n.handleEvent=="function")n=Ae(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:x.setTimeout(n,e||0)}function lh(n){n.g=ca(()=>{n.g=null,n.i&&(n.i=!1,lh(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class z_ extends Nt{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:lh(this)}N(){super.N(),this.g&&(x.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mr(n){Nt.call(this),this.h=n,this.g={}}me(mr,Nt);var kl=[];function ch(n,e,t,r){Array.isArray(t)||(t&&(kl[0]=t.toString()),t=kl);for(var i=0;i<t.length;i++){var s=th(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function uh(n){ta(n.g,function(e,t){this.g.hasOwnProperty(t)&&ra(e)},n),n.g={}}mr.prototype.N=function(){mr.$.N.call(this),uh(this)};mr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Zi(){this.g=!0}Zi.prototype.Ea=function(){this.g=!1};function H_(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function K_(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function fn(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+G_(n,t)+(r?" "+r:"")})}function W_(n,e){n.info(function(){return"TIMEOUT: "+e})}Zi.prototype.info=function(){};function G_(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return oa(t)}catch{return e}}var en={},Dl=null;function es(){return Dl=Dl||new de}en.Ta="serverreachability";function hh(n){Re.call(this,en.Ta,n)}me(hh,Re);function gr(n){const e=es();ye(e,new hh(e))}en.STAT_EVENT="statevent";function fh(n,e){Re.call(this,en.STAT_EVENT,n),this.stat=e}me(fh,Re);function Pe(n){const e=es();ye(e,new fh(e,n))}en.Ua="timingevent";function dh(n,e){Re.call(this,en.Ua,n),this.size=e}me(dh,Re);function Ur(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return x.setTimeout(function(){n()},e)}var ts={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ph={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ua(){}ua.prototype.h=null;function Vl(n){return n.h||(n.h=n.i())}function mh(){}var xr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ha(){Re.call(this,"d")}me(ha,Re);function fa(){Re.call(this,"c")}me(fa,Re);var fo;function ns(){}me(ns,ua);ns.prototype.g=function(){return new XMLHttpRequest};ns.prototype.i=function(){return{}};fo=new ns;function Br(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new mr(this),this.P=Q_,n=ao?125:void 0,this.V=new Yi(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new gh}function gh(){this.i=null,this.g="",this.h=!1}var Q_=45e3,po={},ki={};w=Br.prototype;w.setTimeout=function(n){this.P=n};function mo(n,e,t){n.L=1,n.v=is(ht(e)),n.s=t,n.S=!0,_h(n,null)}function _h(n,e){n.G=Date.now(),$r(n),n.A=ht(n.v);var t=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),Rh(t.i,"t",r),n.C=0,t=n.l.J,n.h=new gh,n.g=Kh(n.l,t?e:null,!n.s),0<n.O&&(n.M=new z_(Ae(n.Pa,n,n.g),n.O)),ch(n.U,n.g,"readystatechange",n.nb),e=n.I?Zu(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),gr(),H_(n.j,n.u,n.A,n.m,n.W,n.s)}w.nb=function(n){n=n.target;const e=this.M;e&&Ke(n)==3?e.l():this.Pa(n)};w.Pa=function(n){try{if(n==this.g)e:{const u=Ke(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||ao||this.g&&(this.h.h||this.g.ja()||Ll(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?gr(3):gr(2)),rs(this);var t=this.g.da();this.ca=t;t:if(yh(this)){var r=Ll(this.g);n="";var i=r.length,s=Ke(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ft(this),er(this);var o="";break t}this.h.i=new x.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,K_(this.j,this.u,this.A,this.m,this.W,u,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!hr(a)){var c=a;break t}}c=null}if(t=c)fn(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,go(this,t);else{this.i=!1,this.o=3,Pe(12),Ft(this),er(this);break e}}this.S?(vh(this,u,o),ao&&this.i&&u==3&&(ch(this.U,this.V,"tick",this.mb),this.V.start())):(fn(this.j,this.m,o,null),go(this,o)),u==4&&Ft(this),this.i&&!this.J&&(u==4?qh(this.l,this):(this.i=!1,$r(this)))}else gy(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Pe(12)):(this.o=0,Pe(13)),Ft(this),er(this)}}}catch{}finally{}};function yh(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function vh(n,e,t){let r=!0,i;for(;!n.J&&n.C<t.length;)if(i=X_(n,t),i==ki){e==4&&(n.o=4,Pe(14),r=!1),fn(n.j,n.m,null,"[Incomplete Response]");break}else if(i==po){n.o=4,Pe(15),fn(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else fn(n.j,n.m,i,null),go(n,i);yh(n)&&i!=ki&&i!=po&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Pe(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),ya(e),e.M=!0,Pe(11))):(fn(n.j,n.m,t,"[Invalid Chunked Response]"),Ft(n),er(n))}w.mb=function(){if(this.g){var n=Ke(this.g),e=this.g.ja();this.C<e.length&&(rs(this),vh(this,n,e),this.i&&n!=4&&$r(this))}};function X_(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?ki:(t=Number(e.substring(t,r)),isNaN(t)?po:(r+=1,r+t>e.length?ki:(e=e.slice(r,r+t),n.C=r+t,e)))}w.cancel=function(){this.J=!0,Ft(this)};function $r(n){n.Y=Date.now()+n.P,Eh(n,n.P)}function Eh(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Ur(Ae(n.lb,n),e)}function rs(n){n.B&&(x.clearTimeout(n.B),n.B=null)}w.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(W_(this.j,this.A),this.L!=2&&(gr(),Pe(17)),Ft(this),this.o=2,er(this)):Eh(this,this.Y-n)};function er(n){n.l.H==0||n.J||qh(n.l,n)}function Ft(n){rs(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,la(n.V),uh(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function go(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||_o(t.i,n))){if(!n.K&&_o(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)Ni(t),as(t);else break e;_a(t),Pe(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=Ur(Ae(t.ib,t),6e3));if(1>=Sh(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else Ut(t,11)}else if((n.K||t.g==n)&&Ni(t),!hr(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(t.V=c[0],c=c[1],t.H==2)if(c[0]=="c"){t.K=c[1],t.pa=c[2];const u=c[3];u!=null&&(t.ra=u,t.l.info("VER="+t.ra));const h=c[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const d=n.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.i;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(da(s,s.h),s.h=null))}if(r.F){const g=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(r.Da=g,ne(r.I,r.F,g))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=Hh(r,r.J?r.pa:null,r.Y),o.K){Ph(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(rs(a),$r(a)),r.g=o}else Bh(r);0<t.j.length&&ls(t)}else c[0]!="stop"&&c[0]!="close"||Ut(t,7);else t.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ut(t,7):ga(t):c[0]!="noop"&&t.h&&t.h.Aa(c),t.A=0)}}gr(4)}catch{}}function J_(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Gi(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function Y_(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Gi(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function Th(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Gi(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=Y_(n),r=J_(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var Ih=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Z_(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function jt(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof jt){this.h=n.h,Di(this,n.j),this.s=n.s,this.g=n.g,Vi(this,n.m),this.l=n.l;var e=n.i,t=new _r;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Nl(this,t),this.o=n.o}else n&&(e=String(n).match(Ih))?(this.h=!1,Di(this,e[1]||"",!0),this.s=Gn(e[2]||""),this.g=Gn(e[3]||"",!0),Vi(this,e[4]),this.l=Gn(e[5]||"",!0),Nl(this,e[6]||"",!0),this.o=Gn(e[7]||"")):(this.h=!1,this.i=new _r(null,this.h))}jt.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Qn(e,Ol,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Qn(e,Ol,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(Qn(t,t.charAt(0)=="/"?ny:ty,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",Qn(t,iy)),n.join("")};function ht(n){return new jt(n)}function Di(n,e,t){n.j=t?Gn(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Vi(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Nl(n,e,t){e instanceof _r?(n.i=e,sy(n.i,n.h)):(t||(e=Qn(e,ry)),n.i=new _r(e,n.h))}function ne(n,e,t){n.i.set(e,t)}function is(n){return ne(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Gn(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Qn(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,ey),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function ey(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Ol=/[#\/\?@]/g,ty=/[#\?:]/g,ny=/[#\?]/g,ry=/[#\?@]/g,iy=/#/g;function _r(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Ot(n){n.g||(n.g=new Map,n.h=0,n.i&&Z_(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}w=_r.prototype;w.add=function(n,e){Ot(this),this.i=null,n=Bn(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function wh(n,e){Ot(n),e=Bn(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Ah(n,e){return Ot(n),e=Bn(n,e),n.g.has(e)}w.forEach=function(n,e){Ot(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};w.ta=function(){Ot(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};w.Z=function(n){Ot(this);let e=[];if(typeof n=="string")Ah(this,n)&&(e=e.concat(this.g.get(Bn(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};w.set=function(n,e){return Ot(this),this.i=null,n=Bn(this,n),Ah(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};w.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function Rh(n,e,t){wh(n,e),0<t.length&&(n.i=null,n.g.set(Bn(n,e),Zo(t)),n.h+=t.length)}w.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Bn(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function sy(n,e){e&&!n.j&&(Ot(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(wh(this,r),Rh(this,i,t))},n)),n.j=e}var oy=class{constructor(n,e){this.g=n,this.map=e}};function bh(n){this.l=n||ay,x.PerformanceNavigationTiming?(n=x.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(x.g&&x.g.Ka&&x.g.Ka()&&x.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ay=10;function Ch(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Sh(n){return n.h?1:n.g?n.g.size:0}function _o(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function da(n,e){n.g?n.g.add(e):n.h=e}function Ph(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}bh.prototype.cancel=function(){if(this.i=kh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function kh(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return Zo(n.i)}var ly=class{stringify(n){return x.JSON.stringify(n,void 0)}parse(n){return x.JSON.parse(n,void 0)}};function cy(){this.g=new ly}function uy(n,e,t){const r=t||"";try{Th(n,function(i,s){let o=i;Lr(i)&&(o=oa(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function hy(n,e){const t=new Zi;if(x.Image){const r=new Image;r.onload=Yr(ei,t,r,"TestLoadImage: loaded",!0,e),r.onerror=Yr(ei,t,r,"TestLoadImage: error",!1,e),r.onabort=Yr(ei,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=Yr(ei,t,r,"TestLoadImage: timeout",!1,e),x.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function ei(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function qr(n){this.l=n.fc||null,this.j=n.ob||!1}me(qr,ua);qr.prototype.g=function(){return new ss(this.l,this.j)};qr.prototype.i=function(n){return function(){return n}}({});function ss(n,e){de.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=pa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}me(ss,de);var pa=0;w=ss.prototype;w.open=function(n,e){if(this.readyState!=pa)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,yr(this)};w.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||x).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};w.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,jr(this)),this.readyState=pa};w.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,yr(this)),this.g&&(this.readyState=3,yr(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof x.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Dh(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Dh(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}w.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?jr(this):yr(this),this.readyState==3&&Dh(this)}};w.Za=function(n){this.g&&(this.response=this.responseText=n,jr(this))};w.Ya=function(n){this.g&&(this.response=n,jr(this))};w.ka=function(){this.g&&jr(this)};function jr(n){n.readyState=4,n.l=null,n.j=null,n.A=null,yr(n)}w.setRequestHeader=function(n,e){this.v.append(n,e)};w.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};w.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function yr(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(ss.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var fy=x.JSON.parse;function ae(n){de.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Vh,this.L=this.M=!1}me(ae,de);var Vh="",dy=/^https?$/i,py=["POST","PUT"];w=ae.prototype;w.Oa=function(n){this.M=n};w.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():fo.g(),this.C=this.u?Vl(this.u):Vl(fo),this.g.onreadystatechange=Ae(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){Ml(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=x.FormData&&n instanceof x.FormData,!(0<=Qu(py,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Mh(this),0<this.B&&((this.L=my(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ae(this.ua,this)):this.A=ca(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Ml(this,s)}};function my(n){return Rn&&typeof n.timeout=="number"&&n.ontimeout!==void 0}w.ua=function(){typeof Yo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ye(this,"timeout"),this.abort(8))};function Ml(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Nh(n),os(n)}function Nh(n){n.F||(n.F=!0,ye(n,"complete"),ye(n,"error"))}w.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,ye(this,"complete"),ye(this,"abort"),os(this))};w.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),os(this,!0)),ae.$.N.call(this)};w.La=function(){this.s||(this.G||this.v||this.l?Oh(this):this.kb())};w.kb=function(){Oh(this)};function Oh(n){if(n.h&&typeof Yo<"u"&&(!n.C[1]||Ke(n)!=4||n.da()!=2)){if(n.v&&Ke(n)==4)ca(n.La,0,n);else if(ye(n,"readystatechange"),Ke(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var i=String(n.I).match(Ih)[1]||null;!i&&x.self&&x.self.location&&(i=x.self.location.protocol.slice(0,-1)),r=!dy.test(i?i.toLowerCase():"")}t=r}if(t)ye(n,"complete"),ye(n,"success");else{n.m=6;try{var s=2<Ke(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",Nh(n)}}finally{os(n)}}}}function os(n,e){if(n.g){Mh(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||ye(n,"ready");try{t.onreadystatechange=r}catch{}}}function Mh(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(x.clearTimeout(n.A),n.A=null)}w.isActive=function(){return!!this.g};function Ke(n){return n.g?n.g.readyState:0}w.da=function(){try{return 2<Ke(this)?this.g.status:-1}catch{return-1}};w.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};w.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),fy(e)}};function Ll(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Vh:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function gy(n){const e={};n=(n.g&&2<=Ke(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(hr(n[r]))continue;var t=$_(n[r]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const s=e[i]||[];e[i]=s,s.push(t)}O_(e,function(r){return r.join(", ")})}w.Ia=function(){return this.m};w.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Lh(n){let e="";return ta(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function ma(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=Lh(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):ne(n,e,t))}function Kn(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Fh(n){this.Ga=0,this.j=[],this.l=new Zi,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Kn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Kn("baseRetryDelayMs",5e3,n),this.hb=Kn("retryDelaySeedMs",1e4,n),this.eb=Kn("forwardChannelMaxRetries",2,n),this.xa=Kn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new bh(n&&n.concurrentRequestLimit),this.Ja=new cy,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}w=Fh.prototype;w.ra=8;w.H=1;function ga(n){if(Uh(n),n.H==3){var e=n.W++,t=ht(n.I);if(ne(t,"SID",n.K),ne(t,"RID",e),ne(t,"TYPE","terminate"),zr(n,t),e=new Br(n,n.l,e),e.L=2,e.v=is(ht(t)),t=!1,x.navigator&&x.navigator.sendBeacon)try{t=x.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&x.Image&&(new Image().src=e.v,t=!0),t||(e.g=Kh(e.l,null),e.g.ha(e.v)),e.G=Date.now(),$r(e)}zh(n)}function as(n){n.g&&(ya(n),n.g.cancel(),n.g=null)}function Uh(n){as(n),n.u&&(x.clearTimeout(n.u),n.u=null),Ni(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&x.clearTimeout(n.m),n.m=null)}function ls(n){if(!Ch(n.i)&&!n.m){n.m=!0;var e=n.Na;dr||ah(),pr||(dr(),pr=!0),aa.add(e,n),n.C=0}}function _y(n,e){return Sh(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Ur(Ae(n.Na,n,e),jh(n,n.C)),n.C++,!0)}w.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Br(this,this.l,n);let s=this.s;if(this.U&&(s?(s=Zu(s),eh(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=xh(this,i,e),t=ht(this.I),ne(t,"RID",n),ne(t,"CVER",22),this.F&&ne(t,"X-HTTP-Session-Id",this.F),zr(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(Lh(s)))+"&"+e:this.o&&ma(t,this.o,s)),da(this.i,i),this.bb&&ne(t,"TYPE","init"),this.P?(ne(t,"$req",e),ne(t,"SID","null"),i.aa=!0,mo(i,t,null)):mo(i,t,e),this.H=2}}else this.H==3&&(n?Fl(this,n):this.j.length==0||Ch(this.i)||Fl(this))};function Fl(n,e){var t;e?t=e.m:t=n.W++;const r=ht(n.I);ne(r,"SID",n.K),ne(r,"RID",t),ne(r,"AID",n.V),zr(n,r),n.o&&n.s&&ma(r,n.o,n.s),t=new Br(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=xh(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),da(n.i,t),mo(t,r,e)}function zr(n,e){n.na&&ta(n.na,function(t,r){ne(e,r,t)}),n.h&&Th({},function(t,r){ne(e,r,t)})}function xh(n,e,t){t=Math.min(n.j.length,t);var r=n.h?Ae(n.h.Va,n.h,n):null;e:{var i=n.j;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<t;l++){let c=i[l].g;const u=i[l].map;if(c-=s,0>c)s=Math.max(0,i[l].g-100),a=!1;else try{uy(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function Bh(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;dr||ah(),pr||(dr(),pr=!0),aa.add(e,n),n.A=0}}function _a(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Ur(Ae(n.Ma,n),jh(n,n.A)),n.A++,!0)}w.Ma=function(){if(this.u=null,$h(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Ur(Ae(this.jb,this),n)}};w.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Pe(10),as(this),$h(this))};function ya(n){n.B!=null&&(x.clearTimeout(n.B),n.B=null)}function $h(n){n.g=new Br(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=ht(n.wa);ne(e,"RID","rpc"),ne(e,"SID",n.K),ne(e,"AID",n.V),ne(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&ne(e,"TO",n.qa),ne(e,"TYPE","xmlhttp"),zr(n,e),n.o&&n.s&&ma(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=is(ht(e)),t.s=null,t.S=!0,_h(t,n)}w.ib=function(){this.v!=null&&(this.v=null,as(this),_a(this),Pe(19))};function Ni(n){n.v!=null&&(x.clearTimeout(n.v),n.v=null)}function qh(n,e){var t=null;if(n.g==e){Ni(n),ya(n),n.g=null;var r=2}else if(_o(n.i,e))t=e.F,Ph(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var i=n.C;r=es(),ye(r,new dh(r,t)),ls(n)}else Bh(n);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&_y(n,e)||r==2&&_a(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:Ut(n,5);break;case 4:Ut(n,10);break;case 3:Ut(n,6);break;default:Ut(n,2)}}}function jh(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function Ut(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=Ae(n.pb,n);t||(t=new jt("//www.google.com/images/cleardot.gif"),x.location&&x.location.protocol=="http"||Di(t,"https"),is(t)),hy(t.toString(),r)}else Pe(2);n.H=0,n.h&&n.h.za(e),zh(n),Uh(n)}w.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Pe(2)):(this.l.info("Failed to ping google.com"),Pe(1))};function zh(n){if(n.H=0,n.ma=[],n.h){const e=kh(n.i);(e.length!=0||n.j.length!=0)&&(Cl(n.ma,e),Cl(n.ma,n.j),n.i.i.length=0,Zo(n.j),n.j.length=0),n.h.ya()}}function Hh(n,e,t){var r=t instanceof jt?ht(t):new jt(t);if(r.g!="")e&&(r.g=e+"."+r.g),Vi(r,r.m);else{var i=x.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new jt(null);r&&Di(s,r),e&&(s.g=e),i&&Vi(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&ne(r,t,e),ne(r,"VER",n.ra),zr(n,r),r}function Kh(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new ae(new qr({ob:!0})):new ae(n.va),e.Oa(n.J),e}w.isActive=function(){return!!this.h&&this.h.isActive(this)};function Wh(){}w=Wh.prototype;w.Ba=function(){};w.Aa=function(){};w.za=function(){};w.ya=function(){};w.isActive=function(){return!0};w.Va=function(){};function Oi(){if(Rn&&!(10<=Number(k_)))throw Error("Environmental error: no available transport.")}Oi.prototype.g=function(n,e){return new Fe(n,e)};function Fe(n,e){de.call(this),this.g=new Fh(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!hr(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!hr(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new $n(this)}me(Fe,de);Fe.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;Pe(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=Hh(n,null,n.Y),ls(n)};Fe.prototype.close=function(){ga(this.g)};Fe.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=oa(n),n=t);e.j.push(new oy(e.fb++,n)),e.H==3&&ls(e)};Fe.prototype.N=function(){this.g.h=null,delete this.j,ga(this.g),delete this.g,Fe.$.N.call(this)};function Gh(n){ha.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}me(Gh,ha);function Qh(){fa.call(this),this.status=1}me(Qh,fa);function $n(n){this.g=n}me($n,Wh);$n.prototype.Ba=function(){ye(this.g,"a")};$n.prototype.Aa=function(n){ye(this.g,new Gh(n))};$n.prototype.za=function(n){ye(this.g,new Qh)};$n.prototype.ya=function(){ye(this.g,"b")};function yy(){this.blockSize=-1}function $e(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}me($e,yy);$e.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function $s(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],o=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}$e.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)$s(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){$s(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){$s(this,r),i=0;break}}this.h=i,this.i+=e};$e.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function te(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var vy={};function va(n){return-128<=n&&128>n?C_(n,function(e){return new te([e|0],0>e?-1:0)}):new te([n|0],0>n?-1:0)}function We(n){if(isNaN(n)||!isFinite(n))return yn;if(0>n)return _e(We(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=yo;return new te(e,0)}function Xh(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return _e(Xh(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=We(Math.pow(e,8)),r=yn,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),e);8>s?(s=We(Math.pow(e,s)),r=r.R(s).add(We(o))):(r=r.R(t),r=r.add(We(o)))}return r}var yo=4294967296,yn=va(0),vo=va(1),Ul=va(16777216);w=te.prototype;w.ea=function(){if(Ue(this))return-_e(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:yo+r)*e,e*=yo}return n};w.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(ot(this))return"0";if(Ue(this))return"-"+_e(this).toString(n);for(var e=We(Math.pow(n,6)),t=this,r="";;){var i=Li(t,e).g;t=Mi(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,ot(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};w.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function ot(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function Ue(n){return n.h==-1}w.X=function(n){return n=Mi(this,n),Ue(n)?-1:ot(n)?0:1};function _e(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new te(t,~n.h).add(vo)}w.abs=function(){return Ue(this)?_e(this):this};w.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,t[i]=o<<16|s}return new te(t,t[t.length-1]&-2147483648?-1:0)};function Mi(n,e){return n.add(_e(e))}w.R=function(n){if(ot(this)||ot(n))return yn;if(Ue(this))return Ue(n)?_e(this).R(_e(n)):_e(_e(this).R(n));if(Ue(n))return _e(this.R(_e(n)));if(0>this.X(Ul)&&0>n.X(Ul))return We(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,l=n.D(i)&65535;t[2*r+2*i]+=o*l,ti(t,2*r+2*i),t[2*r+2*i+1]+=s*l,ti(t,2*r+2*i+1),t[2*r+2*i+1]+=o*a,ti(t,2*r+2*i+1),t[2*r+2*i+2]+=s*a,ti(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new te(t,0)};function ti(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function Wn(n,e){this.g=n,this.h=e}function Li(n,e){if(ot(e))throw Error("division by zero");if(ot(n))return new Wn(yn,yn);if(Ue(n))return e=Li(_e(n),e),new Wn(_e(e.g),_e(e.h));if(Ue(e))return e=Li(n,_e(e)),new Wn(_e(e.g),e.h);if(30<n.g.length){if(Ue(n)||Ue(e))throw Error("slowDivide_ only works with positive integers.");for(var t=vo,r=e;0>=r.X(n);)t=xl(t),r=xl(r);var i=on(t,1),s=on(r,1);for(r=on(r,2),t=on(t,2);!ot(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(t),s=o),r=on(r,1),t=on(t,1)}return e=Mi(n,i.R(e)),new Wn(i,e)}for(i=yn;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=We(t),o=s.R(e);Ue(o)||0<o.X(n);)t-=r,s=We(t),o=s.R(e);ot(s)&&(s=vo),i=i.add(s),n=Mi(n,o)}return new Wn(i,n)}w.gb=function(n){return Li(this,n).h};w.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new te(t,this.h&n.h)};w.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new te(t,this.h|n.h)};w.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new te(t,this.h^n.h)};function xl(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new te(t,n.h)}function on(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new te(i,n.h)}Oi.prototype.createWebChannel=Oi.prototype.g;Fe.prototype.send=Fe.prototype.u;Fe.prototype.open=Fe.prototype.m;Fe.prototype.close=Fe.prototype.close;ts.NO_ERROR=0;ts.TIMEOUT=8;ts.HTTP_ERROR=6;ph.COMPLETE="complete";mh.EventType=xr;xr.OPEN="a";xr.CLOSE="b";xr.ERROR="c";xr.MESSAGE="d";de.prototype.listen=de.prototype.O;ae.prototype.listenOnce=ae.prototype.P;ae.prototype.getLastError=ae.prototype.Sa;ae.prototype.getLastErrorCode=ae.prototype.Ia;ae.prototype.getStatus=ae.prototype.da;ae.prototype.getResponseJson=ae.prototype.Wa;ae.prototype.getResponseText=ae.prototype.ja;ae.prototype.send=ae.prototype.ha;ae.prototype.setWithCredentials=ae.prototype.Oa;$e.prototype.digest=$e.prototype.l;$e.prototype.reset=$e.prototype.reset;$e.prototype.update=$e.prototype.j;te.prototype.add=te.prototype.add;te.prototype.multiply=te.prototype.R;te.prototype.modulo=te.prototype.gb;te.prototype.compare=te.prototype.X;te.prototype.toNumber=te.prototype.ea;te.prototype.toString=te.prototype.toString;te.prototype.getBits=te.prototype.D;te.fromNumber=We;te.fromString=Xh;var Ey=function(){return new Oi},Ty=function(){return es()},qs=ts,Iy=ph,wy=en,Bl={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ay=qr,ni=mh,Ry=ae,by=$e,vn=te;const $l="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ee.UNAUTHENTICATED=new Ee(null),Ee.GOOGLE_CREDENTIALS=new Ee("google-credentials-uid"),Ee.FIRST_PARTY=new Ee("first-party-uid"),Ee.MOCK_USER=new Ee("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qn="10.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new $o("@firebase/firestore");function ql(){return Qt.logLevel}function k(n,...e){if(Qt.logLevel<=X.DEBUG){const t=e.map(Ea);Qt.debug(`Firestore (${qn}): ${n}`,...t)}}function ft(n,...e){if(Qt.logLevel<=X.ERROR){const t=e.map(Ea);Qt.error(`Firestore (${qn}): ${n}`,...t)}}function bn(n,...e){if(Qt.logLevel<=X.WARN){const t=e.map(Ea);Qt.warn(`Firestore (${qn}): ${n}`,...t)}}function Ea(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(n="Unexpected state"){const e=`FIRESTORE (${qn}) INTERNAL ASSERTION FAILED: `+n;throw ft(e),new Error(e)}function re(n,e){n||U()}function j(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends gt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Cy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ee.UNAUTHENTICATED))}shutdown(){}}class Sy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Py{constructor(e){this.t=e,this.currentUser=Ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let s=new bt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new bt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new bt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(re(typeof r.accessToken=="string"),new Jh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new Ee(e)}}class ky{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ee.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Dy{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new ky(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ny{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,k("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(re(typeof t.token=="string"),this.R=t.token,new Vy(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Oy(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function J(n,e){return n<e?-1:n>e?1:0}function Cn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new L(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new he(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.timestamp=e}static fromTimestamp(e){return new B(e)}static min(){return new B(new he(0,0))}static max(){return new B(new he(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,t,r){t===void 0?t=0:t>e.length&&U(),r===void 0?r=e.length-t:r>e.length-t&&U(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return vr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof vr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class se extends vr{construct(e,t,r){return new se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new se(t)}static emptyPath(){return new se([])}}const My=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ie extends vr{construct(e,t,r){return new Ie(e,t,r)}static isValidIdentifier(e){return My.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ie.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ie(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new L(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new L(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ie(t)}static emptyPath(){return new Ie([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(se.fromString(e))}static fromName(e){return new F(se.fromString(e).popFirst(5))}static empty(){return new F(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new se(e.slice()))}}function Ly(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=B.fromTimestamp(r===1e9?new he(t+1,0):new he(t,r));return new Pt(i,F.empty(),e)}function Fy(n){return new Pt(n.readTime,n.key,-1)}class Pt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Pt(B.min(),F.empty(),-1)}static max(){return new Pt(B.max(),F.empty(),-1)}}function Uy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=F.comparator(n.documentKey,e.documentKey),t!==0?t:J(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class By{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(n){if(n.code!==E.FAILED_PRECONDITION||n.message!==xy)throw n;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new I((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof I?t:I.resolve(t)}catch(t){return I.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):I.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):I.reject(t)}static resolve(e){return new I((t,r)=>{t(e)})}static reject(e){return new I((t,r)=>{r(e)})}static waitFor(e){return new I((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},l=>r(l))}),o=!0,s===i&&t()})}static or(e){let t=I.resolve(!1);for(const r of e)t=t.next(i=>i?I.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new I((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;t(e[c]).next(u=>{o[c]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,t){return new I((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function Kr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Ta.ae=-1;function cs(n){return n==null}function Fi(n){return n===0&&1/n==-1/0}function $y(n){return typeof n=="number"&&Number.isInteger(n)&&!Fi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function tn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Zh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t){this.comparator=e,this.root=t||ge.EMPTY}insert(e,t){return new ie(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ge.BLACK,null,null))}remove(e){return new ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ge.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ri(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ri(this.root,e,this.comparator,!1)}getReverseIterator(){return new ri(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ri(this.root,e,this.comparator,!0)}}class ri{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ge{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r!=null?r:ge.RED,this.left=i!=null?i:ge.EMPTY,this.right=s!=null?s:ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new ge(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ge.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}ge.EMPTY=null,ge.RED=!0,ge.BLACK=!1;ge.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(e,t,r,i,s){return this}insert(e,t,r){return new ge(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.comparator=e,this.data=new ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new zl(this.data.getIterator())}getIteratorFrom(e){return new zl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof be)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new be(this.comparator);return t.data=e,t}}class zl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.fields=e,e.sort(Ie.comparator)}static empty(){return new Be([])}unionWith(e){let t=new be(Ie.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Be(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Cn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ef("Invalid base64 string: "+s):s}}(e);return new Se(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Se(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Se.EMPTY_BYTE_STRING=new Se("");const qy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kt(n){if(re(!!n),typeof n=="string"){let e=0;const t=qy.exec(n);if(re(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ce(n.seconds),nanos:ce(n.nanos)}}function ce(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Xt(n){return typeof n=="string"?Se.fromBase64String(n):Se.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function wa(n){const e=n.mapValue.fields.__previous_value__;return Ia(e)?wa(e):e}function Er(n){const e=kt(n.mapValue.fields.__local_write_time__.timestampValue);return new he(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,t,r,i,s,o,a,l,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Tr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Tr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Tr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Jt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ia(n)?4:zy(n)?9007199254740991:10:U()}function Ze(n,e){if(n===e)return!0;const t=Jt(n);if(t!==Jt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Er(n).isEqual(Er(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=kt(i.timestampValue),a=kt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Xt(i.bytesValue).isEqual(Xt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ce(i.geoPointValue.latitude)===ce(s.geoPointValue.latitude)&&ce(i.geoPointValue.longitude)===ce(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ce(i.integerValue)===ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ce(i.doubleValue),a=ce(s.doubleValue);return o===a?Fi(o)===Fi(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return Cn(n.arrayValue.values||[],e.arrayValue.values||[],Ze);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(jl(o)!==jl(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ze(o[l],a[l])))return!1;return!0}(n,e);default:return U()}}function Ir(n,e){return(n.values||[]).find(t=>Ze(t,e))!==void 0}function Sn(n,e){if(n===e)return 0;const t=Jt(n),r=Jt(e);if(t!==r)return J(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return J(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ce(s.integerValue||s.doubleValue),l=ce(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,e);case 3:return Hl(n.timestampValue,e.timestampValue);case 4:return Hl(Er(n),Er(e));case 5:return J(n.stringValue,e.stringValue);case 6:return function(s,o){const a=Xt(s),l=Xt(o);return a.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=J(a[c],l[c]);if(u!==0)return u}return J(a.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=J(ce(s.latitude),ce(o.latitude));return a!==0?a:J(ce(s.longitude),ce(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Sn(a[c],l[c]);if(u)return u}return J(a.length,l.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===ii.mapValue&&o===ii.mapValue)return 0;if(s===ii.mapValue)return 1;if(o===ii.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const f=J(l[h],u[h]);if(f!==0)return f;const d=Sn(a[l[h]],c[u[h]]);if(d!==0)return d}return J(l.length,u.length)}(n.mapValue,e.mapValue);default:throw U()}}function Hl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return J(n,e);const t=kt(n),r=kt(e),i=J(t.seconds,r.seconds);return i!==0?i:J(t.nanos,r.nanos)}function Pn(n){return Eo(n)}function Eo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=kt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Xt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return F.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Eo(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Eo(t.fields[o])}`;return i+"}"}(n.mapValue):U()}function To(n){return!!n&&"integerValue"in n}function Aa(n){return!!n&&"arrayValue"in n}function Kl(n){return!!n&&"nullValue"in n}function Wl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function mi(n){return!!n&&"mapValue"in n}function tr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return tn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=tr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=tr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function zy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.value=e}static empty(){return new Me({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!mi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tr(t)}setAll(e){let t=Ie.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=tr(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());mi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ze(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];mi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){tn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Me(tr(this.value))}}function tf(n){const e=[];return tn(n.fields,(t,r)=>{const i=new Ie([t]);if(mi(r)){const s=tf(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Be(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Te(e,0,B.min(),B.min(),B.min(),Me.empty(),0)}static newFoundDocument(e,t,r,i){return new Te(e,1,t,B.min(),r,i,0)}static newNoDocument(e,t){return new Te(e,2,t,B.min(),B.min(),Me.empty(),0)}static newUnknownDocument(e,t){return new Te(e,3,t,B.min(),B.min(),Me.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Me.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Me.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Te(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,t){this.position=e,this.inclusive=t}}function Gl(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=F.comparator(F.fromName(o.referenceValue),t.key):r=Sn(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ql(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ze(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Hy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{}class ue extends nf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Wy(e,t,r):t==="array-contains"?new Xy(e,r):t==="in"?new Jy(e,r):t==="not-in"?new Yy(e,r):t==="array-contains-any"?new Zy(e,r):new ue(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Gy(e,r):new Qy(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Sn(t,this.value)):t!==null&&Jt(this.value)===Jt(t)&&this.matchesComparison(Sn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class et extends nf{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new et(e,t)}matches(e){return rf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(t=>t.isInequality());return e!==null?e.field:null}le(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function rf(n){return n.op==="and"}function sf(n){return Ky(n)&&rf(n)}function Ky(n){for(const e of n.filters)if(e instanceof et)return!1;return!0}function Io(n){if(n instanceof ue)return n.field.canonicalString()+n.op.toString()+Pn(n.value);if(sf(n))return n.filters.map(e=>Io(e)).join(",");{const e=n.filters.map(t=>Io(t)).join(",");return`${n.op}(${e})`}}function of(n,e){return n instanceof ue?function(r,i){return i instanceof ue&&r.op===i.op&&r.field.isEqual(i.field)&&Ze(r.value,i.value)}(n,e):n instanceof et?function(r,i){return i instanceof et&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&of(o,i.filters[a]),!0):!1}(n,e):void U()}function af(n){return n instanceof ue?function(t){return`${t.field.canonicalString()} ${t.op} ${Pn(t.value)}`}(n):n instanceof et?function(t){return t.op.toString()+" {"+t.getFilters().map(af).join(" ,")+"}"}(n):"Filter"}class Wy extends ue{constructor(e,t,r){super(e,t,r),this.key=F.fromName(r.referenceValue)}matches(e){const t=F.comparator(e.key,this.key);return this.matchesComparison(t)}}class Gy extends ue{constructor(e,t){super(e,"in",t),this.keys=lf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Qy extends ue{constructor(e,t){super(e,"not-in",t),this.keys=lf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function lf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>F.fromName(r.referenceValue))}class Xy extends ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Aa(t)&&Ir(t.arrayValue,this.value)}}class Jy extends ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ir(this.value.arrayValue,t)}}class Yy extends ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ir(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ir(this.value.arrayValue,t)}}class Zy extends ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Aa(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ir(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Xl(n,e=null,t=[],r=[],i=null,s=null,o=null){return new ev(n,e,t,r,i,s,o)}function Ra(n){const e=j(n);if(e.he===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Io(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),cs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Pn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Pn(r)).join(",")),e.he=t}return e.he}function ba(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Hy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!of(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ql(n.startAt,e.startAt)&&Ql(n.endAt,e.endAt)}function wo(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function tv(n,e,t,r,i,s,o,a){return new us(n,e,t,r,i,s,o,a)}function hs(n){return new us(n)}function Jl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function nv(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function rv(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function iv(n){return n.collectionGroup!==null}function En(n){const e=j(n);if(e.Pe===null){e.Pe=[];const t=rv(e),r=nv(e);if(t!==null&&r===null)t.isKeyField()||e.Pe.push(new nr(t)),e.Pe.push(new nr(Ie.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new nr(Ie.keyField(),s))}}}return e.Pe}function dt(n){const e=j(n);if(!e.Ie)if(e.limitType==="F")e.Ie=Xl(e.path,e.collectionGroup,En(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of En(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new nr(s.field,o))}const r=e.endAt?new Ui(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ui(e.startAt.position,e.startAt.inclusive):null;e.Ie=Xl(e.path,e.collectionGroup,t,e.filters,e.limit,r,i)}return e.Ie}function Ao(n,e,t){return new us(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function fs(n,e){return ba(dt(n),dt(e))&&n.limitType===e.limitType}function cf(n){return`${Ra(dt(n))}|lt:${n.limitType}`}function Ro(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>af(i)).join(", ")}]`),cs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Pn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Pn(i)).join(",")),`Target(${r})`}(dt(n))}; limitType=${n.limitType})`}function ds(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):F.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of En(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=Gl(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,En(r),i)||r.endAt&&!function(o,a,l){const c=Gl(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,En(r),i))}(n,e)}function sv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function uf(n){return(e,t)=>{let r=!1;for(const i of En(n)){const s=ov(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ov(n,e,t){const r=n.field.isKeyField()?F.comparator(e.key,t.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?Sn(l,c):U()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){tn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Zh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av=new ie(F.comparator);function pt(){return av}const hf=new ie(F.comparator);function Xn(...n){let e=hf;for(const t of n)e=e.insert(t.key,t);return e}function ff(n){let e=hf;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function xt(){return rr()}function df(){return rr()}function rr(){return new jn(n=>n.toString(),(n,e)=>n.isEqual(e))}const lv=new ie(F.comparator),cv=new be(F.comparator);function H(...n){let e=cv;for(const t of n)e=e.add(t);return e}const uv=new be(J);function hv(){return uv}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fi(e)?"-0":e}}function mf(n){return{integerValue:""+n}}function fv(n,e){return $y(e)?mf(e):pf(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(){this._=void 0}}function dv(n,e,t){return n instanceof xi?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ia(s)&&(s=wa(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof kn?_f(n,e):n instanceof wr?yf(n,e):function(i,s){const o=gf(i,s),a=Yl(o)+Yl(i.Te);return To(o)&&To(i.Te)?mf(a):pf(i.serializer,a)}(n,e)}function pv(n,e,t){return n instanceof kn?_f(n,e):n instanceof wr?yf(n,e):t}function gf(n,e){return n instanceof Bi?function(r){return To(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class xi extends ps{}class kn extends ps{constructor(e){super(),this.elements=e}}function _f(n,e){const t=vf(e);for(const r of n.elements)t.some(i=>Ze(i,r))||t.push(r);return{arrayValue:{values:t}}}class wr extends ps{constructor(e){super(),this.elements=e}}function yf(n,e){let t=vf(e);for(const r of n.elements)t=t.filter(i=>!Ze(i,r));return{arrayValue:{values:t}}}class Bi extends ps{constructor(e,t){super(),this.serializer=e,this.Te=t}}function Yl(n){return ce(n.integerValue||n.doubleValue)}function vf(n){return Aa(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e,t){this.field=e,this.transform=t}}function gv(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof kn&&i instanceof kn||r instanceof wr&&i instanceof wr?Cn(r.elements,i.elements,Ze):r instanceof Bi&&i instanceof Bi?Ze(r.Te,i.Te):r instanceof xi&&i instanceof xi}(n.transform,e.transform)}class _v{constructor(e,t){this.version=e,this.transformResults=t}}class lt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new lt}static exists(e){return new lt(void 0,e)}static updateTime(e){return new lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ms{}function Ef(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new If(n.key,lt.none()):new gs(n.key,n.data,lt.none());{const t=n.data,r=Me.empty();let i=new be(Ie.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new nn(n.key,r,new Be(i.toArray()),lt.none())}}function yv(n,e,t){n instanceof gs?function(i,s,o){const a=i.value.clone(),l=ec(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof nn?function(i,s,o){if(!gi(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=ec(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Tf(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function ir(n,e,t,r){return n instanceof gs?function(s,o,a,l){if(!gi(s.precondition,o))return a;const c=s.value.clone(),u=tc(s.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof nn?function(s,o,a,l){if(!gi(s.precondition,o))return a;const c=tc(s.fieldTransforms,l,o),u=o.data;return u.setAll(Tf(s)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,e,t,r):function(s,o,a){return gi(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function vv(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=gf(r.transform,i||null);s!=null&&(t===null&&(t=Me.empty()),t.set(r.field,s))}return t||null}function Zl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Cn(r,i,(s,o)=>gv(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class gs extends ms{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class nn extends ms{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Tf(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function ec(n,e,t){const r=new Map;re(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,pv(o,a,t[i]))}return r}function tc(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,dv(s,o,e))}return r}class If extends ms{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ev extends ms{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&yv(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ir(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ir(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=df();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const l=Ef(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),H())}isEqual(e){return this.batchId===e.batchId&&Cn(this.mutations,e.mutations,(t,r)=>Zl(t,r))&&Cn(this.baseMutations,e.baseMutations,(t,r)=>Zl(t,r))}}class Ca{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){re(e.mutations.length===r.length);let i=function(){return lv}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ca(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le,W;function Av(n){switch(n){default:return U();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function wf(n){if(n===void 0)return ft("GRPC error has no .code"),E.UNKNOWN;switch(n){case le.OK:return E.OK;case le.CANCELLED:return E.CANCELLED;case le.UNKNOWN:return E.UNKNOWN;case le.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case le.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case le.INTERNAL:return E.INTERNAL;case le.UNAVAILABLE:return E.UNAVAILABLE;case le.UNAUTHENTICATED:return E.UNAUTHENTICATED;case le.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case le.NOT_FOUND:return E.NOT_FOUND;case le.ALREADY_EXISTS:return E.ALREADY_EXISTS;case le.PERMISSION_DENIED:return E.PERMISSION_DENIED;case le.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case le.ABORTED:return E.ABORTED;case le.OUT_OF_RANGE:return E.OUT_OF_RANGE;case le.UNIMPLEMENTED:return E.UNIMPLEMENTED;case le.DATA_LOSS:return E.DATA_LOSS;default:return U()}}(W=le||(le={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return si}static getOrCreateInstance(){return si===null&&(si=new Sa),si}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let si=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv=new vn([4294967295,4294967295],0);function nc(n){const e=Rv().encode(n),t=new by;return t.update(e),new Uint8Array(t.digest())}function rc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new vn([t,r],0),new vn([i,s],0)]}class Pa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Jn(`Invalid padding: ${t}`);if(r<0)throw new Jn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Jn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Jn(`Invalid padding when bitmap length is 0: ${t}`);this.de=8*e.length-t,this.Ae=vn.fromNumber(this.de)}Re(e,t,r){let i=e.add(t.multiply(vn.fromNumber(r)));return i.compare(bv)===1&&(i=new vn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const t=nc(e),[r,i]=rc(t);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Pa(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const t=nc(e),[r,i]=rc(t);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Jn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Wr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new _s(B.min(),i,new ie(J),pt(),H())}}class Wr{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Wr(r,t,H(),H(),H())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,t,r,i){this.fe=e,this.removedTargetIds=t,this.key=r,this.ge=i}}class Af{constructor(e,t){this.targetId=e,this.pe=t}}class Rf{constructor(e,t,r=Se.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class ic{constructor(){this.ye=0,this.we=oc(),this.Se=Se.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=H(),t=H(),r=H();return this.we.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:U()}}),new Wr(this.Se,this.be,e,t,r)}xe(){this.De=!1,this.we=oc()}Oe(e,t){this.De=!0,this.we=this.we.insert(e,t)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class Cv{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=pt(),this.$e=sc(),this.Ue=new ie(J)}We(e){for(const t of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(t,e.ge):this.ze(t,e.key,e.ge);for(const t of e.removedTargetIds)this.ze(t,e.key,e.ge)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(t);break;case 3:this.Je(t)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Fe(e.resumeToken));break;default:U()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qe.forEach((r,i)=>{this.Je(i)&&t(i)})}Ze(e){var t,r;const i=e.targetId,s=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(wo(a))if(s===0){const l=new F(a.path);this.ze(i,l,Te.newNoDocument(l,B.min()))}else re(s===1);else{const l=this.et(i);if(l!==s){const c=this.tt(e,l);if(c.status!==0){this.Ye(i);const u=c.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,u)}(t=Sa.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(h,f,d,p){var g,_,m,T,v,V;const z={localCacheCount:d,existenceFilterCount:p.count},q=p.unchangedNames;return q&&(z.bloomFilter={applied:h===0,hashCount:(g=q==null?void 0:q.hashCount)!==null&&g!==void 0?g:0,bitmapLength:(T=(m=(_=q==null?void 0:q.bits)===null||_===void 0?void 0:_.bitmap)===null||m===void 0?void 0:m.length)!==null&&T!==void 0?T:0,padding:(V=(v=q==null?void 0:q.bits)===null||v===void 0?void 0:v.padding)!==null&&V!==void 0?V:0},f&&(z.bloomFilter.mightContain=f)),z}(c.status,(r=c.nt)!==null&&r!==void 0?r:null,l,e.pe))}}}}tt(e,t){const{unchangedNames:r,count:i}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,c;try{l=Xt(s).toUint8Array()}catch(h){if(h instanceof ef)return bn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{c=new Pa(l,o,a)}catch(h){return bn(h instanceof Jn?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const f=this.qe.rt();return c.mightContain(`projects/${f.projectId}/databases/${f.database}/documents/${h}`)};return c.de===0?{status:1}:{status:i===t-this.it(e.targetId,u)?0:2,nt:u}}it(e,t){const r=this.qe.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{t(s.path.canonicalString())||(this.ze(e,s,null),i++)}),i}st(e){const t=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&wo(a.target)){const l=new F(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,Te.newNoDocument(l,e))}s.Ce&&(t.set(o,s.Me()),s.xe())}});let r=H();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xe(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const i=new _s(e,t,this.Ue,this.Ke,r);return this.Ke=pt(),this.$e=sc(),this.Ue=new ie(J),i}Ge(e,t){if(!this.Je(e))return;const r=this.ot(e,t.key)?2:0;this.He(e).Oe(t.key,r),this.Ke=this.Ke.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const i=this.He(e);this.ot(e,t)?i.Oe(t,1):i.Ne(t),this.$e=this.$e.insert(t,this._t(t).delete(e)),r&&(this.Ke=this.Ke.insert(t,r))}removeTarget(e){this.Qe.delete(e)}et(e){const t=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let t=this.Qe.get(e);return t||(t=new ic,this.Qe.set(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new be(J),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||k("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.Qe.get(e);return t&&t.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new ic),this.qe.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ot(e,t){return this.qe.getRemoteKeysForTarget(e).has(t)}}function sc(){return new ie(F.comparator)}function oc(){return new ie(F.comparator)}const Sv=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Pv=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),kv=(()=>({and:"AND",or:"OR"}))();class Dv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function bo(n,e){return n.useProto3Json||cs(e)?e:{value:e}}function $i(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Vv(n,e){return $i(n,e.toTimestamp())}function Xe(n){return re(!!n),B.fromTimestamp(function(t){const r=kt(t);return new he(r.seconds,r.nanos)}(n))}function ka(n,e){return function(r){return new se(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function Cf(n){const e=se.fromString(n);return re(Df(e)),e}function Co(n,e){return ka(n.databaseId,e.path)}function js(n,e){const t=Cf(e);if(t.get(1)!==n.databaseId.projectId)throw new L(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new F(Sf(t))}function So(n,e){return ka(n.databaseId,e)}function Nv(n){const e=Cf(n);return e.length===4?se.emptyPath():Sf(e)}function Po(n){return new se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Sf(n){return re(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ac(n,e,t){return{name:Co(n,e),fields:t.value.mapValue.fields}}function Ov(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(re(u===void 0||typeof u=="string"),Se.fromBase64String(u||"")):(re(u===void 0||u instanceof Uint8Array),Se.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?E.UNKNOWN:wf(c.code);return new L(u,c.message||"")}(o);t=new Rf(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=js(n,r.document.name),s=Xe(r.document.updateTime),o=r.document.createTime?Xe(r.document.createTime):B.min(),a=new Me({mapValue:{fields:r.document.fields}}),l=Te.newFoundDocument(i,s,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];t=new _i(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=js(n,r.document),s=r.readTime?Xe(r.readTime):B.min(),o=Te.newNoDocument(i,s),a=r.removedTargetIds||[];t=new _i([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=js(n,r.document),s=r.removedTargetIds||[];t=new _i([],s,i,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new wv(i,s),a=r.targetId;t=new Af(a,o)}}return t}function Mv(n,e){let t;if(e instanceof gs)t={update:ac(n,e.key,e.value)};else if(e instanceof If)t={delete:Co(n,e.key)};else if(e instanceof nn)t={update:ac(n,e.key,e.data),updateMask:zv(e.fieldMask)};else{if(!(e instanceof Ev))return U();t={verify:Co(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof xi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof kn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof wr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Bi)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw U()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Vv(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:U()}(n,e.precondition)),t}function Lv(n,e){return n&&n.length>0?(re(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?Xe(i.updateTime):Xe(s);return o.isEqual(B.min())&&(o=Xe(s)),new _v(o,i.transformResults||[])}(t,e))):[]}function Fv(n,e){return{documents:[So(n,e.path)]}}function Uv(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=So(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=So(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return kf(et.create(l,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:un(h.field),direction:$v(h.dir)}}(c))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=bo(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),t}function xv(n){let e=Nv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){re(r===1);const u=t.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];t.where&&(s=function(h){const f=Pf(h);return f instanceof et&&sf(f)?f.getFilters():[f]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(f=>function(p){return new nr(hn(p.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(f))}(t.orderBy));let a=null;t.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,cs(f)?null:f}(t.limit));let l=null;t.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new Ui(d,f)}(t.startAt));let c=null;return t.endAt&&(c=function(h){const f=!h.before,d=h.values||[];return new Ui(d,f)}(t.endAt)),tv(e,i,o,s,a,"F",l,c)}function Bv(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Pf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=hn(t.unaryFilter.field);return ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=hn(t.unaryFilter.field);return ue.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=hn(t.unaryFilter.field);return ue.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hn(t.unaryFilter.field);return ue.create(o,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(n):n.fieldFilter!==void 0?function(t){return ue.create(hn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return et.create(t.compositeFilter.filters.map(r=>Pf(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return U()}}(t.compositeFilter.op))}(n):U()}function $v(n){return Sv[n]}function qv(n){return Pv[n]}function jv(n){return kv[n]}function un(n){return{fieldPath:n.canonicalString()}}function hn(n){return Ie.fromServerFormat(n.fieldPath)}function kf(n){return n instanceof ue?function(t){if(t.op==="=="){if(Wl(t.value))return{unaryFilter:{field:un(t.field),op:"IS_NAN"}};if(Kl(t.value))return{unaryFilter:{field:un(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Wl(t.value))return{unaryFilter:{field:un(t.field),op:"IS_NOT_NAN"}};if(Kl(t.value))return{unaryFilter:{field:un(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:un(t.field),op:qv(t.op),value:t.value}}}(n):n instanceof et?function(t){const r=t.getFilters().map(i=>kf(i));return r.length===1?r[0]:{compositeFilter:{op:jv(t.op),filters:r}}}(n):U()}function zv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Df(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,t,r,i,s=B.min(),o=B.min(),a=Se.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new It(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e){this.ct=e}}function Kv(n){const e=xv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ao(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(){this.sn=new Gv}addToCollectionParentIndex(e,t){return this.sn.add(t),I.resolve()}getCollectionParents(e,t){return I.resolve(this.sn.getEntries(t))}addFieldIndex(e,t){return I.resolve()}deleteFieldIndex(e,t){return I.resolve()}getDocumentsMatchingTarget(e,t){return I.resolve(null)}getIndexType(e,t){return I.resolve(0)}getFieldIndexes(e,t){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,t){return I.resolve(Pt.min())}getMinOffsetFromCollectionGroup(e,t){return I.resolve(Pt.min())}updateCollectionGroup(e,t,r){return I.resolve()}updateIndexEntries(e,t){return I.resolve()}}class Gv{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new be(se.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new be(se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Dn(0)}static On(){return new Dn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(){this.changes=new jn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Te.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?I.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&ir(r.mutation,i,Be.empty(),he.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,H()).next(()=>r))}getLocalViewOfDocuments(e,t,r=H()){const i=xt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Xn();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=xt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,H()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=pt();const o=rr(),a=function(){return rr()}();return t.forEach((l,c)=>{const u=r.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof nn)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),ir(u.mutation,c,u.mutation.getFieldMask(),he.now())):o.set(c.key,Be.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),t.forEach((c,u)=>{var h;return a.set(c,new Xv(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=rr();let i=new ie((o,a)=>o-a),s=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=t.get(l);if(c===null)return;let u=r.get(l)||Be.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(i.get(a.batchId)||H()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=df();u.forEach(f=>{if(!s.has(f)){const d=Ef(t.get(f),r.get(f));d!==null&&h.set(f,d),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(s){return F.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):iv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):I.resolve(xt());let a=-1,l=s;return o.next(c=>I.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?I.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,H())).next(u=>({batchId:a,changes:ff(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new F(t)).next(r=>{let i=Xn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const i=t.collectionGroup;let s=Xn();return this.indexManager.getCollectionParents(e,i).next(o=>I.forEach(o,a=>{const l=function(u,h){return new us(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(c=>{c.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i))).next(s=>{i.forEach((a,l)=>{const c=l.getKey();s.get(c)===null&&(s=s.insert(c,Te.newInvalidDocument(c)))});let o=Xn();return s.forEach((a,l)=>{const c=i.get(a);c!==void 0&&ir(c.mutation,l,Be.empty(),he.now()),ds(t,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,t){return I.resolve(this.ar.get(t))}saveBundleMetadata(e,t){return this.ar.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Xe(i.createTime)}}(t)),I.resolve()}getNamedQuery(e,t){return I.resolve(this.ur.get(t))}saveNamedQuery(e,t){return this.ur.set(t.name,function(i){return{name:i.name,query:Kv(i.bundledQuery),readTime:Xe(i.readTime)}}(t)),I.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(){this.overlays=new ie(F.comparator),this.cr=new Map}getOverlay(e,t){return I.resolve(this.overlays.get(t))}getOverlays(e,t){const r=xt();return I.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),I.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),I.resolve()}getOverlaysForCollection(e,t,r){const i=xt(),s=t.length+1,o=new F(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return I.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ie((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>r){let u=s.get(c.largestBatchId);u===null&&(u=xt(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=xt(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return I.resolve(a)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Iv(t,r));let s=this.cr.get(t);s===void 0&&(s=H(),this.cr.set(t,s)),this.cr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(){this.lr=new be(fe.hr),this.Pr=new be(fe.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,t){const r=new fe(e,t);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Er(new fe(e,t))}dr(e,t){e.forEach(r=>this.removeReference(r,t))}Ar(e){const t=new F(new se([])),r=new fe(t,e),i=new fe(t,e+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const t=new F(new se([])),r=new fe(t,e),i=new fe(t,e+1);let s=H();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new fe(e,0),r=this.lr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class fe{constructor(e,t){this.key=e,this.mr=t}static hr(e,t){return F.comparator(e.key,t.key)||J(e.mr,t.mr)}static Ir(e,t){return J(e.mr,t.mr)||F.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.gr=1,this.pr=new be(fe.hr)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Tv(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new fe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,t){return I.resolve(this.yr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.wr(r),s=i<0?0:i;return I.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new fe(t,0),i=new fe(t,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),I.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new be(J);return t.forEach(i=>{const s=new fe(i,0),o=new fe(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),I.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;F.isDocumentKey(s)||(s=s.child(""));const o=new fe(new F(s),0);let a=new be(J);return this.pr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.mr)),!0)},o),I.resolve(this.Sr(a))}Sr(e){const t=[];return e.forEach(r=>{const i=this.yr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){re(this.br(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return I.forEach(t.mutations,i=>{const s=new fe(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,t){const r=new fe(t,0),i=this.pr.firstAfterOrEqual(r);return I.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}br(e,t){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const t=this.wr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e){this.Dr=e,this.docs=function(){return new ie(F.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return I.resolve(r?r.document.mutableCopy():Te.newInvalidDocument(t))}getEntries(e,t){let r=pt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Te.newInvalidDocument(i))}),I.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=pt();const o=t.path,a=new F(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Uy(Fy(u),r)<=0||(i.has(u.key)||ds(t,u))&&(s=s.insert(u.key,u.mutableCopy()))}return I.resolve(s)}getAllFromCollectionGroup(e,t,r,i){U()}vr(e,t){return I.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new n0(this)}getSize(e){return I.resolve(this.size)}}class n0 extends Qv{constructor(e){super(),this.sr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.sr.addEntry(e,i)):this.sr.removeEntry(r)}),I.waitFor(t)}getFromCache(e,t){return this.sr.getEntry(e,t)}getAllFromCache(e,t){return this.sr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e){this.persistence=e,this.Cr=new jn(t=>Ra(t),ba),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Da,this.targetCount=0,this.Or=Dn.xn()}forEachTarget(e,t){return this.Cr.forEach((r,i)=>t(i)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Fr&&(this.Fr=t),I.resolve()}Ln(e){this.Cr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Or=new Dn(t),this.highestTargetId=t),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,t){return this.Ln(t),this.targetCount+=1,I.resolve()}updateTargetData(e,t){return this.Ln(t),I.resolve()}removeTargetData(e,t){return this.Cr.delete(t.target),this.Mr.Ar(t.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),I.waitFor(s).next(()=>i)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,t){const r=this.Cr.get(t)||null;return I.resolve(r)}addMatchingKeys(e,t,r){return this.Mr.Tr(t,r),I.resolve()}removeMatchingKeys(e,t,r){this.Mr.dr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),I.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Mr.Ar(t),I.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Mr.Vr(t);return I.resolve(r)}containsKey(e,t){return I.resolve(this.Mr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e,t){this.Nr={},this.overlays={},this.Br=new Ta(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new r0(this),this.indexManager=new Wv,this.remoteDocumentCache=function(i){return new t0(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new Hv(t),this.Qr=new Yv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Zv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Nr[e.toKey()];return r||(r=new e0(t,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,t,r){k("MemoryPersistence","Starting transaction:",e);const i=new s0(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(e,t){return I.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,t)))}}class s0 extends By{constructor(e){super(),this.currentSequenceNumber=e}}class Va{constructor(e){this.persistence=e,this.Wr=new Da,this.Gr=null}static zr(e){return new Va(e)}get jr(){if(this.Gr)return this.Gr;throw U()}addReference(e,t,r){return this.Wr.addReference(r,t),this.jr.delete(r.toString()),I.resolve()}removeReference(e,t,r){return this.Wr.removeReference(r,t),this.jr.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,t){return this.jr.add(t.toString()),I.resolve()}removeTarget(e,t){this.Wr.Ar(t.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Kr(){this.Gr=new Set}$r(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.jr,r=>{const i=F.fromPath(r);return this.Hr(e,i).next(s=>{s||t.removeEntry(i,B.min())})}).next(()=>(this.Gr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hr(e,t).next(r=>{r?this.jr.delete(t.toString()):this.jr.add(t.toString())})}qr(e){return 0}Hr(e,t){return I.or([()=>I.resolve(this.Wr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ur(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Li=r,this.ki=i}static qi(e,t){let r=H(),i=H();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Na(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(){this.Qi=!1}initialize(e,t){this.Ki=e,this.indexManager=t,this.Qi=!0}getDocumentsMatchingQuery(e,t,r,i){return this.$i(e,t).next(s=>s||this.Ui(e,t,i,r)).next(s=>s||this.Wi(e,t))}$i(e,t){if(Jl(t))return I.resolve(null);let r=dt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ao(t,null,"F"),r=dt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=H(...s);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Gi(t,a);return this.zi(t,c,o,l.readTime)?this.$i(e,Ao(t,null,"F")):this.ji(e,c,t,l)}))})))}Ui(e,t,r,i){return Jl(t)||i.isEqual(B.min())?this.Wi(e,t):this.Ki.getDocuments(e,r).next(s=>{const o=this.Gi(t,s);return this.zi(t,o,r,i)?this.Wi(e,t):(ql()<=X.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ro(t)),this.ji(e,o,t,Ly(i,-1)))})}Gi(e,t){let r=new be(uf(e));return t.forEach((i,s)=>{ds(e,s)&&(r=r.add(s))}),r}zi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(e,t){return ql()<=X.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Ro(t)),this.Ki.getDocumentsMatchingQuery(e,t,Pt.min())}ji(e,t,r,i){return this.Ki.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,t,r,i){this.persistence=e,this.Hi=t,this.serializer=i,this.Ji=new ie(J),this.Yi=new jn(s=>Ra(s),ba),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Jv(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function l0(n,e,t,r){return new a0(n,e,t,r)}async function Vf(n,e){const t=j(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.es(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=H();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return t.localDocuments.getDocuments(r,l).next(c=>({ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function c0(n,e){const t=j(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,f=h.keys();let d=I.resolve();return f.forEach(p=>{d=d.next(()=>u.getEntry(l,p)).next(g=>{const _=c.docVersions.get(p);re(_!==null),g.version.compareTo(_)<0&&(h.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),u.addEntry(g)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=H();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Nf(n){const e=j(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.kr.getLastRemoteSnapshotVersion(t))}function u0(n,e){const t=j(n),r=e.snapshotVersion;let i=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Xi.newChangeBuffer({trackRemovals:!0});i=t.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const f=i.get(h);if(!f)return;a.push(t.kr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>t.kr.addMatchingKeys(s,u.addedDocuments,h)));let d=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(Se.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),i=i.insert(h,d),function(g,_,m){return g.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(f,d,u)&&a.push(t.kr.updateTargetData(s,d))});let l=pt(),c=H();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(h0(s,o,e.documentUpdates).next(u=>{l=u.ns,c=u.rs})),!r.isEqual(B.min())){const u=t.kr.getLastRemoteSnapshotVersion(s).next(h=>t.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return I.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(t.Ji=i,s))}function h0(n,e,t){let r=H(),i=H();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=pt();return t.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(B.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):k("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ns:o,rs:i}})}function f0(n,e){const t=j(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function d0(n,e){const t=j(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.kr.getTargetData(r,e).next(s=>s?(i=s,I.resolve(i)):t.kr.allocateTargetId(r).next(o=>(i=new It(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(r.targetId,r),t.Yi.set(e,r.targetId)),r})}async function ko(n,e,t){const r=j(n),i=r.Ji.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Kr(o))throw o;k("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function lc(n,e,t){const r=j(n);let i=B.min(),s=H();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,c,u){const h=j(l),f=h.Yi.get(u);return f!==void 0?I.resolve(h.Ji.get(f)):h.kr.getTargetData(c,u)}(r,o,dt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,t?i:B.min(),t?s:H())).next(a=>(p0(r,sv(e),a),{documents:a,ss:s})))}function p0(n,e,t){let r=n.Zi.get(e)||B.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Zi.set(e,r)}class cc{constructor(){this.activeTargetIds=hv()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class m0{constructor(){this.Hs=new cc,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,t,r){this.Js[e]=t}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new cc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{Ys(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oi=null;function zs(){return oi===null?oi=function(){return 268435456+Math.round(2147483648*Math.random())}():oi++,"0x"+oi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve="WebChannelConnection";class v0 extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http";this.To=r+"://"+t.host,this.Eo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get Ao(){return!1}Ro(t,r,i,s,o){const a=zs(),l=this.Vo(t,r);k("RestConnection",`Sending RPC '${t}' ${a}:`,l,i);const c={};return this.mo(c,s,o),this.fo(t,l,c,i).then(u=>(k("RestConnection",`Received RPC '${t}' ${a}: `,u),u),u=>{throw bn("RestConnection",`RPC '${t}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}po(t,r,i,s,o,a){return this.Ro(t,r,i,s,o)}mo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}Vo(t,r){const i=_0[t];return`${this.To}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}fo(e,t,r,i){const s=zs();return new Promise((o,a)=>{const l=new Ry;l.setWithCredentials(!0),l.listenOnce(Iy.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case qs.NO_ERROR:const u=l.getResponseJson();k(ve,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case qs.TIMEOUT:k(ve,`RPC '${e}' ${s} timed out`),a(new L(E.DEADLINE_EXCEEDED,"Request time out"));break;case qs.HTTP_ERROR:const h=l.getStatus();if(k(ve,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(_){const m=_.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(m)>=0?m:E.UNKNOWN}(d.status);a(new L(p,d.message))}else a(new L(E.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new L(E.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{k(ve,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);k(ve,`RPC '${e}' ${s} sending request:`,i),l.send(t,"POST",c,r,15)})}yo(e,t,r){const i=zs(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ey(),a=Ty(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new Ay({})),this.mo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const u=s.join("");k(ve,`Creating RPC '${e}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let f=!1,d=!1;const p=new y0({so:_=>{d?k(ve,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(f||(k(ve,`Opening RPC '${e}' stream ${i} transport.`),h.open(),f=!0),k(ve,`RPC '${e}' stream ${i} sending:`,_),h.send(_))},oo:()=>h.close()}),g=(_,m,T)=>{_.listen(m,v=>{try{T(v)}catch(V){setTimeout(()=>{throw V},0)}})};return g(h,ni.EventType.OPEN,()=>{d||k(ve,`RPC '${e}' stream ${i} transport opened.`)}),g(h,ni.EventType.CLOSE,()=>{d||(d=!0,k(ve,`RPC '${e}' stream ${i} transport closed`),p.Po())}),g(h,ni.EventType.ERROR,_=>{d||(d=!0,bn(ve,`RPC '${e}' stream ${i} transport errored:`,_),p.Po(new L(E.UNAVAILABLE,"The operation could not be completed")))}),g(h,ni.EventType.MESSAGE,_=>{var m;if(!d){const T=_.data[0];re(!!T);const v=T,V=v.error||((m=v[0])===null||m===void 0?void 0:m.error);if(V){k(ve,`RPC '${e}' stream ${i} received error:`,V);const z=V.status;let q=function(R){const b=le[R];if(b!==void 0)return wf(b)}(z),A=V.message;q===void 0&&(q=E.INTERNAL,A="Unknown error status: "+z+" with message "+V.message),d=!0,p.Po(new L(q,A)),h.close()}else k(ve,`RPC '${e}' stream ${i} received:`,T),p.Io(T)}}),g(a,wy.STAT_EVENT,_=>{_.stat===Bl.PROXY?k(ve,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===Bl.NOPROXY&&k(ve,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.ho()},0),p}}function Hs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(n){return new Dv(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=t,this.wo=r,this.So=i,this.bo=s,this.Do=0,this.vo=null,this.Co=Date.now(),this.reset()}reset(){this.Do=0}Fo(){this.Do=this.bo}Mo(e){this.cancel();const t=Math.floor(this.Do+this.xo()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,t-r);i>0&&k("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Do} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.vo=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.Do*=this.So,this.Do<this.wo&&(this.Do=this.wo),this.Do>this.bo&&(this.Do=this.bo)}Oo(){this.vo!==null&&(this.vo.skipDelay(),this.vo=null)}cancel(){this.vo!==null&&(this.vo.cancel(),this.vo=null)}xo(){return(Math.random()-.5)*this.Do}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,t,r,i,s,o,a,l){this.ii=e,this.No=r,this.Bo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Lo=0,this.ko=null,this.qo=null,this.stream=null,this.Qo=new Of(e,t)}Ko(){return this.state===1||this.state===5||this.$o()}$o(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Uo()}async stop(){this.Ko()&&await this.close(0)}Wo(){this.state=0,this.Qo.reset()}Go(){this.$o()&&this.ko===null&&(this.ko=this.ii.enqueueAfterDelay(this.No,6e4,()=>this.zo()))}jo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.$o())return this.close(0)}Ho(){this.ko&&(this.ko.cancel(),this.ko=null)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}async close(e,t){this.Ho(),this.Jo(),this.Qo.cancel(),this.Lo++,e!==4?this.Qo.reset():t&&t.code===E.RESOURCE_EXHAUSTED?(ft(t.toString()),ft("Using maximum backoff delay to prevent overloading the backend."),this.Qo.Fo()):t&&t.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(t)}Yo(){}auth(){this.state=1;const e=this.Zo(this.Lo),t=this.Lo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Lo===t&&this.Xo(r,i)},r=>{e(()=>{const i=new L(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.e_(i)})})}Xo(e,t){const r=this.Zo(this.Lo);this.stream=this.t_(e,t),this.stream._o(()=>{r(()=>(this.state=2,this.qo=this.ii.enqueueAfterDelay(this.Bo,1e4,()=>(this.$o()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.e_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Uo(){this.state=5,this.Qo.Mo(async()=>{this.state=0,this.start()})}e_(e){return k("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Zo(e){return t=>{this.ii.enqueueAndForget(()=>this.Lo===e?t():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class E0 extends Mf{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}t_(e,t){return this.connection.yo("Listen",e,t)}onMessage(e){this.Qo.reset();const t=Ov(this.serializer,e),r=function(s){if(!("targetChange"in s))return B.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?B.min():o.readTime?Xe(o.readTime):B.min()}(e);return this.listener.n_(t,r)}r_(e){const t={};t.database=Po(this.serializer),t.addTarget=function(s,o){let a;const l=o.target;if(a=wo(l)?{documents:Fv(s,l)}:{query:Uv(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=bf(s,o.resumeToken);const c=bo(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(B.min())>0){a.readTime=$i(s,o.snapshotVersion.toTimestamp());const c=bo(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=Bv(this.serializer,e);r&&(t.labels=r),this.jo(t)}i_(e){const t={};t.database=Po(this.serializer),t.removeTarget=e,this.jo(t)}}class T0 extends Mf{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.s_=!1}get o_(){return this.s_}start(){this.s_=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.s_&&this.__([])}t_(e,t){return this.connection.yo("Write",e,t)}onMessage(e){if(re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.s_){this.Qo.reset();const t=Lv(e.writeResults,e.commitTime),r=Xe(e.commitTime);return this.listener.a_(r,t)}return re(!e.writeResults||e.writeResults.length===0),this.s_=!0,this.listener.u_()}c_(){const e={};e.database=Po(this.serializer),this.jo(e)}__(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Mv(this.serializer,r))};this.jo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0 extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.l_=!1}h_(){if(this.l_)throw new L(E.FAILED_PRECONDITION,"The client has already been terminated.")}Ro(e,t,r){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Ro(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(E.UNKNOWN,i.toString())})}po(e,t,r,i){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.po(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(E.UNKNOWN,s.toString())})}terminate(){this.l_=!0}}class w0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.I_=0,this.T_=null,this.E_=!0}d_(){this.I_===0&&(this.A_("Unknown"),this.T_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.T_=null,this.R_("Backend didn't respond within 10 seconds."),this.A_("Offline"),Promise.resolve())))}V_(e){this.state==="Online"?this.A_("Unknown"):(this.I_++,this.I_>=1&&(this.m_(),this.R_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.A_("Offline")))}set(e){this.m_(),this.I_=0,e==="Online"&&(this.E_=!1),this.A_(e)}A_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}R_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.E_?(ft(t),this.E_=!1):k("OnlineStateTracker",t)}m_(){this.T_!==null&&(this.T_.cancel(),this.T_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.f_=[],this.g_=new Map,this.p_=new Set,this.y_=[],this.w_=s,this.w_.Ys(o=>{r.enqueueAndForget(async()=>{rn(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=j(l);c.p_.add(4),await Gr(c),c.S_.set("Unknown"),c.p_.delete(4),await vs(c)}(this))})}),this.S_=new w0(r,i)}}async function vs(n){if(rn(n))for(const e of n.y_)await e(!0)}async function Gr(n){for(const e of n.y_)await e(!1)}function Lf(n,e){const t=j(n);t.g_.has(e.targetId)||(t.g_.set(e.targetId,e),La(t)?Ma(t):zn(t).$o()&&Oa(t,e))}function Ff(n,e){const t=j(n),r=zn(t);t.g_.delete(e),r.$o()&&Uf(t,e),t.g_.size===0&&(r.$o()?r.Go():rn(t)&&t.S_.set("Unknown"))}function Oa(n,e){if(n.b_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}zn(n).r_(e)}function Uf(n,e){n.b_.Be(e),zn(n).i_(e)}function Ma(n){n.b_=new Cv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.g_.get(e)||null,rt:()=>n.datastore.serializer.databaseId}),zn(n).start(),n.S_.d_()}function La(n){return rn(n)&&!zn(n).Ko()&&n.g_.size>0}function rn(n){return j(n).p_.size===0}function xf(n){n.b_=void 0}async function R0(n){n.g_.forEach((e,t)=>{Oa(n,e)})}async function b0(n,e){xf(n),La(n)?(n.S_.V_(e),Ma(n)):n.S_.set("Unknown")}async function C0(n,e,t){if(n.S_.set("Online"),e instanceof Rf&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.g_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.g_.delete(a),i.b_.removeTarget(a))}(n,e)}catch(r){k("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await qi(n,r)}else if(e instanceof _i?n.b_.We(e):e instanceof Af?n.b_.Ze(e):n.b_.je(e),!t.isEqual(B.min()))try{const r=await Nf(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.b_.st(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=s.g_.get(c);u&&s.g_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=s.g_.get(l);if(!u)return;s.g_.set(l,u.withResumeToken(Se.EMPTY_BYTE_STRING,u.snapshotVersion)),Uf(s,l);const h=new It(u.target,l,c,u.sequenceNumber);Oa(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){k("RemoteStore","Failed to raise snapshot:",r),await qi(n,r)}}async function qi(n,e,t){if(!Kr(e))throw e;n.p_.add(1),await Gr(n),n.S_.set("Offline"),t||(t=()=>Nf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await t(),n.p_.delete(1),await vs(n)})}function Bf(n,e){return e().catch(t=>qi(n,t,e))}async function Es(n){const e=j(n),t=Dt(e);let r=e.f_.length>0?e.f_[e.f_.length-1].batchId:-1;for(;S0(e);)try{const i=await f0(e.localStore,r);if(i===null){e.f_.length===0&&t.Go();break}r=i.batchId,P0(e,i)}catch(i){await qi(e,i)}$f(e)&&qf(e)}function S0(n){return rn(n)&&n.f_.length<10}function P0(n,e){n.f_.push(e);const t=Dt(n);t.$o()&&t.o_&&t.__(e.mutations)}function $f(n){return rn(n)&&!Dt(n).Ko()&&n.f_.length>0}function qf(n){Dt(n).start()}async function k0(n){Dt(n).c_()}async function D0(n){const e=Dt(n);for(const t of n.f_)e.__(t.mutations)}async function V0(n,e,t){const r=n.f_.shift(),i=Ca.from(r,e,t);await Bf(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Es(n)}async function N0(n,e){e&&Dt(n).o_&&await async function(r,i){if(function(o){return Av(o)&&o!==E.ABORTED}(i.code)){const s=r.f_.shift();Dt(r).Wo(),await Bf(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Es(r)}}(n,e),$f(n)&&qf(n)}async function hc(n,e){const t=j(n);t.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const r=rn(t);t.p_.add(3),await Gr(t),r&&t.S_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.p_.delete(3),await vs(t)}async function O0(n,e){const t=j(n);e?(t.p_.delete(2),await vs(t)):e||(t.p_.add(2),await Gr(t),t.S_.set("Unknown"))}function zn(n){return n.D_||(n.D_=function(t,r,i){const s=j(t);return s.h_(),new E0(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{_o:R0.bind(null,n),uo:b0.bind(null,n),n_:C0.bind(null,n)}),n.y_.push(async e=>{e?(n.D_.Wo(),La(n)?Ma(n):n.S_.set("Unknown")):(await n.D_.stop(),xf(n))})),n.D_}function Dt(n){return n.v_||(n.v_=function(t,r,i){const s=j(t);return s.h_(),new T0(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{_o:k0.bind(null,n),uo:N0.bind(null,n),u_:D0.bind(null,n),a_:V0.bind(null,n)}),n.y_.push(async e=>{e?(n.v_.Wo(),await Es(n)):(await n.v_.stop(),n.f_.length>0&&(k("RemoteStore",`Stopping write stream with ${n.f_.length} pending writes`),n.f_=[]))})),n.v_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new Fa(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ua(n,e){if(ft("AsyncQueue",`${e}: ${n}`),Kr(n))return new L(E.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||F.comparator(t.key,r.key):(t,r)=>F.comparator(t.key,r.key),this.keyedMap=Xn(),this.sortedSet=new ie(this.comparator)}static emptySet(e){return new Tn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Tn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Tn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(){this.C_=new ie(F.comparator)}track(e){const t=e.doc.key,r=this.C_.get(t);r?e.type!==0&&r.type===3?this.C_=this.C_.insert(t,e):e.type===3&&r.type!==1?this.C_=this.C_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.C_=this.C_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.C_=this.C_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.C_=this.C_.remove(t):e.type===1&&r.type===2?this.C_=this.C_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.C_=this.C_.insert(t,{type:2,doc:e.doc}):U():this.C_=this.C_.insert(t,e)}F_(){const e=[];return this.C_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Vn{constructor(e,t,r,i,s,o,a,l,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Vn(e,t,Tn.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(){this.M_=void 0,this.listeners=[]}}class L0{constructor(){this.queries=new jn(e=>cf(e),fs),this.onlineState="Unknown",this.x_=new Set}}async function jf(n,e){const t=j(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new M0),i)try{s.M_=await t.onListen(r)}catch(o){const a=Ua(o,`Initialization of query '${Ro(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.O_(t.onlineState),s.M_&&e.N_(s.M_)&&xa(t)}async function zf(n,e){const t=j(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function F0(n,e){const t=j(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.N_(i)&&(r=!0);o.M_=i}}r&&xa(t)}function U0(n,e,t){const r=j(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function xa(n){n.x_.forEach(e=>{e.next()})}class Hf{constructor(e,t,r){this.query=e,this.B_=t,this.L_=!1,this.k_=null,this.onlineState="Unknown",this.options=r||{}}N_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Vn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.L_?this.q_(e)&&(this.B_.next(e),t=!0):this.Q_(e,this.onlineState)&&(this.K_(e),t=!0),this.k_=e,t}onError(e){this.B_.error(e)}O_(e){this.onlineState=e;let t=!1;return this.k_&&!this.L_&&this.Q_(this.k_,e)&&(this.K_(this.k_),t=!0),t}Q_(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.U_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}q_(e){if(e.docChanges.length>0)return!0;const t=this.k_&&this.k_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}K_(e){e=Vn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.L_=!0,this.B_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e){this.key=e}}class Wf{constructor(e){this.key=e}}class x0{constructor(e,t){this.query=e,this.Z_=t,this.X_=null,this.hasCachedResults=!1,this.current=!1,this.ea=H(),this.mutatedKeys=H(),this.ta=uf(e),this.na=new Tn(this.ta)}get ra(){return this.Z_}ia(e,t){const r=t?t.sa:new fc,i=t?t.na:this.na;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const f=i.get(u),d=ds(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),g=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let _=!1;f&&d?f.data.isEqual(d.data)?p!==g&&(r.track({type:3,doc:d}),_=!0):this.oa(f,d)||(r.track({type:2,doc:d}),_=!0,(l&&this.ta(d,l)>0||c&&this.ta(d,c)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),_=!0):f&&!d&&(r.track({type:1,doc:f}),_=!0,(l||c)&&(a=!0)),_&&(d?(o=o.add(d),s=g?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{na:o,sa:r,zi:a,mutatedKeys:s}}oa(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.na;this.na=e.na,this.mutatedKeys=e.mutatedKeys;const s=e.sa.F_();s.sort((c,u)=>function(f,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return p(f)-p(d)}(c.type,u.type)||this.ta(c.doc,u.doc)),this._a(r);const o=t?this.aa():[],a=this.ea.size===0&&this.current?1:0,l=a!==this.X_;return this.X_=a,s.length!==0||l?{snapshot:new Vn(this.query,e.na,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ua:o}:{ua:o}}O_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({na:this.na,sa:new fc,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ua:[]}}ca(e){return!this.Z_.has(e)&&!!this.na.has(e)&&!this.na.get(e).hasLocalMutations}_a(e){e&&(e.addedDocuments.forEach(t=>this.Z_=this.Z_.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Z_=this.Z_.delete(t)),this.current=e.current)}aa(){if(!this.current)return[];const e=this.ea;this.ea=H(),this.na.forEach(r=>{this.ca(r.key)&&(this.ea=this.ea.add(r.key))});const t=[];return e.forEach(r=>{this.ea.has(r)||t.push(new Wf(r))}),this.ea.forEach(r=>{e.has(r)||t.push(new Kf(r))}),t}la(e){this.Z_=e.ss,this.ea=H();const t=this.ia(e.documents);return this.applyChanges(t,!0)}ha(){return Vn.fromInitialDocuments(this.query,this.na,this.mutatedKeys,this.X_===0,this.hasCachedResults)}}class B0{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class $0{constructor(e){this.key=e,this.Pa=!1}}class q0{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ia={},this.Ta=new jn(a=>cf(a),fs),this.Ea=new Map,this.da=new Set,this.Aa=new ie(F.comparator),this.Ra=new Map,this.Va=new Da,this.ma={},this.fa=new Map,this.ga=Dn.On(),this.onlineState="Unknown",this.pa=void 0}get isPrimaryClient(){return this.pa===!0}}async function j0(n,e){const t=Z0(n);let r,i;const s=t.Ta.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.ha();else{const o=await d0(t.localStore,dt(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await z0(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&Lf(t.remoteStore,o)}return i}async function z0(n,e,t,r,i){n.ya=(h,f,d)=>async function(g,_,m,T){let v=_.view.ia(m);v.zi&&(v=await lc(g.localStore,_.query,!1).then(({documents:q})=>_.view.ia(q,v)));const V=T&&T.targetChanges.get(_.targetId),z=_.view.applyChanges(v,g.isPrimaryClient,V);return pc(g,_.targetId,z.ua),z.snapshot}(n,h,f,d);const s=await lc(n.localStore,e,!0),o=new x0(e,s.ss),a=o.ia(s.documents),l=Wr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),c=o.applyChanges(a,n.isPrimaryClient,l);pc(n,t,c.ua);const u=new B0(e,t,o);return n.Ta.set(e,u),n.Ea.has(t)?n.Ea.get(t).push(e):n.Ea.set(t,[e]),c.snapshot}async function H0(n,e){const t=j(n),r=t.Ta.get(e),i=t.Ea.get(r.targetId);if(i.length>1)return t.Ea.set(r.targetId,i.filter(s=>!fs(s,e))),void t.Ta.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await ko(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),Ff(t.remoteStore,r.targetId),Do(t,r.targetId)}).catch(Hr)):(Do(t,r.targetId),await ko(t.localStore,r.targetId,!0))}async function K0(n,e,t){const r=eE(n);try{const i=await function(o,a){const l=j(o),c=he.now(),u=a.reduce((d,p)=>d.add(p.key),H());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=pt(),g=H();return l.Xi.getEntries(d,u).next(_=>{p=_,p.forEach((m,T)=>{T.isValidDocument()||(g=g.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(d,p)).next(_=>{h=_;const m=[];for(const T of a){const v=vv(T,h.get(T.key).overlayedDocument);v!=null&&m.push(new nn(T.key,v,tf(v.value.mapValue),lt.exists(!0)))}return l.mutationQueue.addMutationBatch(d,c,m,a)}).next(_=>{f=_;const m=_.applyToLocalDocumentSet(h,g);return l.documentOverlayCache.saveOverlays(d,_.batchId,m)})}).then(()=>({batchId:f.batchId,changes:ff(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.ma[o.currentUser.toKey()];c||(c=new ie(J)),c=c.insert(a,l),o.ma[o.currentUser.toKey()]=c}(r,i.batchId,t),await Qr(r,i.changes),await Es(r.remoteStore)}catch(i){const s=Ua(i,"Failed to persist write");t.reject(s)}}async function Gf(n,e){const t=j(n);try{const r=await u0(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Ra.get(s);o&&(re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Pa=!0:i.modifiedDocuments.size>0?re(o.Pa):i.removedDocuments.size>0&&(re(o.Pa),o.Pa=!1))}),await Qr(t,r,e)}catch(r){await Hr(r)}}function dc(n,e,t){const r=j(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Ta.forEach((s,o)=>{const a=o.view.O_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=j(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const f of h.listeners)f.O_(a)&&(c=!0)}),c&&xa(l)}(r.eventManager,e),i.length&&r.Ia.n_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function W0(n,e,t){const r=j(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Ra.get(e),s=i&&i.key;if(s){let o=new ie(F.comparator);o=o.insert(s,Te.newNoDocument(s,B.min()));const a=H().add(s),l=new _s(B.min(),new Map,new ie(J),o,a);await Gf(r,l),r.Aa=r.Aa.remove(s),r.Ra.delete(e),Ba(r)}else await ko(r.localStore,e,!1).then(()=>Do(r,e,t)).catch(Hr)}async function G0(n,e){const t=j(n),r=e.batch.batchId;try{const i=await c0(t.localStore,e);Xf(t,r,null),Qf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Qr(t,i)}catch(i){await Hr(i)}}async function Q0(n,e,t){const r=j(n);try{const i=await function(o,a){const l=j(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(re(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);Xf(r,e,t),Qf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Qr(r,i)}catch(i){await Hr(i)}}function Qf(n,e){(n.fa.get(e)||[]).forEach(t=>{t.resolve()}),n.fa.delete(e)}function Xf(n,e,t){const r=j(n);let i=r.ma[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.ma[r.currentUser.toKey()]=i}}function Do(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ea.get(e))n.Ta.delete(r),t&&n.Ia.wa(r,t);n.Ea.delete(e),n.isPrimaryClient&&n.Va.Ar(e).forEach(r=>{n.Va.containsKey(r)||Jf(n,r)})}function Jf(n,e){n.da.delete(e.path.canonicalString());const t=n.Aa.get(e);t!==null&&(Ff(n.remoteStore,t),n.Aa=n.Aa.remove(e),n.Ra.delete(t),Ba(n))}function pc(n,e,t){for(const r of t)r instanceof Kf?(n.Va.addReference(r.key,e),X0(n,r)):r instanceof Wf?(k("SyncEngine","Document no longer in limbo: "+r.key),n.Va.removeReference(r.key,e),n.Va.containsKey(r.key)||Jf(n,r.key)):U()}function X0(n,e){const t=e.key,r=t.path.canonicalString();n.Aa.get(t)||n.da.has(r)||(k("SyncEngine","New document in limbo: "+t),n.da.add(r),Ba(n))}function Ba(n){for(;n.da.size>0&&n.Aa.size<n.maxConcurrentLimboResolutions;){const e=n.da.values().next().value;n.da.delete(e);const t=new F(se.fromString(e)),r=n.ga.next();n.Ra.set(r,new $0(t)),n.Aa=n.Aa.insert(t,r),Lf(n.remoteStore,new It(dt(hs(t.path)),r,"TargetPurposeLimboResolution",Ta.ae))}}async function Qr(n,e,t){const r=j(n),i=[],s=[],o=[];r.Ta.isEmpty()||(r.Ta.forEach((a,l)=>{o.push(r.ya(l,e,t).then(c=>{if((c||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=Na.qi(l.targetId,c);s.push(u)}}))}),await Promise.all(o),r.Ia.n_(i),await async function(l,c){const u=j(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>I.forEach(c,f=>I.forEach(f.Li,d=>u.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>I.forEach(f.ki,d=>u.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!Kr(h))throw h;k("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const d=u.Ji.get(f),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);u.Ji=u.Ji.insert(f,g)}}}(r.localStore,s))}async function J0(n,e){const t=j(n);if(!t.currentUser.isEqual(e)){k("SyncEngine","User change. New user:",e.toKey());const r=await Vf(t.localStore,e);t.currentUser=e,function(s,o){s.fa.forEach(a=>{a.forEach(l=>{l.reject(new L(E.CANCELLED,o))})}),s.fa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Qr(t,r.ts)}}function Y0(n,e){const t=j(n),r=t.Ra.get(e);if(r&&r.Pa)return H().add(r.key);{let i=H();const s=t.Ea.get(e);if(!s)return i;for(const o of s){const a=t.Ta.get(o);i=i.unionWith(a.view.ra)}return i}}function Z0(n){const e=j(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Gf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Y0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=W0.bind(null,e),e.Ia.n_=F0.bind(null,e.eventManager),e.Ia.wa=U0.bind(null,e.eventManager),e}function eE(n){const e=j(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=G0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Q0.bind(null,e),e}class mc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ys(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return l0(this.persistence,new o0,e.initialUser,this.serializer)}createPersistence(e){return new i0(Va.zr,this.serializer)}createSharedClientState(e){return new m0}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class tE{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>dc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=J0.bind(null,this.syncEngine),await O0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new L0}()}createDatastore(e){const t=ys(e.databaseInfo.databaseId),r=function(s){return new v0(s)}(e.databaseInfo);return function(s,o,a,l){return new I0(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new A0(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>dc(this.syncEngine,t,0),function(){return uc.v()?new uc:new g0}())}createSyncEngine(e,t){return function(i,s,o,a,l,c,u){const h=new q0(i,s,o,a,l,c);return u&&(h.pa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(t){const r=j(t);k("RemoteStore","RemoteStore shutting down."),r.p_.add(5),await Gr(r),r.w_.shutdown(),r.S_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Da(this.observer.next,e)}error(e){this.observer.error?this.Da(this.observer.error,e):ft("Uncaught Error in snapshot listener:",e.toString())}va(){this.muted=!0}Da(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Ee.UNAUTHENTICATED,this.clientId=Yh.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{k("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(k("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ua(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ks(n,e){n.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Vf(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function gc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await iE(n);k("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>hc(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>hc(e.remoteStore,s)),n._onlineComponents=e}function rE(n){return n.name==="FirebaseError"?n.code===E.FAILED_PRECONDITION||n.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function iE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){k("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ks(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!rE(t))throw t;bn("Error using user provided cache. Falling back to memory cache: "+t),await Ks(n,new mc)}}else k("FirestoreClient","Using default OfflineComponentProvider"),await Ks(n,new mc);return n._offlineComponents}async function Zf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(k("FirestoreClient","Using user provided OnlineComponentProvider"),await gc(n,n._uninitializedComponentsProvider._online)):(k("FirestoreClient","Using default OnlineComponentProvider"),await gc(n,new tE))),n._onlineComponents}function sE(n){return Zf(n).then(e=>e.syncEngine)}async function Vo(n){const e=await Zf(n),t=e.eventManager;return t.onListen=j0.bind(null,e.syncEngine),t.onUnlisten=H0.bind(null,e.syncEngine),t}function oE(n,e,t={}){const r=new bt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const u=new Yf({next:f=>{o.enqueueAndForget(()=>zf(s,h));const d=f.docs.has(a);!d&&f.fromCache?c.reject(new L(E.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&f.fromCache&&l&&l.source==="server"?c.reject(new L(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new Hf(hs(a.path),u,{includeMetadataChanges:!0,U_:!0});return jf(s,h)}(await Vo(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(n,e,t){if(!t)throw new L(E.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function lE(n,e,t,r){if(e===!0&&r===!0)throw new L(E.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function yc(n){if(!F.isDocumentKey(n))throw new L(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function $a(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":U()}function Ct(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=$a(n);throw new L(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ed((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qa{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Cy;switch(r.type){case"firstParty":return new Dy(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=_c.get(t);r&&(k("ComponentProvider","Removing Datastore"),_c.delete(t),r.terminate())}(this),Promise.resolve()}}function cE(n,e,t,r={}){var i;const s=(n=Ct(n,qa))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&bn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ee.MOCK_USER;else{a=Zd(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new L(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ee(c)}n._authCredentials=new Sy(new Jh(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ts(this.firestore,e,this._query)}}class Le{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Le(this.firestore,e,this._key)}}class Ar extends Ts{constructor(e,t,r){super(e,t,hs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new F(e))}withConverter(e){return new Ar(this.firestore,e,this._path)}}function Ws(n,e,...t){if(n=ke(n),arguments.length===1&&(e=Yh.V()),aE("doc","path",e),n instanceof qa){const r=se.fromString(e,...t);return yc(r),new Le(n,null,new F(r))}{if(!(n instanceof Le||n instanceof Ar))throw new L(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return yc(r),new Le(n.firestore,n instanceof Ar?n.converter:null,new F(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(){this.Ua=Promise.resolve(),this.Wa=[],this.Ga=!1,this.za=[],this.ja=null,this.Ha=!1,this.Ja=!1,this.Ya=[],this.Qo=new Of(this,"async_queue_retry"),this.Za=()=>{const t=Hs();t&&k("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Qo.Oo()};const e=Hs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Za)}get isShuttingDown(){return this.Ga}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xa(),this.eu(e)}enterRestrictedMode(e){if(!this.Ga){this.Ga=!0,this.Ja=e||!1;const t=Hs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Za)}}enqueue(e){if(this.Xa(),this.Ga)return new Promise(()=>{});const t=new bt;return this.eu(()=>this.Ga&&this.Ja?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Wa.push(e),this.tu()))}async tu(){if(this.Wa.length!==0){try{await this.Wa[0](),this.Wa.shift(),this.Qo.reset()}catch(e){if(!Kr(e))throw e;k("AsyncQueue","Operation failed with retryable error: "+e)}this.Wa.length>0&&this.Qo.Mo(()=>this.tu())}}eu(e){const t=this.Ua.then(()=>(this.Ha=!0,e().catch(r=>{this.ja=r,this.Ha=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ft("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ha=!1,r))));return this.Ua=t,t}enqueueAfterDelay(e,t,r){this.Xa(),this.Ya.indexOf(e)>-1&&(t=0);const i=Fa.createAndSchedule(this,e,t,r,s=>this.nu(s));return this.za.push(i),i}Xa(){this.ja&&U()}verifyOperationInProgress(){}async ru(){let e;do e=this.Ua,await e;while(e!==this.Ua)}iu(e){for(const t of this.za)if(t.timerId===e)return!0;return!1}su(e){return this.ru().then(()=>{this.za.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.za)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ru()})}ou(e){this.Ya.push(e)}nu(e){const t=this.za.indexOf(e);this.za.splice(t,1)}}function Ec(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Rr extends qa{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new uE}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||td(this),this._firestoreClient.terminate()}}function hE(n,e){const t=typeof n=="object"?n:hu(),r=typeof n=="string"?n:e||"(default)",i=jo(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Jd("firestore");s&&cE(i,...s)}return i}function ja(n){return n._firestoreClient||td(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function td(n){var e,t,r;const i=n._freezeSettings(),s=function(a,l,c,u){return new jy(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,ed(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new nE(n._authCredentials,n._appCheckCredentials,n._queue,s),((t=i.localCache)===null||t===void 0?void 0:t._offlineComponentProvider)&&((r=i.localCache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nn(Se.fromBase64String(e))}catch(t){throw new L(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Nn(Se.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ie(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=/^__.*__$/;class nd{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new nn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function rd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class As{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this._u(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get au(){return this.settings.au}uu(e){return new As(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}cu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.uu({path:r,lu:!1});return i.hu(e),i}Pu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.uu({path:r,lu:!1});return i._u(),i}Iu(e){return this.uu({path:void 0,lu:!0})}Tu(e){return ji(e,this.settings.methodName,this.settings.Eu||!1,this.path,this.settings.du)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}_u(){if(this.path)for(let e=0;e<this.path.length;e++)this.hu(this.path.get(e))}hu(e){if(e.length===0)throw this.Tu("Document fields must not be empty");if(rd(this.au)&&fE.test(e))throw this.Tu('Document fields cannot begin and end with "__"')}}class dE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ys(e)}Au(e,t,r,i=!1){return new As({au:e,methodName:t,du:r,path:Ie.emptyPath(),lu:!1,Eu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function pE(n){const e=n._freezeSettings(),t=ys(n._databaseId);return new dE(n._databaseId,!!e.ignoreUndefinedProperties,t)}class Rs extends ws{_toFieldTransform(e){if(e.au!==2)throw e.au===1?e.Tu(`${this._methodName}() can only appear at the top level of your update data`):e.Tu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Rs}}function mE(n,e,t){return new As({au:3,du:e.settings.du,methodName:n._methodName,lu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class gE extends ws{constructor(e,t){super(e),this.Ru=t}_toFieldTransform(e){const t=mE(this,e,!0),r=this.Ru.map(s=>Xr(s,t)),i=new kn(r);return new mv(e.path,i)}isEqual(e){return this===e}}function _E(n,e,t,r){const i=n.Au(1,e,t);sd("Data must be an object, but it was:",i,r);const s=[],o=Me.empty();tn(r,(l,c)=>{const u=Ha(e,l,t);c=ke(c);const h=i.Pu(u);if(c instanceof Rs)s.push(u);else{const f=Xr(c,h);f!=null&&(s.push(u),o.set(u,f))}});const a=new Be(s);return new nd(o,a,i.fieldTransforms)}function yE(n,e,t,r,i,s){const o=n.Au(1,e,t),a=[Tc(e,r,t)],l=[i];if(s.length%2!=0)throw new L(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(Tc(e,s[f])),l.push(s[f+1]);const c=[],u=Me.empty();for(let f=a.length-1;f>=0;--f)if(!TE(c,a[f])){const d=a[f];let p=l[f];p=ke(p);const g=o.Pu(d);if(p instanceof Rs)c.push(d);else{const _=Xr(p,g);_!=null&&(c.push(d),u.set(d,_))}}const h=new Be(c);return new nd(u,h,o.fieldTransforms)}function Xr(n,e){if(id(n=ke(n)))return sd("Unsupported field value:",e,n),vE(n,e);if(n instanceof ws)return function(r,i){if(!rd(i.au))throw i.Tu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Tu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.lu&&e.au!==4)throw e.Tu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Xr(a,i.Iu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return fv(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=he.fromDate(r);return{timestampValue:$i(i.serializer,s)}}if(r instanceof he){const s=new he(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$i(i.serializer,s)}}if(r instanceof za)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Nn)return{bytesValue:bf(i.serializer,r._byteString)};if(r instanceof Le){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Tu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ka(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Tu(`Unsupported field value: ${$a(r)}`)}(n,e)}function vE(n,e){const t={};return Zh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):tn(n,(r,i)=>{const s=Xr(i,e.cu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function id(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof he||n instanceof za||n instanceof Nn||n instanceof Le||n instanceof ws)}function sd(n,e,t){if(!id(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=$a(t);throw r==="an object"?e.Tu(n+" a custom object"):e.Tu(n+" "+r)}}function Tc(n,e,t){if((e=ke(e))instanceof Is)return e._internalPath;if(typeof e=="string")return Ha(n,e);throw ji("Field path arguments must be of type string or ",n,!1,void 0,t)}const EE=new RegExp("[~\\*/\\[\\]]");function Ha(n,e,t){if(e.search(EE)>=0)throw ji(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Is(...e.split("."))._internalPath}catch{throw ji(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ji(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new L(E.INVALID_ARGUMENT,a+n+l)}function TE(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new IE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ad("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class IE extends od{data(){return super.data()}}function ad(n,e){return typeof e=="string"?Ha(n,e):e instanceof Is?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class AE{convertValue(e,t="none"){switch(Jt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw U()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return tn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new za(ce(e.latitude),ce(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=wa(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Er(e));default:return null}}convertTimestamp(e){const t=kt(e);return new he(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=se.fromString(e);re(Df(r));const i=new Tr(r.get(1),r.get(3)),s=new F(r.popFirst(5));return i.isEqual(t)||ft(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ld extends od{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new yi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ad("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class yi extends ld{data(e={}){return super.data(e)}}class RE{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Yn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new yi(this._firestore,this._userDataWriter,r.key,r,new Yn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new yi(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Yn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new yi(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Yn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:bE(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function bE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(n){n=Ct(n,Le);const e=Ct(n.firestore,Rr);return oE(ja(e),n._key).then(t=>ud(e,n,t))}class cd extends AE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,t)}}function Ka(n,e,t,...r){n=Ct(n,Le);const i=Ct(n.firestore,Rr),s=pE(i);let o;return o=typeof(e=ke(e))=="string"||e instanceof Is?yE(s,"updateDoc",n._key,e,t,r):_E(s,"updateDoc",n._key,e),PE(i,[o.toMutation(n._key,lt.exists(!0))])}function SE(n,...e){var t,r,i;n=ke(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ec(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Ec(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(n instanceof Le)c=Ct(n.firestore,Rr),u=hs(n._key.path),l={next:h=>{e[o]&&e[o](ud(c,n,h))},error:e[o+1],complete:e[o+2]};else{const h=Ct(n,Ts);c=Ct(h.firestore,Rr),u=h._query;const f=new cd(c);l={next:d=>{e[o]&&e[o](new RE(c,f,h,d))},error:e[o+1],complete:e[o+2]},wE(n._query)}return function(f,d,p,g){const _=new Yf(g),m=new Hf(d,_,p);return f.asyncQueue.enqueueAndForget(async()=>jf(await Vo(f),m)),()=>{_.va(),f.asyncQueue.enqueueAndForget(async()=>zf(await Vo(f),m))}}(ja(c),u,a,l)}function PE(n,e){return function(r,i){const s=new bt;return r.asyncQueue.enqueueAndForget(async()=>K0(await sE(r),i,s)),s.promise}(ja(n),e)}function ud(n,e,t){const r=t.docs.get(e._key),i=new cd(n);return new ld(n,i,e._key,r,new Yn(t.hasPendingWrites,t.fromCache),e.converter)}function hd(...n){return new gE("arrayUnion",n)}(function(e,t=!0){(function(i){qn=i})(xn),wn(new Kt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Rr(new Py(r.getProvider("auth-internal")),new Ny(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new L(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tr(c.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Rt($l,"4.0.0",e),Rt($l,"4.0.0","esm2017")})();const kE={apiKey:"AIzaSyDbBV7DT8DNmxyLPUB_w0skCx6bQjDIDhE",authDomain:"nocontextquotes-86d30.firebaseapp.com",projectId:"nocontextquotes-86d30",storageBucket:"nocontextquotes-86d30.appspot.com",messagingSenderId:"704558739601",appId:"1:704558739601:web:f92bb50736b7c0cb360f30",measurementId:"G-RHFY5NDBMG"},DE=uu(kE),at=v_();(async()=>await og(at,xu))();const Gs=hE(DE),ai=parseFloat;function No(n,e=";"){let t;if(Array.isArray(n))t=n.filter(r=>r);else{t=[];for(const r in n)n[r]&&t.push(`${r}:${n[r]}`)}return t.join(e)}function VE(n,e,t,r){let i,s;const o="1em";let a,l,c,u="-.125em";const h="visible";return r&&(c="center",s="1.25em"),t&&(i=t),e&&(e=="lg"?(l="1.33333em",a=".75em",u="-.225em"):e=="xs"?l=".75em":e=="sm"?l=".875em":l=e.replace("x","em")),No([No({float:i,width:s,height:o,"line-height":a,"font-size":l,"text-align":c,"vertical-align":u,"transform-origin":"center",overflow:h}),n])}function NE(n,e,t,r,i,s=1,o="",a=""){let l=1,c=1;return i&&(i=="horizontal"?l=-1:i=="vertical"?c=-1:l=c=-1),No([`translate(${ai(e)*s}${o},${ai(t)*s}${o})`,`scale(${l*ai(n)},${c*ai(n)})`,r&&`rotate(${r}${a})`]," ")}function Ic(n){let e,t,r,i,s,o,a,l;function c(f,d){return typeof f[10][4]=="string"?ME:OE}let u=c(n),h=u(n);return{c(){e=Bt("svg"),t=Bt("g"),r=Bt("g"),h.c(),y(r,"transform",n[12]),y(t,"transform",i="translate("+n[10][0]/2+" "+n[10][1]/2+")"),y(t,"transform-origin",s=n[10][0]/4+" 0"),y(e,"id",o=n[1]||void 0),y(e,"class",a="svelte-fa "+n[0]+" svelte-1cj2gr0"),y(e,"style",n[11]),y(e,"viewBox",l="0 0 "+n[10][0]+" "+n[10][1]),y(e,"aria-hidden","true"),y(e,"role","img"),y(e,"xmlns","http://www.w3.org/2000/svg"),we(e,"pulse",n[4]),we(e,"spin",n[3])},m(f,d){M(f,e,d),C(e,t),C(t,r),h.m(r,null)},p(f,d){u===(u=c(f))&&h?h.p(f,d):(h.d(1),h=u(f),h&&(h.c(),h.m(r,null))),d&4096&&y(r,"transform",f[12]),d&1024&&i!==(i="translate("+f[10][0]/2+" "+f[10][1]/2+")")&&y(t,"transform",i),d&1024&&s!==(s=f[10][0]/4+" 0")&&y(t,"transform-origin",s),d&2&&o!==(o=f[1]||void 0)&&y(e,"id",o),d&1&&a!==(a="svelte-fa "+f[0]+" svelte-1cj2gr0")&&y(e,"class",a),d&2048&&y(e,"style",f[11]),d&1024&&l!==(l="0 0 "+f[10][0]+" "+f[10][1])&&y(e,"viewBox",l),d&17&&we(e,"pulse",f[4]),d&9&&we(e,"spin",f[3])},d(f){f&&O(e),h.d()}}}function OE(n){let e,t,r,i,s,o,a,l,c,u;return{c(){e=Bt("path"),o=Bt("path"),y(e,"d",t=n[10][4][0]),y(e,"fill",r=n[6]||n[2]||"currentColor"),y(e,"fill-opacity",i=n[9]!=!1?n[7]:n[8]),y(e,"transform",s="translate("+n[10][0]/-2+" "+n[10][1]/-2+")"),y(o,"d",a=n[10][4][1]),y(o,"fill",l=n[5]||n[2]||"currentColor"),y(o,"fill-opacity",c=n[9]!=!1?n[8]:n[7]),y(o,"transform",u="translate("+n[10][0]/-2+" "+n[10][1]/-2+")")},m(h,f){M(h,e,f),M(h,o,f)},p(h,f){f&1024&&t!==(t=h[10][4][0])&&y(e,"d",t),f&68&&r!==(r=h[6]||h[2]||"currentColor")&&y(e,"fill",r),f&896&&i!==(i=h[9]!=!1?h[7]:h[8])&&y(e,"fill-opacity",i),f&1024&&s!==(s="translate("+h[10][0]/-2+" "+h[10][1]/-2+")")&&y(e,"transform",s),f&1024&&a!==(a=h[10][4][1])&&y(o,"d",a),f&36&&l!==(l=h[5]||h[2]||"currentColor")&&y(o,"fill",l),f&896&&c!==(c=h[9]!=!1?h[8]:h[7])&&y(o,"fill-opacity",c),f&1024&&u!==(u="translate("+h[10][0]/-2+" "+h[10][1]/-2+")")&&y(o,"transform",u)},d(h){h&&O(e),h&&O(o)}}}function ME(n){let e,t,r,i;return{c(){e=Bt("path"),y(e,"d",t=n[10][4]),y(e,"fill",r=n[2]||n[5]||"currentColor"),y(e,"transform",i="translate("+n[10][0]/-2+" "+n[10][1]/-2+")")},m(s,o){M(s,e,o)},p(s,o){o&1024&&t!==(t=s[10][4])&&y(e,"d",t),o&36&&r!==(r=s[2]||s[5]||"currentColor")&&y(e,"fill",r),o&1024&&i!==(i="translate("+s[10][0]/-2+" "+s[10][1]/-2+")")&&y(e,"transform",i)},d(s){s&&O(e)}}}function LE(n){let e,t=n[10][4]&&Ic(n);return{c(){t&&t.c(),e=tt()},m(r,i){t&&t.m(r,i),M(r,e,i)},p(r,[i]){r[10][4]?t?t.p(r,i):(t=Ic(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:D,o:D,d(r){t&&t.d(r),r&&O(e)}}}function FE(n,e,t){let{class:r=""}=e,{id:i=""}=e,{style:s=""}=e,{icon:o}=e,{size:a=""}=e,{color:l=""}=e,{fw:c=!1}=e,{pull:u=""}=e,{scale:h=1}=e,{translateX:f=0}=e,{translateY:d=0}=e,{rotate:p=""}=e,{flip:g=!1}=e,{spin:_=!1}=e,{pulse:m=!1}=e,{primaryColor:T=""}=e,{secondaryColor:v=""}=e,{primaryOpacity:V=1}=e,{secondaryOpacity:z=.4}=e,{swapOpacity:q=!1}=e,A,G,R;return n.$$set=b=>{"class"in b&&t(0,r=b.class),"id"in b&&t(1,i=b.id),"style"in b&&t(13,s=b.style),"icon"in b&&t(14,o=b.icon),"size"in b&&t(15,a=b.size),"color"in b&&t(2,l=b.color),"fw"in b&&t(16,c=b.fw),"pull"in b&&t(17,u=b.pull),"scale"in b&&t(18,h=b.scale),"translateX"in b&&t(19,f=b.translateX),"translateY"in b&&t(20,d=b.translateY),"rotate"in b&&t(21,p=b.rotate),"flip"in b&&t(22,g=b.flip),"spin"in b&&t(3,_=b.spin),"pulse"in b&&t(4,m=b.pulse),"primaryColor"in b&&t(5,T=b.primaryColor),"secondaryColor"in b&&t(6,v=b.secondaryColor),"primaryOpacity"in b&&t(7,V=b.primaryOpacity),"secondaryOpacity"in b&&t(8,z=b.secondaryOpacity),"swapOpacity"in b&&t(9,q=b.swapOpacity)},n.$$.update=()=>{n.$$.dirty&16384&&t(10,A=o&&o.icon||[0,0,"",[],""]),n.$$.dirty&237568&&t(11,G=VE(s,a,u,c)),n.$$.dirty&8126464&&t(12,R=NE(h,f,d,p,g,512))},[r,i,l,_,m,T,v,V,z,q,A,G,R,s,o,a,c,u,h,f,d,p,g]}class On extends Ne{constructor(e){super(),Ve(this,e,FE,LE,pe,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}}var UE={prefix:"fas",iconName:"chart-simple",icon:[448,512,[],"e473","M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"]},xE={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},BE=xE,$E={prefix:"fas",iconName:"thumbs-down",icon:[512,512,[128078,61576],"f165","M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384H96c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H32C14.3 96 0 110.3 0 128V352c0 17.7 14.3 32 32 32z"]},qE={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},jE=qE,zE={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},HE={prefix:"fas",iconName:"thumbs-up",icon:[512,512,[128077,61575],"f164","M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"]};let KE=1;function fd(){return`svelte-tabs-${KE++}`}const an=[];function dn(n,e=D){let t;const r=new Set;function i(a){if(pe(n,a)&&(n=a,t)){const l=!an.length;for(const c of r)c[1](),an.push(c,n);if(l){for(let c=0;c<an.length;c+=2)an[c][0](an[c+1]);an.length=0}}}function s(a){i(a(n))}function o(a,l=D){const c=[a,l];return r.add(c),r.size===1&&(t=e(i)||D),a(n),()=>{r.delete(c),r.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:o}}function WE(n){let e,t,r,i;const s=n[4].default,o=Mn(s,n,n[3],null);return{c(){e=S("div"),o&&o.c(),y(e,"class","svelte-tabs")},m(a,l){M(a,e,l),o&&o.m(e,null),t=!0,r||(i=oe(e,"keydown",n[1]),r=!0)},p(a,[l]){o&&o.p&&(!t||l&8)&&Fn(o,s,a,a[3],t?Ln(s,a[3],l,null):Un(a[3]),null)},i(a){t||(P(o,a),t=!0)},o(a){N(o,a),t=!1},d(a){a&&O(e),o&&o.d(a),r=!1,i()}}}const Wa={};function GE(n,e,t){const r=n.indexOf(e);n.splice(r,1),t.update(i=>i===e?n[r]||n[n.length-1]:i)}function QE(n,e,t){let r,{$$slots:i={},$$scope:s}=e,{initialSelectedIndex:o=0}=e;const a=[],l=[],c=[],u=dn({}),h=dn({}),f=dn(null);zt(n,f,m=>t(5,r=m));const d=dn(null);function p(m,T,v){m.push(T),v.update(V=>V||T),Jc(()=>GE(m,T,v))}function g(m){const T=l.indexOf(m);f.set(m),d.set(c[T])}Vd(Wa,{registerTab(m){p(l,m,f)},registerTabElement(m){a.push(m)},registerPanel(m){p(c,m,d)},selectTab:g,selectedTab:f,selectedPanel:d,controls:u,labeledBy:h}),Sr(()=>{g(l[o])}),Dd(()=>{for(let m=0;m<l.length;m++)u.update(T=>({...T,[l[m].id]:c[m].id})),h.update(T=>({...T,[c[m].id]:l[m].id}))});async function _(m){if(m.target.classList.contains("svelte-tabs__tab")){let T=l.indexOf(r);switch(m.key){case"ArrowRight":T+=1,T>l.length-1&&(T=0),g(l[T]),a[T].focus();break;case"ArrowLeft":T-=1,T<0&&(T=l.length-1),g(l[T]),a[T].focus()}}}return n.$$set=m=>{"initialSelectedIndex"in m&&t(2,o=m.initialSelectedIndex),"$$scope"in m&&t(3,s=m.$$scope)},[f,_,o,s,i]}class XE extends Ne{constructor(e){super(),Ve(this,e,QE,WE,pe,{initialSelectedIndex:2})}}function JE(n){let e,t,r,i,s,o;const a=n[9].default,l=Mn(a,n,n[8],null);return{c(){e=S("li"),l&&l.c(),y(e,"role","tab"),y(e,"id",n[3].id),y(e,"aria-controls",t=n[2][n[3].id]),y(e,"aria-selected",n[1]),y(e,"tabindex",r=n[1]?0:-1),y(e,"class","svelte-tabs__tab svelte-1fbofsd"),we(e,"svelte-tabs__selected",n[1])},m(c,u){M(c,e,u),l&&l.m(e,null),n[10](e),i=!0,s||(o=oe(e,"click",n[11]),s=!0)},p(c,[u]){l&&l.p&&(!i||u&256)&&Fn(l,a,c,c[8],i?Ln(a,c[8],u,null):Un(c[8]),null),(!i||u&4&&t!==(t=c[2][c[3].id]))&&y(e,"aria-controls",t),(!i||u&2)&&y(e,"aria-selected",c[1]),(!i||u&2&&r!==(r=c[1]?0:-1))&&y(e,"tabindex",r),(!i||u&2)&&we(e,"svelte-tabs__selected",c[1])},i(c){i||(P(l,c),i=!0)},o(c){N(l,c),i=!1},d(c){c&&O(e),l&&l.d(c),n[10](null),s=!1,o()}}}function YE(n,e,t){let r,i,{$$slots:s={},$$scope:o}=e,a;const l={id:fd()},{registerTab:c,registerTabElement:u,selectTab:h,selectedTab:f,controls:d}=Yc(Wa);zt(n,f,m=>t(7,r=m)),zt(n,d,m=>t(2,i=m));let p;c(l),Sr(async()=>{await Nd(),u(a)});function g(m){Ht[m?"unshift":"push"](()=>{a=m,t(0,a)})}const _=()=>h(l);return n.$$set=m=>{"$$scope"in m&&t(8,o=m.$$scope)},n.$$.update=()=>{n.$$.dirty&128&&t(1,p=r===l)},[a,p,i,l,h,f,d,r,o,s,g,_]}class li extends Ne{constructor(e){super(),Ve(this,e,YE,JE,pe,{})}}function ZE(n){let e,t;const r=n[1].default,i=Mn(r,n,n[0],null);return{c(){e=S("ul"),i&&i.c(),y(e,"role","tablist"),y(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(s,o){M(s,e,o),i&&i.m(e,null),t=!0},p(s,[o]){i&&i.p&&(!t||o&1)&&Fn(i,r,s,s[0],t?Ln(r,s[0],o,null):Un(s[0]),null)},i(s){t||(P(i,s),t=!0)},o(s){N(i,s),t=!1},d(s){s&&O(e),i&&i.d(s)}}}function eT(n,e,t){let{$$slots:r={},$$scope:i}=e;return n.$$set=s=>{"$$scope"in s&&t(0,i=s.$$scope)},[i,r]}class tT extends Ne{constructor(e){super(),Ve(this,e,eT,ZE,pe,{})}}function wc(n){let e;const t=n[6].default,r=Mn(t,n,n[5],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&32)&&Fn(r,t,i,i[5],e?Ln(t,i[5],s,null):Un(i[5]),null)},i(i){e||(P(r,i),e=!0)},o(i){N(r,i),e=!1},d(i){r&&r.d(i)}}}function nT(n){let e,t,r,i=n[1]===n[2]&&wc(n);return{c(){e=S("div"),i&&i.c(),y(e,"id",n[2].id),y(e,"aria-labelledby",t=n[0][n[2].id]),y(e,"class","svelte-tabs__tab-panel svelte-epfyet"),y(e,"role","tabpanel")},m(s,o){M(s,e,o),i&&i.m(e,null),r=!0},p(s,[o]){s[1]===s[2]?i?(i.p(s,o),o&2&&P(i,1)):(i=wc(s),i.c(),P(i,1),i.m(e,null)):i&&(qe(),N(i,1,1,()=>{i=null}),je()),(!r||o&1&&t!==(t=s[0][s[2].id]))&&y(e,"aria-labelledby",t)},i(s){r||(P(i),r=!0)},o(s){N(i),r=!1},d(s){s&&O(e),i&&i.d()}}}function rT(n,e,t){let r,i,{$$slots:s={},$$scope:o}=e;const a={id:fd()},{registerPanel:l,selectedPanel:c,labeledBy:u}=Yc(Wa);return zt(n,c,h=>t(1,i=h)),zt(n,u,h=>t(0,r=h)),l(a),n.$$set=h=>{"$$scope"in h&&t(5,o=h.$$scope)},[r,i,a,c,u,o,s]}class ci extends Ne{constructor(e){super(),Ve(this,e,rT,nT,pe,{})}}const iT="modulepreload",sT=function(n){return"/"+n},Ac={},ln=function(e,t,r){if(!t||t.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=sT(s),s in Ac)return;Ac[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":iT,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};function oT(n){let e,t,r,i={ctx:n,current:null,token:null,hasCatch:!1,pending:dT,then:cT,catch:lT,blocks:[,,,]};return Ti(t=n[6](),i),{c(){e=tt(),i.block.c()},m(s,o){M(s,e,o),i.block.m(s,i.anchor=o),i.mount=()=>e.parentNode,i.anchor=e,r=!0},p(s,o){n=s,i.ctx=n,o&64&&t!==(t=n[6]())&&Ti(t,i)||tu(i,n,o)},i(s){r||(P(i.block),r=!0)},o(s){for(let o=0;o<3;o+=1){const a=i.blocks[o];N(a)}r=!1},d(s){s&&O(e),i.block.d(s),i.token=null,i=null}}}function aT(n){let e,t;const r=n[24].default,i=Mn(r,n,n[23],null);return{c(){e=S("div"),i&&i.c(),y(e,"class","typewriter-container svelte-1gv2i7t")},m(s,o){M(s,e,o),i&&i.m(e,null),t=!0},p(s,o){i&&i.p&&(!t||o&8388608)&&Fn(i,r,s,s[23],t?Ln(r,s[23],o,null):Un(s[23]),null)},i(s){t||(P(i,s),t=!0)},o(s){N(i,s),t=!1},d(s){s&&O(e),i&&i.d(s)}}}function lT(n){return{c:D,m:D,p:D,i:D,o:D,d:D}}function cT(n){let e,t,r,i={ctx:n,current:null,token:null,hasCatch:!1,pending:fT,then:hT,catch:uT,value:25,blocks:[,,,]};return Ti(t=n[7][n[0]](),i),{c(){e=tt(),i.block.c()},m(s,o){M(s,e,o),i.block.m(s,i.anchor=o),i.mount=()=>e.parentNode,i.anchor=e,r=!0},p(s,o){n=s,i.ctx=n,o&1&&t!==(t=n[7][n[0]]())&&Ti(t,i)||tu(i,n,o)},i(s){r||(P(i.block),r=!0)},o(s){for(let o=0;o<3;o+=1){const a=i.blocks[o];N(a)}r=!1},d(s){s&&O(e),i.block.d(s),i.token=null,i=null}}}function uT(n){return{c:D,m:D,p:D,i:D,o:D,d:D}}function hT(n){let e=n[4],t,r,i=n[4]&&Qs(n);return{c(){i&&i.c(),t=tt()},m(s,o){i&&i.m(s,o),M(s,t,o),r=!0},p(s,o){s[4]?e?pe(e,s[4])?(i.d(1),i=Qs(s),e=s[4],i.c(),i.m(t.parentNode,t)):i.p(s,o):(i=Qs(s),e=s[4],i.c(),i.m(t.parentNode,t)):e&&(i.d(1),i=null,e=s[4])},i(s){r||(P(i),r=!0)},o(s){N(i),r=!1},d(s){s&&O(t),i&&i.d(s)}}}function Qs(n){let e,t,r,i,s;const o=n[24].default,a=Mn(o,n,n[23],null);return{c(){e=S(n[4]),a&&a.c(),Id(n[4])(e,{class:"typewriter-container svelte-1gv2i7t"}),we(e,"cursor",n[1])},m(l,c){M(l,e,c),a&&a.m(e,null),r=!0,i||(s=Hc(t=n[25].default(e,n[5])),i=!0)},p(l,c){a&&a.p&&(!r||c&8388608)&&Fn(a,o,l,l[23],r?Ln(o,l[23],c,null):Un(l[23]),null),t&&Vt(t.update)&&c&32&&t.update.call(null,l[5]),(!r||c&2)&&we(e,"cursor",l[1])},i(l){r||(P(a,l),r=!0)},o(l){N(a,l),r=!1},d(l){l&&O(e),a&&a.d(l),i=!1,s()}}}function fT(n){return{c:D,m:D,p:D,i:D,o:D,d:D}}function dT(n){let e,t=n[2]&&Rc();return{c(){t&&t.c(),e=tt()},m(r,i){t&&t.m(r,i),M(r,e,i)},p(r,i){r[2]?t||(t=Rc(),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:D,o:D,d(r){t&&t.d(r),r&&O(e)}}}function Rc(n){let e;return{c(){e=S("div"),e.innerHTML='<p class="typing"></p>',y(e,"class","typewriter-container cursor svelte-1gv2i7t")},m(t,r){M(t,e,r)},d(t){t&&O(e)}}}function bc(n){let e,t,r,i;const s=[aT,oT],o=[];function a(l,c){return l[3]?0:1}return e=a(n),t=o[e]=s[e](n),{c(){t.c(),r=tt()},m(l,c){o[e].m(l,c),M(l,r,c),i=!0},p(l,c){let u=e;e=a(l),e===u?o[e].p(l,c):(qe(),N(o[u],1,1,()=>{o[u]=null}),je(),t=o[e],t?t.p(l,c):(t=o[e]=s[e](l),t.c()),P(t,1),t.m(r.parentNode,r))},i(l){i||(P(t),i=!0)},o(l){N(t),i=!1},d(l){o[e].d(l),l&&O(r)}}}function pT(n){let e,t=n[8],r,i,s=bc(n);return{c(){e=K(),s.c(),r=tt()},m(o,a){M(o,e,a),s.m(o,a),M(o,r,a),i=!0},p(o,[a]){a&256&&pe(t,t=o[8])?(qe(),N(s,1,1,D),je(),s=bc(o),s.c(),P(s,1),s.m(r.parentNode,r)):s.p(o,a)},i(o){i||(P(s),i=!0)},o(o){N(s),i=!1},d(o){o&&O(e),o&&O(r),s.d(o)}}}function mT(n,e,t){let r,i,s,o,a,l,c,u,h,{$$slots:f={},$$scope:d}=e,{mode:p="concurrent"}=e,{interval:g=30}=e,{cursor:_=!0}=e,{keepCursorOnFinish:m=!1}=e,{delay:T=0}=e,{showCursorOnDelay:v=!1}=e,{disabled:V=!1}=e,{element:z="div"}=e,{scrambleDuration:q=3e3}=e,{scrambleSlowdown:A=!0}=e,{unwriteInterval:G=30}=e,{wordInterval:R=1500}=e;const b={concurrent:()=>ln(()=>import("./concurrent.a976353b.js"),["assets/concurrent.a976353b.js","assets/writeEffect.c3a5a1f4.js","assets/animationSetup.305b781f.js"]),cascade:()=>ln(()=>import("./cascade.fab9bd42.js"),["assets/cascade.fab9bd42.js","assets/writeEffect.c3a5a1f4.js","assets/animationSetup.305b781f.js"]),loop:()=>ln(()=>import("./loop.7aecdb58.js"),["assets/loop.7aecdb58.js","assets/writeAndUnwriteText.dfd6d6b4.js","assets/writeEffect.c3a5a1f4.js","assets/animationSetup.305b781f.js","assets/unwriteEffect.cf28cb2c.js"]),loopOnce:()=>ln(()=>import("./loopOnce.9f3eb2fb.js"),["assets/loopOnce.9f3eb2fb.js","assets/animationSetup.305b781f.js","assets/writeEffect.c3a5a1f4.js","assets/unwriteEffect.cf28cb2c.js"]),loopRandom:()=>ln(()=>import("./loopRandom.05491647.js"),["assets/loopRandom.05491647.js","assets/writeAndUnwriteText.dfd6d6b4.js","assets/writeEffect.c3a5a1f4.js","assets/animationSetup.305b781f.js","assets/unwriteEffect.cf28cb2c.js"]),scramble:()=>ln(()=>import("./scramble.56e01c4a.js"),["assets/scramble.56e01c4a.js","assets/animationSetup.305b781f.js"])};return n.$$set=Q=>{t(8,e=In(In({},e),Ja(Q))),"mode"in Q&&t(0,p=Q.mode),"interval"in Q&&t(9,g=Q.interval),"cursor"in Q&&t(1,_=Q.cursor),"keepCursorOnFinish"in Q&&t(10,m=Q.keepCursorOnFinish),"delay"in Q&&t(11,T=Q.delay),"showCursorOnDelay"in Q&&t(2,v=Q.showCursorOnDelay),"disabled"in Q&&t(3,V=Q.disabled),"element"in Q&&t(4,z=Q.element),"scrambleDuration"in Q&&t(12,q=Q.scrambleDuration),"scrambleSlowdown"in Q&&t(13,A=Q.scrambleSlowdown),"unwriteInterval"in Q&&t(14,G=Q.unwriteInterval),"wordInterval"in Q&&t(15,R=Q.wordInterval),"$$scope"in Q&&t(23,d=Q.$$scope)},n.$$.update=()=>{n.$$.dirty&1&&t(21,r=/^loop(Once|Random)?$/.test(p)),n.$$.dirty&1&&t(22,i=["concurrent","cascade","loopOnce"].includes(p)),n.$$.dirty&4195328&&t(20,s=!i&&m),n.$$.dirty&2052&&t(19,o=T<1&&v),t(18,a=!r&&(e.unwriteInterval||e.wordInterval)),t(17,l=p!=="scramble"&&(e.scrambleDuration||e.scrambleSlowdown)),n.$$.dirty&1024&&t(16,c=typeof m=="number"&&m<1),n.$$.dirty&1048576&&s&&console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' is compatible only with finite modes"),n.$$.dirty&524288&&o&&console.warn("[svelte-typewriter] The prop 'showCursorOnDelay' has no effect if the delay is 0"),n.$$.dirty&262144&&a&&console.warn("[svelte-typewriter] The props 'unwriteInterval' and 'wordInterval' are only compatible with loop modes"),n.$$.dirty&131072&&l&&console.warn("[svelte-typewriter] The props 'scrambleDuration' and 'scrambleSlowdown' are only compatible with scramble mode"),n.$$.dirty&65536&&c&&console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' has no effect with values lower than 1"),n.$$.dirty&2048&&t(6,u=()=>new Promise(Q=>setTimeout(()=>Q(T),T))),n.$$.dirty&65054&&t(5,h={interval:g,cursor:_,keepCursorOnFinish:m,delay:T,showCursorOnDelay:v,disabled:V,element:z,scrambleDuration:q,scrambleSlowdown:A,unwriteInterval:G,wordInterval:R})},e=Ja(e),[p,_,v,V,z,h,u,b,e,g,m,T,q,A,G,R,c,l,a,o,s,r,i,d,f]}class Ga extends Ne{constructor(e){super(),Ve(this,e,mT,pT,pe,{mode:0,interval:9,cursor:1,keepCursorOnFinish:10,delay:11,showCursorOnDelay:2,disabled:3,element:4,scrambleDuration:12,scrambleSlowdown:13,unwriteInterval:14,wordInterval:15})}}function Qa(n){const e=n-1;return e*e*e+1}function Cc(n){return--n*n*n*n*n+1}function mt(n,{delay:e=0,duration:t=400,easing:r=Yt}={}){const i=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:r,css:s=>`opacity: ${s*i}`}}function gT(n,{delay:e=0,duration:t=400,easing:r=Qa,x:i=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(n),l=+a.opacity,c=a.transform==="none"?"":a.transform,u=l*(1-o),[h,f]=Za(i),[d,p]=Za(s);return{delay:e,duration:t,easing:r,css:(g,_)=>`
			transform: ${c} translate(${(1-g)*h}${f}, ${(1-g)*d}${p});
			opacity: ${l-u*_}`}}function zi(n,{delay:e=0,duration:t=400,easing:r=Qa,start:i=0,opacity:s=0}={}){const o=getComputedStyle(n),a=+o.opacity,l=o.transform==="none"?"":o.transform,c=1-i,u=a*(1-s);return{delay:e,duration:t,easing:r,css:(h,f)=>`
			transform: ${l} scale(${1-c*f});
			opacity: ${a-u*f}
		`}}function _T(n){const e=t=>{n&&!n.contains(t.target)&&!t.defaultPrevented&&n.dispatchEvent(new CustomEvent("click_outside",n))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}function Sc(n,e,t){const r=n.slice();return r[7]=e[t],r}function Pc(n){let e,t,r,i,s,o,a,l,c,u=n[0],h=[];for(let f=0;f<u.length;f+=1)h[f]=kc(Sc(n,u,f));return{c(){e=S("table"),t=S("caption"),t.textContent="Leaderboard",r=K(),i=S("tr"),i.innerHTML=`<th class="svelte-1wtm20f">Author</th> 
            <th class="svelte-1wtm20f">Quote Count</th>`,s=K();for(let f=0;f<h.length;f+=1)h[f].c();y(t,"class","svelte-1wtm20f"),y(i,"class","svelte-1wtm20f"),y(e,"class","leaderboard svelte-1wtm20f")},m(f,d){M(f,e,d),C(e,t),C(e,r),C(e,i),C(e,s);for(let p=0;p<h.length;p+=1)h[p]&&h[p].m(e,null);a=!0,l||(c=[Hc(_T.call(null,e)),oe(e,"click_outside",n[3])],l=!0)},p(f,d){if(n=f,d&1){u=n[0];let p;for(p=0;p<u.length;p+=1){const g=Sc(n,u,p);h[p]?h[p].p(g,d):(h[p]=kc(g),h[p].c(),h[p].m(e,null))}for(;p<h.length;p+=1)h[p].d(1);h.length=u.length}},i(f){a||(Oe(()=>{!a||(o||(o=xe(e,zi,{duration:250,opacity:.5,easing:Cc},!0)),o.run(1))}),a=!0)},o(f){o||(o=xe(e,zi,{duration:250,opacity:.5,easing:Cc},!1)),o.run(0),a=!1},d(f){f&&O(e),Lo(h,f),f&&o&&o.end(),l=!1,De(c)}}}function kc(n){let e,t,r=n[7].author+"",i,s,o,a=n[7].count+"",l,c;return{c(){e=S("tr"),t=S("td"),i=Je(r),s=K(),o=S("td"),l=Je(a),c=K(),y(t,"class","svelte-1wtm20f"),y(o,"class","svelte-1wtm20f"),y(e,"class","svelte-1wtm20f")},m(u,h){M(u,e,h),C(e,t),C(t,i),C(e,s),C(e,o),C(o,l),C(e,c)},p(u,h){h&1&&r!==(r=u[7].author+"")&&St(i,r),h&1&&a!==(a=u[7].count+"")&&St(l,a)},d(u){u&&O(e)}}}function yT(n){let e,t,r,i,s,o,a,l=n[1]&&Pc(n);return{c(){e=S("div"),e.innerHTML='<img src="https://cdn-icons-png.flaticon.com/512/4489/4489655.png" alt="Leaderboard button" class="svelte-1wtm20f"/>',r=K(),l&&l.c(),i=tt(),y(e,"class","icon svelte-1wtm20f")},m(c,u){M(c,e,u),n[6](e),M(c,r,u),l&&l.m(c,u),M(c,i,u),s=!0,o||(a=oe(e,"click",n[3]),o=!0)},p(c,[u]){c[1]?l?(l.p(c,u),u&2&&P(l,1)):(l=Pc(c),l.c(),P(l,1),l.m(i.parentNode,i)):l&&(qe(),N(l,1,1,()=>{l=null}),je())},i(c){s||(Oe(()=>{!s||(t||(t=xe(e,zi,{},!0)),t.run(1))}),P(l),s=!0)},o(c){t||(t=xe(e,zi,{},!1)),t.run(0),N(l),s=!1},d(c){c&&O(e),n[6](null),c&&t&&t.end(),c&&O(r),l&&l.d(c),c&&O(i),o=!1,a()}}}function vT(n,e,t){let{fullQuoteList:r=[]}=e,i,s,o=!1,a;function l(){t(1,o=!o),o?t(2,a.style["pointer-events"]="none",a):t(2,a.style["pointer-events"]="all",a)}function c(u){Ht[u?"unshift":"push"](()=>{a=u,t(2,a)})}return n.$$set=u=>{"fullQuoteList"in u&&t(4,r=u.fullQuoteList)},n.$$.update=()=>{n.$$.dirty&16&&t(5,i=r.reduce((u,{author:h})=>((h.includes(" & ")?h.split(" & "):[h]).forEach(d=>{const p=d;u[p]=(u[p]||0)+1}),u),{})),n.$$.dirty&32&&t(0,s=Object.entries(i).map(([u,h])=>({author:u,count:h})).sort((u,h)=>h.count-u.count))},[s,o,a,l,r,i,c]}class ET extends Ne{constructor(e){super(),Ve(this,e,vT,yT,pe,{fullQuoteList:4})}}function TT(n,{from:e,to:t},r={}){const i=getComputedStyle(n),s=i.transform==="none"?"":i.transform,[o,a]=i.transformOrigin.split(" ").map(parseFloat),l=e.left+e.width*o/t.width-(t.left+o),c=e.top+e.height*a/t.height-(t.top+a),{delay:u=0,duration:h=d=>Math.sqrt(d)*120,easing:f=Qa}=r;return{delay:u,duration:Vt(h)?h(Math.sqrt(l*l+c*c)):h,easing:f,css:(d,p)=>{const g=p*l,_=p*c,m=d+p*e.width/t.width,T=d+p*e.height/t.height;return`transform: ${s} translate(${g}px, ${_}px) scale(${m}, ${T});`}}}const IT={duration:4e3,initial:1,next:0,pausable:!1,dismissable:!0,reversed:!1,intro:{x:256}},wT=()=>{const{subscribe:n,update:e}=dn([]);let t=0;const r={},i=c=>c instanceof Object;return{subscribe:n,push:(c,u={})=>{const h={target:"default",...i(c)?c:{...u,msg:c}},f=r[h.target]||{},d={...IT,...f,...h,theme:{...f.theme,...h.theme},classes:[...f.classes||[],...h.classes||[]],id:++t};return e(p=>d.reversed?[...p,d]:[d,...p]),t},pop:c=>{e(u=>{if(!u.length||c===0)return[];if(i(c))return u.filter(f=>c(f));const h=c||Math.max(...u.map(f=>f.id));return u.filter(f=>f.id!==h)})},set:(c,u={})=>{const h=i(c)?{...c}:{...u,id:c};e(f=>{const d=f.findIndex(p=>p.id===h.id);return d>-1&&(f[d]={...f[d],...h}),f})},_init:(c="default",u={})=>(r[c]=u,r)}},ct=wT();function Dc(n){return Object.prototype.toString.call(n)==="[object Date]"}function Oo(n,e){if(n===e||n!==n)return()=>n;const t=typeof n;if(t!==typeof e||Array.isArray(n)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(n)){const r=e.map((i,s)=>Oo(n[s],i));return i=>r.map(s=>s(i))}if(t==="object"){if(!n||!e)throw new Error("Object cannot be null");if(Dc(n)&&Dc(e)){n=n.getTime(),e=e.getTime();const s=e-n;return o=>new Date(n+o*s)}const r=Object.keys(e),i={};return r.forEach(s=>{i[s]=Oo(n[s],e[s])}),s=>{const o={};return r.forEach(a=>{o[a]=i[a](s)}),o}}if(t==="number"){const r=e-n;return i=>n+i*r}throw new Error(`Cannot interpolate ${t} values`)}function AT(n,e={}){const t=dn(n);let r,i=n;function s(o,a){if(n==null)return t.set(n=o),Promise.resolve();i=o;let l=r,c=!1,{delay:u=0,duration:h=400,easing:f=Yt,interpolate:d=Oo}=In(In({},e),a);if(h===0)return l&&(l.abort(),l=null),t.set(n=i),Promise.resolve();const p=br()+u;let g;return r=Cr(_=>{if(_<p)return!0;c||(g=d(n,o),typeof h=="function"&&(h=h(n,o)),c=!0),l&&(l.abort(),l=null);const m=_-p;return m>h?(t.set(n=o),!1):(t.set(n=g(f(m/h))),!0)}),r.promise}return{set:s,update:(o,a)=>s(o(i,n),a),subscribe:t.subscribe}}function RT(n){let e,t=n[0].msg+"",r;return{c(){e=new Rd(!1),r=tt(),e.a=r},m(i,s){e.m(t,i,s),M(i,r,s)},p(i,s){s&1&&t!==(t=i[0].msg+"")&&e.p(t)},i:D,o:D,d(i){i&&O(r),i&&e.d()}}}function bT(n){let e,t,r;const i=[n[2]];var s=n[0].component.src;function o(a){let l={};for(let c=0;c<i.length;c+=1)l=In(l,i[c]);return{props:l}}return s&&(e=tl(s,o())),{c(){e&&ee(e.$$.fragment),t=tt()},m(a,l){e&&Y(e,a,l),M(a,t,l),r=!0},p(a,l){const c=l&4?$d(i,[qd(a[2])]):{};if(l&1&&s!==(s=a[0].component.src)){if(e){qe();const u=e;N(u.$$.fragment,1,0,()=>{Z(u,1)}),je()}s?(e=tl(s,o()),ee(e.$$.fragment),P(e.$$.fragment,1),Y(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(a){r||(e&&P(e.$$.fragment,a),r=!0)},o(a){e&&N(e.$$.fragment,a),r=!1},d(a){a&&O(t),e&&Z(e,a)}}}function Vc(n){let e,t,r;return{c(){e=S("div"),y(e,"class","_toastBtn pe svelte-l65oht"),y(e,"role","button"),y(e,"tabindex","0")},m(i,s){M(i,e,s),t||(r=[oe(e,"click",n[4]),oe(e,"keydown",n[8])],t=!0)},p:D,d(i){i&&O(e),t=!1,De(r)}}}function CT(n){let e,t,r,i,s,o,a,l,c,u;const h=[bT,RT],f=[];function d(g,_){return g[0].component?0:1}r=d(n),i=f[r]=h[r](n);let p=n[0].dismissable&&Vc(n);return{c(){e=S("div"),t=S("div"),i.c(),s=K(),p&&p.c(),o=K(),a=S("progress"),y(t,"role","status"),y(t,"class","_toastMsg svelte-l65oht"),we(t,"pe",n[0].component),y(a,"class","_toastBar svelte-l65oht"),a.value=n[1],y(e,"class","_toastItem svelte-l65oht"),we(e,"pe",n[0].pausable)},m(g,_){M(g,e,_),C(e,t),f[r].m(t,null),C(e,s),p&&p.m(e,null),C(e,o),C(e,a),l=!0,c||(u=[oe(e,"mouseenter",n[9]),oe(e,"mouseleave",n[6])],c=!0)},p(g,[_]){let m=r;r=d(g),r===m?f[r].p(g,_):(qe(),N(f[m],1,1,()=>{f[m]=null}),je(),i=f[r],i?i.p(g,_):(i=f[r]=h[r](g),i.c()),P(i,1),i.m(t,null)),(!l||_&1)&&we(t,"pe",g[0].component),g[0].dismissable?p?p.p(g,_):(p=Vc(g),p.c(),p.m(e,o)):p&&(p.d(1),p=null),(!l||_&2)&&(a.value=g[1]),(!l||_&1)&&we(e,"pe",g[0].pausable)},i(g){l||(P(i),l=!0)},o(g){N(i),l=!1},d(g){g&&O(e),f[r].d(),p&&p.d(),c=!1,De(u)}}}function ST(n,e,t){let r,{item:i}=e;const s=AT(i.initial,{duration:i.duration,easing:Yt});zt(n,s,v=>t(1,r=v));const o=()=>ct.pop(i.id),a=()=>{(r===1||r===0)&&o()};let l=i.initial,c=l,u=!1;const h=()=>{!u&&r!==l&&(s.set(r,{duration:0}),u=!0)},f=()=>{if(u){const v=i.duration,V=v-v*((r-c)/(l-c));s.set(l,{duration:V}).then(a),u=!1}};let d={};const p=(v,V="undefined")=>typeof v===V;let g;Sr((v=document)=>{if(p(v.hidden))return;const V=()=>v.hidden?h():f(),z="visibilitychange";v.addEventListener(z,V),g=()=>v.removeEventListener(z,V),V()}),Jc(()=>{p(i.onpop,"function")&&i.onpop(i.id),g&&g()});const m=v=>{v instanceof KeyboardEvent&&["Enter"," "].includes(v.key)&&o()},T=()=>{i.pausable&&h()};return n.$$set=v=>{"item"in v&&t(0,i=v.item)},n.$$.update=()=>{if(n.$$.dirty&1&&(p(i.progress)||t(0,i.next=i.progress,i)),n.$$.dirty&131&&l!==i.next&&(t(7,l=i.next),c=r,u=!1,s.set(l).then(a)),n.$$.dirty&1&&i.component){const{props:v={},sendIdTo:V}=i.component;t(2,d={...v,...V&&{[V]:i.id}})}},[i,r,d,s,o,h,f,l,m,T]}class PT extends Ne{constructor(e){super(),Ve(this,e,ST,CT,pe,{item:0})}}function Nc(n,e,t){const r=n.slice();return r[5]=e[t],r}function Oc(n,e){let t,r,i,s,o,a,l,c,u=D,h;return r=new PT({props:{item:e[5]}}),{key:n,first:null,c(){t=S("li"),ee(r.$$.fragment),i=K(),y(t,"class",s=Ya(e[5].classes.join(" "))+" svelte-yh90az"),y(t,"style",o=e[1](e[5].theme)),this.first=t},m(f,d){M(f,t,d),Y(r,t,null),C(t,i),h=!0},p(f,d){e=f;const p={};d&1&&(p.item=e[5]),r.$set(p),(!h||d&1&&s!==(s=Ya(e[5].classes.join(" "))+" svelte-yh90az"))&&y(t,"class",s),(!h||d&1&&o!==(o=e[1](e[5].theme)))&&y(t,"style",o)},r(){c=t.getBoundingClientRect()},f(){kd(t),u(),Xc(t,c)},a(){u(),u=Pd(t,c,TT,{duration:200})},i(f){h||(P(r.$$.fragment,f),Oe(()=>{!h||(l&&l.end(1),a=Ld(t,gT,e[5].intro),a.start())}),h=!0)},o(f){N(r.$$.fragment,f),a&&a.invalidate(),l=Fd(t,mt,{}),h=!1},d(f){f&&O(t),Z(r),f&&l&&l.end()}}}function kT(n){let e,t=[],r=new Map,i,s=n[0];const o=a=>a[5].id;for(let a=0;a<s.length;a+=1){let l=Nc(n,s,a),c=o(l);r.set(c,t[a]=Oc(c,l))}return{c(){e=S("ul");for(let a=0;a<t.length;a+=1)t[a].c();y(e,"class","_toastContainer svelte-yh90az")},m(a,l){M(a,e,l);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null);i=!0},p(a,[l]){if(l&3){s=a[0],qe();for(let c=0;c<t.length;c+=1)t[c].r();t=Bd(t,l,o,1,a,s,r,e,xd,Oc,null,Nc);for(let c=0;c<t.length;c+=1)t[c].a();je()}},i(a){if(!i){for(let l=0;l<s.length;l+=1)P(t[l]);i=!0}},o(a){for(let l=0;l<t.length;l+=1)N(t[l]);i=!1},d(a){a&&O(e);for(let l=0;l<t.length;l+=1)t[l].d()}}}function DT(n,e,t){let r;zt(n,ct,l=>t(4,r=l));let{options:i={}}=e,{target:s="default"}=e,o;const a=l=>Object.keys(l).reduce((c,u)=>`${c}${u}:${l[u]};`,"");return n.$$set=l=>{"options"in l&&t(2,i=l.options),"target"in l&&t(3,s=l.target)},n.$$.update=()=>{n.$$.dirty&12&&ct._init(s,i),n.$$.dirty&24&&t(0,o=r.filter(l=>l.target===s))},[o,a,i,s,r]}class VT extends Ne{constructor(e){super(),Ve(this,e,DT,kT,pe,{options:2,target:3})}}function NT(n){let e;return{c(){e=S("h1"),e.textContent="Click below to fetch a random no context quote",y(e,"class","random-text svelte-po4gjl")},m(t,r){M(t,e,r)},p:D,i:D,o:D,d(t){t&&O(e)}}}function OT(n){let e,t,r,i,s,o;t=new Ga({props:{mode:"concurrent",keepCursorOnFinish:!0,$$slots:{default:[MT]},$$scope:{ctx:n}}});const a=[FT,LT],l=[];function c(u,h){return u[1]?0:1}return i=c(n),s=l[i]=a[i](n),{c(){e=S("div"),ee(t.$$.fragment),r=K(),s.c(),y(e,"class","typewriter-block svelte-po4gjl")},m(u,h){M(u,e,h),Y(t,e,null),C(e,r),l[i].m(e,null),o=!0},p(u,h){const f={};h&8196&&(f.$$scope={dirty:h,ctx:u}),t.$set(f);let d=i;i=c(u),i===d?l[i].p(u,h):(qe(),N(l[d],1,1,()=>{l[d]=null}),je(),s=l[i],s?s.p(u,h):(s=l[i]=a[i](u),s.c()),P(s,1),s.m(e,null))},i(u){o||(P(t.$$.fragment,u),P(s),o=!0)},o(u){N(t.$$.fragment,u),N(s),o=!1},d(u){u&&O(e),Z(t),l[i].d()}}}function MT(n){let e,t=n[2].quote+"",r;return{c(){e=S("h1"),r=Je(t),y(e,"class","random-text svelte-po4gjl")},m(i,s){M(i,e,s),C(e,r)},p(i,s){s&4&&t!==(t=i[2].quote+"")&&St(r,t)},d(i){i&&O(e)}}}function LT(n){let e,t;return e=new Ga({props:{mode:"concurrent",cursor:!1,$$slots:{default:[UT]},$$scope:{ctx:n}}}),{c(){ee(e.$$.fragment)},m(r,i){Y(e,r,i),t=!0},p(r,i){const s={};i&8196&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){Z(e,r)}}}function FT(n){let e,t;return e=new Ga({props:{mode:"concurrent",cursor:!1,$$slots:{default:[xT]},$$scope:{ctx:n}}}),{c(){ee(e.$$.fragment)},m(r,i){Y(e,r,i),t=!0},p(r,i){const s={};i&8198&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){Z(e,r)}}}function UT(n){let e,t=n[2].author+"",r;return{c(){e=S("h1"),r=Je(t),y(e,"class","random-text svelte-po4gjl")},m(i,s){M(i,e,s),C(e,r)},p(i,s){s&4&&t!==(t=i[2].author+"")&&St(r,t)},d(i){i&&O(e)}}}function xT(n){let e,t=n[2].author==""?"":"Click to Reveal",r,i,s;return{c(){e=S("h1"),r=Je(t),y(e,"id","spoiler-author"),y(e,"class","random-text svelte-po4gjl")},m(o,a){M(o,e,a),C(e,r),i||(s=oe(e,"click",n[7]),i=!0)},p(o,a){a&4&&t!==(t=o[2].author==""?"":"Click to Reveal")&&St(r,t)},d(o){o&&O(e),i=!1,s()}}}function BT(n){let e,t,r,i,s,o,a,l,c,u,h,f,d,p,g,_,m,T,v,V,z;t=new ET({props:{fullQuoteList:n[0]}});const q=[OT,NT],A=[];function G(R,b){return R[2]!==void 0?0:1}return s=G(n),o=A[s]=q[s](n),f=new On({props:{icon:HE,size:"lg"}}),_=new On({props:{icon:$E,size:"lg"}}),{c(){e=S("div"),ee(t.$$.fragment),r=K(),i=S("div"),o.c(),a=K(),l=S("button"),l.textContent="Load Random Quote",c=K(),u=S("div"),h=S("button"),ee(f.$$.fragment),p=K(),g=S("button"),ee(_.$$.fragment),y(i,"class","heading svelte-po4gjl"),y(l,"class","custom-button load-quote svelte-po4gjl"),y(h,"class","custom-button upvote svelte-po4gjl"),h.disabled=d=n[2]==null,we(h,"selected",n[3]==="upvote"),y(g,"class","custom-button downvote svelte-po4gjl"),g.disabled=m=n[2]==null,we(g,"selected",n[3]==="downvote"),y(u,"class","vote-buttons svelte-po4gjl"),y(e,"class","parent-div quotes svelte-po4gjl")},m(R,b){M(R,e,b),Y(t,e,null),C(e,r),C(e,i),A[s].m(i,null),C(e,a),C(e,l),C(e,c),C(e,u),C(u,h),Y(f,h,null),C(u,p),C(u,g),Y(_,g,null),v=!0,V||(z=[oe(l,"click",n[4]),oe(h,"click",n[8]),oe(g,"click",n[9])],V=!0)},p(R,[b]){const Q={};b&1&&(Q.fullQuoteList=R[0]),t.$set(Q);let bs=s;s=G(R),s===bs?A[s].p(R,b):(qe(),N(A[bs],1,1,()=>{A[bs]=null}),je(),o=A[s],o?o.p(R,b):(o=A[s]=q[s](R),o.c()),P(o,1),o.m(i,null)),(!v||b&4&&d!==(d=R[2]==null))&&(h.disabled=d),(!v||b&8)&&we(h,"selected",R[3]==="upvote"),(!v||b&4&&m!==(m=R[2]==null))&&(g.disabled=m),(!v||b&8)&&we(g,"selected",R[3]==="downvote")},i(R){v||(P(t.$$.fragment,R),P(o),P(f.$$.fragment,R),P(_.$$.fragment,R),Oe(()=>{!v||(T||(T=xe(e,mt,{duration:100},!0)),T.run(1))}),v=!0)},o(R){N(t.$$.fragment,R),N(o),N(f.$$.fragment,R),N(_.$$.fragment,R),T||(T=xe(e,mt,{duration:100},!1)),T.run(0),v=!1},d(R){R&&O(e),Z(t),A[s].d(),Z(f),Z(_),R&&T&&T.end(),V=!1,De(z)}}}function $T(n){for(let e=n.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}}function qT(n,e,t){let{docRef:r}=e,{fullQuoteList:i=[]}=e,s=[],o=!0,a,l;function c(){console.log("[NC Log] Reached the end of the quote list. Resetting."),s=[...i],$T(s)}async function u(){s.length===0&&c(),t(1,o=!0),t(2,a=s.pop()),t(2,a.quote+=" ",a),t(3,l=h())}function h(){if(a===void 0||a.votes===void 0){console.log("failed");return}if(at.currentUser){console.log("is user"),console.log("finding vote");const _=a.votes.find(m=>m.uuid===at.currentUser.uid);return console.log(_),_?_.vote:void 0}}async function f(_){let m=i.findIndex(z=>z.quote===a.quote),T=_?"upvote":"downvote";i[m].votes===void 0&&t(0,i[m].votes=[],i);let v=i[m].votes.findIndex(z=>z.uuid===at.currentUser.uid),V=!1;v!==-1?i[m].votes[v].vote===T?(i[m].votes.splice(v,1),V=!0):t(0,i[m].votes[v].vote=T,i):i[m].votes.push({uuid:at.currentUser.uid,vote:T}),await Ka(r,{quote_list:i}).then(()=>{v!==-1?V?(console.log("[NC Log] Removed vote from current quote"),ct.push("\u2705 Removed vote!")):(console.log("[NC Log] Changed vote on current quote"),ct.push("\u2705 Updated vote!")):(console.log("[NC Log] Added vote to current quote"),ct.push("\u2705 Submitted vote!")),t(3,l=V?void 0:T)})}const d=()=>t(1,o=!1),p=()=>f(!0),g=()=>f(!1);return n.$$set=_=>{"docRef"in _&&t(6,r=_.docRef),"fullQuoteList"in _&&t(0,i=_.fullQuoteList)},[i,o,a,l,u,f,r,d,p,g]}class jT extends Ne{constructor(e){super(),Ve(this,e,qT,BT,pe,{docRef:6,fullQuoteList:0})}}function zT(n){let e,t,r,i,s,o,a,l,c,u,h,f;return{c(){e=S("div"),t=S("h2"),t.textContent="Submit a new quote",r=K(),i=S("input"),s=K(),o=S("input"),a=K(),l=S("button"),l.textContent="Add Quote",y(t,"class","center-header"),y(i,"id","new-quote-input"),y(i,"type","text"),y(i,"placeholder","Submit a new quote here"),y(i,"class","svelte-1l50zz0"),y(o,"id","new-quote-input-author"),y(o,"type","text"),y(o,"placeholder","Write quote author here. If multiple, separate with &"),y(o,"class","svelte-1l50zz0"),y(l,"class","custom-button submit svelte-1l50zz0"),y(e,"class","parent-div quotes svelte-1l50zz0")},m(d,p){M(d,e,p),C(e,t),C(e,r),C(e,i),Tt(i,n[0]),C(e,s),C(e,o),Tt(o,n[1]),C(e,a),C(e,l),u=!0,h||(f=[oe(i,"input",n[4]),oe(o,"input",n[5]),oe(l,"click",n[2])],h=!0)},p(d,[p]){p&1&&i.value!==d[0]&&Tt(i,d[0]),p&2&&o.value!==d[1]&&Tt(o,d[1])},i(d){u||(Oe(()=>{!u||(c||(c=xe(e,mt,{duration:100},!0)),c.run(1))}),u=!0)},o(d){c||(c=xe(e,mt,{duration:100},!1)),c.run(0),u=!1},d(d){d&&O(e),d&&c&&c.end(),h=!1,De(f)}}}function HT(n,e,t){let{docRef:r}=e,i="",s="";async function o(){if(i!=""&&s!=""){let c=new Date,u={quote:i.trim(),author:s.trim(),datetime:c};ct.push("\u{1F503} Submitting quote..."),await Ka(r,{quote_list:hd(u)}).then(()=>{console.log("[NC Log] Added new quote to database"),ct.push("\u2705 Quote submitted!"),t(0,i=""),t(1,s="")})}}function a(){i=this.value,t(0,i)}function l(){s=this.value,t(1,s)}return n.$$set=c=>{"docRef"in c&&t(3,r=c.docRef)},[i,s,o,r,a,l]}class KT extends Ne{constructor(e){super(),Ve(this,e,HT,zT,pe,{docRef:3})}}function Mc(n,e,t){const r=n.slice();return r[10]=e[t],r[12]=t,r}function Lc(n,e,t){const r=n.slice();return r[13]=e[t],r}function Fc(n){let e,t,r;return{c(){e=S("button"),e.innerHTML='<span class="svelte-skp0tm">\xD7</span>',y(e,"class","clear-button svelte-skp0tm")},m(i,s){M(i,e,s),t||(r=oe(e,"click",n[7]),t=!0)},p:D,d(i){i&&O(e),t=!1,r()}}}function Uc(n){let e,t=n[13]+"",r,i;return{c(){e=S("option"),r=Je(t),e.__value=i=n[13],e.value=e.__value},m(s,o){M(s,e,o),C(e,r)},p(s,o){o&1&&t!==(t=s[13]+"")&&St(r,t),o&1&&i!==(i=s[13])&&(e.__value=i,e.value=e.__value)},d(s){s&&O(e)}}}function WT(n){let e,t=n[4],r=[];for(let i=0;i<t.length;i+=1)r[i]=xc(Mc(n,t,i));return{c(){e=S("ul");for(let i=0;i<r.length;i+=1)r[i].c();y(e,"id","quote-search"),y(e,"class","quote-list svelte-skp0tm")},m(i,s){M(i,e,s);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null)},p(i,s){if(s&16){t=i[4];let o;for(o=0;o<t.length;o+=1){const a=Mc(i,t,o);r[o]?r[o].p(a,s):(r[o]=xc(a),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},d(i){i&&O(e),Lo(r,i)}}}function GT(n){let e;return{c(){e=S("ul"),e.innerHTML='<li class="svelte-skp0tm">No results found.</li>',y(e,"class","quote-list svelte-skp0tm")},m(t,r){M(t,e,r)},p:D,d(t){t&&O(e)}}}function xc(n){let e,t,r=n[10].quote+"",i,s,o,a=n[10].author+"",l,c;return{c(){e=S("li"),t=S("span"),i=Je(r),s=K(),o=S("span"),l=Je(a),c=K(),y(t,"class","quote svelte-skp0tm"),y(o,"class","author svelte-skp0tm"),y(e,"class","svelte-skp0tm")},m(u,h){M(u,e,h),C(e,t),C(t,i),C(e,s),C(e,o),C(o,l),C(e,c)},p(u,h){h&16&&r!==(r=u[10].quote+"")&&St(i,r),h&16&&a!==(a=u[10].author+"")&&St(l,a)},d(u){u&&O(e)}}}function QT(n){let e,t,r,i,s,o,a,l,c,u,h,f,d,p,g,_,m=n[2]&&Fc(n),T=Array.from(new Set(n[0].map(Bc))).filter($c).sort(qc),v=[];for(let A=0;A<T.length;A+=1)v[A]=Uc(Lc(n,T,A));function V(A,G){return A[5]?GT:WT}let z=V(n),q=z(n);return{c(){e=S("div"),t=S("h2"),t.textContent="Search",r=K(),i=S("div"),s=S("input"),o=K(),m&&m.c(),a=K(),l=S("button"),l.textContent="Search",c=K(),u=S("select"),h=S("option"),h.textContent="All Authors";for(let A=0;A<v.length;A+=1)v[A].c();f=K(),q.c(),y(s,"type","text"),y(s,"placeholder","Search..."),y(s,"class","svelte-skp0tm"),y(l,"class","custom-button svelte-skp0tm"),y(i,"class","search-container svelte-skp0tm"),h.__value="",h.value=h.__value,y(u,"class","author-select svelte-skp0tm"),n[3]===void 0&&Oe(()=>n[9].call(u)),y(e,"class","parent-div search svelte-skp0tm")},m(A,G){M(A,e,G),C(e,t),C(e,r),C(e,i),C(i,s),Tt(s,n[2]),C(i,o),m&&m.m(i,null),C(i,a),C(i,l),C(e,c),C(e,u),C(u,h);for(let R=0;R<v.length;R+=1)v[R]&&v[R].m(u,null);el(u,n[3],!0),C(e,f),q.m(e,null),p=!0,g||(_=[oe(s,"input",n[8]),oe(l,"click",n[1]),oe(u,"change",n[9]),oe(u,"change",n[6])],g=!0)},p(A,[G]){if(G&4&&s.value!==A[2]&&Tt(s,A[2]),A[2]?m?m.p(A,G):(m=Fc(A),m.c(),m.m(i,a)):m&&(m.d(1),m=null),G&1){T=Array.from(new Set(A[0].map(Bc))).filter($c).sort(qc);let R;for(R=0;R<T.length;R+=1){const b=Lc(A,T,R);v[R]?v[R].p(b,G):(v[R]=Uc(b),v[R].c(),v[R].m(u,null))}for(;R<v.length;R+=1)v[R].d(1);v.length=T.length}G&9&&el(u,A[3]),z===(z=V(A))&&q?q.p(A,G):(q.d(1),q=z(A),q&&(q.c(),q.m(e,null)))},i(A){p||(Oe(()=>{!p||(d||(d=xe(e,mt,{duration:100},!0)),d.run(1))}),p=!0)},o(A){d||(d=xe(e,mt,{duration:100},!1)),d.run(0),p=!1},d(A){A&&O(e),m&&m.d(),Lo(v,A),q.d(),A&&d&&d.end(),g=!1,De(_)}}}const Bc=n=>n.author,$c=n=>!n.includes("&"),qc=(n,e)=>n.localeCompare(e);function XT(n,e,t){let{fullQuoteList:r=[]}=e,i="",s="",o=[],a=!1;function l(){console.log("[NC Log] Searching"),t(4,o=r.filter(d=>{const p=i.toLowerCase(),g=d.quote.toLowerCase(),_=d.author.toLowerCase(),m=_.split(/[&,]/).map(T=>T.trim());return(g.includes(p)||_.includes(p))&&(s===""||m.includes(s.toLowerCase()))})),o.reverse(),t(5,a=o.length===0),document.getElementById("quote-search")!==null&&(document.getElementById("quote-search").scrollTop=0)}function c(d){t(3,s=d.target.value),l()}function u(){t(2,i="")}Sr(()=>{l()});function h(){i=this.value,t(2,i)}function f(){s=Ad(this),t(3,s),t(0,r)}return n.$$set=d=>{"fullQuoteList"in d&&t(0,r=d.fullQuoteList)},[r,l,i,s,o,a,c,u,h,f]}class JT extends Ne{constructor(e){super(),Ve(this,e,XT,QT,pe,{fullQuoteList:0,search:1})}get search(){return this.$$.ctx[1]}}function YT(n){let e,t,r;return{c(){e=S("div"),e.innerHTML=`<h2 class="center-header">2023 No Context Champions</h2> 
    <ul class="quote-list award-list svelte-15maj02"><li class="svelte-15maj02">Ali, Blair - 54</li> 
        <li class="svelte-15maj02">Ross - 47</li> 
        <li class="svelte-15maj02">Ewan - 36</li></ul>`,y(e,"class","parent-div quotes")},m(i,s){M(i,e,s),r=!0},p:D,i(i){r||(Oe(()=>{!r||(t||(t=xe(e,mt,{duration:100},!0)),t.run(1))}),r=!0)},o(i){t||(t=xe(e,mt,{duration:100},!1)),t.run(0),r=!1},d(i){i&&O(e),i&&t&&t.end()}}}class ZT extends Ne{constructor(e){super(),Ve(this,e,null,YT,pe,{})}}function eI(n){let e,t;return e=new On({props:{icon:BE,size:"lg"}}),{c(){ee(e.$$.fragment)},m(r,i){Y(e,r,i),t=!0},p:D,i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){Z(e,r)}}}function tI(n){let e,t;return e=new On({props:{icon:zE,size:"lg"}}),{c(){ee(e.$$.fragment)},m(r,i){Y(e,r,i),t=!0},p:D,i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){Z(e,r)}}}function nI(n){let e,t;return e=new On({props:{icon:jE,size:"lg"}}),{c(){ee(e.$$.fragment)},m(r,i){Y(e,r,i),t=!0},p:D,i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){Z(e,r)}}}function rI(n){let e,t;return e=new On({props:{icon:UE,size:"lg"}}),{c(){ee(e.$$.fragment)},m(r,i){Y(e,r,i),t=!0},p:D,i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){Z(e,r)}}}function iI(n){let e,t,r,i,s,o,a,l;return e=new li({props:{$$slots:{default:[eI]},$$scope:{ctx:n}}}),r=new li({props:{$$slots:{default:[tI]},$$scope:{ctx:n}}}),s=new li({props:{$$slots:{default:[nI]},$$scope:{ctx:n}}}),a=new li({props:{$$slots:{default:[rI]},$$scope:{ctx:n}}}),{c(){ee(e.$$.fragment),t=K(),ee(r.$$.fragment),i=K(),ee(s.$$.fragment),o=K(),ee(a.$$.fragment)},m(c,u){Y(e,c,u),M(c,t,u),Y(r,c,u),M(c,i,u),Y(s,c,u),M(c,o,u),Y(a,c,u),l=!0},p(c,u){const h={};u&256&&(h.$$scope={dirty:u,ctx:c}),e.$set(h);const f={};u&256&&(f.$$scope={dirty:u,ctx:c}),r.$set(f);const d={};u&256&&(d.$$scope={dirty:u,ctx:c}),s.$set(d);const p={};u&256&&(p.$$scope={dirty:u,ctx:c}),a.$set(p)},i(c){l||(P(e.$$.fragment,c),P(r.$$.fragment,c),P(s.$$.fragment,c),P(a.$$.fragment,c),l=!0)},o(c){N(e.$$.fragment,c),N(r.$$.fragment,c),N(s.$$.fragment,c),N(a.$$.fragment,c),l=!1},d(c){Z(e,c),c&&O(t),Z(r,c),c&&O(i),Z(s,c),c&&O(o),Z(a,c)}}}function sI(n){let e,t,r;function i(o){n[3](o)}let s={docRef:n[2]};return n[0]!==void 0&&(s.fullQuoteList=n[0]),e=new jT({props:s}),Ht.push(()=>Zs(e,"fullQuoteList",i)),{c(){ee(e.$$.fragment)},m(o,a){Y(e,o,a),r=!0},p(o,a){const l={};!t&&a&1&&(t=!0,l.fullQuoteList=o[0],Ys(()=>t=!1)),e.$set(l)},i(o){r||(P(e.$$.fragment,o),r=!0)},o(o){N(e.$$.fragment,o),r=!1},d(o){Z(e,o)}}}function oI(n){let e,t;return e=new KT({props:{docRef:n[2]}}),{c(){ee(e.$$.fragment)},m(r,i){Y(e,r,i),t=!0},p:D,i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){Z(e,r)}}}function aI(n){let e,t,r,i;function s(l){n[4](l)}function o(l){n[5](l)}let a={};return n[0]!==void 0&&(a.fullQuoteList=n[0]),n[1]!==void 0&&(a.search=n[1]),e=new JT({props:a}),Ht.push(()=>Zs(e,"fullQuoteList",s)),Ht.push(()=>Zs(e,"search",o)),{c(){ee(e.$$.fragment)},m(l,c){Y(e,l,c),i=!0},p(l,c){const u={};!t&&c&1&&(t=!0,u.fullQuoteList=l[0],Ys(()=>t=!1)),!r&&c&2&&(r=!0,u.search=l[1],Ys(()=>r=!1)),e.$set(u)},i(l){i||(P(e.$$.fragment,l),i=!0)},o(l){N(e.$$.fragment,l),i=!1},d(l){Z(e,l)}}}function lI(n){let e,t;return e=new ZT({}),{c(){ee(e.$$.fragment)},m(r,i){Y(e,r,i),t=!0},i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){Z(e,r)}}}function cI(n){let e,t,r,i,s,o,a,l,c,u;return e=new tT({props:{$$slots:{default:[iI]},$$scope:{ctx:n}}}),r=new ci({props:{$$slots:{default:[sI]},$$scope:{ctx:n}}}),s=new ci({props:{$$slots:{default:[oI]},$$scope:{ctx:n}}}),a=new ci({props:{$$slots:{default:[aI]},$$scope:{ctx:n}}}),c=new ci({props:{$$slots:{default:[lI]},$$scope:{ctx:n}}}),{c(){ee(e.$$.fragment),t=K(),ee(r.$$.fragment),i=K(),ee(s.$$.fragment),o=K(),ee(a.$$.fragment),l=K(),ee(c.$$.fragment)},m(h,f){Y(e,h,f),M(h,t,f),Y(r,h,f),M(h,i,f),Y(s,h,f),M(h,o,f),Y(a,h,f),M(h,l,f),Y(c,h,f),u=!0},p(h,f){const d={};f&256&&(d.$$scope={dirty:f,ctx:h}),e.$set(d);const p={};f&257&&(p.$$scope={dirty:f,ctx:h}),r.$set(p);const g={};f&256&&(g.$$scope={dirty:f,ctx:h}),s.$set(g);const _={};f&259&&(_.$$scope={dirty:f,ctx:h}),a.$set(_);const m={};f&256&&(m.$$scope={dirty:f,ctx:h}),c.$set(m)},i(h){u||(P(e.$$.fragment,h),P(r.$$.fragment,h),P(s.$$.fragment,h),P(a.$$.fragment,h),P(c.$$.fragment,h),u=!0)},o(h){N(e.$$.fragment,h),N(r.$$.fragment,h),N(s.$$.fragment,h),N(a.$$.fragment,h),N(c.$$.fragment,h),u=!1},d(h){Z(e,h),h&&O(t),Z(r,h),h&&O(i),Z(s,h),h&&O(o),Z(a,h),h&&O(l),Z(c,h)}}}function uI(n){let e,t;return e=new XE({props:{$$slots:{default:[cI]},$$scope:{ctx:n}}}),{c(){ee(e.$$.fragment)},m(r,i){Y(e,r,i),t=!0},p(r,[i]){const s={};i&259&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){Z(e,r)}}}function hI(n,e,t){let r=[],i=()=>{};const s=Ws(Gs,"quotes","quote_list");SE(s,u=>{if(console.log("[NC Log] New snapshot found"),r!==u.data().quote_list){let h=r.length;t(0,r=u.data().quote_list),h<r.length&&h!==0&&new Notification("New Quote Added",{body:r.at(-1).quote}),i()}});const o=async()=>{const u=await CE(Ws(Gs,"notifications","startup_notif"));if(u.exists()){if(u.data().read_list&&u.data().read_list.includes(at.currentUser.uid))return;u.data().body&&u.data().body!==""&&ct.push(u.data().body,{theme:{"--toastBackground":u.data().background_colour||"#3e3e3f","--toastColor":u.data().colour||"#ffffff"},onpop:async()=>{await Ka(Ws(Gs,"notifications","startup_notif"),{read_list:hd(at.currentUser.uid)})},initial:0})}else console.log("[NC Log] No startup notification found.")};"Notification"in window&&Notification.permission!=="denied"&&Notification.permission!=="granted"&&Notification.requestPermission(),Sr(()=>{o()});function a(u){r=u,t(0,r)}function l(u){r=u,t(0,r)}function c(u){i=u,t(1,i)}return[r,i,s,a,l,c]}class fI extends Ne{constructor(e){super(),Ve(this,e,hI,uI,pe,{})}}function dI(n){let e,t,r,i,s,o,a,l,c,u,h,f;return{c(){e=S("div"),t=S("button"),t.textContent="Sign In with Google",r=K(),i=S("p"),i.textContent="(This means no more typing in a password each time)",s=K(),o=S("h1"),o.textContent="OR",a=K(),l=S("label"),l.textContent="Password:",c=K(),u=S("input"),y(t,"id","login"),y(t,"class","custom-button svelte-1tx78it"),y(i,"class","svelte-1tx78it"),y(l,"for","password"),y(l,"class","svelte-1tx78it"),y(u,"id","password"),y(u,"type","password"),y(u,"class","svelte-1tx78it"),y(e,"id","login-container"),y(e,"class","svelte-1tx78it")},m(d,p){M(d,e,p),C(e,t),C(e,r),C(e,i),C(e,s),C(e,o),C(e,a),C(e,l),C(e,c),C(e,u),Tt(u,n[2]),h||(f=[oe(t,"click",n[3]),oe(u,"input",n[5])],h=!0)},p(d,p){p&4&&u.value!==d[2]&&Tt(u,d[2])},i:D,o:D,d(d){d&&O(e),h=!1,De(f)}}}function pI(n){let e,t;return e=new fI({}),{c(){ee(e.$$.fragment)},m(r,i){Y(e,r,i),t=!0},p:D,i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){Z(e,r)}}}function mI(n){let e;return{c(){e=S("div"),e.innerHTML='<span class="loader svelte-1tx78it"></span>',y(e,"id","login-container"),y(e,"class","svelte-1tx78it")},m(t,r){M(t,e,r)},p:D,i:D,o:D,d(t){t&&O(e)}}}function gI(n){let e,t,r,i,s,o;const a=[mI,pI,dI],l=[];function c(u,h){return h&5&&(e=null),u[1]?0:(e==null&&(e=!!(u[0]||u[4](u[2])===1252560117)),e?1:2)}return t=c(n,-1),r=l[t]=a[t](n),s=new VT({}),{c(){r.c(),i=K(),ee(s.$$.fragment)},m(u,h){l[t].m(u,h),M(u,i,h),Y(s,u,h),o=!0},p(u,[h]){let f=t;t=c(u,h),t===f?l[t].p(u,h):(qe(),N(l[f],1,1,()=>{l[f]=null}),je(),r=l[t],r?r.p(u,h):(r=l[t]=a[t](u),r.c()),P(r,1),r.m(i.parentNode,i))},i(u){o||(P(r),P(s.$$.fragment,u),o=!0)},o(u){N(r),N(s.$$.fragment,u),o=!1},d(u){l[t].d(u),u&&O(i),Z(s,u)}}}function _I(n,e,t){const r=new nt;let i=null,s=!0;at.onAuthStateChanged(u=>{t(1,s=!1),t(0,i=u)});function o(){Sg(at,r).then(u=>{t(0,i=u.user)}).catch(u=>{console.log(u.code,u.message)})}let a="";const l=u=>u.split("").reduce((h,f)=>(h=(h<<5)-h+f.charCodeAt(0),h&h),0);function c(){a=this.value,t(2,a)}return[i,s,a,o,l,c]}class yI extends Ne{constructor(e){super(),Ve(this,e,_I,gI,pe,{})}}new yI({target:document.getElementById("app")});export{vI as c};
