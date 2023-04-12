(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function N(){}const de=e=>e;function Le(e,t){for(const n in t)e[n]=t[n];return e}function el(e){return!!e&&(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"}function va(e){return e()}function Yi(){return Object.create(null)}function Tt(e){e.forEach(va)}function Jt(e){return typeof e=="function"}function $t(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function nl(e){return Object.keys(e).length===0}function sl(e,...t){if(e==null)return N;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function wa(e,t,n){e.$$.on_destroy.push(sl(t,n))}function Ea(e,t,n,s){if(e){const r=_a(e,t,n,s);return e[0](r)}}function _a(e,t,n,s){return e[1]&&s?Le(n.ctx.slice(),e[1](s(t))):n.ctx}function ba(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const i=[],o=Math.max(t.dirty.length,r.length);for(let a=0;a<o;a+=1)i[a]=t.dirty[a]|r[a];return i}return t.dirty|r}return t.dirty}function Ta(e,t,n,s,r,i){if(r){const o=_a(t,n,s,i);e.p(o,r)}}function Ia(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let s=0;s<n;s++)t[s]=-1;return t}return-1}function Xi(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function Ji(e){return e==null?"":e}function Ca(e){return e&&Jt(e.destroy)?e.destroy:N}function Zi(e){const t=typeof e=="string"&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const Sa=typeof window<"u";let kn=Sa?()=>window.performance.now():()=>Date.now(),Zr=Sa?e=>requestAnimationFrame(e):N;const ke=new Set;function ka(e){ke.forEach(t=>{t.c(e)||(ke.delete(t),t.f())}),ke.size!==0&&Zr(ka)}function Dn(e){let t;return ke.size===0&&Zr(ka),{promise:new Promise(n=>{ke.add(t={c:e,f:n})}),abort(){ke.delete(t)}}}function P(e,t){e.appendChild(t)}function Da(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function rl(e){const t=V("style");return il(Da(e),t),t.sheet}function il(e,t){return P(e.head||e,t),t.sheet}function z(e,t,n){e.insertBefore(t,n||null)}function B(e){e.parentNode&&e.parentNode.removeChild(e)}function ol(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function V(e){return document.createElement(e)}function al(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function ue(e){return document.createTextNode(e)}function ct(){return ue(" ")}function jt(){return ue("")}function _t(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function I(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function cl(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const s in t)t[s]==null?e.removeAttribute(s):s==="style"?e.style.cssText=t[s]:s==="__value"?e.value=e[s]=t[s]:n[s]&&n[s].set?e[s]=t[s]:I(e,s,t[s])}function ul(e,t){Object.keys(t).forEach(n=>{ll(e,n,t[n])})}function ll(e,t,n){t in e?e[t]=typeof e[t]=="boolean"&&n===""?!0:n:I(e,t,n)}function hl(e){return/-/.test(e)?ul:cl}function fl(e){return Array.from(e.childNodes)}function un(e,t){t=""+t,e.data!==t&&(e.data=t)}function Ie(e,t){e.value=t==null?"":t}function Ce(e,t,n){e.classList[n?"add":"remove"](t)}function Aa(e,t,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,s,t),r}class dl{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,s=null){this.e||(this.is_svg?this.e=al(n.nodeName):this.e=V(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(t)),this.i(s)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)z(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(B)}}function to(e,t){return new e(t)}const ss=new Map;let rs=0;function pl(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function ml(e,t){const n={stylesheet:rl(t),rules:{}};return ss.set(e,n),n}function ln(e,t,n,s,r,i,o,a=0){const c=16.666/s;let u=`{
`;for(let v=0;v<=1;v+=c){const w=t+(n-t)*i(v);u+=v*100+`%{${o(w,1-w)}}
`}const l=u+`100% {${o(n,1-n)}}
}`,h=`__svelte_${pl(l)}_${a}`,f=Da(e),{stylesheet:d,rules:p}=ss.get(f)||ml(f,e);p[h]||(p[h]=!0,d.insertRule(`@keyframes ${h} ${l}`,d.cssRules.length));const m=e.style.animation||"";return e.style.animation=`${m?`${m}, `:""}${h} ${s}ms linear ${r}ms 1 both`,rs+=1,h}function hn(e,t){const n=(e.style.animation||"").split(", "),s=n.filter(t?i=>i.indexOf(t)<0:i=>i.indexOf("__svelte")===-1),r=n.length-s.length;r&&(e.style.animation=s.join(", "),rs-=r,rs||gl())}function gl(){Zr(()=>{rs||(ss.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&B(t)}),ss.clear())})}function yl(e,t,n,s){if(!t)return N;const r=e.getBoundingClientRect();if(t.left===r.left&&t.right===r.right&&t.top===r.top&&t.bottom===r.bottom)return N;const{delay:i=0,duration:o=300,easing:a=de,start:c=kn()+i,end:u=c+o,tick:l=N,css:h}=n(e,{from:t,to:r},s);let f=!0,d=!1,p;function m(){h&&(p=ln(e,0,1,o,i,a,h)),i||(d=!0)}function v(){h&&hn(e,p),f=!1}return Dn(w=>{if(!d&&w>=c&&(d=!0),d&&w>=u&&(l(1,0),v()),!f)return!1;if(d){const O=w-c,b=0+1*a(O/o);l(b,1-b)}return!0}),m(),l(0,1),v}function vl(e){const t=getComputedStyle(e);if(t.position!=="absolute"&&t.position!=="fixed"){const{width:n,height:s}=t,r=e.getBoundingClientRect();e.style.position="absolute",e.style.width=n,e.style.height=s,Na(e,r)}}function Na(e,t){const n=e.getBoundingClientRect();if(t.left!==n.left||t.top!==n.top){const s=getComputedStyle(e),r=s.transform==="none"?"":s.transform;e.style.transform=`${r} translate(${t.left-n.left}px, ${t.top-n.top}px)`}}let fn;function Lt(e){fn=e}function Ss(){if(!fn)throw new Error("Function called outside component initialization");return fn}function wl(e){Ss().$$.on_mount.push(e)}function El(e){Ss().$$.on_destroy.push(e)}function uy(){const e=Ss();return(t,n,{cancelable:s=!1}={})=>{const r=e.$$.callbacks[t];if(r){const i=Aa(t,n,{cancelable:s});return r.slice().forEach(o=>{o.call(e,i)}),!i.defaultPrevented}return!0}}const _e=[],eo=[];let De=[];const no=[],_l=Promise.resolve();let Tr=!1;function bl(){Tr||(Tr=!0,_l.then(ti))}function Gt(e){De.push(e)}const ir=new Set;let ve=0;function ti(){if(ve!==0)return;const e=fn;do{try{for(;ve<_e.length;){const t=_e[ve];ve++,Lt(t),Tl(t.$$)}}catch(t){throw _e.length=0,ve=0,t}for(Lt(null),_e.length=0,ve=0;eo.length;)eo.pop()();for(let t=0;t<De.length;t+=1){const n=De[t];ir.has(n)||(ir.add(n),n())}De.length=0}while(_e.length);for(;no.length;)no.pop()();Tr=!1,ir.clear(),Lt(e)}function Tl(e){if(e.fragment!==null){e.update(),Tt(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Gt)}}function Il(e){const t=[],n=[];De.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),De=t}let Xe;function ei(){return Xe||(Xe=Promise.resolve(),Xe.then(()=>{Xe=null})),Xe}function ie(e,t,n){e.dispatchEvent(Aa(`${t?"intro":"outro"}${n}`))}const Jn=new Set;let St;function qt(){St={r:0,c:[],p:St}}function zt(){St.r||Tt(St.c),St=St.p}function U(e,t){e&&e.i&&(Jn.delete(e),e.i(t))}function q(e,t,n,s){if(e&&e.o){if(Jn.has(e))return;Jn.add(e),St.c.push(()=>{Jn.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}const ni={duration:0};function Cl(e,t,n){const s={direction:"in"};let r=t(e,n,s),i=!1,o,a,c=0;function u(){o&&hn(e,o)}function l(){const{delay:f=0,duration:d=300,easing:p=de,tick:m=N,css:v}=r||ni;v&&(o=ln(e,0,1,d,f,p,v,c++)),m(0,1);const w=kn()+f,O=w+d;a&&a.abort(),i=!0,Gt(()=>ie(e,!0,"start")),a=Dn(b=>{if(i){if(b>=O)return m(1,0),ie(e,!0,"end"),u(),i=!1;if(b>=w){const x=p((b-w)/d);m(x,1-x)}}return i})}let h=!1;return{start(){h||(h=!0,hn(e),Jt(r)?(r=r(s),ei().then(l)):l())},invalidate(){h=!1},end(){i&&(u(),i=!1)}}}function Sl(e,t,n){const s={direction:"out"};let r=t(e,n,s),i=!0,o;const a=St;a.r+=1;function c(){const{delay:u=0,duration:l=300,easing:h=de,tick:f=N,css:d}=r||ni;d&&(o=ln(e,1,0,l,u,h,d));const p=kn()+u,m=p+l;Gt(()=>ie(e,!1,"start")),Dn(v=>{if(i){if(v>=m)return f(0,1),ie(e,!1,"end"),--a.r||Tt(a.c),!1;if(v>=p){const w=h((v-p)/l);f(1-w,w)}}return i})}return Jt(r)?ei().then(()=>{r=r(s),c()}):c(),{end(u){u&&r.tick&&r.tick(1,0),i&&(o&&hn(e,o),i=!1)}}}function so(e,t,n,s){const r={direction:"both"};let i=t(e,n,r),o=s?0:1,a=null,c=null,u=null;function l(){u&&hn(e,u)}function h(d,p){const m=d.b-o;return p*=Math.abs(m),{a:o,b:d.b,d:m,duration:p,start:d.start,end:d.start+p,group:d.group}}function f(d){const{delay:p=0,duration:m=300,easing:v=de,tick:w=N,css:O}=i||ni,b={start:kn()+p,b:d};d||(b.group=St,St.r+=1),a||c?c=b:(O&&(l(),u=ln(e,o,d,m,p,v,O)),d&&w(0,1),a=h(b,m),Gt(()=>ie(e,d,"start")),Dn(x=>{if(c&&x>c.start&&(a=h(c,m),c=null,ie(e,a.b,"start"),O&&(l(),u=ln(e,o,a.b,a.duration,0,v,i.css))),a){if(x>=a.end)w(o=a.b,1-o),ie(e,a.b,"end"),c||(a.b?l():--a.group.r||Tt(a.group.c)),a=null;else if(x>=a.start){const X=x-a.start;o=a.a+a.d*v(X/a.duration),w(o,1-o)}}return!!(a||c)}))}return{run(d){Jt(i)?ei().then(()=>{i=i(r),f(d)}):f(d)},end(){l(),a=c=null}}}function is(e,t){const n=t.token={};function s(r,i,o,a){if(t.token!==n)return;t.resolved=a;let c=t.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const u=r&&(t.current=r)(c);let l=!1;t.block&&(t.blocks?t.blocks.forEach((h,f)=>{f!==i&&h&&(qt(),q(h,1,1,()=>{t.blocks[f]===h&&(t.blocks[f]=null)}),zt())}):t.block.d(1),u.c(),U(u,1),u.m(t.mount(),t.anchor),l=!0),t.block=u,t.blocks&&(t.blocks[i]=u),l&&ti()}if(el(e)){const r=Ss();if(e.then(i=>{Lt(r),s(t.then,1,t.value,i),Lt(null)},i=>{if(Lt(r),s(t.catch,2,t.error,i),Lt(null),!t.hasCatch)throw i}),t.current!==t.pending)return s(t.pending,0),!0}else{if(t.current!==t.then)return s(t.then,1,t.value,e),!0;t.resolved=e}}function Ra(e,t,n){const s=t.slice(),{resolved:r}=e;e.current===e.then&&(s[e.value]=r),e.current===e.catch&&(s[e.error]=r),e.block.p(s,n)}function kl(e,t){q(e,1,1,()=>{t.delete(e.key)})}function Dl(e,t){e.f(),kl(e,t)}function Al(e,t,n,s,r,i,o,a,c,u,l,h){let f=e.length,d=i.length,p=f;const m={};for(;p--;)m[e[p].key]=p;const v=[],w=new Map,O=new Map,b=[];for(p=d;p--;){const H=h(r,i,p),D=n(H);let K=o.get(D);K?s&&b.push(()=>K.p(H,t)):(K=u(D,H),K.c()),w.set(D,v[p]=K),D in m&&O.set(D,Math.abs(p-m[D]))}const x=new Set,X=new Set;function tt(H){U(H,1),H.m(a,l),o.set(H.key,H),l=H.first,d--}for(;f&&d;){const H=v[d-1],D=e[f-1],K=H.key,Ot=D.key;H===D?(l=H.first,f--,d--):w.has(Ot)?!o.has(K)||x.has(K)?tt(H):X.has(Ot)?f--:O.get(K)>O.get(Ot)?(X.add(K),tt(H)):(x.add(Ot),f--):(c(D,o),f--)}for(;f--;){const H=e[f];w.has(H.key)||c(H,o)}for(;d;)tt(v[d-1]);return Tt(b),v}function Nl(e,t){const n={},s={},r={$$scope:1};let i=e.length;for(;i--;){const o=e[i],a=t[i];if(a){for(const c in o)c in a||(s[c]=1);for(const c in a)r[c]||(n[c]=a[c],r[c]=1);e[i]=a}else for(const c in o)r[c]=1}for(const o in s)o in n||(n[o]=void 0);return n}function Rl(e){return typeof e=="object"&&e!==null?e:{}}function Pt(e){e&&e.c()}function Dt(e,t,n,s){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),s||Gt(()=>{const o=e.$$.on_mount.map(va).filter(Jt);e.$$.on_destroy?e.$$.on_destroy.push(...o):Tt(o),e.$$.on_mount=[]}),i.forEach(Gt)}function At(e,t){const n=e.$$;n.fragment!==null&&(Il(n.after_update),Tt(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ol(e,t){e.$$.dirty[0]===-1&&(_e.push(e),bl(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function qe(e,t,n,s,r,i,o,a=[-1]){const c=fn;Lt(e);const u=e.$$={fragment:null,ctx:[],props:i,update:N,not_equal:r,bound:Yi(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Yi(),dirty:a,skip_bound:!1,root:t.target||c.$$.root};o&&o(u.root);let l=!1;if(u.ctx=n?n(e,t.props||{},(h,f,...d)=>{const p=d.length?d[0]:f;return u.ctx&&r(u.ctx[h],u.ctx[h]=p)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](p),l&&Ol(e,h)),f}):[],u.update(),l=!0,Tt(u.before_update),u.fragment=s?s(u.ctx):!1,t.target){if(t.hydrate){const h=fl(t.target);u.fragment&&u.fragment.l(h),h.forEach(B)}else u.fragment&&u.fragment.c();t.intro&&U(e.$$.fragment),Dt(e,t.target,t.anchor,t.customElement),ti()}Lt(c)}class ze{$destroy(){At(this,1),this.$destroy=N}$on(t,n){if(!Jt(n))return N;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!nl(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}/**
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
 */const Oa=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Ll=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},La={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,u=c?e[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,d=u&63;c||(d=64,o||(f=64)),s.push(n[l],n[h],n[f],n[d])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Oa(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ll(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const h=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw new xl;const f=i<<2|a>>4;if(s.push(f),u!==64){const d=a<<4&240|u>>2;if(s.push(d),h!==64){const p=u<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class xl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ml=function(e){const t=Oa(e);return La.encodeByteArray(t,!0)},os=function(e){return Ml(e).replace(/\./g,"")},Pl=function(e){try{return La.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Fl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vl=()=>Fl().__FIREBASE_DEFAULTS__,Ul=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Bl=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Pl(e[1]);return t&&JSON.parse(t)},xa=()=>{try{return Vl()||Ul()||Bl()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},$l=e=>{var t,n;return(n=(t=xa())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},jl=e=>{const t=$l(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},ql=()=>{var e;return(e=xa())===null||e===void 0?void 0:e.config};/**
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
 */class zl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function Hl(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[os(JSON.stringify(n)),os(JSON.stringify(o)),a].join(".")}function Kl(){try{return typeof indexedDB=="object"}catch{return!1}}function Gl(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
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
 */const Ql="FirebaseError";class He extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Ql,Object.setPrototypeOf(this,He.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ma.prototype.create)}}class Ma{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?Wl(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new He(r,a,s)}}function Wl(e,t){return e.replace(Yl,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Yl=/\{\$([^}]+)}/g;function Ir(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(ro(i)&&ro(o)){if(!Ir(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function ro(e){return e!==null&&typeof e=="object"}/**
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
 */function Qt(e){return e&&e._delegate?e._delegate:e}class dn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ee="[DEFAULT]";/**
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
 */class Xl{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new zl;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Zl(t))try{this.getOrInitializeService({instanceIdentifier:ee})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=ee){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ee){return this.instances.has(t)}getOptions(t=ee){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Jl(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=ee){return this.component?this.component.multipleInstances?t:ee:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jl(e){return e===ee?void 0:e}function Zl(e){return e.instantiationMode==="EAGER"}/**
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
 */class th{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Xl(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var $;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})($||($={}));const eh={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},nh=$.INFO,sh={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},rh=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=sh[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Pa{constructor(t){this.name=t,this._logLevel=nh,this._logHandler=rh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?eh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const ih=(e,t)=>t.some(n=>e instanceof n);let io,oo;function oh(){return io||(io=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ah(){return oo||(oo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fa=new WeakMap,Cr=new WeakMap,Va=new WeakMap,or=new WeakMap,si=new WeakMap;function ch(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Ht(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Fa.set(n,e)}).catch(()=>{}),si.set(t,e),t}function uh(e){if(Cr.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Cr.set(e,t)}let Sr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Cr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Va.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ht(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function lh(e){Sr=e(Sr)}function hh(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(ar(this),t,...n);return Va.set(s,t.sort?t.sort():[t]),Ht(s)}:ah().includes(e)?function(...t){return e.apply(ar(this),t),Ht(Fa.get(this))}:function(...t){return Ht(e.apply(ar(this),t))}}function fh(e){return typeof e=="function"?hh(e):(e instanceof IDBTransaction&&uh(e),ih(e,oh())?new Proxy(e,Sr):e)}function Ht(e){if(e instanceof IDBRequest)return ch(e);if(or.has(e))return or.get(e);const t=fh(e);return t!==e&&(or.set(e,t),si.set(t,e)),t}const ar=e=>si.get(e);function dh(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=Ht(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ht(o.result),c.oldVersion,c.newVersion,Ht(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const ph=["get","getKey","getAll","getAllKeys","count"],mh=["put","add","delete","clear"],cr=new Map;function ao(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(cr.get(t))return cr.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=mh.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||ph.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return cr.set(t,i),i}lh(e=>({...e,get:(t,n,s)=>ao(t,n)||e.get(t,n,s),has:(t,n)=>!!ao(t,n)||e.has(t,n)}));/**
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
 */class gh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yh(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function yh(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const kr="@firebase/app",co="0.9.7";/**
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
 */const le=new Pa("@firebase/app"),vh="@firebase/app-compat",wh="@firebase/analytics-compat",Eh="@firebase/analytics",_h="@firebase/app-check-compat",bh="@firebase/app-check",Th="@firebase/auth",Ih="@firebase/auth-compat",Ch="@firebase/database",Sh="@firebase/database-compat",kh="@firebase/functions",Dh="@firebase/functions-compat",Ah="@firebase/installations",Nh="@firebase/installations-compat",Rh="@firebase/messaging",Oh="@firebase/messaging-compat",Lh="@firebase/performance",xh="@firebase/performance-compat",Mh="@firebase/remote-config",Ph="@firebase/remote-config-compat",Fh="@firebase/storage",Vh="@firebase/storage-compat",Uh="@firebase/firestore",Bh="@firebase/firestore-compat",$h="firebase",jh="9.19.1";/**
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
 */const Dr="[DEFAULT]",qh={[kr]:"fire-core",[vh]:"fire-core-compat",[Eh]:"fire-analytics",[wh]:"fire-analytics-compat",[bh]:"fire-app-check",[_h]:"fire-app-check-compat",[Th]:"fire-auth",[Ih]:"fire-auth-compat",[Ch]:"fire-rtdb",[Sh]:"fire-rtdb-compat",[kh]:"fire-fn",[Dh]:"fire-fn-compat",[Ah]:"fire-iid",[Nh]:"fire-iid-compat",[Rh]:"fire-fcm",[Oh]:"fire-fcm-compat",[Lh]:"fire-perf",[xh]:"fire-perf-compat",[Mh]:"fire-rc",[Ph]:"fire-rc-compat",[Fh]:"fire-gcs",[Vh]:"fire-gcs-compat",[Uh]:"fire-fst",[Bh]:"fire-fst-compat","fire-js":"fire-js",[$h]:"fire-js-all"};/**
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
 */const as=new Map,Ar=new Map;function zh(e,t){try{e.container.addComponent(t)}catch(n){le.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function cs(e){const t=e.name;if(Ar.has(t))return le.debug(`There were multiple attempts to register component ${t}.`),!1;Ar.set(t,e);for(const n of as.values())zh(n,e);return!0}function Hh(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Kh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Kt=new Ma("app","Firebase",Kh);/**
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
 */class Gh{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
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
 */const Qh=jh;function Ua(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Dr,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw Kt.create("bad-app-name",{appName:String(r)});if(n||(n=ql()),!n)throw Kt.create("no-options");const i=as.get(r);if(i){if(Ir(n,i.options)&&Ir(s,i.config))return i;throw Kt.create("duplicate-app",{appName:r})}const o=new th(r);for(const c of Ar.values())o.addComponent(c);const a=new Gh(n,s,o);return as.set(r,a),a}function Wh(e=Dr){const t=as.get(e);if(!t&&e===Dr)return Ua();if(!t)throw Kt.create("no-app",{appName:e});return t}function Ae(e,t,n){var s;let r=(s=qh[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),le.warn(a.join(" "));return}cs(new dn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Yh="firebase-heartbeat-database",Xh=1,pn="firebase-heartbeat-store";let ur=null;function Ba(){return ur||(ur=dh(Yh,Xh,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(pn)}}}).catch(e=>{throw Kt.create("idb-open",{originalErrorMessage:e.message})})),ur}async function Jh(e){try{return(await Ba()).transaction(pn).objectStore(pn).get($a(e))}catch(t){if(t instanceof He)le.warn(t.message);else{const n=Kt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});le.warn(n.message)}}}async function uo(e,t){try{const s=(await Ba()).transaction(pn,"readwrite");return await s.objectStore(pn).put(t,$a(e)),s.done}catch(n){if(n instanceof He)le.warn(n.message);else{const s=Kt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});le.warn(s.message)}}}function $a(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Zh=1024,tf=30*24*60*60*1e3;class ef{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sf(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=lo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=tf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=lo(),{heartbeatsToSend:n,unsentEntries:s}=nf(this._heartbeatsCache.heartbeats),r=os(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function lo(){return new Date().toISOString().substring(0,10)}function nf(e,t=Zh){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ho(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ho(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class sf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kl()?Gl().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Jh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return uo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return uo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function ho(e){return os(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function rf(e){cs(new dn("platform-logger",t=>new gh(t),"PRIVATE")),cs(new dn("heartbeat",t=>new ef(t),"PRIVATE")),Ae(kr,co,e),Ae(kr,co,"esm2017"),Ae("fire-js","")}rf("");var of="firebase",af="9.19.1";/**
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
 */Ae(of,af,"app");var cf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},E,ri=ri||{},k=cf||self;function us(){}function ks(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function An(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function uf(e){return Object.prototype.hasOwnProperty.call(e,lr)&&e[lr]||(e[lr]=++lf)}var lr="closure_uid_"+(1e9*Math.random()>>>0),lf=0;function hf(e,t,n){return e.call.apply(e.bind,arguments)}function ff(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function mt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?mt=hf:mt=ff,mt.apply(null,arguments)}function zn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function lt(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function Zt(){this.s=this.s,this.o=this.o}var df=0;Zt.prototype.s=!1;Zt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),df!=0)&&uf(this)};Zt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ja=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function ii(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function fo(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ks(s)){const r=e.length||0,i=s.length||0;e.length=r+i;for(let o=0;o<i;o++)e[r+o]=s[o]}else e.push(s)}}function gt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}gt.prototype.h=function(){this.defaultPrevented=!0};var pf=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{k.addEventListener("test",us,t),k.removeEventListener("test",us,t)}catch{}return e}();function ls(e){return/^[\s\xa0]*$/.test(e)}var po=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function hr(e,t){return e<t?-1:e>t?1:0}function Ds(){var e=k.navigator;return e&&(e=e.userAgent)?e:""}function Ct(e){return Ds().indexOf(e)!=-1}function oi(e){return oi[" "](e),e}oi[" "]=us;function mf(e){var t=vf;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var gf=Ct("Opera"),xe=Ct("Trident")||Ct("MSIE"),qa=Ct("Edge"),Nr=qa||xe,za=Ct("Gecko")&&!(Ds().toLowerCase().indexOf("webkit")!=-1&&!Ct("Edge"))&&!(Ct("Trident")||Ct("MSIE"))&&!Ct("Edge"),yf=Ds().toLowerCase().indexOf("webkit")!=-1&&!Ct("Edge");function Ha(){var e=k.document;return e?e.documentMode:void 0}var hs;t:{var fr="",dr=function(){var e=Ds();if(za)return/rv:([^\);]+)(\)|;)/.exec(e);if(qa)return/Edge\/([\d\.]+)/.exec(e);if(xe)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(yf)return/WebKit\/(\S+)/.exec(e);if(gf)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(dr&&(fr=dr?dr[1]:""),xe){var pr=Ha();if(pr!=null&&pr>parseFloat(fr)){hs=String(pr);break t}}hs=fr}var vf={};function wf(){return mf(function(){let e=0;const t=po(String(hs)).split("."),n=po("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=hr(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||hr(r[2].length==0,i[2].length==0)||hr(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var Rr;if(k.document&&xe){var mo=Ha();Rr=mo||parseInt(hs,10)||void 0}else Rr=void 0;var Ef=Rr;function mn(e,t){if(gt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(za){t:{try{oi(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:_f[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&mn.X.h.call(this)}}lt(mn,gt);var _f={2:"touch",3:"pen",4:"mouse"};mn.prototype.h=function(){mn.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Nn="closure_listenable_"+(1e6*Math.random()|0),bf=0;function Tf(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=r,this.key=++bf,this.ba=this.ea=!1}function As(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ai(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Ka(e){const t={};for(const n in e)t[n]=e[n];return t}const go="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ga(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<go.length;i++)n=go[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Ns(e){this.src=e,this.g={},this.h=0}Ns.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Lr(e,t,s,r);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new Tf(t,this.src,i,!!s,r),t.ea=n,e.push(t)),t};function Or(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=ja(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(As(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Lr(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ba&&i.listener==t&&i.capture==!!n&&i.ha==s)return r}return-1}var ci="closure_lm_"+(1e6*Math.random()|0),mr={};function Qa(e,t,n,s,r){if(s&&s.once)return Ya(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Qa(e,t[i],n,s,r);return null}return n=hi(n),e&&e[Nn]?e.N(t,n,An(s)?!!s.capture:!!s,r):Wa(e,t,n,!1,s,r)}function Wa(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=An(r)?!!r.capture:!!r,a=li(e);if(a||(e[ci]=a=new Ns(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=If(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)pf||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(Ja(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function If(){function e(n){return t.call(e.src,e.listener,n)}const t=Cf;return e}function Ya(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Ya(e,t[i],n,s,r);return null}return n=hi(n),e&&e[Nn]?e.O(t,n,An(s)?!!s.capture:!!s,r):Wa(e,t,n,!0,s,r)}function Xa(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)Xa(e,t[i],n,s,r);else s=An(s)?!!s.capture:!!s,n=hi(n),e&&e[Nn]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Lr(i,n,s,r),-1<n&&(As(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=li(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Lr(t,n,s,r)),(n=-1<e?t[e]:null)&&ui(n))}function ui(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[Nn])Or(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Ja(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=li(t))?(Or(n,e),n.h==0&&(n.src=null,t[ci]=null)):As(e)}}}function Ja(e){return e in mr?mr[e]:mr[e]="on"+e}function Cf(e,t){if(e.ba)e=!0;else{t=new mn(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&ui(e),e=n.call(s,t)}return e}function li(e){return e=e[ci],e instanceof Ns?e:null}var gr="__closure_events_fn_"+(1e9*Math.random()>>>0);function hi(e){return typeof e=="function"?e:(e[gr]||(e[gr]=function(t){return e.handleEvent(t)}),e[gr])}function ot(){Zt.call(this),this.i=new Ns(this),this.P=this,this.I=null}lt(ot,Zt);ot.prototype[Nn]=!0;ot.prototype.removeEventListener=function(e,t,n,s){Xa(this,e,t,n,s)};function ut(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new gt(t,e);else if(t instanceof gt)t.target=t.target||e;else{var r=t;t=new gt(s,e),Ga(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=Hn(o,s,!0,t)&&r}if(o=t.g=e,r=Hn(o,s,!0,t)&&r,r=Hn(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=Hn(o,s,!1,t)&&r}ot.prototype.M=function(){if(ot.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)As(n[s]);delete e.g[t],e.h--}}this.I=null};ot.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};ot.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Hn(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Or(e.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var fi=k.JSON.stringify;function Sf(){var e=ec;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class kf{constructor(){this.h=this.g=null}add(t,n){const s=Za.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Za=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Df,e=>e.reset());class Df{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Af(e){k.setTimeout(()=>{throw e},0)}function tc(e,t){xr||Nf(),Mr||(xr(),Mr=!0),ec.add(e,t)}var xr;function Nf(){var e=k.Promise.resolve(void 0);xr=function(){e.then(Rf)}}var Mr=!1,ec=new kf;function Rf(){for(var e;e=Sf();){try{e.h.call(e.g)}catch(n){Af(n)}var t=Za;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Mr=!1}function Rs(e,t){ot.call(this),this.h=e||1,this.g=t||k,this.j=mt(this.lb,this),this.l=Date.now()}lt(Rs,ot);E=Rs.prototype;E.ca=!1;E.R=null;E.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ut(this,"tick"),this.ca&&(di(this),this.start()))}};E.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function di(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}E.M=function(){Rs.X.M.call(this),di(this),delete this.g};function pi(e,t,n){if(typeof e=="function")n&&(e=mt(e,n));else if(e&&typeof e.handleEvent=="function")e=mt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:k.setTimeout(e,t||0)}function nc(e){e.g=pi(()=>{e.g=null,e.i&&(e.i=!1,nc(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Of extends Zt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:nc(this)}M(){super.M(),this.g&&(k.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gn(e){Zt.call(this),this.h=e,this.g={}}lt(gn,Zt);var yo=[];function sc(e,t,n,s){Array.isArray(n)||(n&&(yo[0]=n.toString()),n=yo);for(var r=0;r<n.length;r++){var i=Qa(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function rc(e){ai(e.g,function(t,n){this.g.hasOwnProperty(n)&&ui(t)},e),e.g={}}gn.prototype.M=function(){gn.X.M.call(this),rc(this)};gn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Os(){this.g=!0}Os.prototype.Aa=function(){this.g=!1};function Lf(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function xf(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function Se(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Pf(e,n)+(s?" "+s:"")})}function Mf(e,t){e.info(function(){return"TIMEOUT: "+t})}Os.prototype.info=function(){};function Pf(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return fi(n)}catch{return t}}var pe={},vo=null;function Ls(){return vo=vo||new ot}pe.Pa="serverreachability";function ic(e){gt.call(this,pe.Pa,e)}lt(ic,gt);function yn(e){const t=Ls();ut(t,new ic(t))}pe.STAT_EVENT="statevent";function oc(e,t){gt.call(this,pe.STAT_EVENT,e),this.stat=t}lt(oc,gt);function vt(e){const t=Ls();ut(t,new oc(t,e))}pe.Qa="timingevent";function ac(e,t){gt.call(this,pe.Qa,e),this.size=t}lt(ac,gt);function Rn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return k.setTimeout(function(){e()},t)}var xs={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},cc={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function mi(){}mi.prototype.h=null;function wo(e){return e.h||(e.h=e.i())}function uc(){}var On={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function gi(){gt.call(this,"d")}lt(gi,gt);function yi(){gt.call(this,"c")}lt(yi,gt);var Pr;function Ms(){}lt(Ms,mi);Ms.prototype.g=function(){return new XMLHttpRequest};Ms.prototype.i=function(){return{}};Pr=new Ms;function Ln(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new gn(this),this.O=Ff,e=Nr?125:void 0,this.T=new Rs(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new lc}function lc(){this.i=null,this.g="",this.h=!1}var Ff=45e3,Fr={},fs={};E=Ln.prototype;E.setTimeout=function(e){this.O=e};function Vr(e,t,n){e.K=1,e.v=Fs(Ft(t)),e.s=n,e.P=!0,hc(e,null)}function hc(e,t){e.F=Date.now(),xn(e),e.A=Ft(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),wc(n.i,"t",s),e.C=0,n=e.l.H,e.h=new lc,e.g=Bc(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Of(mt(e.La,e,e.g),e.N)),sc(e.S,e.g,"readystatechange",e.ib),t=e.H?Ka(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),yn(),Lf(e.j,e.u,e.A,e.m,e.U,e.s)}E.ib=function(e){e=e.target;const t=this.L;t&&xt(e)==3?t.l():this.La(e)};E.La=function(e){try{if(e==this.g)t:{const l=xt(this.g);var t=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Nr||this.g&&(this.h.h||this.g.fa()||To(this.g)))){this.I||l!=4||t==7||(t==8||0>=h?yn(3):yn(2)),Ps(this);var n=this.g.aa();this.Y=n;e:if(fc(this)){var s=To(this.g);e="";var r=s.length,i=xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ne(this),sn(this);var o="";break e}this.h.i=new k.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,xf(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ls(a)){var u=a;break e}}u=null}if(n=u)Se(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ur(this,n);else{this.i=!1,this.o=3,vt(12),ne(this),sn(this);break t}}this.P?(dc(this,l,o),Nr&&this.i&&l==3&&(sc(this.S,this.T,"tick",this.hb),this.T.start())):(Se(this.j,this.m,o,null),Ur(this,o)),l==4&&ne(this),this.i&&!this.I&&(l==4?Pc(this.l,this):(this.i=!1,xn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,vt(12)):(this.o=0,vt(13)),ne(this),sn(this)}}}catch{}finally{}};function fc(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function dc(e,t,n){let s=!0,r;for(;!e.I&&e.C<n.length;)if(r=Vf(e,n),r==fs){t==4&&(e.o=4,vt(14),s=!1),Se(e.j,e.m,null,"[Incomplete Response]");break}else if(r==Fr){e.o=4,vt(15),Se(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Se(e.j,e.m,r,null),Ur(e,r);fc(e)&&r!=fs&&r!=Fr&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,vt(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ii(t),t.K=!0,vt(11))):(Se(e.j,e.m,n,"[Invalid Chunked Response]"),ne(e),sn(e))}E.hb=function(){if(this.g){var e=xt(this.g),t=this.g.fa();this.C<t.length&&(Ps(this),dc(this,e,t),this.i&&e!=4&&xn(this))}};function Vf(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?fs:(n=Number(t.substring(n,s)),isNaN(n)?Fr:(s+=1,s+n>t.length?fs:(t=t.substr(s,n),e.C=s+n,t)))}E.cancel=function(){this.I=!0,ne(this)};function xn(e){e.V=Date.now()+e.O,pc(e,e.O)}function pc(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Rn(mt(e.gb,e),t)}function Ps(e){e.B&&(k.clearTimeout(e.B),e.B=null)}E.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Mf(this.j,this.A),this.K!=2&&(yn(),vt(17)),ne(this),this.o=2,sn(this)):pc(this,this.V-e)};function sn(e){e.l.G==0||e.I||Pc(e.l,e)}function ne(e){Ps(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,di(e.T),rc(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Ur(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Br(n.h,e))){if(!e.J&&Br(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)ms(n),Bs(n);else break t;Ti(n),vt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Rn(mt(n.cb,n),6e3));if(1>=bc(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else se(n,11)}else if((e.J||n.g==e)&&ms(n),!ls(t))for(r=n.Fa.g.parse(t),t=0;t<r.length;t++){let u=r[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=e.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=s.h;i.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(vi(i,i.h),i.h=null))}if(s.D){const m=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(s.za=m,Q(s.F,s.D,m))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=Uc(s,s.H?s.ka:null,s.V),o.J){Tc(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Ps(a),xn(a)),s.g=o}else xc(s);0<n.i.length&&$s(n)}else u[0]!="stop"&&u[0]!="close"||se(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?se(n,7):bi(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}yn(4)}catch{}}function Uf(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(ks(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Bf(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(ks(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function mc(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(ks(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Bf(e),s=Uf(e),r=s.length,i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}var gc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $f(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function oe(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof oe){this.h=t!==void 0?t:e.h,ds(this,e.j),this.s=e.s,this.g=e.g,ps(this,e.m),this.l=e.l,t=e.i;var n=new vn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Eo(this,n),this.o=e.o}else e&&(n=String(e).match(gc))?(this.h=!!t,ds(this,n[1]||"",!0),this.s=Ze(n[2]||""),this.g=Ze(n[3]||"",!0),ps(this,n[4]),this.l=Ze(n[5]||"",!0),Eo(this,n[6]||"",!0),this.o=Ze(n[7]||"")):(this.h=!!t,this.i=new vn(null,this.h))}oe.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tn(t,_o,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(tn(t,_o,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(tn(n,n.charAt(0)=="/"?zf:qf,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",tn(n,Kf)),e.join("")};function Ft(e){return new oe(e)}function ds(e,t,n){e.j=n?Ze(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ps(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Eo(e,t,n){t instanceof vn?(e.i=t,Gf(e.i,e.h)):(n||(t=tn(t,Hf)),e.i=new vn(t,e.h))}function Q(e,t,n){e.i.set(t,n)}function Fs(e){return Q(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ze(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tn(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,jf),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function jf(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var _o=/[#\/\?@]/g,qf=/[#\?:]/g,zf=/[#\?]/g,Hf=/[#\?@]/g,Kf=/#/g;function vn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function te(e){e.g||(e.g=new Map,e.h=0,e.i&&$f(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}E=vn.prototype;E.add=function(e,t){te(this),this.i=null,e=Ke(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function yc(e,t){te(e),t=Ke(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function vc(e,t){return te(e),t=Ke(e,t),e.g.has(t)}E.forEach=function(e,t){te(this),this.g.forEach(function(n,s){n.forEach(function(r){e.call(t,r,s,this)},this)},this)};E.oa=function(){te(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const r=e[s];for(let i=0;i<r.length;i++)n.push(t[s])}return n};E.W=function(e){te(this);let t=[];if(typeof e=="string")vc(this,e)&&(t=t.concat(this.g.get(Ke(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};E.set=function(e,t){return te(this),this.i=null,e=Ke(this,e),vc(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};E.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function wc(e,t,n){yc(e,t),0<n.length&&(e.i=null,e.g.set(Ke(e,t),ii(n)),e.h+=n.length)}E.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),e.push(r)}}return this.i=e.join("&")};function Ke(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Gf(e,t){t&&!e.j&&(te(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(yc(this,s),wc(this,r,n))},e)),e.j=t}var Qf=class{constructor(e,t){this.h=e,this.g=t}};function Ec(e){this.l=e||Wf,k.PerformanceNavigationTiming?(e=k.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(k.g&&k.g.Ga&&k.g.Ga()&&k.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Wf=10;function _c(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function bc(e){return e.h?1:e.g?e.g.size:0}function Br(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function vi(e,t){e.g?e.g.add(t):e.h=t}function Tc(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Ec.prototype.cancel=function(){if(this.i=Ic(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Ic(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return ii(e.i)}function wi(){}wi.prototype.stringify=function(e){return k.JSON.stringify(e,void 0)};wi.prototype.parse=function(e){return k.JSON.parse(e,void 0)};function Yf(){this.g=new wi}function Xf(e,t,n){const s=n||"";try{mc(e,function(r,i){let o=r;An(r)&&(o=fi(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function Jf(e,t){const n=new Os;if(k.Image){const s=new Image;s.onload=zn(Kn,n,s,"TestLoadImage: loaded",!0,t),s.onerror=zn(Kn,n,s,"TestLoadImage: error",!1,t),s.onabort=zn(Kn,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=zn(Kn,n,s,"TestLoadImage: timeout",!1,t),k.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Kn(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function Mn(e){this.l=e.ac||null,this.j=e.jb||!1}lt(Mn,mi);Mn.prototype.g=function(){return new Vs(this.l,this.j)};Mn.prototype.i=function(e){return function(){return e}}({});function Vs(e,t){ot.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ei,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}lt(Vs,ot);var Ei=0;E=Vs.prototype;E.open=function(e,t){if(this.readyState!=Ei)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,wn(this)};E.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||k).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};E.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pn(this)),this.readyState=Ei};E.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,wn(this)),this.g&&(this.readyState=3,wn(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof k.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cc(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function Cc(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}E.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Pn(this):wn(this),this.readyState==3&&Cc(this)}};E.Va=function(e){this.g&&(this.response=this.responseText=e,Pn(this))};E.Ua=function(e){this.g&&(this.response=e,Pn(this))};E.ga=function(){this.g&&Pn(this)};function Pn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,wn(e)}E.setRequestHeader=function(e,t){this.v.append(e,t)};E.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};E.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function wn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Vs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Zf=k.JSON.parse;function Y(e){ot.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Sc,this.K=this.L=!1}lt(Y,ot);var Sc="",td=/^https?$/i,ed=["POST","PUT"];E=Y.prototype;E.Ka=function(e){this.L=e};E.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Pr.g(),this.C=this.u?wo(this.u):wo(Pr),this.g.onreadystatechange=mt(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){bo(this,i);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=k.FormData&&e instanceof k.FormData,!(0<=ja(ed,t))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ac(this),0<this.B&&((this.K=nd(this.g))?(this.g.timeout=this.B,this.g.ontimeout=mt(this.qa,this)):this.A=pi(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){bo(this,i)}};function nd(e){return xe&&wf()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}E.qa=function(){typeof ri<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ut(this,"timeout"),this.abort(8))};function bo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,kc(e),Us(e)}function kc(e){e.D||(e.D=!0,ut(e,"complete"),ut(e,"error"))}E.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ut(this,"complete"),ut(this,"abort"),Us(this))};E.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Us(this,!0)),Y.X.M.call(this)};E.Ha=function(){this.s||(this.F||this.v||this.l?Dc(this):this.fb())};E.fb=function(){Dc(this)};function Dc(e){if(e.h&&typeof ri<"u"&&(!e.C[1]||xt(e)!=4||e.aa()!=2)){if(e.v&&xt(e)==4)pi(e.Ha,0,e);else if(ut(e,"readystatechange"),xt(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(gc)[1]||null;if(!r&&k.self&&k.self.location){var i=k.self.location.protocol;r=i.substr(0,i.length-1)}s=!td.test(r?r.toLowerCase():"")}n=s}if(n)ut(e,"complete"),ut(e,"success");else{e.m=6;try{var o=2<xt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",kc(e)}}finally{Us(e)}}}}function Us(e,t){if(e.g){Ac(e);const n=e.g,s=e.C[0]?us:null;e.g=null,e.C=null,t||ut(e,"ready");try{n.onreadystatechange=s}catch{}}}function Ac(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(k.clearTimeout(e.A),e.A=null)}function xt(e){return e.g?e.g.readyState:0}E.aa=function(){try{return 2<xt(this)?this.g.status:-1}catch{return-1}};E.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};E.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Zf(t)}};function To(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Sc:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}E.Ea=function(){return this.m};E.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Nc(e){let t="";return ai(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function _i(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Nc(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):Q(e,t,n))}function Je(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Rc(e){this.Ca=0,this.i=[],this.j=new Os,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Je("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Je("baseRetryDelayMs",5e3,e),this.bb=Je("retryDelaySeedMs",1e4,e),this.$a=Je("forwardChannelMaxRetries",2,e),this.ta=Je("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Ec(e&&e.concurrentRequestLimit),this.Fa=new Yf,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}E=Rc.prototype;E.ma=8;E.G=1;function bi(e){if(Oc(e),e.G==3){var t=e.U++,n=Ft(e.F);Q(n,"SID",e.I),Q(n,"RID",t),Q(n,"TYPE","terminate"),Fn(e,n),t=new Ln(e,e.j,t,void 0),t.K=2,t.v=Fs(Ft(n)),n=!1,k.navigator&&k.navigator.sendBeacon&&(n=k.navigator.sendBeacon(t.v.toString(),"")),!n&&k.Image&&(new Image().src=t.v,n=!0),n||(t.g=Bc(t.l,null),t.g.da(t.v)),t.F=Date.now(),xn(t)}Vc(e)}function Bs(e){e.g&&(Ii(e),e.g.cancel(),e.g=null)}function Oc(e){Bs(e),e.u&&(k.clearTimeout(e.u),e.u=null),ms(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&k.clearTimeout(e.m),e.m=null)}function $s(e){_c(e.h)||e.m||(e.m=!0,tc(e.Ja,e),e.C=0)}function sd(e,t){return bc(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Rn(mt(e.Ja,e,t),Fc(e,e.C)),e.C++,!0)}E.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const r=new Ln(this,this.j,e,void 0);let i=this.s;if(this.S&&(i?(i=Ka(i),Ga(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Lc(this,r,t),n=Ft(this.F),Q(n,"RID",e),Q(n,"CVER",22),this.D&&Q(n,"X-HTTP-Session-Id",this.D),Fn(this,n),i&&(this.N?t="headers="+encodeURIComponent(String(Nc(i)))+"&"+t:this.o&&_i(n,this.o,i)),vi(this.h,r),this.Ya&&Q(n,"TYPE","init"),this.O?(Q(n,"$req",t),Q(n,"SID","null"),r.Z=!0,Vr(r,n,null)):Vr(r,n,t),this.G=2}}else this.G==3&&(e?Io(this,e):this.i.length==0||_c(this.h)||Io(this))};function Io(e,t){var n;t?n=t.m:n=e.U++;const s=Ft(e.F);Q(s,"SID",e.I),Q(s,"RID",n),Q(s,"AID",e.T),Fn(e,s),e.o&&e.s&&_i(s,e.o,e.s),n=new Ln(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Lc(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),vi(e.h,n),Vr(n,s,t)}function Fn(e,t){e.ia&&ai(e.ia,function(n,s){Q(t,s,n)}),e.l&&mc({},function(n,s){Q(t,s,n)})}function Lc(e,t,n){n=Math.min(e.i.length,n);var s=e.l?mt(e.l.Ra,e.l,e):null;t:{var r=e.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{Xf(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function xc(e){e.g||e.u||(e.Z=1,tc(e.Ia,e),e.A=0)}function Ti(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Rn(mt(e.Ia,e),Fc(e,e.A)),e.A++,!0)}E.Ia=function(){if(this.u=null,Mc(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Rn(mt(this.eb,this),e)}};E.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,vt(10),Bs(this),Mc(this))};function Ii(e){e.B!=null&&(k.clearTimeout(e.B),e.B=null)}function Mc(e){e.g=new Ln(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=Ft(e.sa);Q(t,"RID","rpc"),Q(t,"SID",e.I),Q(t,"CI",e.L?"0":"1"),Q(t,"AID",e.T),Q(t,"TYPE","xmlhttp"),Fn(e,t),e.o&&e.s&&_i(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Fs(Ft(t)),n.s=null,n.P=!0,hc(n,e)}E.cb=function(){this.v!=null&&(this.v=null,Bs(this),Ti(this),vt(19))};function ms(e){e.v!=null&&(k.clearTimeout(e.v),e.v=null)}function Pc(e,t){var n=null;if(e.g==t){ms(e),Ii(e),e.g=null;var s=2}else if(Br(e.h,t))n=t.D,Tc(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;s=Ls(),ut(s,new ac(s,n)),$s(e)}else xc(e);else if(r=t.o,r==3||r==0&&0<e.pa||!(s==1&&sd(e,t)||s==2&&Ti(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:se(e,5);break;case 4:se(e,10);break;case 3:se(e,6);break;default:se(e,2)}}}function Fc(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function se(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=mt(e.kb,e);n||(n=new oe("//www.google.com/images/cleardot.gif"),k.location&&k.location.protocol=="http"||ds(n,"https"),Fs(n)),Jf(n.toString(),s)}else vt(2);e.G=0,e.l&&e.l.va(t),Vc(e),Oc(e)}E.kb=function(e){e?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Vc(e){if(e.G=0,e.la=[],e.l){const t=Ic(e.h);(t.length!=0||e.i.length!=0)&&(fo(e.la,t),fo(e.la,e.i),e.h.i.length=0,ii(e.i),e.i.length=0),e.l.ua()}}function Uc(e,t,n){var s=n instanceof oe?Ft(n):new oe(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),ps(s,s.m);else{var r=k.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var i=new oe(null,void 0);s&&ds(i,s),t&&(i.g=t),r&&ps(i,r),n&&(i.l=n),s=i}return n=e.D,t=e.za,n&&t&&Q(s,n,t),Q(s,"VER",e.ma),Fn(e,s),s}function Bc(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new Y(new Mn({jb:!0})):new Y(e.ra),t.Ka(e.H),t}function $c(){}E=$c.prototype;E.xa=function(){};E.wa=function(){};E.va=function(){};E.ua=function(){};E.Ra=function(){};function gs(){if(xe&&!(10<=Number(Ef)))throw Error("Environmental error: no available transport.")}gs.prototype.g=function(e,t){return new Et(e,t)};function Et(e,t){ot.call(this),this.g=new Rc(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!ls(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ls(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ge(this)}lt(Et,ot);Et.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;vt(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Uc(e,null,e.V),$s(e)};Et.prototype.close=function(){bi(this.g)};Et.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=fi(e),e=n);t.i.push(new Qf(t.ab++,e)),t.G==3&&$s(t)};Et.prototype.M=function(){this.g.l=null,delete this.j,bi(this.g),delete this.g,Et.X.M.call(this)};function jc(e){gi.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}lt(jc,gi);function qc(){yi.call(this),this.status=1}lt(qc,yi);function Ge(e){this.g=e}lt(Ge,$c);Ge.prototype.xa=function(){ut(this.g,"a")};Ge.prototype.wa=function(e){ut(this.g,new jc(e))};Ge.prototype.va=function(e){ut(this.g,new qc)};Ge.prototype.ua=function(){ut(this.g,"b")};gs.prototype.createWebChannel=gs.prototype.g;Et.prototype.send=Et.prototype.u;Et.prototype.open=Et.prototype.m;Et.prototype.close=Et.prototype.close;xs.NO_ERROR=0;xs.TIMEOUT=8;xs.HTTP_ERROR=6;cc.COMPLETE="complete";uc.EventType=On;On.OPEN="a";On.CLOSE="b";On.ERROR="c";On.MESSAGE="d";ot.prototype.listen=ot.prototype.N;Y.prototype.listenOnce=Y.prototype.O;Y.prototype.getLastError=Y.prototype.Oa;Y.prototype.getLastErrorCode=Y.prototype.Ea;Y.prototype.getStatus=Y.prototype.aa;Y.prototype.getResponseJson=Y.prototype.Sa;Y.prototype.getResponseText=Y.prototype.fa;Y.prototype.send=Y.prototype.da;Y.prototype.setWithCredentials=Y.prototype.Ka;var rd=function(){return new gs},id=function(){return Ls()},yr=xs,od=cc,ad=pe,Co={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},cd=Mn,Gn=uc,ud=Y;const So="@firebase/firestore";/**
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
 */class ft{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
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
 */let Qe="9.19.0";/**
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
 */const he=new Pa("@firebase/firestore");function ko(){return he.logLevel}function _(e,...t){if(he.logLevel<=$.DEBUG){const n=t.map(Ci);he.debug(`Firestore (${Qe}): ${e}`,...n)}}function Vt(e,...t){if(he.logLevel<=$.ERROR){const n=t.map(Ci);he.error(`Firestore (${Qe}): ${e}`,...n)}}function ys(e,...t){if(he.logLevel<=$.WARN){const n=t.map(Ci);he.warn(`Firestore (${Qe}): ${e}`,...n)}}function Ci(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
 */function S(e="Unexpected state"){const t=`FIRESTORE (${Qe}) INTERNAL ASSERTION FAILED: `+e;throw Vt(t),new Error(t)}function G(e,t){e||S()}function R(e,t){return e}/**
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
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends He{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ae{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class zc{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ld{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class hd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fd{constructor(t){this.t=t,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new ae;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ae,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ae)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(G(typeof s.accessToken=="string"),new zc(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return G(t===null||typeof t=="string"),new ft(t)}}class dd{constructor(t,n,s){this.h=t,this.l=n,this.m=s,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class pd{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new dd(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class md{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gd{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const s=i=>{i.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(G(typeof n.token=="string"),this.T=n.token,new md(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function yd(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Hc{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=yd(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function j(e,t){return e<t?-1:e>t?1:0}function Me(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
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
 */class nt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new C(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new C(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new C(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new C(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new nt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class A{constructor(t){this.timestamp=t}static fromTimestamp(t){return new A(t)}static min(){return new A(new nt(0,0))}static max(){return new A(new nt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class En{constructor(t,n,s){n===void 0?n=0:n>t.length&&S(),s===void 0?s=t.length-n:s>t.length-n&&S(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return En.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof En?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class W extends En{construct(t,n,s){return new W(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new C(y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new W(n)}static emptyPath(){return new W([])}}const vd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends En{construct(t,n,s){return new pt(t,n,s)}static isValidIdentifier(t){return vd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pt(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new C(y.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new C(y.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new C(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new C(y.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new pt(n)}static emptyPath(){return new pt([])}}/**
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
 */class T{constructor(t){this.path=t}static fromPath(t){return new T(W.fromString(t))}static fromName(t){return new T(W.fromString(t).popFirst(5))}static empty(){return new T(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&W.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return W.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new T(new W(t.slice()))}}function wd(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=A.fromTimestamp(s===1e9?new nt(n+1,0):new nt(n,s));return new Wt(r,T.empty(),t)}function Ed(e){return new Wt(e.readTime,e.key,-1)}class Wt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Wt(A.min(),T.empty(),-1)}static max(){return new Wt(A.max(),T.empty(),-1)}}function _d(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=T.comparator(e.documentKey,t.documentKey),n!==0?n:j(e.largestBatchId,t.largestBatchId))}/**
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
 */const bd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Td{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Vn(e){if(e.code!==y.FAILED_PRECONDITION||e.message!==bd)throw e;_("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&S(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new g((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):g.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):g.reject(n)}static resolve(t){return new g((n,s)=>{n(t)})}static reject(t){return new g((n,s)=>{s(t)})}static waitFor(t){return new g((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(t){let n=g.resolve(!1);for(const s of t)n=n.next(r=>r?g.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new g((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(t[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(t,n){return new g((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function Un(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Si{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}Si.ct=-1;function js(e){return e==null}function vs(e){return e===0&&1/e==-1/0}function Id(e){return typeof e=="number"&&Number.isInteger(e)&&!vs(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function Do(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function me(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Kc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class rt{constructor(t,n){this.comparator=t,this.root=n||at.EMPTY}insert(t,n){return new rt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(t){return new rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,at.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Qn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Qn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Qn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Qn(this.root,t,this.comparator,!0)}}class Qn{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class at{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s!=null?s:at.RED,this.left=r!=null?r:at.EMPTY,this.right=i!=null?i:at.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new at(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return at.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw S();const t=this.left.check();if(t!==this.right.check())throw S();return t+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw S()}get value(){throw S()}get color(){throw S()}get left(){throw S()}get right(){throw S()}copy(e,t,n,s,r){return this}insert(e,t,n){return new at(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class st{constructor(t){this.comparator=t,this.data=new rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ao(this.data.getIterator())}getIteratorFrom(t){return new Ao(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof st)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new st(this.comparator);return n.data=t,n}}class Ao{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class It{constructor(t){this.fields=t,t.sort(pt.comparator)}static empty(){return new It([])}unionWith(t){let n=new st(pt.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new It(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Me(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Cd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class yt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Cd("Invalid base64 string: "+r):r}}(t);return new yt(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new yt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const Sd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yt(e){if(G(!!e),typeof e=="string"){let t=0;const n=Sd.exec(e);if(G(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:Z(e.seconds),nanos:Z(e.nanos)}}function Z(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Pe(e){return typeof e=="string"?yt.fromBase64String(e):yt.fromUint8Array(e)}/**
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
 */function Gc(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Qc(e){const t=e.mapValue.fields.__previous_value__;return Gc(t)?Qc(t):t}function _n(e){const t=Yt(e.mapValue.fields.__local_write_time__.timestampValue);return new nt(t.seconds,t.nanos)}/**
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
 */class kd{constructor(t,n,s,r,i,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class bn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new bn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof bn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Wn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fe(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Gc(e)?4:Dd(e)?9007199254740991:10:S()}function Nt(e,t){if(e===t)return!0;const n=fe(e);if(n!==fe(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return _n(e).isEqual(_n(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Yt(s.timestampValue),o=Yt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return Pe(s.bytesValue).isEqual(Pe(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return Z(s.geoPointValue.latitude)===Z(r.geoPointValue.latitude)&&Z(s.geoPointValue.longitude)===Z(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Z(s.integerValue)===Z(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Z(s.doubleValue),o=Z(r.doubleValue);return i===o?vs(i)===vs(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return Me(e.arrayValue.values||[],t.arrayValue.values||[],Nt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Do(i)!==Do(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Nt(i[a],o[a])))return!1;return!0}(e,t);default:return S()}}function Tn(e,t){return(e.values||[]).find(n=>Nt(n,t))!==void 0}function Fe(e,t){if(e===t)return 0;const n=fe(e),s=fe(t);if(n!==s)return j(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return j(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=Z(r.integerValue||r.doubleValue),a=Z(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return No(e.timestampValue,t.timestampValue);case 4:return No(_n(e),_n(t));case 5:return j(e.stringValue,t.stringValue);case 6:return function(r,i){const o=Pe(r),a=Pe(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=j(o[c],a[c]);if(u!==0)return u}return j(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=j(Z(r.latitude),Z(i.latitude));return o!==0?o:j(Z(r.longitude),Z(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Fe(o[c],a[c]);if(u)return u}return j(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===Wn.mapValue&&i===Wn.mapValue)return 0;if(r===Wn.mapValue)return 1;if(i===Wn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=j(a[l],u[l]);if(h!==0)return h;const f=Fe(o[a[l]],c[u[l]]);if(f!==0)return f}return j(a.length,u.length)}(e.mapValue,t.mapValue);default:throw S()}}function No(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return j(e,t);const n=Yt(e),s=Yt(t),r=j(n.seconds,s.seconds);return r!==0?r:j(n.nanos,s.nanos)}function Ve(e){return $r(e)}function $r(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=Yt(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Pe(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,T.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=$r(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${$r(s.fields[a])}`;return i+"}"}(e.mapValue):S();var t,n}function jr(e){return!!e&&"integerValue"in e}function ki(e){return!!e&&"arrayValue"in e}function Ro(e){return!!e&&"nullValue"in e}function Oo(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Zn(e){return!!e&&"mapValue"in e}function rn(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return me(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=rn(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=rn(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Dd(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Zn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=rn(n)}setAll(t){let n=pt.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=rn(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());Zn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Nt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];Zn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){me(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new wt(rn(this.value))}}function Wc(e){const t=[];return me(e.fields,(n,s)=>{const r=new pt([n]);if(Zn(s)){const i=Wc(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new It(t)}/**
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
 */class dt{constructor(t,n,s,r,i,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new dt(t,0,A.min(),A.min(),A.min(),wt.empty(),0)}static newFoundDocument(t,n,s,r){return new dt(t,1,n,A.min(),s,r,0)}static newNoDocument(t,n){return new dt(t,2,n,A.min(),A.min(),wt.empty(),0)}static newUnknownDocument(t,n){return new dt(t,3,n,A.min(),A.min(),wt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(A.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=A.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof dt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ws{constructor(t,n){this.position=t,this.inclusive=n}}function Lo(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=T.comparator(T.fromName(o.referenceValue),n.key):s=Fe(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function xo(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Nt(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class on{constructor(t,n="asc"){this.field=t,this.dir=n}}function Ad(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Yc{}class et extends Yc{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new Rd(t,n,s):n==="array-contains"?new xd(t,s):n==="in"?new Md(t,s):n==="not-in"?new Pd(t,s):n==="array-contains-any"?new Fd(t,s):new et(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new Od(t,s):new Ld(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Fe(n,this.value)):n!==null&&fe(this.value)===fe(n)&&this.matchesComparison(Fe(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return S()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Rt extends Yc{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new Rt(t,n)}matches(t){return Xc(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Xc(e){return e.op==="and"}function Jc(e){return Nd(e)&&Xc(e)}function Nd(e){for(const t of e.filters)if(t instanceof Rt)return!1;return!0}function qr(e){if(e instanceof et)return e.field.canonicalString()+e.op.toString()+Ve(e.value);if(Jc(e))return e.filters.map(t=>qr(t)).join(",");{const t=e.filters.map(n=>qr(n)).join(",");return`${e.op}(${t})`}}function Zc(e,t){return e instanceof et?function(n,s){return s instanceof et&&n.op===s.op&&n.field.isEqual(s.field)&&Nt(n.value,s.value)}(e,t):e instanceof Rt?function(n,s){return s instanceof Rt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Zc(i,s.filters[o]),!0):!1}(e,t):void S()}function tu(e){return e instanceof et?function(t){return`${t.field.canonicalString()} ${t.op} ${Ve(t.value)}`}(e):e instanceof Rt?function(t){return t.op.toString()+" {"+t.getFilters().map(tu).join(" ,")+"}"}(e):"Filter"}class Rd extends et{constructor(t,n,s){super(t,n,s),this.key=T.fromName(s.referenceValue)}matches(t){const n=T.comparator(t.key,this.key);return this.matchesComparison(n)}}class Od extends et{constructor(t,n){super(t,"in",n),this.keys=eu("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Ld extends et{constructor(t,n){super(t,"not-in",n),this.keys=eu("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function eu(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>T.fromName(s.referenceValue))}class xd extends et{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return ki(n)&&Tn(n.arrayValue,this.value)}}class Md extends et{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Tn(this.value.arrayValue,n)}}class Pd extends et{constructor(t,n){super(t,"not-in",n)}matches(t){if(Tn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Tn(this.value.arrayValue,n)}}class Fd extends et{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!ki(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Tn(this.value.arrayValue,s))}}/**
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
 */class Vd{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Mo(e,t=null,n=[],s=[],r=null,i=null,o=null){return new Vd(e,t,n,s,r,i,o)}function Di(e){const t=R(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>qr(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),js(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Ve(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Ve(s)).join(",")),t.ft=n}return t.ft}function Ai(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Ad(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Zc(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!xo(e.startAt,t.startAt)&&xo(e.endAt,t.endAt)}function zr(e){return T.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class qs{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Ud(e,t,n,s,r,i,o,a){return new qs(e,t,n,s,r,i,o,a)}function Ni(e){return new qs(e)}function Po(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Bd(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function $d(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function jd(e){return e.collectionGroup!==null}function Ne(e){const t=R(e);if(t.dt===null){t.dt=[];const n=$d(t),s=Bd(t);if(n!==null&&s===null)n.isKeyField()||t.dt.push(new on(n)),t.dt.push(new on(pt.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new on(pt.keyField(),i))}}}return t.dt}function Ut(e){const t=R(e);if(!t.wt)if(t.limitType==="F")t.wt=Mo(t.path,t.collectionGroup,Ne(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of Ne(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new on(i.field,o))}const s=t.endAt?new ws(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ws(t.startAt.position,t.startAt.inclusive):null;t.wt=Mo(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t.wt}function Hr(e,t,n){return new qs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function zs(e,t){return Ai(Ut(e),Ut(t))&&e.limitType===t.limitType}function nu(e){return`${Di(Ut(e))}|lt:${e.limitType}`}function Kr(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>tu(s)).join(", ")}]`),js(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Ve(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Ve(s)).join(",")),`Target(${n})`}(Ut(e))}; limitType=${e.limitType})`}function Hs(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):T.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of Ne(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Lo(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Ne(n),s)||n.endAt&&!function(r,i,o){const a=Lo(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Ne(n),s))}(e,t)}function qd(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function su(e){return(t,n)=>{let s=!1;for(const r of Ne(e)){const i=zd(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function zd(e,t,n){const s=e.field.isKeyField()?T.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Fe(a,c):S()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return S()}}/**
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
 */class We{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){me(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return Kc(this.inner)}size(){return this.innerSize}}/**
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
 */const Hd=new rt(T.comparator);function Bt(){return Hd}const ru=new rt(T.comparator);function en(...e){let t=ru;for(const n of e)t=t.insert(n.key,n);return t}function iu(e){let t=ru;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function re(){return an()}function ou(){return an()}function an(){return new We(e=>e.toString(),(e,t)=>e.isEqual(t))}const Kd=new rt(T.comparator),Gd=new st(T.comparator);function L(...e){let t=Gd;for(const n of e)t=t.add(n);return t}const Qd=new st(j);function au(){return Qd}/**
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
 */function cu(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vs(t)?"-0":t}}function uu(e){return{integerValue:""+e}}function Wd(e,t){return Id(t)?uu(t):cu(e,t)}/**
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
 */class Ks{constructor(){this._=void 0}}function Yd(e,t,n){return e instanceof Es?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof Ue?hu(e,t):e instanceof In?fu(e,t):function(s,r){const i=lu(s,r),o=Fo(i)+Fo(s._t);return jr(i)&&jr(s._t)?uu(o):cu(s.serializer,o)}(e,t)}function Xd(e,t,n){return e instanceof Ue?hu(e,t):e instanceof In?fu(e,t):n}function lu(e,t){return e instanceof _s?jr(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class Es extends Ks{}class Ue extends Ks{constructor(t){super(),this.elements=t}}function hu(e,t){const n=du(t);for(const s of e.elements)n.some(r=>Nt(r,s))||n.push(s);return{arrayValue:{values:n}}}class In extends Ks{constructor(t){super(),this.elements=t}}function fu(e,t){let n=du(t);for(const s of e.elements)n=n.filter(r=>!Nt(r,s));return{arrayValue:{values:n}}}class _s extends Ks{constructor(t,n){super(),this.serializer=t,this._t=n}}function Fo(e){return Z(e.integerValue||e.doubleValue)}function du(e){return ki(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */class Jd{constructor(t,n){this.field=t,this.transform=n}}function Zd(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Ue&&s instanceof Ue||n instanceof In&&s instanceof In?Me(n.elements,s.elements,Nt):n instanceof _s&&s instanceof _s?Nt(n._t,s._t):n instanceof Es&&s instanceof Es}(e.transform,t.transform)}class tp{constructor(t,n){this.version=t,this.transformResults=n}}class Mt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Mt}static exists(t){return new Mt(void 0,t)}static updateTime(t){return new Mt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ts(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Gs{}function pu(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new gu(e.key,Mt.none()):new Qs(e.key,e.data,Mt.none());{const n=e.data,s=wt.empty();let r=new st(pt.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ge(e.key,s,new It(r.toArray()),Mt.none())}}function ep(e,t,n){e instanceof Qs?function(s,r,i){const o=s.value.clone(),a=Uo(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof ge?function(s,r,i){if(!ts(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Uo(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(mu(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function cn(e,t,n,s){return e instanceof Qs?function(r,i,o,a){if(!ts(r.precondition,i))return o;const c=r.value.clone(),u=Bo(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof ge?function(r,i,o,a){if(!ts(r.precondition,i))return o;const c=Bo(r.fieldTransforms,a,i),u=i.data;return u.setAll(mu(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(e,t,n,s):function(r,i,o){return ts(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function np(e,t){let n=null;for(const s of e.fieldTransforms){const r=t.data.field(s.field),i=lu(s.transform,r||null);i!=null&&(n===null&&(n=wt.empty()),n.set(s.field,i))}return n||null}function Vo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Me(n,s,(r,i)=>Zd(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Qs extends Gs{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ge extends Gs{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function mu(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Uo(e,t,n){const s=new Map;G(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,Xd(o,a,n[r]))}return s}function Bo(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Yd(i,o,t))}return s}class gu extends Gs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sp extends Gs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class rp{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&ep(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=cn(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=cn(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=ou();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=pu(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(A.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),L())}isEqual(t){return this.batchId===t.batchId&&Me(this.mutations,t.mutations,(n,s)=>Vo(n,s))&&Me(this.baseMutations,t.baseMutations,(n,s)=>Vo(n,s))}}class Ri{constructor(t,n,s,r){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(t,n,s){G(t.mutations.length===s.length);let r=Kd;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Ri(t,n,s,r)}}/**
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
 */class ip{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class op{constructor(t){this.count=t}}/**
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
 */var J,M;function ap(e){switch(e){default:return S();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function yu(e){if(e===void 0)return Vt("GRPC error has no .code"),y.UNKNOWN;switch(e){case J.OK:return y.OK;case J.CANCELLED:return y.CANCELLED;case J.UNKNOWN:return y.UNKNOWN;case J.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case J.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case J.INTERNAL:return y.INTERNAL;case J.UNAVAILABLE:return y.UNAVAILABLE;case J.UNAUTHENTICATED:return y.UNAUTHENTICATED;case J.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case J.NOT_FOUND:return y.NOT_FOUND;case J.ALREADY_EXISTS:return y.ALREADY_EXISTS;case J.PERMISSION_DENIED:return y.PERMISSION_DENIED;case J.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case J.ABORTED:return y.ABORTED;case J.OUT_OF_RANGE:return y.OUT_OF_RANGE;case J.UNIMPLEMENTED:return y.UNIMPLEMENTED;case J.DATA_LOSS:return y.DATA_LOSS;default:return S()}}(M=J||(J={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Oi{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Yn}static getOrCreateInstance(){return Yn===null&&(Yn=new Oi),Yn}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let Yn=null;/**
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
 */class Ws{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const r=new Map;return r.set(t,Bn.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Ws(A.min(),r,au(),Bt(),L())}}class Bn{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Bn(s,n,L(),L(),L())}}/**
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
 */class es{constructor(t,n,s,r){this.It=t,this.removedTargetIds=n,this.key=s,this.Tt=r}}class vu{constructor(t,n){this.targetId=t,this.Et=n}}class wu{constructor(t,n,s=yt.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class $o{constructor(){this.At=0,this.Rt=qo(),this.vt=yt.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(t){t.approximateByteSize()>0&&(this.Pt=!0,this.vt=t)}Ct(){let t=L(),n=L(),s=L();return this.Rt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:S()}}),new Bn(this.vt,this.bt,t,n,s)}xt(){this.Pt=!1,this.Rt=qo()}Nt(t,n){this.Pt=!0,this.Rt=this.Rt.insert(t,n)}kt(t){this.Pt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class cp{constructor(t){this.Ft=t,this.Bt=new Map,this.Lt=Bt(),this.qt=jo(),this.Ut=new st(j)}Kt(t){for(const n of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(n,t.Tt):this.Qt(n,t.key,t.Tt);for(const n of t.removedTargetIds)this.Qt(n,t.key,t.Tt)}zt(t){this.forEachTarget(t,n=>{const s=this.jt(n);switch(t.state){case 0:this.Wt(n)&&s.Dt(t.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(t.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(t.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(t.resumeToken));break;default:S()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.Wt(r)&&n(r)})}Jt(t){var n;const s=t.targetId,r=t.Et.count,i=this.Yt(s);if(i){const o=i.target;if(zr(o))if(r===0){const a=new T(o.path);this.Qt(s,a,dt.newNoDocument(a,A.min()))}else G(r===1);else{const a=this.Zt(s);a!==r&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=Oi.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:t.Et.count}))}}}Xt(t){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&zr(a.target)){const c=new T(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,dt.newNoDocument(c,t))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=L();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(t));const r=new Ws(t,n,this.Ut,this.Lt,s);return this.Lt=Bt(),this.qt=jo(),this.Ut=new st(j),r}Gt(t,n){if(!this.Wt(t))return;const s=this.te(t,n.key)?2:0;this.jt(t).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(t))}Qt(t,n,s){if(!this.Wt(t))return;const r=this.jt(t);this.te(t,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(t)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(t){this.Bt.delete(t)}Zt(t){const n=this.jt(t).Ct();return this.Ft.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ot(t){this.jt(t).Ot()}jt(t){let n=this.Bt.get(t);return n||(n=new $o,this.Bt.set(t,n)),n}ee(t){let n=this.qt.get(t);return n||(n=new st(j),this.qt=this.qt.insert(t,n)),n}Wt(t){const n=this.Yt(t)!==null;return n||_("WatchChangeAggregator","Detected inactive target",t),n}Yt(t){const n=this.Bt.get(t);return n&&n.Vt?null:this.Ft.ne(t)}Ht(t){this.Bt.set(t,new $o),this.Ft.getRemoteKeysForTarget(t).forEach(n=>{this.Qt(t,n,null)})}te(t,n){return this.Ft.getRemoteKeysForTarget(t).has(n)}}function jo(){return new rt(T.comparator)}function qo(){return new rt(T.comparator)}/**
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
 */const up=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),lp=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),hp=(()=>({and:"AND",or:"OR"}))();class fp{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function bs(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Eu(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function dp(e,t){return bs(e,t.toTimestamp())}function kt(e){return G(!!e),A.fromTimestamp(function(t){const n=Yt(t);return new nt(n.seconds,n.nanos)}(e))}function Li(e,t){return function(n){return new W(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function _u(e){const t=W.fromString(e);return G(Cu(t)),t}function Gr(e,t){return Li(e.databaseId,t.path)}function vr(e,t){const n=_u(t);if(n.get(1)!==e.databaseId.projectId)throw new C(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new C(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new T(bu(n))}function Qr(e,t){return Li(e.databaseId,t)}function pp(e){const t=_u(e);return t.length===4?W.emptyPath():bu(t)}function Wr(e){return new W(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function bu(e){return G(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function zo(e,t,n){return{name:Gr(e,t),fields:n.value.mapValue.fields}}function mp(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:S()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(G(u===void 0||typeof u=="string"),yt.fromBase64String(u||"")):(G(u===void 0||u instanceof Uint8Array),yt.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?y.UNKNOWN:yu(c.code);return new C(u,c.message||"")}(o);n=new wu(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=vr(e,s.document.name),i=kt(s.document.updateTime),o=s.document.createTime?kt(s.document.createTime):A.min(),a=new wt({mapValue:{fields:s.document.fields}}),c=dt.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new es(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=vr(e,s.document),i=s.readTime?kt(s.readTime):A.min(),o=dt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new es([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=vr(e,s.document),i=s.removedTargetIds||[];n=new es([],i,r,null)}else{if(!("filter"in t))return S();{t.filter;const s=t.filter;s.targetId;const r=s.count||0,i=new op(r),o=s.targetId;n=new vu(o,i)}}return n}function gp(e,t){let n;if(t instanceof Qs)n={update:zo(e,t.key,t.value)};else if(t instanceof gu)n={delete:Gr(e,t.key)};else if(t instanceof ge)n={update:zo(e,t.key,t.data),updateMask:Cp(t.fieldMask)};else{if(!(t instanceof sp))return S();n={verify:Gr(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Es)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ue)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof In)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof _s)return{fieldPath:i.field.canonicalString(),increment:o._t};throw S()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:dp(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:S()}(e,t.precondition)),n}function yp(e,t){return e&&e.length>0?(G(t!==void 0),e.map(n=>function(s,r){let i=s.updateTime?kt(s.updateTime):kt(r);return i.isEqual(A.min())&&(i=kt(r)),new tp(i,s.transformResults||[])}(n,t))):[]}function vp(e,t){return{documents:[Qr(e,t.path)]}}function wp(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Qr(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Qr(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Iu(Rt.create(c,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:be(l.field),direction:bp(l.dir)}}(u))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.useProto3Json||js(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function Ep(e){let t=pp(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){G(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:t=t.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=Tu(l);return h instanceof Rt&&Jc(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new on(Te(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,js(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new ws(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new ws(f,h)}(n.endAt)),Ud(t,r,o,i,a,"F",c,u)}function _p(e,t){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return S()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Tu(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Te(t.unaryFilter.field);return et.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Te(t.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Te(t.unaryFilter.field);return et.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Te(t.unaryFilter.field);return et.create(i,"!=",{nullValue:"NULL_VALUE"});default:return S()}}(e):e.fieldFilter!==void 0?function(t){return et.create(Te(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return S()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return Rt.create(t.compositeFilter.filters.map(n=>Tu(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return S()}}(t.compositeFilter.op))}(e):S()}function bp(e){return up[e]}function Tp(e){return lp[e]}function Ip(e){return hp[e]}function be(e){return{fieldPath:e.canonicalString()}}function Te(e){return pt.fromServerFormat(e.fieldPath)}function Iu(e){return e instanceof et?function(t){if(t.op==="=="){if(Oo(t.value))return{unaryFilter:{field:be(t.field),op:"IS_NAN"}};if(Ro(t.value))return{unaryFilter:{field:be(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Oo(t.value))return{unaryFilter:{field:be(t.field),op:"IS_NOT_NAN"}};if(Ro(t.value))return{unaryFilter:{field:be(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:be(t.field),op:Tp(t.op),value:t.value}}}(e):e instanceof Rt?function(t){const n=t.getFilters().map(s=>Iu(s));return n.length===1?n[0]:{compositeFilter:{op:Ip(t.op),filters:n}}}(e):S()}function Cp(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Cu(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class ce{constructor(t,n,s,r,i=A.min(),o=A.min(),a=yt.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new ce(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new ce(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new ce(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
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
 */class Sp{constructor(t){this.se=t}}function kp(e){const t=Ep({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Hr(t,t.limit,"L"):t}/**
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
 */class Dp{constructor(){this.He=new Ap}addToCollectionParentIndex(t,n){return this.He.add(n),g.resolve()}getCollectionParents(t,n){return g.resolve(this.He.getEntries(n))}addFieldIndex(t,n){return g.resolve()}deleteFieldIndex(t,n){return g.resolve()}getDocumentsMatchingTarget(t,n){return g.resolve(null)}getIndexType(t,n){return g.resolve(0)}getFieldIndexes(t,n){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,n){return g.resolve(Wt.min())}getMinOffsetFromCollectionGroup(t,n){return g.resolve(Wt.min())}updateCollectionGroup(t,n,s){return g.resolve()}updateIndexEntries(t,n){return g.resolve()}}class Ap{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new st(W.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new st(W.comparator)).toArray()}}/**
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
 */class Be{constructor(t){this.Rn=t}next(){return this.Rn+=2,this.Rn}static vn(){return new Be(0)}static bn(){return new Be(-1)}}/**
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
 */class Np{constructor(){this.changes=new We(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,dt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?g.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Rp{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class Op{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(s!==null&&cn(s.mutation,r,It.empty(),nt.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,L()).next(()=>s))}getLocalViewOfDocuments(t,n,s=L()){const r=re();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=en();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=re();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,L()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=Bt();const o=an(),a=an();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof ge)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),cn(l.mutation,u,l.mutation.getFieldMask(),nt.now())):o.set(u.key,It.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new Rp(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const s=an();let r=new rt((o,a)=>o-a),i=L();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||It.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||L()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=ou();l.forEach(f=>{if(!i.has(f)){const d=pu(n.get(f),s.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return g.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return T.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):jd(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):g.resolve(re());let a=-1,c=i;return o.next(u=>g.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?g.resolve():this.remoteDocumentCache.getEntry(t,l).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,c,u,L())).next(l=>({batchId:a,changes:iu(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new T(n)).next(s=>{let r=en();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=en();return this.indexManager.getCollectionParents(t,r).next(o=>g.forEach(o,a=>{const c=function(u,l){return new qs(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,dt.newInvalidDocument(u)))});let o=en();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&cn(u.mutation,c,It.empty(),nt.now()),Hs(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class Lp{constructor(t){this.serializer=t,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(t,n){return g.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:kt(s.createTime)}),g.resolve()}getNamedQuery(t,n){return g.resolve(this.Xn.get(n))}saveNamedQuery(t,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:kp(s.bundledQuery),readTime:kt(s.readTime)}}(n)),g.resolve()}}/**
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
 */class xp{constructor(){this.overlays=new rt(T.comparator),this.ts=new Map}getOverlay(t,n){return g.resolve(this.overlays.get(n))}getOverlays(t,n){const s=re();return g.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.re(t,n,i)}),g.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.ts.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ts.delete(s)),g.resolve()}getOverlaysForCollection(t,n,s){const r=re(),i=n.length+1,o=new T(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return g.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new rt((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=re(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=re(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return g.resolve(a)}re(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ts.get(r.largestBatchId).delete(s.key);this.ts.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new ip(n,s));let i=this.ts.get(n);i===void 0&&(i=L(),this.ts.set(n,i)),this.ts.set(n,i.add(s.key))}}/**
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
 */class xi{constructor(){this.es=new st(it.ns),this.ss=new st(it.rs)}isEmpty(){return this.es.isEmpty()}addReference(t,n){const s=new it(t,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.us(new it(t,n))}cs(t,n){t.forEach(s=>this.removeReference(s,n))}hs(t){const n=new T(new W([])),s=new it(n,t),r=new it(n,t+1),i=[];return this.ss.forEachInRange([s,r],o=>{this.us(o),i.push(o.key)}),i}ls(){this.es.forEach(t=>this.us(t))}us(t){this.es=this.es.delete(t),this.ss=this.ss.delete(t)}fs(t){const n=new T(new W([])),s=new it(n,t),r=new it(n,t+1);let i=L();return this.ss.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new it(t,0),s=this.es.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class it{constructor(t,n){this.key=t,this.ds=n}static ns(t,n){return T.comparator(t.key,n.key)||j(t.ds,n.ds)}static rs(t,n){return j(t.ds,n.ds)||T.comparator(t.key,n.key)}}/**
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
 */class Mp{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new st(it.ns)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rp(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this._s=this._s.add(new it(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,n){return g.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.ys(s),i=r<0?0:r;return g.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new it(n,0),r=new it(n,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([s,r],o=>{const a=this.gs(o.ds);i.push(a)}),g.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new st(j);return n.forEach(r=>{const i=new it(r,0),o=new it(r,Number.POSITIVE_INFINITY);this._s.forEachInRange([i,o],a=>{s=s.add(a.ds)})}),g.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;T.isDocumentKey(i)||(i=i.child(""));const o=new it(new T(i),0);let a=new st(j);return this._s.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.ds)),!0)},o),g.resolve(this.ps(a))}ps(t){const n=[];return t.forEach(s=>{const r=this.gs(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){G(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return g.forEach(n.mutations,r=>{const i=new it(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this._s=s})}En(t){}containsKey(t,n){const s=new it(n,0),r=this._s.firstAfterOrEqual(s);return g.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}Is(t,n){return this.ys(t)}ys(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}gs(t){const n=this.ys(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Pp{constructor(t){this.Ts=t,this.docs=new rt(T.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return g.resolve(s?s.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(t,n){let s=Bt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():dt.newInvalidDocument(r))}),g.resolve(s)}getDocumentsMatchingQuery(t,n,s,r){let i=Bt();const o=n.path,a=new T(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||_d(Ed(l),s)<=0||(r.has(l.key)||Hs(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return g.resolve(i)}getAllFromCollectionGroup(t,n,s,r){S()}Es(t,n){return g.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Fp(this)}getSize(t){return g.resolve(this.size)}}class Fp extends Np{constructor(t){super(),this.Jn=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Jn.addEntry(t,r)):this.Jn.removeEntry(s)}),g.waitFor(n)}getFromCache(t,n){return this.Jn.getEntry(t,n)}getAllFromCache(t,n){return this.Jn.getEntries(t,n)}}/**
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
 */class Vp{constructor(t){this.persistence=t,this.As=new We(n=>Di(n),Ai),this.lastRemoteSnapshotVersion=A.min(),this.highestTargetId=0,this.Rs=0,this.vs=new xi,this.targetCount=0,this.bs=Be.vn()}forEachTarget(t,n){return this.As.forEach((s,r)=>n(r)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.Rs)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),g.resolve()}Sn(t){this.As.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.bs=new Be(n),this.highestTargetId=n),t.sequenceNumber>this.Rs&&(this.Rs=t.sequenceNumber)}addTargetData(t,n){return this.Sn(n),this.targetCount+=1,g.resolve()}updateTargetData(t,n){return this.Sn(n),g.resolve()}removeTargetData(t,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),g.waitFor(i).next(()=>r)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,n){const s=this.As.get(n)||null;return g.resolve(s)}addMatchingKeys(t,n,s){return this.vs.os(n,s),g.resolve()}removeMatchingKeys(t,n,s){this.vs.cs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),g.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.vs.hs(n),g.resolve()}getMatchingKeysForTargetId(t,n){const s=this.vs.fs(n);return g.resolve(s)}containsKey(t,n){return g.resolve(this.vs.containsKey(n))}}/**
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
 */class Up{constructor(t,n){this.Ps={},this.overlays={},this.Vs=new Si(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=t(this),this.Ds=new Vp(this),this.indexManager=new Dp,this.remoteDocumentCache=function(s){return new Pp(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new Sp(n),this.xs=new Lp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new xp,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Ps[t.toKey()];return s||(s=new Mp(n,this.referenceDelegate),this.Ps[t.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(t,n,s){_("MemoryPersistence","Starting transaction:",t);const r=new Bp(this.Vs.next());return this.referenceDelegate.Ns(),s(r).next(i=>this.referenceDelegate.ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(t,n){return g.or(Object.values(this.Ps).map(s=>()=>s.containsKey(t,n)))}}class Bp extends Td{constructor(t){super(),this.currentSequenceNumber=t}}class Mi{constructor(t){this.persistence=t,this.$s=new xi,this.Ms=null}static Fs(t){return new Mi(t)}get Bs(){if(this.Ms)return this.Ms;throw S()}addReference(t,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),g.resolve()}removeReference(t,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),g.resolve()}markPotentiallyOrphaned(t,n){return this.Bs.add(n.toString()),g.resolve()}removeTarget(t,n){this.$s.hs(n.targetId).forEach(r=>this.Bs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Bs.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}Ns(){this.Ms=new Set}ks(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Bs,s=>{const r=T.fromPath(s);return this.Ls(t,r).next(i=>{i||n.removeEntry(r,A.min())})}).next(()=>(this.Ms=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ls(t,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(t){return 0}Ls(t,n){return g.or([()=>g.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Os(t,n)])}}/**
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
 */class Pi{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Vi=s,this.Si=r}static Di(t,n){let s=L(),r=L();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Pi(t,n.fromCache,s,r)}}/**
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
 */class $p{constructor(){this.Ci=!1}initialize(t,n){this.xi=t,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(t,n,s,r){return this.Ni(t,n).next(i=>i||this.ki(t,n,r,s)).next(i=>i||this.Oi(t,n))}Ni(t,n){if(Po(n))return g.resolve(null);let s=Ut(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Hr(n,null,"F"),s=Ut(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=L(...i);return this.xi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const u=this.$i(n,a);return this.Mi(n,u,o,c.readTime)?this.Ni(t,Hr(n,null,"F")):this.Fi(t,u,n,c)}))})))}ki(t,n,s,r){return Po(n)||r.isEqual(A.min())?this.Oi(t,n):this.xi.getDocuments(t,s).next(i=>{const o=this.$i(n,i);return this.Mi(n,o,s,r)?this.Oi(t,n):(ko()<=$.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Kr(n)),this.Fi(t,o,n,wd(r,-1)))})}$i(t,n){let s=new st(su(t));return n.forEach((r,i)=>{Hs(t,i)&&(s=s.add(i))}),s}Mi(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(t,n){return ko()<=$.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",Kr(n)),this.xi.getDocumentsMatchingQuery(t,n,Wt.min())}Fi(t,n,s,r){return this.xi.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class jp{constructor(t,n,s,r){this.persistence=t,this.Bi=n,this.serializer=r,this.Li=new rt(j),this.qi=new We(i=>Di(i),Ai),this.Ui=new Map,this.Ki=t.getRemoteDocumentCache(),this.Ds=t.getTargetCache(),this.xs=t.getBundleCache(),this.Gi(s)}Gi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Op(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Li))}}function qp(e,t,n,s){return new jp(e,t,n,s)}async function Su(e,t){const n=R(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Gi(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=L();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function zp(e,t){const n=R(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=g.resolve();return h.forEach(d=>{f=f.next(()=>u.getEntry(a,d)).next(p=>{const m=c.docVersions.get(d);G(m!==null),p.version.compareTo(m)<0&&(l.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),u.addEntry(p)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,t,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=L();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,r))})}function ku(e){const t=R(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ds.getLastRemoteSnapshotVersion(n))}function Hp(e,t){const n=R(e),s=t.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const a=[];t.targetChanges.forEach((l,h)=>{const f=r.get(h);if(!f)return;a.push(n.Ds.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(i,l.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.has(h)?d=d.withResumeToken(yt.EMPTY_BYTE_STRING,A.min()).withLastLimboFreeSnapshotVersion(A.min()):l.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(l.resumeToken,s)),r=r.insert(h,d),function(p,m,v){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(f,d,l)&&a.push(n.Ds.updateTargetData(i,d))});let c=Bt(),u=L();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Kp(i,o,t.documentUpdates).next(l=>{c=l.zi,u=l.ji})),!s.isEqual(A.min())){const l=n.Ds.getLastRemoteSnapshotVersion(i).next(h=>n.Ds.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return g.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Li=r,i))}function Kp(e,t,n){let s=L(),r=L();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=Bt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(A.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{zi:o,ji:r}})}function Gp(e,t){const n=R(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function Qp(e,t){const n=R(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ds.getTargetData(s,t).next(i=>i?(r=i,g.resolve(r)):n.Ds.allocateTargetId(s).next(o=>(r=new ce(t,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Li.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(t,s.targetId)),s})}async function Yr(e,t,n){const s=R(e),r=s.Li.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Un(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Li=s.Li.remove(t),s.qi.delete(r.target)}function Ho(e,t,n){const s=R(e);let r=A.min(),i=L();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=R(a),h=l.qi.get(u);return h!==void 0?g.resolve(l.Li.get(h)):l.Ds.getTargetData(c,u)}(s,o,Ut(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,t,n?r:A.min(),n?i:L())).next(a=>(Wp(s,qd(t),a),{documents:a,Wi:i})))}function Wp(e,t,n){let s=e.Ui.get(t)||A.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.Ui.set(t,s)}class Ko{constructor(){this.activeTargetIds=au()}tr(t){this.activeTargetIds=this.activeTargetIds.add(t)}er(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Yp{constructor(){this.Br=new Ko,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Br.tr(t),this.Lr[t]||"not-current"}updateQueryState(t,n,s){this.Lr[t]=n}removeLocalQueryTarget(t){this.Br.er(t)}isLocalQueryTarget(t){return this.Br.activeTargetIds.has(t)}clearQueryState(t){delete this.Lr[t]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(t){return this.Br.activeTargetIds.has(t)}start(){return this.Br=new Ko,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Xp{qr(t){}shutdown(){}}/**
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
 */class Go{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(t){this.zr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.zr)t(0)}Qr(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.zr)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Xn=null;function wr(){return Xn===null?Xn=268435456+Math.round(2147483648*Math.random()):Xn++,"0x"+Xn.toString(16)}/**
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
 */const Jp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Zp{constructor(t){this.Wr=t.Wr,this.Hr=t.Hr}Jr(t){this.Yr=t}Zr(t){this.Xr=t}onMessage(t){this.eo=t}close(){this.Hr()}send(t){this.Wr(t)}no(){this.Yr()}so(t){this.Xr(t)}io(t){this.eo(t)}}/**
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
 */const ht="WebChannelConnection";class tm extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.ro=n+"://"+t.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(t,n,s,r,i){const o=wr(),a=this.ao(t,n);_("RestConnection",`Sending RPC '${t}' ${o}:`,a,s);const c={};return this.ho(c,r,i),this.lo(t,a,c,s).then(u=>(_("RestConnection",`Received RPC '${t}' ${o}: `,u),u),u=>{throw ys("RestConnection",`RPC '${t}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}fo(t,n,s,r,i,o){return this.co(t,n,s,r,i)}ho(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Qe,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}ao(t,n){const s=Jp[t];return`${this.ro}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,n,s,r){const i=wr();return new Promise((o,a)=>{const c=new ud;c.setWithCredentials(!0),c.listenOnce(od.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case yr.NO_ERROR:const l=c.getResponseJson();_(ht,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(l)),o(l);break;case yr.TIMEOUT:_(ht,`RPC '${t}' ${i} timed out`),a(new C(y.DEADLINE_EXCEEDED,"Request time out"));break;case yr.HTTP_ERROR:const h=c.getStatus();if(_(ht,`RPC '${t}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(m){const v=m.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(v)>=0?v:y.UNKNOWN}(d.status);a(new C(p,d.message))}else a(new C(y.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new C(y.UNAVAILABLE,"Connection failed."));break;default:S()}}finally{_(ht,`RPC '${t}' ${i} completed.`)}});const u=JSON.stringify(r);_(ht,`RPC '${t}' ${i} sending request:`,r),c.send(n,"POST",u,s,15)})}wo(t,n,s){const r=wr(),i=[this.ro,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=rd(),a=id(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new cd({})),this.ho(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");_(ht,`Creating RPC '${t}' stream ${r}: ${u}`,c);const l=o.createWebChannel(u,c);let h=!1,f=!1;const d=new Zp({Wr:m=>{f?_(ht,`Not sending because RPC '${t}' stream ${r} is closed:`,m):(h||(_(ht,`Opening RPC '${t}' stream ${r} transport.`),l.open(),h=!0),_(ht,`RPC '${t}' stream ${r} sending:`,m),l.send(m))},Hr:()=>l.close()}),p=(m,v,w)=>{m.listen(v,O=>{try{w(O)}catch(b){setTimeout(()=>{throw b},0)}})};return p(l,Gn.EventType.OPEN,()=>{f||_(ht,`RPC '${t}' stream ${r} transport opened.`)}),p(l,Gn.EventType.CLOSE,()=>{f||(f=!0,_(ht,`RPC '${t}' stream ${r} transport closed`),d.so())}),p(l,Gn.EventType.ERROR,m=>{f||(f=!0,ys(ht,`RPC '${t}' stream ${r} transport errored:`,m),d.so(new C(y.UNAVAILABLE,"The operation could not be completed")))}),p(l,Gn.EventType.MESSAGE,m=>{var v;if(!f){const w=m.data[0];G(!!w);const O=w,b=O.error||((v=O[0])===null||v===void 0?void 0:v.error);if(b){_(ht,`RPC '${t}' stream ${r} received error:`,b);const x=b.status;let X=function(H){const D=J[H];if(D!==void 0)return yu(D)}(x),tt=b.message;X===void 0&&(X=y.INTERNAL,tt="Unknown error status: "+x+" with message "+b.message),f=!0,d.so(new C(X,tt)),l.close()}else _(ht,`RPC '${t}' stream ${r} received:`,w),d.io(w)}}),p(a,ad.STAT_EVENT,m=>{m.stat===Co.PROXY?_(ht,`RPC '${t}' stream ${r} detected buffering proxy`):m.stat===Co.NOPROXY&&_(ht,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{d.no()},0),d}}function Er(){return typeof document<"u"?document:null}/**
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
 */function Ys(e){return new fp(e,!0)}/**
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
 */class Du{constructor(t,n,s=1e3,r=1.5,i=6e4){this.Ws=t,this.timerId=n,this._o=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&_("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),t())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class Au{constructor(t,n,s,r,i,o,a,c){this.Ws=t,this.bo=s,this.Po=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Du(t,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(t){this.Bo(),this.stream.send(t)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(t,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,t!==4?this.Co.reset():n&&n.code===y.RESOURCE_EXHAUSTED?(Vt(n.toString()),Vt("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const t=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Vo===n&&this.Ko(s,r)},s=>{t(()=>{const r=new C(y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(r)})})}Ko(t,n){const s=this.Uo(this.Vo);this.stream=this.Qo(t,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(r=>{s(()=>this.Go(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(t){return _("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===t?n():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class em extends Au{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}Qo(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.Co.reset();const n=mp(this.serializer,t),s=function(r){if(!("targetChange"in r))return A.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?A.min():i.readTime?kt(i.readTime):A.min()}(t);return this.listener.zo(n,s)}jo(t){const n={};n.database=Wr(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;return o=zr(a)?{documents:vp(r,a)}:{query:wp(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Eu(r,i.resumeToken):i.snapshotVersion.compareTo(A.min())>0&&(o.readTime=bs(r,i.snapshotVersion.toTimestamp())),o}(this.serializer,t);const s=_p(this.serializer,t);s&&(n.labels=s),this.Fo(n)}Wo(t){const n={};n.database=Wr(this.serializer),n.removeTarget=t,this.Fo(n)}}class nm extends Au{constructor(t,n,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(G(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Ho){this.Co.reset();const n=yp(t.writeResults,t.commitTime),s=kt(t.commitTime);return this.listener.Zo(s,n)}return G(!t.writeResults||t.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const t={};t.database=Wr(this.serializer),this.Fo(t)}Yo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>gp(this.serializer,s))};this.Fo(n)}}/**
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
 */class sm extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new C(y.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.co(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new C(y.UNKNOWN,r.toString())})}fo(t,n,s,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.fo(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(y.UNKNOWN,i.toString())})}terminate(){this.eu=!0}}class rm{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(t){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.uu("Offline")))}set(t){this.hu(),this.su=0,t==="Online"&&(this.ru=!1),this.uu(t)}uu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}cu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Vt(n),this.ru=!1):_("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class im{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(o=>{s.enqueueAndForget(async()=>{ye(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=R(a);c.du.add(4),await $n(c),c.mu.set("Unknown"),c.du.delete(4),await Xs(c)}(this))})}),this.mu=new rm(s,r)}}async function Xs(e){if(ye(e))for(const t of e.wu)await t(!0)}async function $n(e){for(const t of e.wu)await t(!1)}function Nu(e,t){const n=R(e);n.fu.has(t.targetId)||(n.fu.set(t.targetId,t),Ui(n)?Vi(n):Ye(n).No()&&Fi(n,t))}function Ru(e,t){const n=R(e),s=Ye(n);n.fu.delete(t),s.No()&&Ou(n,t),n.fu.size===0&&(s.No()?s.$o():ye(n)&&n.mu.set("Unknown"))}function Fi(e,t){e.gu.Ot(t.targetId),Ye(e).jo(t)}function Ou(e,t){e.gu.Ot(t),Ye(e).Wo(t)}function Vi(e){e.gu=new cp({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.fu.get(t)||null}),Ye(e).start(),e.mu.ou()}function Ui(e){return ye(e)&&!Ye(e).xo()&&e.fu.size>0}function ye(e){return R(e).du.size===0}function Lu(e){e.gu=void 0}async function om(e){e.fu.forEach((t,n)=>{Fi(e,t)})}async function am(e,t){Lu(e),Ui(e)?(e.mu.au(t),Vi(e)):e.mu.set("Unknown")}async function cm(e,t,n){if(e.mu.set("Online"),t instanceof wu&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.fu.delete(o),s.gu.removeTarget(o))}(e,t)}catch(s){_("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Ts(e,s)}else if(t instanceof es?e.gu.Kt(t):t instanceof vu?e.gu.Jt(t):e.gu.zt(t),!n.isEqual(A.min()))try{const s=await ku(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.gu.Xt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.fu.get(c);u&&r.fu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.fu.get(a);if(!c)return;r.fu.set(a,c.withResumeToken(yt.EMPTY_BYTE_STRING,c.snapshotVersion)),Ou(r,a);const u=new ce(c.target,a,1,c.sequenceNumber);Fi(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){_("RemoteStore","Failed to raise snapshot:",s),await Ts(e,s)}}async function Ts(e,t,n){if(!Un(t))throw t;e.du.add(1),await $n(e),e.mu.set("Offline"),n||(n=()=>ku(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await n(),e.du.delete(1),await Xs(e)})}function xu(e,t){return t().catch(n=>Ts(e,n,t))}async function Js(e){const t=R(e),n=Xt(t);let s=t.lu.length>0?t.lu[t.lu.length-1].batchId:-1;for(;um(t);)try{const r=await Gp(t.localStore,s);if(r===null){t.lu.length===0&&n.$o();break}s=r.batchId,lm(t,r)}catch(r){await Ts(t,r)}Mu(t)&&Pu(t)}function um(e){return ye(e)&&e.lu.length<10}function lm(e,t){e.lu.push(t);const n=Xt(e);n.No()&&n.Jo&&n.Yo(t.mutations)}function Mu(e){return ye(e)&&!Xt(e).xo()&&e.lu.length>0}function Pu(e){Xt(e).start()}async function hm(e){Xt(e).tu()}async function fm(e){const t=Xt(e);for(const n of e.lu)t.Yo(n.mutations)}async function dm(e,t,n){const s=e.lu.shift(),r=Ri.from(s,t,n);await xu(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await Js(e)}async function pm(e,t){t&&Xt(e).Jo&&await async function(n,s){if(r=s.code,ap(r)&&r!==y.ABORTED){const i=n.lu.shift();Xt(n).Oo(),await xu(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Js(n)}var r}(e,t),Mu(e)&&Pu(e)}async function Qo(e,t){const n=R(e);n.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const s=ye(n);n.du.add(3),await $n(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.du.delete(3),await Xs(n)}async function mm(e,t){const n=R(e);t?(n.du.delete(2),await Xs(n)):t||(n.du.add(2),await $n(n),n.mu.set("Unknown"))}function Ye(e){return e.yu||(e.yu=function(t,n,s){const r=R(t);return r.nu(),new em(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(e.datastore,e.asyncQueue,{Jr:om.bind(null,e),Zr:am.bind(null,e),zo:cm.bind(null,e)}),e.wu.push(async t=>{t?(e.yu.Oo(),Ui(e)?Vi(e):e.mu.set("Unknown")):(await e.yu.stop(),Lu(e))})),e.yu}function Xt(e){return e.pu||(e.pu=function(t,n,s){const r=R(t);return r.nu(),new nm(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(e.datastore,e.asyncQueue,{Jr:hm.bind(null,e),Zr:pm.bind(null,e),Xo:fm.bind(null,e),Zo:dm.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Oo(),await Js(e)):(await e.pu.stop(),e.lu.length>0&&(_("RemoteStore",`Stopping write stream with ${e.lu.length} pending writes`),e.lu=[]))})),e.pu}/**
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
 */class Bi{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new ae,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new Bi(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(y.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $i(e,t){if(Vt("AsyncQueue",`${t}: ${e}`),Un(e))return new C(y.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Re{constructor(t){this.comparator=t?(n,s)=>t(n,s)||T.comparator(n.key,s.key):(n,s)=>T.comparator(n.key,s.key),this.keyedMap=en(),this.sortedSet=new rt(this.comparator)}static emptySet(t){return new Re(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Re)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Re;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class Wo{constructor(){this.Iu=new rt(T.comparator)}track(t){const n=t.doc.key,s=this.Iu.get(n);s?t.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,t):t.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Iu=this.Iu.remove(n):t.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:t.doc}):S():this.Iu=this.Iu.insert(n,t)}Tu(){const t=[];return this.Iu.inorderTraversal((n,s)=>{t.push(s)}),t}}class $e{constructor(t,n,s,r,i,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new $e(t,n,Re.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&zs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class gm{constructor(){this.Eu=void 0,this.listeners=[]}}class ym{constructor(){this.queries=new We(t=>nu(t),zs),this.onlineState="Unknown",this.Au=new Set}}async function vm(e,t){const n=R(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new gm),r)try{i.Eu=await n.onListen(s)}catch(o){const a=$i(o,`Initialization of query '${Kr(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.Ru(n.onlineState),i.Eu&&t.vu(i.Eu)&&ji(n)}async function wm(e,t){const n=R(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Em(e,t){const n=R(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.vu(r)&&(s=!0);o.Eu=r}}s&&ji(n)}function _m(e,t,n){const s=R(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function ji(e){e.Au.forEach(t=>{t.next()})}class bm{constructor(t,n,s){this.query=t,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new $e(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Pu?this.Su(t)&&(this.bu.next(t),n=!0):this.Du(t,this.onlineState)&&(this.Cu(t),n=!0),this.Vu=t,n}onError(t){this.bu.error(t)}Ru(t){this.onlineState=t;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,t)&&(this.Cu(this.Vu),n=!0),n}Du(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Su(t){if(t.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(t){t=$e.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Pu=!0,this.bu.next(t)}}/**
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
 */class Fu{constructor(t){this.key=t}}class Vu{constructor(t){this.key=t}}class Tm{constructor(t,n){this.query=t,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=L(),this.mutatedKeys=L(),this.Ku=su(t),this.Gu=new Re(this.Ku)}get Qu(){return this.Lu}zu(t,n){const s=n?n.ju:new Wo,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((l,h)=>{const f=r.get(l),d=Hs(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),m=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let v=!1;f&&d?f.data.isEqual(d.data)?p!==m&&(s.track({type:3,doc:d}),v=!0):this.Wu(f,d)||(s.track({type:2,doc:d}),v=!0,(c&&this.Ku(d,c)>0||u&&this.Ku(d,u)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),v=!0):f&&!d&&(s.track({type:1,doc:f}),v=!0,(c||u)&&(a=!0)),v&&(d?(o=o.add(d),i=m?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Gu:o,ju:s,Mi:a,mutatedKeys:i}}Wu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.Gu;this.Gu=t.Gu,this.mutatedKeys=t.mutatedKeys;const i=t.ju.Tu();i.sort((u,l)=>function(h,f){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return S()}};return d(h)-d(f)}(u.type,l.type)||this.Ku(u.doc,l.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new $e(this.query,t.Gu,r,i,t.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Wo,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(t){return!this.Lu.has(t)&&!!this.Gu.has(t)&&!this.Gu.get(t).hasLocalMutations}Hu(t){t&&(t.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=t.current)}Ju(){if(!this.current)return[];const t=this.Uu;this.Uu=L(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return t.forEach(s=>{this.Uu.has(s)||n.push(new Vu(s))}),this.Uu.forEach(s=>{t.has(s)||n.push(new Fu(s))}),n}Xu(t){this.Lu=t.Wi,this.Uu=L();const n=this.zu(t.documents);return this.applyChanges(n,!0)}tc(){return $e.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Im{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Cm{constructor(t){this.key=t,this.ec=!1}}class Sm{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new We(a=>nu(a),zs),this.ic=new Map,this.rc=new Set,this.oc=new rt(T.comparator),this.uc=new Map,this.cc=new xi,this.ac={},this.hc=new Map,this.lc=Be.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function km(e,t){const n=Fm(e);let s,r;const i=n.sc.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await Qp(n.localStore,Ut(t));n.isPrimaryClient&&Nu(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Dm(n,t,s,a==="current",o.resumeToken)}return r}async function Dm(e,t,n,s,r){e.dc=(h,f,d)=>async function(p,m,v,w){let O=m.view.zu(v);O.Mi&&(O=await Ho(p.localStore,m.query,!1).then(({documents:X})=>m.view.zu(X,O)));const b=w&&w.targetChanges.get(m.targetId),x=m.view.applyChanges(O,p.isPrimaryClient,b);return Xo(p,m.targetId,x.Yu),x.snapshot}(e,h,f,d);const i=await Ho(e.localStore,t,!0),o=new Tm(t,i.Wi),a=o.zu(i.documents),c=Bn.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",r),u=o.applyChanges(a,e.isPrimaryClient,c);Xo(e,n,u.Yu);const l=new Im(t,n,o);return e.sc.set(t,l),e.ic.has(n)?e.ic.get(n).push(t):e.ic.set(n,[t]),u.snapshot}async function Am(e,t){const n=R(e),s=n.sc.get(t),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!zs(i,t))),void n.sc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Yr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ru(n.remoteStore,s.targetId),Xr(n,s.targetId)}).catch(Vn)):(Xr(n,s.targetId),await Yr(n.localStore,s.targetId,!0))}async function Nm(e,t,n){const s=Vm(e);try{const r=await function(i,o){const a=R(i),c=nt.now(),u=o.reduce((f,d)=>f.add(d.key),L());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=Bt(),p=L();return a.Ki.getEntries(f,u).next(m=>{d=m,d.forEach((v,w)=>{w.isValidDocument()||(p=p.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(m=>{l=m;const v=[];for(const w of o){const O=np(w,l.get(w.key).overlayedDocument);O!=null&&v.push(new ge(w.key,O,Wc(O.value.mapValue),Mt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,v,o)}).next(m=>{h=m;const v=m.applyToLocalDocumentSet(l,p);return a.documentOverlayCache.saveOverlays(f,m.batchId,v)})}).then(()=>({batchId:h.batchId,changes:iu(l)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new rt(j)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(s,r.batchId,n),await jn(s,r.changes),await Js(s.remoteStore)}catch(r){const i=$i(r,"Failed to persist write");n.reject(i)}}async function Uu(e,t){const n=R(e);try{const s=await Hp(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(G(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?G(o.ec):r.removedDocuments.size>0&&(G(o.ec),o.ec=!1))}),await jn(n,s,t)}catch(s){await Vn(s)}}function Yo(e,t,n){const s=R(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.Ru(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=R(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Ru(o)&&(c=!0)}),c&&ji(a)}(s.eventManager,t),r.length&&s.nc.zo(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Rm(e,t,n){const s=R(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.uc.get(t),i=r&&r.key;if(i){let o=new rt(T.comparator);o=o.insert(i,dt.newNoDocument(i,A.min()));const a=L().add(i),c=new Ws(A.min(),new Map,new st(j),o,a);await Uu(s,c),s.oc=s.oc.remove(i),s.uc.delete(t),qi(s)}else await Yr(s.localStore,t,!1).then(()=>Xr(s,t,n)).catch(Vn)}async function Om(e,t){const n=R(e),s=t.batch.batchId;try{const r=await zp(n.localStore,t);$u(n,s,null),Bu(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await jn(n,r)}catch(r){await Vn(r)}}async function Lm(e,t,n){const s=R(e);try{const r=await function(i,o){const a=R(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(G(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,t);$u(s,t,n),Bu(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await jn(s,r)}catch(r){await Vn(r)}}function Bu(e,t){(e.hc.get(t)||[]).forEach(n=>{n.resolve()}),e.hc.delete(t)}function $u(e,t,n){const s=R(e);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),s.ac[s.currentUser.toKey()]=r}}function Xr(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.ic.get(t))e.sc.delete(s),n&&e.nc.wc(s,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.hs(t).forEach(s=>{e.cc.containsKey(s)||ju(e,s)})}function ju(e,t){e.rc.delete(t.path.canonicalString());const n=e.oc.get(t);n!==null&&(Ru(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),qi(e))}function Xo(e,t,n){for(const s of n)s instanceof Fu?(e.cc.addReference(s.key,t),xm(e,s)):s instanceof Vu?(_("SyncEngine","Document no longer in limbo: "+s.key),e.cc.removeReference(s.key,t),e.cc.containsKey(s.key)||ju(e,s.key)):S()}function xm(e,t){const n=t.key,s=n.path.canonicalString();e.oc.get(n)||e.rc.has(s)||(_("SyncEngine","New document in limbo: "+n),e.rc.add(s),qi(e))}function qi(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){const t=e.rc.values().next().value;e.rc.delete(t);const n=new T(W.fromString(t)),s=e.lc.next();e.uc.set(s,new Cm(n)),e.oc=e.oc.insert(n,s),Nu(e.remoteStore,new ce(Ut(Ni(n.path)),s,2,Si.ct))}}async function jn(e,t,n){const s=R(e),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,t,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=Pi.Di(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.nc.zo(r),await async function(a,c){const u=R(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>g.forEach(c,h=>g.forEach(h.Vi,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>g.forEach(h.Si,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!Un(l))throw l;_("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.Li.get(h),d=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(d);u.Li=u.Li.insert(h,p)}}}(s.localStore,i))}async function Mm(e,t){const n=R(e);if(!n.currentUser.isEqual(t)){_("SyncEngine","User change. New user:",t.toKey());const s=await Su(n.localStore,t);n.currentUser=t,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new C(y.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await jn(n,s.Qi)}}function Pm(e,t){const n=R(e),s=n.uc.get(t);if(s&&s.ec)return L().add(s.key);{let r=L();const i=n.ic.get(t);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function Fm(e){const t=R(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Uu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Pm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Rm.bind(null,t),t.nc.zo=Em.bind(null,t.eventManager),t.nc.wc=_m.bind(null,t.eventManager),t}function Vm(e){const t=R(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Om.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Lm.bind(null,t),t}class Jo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Ys(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return qp(this.persistence,new $p,t.initialUser,this.serializer)}createPersistence(t){return new Up(Mi.Fs,this.serializer)}createSharedClientState(t){return new Yp}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Um{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Yo(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Mm.bind(null,this.syncEngine),await mm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new ym}createDatastore(t){const n=Ys(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new tm(r));var r;return function(i,o,a,c){return new sm(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>Yo(this.syncEngine,a,0),o=Go.D()?new Go:new Xp,new im(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,c,u){const l=new Sm(s,r,i,o,a,c);return u&&(l.fc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=R(t);_("RemoteStore","RemoteStore shutting down."),n.du.add(5),await $n(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */class Bm{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.gc(this.observer.next,t)}error(t){this.observer.error?this.gc(this.observer.error,t):Vt("Uncaught Error in snapshot listener:",t.toString())}yc(){this.muted=!0}gc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class $m{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=ft.UNAUTHENTICATED,this.clientId=Hc.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{_("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(_("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ae;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=$i(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function _r(e,t){e.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Su(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Zo(e,t){e.asyncQueue.verifyOperationInProgress();const n=await qm(e);_("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>Qo(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>Qo(t.remoteStore,i)),e._onlineComponents=t}function jm(e){return e.name==="FirebaseError"?e.code===y.FAILED_PRECONDITION||e.code===y.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function qm(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await _r(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!jm(n))throw n;ys("Error using user provided cache. Falling back to memory cache: "+n),await _r(e,new Jo)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await _r(e,new Jo);return e._offlineComponents}async function qu(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await Zo(e,e._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await Zo(e,new Um))),e._onlineComponents}function zm(e){return qu(e).then(t=>t.syncEngine)}async function ta(e){const t=await qu(e),n=t.eventManager;return n.onListen=km.bind(null,t.syncEngine),n.onUnlisten=Am.bind(null,t.syncEngine),n}/**
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
 */const ea=new Map;/**
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
 */function Hm(e,t,n){if(!n)throw new C(y.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Km(e,t,n,s){if(t===!0&&s===!0)throw new C(y.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function na(e){if(!T.isDocumentKey(e))throw new C(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function zi(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":S()}function Oe(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new C(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zi(e);throw new C(y.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class sa{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new C(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new C(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Km("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class Hi{constructor(t,n,s,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sa({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new C(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new C(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sa(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ld;switch(n.type){case"firstParty":return new pd(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new C(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=ea.get(t);n&&(_("ComponentProvider","Removing Datastore"),ea.delete(t),n.terminate())}(this),Promise.resolve()}}function Gm(e,t,n,s={}){var r;const i=(e=Oe(e,Hi))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==t&&ys("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=ft.MOCK_USER;else{o=Hl(s.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new C(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ft(c)}e._authCredentials=new hd(new zc(o,a))}}/**
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
 */class bt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new bt(this.firestore,t,this._key)}}class Zs{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Zs(this.firestore,t,this._query)}}class Cn extends Zs{constructor(t,n,s){super(t,n,Ni(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new bt(this.firestore,null,new T(t))}withConverter(t){return new Cn(this.firestore,t,this._path)}}function Qm(e,t,...n){if(e=Qt(e),arguments.length===1&&(t=Hc.A()),Hm("doc","path",t),e instanceof Hi){const s=W.fromString(t,...n);return na(s),new bt(e,null,new T(s))}{if(!(e instanceof bt||e instanceof Cn))throw new C(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(W.fromString(t,...n));return na(s),new bt(e.firestore,e instanceof Cn?e.converter:null,new T(s))}}/**
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
 */class Wm{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Du(this,"async_queue_retry"),this.qc=()=>{const n=Er();n&&_("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const t=Er();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Uc(),this.Kc(t)}enterRestrictedMode(t){if(!this.Oc){this.Oc=!0,this.Bc=t||!1;const n=Er();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(t){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new ae;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.kc.push(t),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(t){if(!Un(t))throw t;_("AsyncQueue","Operation failed with retryable error: "+t)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(t){const n=this.Nc.then(()=>(this.Fc=!0,t().catch(s=>{this.Mc=s,this.Fc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Vt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(t,n,s){this.Uc(),this.Lc.indexOf(t)>-1&&(n=0);const r=Bi.createAndSchedule(this,t,n,s,i=>this.Qc(i));return this.$c.push(r),r}Uc(){this.Mc&&S()}verifyOperationInProgress(){}async zc(){let t;do t=this.Nc,await t;while(t!==this.Nc)}jc(t){for(const n of this.$c)if(n.timerId===t)return!0;return!1}Wc(t){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.zc()})}Hc(t){this.Lc.push(t)}Qc(t){const n=this.$c.indexOf(t);this.$c.splice(n,1)}}function ra(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(e,["next","error","complete"])}class Is extends Hi{constructor(t,n,s,r){super(t,n,s,r),this.type="firestore",this._queue=new Wm,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Hu(this),this._firestoreClient.terminate()}}function Ym(e,t){const n=typeof e=="object"?e:Wh(),s=typeof e=="string"?e:t||"(default)",r=Hh(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=jl("firestore");i&&Gm(r,...i)}return r}function zu(e){return e._firestoreClient||Hu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Hu(e){var t,n,s;const r=e._freezeSettings(),i=function(o,a,c,u){return new kd(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new $m(e._authCredentials,e._appCheckCredentials,e._queue,i),((n=r.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((s=r.cache)===null||s===void 0?void 0:s._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class je{constructor(t){this._byteString=t}static fromBase64String(t){try{return new je(yt.fromBase64String(t))}catch(n){throw new C(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new je(yt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class tr{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new C(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class er{constructor(t){this._methodName=t}}/**
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
 */class Ki{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new C(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new C(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}/**
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
 */const Xm=/^__.*__$/;class Ku{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new ge(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Gu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw S()}}class nr{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(t){return new nr(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.Zc({path:s,ta:!1});return r.ea(t),r}na(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.Zc({path:s,ta:!1});return r.Jc(),r}sa(t){return this.Zc({path:void 0,ta:!0})}ia(t){return Cs(t,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let t=0;t<this.path.length;t++)this.ea(this.path.get(t))}ea(t){if(t.length===0)throw this.ia("Document fields must not be empty");if(Gu(this.Yc)&&Xm.test(t))throw this.ia('Document fields cannot begin and end with "__"')}}class Jm{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||Ys(t)}ua(t,n,s,r=!1){return new nr({Yc:t,methodName:n,oa:s,path:pt.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zm(e){const t=e._freezeSettings(),n=Ys(e._databaseId);return new Jm(e._databaseId,!!t.ignoreUndefinedProperties,n)}class sr extends er{_toFieldTransform(t){if(t.Yc!==2)throw t.Yc===1?t.ia(`${this._methodName}() can only appear at the top level of your update data`):t.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof sr}}function tg(e,t,n){return new nr({Yc:3,oa:t.settings.oa,methodName:e._methodName,ta:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class eg extends er{constructor(t,n){super(t),this.ca=n}_toFieldTransform(t){const n=tg(this,t,!0),s=this.ca.map(i=>qn(i,n)),r=new Ue(s);return new Jd(t.path,r)}isEqual(t){return this===t}}function ng(e,t,n,s){const r=e.ua(1,t,n);Wu("Data must be an object, but it was:",r,s);const i=[],o=wt.empty();me(s,(c,u)=>{const l=Gi(t,c,n);u=Qt(u);const h=r.na(l);if(u instanceof sr)i.push(l);else{const f=qn(u,h);f!=null&&(i.push(l),o.set(l,f))}});const a=new It(i);return new Ku(o,a,r.fieldTransforms)}function sg(e,t,n,s,r,i){const o=e.ua(1,t,n),a=[ia(t,s,n)],c=[r];if(i.length%2!=0)throw new C(y.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(ia(t,i[f])),c.push(i[f+1]);const u=[],l=wt.empty();for(let f=a.length-1;f>=0;--f)if(!og(u,a[f])){const d=a[f];let p=c[f];p=Qt(p);const m=o.na(d);if(p instanceof sr)u.push(d);else{const v=qn(p,m);v!=null&&(u.push(d),l.set(d,v))}}const h=new It(u);return new Ku(l,h,o.fieldTransforms)}function qn(e,t){if(Qu(e=Qt(e)))return Wu("Unsupported field value:",t,e),rg(e,t);if(e instanceof er)return function(n,s){if(!Gu(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ta&&t.Yc!==4)throw t.ia("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=qn(o,s.sa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=Qt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Wd(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=nt.fromDate(n);return{timestampValue:bs(s.serializer,r)}}if(n instanceof nt){const r=new nt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:bs(s.serializer,r)}}if(n instanceof Ki)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof je)return{bytesValue:Eu(s.serializer,n._byteString)};if(n instanceof bt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Li(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${zi(n)}`)}(e,t)}function rg(e,t){const n={};return Kc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):me(e,(s,r)=>{const i=qn(r,t.Xc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Qu(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof nt||e instanceof Ki||e instanceof je||e instanceof bt||e instanceof er)}function Wu(e,t,n){if(!Qu(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=zi(n);throw s==="an object"?t.ia(e+" a custom object"):t.ia(e+" "+s)}}function ia(e,t,n){if((t=Qt(t))instanceof tr)return t._internalPath;if(typeof t=="string")return Gi(e,t);throw Cs("Field path arguments must be of type string or ",e,!1,void 0,n)}const ig=new RegExp("[~\\*/\\[\\]]");function Gi(e,t,n){if(t.search(ig)>=0)throw Cs(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new tr(...t.split("."))._internalPath}catch{throw Cs(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Cs(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new C(y.INVALID_ARGUMENT,a+e+c)}function og(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class Yu{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ag(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Xu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ag extends Yu{data(){return super.data()}}function Xu(e,t){return typeof t=="string"?Gi(e,t):t instanceof tr?t._internalPath:t._delegate._internalPath}/**
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
 */function cg(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new C(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ug{convertValue(t,n="none"){switch(fe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Pe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw S()}}convertObject(t,n){const s={};return me(t.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new Ki(Z(t.latitude),Z(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Qc(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(_n(t));default:return null}}convertTimestamp(t){const n=Yt(t);return new nt(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=W.fromString(t);G(Cu(s));const r=new bn(s.get(1),s.get(3)),i=new T(s.popFirst(5));return r.isEqual(n)||Vt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class nn{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ju extends Yu{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new ns(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Xu("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ns extends Ju{data(t={}){return super.data(t)}}class lg{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new nn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new ns(this._firestore,this._userDataWriter,s.key,s,new nn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new C(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new ns(s._firestore,s._userDataWriter,o.doc.key,o.doc,new nn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new ns(s._firestore,s._userDataWriter,o.doc.key,o.doc,new nn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:hg(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function hg(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return S()}}class Zu extends ug{constructor(t){super(),this.firestore=t}convertBytes(t){return new je(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new bt(this.firestore,null,n)}}function fg(e,t,n,...s){e=Oe(e,bt);const r=Oe(e.firestore,Is),i=Zm(r);let o;return o=typeof(t=Qt(t))=="string"||t instanceof tr?sg(i,"updateDoc",e._key,t,n,s):ng(i,"updateDoc",e._key,t),pg(r,[o.toMutation(e._key,Mt.exists(!0))])}function dg(e,...t){var n,s,r;e=Qt(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||ra(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(ra(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),t[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,u,l;if(e instanceof bt)u=Oe(e.firestore,Is),l=Ni(e._key.path),c={next:h=>{t[o]&&t[o](mg(u,e,h))},error:t[o+1],complete:t[o+2]};else{const h=Oe(e,Zs);u=Oe(h.firestore,Is),l=h._query;const f=new Zu(u);c={next:d=>{t[o]&&t[o](new lg(u,f,h,d))},error:t[o+1],complete:t[o+2]},cg(e._query)}return function(h,f,d,p){const m=new Bm(p),v=new bm(f,m,d);return h.asyncQueue.enqueueAndForget(async()=>vm(await ta(h),v)),()=>{m.yc(),h.asyncQueue.enqueueAndForget(async()=>wm(await ta(h),v))}}(zu(u),l,a,c)}function pg(e,t){return function(n,s){const r=new ae;return n.asyncQueue.enqueueAndForget(async()=>Nm(await zm(n),s,r)),r.promise}(zu(e),t)}function mg(e,t,n){const s=n.docs.get(t._key),r=new Zu(e);return new Ju(e,r,t._key,s,new nn(n.hasPendingWrites,n.fromCache),t.converter)}function gg(...e){return new eg("arrayUnion",e)}(function(e,t=!0){(function(n){Qe=n})(Qh),cs(new dn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Is(new fd(n.getProvider("auth-internal")),new gd(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new C(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bn(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Ae(So,"3.10.0",e),Ae(So,"3.10.0","esm2017")})();const yg={apiKey:"AIzaSyDbBV7DT8DNmxyLPUB_w0skCx6bQjDIDhE",authDomain:"nocontextquotes-86d30.firebaseapp.com",projectId:"nocontextquotes-86d30",storageBucket:"nocontextquotes-86d30.appspot.com",messagingSenderId:"704558739601",appId:"1:704558739601:web:f92bb50736b7c0cb360f30",measurementId:"G-RHFY5NDBMG"},vg=Ua(yg),wg=Ym(vg);function Qi(e){const t=e-1;return t*t*t+1}function oa(e){return--e*e*e*e*e+1}function Eg(e,{delay:t=0,duration:n=400,easing:s=de}={}){const r=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:s,css:i=>`opacity: ${i*r}`}}function _g(e,{delay:t=0,duration:n=400,easing:s=Qi,x:r=0,y:i=0,opacity:o=0}={}){const a=getComputedStyle(e),c=+a.opacity,u=a.transform==="none"?"":a.transform,l=c*(1-o),[h,f]=Zi(r),[d,p]=Zi(i);return{delay:t,duration:n,easing:s,css:(m,v)=>`
			transform: ${u} translate(${(1-m)*h}${f}, ${(1-m)*d}${p});
			opacity: ${c-l*v}`}}function aa(e,{delay:t=0,duration:n=400,easing:s=Qi,start:r=0,opacity:i=0}={}){const o=getComputedStyle(e),a=+o.opacity,c=o.transform==="none"?"":o.transform,u=1-r,l=a*(1-i);return{delay:t,duration:n,easing:s,css:(h,f)=>`
			transform: ${c} scale(${1-u*f});
			opacity: ${a-l*f}
		`}}function bg(e,{from:t,to:n},s={}){const r=getComputedStyle(e),i=r.transform==="none"?"":r.transform,[o,a]=r.transformOrigin.split(" ").map(parseFloat),c=t.left+t.width*o/n.width-(n.left+o),u=t.top+t.height*a/n.height-(n.top+a),{delay:l=0,duration:h=d=>Math.sqrt(d)*120,easing:f=Qi}=s;return{delay:l,duration:Jt(h)?h(Math.sqrt(c*c+u*u)):h,easing:f,css:(d,p)=>{const m=p*c,v=p*u,w=d+p*t.width/n.width,O=d+p*t.height/n.height;return`transform: ${i} translate(${m}px, ${v}px) scale(${w}, ${O});`}}}const we=[];function tl(e,t=N){let n;const s=new Set;function r(a){if($t(e,a)&&(e=a,n)){const c=!we.length;for(const u of s)u[1](),we.push(u,e);if(c){for(let u=0;u<we.length;u+=2)we[u][0](we[u+1]);we.length=0}}}function i(a){r(a(e))}function o(a,c=N){const u=[a,c];return s.add(u),s.size===1&&(n=t(r)||N),a(e),()=>{s.delete(u),s.size===0&&n&&(n(),n=null)}}return{set:r,update:i,subscribe:o}}const Tg={duration:4e3,initial:1,next:0,pausable:!1,dismissable:!0,reversed:!1,intro:{x:256}},Ig=()=>{const{subscribe:e,update:t}=tl([]);let n=0;const s={},r=u=>u instanceof Object;return{subscribe:e,push:(u,l={})=>{const h={target:"default",...r(u)?u:{...l,msg:u}},f=s[h.target]||{},d={...Tg,...f,...h,theme:{...f.theme,...h.theme},classes:[...f.classes||[],...h.classes||[]],id:++n};return t(p=>d.reversed?[...p,d]:[d,...p]),n},pop:u=>{t(l=>{if(!l.length||u===0)return[];if(r(u))return l.filter(f=>u(f));const h=u||Math.max(...l.map(f=>f.id));return l.filter(f=>f.id!==h)})},set:(u,l={})=>{const h=r(u)?{...u}:{...l,id:u};t(f=>{const d=f.findIndex(p=>p.id===h.id);return d>-1&&(f[d]={...f[d],...h}),f})},_init:(u="default",l={})=>(s[u]=l,s)}},Sn=Ig();function ca(e){return Object.prototype.toString.call(e)==="[object Date]"}function Jr(e,t){if(e===t||e!==e)return()=>e;const n=typeof e;if(n!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const s=t.map((r,i)=>Jr(e[i],r));return r=>s.map(i=>i(r))}if(n==="object"){if(!e||!t)throw new Error("Object cannot be null");if(ca(e)&&ca(t)){e=e.getTime(),t=t.getTime();const i=t-e;return o=>new Date(e+o*i)}const s=Object.keys(t),r={};return s.forEach(i=>{r[i]=Jr(e[i],t[i])}),i=>{const o={};return s.forEach(a=>{o[a]=r[a](i)}),o}}if(n==="number"){const s=t-e;return r=>e+r*s}throw new Error(`Cannot interpolate ${n} values`)}function Cg(e,t={}){const n=tl(e);let s,r=e;function i(o,a){if(e==null)return n.set(e=o),Promise.resolve();r=o;let c=s,u=!1,{delay:l=0,duration:h=400,easing:f=de,interpolate:d=Jr}=Le(Le({},t),a);if(h===0)return c&&(c.abort(),c=null),n.set(e=r),Promise.resolve();const p=kn()+l;let m;return s=Dn(v=>{if(v<p)return!0;u||(m=d(e,o),typeof h=="function"&&(h=h(e,o)),u=!0),c&&(c.abort(),c=null);const w=v-p;return w>h?(n.set(e=o),!1):(n.set(e=m(f(w/h))),!0)}),s.promise}return{set:i,update:(o,a)=>i(o(r,e),a),subscribe:n.subscribe}}function Sg(e){let t,n=e[0].msg+"",s;return{c(){t=new dl(!1),s=jt(),t.a=s},m(r,i){t.m(n,r,i),z(r,s,i)},p(r,i){i&1&&n!==(n=r[0].msg+"")&&t.p(n)},i:N,o:N,d(r){r&&B(s),r&&t.d()}}}function kg(e){let t,n,s;const r=[e[2]];var i=e[0].component.src;function o(a){let c={};for(let u=0;u<r.length;u+=1)c=Le(c,r[u]);return{props:c}}return i&&(t=to(i,o())),{c(){t&&Pt(t.$$.fragment),n=jt()},m(a,c){t&&Dt(t,a,c),z(a,n,c),s=!0},p(a,c){const u=c&4?Nl(r,[Rl(a[2])]):{};if(c&1&&i!==(i=a[0].component.src)){if(t){qt();const l=t;q(l.$$.fragment,1,0,()=>{At(l,1)}),zt()}i?(t=to(i,o()),Pt(t.$$.fragment),U(t.$$.fragment,1),Dt(t,n.parentNode,n)):t=null}else i&&t.$set(u)},i(a){s||(t&&U(t.$$.fragment,a),s=!0)},o(a){t&&q(t.$$.fragment,a),s=!1},d(a){a&&B(n),t&&At(t,a)}}}function ua(e){let t,n,s;return{c(){t=V("div"),I(t,"class","_toastBtn pe svelte-l65oht"),I(t,"role","button"),I(t,"tabindex","0")},m(r,i){z(r,t,i),n||(s=[_t(t,"click",e[4]),_t(t,"keydown",e[8])],n=!0)},p:N,d(r){r&&B(t),n=!1,Tt(s)}}}function Dg(e){let t,n,s,r,i,o,a,c,u,l;const h=[kg,Sg],f=[];function d(m,v){return m[0].component?0:1}s=d(e),r=f[s]=h[s](e);let p=e[0].dismissable&&ua(e);return{c(){t=V("div"),n=V("div"),r.c(),i=ct(),p&&p.c(),o=ct(),a=V("progress"),I(n,"role","status"),I(n,"class","_toastMsg svelte-l65oht"),Ce(n,"pe",e[0].component),I(a,"class","_toastBar svelte-l65oht"),a.value=e[1],I(t,"class","_toastItem svelte-l65oht"),Ce(t,"pe",e[0].pausable)},m(m,v){z(m,t,v),P(t,n),f[s].m(n,null),P(t,i),p&&p.m(t,null),P(t,o),P(t,a),c=!0,u||(l=[_t(t,"mouseenter",e[9]),_t(t,"mouseleave",e[6])],u=!0)},p(m,[v]){let w=s;s=d(m),s===w?f[s].p(m,v):(qt(),q(f[w],1,1,()=>{f[w]=null}),zt(),r=f[s],r?r.p(m,v):(r=f[s]=h[s](m),r.c()),U(r,1),r.m(n,null)),(!c||v&1)&&Ce(n,"pe",m[0].component),m[0].dismissable?p?p.p(m,v):(p=ua(m),p.c(),p.m(t,o)):p&&(p.d(1),p=null),(!c||v&2)&&(a.value=m[1]),(!c||v&1)&&Ce(t,"pe",m[0].pausable)},i(m){c||(U(r),c=!0)},o(m){q(r),c=!1},d(m){m&&B(t),f[s].d(),p&&p.d(),u=!1,Tt(l)}}}function Ag(e,t,n){let s,{item:r}=t;const i=Cg(r.initial,{duration:r.duration,easing:de});wa(e,i,b=>n(1,s=b));const o=()=>Sn.pop(r.id),a=()=>{(s===1||s===0)&&o()};let c=r.initial,u=c,l=!1;const h=()=>{!l&&s!==c&&(i.set(s,{duration:0}),l=!0)},f=()=>{if(l){const b=r.duration,x=b-b*((s-u)/(c-u));i.set(c,{duration:x}).then(a),l=!1}};let d={};const p=(b,x="undefined")=>typeof b===x;let m;wl((b=document)=>{if(p(b.hidden))return;const x=()=>b.hidden?h():f(),X="visibilitychange";b.addEventListener(X,x),m=()=>b.removeEventListener(X,x),x()}),El(()=>{p(r.onpop,"function")&&r.onpop(r.id),m&&m()});const w=b=>{b instanceof KeyboardEvent&&["Enter"," "].includes(b.key)&&o()},O=()=>{r.pausable&&h()};return e.$$set=b=>{"item"in b&&n(0,r=b.item)},e.$$.update=()=>{if(e.$$.dirty&1&&(p(r.progress)||n(0,r.next=r.progress,r)),e.$$.dirty&131&&c!==r.next&&(n(7,c=r.next),u=s,l=!1,i.set(c).then(a)),e.$$.dirty&1&&r.component){const{props:b={},sendIdTo:x}=r.component;n(2,d={...b,...x&&{[x]:r.id}})}},[r,s,d,i,o,h,f,c,w,O]}class Ng extends ze{constructor(t){super(),qe(this,t,Ag,Dg,$t,{item:0})}}function la(e,t,n){const s=e.slice();return s[5]=t[n],s}function ha(e,t){let n,s,r,i,o,a,c,u,l=N,h;return s=new Ng({props:{item:t[5]}}),{key:e,first:null,c(){n=V("li"),Pt(s.$$.fragment),r=ct(),I(n,"class",i=Ji(t[5].classes.join(" "))+" svelte-yh90az"),I(n,"style",o=t[1](t[5].theme)),this.first=n},m(f,d){z(f,n,d),Dt(s,n,null),P(n,r),h=!0},p(f,d){t=f;const p={};d&1&&(p.item=t[5]),s.$set(p),(!h||d&1&&i!==(i=Ji(t[5].classes.join(" "))+" svelte-yh90az"))&&I(n,"class",i),(!h||d&1&&o!==(o=t[1](t[5].theme)))&&I(n,"style",o)},r(){u=n.getBoundingClientRect()},f(){vl(n),l(),Na(n,u)},a(){l(),l=yl(n,u,bg,{duration:200})},i(f){h||(U(s.$$.fragment,f),Gt(()=>{!h||(c&&c.end(1),a=Cl(n,_g,t[5].intro),a.start())}),h=!0)},o(f){q(s.$$.fragment,f),a&&a.invalidate(),c=Sl(n,Eg,{}),h=!1},d(f){f&&B(n),At(s),f&&c&&c.end()}}}function Rg(e){let t,n=[],s=new Map,r,i=e[0];const o=a=>a[5].id;for(let a=0;a<i.length;a+=1){let c=la(e,i,a),u=o(c);s.set(u,n[a]=ha(u,c))}return{c(){t=V("ul");for(let a=0;a<n.length;a+=1)n[a].c();I(t,"class","_toastContainer svelte-yh90az")},m(a,c){z(a,t,c);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(t,null);r=!0},p(a,[c]){if(c&3){i=a[0],qt();for(let u=0;u<n.length;u+=1)n[u].r();n=Al(n,c,o,1,a,i,s,t,Dl,ha,null,la);for(let u=0;u<n.length;u+=1)n[u].a();zt()}},i(a){if(!r){for(let c=0;c<i.length;c+=1)U(n[c]);r=!0}},o(a){for(let c=0;c<n.length;c+=1)q(n[c]);r=!1},d(a){a&&B(t);for(let c=0;c<n.length;c+=1)n[c].d()}}}function Og(e,t,n){let s;wa(e,Sn,c=>n(4,s=c));let{options:r={}}=t,{target:i="default"}=t,o;const a=c=>Object.keys(c).reduce((u,l)=>`${u}${l}:${c[l]};`,"");return e.$$set=c=>{"options"in c&&n(2,r=c.options),"target"in c&&n(3,i=c.target)},e.$$.update=()=>{e.$$.dirty&12&&Sn._init(i,r),e.$$.dirty&24&&n(0,o=s.filter(c=>c.target===i))},[o,a,r,i,s]}class Lg extends ze{constructor(t){super(),qe(this,t,Og,Rg,$t,{options:2,target:3})}}const xg="modulepreload",Mg=function(e){return"/"+e},fa={},Ee=function(t,n,s){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Mg(i),i in fa)return;fa[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let l=r.length-1;l>=0;l--){const h=r[l];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":xg,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};function Pg(e){let t,n,s,r={ctx:e,current:null,token:null,hasCatch:!1,pending:qg,then:Ug,catch:Vg,blocks:[,,,]};return is(n=e[6](),r),{c(){t=jt(),r.block.c()},m(i,o){z(i,t,o),r.block.m(i,r.anchor=o),r.mount=()=>t.parentNode,r.anchor=t,s=!0},p(i,o){e=i,r.ctx=e,o&64&&n!==(n=e[6]())&&is(n,r)||Ra(r,e,o)},i(i){s||(U(r.block),s=!0)},o(i){for(let o=0;o<3;o+=1){const a=r.blocks[o];q(a)}s=!1},d(i){i&&B(t),r.block.d(i),r.token=null,r=null}}}function Fg(e){let t,n;const s=e[24].default,r=Ea(s,e,e[23],null);return{c(){t=V("div"),r&&r.c(),I(t,"class","typewriter-container svelte-1gv2i7t")},m(i,o){z(i,t,o),r&&r.m(t,null),n=!0},p(i,o){r&&r.p&&(!n||o&8388608)&&Ta(r,s,i,i[23],n?ba(s,i[23],o,null):Ia(i[23]),null)},i(i){n||(U(r,i),n=!0)},o(i){q(r,i),n=!1},d(i){i&&B(t),r&&r.d(i)}}}function Vg(e){return{c:N,m:N,p:N,i:N,o:N,d:N}}function Ug(e){let t,n,s,r={ctx:e,current:null,token:null,hasCatch:!1,pending:jg,then:$g,catch:Bg,value:25,blocks:[,,,]};return is(n=e[7][e[0]](),r),{c(){t=jt(),r.block.c()},m(i,o){z(i,t,o),r.block.m(i,r.anchor=o),r.mount=()=>t.parentNode,r.anchor=t,s=!0},p(i,o){e=i,r.ctx=e,o&1&&n!==(n=e[7][e[0]]())&&is(n,r)||Ra(r,e,o)},i(i){s||(U(r.block),s=!0)},o(i){for(let o=0;o<3;o+=1){const a=r.blocks[o];q(a)}s=!1},d(i){i&&B(t),r.block.d(i),r.token=null,r=null}}}function Bg(e){return{c:N,m:N,p:N,i:N,o:N,d:N}}function $g(e){let t=e[4],n,s,r=e[4]&&br(e);return{c(){r&&r.c(),n=jt()},m(i,o){r&&r.m(i,o),z(i,n,o),s=!0},p(i,o){i[4]?t?$t(t,i[4])?(r.d(1),r=br(i),t=i[4],r.c(),r.m(n.parentNode,n)):r.p(i,o):(r=br(i),t=i[4],r.c(),r.m(n.parentNode,n)):t&&(r.d(1),r=null,t=i[4])},i(i){s||(U(r),s=!0)},o(i){q(r),s=!1},d(i){i&&B(n),r&&r.d(i)}}}function br(e){let t,n,s,r,i;const o=e[24].default,a=Ea(o,e,e[23],null);return{c(){t=V(e[4]),a&&a.c(),hl(e[4])(t,{class:"typewriter-container svelte-1gv2i7t"}),Ce(t,"cursor",e[1])},m(c,u){z(c,t,u),a&&a.m(t,null),s=!0,r||(i=Ca(n=e[25].default(t,e[5])),r=!0)},p(c,u){a&&a.p&&(!s||u&8388608)&&Ta(a,o,c,c[23],s?ba(o,c[23],u,null):Ia(c[23]),null),n&&Jt(n.update)&&u&32&&n.update.call(null,c[5]),(!s||u&2)&&Ce(t,"cursor",c[1])},i(c){s||(U(a,c),s=!0)},o(c){q(a,c),s=!1},d(c){c&&B(t),a&&a.d(c),r=!1,i()}}}function jg(e){return{c:N,m:N,p:N,i:N,o:N,d:N}}function qg(e){let t,n=e[2]&&da();return{c(){n&&n.c(),t=jt()},m(s,r){n&&n.m(s,r),z(s,t,r)},p(s,r){s[2]?n||(n=da(),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:N,o:N,d(s){n&&n.d(s),s&&B(t)}}}function da(e){let t;return{c(){t=V("div"),t.innerHTML='<p class="typing"></p>',I(t,"class","typewriter-container cursor svelte-1gv2i7t")},m(n,s){z(n,t,s)},d(n){n&&B(t)}}}function pa(e){let t,n,s,r;const i=[Fg,Pg],o=[];function a(c,u){return c[3]?0:1}return t=a(e),n=o[t]=i[t](e),{c(){n.c(),s=jt()},m(c,u){o[t].m(c,u),z(c,s,u),r=!0},p(c,u){let l=t;t=a(c),t===l?o[t].p(c,u):(qt(),q(o[l],1,1,()=>{o[l]=null}),zt(),n=o[t],n?n.p(c,u):(n=o[t]=i[t](c),n.c()),U(n,1),n.m(s.parentNode,s))},i(c){r||(U(n),r=!0)},o(c){q(n),r=!1},d(c){o[t].d(c),c&&B(s)}}}function zg(e){let t,n=e[8],s,r,i=pa(e);return{c(){t=ct(),i.c(),s=jt()},m(o,a){z(o,t,a),i.m(o,a),z(o,s,a),r=!0},p(o,[a]){a&256&&$t(n,n=o[8])?(qt(),q(i,1,1,N),zt(),i=pa(o),i.c(),U(i,1),i.m(s.parentNode,s)):i.p(o,a)},i(o){r||(U(i),r=!0)},o(o){q(i),r=!1},d(o){o&&B(t),o&&B(s),i.d(o)}}}function Hg(e,t,n){let s,r,i,o,a,c,u,l,h,{$$slots:f={},$$scope:d}=t,{mode:p="concurrent"}=t,{interval:m=30}=t,{cursor:v=!0}=t,{keepCursorOnFinish:w=!1}=t,{delay:O=0}=t,{showCursorOnDelay:b=!1}=t,{disabled:x=!1}=t,{element:X="div"}=t,{scrambleDuration:tt=3e3}=t,{scrambleSlowdown:H=!0}=t,{unwriteInterval:D=30}=t,{wordInterval:K=1500}=t;const Ot={concurrent:()=>Ee(()=>import("./concurrent.3348bea2.js"),["assets/concurrent.3348bea2.js","assets/writeEffect.5dee4a31.js","assets/animationSetup.c381b488.js"]),cascade:()=>Ee(()=>import("./cascade.d88fbdb5.js"),["assets/cascade.d88fbdb5.js","assets/writeEffect.5dee4a31.js","assets/animationSetup.c381b488.js"]),loop:()=>Ee(()=>import("./loop.150d1ca5.js"),["assets/loop.150d1ca5.js","assets/writeAndUnwriteText.5947e997.js","assets/writeEffect.5dee4a31.js","assets/animationSetup.c381b488.js","assets/unwriteEffect.4889ed16.js"]),loopOnce:()=>Ee(()=>import("./loopOnce.6f0bb63a.js"),["assets/loopOnce.6f0bb63a.js","assets/animationSetup.c381b488.js","assets/writeEffect.5dee4a31.js","assets/unwriteEffect.4889ed16.js"]),loopRandom:()=>Ee(()=>import("./loopRandom.a2cf798e.js"),["assets/loopRandom.a2cf798e.js","assets/writeAndUnwriteText.5947e997.js","assets/writeEffect.5dee4a31.js","assets/animationSetup.c381b488.js","assets/unwriteEffect.4889ed16.js"]),scramble:()=>Ee(()=>import("./scramble.a9a1ce41.js"),["assets/scramble.a9a1ce41.js","assets/animationSetup.c381b488.js"])};return e.$$set=F=>{n(8,t=Le(Le({},t),Xi(F))),"mode"in F&&n(0,p=F.mode),"interval"in F&&n(9,m=F.interval),"cursor"in F&&n(1,v=F.cursor),"keepCursorOnFinish"in F&&n(10,w=F.keepCursorOnFinish),"delay"in F&&n(11,O=F.delay),"showCursorOnDelay"in F&&n(2,b=F.showCursorOnDelay),"disabled"in F&&n(3,x=F.disabled),"element"in F&&n(4,X=F.element),"scrambleDuration"in F&&n(12,tt=F.scrambleDuration),"scrambleSlowdown"in F&&n(13,H=F.scrambleSlowdown),"unwriteInterval"in F&&n(14,D=F.unwriteInterval),"wordInterval"in F&&n(15,K=F.wordInterval),"$$scope"in F&&n(23,d=F.$$scope)},e.$$.update=()=>{e.$$.dirty&1&&n(21,s=/^loop(Once|Random)?$/.test(p)),e.$$.dirty&1&&n(22,r=["concurrent","cascade","loopOnce"].includes(p)),e.$$.dirty&4195328&&n(20,i=!r&&w),e.$$.dirty&2052&&n(19,o=O<1&&b),n(18,a=!s&&(t.unwriteInterval||t.wordInterval)),n(17,c=p!=="scramble"&&(t.scrambleDuration||t.scrambleSlowdown)),e.$$.dirty&1024&&n(16,u=typeof w=="number"&&w<1),e.$$.dirty&1048576&&i&&console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' is compatible only with finite modes"),e.$$.dirty&524288&&o&&console.warn("[svelte-typewriter] The prop 'showCursorOnDelay' has no effect if the delay is 0"),e.$$.dirty&262144&&a&&console.warn("[svelte-typewriter] The props 'unwriteInterval' and 'wordInterval' are only compatible with loop modes"),e.$$.dirty&131072&&c&&console.warn("[svelte-typewriter] The props 'scrambleDuration' and 'scrambleSlowdown' are only compatible with scramble mode"),e.$$.dirty&65536&&u&&console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' has no effect with values lower than 1"),e.$$.dirty&2048&&n(6,l=()=>new Promise(F=>setTimeout(()=>F(O),O))),e.$$.dirty&65054&&n(5,h={interval:m,cursor:v,keepCursorOnFinish:w,delay:O,showCursorOnDelay:b,disabled:x,element:X,scrambleDuration:tt,scrambleSlowdown:H,unwriteInterval:D,wordInterval:K})},t=Xi(t),[p,v,b,x,X,h,l,Ot,t,m,w,O,tt,H,D,K,u,c,a,o,i,s,r,d,f]}class Wi extends ze{constructor(t){super(),qe(this,t,Hg,zg,$t,{mode:0,interval:9,cursor:1,keepCursorOnFinish:10,delay:11,showCursorOnDelay:2,disabled:3,element:4,scrambleDuration:12,scrambleSlowdown:13,unwriteInterval:14,wordInterval:15})}}function Kg(e){const t=n=>{e&&!e.contains(n.target)&&!n.defaultPrevented&&e.dispatchEvent(new CustomEvent("click_outside",e))};return document.addEventListener("click",t,!0),{destroy(){document.removeEventListener("click",t,!0)}}}function ma(e,t,n){const s=e.slice();return s[6]=t[n],s}function ga(e){let t,n,s,r,i,o,a,c,u,l=e[0],h=[];for(let f=0;f<l.length;f+=1)h[f]=ya(ma(e,l,f));return{c(){t=V("table"),n=V("caption"),n.textContent="Leaderboard",s=ct(),r=V("tr"),r.innerHTML=`<th class="svelte-1bru2ef">Author</th> 
            <th class="svelte-1bru2ef">Quote Count</th>`,i=ct();for(let f=0;f<h.length;f+=1)h[f].c();I(n,"class","svelte-1bru2ef"),I(r,"class","svelte-1bru2ef"),I(t,"class","leaderboard svelte-1bru2ef")},m(f,d){z(f,t,d),P(t,n),P(t,s),P(t,r),P(t,i);for(let p=0;p<h.length;p+=1)h[p]&&h[p].m(t,null);a=!0,c||(u=[Ca(Kg.call(null,t)),_t(t,"click_outside",e[2])],c=!0)},p(f,d){if(e=f,d&1){l=e[0];let p;for(p=0;p<l.length;p+=1){const m=ma(e,l,p);h[p]?h[p].p(m,d):(h[p]=ya(m),h[p].c(),h[p].m(t,null))}for(;p<h.length;p+=1)h[p].d(1);h.length=l.length}},i(f){a||(Gt(()=>{!a||(o||(o=so(t,aa,{duration:250,opacity:.5,easing:oa},!0)),o.run(1))}),a=!0)},o(f){o||(o=so(t,aa,{duration:250,opacity:.5,easing:oa},!1)),o.run(0),a=!1},d(f){f&&B(t),ol(h,f),f&&o&&o.end(),c=!1,Tt(u)}}}function ya(e){let t,n,s=e[6].author+"",r,i,o,a=e[6].count+"",c,u;return{c(){t=V("tr"),n=V("td"),r=ue(s),i=ct(),o=V("td"),c=ue(a),u=ct(),I(n,"class","svelte-1bru2ef"),I(o,"class","svelte-1bru2ef"),I(t,"class","svelte-1bru2ef")},m(l,h){z(l,t,h),P(t,n),P(n,r),P(t,i),P(t,o),P(o,c),P(t,u)},p(l,h){h&1&&s!==(s=l[6].author+"")&&un(r,s),h&1&&a!==(a=l[6].count+"")&&un(c,a)},d(l){l&&B(t)}}}function Gg(e){let t,n,s,r,i,o,a=e[1]&&ga(e);return{c(){t=V("div"),t.innerHTML='<img src="https://cdn-icons-png.flaticon.com/512/4489/4489655.png" alt="Leaderboard button" class="svelte-1bru2ef"/>',n=ct(),a&&a.c(),s=jt(),I(t,"class","icon svelte-1bru2ef")},m(c,u){z(c,t,u),z(c,n,u),a&&a.m(c,u),z(c,s,u),r=!0,i||(o=_t(t,"click",e[2]),i=!0)},p(c,[u]){c[1]?a?(a.p(c,u),u&2&&U(a,1)):(a=ga(c),a.c(),U(a,1),a.m(s.parentNode,s)):a&&(qt(),q(a,1,1,()=>{a=null}),zt())},i(c){r||(U(a),r=!0)},o(c){q(a),r=!1},d(c){c&&B(t),c&&B(n),a&&a.d(c),c&&B(s),i=!1,o()}}}function Qg(e,t,n){let{stringList:s=[]}=t;const r={Matthew:"Cube",Alistair:"Ali","Maximilian Joseph Williamson III":"Max",Grant:"Hendo"};let i,o,a=!1;function c(){n(1,a=!a)}return e.$$set=u=>{"stringList"in u&&n(3,s=u.stringList)},e.$$.update=()=>{e.$$.dirty&8&&n(4,i=s.reduce((u,{author:l})=>((l.includes(" & ")?l.split(" & "):[l]).forEach(f=>{const d=r[f]||f;u[d]=(u[d]||0)+1}),u),{})),e.$$.dirty&16&&n(0,o=Object.entries(i).map(([u,l])=>({author:u,count:l})).sort((u,l)=>l.count-u.count))},[o,a,c,s,i]}class Wg extends ze{constructor(t){super(),qe(this,t,Qg,Gg,$t,{stringList:3})}}function Yg(e){let t,n=e[4].quote+"",s;return{c(){t=V("h1"),s=ue(n),I(t,"class","random-text svelte-1q1xur0")},m(r,i){z(r,t,i),P(t,s)},p(r,i){i&16&&n!==(n=r[4].quote+"")&&un(s,n)},d(r){r&&B(t)}}}function Xg(e){let t,n;return t=new Wi({props:{mode:"concurrent",cursor:!1,$$slots:{default:[Zg]},$$scope:{ctx:e}}}),{c(){Pt(t.$$.fragment)},m(s,r){Dt(t,s,r),n=!0},p(s,r){const i={};r&4112&&(i.$$scope={dirty:r,ctx:s}),t.$set(i)},i(s){n||(U(t.$$.fragment,s),n=!0)},o(s){q(t.$$.fragment,s),n=!1},d(s){At(t,s)}}}function Jg(e){let t,n;return t=new Wi({props:{mode:"concurrent",cursor:!1,$$slots:{default:[ty]},$$scope:{ctx:e}}}),{c(){Pt(t.$$.fragment)},m(s,r){Dt(t,s,r),n=!0},p(s,r){const i={};r&4113&&(i.$$scope={dirty:r,ctx:s}),t.$set(i)},i(s){n||(U(t.$$.fragment,s),n=!0)},o(s){q(t.$$.fragment,s),n=!1},d(s){At(t,s)}}}function Zg(e){let t,n=e[4].author+"",s;return{c(){t=V("h1"),s=ue(n),I(t,"class","random-text svelte-1q1xur0")},m(r,i){z(r,t,i),P(t,s)},p(r,i){i&16&&n!==(n=r[4].author+"")&&un(s,n)},d(r){r&&B(t)}}}function ty(e){let t,n=e[4].author==""?"":"Click to Reveal",s,r,i;return{c(){t=V("h1"),s=ue(n),I(t,"id","spoiler-author"),I(t,"class","random-text svelte-1q1xur0")},m(o,a){z(o,t,a),P(t,s),r||(i=_t(t,"click",e[7]),r=!0)},p(o,a){a&16&&n!==(n=o[4].author==""?"":"Click to Reveal")&&un(s,n)},d(o){o&&B(t),r=!1,i()}}}function ey(e){let t,n,s,r,i,o,a,c,u,l,h,f,d,p,m,v,w,O,b,x;t=new Wg({props:{stringList:e[3]}}),o=new Wi({props:{mode:"concurrent",keepCursorOnFinish:!0,$$slots:{default:[Yg]},$$scope:{ctx:e}}});const X=[Jg,Xg],tt=[];function H(D,K){return D[0]?0:1}return c=H(e),u=tt[c]=X[c](e),{c(){Pt(t.$$.fragment),n=ct(),s=V("div"),r=V("div"),i=V("div"),Pt(o.$$.fragment),a=ct(),u.c(),l=ct(),h=V("button"),h.textContent="Load Random Quote",f=ct(),d=V("input"),p=ct(),m=V("input"),v=ct(),w=V("button"),w.textContent="Add Quote",I(i,"class","typewriter-block svelte-1q1xur0"),I(h,"class","random-button svelte-1q1xur0"),I(d,"id","new-quote-input"),I(d,"type","text"),I(d,"placeholder","Submit a new quote here"),I(d,"class","svelte-1q1xur0"),I(m,"id","new-quote-input-author"),I(m,"type","text"),I(m,"placeholder","Write quote author here. If multiple, separate with &"),I(m,"class","svelte-1q1xur0"),I(w,"class","random-button svelte-1q1xur0"),I(r,"class","heading svelte-1q1xur0"),I(s,"class","quote_container svelte-1q1xur0")},m(D,K){Dt(t,D,K),z(D,n,K),z(D,s,K),P(s,r),P(r,i),Dt(o,i,null),P(i,a),tt[c].m(i,null),P(r,l),P(r,h),P(r,f),P(r,d),Ie(d,e[1]),P(r,p),P(r,m),Ie(m,e[2]),P(r,v),P(r,w),O=!0,b||(x=[_t(h,"click",e[5]),_t(d,"input",e[8]),_t(m,"input",e[9]),_t(w,"click",e[6])],b=!0)},p(D,[K]){const Ot={};K&8&&(Ot.stringList=D[3]),t.$set(Ot);const F={};K&4112&&(F.$$scope={dirty:K,ctx:D}),o.$set(F);let rr=c;c=H(D),c===rr?tt[c].p(D,K):(qt(),q(tt[rr],1,1,()=>{tt[rr]=null}),zt(),u=tt[c],u?u.p(D,K):(u=tt[c]=X[c](D),u.c()),U(u,1),u.m(i,null)),K&2&&d.value!==D[1]&&Ie(d,D[1]),K&4&&m.value!==D[2]&&Ie(m,D[2])},i(D){O||(U(t.$$.fragment,D),U(o.$$.fragment,D),U(u),O=!0)},o(D){q(t.$$.fragment,D),q(o.$$.fragment,D),q(u),O=!1},d(D){At(t,D),D&&B(n),D&&B(s),At(o),tt[c].d(),b=!1,Tt(x)}}}function ny(e,t,n){const s=Qm(wg,"quotes","quote_list");dg(s,p=>{n(3,a=p.data().quote_list)});let r=!0,i="",o="",a=[],c={quote:"",author:""};function u(){n(0,r=!0);let p=c;for(;c==p;)n(4,c=a[Math.floor(Math.random()*a.length)])}async function l(){if(i!=""&&o!=""){let p={quote:i,author:o};Sn.push("Submitting quote..."),await fg(s,{quote_list:gg(p)}).then(()=>{Sn.push("Quote submitted!"),n(1,i=""),n(2,o="")})}}const h=()=>n(0,r=!1);function f(){i=this.value,n(1,i)}function d(){o=this.value,n(2,o)}return[r,i,o,a,c,u,l,h,f,d]}class sy extends ze{constructor(t){super(),qe(this,t,ny,ey,$t,{})}}function ry(e){let t,n,s,r,i,o;return{c(){t=V("div"),n=V("label"),n.textContent="Password:",s=ct(),r=V("input"),I(n,"for","password"),I(n,"class","svelte-1hfjgsa"),I(r,"id","password"),I(r,"type","password"),I(r,"class","svelte-1hfjgsa"),I(t,"id","password-container"),I(t,"class","svelte-1hfjgsa")},m(a,c){z(a,t,c),P(t,n),P(t,s),P(t,r),Ie(r,e[0]),i||(o=_t(r,"input",e[2]),i=!0)},p(a,c){c&1&&r.value!==a[0]&&Ie(r,a[0])},i:N,o:N,d(a){a&&B(t),i=!1,o()}}}function iy(e){let t,n;return t=new sy({}),{c(){Pt(t.$$.fragment)},m(s,r){Dt(t,s,r),n=!0},p:N,i(s){n||(U(t.$$.fragment,s),n=!0)},o(s){q(t.$$.fragment,s),n=!1},d(s){At(t,s)}}}function oy(e){let t,n,s,r,i,o;const a=[iy,ry],c=[];function u(l,h){return h&1&&(t=null),t==null&&(t=l[1](l[0])===1252560117),t?0:1}return n=u(e,-1),s=c[n]=a[n](e),i=new Lg({}),{c(){s.c(),r=ct(),Pt(i.$$.fragment)},m(l,h){c[n].m(l,h),z(l,r,h),Dt(i,l,h),o=!0},p(l,[h]){let f=n;n=u(l,h),n===f?c[n].p(l,h):(qt(),q(c[f],1,1,()=>{c[f]=null}),zt(),s=c[n],s?s.p(l,h):(s=c[n]=a[n](l),s.c()),U(s,1),s.m(r.parentNode,r))},i(l){o||(U(s),U(i.$$.fragment,l),o=!0)},o(l){q(s),q(i.$$.fragment,l),o=!1},d(l){c[n].d(l),l&&B(r),At(i,l)}}}function ay(e,t,n){let s="";const r=o=>o.split("").reduce((a,c)=>(a=(a<<5)-a+c.charCodeAt(0),a&a),0);function i(){s=this.value,n(0,s)}return[s,r,i]}class cy extends ze{constructor(t){super(),qe(this,t,ay,oy,$t,{})}}new cy({target:document.getElementById("app")});export{uy as c};
