(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function k(){}const Le=e=>e;function Zt(e,t){for(const n in t)e[n]=t[n];return e}function Uu(e){return!!e&&(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"}function Jo(e){return e()}function Pi(){return Object.create(null)}function Rt(e){e.forEach(Jo)}function ie(e){return typeof e=="function"}function qt(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Bu(e){return Object.keys(e).length===0}function qu(e,...t){if(e==null)return k;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Zo(e,t,n){e.$$.on_destroy.push(qu(t,n))}function ta(e,t,n,s){if(e){const r=ea(e,t,n,s);return e[0](r)}}function ea(e,t,n,s){return e[1]&&s?Zt(n.ctx.slice(),e[1](s(t))):n.ctx}function na(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const i=[],o=Math.max(t.dirty.length,r.length);for(let a=0;a<o;a+=1)i[a]=t.dirty[a]|r[a];return i}return t.dirty|r}return t.dirty}function sa(e,t,n,s,r,i){if(r){const o=ea(t,n,s,i);e.p(o,r)}}function ra(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let s=0;s<n;s++)t[s]=-1;return t}return-1}function Fi(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function Vi(e){return e==null?"":e}function ju(e){return e&&ie(e.destroy)?e.destroy:k}const ia=typeof window<"u";let ps=ia?()=>window.performance.now():()=>Date.now(),qr=ia?e=>requestAnimationFrame(e):k;const ve=new Set;function oa(e){ve.forEach(t=>{t.c(e)||(ve.delete(t),t.f())}),ve.size!==0&&qr(oa)}function gs(e){let t;return ve.size===0&&qr(oa),{promise:new Promise(n=>{ve.add(t={c:e,f:n})}),abort(){ve.delete(t)}}}function pt(e,t){e.appendChild(t)}function aa(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function $u(e){const t=st("style");return Ku(aa(e),t),t.sheet}function Ku(e,t){return pt(e.head||e,t),t.sheet}function G(e,t,n){e.insertBefore(t,n||null)}function j(e){e.parentNode&&e.parentNode.removeChild(e)}function st(e){return document.createElement(e)}function Hu(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function jr(e){return document.createTextNode(e)}function Lt(){return jr(" ")}function jt(){return jr("")}function Wt(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function F(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ui(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const s in t)t[s]==null?e.removeAttribute(s):s==="style"?e.style.cssText=t[s]:s==="__value"?e.value=e[s]=t[s]:n[s]&&n[s].set?e[s]=t[s]:F(e,s,t[s])}function Bi(e,t){Object.keys(t).forEach(n=>{zu(e,n,t[n])})}function zu(e,t,n){t in e?e[t]=typeof e[t]=="boolean"&&n===""?!0:n:F(e,t,n)}function Gu(e){return Array.from(e.childNodes)}function Qu(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function qi(e,t){e.value=t==null?"":t}function ge(e,t,n){e.classList[n?"add":"remove"](t)}function ca(e,t,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,s,t),r}class Wu{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,s=null){this.e||(this.is_svg?this.e=Hu(n.nodeName):this.e=st(n.nodeName),this.t=n,this.c(t)),this.i(s)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)G(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(j)}}function ji(e,t){return new e(t)}const Hn=new Map;let zn=0;function Xu(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Yu(e,t){const n={stylesheet:$u(t),rules:{}};return Hn.set(e,n),n}function $r(e,t,n,s,r,i,o,a=0){const c=16.666/s;let u=`{
`;for(let v=0;v<=1;v+=c){const T=t+(n-t)*i(v);u+=v*100+`%{${o(T,1-T)}}
`}const l=u+`100% {${o(n,1-n)}}
}`,h=`__svelte_${Xu(l)}_${a}`,f=aa(e),{stylesheet:d,rules:m}=Hn.get(f)||Yu(f,e);m[h]||(m[h]=!0,d.insertRule(`@keyframes ${h} ${l}`,d.cssRules.length));const g=e.style.animation||"";return e.style.animation=`${g?`${g}, `:""}${h} ${s}ms linear ${r}ms 1 both`,zn+=1,h}function Gn(e,t){const n=(e.style.animation||"").split(", "),s=n.filter(t?i=>i.indexOf(t)<0:i=>i.indexOf("__svelte")===-1),r=n.length-s.length;r&&(e.style.animation=s.join(", "),zn-=r,zn||Ju())}function Ju(){qr(()=>{zn||(Hn.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&j(t)}),Hn.clear())})}function Zu(e,t,n,s){if(!t)return k;const r=e.getBoundingClientRect();if(t.left===r.left&&t.right===r.right&&t.top===r.top&&t.bottom===r.bottom)return k;const{delay:i=0,duration:o=300,easing:a=Le,start:c=ps()+i,end:u=c+o,tick:l=k,css:h}=n(e,{from:t,to:r},s);let f=!0,d=!1,m;function g(){h&&(m=$r(e,0,1,o,i,a,h)),i||(d=!0)}function v(){h&&Gn(e,m),f=!1}return gs(T=>{if(!d&&T>=c&&(d=!0),d&&T>=u&&(l(1,0),v()),!f)return!1;if(d){const R=T-c,A=0+1*a(R/o);l(A,1-A)}return!0}),g(),l(0,1),v}function tl(e){const t=getComputedStyle(e);if(t.position!=="absolute"&&t.position!=="fixed"){const{width:n,height:s}=t,r=e.getBoundingClientRect();e.style.position="absolute",e.style.width=n,e.style.height=s,ua(e,r)}}function ua(e,t){const n=e.getBoundingClientRect();if(t.left!==n.left||t.top!==n.top){const s=getComputedStyle(e),r=s.transform==="none"?"":s.transform;e.style.transform=`${r} translate(${t.left-n.left}px, ${t.top-n.top}px)`}}let tn;function It(e){tn=e}function ys(){if(!tn)throw new Error("Function called outside component initialization");return tn}function el(e){ys().$$.on_mount.push(e)}function nl(e){ys().$$.on_destroy.push(e)}function xg(){const e=ys();return(t,n,{cancelable:s=!1}={})=>{const r=e.$$.callbacks[t];if(r){const i=ca(t,n,{cancelable:s});return r.slice().forEach(o=>{o.call(e,i)}),!i.defaultPrevented}return!0}}const de=[],$i=[],Un=[],Ki=[],sl=Promise.resolve();let lr=!1;function rl(){lr||(lr=!0,sl.then(Kr))}function be(e){Un.push(e)}const Qs=new Set;let le=0;function Kr(){if(le!==0)return;const e=tn;do{try{for(;le<de.length;){const t=de[le];le++,It(t),il(t.$$)}}catch(t){throw de.length=0,le=0,t}for(It(null),de.length=0,le=0;$i.length;)$i.pop()();for(let t=0;t<Un.length;t+=1){const n=Un[t];Qs.has(n)||(Qs.add(n),n())}Un.length=0}while(de.length);for(;Ki.length;)Ki.pop()();lr=!1,Qs.clear(),It(e)}function il(e){if(e.fragment!==null){e.update(),Rt(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(be)}}let $e;function la(){return $e||($e=Promise.resolve(),$e.then(()=>{$e=null})),$e}function Qn(e,t,n){e.dispatchEvent(ca(`${t?"intro":"outro"}${n}`))}const Bn=new Set;let xt;function Me(){xt={r:0,c:[],p:xt}}function Pe(){xt.r||Rt(xt.c),xt=xt.p}function K(e,t){e&&e.i&&(Bn.delete(e),e.i(t))}function Q(e,t,n,s){if(e&&e.o){if(Bn.has(e))return;Bn.add(e),xt.c.push(()=>{Bn.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}const ha={duration:0};function ol(e,t,n){const s={direction:"in"};let r=t(e,n,s),i=!1,o,a,c=0;function u(){o&&Gn(e,o)}function l(){const{delay:f=0,duration:d=300,easing:m=Le,tick:g=k,css:v}=r||ha;v&&(o=$r(e,0,1,d,f,m,v,c++)),g(0,1);const T=ps()+f,R=T+d;a&&a.abort(),i=!0,be(()=>Qn(e,!0,"start")),a=gs(A=>{if(i){if(A>=R)return g(1,0),Qn(e,!0,"end"),u(),i=!1;if(A>=T){const P=m((A-T)/d);g(P,1-P)}}return i})}let h=!1;return{start(){h||(h=!0,Gn(e),ie(r)?(r=r(s),la().then(l)):l())},invalidate(){h=!1},end(){i&&(u(),i=!1)}}}function al(e,t,n){const s={direction:"out"};let r=t(e,n,s),i=!0,o;const a=xt;a.r+=1;function c(){const{delay:u=0,duration:l=300,easing:h=Le,tick:f=k,css:d}=r||ha;d&&(o=$r(e,1,0,l,u,h,d));const m=ps()+u,g=m+l;be(()=>Qn(e,!1,"start")),gs(v=>{if(i){if(v>=g)return f(0,1),Qn(e,!1,"end"),--a.r||Rt(a.c),!1;if(v>=m){const T=h((v-m)/l);f(1-T,T)}}return i})}return ie(r)?la().then(()=>{r=r(s),c()}):c(),{end(u){u&&r.tick&&r.tick(1,0),i&&(o&&Gn(e,o),i=!1)}}}function Wn(e,t){const n=t.token={};function s(r,i,o,a){if(t.token!==n)return;t.resolved=a;let c=t.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const u=r&&(t.current=r)(c);let l=!1;t.block&&(t.blocks?t.blocks.forEach((h,f)=>{f!==i&&h&&(Me(),Q(h,1,1,()=>{t.blocks[f]===h&&(t.blocks[f]=null)}),Pe())}):t.block.d(1),u.c(),K(u,1),u.m(t.mount(),t.anchor),l=!0),t.block=u,t.blocks&&(t.blocks[i]=u),l&&Kr()}if(Uu(e)){const r=ys();if(e.then(i=>{It(r),s(t.then,1,t.value,i),It(null)},i=>{if(It(r),s(t.catch,2,t.error,i),It(null),!t.hasCatch)throw i}),t.current!==t.pending)return s(t.pending,0),!0}else{if(t.current!==t.then)return s(t.then,1,t.value,e),!0;t.resolved=e}}function fa(e,t,n){const s=t.slice(),{resolved:r}=e;e.current===e.then&&(s[e.value]=r),e.current===e.catch&&(s[e.error]=r),e.block.p(s,n)}function cl(e,t){Q(e,1,1,()=>{t.delete(e.key)})}function ul(e,t){e.f(),cl(e,t)}function ll(e,t,n,s,r,i,o,a,c,u,l,h){let f=e.length,d=i.length,m=f;const g={};for(;m--;)g[e[m].key]=m;const v=[],T=new Map,R=new Map;for(m=d;m--;){const U=h(r,i,m),et=n(U);let mt=o.get(et);mt?s&&mt.p(U,t):(mt=u(et,U),mt.c()),T.set(et,v[m]=mt),et in g&&R.set(et,Math.abs(m-g[et]))}const A=new Set,P=new Set;function ft(U){K(U,1),U.m(a,l),o.set(U.key,U),l=U.first,d--}for(;f&&d;){const U=v[d-1],et=e[f-1],mt=U.key,Ot=et.key;U===et?(l=U.first,f--,d--):T.has(Ot)?!o.has(mt)||A.has(mt)?ft(U):P.has(Ot)?f--:R.get(mt)>R.get(Ot)?(P.add(mt),ft(U)):(A.add(Ot),f--):(c(et,o),f--)}for(;f--;){const U=e[f];T.has(U.key)||c(U,o)}for(;d;)ft(v[d-1]);return v}function da(e,t){const n={},s={},r={$$scope:1};let i=e.length;for(;i--;){const o=e[i],a=t[i];if(a){for(const c in o)c in a||(s[c]=1);for(const c in a)r[c]||(n[c]=a[c],r[c]=1);e[i]=a}else for(const c in o)r[c]=1}for(const o in s)o in n||(n[o]=void 0);return n}function hl(e){return typeof e=="object"&&e!==null?e:{}}function Ie(e){e&&e.c()}function te(e,t,n,s){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),s||be(()=>{const o=e.$$.on_mount.map(Jo).filter(ie);e.$$.on_destroy?e.$$.on_destroy.push(...o):Rt(o),e.$$.on_mount=[]}),i.forEach(be)}function ee(e,t){const n=e.$$;n.fragment!==null&&(Rt(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function fl(e,t){e.$$.dirty[0]===-1&&(de.push(e),rl(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function gn(e,t,n,s,r,i,o,a=[-1]){const c=tn;It(e);const u=e.$$={fragment:null,ctx:[],props:i,update:k,not_equal:r,bound:Pi(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Pi(),dirty:a,skip_bound:!1,root:t.target||c.$$.root};o&&o(u.root);let l=!1;if(u.ctx=n?n(e,t.props||{},(h,f,...d)=>{const m=d.length?d[0]:f;return u.ctx&&r(u.ctx[h],u.ctx[h]=m)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](m),l&&fl(e,h)),f}):[],u.update(),l=!0,Rt(u.before_update),u.fragment=s?s(u.ctx):!1,t.target){if(t.hydrate){const h=Gu(t.target);u.fragment&&u.fragment.l(h),h.forEach(j)}else u.fragment&&u.fragment.c();t.intro&&K(e.$$.fragment),te(e,t.target,t.anchor,t.customElement),Kr()}It(c)}class yn{$destroy(){ee(this,1),this.$destroy=k}$on(t,n){if(!ie(n))return k;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!Bu(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}/**
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
 */const ma=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},dl=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},pa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,u=c?e[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,d=u&63;c||(d=64,o||(f=64)),s.push(n[l],n[h],n[f],n[d])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ma(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):dl(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const h=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),u!==64){const d=a<<4&240|u>>2;if(s.push(d),h!==64){const m=u<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},ml=function(e){const t=ma(e);return pa.encodeByteArray(t,!0)},Xn=function(e){return ml(e).replace(/\./g,"")},pl=function(e){try{return pa.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function gl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yl=()=>gl().__FIREBASE_DEFAULTS__,vl=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},wl=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&pl(e[1]);return t&&JSON.parse(t)},ga=()=>{try{return yl()||vl()||wl()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},El=e=>{var t,n;return(n=(t=ga())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},_l=e=>{const t=El(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},Tl=()=>{var e;return(e=ga())===null||e===void 0?void 0:e.config};/**
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
 */class bl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function Il(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Xn(JSON.stringify(n)),Xn(JSON.stringify(o)),a].join(".")}function Sl(){try{return typeof indexedDB=="object"}catch{return!1}}function Cl(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
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
 */const Dl="FirebaseError";class Fe extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Dl,Object.setPrototypeOf(this,Fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ya.prototype.create)}}class ya{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?kl(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Fe(r,a,s)}}function kl(e,t){return e.replace(Al,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Al=/\{\$([^}]+)}/g;function hr(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(Hi(i)&&Hi(o)){if(!hr(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Hi(e){return e!==null&&typeof e=="object"}/**
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
 */function Ft(e){return e&&e._delegate?e._delegate:e}class en{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ht="[DEFAULT]";/**
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
 */class Nl{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new bl;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ol(t))try{this.getOrInitializeService({instanceIdentifier:Ht})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=Ht){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ht){return this.instances.has(t)}getOptions(t=Ht){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Rl(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Ht){return this.component?this.component.multipleInstances?t:Ht:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rl(e){return e===Ht?void 0:e}function Ol(e){return e.instantiationMode==="EAGER"}/**
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
 */class xl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Nl(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var x;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(x||(x={}));const Ll={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},Ml=x.INFO,Pl={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},Fl=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=Pl[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class va{constructor(t){this.name=t,this._logLevel=Ml,this._logHandler=Fl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in x))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ll[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...t),this._logHandler(this,x.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...t),this._logHandler(this,x.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,x.INFO,...t),this._logHandler(this,x.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,x.WARN,...t),this._logHandler(this,x.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...t),this._logHandler(this,x.ERROR,...t)}}const Vl=(e,t)=>t.some(n=>e instanceof n);let zi,Gi;function Ul(){return zi||(zi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bl(){return Gi||(Gi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wa=new WeakMap,fr=new WeakMap,Ea=new WeakMap,Ws=new WeakMap,Hr=new WeakMap;function ql(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Mt(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&wa.set(n,e)}).catch(()=>{}),Hr.set(t,e),t}function jl(e){if(fr.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});fr.set(e,t)}let dr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return fr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ea.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function $l(e){dr=e(dr)}function Kl(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Xs(this),t,...n);return Ea.set(s,t.sort?t.sort():[t]),Mt(s)}:Bl().includes(e)?function(...t){return e.apply(Xs(this),t),Mt(wa.get(this))}:function(...t){return Mt(e.apply(Xs(this),t))}}function Hl(e){return typeof e=="function"?Kl(e):(e instanceof IDBTransaction&&jl(e),Vl(e,Ul())?new Proxy(e,dr):e)}function Mt(e){if(e instanceof IDBRequest)return ql(e);if(Ws.has(e))return Ws.get(e);const t=Hl(e);return t!==e&&(Ws.set(e,t),Hr.set(t,e)),t}const Xs=e=>Hr.get(e);function zl(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=Mt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Mt(o.result),c.oldVersion,c.newVersion,Mt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Gl=["get","getKey","getAll","getAllKeys","count"],Ql=["put","add","delete","clear"],Ys=new Map;function Qi(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ys.get(t))return Ys.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=Ql.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Gl.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Ys.set(t,i),i}$l(e=>({...e,get:(t,n,s)=>Qi(t,n)||e.get(t,n,s),has:(t,n)=>!!Qi(t,n)||e.has(t,n)}));/**
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
 */class Wl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Xl(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Xl(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const mr="@firebase/app",Wi="0.9.1";/**
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
 */const ne=new va("@firebase/app"),Yl="@firebase/app-compat",Jl="@firebase/analytics-compat",Zl="@firebase/analytics",th="@firebase/app-check-compat",eh="@firebase/app-check",nh="@firebase/auth",sh="@firebase/auth-compat",rh="@firebase/database",ih="@firebase/database-compat",oh="@firebase/functions",ah="@firebase/functions-compat",ch="@firebase/installations",uh="@firebase/installations-compat",lh="@firebase/messaging",hh="@firebase/messaging-compat",fh="@firebase/performance",dh="@firebase/performance-compat",mh="@firebase/remote-config",ph="@firebase/remote-config-compat",gh="@firebase/storage",yh="@firebase/storage-compat",vh="@firebase/firestore",wh="@firebase/firestore-compat",Eh="firebase",_h="9.16.0";/**
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
 */const pr="[DEFAULT]",Th={[mr]:"fire-core",[Yl]:"fire-core-compat",[Zl]:"fire-analytics",[Jl]:"fire-analytics-compat",[eh]:"fire-app-check",[th]:"fire-app-check-compat",[nh]:"fire-auth",[sh]:"fire-auth-compat",[rh]:"fire-rtdb",[ih]:"fire-rtdb-compat",[oh]:"fire-fn",[ah]:"fire-fn-compat",[ch]:"fire-iid",[uh]:"fire-iid-compat",[lh]:"fire-fcm",[hh]:"fire-fcm-compat",[fh]:"fire-perf",[dh]:"fire-perf-compat",[mh]:"fire-rc",[ph]:"fire-rc-compat",[gh]:"fire-gcs",[yh]:"fire-gcs-compat",[vh]:"fire-fst",[wh]:"fire-fst-compat","fire-js":"fire-js",[Eh]:"fire-js-all"};/**
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
 */const Yn=new Map,gr=new Map;function bh(e,t){try{e.container.addComponent(t)}catch(n){ne.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Jn(e){const t=e.name;if(gr.has(t))return ne.debug(`There were multiple attempts to register component ${t}.`),!1;gr.set(t,e);for(const n of Yn.values())bh(n,e);return!0}function Ih(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Sh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pt=new ya("app","Firebase",Sh);/**
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
 */class Ch{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}/**
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
 */const Dh=_h;function _a(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:pr,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw Pt.create("bad-app-name",{appName:String(r)});if(n||(n=Tl()),!n)throw Pt.create("no-options");const i=Yn.get(r);if(i){if(hr(n,i.options)&&hr(s,i.config))return i;throw Pt.create("duplicate-app",{appName:r})}const o=new xl(r);for(const c of gr.values())o.addComponent(c);const a=new Ch(n,s,o);return Yn.set(r,a),a}function kh(e=pr){const t=Yn.get(e);if(!t&&e===pr)return _a();if(!t)throw Pt.create("no-app",{appName:e});return t}function we(e,t,n){var s;let r=(s=Th[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ne.warn(a.join(" "));return}Jn(new en(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Ah="firebase-heartbeat-database",Nh=1,nn="firebase-heartbeat-store";let Js=null;function Ta(){return Js||(Js=zl(Ah,Nh,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(nn)}}}).catch(e=>{throw Pt.create("idb-open",{originalErrorMessage:e.message})})),Js}async function Rh(e){try{return(await Ta()).transaction(nn).objectStore(nn).get(ba(e))}catch(t){if(t instanceof Fe)ne.warn(t.message);else{const n=Pt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ne.warn(n.message)}}}async function Xi(e,t){try{const s=(await Ta()).transaction(nn,"readwrite");return await s.objectStore(nn).put(t,ba(e)),s.done}catch(n){if(n instanceof Fe)ne.warn(n.message);else{const s=Pt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ne.warn(s.message)}}}function ba(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Oh=1024,xh=30*24*60*60*1e3;class Lh{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ph(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Yi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=xh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Yi(),{heartbeatsToSend:n,unsentEntries:s}=Mh(this._heartbeatsCache.heartbeats),r=Xn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Yi(){return new Date().toISOString().substring(0,10)}function Mh(e,t=Oh){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ji(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ji(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ph{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sl()?Cl().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Rh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Ji(e){return Xn(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Fh(e){Jn(new en("platform-logger",t=>new Wl(t),"PRIVATE")),Jn(new en("heartbeat",t=>new Lh(t),"PRIVATE")),we(mr,Wi,e),we(mr,Wi,"esm2017"),we("fire-js","")}Fh("");var Vh="firebase",Uh="9.16.0";/**
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
 */we(Vh,Uh,"app");var Bh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w,zr=zr||{},S=Bh||self;function Zn(){}function vs(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function vn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function qh(e){return Object.prototype.hasOwnProperty.call(e,Zs)&&e[Zs]||(e[Zs]=++jh)}var Zs="closure_uid_"+(1e9*Math.random()>>>0),jh=0;function $h(e,t,n){return e.call.apply(e.bind,arguments)}function Kh(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function ut(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ut=$h:ut=Kh,ut.apply(null,arguments)}function xn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function it(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function $t(){this.s=this.s,this.o=this.o}var Hh=0;$t.prototype.s=!1;$t.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Hh!=0)&&qh(this)};$t.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ia=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Gr(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Zi(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(vs(s)){const r=e.length||0,i=s.length||0;e.length=r+i;for(let o=0;o<i;o++)e[r+o]=s[o]}else e.push(s)}}function lt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var zh=function(){if(!S.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{S.addEventListener("test",Zn,t),S.removeEventListener("test",Zn,t)}catch{}return e}();function ts(e){return/^[\s\xa0]*$/.test(e)}var to=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function tr(e,t){return e<t?-1:e>t?1:0}function ws(){var e=S.navigator;return e&&(e=e.userAgent)?e:""}function Et(e){return ws().indexOf(e)!=-1}function Qr(e){return Qr[" "](e),e}Qr[" "]=Zn;function Gh(e){var t=Xh;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Qh=Et("Opera"),Se=Et("Trident")||Et("MSIE"),Sa=Et("Edge"),yr=Sa||Se,Ca=Et("Gecko")&&!(ws().toLowerCase().indexOf("webkit")!=-1&&!Et("Edge"))&&!(Et("Trident")||Et("MSIE"))&&!Et("Edge"),Wh=ws().toLowerCase().indexOf("webkit")!=-1&&!Et("Edge");function Da(){var e=S.document;return e?e.documentMode:void 0}var es;t:{var er="",nr=function(){var e=ws();if(Ca)return/rv:([^\);]+)(\)|;)/.exec(e);if(Sa)return/Edge\/([\d\.]+)/.exec(e);if(Se)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Wh)return/WebKit\/(\S+)/.exec(e);if(Qh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(nr&&(er=nr?nr[1]:""),Se){var sr=Da();if(sr!=null&&sr>parseFloat(er)){es=String(sr);break t}}es=er}var Xh={};function Yh(){return Gh(function(){let e=0;const t=to(String(es)).split("."),n=to("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=tr(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||tr(r[2].length==0,i[2].length==0)||tr(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var vr;if(S.document&&Se){var eo=Da();vr=eo||parseInt(es,10)||void 0}else vr=void 0;var Jh=vr;function sn(e,t){if(lt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ca){t:{try{Qr(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Zh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&sn.X.h.call(this)}}it(sn,lt);var Zh={2:"touch",3:"pen",4:"mouse"};sn.prototype.h=function(){sn.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var wn="closure_listenable_"+(1e6*Math.random()|0),tf=0;function ef(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=r,this.key=++tf,this.ba=this.ea=!1}function Es(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Wr(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function ka(e){const t={};for(const n in e)t[n]=e[n];return t}const no="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Aa(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<no.length;i++)n=no[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function _s(e){this.src=e,this.g={},this.h=0}_s.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Er(e,t,s,r);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new ef(t,this.src,i,!!s,r),t.ea=n,e.push(t)),t};function wr(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=Ia(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Es(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Er(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ba&&i.listener==t&&i.capture==!!n&&i.ha==s)return r}return-1}var Xr="closure_lm_"+(1e6*Math.random()|0),rr={};function Na(e,t,n,s,r){if(s&&s.once)return Oa(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Na(e,t[i],n,s,r);return null}return n=Zr(n),e&&e[wn]?e.N(t,n,vn(s)?!!s.capture:!!s,r):Ra(e,t,n,!1,s,r)}function Ra(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=vn(r)?!!r.capture:!!r,a=Jr(e);if(a||(e[Xr]=a=new _s(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=nf(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)zh||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(La(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function nf(){function e(n){return t.call(e.src,e.listener,n)}const t=sf;return e}function Oa(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Oa(e,t[i],n,s,r);return null}return n=Zr(n),e&&e[wn]?e.O(t,n,vn(s)?!!s.capture:!!s,r):Ra(e,t,n,!0,s,r)}function xa(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)xa(e,t[i],n,s,r);else s=vn(s)?!!s.capture:!!s,n=Zr(n),e&&e[wn]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Er(i,n,s,r),-1<n&&(Es(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Jr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Er(t,n,s,r)),(n=-1<e?t[e]:null)&&Yr(n))}function Yr(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[wn])wr(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(La(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Jr(t))?(wr(n,e),n.h==0&&(n.src=null,t[Xr]=null)):Es(e)}}}function La(e){return e in rr?rr[e]:rr[e]="on"+e}function sf(e,t){if(e.ba)e=!0;else{t=new sn(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&Yr(e),e=n.call(s,t)}return e}function Jr(e){return e=e[Xr],e instanceof _s?e:null}var ir="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zr(e){return typeof e=="function"?e:(e[ir]||(e[ir]=function(t){return e.handleEvent(t)}),e[ir])}function tt(){$t.call(this),this.i=new _s(this),this.P=this,this.I=null}it(tt,$t);tt.prototype[wn]=!0;tt.prototype.removeEventListener=function(e,t,n,s){xa(this,e,t,n,s)};function rt(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new lt(t,e);else if(t instanceof lt)t.target=t.target||e;else{var r=t;t=new lt(s,e),Aa(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=Ln(o,s,!0,t)&&r}if(o=t.g=e,r=Ln(o,s,!0,t)&&r,r=Ln(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=Ln(o,s,!1,t)&&r}tt.prototype.M=function(){if(tt.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Es(n[s]);delete e.g[t],e.h--}}this.I=null};tt.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};tt.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Ln(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&wr(e.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var ti=S.JSON.stringify;function rf(){var e=Fa;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class of{constructor(){this.h=this.g=null}add(t,n){const s=Ma.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Ma=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new af,e=>e.reset());class af{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function cf(e){S.setTimeout(()=>{throw e},0)}function Pa(e,t){_r||uf(),Tr||(_r(),Tr=!0),Fa.add(e,t)}var _r;function uf(){var e=S.Promise.resolve(void 0);_r=function(){e.then(lf)}}var Tr=!1,Fa=new of;function lf(){for(var e;e=rf();){try{e.h.call(e.g)}catch(n){cf(n)}var t=Ma;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Tr=!1}function Ts(e,t){tt.call(this),this.h=e||1,this.g=t||S,this.j=ut(this.lb,this),this.l=Date.now()}it(Ts,tt);w=Ts.prototype;w.ca=!1;w.R=null;w.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),rt(this,"tick"),this.ca&&(ei(this),this.start()))}};w.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ei(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}w.M=function(){Ts.X.M.call(this),ei(this),delete this.g};function ni(e,t,n){if(typeof e=="function")n&&(e=ut(e,n));else if(e&&typeof e.handleEvent=="function")e=ut(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:S.setTimeout(e,t||0)}function Va(e){e.g=ni(()=>{e.g=null,e.i&&(e.i=!1,Va(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class hf extends $t{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Va(this)}M(){super.M(),this.g&&(S.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rn(e){$t.call(this),this.h=e,this.g={}}it(rn,$t);var so=[];function Ua(e,t,n,s){Array.isArray(n)||(n&&(so[0]=n.toString()),n=so);for(var r=0;r<n.length;r++){var i=Na(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Ba(e){Wr(e.g,function(t,n){this.g.hasOwnProperty(n)&&Yr(t)},e),e.g={}}rn.prototype.M=function(){rn.X.M.call(this),Ba(this)};rn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function bs(){this.g=!0}bs.prototype.Aa=function(){this.g=!1};function ff(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function df(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function ye(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+pf(e,n)+(s?" "+s:"")})}function mf(e,t){e.info(function(){return"TIMEOUT: "+t})}bs.prototype.info=function(){};function pf(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return ti(n)}catch{return t}}var oe={},ro=null;function Is(){return ro=ro||new tt}oe.Pa="serverreachability";function qa(e){lt.call(this,oe.Pa,e)}it(qa,lt);function on(e){const t=Is();rt(t,new qa(t))}oe.STAT_EVENT="statevent";function ja(e,t){lt.call(this,oe.STAT_EVENT,e),this.stat=t}it(ja,lt);function dt(e){const t=Is();rt(t,new ja(t,e))}oe.Qa="timingevent";function $a(e,t){lt.call(this,oe.Qa,e),this.size=t}it($a,lt);function En(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return S.setTimeout(function(){e()},t)}var Ss={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Ka={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function si(){}si.prototype.h=null;function io(e){return e.h||(e.h=e.i())}function Ha(){}var _n={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ri(){lt.call(this,"d")}it(ri,lt);function ii(){lt.call(this,"c")}it(ii,lt);var br;function Cs(){}it(Cs,si);Cs.prototype.g=function(){return new XMLHttpRequest};Cs.prototype.i=function(){return{}};br=new Cs;function Tn(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new rn(this),this.O=gf,e=yr?125:void 0,this.T=new Ts(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new za}function za(){this.i=null,this.g="",this.h=!1}var gf=45e3,Ir={},ns={};w=Tn.prototype;w.setTimeout=function(e){this.O=e};function Sr(e,t,n){e.K=1,e.v=ks(Dt(t)),e.s=n,e.P=!0,Ga(e,null)}function Ga(e,t){e.F=Date.now(),bn(e),e.A=Dt(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),ec(n.i,"t",s),e.C=0,n=e.l.H,e.h=new za,e.g=Tc(e.l,n?t:null,!e.s),0<e.N&&(e.L=new hf(ut(e.La,e,e.g),e.N)),Ua(e.S,e.g,"readystatechange",e.ib),t=e.H?ka(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),on(),ff(e.j,e.u,e.A,e.m,e.U,e.s)}w.ib=function(e){e=e.target;const t=this.L;t&&St(e)==3?t.l():this.La(e)};w.La=function(e){try{if(e==this.g)t:{const l=St(this.g);var t=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||yr||this.g&&(this.h.h||this.g.fa()||uo(this.g)))){this.I||l!=4||t==7||(t==8||0>=h?on(3):on(2)),Ds(this);var n=this.g.aa();this.Y=n;e:if(Qa(this)){var s=uo(this.g);e="";var r=s.length,i=St(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zt(this),We(this);var o="";break e}this.h.i=new S.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,df(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ts(a)){var u=a;break e}}u=null}if(n=u)ye(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Cr(this,n);else{this.i=!1,this.o=3,dt(12),zt(this),We(this);break t}}this.P?(Wa(this,l,o),yr&&this.i&&l==3&&(Ua(this.S,this.T,"tick",this.hb),this.T.start())):(ye(this.j,this.m,o,null),Cr(this,o)),l==4&&zt(this),this.i&&!this.I&&(l==4?vc(this.l,this):(this.i=!1,bn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,dt(12)):(this.o=0,dt(13)),zt(this),We(this)}}}catch{}finally{}};function Qa(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function Wa(e,t,n){let s=!0,r;for(;!e.I&&e.C<n.length;)if(r=yf(e,n),r==ns){t==4&&(e.o=4,dt(14),s=!1),ye(e.j,e.m,null,"[Incomplete Response]");break}else if(r==Ir){e.o=4,dt(15),ye(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else ye(e.j,e.m,r,null),Cr(e,r);Qa(e)&&r!=ns&&r!=Ir&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,dt(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),fi(t),t.K=!0,dt(11))):(ye(e.j,e.m,n,"[Invalid Chunked Response]"),zt(e),We(e))}w.hb=function(){if(this.g){var e=St(this.g),t=this.g.fa();this.C<t.length&&(Ds(this),Wa(this,e,t),this.i&&e!=4&&bn(this))}};function yf(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?ns:(n=Number(t.substring(n,s)),isNaN(n)?Ir:(s+=1,s+n>t.length?ns:(t=t.substr(s,n),e.C=s+n,t)))}w.cancel=function(){this.I=!0,zt(this)};function bn(e){e.V=Date.now()+e.O,Xa(e,e.O)}function Xa(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=En(ut(e.gb,e),t)}function Ds(e){e.B&&(S.clearTimeout(e.B),e.B=null)}w.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(mf(this.j,this.A),this.K!=2&&(on(),dt(17)),zt(this),this.o=2,We(this)):Xa(this,this.V-e)};function We(e){e.l.G==0||e.I||vc(e.l,e)}function zt(e){Ds(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,ei(e.T),Ba(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Cr(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Dr(n.h,e))){if(!e.J&&Dr(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)is(n),Rs(n);else break t;hi(n),dt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=En(ut(n.cb,n),6e3));if(1>=rc(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Gt(n,11)}else if((e.J||n.g==e)&&is(n),!ts(t))for(r=n.Fa.g.parse(t),t=0;t<r.length;t++){let u=r[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=e.g;if(d){const m=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(oi(i,i.h),i.h=null))}if(s.D){const g=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(s.za=g,B(s.F,s.D,g))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=_c(s,s.H?s.ka:null,s.V),o.J){ic(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Ds(a),bn(a)),s.g=o}else gc(s);0<n.i.length&&Os(n)}else u[0]!="stop"&&u[0]!="close"||Gt(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Gt(n,7):li(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}on(4)}catch{}}function vf(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(vs(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function wf(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(vs(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function Ya(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(vs(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=wf(e),s=vf(e),r=s.length,i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}var Ja=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ef(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Xt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Xt){this.h=t!==void 0?t:e.h,ss(this,e.j),this.s=e.s,this.g=e.g,rs(this,e.m),this.l=e.l,t=e.i;var n=new an;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),oo(this,n),this.o=e.o}else e&&(n=String(e).match(Ja))?(this.h=!!t,ss(this,n[1]||"",!0),this.s=He(n[2]||""),this.g=He(n[3]||"",!0),rs(this,n[4]),this.l=He(n[5]||"",!0),oo(this,n[6]||"",!0),this.o=He(n[7]||"")):(this.h=!!t,this.i=new an(null,this.h))}Xt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ze(t,ao,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ze(t,ao,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(ze(n,n.charAt(0)=="/"?bf:Tf,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ze(n,Sf)),e.join("")};function Dt(e){return new Xt(e)}function ss(e,t,n){e.j=n?He(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function rs(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function oo(e,t,n){t instanceof an?(e.i=t,Cf(e.i,e.h)):(n||(t=ze(t,If)),e.i=new an(t,e.h))}function B(e,t,n){e.i.set(t,n)}function ks(e){return B(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function He(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ze(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,_f),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function _f(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var ao=/[#\/\?@]/g,Tf=/[#\?:]/g,bf=/[#\?]/g,If=/[#\?@]/g,Sf=/#/g;function an(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Kt(e){e.g||(e.g=new Map,e.h=0,e.i&&Ef(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}w=an.prototype;w.add=function(e,t){Kt(this),this.i=null,e=Ve(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Za(e,t){Kt(e),t=Ve(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tc(e,t){return Kt(e),t=Ve(e,t),e.g.has(t)}w.forEach=function(e,t){Kt(this),this.g.forEach(function(n,s){n.forEach(function(r){e.call(t,r,s,this)},this)},this)};w.oa=function(){Kt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const r=e[s];for(let i=0;i<r.length;i++)n.push(t[s])}return n};w.W=function(e){Kt(this);let t=[];if(typeof e=="string")tc(this,e)&&(t=t.concat(this.g.get(Ve(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};w.set=function(e,t){return Kt(this),this.i=null,e=Ve(this,e),tc(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};w.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function ec(e,t,n){Za(e,t),0<n.length&&(e.i=null,e.g.set(Ve(e,t),Gr(n)),e.h+=n.length)}w.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),e.push(r)}}return this.i=e.join("&")};function Ve(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Cf(e,t){t&&!e.j&&(Kt(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Za(this,s),ec(this,r,n))},e)),e.j=t}var Df=class{constructor(e,t){this.h=e,this.g=t}};function nc(e){this.l=e||kf,S.PerformanceNavigationTiming?(e=S.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(S.g&&S.g.Ga&&S.g.Ga()&&S.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var kf=10;function sc(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function rc(e){return e.h?1:e.g?e.g.size:0}function Dr(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function oi(e,t){e.g?e.g.add(t):e.h=t}function ic(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}nc.prototype.cancel=function(){if(this.i=oc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function oc(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Gr(e.i)}function ai(){}ai.prototype.stringify=function(e){return S.JSON.stringify(e,void 0)};ai.prototype.parse=function(e){return S.JSON.parse(e,void 0)};function Af(){this.g=new ai}function Nf(e,t,n){const s=n||"";try{Ya(e,function(r,i){let o=r;vn(r)&&(o=ti(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function Rf(e,t){const n=new bs;if(S.Image){const s=new Image;s.onload=xn(Mn,n,s,"TestLoadImage: loaded",!0,t),s.onerror=xn(Mn,n,s,"TestLoadImage: error",!1,t),s.onabort=xn(Mn,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=xn(Mn,n,s,"TestLoadImage: timeout",!1,t),S.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Mn(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function In(e){this.l=e.ac||null,this.j=e.jb||!1}it(In,si);In.prototype.g=function(){return new As(this.l,this.j)};In.prototype.i=function(e){return function(){return e}}({});function As(e,t){tt.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=ci,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}it(As,tt);var ci=0;w=As.prototype;w.open=function(e,t){if(this.readyState!=ci)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,cn(this)};w.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||S).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};w.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sn(this)),this.readyState=ci};w.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,cn(this)),this.g&&(this.readyState=3,cn(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof S.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ac(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function ac(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}w.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Sn(this):cn(this),this.readyState==3&&ac(this)}};w.Va=function(e){this.g&&(this.response=this.responseText=e,Sn(this))};w.Ua=function(e){this.g&&(this.response=e,Sn(this))};w.ga=function(){this.g&&Sn(this)};function Sn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,cn(e)}w.setRequestHeader=function(e,t){this.v.append(e,t)};w.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};w.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function cn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(As.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Of=S.JSON.parse;function $(e){tt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=cc,this.K=this.L=!1}it($,tt);var cc="",xf=/^https?$/i,Lf=["POST","PUT"];w=$.prototype;w.Ka=function(e){this.L=e};w.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():br.g(),this.C=this.u?io(this.u):io(br),this.g.onreadystatechange=ut(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){co(this,i);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=S.FormData&&e instanceof S.FormData,!(0<=Ia(Lf,t))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{hc(this),0<this.B&&((this.K=Mf(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ut(this.qa,this)):this.A=ni(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){co(this,i)}};function Mf(e){return Se&&Yh()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}w.qa=function(){typeof zr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,rt(this,"timeout"),this.abort(8))};function co(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,uc(e),Ns(e)}function uc(e){e.D||(e.D=!0,rt(e,"complete"),rt(e,"error"))}w.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,rt(this,"complete"),rt(this,"abort"),Ns(this))};w.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ns(this,!0)),$.X.M.call(this)};w.Ha=function(){this.s||(this.F||this.v||this.l?lc(this):this.fb())};w.fb=function(){lc(this)};function lc(e){if(e.h&&typeof zr<"u"&&(!e.C[1]||St(e)!=4||e.aa()!=2)){if(e.v&&St(e)==4)ni(e.Ha,0,e);else if(rt(e,"readystatechange"),St(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(Ja)[1]||null;if(!r&&S.self&&S.self.location){var i=S.self.location.protocol;r=i.substr(0,i.length-1)}s=!xf.test(r?r.toLowerCase():"")}n=s}if(n)rt(e,"complete"),rt(e,"success");else{e.m=6;try{var o=2<St(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",uc(e)}}finally{Ns(e)}}}}function Ns(e,t){if(e.g){hc(e);const n=e.g,s=e.C[0]?Zn:null;e.g=null,e.C=null,t||rt(e,"ready");try{n.onreadystatechange=s}catch{}}}function hc(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(S.clearTimeout(e.A),e.A=null)}function St(e){return e.g?e.g.readyState:0}w.aa=function(){try{return 2<St(this)?this.g.status:-1}catch{return-1}};w.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};w.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Of(t)}};function uo(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case cc:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}w.Ea=function(){return this.m};w.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function fc(e){let t="";return Wr(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function ui(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=fc(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):B(e,t,n))}function Ke(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function dc(e){this.Ca=0,this.i=[],this.j=new bs,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ke("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ke("baseRetryDelayMs",5e3,e),this.bb=Ke("retryDelaySeedMs",1e4,e),this.$a=Ke("forwardChannelMaxRetries",2,e),this.ta=Ke("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new nc(e&&e.concurrentRequestLimit),this.Fa=new Af,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}w=dc.prototype;w.ma=8;w.G=1;function li(e){if(mc(e),e.G==3){var t=e.U++,n=Dt(e.F);B(n,"SID",e.I),B(n,"RID",t),B(n,"TYPE","terminate"),Cn(e,n),t=new Tn(e,e.j,t,void 0),t.K=2,t.v=ks(Dt(n)),n=!1,S.navigator&&S.navigator.sendBeacon&&(n=S.navigator.sendBeacon(t.v.toString(),"")),!n&&S.Image&&(new Image().src=t.v,n=!0),n||(t.g=Tc(t.l,null),t.g.da(t.v)),t.F=Date.now(),bn(t)}Ec(e)}function Rs(e){e.g&&(fi(e),e.g.cancel(),e.g=null)}function mc(e){Rs(e),e.u&&(S.clearTimeout(e.u),e.u=null),is(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&S.clearTimeout(e.m),e.m=null)}function Os(e){sc(e.h)||e.m||(e.m=!0,Pa(e.Ja,e),e.C=0)}function Pf(e,t){return rc(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=En(ut(e.Ja,e,t),wc(e,e.C)),e.C++,!0)}w.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const r=new Tn(this,this.j,e,void 0);let i=this.s;if(this.S&&(i?(i=ka(i),Aa(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=pc(this,r,t),n=Dt(this.F),B(n,"RID",e),B(n,"CVER",22),this.D&&B(n,"X-HTTP-Session-Id",this.D),Cn(this,n),i&&(this.N?t="headers="+encodeURIComponent(String(fc(i)))+"&"+t:this.o&&ui(n,this.o,i)),oi(this.h,r),this.Ya&&B(n,"TYPE","init"),this.O?(B(n,"$req",t),B(n,"SID","null"),r.Z=!0,Sr(r,n,null)):Sr(r,n,t),this.G=2}}else this.G==3&&(e?lo(this,e):this.i.length==0||sc(this.h)||lo(this))};function lo(e,t){var n;t?n=t.m:n=e.U++;const s=Dt(e.F);B(s,"SID",e.I),B(s,"RID",n),B(s,"AID",e.T),Cn(e,s),e.o&&e.s&&ui(s,e.o,e.s),n=new Tn(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=pc(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),oi(e.h,n),Sr(n,s,t)}function Cn(e,t){e.ia&&Wr(e.ia,function(n,s){B(t,s,n)}),e.l&&Ya({},function(n,s){B(t,s,n)})}function pc(e,t,n){n=Math.min(e.i.length,n);var s=e.l?ut(e.l.Ra,e.l,e):null;t:{var r=e.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{Nf(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function gc(e){e.g||e.u||(e.Z=1,Pa(e.Ia,e),e.A=0)}function hi(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=En(ut(e.Ia,e),wc(e,e.A)),e.A++,!0)}w.Ia=function(){if(this.u=null,yc(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=En(ut(this.eb,this),e)}};w.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,dt(10),Rs(this),yc(this))};function fi(e){e.B!=null&&(S.clearTimeout(e.B),e.B=null)}function yc(e){e.g=new Tn(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=Dt(e.sa);B(t,"RID","rpc"),B(t,"SID",e.I),B(t,"CI",e.L?"0":"1"),B(t,"AID",e.T),B(t,"TYPE","xmlhttp"),Cn(e,t),e.o&&e.s&&ui(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=ks(Dt(t)),n.s=null,n.P=!0,Ga(n,e)}w.cb=function(){this.v!=null&&(this.v=null,Rs(this),hi(this),dt(19))};function is(e){e.v!=null&&(S.clearTimeout(e.v),e.v=null)}function vc(e,t){var n=null;if(e.g==t){is(e),fi(e),e.g=null;var s=2}else if(Dr(e.h,t))n=t.D,ic(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;s=Is(),rt(s,new $a(s,n)),Os(e)}else gc(e);else if(r=t.o,r==3||r==0&&0<e.pa||!(s==1&&Pf(e,t)||s==2&&hi(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:Gt(e,5);break;case 4:Gt(e,10);break;case 3:Gt(e,6);break;default:Gt(e,2)}}}function wc(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Gt(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=ut(e.kb,e);n||(n=new Xt("//www.google.com/images/cleardot.gif"),S.location&&S.location.protocol=="http"||ss(n,"https"),ks(n)),Rf(n.toString(),s)}else dt(2);e.G=0,e.l&&e.l.va(t),Ec(e),mc(e)}w.kb=function(e){e?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function Ec(e){if(e.G=0,e.la=[],e.l){const t=oc(e.h);(t.length!=0||e.i.length!=0)&&(Zi(e.la,t),Zi(e.la,e.i),e.h.i.length=0,Gr(e.i),e.i.length=0),e.l.ua()}}function _c(e,t,n){var s=n instanceof Xt?Dt(n):new Xt(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),rs(s,s.m);else{var r=S.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var i=new Xt(null,void 0);s&&ss(i,s),t&&(i.g=t),r&&rs(i,r),n&&(i.l=n),s=i}return n=e.D,t=e.za,n&&t&&B(s,n,t),B(s,"VER",e.ma),Cn(e,s),s}function Tc(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new $(new In({jb:!0})):new $(e.ra),t.Ka(e.H),t}function bc(){}w=bc.prototype;w.xa=function(){};w.wa=function(){};w.va=function(){};w.ua=function(){};w.Ra=function(){};function os(){if(Se&&!(10<=Number(Jh)))throw Error("Environmental error: no available transport.")}os.prototype.g=function(e,t){return new yt(e,t)};function yt(e,t){tt.call(this),this.g=new dc(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!ts(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ts(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ue(this)}it(yt,tt);yt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;dt(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=_c(e,null,e.V),Os(e)};yt.prototype.close=function(){li(this.g)};yt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=ti(e),e=n);t.i.push(new Df(t.ab++,e)),t.G==3&&Os(t)};yt.prototype.M=function(){this.g.l=null,delete this.j,li(this.g),delete this.g,yt.X.M.call(this)};function Ic(e){ri.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}it(Ic,ri);function Sc(){ii.call(this),this.status=1}it(Sc,ii);function Ue(e){this.g=e}it(Ue,bc);Ue.prototype.xa=function(){rt(this.g,"a")};Ue.prototype.wa=function(e){rt(this.g,new Ic(e))};Ue.prototype.va=function(e){rt(this.g,new Sc)};Ue.prototype.ua=function(){rt(this.g,"b")};os.prototype.createWebChannel=os.prototype.g;yt.prototype.send=yt.prototype.u;yt.prototype.open=yt.prototype.m;yt.prototype.close=yt.prototype.close;Ss.NO_ERROR=0;Ss.TIMEOUT=8;Ss.HTTP_ERROR=6;Ka.COMPLETE="complete";Ha.EventType=_n;_n.OPEN="a";_n.CLOSE="b";_n.ERROR="c";_n.MESSAGE="d";tt.prototype.listen=tt.prototype.N;$.prototype.listenOnce=$.prototype.O;$.prototype.getLastError=$.prototype.Oa;$.prototype.getLastErrorCode=$.prototype.Ea;$.prototype.getStatus=$.prototype.aa;$.prototype.getResponseJson=$.prototype.Sa;$.prototype.getResponseText=$.prototype.fa;$.prototype.send=$.prototype.da;$.prototype.setWithCredentials=$.prototype.Ka;var Ff=function(){return new os},Vf=function(){return Is()},or=Ss,Uf=Ka,Bf=oe,ho={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},qf=In,Pn=Ha,jf=$;const fo="@firebase/firestore";/**
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
 */class ot{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
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
 */const se=new va("@firebase/firestore");function mo(){return se.logLevel}function E(e,...t){if(se.logLevel<=x.DEBUG){const n=t.map(di);se.debug(`Firestore (${Be}): ${e}`,...n)}}function kt(e,...t){if(se.logLevel<=x.ERROR){const n=t.map(di);se.error(`Firestore (${Be}): ${e}`,...n)}}function kr(e,...t){if(se.logLevel<=x.WARN){const n=t.map(di);se.warn(`Firestore (${Be}): ${e}`,...n)}}function di(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
 */function I(e="Unexpected state"){const t=`FIRESTORE (${Be}) INTERNAL ASSERTION FAILED: `+e;throw kt(t),new Error(t)}function V(e,t){e||I()}function D(e,t){return e}/**
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
 */class Yt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Cc{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class $f{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class Kf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Hf{constructor(t){this.t=t,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Yt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Yt,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{E("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(E("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Yt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(E("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(V(typeof s.accessToken=="string"),new Cc(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return V(t===null||typeof t=="string"),new ot(t)}}class zf{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(V(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Gf{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new zf(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Qf{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Wf{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=i=>{i.error!=null&&E("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,E("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{E("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):E("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(V(typeof n.token=="string"),this.A=n.token,new Qf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Xf(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Dc{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=Xf(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function L(e,t){return e<t?-1:e>t?1:0}function Ce(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
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
 */class X{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new b(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new b(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new b(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new b(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return X.fromMillis(Date.now())}static fromDate(t){return X.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new X(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?L(this.nanoseconds,t.nanoseconds):L(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class C{constructor(t){this.timestamp=t}static fromTimestamp(t){return new C(t)}static min(){return new C(new X(0,0))}static max(){return new C(new X(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class un{constructor(t,n,s){n===void 0?n=0:n>t.length&&I(),s===void 0?s=t.length-n:s>t.length-n&&I(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return un.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof un?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class q extends un{construct(t,n,s){return new q(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new b(y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new q(n)}static emptyPath(){return new q([])}}const Yf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends un{construct(t,n,s){return new ct(t,n,s)}static isValidIdentifier(t){return Yf.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new b(y.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new b(y.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new b(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new b(y.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ct(n)}static emptyPath(){return new ct([])}}/**
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
 */class _{constructor(t){this.path=t}static fromPath(t){return new _(q.fromString(t))}static fromName(t){return new _(q.fromString(t).popFirst(5))}static empty(){return new _(q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&q.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return q.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new _(new q(t.slice()))}}function Jf(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=C.fromTimestamp(s===1e9?new X(n+1,0):new X(n,s));return new Vt(r,_.empty(),t)}function Zf(e){return new Vt(e.readTime,e.key,-1)}class Vt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Vt(C.min(),_.empty(),-1)}static max(){return new Vt(C.max(),_.empty(),-1)}}function td(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=_.comparator(e.documentKey,t.documentKey),n!==0?n:L(e.largestBatchId,t.largestBatchId))}/**
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
 */const ed="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Dn(e){if(e.code!==y.FAILED_PRECONDITION||e.message!==ed)throw e;E("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class p{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new p((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):p.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):p.reject(n)}static resolve(t){return new p((n,s)=>{n(t)})}static reject(t){return new p((n,s)=>{s(t)})}static waitFor(t){return new p((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(t){let n=p.resolve(!1);for(const s of t)n=n.next(r=>r?p.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new p((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(t[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(t,n){return new p((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function kn(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class sd{constructor(t,n,s,r,i,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ln{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ln("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ln&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */function po(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ae(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function kc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */function xs(e){return e==null}function as(e){return e===0&&1/e==-1/0}function rd(e){return typeof e=="number"&&Number.isInteger(e)&&!as(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new ht(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new ht(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return L(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const id=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ut(e){if(V(!!e),typeof e=="string"){let t=0;const n=id.exec(e);if(V(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:z(e.seconds),nanos:z(e.nanos)}}function z(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function De(e){return typeof e=="string"?ht.fromBase64String(e):ht.fromUint8Array(e)}/**
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
 */function Ac(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Nc(e){const t=e.mapValue.fields.__previous_value__;return Ac(t)?Nc(t):t}function hn(e){const t=Ut(e.mapValue.fields.__local_write_time__.timestampValue);return new X(t.seconds,t.nanos)}/**
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
 */const Fn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function re(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ac(e)?4:od(e)?9007199254740991:10:I()}function Tt(e,t){if(e===t)return!0;const n=re(e);if(n!==re(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return hn(e).isEqual(hn(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Ut(s.timestampValue),o=Ut(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return De(s.bytesValue).isEqual(De(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return z(s.geoPointValue.latitude)===z(r.geoPointValue.latitude)&&z(s.geoPointValue.longitude)===z(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return z(s.integerValue)===z(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=z(s.doubleValue),o=z(r.doubleValue);return i===o?as(i)===as(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return Ce(e.arrayValue.values||[],t.arrayValue.values||[],Tt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(po(i)!==po(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Tt(i[a],o[a])))return!1;return!0}(e,t);default:return I()}}function fn(e,t){return(e.values||[]).find(n=>Tt(n,t))!==void 0}function ke(e,t){if(e===t)return 0;const n=re(e),s=re(t);if(n!==s)return L(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return L(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=z(r.integerValue||r.doubleValue),a=z(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return go(e.timestampValue,t.timestampValue);case 4:return go(hn(e),hn(t));case 5:return L(e.stringValue,t.stringValue);case 6:return function(r,i){const o=De(r),a=De(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=L(o[c],a[c]);if(u!==0)return u}return L(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=L(z(r.latitude),z(i.latitude));return o!==0?o:L(z(r.longitude),z(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=ke(o[c],a[c]);if(u)return u}return L(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===Fn.mapValue&&i===Fn.mapValue)return 0;if(r===Fn.mapValue)return 1;if(i===Fn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=L(a[l],u[l]);if(h!==0)return h;const f=ke(o[a[l]],c[u[l]]);if(f!==0)return f}return L(a.length,u.length)}(e.mapValue,t.mapValue);default:throw I()}}function go(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return L(e,t);const n=Ut(e),s=Ut(t),r=L(n.seconds,s.seconds);return r!==0?r:L(n.nanos,s.nanos)}function Ae(e){return Ar(e)}function Ar(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=Ut(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?De(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,_.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Ar(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ar(s.fields[a])}`;return i+"}"}(e.mapValue):I();var t,n}function Nr(e){return!!e&&"integerValue"in e}function pi(e){return!!e&&"arrayValue"in e}function yo(e){return!!e&&"nullValue"in e}function vo(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function qn(e){return!!e&&"mapValue"in e}function Xe(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ae(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Xe(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Xe(e.arrayValue.values[n]);return t}return Object.assign({},e)}function od(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class cs{constructor(t,n){this.position=t,this.inclusive=n}}function wo(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=_.comparator(_.fromName(o.referenceValue),n.key):s=ke(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Eo(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Tt(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Rc{}class W extends Rc{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new cd(t,n,s):n==="array-contains"?new hd(t,s):n==="in"?new fd(t,s):n==="not-in"?new dd(t,s):n==="array-contains-any"?new md(t,s):new W(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new ud(t,s):new ld(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ke(n,this.value)):n!==null&&re(this.value)===re(n)&&this.matchesComparison(ke(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class bt extends Rc{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new bt(t,n)}matches(t){return Oc(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Oc(e){return e.op==="and"}function xc(e){return ad(e)&&Oc(e)}function ad(e){for(const t of e.filters)if(t instanceof bt)return!1;return!0}function Rr(e){if(e instanceof W)return e.field.canonicalString()+e.op.toString()+Ae(e.value);if(xc(e))return e.filters.map(t=>Rr(t)).join(",");{const t=e.filters.map(n=>Rr(n)).join(",");return`${e.op}(${t})`}}function Lc(e,t){return e instanceof W?function(n,s){return s instanceof W&&n.op===s.op&&n.field.isEqual(s.field)&&Tt(n.value,s.value)}(e,t):e instanceof bt?function(n,s){return s instanceof bt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Lc(i,s.filters[o]),!0):!1}(e,t):void I()}function Mc(e){return e instanceof W?function(t){return`${t.field.canonicalString()} ${t.op} ${Ae(t.value)}`}(e):e instanceof bt?function(t){return t.op.toString()+" {"+t.getFilters().map(Mc).join(" ,")+"}"}(e):"Filter"}class cd extends W{constructor(t,n,s){super(t,n,s),this.key=_.fromName(s.referenceValue)}matches(t){const n=_.comparator(t.key,this.key);return this.matchesComparison(n)}}class ud extends W{constructor(t,n){super(t,"in",n),this.keys=Pc("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class ld extends W{constructor(t,n){super(t,"not-in",n),this.keys=Pc("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Pc(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>_.fromName(s.referenceValue))}class hd extends W{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return pi(n)&&fn(n.arrayValue,this.value)}}class fd extends W{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&fn(this.value.arrayValue,n)}}class dd extends W{constructor(t,n){super(t,"not-in",n)}matches(t){if(fn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!fn(this.value.arrayValue,n)}}class md extends W{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!pi(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>fn(this.value.arrayValue,s))}}/**
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
 */class Ye{constructor(t,n="asc"){this.field=t,this.dir=n}}function pd(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class J{constructor(t,n){this.comparator=t,this.root=n||nt.EMPTY}insert(t,n){return new J(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(t){return new J(this.comparator,this.root.remove(t,this.comparator).copy(null,null,nt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Vn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Vn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Vn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Vn(this.root,t,this.comparator,!0)}}class Vn{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class nt{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s!=null?s:nt.RED,this.left=r!=null?r:nt.EMPTY,this.right=i!=null?i:nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new nt(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return nt.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,s,r){return this}insert(e,t,n){return new nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Y{constructor(t){this.comparator=t,this.data=new J(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new _o(this.data.getIterator())}getIteratorFrom(t){return new _o(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof Y)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Y(this.comparator);return n.data=t,n}}class _o{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class wt{constructor(t){this.fields=t,t.sort(ct.comparator)}static empty(){return new wt([])}unionWith(t){let n=new Y(ct.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new wt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ce(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class gt{constructor(t){this.value=t}static empty(){return new gt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!qn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Xe(n)}setAll(t){let n=ct.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Xe(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());qn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Tt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];qn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){ae(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new gt(Xe(this.value))}}function Fc(e){const t=[];return ae(e.fields,(n,s)=>{const r=new ct([n]);if(qn(s)){const i=Fc(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new wt(t)}/**
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
 */class at{constructor(t,n,s,r,i,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new at(t,0,C.min(),C.min(),C.min(),gt.empty(),0)}static newFoundDocument(t,n,s,r){return new at(t,1,n,C.min(),s,r,0)}static newNoDocument(t,n){return new at(t,2,n,C.min(),C.min(),gt.empty(),0)}static newUnknownDocument(t,n){return new at(t,3,n,C.min(),C.min(),gt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(C.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=C.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof at&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class gd{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function To(e,t=null,n=[],s=[],r=null,i=null,o=null){return new gd(e,t,n,s,r,i,o)}function gi(e){const t=D(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Rr(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),xs(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Ae(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Ae(s)).join(",")),t.ft=n}return t.ft}function yi(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!pd(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Lc(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Eo(e.startAt,t.startAt)&&Eo(e.endAt,t.endAt)}function Or(e){return _.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class Ls{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function yd(e,t,n,s,r,i,o,a){return new Ls(e,t,n,s,r,i,o,a)}function vi(e){return new Ls(e)}function bo(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function vd(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function wd(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Ed(e){return e.collectionGroup!==null}function Ee(e){const t=D(e);if(t.dt===null){t.dt=[];const n=wd(t),s=vd(t);if(n!==null&&s===null)n.isKeyField()||t.dt.push(new Ye(n)),t.dt.push(new Ye(ct.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new Ye(ct.keyField(),i))}}}return t.dt}function At(e){const t=D(e);if(!t._t)if(t.limitType==="F")t._t=To(t.path,t.collectionGroup,Ee(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of Ee(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ye(i.field,o))}const s=t.endAt?new cs(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new cs(t.startAt.position,t.startAt.inclusive):null;t._t=To(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t._t}function xr(e,t,n){return new Ls(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ms(e,t){return yi(At(e),At(t))&&e.limitType===t.limitType}function Vc(e){return`${gi(At(e))}|lt:${e.limitType}`}function Lr(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Mc(s)).join(", ")}]`),xs(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Ae(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Ae(s)).join(",")),`Target(${n})`}(At(e))}; limitType=${e.limitType})`}function wi(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):_.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of Ee(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=wo(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Ee(n),s)||n.endAt&&!function(r,i,o){const a=wo(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Ee(n),s))}(e,t)}function _d(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Uc(e){return(t,n)=>{let s=!1;for(const r of Ee(e)){const i=Td(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Td(e,t,n){const s=e.field.isKeyField()?_.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?ke(a,c):I()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
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
 */function Bc(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:as(t)?"-0":t}}function qc(e){return{integerValue:""+e}}function bd(e,t){return rd(t)?qc(t):Bc(e,t)}/**
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
 */class Ps{constructor(){this._=void 0}}function Id(e,t,n){return e instanceof us?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof Ne?$c(e,t):e instanceof dn?Kc(e,t):function(s,r){const i=jc(s,r),o=Io(i)+Io(s.gt);return Nr(i)&&Nr(s.gt)?qc(o):Bc(s.yt,o)}(e,t)}function Sd(e,t,n){return e instanceof Ne?$c(e,t):e instanceof dn?Kc(e,t):n}function jc(e,t){return e instanceof ls?Nr(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class us extends Ps{}class Ne extends Ps{constructor(t){super(),this.elements=t}}function $c(e,t){const n=Hc(t);for(const s of e.elements)n.some(r=>Tt(r,s))||n.push(s);return{arrayValue:{values:n}}}class dn extends Ps{constructor(t){super(),this.elements=t}}function Kc(e,t){let n=Hc(t);for(const s of e.elements)n=n.filter(r=>!Tt(r,s));return{arrayValue:{values:n}}}class ls extends Ps{constructor(t,n){super(),this.yt=t,this.gt=n}}function Io(e){return z(e.integerValue||e.doubleValue)}function Hc(e){return pi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */class Cd{constructor(t,n){this.field=t,this.transform=n}}function Dd(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Ne&&s instanceof Ne||n instanceof dn&&s instanceof dn?Ce(n.elements,s.elements,Tt):n instanceof ls&&s instanceof ls?Tt(n.gt,s.gt):n instanceof us&&s instanceof us}(e.transform,t.transform)}class kd{constructor(t,n){this.version=t,this.transformResults=n}}class Ct{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ct}static exists(t){return new Ct(void 0,t)}static updateTime(t){return new Ct(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function jn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Fs{}function zc(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Qc(e.key,Ct.none()):new Vs(e.key,e.data,Ct.none());{const n=e.data,s=gt.empty();let r=new Y(ct.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ce(e.key,s,new wt(r.toArray()),Ct.none())}}function Ad(e,t,n){e instanceof Vs?function(s,r,i){const o=s.value.clone(),a=Co(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof ce?function(s,r,i){if(!jn(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Co(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Gc(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function Je(e,t,n,s){return e instanceof Vs?function(r,i,o,a){if(!jn(r.precondition,i))return o;const c=r.value.clone(),u=Do(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof ce?function(r,i,o,a){if(!jn(r.precondition,i))return o;const c=Do(r.fieldTransforms,a,i),u=i.data;return u.setAll(Gc(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(e,t,n,s):function(r,i,o){return jn(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function Nd(e,t){let n=null;for(const s of e.fieldTransforms){const r=t.data.field(s.field),i=jc(s.transform,r||null);i!=null&&(n===null&&(n=gt.empty()),n.set(s.field,i))}return n||null}function So(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ce(n,s,(r,i)=>Dd(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Vs extends Fs{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ce extends Fs{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Gc(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Co(e,t,n){const s=new Map;V(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,Sd(o,a,n[r]))}return s}function Do(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Id(i,o,t))}return s}class Qc extends Fs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Rd extends Fs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Od{constructor(t){this.count=t}}/**
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
 */var H,O;function xd(e){switch(e){default:return I();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function Wc(e){if(e===void 0)return kt("GRPC error has no .code"),y.UNKNOWN;switch(e){case H.OK:return y.OK;case H.CANCELLED:return y.CANCELLED;case H.UNKNOWN:return y.UNKNOWN;case H.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case H.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case H.INTERNAL:return y.INTERNAL;case H.UNAVAILABLE:return y.UNAVAILABLE;case H.UNAUTHENTICATED:return y.UNAUTHENTICATED;case H.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case H.NOT_FOUND:return y.NOT_FOUND;case H.ALREADY_EXISTS:return y.ALREADY_EXISTS;case H.PERMISSION_DENIED:return y.PERMISSION_DENIED;case H.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case H.ABORTED:return y.ABORTED;case H.OUT_OF_RANGE:return y.OUT_OF_RANGE;case H.UNIMPLEMENTED:return y.UNIMPLEMENTED;case H.DATA_LOSS:return y.DATA_LOSS;default:return I()}}(O=H||(H={}))[O.OK=0]="OK",O[O.CANCELLED=1]="CANCELLED",O[O.UNKNOWN=2]="UNKNOWN",O[O.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",O[O.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",O[O.NOT_FOUND=5]="NOT_FOUND",O[O.ALREADY_EXISTS=6]="ALREADY_EXISTS",O[O.PERMISSION_DENIED=7]="PERMISSION_DENIED",O[O.UNAUTHENTICATED=16]="UNAUTHENTICATED",O[O.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",O[O.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",O[O.ABORTED=10]="ABORTED",O[O.OUT_OF_RANGE=11]="OUT_OF_RANGE",O[O.UNIMPLEMENTED=12]="UNIMPLEMENTED",O[O.INTERNAL=13]="INTERNAL",O[O.UNAVAILABLE=14]="UNAVAILABLE",O[O.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class qe{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){ae(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return kc(this.inner)}size(){return this.innerSize}}/**
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
 */const Ld=new J(_.comparator);function Nt(){return Ld}const Xc=new J(_.comparator);function Ge(...e){let t=Xc;for(const n of e)t=t.insert(n.key,n);return t}function Yc(e){let t=Xc;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Qt(){return Ze()}function Jc(){return Ze()}function Ze(){return new qe(e=>e.toString(),(e,t)=>e.isEqual(t))}const Md=new J(_.comparator),Pd=new Y(_.comparator);function N(...e){let t=Pd;for(const n of e)t=t.add(n);return t}const Fd=new Y(L);function Zc(){return Fd}/**
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
 */class Us{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const r=new Map;return r.set(t,An.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Us(C.min(),r,Zc(),Nt(),N())}}class An{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new An(s,n,N(),N(),N())}}/**
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
 */class $n{constructor(t,n,s,r){this.It=t,this.removedTargetIds=n,this.key=s,this.Tt=r}}class tu{constructor(t,n){this.targetId=t,this.Et=n}}class eu{constructor(t,n,s=ht.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class ko{constructor(){this.At=0,this.Rt=No(),this.bt=ht.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(t){t.approximateByteSize()>0&&(this.vt=!0,this.bt=t)}Ct(){let t=N(),n=N(),s=N();return this.Rt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:I()}}),new An(this.bt,this.Pt,t,n,s)}xt(){this.vt=!1,this.Rt=No()}Nt(t,n){this.vt=!0,this.Rt=this.Rt.insert(t,n)}kt(t){this.vt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Vd{constructor(t){this.$t=t,this.Bt=new Map,this.Lt=Nt(),this.qt=Ao(),this.Ut=new Y(L)}Kt(t){for(const n of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(n,t.Tt):this.Qt(n,t.key,t.Tt);for(const n of t.removedTargetIds)this.Qt(n,t.key,t.Tt)}jt(t){this.forEachTarget(t,n=>{const s=this.Wt(n);switch(t.state){case 0:this.zt(n)&&s.Dt(t.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(t.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(t.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(t){const n=t.targetId,s=t.Et.count,r=this.Yt(n);if(r){const i=r.target;if(Or(i))if(s===0){const o=new _(i.path);this.Qt(n,o,at.newNoDocument(o,C.min()))}else V(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(t){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Or(a.target)){const c=new _(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,at.newNoDocument(c,t))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=N();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(t));const r=new Us(t,n,this.Ut,this.Lt,s);return this.Lt=Nt(),this.qt=Ao(),this.Ut=new Y(L),r}Gt(t,n){if(!this.zt(t))return;const s=this.te(t,n.key)?2:0;this.Wt(t).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(t))}Qt(t,n,s){if(!this.zt(t))return;const r=this.Wt(t);this.te(t,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(t)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(t){this.Bt.delete(t)}Xt(t){const n=this.Wt(t).Ct();return this.$t.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ot(t){this.Wt(t).Ot()}Wt(t){let n=this.Bt.get(t);return n||(n=new ko,this.Bt.set(t,n)),n}ee(t){let n=this.qt.get(t);return n||(n=new Y(L),this.qt=this.qt.insert(t,n)),n}zt(t){const n=this.Yt(t)!==null;return n||E("WatchChangeAggregator","Detected inactive target",t),n}Yt(t){const n=this.Bt.get(t);return n&&n.Vt?null:this.$t.ne(t)}Ht(t){this.Bt.set(t,new ko),this.$t.getRemoteKeysForTarget(t).forEach(n=>{this.Qt(t,n,null)})}te(t,n){return this.$t.getRemoteKeysForTarget(t).has(n)}}function Ao(){return new J(_.comparator)}function No(){return new J(_.comparator)}/**
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
 */const Ud=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Bd=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),qd=(()=>({and:"AND",or:"OR"}))();class jd{constructor(t,n){this.databaseId=t,this.wt=n}}function hs(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function nu(e,t){return e.wt?t.toBase64():t.toUint8Array()}function $d(e,t){return hs(e,t.toTimestamp())}function _t(e){return V(!!e),C.fromTimestamp(function(t){const n=Ut(t);return new X(n.seconds,n.nanos)}(e))}function Ei(e,t){return function(n){return new q(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function su(e){const t=q.fromString(e);return V(au(t)),t}function Mr(e,t){return Ei(e.databaseId,t.path)}function ar(e,t){const n=su(t);if(n.get(1)!==e.databaseId.projectId)throw new b(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new b(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new _(ru(n))}function Pr(e,t){return Ei(e.databaseId,t)}function Kd(e){const t=su(e);return t.length===4?q.emptyPath():ru(t)}function Fr(e){return new q(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ru(e){return V(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Ro(e,t,n){return{name:Mr(e,t),fields:n.value.mapValue.fields}}function Hd(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(c,u){return c.wt?(V(u===void 0||typeof u=="string"),ht.fromBase64String(u||"")):(V(u===void 0||u instanceof Uint8Array),ht.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?y.UNKNOWN:Wc(c.code);return new b(u,c.message||"")}(o);n=new eu(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=ar(e,s.document.name),i=_t(s.document.updateTime),o=s.document.createTime?_t(s.document.createTime):C.min(),a=new gt({mapValue:{fields:s.document.fields}}),c=at.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new $n(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=ar(e,s.document),i=s.readTime?_t(s.readTime):C.min(),o=at.newNoDocument(r,i),a=s.removedTargetIds||[];n=new $n([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=ar(e,s.document),i=s.removedTargetIds||[];n=new $n([],i,r,null)}else{if(!("filter"in t))return I();{t.filter;const s=t.filter;s.targetId;const r=s.count||0,i=new Od(r),o=s.targetId;n=new tu(o,i)}}return n}function zd(e,t){let n;if(t instanceof Vs)n={update:Ro(e,t.key,t.value)};else if(t instanceof Qc)n={delete:Mr(e,t.key)};else if(t instanceof ce)n={update:Ro(e,t.key,t.data),updateMask:em(t.fieldMask)};else{if(!(t instanceof Rd))return I();n={verify:Mr(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof us)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ne)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof dn)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ls)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw I()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:$d(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:I()}(e,t.precondition)),n}function Gd(e,t){return e&&e.length>0?(V(t!==void 0),e.map(n=>function(s,r){let i=s.updateTime?_t(s.updateTime):_t(r);return i.isEqual(C.min())&&(i=_t(r)),new kd(i,s.transformResults||[])}(n,t))):[]}function Qd(e,t){return{documents:[Pr(e,t.path)]}}function Wd(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Pr(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Pr(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return ou(bt.create(c,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:me(l.field),direction:Jd(l.dir)}}(u))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.wt||xs(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function Xd(e){let t=Kd(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){V(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:t=t.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=iu(l);return h instanceof bt&&xc(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Ye(pe(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,xs(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new cs(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new cs(f,h)}(n.endAt)),yd(t,r,o,i,a,"F",c,u)}function Yd(e,t){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function iu(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=pe(t.unaryFilter.field);return W.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=pe(t.unaryFilter.field);return W.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=pe(t.unaryFilter.field);return W.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=pe(t.unaryFilter.field);return W.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}(e):e.fieldFilter!==void 0?function(t){return W.create(pe(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return bt.create(t.compositeFilter.filters.map(n=>iu(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return I()}}(t.compositeFilter.op))}(e):I()}function Jd(e){return Ud[e]}function Zd(e){return Bd[e]}function tm(e){return qd[e]}function me(e){return{fieldPath:e.canonicalString()}}function pe(e){return ct.fromServerFormat(e.fieldPath)}function ou(e){return e instanceof W?function(t){if(t.op==="=="){if(vo(t.value))return{unaryFilter:{field:me(t.field),op:"IS_NAN"}};if(yo(t.value))return{unaryFilter:{field:me(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(vo(t.value))return{unaryFilter:{field:me(t.field),op:"IS_NOT_NAN"}};if(yo(t.value))return{unaryFilter:{field:me(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:me(t.field),op:Zd(t.op),value:t.value}}}(e):e instanceof bt?function(t){const n=t.getFilters().map(s=>ou(s));return n.length===1?n[0]:{compositeFilter:{op:tm(t.op),filters:n}}}(e):I()}function em(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function au(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class nm{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&Ad(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Je(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Je(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Jc();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=zc(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(C.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),N())}isEqual(t){return this.batchId===t.batchId&&Ce(this.mutations,t.mutations,(n,s)=>So(n,s))&&Ce(this.baseMutations,t.baseMutations,(n,s)=>So(n,s))}}class _i{constructor(t,n,s,r){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(t,n,s){V(t.mutations.length===s.length);let r=Md;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new _i(t,n,s,r)}}/**
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
 */class sm{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Jt{constructor(t,n,s,r,i=C.min(),o=C.min(),a=ht.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Jt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
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
 */class rm{constructor(t){this.ie=t}}function im(e){const t=Xd({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?xr(t,t.limit,"L"):t}/**
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
 */class om{constructor(){this.Je=new am}addToCollectionParentIndex(t,n){return this.Je.add(n),p.resolve()}getCollectionParents(t,n){return p.resolve(this.Je.getEntries(n))}addFieldIndex(t,n){return p.resolve()}deleteFieldIndex(t,n){return p.resolve()}getDocumentsMatchingTarget(t,n){return p.resolve(null)}getIndexType(t,n){return p.resolve(0)}getFieldIndexes(t,n){return p.resolve([])}getNextCollectionGroupToUpdate(t){return p.resolve(null)}getMinOffset(t,n){return p.resolve(Vt.min())}getMinOffsetFromCollectionGroup(t,n){return p.resolve(Vt.min())}updateCollectionGroup(t,n,s){return p.resolve()}updateIndexEntries(t,n){return p.resolve()}}class am{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new Y(q.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new Y(q.comparator)).toArray()}}/**
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
 */class cm{constructor(){this.changes=new qe(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,at.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?p.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class um{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class lm{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(s!==null&&Je(s.mutation,r,wt.empty(),X.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,N()).next(()=>s))}getLocalViewOfDocuments(t,n,s=N()){const r=Qt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=Ge();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=Qt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,N()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=Nt();const o=Ze(),a=Ze();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof ce)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Je(l.mutation,u,l.mutation.getFieldMask(),X.now())):o.set(u.key,wt.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new um(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Ze();let r=new J((o,a)=>o-a),i=N();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||wt.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||N()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Jc();l.forEach(f=>{if(!i.has(f)){const d=zc(n.get(f),s.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return p.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return _.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Ed(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):p.resolve(Qt());let a=-1,c=i;return o.next(u=>p.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?p.resolve():this.remoteDocumentCache.getEntry(t,l).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,c,u,N())).next(l=>({batchId:a,changes:Yc(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new _(n)).next(s=>{let r=Ge();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=Ge();return this.indexManager.getCollectionParents(t,r).next(o=>p.forEach(o,a=>{const c=function(u,l){return new Ls(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(t,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,at.newInvalidDocument(u)))});let o=Ge();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Je(u.mutation,c,wt.empty(),X.now()),wi(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class hm{constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return p.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:_t(s.createTime)}),p.resolve()}getNamedQuery(t,n){return p.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(s){return{name:s.name,query:im(s.bundledQuery),readTime:_t(s.readTime)}}(n)),p.resolve()}}/**
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
 */class fm{constructor(){this.overlays=new J(_.comparator),this.es=new Map}getOverlay(t,n){return p.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Qt();return p.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.oe(t,n,i)}),p.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),p.resolve()}getOverlaysForCollection(t,n,s){const r=Qt(),i=n.length+1,o=new _(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return p.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new J((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=Qt(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Qt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return p.resolve(a)}oe(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new sm(n,s));let i=this.es.get(n);i===void 0&&(i=N(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
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
 */class Ti{constructor(){this.ns=new Y(Z.ss),this.rs=new Y(Z.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const s=new Z(t,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.cs(new Z(t,n))}hs(t,n){t.forEach(s=>this.removeReference(s,n))}ls(t){const n=new _(new q([])),s=new Z(n,t),r=new Z(n,t+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new _(new q([])),s=new Z(n,t),r=new Z(n,t+1);let i=N();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new Z(t,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Z{constructor(t,n){this.key=t,this._s=n}static ss(t,n){return _.comparator(t.key,n.key)||L(t._s,n._s)}static os(t,n){return L(t._s,n._s)||_.comparator(t.key,n.key)}}/**
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
 */class dm{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Y(Z.ss)}checkEmpty(t){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new nm(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new Z(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(t,n){return p.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return p.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Z(n,0),r=new Z(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),p.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Y(L);return n.forEach(r=>{const i=new Z(r,0),o=new Z(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),p.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;_.isDocumentKey(i)||(i=i.child(""));const o=new Z(new _(i),0);let a=new Y(L);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),p.resolve(this.Is(a))}Is(t){const n=[];return t.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){V(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return p.forEach(n.mutations,r=>{const i=new Z(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.gs=s})}An(t){}containsKey(t,n){const s=new Z(n,0),r=this.gs.firstAfterOrEqual(s);return p.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,p.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class mm{constructor(t){this.Es=t,this.docs=new J(_.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return p.resolve(s?s.document.mutableCopy():at.newInvalidDocument(n))}getEntries(t,n){let s=Nt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():at.newInvalidDocument(r))}),p.resolve(s)}getAllFromCollection(t,n,s){let r=Nt();const i=new _(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||td(Zf(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return p.resolve(r)}getAllFromCollectionGroup(t,n,s,r){I()}As(t,n){return p.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new pm(this)}getSize(t){return p.resolve(this.size)}}class pm extends cm{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(t,r)):this.Yn.removeEntry(s)}),p.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
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
 */class gm{constructor(t){this.persistence=t,this.Rs=new qe(n=>gi(n),yi),this.lastRemoteSnapshotVersion=C.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ti,this.targetCount=0,this.vs=Re.Pn()}forEachTarget(t,n){return this.Rs.forEach((s,r)=>n(r)),p.resolve()}getLastRemoteSnapshotVersion(t){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return p.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),p.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new Re(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,p.resolve()}updateTargetData(t,n){return this.Dn(n),p.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),p.waitFor(i).next(()=>r)}getTargetCount(t){return p.resolve(this.targetCount)}getTargetData(t,n){const s=this.Rs.get(n)||null;return p.resolve(s)}addMatchingKeys(t,n,s){return this.Ps.us(n,s),p.resolve()}removeMatchingKeys(t,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),p.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),p.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Ps.ds(n);return p.resolve(s)}containsKey(t,n){return p.resolve(this.Ps.containsKey(n))}}/**
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
 */class ym{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new mi(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new gm(this),this.indexManager=new om,this.remoteDocumentCache=function(s){return new mm(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new rm(n),this.Ns=new hm(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new fm,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Vs[t.toKey()];return s||(s=new dm(n,this.referenceDelegate),this.Vs[t.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,s){E("MemoryPersistence","Starting transaction:",t);const r=new vm(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(t,n){return p.or(Object.values(this.Vs).map(s=>()=>s.containsKey(t,n)))}}class vm extends nd{constructor(t){super(),this.currentSequenceNumber=t}}class bi{constructor(t){this.persistence=t,this.Fs=new Ti,this.$s=null}static Bs(t){return new bi(t)}get Ls(){if(this.$s)return this.$s;throw I()}addReference(t,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),p.resolve()}removeReference(t,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),p.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),p.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}ks(){this.$s=new Set}Os(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Ls,s=>{const r=_.fromPath(s);return this.qs(t,r).next(i=>{i||n.removeEntry(r,C.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.qs(t,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}qs(t,n){return p.or([()=>p.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ms(t,n)])}}/**
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
 */class Ii{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Si=s,this.Di=r}static Ci(t,n){let s=N(),r=N();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ii(t,n.fromCache,s,r)}}/**
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
 */class wm{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,s,r){return this.ki(t,n).next(i=>i||this.Oi(t,n,r,s)).next(i=>i||this.Mi(t,n))}ki(t,n){if(bo(n))return p.resolve(null);let s=At(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=xr(n,null,"F"),s=At(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=N(...i);return this.Ni.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(t,xr(n,null,"F")):this.Bi(t,u,n,c)}))})))}Oi(t,n,s,r){return bo(n)||r.isEqual(C.min())?this.Mi(t,n):this.Ni.getDocuments(t,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(t,n):(mo()<=x.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Lr(n)),this.Bi(t,o,n,Jf(r,-1)))})}Fi(t,n){let s=new Y(Uc(t));return n.forEach((r,i)=>{wi(t,i)&&(s=s.add(i))}),s}$i(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(t,n){return mo()<=x.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",Lr(n)),this.Ni.getDocumentsMatchingQuery(t,n,Vt.min())}Bi(t,n,s,r){return this.Ni.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Em{constructor(t,n,s,r){this.persistence=t,this.Li=n,this.yt=r,this.qi=new J(L),this.Ui=new qe(i=>gi(i),yi),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(s)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new lm(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.qi))}}function _m(e,t,n,s){return new Em(e,t,n,s)}async function cu(e,t){const n=D(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=N();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function Tm(e,t){const n=D(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=p.resolve();return h.forEach(d=>{f=f.next(()=>u.getEntry(a,d)).next(m=>{const g=c.docVersions.get(d);V(g!==null),m.version.compareTo(g)<0&&(l.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),u.addEntry(m)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,t,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=N();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,r))})}function uu(e){const t=D(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function bm(e,t){const n=D(e),s=t.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];t.targetChanges.forEach((l,h)=>{const f=r.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.has(h)?d=d.withResumeToken(ht.EMPTY_BYTE_STRING,C.min()).withLastLimboFreeSnapshotVersion(C.min()):l.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(l.resumeToken,s)),r=r.insert(h,d),function(m,g,v){return m.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(f,d,l)&&a.push(n.Cs.updateTargetData(i,d))});let c=Nt(),u=N();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Im(i,o,t.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!s.isEqual(C.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return p.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.qi=r,i))}function Im(e,t,n){let s=N(),r=N();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=Nt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(C.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):E("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function Sm(e,t){const n=D(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function Cm(e,t){const n=D(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,t).next(i=>i?(r=i,p.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Jt(t,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(t,s.targetId)),s})}async function Vr(e,t,n){const s=D(e),r=s.qi.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!kn(o))throw o;E("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.qi=s.qi.remove(t),s.Ui.delete(r.target)}function Oo(e,t,n){const s=D(e);let r=C.min(),i=N();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=D(a),h=l.Ui.get(u);return h!==void 0?p.resolve(l.qi.get(h)):l.Cs.getTargetData(c,u)}(s,o,At(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,t,n?r:C.min(),n?i:N())).next(a=>(Dm(s,_d(t),a),{documents:a,Hi:i})))}function Dm(e,t,n){let s=e.Ki.get(t)||C.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.Ki.set(t,s)}class xo{constructor(){this.activeTargetIds=Zc()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class km{constructor(){this.Lr=new xo,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,n,s){this.qr[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new xo,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Am{Ur(t){}shutdown(){}}/**
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
 */class Lo{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){E("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){E("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Nm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Rm{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
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
 */class Om extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,n,s,r,i){const o=this.ho(t,n);E("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(t,o,a,s).then(c=>(E("RestConnection","Received: ",c),c),c=>{throw kr("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}_o(t,n,s,r,i,o){return this.ao(t,n,s,r,i)}lo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Be,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}ho(t,n){const s=Nm[t];return`${this.oo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,n,s,r){return new Promise((i,o)=>{const a=new jf;a.setWithCredentials(!0),a.listenOnce(Uf.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case or.NO_ERROR:const u=a.getResponseJson();E("Connection","XHR received:",JSON.stringify(u)),i(u);break;case or.TIMEOUT:E("Connection",'RPC "'+t+'" timed out'),o(new b(y.DEADLINE_EXCEEDED,"Request time out"));break;case or.HTTP_ERROR:const l=a.getStatus();if(E("Connection",'RPC "'+t+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const d=function(m){const g=m.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(g)>=0?g:y.UNKNOWN}(f.status);o(new b(d,f.message))}else o(new b(y.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new b(y.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{E("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(t,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Ff(),o=Vf(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new qf({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");E("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const f=new Rm({Hr:m=>{h?E("Connection","Not sending because WebChannel is closed:",m):(l||(E("Connection","Opening WebChannel transport."),u.open(),l=!0),E("Connection","WebChannel sending:",m),u.send(m))},Jr:()=>u.close()}),d=(m,g,v)=>{m.listen(g,T=>{try{v(T)}catch(R){setTimeout(()=>{throw R},0)}})};return d(u,Pn.EventType.OPEN,()=>{h||E("Connection","WebChannel transport opened.")}),d(u,Pn.EventType.CLOSE,()=>{h||(h=!0,E("Connection","WebChannel transport closed"),f.io())}),d(u,Pn.EventType.ERROR,m=>{h||(h=!0,kr("Connection","WebChannel transport errored:",m),f.io(new b(y.UNAVAILABLE,"The operation could not be completed")))}),d(u,Pn.EventType.MESSAGE,m=>{var g;if(!h){const v=m.data[0];V(!!v);const T=v,R=T.error||((g=T[0])===null||g===void 0?void 0:g.error);if(R){E("Connection","WebChannel received error:",R);const A=R.status;let P=function(U){const et=H[U];if(et!==void 0)return Wc(et)}(A),ft=R.message;P===void 0&&(P=y.INTERNAL,ft="Unknown error status: "+A+" with message "+R.message),h=!0,f.io(new b(P,ft)),u.close()}else E("Connection","WebChannel received:",v),f.ro(v)}}),d(o,Bf.STAT_EVENT,m=>{m.stat===ho.PROXY?E("Connection","Detected buffering proxy"):m.stat===ho.NOPROXY&&E("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function cr(){return typeof document<"u"?document:null}/**
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
 */function Bs(e){return new jd(e,!0)}class lu{constructor(t,n,s=1e3,r=1.5,i=6e4){this.Hs=t,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&E("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class hu{constructor(t,n,s,r,i,o,a,c){this.Hs=t,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new lu(t,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,t!==4?this.xo.reset():n&&n.code===y.RESOURCE_EXHAUSTED?(kt(n.toString()),kt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{t(()=>{const r=new b(y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(t,n){const s=this.Ko(this.So);this.stream=this.jo(t,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(t){return E("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return n=>{this.Hs.enqueueAndForget(()=>this.So===t?n():(E("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xm extends hu{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.xo.reset();const n=Hd(this.yt,t),s=function(r){if(!("targetChange"in r))return C.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?C.min():i.readTime?_t(i.readTime):C.min()}(t);return this.listener.Wo(n,s)}zo(t){const n={};n.database=Fr(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=Or(a)?{documents:Qd(r,a)}:{query:Wd(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=nu(r,i.resumeToken):i.snapshotVersion.compareTo(C.min())>0&&(o.readTime=hs(r,i.snapshotVersion.toTimestamp())),o}(this.yt,t);const s=Yd(this.yt,t);s&&(n.labels=s),this.Bo(n)}Ho(t){const n={};n.database=Fr(this.yt),n.removeTarget=t,this.Bo(n)}}class Lm extends hu{constructor(t,n,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(V(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const n=Gd(t.writeResults,t.commitTime),s=_t(t.commitTime);return this.listener.Zo(s,n)}return V(!t.writeResults||t.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=Fr(this.yt),this.Bo(t)}Xo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>zd(this.yt,s))};this.Bo(n)}}/**
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
 */class Mm extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new b(y.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new b(y.UNKNOWN,r.toString())})}_o(t,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new b(y.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class Pm{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,t==="Online"&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(kt(n),this.ou=!1):E("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class Fm{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{ue(this)&&(E("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=D(a);c._u.add(4),await Nn(c),c.gu.set("Unknown"),c._u.delete(4),await qs(c)}(this))})}),this.gu=new Pm(s,r)}}async function qs(e){if(ue(e))for(const t of e.wu)await t(!0)}async function Nn(e){for(const t of e.wu)await t(!1)}function fu(e,t){const n=D(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Di(n)?Ci(n):je(n).ko()&&Si(n,t))}function du(e,t){const n=D(e),s=je(n);n.du.delete(t),s.ko()&&mu(n,t),n.du.size===0&&(s.ko()?s.Fo():ue(n)&&n.gu.set("Unknown"))}function Si(e,t){e.yu.Ot(t.targetId),je(e).zo(t)}function mu(e,t){e.yu.Ot(t),je(e).Ho(t)}function Ci(e){e.yu=new Vd({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),je(e).start(),e.gu.uu()}function Di(e){return ue(e)&&!je(e).No()&&e.du.size>0}function ue(e){return D(e)._u.size===0}function pu(e){e.yu=void 0}async function Vm(e){e.du.forEach((t,n)=>{Si(e,t)})}async function Um(e,t){pu(e),Di(e)?(e.gu.hu(t),Ci(e)):e.gu.set("Unknown")}async function Bm(e,t,n){if(e.gu.set("Online"),t instanceof eu&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(e,t)}catch(s){E("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await fs(e,s)}else if(t instanceof $n?e.yu.Kt(t):t instanceof tu?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(C.min()))try{const s=await uu(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.du.get(c);u&&r.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(ht.EMPTY_BYTE_STRING,c.snapshotVersion)),mu(r,a);const u=new Jt(c.target,a,1,c.sequenceNumber);Si(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){E("RemoteStore","Failed to raise snapshot:",s),await fs(e,s)}}async function fs(e,t,n){if(!kn(t))throw t;e._u.add(1),await Nn(e),e.gu.set("Offline"),n||(n=()=>uu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{E("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await qs(e)})}function gu(e,t){return t().catch(n=>fs(e,n,t))}async function js(e){const t=D(e),n=Bt(t);let s=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;qm(t);)try{const r=await Sm(t.localStore,s);if(r===null){t.fu.length===0&&n.Fo();break}s=r.batchId,jm(t,r)}catch(r){await fs(t,r)}yu(t)&&vu(t)}function qm(e){return ue(e)&&e.fu.length<10}function jm(e,t){e.fu.push(t);const n=Bt(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function yu(e){return ue(e)&&!Bt(e).No()&&e.fu.length>0}function vu(e){Bt(e).start()}async function $m(e){Bt(e).eu()}async function Km(e){const t=Bt(e);for(const n of e.fu)t.Xo(n.mutations)}async function Hm(e,t,n){const s=e.fu.shift(),r=_i.from(s,t,n);await gu(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await js(e)}async function zm(e,t){t&&Bt(e).Yo&&await async function(n,s){if(r=s.code,xd(r)&&r!==y.ABORTED){const i=n.fu.shift();Bt(n).Mo(),await gu(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await js(n)}var r}(e,t),yu(e)&&vu(e)}async function Mo(e,t){const n=D(e);n.asyncQueue.verifyOperationInProgress(),E("RemoteStore","RemoteStore received new credentials");const s=ue(n);n._u.add(3),await Nn(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await qs(n)}async function Gm(e,t){const n=D(e);t?(n._u.delete(2),await qs(n)):t||(n._u.add(2),await Nn(n),n.gu.set("Unknown"))}function je(e){return e.pu||(e.pu=function(t,n,s){const r=D(t);return r.su(),new xm(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(e.datastore,e.asyncQueue,{Yr:Vm.bind(null,e),Zr:Um.bind(null,e),Wo:Bm.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Mo(),Di(e)?Ci(e):e.gu.set("Unknown")):(await e.pu.stop(),pu(e))})),e.pu}function Bt(e){return e.Iu||(e.Iu=function(t,n,s){const r=D(t);return r.su(),new Lm(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(e.datastore,e.asyncQueue,{Yr:$m.bind(null,e),Zr:zm.bind(null,e),tu:Km.bind(null,e),Zo:Hm.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Mo(),await js(e)):(await e.Iu.stop(),e.fu.length>0&&(E("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
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
 */class ki{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new ki(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(y.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ai(e,t){if(kt("AsyncQueue",`${t}: ${e}`),kn(e))return new b(y.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class _e{constructor(t){this.comparator=t?(n,s)=>t(n,s)||_.comparator(n.key,s.key):(n,s)=>_.comparator(n.key,s.key),this.keyedMap=Ge(),this.sortedSet=new J(this.comparator)}static emptySet(t){return new _e(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof _e)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new _e;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class Po{constructor(){this.Tu=new J(_.comparator)}track(t){const n=t.doc.key,s=this.Tu.get(n);s?t.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,t):t.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Tu=this.Tu.remove(n):t.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):I():this.Tu=this.Tu.insert(n,t)}Eu(){const t=[];return this.Tu.inorderTraversal((n,s)=>{t.push(s)}),t}}class Oe{constructor(t,n,s,r,i,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Oe(t,n,_e.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ms(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Qm{constructor(){this.Au=void 0,this.listeners=[]}}class Wm{constructor(){this.queries=new qe(t=>Vc(t),Ms),this.onlineState="Unknown",this.Ru=new Set}}async function Xm(e,t){const n=D(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Qm),r)try{i.Au=await n.onListen(s)}catch(o){const a=Ai(o,`Initialization of query '${Lr(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.bu(n.onlineState),i.Au&&t.Pu(i.Au)&&Ni(n)}async function Ym(e,t){const n=D(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Jm(e,t){const n=D(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Ni(n)}function Zm(e,t,n){const s=D(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function Ni(e){e.Ru.forEach(t=>{t.next()})}class tp{constructor(t,n,s){this.query=t,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new Oe(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),n=!0):this.Cu(t,this.onlineState)&&(this.xu(t),n=!0),this.Su=t,n}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),n=!0),n}Cu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Du(t){if(t.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(t){t=Oe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}/**
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
 */class wu{constructor(t){this.key=t}}class Eu{constructor(t){this.key=t}}class ep{constructor(t,n){this.query=t,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=N(),this.mutatedKeys=N(),this.Gu=Uc(t),this.Qu=new _e(this.Gu)}get ju(){return this.qu}Wu(t,n){const s=n?n.zu:new Po,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((l,h)=>{const f=r.get(l),d=wi(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),g=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let v=!1;f&&d?f.data.isEqual(d.data)?m!==g&&(s.track({type:3,doc:d}),v=!0):this.Hu(f,d)||(s.track({type:2,doc:d}),v=!0,(c&&this.Gu(d,c)>0||u&&this.Gu(d,u)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),v=!0):f&&!d&&(s.track({type:1,doc:f}),v=!0,(c||u)&&(a=!0)),v&&(d?(o=o.add(d),i=g?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const i=t.zu.Eu();i.sort((u,l)=>function(h,f){const d=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return d(h)-d(f)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new Oe(this.query,t.Qu,r,i,t.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Po,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.qu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=N(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return t.forEach(s=>{this.Ku.has(s)||n.push(new Eu(s))}),this.Ku.forEach(s=>{t.has(s)||n.push(new wu(s))}),n}tc(t){this.qu=t.Hi,this.Ku=N();const n=this.Wu(t.documents);return this.applyChanges(n,!0)}ec(){return Oe.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class np{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class sp{constructor(t){this.key=t,this.nc=!1}}class rp{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new qe(a=>Vc(a),Ms),this.rc=new Map,this.oc=new Set,this.uc=new J(_.comparator),this.cc=new Map,this.ac=new Ti,this.hc={},this.lc=new Map,this.fc=Re.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function ip(e,t){const n=pp(e);let s,r;const i=n.ic.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await Cm(n.localStore,At(t));n.isPrimaryClient&&fu(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await op(n,t,s,a==="current",o.resumeToken)}return r}async function op(e,t,n,s,r){e._c=(h,f,d)=>async function(m,g,v,T){let R=g.view.Wu(v);R.$i&&(R=await Oo(m.localStore,g.query,!1).then(({documents:ft})=>g.view.Wu(ft,R)));const A=T&&T.targetChanges.get(g.targetId),P=g.view.applyChanges(R,m.isPrimaryClient,A);return Vo(m,g.targetId,P.Xu),P.snapshot}(e,h,f,d);const i=await Oo(e.localStore,t,!0),o=new ep(t,i.Hi),a=o.Wu(i.documents),c=An.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",r),u=o.applyChanges(a,e.isPrimaryClient,c);Vo(e,n,u.Xu);const l=new np(t,n,o);return e.ic.set(t,l),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),u.snapshot}async function ap(e,t){const n=D(e),s=n.ic.get(t),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Ms(i,t))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Vr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),du(n.remoteStore,s.targetId),Ur(n,s.targetId)}).catch(Dn)):(Ur(n,s.targetId),await Vr(n.localStore,s.targetId,!0))}async function cp(e,t,n){const s=gp(e);try{const r=await function(i,o){const a=D(i),c=X.now(),u=o.reduce((f,d)=>f.add(d.key),N());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=Nt(),m=N();return a.Gi.getEntries(f,u).next(g=>{d=g,d.forEach((v,T)=>{T.isValidDocument()||(m=m.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(g=>{l=g;const v=[];for(const T of o){const R=Nd(T,l.get(T.key).overlayedDocument);R!=null&&v.push(new ce(T.key,R,Fc(R.value.mapValue),Ct.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,v,o)}).next(g=>{h=g;const v=g.applyToLocalDocumentSet(l,m);return a.documentOverlayCache.saveOverlays(f,g.batchId,v)})}).then(()=>({batchId:h.batchId,changes:Yc(l)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new J(L)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Rn(s,r.changes),await js(s.remoteStore)}catch(r){const i=Ai(r,"Failed to persist write");n.reject(i)}}async function _u(e,t){const n=D(e);try{const s=await bm(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(V(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?V(o.nc):r.removedDocuments.size>0&&(V(o.nc),o.nc=!1))}),await Rn(n,s,t)}catch(s){await Dn(s)}}function Fo(e,t,n){const s=D(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=D(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&Ni(a)}(s.eventManager,t),r.length&&s.sc.Wo(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function up(e,t,n){const s=D(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.cc.get(t),i=r&&r.key;if(i){let o=new J(_.comparator);o=o.insert(i,at.newNoDocument(i,C.min()));const a=N().add(i),c=new Us(C.min(),new Map,new Y(L),o,a);await _u(s,c),s.uc=s.uc.remove(i),s.cc.delete(t),Ri(s)}else await Vr(s.localStore,t,!1).then(()=>Ur(s,t,n)).catch(Dn)}async function lp(e,t){const n=D(e),s=t.batch.batchId;try{const r=await Tm(n.localStore,t);bu(n,s,null),Tu(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Rn(n,r)}catch(r){await Dn(r)}}async function hp(e,t,n){const s=D(e);try{const r=await function(i,o){const a=D(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(V(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,t);bu(s,t,n),Tu(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Rn(s,r)}catch(r){await Dn(r)}}function Tu(e,t){(e.lc.get(t)||[]).forEach(n=>{n.resolve()}),e.lc.delete(t)}function bu(e,t,n){const s=D(e);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),s.hc[s.currentUser.toKey()]=r}}function Ur(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.rc.get(t))e.ic.delete(s),n&&e.sc.wc(s,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(s=>{e.ac.containsKey(s)||Iu(e,s)})}function Iu(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);n!==null&&(du(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),Ri(e))}function Vo(e,t,n){for(const s of n)s instanceof wu?(e.ac.addReference(s.key,t),fp(e,s)):s instanceof Eu?(E("SyncEngine","Document no longer in limbo: "+s.key),e.ac.removeReference(s.key,t),e.ac.containsKey(s.key)||Iu(e,s.key)):I()}function fp(e,t){const n=t.key,s=n.path.canonicalString();e.uc.get(n)||e.oc.has(s)||(E("SyncEngine","New document in limbo: "+n),e.oc.add(s),Ri(e))}function Ri(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new _(q.fromString(t)),s=e.fc.next();e.cc.set(s,new sp(n)),e.uc=e.uc.insert(n,s),fu(e.remoteStore,new Jt(At(vi(n.path)),s,2,mi.at))}}async function Rn(e,t,n){const s=D(e),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,t,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=Ii.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const u=D(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>p.forEach(c,h=>p.forEach(h.Si,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>p.forEach(h.Di,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!kn(l))throw l;E("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.qi.get(h),d=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(d);u.qi=u.qi.insert(h,m)}}}(s.localStore,i))}async function dp(e,t){const n=D(e);if(!n.currentUser.isEqual(t)){E("SyncEngine","User change. New user:",t.toKey());const s=await cu(n.localStore,t);n.currentUser=t,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new b(y.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Rn(n,s.ji)}}function mp(e,t){const n=D(e),s=n.cc.get(t);if(s&&s.nc)return N().add(s.key);{let r=N();const i=n.rc.get(t);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function pp(e){const t=D(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=_u.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=mp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=up.bind(null,t),t.sc.Wo=Jm.bind(null,t.eventManager),t.sc.wc=Zm.bind(null,t.eventManager),t}function gp(e){const t=D(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=lp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=hp.bind(null,t),t}class yp{constructor(){this.synchronizeTabs=!1}async initialize(t){this.yt=Bs(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,n){return null}Ec(t,n){return null}Ic(t){return _m(this.persistence,new wm,t.initialUser,this.yt)}yc(t){return new ym(bi.Bs,this.yt)}gc(t){return new km}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class vp{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Fo(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=dp.bind(null,this.syncEngine),await Gm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Wm}createDatastore(t){const n=Bs(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new Om(r));var r;return function(i,o,a,c){return new Mm(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>Fo(this.syncEngine,a,0),o=Lo.C()?new Lo:new Am,new Fm(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,c,u){const l=new rp(s,r,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=D(t);E("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Nn(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function wp(e,t,n){if(!n)throw new b(y.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ep(e,t,n,s){if(t===!0&&s===!0)throw new b(y.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Uo(e){if(!_.isDocumentKey(e))throw new b(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Oi(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function Te(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new b(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Oi(e);throw new b(y.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */const Bo=new Map;class qo{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new b(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new b(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Ep("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class xi{constructor(t,n,s,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new b(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new b(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qo(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new $f;switch(n.type){case"gapi":const s=n.client;return new Gf(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new b(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Bo.get(t);n&&(E("ComponentProvider","Removing Datastore"),Bo.delete(t),n.terminate())}(this),Promise.resolve()}}function _p(e,t,n,s={}){var r;const i=(e=Te(e,xi))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==t&&kr("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=ot.MOCK_USER;else{o=Il(s.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new b(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ot(c)}e._authCredentials=new Kf(new Cc(o,a))}}/**
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
 */class vt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new vt(this.firestore,t,this._key)}}class $s{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new $s(this.firestore,t,this._query)}}class mn extends $s{constructor(t,n,s){super(t,n,vi(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new vt(this.firestore,null,new _(t))}withConverter(t){return new mn(this.firestore,t,this._path)}}function Tp(e,t,...n){if(e=Ft(e),arguments.length===1&&(t=Dc.R()),wp("doc","path",t),e instanceof xi){const s=q.fromString(t,...n);return Uo(s),new vt(e,null,new _(s))}{if(!(e instanceof vt||e instanceof mn))throw new b(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(q.fromString(t,...n));return Uo(s),new vt(e.firestore,e instanceof mn?e.converter:null,new _(s))}}/**
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
 */class bp{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):kt("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class Ip{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=ot.UNAUTHENTICATED,this.clientId=Dc.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{E("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(E("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new b(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Yt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Ai(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Sp(e,t){e.asyncQueue.verifyOperationInProgress(),E("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await cu(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Cp(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Dp(e);E("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>Mo(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>Mo(t.remoteStore,i)),e.onlineComponents=t}async function Dp(e){return e.offlineComponents||(E("FirestoreClient","Using default OfflineComponentProvider"),await Sp(e,new yp)),e.offlineComponents}async function Su(e){return e.onlineComponents||(E("FirestoreClient","Using default OnlineComponentProvider"),await Cp(e,new vp)),e.onlineComponents}function kp(e){return Su(e).then(t=>t.syncEngine)}async function jo(e){const t=await Su(e),n=t.eventManager;return n.onListen=ip.bind(null,t.syncEngine),n.onUnlisten=ap.bind(null,t.syncEngine),n}class Ap{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new lu(this,"async_queue_retry"),this.Wc=()=>{const n=cr();n&&E("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=cr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const n=cr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Yt;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!kn(t))throw t;E("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw kt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(t,n,s){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const r=ki.createAndSchedule(this,t,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&I()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.Uc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.Uc.indexOf(t);this.Uc.splice(n,1)}}function $o(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(e,["next","error","complete"])}class ds extends xi{constructor(t,n,s,r){super(t,n,s,r),this.type="firestore",this._queue=new Ap,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Du(this),this._firestoreClient.terminate()}}function Np(e,t){const n=typeof e=="object"?e:kh(),s=typeof e=="string"?e:t||"(default)",r=Ih(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=_l("firestore");i&&_p(r,...i)}return r}function Cu(e){return e._firestoreClient||Du(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Du(e){var t;const n=e._freezeSettings(),s=function(r,i,o,a){return new sd(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Ip(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
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
 */class xe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new xe(ht.fromBase64String(t))}catch(n){throw new b(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new xe(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Ks{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new b(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Hs{constructor(t){this._methodName=t}}/**
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
 */class Li{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new b(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new b(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return L(this._lat,t._lat)||L(this._long,t._long)}}/**
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
 */const Rp=/^__.*__$/;class ku{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new ce(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Au(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class zs{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new zs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ia({path:s,oa:!1});return r.ua(t),r}ca(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ia({path:s,oa:!1});return r.na(),r}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return ms(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(t.length===0)throw this.ha("Document fields must not be empty");if(Au(this.sa)&&Rp.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class Op{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.yt=s||Bs(t)}da(t,n,s,r=!1){return new zs({sa:t,methodName:n,fa:s,path:ct.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function xp(e){const t=e._freezeSettings(),n=Bs(e._databaseId);return new Op(e._databaseId,!!t.ignoreUndefinedProperties,n)}class Gs extends Hs{_toFieldTransform(t){if(t.sa!==2)throw t.sa===1?t.ha(`${this._methodName}() can only appear at the top level of your update data`):t.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Gs}}function Lp(e,t,n){return new zs({sa:3,fa:t.settings.fa,methodName:e._methodName,oa:n},t.databaseId,t.yt,t.ignoreUndefinedProperties)}class Mp extends Hs{constructor(t,n){super(t),this._a=n}_toFieldTransform(t){const n=Lp(this,t,!0),s=this._a.map(i=>On(i,n)),r=new Ne(s);return new Cd(t.path,r)}isEqual(t){return this===t}}function Pp(e,t,n,s){const r=e.da(1,t,n);Ru("Data must be an object, but it was:",r,s);const i=[],o=gt.empty();ae(s,(c,u)=>{const l=Mi(t,c,n);u=Ft(u);const h=r.ca(l);if(u instanceof Gs)i.push(l);else{const f=On(u,h);f!=null&&(i.push(l),o.set(l,f))}});const a=new wt(i);return new ku(o,a,r.fieldTransforms)}function Fp(e,t,n,s,r,i){const o=e.da(1,t,n),a=[Ko(t,s,n)],c=[r];if(i.length%2!=0)throw new b(y.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Ko(t,i[f])),c.push(i[f+1]);const u=[],l=gt.empty();for(let f=a.length-1;f>=0;--f)if(!Bp(u,a[f])){const d=a[f];let m=c[f];m=Ft(m);const g=o.ca(d);if(m instanceof Gs)u.push(d);else{const v=On(m,g);v!=null&&(u.push(d),l.set(d,v))}}const h=new wt(u);return new ku(l,h,o.fieldTransforms)}function On(e,t){if(Nu(e=Ft(e)))return Ru("Unsupported field value:",t,e),Vp(e,t);if(e instanceof Hs)return function(n,s){if(!Au(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&t.sa!==4)throw t.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=On(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=Ft(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return bd(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=X.fromDate(n);return{timestampValue:hs(s.yt,r)}}if(n instanceof X){const r=new X(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:hs(s.yt,r)}}if(n instanceof Li)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof xe)return{bytesValue:nu(s.yt,n._byteString)};if(n instanceof vt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ei(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Oi(n)}`)}(e,t)}function Vp(e,t){const n={};return kc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ae(e,(s,r)=>{const i=On(r,t.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Nu(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof X||e instanceof Li||e instanceof xe||e instanceof vt||e instanceof Hs)}function Ru(e,t,n){if(!Nu(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Oi(n);throw s==="an object"?t.ha(e+" a custom object"):t.ha(e+" "+s)}}function Ko(e,t,n){if((t=Ft(t))instanceof Ks)return t._internalPath;if(typeof t=="string")return Mi(e,t);throw ms("Field path arguments must be of type string or ",e,!1,void 0,n)}const Up=new RegExp("[~\\*/\\[\\]]");function Mi(e,t,n){if(t.search(Up)>=0)throw ms(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ks(...t.split("."))._internalPath}catch{throw ms(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ms(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new b(y.INVALID_ARGUMENT,a+e+c)}function Bp(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class Ou{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new qp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(xu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qp extends Ou{data(){return super.data()}}function xu(e,t){return typeof t=="string"?Mi(e,t):t instanceof Ks?t._internalPath:t._delegate._internalPath}/**
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
 */function jp(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new b(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $p{convertValue(t,n="none"){switch(re(t)){case 0:return null;case 1:return t.booleanValue;case 2:return z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(De(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){const s={};return ae(t.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new Li(z(t.latitude),z(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Nc(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(hn(t));default:return null}}convertTimestamp(t){const n=Ut(t);return new X(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=q.fromString(t);V(au(s));const r=new ln(s.get(1),s.get(3)),i=new _(s.popFirst(5));return r.isEqual(n)||kt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class Qe{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Lu extends Ou{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Kn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(xu("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Kn extends Lu{data(t={}){return super.data(t)}}class Kp{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new Qe(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Kn(this._firestore,this._userDataWriter,s.key,s,new Qe(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new b(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Kn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Qe(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Kn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Qe(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:Hp(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Hp(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}class Mu extends $p{constructor(t){super(),this.firestore=t}convertBytes(t){return new xe(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function zp(e,t,n,...s){e=Te(e,vt);const r=Te(e.firestore,ds),i=xp(r);let o;return o=typeof(t=Ft(t))=="string"||t instanceof Ks?Fp(i,"updateDoc",e._key,t,n,s):Pp(i,"updateDoc",e._key,t),Qp(r,[o.toMutation(e._key,Ct.exists(!0))])}function Gp(e,...t){var n,s,r;e=Ft(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||$o(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if($o(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),t[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,u,l;if(e instanceof vt)u=Te(e.firestore,ds),l=vi(e._key.path),c={next:h=>{t[o]&&t[o](Wp(u,e,h))},error:t[o+1],complete:t[o+2]};else{const h=Te(e,$s);u=Te(h.firestore,ds),l=h._query;const f=new Mu(u);c={next:d=>{t[o]&&t[o](new Kp(u,f,h,d))},error:t[o+1],complete:t[o+2]},jp(e._query)}return function(h,f,d,m){const g=new bp(m),v=new tp(f,g,d);return h.asyncQueue.enqueueAndForget(async()=>Xm(await jo(h),v)),()=>{g.bc(),h.asyncQueue.enqueueAndForget(async()=>Ym(await jo(h),v))}}(Cu(u),l,a,c)}function Qp(e,t){return function(n,s){const r=new Yt;return n.asyncQueue.enqueueAndForget(async()=>cp(await kp(n),s,r)),r.promise}(Cu(e),t)}function Wp(e,t,n){const s=n.docs.get(t._key),r=new Mu(e);return new Lu(e,r,t._key,s,new Qe(n.hasPendingWrites,n.fromCache),t.converter)}function Xp(...e){return new Mp("arrayUnion",e)}(function(e,t=!0){(function(n){Be=n})(Dh),Jn(new en("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new ds(new Hf(n.getProvider("auth-internal")),new Wf(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new b(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ln(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),we(fo,"3.8.1",e),we(fo,"3.8.1","esm2017")})();const Yp={apiKey:"AIzaSyDbBV7DT8DNmxyLPUB_w0skCx6bQjDIDhE",authDomain:"nocontextquotes-86d30.firebaseapp.com",projectId:"nocontextquotes-86d30",storageBucket:"nocontextquotes-86d30.appspot.com",messagingSenderId:"704558739601",appId:"1:704558739601:web:f92bb50736b7c0cb360f30",measurementId:"G-RHFY5NDBMG"},Jp=_a(Yp),Zp=Np(Jp);function Pu(e){const t=e-1;return t*t*t+1}function tg(e,{delay:t=0,duration:n=400,easing:s=Le}={}){const r=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:s,css:i=>`opacity: ${i*r}`}}function eg(e,{delay:t=0,duration:n=400,easing:s=Pu,x:r=0,y:i=0,opacity:o=0}={}){const a=getComputedStyle(e),c=+a.opacity,u=a.transform==="none"?"":a.transform,l=c*(1-o);return{delay:t,duration:n,easing:s,css:(h,f)=>`
			transform: ${u} translate(${(1-h)*r}px, ${(1-h)*i}px);
			opacity: ${c-l*f}`}}function ng(e,{from:t,to:n},s={}){const r=getComputedStyle(e),i=r.transform==="none"?"":r.transform,[o,a]=r.transformOrigin.split(" ").map(parseFloat),c=t.left+t.width*o/n.width-(n.left+o),u=t.top+t.height*a/n.height-(n.top+a),{delay:l=0,duration:h=d=>Math.sqrt(d)*120,easing:f=Pu}=s;return{delay:l,duration:ie(h)?h(Math.sqrt(c*c+u*u)):h,easing:f,css:(d,m)=>{const g=m*c,v=m*u,T=d+m*t.width/n.width,R=d+m*t.height/n.height;return`transform: ${i} translate(${g}px, ${v}px) scale(${T}, ${R});`}}}const he=[];function Fu(e,t=k){let n;const s=new Set;function r(a){if(qt(e,a)&&(e=a,n)){const c=!he.length;for(const u of s)u[1](),he.push(u,e);if(c){for(let u=0;u<he.length;u+=2)he[u][0](he[u+1]);he.length=0}}}function i(a){r(a(e))}function o(a,c=k){const u=[a,c];return s.add(u),s.size===1&&(n=t(r)||k),a(e),()=>{s.delete(u),s.size===0&&(n(),n=null)}}return{set:r,update:i,subscribe:o}}const sg={duration:4e3,initial:1,next:0,pausable:!1,dismissable:!0,reversed:!1,intro:{x:256}},rg=()=>{const{subscribe:e,update:t}=Fu([]);let n=0;const s={},r=u=>u instanceof Object;return{subscribe:e,push:(u,l={})=>{const h={target:"default",...r(u)?u:{...l,msg:u}},f=s[h.target]||{},d={...sg,...f,...h,theme:{...f.theme,...h.theme},classes:[...f.classes||[],...h.classes||[]],id:++n};return t(m=>d.reversed?[...m,d]:[d,...m]),n},pop:u=>{t(l=>{if(!l.length||u===0)return[];if(r(u))return l.filter(f=>u(f));const h=u||Math.max(...l.map(f=>f.id));return l.filter(f=>f.id!==h)})},set:(u,l={})=>{const h=r(u)?{...u}:{...l,id:u};t(f=>{const d=f.findIndex(m=>m.id===h.id);return d>-1&&(f[d]={...f[d],...h}),f})},_init:(u="default",l={})=>(s[u]=l,s)}},pn=rg();function Ho(e){return Object.prototype.toString.call(e)==="[object Date]"}function Br(e,t){if(e===t||e!==e)return()=>e;const n=typeof e;if(n!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const s=t.map((r,i)=>Br(e[i],r));return r=>s.map(i=>i(r))}if(n==="object"){if(!e||!t)throw new Error("Object cannot be null");if(Ho(e)&&Ho(t)){e=e.getTime(),t=t.getTime();const i=t-e;return o=>new Date(e+o*i)}const s=Object.keys(t),r={};return s.forEach(i=>{r[i]=Br(e[i],t[i])}),i=>{const o={};return s.forEach(a=>{o[a]=r[a](i)}),o}}if(n==="number"){const s=t-e;return r=>e+r*s}throw new Error(`Cannot interpolate ${n} values`)}function ig(e,t={}){const n=Fu(e);let s,r=e;function i(o,a){if(e==null)return n.set(e=o),Promise.resolve();r=o;let c=s,u=!1,{delay:l=0,duration:h=400,easing:f=Le,interpolate:d=Br}=Zt(Zt({},t),a);if(h===0)return c&&(c.abort(),c=null),n.set(e=r),Promise.resolve();const m=ps()+l;let g;return s=gs(v=>{if(v<m)return!0;u||(g=d(e,o),typeof h=="function"&&(h=h(e,o)),u=!0),c&&(c.abort(),c=null);const T=v-m;return T>h?(n.set(e=o),!1):(n.set(e=g(f(T/h))),!0)}),s.promise}return{set:i,update:(o,a)=>i(o(r,e),a),subscribe:n.subscribe}}function og(e){let t,n=e[0].msg+"",s;return{c(){t=new Wu(!1),s=jt(),t.a=s},m(r,i){t.m(n,r,i),G(r,s,i)},p(r,i){i&1&&n!==(n=r[0].msg+"")&&t.p(n)},i:k,o:k,d(r){r&&j(s),r&&t.d()}}}function ag(e){let t,n,s;const r=[e[2]];var i=e[0].component.src;function o(a){let c={};for(let u=0;u<r.length;u+=1)c=Zt(c,r[u]);return{props:c}}return i&&(t=ji(i,o())),{c(){t&&Ie(t.$$.fragment),n=jt()},m(a,c){t&&te(t,a,c),G(a,n,c),s=!0},p(a,c){const u=c&4?da(r,[hl(a[2])]):{};if(i!==(i=a[0].component.src)){if(t){Me();const l=t;Q(l.$$.fragment,1,0,()=>{ee(l,1)}),Pe()}i?(t=ji(i,o()),Ie(t.$$.fragment),K(t.$$.fragment,1),te(t,n.parentNode,n)):t=null}else i&&t.$set(u)},i(a){s||(t&&K(t.$$.fragment,a),s=!0)},o(a){t&&Q(t.$$.fragment,a),s=!1},d(a){a&&j(n),t&&ee(t,a)}}}function zo(e){let t,n,s;return{c(){t=st("div"),F(t,"class","_toastBtn pe svelte-l65oht"),F(t,"role","button"),F(t,"tabindex","0")},m(r,i){G(r,t,i),n||(s=[Wt(t,"click",e[4]),Wt(t,"keydown",e[8])],n=!0)},p:k,d(r){r&&j(t),n=!1,Rt(s)}}}function cg(e){let t,n,s,r,i,o,a,c,u,l;const h=[ag,og],f=[];function d(g,v){return g[0].component?0:1}s=d(e),r=f[s]=h[s](e);let m=e[0].dismissable&&zo(e);return{c(){t=st("div"),n=st("div"),r.c(),i=Lt(),m&&m.c(),o=Lt(),a=st("progress"),F(n,"role","status"),F(n,"class","_toastMsg svelte-l65oht"),ge(n,"pe",e[0].component),F(a,"class","_toastBar svelte-l65oht"),a.value=e[1],F(t,"class","_toastItem svelte-l65oht"),ge(t,"pe",e[0].pausable)},m(g,v){G(g,t,v),pt(t,n),f[s].m(n,null),pt(t,i),m&&m.m(t,null),pt(t,o),pt(t,a),c=!0,u||(l=[Wt(t,"mouseenter",e[9]),Wt(t,"mouseleave",e[6])],u=!0)},p(g,[v]){let T=s;s=d(g),s===T?f[s].p(g,v):(Me(),Q(f[T],1,1,()=>{f[T]=null}),Pe(),r=f[s],r?r.p(g,v):(r=f[s]=h[s](g),r.c()),K(r,1),r.m(n,null)),(!c||v&1)&&ge(n,"pe",g[0].component),g[0].dismissable?m?m.p(g,v):(m=zo(g),m.c(),m.m(t,o)):m&&(m.d(1),m=null),(!c||v&2)&&(a.value=g[1]),(!c||v&1)&&ge(t,"pe",g[0].pausable)},i(g){c||(K(r),c=!0)},o(g){Q(r),c=!1},d(g){g&&j(t),f[s].d(),m&&m.d(),u=!1,Rt(l)}}}function ug(e,t,n){let s,{item:r}=t;const i=ig(r.initial,{duration:r.duration,easing:Le});Zo(e,i,A=>n(1,s=A));const o=()=>pn.pop(r.id),a=()=>{(s===1||s===0)&&o()};let c=r.initial,u=c,l=!1;const h=()=>{!l&&s!==c&&(i.set(s,{duration:0}),l=!0)},f=()=>{if(l){const A=r.duration,P=A-A*((s-u)/(c-u));i.set(c,{duration:P}).then(a),l=!1}};let d={};const m=(A,P="undefined")=>typeof A===P;let g;el((A=document)=>{if(m(A.hidden))return;const P=()=>A.hidden?h():f(),ft="visibilitychange";A.addEventListener(ft,P),g=()=>A.removeEventListener(ft,P),P()}),nl(()=>{m(r.onpop,"function")&&r.onpop(r.id),g&&g()});const T=A=>{A instanceof KeyboardEvent&&["Enter"," "].includes(A.key)&&o()},R=()=>{r.pausable&&h()};return e.$$set=A=>{"item"in A&&n(0,r=A.item)},e.$$.update=()=>{if(e.$$.dirty&1&&(m(r.progress)||n(0,r.next=r.progress,r)),e.$$.dirty&131&&c!==r.next&&(n(7,c=r.next),u=s,l=!1,i.set(c).then(a)),e.$$.dirty&1&&r.component){const{props:A={},sendIdTo:P}=r.component;n(2,d={...A,...P&&{[P]:r.id}})}},[r,s,d,i,o,h,f,c,T,R]}class lg extends yn{constructor(t){super(),gn(this,t,ug,cg,qt,{item:0})}}function Go(e,t,n){const s=e.slice();return s[5]=t[n],s}function Qo(e,t){let n,s,r,i,o,a,c,u,l=k,h;return s=new lg({props:{item:t[5]}}),{key:e,first:null,c(){n=st("li"),Ie(s.$$.fragment),r=Lt(),F(n,"class",i=Vi(t[5].classes.join(" "))+" svelte-yh90az"),F(n,"style",o=t[1](t[5].theme)),this.first=n},m(f,d){G(f,n,d),te(s,n,null),pt(n,r),h=!0},p(f,d){t=f;const m={};d&1&&(m.item=t[5]),s.$set(m),(!h||d&1&&i!==(i=Vi(t[5].classes.join(" "))+" svelte-yh90az"))&&F(n,"class",i),(!h||d&1&&o!==(o=t[1](t[5].theme)))&&F(n,"style",o)},r(){u=n.getBoundingClientRect()},f(){tl(n),l(),ua(n,u)},a(){l(),l=Zu(n,u,ng,{duration:200})},i(f){h||(K(s.$$.fragment,f),be(()=>{c&&c.end(1),a=ol(n,eg,t[5].intro),a.start()}),h=!0)},o(f){Q(s.$$.fragment,f),a&&a.invalidate(),c=al(n,tg,{}),h=!1},d(f){f&&j(n),ee(s),f&&c&&c.end()}}}function hg(e){let t,n=[],s=new Map,r,i=e[0];const o=a=>a[5].id;for(let a=0;a<i.length;a+=1){let c=Go(e,i,a),u=o(c);s.set(u,n[a]=Qo(u,c))}return{c(){t=st("ul");for(let a=0;a<n.length;a+=1)n[a].c();F(t,"class","_toastContainer svelte-yh90az")},m(a,c){G(a,t,c);for(let u=0;u<n.length;u+=1)n[u].m(t,null);r=!0},p(a,[c]){if(c&3){i=a[0],Me();for(let u=0;u<n.length;u+=1)n[u].r();n=ll(n,c,o,1,a,i,s,t,ul,Qo,null,Go);for(let u=0;u<n.length;u+=1)n[u].a();Pe()}},i(a){if(!r){for(let c=0;c<i.length;c+=1)K(n[c]);r=!0}},o(a){for(let c=0;c<n.length;c+=1)Q(n[c]);r=!1},d(a){a&&j(t);for(let c=0;c<n.length;c+=1)n[c].d()}}}function fg(e,t,n){let s;Zo(e,pn,c=>n(4,s=c));let{options:r={}}=t,{target:i="default"}=t,o;const a=c=>Object.keys(c).reduce((u,l)=>`${u}${l}:${c[l]};`,"");return e.$$set=c=>{"options"in c&&n(2,r=c.options),"target"in c&&n(3,i=c.target)},e.$$.update=()=>{e.$$.dirty&12&&pn._init(i,r),e.$$.dirty&24&&n(0,o=s.filter(c=>c.target===i))},[o,a,r,i,s]}class dg extends yn{constructor(t){super(),gn(this,t,fg,hg,qt,{options:2,target:3})}}const mg="modulepreload",pg=function(e){return"/"+e},Wo={},fe=function(t,n,s){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=pg(i),i in Wo)return;Wo[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let l=r.length-1;l>=0;l--){const h=r[l];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":mg,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};function gg(e){let t,n,s,r={ctx:e,current:null,token:null,hasCatch:!1,pending:bg,then:wg,catch:vg,blocks:[,,,]};return Wn(n=e[6](),r),{c(){t=jt(),r.block.c()},m(i,o){G(i,t,o),r.block.m(i,r.anchor=o),r.mount=()=>t.parentNode,r.anchor=t,s=!0},p(i,o){e=i,r.ctx=e,o&64&&n!==(n=e[6]())&&Wn(n,r)||fa(r,e,o)},i(i){s||(K(r.block),s=!0)},o(i){for(let o=0;o<3;o+=1){const a=r.blocks[o];Q(a)}s=!1},d(i){i&&j(t),r.block.d(i),r.token=null,r=null}}}function yg(e){let t,n;const s=e[24].default,r=ta(s,e,e[23],null);return{c(){t=st("div"),r&&r.c(),F(t,"class","typewriter-container svelte-1gv2i7t")},m(i,o){G(i,t,o),r&&r.m(t,null),n=!0},p(i,o){r&&r.p&&(!n||o&8388608)&&sa(r,s,i,i[23],n?na(s,i[23],o,null):ra(i[23]),null)},i(i){n||(K(r,i),n=!0)},o(i){Q(r,i),n=!1},d(i){i&&j(t),r&&r.d(i)}}}function vg(e){return{c:k,m:k,p:k,i:k,o:k,d:k}}function wg(e){let t,n,s,r={ctx:e,current:null,token:null,hasCatch:!1,pending:Tg,then:_g,catch:Eg,value:25,blocks:[,,,]};return Wn(n=e[7][e[0]](),r),{c(){t=jt(),r.block.c()},m(i,o){G(i,t,o),r.block.m(i,r.anchor=o),r.mount=()=>t.parentNode,r.anchor=t,s=!0},p(i,o){e=i,r.ctx=e,o&1&&n!==(n=e[7][e[0]]())&&Wn(n,r)||fa(r,e,o)},i(i){s||(K(r.block),s=!0)},o(i){for(let o=0;o<3;o+=1){const a=r.blocks[o];Q(a)}s=!1},d(i){i&&j(t),r.block.d(i),r.token=null,r=null}}}function Eg(e){return{c:k,m:k,p:k,i:k,o:k,d:k}}function _g(e){let t=e[4],n,s,r=e[4]&&ur(e);return{c(){r&&r.c(),n=jt()},m(i,o){r&&r.m(i,o),G(i,n,o),s=!0},p(i,o){i[4]?t?qt(t,i[4])?(r.d(1),r=ur(i),r.c(),r.m(n.parentNode,n)):r.p(i,o):(r=ur(i),r.c(),r.m(n.parentNode,n)):t&&(r.d(1),r=null),t=i[4]},i(i){s||(K(r),s=!0)},o(i){Q(r),s=!1},d(i){i&&j(n),r&&r.d(i)}}}function ur(e){let t,n,s,r,i;const o=e[24].default,a=ta(o,e,e[23],null);let c=[{class:"typewriter-container svelte-1gv2i7t"}],u={};for(let l=0;l<c.length;l+=1)u=Zt(u,c[l]);return{c(){t=st(e[4]),a&&a.c(),/-/.test(e[4])?Bi(t,u):Ui(t,u),ge(t,"cursor",e[1])},m(l,h){G(l,t,h),a&&a.m(t,null),s=!0,r||(i=ju(n=e[25].default(t,e[5])),r=!0)},p(l,h){a&&a.p&&(!s||h&8388608)&&sa(a,o,l,l[23],s?na(o,l[23],h,null):ra(l[23]),null),u=da(c,[{class:"typewriter-container svelte-1gv2i7t"}]),/-/.test(l[4])?Bi(t,u):Ui(t,u),n&&ie(n.update)&&h&32&&n.update.call(null,l[5]),ge(t,"cursor",l[1])},i(l){s||(K(a,l),s=!0)},o(l){Q(a,l),s=!1},d(l){l&&j(t),a&&a.d(l),r=!1,i()}}}function Tg(e){return{c:k,m:k,p:k,i:k,o:k,d:k}}function bg(e){let t,n=e[2]&&Xo();return{c(){n&&n.c(),t=jt()},m(s,r){n&&n.m(s,r),G(s,t,r)},p(s,r){s[2]?n||(n=Xo(),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:k,o:k,d(s){n&&n.d(s),s&&j(t)}}}function Xo(e){let t;return{c(){t=st("div"),t.innerHTML='<p class="typing"></p>',F(t,"class","typewriter-container cursor svelte-1gv2i7t")},m(n,s){G(n,t,s)},d(n){n&&j(t)}}}function Yo(e){let t,n,s,r;const i=[yg,gg],o=[];function a(c,u){return c[3]?0:1}return t=a(e),n=o[t]=i[t](e),{c(){n.c(),s=jt()},m(c,u){o[t].m(c,u),G(c,s,u),r=!0},p(c,u){let l=t;t=a(c),t===l?o[t].p(c,u):(Me(),Q(o[l],1,1,()=>{o[l]=null}),Pe(),n=o[t],n?n.p(c,u):(n=o[t]=i[t](c),n.c()),K(n,1),n.m(s.parentNode,s))},i(c){r||(K(n),r=!0)},o(c){Q(n),r=!1},d(c){o[t].d(c),c&&j(s)}}}function Ig(e){let t,n=e[8],s,r,i=Yo(e);return{c(){t=Lt(),i.c(),s=jt()},m(o,a){G(o,t,a),i.m(o,a),G(o,s,a),r=!0},p(o,[a]){a&256&&qt(n,n=o[8])?(Me(),Q(i,1,1,k),Pe(),i=Yo(o),i.c(),K(i,1),i.m(s.parentNode,s)):i.p(o,a)},i(o){r||(K(i),r=!0)},o(o){Q(i),r=!1},d(o){o&&j(t),o&&j(s),i.d(o)}}}function Sg(e,t,n){let s,r,i,o,a,c,u,l,h,{$$slots:f={},$$scope:d}=t,{mode:m="concurrent"}=t,{interval:g=30}=t,{cursor:v=!0}=t,{keepCursorOnFinish:T=!1}=t,{delay:R=0}=t,{showCursorOnDelay:A=!1}=t,{disabled:P=!1}=t,{element:ft="div"}=t,{scrambleDuration:U=3e3}=t,{scrambleSlowdown:et=!0}=t,{unwriteInterval:mt=30}=t,{wordInterval:Ot=1500}=t;const Vu={concurrent:()=>fe(()=>import("./concurrent.8922a122.js"),["assets/concurrent.8922a122.js","assets/writeEffect.ee61ce84.js","assets/animationSetup.6da38859.js"]),cascade:()=>fe(()=>import("./cascade.e111247a.js"),["assets/cascade.e111247a.js","assets/writeEffect.ee61ce84.js","assets/animationSetup.6da38859.js"]),loop:()=>fe(()=>import("./loop.dfea9bb4.js"),["assets/loop.dfea9bb4.js","assets/writeAndUnwriteText.47373349.js","assets/writeEffect.ee61ce84.js","assets/animationSetup.6da38859.js","assets/unwriteEffect.61366534.js"]),loopOnce:()=>fe(()=>import("./loopOnce.1463ad80.js"),["assets/loopOnce.1463ad80.js","assets/animationSetup.6da38859.js","assets/writeEffect.ee61ce84.js","assets/unwriteEffect.61366534.js"]),loopRandom:()=>fe(()=>import("./loopRandom.f41e0983.js"),["assets/loopRandom.f41e0983.js","assets/writeAndUnwriteText.47373349.js","assets/writeEffect.ee61ce84.js","assets/animationSetup.6da38859.js","assets/unwriteEffect.61366534.js"]),scramble:()=>fe(()=>import("./scramble.8f32a28a.js"),["assets/scramble.8f32a28a.js","assets/animationSetup.6da38859.js"])};return e.$$set=M=>{n(8,t=Zt(Zt({},t),Fi(M))),"mode"in M&&n(0,m=M.mode),"interval"in M&&n(9,g=M.interval),"cursor"in M&&n(1,v=M.cursor),"keepCursorOnFinish"in M&&n(10,T=M.keepCursorOnFinish),"delay"in M&&n(11,R=M.delay),"showCursorOnDelay"in M&&n(2,A=M.showCursorOnDelay),"disabled"in M&&n(3,P=M.disabled),"element"in M&&n(4,ft=M.element),"scrambleDuration"in M&&n(12,U=M.scrambleDuration),"scrambleSlowdown"in M&&n(13,et=M.scrambleSlowdown),"unwriteInterval"in M&&n(14,mt=M.unwriteInterval),"wordInterval"in M&&n(15,Ot=M.wordInterval),"$$scope"in M&&n(23,d=M.$$scope)},e.$$.update=()=>{e.$$.dirty&1&&n(21,s=/^loop(Once|Random)?$/.test(m)),e.$$.dirty&1&&n(22,r=["concurrent","cascade","loopOnce"].includes(m)),e.$$.dirty&4195328&&n(20,i=!r&&T),e.$$.dirty&2052&&n(19,o=R<1&&A),n(18,a=!s&&(t.unwriteInterval||t.wordInterval)),n(17,c=m!=="scramble"&&(t.scrambleDuration||t.scrambleSlowdown)),e.$$.dirty&1024&&n(16,u=typeof T=="number"&&T<1),e.$$.dirty&1048576&&i&&console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' is compatible only with finite modes"),e.$$.dirty&524288&&o&&console.warn("[svelte-typewriter] The prop 'showCursorOnDelay' has no effect if the delay is 0"),e.$$.dirty&262144&&a&&console.warn("[svelte-typewriter] The props 'unwriteInterval' and 'wordInterval' are only compatible with loop modes"),e.$$.dirty&131072&&c&&console.warn("[svelte-typewriter] The props 'scrambleDuration' and 'scrambleSlowdown' are only compatible with scramble mode"),e.$$.dirty&65536&&u&&console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' has no effect with values lower than 1"),e.$$.dirty&2048&&n(6,l=()=>new Promise(M=>setTimeout(()=>M(R),R))),e.$$.dirty&65054&&n(5,h={interval:g,cursor:v,keepCursorOnFinish:T,delay:R,showCursorOnDelay:A,disabled:P,element:ft,scrambleDuration:U,scrambleSlowdown:et,unwriteInterval:mt,wordInterval:Ot})},t=Fi(t),[m,v,A,P,ft,h,l,Vu,t,g,T,R,U,et,mt,Ot,u,c,a,o,i,s,r,d,f]}class Cg extends yn{constructor(t){super(),gn(this,t,Sg,Ig,qt,{mode:0,interval:9,cursor:1,keepCursorOnFinish:10,delay:11,showCursorOnDelay:2,disabled:3,element:4,scrambleDuration:12,scrambleSlowdown:13,unwriteInterval:14,wordInterval:15})}}function Dg(e){let t,n;return{c(){t=st("h1"),n=jr(e[1]),F(t,"id","random-text"),F(t,"class","svelte-14xde71")},m(s,r){G(s,t,r),pt(t,n)},p(s,r){r&2&&Qu(n,s[1])},d(s){s&&j(t)}}}function kg(e){let t,n,s,r,i,o,a,c,u,l,h,f;return s=new Cg({props:{mode:"concurrent",$$slots:{default:[Dg]},$$scope:{ctx:e}}}),{c(){t=st("div"),n=st("div"),Ie(s.$$.fragment),r=Lt(),i=st("button"),i.textContent="Load Random Quote",o=Lt(),a=st("input"),c=Lt(),u=st("button"),u.textContent="Add Quote",F(i,"class","random-button svelte-14xde71"),F(a,"id","new-quote-input"),F(a,"type","text"),F(a,"placeholder","Submit a new quote here"),F(a,"class","svelte-14xde71"),F(u,"class","random-button svelte-14xde71"),F(n,"class","heading svelte-14xde71"),F(t,"class","profile svelte-14xde71")},m(d,m){G(d,t,m),pt(t,n),te(s,n,null),pt(n,r),pt(n,i),pt(n,o),pt(n,a),qi(a,e[0]),pt(n,c),pt(n,u),l=!0,h||(f=[Wt(i,"click",e[2]),Wt(a,"input",e[4]),Wt(u,"click",e[3])],h=!0)},p(d,[m]){const g={};m&258&&(g.$$scope={dirty:m,ctx:d}),s.$set(g),m&1&&a.value!==d[0]&&qi(a,d[0])},i(d){l||(K(s.$$.fragment,d),l=!0)},o(d){Q(s.$$.fragment,d),l=!1},d(d){d&&j(t),ee(s),h=!1,Rt(f)}}}function Ag(e,t,n){const s=Tp(Zp,"quotes","quote_list");Gp(s,l=>{i=l.data().quote_list,console.log(i)});let r="",i=[],o=".";function a(){let l=o;for(;o==l;)n(1,o=i[Math.floor(Math.random()*i.length)])}async function c(){r!=""&&(pn.push("Submitting quote..."),await zp(s,{quote_list:Xp(r)}).then(()=>{pn.push("Quote submitted!"),n(0,r="")}))}function u(){r=this.value,n(0,r)}return[r,o,a,c,u]}class Ng extends yn{constructor(t){super(),gn(this,t,Ag,kg,qt,{})}}function Rg(e){let t,n,s,r;return t=new Ng({}),s=new dg({}),{c(){Ie(t.$$.fragment),n=Lt(),Ie(s.$$.fragment)},m(i,o){te(t,i,o),G(i,n,o),te(s,i,o),r=!0},p:k,i(i){r||(K(t.$$.fragment,i),K(s.$$.fragment,i),r=!0)},o(i){Q(t.$$.fragment,i),Q(s.$$.fragment,i),r=!1},d(i){ee(t,i),i&&j(n),ee(s,i)}}}class Og extends yn{constructor(t){super(),gn(this,t,null,Rg,qt,{})}}new Og({target:document.getElementById("app")});export{xg as c};
