(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function N(){}const Le=e=>e;function ee(e,t){for(const n in t)e[n]=t[n];return e}function qu(e){return!!e&&(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"}function Zo(e){return e()}function Fi(){return Object.create(null)}function Ot(e){e.forEach(Zo)}function oe(e){return typeof e=="function"}function Kt(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function $u(e){return Object.keys(e).length===0}function ju(e,...t){if(e==null)return N;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function ta(e,t,n){e.$$.on_destroy.push(ju(t,n))}function ea(e,t,n,s){if(e){const r=na(e,t,n,s);return e[0](r)}}function na(e,t,n,s){return e[1]&&s?ee(n.ctx.slice(),e[1](s(t))):n.ctx}function sa(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const i=[],o=Math.max(t.dirty.length,r.length);for(let a=0;a<o;a+=1)i[a]=t.dirty[a]|r[a];return i}return t.dirty|r}return t.dirty}function ra(e,t,n,s,r,i){if(r){const o=na(t,n,s,i);e.p(o,r)}}function ia(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let s=0;s<n;s++)t[s]=-1;return t}return-1}function Vi(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function Ui(e){return e==null?"":e}function Ku(e){return e&&oe(e.destroy)?e.destroy:N}const oa=typeof window<"u";let gs=oa?()=>window.performance.now():()=>Date.now(),jr=oa?e=>requestAnimationFrame(e):N;const we=new Set;function aa(e){we.forEach(t=>{t.c(e)||(we.delete(t),t.f())}),we.size!==0&&jr(aa)}function ys(e){let t;return we.size===0&&jr(aa),{promise:new Promise(n=>{we.add(t={c:e,f:n})}),abort(){we.delete(t)}}}function tt(e,t){e.appendChild(t)}function ca(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Hu(e){const t=W("style");return zu(ca(e),t),t.sheet}function zu(e,t){return tt(e.head||e,t),t.sheet}function H(e,t,n){e.insertBefore(t,n||null)}function q(e){e.parentNode&&e.parentNode.removeChild(e)}function W(e){return document.createElement(e)}function Gu(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function vs(e){return document.createTextNode(e)}function Et(){return vs(" ")}function Ht(){return vs("")}function Lt(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function L(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Bi(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const s in t)t[s]==null?e.removeAttribute(s):s==="style"?e.style.cssText=t[s]:s==="__value"?e.value=e[s]=t[s]:n[s]&&n[s].set?e[s]=t[s]:L(e,s,t[s])}function qi(e,t){Object.keys(t).forEach(n=>{Qu(e,n,t[n])})}function Qu(e,t,n){t in e?e[t]=typeof e[t]=="boolean"&&n===""?!0:n:L(e,t,n)}function Wu(e){return Array.from(e.childNodes)}function ua(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function xn(e,t){e.value=t==null?"":t}function ye(e,t,n){e.classList[n?"add":"remove"](t)}function la(e,t,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,s,t),r}class Xu{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,s=null){this.e||(this.is_svg?this.e=Gu(n.nodeName):this.e=W(n.nodeName),this.t=n,this.c(t)),this.i(s)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)H(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(q)}}function $i(e,t){return new e(t)}const zn=new Map;let Gn=0;function Yu(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Ju(e,t){const n={stylesheet:Hu(t),rules:{}};return zn.set(e,n),n}function Kr(e,t,n,s,r,i,o,a=0){const c=16.666/s;let u=`{
`;for(let v=0;v<=1;v+=c){const w=t+(n-t)*i(v);u+=v*100+`%{${o(w,1-w)}}
`}const l=u+`100% {${o(n,1-n)}}
}`,h=`__svelte_${Yu(l)}_${a}`,f=ca(e),{stylesheet:d,rules:p}=zn.get(f)||Ju(f,e);p[h]||(p[h]=!0,d.insertRule(`@keyframes ${h} ${l}`,d.cssRules.length));const m=e.style.animation||"";return e.style.animation=`${m?`${m}, `:""}${h} ${s}ms linear ${r}ms 1 both`,Gn+=1,h}function Qn(e,t){const n=(e.style.animation||"").split(", "),s=n.filter(t?i=>i.indexOf(t)<0:i=>i.indexOf("__svelte")===-1),r=n.length-s.length;r&&(e.style.animation=s.join(", "),Gn-=r,Gn||Zu())}function Zu(){jr(()=>{Gn||(zn.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&q(t)}),zn.clear())})}function tl(e,t,n,s){if(!t)return N;const r=e.getBoundingClientRect();if(t.left===r.left&&t.right===r.right&&t.top===r.top&&t.bottom===r.bottom)return N;const{delay:i=0,duration:o=300,easing:a=Le,start:c=gs()+i,end:u=c+o,tick:l=N,css:h}=n(e,{from:t,to:r},s);let f=!0,d=!1,p;function m(){h&&(p=Kr(e,0,1,o,i,a,h)),i||(d=!0)}function v(){h&&Qn(e,p),f=!1}return ys(w=>{if(!d&&w>=c&&(d=!0),d&&w>=u&&(l(1,0),v()),!f)return!1;if(d){const S=w-c,D=0+1*a(S/o);l(D,1-D)}return!0}),m(),l(0,1),v}function el(e){const t=getComputedStyle(e);if(t.position!=="absolute"&&t.position!=="fixed"){const{width:n,height:s}=t,r=e.getBoundingClientRect();e.style.position="absolute",e.style.width=n,e.style.height=s,ha(e,r)}}function ha(e,t){const n=e.getBoundingClientRect();if(t.left!==n.left||t.top!==n.top){const s=getComputedStyle(e),r=s.transform==="none"?"":s.transform;e.style.transform=`${r} translate(${t.left-n.left}px, ${t.top-n.top}px)`}}let tn;function Ct(e){tn=e}function ws(){if(!tn)throw new Error("Function called outside component initialization");return tn}function nl(e){ws().$$.on_mount.push(e)}function sl(e){ws().$$.on_destroy.push(e)}function Lg(){const e=ws();return(t,n,{cancelable:s=!1}={})=>{const r=e.$$.callbacks[t];if(r){const i=la(t,n,{cancelable:s});return r.slice().forEach(o=>{o.call(e,i)}),!i.defaultPrevented}return!0}}const pe=[],ji=[],Bn=[],Ki=[],rl=Promise.resolve();let fr=!1;function il(){fr||(fr=!0,rl.then(Hr))}function Ie(e){Bn.push(e)}const Xs=new Set;let he=0;function Hr(){if(he!==0)return;const e=tn;do{try{for(;he<pe.length;){const t=pe[he];he++,Ct(t),ol(t.$$)}}catch(t){throw pe.length=0,he=0,t}for(Ct(null),pe.length=0,he=0;ji.length;)ji.pop()();for(let t=0;t<Bn.length;t+=1){const n=Bn[t];Xs.has(n)||(Xs.add(n),n())}Bn.length=0}while(pe.length);for(;Ki.length;)Ki.pop()();fr=!1,Xs.clear(),Ct(e)}function ol(e){if(e.fragment!==null){e.update(),Ot(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Ie)}}let je;function fa(){return je||(je=Promise.resolve(),je.then(()=>{je=null})),je}function Wn(e,t,n){e.dispatchEvent(la(`${t?"intro":"outro"}${n}`))}const qn=new Set;let Mt;function Me(){Mt={r:0,c:[],p:Mt}}function Pe(){Mt.r||Ot(Mt.c),Mt=Mt.p}function j(e,t){e&&e.i&&(qn.delete(e),e.i(t))}function z(e,t,n,s){if(e&&e.o){if(qn.has(e))return;qn.add(e),Mt.c.push(()=>{qn.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}const da={duration:0};function al(e,t,n){const s={direction:"in"};let r=t(e,n,s),i=!1,o,a,c=0;function u(){o&&Qn(e,o)}function l(){const{delay:f=0,duration:d=300,easing:p=Le,tick:m=N,css:v}=r||da;v&&(o=Kr(e,0,1,d,f,p,v,c++)),m(0,1);const w=gs()+f,S=w+d;a&&a.abort(),i=!0,Ie(()=>Wn(e,!0,"start")),a=ys(D=>{if(i){if(D>=S)return m(1,0),Wn(e,!0,"end"),u(),i=!1;if(D>=w){const x=p((D-w)/d);m(x,1-x)}}return i})}let h=!1;return{start(){h||(h=!0,Qn(e),oe(r)?(r=r(s),fa().then(l)):l())},invalidate(){h=!1},end(){i&&(u(),i=!1)}}}function cl(e,t,n){const s={direction:"out"};let r=t(e,n,s),i=!0,o;const a=Mt;a.r+=1;function c(){const{delay:u=0,duration:l=300,easing:h=Le,tick:f=N,css:d}=r||da;d&&(o=Kr(e,1,0,l,u,h,d));const p=gs()+u,m=p+l;Ie(()=>Wn(e,!1,"start")),ys(v=>{if(i){if(v>=m)return f(0,1),Wn(e,!1,"end"),--a.r||Ot(a.c),!1;if(v>=p){const w=h((v-p)/l);f(1-w,w)}}return i})}return oe(r)?fa().then(()=>{r=r(s),c()}):c(),{end(u){u&&r.tick&&r.tick(1,0),i&&(o&&Qn(e,o),i=!1)}}}function Xn(e,t){const n=t.token={};function s(r,i,o,a){if(t.token!==n)return;t.resolved=a;let c=t.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const u=r&&(t.current=r)(c);let l=!1;t.block&&(t.blocks?t.blocks.forEach((h,f)=>{f!==i&&h&&(Me(),z(h,1,1,()=>{t.blocks[f]===h&&(t.blocks[f]=null)}),Pe())}):t.block.d(1),u.c(),j(u,1),u.m(t.mount(),t.anchor),l=!0),t.block=u,t.blocks&&(t.blocks[i]=u),l&&Hr()}if(qu(e)){const r=ws();if(e.then(i=>{Ct(r),s(t.then,1,t.value,i),Ct(null)},i=>{if(Ct(r),s(t.catch,2,t.error,i),Ct(null),!t.hasCatch)throw i}),t.current!==t.pending)return s(t.pending,0),!0}else{if(t.current!==t.then)return s(t.then,1,t.value,e),!0;t.resolved=e}}function pa(e,t,n){const s=t.slice(),{resolved:r}=e;e.current===e.then&&(s[e.value]=r),e.current===e.catch&&(s[e.error]=r),e.block.p(s,n)}function ul(e,t){z(e,1,1,()=>{t.delete(e.key)})}function ll(e,t){e.f(),ul(e,t)}function hl(e,t,n,s,r,i,o,a,c,u,l,h){let f=e.length,d=i.length,p=f;const m={};for(;p--;)m[e[p].key]=p;const v=[],w=new Map,S=new Map;for(p=d;p--;){const U=h(r,i,p),st=n(U);let mt=o.get(st);mt?s&&mt.p(U,t):(mt=u(st,U),mt.c()),w.set(st,v[p]=mt),st in m&&S.set(st,Math.abs(p-m[st]))}const D=new Set,x=new Set;function dt(U){j(U,1),U.m(a,l),o.set(U.key,U),l=U.first,d--}for(;f&&d;){const U=v[d-1],st=e[f-1],mt=U.key,xt=st.key;U===st?(l=U.first,f--,d--):w.has(xt)?!o.has(mt)||D.has(mt)?dt(U):x.has(xt)?f--:S.get(mt)>S.get(xt)?(x.add(mt),dt(U)):(D.add(xt),f--):(c(st,o),f--)}for(;f--;){const U=e[f];w.has(U.key)||c(U,o)}for(;d;)dt(v[d-1]);return v}function ma(e,t){const n={},s={},r={$$scope:1};let i=e.length;for(;i--;){const o=e[i],a=t[i];if(a){for(const c in o)c in a||(s[c]=1);for(const c in a)r[c]||(n[c]=a[c],r[c]=1);e[i]=a}else for(const c in o)r[c]=1}for(const o in s)o in n||(n[o]=void 0);return n}function fl(e){return typeof e=="object"&&e!==null?e:{}}function ne(e){e&&e.c()}function Vt(e,t,n,s){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),s||Ie(()=>{const o=e.$$.on_mount.map(Zo).filter(oe);e.$$.on_destroy?e.$$.on_destroy.push(...o):Ot(o),e.$$.on_mount=[]}),i.forEach(Ie)}function Ut(e,t){const n=e.$$;n.fragment!==null&&(Ot(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function dl(e,t){e.$$.dirty[0]===-1&&(pe.push(e),il(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function gn(e,t,n,s,r,i,o,a=[-1]){const c=tn;Ct(e);const u=e.$$={fragment:null,ctx:[],props:i,update:N,not_equal:r,bound:Fi(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Fi(),dirty:a,skip_bound:!1,root:t.target||c.$$.root};o&&o(u.root);let l=!1;if(u.ctx=n?n(e,t.props||{},(h,f,...d)=>{const p=d.length?d[0]:f;return u.ctx&&r(u.ctx[h],u.ctx[h]=p)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](p),l&&dl(e,h)),f}):[],u.update(),l=!0,Ot(u.before_update),u.fragment=s?s(u.ctx):!1,t.target){if(t.hydrate){const h=Wu(t.target);u.fragment&&u.fragment.l(h),h.forEach(q)}else u.fragment&&u.fragment.c();t.intro&&j(e.$$.fragment),Vt(e,t.target,t.anchor,t.customElement),Hr()}Ct(c)}class yn{$destroy(){Ut(this,1),this.$destroy=N}$on(t,n){if(!oe(n))return N;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!$u(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}/**
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
 */const ga=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},pl=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},ya={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,u=c?e[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,d=u&63;c||(d=64,o||(f=64)),s.push(n[l],n[h],n[f],n[d])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ga(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):pl(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const h=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),u!==64){const d=a<<4&240|u>>2;if(s.push(d),h!==64){const p=u<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},ml=function(e){const t=ga(e);return ya.encodeByteArray(t,!0)},Yn=function(e){return ml(e).replace(/\./g,"")},gl=function(e){try{return ya.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function yl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vl=()=>yl().__FIREBASE_DEFAULTS__,wl=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},El=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&gl(e[1]);return t&&JSON.parse(t)},va=()=>{try{return vl()||wl()||El()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},_l=e=>{var t,n;return(n=(t=va())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Tl=e=>{const t=_l(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},bl=()=>{var e;return(e=va())===null||e===void 0?void 0:e.config};/**
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
 */class Il{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function Cl(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Yn(JSON.stringify(n)),Yn(JSON.stringify(o)),a].join(".")}function Sl(){try{return typeof indexedDB=="object"}catch{return!1}}function kl(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
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
 */const Dl="FirebaseError";class Fe extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Dl,Object.setPrototypeOf(this,Fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wa.prototype.create)}}class wa{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?Al(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Fe(r,a,s)}}function Al(e,t){return e.replace(Nl,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Nl=/\{\$([^}]+)}/g;function dr(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(Hi(i)&&Hi(o)){if(!dr(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Hi(e){return e!==null&&typeof e=="object"}/**
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
 */function Bt(e){return e&&e._delegate?e._delegate:e}class en{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Qt="[DEFAULT]";/**
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
 */class Rl{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Il;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(xl(t))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=Qt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qt){return this.instances.has(t)}getOptions(t=Qt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ol(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Qt){return this.component?this.component.multipleInstances?t:Qt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ol(e){return e===Qt?void 0:e}function xl(e){return e.instantiationMode==="EAGER"}/**
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
 */class Ll{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Rl(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var M;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(M||(M={}));const Ml={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},Pl=M.INFO,Fl={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},Vl=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=Fl[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ea{constructor(t){this.name=t,this._logLevel=Pl,this._logHandler=Vl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in M))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ml[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...t),this._logHandler(this,M.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...t),this._logHandler(this,M.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,M.INFO,...t),this._logHandler(this,M.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,M.WARN,...t),this._logHandler(this,M.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...t),this._logHandler(this,M.ERROR,...t)}}const Ul=(e,t)=>t.some(n=>e instanceof n);let zi,Gi;function Bl(){return zi||(zi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ql(){return Gi||(Gi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _a=new WeakMap,pr=new WeakMap,Ta=new WeakMap,Ys=new WeakMap,zr=new WeakMap;function $l(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Pt(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&_a.set(n,e)}).catch(()=>{}),zr.set(t,e),t}function jl(e){if(pr.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});pr.set(e,t)}let mr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return pr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ta.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Kl(e){mr=e(mr)}function Hl(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Js(this),t,...n);return Ta.set(s,t.sort?t.sort():[t]),Pt(s)}:ql().includes(e)?function(...t){return e.apply(Js(this),t),Pt(_a.get(this))}:function(...t){return Pt(e.apply(Js(this),t))}}function zl(e){return typeof e=="function"?Hl(e):(e instanceof IDBTransaction&&jl(e),Ul(e,Bl())?new Proxy(e,mr):e)}function Pt(e){if(e instanceof IDBRequest)return $l(e);if(Ys.has(e))return Ys.get(e);const t=zl(e);return t!==e&&(Ys.set(e,t),zr.set(t,e)),t}const Js=e=>zr.get(e);function Gl(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=Pt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Pt(o.result),c.oldVersion,c.newVersion,Pt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Ql=["get","getKey","getAll","getAllKeys","count"],Wl=["put","add","delete","clear"],Zs=new Map;function Qi(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Zs.get(t))return Zs.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=Wl.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Ql.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Zs.set(t,i),i}Kl(e=>({...e,get:(t,n,s)=>Qi(t,n)||e.get(t,n,s),has:(t,n)=>!!Qi(t,n)||e.has(t,n)}));/**
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
 */class Xl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Yl(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Yl(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const gr="@firebase/app",Wi="0.9.1";/**
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
 */const se=new Ea("@firebase/app"),Jl="@firebase/app-compat",Zl="@firebase/analytics-compat",th="@firebase/analytics",eh="@firebase/app-check-compat",nh="@firebase/app-check",sh="@firebase/auth",rh="@firebase/auth-compat",ih="@firebase/database",oh="@firebase/database-compat",ah="@firebase/functions",ch="@firebase/functions-compat",uh="@firebase/installations",lh="@firebase/installations-compat",hh="@firebase/messaging",fh="@firebase/messaging-compat",dh="@firebase/performance",ph="@firebase/performance-compat",mh="@firebase/remote-config",gh="@firebase/remote-config-compat",yh="@firebase/storage",vh="@firebase/storage-compat",wh="@firebase/firestore",Eh="@firebase/firestore-compat",_h="firebase",Th="9.16.0";/**
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
 */const yr="[DEFAULT]",bh={[gr]:"fire-core",[Jl]:"fire-core-compat",[th]:"fire-analytics",[Zl]:"fire-analytics-compat",[nh]:"fire-app-check",[eh]:"fire-app-check-compat",[sh]:"fire-auth",[rh]:"fire-auth-compat",[ih]:"fire-rtdb",[oh]:"fire-rtdb-compat",[ah]:"fire-fn",[ch]:"fire-fn-compat",[uh]:"fire-iid",[lh]:"fire-iid-compat",[hh]:"fire-fcm",[fh]:"fire-fcm-compat",[dh]:"fire-perf",[ph]:"fire-perf-compat",[mh]:"fire-rc",[gh]:"fire-rc-compat",[yh]:"fire-gcs",[vh]:"fire-gcs-compat",[wh]:"fire-fst",[Eh]:"fire-fst-compat","fire-js":"fire-js",[_h]:"fire-js-all"};/**
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
 */const Jn=new Map,vr=new Map;function Ih(e,t){try{e.container.addComponent(t)}catch(n){se.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Zn(e){const t=e.name;if(vr.has(t))return se.debug(`There were multiple attempts to register component ${t}.`),!1;vr.set(t,e);for(const n of Jn.values())Ih(n,e);return!0}function Ch(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Sh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ft=new wa("app","Firebase",Sh);/**
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
 */class kh{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
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
 */const Dh=Th;function ba(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:yr,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw Ft.create("bad-app-name",{appName:String(r)});if(n||(n=bl()),!n)throw Ft.create("no-options");const i=Jn.get(r);if(i){if(dr(n,i.options)&&dr(s,i.config))return i;throw Ft.create("duplicate-app",{appName:r})}const o=new Ll(r);for(const c of vr.values())o.addComponent(c);const a=new kh(n,s,o);return Jn.set(r,a),a}function Ah(e=yr){const t=Jn.get(e);if(!t&&e===yr)return ba();if(!t)throw Ft.create("no-app",{appName:e});return t}function Ee(e,t,n){var s;let r=(s=bh[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),se.warn(a.join(" "));return}Zn(new en(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Nh="firebase-heartbeat-database",Rh=1,nn="firebase-heartbeat-store";let tr=null;function Ia(){return tr||(tr=Gl(Nh,Rh,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(nn)}}}).catch(e=>{throw Ft.create("idb-open",{originalErrorMessage:e.message})})),tr}async function Oh(e){try{return(await Ia()).transaction(nn).objectStore(nn).get(Ca(e))}catch(t){if(t instanceof Fe)se.warn(t.message);else{const n=Ft.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});se.warn(n.message)}}}async function Xi(e,t){try{const s=(await Ia()).transaction(nn,"readwrite");return await s.objectStore(nn).put(t,Ca(e)),s.done}catch(n){if(n instanceof Fe)se.warn(n.message);else{const s=Ft.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});se.warn(s.message)}}}function Ca(e){return`${e.name}!${e.options.appId}`}/**
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
 */const xh=1024,Lh=30*24*60*60*1e3;class Mh{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Fh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Yi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Lh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Yi(),{heartbeatsToSend:n,unsentEntries:s}=Ph(this._heartbeatsCache.heartbeats),r=Yn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Yi(){return new Date().toISOString().substring(0,10)}function Ph(e,t=xh){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ji(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ji(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Fh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sl()?kl().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Oh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Ji(e){return Yn(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Vh(e){Zn(new en("platform-logger",t=>new Xl(t),"PRIVATE")),Zn(new en("heartbeat",t=>new Mh(t),"PRIVATE")),Ee(gr,Wi,e),Ee(gr,Wi,"esm2017"),Ee("fire-js","")}Vh("");var Uh="firebase",Bh="9.16.0";/**
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
 */Ee(Uh,Bh,"app");var qh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},E,Gr=Gr||{},C=qh||self;function ts(){}function Es(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function vn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function $h(e){return Object.prototype.hasOwnProperty.call(e,er)&&e[er]||(e[er]=++jh)}var er="closure_uid_"+(1e9*Math.random()>>>0),jh=0;function Kh(e,t,n){return e.call.apply(e.bind,arguments)}function Hh(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function lt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?lt=Kh:lt=Hh,lt.apply(null,arguments)}function Ln(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function ot(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function zt(){this.s=this.s,this.o=this.o}var zh=0;zt.prototype.s=!1;zt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),zh!=0)&&$h(this)};zt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Sa=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Qr(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Zi(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Es(s)){const r=e.length||0,i=s.length||0;e.length=r+i;for(let o=0;o<i;o++)e[r+o]=s[o]}else e.push(s)}}function ht(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var Gh=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{C.addEventListener("test",ts,t),C.removeEventListener("test",ts,t)}catch{}return e}();function es(e){return/^[\s\xa0]*$/.test(e)}var to=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function nr(e,t){return e<t?-1:e>t?1:0}function _s(){var e=C.navigator;return e&&(e=e.userAgent)?e:""}function _t(e){return _s().indexOf(e)!=-1}function Wr(e){return Wr[" "](e),e}Wr[" "]=ts;function Qh(e){var t=Yh;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Wh=_t("Opera"),Ce=_t("Trident")||_t("MSIE"),ka=_t("Edge"),wr=ka||Ce,Da=_t("Gecko")&&!(_s().toLowerCase().indexOf("webkit")!=-1&&!_t("Edge"))&&!(_t("Trident")||_t("MSIE"))&&!_t("Edge"),Xh=_s().toLowerCase().indexOf("webkit")!=-1&&!_t("Edge");function Aa(){var e=C.document;return e?e.documentMode:void 0}var ns;t:{var sr="",rr=function(){var e=_s();if(Da)return/rv:([^\);]+)(\)|;)/.exec(e);if(ka)return/Edge\/([\d\.]+)/.exec(e);if(Ce)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Xh)return/WebKit\/(\S+)/.exec(e);if(Wh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(rr&&(sr=rr?rr[1]:""),Ce){var ir=Aa();if(ir!=null&&ir>parseFloat(sr)){ns=String(ir);break t}}ns=sr}var Yh={};function Jh(){return Qh(function(){let e=0;const t=to(String(ns)).split("."),n=to("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=nr(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||nr(r[2].length==0,i[2].length==0)||nr(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var Er;if(C.document&&Ce){var eo=Aa();Er=eo||parseInt(ns,10)||void 0}else Er=void 0;var Zh=Er;function sn(e,t){if(ht.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Da){t:{try{Wr(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:tf[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&sn.X.h.call(this)}}ot(sn,ht);var tf={2:"touch",3:"pen",4:"mouse"};sn.prototype.h=function(){sn.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var wn="closure_listenable_"+(1e6*Math.random()|0),ef=0;function nf(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=r,this.key=++ef,this.ba=this.ea=!1}function Ts(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Xr(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Na(e){const t={};for(const n in e)t[n]=e[n];return t}const no="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ra(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<no.length;i++)n=no[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function bs(e){this.src=e,this.g={},this.h=0}bs.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Tr(e,t,s,r);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new nf(t,this.src,i,!!s,r),t.ea=n,e.push(t)),t};function _r(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=Sa(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Ts(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Tr(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ba&&i.listener==t&&i.capture==!!n&&i.ha==s)return r}return-1}var Yr="closure_lm_"+(1e6*Math.random()|0),or={};function Oa(e,t,n,s,r){if(s&&s.once)return La(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Oa(e,t[i],n,s,r);return null}return n=ti(n),e&&e[wn]?e.N(t,n,vn(s)?!!s.capture:!!s,r):xa(e,t,n,!1,s,r)}function xa(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=vn(r)?!!r.capture:!!r,a=Zr(e);if(a||(e[Yr]=a=new bs(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=sf(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Gh||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(Pa(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function sf(){function e(n){return t.call(e.src,e.listener,n)}const t=rf;return e}function La(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)La(e,t[i],n,s,r);return null}return n=ti(n),e&&e[wn]?e.O(t,n,vn(s)?!!s.capture:!!s,r):xa(e,t,n,!0,s,r)}function Ma(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)Ma(e,t[i],n,s,r);else s=vn(s)?!!s.capture:!!s,n=ti(n),e&&e[wn]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Tr(i,n,s,r),-1<n&&(Ts(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Zr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Tr(t,n,s,r)),(n=-1<e?t[e]:null)&&Jr(n))}function Jr(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[wn])_r(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Pa(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Zr(t))?(_r(n,e),n.h==0&&(n.src=null,t[Yr]=null)):Ts(e)}}}function Pa(e){return e in or?or[e]:or[e]="on"+e}function rf(e,t){if(e.ba)e=!0;else{t=new sn(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&Jr(e),e=n.call(s,t)}return e}function Zr(e){return e=e[Yr],e instanceof bs?e:null}var ar="__closure_events_fn_"+(1e9*Math.random()>>>0);function ti(e){return typeof e=="function"?e:(e[ar]||(e[ar]=function(t){return e.handleEvent(t)}),e[ar])}function nt(){zt.call(this),this.i=new bs(this),this.P=this,this.I=null}ot(nt,zt);nt.prototype[wn]=!0;nt.prototype.removeEventListener=function(e,t,n,s){Ma(this,e,t,n,s)};function it(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new ht(t,e);else if(t instanceof ht)t.target=t.target||e;else{var r=t;t=new ht(s,e),Ra(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=Mn(o,s,!0,t)&&r}if(o=t.g=e,r=Mn(o,s,!0,t)&&r,r=Mn(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=Mn(o,s,!1,t)&&r}nt.prototype.M=function(){if(nt.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Ts(n[s]);delete e.g[t],e.h--}}this.I=null};nt.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};nt.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Mn(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&_r(e.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var ei=C.JSON.stringify;function of(){var e=Ua;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class af{constructor(){this.h=this.g=null}add(t,n){const s=Fa.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Fa=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new cf,e=>e.reset());class cf{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function uf(e){C.setTimeout(()=>{throw e},0)}function Va(e,t){br||lf(),Ir||(br(),Ir=!0),Ua.add(e,t)}var br;function lf(){var e=C.Promise.resolve(void 0);br=function(){e.then(hf)}}var Ir=!1,Ua=new af;function hf(){for(var e;e=of();){try{e.h.call(e.g)}catch(n){uf(n)}var t=Fa;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ir=!1}function Is(e,t){nt.call(this),this.h=e||1,this.g=t||C,this.j=lt(this.lb,this),this.l=Date.now()}ot(Is,nt);E=Is.prototype;E.ca=!1;E.R=null;E.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),it(this,"tick"),this.ca&&(ni(this),this.start()))}};E.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ni(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}E.M=function(){Is.X.M.call(this),ni(this),delete this.g};function si(e,t,n){if(typeof e=="function")n&&(e=lt(e,n));else if(e&&typeof e.handleEvent=="function")e=lt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:C.setTimeout(e,t||0)}function Ba(e){e.g=si(()=>{e.g=null,e.i&&(e.i=!1,Ba(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class ff extends zt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ba(this)}M(){super.M(),this.g&&(C.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rn(e){zt.call(this),this.h=e,this.g={}}ot(rn,zt);var so=[];function qa(e,t,n,s){Array.isArray(n)||(n&&(so[0]=n.toString()),n=so);for(var r=0;r<n.length;r++){var i=Oa(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function $a(e){Xr(e.g,function(t,n){this.g.hasOwnProperty(n)&&Jr(t)},e),e.g={}}rn.prototype.M=function(){rn.X.M.call(this),$a(this)};rn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Cs(){this.g=!0}Cs.prototype.Aa=function(){this.g=!1};function df(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function pf(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function ve(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+gf(e,n)+(s?" "+s:"")})}function mf(e,t){e.info(function(){return"TIMEOUT: "+t})}Cs.prototype.info=function(){};function gf(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return ei(n)}catch{return t}}var ae={},ro=null;function Ss(){return ro=ro||new nt}ae.Pa="serverreachability";function ja(e){ht.call(this,ae.Pa,e)}ot(ja,ht);function on(e){const t=Ss();it(t,new ja(t))}ae.STAT_EVENT="statevent";function Ka(e,t){ht.call(this,ae.STAT_EVENT,e),this.stat=t}ot(Ka,ht);function pt(e){const t=Ss();it(t,new Ka(t,e))}ae.Qa="timingevent";function Ha(e,t){ht.call(this,ae.Qa,e),this.size=t}ot(Ha,ht);function En(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return C.setTimeout(function(){e()},t)}var ks={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},za={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ri(){}ri.prototype.h=null;function io(e){return e.h||(e.h=e.i())}function Ga(){}var _n={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ii(){ht.call(this,"d")}ot(ii,ht);function oi(){ht.call(this,"c")}ot(oi,ht);var Cr;function Ds(){}ot(Ds,ri);Ds.prototype.g=function(){return new XMLHttpRequest};Ds.prototype.i=function(){return{}};Cr=new Ds;function Tn(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new rn(this),this.O=yf,e=wr?125:void 0,this.T=new Is(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Qa}function Qa(){this.i=null,this.g="",this.h=!1}var yf=45e3,Sr={},ss={};E=Tn.prototype;E.setTimeout=function(e){this.O=e};function kr(e,t,n){e.K=1,e.v=Ns(Dt(t)),e.s=n,e.P=!0,Wa(e,null)}function Wa(e,t){e.F=Date.now(),bn(e),e.A=Dt(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),sc(n.i,"t",s),e.C=0,n=e.l.H,e.h=new Qa,e.g=Ic(e.l,n?t:null,!e.s),0<e.N&&(e.L=new ff(lt(e.La,e,e.g),e.N)),qa(e.S,e.g,"readystatechange",e.ib),t=e.H?Na(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),on(),df(e.j,e.u,e.A,e.m,e.U,e.s)}E.ib=function(e){e=e.target;const t=this.L;t&&St(e)==3?t.l():this.La(e)};E.La=function(e){try{if(e==this.g)t:{const l=St(this.g);var t=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||wr||this.g&&(this.h.h||this.g.fa()||uo(this.g)))){this.I||l!=4||t==7||(t==8||0>=h?on(3):on(2)),As(this);var n=this.g.aa();this.Y=n;e:if(Xa(this)){var s=uo(this.g);e="";var r=s.length,i=St(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wt(this),We(this);var o="";break e}this.h.i=new C.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,pf(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!es(a)){var u=a;break e}}u=null}if(n=u)ve(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Dr(this,n);else{this.i=!1,this.o=3,pt(12),Wt(this),We(this);break t}}this.P?(Ya(this,l,o),wr&&this.i&&l==3&&(qa(this.S,this.T,"tick",this.hb),this.T.start())):(ve(this.j,this.m,o,null),Dr(this,o)),l==4&&Wt(this),this.i&&!this.I&&(l==4?Ec(this.l,this):(this.i=!1,bn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,pt(12)):(this.o=0,pt(13)),Wt(this),We(this)}}}catch{}finally{}};function Xa(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function Ya(e,t,n){let s=!0,r;for(;!e.I&&e.C<n.length;)if(r=vf(e,n),r==ss){t==4&&(e.o=4,pt(14),s=!1),ve(e.j,e.m,null,"[Incomplete Response]");break}else if(r==Sr){e.o=4,pt(15),ve(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else ve(e.j,e.m,r,null),Dr(e,r);Xa(e)&&r!=ss&&r!=Sr&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,pt(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),di(t),t.K=!0,pt(11))):(ve(e.j,e.m,n,"[Invalid Chunked Response]"),Wt(e),We(e))}E.hb=function(){if(this.g){var e=St(this.g),t=this.g.fa();this.C<t.length&&(As(this),Ya(this,e,t),this.i&&e!=4&&bn(this))}};function vf(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?ss:(n=Number(t.substring(n,s)),isNaN(n)?Sr:(s+=1,s+n>t.length?ss:(t=t.substr(s,n),e.C=s+n,t)))}E.cancel=function(){this.I=!0,Wt(this)};function bn(e){e.V=Date.now()+e.O,Ja(e,e.O)}function Ja(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=En(lt(e.gb,e),t)}function As(e){e.B&&(C.clearTimeout(e.B),e.B=null)}E.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(mf(this.j,this.A),this.K!=2&&(on(),pt(17)),Wt(this),this.o=2,We(this)):Ja(this,this.V-e)};function We(e){e.l.G==0||e.I||Ec(e.l,e)}function Wt(e){As(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,ni(e.T),$a(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Dr(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Ar(n.h,e))){if(!e.J&&Ar(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)os(n),xs(n);else break t;fi(n),pt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=En(lt(n.cb,n),6e3));if(1>=oc(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Xt(n,11)}else if((e.J||n.g==e)&&os(n),!es(t))for(r=n.Fa.g.parse(t),t=0;t<r.length;t++){let u=r[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=e.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=s.h;i.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ai(i,i.h),i.h=null))}if(s.D){const m=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(s.za=m,B(s.F,s.D,m))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=bc(s,s.H?s.ka:null,s.V),o.J){ac(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(As(a),bn(a)),s.g=o}else vc(s);0<n.i.length&&Ls(n)}else u[0]!="stop"&&u[0]!="close"||Xt(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Xt(n,7):hi(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}on(4)}catch{}}function wf(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Es(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Ef(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Es(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function Za(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Es(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Ef(e),s=wf(e),r=s.length,i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}var tc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _f(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Jt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Jt){this.h=t!==void 0?t:e.h,rs(this,e.j),this.s=e.s,this.g=e.g,is(this,e.m),this.l=e.l,t=e.i;var n=new an;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),oo(this,n),this.o=e.o}else e&&(n=String(e).match(tc))?(this.h=!!t,rs(this,n[1]||"",!0),this.s=He(n[2]||""),this.g=He(n[3]||"",!0),is(this,n[4]),this.l=He(n[5]||"",!0),oo(this,n[6]||"",!0),this.o=He(n[7]||"")):(this.h=!!t,this.i=new an(null,this.h))}Jt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ze(t,ao,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ze(t,ao,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(ze(n,n.charAt(0)=="/"?If:bf,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ze(n,Sf)),e.join("")};function Dt(e){return new Jt(e)}function rs(e,t,n){e.j=n?He(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function is(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function oo(e,t,n){t instanceof an?(e.i=t,kf(e.i,e.h)):(n||(t=ze(t,Cf)),e.i=new an(t,e.h))}function B(e,t,n){e.i.set(t,n)}function Ns(e){return B(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function He(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ze(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Tf),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Tf(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var ao=/[#\/\?@]/g,bf=/[#\?:]/g,If=/[#\?]/g,Cf=/[#\?@]/g,Sf=/#/g;function an(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Gt(e){e.g||(e.g=new Map,e.h=0,e.i&&_f(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}E=an.prototype;E.add=function(e,t){Gt(this),this.i=null,e=Ve(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function ec(e,t){Gt(e),t=Ve(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function nc(e,t){return Gt(e),t=Ve(e,t),e.g.has(t)}E.forEach=function(e,t){Gt(this),this.g.forEach(function(n,s){n.forEach(function(r){e.call(t,r,s,this)},this)},this)};E.oa=function(){Gt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const r=e[s];for(let i=0;i<r.length;i++)n.push(t[s])}return n};E.W=function(e){Gt(this);let t=[];if(typeof e=="string")nc(this,e)&&(t=t.concat(this.g.get(Ve(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};E.set=function(e,t){return Gt(this),this.i=null,e=Ve(this,e),nc(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};E.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function sc(e,t,n){ec(e,t),0<n.length&&(e.i=null,e.g.set(Ve(e,t),Qr(n)),e.h+=n.length)}E.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),e.push(r)}}return this.i=e.join("&")};function Ve(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function kf(e,t){t&&!e.j&&(Gt(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(ec(this,s),sc(this,r,n))},e)),e.j=t}var Df=class{constructor(e,t){this.h=e,this.g=t}};function rc(e){this.l=e||Af,C.PerformanceNavigationTiming?(e=C.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(C.g&&C.g.Ga&&C.g.Ga()&&C.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Af=10;function ic(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function oc(e){return e.h?1:e.g?e.g.size:0}function Ar(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function ai(e,t){e.g?e.g.add(t):e.h=t}function ac(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}rc.prototype.cancel=function(){if(this.i=cc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function cc(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Qr(e.i)}function ci(){}ci.prototype.stringify=function(e){return C.JSON.stringify(e,void 0)};ci.prototype.parse=function(e){return C.JSON.parse(e,void 0)};function Nf(){this.g=new ci}function Rf(e,t,n){const s=n||"";try{Za(e,function(r,i){let o=r;vn(r)&&(o=ei(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function Of(e,t){const n=new Cs;if(C.Image){const s=new Image;s.onload=Ln(Pn,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Ln(Pn,n,s,"TestLoadImage: error",!1,t),s.onabort=Ln(Pn,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Ln(Pn,n,s,"TestLoadImage: timeout",!1,t),C.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Pn(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function In(e){this.l=e.ac||null,this.j=e.jb||!1}ot(In,ri);In.prototype.g=function(){return new Rs(this.l,this.j)};In.prototype.i=function(e){return function(){return e}}({});function Rs(e,t){nt.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=ui,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ot(Rs,nt);var ui=0;E=Rs.prototype;E.open=function(e,t){if(this.readyState!=ui)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,cn(this)};E.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||C).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};E.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cn(this)),this.readyState=ui};E.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,cn(this)),this.g&&(this.readyState=3,cn(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof C.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;uc(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function uc(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}E.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Cn(this):cn(this),this.readyState==3&&uc(this)}};E.Va=function(e){this.g&&(this.response=this.responseText=e,Cn(this))};E.Ua=function(e){this.g&&(this.response=e,Cn(this))};E.ga=function(){this.g&&Cn(this)};function Cn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,cn(e)}E.setRequestHeader=function(e,t){this.v.append(e,t)};E.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};E.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function cn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Rs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var xf=C.JSON.parse;function K(e){nt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=lc,this.K=this.L=!1}ot(K,nt);var lc="",Lf=/^https?$/i,Mf=["POST","PUT"];E=K.prototype;E.Ka=function(e){this.L=e};E.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Cr.g(),this.C=this.u?io(this.u):io(Cr),this.g.onreadystatechange=lt(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){co(this,i);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=C.FormData&&e instanceof C.FormData,!(0<=Sa(Mf,t))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{dc(this),0<this.B&&((this.K=Pf(this.g))?(this.g.timeout=this.B,this.g.ontimeout=lt(this.qa,this)):this.A=si(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){co(this,i)}};function Pf(e){return Ce&&Jh()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}E.qa=function(){typeof Gr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,it(this,"timeout"),this.abort(8))};function co(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,hc(e),Os(e)}function hc(e){e.D||(e.D=!0,it(e,"complete"),it(e,"error"))}E.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,it(this,"complete"),it(this,"abort"),Os(this))};E.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Os(this,!0)),K.X.M.call(this)};E.Ha=function(){this.s||(this.F||this.v||this.l?fc(this):this.fb())};E.fb=function(){fc(this)};function fc(e){if(e.h&&typeof Gr<"u"&&(!e.C[1]||St(e)!=4||e.aa()!=2)){if(e.v&&St(e)==4)si(e.Ha,0,e);else if(it(e,"readystatechange"),St(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(tc)[1]||null;if(!r&&C.self&&C.self.location){var i=C.self.location.protocol;r=i.substr(0,i.length-1)}s=!Lf.test(r?r.toLowerCase():"")}n=s}if(n)it(e,"complete"),it(e,"success");else{e.m=6;try{var o=2<St(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",hc(e)}}finally{Os(e)}}}}function Os(e,t){if(e.g){dc(e);const n=e.g,s=e.C[0]?ts:null;e.g=null,e.C=null,t||it(e,"ready");try{n.onreadystatechange=s}catch{}}}function dc(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(C.clearTimeout(e.A),e.A=null)}function St(e){return e.g?e.g.readyState:0}E.aa=function(){try{return 2<St(this)?this.g.status:-1}catch{return-1}};E.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};E.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),xf(t)}};function uo(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case lc:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}E.Ea=function(){return this.m};E.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function pc(e){let t="";return Xr(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function li(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=pc(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):B(e,t,n))}function Ke(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function mc(e){this.Ca=0,this.i=[],this.j=new Cs,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ke("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ke("baseRetryDelayMs",5e3,e),this.bb=Ke("retryDelaySeedMs",1e4,e),this.$a=Ke("forwardChannelMaxRetries",2,e),this.ta=Ke("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new rc(e&&e.concurrentRequestLimit),this.Fa=new Nf,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}E=mc.prototype;E.ma=8;E.G=1;function hi(e){if(gc(e),e.G==3){var t=e.U++,n=Dt(e.F);B(n,"SID",e.I),B(n,"RID",t),B(n,"TYPE","terminate"),Sn(e,n),t=new Tn(e,e.j,t,void 0),t.K=2,t.v=Ns(Dt(n)),n=!1,C.navigator&&C.navigator.sendBeacon&&(n=C.navigator.sendBeacon(t.v.toString(),"")),!n&&C.Image&&(new Image().src=t.v,n=!0),n||(t.g=Ic(t.l,null),t.g.da(t.v)),t.F=Date.now(),bn(t)}Tc(e)}function xs(e){e.g&&(di(e),e.g.cancel(),e.g=null)}function gc(e){xs(e),e.u&&(C.clearTimeout(e.u),e.u=null),os(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&C.clearTimeout(e.m),e.m=null)}function Ls(e){ic(e.h)||e.m||(e.m=!0,Va(e.Ja,e),e.C=0)}function Ff(e,t){return oc(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=En(lt(e.Ja,e,t),_c(e,e.C)),e.C++,!0)}E.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const r=new Tn(this,this.j,e,void 0);let i=this.s;if(this.S&&(i?(i=Na(i),Ra(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=yc(this,r,t),n=Dt(this.F),B(n,"RID",e),B(n,"CVER",22),this.D&&B(n,"X-HTTP-Session-Id",this.D),Sn(this,n),i&&(this.N?t="headers="+encodeURIComponent(String(pc(i)))+"&"+t:this.o&&li(n,this.o,i)),ai(this.h,r),this.Ya&&B(n,"TYPE","init"),this.O?(B(n,"$req",t),B(n,"SID","null"),r.Z=!0,kr(r,n,null)):kr(r,n,t),this.G=2}}else this.G==3&&(e?lo(this,e):this.i.length==0||ic(this.h)||lo(this))};function lo(e,t){var n;t?n=t.m:n=e.U++;const s=Dt(e.F);B(s,"SID",e.I),B(s,"RID",n),B(s,"AID",e.T),Sn(e,s),e.o&&e.s&&li(s,e.o,e.s),n=new Tn(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=yc(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),ai(e.h,n),kr(n,s,t)}function Sn(e,t){e.ia&&Xr(e.ia,function(n,s){B(t,s,n)}),e.l&&Za({},function(n,s){B(t,s,n)})}function yc(e,t,n){n=Math.min(e.i.length,n);var s=e.l?lt(e.l.Ra,e.l,e):null;t:{var r=e.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{Rf(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function vc(e){e.g||e.u||(e.Z=1,Va(e.Ia,e),e.A=0)}function fi(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=En(lt(e.Ia,e),_c(e,e.A)),e.A++,!0)}E.Ia=function(){if(this.u=null,wc(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=En(lt(this.eb,this),e)}};E.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,pt(10),xs(this),wc(this))};function di(e){e.B!=null&&(C.clearTimeout(e.B),e.B=null)}function wc(e){e.g=new Tn(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=Dt(e.sa);B(t,"RID","rpc"),B(t,"SID",e.I),B(t,"CI",e.L?"0":"1"),B(t,"AID",e.T),B(t,"TYPE","xmlhttp"),Sn(e,t),e.o&&e.s&&li(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Ns(Dt(t)),n.s=null,n.P=!0,Wa(n,e)}E.cb=function(){this.v!=null&&(this.v=null,xs(this),fi(this),pt(19))};function os(e){e.v!=null&&(C.clearTimeout(e.v),e.v=null)}function Ec(e,t){var n=null;if(e.g==t){os(e),di(e),e.g=null;var s=2}else if(Ar(e.h,t))n=t.D,ac(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;s=Ss(),it(s,new Ha(s,n)),Ls(e)}else vc(e);else if(r=t.o,r==3||r==0&&0<e.pa||!(s==1&&Ff(e,t)||s==2&&fi(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:Xt(e,5);break;case 4:Xt(e,10);break;case 3:Xt(e,6);break;default:Xt(e,2)}}}function _c(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Xt(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=lt(e.kb,e);n||(n=new Jt("//www.google.com/images/cleardot.gif"),C.location&&C.location.protocol=="http"||rs(n,"https"),Ns(n)),Of(n.toString(),s)}else pt(2);e.G=0,e.l&&e.l.va(t),Tc(e),gc(e)}E.kb=function(e){e?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function Tc(e){if(e.G=0,e.la=[],e.l){const t=cc(e.h);(t.length!=0||e.i.length!=0)&&(Zi(e.la,t),Zi(e.la,e.i),e.h.i.length=0,Qr(e.i),e.i.length=0),e.l.ua()}}function bc(e,t,n){var s=n instanceof Jt?Dt(n):new Jt(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),is(s,s.m);else{var r=C.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var i=new Jt(null,void 0);s&&rs(i,s),t&&(i.g=t),r&&is(i,r),n&&(i.l=n),s=i}return n=e.D,t=e.za,n&&t&&B(s,n,t),B(s,"VER",e.ma),Sn(e,s),s}function Ic(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new K(new In({jb:!0})):new K(e.ra),t.Ka(e.H),t}function Cc(){}E=Cc.prototype;E.xa=function(){};E.wa=function(){};E.va=function(){};E.ua=function(){};E.Ra=function(){};function as(){if(Ce&&!(10<=Number(Zh)))throw Error("Environmental error: no available transport.")}as.prototype.g=function(e,t){return new yt(e,t)};function yt(e,t){nt.call(this),this.g=new mc(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!es(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!es(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ue(this)}ot(yt,nt);yt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;pt(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=bc(e,null,e.V),Ls(e)};yt.prototype.close=function(){hi(this.g)};yt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=ei(e),e=n);t.i.push(new Df(t.ab++,e)),t.G==3&&Ls(t)};yt.prototype.M=function(){this.g.l=null,delete this.j,hi(this.g),delete this.g,yt.X.M.call(this)};function Sc(e){ii.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}ot(Sc,ii);function kc(){oi.call(this),this.status=1}ot(kc,oi);function Ue(e){this.g=e}ot(Ue,Cc);Ue.prototype.xa=function(){it(this.g,"a")};Ue.prototype.wa=function(e){it(this.g,new Sc(e))};Ue.prototype.va=function(e){it(this.g,new kc)};Ue.prototype.ua=function(){it(this.g,"b")};as.prototype.createWebChannel=as.prototype.g;yt.prototype.send=yt.prototype.u;yt.prototype.open=yt.prototype.m;yt.prototype.close=yt.prototype.close;ks.NO_ERROR=0;ks.TIMEOUT=8;ks.HTTP_ERROR=6;za.COMPLETE="complete";Ga.EventType=_n;_n.OPEN="a";_n.CLOSE="b";_n.ERROR="c";_n.MESSAGE="d";nt.prototype.listen=nt.prototype.N;K.prototype.listenOnce=K.prototype.O;K.prototype.getLastError=K.prototype.Oa;K.prototype.getLastErrorCode=K.prototype.Ea;K.prototype.getStatus=K.prototype.aa;K.prototype.getResponseJson=K.prototype.Sa;K.prototype.getResponseText=K.prototype.fa;K.prototype.send=K.prototype.da;K.prototype.setWithCredentials=K.prototype.Ka;var Vf=function(){return new as},Uf=function(){return Ss()},cr=ks,Bf=za,qf=ae,ho={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},$f=In,Fn=Ga,jf=K;const fo="@firebase/firestore";/**
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
 */class at{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
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
 */let Be="9.16.0";/**
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
 */const re=new Ea("@firebase/firestore");function po(){return re.logLevel}function _(e,...t){if(re.logLevel<=M.DEBUG){const n=t.map(pi);re.debug(`Firestore (${Be}): ${e}`,...n)}}function At(e,...t){if(re.logLevel<=M.ERROR){const n=t.map(pi);re.error(`Firestore (${Be}): ${e}`,...n)}}function Nr(e,...t){if(re.logLevel<=M.WARN){const n=t.map(pi);re.warn(`Firestore (${Be}): ${e}`,...n)}}function pi(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
*/var t}/**
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
 */function I(e="Unexpected state"){const t=`FIRESTORE (${Be}) INTERNAL ASSERTION FAILED: `+e;throw At(t),new Error(t)}function V(e,t){e||I()}function A(e,t){return e}/**
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
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends Fe{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Zt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Dc{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Kf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class Hf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class zf{constructor(t){this.t=t,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Zt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Zt,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Zt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(V(typeof s.accessToken=="string"),new Dc(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return V(t===null||typeof t=="string"),new at(t)}}class Gf{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(V(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Qf{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new Gf(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wf{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xf{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=i=>{i.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(V(typeof n.token=="string"),this.A=n.token,new Wf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Yf(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Ac{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=Yf(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function P(e,t){return e<t?-1:e>t?1:0}function Se(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
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
 */class Y{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new b(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new b(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new b(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new b(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Y.fromMillis(Date.now())}static fromDate(t){return Y.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new Y(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?P(this.nanoseconds,t.nanoseconds):P(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class k{constructor(t){this.timestamp=t}static fromTimestamp(t){return new k(t)}static min(){return new k(new Y(0,0))}static max(){return new k(new Y(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class un{constructor(t,n,s){n===void 0?n=0:n>t.length&&I(),s===void 0?s=t.length-n:s>t.length-n&&I(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return un.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof un?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class $ extends un{construct(t,n,s){return new $(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new b(y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new $(n)}static emptyPath(){return new $([])}}const Jf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends un{construct(t,n,s){return new ut(t,n,s)}static isValidIdentifier(t){return Jf.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new b(y.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new b(y.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new b(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new b(y.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(n)}static emptyPath(){return new ut([])}}/**
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
 */class T{constructor(t){this.path=t}static fromPath(t){return new T($.fromString(t))}static fromName(t){return new T($.fromString(t).popFirst(5))}static empty(){return new T($.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&$.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return $.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new T(new $(t.slice()))}}function Zf(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=k.fromTimestamp(s===1e9?new Y(n+1,0):new Y(n,s));return new qt(r,T.empty(),t)}function td(e){return new qt(e.readTime,e.key,-1)}class qt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new qt(k.min(),T.empty(),-1)}static max(){return new qt(k.max(),T.empty(),-1)}}function ed(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=T.comparator(e.documentKey,t.documentKey),n!==0?n:P(e.largestBatchId,t.largestBatchId))}/**
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
 */const nd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function kn(e){if(e.code!==y.FAILED_PRECONDITION||e.message!==nd)throw e;_("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new g((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):g.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):g.reject(n)}static resolve(t){return new g((n,s)=>{n(t)})}static reject(t){return new g((n,s)=>{s(t)})}static waitFor(t){return new g((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(t){let n=g.resolve(!1);for(const s of t)n=n.next(r=>r?g.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new g((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(t[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(t,n){return new g((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function Dn(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class mi{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}mi.at=-1;/**
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
 */class rd{constructor(t,n,s,r,i,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ln{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ln("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ln&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */function mo(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ce(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Nc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */function Ms(e){return e==null}function cs(e){return e===0&&1/e==-1/0}function id(e){return typeof e=="number"&&Number.isInteger(e)&&!cs(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */class ft{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new ft(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new ft(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return P(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const od=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $t(e){if(V(!!e),typeof e=="string"){let t=0;const n=od.exec(e);if(V(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:Q(e.seconds),nanos:Q(e.nanos)}}function Q(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function ke(e){return typeof e=="string"?ft.fromBase64String(e):ft.fromUint8Array(e)}/**
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
 */function Rc(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Oc(e){const t=e.mapValue.fields.__previous_value__;return Rc(t)?Oc(t):t}function hn(e){const t=$t(e.mapValue.fields.__local_write_time__.timestampValue);return new Y(t.seconds,t.nanos)}/**
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
 */const Vn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ie(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Rc(e)?4:ad(e)?9007199254740991:10:I()}function bt(e,t){if(e===t)return!0;const n=ie(e);if(n!==ie(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return hn(e).isEqual(hn(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=$t(s.timestampValue),o=$t(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return ke(s.bytesValue).isEqual(ke(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return Q(s.geoPointValue.latitude)===Q(r.geoPointValue.latitude)&&Q(s.geoPointValue.longitude)===Q(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Q(s.integerValue)===Q(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Q(s.doubleValue),o=Q(r.doubleValue);return i===o?cs(i)===cs(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return Se(e.arrayValue.values||[],t.arrayValue.values||[],bt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(mo(i)!==mo(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!bt(i[a],o[a])))return!1;return!0}(e,t);default:return I()}}function fn(e,t){return(e.values||[]).find(n=>bt(n,t))!==void 0}function De(e,t){if(e===t)return 0;const n=ie(e),s=ie(t);if(n!==s)return P(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return P(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=Q(r.integerValue||r.doubleValue),a=Q(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return go(e.timestampValue,t.timestampValue);case 4:return go(hn(e),hn(t));case 5:return P(e.stringValue,t.stringValue);case 6:return function(r,i){const o=ke(r),a=ke(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=P(o[c],a[c]);if(u!==0)return u}return P(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=P(Q(r.latitude),Q(i.latitude));return o!==0?o:P(Q(r.longitude),Q(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=De(o[c],a[c]);if(u)return u}return P(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===Vn.mapValue&&i===Vn.mapValue)return 0;if(r===Vn.mapValue)return 1;if(i===Vn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=P(a[l],u[l]);if(h!==0)return h;const f=De(o[a[l]],c[u[l]]);if(f!==0)return f}return P(a.length,u.length)}(e.mapValue,t.mapValue);default:throw I()}}function go(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return P(e,t);const n=$t(e),s=$t(t),r=P(n.seconds,s.seconds);return r!==0?r:P(n.nanos,s.nanos)}function Ae(e){return Rr(e)}function Rr(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=$t(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ke(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,T.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Rr(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Rr(s.fields[a])}`;return i+"}"}(e.mapValue):I();var t,n}function Or(e){return!!e&&"integerValue"in e}function gi(e){return!!e&&"arrayValue"in e}function yo(e){return!!e&&"nullValue"in e}function vo(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function $n(e){return!!e&&"mapValue"in e}function Xe(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ce(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Xe(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Xe(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ad(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class us{constructor(t,n){this.position=t,this.inclusive=n}}function wo(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=T.comparator(T.fromName(o.referenceValue),n.key):s=De(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Eo(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!bt(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class xc{}class X extends xc{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new ud(t,n,s):n==="array-contains"?new fd(t,s):n==="in"?new dd(t,s):n==="not-in"?new pd(t,s):n==="array-contains-any"?new md(t,s):new X(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new ld(t,s):new hd(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(De(n,this.value)):n!==null&&ie(this.value)===ie(n)&&this.matchesComparison(De(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class It extends xc{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new It(t,n)}matches(t){return Lc(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Lc(e){return e.op==="and"}function Mc(e){return cd(e)&&Lc(e)}function cd(e){for(const t of e.filters)if(t instanceof It)return!1;return!0}function xr(e){if(e instanceof X)return e.field.canonicalString()+e.op.toString()+Ae(e.value);if(Mc(e))return e.filters.map(t=>xr(t)).join(",");{const t=e.filters.map(n=>xr(n)).join(",");return`${e.op}(${t})`}}function Pc(e,t){return e instanceof X?function(n,s){return s instanceof X&&n.op===s.op&&n.field.isEqual(s.field)&&bt(n.value,s.value)}(e,t):e instanceof It?function(n,s){return s instanceof It&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Pc(i,s.filters[o]),!0):!1}(e,t):void I()}function Fc(e){return e instanceof X?function(t){return`${t.field.canonicalString()} ${t.op} ${Ae(t.value)}`}(e):e instanceof It?function(t){return t.op.toString()+" {"+t.getFilters().map(Fc).join(" ,")+"}"}(e):"Filter"}class ud extends X{constructor(t,n,s){super(t,n,s),this.key=T.fromName(s.referenceValue)}matches(t){const n=T.comparator(t.key,this.key);return this.matchesComparison(n)}}class ld extends X{constructor(t,n){super(t,"in",n),this.keys=Vc("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class hd extends X{constructor(t,n){super(t,"not-in",n),this.keys=Vc("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Vc(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>T.fromName(s.referenceValue))}class fd extends X{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return gi(n)&&fn(n.arrayValue,this.value)}}class dd extends X{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&fn(this.value.arrayValue,n)}}class pd extends X{constructor(t,n){super(t,"not-in",n)}matches(t){if(fn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!fn(this.value.arrayValue,n)}}class md extends X{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!gi(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>fn(this.value.arrayValue,s))}}/**
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
 */class Ye{constructor(t,n="asc"){this.field=t,this.dir=n}}function gd(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Z{constructor(t,n){this.comparator=t,this.root=n||rt.EMPTY}insert(t,n){return new Z(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(t){return new Z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,rt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Un(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Un(this.root,t,this.comparator,!1)}getReverseIterator(){return new Un(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Un(this.root,t,this.comparator,!0)}}class Un{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class rt{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s!=null?s:rt.RED,this.left=r!=null?r:rt.EMPTY,this.right=i!=null?i:rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new rt(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return rt.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,s,r){return this}insert(e,t,n){return new rt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class J{constructor(t){this.comparator=t,this.data=new Z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new _o(this.data.getIterator())}getIteratorFrom(t){return new _o(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof J)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new J(this.comparator);return n.data=t,n}}class _o{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class wt{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new wt([])}unionWith(t){let n=new J(ut.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new wt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Se(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class gt{constructor(t){this.value=t}static empty(){return new gt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!$n(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Xe(n)}setAll(t){let n=ut.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Xe(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());$n(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return bt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];$n(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){ce(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new gt(Xe(this.value))}}function Uc(e){const t=[];return ce(e.fields,(n,s)=>{const r=new ut([n]);if($n(s)){const i=Uc(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new wt(t)}/**
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
 */class ct{constructor(t,n,s,r,i,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new ct(t,0,k.min(),k.min(),k.min(),gt.empty(),0)}static newFoundDocument(t,n,s,r){return new ct(t,1,n,k.min(),s,r,0)}static newNoDocument(t,n){return new ct(t,2,n,k.min(),k.min(),gt.empty(),0)}static newUnknownDocument(t,n){return new ct(t,3,n,k.min(),k.min(),gt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(k.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=k.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ct&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class yd{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function To(e,t=null,n=[],s=[],r=null,i=null,o=null){return new yd(e,t,n,s,r,i,o)}function yi(e){const t=A(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>xr(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ms(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Ae(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Ae(s)).join(",")),t.ft=n}return t.ft}function vi(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!gd(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Pc(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Eo(e.startAt,t.startAt)&&Eo(e.endAt,t.endAt)}function Lr(e){return T.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class Ps{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function vd(e,t,n,s,r,i,o,a){return new Ps(e,t,n,s,r,i,o,a)}function wi(e){return new Ps(e)}function bo(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function wd(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Ed(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function _d(e){return e.collectionGroup!==null}function _e(e){const t=A(e);if(t.dt===null){t.dt=[];const n=Ed(t),s=wd(t);if(n!==null&&s===null)n.isKeyField()||t.dt.push(new Ye(n)),t.dt.push(new Ye(ut.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new Ye(ut.keyField(),i))}}}return t.dt}function Nt(e){const t=A(e);if(!t._t)if(t.limitType==="F")t._t=To(t.path,t.collectionGroup,_e(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of _e(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ye(i.field,o))}const s=t.endAt?new us(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new us(t.startAt.position,t.startAt.inclusive):null;t._t=To(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t._t}function Mr(e,t,n){return new Ps(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Fs(e,t){return vi(Nt(e),Nt(t))&&e.limitType===t.limitType}function Bc(e){return`${yi(Nt(e))}|lt:${e.limitType}`}function Pr(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Fc(s)).join(", ")}]`),Ms(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Ae(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Ae(s)).join(",")),`Target(${n})`}(Nt(e))}; limitType=${e.limitType})`}function Ei(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):T.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of _e(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=wo(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,_e(n),s)||n.endAt&&!function(r,i,o){const a=wo(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,_e(n),s))}(e,t)}function Td(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function qc(e){return(t,n)=>{let s=!1;for(const r of _e(e)){const i=bd(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function bd(e,t,n){const s=e.field.isKeyField()?T.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?De(a,c):I()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
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
 */function $c(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cs(t)?"-0":t}}function jc(e){return{integerValue:""+e}}function Id(e,t){return id(t)?jc(t):$c(e,t)}/**
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
 */class Vs{constructor(){this._=void 0}}function Cd(e,t,n){return e instanceof ls?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof Ne?Hc(e,t):e instanceof dn?zc(e,t):function(s,r){const i=Kc(s,r),o=Io(i)+Io(s.gt);return Or(i)&&Or(s.gt)?jc(o):$c(s.yt,o)}(e,t)}function Sd(e,t,n){return e instanceof Ne?Hc(e,t):e instanceof dn?zc(e,t):n}function Kc(e,t){return e instanceof hs?Or(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class ls extends Vs{}class Ne extends Vs{constructor(t){super(),this.elements=t}}function Hc(e,t){const n=Gc(t);for(const s of e.elements)n.some(r=>bt(r,s))||n.push(s);return{arrayValue:{values:n}}}class dn extends Vs{constructor(t){super(),this.elements=t}}function zc(e,t){let n=Gc(t);for(const s of e.elements)n=n.filter(r=>!bt(r,s));return{arrayValue:{values:n}}}class hs extends Vs{constructor(t,n){super(),this.yt=t,this.gt=n}}function Io(e){return Q(e.integerValue||e.doubleValue)}function Gc(e){return gi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */class kd{constructor(t,n){this.field=t,this.transform=n}}function Dd(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Ne&&s instanceof Ne||n instanceof dn&&s instanceof dn?Se(n.elements,s.elements,bt):n instanceof hs&&s instanceof hs?bt(n.gt,s.gt):n instanceof ls&&s instanceof ls}(e.transform,t.transform)}class Ad{constructor(t,n){this.version=t,this.transformResults=n}}class kt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new kt}static exists(t){return new kt(void 0,t)}static updateTime(t){return new kt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function jn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Us{}function Qc(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Xc(e.key,kt.none()):new Bs(e.key,e.data,kt.none());{const n=e.data,s=gt.empty();let r=new J(ut.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ue(e.key,s,new wt(r.toArray()),kt.none())}}function Nd(e,t,n){e instanceof Bs?function(s,r,i){const o=s.value.clone(),a=So(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof ue?function(s,r,i){if(!jn(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=So(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Wc(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function Je(e,t,n,s){return e instanceof Bs?function(r,i,o,a){if(!jn(r.precondition,i))return o;const c=r.value.clone(),u=ko(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof ue?function(r,i,o,a){if(!jn(r.precondition,i))return o;const c=ko(r.fieldTransforms,a,i),u=i.data;return u.setAll(Wc(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(e,t,n,s):function(r,i,o){return jn(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function Rd(e,t){let n=null;for(const s of e.fieldTransforms){const r=t.data.field(s.field),i=Kc(s.transform,r||null);i!=null&&(n===null&&(n=gt.empty()),n.set(s.field,i))}return n||null}function Co(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Se(n,s,(r,i)=>Dd(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Bs extends Us{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ue extends Us{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Wc(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function So(e,t,n){const s=new Map;V(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,Sd(o,a,n[r]))}return s}function ko(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Cd(i,o,t))}return s}class Xc extends Us{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Od extends Us{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class xd{constructor(t){this.count=t}}/**
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
 */var G,O;function Ld(e){switch(e){default:return I();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function Yc(e){if(e===void 0)return At("GRPC error has no .code"),y.UNKNOWN;switch(e){case G.OK:return y.OK;case G.CANCELLED:return y.CANCELLED;case G.UNKNOWN:return y.UNKNOWN;case G.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case G.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case G.INTERNAL:return y.INTERNAL;case G.UNAVAILABLE:return y.UNAVAILABLE;case G.UNAUTHENTICATED:return y.UNAUTHENTICATED;case G.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case G.NOT_FOUND:return y.NOT_FOUND;case G.ALREADY_EXISTS:return y.ALREADY_EXISTS;case G.PERMISSION_DENIED:return y.PERMISSION_DENIED;case G.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case G.ABORTED:return y.ABORTED;case G.OUT_OF_RANGE:return y.OUT_OF_RANGE;case G.UNIMPLEMENTED:return y.UNIMPLEMENTED;case G.DATA_LOSS:return y.DATA_LOSS;default:return I()}}(O=G||(G={}))[O.OK=0]="OK",O[O.CANCELLED=1]="CANCELLED",O[O.UNKNOWN=2]="UNKNOWN",O[O.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",O[O.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",O[O.NOT_FOUND=5]="NOT_FOUND",O[O.ALREADY_EXISTS=6]="ALREADY_EXISTS",O[O.PERMISSION_DENIED=7]="PERMISSION_DENIED",O[O.UNAUTHENTICATED=16]="UNAUTHENTICATED",O[O.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",O[O.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",O[O.ABORTED=10]="ABORTED",O[O.OUT_OF_RANGE=11]="OUT_OF_RANGE",O[O.UNIMPLEMENTED=12]="UNIMPLEMENTED",O[O.INTERNAL=13]="INTERNAL",O[O.UNAVAILABLE=14]="UNAVAILABLE",O[O.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class qe{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){ce(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return Nc(this.inner)}size(){return this.innerSize}}/**
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
 */const Md=new Z(T.comparator);function Rt(){return Md}const Jc=new Z(T.comparator);function Ge(...e){let t=Jc;for(const n of e)t=t.insert(n.key,n);return t}function Zc(e){let t=Jc;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Yt(){return Ze()}function tu(){return Ze()}function Ze(){return new qe(e=>e.toString(),(e,t)=>e.isEqual(t))}const Pd=new Z(T.comparator),Fd=new J(T.comparator);function R(...e){let t=Fd;for(const n of e)t=t.add(n);return t}const Vd=new J(P);function eu(){return Vd}/**
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
 */class qs{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const r=new Map;return r.set(t,An.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new qs(k.min(),r,eu(),Rt(),R())}}class An{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new An(s,n,R(),R(),R())}}/**
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
 */class Kn{constructor(t,n,s,r){this.It=t,this.removedTargetIds=n,this.key=s,this.Tt=r}}class nu{constructor(t,n){this.targetId=t,this.Et=n}}class su{constructor(t,n,s=ft.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Do{constructor(){this.At=0,this.Rt=No(),this.bt=ft.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(t){t.approximateByteSize()>0&&(this.vt=!0,this.bt=t)}Ct(){let t=R(),n=R(),s=R();return this.Rt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:I()}}),new An(this.bt,this.Pt,t,n,s)}xt(){this.vt=!1,this.Rt=No()}Nt(t,n){this.vt=!0,this.Rt=this.Rt.insert(t,n)}kt(t){this.vt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Ud{constructor(t){this.$t=t,this.Bt=new Map,this.Lt=Rt(),this.qt=Ao(),this.Ut=new J(P)}Kt(t){for(const n of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(n,t.Tt):this.Qt(n,t.key,t.Tt);for(const n of t.removedTargetIds)this.Qt(n,t.key,t.Tt)}jt(t){this.forEachTarget(t,n=>{const s=this.Wt(n);switch(t.state){case 0:this.zt(n)&&s.Dt(t.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(t.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(t.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(t){const n=t.targetId,s=t.Et.count,r=this.Yt(n);if(r){const i=r.target;if(Lr(i))if(s===0){const o=new T(i.path);this.Qt(n,o,ct.newNoDocument(o,k.min()))}else V(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(t){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Lr(a.target)){const c=new T(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,ct.newNoDocument(c,t))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=R();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(t));const r=new qs(t,n,this.Ut,this.Lt,s);return this.Lt=Rt(),this.qt=Ao(),this.Ut=new J(P),r}Gt(t,n){if(!this.zt(t))return;const s=this.te(t,n.key)?2:0;this.Wt(t).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(t))}Qt(t,n,s){if(!this.zt(t))return;const r=this.Wt(t);this.te(t,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(t)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(t){this.Bt.delete(t)}Xt(t){const n=this.Wt(t).Ct();return this.$t.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ot(t){this.Wt(t).Ot()}Wt(t){let n=this.Bt.get(t);return n||(n=new Do,this.Bt.set(t,n)),n}ee(t){let n=this.qt.get(t);return n||(n=new J(P),this.qt=this.qt.insert(t,n)),n}zt(t){const n=this.Yt(t)!==null;return n||_("WatchChangeAggregator","Detected inactive target",t),n}Yt(t){const n=this.Bt.get(t);return n&&n.Vt?null:this.$t.ne(t)}Ht(t){this.Bt.set(t,new Do),this.$t.getRemoteKeysForTarget(t).forEach(n=>{this.Qt(t,n,null)})}te(t,n){return this.$t.getRemoteKeysForTarget(t).has(n)}}function Ao(){return new Z(T.comparator)}function No(){return new Z(T.comparator)}/**
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
 */const Bd=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),qd=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),$d=(()=>({and:"AND",or:"OR"}))();class jd{constructor(t,n){this.databaseId=t,this.wt=n}}function fs(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ru(e,t){return e.wt?t.toBase64():t.toUint8Array()}function Kd(e,t){return fs(e,t.toTimestamp())}function Tt(e){return V(!!e),k.fromTimestamp(function(t){const n=$t(t);return new Y(n.seconds,n.nanos)}(e))}function _i(e,t){return function(n){return new $(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function iu(e){const t=$.fromString(e);return V(uu(t)),t}function Fr(e,t){return _i(e.databaseId,t.path)}function ur(e,t){const n=iu(t);if(n.get(1)!==e.databaseId.projectId)throw new b(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new b(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new T(ou(n))}function Vr(e,t){return _i(e.databaseId,t)}function Hd(e){const t=iu(e);return t.length===4?$.emptyPath():ou(t)}function Ur(e){return new $(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ou(e){return V(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Ro(e,t,n){return{name:Fr(e,t),fields:n.value.mapValue.fields}}function zd(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(c,u){return c.wt?(V(u===void 0||typeof u=="string"),ft.fromBase64String(u||"")):(V(u===void 0||u instanceof Uint8Array),ft.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?y.UNKNOWN:Yc(c.code);return new b(u,c.message||"")}(o);n=new su(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=ur(e,s.document.name),i=Tt(s.document.updateTime),o=s.document.createTime?Tt(s.document.createTime):k.min(),a=new gt({mapValue:{fields:s.document.fields}}),c=ct.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new Kn(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=ur(e,s.document),i=s.readTime?Tt(s.readTime):k.min(),o=ct.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Kn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=ur(e,s.document),i=s.removedTargetIds||[];n=new Kn([],i,r,null)}else{if(!("filter"in t))return I();{t.filter;const s=t.filter;s.targetId;const r=s.count||0,i=new xd(r),o=s.targetId;n=new nu(o,i)}}return n}function Gd(e,t){let n;if(t instanceof Bs)n={update:Ro(e,t.key,t.value)};else if(t instanceof Xc)n={delete:Fr(e,t.key)};else if(t instanceof ue)n={update:Ro(e,t.key,t.data),updateMask:np(t.fieldMask)};else{if(!(t instanceof Od))return I();n={verify:Fr(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof ls)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ne)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof dn)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof hs)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw I()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Kd(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:I()}(e,t.precondition)),n}function Qd(e,t){return e&&e.length>0?(V(t!==void 0),e.map(n=>function(s,r){let i=s.updateTime?Tt(s.updateTime):Tt(r);return i.isEqual(k.min())&&(i=Tt(r)),new Ad(i,s.transformResults||[])}(n,t))):[]}function Wd(e,t){return{documents:[Vr(e,t.path)]}}function Xd(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Vr(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Vr(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return cu(It.create(c,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:me(l.field),direction:Zd(l.dir)}}(u))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.wt||Ms(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function Yd(e){let t=Hd(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){V(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:t=t.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=au(l);return h instanceof It&&Mc(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Ye(ge(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Ms(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new us(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new us(f,h)}(n.endAt)),vd(t,r,o,i,a,"F",c,u)}function Jd(e,t){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function au(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=ge(t.unaryFilter.field);return X.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ge(t.unaryFilter.field);return X.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ge(t.unaryFilter.field);return X.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ge(t.unaryFilter.field);return X.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}(e):e.fieldFilter!==void 0?function(t){return X.create(ge(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return It.create(t.compositeFilter.filters.map(n=>au(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return I()}}(t.compositeFilter.op))}(e):I()}function Zd(e){return Bd[e]}function tp(e){return qd[e]}function ep(e){return $d[e]}function me(e){return{fieldPath:e.canonicalString()}}function ge(e){return ut.fromServerFormat(e.fieldPath)}function cu(e){return e instanceof X?function(t){if(t.op==="=="){if(vo(t.value))return{unaryFilter:{field:me(t.field),op:"IS_NAN"}};if(yo(t.value))return{unaryFilter:{field:me(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(vo(t.value))return{unaryFilter:{field:me(t.field),op:"IS_NOT_NAN"}};if(yo(t.value))return{unaryFilter:{field:me(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:me(t.field),op:tp(t.op),value:t.value}}}(e):e instanceof It?function(t){const n=t.getFilters().map(s=>cu(s));return n.length===1?n[0]:{compositeFilter:{op:ep(t.op),filters:n}}}(e):I()}function np(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function uu(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class sp{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&Nd(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Je(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Je(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=tu();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Qc(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(k.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),R())}isEqual(t){return this.batchId===t.batchId&&Se(this.mutations,t.mutations,(n,s)=>Co(n,s))&&Se(this.baseMutations,t.baseMutations,(n,s)=>Co(n,s))}}class Ti{constructor(t,n,s,r){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(t,n,s){V(t.mutations.length===s.length);let r=Pd;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Ti(t,n,s,r)}}/**
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
 */class rp{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class te{constructor(t,n,s,r,i=k.min(),o=k.min(),a=ft.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new te(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new te(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new te(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
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
 */class ip{constructor(t){this.ie=t}}function op(e){const t=Yd({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Mr(t,t.limit,"L"):t}/**
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
 */class ap{constructor(){this.Je=new cp}addToCollectionParentIndex(t,n){return this.Je.add(n),g.resolve()}getCollectionParents(t,n){return g.resolve(this.Je.getEntries(n))}addFieldIndex(t,n){return g.resolve()}deleteFieldIndex(t,n){return g.resolve()}getDocumentsMatchingTarget(t,n){return g.resolve(null)}getIndexType(t,n){return g.resolve(0)}getFieldIndexes(t,n){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,n){return g.resolve(qt.min())}getMinOffsetFromCollectionGroup(t,n){return g.resolve(qt.min())}updateCollectionGroup(t,n,s){return g.resolve()}updateIndexEntries(t,n){return g.resolve()}}class cp{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new J($.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new J($.comparator)).toArray()}}/**
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
 */class Re{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Re(0)}static vn(){return new Re(-1)}}/**
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
 */class up{constructor(){this.changes=new qe(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ct.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?g.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class lp{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class hp{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(s!==null&&Je(s.mutation,r,wt.empty(),Y.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,R()).next(()=>s))}getLocalViewOfDocuments(t,n,s=R()){const r=Yt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=Ge();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=Yt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,R()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=Rt();const o=Ze(),a=Ze();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof ue)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Je(l.mutation,u,l.mutation.getFieldMask(),Y.now())):o.set(u.key,wt.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new lp(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Ze();let r=new Z((o,a)=>o-a),i=R();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||wt.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||R()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=tu();l.forEach(f=>{if(!i.has(f)){const d=Qc(n.get(f),s.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return g.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return T.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):_d(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):g.resolve(Yt());let a=-1,c=i;return o.next(u=>g.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?g.resolve():this.remoteDocumentCache.getEntry(t,l).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,c,u,R())).next(l=>({batchId:a,changes:Zc(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new T(n)).next(s=>{let r=Ge();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=Ge();return this.indexManager.getCollectionParents(t,r).next(o=>g.forEach(o,a=>{const c=function(u,l){return new Ps(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(t,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,ct.newInvalidDocument(u)))});let o=Ge();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Je(u.mutation,c,wt.empty(),Y.now()),Ei(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class fp{constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return g.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Tt(s.createTime)}),g.resolve()}getNamedQuery(t,n){return g.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(s){return{name:s.name,query:op(s.bundledQuery),readTime:Tt(s.readTime)}}(n)),g.resolve()}}/**
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
 */class dp{constructor(){this.overlays=new Z(T.comparator),this.es=new Map}getOverlay(t,n){return g.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Yt();return g.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.oe(t,n,i)}),g.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),g.resolve()}getOverlaysForCollection(t,n,s){const r=Yt(),i=n.length+1,o=new T(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return g.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new Z((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=Yt(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Yt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return g.resolve(a)}oe(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new rp(n,s));let i=this.es.get(n);i===void 0&&(i=R(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
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
 */class bi{constructor(){this.ns=new J(et.ss),this.rs=new J(et.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const s=new et(t,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.cs(new et(t,n))}hs(t,n){t.forEach(s=>this.removeReference(s,n))}ls(t){const n=new T(new $([])),s=new et(n,t),r=new et(n,t+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new T(new $([])),s=new et(n,t),r=new et(n,t+1);let i=R();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new et(t,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class et{constructor(t,n){this.key=t,this._s=n}static ss(t,n){return T.comparator(t.key,n.key)||P(t._s,n._s)}static os(t,n){return P(t._s,n._s)||T.comparator(t.key,n.key)}}/**
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
 */class pp{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new J(et.ss)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sp(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new et(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,n){return g.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return g.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new et(n,0),r=new et(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),g.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new J(P);return n.forEach(r=>{const i=new et(r,0),o=new et(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),g.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;T.isDocumentKey(i)||(i=i.child(""));const o=new et(new T(i),0);let a=new J(P);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),g.resolve(this.Is(a))}Is(t){const n=[];return t.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){V(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return g.forEach(n.mutations,r=>{const i=new et(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.gs=s})}An(t){}containsKey(t,n){const s=new et(n,0),r=this.gs.firstAfterOrEqual(s);return g.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class mp{constructor(t){this.Es=t,this.docs=new Z(T.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return g.resolve(s?s.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(t,n){let s=Rt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ct.newInvalidDocument(r))}),g.resolve(s)}getAllFromCollection(t,n,s){let r=Rt();const i=new T(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||ed(td(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return g.resolve(r)}getAllFromCollectionGroup(t,n,s,r){I()}As(t,n){return g.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new gp(this)}getSize(t){return g.resolve(this.size)}}class gp extends up{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(t,r)):this.Yn.removeEntry(s)}),g.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
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
 */class yp{constructor(t){this.persistence=t,this.Rs=new qe(n=>yi(n),vi),this.lastRemoteSnapshotVersion=k.min(),this.highestTargetId=0,this.bs=0,this.Ps=new bi,this.targetCount=0,this.vs=Re.Pn()}forEachTarget(t,n){return this.Rs.forEach((s,r)=>n(r)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),g.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new Re(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,g.resolve()}updateTargetData(t,n){return this.Dn(n),g.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),g.waitFor(i).next(()=>r)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,n){const s=this.Rs.get(n)||null;return g.resolve(s)}addMatchingKeys(t,n,s){return this.Ps.us(n,s),g.resolve()}removeMatchingKeys(t,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),g.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),g.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Ps.ds(n);return g.resolve(s)}containsKey(t,n){return g.resolve(this.Ps.containsKey(n))}}/**
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
 */class vp{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new mi(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new yp(this),this.indexManager=new ap,this.remoteDocumentCache=function(s){return new mp(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new ip(n),this.Ns=new fp(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new dp,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Vs[t.toKey()];return s||(s=new pp(n,this.referenceDelegate),this.Vs[t.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,s){_("MemoryPersistence","Starting transaction:",t);const r=new wp(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(t,n){return g.or(Object.values(this.Vs).map(s=>()=>s.containsKey(t,n)))}}class wp extends sd{constructor(t){super(),this.currentSequenceNumber=t}}class Ii{constructor(t){this.persistence=t,this.Fs=new bi,this.$s=null}static Bs(t){return new Ii(t)}get Ls(){if(this.$s)return this.$s;throw I()}addReference(t,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),g.resolve()}removeReference(t,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),g.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),g.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}ks(){this.$s=new Set}Os(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Ls,s=>{const r=T.fromPath(s);return this.qs(t,r).next(i=>{i||n.removeEntry(r,k.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.qs(t,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}qs(t,n){return g.or([()=>g.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ms(t,n)])}}/**
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
 */class Ci{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Si=s,this.Di=r}static Ci(t,n){let s=R(),r=R();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ci(t,n.fromCache,s,r)}}/**
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
 */class Ep{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,s,r){return this.ki(t,n).next(i=>i||this.Oi(t,n,r,s)).next(i=>i||this.Mi(t,n))}ki(t,n){if(bo(n))return g.resolve(null);let s=Nt(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Mr(n,null,"F"),s=Nt(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=R(...i);return this.Ni.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(t,Mr(n,null,"F")):this.Bi(t,u,n,c)}))})))}Oi(t,n,s,r){return bo(n)||r.isEqual(k.min())?this.Mi(t,n):this.Ni.getDocuments(t,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(t,n):(po()<=M.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Pr(n)),this.Bi(t,o,n,Zf(r,-1)))})}Fi(t,n){let s=new J(qc(t));return n.forEach((r,i)=>{Ei(t,i)&&(s=s.add(i))}),s}$i(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(t,n){return po()<=M.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",Pr(n)),this.Ni.getDocumentsMatchingQuery(t,n,qt.min())}Bi(t,n,s,r){return this.Ni.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class _p{constructor(t,n,s,r){this.persistence=t,this.Li=n,this.yt=r,this.qi=new Z(P),this.Ui=new qe(i=>yi(i),vi),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(s)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new hp(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.qi))}}function Tp(e,t,n,s){return new _p(e,t,n,s)}async function lu(e,t){const n=A(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=R();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function bp(e,t){const n=A(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=g.resolve();return h.forEach(d=>{f=f.next(()=>u.getEntry(a,d)).next(p=>{const m=c.docVersions.get(d);V(m!==null),p.version.compareTo(m)<0&&(l.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),u.addEntry(p)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,t,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=R();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,r))})}function hu(e){const t=A(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function Ip(e,t){const n=A(e),s=t.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];t.targetChanges.forEach((l,h)=>{const f=r.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.has(h)?d=d.withResumeToken(ft.EMPTY_BYTE_STRING,k.min()).withLastLimboFreeSnapshotVersion(k.min()):l.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(l.resumeToken,s)),r=r.insert(h,d),function(p,m,v){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(f,d,l)&&a.push(n.Cs.updateTargetData(i,d))});let c=Rt(),u=R();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Cp(i,o,t.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!s.isEqual(k.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return g.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.qi=r,i))}function Cp(e,t,n){let s=R(),r=R();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=Rt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(k.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function Sp(e,t){const n=A(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function kp(e,t){const n=A(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,t).next(i=>i?(r=i,g.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new te(t,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(t,s.targetId)),s})}async function Br(e,t,n){const s=A(e),r=s.qi.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Dn(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.qi=s.qi.remove(t),s.Ui.delete(r.target)}function Oo(e,t,n){const s=A(e);let r=k.min(),i=R();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=A(a),h=l.Ui.get(u);return h!==void 0?g.resolve(l.qi.get(h)):l.Cs.getTargetData(c,u)}(s,o,Nt(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,t,n?r:k.min(),n?i:R())).next(a=>(Dp(s,Td(t),a),{documents:a,Hi:i})))}function Dp(e,t,n){let s=e.Ki.get(t)||k.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.Ki.set(t,s)}class xo{constructor(){this.activeTargetIds=eu()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ap{constructor(){this.Lr=new xo,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,n,s){this.qr[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new xo,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Np{Ur(t){}shutdown(){}}/**
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
 */class Lo{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Rp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Op{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
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
 */class xp extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,n,s,r,i){const o=this.ho(t,n);_("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(t,o,a,s).then(c=>(_("RestConnection","Received: ",c),c),c=>{throw Nr("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}_o(t,n,s,r,i,o){return this.ao(t,n,s,r,i)}lo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Be,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}ho(t,n){const s=Rp[t];return`${this.oo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,n,s,r){return new Promise((i,o)=>{const a=new jf;a.setWithCredentials(!0),a.listenOnce(Bf.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case cr.NO_ERROR:const u=a.getResponseJson();_("Connection","XHR received:",JSON.stringify(u)),i(u);break;case cr.TIMEOUT:_("Connection",'RPC "'+t+'" timed out'),o(new b(y.DEADLINE_EXCEEDED,"Request time out"));break;case cr.HTTP_ERROR:const l=a.getStatus();if(_("Connection",'RPC "'+t+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const d=function(p){const m=p.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(m)>=0?m:y.UNKNOWN}(f.status);o(new b(d,f.message))}else o(new b(y.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new b(y.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{_("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(t,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Vf(),o=Uf(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new $f({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");_("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const f=new Op({Hr:p=>{h?_("Connection","Not sending because WebChannel is closed:",p):(l||(_("Connection","Opening WebChannel transport."),u.open(),l=!0),_("Connection","WebChannel sending:",p),u.send(p))},Jr:()=>u.close()}),d=(p,m,v)=>{p.listen(m,w=>{try{v(w)}catch(S){setTimeout(()=>{throw S},0)}})};return d(u,Fn.EventType.OPEN,()=>{h||_("Connection","WebChannel transport opened.")}),d(u,Fn.EventType.CLOSE,()=>{h||(h=!0,_("Connection","WebChannel transport closed"),f.io())}),d(u,Fn.EventType.ERROR,p=>{h||(h=!0,Nr("Connection","WebChannel transport errored:",p),f.io(new b(y.UNAVAILABLE,"The operation could not be completed")))}),d(u,Fn.EventType.MESSAGE,p=>{var m;if(!h){const v=p.data[0];V(!!v);const w=v,S=w.error||((m=w[0])===null||m===void 0?void 0:m.error);if(S){_("Connection","WebChannel received error:",S);const D=S.status;let x=function(U){const st=G[U];if(st!==void 0)return Yc(st)}(D),dt=S.message;x===void 0&&(x=y.INTERNAL,dt="Unknown error status: "+D+" with message "+S.message),h=!0,f.io(new b(x,dt)),u.close()}else _("Connection","WebChannel received:",v),f.ro(v)}}),d(o,qf.STAT_EVENT,p=>{p.stat===ho.PROXY?_("Connection","Detected buffering proxy"):p.stat===ho.NOPROXY&&_("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function lr(){return typeof document<"u"?document:null}/**
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
 */function $s(e){return new jd(e,!0)}class fu{constructor(t,n,s=1e3,r=1.5,i=6e4){this.Hs=t,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&_("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class du{constructor(t,n,s,r,i,o,a,c){this.Hs=t,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new fu(t,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,t!==4?this.xo.reset():n&&n.code===y.RESOURCE_EXHAUSTED?(At(n.toString()),At("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{t(()=>{const r=new b(y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(t,n){const s=this.Ko(this.So);this.stream=this.jo(t,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(t){return _("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return n=>{this.Hs.enqueueAndForget(()=>this.So===t?n():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Lp extends du{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.xo.reset();const n=zd(this.yt,t),s=function(r){if(!("targetChange"in r))return k.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?k.min():i.readTime?Tt(i.readTime):k.min()}(t);return this.listener.Wo(n,s)}zo(t){const n={};n.database=Ur(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=Lr(a)?{documents:Wd(r,a)}:{query:Xd(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=ru(r,i.resumeToken):i.snapshotVersion.compareTo(k.min())>0&&(o.readTime=fs(r,i.snapshotVersion.toTimestamp())),o}(this.yt,t);const s=Jd(this.yt,t);s&&(n.labels=s),this.Bo(n)}Ho(t){const n={};n.database=Ur(this.yt),n.removeTarget=t,this.Bo(n)}}class Mp extends du{constructor(t,n,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(V(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const n=Qd(t.writeResults,t.commitTime),s=Tt(t.commitTime);return this.listener.Zo(s,n)}return V(!t.writeResults||t.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=Ur(this.yt),this.Bo(t)}Xo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Gd(this.yt,s))};this.Bo(n)}}/**
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
 */class Pp extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new b(y.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new b(y.UNKNOWN,r.toString())})}_o(t,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new b(y.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class Fp{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,t==="Online"&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(At(n),this.ou=!1):_("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class Vp{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{le(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=A(a);c._u.add(4),await Nn(c),c.gu.set("Unknown"),c._u.delete(4),await js(c)}(this))})}),this.gu=new Fp(s,r)}}async function js(e){if(le(e))for(const t of e.wu)await t(!0)}async function Nn(e){for(const t of e.wu)await t(!1)}function pu(e,t){const n=A(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Di(n)?ki(n):$e(n).ko()&&Si(n,t))}function mu(e,t){const n=A(e),s=$e(n);n.du.delete(t),s.ko()&&gu(n,t),n.du.size===0&&(s.ko()?s.Fo():le(n)&&n.gu.set("Unknown"))}function Si(e,t){e.yu.Ot(t.targetId),$e(e).zo(t)}function gu(e,t){e.yu.Ot(t),$e(e).Ho(t)}function ki(e){e.yu=new Ud({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),$e(e).start(),e.gu.uu()}function Di(e){return le(e)&&!$e(e).No()&&e.du.size>0}function le(e){return A(e)._u.size===0}function yu(e){e.yu=void 0}async function Up(e){e.du.forEach((t,n)=>{Si(e,t)})}async function Bp(e,t){yu(e),Di(e)?(e.gu.hu(t),ki(e)):e.gu.set("Unknown")}async function qp(e,t,n){if(e.gu.set("Online"),t instanceof su&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(e,t)}catch(s){_("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await ds(e,s)}else if(t instanceof Kn?e.yu.Kt(t):t instanceof nu?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(k.min()))try{const s=await hu(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.du.get(c);u&&r.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(ft.EMPTY_BYTE_STRING,c.snapshotVersion)),gu(r,a);const u=new te(c.target,a,1,c.sequenceNumber);Si(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){_("RemoteStore","Failed to raise snapshot:",s),await ds(e,s)}}async function ds(e,t,n){if(!Dn(t))throw t;e._u.add(1),await Nn(e),e.gu.set("Offline"),n||(n=()=>hu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await js(e)})}function vu(e,t){return t().catch(n=>ds(e,n,t))}async function Ks(e){const t=A(e),n=jt(t);let s=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;$p(t);)try{const r=await Sp(t.localStore,s);if(r===null){t.fu.length===0&&n.Fo();break}s=r.batchId,jp(t,r)}catch(r){await ds(t,r)}wu(t)&&Eu(t)}function $p(e){return le(e)&&e.fu.length<10}function jp(e,t){e.fu.push(t);const n=jt(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function wu(e){return le(e)&&!jt(e).No()&&e.fu.length>0}function Eu(e){jt(e).start()}async function Kp(e){jt(e).eu()}async function Hp(e){const t=jt(e);for(const n of e.fu)t.Xo(n.mutations)}async function zp(e,t,n){const s=e.fu.shift(),r=Ti.from(s,t,n);await vu(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await Ks(e)}async function Gp(e,t){t&&jt(e).Yo&&await async function(n,s){if(r=s.code,Ld(r)&&r!==y.ABORTED){const i=n.fu.shift();jt(n).Mo(),await vu(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ks(n)}var r}(e,t),wu(e)&&Eu(e)}async function Mo(e,t){const n=A(e);n.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const s=le(n);n._u.add(3),await Nn(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await js(n)}async function Qp(e,t){const n=A(e);t?(n._u.delete(2),await js(n)):t||(n._u.add(2),await Nn(n),n.gu.set("Unknown"))}function $e(e){return e.pu||(e.pu=function(t,n,s){const r=A(t);return r.su(),new Lp(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(e.datastore,e.asyncQueue,{Yr:Up.bind(null,e),Zr:Bp.bind(null,e),Wo:qp.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Mo(),Di(e)?ki(e):e.gu.set("Unknown")):(await e.pu.stop(),yu(e))})),e.pu}function jt(e){return e.Iu||(e.Iu=function(t,n,s){const r=A(t);return r.su(),new Mp(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(e.datastore,e.asyncQueue,{Yr:Kp.bind(null,e),Zr:Gp.bind(null,e),tu:Hp.bind(null,e),Zo:zp.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Mo(),await Ks(e)):(await e.Iu.stop(),e.fu.length>0&&(_("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
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
 */class Ai{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new Ai(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(y.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ni(e,t){if(At("AsyncQueue",`${t}: ${e}`),Dn(e))return new b(y.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Te{constructor(t){this.comparator=t?(n,s)=>t(n,s)||T.comparator(n.key,s.key):(n,s)=>T.comparator(n.key,s.key),this.keyedMap=Ge(),this.sortedSet=new Z(this.comparator)}static emptySet(t){return new Te(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Te)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Te;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class Po{constructor(){this.Tu=new Z(T.comparator)}track(t){const n=t.doc.key,s=this.Tu.get(n);s?t.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,t):t.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Tu=this.Tu.remove(n):t.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):I():this.Tu=this.Tu.insert(n,t)}Eu(){const t=[];return this.Tu.inorderTraversal((n,s)=>{t.push(s)}),t}}class Oe{constructor(t,n,s,r,i,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Oe(t,n,Te.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Fs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Wp{constructor(){this.Au=void 0,this.listeners=[]}}class Xp{constructor(){this.queries=new qe(t=>Bc(t),Fs),this.onlineState="Unknown",this.Ru=new Set}}async function Yp(e,t){const n=A(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Wp),r)try{i.Au=await n.onListen(s)}catch(o){const a=Ni(o,`Initialization of query '${Pr(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.bu(n.onlineState),i.Au&&t.Pu(i.Au)&&Ri(n)}async function Jp(e,t){const n=A(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Zp(e,t){const n=A(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Ri(n)}function tm(e,t,n){const s=A(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function Ri(e){e.Ru.forEach(t=>{t.next()})}class em{constructor(t,n,s){this.query=t,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new Oe(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),n=!0):this.Cu(t,this.onlineState)&&(this.xu(t),n=!0),this.Su=t,n}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),n=!0),n}Cu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Du(t){if(t.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(t){t=Oe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}/**
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
 */class _u{constructor(t){this.key=t}}class Tu{constructor(t){this.key=t}}class nm{constructor(t,n){this.query=t,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=R(),this.mutatedKeys=R(),this.Gu=qc(t),this.Qu=new Te(this.Gu)}get ju(){return this.qu}Wu(t,n){const s=n?n.zu:new Po,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((l,h)=>{const f=r.get(l),d=Ei(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),m=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let v=!1;f&&d?f.data.isEqual(d.data)?p!==m&&(s.track({type:3,doc:d}),v=!0):this.Hu(f,d)||(s.track({type:2,doc:d}),v=!0,(c&&this.Gu(d,c)>0||u&&this.Gu(d,u)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),v=!0):f&&!d&&(s.track({type:1,doc:f}),v=!0,(c||u)&&(a=!0)),v&&(d?(o=o.add(d),i=m?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const i=t.zu.Eu();i.sort((u,l)=>function(h,f){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return d(h)-d(f)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new Oe(this.query,t.Qu,r,i,t.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Po,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.qu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=R(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return t.forEach(s=>{this.Ku.has(s)||n.push(new Tu(s))}),this.Ku.forEach(s=>{t.has(s)||n.push(new _u(s))}),n}tc(t){this.qu=t.Hi,this.Ku=R();const n=this.Wu(t.documents);return this.applyChanges(n,!0)}ec(){return Oe.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class sm{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class rm{constructor(t){this.key=t,this.nc=!1}}class im{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new qe(a=>Bc(a),Fs),this.rc=new Map,this.oc=new Set,this.uc=new Z(T.comparator),this.cc=new Map,this.ac=new bi,this.hc={},this.lc=new Map,this.fc=Re.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function om(e,t){const n=gm(e);let s,r;const i=n.ic.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await kp(n.localStore,Nt(t));n.isPrimaryClient&&pu(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await am(n,t,s,a==="current",o.resumeToken)}return r}async function am(e,t,n,s,r){e._c=(h,f,d)=>async function(p,m,v,w){let S=m.view.Wu(v);S.$i&&(S=await Oo(p.localStore,m.query,!1).then(({documents:dt})=>m.view.Wu(dt,S)));const D=w&&w.targetChanges.get(m.targetId),x=m.view.applyChanges(S,p.isPrimaryClient,D);return Vo(p,m.targetId,x.Xu),x.snapshot}(e,h,f,d);const i=await Oo(e.localStore,t,!0),o=new nm(t,i.Hi),a=o.Wu(i.documents),c=An.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",r),u=o.applyChanges(a,e.isPrimaryClient,c);Vo(e,n,u.Xu);const l=new sm(t,n,o);return e.ic.set(t,l),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),u.snapshot}async function cm(e,t){const n=A(e),s=n.ic.get(t),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Fs(i,t))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Br(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),mu(n.remoteStore,s.targetId),qr(n,s.targetId)}).catch(kn)):(qr(n,s.targetId),await Br(n.localStore,s.targetId,!0))}async function um(e,t,n){const s=ym(e);try{const r=await function(i,o){const a=A(i),c=Y.now(),u=o.reduce((f,d)=>f.add(d.key),R());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=Rt(),p=R();return a.Gi.getEntries(f,u).next(m=>{d=m,d.forEach((v,w)=>{w.isValidDocument()||(p=p.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(m=>{l=m;const v=[];for(const w of o){const S=Rd(w,l.get(w.key).overlayedDocument);S!=null&&v.push(new ue(w.key,S,Uc(S.value.mapValue),kt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,v,o)}).next(m=>{h=m;const v=m.applyToLocalDocumentSet(l,p);return a.documentOverlayCache.saveOverlays(f,m.batchId,v)})}).then(()=>({batchId:h.batchId,changes:Zc(l)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new Z(P)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Rn(s,r.changes),await Ks(s.remoteStore)}catch(r){const i=Ni(r,"Failed to persist write");n.reject(i)}}async function bu(e,t){const n=A(e);try{const s=await Ip(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(V(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?V(o.nc):r.removedDocuments.size>0&&(V(o.nc),o.nc=!1))}),await Rn(n,s,t)}catch(s){await kn(s)}}function Fo(e,t,n){const s=A(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=A(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&Ri(a)}(s.eventManager,t),r.length&&s.sc.Wo(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function lm(e,t,n){const s=A(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.cc.get(t),i=r&&r.key;if(i){let o=new Z(T.comparator);o=o.insert(i,ct.newNoDocument(i,k.min()));const a=R().add(i),c=new qs(k.min(),new Map,new J(P),o,a);await bu(s,c),s.uc=s.uc.remove(i),s.cc.delete(t),Oi(s)}else await Br(s.localStore,t,!1).then(()=>qr(s,t,n)).catch(kn)}async function hm(e,t){const n=A(e),s=t.batch.batchId;try{const r=await bp(n.localStore,t);Cu(n,s,null),Iu(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Rn(n,r)}catch(r){await kn(r)}}async function fm(e,t,n){const s=A(e);try{const r=await function(i,o){const a=A(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(V(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,t);Cu(s,t,n),Iu(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Rn(s,r)}catch(r){await kn(r)}}function Iu(e,t){(e.lc.get(t)||[]).forEach(n=>{n.resolve()}),e.lc.delete(t)}function Cu(e,t,n){const s=A(e);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),s.hc[s.currentUser.toKey()]=r}}function qr(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.rc.get(t))e.ic.delete(s),n&&e.sc.wc(s,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(s=>{e.ac.containsKey(s)||Su(e,s)})}function Su(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);n!==null&&(mu(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),Oi(e))}function Vo(e,t,n){for(const s of n)s instanceof _u?(e.ac.addReference(s.key,t),dm(e,s)):s instanceof Tu?(_("SyncEngine","Document no longer in limbo: "+s.key),e.ac.removeReference(s.key,t),e.ac.containsKey(s.key)||Su(e,s.key)):I()}function dm(e,t){const n=t.key,s=n.path.canonicalString();e.uc.get(n)||e.oc.has(s)||(_("SyncEngine","New document in limbo: "+n),e.oc.add(s),Oi(e))}function Oi(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new T($.fromString(t)),s=e.fc.next();e.cc.set(s,new rm(n)),e.uc=e.uc.insert(n,s),pu(e.remoteStore,new te(Nt(wi(n.path)),s,2,mi.at))}}async function Rn(e,t,n){const s=A(e),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,t,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=Ci.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const u=A(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>g.forEach(c,h=>g.forEach(h.Si,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>g.forEach(h.Di,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!Dn(l))throw l;_("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.qi.get(h),d=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(d);u.qi=u.qi.insert(h,p)}}}(s.localStore,i))}async function pm(e,t){const n=A(e);if(!n.currentUser.isEqual(t)){_("SyncEngine","User change. New user:",t.toKey());const s=await lu(n.localStore,t);n.currentUser=t,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new b(y.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Rn(n,s.ji)}}function mm(e,t){const n=A(e),s=n.cc.get(t);if(s&&s.nc)return R().add(s.key);{let r=R();const i=n.rc.get(t);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function gm(e){const t=A(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=bu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=mm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=lm.bind(null,t),t.sc.Wo=Zp.bind(null,t.eventManager),t.sc.wc=tm.bind(null,t.eventManager),t}function ym(e){const t=A(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=hm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=fm.bind(null,t),t}class vm{constructor(){this.synchronizeTabs=!1}async initialize(t){this.yt=$s(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,n){return null}Ec(t,n){return null}Ic(t){return Tp(this.persistence,new Ep,t.initialUser,this.yt)}yc(t){return new vp(Ii.Bs,this.yt)}gc(t){return new Ap}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Fo(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=pm.bind(null,this.syncEngine),await Qp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Xp}createDatastore(t){const n=$s(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new xp(r));var r;return function(i,o,a,c){return new Pp(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>Fo(this.syncEngine,a,0),o=Lo.C()?new Lo:new Np,new Vp(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,c,u){const l=new im(s,r,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=A(t);_("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Nn(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function Em(e,t,n){if(!n)throw new b(y.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function _m(e,t,n,s){if(t===!0&&s===!0)throw new b(y.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Uo(e){if(!T.isDocumentKey(e))throw new b(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function xi(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function be(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new b(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xi(e);throw new b(y.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */const Bo=new Map;class qo{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new b(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new b(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,_m("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class Li{constructor(t,n,s,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new b(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new b(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qo(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Kf;switch(n.type){case"gapi":const s=n.client;return new Qf(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new b(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Bo.get(t);n&&(_("ComponentProvider","Removing Datastore"),Bo.delete(t),n.terminate())}(this),Promise.resolve()}}function Tm(e,t,n,s={}){var r;const i=(e=be(e,Li))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==t&&Nr("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=at.MOCK_USER;else{o=Cl(s.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new b(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new at(c)}e._authCredentials=new Hf(new Dc(o,a))}}/**
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
 */class vt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new vt(this.firestore,t,this._key)}}class Hs{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Hs(this.firestore,t,this._query)}}class pn extends Hs{constructor(t,n,s){super(t,n,wi(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new vt(this.firestore,null,new T(t))}withConverter(t){return new pn(this.firestore,t,this._path)}}function bm(e,t,...n){if(e=Bt(e),arguments.length===1&&(t=Ac.R()),Em("doc","path",t),e instanceof Li){const s=$.fromString(t,...n);return Uo(s),new vt(e,null,new T(s))}{if(!(e instanceof vt||e instanceof pn))throw new b(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child($.fromString(t,...n));return Uo(s),new vt(e.firestore,e instanceof pn?e.converter:null,new T(s))}}/**
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
 */class Im{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):At("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class Cm{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=at.UNAUTHENTICATED,this.clientId=Ac.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{_("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(_("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new b(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Ni(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Sm(e,t){e.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await lu(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function km(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Dm(e);_("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>Mo(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>Mo(t.remoteStore,i)),e.onlineComponents=t}async function Dm(e){return e.offlineComponents||(_("FirestoreClient","Using default OfflineComponentProvider"),await Sm(e,new vm)),e.offlineComponents}async function ku(e){return e.onlineComponents||(_("FirestoreClient","Using default OnlineComponentProvider"),await km(e,new wm)),e.onlineComponents}function Am(e){return ku(e).then(t=>t.syncEngine)}async function $o(e){const t=await ku(e),n=t.eventManager;return n.onListen=om.bind(null,t.syncEngine),n.onUnlisten=cm.bind(null,t.syncEngine),n}class Nm{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new fu(this,"async_queue_retry"),this.Wc=()=>{const n=lr();n&&_("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=lr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const n=lr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Zt;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!Dn(t))throw t;_("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw At("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(t,n,s){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const r=Ai.createAndSchedule(this,t,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&I()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.Uc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.Uc.indexOf(t);this.Uc.splice(n,1)}}function jo(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(e,["next","error","complete"])}class ps extends Li{constructor(t,n,s,r){super(t,n,s,r),this.type="firestore",this._queue=new Nm,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Au(this),this._firestoreClient.terminate()}}function Rm(e,t){const n=typeof e=="object"?e:Ah(),s=typeof e=="string"?e:t||"(default)",r=Ch(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Tl("firestore");i&&Tm(r,...i)}return r}function Du(e){return e._firestoreClient||Au(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Au(e){var t;const n=e._freezeSettings(),s=function(r,i,o,a){return new rd(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Cm(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
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
 */class xe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new xe(ft.fromBase64String(t))}catch(n){throw new b(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new xe(ft.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class zs{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new b(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Gs{constructor(t){this._methodName=t}}/**
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
 */class Mi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new b(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new b(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return P(this._lat,t._lat)||P(this._long,t._long)}}/**
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
 */const Om=/^__.*__$/;class Nu{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new ue(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ru(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class Qs{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new Qs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ia({path:s,oa:!1});return r.ua(t),r}ca(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ia({path:s,oa:!1});return r.na(),r}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return ms(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(t.length===0)throw this.ha("Document fields must not be empty");if(Ru(this.sa)&&Om.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class xm{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.yt=s||$s(t)}da(t,n,s,r=!1){return new Qs({sa:t,methodName:n,fa:s,path:ut.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Lm(e){const t=e._freezeSettings(),n=$s(e._databaseId);return new xm(e._databaseId,!!t.ignoreUndefinedProperties,n)}class Ws extends Gs{_toFieldTransform(t){if(t.sa!==2)throw t.sa===1?t.ha(`${this._methodName}() can only appear at the top level of your update data`):t.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ws}}function Mm(e,t,n){return new Qs({sa:3,fa:t.settings.fa,methodName:e._methodName,oa:n},t.databaseId,t.yt,t.ignoreUndefinedProperties)}class Pm extends Gs{constructor(t,n){super(t),this._a=n}_toFieldTransform(t){const n=Mm(this,t,!0),s=this._a.map(i=>On(i,n)),r=new Ne(s);return new kd(t.path,r)}isEqual(t){return this===t}}function Fm(e,t,n,s){const r=e.da(1,t,n);xu("Data must be an object, but it was:",r,s);const i=[],o=gt.empty();ce(s,(c,u)=>{const l=Pi(t,c,n);u=Bt(u);const h=r.ca(l);if(u instanceof Ws)i.push(l);else{const f=On(u,h);f!=null&&(i.push(l),o.set(l,f))}});const a=new wt(i);return new Nu(o,a,r.fieldTransforms)}function Vm(e,t,n,s,r,i){const o=e.da(1,t,n),a=[Ko(t,s,n)],c=[r];if(i.length%2!=0)throw new b(y.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Ko(t,i[f])),c.push(i[f+1]);const u=[],l=gt.empty();for(let f=a.length-1;f>=0;--f)if(!qm(u,a[f])){const d=a[f];let p=c[f];p=Bt(p);const m=o.ca(d);if(p instanceof Ws)u.push(d);else{const v=On(p,m);v!=null&&(u.push(d),l.set(d,v))}}const h=new wt(u);return new Nu(l,h,o.fieldTransforms)}function On(e,t){if(Ou(e=Bt(e)))return xu("Unsupported field value:",t,e),Um(e,t);if(e instanceof Gs)return function(n,s){if(!Ru(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&t.sa!==4)throw t.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=On(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=Bt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Id(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Y.fromDate(n);return{timestampValue:fs(s.yt,r)}}if(n instanceof Y){const r=new Y(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:fs(s.yt,r)}}if(n instanceof Mi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof xe)return{bytesValue:ru(s.yt,n._byteString)};if(n instanceof vt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:_i(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${xi(n)}`)}(e,t)}function Um(e,t){const n={};return Nc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ce(e,(s,r)=>{const i=On(r,t.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Ou(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Y||e instanceof Mi||e instanceof xe||e instanceof vt||e instanceof Gs)}function xu(e,t,n){if(!Ou(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=xi(n);throw s==="an object"?t.ha(e+" a custom object"):t.ha(e+" "+s)}}function Ko(e,t,n){if((t=Bt(t))instanceof zs)return t._internalPath;if(typeof t=="string")return Pi(e,t);throw ms("Field path arguments must be of type string or ",e,!1,void 0,n)}const Bm=new RegExp("[~\\*/\\[\\]]");function Pi(e,t,n){if(t.search(Bm)>=0)throw ms(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new zs(...t.split("."))._internalPath}catch{throw ms(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ms(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new b(y.INVALID_ARGUMENT,a+e+c)}function qm(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class Lu{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new $m(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Mu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $m extends Lu{data(){return super.data()}}function Mu(e,t){return typeof t=="string"?Pi(e,t):t instanceof zs?t._internalPath:t._delegate._internalPath}/**
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
 */function jm(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new b(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Km{convertValue(t,n="none"){switch(ie(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Q(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(ke(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){const s={};return ce(t.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new Mi(Q(t.latitude),Q(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Oc(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(hn(t));default:return null}}convertTimestamp(t){const n=$t(t);return new Y(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=$.fromString(t);V(uu(s));const r=new ln(s.get(1),s.get(3)),i=new T(s.popFirst(5));return r.isEqual(n)||At(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class Qe{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Pu extends Lu{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Hn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Mu("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Hn extends Pu{data(t={}){return super.data(t)}}class Hm{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new Qe(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Hn(this._firestore,this._userDataWriter,s.key,s,new Qe(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new b(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Hn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Qe(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Hn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Qe(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:zm(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function zm(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}class Fu extends Km{constructor(t){super(),this.firestore=t}convertBytes(t){return new xe(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function Gm(e,t,n,...s){e=be(e,vt);const r=be(e.firestore,ps),i=Lm(r);let o;return o=typeof(t=Bt(t))=="string"||t instanceof zs?Vm(i,"updateDoc",e._key,t,n,s):Fm(i,"updateDoc",e._key,t),Wm(r,[o.toMutation(e._key,kt.exists(!0))])}function Qm(e,...t){var n,s,r;e=Bt(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||jo(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(jo(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),t[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,u,l;if(e instanceof vt)u=be(e.firestore,ps),l=wi(e._key.path),c={next:h=>{t[o]&&t[o](Xm(u,e,h))},error:t[o+1],complete:t[o+2]};else{const h=be(e,Hs);u=be(h.firestore,ps),l=h._query;const f=new Fu(u);c={next:d=>{t[o]&&t[o](new Hm(u,f,h,d))},error:t[o+1],complete:t[o+2]},jm(e._query)}return function(h,f,d,p){const m=new Im(p),v=new em(f,m,d);return h.asyncQueue.enqueueAndForget(async()=>Yp(await $o(h),v)),()=>{m.bc(),h.asyncQueue.enqueueAndForget(async()=>Jp(await $o(h),v))}}(Du(u),l,a,c)}function Wm(e,t){return function(n,s){const r=new Zt;return n.asyncQueue.enqueueAndForget(async()=>um(await Am(n),s,r)),r.promise}(Du(e),t)}function Xm(e,t,n){const s=n.docs.get(t._key),r=new Fu(e);return new Pu(e,r,t._key,s,new Qe(n.hasPendingWrites,n.fromCache),t.converter)}function Ym(...e){return new Pm("arrayUnion",e)}(function(e,t=!0){(function(n){Be=n})(Dh),Zn(new en("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new ps(new zf(n.getProvider("auth-internal")),new Xf(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new b(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ln(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Ee(fo,"3.8.1",e),Ee(fo,"3.8.1","esm2017")})();const Jm={apiKey:"AIzaSyDbBV7DT8DNmxyLPUB_w0skCx6bQjDIDhE",authDomain:"nocontextquotes-86d30.firebaseapp.com",projectId:"nocontextquotes-86d30",storageBucket:"nocontextquotes-86d30.appspot.com",messagingSenderId:"704558739601",appId:"1:704558739601:web:f92bb50736b7c0cb360f30",measurementId:"G-RHFY5NDBMG"},Zm=ba(Jm),tg=Rm(Zm);function Vu(e){const t=e-1;return t*t*t+1}function eg(e,{delay:t=0,duration:n=400,easing:s=Le}={}){const r=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:s,css:i=>`opacity: ${i*r}`}}function ng(e,{delay:t=0,duration:n=400,easing:s=Vu,x:r=0,y:i=0,opacity:o=0}={}){const a=getComputedStyle(e),c=+a.opacity,u=a.transform==="none"?"":a.transform,l=c*(1-o);return{delay:t,duration:n,easing:s,css:(h,f)=>`
			transform: ${u} translate(${(1-h)*r}px, ${(1-h)*i}px);
			opacity: ${c-l*f}`}}function sg(e,{from:t,to:n},s={}){const r=getComputedStyle(e),i=r.transform==="none"?"":r.transform,[o,a]=r.transformOrigin.split(" ").map(parseFloat),c=t.left+t.width*o/n.width-(n.left+o),u=t.top+t.height*a/n.height-(n.top+a),{delay:l=0,duration:h=d=>Math.sqrt(d)*120,easing:f=Vu}=s;return{delay:l,duration:oe(h)?h(Math.sqrt(c*c+u*u)):h,easing:f,css:(d,p)=>{const m=p*c,v=p*u,w=d+p*t.width/n.width,S=d+p*t.height/n.height;return`transform: ${i} translate(${m}px, ${v}px) scale(${w}, ${S});`}}}const fe=[];function Uu(e,t=N){let n;const s=new Set;function r(a){if(Kt(e,a)&&(e=a,n)){const c=!fe.length;for(const u of s)u[1](),fe.push(u,e);if(c){for(let u=0;u<fe.length;u+=2)fe[u][0](fe[u+1]);fe.length=0}}}function i(a){r(a(e))}function o(a,c=N){const u=[a,c];return s.add(u),s.size===1&&(n=t(r)||N),a(e),()=>{s.delete(u),s.size===0&&(n(),n=null)}}return{set:r,update:i,subscribe:o}}const rg={duration:4e3,initial:1,next:0,pausable:!1,dismissable:!0,reversed:!1,intro:{x:256}},ig=()=>{const{subscribe:e,update:t}=Uu([]);let n=0;const s={},r=u=>u instanceof Object;return{subscribe:e,push:(u,l={})=>{const h={target:"default",...r(u)?u:{...l,msg:u}},f=s[h.target]||{},d={...rg,...f,...h,theme:{...f.theme,...h.theme},classes:[...f.classes||[],...h.classes||[]],id:++n};return t(p=>d.reversed?[...p,d]:[d,...p]),n},pop:u=>{t(l=>{if(!l.length||u===0)return[];if(r(u))return l.filter(f=>u(f));const h=u||Math.max(...l.map(f=>f.id));return l.filter(f=>f.id!==h)})},set:(u,l={})=>{const h=r(u)?{...u}:{...l,id:u};t(f=>{const d=f.findIndex(p=>p.id===h.id);return d>-1&&(f[d]={...f[d],...h}),f})},_init:(u="default",l={})=>(s[u]=l,s)}},mn=ig();function Ho(e){return Object.prototype.toString.call(e)==="[object Date]"}function $r(e,t){if(e===t||e!==e)return()=>e;const n=typeof e;if(n!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const s=t.map((r,i)=>$r(e[i],r));return r=>s.map(i=>i(r))}if(n==="object"){if(!e||!t)throw new Error("Object cannot be null");if(Ho(e)&&Ho(t)){e=e.getTime(),t=t.getTime();const i=t-e;return o=>new Date(e+o*i)}const s=Object.keys(t),r={};return s.forEach(i=>{r[i]=$r(e[i],t[i])}),i=>{const o={};return s.forEach(a=>{o[a]=r[a](i)}),o}}if(n==="number"){const s=t-e;return r=>e+r*s}throw new Error(`Cannot interpolate ${n} values`)}function og(e,t={}){const n=Uu(e);let s,r=e;function i(o,a){if(e==null)return n.set(e=o),Promise.resolve();r=o;let c=s,u=!1,{delay:l=0,duration:h=400,easing:f=Le,interpolate:d=$r}=ee(ee({},t),a);if(h===0)return c&&(c.abort(),c=null),n.set(e=r),Promise.resolve();const p=gs()+l;let m;return s=ys(v=>{if(v<p)return!0;u||(m=d(e,o),typeof h=="function"&&(h=h(e,o)),u=!0),c&&(c.abort(),c=null);const w=v-p;return w>h?(n.set(e=o),!1):(n.set(e=m(f(w/h))),!0)}),s.promise}return{set:i,update:(o,a)=>i(o(r,e),a),subscribe:n.subscribe}}function ag(e){let t,n=e[0].msg+"",s;return{c(){t=new Xu(!1),s=Ht(),t.a=s},m(r,i){t.m(n,r,i),H(r,s,i)},p(r,i){i&1&&n!==(n=r[0].msg+"")&&t.p(n)},i:N,o:N,d(r){r&&q(s),r&&t.d()}}}function cg(e){let t,n,s;const r=[e[2]];var i=e[0].component.src;function o(a){let c={};for(let u=0;u<r.length;u+=1)c=ee(c,r[u]);return{props:c}}return i&&(t=$i(i,o())),{c(){t&&ne(t.$$.fragment),n=Ht()},m(a,c){t&&Vt(t,a,c),H(a,n,c),s=!0},p(a,c){const u=c&4?ma(r,[fl(a[2])]):{};if(i!==(i=a[0].component.src)){if(t){Me();const l=t;z(l.$$.fragment,1,0,()=>{Ut(l,1)}),Pe()}i?(t=$i(i,o()),ne(t.$$.fragment),j(t.$$.fragment,1),Vt(t,n.parentNode,n)):t=null}else i&&t.$set(u)},i(a){s||(t&&j(t.$$.fragment,a),s=!0)},o(a){t&&z(t.$$.fragment,a),s=!1},d(a){a&&q(n),t&&Ut(t,a)}}}function zo(e){let t,n,s;return{c(){t=W("div"),L(t,"class","_toastBtn pe svelte-l65oht"),L(t,"role","button"),L(t,"tabindex","0")},m(r,i){H(r,t,i),n||(s=[Lt(t,"click",e[4]),Lt(t,"keydown",e[8])],n=!0)},p:N,d(r){r&&q(t),n=!1,Ot(s)}}}function ug(e){let t,n,s,r,i,o,a,c,u,l;const h=[cg,ag],f=[];function d(m,v){return m[0].component?0:1}s=d(e),r=f[s]=h[s](e);let p=e[0].dismissable&&zo(e);return{c(){t=W("div"),n=W("div"),r.c(),i=Et(),p&&p.c(),o=Et(),a=W("progress"),L(n,"role","status"),L(n,"class","_toastMsg svelte-l65oht"),ye(n,"pe",e[0].component),L(a,"class","_toastBar svelte-l65oht"),a.value=e[1],L(t,"class","_toastItem svelte-l65oht"),ye(t,"pe",e[0].pausable)},m(m,v){H(m,t,v),tt(t,n),f[s].m(n,null),tt(t,i),p&&p.m(t,null),tt(t,o),tt(t,a),c=!0,u||(l=[Lt(t,"mouseenter",e[9]),Lt(t,"mouseleave",e[6])],u=!0)},p(m,[v]){let w=s;s=d(m),s===w?f[s].p(m,v):(Me(),z(f[w],1,1,()=>{f[w]=null}),Pe(),r=f[s],r?r.p(m,v):(r=f[s]=h[s](m),r.c()),j(r,1),r.m(n,null)),(!c||v&1)&&ye(n,"pe",m[0].component),m[0].dismissable?p?p.p(m,v):(p=zo(m),p.c(),p.m(t,o)):p&&(p.d(1),p=null),(!c||v&2)&&(a.value=m[1]),(!c||v&1)&&ye(t,"pe",m[0].pausable)},i(m){c||(j(r),c=!0)},o(m){z(r),c=!1},d(m){m&&q(t),f[s].d(),p&&p.d(),u=!1,Ot(l)}}}function lg(e,t,n){let s,{item:r}=t;const i=og(r.initial,{duration:r.duration,easing:Le});ta(e,i,D=>n(1,s=D));const o=()=>mn.pop(r.id),a=()=>{(s===1||s===0)&&o()};let c=r.initial,u=c,l=!1;const h=()=>{!l&&s!==c&&(i.set(s,{duration:0}),l=!0)},f=()=>{if(l){const D=r.duration,x=D-D*((s-u)/(c-u));i.set(c,{duration:x}).then(a),l=!1}};let d={};const p=(D,x="undefined")=>typeof D===x;let m;nl((D=document)=>{if(p(D.hidden))return;const x=()=>D.hidden?h():f(),dt="visibilitychange";D.addEventListener(dt,x),m=()=>D.removeEventListener(dt,x),x()}),sl(()=>{p(r.onpop,"function")&&r.onpop(r.id),m&&m()});const w=D=>{D instanceof KeyboardEvent&&["Enter"," "].includes(D.key)&&o()},S=()=>{r.pausable&&h()};return e.$$set=D=>{"item"in D&&n(0,r=D.item)},e.$$.update=()=>{if(e.$$.dirty&1&&(p(r.progress)||n(0,r.next=r.progress,r)),e.$$.dirty&131&&c!==r.next&&(n(7,c=r.next),u=s,l=!1,i.set(c).then(a)),e.$$.dirty&1&&r.component){const{props:D={},sendIdTo:x}=r.component;n(2,d={...D,...x&&{[x]:r.id}})}},[r,s,d,i,o,h,f,c,w,S]}class hg extends yn{constructor(t){super(),gn(this,t,lg,ug,Kt,{item:0})}}function Go(e,t,n){const s=e.slice();return s[5]=t[n],s}function Qo(e,t){let n,s,r,i,o,a,c,u,l=N,h;return s=new hg({props:{item:t[5]}}),{key:e,first:null,c(){n=W("li"),ne(s.$$.fragment),r=Et(),L(n,"class",i=Ui(t[5].classes.join(" "))+" svelte-yh90az"),L(n,"style",o=t[1](t[5].theme)),this.first=n},m(f,d){H(f,n,d),Vt(s,n,null),tt(n,r),h=!0},p(f,d){t=f;const p={};d&1&&(p.item=t[5]),s.$set(p),(!h||d&1&&i!==(i=Ui(t[5].classes.join(" "))+" svelte-yh90az"))&&L(n,"class",i),(!h||d&1&&o!==(o=t[1](t[5].theme)))&&L(n,"style",o)},r(){u=n.getBoundingClientRect()},f(){el(n),l(),ha(n,u)},a(){l(),l=tl(n,u,sg,{duration:200})},i(f){h||(j(s.$$.fragment,f),Ie(()=>{c&&c.end(1),a=al(n,ng,t[5].intro),a.start()}),h=!0)},o(f){z(s.$$.fragment,f),a&&a.invalidate(),c=cl(n,eg,{}),h=!1},d(f){f&&q(n),Ut(s),f&&c&&c.end()}}}function fg(e){let t,n=[],s=new Map,r,i=e[0];const o=a=>a[5].id;for(let a=0;a<i.length;a+=1){let c=Go(e,i,a),u=o(c);s.set(u,n[a]=Qo(u,c))}return{c(){t=W("ul");for(let a=0;a<n.length;a+=1)n[a].c();L(t,"class","_toastContainer svelte-yh90az")},m(a,c){H(a,t,c);for(let u=0;u<n.length;u+=1)n[u].m(t,null);r=!0},p(a,[c]){if(c&3){i=a[0],Me();for(let u=0;u<n.length;u+=1)n[u].r();n=hl(n,c,o,1,a,i,s,t,ll,Qo,null,Go);for(let u=0;u<n.length;u+=1)n[u].a();Pe()}},i(a){if(!r){for(let c=0;c<i.length;c+=1)j(n[c]);r=!0}},o(a){for(let c=0;c<n.length;c+=1)z(n[c]);r=!1},d(a){a&&q(t);for(let c=0;c<n.length;c+=1)n[c].d()}}}function dg(e,t,n){let s;ta(e,mn,c=>n(4,s=c));let{options:r={}}=t,{target:i="default"}=t,o;const a=c=>Object.keys(c).reduce((u,l)=>`${u}${l}:${c[l]};`,"");return e.$$set=c=>{"options"in c&&n(2,r=c.options),"target"in c&&n(3,i=c.target)},e.$$.update=()=>{e.$$.dirty&12&&mn._init(i,r),e.$$.dirty&24&&n(0,o=s.filter(c=>c.target===i))},[o,a,r,i,s]}class pg extends yn{constructor(t){super(),gn(this,t,dg,fg,Kt,{options:2,target:3})}}const mg="modulepreload",gg=function(e){return"/"+e},Wo={},de=function(t,n,s){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=gg(i),i in Wo)return;Wo[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let l=r.length-1;l>=0;l--){const h=r[l];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":mg,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};function yg(e){let t,n,s,r={ctx:e,current:null,token:null,hasCatch:!1,pending:Ig,then:Eg,catch:wg,blocks:[,,,]};return Xn(n=e[6](),r),{c(){t=Ht(),r.block.c()},m(i,o){H(i,t,o),r.block.m(i,r.anchor=o),r.mount=()=>t.parentNode,r.anchor=t,s=!0},p(i,o){e=i,r.ctx=e,o&64&&n!==(n=e[6]())&&Xn(n,r)||pa(r,e,o)},i(i){s||(j(r.block),s=!0)},o(i){for(let o=0;o<3;o+=1){const a=r.blocks[o];z(a)}s=!1},d(i){i&&q(t),r.block.d(i),r.token=null,r=null}}}function vg(e){let t,n;const s=e[24].default,r=ea(s,e,e[23],null);return{c(){t=W("div"),r&&r.c(),L(t,"class","typewriter-container svelte-1gv2i7t")},m(i,o){H(i,t,o),r&&r.m(t,null),n=!0},p(i,o){r&&r.p&&(!n||o&8388608)&&ra(r,s,i,i[23],n?sa(s,i[23],o,null):ia(i[23]),null)},i(i){n||(j(r,i),n=!0)},o(i){z(r,i),n=!1},d(i){i&&q(t),r&&r.d(i)}}}function wg(e){return{c:N,m:N,p:N,i:N,o:N,d:N}}function Eg(e){let t,n,s,r={ctx:e,current:null,token:null,hasCatch:!1,pending:bg,then:Tg,catch:_g,value:25,blocks:[,,,]};return Xn(n=e[7][e[0]](),r),{c(){t=Ht(),r.block.c()},m(i,o){H(i,t,o),r.block.m(i,r.anchor=o),r.mount=()=>t.parentNode,r.anchor=t,s=!0},p(i,o){e=i,r.ctx=e,o&1&&n!==(n=e[7][e[0]]())&&Xn(n,r)||pa(r,e,o)},i(i){s||(j(r.block),s=!0)},o(i){for(let o=0;o<3;o+=1){const a=r.blocks[o];z(a)}s=!1},d(i){i&&q(t),r.block.d(i),r.token=null,r=null}}}function _g(e){return{c:N,m:N,p:N,i:N,o:N,d:N}}function Tg(e){let t=e[4],n,s,r=e[4]&&hr(e);return{c(){r&&r.c(),n=Ht()},m(i,o){r&&r.m(i,o),H(i,n,o),s=!0},p(i,o){i[4]?t?Kt(t,i[4])?(r.d(1),r=hr(i),r.c(),r.m(n.parentNode,n)):r.p(i,o):(r=hr(i),r.c(),r.m(n.parentNode,n)):t&&(r.d(1),r=null),t=i[4]},i(i){s||(j(r),s=!0)},o(i){z(r),s=!1},d(i){i&&q(n),r&&r.d(i)}}}function hr(e){let t,n,s,r,i;const o=e[24].default,a=ea(o,e,e[23],null);let c=[{class:"typewriter-container svelte-1gv2i7t"}],u={};for(let l=0;l<c.length;l+=1)u=ee(u,c[l]);return{c(){t=W(e[4]),a&&a.c(),/-/.test(e[4])?qi(t,u):Bi(t,u),ye(t,"cursor",e[1])},m(l,h){H(l,t,h),a&&a.m(t,null),s=!0,r||(i=Ku(n=e[25].default(t,e[5])),r=!0)},p(l,h){a&&a.p&&(!s||h&8388608)&&ra(a,o,l,l[23],s?sa(o,l[23],h,null):ia(l[23]),null),u=ma(c,[{class:"typewriter-container svelte-1gv2i7t"}]),/-/.test(l[4])?qi(t,u):Bi(t,u),n&&oe(n.update)&&h&32&&n.update.call(null,l[5]),ye(t,"cursor",l[1])},i(l){s||(j(a,l),s=!0)},o(l){z(a,l),s=!1},d(l){l&&q(t),a&&a.d(l),r=!1,i()}}}function bg(e){return{c:N,m:N,p:N,i:N,o:N,d:N}}function Ig(e){let t,n=e[2]&&Xo();return{c(){n&&n.c(),t=Ht()},m(s,r){n&&n.m(s,r),H(s,t,r)},p(s,r){s[2]?n||(n=Xo(),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:N,o:N,d(s){n&&n.d(s),s&&q(t)}}}function Xo(e){let t;return{c(){t=W("div"),t.innerHTML='<p class="typing"></p>',L(t,"class","typewriter-container cursor svelte-1gv2i7t")},m(n,s){H(n,t,s)},d(n){n&&q(t)}}}function Yo(e){let t,n,s,r;const i=[vg,yg],o=[];function a(c,u){return c[3]?0:1}return t=a(e),n=o[t]=i[t](e),{c(){n.c(),s=Ht()},m(c,u){o[t].m(c,u),H(c,s,u),r=!0},p(c,u){let l=t;t=a(c),t===l?o[t].p(c,u):(Me(),z(o[l],1,1,()=>{o[l]=null}),Pe(),n=o[t],n?n.p(c,u):(n=o[t]=i[t](c),n.c()),j(n,1),n.m(s.parentNode,s))},i(c){r||(j(n),r=!0)},o(c){z(n),r=!1},d(c){o[t].d(c),c&&q(s)}}}function Cg(e){let t,n=e[8],s,r,i=Yo(e);return{c(){t=Et(),i.c(),s=Ht()},m(o,a){H(o,t,a),i.m(o,a),H(o,s,a),r=!0},p(o,[a]){a&256&&Kt(n,n=o[8])?(Me(),z(i,1,1,N),Pe(),i=Yo(o),i.c(),j(i,1),i.m(s.parentNode,s)):i.p(o,a)},i(o){r||(j(i),r=!0)},o(o){z(i),r=!1},d(o){o&&q(t),o&&q(s),i.d(o)}}}function Sg(e,t,n){let s,r,i,o,a,c,u,l,h,{$$slots:f={},$$scope:d}=t,{mode:p="concurrent"}=t,{interval:m=30}=t,{cursor:v=!0}=t,{keepCursorOnFinish:w=!1}=t,{delay:S=0}=t,{showCursorOnDelay:D=!1}=t,{disabled:x=!1}=t,{element:dt="div"}=t,{scrambleDuration:U=3e3}=t,{scrambleSlowdown:st=!0}=t,{unwriteInterval:mt=30}=t,{wordInterval:xt=1500}=t;const Bu={concurrent:()=>de(()=>import("./concurrent.f81624a1.js"),["assets/concurrent.f81624a1.js","assets/writeEffect.993fcb31.js","assets/animationSetup.ab2db111.js"]),cascade:()=>de(()=>import("./cascade.4eaa8169.js"),["assets/cascade.4eaa8169.js","assets/writeEffect.993fcb31.js","assets/animationSetup.ab2db111.js"]),loop:()=>de(()=>import("./loop.528941a1.js"),["assets/loop.528941a1.js","assets/writeAndUnwriteText.b73659d8.js","assets/writeEffect.993fcb31.js","assets/animationSetup.ab2db111.js","assets/unwriteEffect.3b3e97e6.js"]),loopOnce:()=>de(()=>import("./loopOnce.670f23f3.js"),["assets/loopOnce.670f23f3.js","assets/animationSetup.ab2db111.js","assets/writeEffect.993fcb31.js","assets/unwriteEffect.3b3e97e6.js"]),loopRandom:()=>de(()=>import("./loopRandom.0d462eb4.js"),["assets/loopRandom.0d462eb4.js","assets/writeAndUnwriteText.b73659d8.js","assets/writeEffect.993fcb31.js","assets/animationSetup.ab2db111.js","assets/unwriteEffect.3b3e97e6.js"]),scramble:()=>de(()=>import("./scramble.3adedb76.js"),["assets/scramble.3adedb76.js","assets/animationSetup.ab2db111.js"])};return e.$$set=F=>{n(8,t=ee(ee({},t),Vi(F))),"mode"in F&&n(0,p=F.mode),"interval"in F&&n(9,m=F.interval),"cursor"in F&&n(1,v=F.cursor),"keepCursorOnFinish"in F&&n(10,w=F.keepCursorOnFinish),"delay"in F&&n(11,S=F.delay),"showCursorOnDelay"in F&&n(2,D=F.showCursorOnDelay),"disabled"in F&&n(3,x=F.disabled),"element"in F&&n(4,dt=F.element),"scrambleDuration"in F&&n(12,U=F.scrambleDuration),"scrambleSlowdown"in F&&n(13,st=F.scrambleSlowdown),"unwriteInterval"in F&&n(14,mt=F.unwriteInterval),"wordInterval"in F&&n(15,xt=F.wordInterval),"$$scope"in F&&n(23,d=F.$$scope)},e.$$.update=()=>{e.$$.dirty&1&&n(21,s=/^loop(Once|Random)?$/.test(p)),e.$$.dirty&1&&n(22,r=["concurrent","cascade","loopOnce"].includes(p)),e.$$.dirty&4195328&&n(20,i=!r&&w),e.$$.dirty&2052&&n(19,o=S<1&&D),n(18,a=!s&&(t.unwriteInterval||t.wordInterval)),n(17,c=p!=="scramble"&&(t.scrambleDuration||t.scrambleSlowdown)),e.$$.dirty&1024&&n(16,u=typeof w=="number"&&w<1),e.$$.dirty&1048576&&i&&console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' is compatible only with finite modes"),e.$$.dirty&524288&&o&&console.warn("[svelte-typewriter] The prop 'showCursorOnDelay' has no effect if the delay is 0"),e.$$.dirty&262144&&a&&console.warn("[svelte-typewriter] The props 'unwriteInterval' and 'wordInterval' are only compatible with loop modes"),e.$$.dirty&131072&&c&&console.warn("[svelte-typewriter] The props 'scrambleDuration' and 'scrambleSlowdown' are only compatible with scramble mode"),e.$$.dirty&65536&&u&&console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' has no effect with values lower than 1"),e.$$.dirty&2048&&n(6,l=()=>new Promise(F=>setTimeout(()=>F(S),S))),e.$$.dirty&65054&&n(5,h={interval:m,cursor:v,keepCursorOnFinish:w,delay:S,showCursorOnDelay:D,disabled:x,element:dt,scrambleDuration:U,scrambleSlowdown:st,unwriteInterval:mt,wordInterval:xt})},t=Vi(t),[p,v,D,x,dt,h,l,Bu,t,m,w,S,U,st,mt,xt,u,c,a,o,i,s,r,d,f]}class Jo extends yn{constructor(t){super(),gn(this,t,Sg,Cg,Kt,{mode:0,interval:9,cursor:1,keepCursorOnFinish:10,delay:11,showCursorOnDelay:2,disabled:3,element:4,scrambleDuration:12,scrambleSlowdown:13,unwriteInterval:14,wordInterval:15})}}function kg(e){let t,n=e[2].quote+"",s;return{c(){t=W("h1"),s=vs(n),L(t,"class","random-text svelte-13f3xot")},m(r,i){H(r,t,i),tt(t,s)},p(r,i){i&4&&n!==(n=r[2].quote+"")&&ua(s,n)},d(r){r&&q(t)}}}function Dg(e){let t,n=e[2].author+"",s;return{c(){t=W("h1"),s=vs(n),L(t,"class","random-text svelte-13f3xot")},m(r,i){H(r,t,i),tt(t,s)},p(r,i){i&4&&n!==(n=r[2].author+"")&&ua(s,n)},d(r){r&&q(t)}}}function Ag(e){let t,n,s,r,i,o,a,c,u,l,h,f,d,p,m,v;return s=new Jo({props:{mode:"concurrent",keepCursorOnFinish:"true",$$slots:{default:[kg]},$$scope:{ctx:e}}}),i=new Jo({props:{mode:"concurrent",keepCursorOnFinish:"true",$$slots:{default:[Dg]},$$scope:{ctx:e}}}),{c(){t=W("div"),n=W("div"),ne(s.$$.fragment),r=Et(),ne(i.$$.fragment),o=Et(),a=W("button"),a.textContent="Load Random Quote",c=Et(),u=W("input"),l=Et(),h=W("input"),f=Et(),d=W("button"),d.textContent="Add Quote",L(a,"class","random-button svelte-13f3xot"),L(u,"id","new-quote-input"),L(u,"type","text"),L(u,"placeholder","Submit a new quote here"),L(u,"class","svelte-13f3xot"),L(h,"id","new-quote-input-author"),L(h,"type","text"),L(h,"placeholder","Write the author of the quote here"),L(h,"class","svelte-13f3xot"),L(d,"class","random-button svelte-13f3xot"),L(n,"class","heading svelte-13f3xot"),L(t,"class","profile svelte-13f3xot")},m(w,S){H(w,t,S),tt(t,n),Vt(s,n,null),tt(n,r),Vt(i,n,null),tt(n,o),tt(n,a),tt(n,c),tt(n,u),xn(u,e[0]),tt(n,l),tt(n,h),xn(h,e[1]),tt(n,f),tt(n,d),p=!0,m||(v=[Lt(a,"click",e[3]),Lt(u,"input",e[5]),Lt(h,"input",e[6]),Lt(d,"click",e[4])],m=!0)},p(w,[S]){const D={};S&1028&&(D.$$scope={dirty:S,ctx:w}),s.$set(D);const x={};S&1028&&(x.$$scope={dirty:S,ctx:w}),i.$set(x),S&1&&u.value!==w[0]&&xn(u,w[0]),S&2&&h.value!==w[1]&&xn(h,w[1])},i(w){p||(j(s.$$.fragment,w),j(i.$$.fragment,w),p=!0)},o(w){z(s.$$.fragment,w),z(i.$$.fragment,w),p=!1},d(w){w&&q(t),Ut(s),Ut(i),m=!1,Ot(v)}}}function Ng(e,t,n){const s=bm(tg,"quotes","quote_list");Qm(s,f=>{o=f.data().quote_list,console.log(o)});let r="",i="",o=[],a={quote:"",author:""};function c(){let f=a;for(;a==f;)n(2,a=o[Math.floor(Math.random()*o.length)])}async function u(){if(r!=""&&i!=""){let f={quote:r,author:i};mn.push("Submitting quote..."),await Gm(s,{quote_list:Ym(f)}).then(()=>{mn.push("Quote submitted!"),n(0,r=""),n(1,i="")})}}function l(){r=this.value,n(0,r)}function h(){i=this.value,n(1,i)}return[r,i,a,c,u,l,h]}class Rg extends yn{constructor(t){super(),gn(this,t,Ng,Ag,Kt,{})}}function Og(e){let t,n,s,r;return t=new Rg({}),s=new pg({}),{c(){ne(t.$$.fragment),n=Et(),ne(s.$$.fragment)},m(i,o){Vt(t,i,o),H(i,n,o),Vt(s,i,o),r=!0},p:N,i(i){r||(j(t.$$.fragment,i),j(s.$$.fragment,i),r=!0)},o(i){z(t.$$.fragment,i),z(s.$$.fragment,i),r=!1},d(i){Ut(t,i),i&&q(n),Ut(s,i)}}}class xg extends yn{constructor(t){super(),gn(this,t,null,Og,Kt,{})}}new xg({target:document.getElementById("app")});export{Lg as c};
