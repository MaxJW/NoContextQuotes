(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function D(){}const Qt=n=>n;function vn(n,e){for(const t in e)n[t]=e[t];return n}function ud(n){return!!n&&(typeof n=="object"||typeof n=="function")&&typeof n.then=="function"}function Uc(n){return n()}function za(){return Object.create(null)}function Se(n){n.forEach(Uc)}function St(n){return typeof n=="function"}function ke(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function hd(n){return Object.keys(n).length===0}function fd(n,...e){if(n==null)return D;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function qt(n,e,t){n.$$.on_destroy.push(fd(e,t))}function Dn(n,e,t,r){if(n){const i=Bc(n,e,t,r);return n[0](i)}}function Bc(n,e,t,r){return n[1]&&r?vn(t.ctx.slice(),n[1](r(e))):t.ctx}function Vn(n,e,t,r){if(n[2]&&r){const i=n[2](r(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|i[a];return s}return e.dirty|i}return e.dirty}function Nn(n,e,t,r,i,s){if(i){const o=Bc(e,t,r,s);n.p(o,i)}}function On(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let r=0;r<t;r++)e[r]=-1;return e}return-1}function Ha(n){const e={};for(const t in n)t[0]!=="$"&&(e[t]=n[t]);return e}function Ka(n){return n==null?"":n}function qc(n){return n&&St(n.destroy)?n.destroy:D}function Wa(n){const e=typeof n=="string"&&n.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[n,"px"]}const jc=typeof window<"u";let wr=jc?()=>window.performance.now():()=>Date.now(),Co=jc?n=>requestAnimationFrame(n):D;const hn=new Set;function $c(n){hn.forEach(e=>{e.c(n)||(hn.delete(e),e.f())}),hn.size!==0&&Co($c)}function Ar(n){let e;return hn.size===0&&Co($c),{promise:new Promise(t=>{hn.add(e={c:n,f:t})}),abort(){hn.delete(e)}}}function b(n,e){n.appendChild(e)}function zc(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function dd(n){const e=P("style");return pd(zc(n),e),e.sheet}function pd(n,e){return b(n.head||n,e),e.sheet}function M(n,e,t){n.insertBefore(e,t||null)}function S(n){n.parentNode&&n.parentNode.removeChild(n)}function Po(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function P(n){return document.createElement(n)}function Ft(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function Je(n){return document.createTextNode(n)}function Q(){return Je(" ")}function Ue(){return Je("")}function le(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function _(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}const md=["width","height"];function gd(n,e){const t=Object.getOwnPropertyDescriptors(n.__proto__);for(const r in e)e[r]==null?n.removeAttribute(r):r==="style"?n.style.cssText=e[r]:r==="__value"?n.value=n[r]=e[r]:t[r]&&t[r].set&&md.indexOf(r)===-1?n[r]=e[r]:_(n,r,e[r])}function _d(n,e){Object.keys(e).forEach(t=>{yd(n,t,e[t])})}function yd(n,e,t){e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:_(n,e,t)}function vd(n){return/-/.test(n)?_d:gd}function Ed(n){return Array.from(n.childNodes)}function Rt(n,e){e=""+e,n.data!==e&&(n.data=e)}function yt(n,e){n.value=e==null?"":e}function Ga(n,e,t){for(let r=0;r<n.options.length;r+=1){const i=n.options[r];if(i.__value===e){i.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function Td(n){const e=n.querySelector(":checked");return e&&e.__value}function Le(n,e,t){n.classList[t?"add":"remove"](e)}function Hc(n,e,{bubbles:t=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(n,t,r,e),i}class Id{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,r=null){this.e||(this.is_svg?this.e=Ft(t.nodeName):this.e=P(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(r)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)M(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(S)}}function Qa(n,e){return new n(e)}const di=new Map;let pi=0;function wd(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function Ad(n,e){const t={stylesheet:dd(e),rules:{}};return di.set(n,t),t}function tr(n,e,t,r,i,s,o,a=0){const l=16.666/r;let c=`{
`;for(let y=0;y<=1;y+=l){const m=e+(t-e)*s(y);c+=y*100+`%{${o(m,1-m)}}
`}const u=c+`100% {${o(t,1-t)}}
}`,h=`__svelte_${wd(u)}_${a}`,f=zc(n),{stylesheet:d,rules:p}=di.get(f)||Ad(f,n);p[h]||(p[h]=!0,d.insertRule(`@keyframes ${h} ${u}`,d.cssRules.length));const g=n.style.animation||"";return n.style.animation=`${g?`${g}, `:""}${h} ${r}ms linear ${i}ms 1 both`,pi+=1,h}function nr(n,e){const t=(n.style.animation||"").split(", "),r=t.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),i=t.length-r.length;i&&(n.style.animation=r.join(", "),pi-=i,pi||Rd())}function Rd(){Co(()=>{pi||(di.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&S(e)}),di.clear())})}function bd(n,e,t,r){if(!e)return D;const i=n.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return D;const{delay:s=0,duration:o=300,easing:a=Qt,start:l=wr()+s,end:c=l+o,tick:u=D,css:h}=t(n,{from:e,to:i},r);let f=!0,d=!1,p;function g(){h&&(p=tr(n,0,1,o,s,a,h)),s||(d=!0)}function y(){h&&nr(n,p),f=!1}return Ar(m=>{if(!d&&m>=l&&(d=!0),d&&m>=c&&(u(1,0),y()),!f)return!1;if(d){const I=m-l,T=0+1*a(I/o);u(T,1-T)}return!0}),g(),u(0,1),y}function Cd(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:r}=e,i=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=r,Kc(n,i)}}function Kc(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const r=getComputedStyle(n),i=r.transform==="none"?"":r.transform;n.style.transform=`${i} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}let rr;function rt(n){rr=n}function Xt(){if(!rr)throw new Error("Function called outside component initialization");return rr}function So(n){Xt().$$.on_mount.push(n)}function Pd(n){Xt().$$.after_update.push(n)}function Wc(n){Xt().$$.on_destroy.push(n)}function tI(){const n=Xt();return(e,t,{cancelable:r=!1}={})=>{const i=n.$$.callbacks[e];if(i){const s=Hc(e,t,{cancelable:r});return i.slice().forEach(o=>{o.call(n,s)}),!s.defaultPrevented}return!0}}function Sd(n,e){return Xt().$$.context.set(n,e),e}function Gc(n){return Xt().$$.context.get(n)}const on=[],mi=[];let fn=[];const Xa=[],Qc=Promise.resolve();let zs=!1;function Xc(){zs||(zs=!0,Qc.then(ko))}function kd(){return Xc(),Qc}function Ne(n){fn.push(n)}const Ts=new Set;let tn=0;function ko(){if(tn!==0)return;const n=rr;do{try{for(;tn<on.length;){const e=on[tn];tn++,rt(e),Dd(e.$$)}}catch(e){throw on.length=0,tn=0,e}for(rt(null),on.length=0,tn=0;mi.length;)mi.pop()();for(let e=0;e<fn.length;e+=1){const t=fn[e];Ts.has(t)||(Ts.add(t),t())}fn.length=0}while(on.length);for(;Xa.length;)Xa.pop()();zs=!1,Ts.clear(),rt(n)}function Dd(n){if(n.fragment!==null){n.update(),Se(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Ne)}}function Vd(n){const e=[],t=[];fn.forEach(r=>n.indexOf(r)===-1?e.push(r):t.push(r)),t.forEach(r=>r()),fn=e}let qn;function Do(){return qn||(qn=Promise.resolve(),qn.then(()=>{qn=null})),qn}function xt(n,e,t){n.dispatchEvent(Hc(`${e?"intro":"outro"}${t}`))}const ii=new Set;let He;function Be(){He={r:0,c:[],p:He}}function qe(){He.r||Se(He.c),He=He.p}function O(n,e){n&&n.i&&(ii.delete(n),n.i(e))}function F(n,e,t,r){if(n&&n.o){if(ii.has(n))return;ii.add(n),He.c.push(()=>{ii.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}const Vo={duration:0};function Nd(n,e,t){const r={direction:"in"};let i=e(n,t,r),s=!1,o,a,l=0;function c(){o&&nr(n,o)}function u(){const{delay:f=0,duration:d=300,easing:p=Qt,tick:g=D,css:y}=i||Vo;y&&(o=tr(n,0,1,d,f,p,y,l++)),g(0,1);const m=wr()+f,I=m+d;a&&a.abort(),s=!0,Ne(()=>xt(n,!0,"start")),a=Ar(T=>{if(s){if(T>=I)return g(1,0),xt(n,!0,"end"),c(),s=!1;if(T>=m){const V=p((T-m)/d);g(V,1-V)}}return s})}let h=!1;return{start(){h||(h=!0,nr(n),St(i)?(i=i(r),Do().then(u)):u())},invalidate(){h=!1},end(){s&&(c(),s=!1)}}}function Od(n,e,t){const r={direction:"out"};let i=e(n,t,r),s=!0,o;const a=He;a.r+=1;function l(){const{delay:c=0,duration:u=300,easing:h=Qt,tick:f=D,css:d}=i||Vo;d&&(o=tr(n,1,0,u,c,h,d));const p=wr()+c,g=p+u;Ne(()=>xt(n,!1,"start")),Ar(y=>{if(s){if(y>=g)return f(0,1),xt(n,!1,"end"),--a.r||Se(a.c),!1;if(y>=p){const m=h((y-p)/u);f(1-m,m)}}return s})}return St(i)?Do().then(()=>{i=i(r),l()}):l(),{end(c){c&&i.tick&&i.tick(1,0),s&&(o&&nr(n,o),s=!1)}}}function Ye(n,e,t,r){const i={direction:"both"};let s=e(n,t,i),o=r?0:1,a=null,l=null,c=null;function u(){c&&nr(n,c)}function h(d,p){const g=d.b-o;return p*=Math.abs(g),{a:o,b:d.b,d:g,duration:p,start:d.start,end:d.start+p,group:d.group}}function f(d){const{delay:p=0,duration:g=300,easing:y=Qt,tick:m=D,css:I}=s||Vo,T={start:wr()+p,b:d};d||(T.group=He,He.r+=1),a||l?l=T:(I&&(u(),c=tr(n,o,d,g,p,y,I)),d&&m(0,1),a=h(T,g),Ne(()=>xt(n,d,"start")),Ar(V=>{if(l&&V>l.start&&(a=h(l,g),l=null,xt(n,a.b,"start"),I&&(u(),c=tr(n,o,a.b,a.duration,0,y,s.css))),a){if(V>=a.end)m(o=a.b,1-o),xt(n,a.b,"end"),l||(a.b?u():--a.group.r||Se(a.group.c)),a=null;else if(V>=a.start){const H=V-a.start;o=a.a+a.d*y(H/a.duration),m(o,1-o)}}return!!(a||l)}))}return{run(d){St(s)?Do().then(()=>{s=s(i),f(d)}):f(d)},end(){u(),a=l=null}}}function gi(n,e){const t=e.token={};function r(i,s,o,a){if(e.token!==t)return;e.resolved=a;let l=e.ctx;o!==void 0&&(l=l.slice(),l[o]=a);const c=i&&(e.current=i)(l);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,f)=>{f!==s&&h&&(Be(),F(h,1,1,()=>{e.blocks[f]===h&&(e.blocks[f]=null)}),qe())}):e.block.d(1),c.c(),O(c,1),c.m(e.mount(),e.anchor),u=!0),e.block=c,e.blocks&&(e.blocks[s]=c),u&&ko()}if(ud(n)){const i=Xt();if(n.then(s=>{rt(i),r(e.then,1,e.value,s),rt(null)},s=>{if(rt(i),r(e.catch,2,e.error,s),rt(null),!e.hasCatch)throw s}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,n),!0;e.resolved=n}}function Jc(n,e,t){const r=e.slice(),{resolved:i}=n;n.current===n.then&&(r[n.value]=i),n.current===n.catch&&(r[n.error]=i),n.block.p(r,t)}function Md(n,e){F(n,1,1,()=>{e.delete(n.key)})}function Ld(n,e){n.f(),Md(n,e)}function Fd(n,e,t,r,i,s,o,a,l,c,u,h){let f=n.length,d=s.length,p=f;const g={};for(;p--;)g[n[p].key]=p;const y=[],m=new Map,I=new Map,T=[];for(p=d;p--;){const A=h(i,s,p),W=t(A);let k=o.get(W);k?r&&T.push(()=>k.p(A,e)):(k=c(W,A),k.c()),m.set(W,y[p]=k),W in g&&I.set(W,Math.abs(p-g[W]))}const V=new Set,H=new Set;function $(A){O(A,1),A.m(a,u),o.set(A.key,A),u=A.first,d--}for(;f&&d;){const A=y[d-1],W=n[f-1],k=A.key,R=W.key;A===W?(u=A.first,f--,d--):m.has(R)?!o.has(k)||V.has(k)?$(A):H.has(R)?f--:I.get(k)>I.get(R)?(H.add(k),$(A)):(V.add(R),f--):(l(W,o),f--)}for(;f--;){const A=n[f];m.has(A.key)||l(A,o)}for(;d;)$(y[d-1]);return Se(T),y}function xd(n,e){const t={},r={},i={$$scope:1};let s=n.length;for(;s--;){const o=n[s],a=e[s];if(a){for(const l in o)l in a||(r[l]=1);for(const l in a)i[l]||(t[l]=a[l],i[l]=1);n[s]=a}else for(const l in o)i[l]=1}for(const o in r)o in t||(t[o]=void 0);return t}function Ud(n){return typeof n=="object"&&n!==null?n:{}}function ce(n){n&&n.c()}function ie(n,e,t,r){const{fragment:i,after_update:s}=n.$$;i&&i.m(e,t),r||Ne(()=>{const o=n.$$.on_mount.map(Uc).filter(St);n.$$.on_destroy?n.$$.on_destroy.push(...o):Se(o),n.$$.on_mount=[]}),s.forEach(Ne)}function se(n,e){const t=n.$$;t.fragment!==null&&(Vd(t.after_update),Se(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Bd(n,e){n.$$.dirty[0]===-1&&(on.push(n),Xc(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function je(n,e,t,r,i,s,o,a=[-1]){const l=rr;rt(n);const c=n.$$={fragment:null,ctx:[],props:s,update:D,not_equal:i,bound:za(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:za(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(h,f,...d)=>{const p=d.length?d[0]:f;return c.ctx&&i(c.ctx[h],c.ctx[h]=p)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](p),u&&Bd(n,h)),f}):[],c.update(),u=!0,Se(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const h=Ed(e.target);c.fragment&&c.fragment.l(h),h.forEach(S)}else c.fragment&&c.fragment.c();e.intro&&O(n.$$.fragment),ie(n,e.target,e.anchor,e.customElement),ko()}rt(l)}class $e{$destroy(){se(this,1),this.$destroy=D}$on(e,t){if(!St(t))return D;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!hd(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/**
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
 */const Yc=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},qd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Zc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),r.push(t[u],t[h],t[f],t[d])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Yc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):qd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new jd;const f=s<<2|a>>4;if(r.push(f),c!==64){const d=a<<4&240|c>>2;if(r.push(d),h!==64){const p=c<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class jd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $d=function(n){const e=Yc(n);return Zc.encodeByteArray(e,!0)},_i=function(n){return $d(n).replace(/\./g,"")},eu=function(n){try{return Zc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function zd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Hd=()=>zd().__FIREBASE_DEFAULTS__,Kd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Wd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&eu(n[1]);return e&&JSON.parse(e)},No=()=>{try{return Hd()||Kd()||Wd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},tu=n=>{var e,t;return(t=(e=No())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Gd=n=>{const e=tu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},nu=()=>{var n;return(n=No())===null||n===void 0?void 0:n.config},ru=n=>{var e;return(e=No())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Qd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Xd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[_i(JSON.stringify(t)),_i(JSON.stringify(o)),a].join(".")}/**
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function Yd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Zd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ep(){const n=Re();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function tp(){try{return typeof indexedDB=="object"}catch{return!1}}function np(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const rp="FirebaseError";class dt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=rp,Object.setPrototypeOf(this,dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rr.prototype.create)}}class Rr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ip(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new dt(i,a,r)}}function ip(n,e){return n.replace(sp,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const sp=/\{\$([^}]+)}/g;function op(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function yi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Ja(s)&&Ja(o)){if(!yi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Ja(n){return n!==null&&typeof n=="object"}/**
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
 */function br(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ap(n,e){const t=new lp(n,e);return t.subscribe.bind(t)}class lp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");cp(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Is),i.error===void 0&&(i.error=Is),i.complete===void 0&&(i.complete=Is);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Is(){}/**
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
 */function Pe(n){return n&&n._delegate?n._delegate:n}class jt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vt="[DEFAULT]";/**
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
 */class up{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Qd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fp(e))try{this.getOrInitializeService({instanceIdentifier:Vt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vt){return this.instances.has(e)}getOptions(e=Vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(!!r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vt){return this.component?this.component.multipleInstances?e:Vt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hp(n){return n===Vt?void 0:n}function fp(n){return n.instantiationMode==="EAGER"}/**
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
 */class dp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new up(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const pp={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},mp=G.INFO,gp={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},_p=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=gp[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oo{constructor(e){this.name=e,this._logLevel=mp,this._logHandler=_p,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const yp=(n,e)=>e.some(t=>n instanceof t);let Ya,Za;function vp(){return Ya||(Ya=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ep(){return Za||(Za=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iu=new WeakMap,Hs=new WeakMap,su=new WeakMap,ws=new WeakMap,Mo=new WeakMap;function Tp(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Et(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&iu.set(t,n)}).catch(()=>{}),Mo.set(e,n),e}function Ip(n){if(Hs.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Hs.set(n,e)}let Ks={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Hs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||su.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Et(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function wp(n){Ks=n(Ks)}function Ap(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(As(this),e,...t);return su.set(r,e.sort?e.sort():[e]),Et(r)}:Ep().includes(n)?function(...e){return n.apply(As(this),e),Et(iu.get(this))}:function(...e){return Et(n.apply(As(this),e))}}function Rp(n){return typeof n=="function"?Ap(n):(n instanceof IDBTransaction&&Ip(n),yp(n,vp())?new Proxy(n,Ks):n)}function Et(n){if(n instanceof IDBRequest)return Tp(n);if(ws.has(n))return ws.get(n);const e=Rp(n);return e!==n&&(ws.set(n,e),Mo.set(e,n)),e}const As=n=>Mo.get(n);function bp(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Et(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Et(o.result),l.oldVersion,l.newVersion,Et(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Cp=["get","getKey","getAll","getAllKeys","count"],Pp=["put","add","delete","clear"],Rs=new Map;function el(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Rs.get(e))return Rs.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Pp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Cp.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return Rs.set(e,s),s}wp(n=>({...n,get:(e,t,r)=>el(e,t)||n.get(e,t,r),has:(e,t)=>!!el(e,t)||n.has(e,t)}));/**
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
 */class Sp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(kp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function kp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ws="@firebase/app",tl="0.9.14";/**
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
 */const $t=new Oo("@firebase/app"),Dp="@firebase/app-compat",Vp="@firebase/analytics-compat",Np="@firebase/analytics",Op="@firebase/app-check-compat",Mp="@firebase/app-check",Lp="@firebase/auth",Fp="@firebase/auth-compat",xp="@firebase/database",Up="@firebase/database-compat",Bp="@firebase/functions",qp="@firebase/functions-compat",jp="@firebase/installations",$p="@firebase/installations-compat",zp="@firebase/messaging",Hp="@firebase/messaging-compat",Kp="@firebase/performance",Wp="@firebase/performance-compat",Gp="@firebase/remote-config",Qp="@firebase/remote-config-compat",Xp="@firebase/storage",Jp="@firebase/storage-compat",Yp="@firebase/firestore",Zp="@firebase/firestore-compat",em="firebase",tm="10.0.0";/**
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
 */const Gs="[DEFAULT]",nm={[Ws]:"fire-core",[Dp]:"fire-core-compat",[Np]:"fire-analytics",[Vp]:"fire-analytics-compat",[Mp]:"fire-app-check",[Op]:"fire-app-check-compat",[Lp]:"fire-auth",[Fp]:"fire-auth-compat",[xp]:"fire-rtdb",[Up]:"fire-rtdb-compat",[Bp]:"fire-fn",[qp]:"fire-fn-compat",[jp]:"fire-iid",[$p]:"fire-iid-compat",[zp]:"fire-fcm",[Hp]:"fire-fcm-compat",[Kp]:"fire-perf",[Wp]:"fire-perf-compat",[Gp]:"fire-rc",[Qp]:"fire-rc-compat",[Xp]:"fire-gcs",[Jp]:"fire-gcs-compat",[Yp]:"fire-fst",[Zp]:"fire-fst-compat","fire-js":"fire-js",[em]:"fire-js-all"};/**
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
 */const vi=new Map,Qs=new Map;function rm(n,e){try{n.container.addComponent(e)}catch(t){$t.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function En(n){const e=n.name;if(Qs.has(e))return $t.debug(`There were multiple attempts to register component ${e}.`),!1;Qs.set(e,n);for(const t of vi.values())rm(t,n);return!0}function Lo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const im={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Tt=new Rr("app","Firebase",im);/**
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
 */class sm{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tt.create("app-deleted",{appName:this._name})}}/**
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
 */const Mn=tm;function ou(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Gs,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Tt.create("bad-app-name",{appName:String(i)});if(t||(t=nu()),!t)throw Tt.create("no-options");const s=vi.get(i);if(s){if(yi(t,s.options)&&yi(r,s.config))return s;throw Tt.create("duplicate-app",{appName:i})}const o=new dp(i);for(const l of Qs.values())o.addComponent(l);const a=new sm(t,r,o);return vi.set(i,a),a}function au(n=Gs){const e=vi.get(n);if(!e&&n===Gs&&nu())return ou();if(!e)throw Tt.create("no-app",{appName:n});return e}function It(n,e,t){var r;let i=(r=nm[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$t.warn(a.join(" "));return}En(new jt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const om="firebase-heartbeat-database",am=1,ir="firebase-heartbeat-store";let bs=null;function lu(){return bs||(bs=bp(om,am,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ir)}}}).catch(n=>{throw Tt.create("idb-open",{originalErrorMessage:n.message})})),bs}async function lm(n){try{return await(await lu()).transaction(ir).objectStore(ir).get(cu(n))}catch(e){if(e instanceof dt)$t.warn(e.message);else{const t=Tt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$t.warn(t.message)}}}async function nl(n,e){try{const r=(await lu()).transaction(ir,"readwrite");await r.objectStore(ir).put(e,cu(n)),await r.done}catch(t){if(t instanceof dt)$t.warn(t.message);else{const r=Tt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});$t.warn(r.message)}}}function cu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const cm=1024,um=30*24*60*60*1e3;class hm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dm(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=rl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=um}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=rl(),{heartbeatsToSend:t,unsentEntries:r}=fm(this._heartbeatsCache.heartbeats),i=_i(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function rl(){return new Date().toISOString().substring(0,10)}function fm(n,e=cm){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),il(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),il(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class dm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tp()?np().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await lm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return nl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return nl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function il(n){return _i(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function pm(n){En(new jt("platform-logger",e=>new Sp(e),"PRIVATE")),En(new jt("heartbeat",e=>new hm(e),"PRIVATE")),It(Ws,tl,n),It(Ws,tl,"esm2017"),It("fire-js","")}pm("");var mm="firebase",gm="10.0.0";/**
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
 */It(mm,gm,"app");function Fo(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function uu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _m=uu,hu=new Rr("auth","Firebase",uu());/**
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
 */const Ei=new Oo("@firebase/auth");function ym(n,...e){Ei.logLevel<=G.WARN&&Ei.warn(`Auth (${Mn}): ${n}`,...e)}function si(n,...e){Ei.logLevel<=G.ERROR&&Ei.error(`Auth (${Mn}): ${n}`,...e)}/**
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
 */function Ze(n,...e){throw xo(n,...e)}function Ge(n,...e){return xo(n,...e)}function fu(n,e,t){const r=Object.assign(Object.assign({},_m()),{[e]:t});return new Rr("auth","Firebase",r).create(e,{appName:n.name})}function vm(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ze(n,"argument-error"),fu(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return hu.create(n,...e)}function q(n,e,...t){if(!n)throw xo(e,...t)}function it(n){const e="INTERNAL ASSERTION FAILED: "+n;throw si(e),new Error(e)}function lt(n,e){n||it(e)}/**
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
 */function Xs(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Em(){return sl()==="http:"||sl()==="https:"}function sl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Tm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Em()||Yd()||"connection"in navigator)?navigator.onLine:!0}function Im(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Cr{constructor(e,t){this.shortDelay=e,this.longDelay=t,lt(t>e,"Short delay should be less than long delay!"),this.isMobile=Jd()||Zd()}get(){return Tm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Uo(n,e){lt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class du{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;it("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;it("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;it("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Am=new Cr(3e4,6e4);function pu(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Pr(n,e,t,r,i={}){return mu(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=br(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),du.fetch()(gu(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function mu(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},wm),e);try{const i=new bm(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Wr(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wr(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Wr(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Wr(n,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw fu(n,u,c);Ze(n,u)}}catch(i){if(i instanceof dt)throw i;Ze(n,"network-request-failed",{message:String(i)})}}async function Rm(n,e,t,r,i={}){const s=await Pr(n,e,t,r,i);return"mfaPendingCredential"in s&&Ze(n,"multi-factor-auth-required",{_serverResponse:s}),s}function gu(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Uo(n.config,i):`${n.config.apiScheme}://${i}`}class bm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),Am.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Ge(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function Cm(n,e){return Pr(n,"POST","/v1/accounts:delete",e)}async function Pm(n,e){return Pr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Qn(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sm(n,e=!1){const t=Pe(n),r=await t.getIdToken(e),i=Bo(r);q(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Qn(Cs(i.auth_time)),issuedAtTime:Qn(Cs(i.iat)),expirationTime:Qn(Cs(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Cs(n){return Number(n)*1e3}function Bo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return si("JWT malformed, contained fewer than 3 sections"),null;try{const i=eu(t);return i?JSON.parse(i):(si("Failed to decode base64 JWT payload"),null)}catch(i){return si("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function km(n){const e=Bo(n);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function sr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof dt&&Dm(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Dm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Vm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _u{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qn(this.lastLoginAt),this.creationTime=Qn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ti(n){var e;const t=n.auth,r=await n.getIdToken(),i=await sr(n,Pm(t,{idToken:r}));q(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Mm(s.providerUserInfo):[],a=Om(n.providerData,o),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new _u(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function Nm(n){const e=Pe(n);await Ti(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Om(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Mm(n){return n.map(e=>{var{providerId:t}=e,r=Fo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Lm(n,e){const t=await mu(n,{},async()=>{const r=br({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=gu(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",du.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class or{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):km(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Lm(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new or;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new or,this.toJSON())}_performRefresh(){return it("not implemented")}}/**
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
 */function pt(n,e){q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ut{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Fo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new _u(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await sr(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Sm(this,e)}reload(){return Nm(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ut(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ti(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await sr(this,Cm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,l,c,u;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,f=(i=t.email)!==null&&i!==void 0?i:void 0,d=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,g=(a=t.tenantId)!==null&&a!==void 0?a:void 0,y=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,m=(c=t.createdAt)!==null&&c!==void 0?c:void 0,I=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:T,emailVerified:V,isAnonymous:H,providerData:$,stsTokenManager:A}=t;q(T&&A,e,"internal-error");const W=or.fromJSON(this.name,A);q(typeof T=="string",e,"internal-error"),pt(h,e.name),pt(f,e.name),q(typeof V=="boolean",e,"internal-error"),q(typeof H=="boolean",e,"internal-error"),pt(d,e.name),pt(p,e.name),pt(g,e.name),pt(y,e.name),pt(m,e.name),pt(I,e.name);const k=new Ut({uid:T,auth:e,email:f,emailVerified:V,displayName:h,isAnonymous:H,photoURL:p,phoneNumber:d,tenantId:g,stsTokenManager:W,createdAt:m,lastLoginAt:I});return $&&Array.isArray($)&&(k.providerData=$.map(R=>Object.assign({},R))),y&&(k._redirectEventId=y),k}static async _fromIdTokenResponse(e,t,r=!1){const i=new or;i.updateFromServerResponse(t);const s=new Ut({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ti(s),s}}/**
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
 */const ol=new Map;function st(n){lt(n instanceof Function,"Expected a class definition");let e=ol.get(n);return e?(lt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ol.set(n,e),e)}/**
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
 */class yu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}yu.type="NONE";const al=yu;/**
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
 */function oi(n,e,t){return`firebase:${n}:${e}:${t}`}class dn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=oi(this.userKey,i.apiKey,s),this.fullPersistenceKey=oi("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ut._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new dn(st(al),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||st(al);const o=oi(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const h=Ut._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new dn(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new dn(s,e,r))}}/**
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
 */function ll(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Tu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wu(e))return"Blackberry";if(Au(e))return"Webos";if(qo(e))return"Safari";if((e.includes("chrome/")||Eu(e))&&!e.includes("edge/"))return"Chrome";if(Iu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vu(n=Re()){return/firefox\//i.test(n)}function qo(n=Re()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Eu(n=Re()){return/crios\//i.test(n)}function Tu(n=Re()){return/iemobile/i.test(n)}function Iu(n=Re()){return/android/i.test(n)}function wu(n=Re()){return/blackberry/i.test(n)}function Au(n=Re()){return/webos/i.test(n)}function Bi(n=Re()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Fm(n=Re()){var e;return Bi(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xm(){return ep()&&document.documentMode===10}function Ru(n=Re()){return Bi(n)||Iu(n)||Au(n)||wu(n)||/windows phone/i.test(n)||Tu(n)}function Um(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function bu(n,e=[]){let t;switch(n){case"Browser":t=ll(Re());break;case"Worker":t=`${ll(Re())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Mn}/${r}`}async function Cu(n,e){return Pr(n,"GET","/v2/recaptchaConfig",pu(n,e))}function cl(n){return n!==void 0&&n.enterprise!==void 0}class Pu{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
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
 */function Bm(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Su(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Ge("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Bm().appendChild(r)})}function qm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const jm="https://www.google.com/recaptcha/enterprise.js?render=",$m="recaptcha-enterprise",zm="NO_RECAPTCHA";class Hm{constructor(e){this.type=$m,this.auth=Sr(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Cu(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Pu(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;cl(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(zm)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&cl(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Su(jm+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class Km{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class Wm{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ul(this),this.idTokenSubscription=new ul(this),this.beforeStateQueue=new Km(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=st(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await dn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ti(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Im()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Pe(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(st(e))})}async initializeRecaptchaConfig(){const e=await Cu(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Pu(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Hm(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Rr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&st(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await dn.create(this,[st(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&ym(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Sr(n){return Pe(n)}class ul{constructor(e){this.auth=e,this.observer=null,this.addObserver=ap(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Gm(n,e){const t=Lo(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(yi(s,e!=null?e:{}))return i;Ze(i,"already-initialized")}return t.initialize({options:e})}function Qm(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(st);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Xm(n,e,t){const r=Sr(n);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=ku(e),{host:o,port:a}=Jm(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ym()}function ku(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Jm(n){const e=ku(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:hl(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:hl(o)}}}function hl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ym(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Du{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return it("not implemented")}_getIdTokenResponse(e){return it("not implemented")}_linkToIdToken(e,t){return it("not implemented")}_getReauthenticationResolver(e){return it("not implemented")}}/**
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
 */async function pn(n,e){return Rm(n,"POST","/v1/accounts:signInWithIdp",pu(n,e))}/**
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
 */const Zm="http://localhost";class zt extends Du{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ze("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Fo(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new zt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return pn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,pn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,pn(e,t)}buildRequest(){const e={requestUri:Zm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=br(t)}return e}}/**
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
 */class jo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class kr extends jo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class mt extends kr{constructor(){super("facebook.com")}static credential(e){return zt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch{return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";mt.PROVIDER_ID="facebook.com";/**
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
 */class nt extends kr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return zt._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return nt.credential(t,r)}catch{return null}}}nt.GOOGLE_SIGN_IN_METHOD="google.com";nt.PROVIDER_ID="google.com";/**
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
 */class gt extends kr{constructor(){super("github.com")}static credential(e){return zt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.GITHUB_SIGN_IN_METHOD="github.com";gt.PROVIDER_ID="github.com";/**
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
 */class _t extends kr{constructor(){super("twitter.com")}static credential(e,t){return zt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return _t.credential(t,r)}catch{return null}}}_t.TWITTER_SIGN_IN_METHOD="twitter.com";_t.PROVIDER_ID="twitter.com";/**
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
 */class Tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Ut._fromIdTokenResponse(e,r,i),o=fl(r);return new Tn({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=fl(r);return new Tn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function fl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ii extends dt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ii.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ii(e,t,r,i)}}function Vu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ii._fromErrorAndOperation(n,s,e,r):s})}async function eg(n,e,t=!1){const r=await sr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Tn._forOperation(n,"link",r)}/**
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
 */async function tg(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await sr(n,Vu(r,i,e,n),t);q(s.idToken,r,"internal-error");const o=Bo(s.idToken);q(o,r,"internal-error");const{sub:a}=o;return q(n.uid===a,r,"user-mismatch"),Tn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ze(r,"user-mismatch"),s}}/**
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
 */async function ng(n,e,t=!1){const r="signIn",i=await Vu(n,r,e),s=await Tn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}/**
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
 */function rg(n,e){return Pe(n).setPersistence(e)}function ig(n,e,t,r){return Pe(n).onIdTokenChanged(e,t,r)}function sg(n,e,t){return Pe(n).beforeAuthStateChanged(e,t)}const wi="__sak";/**
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
 */class Nu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(wi,"1"),this.storage.removeItem(wi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function og(){const n=Re();return qo(n)||Bi(n)}const ag=1e3,lg=10;class Ou extends Nu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=og()&&Um(),this.fallbackToPolling=Ru(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);xm()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,lg):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},ag)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ou.type="LOCAL";const Mu=Ou;/**
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
 */class Lu extends Nu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Lu.type="SESSION";const Fu=Lu;/**
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
 */function cg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class qi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new qi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,s)),l=await cg(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qi.receivers=[];/**
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
 */function $o(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class ug{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=$o("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Qe(){return window}function hg(n){Qe().location.href=n}/**
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
 */function xu(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function fg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function pg(){return xu()?self:null}/**
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
 */const Uu="firebaseLocalStorageDb",mg=1,Ai="firebaseLocalStorage",Bu="fbase_key";class Dr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ji(n,e){return n.transaction([Ai],e?"readwrite":"readonly").objectStore(Ai)}function gg(){const n=indexedDB.deleteDatabase(Uu);return new Dr(n).toPromise()}function Js(){const n=indexedDB.open(Uu,mg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ai,{keyPath:Bu})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ai)?e(r):(r.close(),await gg(),e(await Js()))})})}async function dl(n,e,t){const r=ji(n,!0).put({[Bu]:e,value:t});return new Dr(r).toPromise()}async function _g(n,e){const t=ji(n,!1).get(e),r=await new Dr(t).toPromise();return r===void 0?null:r.value}function pl(n,e){const t=ji(n,!0).delete(e);return new Dr(t).toPromise()}const yg=800,vg=3;class qu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Js(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>vg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qi._getInstance(pg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await fg(),!this.activeServiceWorker)return;this.sender=new ug(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((t=r[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Js();return await dl(e,wi,"1"),await pl(e,wi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>dl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>_g(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>pl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ji(i,!1).getAll();return new Dr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qu.type="LOCAL";const Eg=qu;new Cr(3e4,6e4);/**
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
 */function ju(n,e){return e?st(e):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class zo extends Du{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return pn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return pn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Tg(n){return ng(n.auth,new zo(n),n.bypassAuthState)}function Ig(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),tg(t,new zo(n),n.bypassAuthState)}async function wg(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),eg(t,new zo(n),n.bypassAuthState)}/**
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
 */class $u{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Tg;case"linkViaPopup":case"linkViaRedirect":return wg;case"reauthViaPopup":case"reauthViaRedirect":return Ig;default:Ze(this.auth,"internal-error")}}resolve(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ag=new Cr(2e3,1e4);async function Rg(n,e,t){const r=Sr(n);vm(n,e,jo);const i=ju(r,t);return new Nt(r,"signInViaPopup",e,i).executeNotNull()}class Nt extends $u{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Nt.currentPopupAction&&Nt.currentPopupAction.cancel(),Nt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){lt(this.filter.length===1,"Popup operations only handle one event");const e=$o();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ag.get())};e()}}Nt.currentPopupAction=null;/**
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
 */const bg="pendingRedirect",ai=new Map;class Cg extends $u{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ai.get(this.auth._key());if(!e){try{const r=await Pg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ai.set(this.auth._key(),e)}return this.bypassAuthState||ai.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Pg(n,e){const t=Dg(e),r=kg(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Sg(n,e){ai.set(n._key(),e)}function kg(n){return st(n._redirectPersistence)}function Dg(n){return oi(bg,n.config.apiKey,n.name)}async function Vg(n,e,t=!1){const r=Sr(n),i=ju(r,e),o=await new Cg(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Ng=10*60*1e3;class Og{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Mg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!zu(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ge(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ng&&this.cachedEventUids.clear(),this.cachedEventUids.has(ml(e))}saveEventToCache(e){this.cachedEventUids.add(ml(e)),this.lastProcessedEventTime=Date.now()}}function ml(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function zu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Mg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zu(n);default:return!1}}/**
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
 */async function Lg(n,e={}){return Pr(n,"GET","/v1/projects",e)}/**
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
 */const Fg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xg=/^https?/;async function Ug(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Lg(n);for(const t of e)try{if(Bg(t))return}catch{}Ze(n,"unauthorized-domain")}function Bg(n){const e=Xs(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!xg.test(t))return!1;if(Fg.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const qg=new Cr(3e4,6e4);function gl(){const n=Qe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function jg(n){return new Promise((e,t)=>{var r,i,s;function o(){gl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gl(),t(Ge(n,"network-request-failed"))},timeout:qg.get()})}if(!((i=(r=Qe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Qe().gapi)===null||s===void 0)&&s.load)o();else{const a=qm("iframefcb");return Qe()[a]=()=>{gapi.load?o():t(Ge(n,"network-request-failed"))},Su(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw li=null,e})}let li=null;function $g(n){return li=li||jg(n),li}/**
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
 */const zg=new Cr(5e3,15e3),Hg="__/auth/iframe",Kg="emulator/auth/iframe",Wg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Qg(n){const e=n.config;q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Uo(e,Kg):`https://${n.config.authDomain}/${Hg}`,r={apiKey:e.apiKey,appName:n.name,v:Mn},i=Gg.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${br(r).slice(1)}`}async function Xg(n){const e=await $g(n),t=Qe().gapi;return q(t,n,"internal-error"),e.open({where:document.body,url:Qg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wg,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ge(n,"network-request-failed"),a=Qe().setTimeout(()=>{s(o)},zg.get());function l(){Qe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Jg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yg=500,Zg=600,e_="_blank",t_="http://localhost";class _l{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function n_(n,e,t,r=Yg,i=Zg){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Jg),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Re().toLowerCase();t&&(a=Eu(c)?e_:t),vu(c)&&(e=e||t_,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[d,p])=>`${f}${d}=${p},`,"");if(Fm(c)&&a!=="_self")return r_(e||"",a),new _l(null);const h=window.open(e||"",a,u);q(h,n,"popup-blocked");try{h.focus()}catch{}return new _l(h)}function r_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const i_="__/auth/handler",s_="emulator/auth/handler",o_=encodeURIComponent("fac");async function yl(n,e,t,r,i,s){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Mn,eventId:i};if(e instanceof jo){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",op(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof kr){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await n._getAppCheckToken(),c=l?`#${o_}=${encodeURIComponent(l)}`:"";return`${a_(n)}?${br(a).slice(1)}${c}`}function a_({config:n}){return n.emulator?Uo(n,s_):`https://${n.authDomain}/${i_}`}/**
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
 */const Ps="webStorageSupport";class l_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fu,this._completeRedirectFn=Vg,this._overrideRedirectResult=Sg}async _openPopup(e,t,r,i){var s;lt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await yl(e,t,r,Xs(),i);return n_(e,o,$o())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await yl(e,t,r,Xs(),i);return hg(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(lt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Xg(e),r=new Og(e);return t.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ps,{type:Ps},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ps];o!==void 0&&t(!!o),Ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ug(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ru()||qo()||Bi()}}const c_=l_;var vl="@firebase/auth",El="1.0.0";/**
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
 */class u_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function h_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function f_(n){En(new jt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bu(n)},c=new Wm(r,i,s,l);return Qm(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),En(new jt("auth-internal",e=>{const t=Sr(e.getProvider("auth").getImmediate());return(r=>new u_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),It(vl,El,h_(n)),It(vl,El,"esm2017")}/**
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
 */const d_=5*60,p_=ru("authIdTokenMaxAge")||d_;let Tl=null;const m_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>p_)return;const i=t==null?void 0:t.token;Tl!==i&&(Tl=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function g_(n=au()){const e=Lo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Gm(n,{popupRedirectResolver:c_,persistence:[Eg,Mu,Fu]}),r=ru("authTokenSyncURL");if(r){const s=m_(r);sg(t,s,()=>s(t.currentUser)),ig(t,o=>s(o))}const i=tu("auth");return i&&Xm(t,`http://${i}`),t}f_("Browser");var __=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w,Ho=Ho||{},U=__||self;function $i(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Vr(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function y_(n){return Object.prototype.hasOwnProperty.call(n,Ss)&&n[Ss]||(n[Ss]=++v_)}var Ss="closure_uid_"+(1e9*Math.random()>>>0),v_=0;function E_(n,e,t){return n.call.apply(n.bind,arguments)}function T_(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function Ie(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ie=E_:Ie=T_,Ie.apply(null,arguments)}function Gr(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function pe(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function kt(){this.s=this.s,this.o=this.o}var I_=0;kt.prototype.s=!1;kt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),I_!=0)&&y_(this)};kt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Hu=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Ko(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function Il(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if($i(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function we(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}we.prototype.h=function(){this.defaultPrevented=!0};var w_=function(){if(!U.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{U.addEventListener("test",()=>{},e),U.removeEventListener("test",()=>{},e)}catch{}return n}();function ar(n){return/^[\s\xa0]*$/.test(n)}function zi(){var n=U.navigator;return n&&(n=n.userAgent)?n:""}function ze(n){return zi().indexOf(n)!=-1}function Wo(n){return Wo[" "](n),n}Wo[" "]=function(){};function A_(n,e){var t=gy;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var R_=ze("Opera"),In=ze("Trident")||ze("MSIE"),Ku=ze("Edge"),Ys=Ku||In,Wu=ze("Gecko")&&!(zi().toLowerCase().indexOf("webkit")!=-1&&!ze("Edge"))&&!(ze("Trident")||ze("MSIE"))&&!ze("Edge"),b_=zi().toLowerCase().indexOf("webkit")!=-1&&!ze("Edge");function Gu(){var n=U.document;return n?n.documentMode:void 0}var Zs;e:{var ks="",Ds=function(){var n=zi();if(Wu)return/rv:([^\);]+)(\)|;)/.exec(n);if(Ku)return/Edge\/([\d\.]+)/.exec(n);if(In)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(b_)return/WebKit\/(\S+)/.exec(n);if(R_)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Ds&&(ks=Ds?Ds[1]:""),In){var Vs=Gu();if(Vs!=null&&Vs>parseFloat(ks)){Zs=String(Vs);break e}}Zs=ks}var eo;if(U.document&&In){var wl=Gu();eo=wl||parseInt(Zs,10)||void 0}else eo=void 0;var C_=eo;function lr(n,e){if(we.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Wu){e:{try{Wo(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:P_[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&lr.$.h.call(this)}}pe(lr,we);var P_={2:"touch",3:"pen",4:"mouse"};lr.prototype.h=function(){lr.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Nr="closure_listenable_"+(1e6*Math.random()|0),S_=0;function k_(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++S_,this.fa=this.ia=!1}function Hi(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Go(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function D_(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function Qu(n){const e={};for(const t in n)e[t]=n[t];return e}const Al="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xu(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<Al.length;s++)t=Al[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function Ki(n){this.src=n,this.g={},this.h=0}Ki.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=no(n,e,r,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new k_(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function to(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=Hu(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Hi(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function no(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var Qo="closure_lm_"+(1e6*Math.random()|0),Ns={};function Ju(n,e,t,r,i){if(r&&r.once)return Zu(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ju(n,e[s],t,r,i);return null}return t=Yo(t),n&&n[Nr]?n.O(e,t,Vr(r)?!!r.capture:!!r,i):Yu(n,e,t,!1,r,i)}function Yu(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=Vr(i)?!!i.capture:!!i,a=Jo(n);if(a||(n[Qo]=a=new Ki(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=V_(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)w_||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(th(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function V_(){function n(t){return e.call(n.src,n.listener,t)}const e=N_;return n}function Zu(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Zu(n,e[s],t,r,i);return null}return t=Yo(t),n&&n[Nr]?n.P(e,t,Vr(r)?!!r.capture:!!r,i):Yu(n,e,t,!0,r,i)}function eh(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)eh(n,e[s],t,r,i);else r=Vr(r)?!!r.capture:!!r,t=Yo(t),n&&n[Nr]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=no(s,t,r,i),-1<t&&(Hi(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=Jo(n))&&(e=n.g[e.toString()],n=-1,e&&(n=no(e,t,r,i)),(t=-1<n?e[n]:null)&&Xo(t))}function Xo(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[Nr])to(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(th(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=Jo(e))?(to(t,n),t.h==0&&(t.src=null,e[Qo]=null)):Hi(n)}}}function th(n){return n in Ns?Ns[n]:Ns[n]="on"+n}function N_(n,e){if(n.fa)n=!0;else{e=new lr(e,this);var t=n.listener,r=n.la||n.src;n.ia&&Xo(n),n=t.call(r,e)}return n}function Jo(n){return n=n[Qo],n instanceof Ki?n:null}var Os="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yo(n){return typeof n=="function"?n:(n[Os]||(n[Os]=function(e){return n.handleEvent(e)}),n[Os])}function de(){kt.call(this),this.i=new Ki(this),this.S=this,this.J=null}pe(de,kt);de.prototype[Nr]=!0;de.prototype.removeEventListener=function(n,e,t,r){eh(this,n,e,t,r)};function _e(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new we(e,n);else if(e instanceof we)e.target=e.target||n;else{var i=e;e=new we(r,n),Xu(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=Qr(o,r,!0,e)&&i}if(o=e.g=n,i=Qr(o,r,!0,e)&&i,i=Qr(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=Qr(o,r,!1,e)&&i}de.prototype.N=function(){if(de.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)Hi(t[r]);delete n.g[e],n.h--}}this.J=null};de.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};de.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function Qr(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,l=o.la||o.src;o.ia&&to(n.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Zo=U.JSON.stringify;class O_{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function M_(){var n=ea;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class L_{constructor(){this.h=this.g=null}add(e,t){const r=nh.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var nh=new O_(()=>new F_,n=>n.reset());class F_{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function x_(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function U_(n){U.setTimeout(()=>{throw n},0)}let cr,ur=!1,ea=new L_,rh=()=>{const n=U.Promise.resolve(void 0);cr=()=>{n.then(B_)}};var B_=()=>{for(var n;n=M_();){try{n.h.call(n.g)}catch(t){U_(t)}var e=nh;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}ur=!1};function Wi(n,e){de.call(this),this.h=n||1,this.g=e||U,this.j=Ie(this.qb,this),this.l=Date.now()}pe(Wi,de);w=Wi.prototype;w.ga=!1;w.T=null;w.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),_e(this,"tick"),this.ga&&(ta(this),this.start()))}};w.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ta(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}w.N=function(){Wi.$.N.call(this),ta(this),delete this.g};function na(n,e,t){if(typeof n=="function")t&&(n=Ie(n,t));else if(n&&typeof n.handleEvent=="function")n=Ie(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:U.setTimeout(n,e||0)}function ih(n){n.g=na(()=>{n.g=null,n.i&&(n.i=!1,ih(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class q_ extends kt{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ih(this)}N(){super.N(),this.g&&(U.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hr(n){kt.call(this),this.h=n,this.g={}}pe(hr,kt);var Rl=[];function sh(n,e,t,r){Array.isArray(t)||(t&&(Rl[0]=t.toString()),t=Rl);for(var i=0;i<t.length;i++){var s=Ju(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function oh(n){Go(n.g,function(e,t){this.g.hasOwnProperty(t)&&Xo(e)},n),n.g={}}hr.prototype.N=function(){hr.$.N.call(this),oh(this)};hr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Gi(){this.g=!0}Gi.prototype.Ea=function(){this.g=!1};function j_(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function $_(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function cn(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+H_(n,t)+(r?" "+r:"")})}function z_(n,e){n.info(function(){return"TIMEOUT: "+e})}Gi.prototype.info=function(){};function H_(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Zo(t)}catch{return e}}var Jt={},bl=null;function Qi(){return bl=bl||new de}Jt.Ta="serverreachability";function ah(n){we.call(this,Jt.Ta,n)}pe(ah,we);function fr(n){const e=Qi();_e(e,new ah(e))}Jt.STAT_EVENT="statevent";function lh(n,e){we.call(this,Jt.STAT_EVENT,n),this.stat=e}pe(lh,we);function Ce(n){const e=Qi();_e(e,new lh(e,n))}Jt.Ua="timingevent";function ch(n,e){we.call(this,Jt.Ua,n),this.size=e}pe(ch,we);function Or(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return U.setTimeout(function(){n()},e)}var Xi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},uh={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ra(){}ra.prototype.h=null;function Cl(n){return n.h||(n.h=n.i())}function hh(){}var Mr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ia(){we.call(this,"d")}pe(ia,we);function sa(){we.call(this,"c")}pe(sa,we);var ro;function Ji(){}pe(Ji,ra);Ji.prototype.g=function(){return new XMLHttpRequest};Ji.prototype.i=function(){return{}};ro=new Ji;function Lr(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new hr(this),this.P=K_,n=Ys?125:void 0,this.V=new Wi(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new fh}function fh(){this.i=null,this.g="",this.h=!1}var K_=45e3,io={},Ri={};w=Lr.prototype;w.setTimeout=function(n){this.P=n};function so(n,e,t){n.L=1,n.v=Zi(ct(e)),n.s=t,n.S=!0,dh(n,null)}function dh(n,e){n.G=Date.now(),Fr(n),n.A=ct(n.v);var t=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),Th(t.i,"t",r),n.C=0,t=n.l.J,n.h=new fh,n.g=jh(n.l,t?e:null,!n.s),0<n.O&&(n.M=new q_(Ie(n.Pa,n,n.g),n.O)),sh(n.U,n.g,"readystatechange",n.nb),e=n.I?Qu(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),fr(),j_(n.j,n.u,n.A,n.m,n.W,n.s)}w.nb=function(n){n=n.target;const e=this.M;e&&Ke(n)==3?e.l():this.Pa(n)};w.Pa=function(n){try{if(n==this.g)e:{const u=Ke(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Ys||this.g&&(this.h.h||this.g.ja()||Dl(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?fr(3):fr(2)),Yi(this);var t=this.g.da();this.ca=t;t:if(ph(this)){var r=Dl(this.g);n="";var i=r.length,s=Ke(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ot(this),Xn(this);var o="";break t}this.h.i=new U.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,$_(this.j,this.u,this.A,this.m,this.W,u,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ar(a)){var c=a;break t}}c=null}if(t=c)cn(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,oo(this,t);else{this.i=!1,this.o=3,Ce(12),Ot(this),Xn(this);break e}}this.S?(mh(this,u,o),Ys&&this.i&&u==3&&(sh(this.U,this.V,"tick",this.mb),this.V.start())):(cn(this.j,this.m,o,null),oo(this,o)),u==4&&Ot(this),this.i&&!this.J&&(u==4?xh(this.l,this):(this.i=!1,Fr(this)))}else dy(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ce(12)):(this.o=0,Ce(13)),Ot(this),Xn(this)}}}catch{}finally{}};function ph(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function mh(n,e,t){let r=!0,i;for(;!n.J&&n.C<t.length;)if(i=W_(n,t),i==Ri){e==4&&(n.o=4,Ce(14),r=!1),cn(n.j,n.m,null,"[Incomplete Response]");break}else if(i==io){n.o=4,Ce(15),cn(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else cn(n.j,n.m,i,null),oo(n,i);ph(n)&&i!=Ri&&i!=io&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Ce(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),ha(e),e.M=!0,Ce(11))):(cn(n.j,n.m,t,"[Invalid Chunked Response]"),Ot(n),Xn(n))}w.mb=function(){if(this.g){var n=Ke(this.g),e=this.g.ja();this.C<e.length&&(Yi(this),mh(this,n,e),this.i&&n!=4&&Fr(this))}};function W_(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?Ri:(t=Number(e.substring(t,r)),isNaN(t)?io:(r+=1,r+t>e.length?Ri:(e=e.slice(r,r+t),n.C=r+t,e)))}w.cancel=function(){this.J=!0,Ot(this)};function Fr(n){n.Y=Date.now()+n.P,gh(n,n.P)}function gh(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Or(Ie(n.lb,n),e)}function Yi(n){n.B&&(U.clearTimeout(n.B),n.B=null)}w.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(z_(this.j,this.A),this.L!=2&&(fr(),Ce(17)),Ot(this),this.o=2,Xn(this)):gh(this,this.Y-n)};function Xn(n){n.l.H==0||n.J||xh(n.l,n)}function Ot(n){Yi(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,ta(n.V),oh(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function oo(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||ao(t.i,n))){if(!n.K&&ao(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)Pi(t),ns(t);else break e;ua(t),Ce(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=Or(Ie(t.ib,t),6e3));if(1>=Ah(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else Mt(t,11)}else if((n.K||t.g==n)&&Pi(t),!ar(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(t.V=c[0],c=c[1],t.H==2)if(c[0]=="c"){t.K=c[1],t.pa=c[2];const u=c[3];u!=null&&(t.ra=u,t.l.info("VER="+t.ra));const h=c[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const d=n.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.i;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(oa(s,s.h),s.h=null))}if(r.F){const g=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(r.Da=g,Z(r.I,r.F,g))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=qh(r,r.J?r.pa:null,r.Y),o.K){Rh(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Yi(a),Fr(a)),r.g=o}else Lh(r);0<t.j.length&&rs(t)}else c[0]!="stop"&&c[0]!="close"||Mt(t,7);else t.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Mt(t,7):ca(t):c[0]!="noop"&&t.h&&t.h.Aa(c),t.A=0)}}fr(4)}catch{}}function G_(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if($i(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function Q_(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if($i(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function _h(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if($i(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=Q_(n),r=G_(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var yh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function X_(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Bt(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Bt){this.h=n.h,bi(this,n.j),this.s=n.s,this.g=n.g,Ci(this,n.m),this.l=n.l;var e=n.i,t=new dr;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Pl(this,t),this.o=n.o}else n&&(e=String(n).match(yh))?(this.h=!1,bi(this,e[1]||"",!0),this.s=zn(e[2]||""),this.g=zn(e[3]||"",!0),Ci(this,e[4]),this.l=zn(e[5]||"",!0),Pl(this,e[6]||"",!0),this.o=zn(e[7]||"")):(this.h=!1,this.i=new dr(null,this.h))}Bt.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Hn(e,Sl,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Hn(e,Sl,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(Hn(t,t.charAt(0)=="/"?Z_:Y_,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",Hn(t,ty)),n.join("")};function ct(n){return new Bt(n)}function bi(n,e,t){n.j=t?zn(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Ci(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Pl(n,e,t){e instanceof dr?(n.i=e,ny(n.i,n.h)):(t||(e=Hn(e,ey)),n.i=new dr(e,n.h))}function Z(n,e,t){n.i.set(e,t)}function Zi(n){return Z(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function zn(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Hn(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,J_),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function J_(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Sl=/[#\/\?@]/g,Y_=/[#\?:]/g,Z_=/[#\?]/g,ey=/[#\?@]/g,ty=/#/g;function dr(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Dt(n){n.g||(n.g=new Map,n.h=0,n.i&&X_(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}w=dr.prototype;w.add=function(n,e){Dt(this),this.i=null,n=Ln(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function vh(n,e){Dt(n),e=Ln(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Eh(n,e){return Dt(n),e=Ln(n,e),n.g.has(e)}w.forEach=function(n,e){Dt(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};w.ta=function(){Dt(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};w.Z=function(n){Dt(this);let e=[];if(typeof n=="string")Eh(this,n)&&(e=e.concat(this.g.get(Ln(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};w.set=function(n,e){return Dt(this),this.i=null,n=Ln(this,n),Eh(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};w.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function Th(n,e,t){vh(n,e),0<t.length&&(n.i=null,n.g.set(Ln(n,e),Ko(t)),n.h+=t.length)}w.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Ln(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function ny(n,e){e&&!n.j&&(Dt(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(vh(this,r),Th(this,i,t))},n)),n.j=e}var ry=class{constructor(n,e){this.g=n,this.map=e}};function Ih(n){this.l=n||iy,U.PerformanceNavigationTiming?(n=U.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(U.g&&U.g.Ka&&U.g.Ka()&&U.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var iy=10;function wh(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Ah(n){return n.h?1:n.g?n.g.size:0}function ao(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function oa(n,e){n.g?n.g.add(e):n.h=e}function Rh(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Ih.prototype.cancel=function(){if(this.i=bh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function bh(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return Ko(n.i)}var sy=class{stringify(n){return U.JSON.stringify(n,void 0)}parse(n){return U.JSON.parse(n,void 0)}};function oy(){this.g=new sy}function ay(n,e,t){const r=t||"";try{_h(n,function(i,s){let o=i;Vr(i)&&(o=Zo(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function ly(n,e){const t=new Gi;if(U.Image){const r=new Image;r.onload=Gr(Xr,t,r,"TestLoadImage: loaded",!0,e),r.onerror=Gr(Xr,t,r,"TestLoadImage: error",!1,e),r.onabort=Gr(Xr,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=Gr(Xr,t,r,"TestLoadImage: timeout",!1,e),U.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function Xr(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function xr(n){this.l=n.fc||null,this.j=n.ob||!1}pe(xr,ra);xr.prototype.g=function(){return new es(this.l,this.j)};xr.prototype.i=function(n){return function(){return n}}({});function es(n,e){de.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=aa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}pe(es,de);var aa=0;w=es.prototype;w.open=function(n,e){if(this.readyState!=aa)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,pr(this)};w.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||U).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};w.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ur(this)),this.readyState=aa};w.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,pr(this)),this.g&&(this.readyState=3,pr(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof U.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ch(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Ch(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}w.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Ur(this):pr(this),this.readyState==3&&Ch(this)}};w.Za=function(n){this.g&&(this.response=this.responseText=n,Ur(this))};w.Ya=function(n){this.g&&(this.response=n,Ur(this))};w.ka=function(){this.g&&Ur(this)};function Ur(n){n.readyState=4,n.l=null,n.j=null,n.A=null,pr(n)}w.setRequestHeader=function(n,e){this.v.append(n,e)};w.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};w.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function pr(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(es.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var cy=U.JSON.parse;function re(n){de.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ph,this.L=this.M=!1}pe(re,de);var Ph="",uy=/^https?$/i,hy=["POST","PUT"];w=re.prototype;w.Oa=function(n){this.M=n};w.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ro.g(),this.C=this.u?Cl(this.u):Cl(ro),this.g.onreadystatechange=Ie(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){kl(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=U.FormData&&n instanceof U.FormData,!(0<=Hu(hy,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Dh(this),0<this.B&&((this.L=fy(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ie(this.ua,this)):this.A=na(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){kl(this,s)}};function fy(n){return In&&typeof n.timeout=="number"&&n.ontimeout!==void 0}w.ua=function(){typeof Ho<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_e(this,"timeout"),this.abort(8))};function kl(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Sh(n),ts(n)}function Sh(n){n.F||(n.F=!0,_e(n,"complete"),_e(n,"error"))}w.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,_e(this,"complete"),_e(this,"abort"),ts(this))};w.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ts(this,!0)),re.$.N.call(this)};w.La=function(){this.s||(this.G||this.v||this.l?kh(this):this.kb())};w.kb=function(){kh(this)};function kh(n){if(n.h&&typeof Ho<"u"&&(!n.C[1]||Ke(n)!=4||n.da()!=2)){if(n.v&&Ke(n)==4)na(n.La,0,n);else if(_e(n,"readystatechange"),Ke(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var i=String(n.I).match(yh)[1]||null;!i&&U.self&&U.self.location&&(i=U.self.location.protocol.slice(0,-1)),r=!uy.test(i?i.toLowerCase():"")}t=r}if(t)_e(n,"complete"),_e(n,"success");else{n.m=6;try{var s=2<Ke(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",Sh(n)}}finally{ts(n)}}}}function ts(n,e){if(n.g){Dh(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||_e(n,"ready");try{t.onreadystatechange=r}catch{}}}function Dh(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(U.clearTimeout(n.A),n.A=null)}w.isActive=function(){return!!this.g};function Ke(n){return n.g?n.g.readyState:0}w.da=function(){try{return 2<Ke(this)?this.g.status:-1}catch{return-1}};w.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};w.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),cy(e)}};function Dl(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Ph:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function dy(n){const e={};n=(n.g&&2<=Ke(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(ar(n[r]))continue;var t=x_(n[r]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const s=e[i]||[];e[i]=s,s.push(t)}D_(e,function(r){return r.join(", ")})}w.Ia=function(){return this.m};w.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Vh(n){let e="";return Go(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function la(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=Vh(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):Z(n,e,t))}function jn(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Nh(n){this.Ga=0,this.j=[],this.l=new Gi,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=jn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=jn("baseRetryDelayMs",5e3,n),this.hb=jn("retryDelaySeedMs",1e4,n),this.eb=jn("forwardChannelMaxRetries",2,n),this.xa=jn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Ih(n&&n.concurrentRequestLimit),this.Ja=new oy,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}w=Nh.prototype;w.ra=8;w.H=1;function ca(n){if(Oh(n),n.H==3){var e=n.W++,t=ct(n.I);if(Z(t,"SID",n.K),Z(t,"RID",e),Z(t,"TYPE","terminate"),Br(n,t),e=new Lr(n,n.l,e),e.L=2,e.v=Zi(ct(t)),t=!1,U.navigator&&U.navigator.sendBeacon)try{t=U.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&U.Image&&(new Image().src=e.v,t=!0),t||(e.g=jh(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Fr(e)}Bh(n)}function ns(n){n.g&&(ha(n),n.g.cancel(),n.g=null)}function Oh(n){ns(n),n.u&&(U.clearTimeout(n.u),n.u=null),Pi(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&U.clearTimeout(n.m),n.m=null)}function rs(n){if(!wh(n.i)&&!n.m){n.m=!0;var e=n.Na;cr||rh(),ur||(cr(),ur=!0),ea.add(e,n),n.C=0}}function py(n,e){return Ah(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Or(Ie(n.Na,n,e),Uh(n,n.C)),n.C++,!0)}w.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Lr(this,this.l,n);let s=this.s;if(this.U&&(s?(s=Qu(s),Xu(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Mh(this,i,e),t=ct(this.I),Z(t,"RID",n),Z(t,"CVER",22),this.F&&Z(t,"X-HTTP-Session-Id",this.F),Br(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(Vh(s)))+"&"+e:this.o&&la(t,this.o,s)),oa(this.i,i),this.bb&&Z(t,"TYPE","init"),this.P?(Z(t,"$req",e),Z(t,"SID","null"),i.aa=!0,so(i,t,null)):so(i,t,e),this.H=2}}else this.H==3&&(n?Vl(this,n):this.j.length==0||wh(this.i)||Vl(this))};function Vl(n,e){var t;e?t=e.m:t=n.W++;const r=ct(n.I);Z(r,"SID",n.K),Z(r,"RID",t),Z(r,"AID",n.V),Br(n,r),n.o&&n.s&&la(r,n.o,n.s),t=new Lr(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=Mh(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),oa(n.i,t),so(t,r,e)}function Br(n,e){n.na&&Go(n.na,function(t,r){Z(e,r,t)}),n.h&&_h({},function(t,r){Z(e,r,t)})}function Mh(n,e,t){t=Math.min(n.j.length,t);var r=n.h?Ie(n.h.Va,n.h,n):null;e:{var i=n.j;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<t;l++){let c=i[l].g;const u=i[l].map;if(c-=s,0>c)s=Math.max(0,i[l].g-100),a=!1;else try{ay(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function Lh(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;cr||rh(),ur||(cr(),ur=!0),ea.add(e,n),n.A=0}}function ua(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Or(Ie(n.Ma,n),Uh(n,n.A)),n.A++,!0)}w.Ma=function(){if(this.u=null,Fh(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Or(Ie(this.jb,this),n)}};w.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ce(10),ns(this),Fh(this))};function ha(n){n.B!=null&&(U.clearTimeout(n.B),n.B=null)}function Fh(n){n.g=new Lr(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=ct(n.wa);Z(e,"RID","rpc"),Z(e,"SID",n.K),Z(e,"AID",n.V),Z(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&Z(e,"TO",n.qa),Z(e,"TYPE","xmlhttp"),Br(n,e),n.o&&n.s&&la(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=Zi(ct(e)),t.s=null,t.S=!0,dh(t,n)}w.ib=function(){this.v!=null&&(this.v=null,ns(this),ua(this),Ce(19))};function Pi(n){n.v!=null&&(U.clearTimeout(n.v),n.v=null)}function xh(n,e){var t=null;if(n.g==e){Pi(n),ha(n),n.g=null;var r=2}else if(ao(n.i,e))t=e.F,Rh(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var i=n.C;r=Qi(),_e(r,new ch(r,t)),rs(n)}else Lh(n);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&py(n,e)||r==2&&ua(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:Mt(n,5);break;case 4:Mt(n,10);break;case 3:Mt(n,6);break;default:Mt(n,2)}}}function Uh(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function Mt(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=Ie(n.pb,n);t||(t=new Bt("//www.google.com/images/cleardot.gif"),U.location&&U.location.protocol=="http"||bi(t,"https"),Zi(t)),ly(t.toString(),r)}else Ce(2);n.H=0,n.h&&n.h.za(e),Bh(n),Oh(n)}w.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Ce(2)):(this.l.info("Failed to ping google.com"),Ce(1))};function Bh(n){if(n.H=0,n.ma=[],n.h){const e=bh(n.i);(e.length!=0||n.j.length!=0)&&(Il(n.ma,e),Il(n.ma,n.j),n.i.i.length=0,Ko(n.j),n.j.length=0),n.h.ya()}}function qh(n,e,t){var r=t instanceof Bt?ct(t):new Bt(t);if(r.g!="")e&&(r.g=e+"."+r.g),Ci(r,r.m);else{var i=U.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Bt(null);r&&bi(s,r),e&&(s.g=e),i&&Ci(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&Z(r,t,e),Z(r,"VER",n.ra),Br(n,r),r}function jh(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new re(new xr({ob:!0})):new re(n.va),e.Oa(n.J),e}w.isActive=function(){return!!this.h&&this.h.isActive(this)};function $h(){}w=$h.prototype;w.Ba=function(){};w.Aa=function(){};w.za=function(){};w.ya=function(){};w.isActive=function(){return!0};w.Va=function(){};function Si(){if(In&&!(10<=Number(C_)))throw Error("Environmental error: no available transport.")}Si.prototype.g=function(n,e){return new Oe(n,e)};function Oe(n,e){de.call(this),this.g=new Nh(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!ar(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ar(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Fn(this)}pe(Oe,de);Oe.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;Ce(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=qh(n,null,n.Y),rs(n)};Oe.prototype.close=function(){ca(this.g)};Oe.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Zo(n),n=t);e.j.push(new ry(e.fb++,n)),e.H==3&&rs(e)};Oe.prototype.N=function(){this.g.h=null,delete this.j,ca(this.g),delete this.g,Oe.$.N.call(this)};function zh(n){ia.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}pe(zh,ia);function Hh(){sa.call(this),this.status=1}pe(Hh,sa);function Fn(n){this.g=n}pe(Fn,$h);Fn.prototype.Ba=function(){_e(this.g,"a")};Fn.prototype.Aa=function(n){_e(this.g,new zh(n))};Fn.prototype.za=function(n){_e(this.g,new Hh)};Fn.prototype.ya=function(){_e(this.g,"b")};function my(){this.blockSize=-1}function xe(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}pe(xe,my);xe.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ms(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],o=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}xe.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)Ms(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Ms(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){Ms(this,r),i=0;break}}this.h=i,this.i+=e};xe.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function Y(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var gy={};function fa(n){return-128<=n&&128>n?A_(n,function(e){return new Y([e|0],0>e?-1:0)}):new Y([n|0],0>n?-1:0)}function We(n){if(isNaN(n)||!isFinite(n))return mn;if(0>n)return ge(We(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=lo;return new Y(e,0)}function Kh(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return ge(Kh(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=We(Math.pow(e,8)),r=mn,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),e);8>s?(s=We(Math.pow(e,s)),r=r.R(s).add(We(o))):(r=r.R(t),r=r.add(We(o)))}return r}var lo=4294967296,mn=fa(0),co=fa(1),Nl=fa(16777216);w=Y.prototype;w.ea=function(){if(Me(this))return-ge(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:lo+r)*e,e*=lo}return n};w.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(ot(this))return"0";if(Me(this))return"-"+ge(this).toString(n);for(var e=We(Math.pow(n,6)),t=this,r="";;){var i=Di(t,e).g;t=ki(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,ot(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};w.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function ot(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function Me(n){return n.h==-1}w.X=function(n){return n=ki(this,n),Me(n)?-1:ot(n)?0:1};function ge(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new Y(t,~n.h).add(co)}w.abs=function(){return Me(this)?ge(this):this};w.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,t[i]=o<<16|s}return new Y(t,t[t.length-1]&-2147483648?-1:0)};function ki(n,e){return n.add(ge(e))}w.R=function(n){if(ot(this)||ot(n))return mn;if(Me(this))return Me(n)?ge(this).R(ge(n)):ge(ge(this).R(n));if(Me(n))return ge(this.R(ge(n)));if(0>this.X(Nl)&&0>n.X(Nl))return We(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,l=n.D(i)&65535;t[2*r+2*i]+=o*l,Jr(t,2*r+2*i),t[2*r+2*i+1]+=s*l,Jr(t,2*r+2*i+1),t[2*r+2*i+1]+=o*a,Jr(t,2*r+2*i+1),t[2*r+2*i+2]+=s*a,Jr(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new Y(t,0)};function Jr(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function $n(n,e){this.g=n,this.h=e}function Di(n,e){if(ot(e))throw Error("division by zero");if(ot(n))return new $n(mn,mn);if(Me(n))return e=Di(ge(n),e),new $n(ge(e.g),ge(e.h));if(Me(e))return e=Di(n,ge(e)),new $n(ge(e.g),e.h);if(30<n.g.length){if(Me(n)||Me(e))throw Error("slowDivide_ only works with positive integers.");for(var t=co,r=e;0>=r.X(n);)t=Ol(t),r=Ol(r);var i=nn(t,1),s=nn(r,1);for(r=nn(r,2),t=nn(t,2);!ot(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(t),s=o),r=nn(r,1),t=nn(t,1)}return e=ki(n,i.R(e)),new $n(i,e)}for(i=mn;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=We(t),o=s.R(e);Me(o)||0<o.X(n);)t-=r,s=We(t),o=s.R(e);ot(s)&&(s=co),i=i.add(s),n=ki(n,o)}return new $n(i,n)}w.gb=function(n){return Di(this,n).h};w.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new Y(t,this.h&n.h)};w.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new Y(t,this.h|n.h)};w.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new Y(t,this.h^n.h)};function Ol(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new Y(t,n.h)}function nn(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new Y(i,n.h)}Si.prototype.createWebChannel=Si.prototype.g;Oe.prototype.send=Oe.prototype.u;Oe.prototype.open=Oe.prototype.m;Oe.prototype.close=Oe.prototype.close;Xi.NO_ERROR=0;Xi.TIMEOUT=8;Xi.HTTP_ERROR=6;uh.COMPLETE="complete";hh.EventType=Mr;Mr.OPEN="a";Mr.CLOSE="b";Mr.ERROR="c";Mr.MESSAGE="d";de.prototype.listen=de.prototype.O;re.prototype.listenOnce=re.prototype.P;re.prototype.getLastError=re.prototype.Sa;re.prototype.getLastErrorCode=re.prototype.Ia;re.prototype.getStatus=re.prototype.da;re.prototype.getResponseJson=re.prototype.Wa;re.prototype.getResponseText=re.prototype.ja;re.prototype.send=re.prototype.ha;re.prototype.setWithCredentials=re.prototype.Oa;xe.prototype.digest=xe.prototype.l;xe.prototype.reset=xe.prototype.reset;xe.prototype.update=xe.prototype.j;Y.prototype.add=Y.prototype.add;Y.prototype.multiply=Y.prototype.R;Y.prototype.modulo=Y.prototype.gb;Y.prototype.compare=Y.prototype.X;Y.prototype.toNumber=Y.prototype.ea;Y.prototype.toString=Y.prototype.toString;Y.prototype.getBits=Y.prototype.D;Y.fromNumber=We;Y.fromString=Kh;var _y=function(){return new Si},yy=function(){return Qi()},Ls=Xi,vy=uh,Ey=Jt,Ml={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ty=xr,Yr=hh,Iy=re,wy=xe,gn=Y;const Ll="@firebase/firestore";/**
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
 */class ve{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ve.UNAUTHENTICATED=new ve(null),ve.GOOGLE_CREDENTIALS=new ve("google-credentials-uid"),ve.FIRST_PARTY=new ve("first-party-uid"),ve.MOCK_USER=new ve("mock-user");/**
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
 */let xn="10.0.0";/**
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
 */const Ht=new Oo("@firebase/firestore");function Fl(){return Ht.logLevel}function C(n,...e){if(Ht.logLevel<=G.DEBUG){const t=e.map(da);Ht.debug(`Firestore (${xn}): ${n}`,...t)}}function ut(n,...e){if(Ht.logLevel<=G.ERROR){const t=e.map(da);Ht.error(`Firestore (${xn}): ${n}`,...t)}}function wn(n,...e){if(Ht.logLevel<=G.WARN){const t=e.map(da);Ht.warn(`Firestore (${xn}): ${n}`,...t)}}function da(n){if(typeof n=="string")return n;try{/**
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
 */function x(n="Unexpected state"){const e=`FIRESTORE (${xn}) INTERNAL ASSERTION FAILED: `+n;throw ut(e),new Error(e)}function ee(n,e){n||x()}function j(n,e){return n}/**
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
 */const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends dt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class wt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Wh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ay{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ve.UNAUTHENTICATED))}shutdown(){}}class Ry{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class by{constructor(e){this.t=e,this.currentUser=ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let s=new wt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new wt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new wt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ee(typeof r.accessToken=="string"),new Wh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ee(e===null||typeof e=="string"),new ve(e)}}class Cy{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=ve.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Py{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Cy(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Sy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ky{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,C("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ee(typeof t.token=="string"),this.R=t.token,new Sy(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Dy(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Gh{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Dy(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function J(n,e){return n<e?-1:n>e?1:0}function An(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */class he{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new N(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new N(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new N(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new he(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class mr{constructor(e,t,r){t===void 0?t=0:t>e.length&&x(),r===void 0?r=e.length-t:r>e.length-t&&x(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return mr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof mr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ne extends mr{construct(e,t,r){return new ne(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new N(v.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new ne(t)}static emptyPath(){return new ne([])}}const Vy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Te extends mr{construct(e,t,r){return new Te(e,t,r)}static isValidIdentifier(e){return Vy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Te.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Te(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new N(v.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new N(v.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new N(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new N(v.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Te(t)}static emptyPath(){return new Te([])}}/**
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
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(ne.fromString(e))}static fromName(e){return new L(ne.fromString(e).popFirst(5))}static empty(){return new L(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ne.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new ne(e.slice()))}}function Ny(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=B.fromTimestamp(r===1e9?new he(t+1,0):new he(t,r));return new bt(i,L.empty(),e)}function Oy(n){return new bt(n.readTime,n.key,-1)}class bt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new bt(B.min(),L.empty(),-1)}static max(){return new bt(B.max(),L.empty(),-1)}}function My(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:J(n.largestBatchId,e.largestBatchId))}/**
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
 */const Ly="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function qr(n){if(n.code!==v.FAILED_PRECONDITION||n.message!==Ly)throw n;C("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new E((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof E?t:E.resolve(t)}catch(t){return E.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):E.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):E.reject(t)}static resolve(e){return new E((t,r)=>{t(e)})}static reject(e){return new E((t,r)=>{r(e)})}static waitFor(e){return new E((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},l=>r(l))}),o=!0,s===i&&t()})}static or(e){let t=E.resolve(!1);for(const r of e)t=t.next(i=>i?E.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new E((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;t(e[c]).next(u=>{o[c]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,t){return new E((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function jr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class pa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}pa.ae=-1;function is(n){return n==null}function Vi(n){return n===0&&1/n==-1/0}function xy(n){return typeof n=="number"&&Number.isInteger(n)&&!Vi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function xl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Yt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Qh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class te{constructor(e,t){this.comparator=e,this.root=t||me.EMPTY}insert(e,t){return new te(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,me.BLACK,null,null))}remove(e){return new te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zr(this.root,e,this.comparator,!0)}}class Zr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class me{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r!=null?r:me.RED,this.left=i!=null?i:me.EMPTY,this.right=s!=null?s:me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new me(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return me.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const e=this.left.check();if(e!==this.right.check())throw x();return e+(this.isRed()?0:1)}}me.EMPTY=null,me.RED=!0,me.BLACK=!1;me.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(e,t,r,i,s){return this}insert(e,t,r){return new me(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ae{constructor(e){this.comparator=e,this.data=new te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ul(this.data.getIterator())}getIteratorFrom(e){return new Ul(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ae)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ae(this.comparator);return t.data=e,t}}class Ul{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Fe{constructor(e){this.fields=e,e.sort(Te.comparator)}static empty(){return new Fe([])}unionWith(e){let t=new Ae(Te.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Fe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return An(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Xh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class be{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Xh("Invalid base64 string: "+s):s}}(e);return new be(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new be(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}be.EMPTY_BYTE_STRING=new be("");const Uy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ct(n){if(ee(!!n),typeof n=="string"){let e=0;const t=Uy.exec(n);if(ee(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ae(n.seconds),nanos:ae(n.nanos)}}function ae(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Kt(n){return typeof n=="string"?be.fromBase64String(n):be.fromUint8Array(n)}/**
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
 */function ma(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ga(n){const e=n.mapValue.fields.__previous_value__;return ma(e)?ga(e):e}function gr(n){const e=Ct(n.mapValue.fields.__local_write_time__.timestampValue);return new he(e.seconds,e.nanos)}/**
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
 */class By{constructor(e,t,r,i,s,o,a,l,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class _r{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new _r("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof _r&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ei={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ma(n)?4:qy(n)?9007199254740991:10:x()}function et(n,e){if(n===e)return!0;const t=Wt(n);if(t!==Wt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return gr(n).isEqual(gr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ct(i.timestampValue),a=Ct(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Kt(i.bytesValue).isEqual(Kt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ae(i.geoPointValue.latitude)===ae(s.geoPointValue.latitude)&&ae(i.geoPointValue.longitude)===ae(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ae(i.integerValue)===ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ae(i.doubleValue),a=ae(s.doubleValue);return o===a?Vi(o)===Vi(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return An(n.arrayValue.values||[],e.arrayValue.values||[],et);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(xl(o)!==xl(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!et(o[l],a[l])))return!1;return!0}(n,e);default:return x()}}function yr(n,e){return(n.values||[]).find(t=>et(t,e))!==void 0}function Rn(n,e){if(n===e)return 0;const t=Wt(n),r=Wt(e);if(t!==r)return J(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return J(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ae(s.integerValue||s.doubleValue),l=ae(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,e);case 3:return Bl(n.timestampValue,e.timestampValue);case 4:return Bl(gr(n),gr(e));case 5:return J(n.stringValue,e.stringValue);case 6:return function(s,o){const a=Kt(s),l=Kt(o);return a.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=J(a[c],l[c]);if(u!==0)return u}return J(a.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=J(ae(s.latitude),ae(o.latitude));return a!==0?a:J(ae(s.longitude),ae(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Rn(a[c],l[c]);if(u)return u}return J(a.length,l.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===ei.mapValue&&o===ei.mapValue)return 0;if(s===ei.mapValue)return 1;if(o===ei.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const f=J(l[h],u[h]);if(f!==0)return f;const d=Rn(a[l[h]],c[u[h]]);if(d!==0)return d}return J(l.length,u.length)}(n.mapValue,e.mapValue);default:throw x()}}function Bl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return J(n,e);const t=Ct(n),r=Ct(e),i=J(t.seconds,r.seconds);return i!==0?i:J(t.nanos,r.nanos)}function bn(n){return uo(n)}function uo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Ct(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Kt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return L.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=uo(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${uo(t.fields[o])}`;return i+"}"}(n.mapValue):x()}function ho(n){return!!n&&"integerValue"in n}function _a(n){return!!n&&"arrayValue"in n}function ql(n){return!!n&&"nullValue"in n}function jl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ci(n){return!!n&&"mapValue"in n}function Jn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Yt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Jn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Jn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function qy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class De{constructor(e){this.value=e}static empty(){return new De({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ci(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jn(t)}setAll(e){let t=Te.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=Jn(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());ci(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return et(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ci(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Yt(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new De(Jn(this.value))}}function Jh(n){const e=[];return Yt(n.fields,(t,r)=>{const i=new Te([t]);if(ci(r)){const s=Jh(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Fe(e)}/**
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
 */class Ee{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ee(e,0,B.min(),B.min(),B.min(),De.empty(),0)}static newFoundDocument(e,t,r,i){return new Ee(e,1,t,B.min(),r,i,0)}static newNoDocument(e,t){return new Ee(e,2,t,B.min(),B.min(),De.empty(),0)}static newUnknownDocument(e,t){return new Ee(e,3,t,B.min(),B.min(),De.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=De.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=De.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ni{constructor(e,t){this.position=e,this.inclusive=t}}function $l(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),t.key):r=Rn(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function zl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!et(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Yn{constructor(e,t="asc"){this.field=e,this.dir=t}}function jy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Yh{}class ue extends Yh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new zy(e,t,r):t==="array-contains"?new Wy(e,r):t==="in"?new Gy(e,r):t==="not-in"?new Qy(e,r):t==="array-contains-any"?new Xy(e,r):new ue(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Hy(e,r):new Ky(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Rn(t,this.value)):t!==null&&Wt(this.value)===Wt(t)&&this.matchesComparison(Rn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class tt extends Yh{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new tt(e,t)}matches(e){return Zh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(t=>t.isInequality());return e!==null?e.field:null}le(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Zh(n){return n.op==="and"}function ef(n){return $y(n)&&Zh(n)}function $y(n){for(const e of n.filters)if(e instanceof tt)return!1;return!0}function fo(n){if(n instanceof ue)return n.field.canonicalString()+n.op.toString()+bn(n.value);if(ef(n))return n.filters.map(e=>fo(e)).join(",");{const e=n.filters.map(t=>fo(t)).join(",");return`${n.op}(${e})`}}function tf(n,e){return n instanceof ue?function(r,i){return i instanceof ue&&r.op===i.op&&r.field.isEqual(i.field)&&et(r.value,i.value)}(n,e):n instanceof tt?function(r,i){return i instanceof tt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&tf(o,i.filters[a]),!0):!1}(n,e):void x()}function nf(n){return n instanceof ue?function(t){return`${t.field.canonicalString()} ${t.op} ${bn(t.value)}`}(n):n instanceof tt?function(t){return t.op.toString()+" {"+t.getFilters().map(nf).join(" ,")+"}"}(n):"Filter"}class zy extends ue{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class Hy extends ue{constructor(e,t){super(e,"in",t),this.keys=rf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ky extends ue{constructor(e,t){super(e,"not-in",t),this.keys=rf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function rf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>L.fromName(r.referenceValue))}class Wy extends ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return _a(t)&&yr(t.arrayValue,this.value)}}class Gy extends ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&yr(this.value.arrayValue,t)}}class Qy extends ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(yr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!yr(this.value.arrayValue,t)}}class Xy extends ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!_a(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>yr(this.value.arrayValue,r))}}/**
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
 */class Jy{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Hl(n,e=null,t=[],r=[],i=null,s=null,o=null){return new Jy(n,e,t,r,i,s,o)}function ya(n){const e=j(n);if(e.he===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>fo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),is(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>bn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>bn(r)).join(",")),e.he=t}return e.he}function va(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!jy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!tf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!zl(n.startAt,e.startAt)&&zl(n.endAt,e.endAt)}function po(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ss{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function Yy(n,e,t,r,i,s,o,a){return new ss(n,e,t,r,i,s,o,a)}function os(n){return new ss(n)}function Kl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Zy(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function ev(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function tv(n){return n.collectionGroup!==null}function _n(n){const e=j(n);if(e.Pe===null){e.Pe=[];const t=ev(e),r=Zy(e);if(t!==null&&r===null)t.isKeyField()||e.Pe.push(new Yn(t)),e.Pe.push(new Yn(Te.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Yn(Te.keyField(),s))}}}return e.Pe}function ht(n){const e=j(n);if(!e.Ie)if(e.limitType==="F")e.Ie=Hl(e.path,e.collectionGroup,_n(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of _n(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new Yn(s.field,o))}const r=e.endAt?new Ni(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ni(e.startAt.position,e.startAt.inclusive):null;e.Ie=Hl(e.path,e.collectionGroup,t,e.filters,e.limit,r,i)}return e.Ie}function mo(n,e,t){return new ss(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function as(n,e){return va(ht(n),ht(e))&&n.limitType===e.limitType}function sf(n){return`${ya(ht(n))}|lt:${n.limitType}`}function go(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>nf(i)).join(", ")}]`),is(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>bn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>bn(i)).join(",")),`Target(${r})`}(ht(n))}; limitType=${n.limitType})`}function ls(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):L.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of _n(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=$l(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,_n(r),i)||r.endAt&&!function(o,a,l){const c=$l(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,_n(r),i))}(n,e)}function nv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function of(n){return(e,t)=>{let r=!1;for(const i of _n(n)){const s=rv(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function rv(n,e,t){const r=n.field.isKeyField()?L.comparator(e.key,t.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?Rn(l,c):x()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x()}}/**
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
 */class Un{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Yt(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Qh(this.inner)}size(){return this.innerSize}}/**
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
 */const iv=new te(L.comparator);function ft(){return iv}const af=new te(L.comparator);function Kn(...n){let e=af;for(const t of n)e=e.insert(t.key,t);return e}function lf(n){let e=af;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Lt(){return Zn()}function cf(){return Zn()}function Zn(){return new Un(n=>n.toString(),(n,e)=>n.isEqual(e))}const sv=new te(L.comparator),ov=new Ae(L.comparator);function z(...n){let e=ov;for(const t of n)e=e.add(t);return e}const av=new Ae(J);function lv(){return av}/**
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
 */function uf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vi(e)?"-0":e}}function hf(n){return{integerValue:""+n}}function cv(n,e){return xy(e)?hf(e):uf(n,e)}/**
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
 */class cs{constructor(){this._=void 0}}function uv(n,e,t){return n instanceof Oi?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ma(s)&&(s=ga(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof Cn?df(n,e):n instanceof vr?pf(n,e):function(i,s){const o=ff(i,s),a=Wl(o)+Wl(i.Te);return ho(o)&&ho(i.Te)?hf(a):uf(i.serializer,a)}(n,e)}function hv(n,e,t){return n instanceof Cn?df(n,e):n instanceof vr?pf(n,e):t}function ff(n,e){return n instanceof Mi?function(r){return ho(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Oi extends cs{}class Cn extends cs{constructor(e){super(),this.elements=e}}function df(n,e){const t=mf(e);for(const r of n.elements)t.some(i=>et(i,r))||t.push(r);return{arrayValue:{values:t}}}class vr extends cs{constructor(e){super(),this.elements=e}}function pf(n,e){let t=mf(e);for(const r of n.elements)t=t.filter(i=>!et(i,r));return{arrayValue:{values:t}}}class Mi extends cs{constructor(e,t){super(),this.serializer=e,this.Te=t}}function Wl(n){return ae(n.integerValue||n.doubleValue)}function mf(n){return _a(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class fv{constructor(e,t){this.field=e,this.transform=t}}function dv(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Cn&&i instanceof Cn||r instanceof vr&&i instanceof vr?An(r.elements,i.elements,et):r instanceof Mi&&i instanceof Mi?et(r.Te,i.Te):r instanceof Oi&&i instanceof Oi}(n.transform,e.transform)}class pv{constructor(e,t){this.version=e,this.transformResults=t}}class at{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new at}static exists(e){return new at(void 0,e)}static updateTime(e){return new at(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ui(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class us{}function gf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new yf(n.key,at.none()):new hs(n.key,n.data,at.none());{const t=n.data,r=De.empty();let i=new Ae(Te.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Zt(n.key,r,new Fe(i.toArray()),at.none())}}function mv(n,e,t){n instanceof hs?function(i,s,o){const a=i.value.clone(),l=Ql(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof Zt?function(i,s,o){if(!ui(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Ql(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(_f(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function er(n,e,t,r){return n instanceof hs?function(s,o,a,l){if(!ui(s.precondition,o))return a;const c=s.value.clone(),u=Xl(s.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof Zt?function(s,o,a,l){if(!ui(s.precondition,o))return a;const c=Xl(s.fieldTransforms,l,o),u=o.data;return u.setAll(_f(s)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,e,t,r):function(s,o,a){return ui(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function gv(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=ff(r.transform,i||null);s!=null&&(t===null&&(t=De.empty()),t.set(r.field,s))}return t||null}function Gl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&An(r,i,(s,o)=>dv(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class hs extends us{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Zt extends us{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function _f(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ql(n,e,t){const r=new Map;ee(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,hv(o,a,t[i]))}return r}function Xl(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,uv(s,o,e))}return r}class yf extends us{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _v extends us{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class yv{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&mv(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=er(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=er(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=cf();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const l=gf(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),z())}isEqual(e){return this.batchId===e.batchId&&An(this.mutations,e.mutations,(t,r)=>Gl(t,r))&&An(this.baseMutations,e.baseMutations,(t,r)=>Gl(t,r))}}class Ea{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ee(e.mutations.length===r.length);let i=function(){return sv}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ea(e,t,r,i)}}/**
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
 */class vv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ev{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var oe,K;function Tv(n){switch(n){default:return x();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0}}function vf(n){if(n===void 0)return ut("GRPC error has no .code"),v.UNKNOWN;switch(n){case oe.OK:return v.OK;case oe.CANCELLED:return v.CANCELLED;case oe.UNKNOWN:return v.UNKNOWN;case oe.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case oe.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case oe.INTERNAL:return v.INTERNAL;case oe.UNAVAILABLE:return v.UNAVAILABLE;case oe.UNAUTHENTICATED:return v.UNAUTHENTICATED;case oe.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case oe.NOT_FOUND:return v.NOT_FOUND;case oe.ALREADY_EXISTS:return v.ALREADY_EXISTS;case oe.PERMISSION_DENIED:return v.PERMISSION_DENIED;case oe.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case oe.ABORTED:return v.ABORTED;case oe.OUT_OF_RANGE:return v.OUT_OF_RANGE;case oe.UNIMPLEMENTED:return v.UNIMPLEMENTED;case oe.DATA_LOSS:return v.DATA_LOSS;default:return x()}}(K=oe||(oe={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ta{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ti}static getOrCreateInstance(){return ti===null&&(ti=new Ta),ti}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let ti=null;/**
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
 */function Iv(){return new TextEncoder}/**
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
 */const wv=new gn([4294967295,4294967295],0);function Jl(n){const e=Iv().encode(n),t=new wy;return t.update(e),new Uint8Array(t.digest())}function Yl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new gn([t,r],0),new gn([i,s],0)]}class Ia{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Wn(`Invalid padding: ${t}`);if(r<0)throw new Wn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Wn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Wn(`Invalid padding when bitmap length is 0: ${t}`);this.de=8*e.length-t,this.Ae=gn.fromNumber(this.de)}Re(e,t,r){let i=e.add(t.multiply(gn.fromNumber(r)));return i.compare(wv)===1&&(i=new gn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const t=Jl(e),[r,i]=Yl(t);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ia(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const t=Jl(e),[r,i]=Yl(t);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Wn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class fs{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,$r.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new fs(B.min(),i,new te(J),ft(),z())}}class $r{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new $r(r,t,z(),z(),z())}}/**
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
 */class hi{constructor(e,t,r,i){this.fe=e,this.removedTargetIds=t,this.key=r,this.ge=i}}class Ef{constructor(e,t){this.targetId=e,this.pe=t}}class Tf{constructor(e,t,r=be.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Zl{constructor(){this.ye=0,this.we=tc(),this.Se=be.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=z(),t=z(),r=z();return this.we.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:x()}}),new $r(this.Se,this.be,e,t,r)}xe(){this.De=!1,this.we=tc()}Oe(e,t){this.De=!0,this.we=this.we.insert(e,t)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class Av{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=ft(),this.$e=ec(),this.Ue=new te(J)}We(e){for(const t of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(t,e.ge):this.ze(t,e.key,e.ge);for(const t of e.removedTargetIds)this.ze(t,e.key,e.ge)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(t);break;case 3:this.Je(t)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Fe(e.resumeToken));break;default:x()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qe.forEach((r,i)=>{this.Je(i)&&t(i)})}Ze(e){var t,r;const i=e.targetId,s=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(po(a))if(s===0){const l=new L(a.path);this.ze(i,l,Ee.newNoDocument(l,B.min()))}else ee(s===1);else{const l=this.et(i);if(l!==s){const c=this.tt(e,l);if(c.status!==0){this.Ye(i);const u=c.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,u)}(t=Ta.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(h,f,d,p){var g,y,m,I,T,V;const H={localCacheCount:d,existenceFilterCount:p.count},$=p.unchangedNames;return $&&(H.bloomFilter={applied:h===0,hashCount:(g=$==null?void 0:$.hashCount)!==null&&g!==void 0?g:0,bitmapLength:(I=(m=(y=$==null?void 0:$.bits)===null||y===void 0?void 0:y.bitmap)===null||m===void 0?void 0:m.length)!==null&&I!==void 0?I:0,padding:(V=(T=$==null?void 0:$.bits)===null||T===void 0?void 0:T.padding)!==null&&V!==void 0?V:0},f&&(H.bloomFilter.mightContain=f)),H}(c.status,(r=c.nt)!==null&&r!==void 0?r:null,l,e.pe))}}}}tt(e,t){const{unchangedNames:r,count:i}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,c;try{l=Kt(s).toUint8Array()}catch(h){if(h instanceof Xh)return wn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{c=new Ia(l,o,a)}catch(h){return wn(h instanceof Wn?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const f=this.qe.rt();return c.mightContain(`projects/${f.projectId}/databases/${f.database}/documents/${h}`)};return c.de===0?{status:1}:{status:i===t-this.it(e.targetId,u)?0:2,nt:u}}it(e,t){const r=this.qe.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{t(s.path.canonicalString())||(this.ze(e,s,null),i++)}),i}st(e){const t=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&po(a.target)){const l=new L(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,Ee.newNoDocument(l,e))}s.Ce&&(t.set(o,s.Me()),s.xe())}});let r=z();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xe(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const i=new fs(e,t,this.Ue,this.Ke,r);return this.Ke=ft(),this.$e=ec(),this.Ue=new te(J),i}Ge(e,t){if(!this.Je(e))return;const r=this.ot(e,t.key)?2:0;this.He(e).Oe(t.key,r),this.Ke=this.Ke.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const i=this.He(e);this.ot(e,t)?i.Oe(t,1):i.Ne(t),this.$e=this.$e.insert(t,this._t(t).delete(e)),r&&(this.Ke=this.Ke.insert(t,r))}removeTarget(e){this.Qe.delete(e)}et(e){const t=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let t=this.Qe.get(e);return t||(t=new Zl,this.Qe.set(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Ae(J),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||C("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.Qe.get(e);return t&&t.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new Zl),this.qe.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ot(e,t){return this.qe.getRemoteKeysForTarget(e).has(t)}}function ec(){return new te(L.comparator)}function tc(){return new te(L.comparator)}const Rv=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),bv=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Cv=(()=>({and:"AND",or:"OR"}))();class Pv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function _o(n,e){return n.useProto3Json||is(e)?e:{value:e}}function Li(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function If(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Sv(n,e){return Li(n,e.toTimestamp())}function Xe(n){return ee(!!n),B.fromTimestamp(function(t){const r=Ct(t);return new he(r.seconds,r.nanos)}(n))}function wa(n,e){return function(r){return new ne(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function wf(n){const e=ne.fromString(n);return ee(Cf(e)),e}function yo(n,e){return wa(n.databaseId,e.path)}function Fs(n,e){const t=wf(e);if(t.get(1)!==n.databaseId.projectId)throw new N(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new N(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(Af(t))}function vo(n,e){return wa(n.databaseId,e)}function kv(n){const e=wf(n);return e.length===4?ne.emptyPath():Af(e)}function Eo(n){return new ne(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Af(n){return ee(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function nc(n,e,t){return{name:yo(n,e),fields:t.value.mapValue.fields}}function Dv(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:x()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(ee(u===void 0||typeof u=="string"),be.fromBase64String(u||"")):(ee(u===void 0||u instanceof Uint8Array),be.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?v.UNKNOWN:vf(c.code);return new N(u,c.message||"")}(o);t=new Tf(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Fs(n,r.document.name),s=Xe(r.document.updateTime),o=r.document.createTime?Xe(r.document.createTime):B.min(),a=new De({mapValue:{fields:r.document.fields}}),l=Ee.newFoundDocument(i,s,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];t=new hi(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Fs(n,r.document),s=r.readTime?Xe(r.readTime):B.min(),o=Ee.newNoDocument(i,s),a=r.removedTargetIds||[];t=new hi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Fs(n,r.document),s=r.removedTargetIds||[];t=new hi([],s,i,null)}else{if(!("filter"in e))return x();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Ev(i,s),a=r.targetId;t=new Ef(a,o)}}return t}function Vv(n,e){let t;if(e instanceof hs)t={update:nc(n,e.key,e.value)};else if(e instanceof yf)t={delete:yo(n,e.key)};else if(e instanceof Zt)t={update:nc(n,e.key,e.data),updateMask:qv(e.fieldMask)};else{if(!(e instanceof _v))return x();t={verify:yo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Oi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Cn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof vr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Mi)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw x()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Sv(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:x()}(n,e.precondition)),t}function Nv(n,e){return n&&n.length>0?(ee(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?Xe(i.updateTime):Xe(s);return o.isEqual(B.min())&&(o=Xe(s)),new pv(o,i.transformResults||[])}(t,e))):[]}function Ov(n,e){return{documents:[vo(n,e.path)]}}function Mv(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=vo(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=vo(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return bf(tt.create(l,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:an(h.field),direction:xv(h.dir)}}(c))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=_o(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),t}function Lv(n){let e=kv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ee(r===1);const u=t.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];t.where&&(s=function(h){const f=Rf(h);return f instanceof tt&&ef(f)?f.getFilters():[f]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(f=>function(p){return new Yn(ln(p.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(f))}(t.orderBy));let a=null;t.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,is(f)?null:f}(t.limit));let l=null;t.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new Ni(d,f)}(t.startAt));let c=null;return t.endAt&&(c=function(h){const f=!h.before,d=h.values||[];return new Ni(d,f)}(t.endAt)),Yy(e,i,o,s,a,"F",l,c)}function Fv(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Rf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ln(t.unaryFilter.field);return ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ln(t.unaryFilter.field);return ue.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ln(t.unaryFilter.field);return ue.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ln(t.unaryFilter.field);return ue.create(o,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(n):n.fieldFilter!==void 0?function(t){return ue.create(ln(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return tt.create(t.compositeFilter.filters.map(r=>Rf(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return x()}}(t.compositeFilter.op))}(n):x()}function xv(n){return Rv[n]}function Uv(n){return bv[n]}function Bv(n){return Cv[n]}function an(n){return{fieldPath:n.canonicalString()}}function ln(n){return Te.fromServerFormat(n.fieldPath)}function bf(n){return n instanceof ue?function(t){if(t.op==="=="){if(jl(t.value))return{unaryFilter:{field:an(t.field),op:"IS_NAN"}};if(ql(t.value))return{unaryFilter:{field:an(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(jl(t.value))return{unaryFilter:{field:an(t.field),op:"IS_NOT_NAN"}};if(ql(t.value))return{unaryFilter:{field:an(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:an(t.field),op:Uv(t.op),value:t.value}}}(n):n instanceof tt?function(t){const r=t.getFilters().map(i=>bf(i));return r.length===1?r[0]:{compositeFilter:{op:Bv(t.op),filters:r}}}(n):x()}function qv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Cf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class vt{constructor(e,t,r,i,s=B.min(),o=B.min(),a=be.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new vt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new vt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class jv{constructor(e){this.ct=e}}function $v(n){const e=Lv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?mo(e,e.limit,"L"):e}/**
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
 */class zv{constructor(){this.sn=new Hv}addToCollectionParentIndex(e,t){return this.sn.add(t),E.resolve()}getCollectionParents(e,t){return E.resolve(this.sn.getEntries(t))}addFieldIndex(e,t){return E.resolve()}deleteFieldIndex(e,t){return E.resolve()}getDocumentsMatchingTarget(e,t){return E.resolve(null)}getIndexType(e,t){return E.resolve(0)}getFieldIndexes(e,t){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,t){return E.resolve(bt.min())}getMinOffsetFromCollectionGroup(e,t){return E.resolve(bt.min())}updateCollectionGroup(e,t,r){return E.resolve()}updateIndexEntries(e,t){return E.resolve()}}class Hv{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ae(ne.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ae(ne.comparator)).toArray()}}/**
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
 */class Pn{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Pn(0)}static On(){return new Pn(-1)}}/**
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
 */class Kv{constructor(){this.changes=new Un(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?E.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Wv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Gv{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&er(r.mutation,i,Fe.empty(),he.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,z()).next(()=>r))}getLocalViewOfDocuments(e,t,r=z()){const i=Lt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Kn();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Lt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,z()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=ft();const o=Zn(),a=function(){return Zn()}();return t.forEach((l,c)=>{const u=r.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Zt)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),er(u.mutation,c,u.mutation.getFieldMask(),he.now())):o.set(c.key,Fe.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),t.forEach((c,u)=>{var h;return a.set(c,new Wv(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Zn();let i=new te((o,a)=>o-a),s=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=t.get(l);if(c===null)return;let u=r.get(l)||Fe.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(i.get(a.batchId)||z()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=cf();u.forEach(f=>{if(!s.has(f)){const d=gf(t.get(f),r.get(f));d!==null&&h.set(f,d),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return E.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(s){return L.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):tv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):E.resolve(Lt());let a=-1,l=s;return o.next(c=>E.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?E.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,z())).next(u=>({batchId:a,changes:lf(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(r=>{let i=Kn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const i=t.collectionGroup;let s=Kn();return this.indexManager.getCollectionParents(e,i).next(o=>E.forEach(o,a=>{const l=function(u,h){return new ss(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(c=>{c.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i))).next(s=>{i.forEach((a,l)=>{const c=l.getKey();s.get(c)===null&&(s=s.insert(c,Ee.newInvalidDocument(c)))});let o=Kn();return s.forEach((a,l)=>{const c=i.get(a);c!==void 0&&er(c.mutation,l,Fe.empty(),he.now()),ls(t,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class Qv{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,t){return E.resolve(this.ar.get(t))}saveBundleMetadata(e,t){return this.ar.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Xe(i.createTime)}}(t)),E.resolve()}getNamedQuery(e,t){return E.resolve(this.ur.get(t))}saveNamedQuery(e,t){return this.ur.set(t.name,function(i){return{name:i.name,query:$v(i.bundledQuery),readTime:Xe(i.readTime)}}(t)),E.resolve()}}/**
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
 */class Xv{constructor(){this.overlays=new te(L.comparator),this.cr=new Map}getOverlay(e,t){return E.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Lt();return E.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),E.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),E.resolve()}getOverlaysForCollection(e,t,r){const i=Lt(),s=t.length+1,o=new L(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return E.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new te((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>r){let u=s.get(c.largestBatchId);u===null&&(u=Lt(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Lt(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return E.resolve(a)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new vv(t,r));let s=this.cr.get(t);s===void 0&&(s=z(),this.cr.set(t,s)),this.cr.set(t,s.add(r.key))}}/**
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
 */class Aa{constructor(){this.lr=new Ae(fe.hr),this.Pr=new Ae(fe.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,t){const r=new fe(e,t);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Er(new fe(e,t))}dr(e,t){e.forEach(r=>this.removeReference(r,t))}Ar(e){const t=new L(new ne([])),r=new fe(t,e),i=new fe(t,e+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const t=new L(new ne([])),r=new fe(t,e),i=new fe(t,e+1);let s=z();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new fe(e,0),r=this.lr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class fe{constructor(e,t){this.key=e,this.mr=t}static hr(e,t){return L.comparator(e.key,t.key)||J(e.mr,t.mr)}static Ir(e,t){return J(e.mr,t.mr)||L.comparator(e.key,t.key)}}/**
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
 */class Jv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.gr=1,this.pr=new Ae(fe.hr)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yv(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new fe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,t){return E.resolve(this.yr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.wr(r),s=i<0?0:i;return E.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new fe(t,0),i=new fe(t,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),E.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ae(J);return t.forEach(i=>{const s=new fe(i,0),o=new fe(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),E.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new fe(new L(s),0);let a=new Ae(J);return this.pr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.mr)),!0)},o),E.resolve(this.Sr(a))}Sr(e){const t=[];return e.forEach(r=>{const i=this.yr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ee(this.br(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return E.forEach(t.mutations,i=>{const s=new fe(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,t){const r=new fe(t,0),i=this.pr.firstAfterOrEqual(r);return E.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}br(e,t){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const t=this.wr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Yv{constructor(e){this.Dr=e,this.docs=function(){return new te(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return E.resolve(r?r.document.mutableCopy():Ee.newInvalidDocument(t))}getEntries(e,t){let r=ft();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ee.newInvalidDocument(i))}),E.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=ft();const o=t.path,a=new L(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||My(Oy(u),r)<=0||(i.has(u.key)||ls(t,u))&&(s=s.insert(u.key,u.mutableCopy()))}return E.resolve(s)}getAllFromCollectionGroup(e,t,r,i){x()}vr(e,t){return E.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Zv(this)}getSize(e){return E.resolve(this.size)}}class Zv extends Kv{constructor(e){super(),this.sr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.sr.addEntry(e,i)):this.sr.removeEntry(r)}),E.waitFor(t)}getFromCache(e,t){return this.sr.getEntry(e,t)}getAllFromCache(e,t){return this.sr.getEntries(e,t)}}/**
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
 */class eE{constructor(e){this.persistence=e,this.Cr=new Un(t=>ya(t),va),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Aa,this.targetCount=0,this.Or=Pn.xn()}forEachTarget(e,t){return this.Cr.forEach((r,i)=>t(i)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Fr&&(this.Fr=t),E.resolve()}Ln(e){this.Cr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Or=new Pn(t),this.highestTargetId=t),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,t){return this.Ln(t),this.targetCount+=1,E.resolve()}updateTargetData(e,t){return this.Ln(t),E.resolve()}removeTargetData(e,t){return this.Cr.delete(t.target),this.Mr.Ar(t.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),E.waitFor(s).next(()=>i)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,t){const r=this.Cr.get(t)||null;return E.resolve(r)}addMatchingKeys(e,t,r){return this.Mr.Tr(t,r),E.resolve()}removeMatchingKeys(e,t,r){this.Mr.dr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),E.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Mr.Ar(t),E.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Mr.Vr(t);return E.resolve(r)}containsKey(e,t){return E.resolve(this.Mr.containsKey(t))}}/**
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
 */class tE{constructor(e,t){this.Nr={},this.overlays={},this.Br=new pa(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new eE(this),this.indexManager=new zv,this.remoteDocumentCache=function(i){return new Yv(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new jv(t),this.Qr=new Qv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Xv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Nr[e.toKey()];return r||(r=new Jv(t,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,t,r){C("MemoryPersistence","Starting transaction:",e);const i=new nE(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(e,t){return E.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,t)))}}class nE extends Fy{constructor(e){super(),this.currentSequenceNumber=e}}class Ra{constructor(e){this.persistence=e,this.Wr=new Aa,this.Gr=null}static zr(e){return new Ra(e)}get jr(){if(this.Gr)return this.Gr;throw x()}addReference(e,t,r){return this.Wr.addReference(r,t),this.jr.delete(r.toString()),E.resolve()}removeReference(e,t,r){return this.Wr.removeReference(r,t),this.jr.add(r.toString()),E.resolve()}markPotentiallyOrphaned(e,t){return this.jr.add(t.toString()),E.resolve()}removeTarget(e,t){this.Wr.Ar(t.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Kr(){this.Gr=new Set}$r(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.jr,r=>{const i=L.fromPath(r);return this.Hr(e,i).next(s=>{s||t.removeEntry(i,B.min())})}).next(()=>(this.Gr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hr(e,t).next(r=>{r?this.jr.delete(t.toString()):this.jr.add(t.toString())})}qr(e){return 0}Hr(e,t){return E.or([()=>E.resolve(this.Wr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ur(e,t)])}}/**
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
 */class ba{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Li=r,this.ki=i}static qi(e,t){let r=z(),i=z();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ba(e,t.fromCache,r,i)}}/**
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
 */class rE{constructor(){this.Qi=!1}initialize(e,t){this.Ki=e,this.indexManager=t,this.Qi=!0}getDocumentsMatchingQuery(e,t,r,i){return this.$i(e,t).next(s=>s||this.Ui(e,t,i,r)).next(s=>s||this.Wi(e,t))}$i(e,t){if(Kl(t))return E.resolve(null);let r=ht(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=mo(t,null,"F"),r=ht(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=z(...s);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Gi(t,a);return this.zi(t,c,o,l.readTime)?this.$i(e,mo(t,null,"F")):this.ji(e,c,t,l)}))})))}Ui(e,t,r,i){return Kl(t)||i.isEqual(B.min())?this.Wi(e,t):this.Ki.getDocuments(e,r).next(s=>{const o=this.Gi(t,s);return this.zi(t,o,r,i)?this.Wi(e,t):(Fl()<=G.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),go(t)),this.ji(e,o,t,Ny(i,-1)))})}Gi(e,t){let r=new Ae(of(e));return t.forEach((i,s)=>{ls(e,s)&&(r=r.add(s))}),r}zi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(e,t){return Fl()<=G.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",go(t)),this.Ki.getDocumentsMatchingQuery(e,t,bt.min())}ji(e,t,r,i){return this.Ki.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class iE{constructor(e,t,r,i){this.persistence=e,this.Hi=t,this.serializer=i,this.Ji=new te(J),this.Yi=new Un(s=>ya(s),va),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Gv(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function sE(n,e,t,r){return new iE(n,e,t,r)}async function Pf(n,e){const t=j(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.es(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=z();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return t.localDocuments.getDocuments(r,l).next(c=>({ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function oE(n,e){const t=j(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,f=h.keys();let d=E.resolve();return f.forEach(p=>{d=d.next(()=>u.getEntry(l,p)).next(g=>{const y=c.docVersions.get(p);ee(y!==null),g.version.compareTo(y)<0&&(h.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),u.addEntry(g)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=z();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Sf(n){const e=j(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.kr.getLastRemoteSnapshotVersion(t))}function aE(n,e){const t=j(n),r=e.snapshotVersion;let i=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Xi.newChangeBuffer({trackRemovals:!0});i=t.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const f=i.get(h);if(!f)return;a.push(t.kr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>t.kr.addMatchingKeys(s,u.addedDocuments,h)));let d=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(be.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),i=i.insert(h,d),function(g,y,m){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(f,d,u)&&a.push(t.kr.updateTargetData(s,d))});let l=ft(),c=z();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(lE(s,o,e.documentUpdates).next(u=>{l=u.ns,c=u.rs})),!r.isEqual(B.min())){const u=t.kr.getLastRemoteSnapshotVersion(s).next(h=>t.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return E.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(t.Ji=i,s))}function lE(n,e,t){let r=z(),i=z();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=ft();return t.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(B.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):C("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ns:o,rs:i}})}function cE(n,e){const t=j(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function uE(n,e){const t=j(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.kr.getTargetData(r,e).next(s=>s?(i=s,E.resolve(i)):t.kr.allocateTargetId(r).next(o=>(i=new vt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(r.targetId,r),t.Yi.set(e,r.targetId)),r})}async function To(n,e,t){const r=j(n),i=r.Ji.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!jr(o))throw o;C("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function rc(n,e,t){const r=j(n);let i=B.min(),s=z();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,c,u){const h=j(l),f=h.Yi.get(u);return f!==void 0?E.resolve(h.Ji.get(f)):h.kr.getTargetData(c,u)}(r,o,ht(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,t?i:B.min(),t?s:z())).next(a=>(hE(r,nv(e),a),{documents:a,ss:s})))}function hE(n,e,t){let r=n.Zi.get(e)||B.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Zi.set(e,r)}class ic{constructor(){this.activeTargetIds=lv()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fE{constructor(){this.Hs=new ic,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,t,r){this.Js[e]=t}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new ic,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class dE{Ys(e){}shutdown(){}}/**
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
 */class sc{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ni=null;function xs(){return ni===null?ni=function(){return 268435456+Math.round(2147483648*Math.random())}():ni++,"0x"+ni.toString(16)}/**
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
 */const pE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class mE{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
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
 */const ye="WebChannelConnection";class gE extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http";this.To=r+"://"+t.host,this.Eo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get Ao(){return!1}Ro(t,r,i,s,o){const a=xs(),l=this.Vo(t,r);C("RestConnection",`Sending RPC '${t}' ${a}:`,l,i);const c={};return this.mo(c,s,o),this.fo(t,l,c,i).then(u=>(C("RestConnection",`Received RPC '${t}' ${a}: `,u),u),u=>{throw wn("RestConnection",`RPC '${t}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}po(t,r,i,s,o,a){return this.Ro(t,r,i,s,o)}mo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}Vo(t,r){const i=pE[t];return`${this.To}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}fo(e,t,r,i){const s=xs();return new Promise((o,a)=>{const l=new Iy;l.setWithCredentials(!0),l.listenOnce(vy.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ls.NO_ERROR:const u=l.getResponseJson();C(ye,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case Ls.TIMEOUT:C(ye,`RPC '${e}' ${s} timed out`),a(new N(v.DEADLINE_EXCEEDED,"Request time out"));break;case Ls.HTTP_ERROR:const h=l.getStatus();if(C(ye,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(y){const m=y.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(m)>=0?m:v.UNKNOWN}(d.status);a(new N(p,d.message))}else a(new N(v.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new N(v.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{C(ye,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);C(ye,`RPC '${e}' ${s} sending request:`,i),l.send(t,"POST",c,r,15)})}yo(e,t,r){const i=xs(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=_y(),a=yy(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new Ty({})),this.mo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const u=s.join("");C(ye,`Creating RPC '${e}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let f=!1,d=!1;const p=new mE({so:y=>{d?C(ye,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(f||(C(ye,`Opening RPC '${e}' stream ${i} transport.`),h.open(),f=!0),C(ye,`RPC '${e}' stream ${i} sending:`,y),h.send(y))},oo:()=>h.close()}),g=(y,m,I)=>{y.listen(m,T=>{try{I(T)}catch(V){setTimeout(()=>{throw V},0)}})};return g(h,Yr.EventType.OPEN,()=>{d||C(ye,`RPC '${e}' stream ${i} transport opened.`)}),g(h,Yr.EventType.CLOSE,()=>{d||(d=!0,C(ye,`RPC '${e}' stream ${i} transport closed`),p.Po())}),g(h,Yr.EventType.ERROR,y=>{d||(d=!0,wn(ye,`RPC '${e}' stream ${i} transport errored:`,y),p.Po(new N(v.UNAVAILABLE,"The operation could not be completed")))}),g(h,Yr.EventType.MESSAGE,y=>{var m;if(!d){const I=y.data[0];ee(!!I);const T=I,V=T.error||((m=T[0])===null||m===void 0?void 0:m.error);if(V){C(ye,`RPC '${e}' stream ${i} received error:`,V);const H=V.status;let $=function(k){const R=oe[k];if(R!==void 0)return vf(R)}(H),A=V.message;$===void 0&&($=v.INTERNAL,A="Unknown error status: "+H+" with message "+V.message),d=!0,p.Po(new N($,A)),h.close()}else C(ye,`RPC '${e}' stream ${i} received:`,I),p.Io(I)}}),g(a,Ey.STAT_EVENT,y=>{y.stat===Ml.PROXY?C(ye,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===Ml.NOPROXY&&C(ye,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.ho()},0),p}}function Us(){return typeof document<"u"?document:null}/**
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
 */function ds(n){return new Pv(n,!0)}/**
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
 */class kf{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=t,this.wo=r,this.So=i,this.bo=s,this.Do=0,this.vo=null,this.Co=Date.now(),this.reset()}reset(){this.Do=0}Fo(){this.Do=this.bo}Mo(e){this.cancel();const t=Math.floor(this.Do+this.xo()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,t-r);i>0&&C("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Do} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.vo=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.Do*=this.So,this.Do<this.wo&&(this.Do=this.wo),this.Do>this.bo&&(this.Do=this.bo)}Oo(){this.vo!==null&&(this.vo.skipDelay(),this.vo=null)}cancel(){this.vo!==null&&(this.vo.cancel(),this.vo=null)}xo(){return(Math.random()-.5)*this.Do}}/**
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
 */class Df{constructor(e,t,r,i,s,o,a,l){this.ii=e,this.No=r,this.Bo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Lo=0,this.ko=null,this.qo=null,this.stream=null,this.Qo=new kf(e,t)}Ko(){return this.state===1||this.state===5||this.$o()}$o(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Uo()}async stop(){this.Ko()&&await this.close(0)}Wo(){this.state=0,this.Qo.reset()}Go(){this.$o()&&this.ko===null&&(this.ko=this.ii.enqueueAfterDelay(this.No,6e4,()=>this.zo()))}jo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.$o())return this.close(0)}Ho(){this.ko&&(this.ko.cancel(),this.ko=null)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}async close(e,t){this.Ho(),this.Jo(),this.Qo.cancel(),this.Lo++,e!==4?this.Qo.reset():t&&t.code===v.RESOURCE_EXHAUSTED?(ut(t.toString()),ut("Using maximum backoff delay to prevent overloading the backend."),this.Qo.Fo()):t&&t.code===v.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(t)}Yo(){}auth(){this.state=1;const e=this.Zo(this.Lo),t=this.Lo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Lo===t&&this.Xo(r,i)},r=>{e(()=>{const i=new N(v.UNKNOWN,"Fetching auth token failed: "+r.message);return this.e_(i)})})}Xo(e,t){const r=this.Zo(this.Lo);this.stream=this.t_(e,t),this.stream._o(()=>{r(()=>(this.state=2,this.qo=this.ii.enqueueAfterDelay(this.Bo,1e4,()=>(this.$o()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.e_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Uo(){this.state=5,this.Qo.Mo(async()=>{this.state=0,this.start()})}e_(e){return C("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Zo(e){return t=>{this.ii.enqueueAndForget(()=>this.Lo===e?t():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _E extends Df{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}t_(e,t){return this.connection.yo("Listen",e,t)}onMessage(e){this.Qo.reset();const t=Dv(this.serializer,e),r=function(s){if(!("targetChange"in s))return B.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?B.min():o.readTime?Xe(o.readTime):B.min()}(e);return this.listener.n_(t,r)}r_(e){const t={};t.database=Eo(this.serializer),t.addTarget=function(s,o){let a;const l=o.target;if(a=po(l)?{documents:Ov(s,l)}:{query:Mv(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=If(s,o.resumeToken);const c=_o(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(B.min())>0){a.readTime=Li(s,o.snapshotVersion.toTimestamp());const c=_o(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=Fv(this.serializer,e);r&&(t.labels=r),this.jo(t)}i_(e){const t={};t.database=Eo(this.serializer),t.removeTarget=e,this.jo(t)}}class yE extends Df{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.s_=!1}get o_(){return this.s_}start(){this.s_=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.s_&&this.__([])}t_(e,t){return this.connection.yo("Write",e,t)}onMessage(e){if(ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.s_){this.Qo.reset();const t=Nv(e.writeResults,e.commitTime),r=Xe(e.commitTime);return this.listener.a_(r,t)}return ee(!e.writeResults||e.writeResults.length===0),this.s_=!0,this.listener.u_()}c_(){const e={};e.database=Eo(this.serializer),this.jo(e)}__(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Vv(this.serializer,r))};this.jo(t)}}/**
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
 */class vE extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.l_=!1}h_(){if(this.l_)throw new N(v.FAILED_PRECONDITION,"The client has already been terminated.")}Ro(e,t,r){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Ro(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(v.UNKNOWN,i.toString())})}po(e,t,r,i){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.po(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new N(v.UNKNOWN,s.toString())})}terminate(){this.l_=!0}}class EE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.I_=0,this.T_=null,this.E_=!0}d_(){this.I_===0&&(this.A_("Unknown"),this.T_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.T_=null,this.R_("Backend didn't respond within 10 seconds."),this.A_("Offline"),Promise.resolve())))}V_(e){this.state==="Online"?this.A_("Unknown"):(this.I_++,this.I_>=1&&(this.m_(),this.R_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.A_("Offline")))}set(e){this.m_(),this.I_=0,e==="Online"&&(this.E_=!1),this.A_(e)}A_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}R_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.E_?(ut(t),this.E_=!1):C("OnlineStateTracker",t)}m_(){this.T_!==null&&(this.T_.cancel(),this.T_=null)}}/**
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
 */class TE{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.f_=[],this.g_=new Map,this.p_=new Set,this.y_=[],this.w_=s,this.w_.Ys(o=>{r.enqueueAndForget(async()=>{en(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=j(l);c.p_.add(4),await zr(c),c.S_.set("Unknown"),c.p_.delete(4),await ps(c)}(this))})}),this.S_=new EE(r,i)}}async function ps(n){if(en(n))for(const e of n.y_)await e(!0)}async function zr(n){for(const e of n.y_)await e(!1)}function Vf(n,e){const t=j(n);t.g_.has(e.targetId)||(t.g_.set(e.targetId,e),Sa(t)?Pa(t):Bn(t).$o()&&Ca(t,e))}function Nf(n,e){const t=j(n),r=Bn(t);t.g_.delete(e),r.$o()&&Of(t,e),t.g_.size===0&&(r.$o()?r.Go():en(t)&&t.S_.set("Unknown"))}function Ca(n,e){if(n.b_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Bn(n).r_(e)}function Of(n,e){n.b_.Be(e),Bn(n).i_(e)}function Pa(n){n.b_=new Av({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.g_.get(e)||null,rt:()=>n.datastore.serializer.databaseId}),Bn(n).start(),n.S_.d_()}function Sa(n){return en(n)&&!Bn(n).Ko()&&n.g_.size>0}function en(n){return j(n).p_.size===0}function Mf(n){n.b_=void 0}async function IE(n){n.g_.forEach((e,t)=>{Ca(n,e)})}async function wE(n,e){Mf(n),Sa(n)?(n.S_.V_(e),Pa(n)):n.S_.set("Unknown")}async function AE(n,e,t){if(n.S_.set("Online"),e instanceof Tf&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.g_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.g_.delete(a),i.b_.removeTarget(a))}(n,e)}catch(r){C("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fi(n,r)}else if(e instanceof hi?n.b_.We(e):e instanceof Ef?n.b_.Ze(e):n.b_.je(e),!t.isEqual(B.min()))try{const r=await Sf(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.b_.st(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=s.g_.get(c);u&&s.g_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=s.g_.get(l);if(!u)return;s.g_.set(l,u.withResumeToken(be.EMPTY_BYTE_STRING,u.snapshotVersion)),Of(s,l);const h=new vt(u.target,l,c,u.sequenceNumber);Ca(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){C("RemoteStore","Failed to raise snapshot:",r),await Fi(n,r)}}async function Fi(n,e,t){if(!jr(e))throw e;n.p_.add(1),await zr(n),n.S_.set("Offline"),t||(t=()=>Sf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await t(),n.p_.delete(1),await ps(n)})}function Lf(n,e){return e().catch(t=>Fi(n,t,e))}async function ms(n){const e=j(n),t=Pt(e);let r=e.f_.length>0?e.f_[e.f_.length-1].batchId:-1;for(;RE(e);)try{const i=await cE(e.localStore,r);if(i===null){e.f_.length===0&&t.Go();break}r=i.batchId,bE(e,i)}catch(i){await Fi(e,i)}Ff(e)&&xf(e)}function RE(n){return en(n)&&n.f_.length<10}function bE(n,e){n.f_.push(e);const t=Pt(n);t.$o()&&t.o_&&t.__(e.mutations)}function Ff(n){return en(n)&&!Pt(n).Ko()&&n.f_.length>0}function xf(n){Pt(n).start()}async function CE(n){Pt(n).c_()}async function PE(n){const e=Pt(n);for(const t of n.f_)e.__(t.mutations)}async function SE(n,e,t){const r=n.f_.shift(),i=Ea.from(r,e,t);await Lf(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ms(n)}async function kE(n,e){e&&Pt(n).o_&&await async function(r,i){if(function(o){return Tv(o)&&o!==v.ABORTED}(i.code)){const s=r.f_.shift();Pt(r).Wo(),await Lf(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ms(r)}}(n,e),Ff(n)&&xf(n)}async function oc(n,e){const t=j(n);t.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const r=en(t);t.p_.add(3),await zr(t),r&&t.S_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.p_.delete(3),await ps(t)}async function DE(n,e){const t=j(n);e?(t.p_.delete(2),await ps(t)):e||(t.p_.add(2),await zr(t),t.S_.set("Unknown"))}function Bn(n){return n.D_||(n.D_=function(t,r,i){const s=j(t);return s.h_(),new _E(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{_o:IE.bind(null,n),uo:wE.bind(null,n),n_:AE.bind(null,n)}),n.y_.push(async e=>{e?(n.D_.Wo(),Sa(n)?Pa(n):n.S_.set("Unknown")):(await n.D_.stop(),Mf(n))})),n.D_}function Pt(n){return n.v_||(n.v_=function(t,r,i){const s=j(t);return s.h_(),new yE(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{_o:CE.bind(null,n),uo:kE.bind(null,n),u_:PE.bind(null,n),a_:SE.bind(null,n)}),n.y_.push(async e=>{e?(n.v_.Wo(),await ms(n)):(await n.v_.stop(),n.f_.length>0&&(C("RemoteStore",`Stopping write stream with ${n.f_.length} pending writes`),n.f_=[]))})),n.v_}/**
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
 */class ka{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new ka(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(v.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Da(n,e){if(ut("AsyncQueue",`${e}: ${n}`),jr(n))return new N(v.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class yn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||L.comparator(t.key,r.key):(t,r)=>L.comparator(t.key,r.key),this.keyedMap=Kn(),this.sortedSet=new te(this.comparator)}static emptySet(e){return new yn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof yn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new yn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class ac{constructor(){this.C_=new te(L.comparator)}track(e){const t=e.doc.key,r=this.C_.get(t);r?e.type!==0&&r.type===3?this.C_=this.C_.insert(t,e):e.type===3&&r.type!==1?this.C_=this.C_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.C_=this.C_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.C_=this.C_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.C_=this.C_.remove(t):e.type===1&&r.type===2?this.C_=this.C_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.C_=this.C_.insert(t,{type:2,doc:e.doc}):x():this.C_=this.C_.insert(t,e)}F_(){const e=[];return this.C_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Sn{constructor(e,t,r,i,s,o,a,l,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Sn(e,t,yn.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&as(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class VE{constructor(){this.M_=void 0,this.listeners=[]}}class NE{constructor(){this.queries=new Un(e=>sf(e),as),this.onlineState="Unknown",this.x_=new Set}}async function Uf(n,e){const t=j(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new VE),i)try{s.M_=await t.onListen(r)}catch(o){const a=Da(o,`Initialization of query '${go(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.O_(t.onlineState),s.M_&&e.N_(s.M_)&&Va(t)}async function Bf(n,e){const t=j(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function OE(n,e){const t=j(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.N_(i)&&(r=!0);o.M_=i}}r&&Va(t)}function ME(n,e,t){const r=j(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function Va(n){n.x_.forEach(e=>{e.next()})}class qf{constructor(e,t,r){this.query=e,this.B_=t,this.L_=!1,this.k_=null,this.onlineState="Unknown",this.options=r||{}}N_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Sn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.L_?this.q_(e)&&(this.B_.next(e),t=!0):this.Q_(e,this.onlineState)&&(this.K_(e),t=!0),this.k_=e,t}onError(e){this.B_.error(e)}O_(e){this.onlineState=e;let t=!1;return this.k_&&!this.L_&&this.Q_(this.k_,e)&&(this.K_(this.k_),t=!0),t}Q_(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.U_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}q_(e){if(e.docChanges.length>0)return!0;const t=this.k_&&this.k_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}K_(e){e=Sn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.L_=!0,this.B_.next(e)}}/**
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
 */class jf{constructor(e){this.key=e}}class $f{constructor(e){this.key=e}}class LE{constructor(e,t){this.query=e,this.Z_=t,this.X_=null,this.hasCachedResults=!1,this.current=!1,this.ea=z(),this.mutatedKeys=z(),this.ta=of(e),this.na=new yn(this.ta)}get ra(){return this.Z_}ia(e,t){const r=t?t.sa:new ac,i=t?t.na:this.na;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const f=i.get(u),d=ls(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),g=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let y=!1;f&&d?f.data.isEqual(d.data)?p!==g&&(r.track({type:3,doc:d}),y=!0):this.oa(f,d)||(r.track({type:2,doc:d}),y=!0,(l&&this.ta(d,l)>0||c&&this.ta(d,c)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),y=!0):f&&!d&&(r.track({type:1,doc:f}),y=!0,(l||c)&&(a=!0)),y&&(d?(o=o.add(d),s=g?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{na:o,sa:r,zi:a,mutatedKeys:s}}oa(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.na;this.na=e.na,this.mutatedKeys=e.mutatedKeys;const s=e.sa.F_();s.sort((c,u)=>function(f,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x()}};return p(f)-p(d)}(c.type,u.type)||this.ta(c.doc,u.doc)),this._a(r);const o=t?this.aa():[],a=this.ea.size===0&&this.current?1:0,l=a!==this.X_;return this.X_=a,s.length!==0||l?{snapshot:new Sn(this.query,e.na,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ua:o}:{ua:o}}O_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({na:this.na,sa:new ac,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ua:[]}}ca(e){return!this.Z_.has(e)&&!!this.na.has(e)&&!this.na.get(e).hasLocalMutations}_a(e){e&&(e.addedDocuments.forEach(t=>this.Z_=this.Z_.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Z_=this.Z_.delete(t)),this.current=e.current)}aa(){if(!this.current)return[];const e=this.ea;this.ea=z(),this.na.forEach(r=>{this.ca(r.key)&&(this.ea=this.ea.add(r.key))});const t=[];return e.forEach(r=>{this.ea.has(r)||t.push(new $f(r))}),this.ea.forEach(r=>{e.has(r)||t.push(new jf(r))}),t}la(e){this.Z_=e.ss,this.ea=z();const t=this.ia(e.documents);return this.applyChanges(t,!0)}ha(){return Sn.fromInitialDocuments(this.query,this.na,this.mutatedKeys,this.X_===0,this.hasCachedResults)}}class FE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class xE{constructor(e){this.key=e,this.Pa=!1}}class UE{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ia={},this.Ta=new Un(a=>sf(a),as),this.Ea=new Map,this.da=new Set,this.Aa=new te(L.comparator),this.Ra=new Map,this.Va=new Aa,this.ma={},this.fa=new Map,this.ga=Pn.On(),this.onlineState="Unknown",this.pa=void 0}get isPrimaryClient(){return this.pa===!0}}async function BE(n,e){const t=XE(n);let r,i;const s=t.Ta.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.ha();else{const o=await uE(t.localStore,ht(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await qE(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&Vf(t.remoteStore,o)}return i}async function qE(n,e,t,r,i){n.ya=(h,f,d)=>async function(g,y,m,I){let T=y.view.ia(m);T.zi&&(T=await rc(g.localStore,y.query,!1).then(({documents:$})=>y.view.ia($,T)));const V=I&&I.targetChanges.get(y.targetId),H=y.view.applyChanges(T,g.isPrimaryClient,V);return cc(g,y.targetId,H.ua),H.snapshot}(n,h,f,d);const s=await rc(n.localStore,e,!0),o=new LE(e,s.ss),a=o.ia(s.documents),l=$r.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),c=o.applyChanges(a,n.isPrimaryClient,l);cc(n,t,c.ua);const u=new FE(e,t,o);return n.Ta.set(e,u),n.Ea.has(t)?n.Ea.get(t).push(e):n.Ea.set(t,[e]),c.snapshot}async function jE(n,e){const t=j(n),r=t.Ta.get(e),i=t.Ea.get(r.targetId);if(i.length>1)return t.Ea.set(r.targetId,i.filter(s=>!as(s,e))),void t.Ta.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await To(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),Nf(t.remoteStore,r.targetId),Io(t,r.targetId)}).catch(qr)):(Io(t,r.targetId),await To(t.localStore,r.targetId,!0))}async function $E(n,e,t){const r=JE(n);try{const i=await function(o,a){const l=j(o),c=he.now(),u=a.reduce((d,p)=>d.add(p.key),z());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=ft(),g=z();return l.Xi.getEntries(d,u).next(y=>{p=y,p.forEach((m,I)=>{I.isValidDocument()||(g=g.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(d,p)).next(y=>{h=y;const m=[];for(const I of a){const T=gv(I,h.get(I.key).overlayedDocument);T!=null&&m.push(new Zt(I.key,T,Jh(T.value.mapValue),at.exists(!0)))}return l.mutationQueue.addMutationBatch(d,c,m,a)}).next(y=>{f=y;const m=y.applyToLocalDocumentSet(h,g);return l.documentOverlayCache.saveOverlays(d,y.batchId,m)})}).then(()=>({batchId:f.batchId,changes:lf(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.ma[o.currentUser.toKey()];c||(c=new te(J)),c=c.insert(a,l),o.ma[o.currentUser.toKey()]=c}(r,i.batchId,t),await Hr(r,i.changes),await ms(r.remoteStore)}catch(i){const s=Da(i,"Failed to persist write");t.reject(s)}}async function zf(n,e){const t=j(n);try{const r=await aE(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Ra.get(s);o&&(ee(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Pa=!0:i.modifiedDocuments.size>0?ee(o.Pa):i.removedDocuments.size>0&&(ee(o.Pa),o.Pa=!1))}),await Hr(t,r,e)}catch(r){await qr(r)}}function lc(n,e,t){const r=j(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Ta.forEach((s,o)=>{const a=o.view.O_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=j(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const f of h.listeners)f.O_(a)&&(c=!0)}),c&&Va(l)}(r.eventManager,e),i.length&&r.Ia.n_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function zE(n,e,t){const r=j(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Ra.get(e),s=i&&i.key;if(s){let o=new te(L.comparator);o=o.insert(s,Ee.newNoDocument(s,B.min()));const a=z().add(s),l=new fs(B.min(),new Map,new te(J),o,a);await zf(r,l),r.Aa=r.Aa.remove(s),r.Ra.delete(e),Na(r)}else await To(r.localStore,e,!1).then(()=>Io(r,e,t)).catch(qr)}async function HE(n,e){const t=j(n),r=e.batch.batchId;try{const i=await oE(t.localStore,e);Kf(t,r,null),Hf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Hr(t,i)}catch(i){await qr(i)}}async function KE(n,e,t){const r=j(n);try{const i=await function(o,a){const l=j(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(ee(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);Kf(r,e,t),Hf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Hr(r,i)}catch(i){await qr(i)}}function Hf(n,e){(n.fa.get(e)||[]).forEach(t=>{t.resolve()}),n.fa.delete(e)}function Kf(n,e,t){const r=j(n);let i=r.ma[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.ma[r.currentUser.toKey()]=i}}function Io(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ea.get(e))n.Ta.delete(r),t&&n.Ia.wa(r,t);n.Ea.delete(e),n.isPrimaryClient&&n.Va.Ar(e).forEach(r=>{n.Va.containsKey(r)||Wf(n,r)})}function Wf(n,e){n.da.delete(e.path.canonicalString());const t=n.Aa.get(e);t!==null&&(Nf(n.remoteStore,t),n.Aa=n.Aa.remove(e),n.Ra.delete(t),Na(n))}function cc(n,e,t){for(const r of t)r instanceof jf?(n.Va.addReference(r.key,e),WE(n,r)):r instanceof $f?(C("SyncEngine","Document no longer in limbo: "+r.key),n.Va.removeReference(r.key,e),n.Va.containsKey(r.key)||Wf(n,r.key)):x()}function WE(n,e){const t=e.key,r=t.path.canonicalString();n.Aa.get(t)||n.da.has(r)||(C("SyncEngine","New document in limbo: "+t),n.da.add(r),Na(n))}function Na(n){for(;n.da.size>0&&n.Aa.size<n.maxConcurrentLimboResolutions;){const e=n.da.values().next().value;n.da.delete(e);const t=new L(ne.fromString(e)),r=n.ga.next();n.Ra.set(r,new xE(t)),n.Aa=n.Aa.insert(t,r),Vf(n.remoteStore,new vt(ht(os(t.path)),r,"TargetPurposeLimboResolution",pa.ae))}}async function Hr(n,e,t){const r=j(n),i=[],s=[],o=[];r.Ta.isEmpty()||(r.Ta.forEach((a,l)=>{o.push(r.ya(l,e,t).then(c=>{if((c||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=ba.qi(l.targetId,c);s.push(u)}}))}),await Promise.all(o),r.Ia.n_(i),await async function(l,c){const u=j(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>E.forEach(c,f=>E.forEach(f.Li,d=>u.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>E.forEach(f.ki,d=>u.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!jr(h))throw h;C("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const d=u.Ji.get(f),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);u.Ji=u.Ji.insert(f,g)}}}(r.localStore,s))}async function GE(n,e){const t=j(n);if(!t.currentUser.isEqual(e)){C("SyncEngine","User change. New user:",e.toKey());const r=await Pf(t.localStore,e);t.currentUser=e,function(s,o){s.fa.forEach(a=>{a.forEach(l=>{l.reject(new N(v.CANCELLED,o))})}),s.fa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Hr(t,r.ts)}}function QE(n,e){const t=j(n),r=t.Ra.get(e);if(r&&r.Pa)return z().add(r.key);{let i=z();const s=t.Ea.get(e);if(!s)return i;for(const o of s){const a=t.Ta.get(o);i=i.unionWith(a.view.ra)}return i}}function XE(n){const e=j(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=zf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zE.bind(null,e),e.Ia.n_=OE.bind(null,e.eventManager),e.Ia.wa=ME.bind(null,e.eventManager),e}function JE(n){const e=j(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KE.bind(null,e),e}class uc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ds(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return sE(this.persistence,new rE,e.initialUser,this.serializer)}createPersistence(e){return new tE(Ra.zr,this.serializer)}createSharedClientState(e){return new fE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class YE{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>lc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=GE.bind(null,this.syncEngine),await DE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new NE}()}createDatastore(e){const t=ds(e.databaseInfo.databaseId),r=function(s){return new gE(s)}(e.databaseInfo);return function(s,o,a,l){return new vE(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new TE(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>lc(this.syncEngine,t,0),function(){return sc.v()?new sc:new dE}())}createSyncEngine(e,t){return function(i,s,o,a,l,c,u){const h=new UE(i,s,o,a,l,c);return u&&(h.pa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(t){const r=j(t);C("RemoteStore","RemoteStore shutting down."),r.p_.add(5),await zr(r),r.w_.shutdown(),r.S_.set("Unknown")}(this.remoteStore)}}/**
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
 */class Gf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Da(this.observer.next,e)}error(e){this.observer.error?this.Da(this.observer.error,e):ut("Uncaught Error in snapshot listener:",e.toString())}va(){this.muted=!0}Da(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class ZE{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ve.UNAUTHENTICATED,this.clientId=Gh.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{C("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(C("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Da(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Bs(n,e){n.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Pf(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function hc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await tT(n);C("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>oc(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>oc(e.remoteStore,s)),n._onlineComponents=e}function eT(n){return n.name==="FirebaseError"?n.code===v.FAILED_PRECONDITION||n.code===v.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function tT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){C("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bs(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!eT(t))throw t;wn("Error using user provided cache. Falling back to memory cache: "+t),await Bs(n,new uc)}}else C("FirestoreClient","Using default OfflineComponentProvider"),await Bs(n,new uc);return n._offlineComponents}async function Qf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(C("FirestoreClient","Using user provided OnlineComponentProvider"),await hc(n,n._uninitializedComponentsProvider._online)):(C("FirestoreClient","Using default OnlineComponentProvider"),await hc(n,new YE))),n._onlineComponents}function nT(n){return Qf(n).then(e=>e.syncEngine)}async function wo(n){const e=await Qf(n),t=e.eventManager;return t.onListen=BE.bind(null,e.syncEngine),t.onUnlisten=jE.bind(null,e.syncEngine),t}function rT(n,e,t={}){const r=new wt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const u=new Gf({next:f=>{o.enqueueAndForget(()=>Bf(s,h));const d=f.docs.has(a);!d&&f.fromCache?c.reject(new N(v.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&f.fromCache&&l&&l.source==="server"?c.reject(new N(v.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new qf(os(a.path),u,{includeMetadataChanges:!0,U_:!0});return Uf(s,h)}(await wo(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Xf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const fc=new Map;/**
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
 */function iT(n,e,t){if(!t)throw new N(v.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function sT(n,e,t,r){if(e===!0&&r===!0)throw new N(v.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function dc(n){if(!L.isDocumentKey(n))throw new N(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Oa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":x()}function At(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new N(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Oa(n);throw new N(v.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class pc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new N(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new N(v.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new N(v.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new N(v.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ma{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new N(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ay;switch(r.type){case"firstParty":return new Py(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=fc.get(t);r&&(C("ComponentProvider","Removing Datastore"),fc.delete(t),r.terminate())}(this),Promise.resolve()}}function oT(n,e,t,r={}){var i;const s=(n=At(n,Ma))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=ve.MOCK_USER;else{a=Xd(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new N(v.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ve(c)}n._authCredentials=new Ry(new Wh(a,l))}}/**
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
 */class gs{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new gs(this.firestore,e,this._query)}}class Ve{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ve(this.firestore,e,this._key)}}class Er extends gs{constructor(e,t,r){super(e,t,os(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ve(this.firestore,null,new L(e))}withConverter(e){return new Er(this.firestore,e,this._path)}}function aT(n,e,...t){if(n=Pe(n),arguments.length===1&&(e=Gh.V()),iT("doc","path",e),n instanceof Ma){const r=ne.fromString(e,...t);return dc(r),new Ve(n,null,new L(r))}{if(!(n instanceof Ve||n instanceof Er))throw new N(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ne.fromString(e,...t));return dc(r),new Ve(n.firestore,n instanceof Er?n.converter:null,new L(r))}}/**
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
 */class lT{constructor(){this.Ua=Promise.resolve(),this.Wa=[],this.Ga=!1,this.za=[],this.ja=null,this.Ha=!1,this.Ja=!1,this.Ya=[],this.Qo=new kf(this,"async_queue_retry"),this.Za=()=>{const t=Us();t&&C("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Qo.Oo()};const e=Us();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Za)}get isShuttingDown(){return this.Ga}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xa(),this.eu(e)}enterRestrictedMode(e){if(!this.Ga){this.Ga=!0,this.Ja=e||!1;const t=Us();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Za)}}enqueue(e){if(this.Xa(),this.Ga)return new Promise(()=>{});const t=new wt;return this.eu(()=>this.Ga&&this.Ja?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Wa.push(e),this.tu()))}async tu(){if(this.Wa.length!==0){try{await this.Wa[0](),this.Wa.shift(),this.Qo.reset()}catch(e){if(!jr(e))throw e;C("AsyncQueue","Operation failed with retryable error: "+e)}this.Wa.length>0&&this.Qo.Mo(()=>this.tu())}}eu(e){const t=this.Ua.then(()=>(this.Ha=!0,e().catch(r=>{this.ja=r,this.Ha=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ut("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ha=!1,r))));return this.Ua=t,t}enqueueAfterDelay(e,t,r){this.Xa(),this.Ya.indexOf(e)>-1&&(t=0);const i=ka.createAndSchedule(this,e,t,r,s=>this.nu(s));return this.za.push(i),i}Xa(){this.ja&&x()}verifyOperationInProgress(){}async ru(){let e;do e=this.Ua,await e;while(e!==this.Ua)}iu(e){for(const t of this.za)if(t.timerId===e)return!0;return!1}su(e){return this.ru().then(()=>{this.za.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.za)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ru()})}ou(e){this.Ya.push(e)}nu(e){const t=this.za.indexOf(e);this.za.splice(t,1)}}function mc(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Tr extends Ma{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new lT}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Jf(this),this._firestoreClient.terminate()}}function cT(n,e){const t=typeof n=="object"?n:au(),r=typeof n=="string"?n:e||"(default)",i=Lo(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Gd("firestore");s&&oT(i,...s)}return i}function La(n){return n._firestoreClient||Jf(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Jf(n){var e,t,r;const i=n._freezeSettings(),s=function(a,l,c,u){return new By(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Xf(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new ZE(n._authCredentials,n._appCheckCredentials,n._queue,s),((t=i.localCache)===null||t===void 0?void 0:t._offlineComponentProvider)&&((r=i.localCache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class kn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kn(be.fromBase64String(e))}catch(t){throw new N(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new kn(be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class _s{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new N(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Te(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ys{constructor(e){this._methodName=e}}/**
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
 */class Fa{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new N(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new N(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
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
 */const uT=/^__.*__$/;class Yf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Zt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Zf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class vs{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this._u(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get au(){return this.settings.au}uu(e){return new vs(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}cu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.uu({path:r,lu:!1});return i.hu(e),i}Pu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.uu({path:r,lu:!1});return i._u(),i}Iu(e){return this.uu({path:void 0,lu:!0})}Tu(e){return xi(e,this.settings.methodName,this.settings.Eu||!1,this.path,this.settings.du)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}_u(){if(this.path)for(let e=0;e<this.path.length;e++)this.hu(this.path.get(e))}hu(e){if(e.length===0)throw this.Tu("Document fields must not be empty");if(Zf(this.au)&&uT.test(e))throw this.Tu('Document fields cannot begin and end with "__"')}}class hT{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ds(e)}Au(e,t,r,i=!1){return new vs({au:e,methodName:t,du:r,path:Te.emptyPath(),lu:!1,Eu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fT(n){const e=n._freezeSettings(),t=ds(n._databaseId);return new hT(n._databaseId,!!e.ignoreUndefinedProperties,t)}class Es extends ys{_toFieldTransform(e){if(e.au!==2)throw e.au===1?e.Tu(`${this._methodName}() can only appear at the top level of your update data`):e.Tu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Es}}function dT(n,e,t){return new vs({au:3,du:e.settings.du,methodName:n._methodName,lu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class pT extends ys{constructor(e,t){super(e),this.Ru=t}_toFieldTransform(e){const t=dT(this,e,!0),r=this.Ru.map(s=>Kr(s,t)),i=new Cn(r);return new fv(e.path,i)}isEqual(e){return this===e}}function mT(n,e,t,r){const i=n.Au(1,e,t);td("Data must be an object, but it was:",i,r);const s=[],o=De.empty();Yt(r,(l,c)=>{const u=xa(e,l,t);c=Pe(c);const h=i.Pu(u);if(c instanceof Es)s.push(u);else{const f=Kr(c,h);f!=null&&(s.push(u),o.set(u,f))}});const a=new Fe(s);return new Yf(o,a,i.fieldTransforms)}function gT(n,e,t,r,i,s){const o=n.Au(1,e,t),a=[gc(e,r,t)],l=[i];if(s.length%2!=0)throw new N(v.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(gc(e,s[f])),l.push(s[f+1]);const c=[],u=De.empty();for(let f=a.length-1;f>=0;--f)if(!vT(c,a[f])){const d=a[f];let p=l[f];p=Pe(p);const g=o.Pu(d);if(p instanceof Es)c.push(d);else{const y=Kr(p,g);y!=null&&(c.push(d),u.set(d,y))}}const h=new Fe(c);return new Yf(u,h,o.fieldTransforms)}function Kr(n,e){if(ed(n=Pe(n)))return td("Unsupported field value:",e,n),_T(n,e);if(n instanceof ys)return function(r,i){if(!Zf(i.au))throw i.Tu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Tu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.lu&&e.au!==4)throw e.Tu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Kr(a,i.Iu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cv(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=he.fromDate(r);return{timestampValue:Li(i.serializer,s)}}if(r instanceof he){const s=new he(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Li(i.serializer,s)}}if(r instanceof Fa)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof kn)return{bytesValue:If(i.serializer,r._byteString)};if(r instanceof Ve){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Tu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:wa(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Tu(`Unsupported field value: ${Oa(r)}`)}(n,e)}function _T(n,e){const t={};return Qh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yt(n,(r,i)=>{const s=Kr(i,e.cu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function ed(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof he||n instanceof Fa||n instanceof kn||n instanceof Ve||n instanceof ys)}function td(n,e,t){if(!ed(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Oa(t);throw r==="an object"?e.Tu(n+" a custom object"):e.Tu(n+" "+r)}}function gc(n,e,t){if((e=Pe(e))instanceof _s)return e._internalPath;if(typeof e=="string")return xa(n,e);throw xi("Field path arguments must be of type string or ",n,!1,void 0,t)}const yT=new RegExp("[~\\*/\\[\\]]");function xa(n,e,t){if(e.search(yT)>=0)throw xi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new _s(...e.split("."))._internalPath}catch{throw xi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function xi(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new N(v.INVALID_ARGUMENT,a+n+l)}function vT(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class nd{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ET(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(rd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ET extends nd{data(){return super.data()}}function rd(n,e){return typeof e=="string"?xa(n,e):e instanceof _s?e._internalPath:e._delegate._internalPath}/**
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
 */function TT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(v.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class IT{convertValue(e,t="none"){switch(Wt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Kt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw x()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Yt(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Fa(ae(e.latitude),ae(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ga(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(gr(e));default:return null}}convertTimestamp(e){const t=Ct(e);return new he(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ne.fromString(e);ee(Cf(r));const i=new _r(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(t)||ut(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */class Gn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class id extends nd{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new fi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(rd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class fi extends id{data(e={}){return super.data(e)}}class wT{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Gn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new fi(this._firestore,this._userDataWriter,r.key,r,new Gn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new N(v.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new fi(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Gn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new fi(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Gn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:AT(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function AT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x()}}/**
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
 */function RT(n){n=At(n,Ve);const e=At(n.firestore,Tr);return rT(La(e),n._key).then(t=>od(e,n,t))}class sd extends IT{constructor(e){super(),this.firestore=e}convertBytes(e){return new kn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ve(this.firestore,null,t)}}function bT(n,e,t,...r){n=At(n,Ve);const i=At(n.firestore,Tr),s=fT(i);let o;return o=typeof(e=Pe(e))=="string"||e instanceof _s?gT(s,"updateDoc",n._key,e,t,r):mT(s,"updateDoc",n._key,e),PT(i,[o.toMutation(n._key,at.exists(!0))])}function CT(n,...e){var t,r,i;n=Pe(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||mc(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(mc(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(n instanceof Ve)c=At(n.firestore,Tr),u=os(n._key.path),l={next:h=>{e[o]&&e[o](od(c,n,h))},error:e[o+1],complete:e[o+2]};else{const h=At(n,gs);c=At(h.firestore,Tr),u=h._query;const f=new sd(c);l={next:d=>{e[o]&&e[o](new wT(c,f,h,d))},error:e[o+1],complete:e[o+2]},TT(n._query)}return function(f,d,p,g){const y=new Gf(g),m=new qf(d,y,p);return f.asyncQueue.enqueueAndForget(async()=>Uf(await wo(f),m)),()=>{y.va(),f.asyncQueue.enqueueAndForget(async()=>Bf(await wo(f),m))}}(La(c),u,a,l)}function PT(n,e){return function(r,i){const s=new wt;return r.asyncQueue.enqueueAndForget(async()=>$E(await nT(r),i,s)),s.promise}(La(n),e)}function od(n,e,t){const r=t.docs.get(e._key),i=new sd(n);return new id(n,i,e._key,r,new Gn(t.hasPendingWrites,t.fromCache),e.converter)}function ST(...n){return new pT("arrayUnion",n)}(function(e,t=!0){(function(i){xn=i})(Mn),En(new jt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Tr(new by(r.getProvider("auth-internal")),new ky(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new N(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _r(c.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),It(Ll,"4.0.0",e),It(Ll,"4.0.0","esm2017")})();const kT={apiKey:"AIzaSyDbBV7DT8DNmxyLPUB_w0skCx6bQjDIDhE",authDomain:"nocontextquotes-86d30.firebaseapp.com",projectId:"nocontextquotes-86d30",storageBucket:"nocontextquotes-86d30.appspot.com",messagingSenderId:"704558739601",appId:"1:704558739601:web:f92bb50736b7c0cb360f30",measurementId:"G-RHFY5NDBMG"},DT=ou(kT),Ao=g_();(async()=>await rg(Ao,Mu))();const VT=cT(DT),ri=parseFloat;function Ro(n,e=";"){let t;if(Array.isArray(n))t=n.filter(r=>r);else{t=[];for(const r in n)n[r]&&t.push(`${r}:${n[r]}`)}return t.join(e)}function NT(n,e,t,r){let i,s;const o="1em";let a,l,c,u="-.125em";const h="visible";return r&&(c="center",s="1.25em"),t&&(i=t),e&&(e=="lg"?(l="1.33333em",a=".75em",u="-.225em"):e=="xs"?l=".75em":e=="sm"?l=".875em":l=e.replace("x","em")),Ro([Ro({float:i,width:s,height:o,"line-height":a,"font-size":l,"text-align":c,"vertical-align":u,"transform-origin":"center",overflow:h}),n])}function OT(n,e,t,r,i,s=1,o="",a=""){let l=1,c=1;return i&&(i=="horizontal"?l=-1:i=="vertical"?c=-1:l=c=-1),Ro([`translate(${ri(e)*s}${o},${ri(t)*s}${o})`,`scale(${l*ri(n)},${c*ri(n)})`,r&&`rotate(${r}${a})`]," ")}function _c(n){let e,t,r,i,s,o,a,l;function c(f,d){return typeof f[10][4]=="string"?LT:MT}let u=c(n),h=u(n);return{c(){e=Ft("svg"),t=Ft("g"),r=Ft("g"),h.c(),_(r,"transform",n[12]),_(t,"transform",i="translate("+n[10][0]/2+" "+n[10][1]/2+")"),_(t,"transform-origin",s=n[10][0]/4+" 0"),_(e,"id",o=n[1]||void 0),_(e,"class",a="svelte-fa "+n[0]+" svelte-1cj2gr0"),_(e,"style",n[11]),_(e,"viewBox",l="0 0 "+n[10][0]+" "+n[10][1]),_(e,"aria-hidden","true"),_(e,"role","img"),_(e,"xmlns","http://www.w3.org/2000/svg"),Le(e,"pulse",n[4]),Le(e,"spin",n[3])},m(f,d){M(f,e,d),b(e,t),b(t,r),h.m(r,null)},p(f,d){u===(u=c(f))&&h?h.p(f,d):(h.d(1),h=u(f),h&&(h.c(),h.m(r,null))),d&4096&&_(r,"transform",f[12]),d&1024&&i!==(i="translate("+f[10][0]/2+" "+f[10][1]/2+")")&&_(t,"transform",i),d&1024&&s!==(s=f[10][0]/4+" 0")&&_(t,"transform-origin",s),d&2&&o!==(o=f[1]||void 0)&&_(e,"id",o),d&1&&a!==(a="svelte-fa "+f[0]+" svelte-1cj2gr0")&&_(e,"class",a),d&2048&&_(e,"style",f[11]),d&1024&&l!==(l="0 0 "+f[10][0]+" "+f[10][1])&&_(e,"viewBox",l),d&17&&Le(e,"pulse",f[4]),d&9&&Le(e,"spin",f[3])},d(f){f&&S(e),h.d()}}}function MT(n){let e,t,r,i,s,o,a,l,c,u;return{c(){e=Ft("path"),o=Ft("path"),_(e,"d",t=n[10][4][0]),_(e,"fill",r=n[6]||n[2]||"currentColor"),_(e,"fill-opacity",i=n[9]!=!1?n[7]:n[8]),_(e,"transform",s="translate("+n[10][0]/-2+" "+n[10][1]/-2+")"),_(o,"d",a=n[10][4][1]),_(o,"fill",l=n[5]||n[2]||"currentColor"),_(o,"fill-opacity",c=n[9]!=!1?n[8]:n[7]),_(o,"transform",u="translate("+n[10][0]/-2+" "+n[10][1]/-2+")")},m(h,f){M(h,e,f),M(h,o,f)},p(h,f){f&1024&&t!==(t=h[10][4][0])&&_(e,"d",t),f&68&&r!==(r=h[6]||h[2]||"currentColor")&&_(e,"fill",r),f&896&&i!==(i=h[9]!=!1?h[7]:h[8])&&_(e,"fill-opacity",i),f&1024&&s!==(s="translate("+h[10][0]/-2+" "+h[10][1]/-2+")")&&_(e,"transform",s),f&1024&&a!==(a=h[10][4][1])&&_(o,"d",a),f&36&&l!==(l=h[5]||h[2]||"currentColor")&&_(o,"fill",l),f&896&&c!==(c=h[9]!=!1?h[8]:h[7])&&_(o,"fill-opacity",c),f&1024&&u!==(u="translate("+h[10][0]/-2+" "+h[10][1]/-2+")")&&_(o,"transform",u)},d(h){h&&S(e),h&&S(o)}}}function LT(n){let e,t,r,i;return{c(){e=Ft("path"),_(e,"d",t=n[10][4]),_(e,"fill",r=n[2]||n[5]||"currentColor"),_(e,"transform",i="translate("+n[10][0]/-2+" "+n[10][1]/-2+")")},m(s,o){M(s,e,o)},p(s,o){o&1024&&t!==(t=s[10][4])&&_(e,"d",t),o&36&&r!==(r=s[2]||s[5]||"currentColor")&&_(e,"fill",r),o&1024&&i!==(i="translate("+s[10][0]/-2+" "+s[10][1]/-2+")")&&_(e,"transform",i)},d(s){s&&S(e)}}}function FT(n){let e,t=n[10][4]&&_c(n);return{c(){t&&t.c(),e=Ue()},m(r,i){t&&t.m(r,i),M(r,e,i)},p(r,[i]){r[10][4]?t?t.p(r,i):(t=_c(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:D,o:D,d(r){t&&t.d(r),r&&S(e)}}}function xT(n,e,t){let{class:r=""}=e,{id:i=""}=e,{style:s=""}=e,{icon:o}=e,{size:a=""}=e,{color:l=""}=e,{fw:c=!1}=e,{pull:u=""}=e,{scale:h=1}=e,{translateX:f=0}=e,{translateY:d=0}=e,{rotate:p=""}=e,{flip:g=!1}=e,{spin:y=!1}=e,{pulse:m=!1}=e,{primaryColor:I=""}=e,{secondaryColor:T=""}=e,{primaryOpacity:V=1}=e,{secondaryOpacity:H=.4}=e,{swapOpacity:$=!1}=e,A,W,k;return n.$$set=R=>{"class"in R&&t(0,r=R.class),"id"in R&&t(1,i=R.id),"style"in R&&t(13,s=R.style),"icon"in R&&t(14,o=R.icon),"size"in R&&t(15,a=R.size),"color"in R&&t(2,l=R.color),"fw"in R&&t(16,c=R.fw),"pull"in R&&t(17,u=R.pull),"scale"in R&&t(18,h=R.scale),"translateX"in R&&t(19,f=R.translateX),"translateY"in R&&t(20,d=R.translateY),"rotate"in R&&t(21,p=R.rotate),"flip"in R&&t(22,g=R.flip),"spin"in R&&t(3,y=R.spin),"pulse"in R&&t(4,m=R.pulse),"primaryColor"in R&&t(5,I=R.primaryColor),"secondaryColor"in R&&t(6,T=R.secondaryColor),"primaryOpacity"in R&&t(7,V=R.primaryOpacity),"secondaryOpacity"in R&&t(8,H=R.secondaryOpacity),"swapOpacity"in R&&t(9,$=R.swapOpacity)},n.$$.update=()=>{n.$$.dirty&16384&&t(10,A=o&&o.icon||[0,0,"",[],""]),n.$$.dirty&237568&&t(11,W=NT(s,a,u,c)),n.$$.dirty&8126464&&t(12,k=OT(h,f,d,p,g,512))},[r,i,l,y,m,I,T,V,H,$,A,W,k,s,o,a,c,u,h,f,d,p,g]}class Ua extends $e{constructor(e){super(),je(this,e,xT,FT,ke,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}}var UT={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},BT=UT,qT={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},jT=qT,$T={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]};let zT=1;function ad(){return`svelte-tabs-${zT++}`}const rn=[];function un(n,e=D){let t;const r=new Set;function i(a){if(ke(n,a)&&(n=a,t)){const l=!rn.length;for(const c of r)c[1](),rn.push(c,n);if(l){for(let c=0;c<rn.length;c+=2)rn[c][0](rn[c+1]);rn.length=0}}}function s(a){i(a(n))}function o(a,l=D){const c=[a,l];return r.add(c),r.size===1&&(t=e(i)||D),a(n),()=>{r.delete(c),r.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:o}}function HT(n){let e,t,r,i;const s=n[4].default,o=Dn(s,n,n[3],null);return{c(){e=P("div"),o&&o.c(),_(e,"class","svelte-tabs")},m(a,l){M(a,e,l),o&&o.m(e,null),t=!0,r||(i=le(e,"keydown",n[1]),r=!0)},p(a,[l]){o&&o.p&&(!t||l&8)&&Nn(o,s,a,a[3],t?Vn(s,a[3],l,null):On(a[3]),null)},i(a){t||(O(o,a),t=!0)},o(a){F(o,a),t=!1},d(a){a&&S(e),o&&o.d(a),r=!1,i()}}}const Ba={};function KT(n,e,t){const r=n.indexOf(e);n.splice(r,1),t.update(i=>i===e?n[r]||n[n.length-1]:i)}function WT(n,e,t){let r,{$$slots:i={},$$scope:s}=e,{initialSelectedIndex:o=0}=e;const a=[],l=[],c=[],u=un({}),h=un({}),f=un(null);qt(n,f,m=>t(5,r=m));const d=un(null);function p(m,I,T){m.push(I),T.update(V=>V||I),Wc(()=>KT(m,I,T))}function g(m){const I=l.indexOf(m);f.set(m),d.set(c[I])}Sd(Ba,{registerTab(m){p(l,m,f)},registerTabElement(m){a.push(m)},registerPanel(m){p(c,m,d)},selectTab:g,selectedTab:f,selectedPanel:d,controls:u,labeledBy:h}),So(()=>{g(l[o])}),Pd(()=>{for(let m=0;m<l.length;m++)u.update(I=>({...I,[l[m].id]:c[m].id})),h.update(I=>({...I,[c[m].id]:l[m].id}))});async function y(m){if(m.target.classList.contains("svelte-tabs__tab")){let I=l.indexOf(r);switch(m.key){case"ArrowRight":I+=1,I>l.length-1&&(I=0),g(l[I]),a[I].focus();break;case"ArrowLeft":I-=1,I<0&&(I=l.length-1),g(l[I]),a[I].focus()}}}return n.$$set=m=>{"initialSelectedIndex"in m&&t(2,o=m.initialSelectedIndex),"$$scope"in m&&t(3,s=m.$$scope)},[f,y,o,s,i]}class GT extends $e{constructor(e){super(),je(this,e,WT,HT,ke,{initialSelectedIndex:2})}}function QT(n){let e,t,r,i,s,o;const a=n[9].default,l=Dn(a,n,n[8],null);return{c(){e=P("li"),l&&l.c(),_(e,"role","tab"),_(e,"id",n[3].id),_(e,"aria-controls",t=n[2][n[3].id]),_(e,"aria-selected",n[1]),_(e,"tabindex",r=n[1]?0:-1),_(e,"class","svelte-tabs__tab svelte-1fbofsd"),Le(e,"svelte-tabs__selected",n[1])},m(c,u){M(c,e,u),l&&l.m(e,null),n[10](e),i=!0,s||(o=le(e,"click",n[11]),s=!0)},p(c,[u]){l&&l.p&&(!i||u&256)&&Nn(l,a,c,c[8],i?Vn(a,c[8],u,null):On(c[8]),null),(!i||u&4&&t!==(t=c[2][c[3].id]))&&_(e,"aria-controls",t),(!i||u&2)&&_(e,"aria-selected",c[1]),(!i||u&2&&r!==(r=c[1]?0:-1))&&_(e,"tabindex",r),(!i||u&2)&&Le(e,"svelte-tabs__selected",c[1])},i(c){i||(O(l,c),i=!0)},o(c){F(l,c),i=!1},d(c){c&&S(e),l&&l.d(c),n[10](null),s=!1,o()}}}function XT(n,e,t){let r,i,{$$slots:s={},$$scope:o}=e,a;const l={id:ad()},{registerTab:c,registerTabElement:u,selectTab:h,selectedTab:f,controls:d}=Gc(Ba);qt(n,f,m=>t(7,r=m)),qt(n,d,m=>t(2,i=m));let p;c(l),So(async()=>{await kd(),u(a)});function g(m){mi[m?"unshift":"push"](()=>{a=m,t(0,a)})}const y=()=>h(l);return n.$$set=m=>{"$$scope"in m&&t(8,o=m.$$scope)},n.$$.update=()=>{n.$$.dirty&128&&t(1,p=r===l)},[a,p,i,l,h,f,d,r,o,s,g,y]}class qs extends $e{constructor(e){super(),je(this,e,XT,QT,ke,{})}}function JT(n){let e,t;const r=n[1].default,i=Dn(r,n,n[0],null);return{c(){e=P("ul"),i&&i.c(),_(e,"role","tablist"),_(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(s,o){M(s,e,o),i&&i.m(e,null),t=!0},p(s,[o]){i&&i.p&&(!t||o&1)&&Nn(i,r,s,s[0],t?Vn(r,s[0],o,null):On(s[0]),null)},i(s){t||(O(i,s),t=!0)},o(s){F(i,s),t=!1},d(s){s&&S(e),i&&i.d(s)}}}function YT(n,e,t){let{$$slots:r={},$$scope:i}=e;return n.$$set=s=>{"$$scope"in s&&t(0,i=s.$$scope)},[i,r]}class ZT extends $e{constructor(e){super(),je(this,e,YT,JT,ke,{})}}function yc(n){let e;const t=n[6].default,r=Dn(t,n,n[5],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&32)&&Nn(r,t,i,i[5],e?Vn(t,i[5],s,null):On(i[5]),null)},i(i){e||(O(r,i),e=!0)},o(i){F(r,i),e=!1},d(i){r&&r.d(i)}}}function e0(n){let e,t,r,i=n[1]===n[2]&&yc(n);return{c(){e=P("div"),i&&i.c(),_(e,"id",n[2].id),_(e,"aria-labelledby",t=n[0][n[2].id]),_(e,"class","svelte-tabs__tab-panel svelte-epfyet"),_(e,"role","tabpanel")},m(s,o){M(s,e,o),i&&i.m(e,null),r=!0},p(s,[o]){s[1]===s[2]?i?(i.p(s,o),o&2&&O(i,1)):(i=yc(s),i.c(),O(i,1),i.m(e,null)):i&&(Be(),F(i,1,1,()=>{i=null}),qe()),(!r||o&1&&t!==(t=s[0][s[2].id]))&&_(e,"aria-labelledby",t)},i(s){r||(O(i),r=!0)},o(s){F(i),r=!1},d(s){s&&S(e),i&&i.d()}}}function t0(n,e,t){let r,i,{$$slots:s={},$$scope:o}=e;const a={id:ad()},{registerPanel:l,selectedPanel:c,labeledBy:u}=Gc(Ba);return qt(n,c,h=>t(1,i=h)),qt(n,u,h=>t(0,r=h)),l(a),n.$$set=h=>{"$$scope"in h&&t(5,o=h.$$scope)},[r,i,a,c,u,o,s]}class js extends $e{constructor(e){super(),je(this,e,t0,e0,ke,{})}}function qa(n){const e=n-1;return e*e*e+1}function vc(n){return--n*n*n*n*n+1}function Gt(n,{delay:e=0,duration:t=400,easing:r=Qt}={}){const i=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:r,css:s=>`opacity: ${s*i}`}}function n0(n,{delay:e=0,duration:t=400,easing:r=qa,x:i=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(n),l=+a.opacity,c=a.transform==="none"?"":a.transform,u=l*(1-o),[h,f]=Wa(i),[d,p]=Wa(s);return{delay:e,duration:t,easing:r,css:(g,y)=>`
			transform: ${c} translate(${(1-g)*h}${f}, ${(1-g)*d}${p});
			opacity: ${l-u*y}`}}function Ui(n,{delay:e=0,duration:t=400,easing:r=qa,start:i=0,opacity:s=0}={}){const o=getComputedStyle(n),a=+o.opacity,l=o.transform==="none"?"":o.transform,c=1-i,u=a*(1-s);return{delay:e,duration:t,easing:r,css:(h,f)=>`
			transform: ${l} scale(${1-c*f});
			opacity: ${a-u*f}
		`}}function r0(n,{from:e,to:t},r={}){const i=getComputedStyle(n),s=i.transform==="none"?"":i.transform,[o,a]=i.transformOrigin.split(" ").map(parseFloat),l=e.left+e.width*o/t.width-(t.left+o),c=e.top+e.height*a/t.height-(t.top+a),{delay:u=0,duration:h=d=>Math.sqrt(d)*120,easing:f=qa}=r;return{delay:u,duration:St(h)?h(Math.sqrt(l*l+c*c)):h,easing:f,css:(d,p)=>{const g=p*l,y=p*c,m=d+p*e.width/t.width,I=d+p*e.height/t.height;return`transform: ${s} translate(${g}px, ${y}px) scale(${m}, ${I});`}}}const i0={duration:4e3,initial:1,next:0,pausable:!1,dismissable:!0,reversed:!1,intro:{x:256}},s0=()=>{const{subscribe:n,update:e}=un([]);let t=0;const r={},i=c=>c instanceof Object;return{subscribe:n,push:(c,u={})=>{const h={target:"default",...i(c)?c:{...u,msg:c}},f=r[h.target]||{},d={...i0,...f,...h,theme:{...f.theme,...h.theme},classes:[...f.classes||[],...h.classes||[]],id:++t};return e(p=>d.reversed?[...p,d]:[d,...p]),t},pop:c=>{e(u=>{if(!u.length||c===0)return[];if(i(c))return u.filter(f=>c(f));const h=c||Math.max(...u.map(f=>f.id));return u.filter(f=>f.id!==h)})},set:(c,u={})=>{const h=i(c)?{...c}:{...u,id:c};e(f=>{const d=f.findIndex(p=>p.id===h.id);return d>-1&&(f[d]={...f[d],...h}),f})},_init:(c="default",u={})=>(r[c]=u,r)}},Ir=s0();function Ec(n){return Object.prototype.toString.call(n)==="[object Date]"}function bo(n,e){if(n===e||n!==n)return()=>n;const t=typeof n;if(t!==typeof e||Array.isArray(n)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(n)){const r=e.map((i,s)=>bo(n[s],i));return i=>r.map(s=>s(i))}if(t==="object"){if(!n||!e)throw new Error("Object cannot be null");if(Ec(n)&&Ec(e)){n=n.getTime(),e=e.getTime();const s=e-n;return o=>new Date(n+o*s)}const r=Object.keys(e),i={};return r.forEach(s=>{i[s]=bo(n[s],e[s])}),s=>{const o={};return r.forEach(a=>{o[a]=i[a](s)}),o}}if(t==="number"){const r=e-n;return i=>n+i*r}throw new Error(`Cannot interpolate ${t} values`)}function o0(n,e={}){const t=un(n);let r,i=n;function s(o,a){if(n==null)return t.set(n=o),Promise.resolve();i=o;let l=r,c=!1,{delay:u=0,duration:h=400,easing:f=Qt,interpolate:d=bo}=vn(vn({},e),a);if(h===0)return l&&(l.abort(),l=null),t.set(n=i),Promise.resolve();const p=wr()+u;let g;return r=Ar(y=>{if(y<p)return!0;c||(g=d(n,o),typeof h=="function"&&(h=h(n,o)),c=!0),l&&(l.abort(),l=null);const m=y-p;return m>h?(t.set(n=o),!1):(t.set(n=g(f(m/h))),!0)}),r.promise}return{set:s,update:(o,a)=>s(o(i,n),a),subscribe:t.subscribe}}function a0(n){let e,t=n[0].msg+"",r;return{c(){e=new Id(!1),r=Ue(),e.a=r},m(i,s){e.m(t,i,s),M(i,r,s)},p(i,s){s&1&&t!==(t=i[0].msg+"")&&e.p(t)},i:D,o:D,d(i){i&&S(r),i&&e.d()}}}function l0(n){let e,t,r;const i=[n[2]];var s=n[0].component.src;function o(a){let l={};for(let c=0;c<i.length;c+=1)l=vn(l,i[c]);return{props:l}}return s&&(e=Qa(s,o())),{c(){e&&ce(e.$$.fragment),t=Ue()},m(a,l){e&&ie(e,a,l),M(a,t,l),r=!0},p(a,l){const c=l&4?xd(i,[Ud(a[2])]):{};if(l&1&&s!==(s=a[0].component.src)){if(e){Be();const u=e;F(u.$$.fragment,1,0,()=>{se(u,1)}),qe()}s?(e=Qa(s,o()),ce(e.$$.fragment),O(e.$$.fragment,1),ie(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(a){r||(e&&O(e.$$.fragment,a),r=!0)},o(a){e&&F(e.$$.fragment,a),r=!1},d(a){a&&S(t),e&&se(e,a)}}}function Tc(n){let e,t,r;return{c(){e=P("div"),_(e,"class","_toastBtn pe svelte-l65oht"),_(e,"role","button"),_(e,"tabindex","0")},m(i,s){M(i,e,s),t||(r=[le(e,"click",n[4]),le(e,"keydown",n[8])],t=!0)},p:D,d(i){i&&S(e),t=!1,Se(r)}}}function c0(n){let e,t,r,i,s,o,a,l,c,u;const h=[l0,a0],f=[];function d(g,y){return g[0].component?0:1}r=d(n),i=f[r]=h[r](n);let p=n[0].dismissable&&Tc(n);return{c(){e=P("div"),t=P("div"),i.c(),s=Q(),p&&p.c(),o=Q(),a=P("progress"),_(t,"role","status"),_(t,"class","_toastMsg svelte-l65oht"),Le(t,"pe",n[0].component),_(a,"class","_toastBar svelte-l65oht"),a.value=n[1],_(e,"class","_toastItem svelte-l65oht"),Le(e,"pe",n[0].pausable)},m(g,y){M(g,e,y),b(e,t),f[r].m(t,null),b(e,s),p&&p.m(e,null),b(e,o),b(e,a),l=!0,c||(u=[le(e,"mouseenter",n[9]),le(e,"mouseleave",n[6])],c=!0)},p(g,[y]){let m=r;r=d(g),r===m?f[r].p(g,y):(Be(),F(f[m],1,1,()=>{f[m]=null}),qe(),i=f[r],i?i.p(g,y):(i=f[r]=h[r](g),i.c()),O(i,1),i.m(t,null)),(!l||y&1)&&Le(t,"pe",g[0].component),g[0].dismissable?p?p.p(g,y):(p=Tc(g),p.c(),p.m(e,o)):p&&(p.d(1),p=null),(!l||y&2)&&(a.value=g[1]),(!l||y&1)&&Le(e,"pe",g[0].pausable)},i(g){l||(O(i),l=!0)},o(g){F(i),l=!1},d(g){g&&S(e),f[r].d(),p&&p.d(),c=!1,Se(u)}}}function u0(n,e,t){let r,{item:i}=e;const s=o0(i.initial,{duration:i.duration,easing:Qt});qt(n,s,T=>t(1,r=T));const o=()=>Ir.pop(i.id),a=()=>{(r===1||r===0)&&o()};let l=i.initial,c=l,u=!1;const h=()=>{!u&&r!==l&&(s.set(r,{duration:0}),u=!0)},f=()=>{if(u){const T=i.duration,V=T-T*((r-c)/(l-c));s.set(l,{duration:V}).then(a),u=!1}};let d={};const p=(T,V="undefined")=>typeof T===V;let g;So((T=document)=>{if(p(T.hidden))return;const V=()=>T.hidden?h():f(),H="visibilitychange";T.addEventListener(H,V),g=()=>T.removeEventListener(H,V),V()}),Wc(()=>{p(i.onpop,"function")&&i.onpop(i.id),g&&g()});const m=T=>{T instanceof KeyboardEvent&&["Enter"," "].includes(T.key)&&o()},I=()=>{i.pausable&&h()};return n.$$set=T=>{"item"in T&&t(0,i=T.item)},n.$$.update=()=>{if(n.$$.dirty&1&&(p(i.progress)||t(0,i.next=i.progress,i)),n.$$.dirty&131&&l!==i.next&&(t(7,l=i.next),c=r,u=!1,s.set(l).then(a)),n.$$.dirty&1&&i.component){const{props:T={},sendIdTo:V}=i.component;t(2,d={...T,...V&&{[V]:i.id}})}},[i,r,d,s,o,h,f,l,m,I]}class h0 extends $e{constructor(e){super(),je(this,e,u0,c0,ke,{item:0})}}function Ic(n,e,t){const r=n.slice();return r[5]=e[t],r}function wc(n,e){let t,r,i,s,o,a,l,c,u=D,h;return r=new h0({props:{item:e[5]}}),{key:n,first:null,c(){t=P("li"),ce(r.$$.fragment),i=Q(),_(t,"class",s=Ka(e[5].classes.join(" "))+" svelte-yh90az"),_(t,"style",o=e[1](e[5].theme)),this.first=t},m(f,d){M(f,t,d),ie(r,t,null),b(t,i),h=!0},p(f,d){e=f;const p={};d&1&&(p.item=e[5]),r.$set(p),(!h||d&1&&s!==(s=Ka(e[5].classes.join(" "))+" svelte-yh90az"))&&_(t,"class",s),(!h||d&1&&o!==(o=e[1](e[5].theme)))&&_(t,"style",o)},r(){c=t.getBoundingClientRect()},f(){Cd(t),u(),Kc(t,c)},a(){u(),u=bd(t,c,r0,{duration:200})},i(f){h||(O(r.$$.fragment,f),Ne(()=>{!h||(l&&l.end(1),a=Nd(t,n0,e[5].intro),a.start())}),h=!0)},o(f){F(r.$$.fragment,f),a&&a.invalidate(),l=Od(t,Gt,{}),h=!1},d(f){f&&S(t),se(r),f&&l&&l.end()}}}function f0(n){let e,t=[],r=new Map,i,s=n[0];const o=a=>a[5].id;for(let a=0;a<s.length;a+=1){let l=Ic(n,s,a),c=o(l);r.set(c,t[a]=wc(c,l))}return{c(){e=P("ul");for(let a=0;a<t.length;a+=1)t[a].c();_(e,"class","_toastContainer svelte-yh90az")},m(a,l){M(a,e,l);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null);i=!0},p(a,[l]){if(l&3){s=a[0],Be();for(let c=0;c<t.length;c+=1)t[c].r();t=Fd(t,l,o,1,a,s,r,e,Ld,wc,null,Ic);for(let c=0;c<t.length;c+=1)t[c].a();qe()}},i(a){if(!i){for(let l=0;l<s.length;l+=1)O(t[l]);i=!0}},o(a){for(let l=0;l<t.length;l+=1)F(t[l]);i=!1},d(a){a&&S(e);for(let l=0;l<t.length;l+=1)t[l].d()}}}function d0(n,e,t){let r;qt(n,Ir,l=>t(4,r=l));let{options:i={}}=e,{target:s="default"}=e,o;const a=l=>Object.keys(l).reduce((c,u)=>`${c}${u}:${l[u]};`,"");return n.$$set=l=>{"options"in l&&t(2,i=l.options),"target"in l&&t(3,s=l.target)},n.$$.update=()=>{n.$$.dirty&12&&Ir._init(s,i),n.$$.dirty&24&&t(0,o=r.filter(l=>l.target===s))},[o,a,i,s,r]}class p0 extends $e{constructor(e){super(),je(this,e,d0,f0,ke,{options:2,target:3})}}const m0="modulepreload",g0=function(n){return"/"+n},Ac={},sn=function(e,t,r){if(!t||t.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=g0(s),s in Ac)return;Ac[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":m0,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};function _0(n){let e,t,r,i={ctx:n,current:null,token:null,hasCatch:!1,pending:A0,then:E0,catch:v0,blocks:[,,,]};return gi(t=n[6](),i),{c(){e=Ue(),i.block.c()},m(s,o){M(s,e,o),i.block.m(s,i.anchor=o),i.mount=()=>e.parentNode,i.anchor=e,r=!0},p(s,o){n=s,i.ctx=n,o&64&&t!==(t=n[6]())&&gi(t,i)||Jc(i,n,o)},i(s){r||(O(i.block),r=!0)},o(s){for(let o=0;o<3;o+=1){const a=i.blocks[o];F(a)}r=!1},d(s){s&&S(e),i.block.d(s),i.token=null,i=null}}}function y0(n){let e,t;const r=n[24].default,i=Dn(r,n,n[23],null);return{c(){e=P("div"),i&&i.c(),_(e,"class","typewriter-container svelte-1gv2i7t")},m(s,o){M(s,e,o),i&&i.m(e,null),t=!0},p(s,o){i&&i.p&&(!t||o&8388608)&&Nn(i,r,s,s[23],t?Vn(r,s[23],o,null):On(s[23]),null)},i(s){t||(O(i,s),t=!0)},o(s){F(i,s),t=!1},d(s){s&&S(e),i&&i.d(s)}}}function v0(n){return{c:D,m:D,p:D,i:D,o:D,d:D}}function E0(n){let e,t,r,i={ctx:n,current:null,token:null,hasCatch:!1,pending:w0,then:I0,catch:T0,value:25,blocks:[,,,]};return gi(t=n[7][n[0]](),i),{c(){e=Ue(),i.block.c()},m(s,o){M(s,e,o),i.block.m(s,i.anchor=o),i.mount=()=>e.parentNode,i.anchor=e,r=!0},p(s,o){n=s,i.ctx=n,o&1&&t!==(t=n[7][n[0]]())&&gi(t,i)||Jc(i,n,o)},i(s){r||(O(i.block),r=!0)},o(s){for(let o=0;o<3;o+=1){const a=i.blocks[o];F(a)}r=!1},d(s){s&&S(e),i.block.d(s),i.token=null,i=null}}}function T0(n){return{c:D,m:D,p:D,i:D,o:D,d:D}}function I0(n){let e=n[4],t,r,i=n[4]&&$s(n);return{c(){i&&i.c(),t=Ue()},m(s,o){i&&i.m(s,o),M(s,t,o),r=!0},p(s,o){s[4]?e?ke(e,s[4])?(i.d(1),i=$s(s),e=s[4],i.c(),i.m(t.parentNode,t)):i.p(s,o):(i=$s(s),e=s[4],i.c(),i.m(t.parentNode,t)):e&&(i.d(1),i=null,e=s[4])},i(s){r||(O(i),r=!0)},o(s){F(i),r=!1},d(s){s&&S(t),i&&i.d(s)}}}function $s(n){let e,t,r,i,s;const o=n[24].default,a=Dn(o,n,n[23],null);return{c(){e=P(n[4]),a&&a.c(),vd(n[4])(e,{class:"typewriter-container svelte-1gv2i7t"}),Le(e,"cursor",n[1])},m(l,c){M(l,e,c),a&&a.m(e,null),r=!0,i||(s=qc(t=n[25].default(e,n[5])),i=!0)},p(l,c){a&&a.p&&(!r||c&8388608)&&Nn(a,o,l,l[23],r?Vn(o,l[23],c,null):On(l[23]),null),t&&St(t.update)&&c&32&&t.update.call(null,l[5]),(!r||c&2)&&Le(e,"cursor",l[1])},i(l){r||(O(a,l),r=!0)},o(l){F(a,l),r=!1},d(l){l&&S(e),a&&a.d(l),i=!1,s()}}}function w0(n){return{c:D,m:D,p:D,i:D,o:D,d:D}}function A0(n){let e,t=n[2]&&Rc();return{c(){t&&t.c(),e=Ue()},m(r,i){t&&t.m(r,i),M(r,e,i)},p(r,i){r[2]?t||(t=Rc(),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:D,o:D,d(r){t&&t.d(r),r&&S(e)}}}function Rc(n){let e;return{c(){e=P("div"),e.innerHTML='<p class="typing"></p>',_(e,"class","typewriter-container cursor svelte-1gv2i7t")},m(t,r){M(t,e,r)},d(t){t&&S(e)}}}function bc(n){let e,t,r,i;const s=[y0,_0],o=[];function a(l,c){return l[3]?0:1}return e=a(n),t=o[e]=s[e](n),{c(){t.c(),r=Ue()},m(l,c){o[e].m(l,c),M(l,r,c),i=!0},p(l,c){let u=e;e=a(l),e===u?o[e].p(l,c):(Be(),F(o[u],1,1,()=>{o[u]=null}),qe(),t=o[e],t?t.p(l,c):(t=o[e]=s[e](l),t.c()),O(t,1),t.m(r.parentNode,r))},i(l){i||(O(t),i=!0)},o(l){F(t),i=!1},d(l){o[e].d(l),l&&S(r)}}}function R0(n){let e,t=n[8],r,i,s=bc(n);return{c(){e=Q(),s.c(),r=Ue()},m(o,a){M(o,e,a),s.m(o,a),M(o,r,a),i=!0},p(o,[a]){a&256&&ke(t,t=o[8])?(Be(),F(s,1,1,D),qe(),s=bc(o),s.c(),O(s,1),s.m(r.parentNode,r)):s.p(o,a)},i(o){i||(O(s),i=!0)},o(o){F(s),i=!1},d(o){o&&S(e),o&&S(r),s.d(o)}}}function b0(n,e,t){let r,i,s,o,a,l,c,u,h,{$$slots:f={},$$scope:d}=e,{mode:p="concurrent"}=e,{interval:g=30}=e,{cursor:y=!0}=e,{keepCursorOnFinish:m=!1}=e,{delay:I=0}=e,{showCursorOnDelay:T=!1}=e,{disabled:V=!1}=e,{element:H="div"}=e,{scrambleDuration:$=3e3}=e,{scrambleSlowdown:A=!0}=e,{unwriteInterval:W=30}=e,{wordInterval:k=1500}=e;const R={concurrent:()=>sn(()=>import("./concurrent.67b15c7e.js"),["assets/concurrent.67b15c7e.js","assets/writeEffect.95323146.js","assets/animationSetup.1b1f0c33.js"]),cascade:()=>sn(()=>import("./cascade.b8cc45f7.js"),["assets/cascade.b8cc45f7.js","assets/writeEffect.95323146.js","assets/animationSetup.1b1f0c33.js"]),loop:()=>sn(()=>import("./loop.f0bc32ad.js"),["assets/loop.f0bc32ad.js","assets/writeAndUnwriteText.38da4d6d.js","assets/writeEffect.95323146.js","assets/animationSetup.1b1f0c33.js","assets/unwriteEffect.03c389f1.js"]),loopOnce:()=>sn(()=>import("./loopOnce.40ff802f.js"),["assets/loopOnce.40ff802f.js","assets/animationSetup.1b1f0c33.js","assets/writeEffect.95323146.js","assets/unwriteEffect.03c389f1.js"]),loopRandom:()=>sn(()=>import("./loopRandom.31dd6652.js"),["assets/loopRandom.31dd6652.js","assets/writeAndUnwriteText.38da4d6d.js","assets/writeEffect.95323146.js","assets/animationSetup.1b1f0c33.js","assets/unwriteEffect.03c389f1.js"]),scramble:()=>sn(()=>import("./scramble.d7f4885f.js"),["assets/scramble.d7f4885f.js","assets/animationSetup.1b1f0c33.js"])};return n.$$set=X=>{t(8,e=vn(vn({},e),Ha(X))),"mode"in X&&t(0,p=X.mode),"interval"in X&&t(9,g=X.interval),"cursor"in X&&t(1,y=X.cursor),"keepCursorOnFinish"in X&&t(10,m=X.keepCursorOnFinish),"delay"in X&&t(11,I=X.delay),"showCursorOnDelay"in X&&t(2,T=X.showCursorOnDelay),"disabled"in X&&t(3,V=X.disabled),"element"in X&&t(4,H=X.element),"scrambleDuration"in X&&t(12,$=X.scrambleDuration),"scrambleSlowdown"in X&&t(13,A=X.scrambleSlowdown),"unwriteInterval"in X&&t(14,W=X.unwriteInterval),"wordInterval"in X&&t(15,k=X.wordInterval),"$$scope"in X&&t(23,d=X.$$scope)},n.$$.update=()=>{n.$$.dirty&1&&t(21,r=/^loop(Once|Random)?$/.test(p)),n.$$.dirty&1&&t(22,i=["concurrent","cascade","loopOnce"].includes(p)),n.$$.dirty&4195328&&t(20,s=!i&&m),n.$$.dirty&2052&&t(19,o=I<1&&T),t(18,a=!r&&(e.unwriteInterval||e.wordInterval)),t(17,l=p!=="scramble"&&(e.scrambleDuration||e.scrambleSlowdown)),n.$$.dirty&1024&&t(16,c=typeof m=="number"&&m<1),n.$$.dirty&1048576&&s&&console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' is compatible only with finite modes"),n.$$.dirty&524288&&o&&console.warn("[svelte-typewriter] The prop 'showCursorOnDelay' has no effect if the delay is 0"),n.$$.dirty&262144&&a&&console.warn("[svelte-typewriter] The props 'unwriteInterval' and 'wordInterval' are only compatible with loop modes"),n.$$.dirty&131072&&l&&console.warn("[svelte-typewriter] The props 'scrambleDuration' and 'scrambleSlowdown' are only compatible with scramble mode"),n.$$.dirty&65536&&c&&console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' has no effect with values lower than 1"),n.$$.dirty&2048&&t(6,u=()=>new Promise(X=>setTimeout(()=>X(I),I))),n.$$.dirty&65054&&t(5,h={interval:g,cursor:y,keepCursorOnFinish:m,delay:I,showCursorOnDelay:T,disabled:V,element:H,scrambleDuration:$,scrambleSlowdown:A,unwriteInterval:W,wordInterval:k})},e=Ha(e),[p,y,T,V,H,h,u,R,e,g,m,I,$,A,W,k,c,l,a,o,s,r,i,d,f]}class ja extends $e{constructor(e){super(),je(this,e,b0,R0,ke,{mode:0,interval:9,cursor:1,keepCursorOnFinish:10,delay:11,showCursorOnDelay:2,disabled:3,element:4,scrambleDuration:12,scrambleSlowdown:13,unwriteInterval:14,wordInterval:15})}}function C0(n){const e=t=>{n&&!n.contains(t.target)&&!t.defaultPrevented&&n.dispatchEvent(new CustomEvent("click_outside",n))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}function Cc(n,e,t){const r=n.slice();return r[7]=e[t],r}function Pc(n){let e,t,r,i,s,o,a,l,c,u=n[0],h=[];for(let f=0;f<u.length;f+=1)h[f]=Sc(Cc(n,u,f));return{c(){e=P("table"),t=P("caption"),t.textContent="Leaderboard",r=Q(),i=P("tr"),i.innerHTML=`<th class="svelte-1wtm20f">Author</th> 
            <th class="svelte-1wtm20f">Quote Count</th>`,s=Q();for(let f=0;f<h.length;f+=1)h[f].c();_(t,"class","svelte-1wtm20f"),_(i,"class","svelte-1wtm20f"),_(e,"class","leaderboard svelte-1wtm20f")},m(f,d){M(f,e,d),b(e,t),b(e,r),b(e,i),b(e,s);for(let p=0;p<h.length;p+=1)h[p]&&h[p].m(e,null);a=!0,l||(c=[qc(C0.call(null,e)),le(e,"click_outside",n[3])],l=!0)},p(f,d){if(n=f,d&1){u=n[0];let p;for(p=0;p<u.length;p+=1){const g=Cc(n,u,p);h[p]?h[p].p(g,d):(h[p]=Sc(g),h[p].c(),h[p].m(e,null))}for(;p<h.length;p+=1)h[p].d(1);h.length=u.length}},i(f){a||(Ne(()=>{!a||(o||(o=Ye(e,Ui,{duration:250,opacity:.5,easing:vc},!0)),o.run(1))}),a=!0)},o(f){o||(o=Ye(e,Ui,{duration:250,opacity:.5,easing:vc},!1)),o.run(0),a=!1},d(f){f&&S(e),Po(h,f),f&&o&&o.end(),l=!1,Se(c)}}}function Sc(n){let e,t,r=n[7].author+"",i,s,o,a=n[7].count+"",l,c;return{c(){e=P("tr"),t=P("td"),i=Je(r),s=Q(),o=P("td"),l=Je(a),c=Q(),_(t,"class","svelte-1wtm20f"),_(o,"class","svelte-1wtm20f"),_(e,"class","svelte-1wtm20f")},m(u,h){M(u,e,h),b(e,t),b(t,i),b(e,s),b(e,o),b(o,l),b(e,c)},p(u,h){h&1&&r!==(r=u[7].author+"")&&Rt(i,r),h&1&&a!==(a=u[7].count+"")&&Rt(l,a)},d(u){u&&S(e)}}}function P0(n){let e,t,r,i,s,o,a,l=n[1]&&Pc(n);return{c(){e=P("div"),e.innerHTML='<img src="https://cdn-icons-png.flaticon.com/512/4489/4489655.png" alt="Leaderboard button" class="svelte-1wtm20f"/>',r=Q(),l&&l.c(),i=Ue(),_(e,"class","icon svelte-1wtm20f")},m(c,u){M(c,e,u),n[6](e),M(c,r,u),l&&l.m(c,u),M(c,i,u),s=!0,o||(a=le(e,"click",n[3]),o=!0)},p(c,[u]){c[1]?l?(l.p(c,u),u&2&&O(l,1)):(l=Pc(c),l.c(),O(l,1),l.m(i.parentNode,i)):l&&(Be(),F(l,1,1,()=>{l=null}),qe())},i(c){s||(Ne(()=>{!s||(t||(t=Ye(e,Ui,{},!0)),t.run(1))}),O(l),s=!0)},o(c){t||(t=Ye(e,Ui,{},!1)),t.run(0),F(l),s=!1},d(c){c&&S(e),n[6](null),c&&t&&t.end(),c&&S(r),l&&l.d(c),c&&S(i),o=!1,a()}}}function S0(n,e,t){let{fullQuoteList:r=[]}=e,i,s,o=!1,a;function l(){t(1,o=!o),o?t(2,a.style["pointer-events"]="none",a):t(2,a.style["pointer-events"]="all",a)}function c(u){mi[u?"unshift":"push"](()=>{a=u,t(2,a)})}return n.$$set=u=>{"fullQuoteList"in u&&t(4,r=u.fullQuoteList)},n.$$.update=()=>{n.$$.dirty&16&&t(5,i=r.reduce((u,{author:h})=>((h.includes(" & ")?h.split(" & "):[h]).forEach(d=>{const p=d;u[p]=(u[p]||0)+1}),u),{})),n.$$.dirty&32&&t(0,s=Object.entries(i).map(([u,h])=>({author:u,count:h})).sort((u,h)=>h.count-u.count))},[s,o,a,l,r,i,c]}class k0 extends $e{constructor(e){super(),je(this,e,S0,P0,ke,{fullQuoteList:4})}}function kc(n,e,t){const r=n.slice();return r[23]=e[t],r[25]=t,r}function Dc(n,e,t){const r=n.slice();return r[26]=e[t],r}function D0(n){let e,t;return e=new Ua({props:{icon:BT,size:"lg"}}),{c(){ce(e.$$.fragment)},m(r,i){ie(e,r,i),t=!0},p:D,i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){F(e.$$.fragment,r),t=!1},d(r){se(e,r)}}}function V0(n){let e,t;return e=new Ua({props:{icon:$T,size:"lg"}}),{c(){ce(e.$$.fragment)},m(r,i){ie(e,r,i),t=!0},p:D,i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){F(e.$$.fragment,r),t=!1},d(r){se(e,r)}}}function N0(n){let e,t;return e=new Ua({props:{icon:jT,size:"lg"}}),{c(){ce(e.$$.fragment)},m(r,i){ie(e,r,i),t=!0},p:D,i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){F(e.$$.fragment,r),t=!1},d(r){se(e,r)}}}function O0(n){let e,t,r,i,s,o;return e=new qs({props:{$$slots:{default:[D0]},$$scope:{ctx:n}}}),r=new qs({props:{$$slots:{default:[V0]},$$scope:{ctx:n}}}),s=new qs({props:{$$slots:{default:[N0]},$$scope:{ctx:n}}}),{c(){ce(e.$$.fragment),t=Q(),ce(r.$$.fragment),i=Q(),ce(s.$$.fragment)},m(a,l){ie(e,a,l),M(a,t,l),ie(r,a,l),M(a,i,l),ie(s,a,l),o=!0},p(a,l){const c={};l&536870912&&(c.$$scope={dirty:l,ctx:a}),e.$set(c);const u={};l&536870912&&(u.$$scope={dirty:l,ctx:a}),r.$set(u);const h={};l&536870912&&(h.$$scope={dirty:l,ctx:a}),s.$set(h)},i(a){o||(O(e.$$.fragment,a),O(r.$$.fragment,a),O(s.$$.fragment,a),o=!0)},o(a){F(e.$$.fragment,a),F(r.$$.fragment,a),F(s.$$.fragment,a),o=!1},d(a){se(e,a),a&&S(t),se(r,a),a&&S(i),se(s,a)}}}function Vc(n){let e,t,r,i,s,o;e=new ja({props:{mode:"concurrent",keepCursorOnFinish:!0,$$slots:{default:[M0]},$$scope:{ctx:n}}});const a=[F0,L0],l=[];function c(u,h){return u[2]?0:1}return r=c(n),i=l[r]=a[r](n),{c(){ce(e.$$.fragment),t=Q(),i.c(),s=Ue()},m(u,h){ie(e,u,h),M(u,t,h),l[r].m(u,h),M(u,s,h),o=!0},p(u,h){const f={};h&536870944&&(f.$$scope={dirty:h,ctx:u}),e.$set(f);let d=r;r=c(u),r===d?l[r].p(u,h):(Be(),F(l[d],1,1,()=>{l[d]=null}),qe(),i=l[r],i?i.p(u,h):(i=l[r]=a[r](u),i.c()),O(i,1),i.m(s.parentNode,s))},i(u){o||(O(e.$$.fragment,u),O(i),o=!0)},o(u){F(e.$$.fragment,u),F(i),o=!1},d(u){se(e,u),u&&S(t),l[r].d(u),u&&S(s)}}}function M0(n){let e,t=n[5].quote+"",r;return{c(){e=P("h1"),r=Je(t),_(e,"class","random-text svelte-7xnvo2")},m(i,s){M(i,e,s),b(e,r)},p(i,s){s&32&&t!==(t=i[5].quote+"")&&Rt(r,t)},d(i){i&&S(e)}}}function L0(n){let e,t;return e=new ja({props:{mode:"concurrent",cursor:!1,$$slots:{default:[x0]},$$scope:{ctx:n}}}),{c(){ce(e.$$.fragment)},m(r,i){ie(e,r,i),t=!0},p(r,i){const s={};i&536870944&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){F(e.$$.fragment,r),t=!1},d(r){se(e,r)}}}function F0(n){let e,t;return e=new ja({props:{mode:"concurrent",cursor:!1,$$slots:{default:[U0]},$$scope:{ctx:n}}}),{c(){ce(e.$$.fragment)},m(r,i){ie(e,r,i),t=!0},p(r,i){const s={};i&536870948&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){F(e.$$.fragment,r),t=!1},d(r){se(e,r)}}}function x0(n){let e,t=n[5].author+"",r;return{c(){e=P("h1"),r=Je(t),_(e,"class","random-text svelte-7xnvo2")},m(i,s){M(i,e,s),b(e,r)},p(i,s){s&32&&t!==(t=i[5].author+"")&&Rt(r,t)},d(i){i&&S(e)}}}function U0(n){let e,t=n[5].author==""?"":"Click to Reveal",r,i,s;return{c(){e=P("h1"),r=Je(t),_(e,"id","spoiler-author"),_(e,"class","random-text svelte-7xnvo2")},m(o,a){M(o,e,a),b(e,r),i||(s=le(e,"click",n[15]),i=!0)},p(o,a){a&32&&t!==(t=o[5].author==""?"":"Click to Reveal")&&Rt(r,t)},d(o){o&&S(e),i=!1,s()}}}function B0(n){let e,t,r,i,s,o,a,l,c,u,h;t=new k0({props:{fullQuoteList:n[0]}});let f=typeof n[5]<"u"&&Vc(n);return{c(){e=P("div"),ce(t.$$.fragment),r=Q(),i=P("div"),s=P("div"),f&&f.c(),o=Q(),a=P("button"),a.textContent="Load Random Quote",_(s,"class","typewriter-block svelte-7xnvo2"),_(a,"class","custom-button load-quote svelte-7xnvo2"),_(i,"class","heading svelte-7xnvo2"),_(e,"class","parent-div quotes svelte-7xnvo2")},m(d,p){M(d,e,p),ie(t,e,null),b(e,r),b(e,i),b(i,s),f&&f.m(s,null),b(i,o),b(i,a),c=!0,u||(h=le(a,"click",n[10]),u=!0)},p(d,p){const g={};p&1&&(g.fullQuoteList=d[0]),t.$set(g),typeof d[5]<"u"?f?(f.p(d,p),p&32&&O(f,1)):(f=Vc(d),f.c(),O(f,1),f.m(s,null)):f&&(Be(),F(f,1,1,()=>{f=null}),qe())},i(d){c||(O(t.$$.fragment,d),O(f),Ne(()=>{!c||(l||(l=Ye(e,Gt,{duration:100},!0)),l.run(1))}),c=!0)},o(d){F(t.$$.fragment,d),F(f),l||(l=Ye(e,Gt,{duration:100},!1)),l.run(0),c=!1},d(d){d&&S(e),se(t),f&&f.d(),d&&l&&l.end(),u=!1,h()}}}function q0(n){let e,t,r,i,s,o,a,l,c,u,h,f;return{c(){e=P("div"),t=P("h2"),t.textContent="Submit a new quote",r=Q(),i=P("input"),s=Q(),o=P("input"),a=Q(),l=P("button"),l.textContent="Add Quote",_(t,"class","center-header svelte-7xnvo2"),_(i,"id","new-quote-input"),_(i,"type","text"),_(i,"placeholder","Submit a new quote here"),_(i,"class","svelte-7xnvo2"),_(o,"id","new-quote-input-author"),_(o,"type","text"),_(o,"placeholder","Write quote author here. If multiple, separate with &"),_(o,"class","svelte-7xnvo2"),_(l,"class","custom-button"),_(e,"class","parent-div quotes svelte-7xnvo2")},m(d,p){M(d,e,p),b(e,t),b(e,r),b(e,i),yt(i,n[3]),b(e,s),b(e,o),yt(o,n[4]),b(e,a),b(e,l),u=!0,h||(f=[le(i,"input",n[16]),le(o,"input",n[17]),le(l,"click",n[11])],h=!0)},p(d,p){p&8&&i.value!==d[3]&&yt(i,d[3]),p&16&&o.value!==d[4]&&yt(o,d[4])},i(d){u||(Ne(()=>{!u||(c||(c=Ye(e,Gt,{duration:100},!0)),c.run(1))}),u=!0)},o(d){c||(c=Ye(e,Gt,{duration:100},!1)),c.run(0),u=!1},d(d){d&&S(e),d&&c&&c.end(),h=!1,Se(f)}}}function Nc(n){let e,t,r;return{c(){e=P("button"),e.innerHTML='<span class="svelte-7xnvo2">\xD7</span>',_(e,"class","clear-button svelte-7xnvo2")},m(i,s){M(i,e,s),t||(r=le(e,"click",n[14]),t=!0)},p:D,d(i){i&&S(e),t=!1,r()}}}function Oc(n){let e,t=n[26]+"",r,i;return{c(){e=P("option"),r=Je(t),e.__value=i=n[26],e.value=e.__value},m(s,o){M(s,e,o),b(e,r)},p(s,o){o&2&&t!==(t=s[26]+"")&&Rt(r,t),o&2&&i!==(i=s[26])&&(e.__value=i,e.value=e.__value)},d(s){s&&S(e)}}}function j0(n){let e,t=n[8],r=[];for(let i=0;i<t.length;i+=1)r[i]=Mc(kc(n,t,i));return{c(){e=P("ul");for(let i=0;i<r.length;i+=1)r[i].c();_(e,"id","quote-search"),_(e,"class","quote-list svelte-7xnvo2")},m(i,s){M(i,e,s);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null)},p(i,s){if(s&256){t=i[8];let o;for(o=0;o<t.length;o+=1){const a=kc(i,t,o);r[o]?r[o].p(a,s):(r[o]=Mc(a),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},d(i){i&&S(e),Po(r,i)}}}function $0(n){let e;return{c(){e=P("ul"),e.innerHTML='<li class="svelte-7xnvo2">No results found.</li>',_(e,"class","quote-list svelte-7xnvo2")},m(t,r){M(t,e,r)},p:D,d(t){t&&S(e)}}}function Mc(n){let e,t,r=n[23].quote+"",i,s,o,a=n[23].author+"",l,c;return{c(){e=P("li"),t=P("span"),i=Je(r),s=Q(),o=P("span"),l=Je(a),c=Q(),_(t,"class","quote svelte-7xnvo2"),_(o,"class","author svelte-7xnvo2"),_(e,"class","svelte-7xnvo2")},m(u,h){M(u,e,h),b(e,t),b(t,i),b(e,s),b(e,o),b(o,l),b(e,c)},p(u,h){h&256&&r!==(r=u[23].quote+"")&&Rt(i,r),h&256&&a!==(a=u[23].author+"")&&Rt(l,a)},d(u){u&&S(e)}}}function z0(n){let e,t,r,i,s,o,a,l,c,u,h,f,d,p,g,y,m=n[6]&&Nc(n),I=Array.from(new Set(n[1].map(Lc))).filter(Fc).sort(xc),T=[];for(let A=0;A<I.length;A+=1)T[A]=Oc(Dc(n,I,A));function V(A,W){return A[9]?$0:j0}let H=V(n),$=H(n);return{c(){e=P("div"),t=P("h2"),t.textContent="Search",r=Q(),i=P("div"),s=P("input"),o=Q(),m&&m.c(),a=Q(),l=P("button"),l.textContent="Search",c=Q(),u=P("select"),h=P("option"),h.textContent="All Authors";for(let A=0;A<T.length;A+=1)T[A].c();f=Q(),$.c(),_(s,"type","text"),_(s,"placeholder","Search..."),_(s,"class","svelte-7xnvo2"),_(l,"class","custom-button svelte-7xnvo2"),_(i,"class","search-container svelte-7xnvo2"),h.__value="",h.value=h.__value,n[7]===void 0&&Ne(()=>n[19].call(u)),_(e,"class","parent-div search svelte-7xnvo2")},m(A,W){M(A,e,W),b(e,t),b(e,r),b(e,i),b(i,s),yt(s,n[6]),b(i,o),m&&m.m(i,null),b(i,a),b(i,l),b(e,c),b(e,u),b(u,h);for(let k=0;k<T.length;k+=1)T[k]&&T[k].m(u,null);Ga(u,n[7],!0),b(e,f),$.m(e,null),p=!0,g||(y=[le(s,"input",n[18]),le(l,"click",n[12]),le(u,"change",n[19]),le(u,"change",n[13])],g=!0)},p(A,W){if(W&64&&s.value!==A[6]&&yt(s,A[6]),A[6]?m?m.p(A,W):(m=Nc(A),m.c(),m.m(i,a)):m&&(m.d(1),m=null),W&2){I=Array.from(new Set(A[1].map(Lc))).filter(Fc).sort(xc);let k;for(k=0;k<I.length;k+=1){const R=Dc(A,I,k);T[k]?T[k].p(R,W):(T[k]=Oc(R),T[k].c(),T[k].m(u,null))}for(;k<T.length;k+=1)T[k].d(1);T.length=I.length}W&130&&Ga(u,A[7]),H===(H=V(A))&&$?$.p(A,W):($.d(1),$=H(A),$&&($.c(),$.m(e,null)))},i(A){p||(Ne(()=>{!p||(d||(d=Ye(e,Gt,{duration:100},!0)),d.run(1))}),p=!0)},o(A){d||(d=Ye(e,Gt,{duration:100},!1)),d.run(0),p=!1},d(A){A&&S(e),m&&m.d(),Po(T,A),$.d(),A&&d&&d.end(),g=!1,Se(y)}}}function H0(n){let e,t,r,i,s,o,a,l;return e=new ZT({props:{$$slots:{default:[O0]},$$scope:{ctx:n}}}),r=new js({props:{$$slots:{default:[B0]},$$scope:{ctx:n}}}),s=new js({props:{$$slots:{default:[q0]},$$scope:{ctx:n}}}),a=new js({props:{$$slots:{default:[z0]},$$scope:{ctx:n}}}),{c(){ce(e.$$.fragment),t=Q(),ce(r.$$.fragment),i=Q(),ce(s.$$.fragment),o=Q(),ce(a.$$.fragment)},m(c,u){ie(e,c,u),M(c,t,u),ie(r,c,u),M(c,i,u),ie(s,c,u),M(c,o,u),ie(a,c,u),l=!0},p(c,u){const h={};u&536870912&&(h.$$scope={dirty:u,ctx:c}),e.$set(h);const f={};u&536870949&&(f.$$scope={dirty:u,ctx:c}),r.$set(f);const d={};u&536870936&&(d.$$scope={dirty:u,ctx:c}),s.$set(d);const p={};u&536871874&&(p.$$scope={dirty:u,ctx:c}),a.$set(p)},i(c){l||(O(e.$$.fragment,c),O(r.$$.fragment,c),O(s.$$.fragment,c),O(a.$$.fragment,c),l=!0)},o(c){F(e.$$.fragment,c),F(r.$$.fragment,c),F(s.$$.fragment,c),F(a.$$.fragment,c),l=!1},d(c){se(e,c),c&&S(t),se(r,c),c&&S(i),se(s,c),c&&S(o),se(a,c)}}}function K0(n){let e,t;return e=new GT({props:{$$slots:{default:[H0]},$$scope:{ctx:n}}}),{c(){ce(e.$$.fragment)},m(r,i){ie(e,r,i),t=!0},p(r,[i]){const s={};i&536871935&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){F(e.$$.fragment,r),t=!1},d(r){se(e,r)}}}const Lc=n=>n.author,Fc=n=>!n.includes("&"),xc=(n,e)=>n.localeCompare(e);function W0(n,e,t){let r=[],i=[];const s=aT(VT,"quotes","quote_list");CT(s,k=>{if(console.log("[NC Log] New snapshot found"),r!==k.data().quote_list){let R=r.length;t(0,r=k.data().quote_list),t(1,i=r.slice()),R!==0&&new Notification("New Quote Added",{body:r.at(-1).quote})}m()});let o=!0,a="",l="",c={quote:"",author:""},u=-1;"Notification"in window&&Notification.permission!=="denied"&&Notification.permission!=="granted"&&Notification.requestPermission();async function h(){if(t(2,o=!0),i.length===0){console.log("[NC Log] Reached end of list, fetching again");const k=await RT(s);t(0,r=k.data().quote_list),t(1,i=r.slice())}u=Math.floor(Math.random()*i.length),t(5,c=i[u]),t(5,c.quote+=" ",c),i.splice(u,1)}async function f(){if(a!=""&&l!=""){let k={quote:a.trim(),author:l.trim()};Ir.push("Submitting quote..."),await bT(s,{quote_list:ST(k)}).then(()=>{console.log("[NC Log] Added new quote to database"),Ir.push("Quote submitted!"),t(3,a=""),t(4,l="")})}}let d="",p="",g=[],y=!1;function m(){t(8,g=r.filter(k=>{const R=d.toLowerCase(),X=k.quote.toLowerCase(),$a=k.author.toLowerCase(),ld=$a.split(/[&,]/).map(cd=>cd.trim());return(X.includes(R)||$a.includes(R))&&(p===""||ld.includes(p.toLowerCase()))})),g.reverse(),t(9,y=g.length===0),document.getElementById("quote-search")!==null&&(document.getElementById("quote-search").scrollTop=0)}function I(k){t(7,p=k.target.value),m()}function T(){t(6,d="")}const V=()=>t(2,o=!1);function H(){a=this.value,t(3,a)}function $(){l=this.value,t(4,l)}function A(){d=this.value,t(6,d)}function W(){p=Td(this),t(7,p),t(1,i)}return[r,i,o,a,l,c,d,p,g,y,h,f,m,I,T,V,H,$,A,W]}class G0 extends $e{constructor(e){super(),je(this,e,W0,K0,ke,{})}}function Q0(n){let e,t,r,i,s,o,a,l,c,u,h,f;return{c(){e=P("div"),t=P("button"),t.textContent="Sign In with Google",r=Q(),i=P("p"),i.textContent="(This means no more typing in a password each time)",s=Q(),o=P("h1"),o.textContent="OR",a=Q(),l=P("label"),l.textContent="Password:",c=Q(),u=P("input"),_(t,"id","login"),_(t,"class","custom-button svelte-1tx78it"),_(i,"class","svelte-1tx78it"),_(l,"for","password"),_(l,"class","svelte-1tx78it"),_(u,"id","password"),_(u,"type","password"),_(u,"class","svelte-1tx78it"),_(e,"id","login-container"),_(e,"class","svelte-1tx78it")},m(d,p){M(d,e,p),b(e,t),b(e,r),b(e,i),b(e,s),b(e,o),b(e,a),b(e,l),b(e,c),b(e,u),yt(u,n[2]),h||(f=[le(t,"click",n[3]),le(u,"input",n[5])],h=!0)},p(d,p){p&4&&u.value!==d[2]&&yt(u,d[2])},i:D,o:D,d(d){d&&S(e),h=!1,Se(f)}}}function X0(n){let e,t;return e=new G0({}),{c(){ce(e.$$.fragment)},m(r,i){ie(e,r,i),t=!0},p:D,i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){F(e.$$.fragment,r),t=!1},d(r){se(e,r)}}}function J0(n){let e;return{c(){e=P("div"),e.innerHTML='<span class="loader svelte-1tx78it"></span>',_(e,"id","login-container"),_(e,"class","svelte-1tx78it")},m(t,r){M(t,e,r)},p:D,i:D,o:D,d(t){t&&S(e)}}}function Y0(n){let e,t,r,i,s,o;const a=[J0,X0,Q0],l=[];function c(u,h){return h&5&&(e=null),u[1]?0:(e==null&&(e=!!(u[0]||u[4](u[2])===1252560117)),e?1:2)}return t=c(n,-1),r=l[t]=a[t](n),s=new p0({}),{c(){r.c(),i=Q(),ce(s.$$.fragment)},m(u,h){l[t].m(u,h),M(u,i,h),ie(s,u,h),o=!0},p(u,[h]){let f=t;t=c(u,h),t===f?l[t].p(u,h):(Be(),F(l[f],1,1,()=>{l[f]=null}),qe(),r=l[t],r?r.p(u,h):(r=l[t]=a[t](u),r.c()),O(r,1),r.m(i.parentNode,i))},i(u){o||(O(r),O(s.$$.fragment,u),o=!0)},o(u){F(r),F(s.$$.fragment,u),o=!1},d(u){l[t].d(u),u&&S(i),se(s,u)}}}function Z0(n,e,t){const r=new nt;let i=null,s=!0;Ao.onAuthStateChanged(u=>{t(1,s=!1),t(0,i=u)});function o(){Rg(Ao,r).then(u=>{t(0,i=u.user)}).catch(u=>{console.log(u.code,u.message)})}let a="";const l=u=>u.split("").reduce((h,f)=>(h=(h<<5)-h+f.charCodeAt(0),h&h),0);function c(){a=this.value,t(2,a)}return[i,s,a,o,l,c]}class eI extends $e{constructor(e){super(),je(this,e,Z0,Y0,ke,{})}}new eI({target:document.getElementById("app")});export{tI as c};
