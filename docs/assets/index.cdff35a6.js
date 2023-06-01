(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function N(){}const de=e=>e;function Le(e,t){for(const n in t)e[n]=t[n];return e}function ol(e){return!!e&&(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"}function wa(e){return e()}function Ji(){return Object.create(null)}function bt(e){e.forEach(wa)}function Zt(e){return typeof e=="function"}function qt(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function al(e){return Object.keys(e).length===0}function cl(e,...t){if(e==null)return N;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function _a(e,t,n){e.$$.on_destroy.push(cl(t,n))}function Ea(e,t,n,s){if(e){const r=ba(e,t,n,s);return e[0](r)}}function ba(e,t,n,s){return e[1]&&s?Le(n.ctx.slice(),e[1](s(t))):n.ctx}function Ta(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const i=[],o=Math.max(t.dirty.length,r.length);for(let a=0;a<o;a+=1)i[a]=t.dirty[a]|r[a];return i}return t.dirty|r}return t.dirty}function Ia(e,t,n,s,r,i){if(r){const o=ba(t,n,s,i);e.p(o,r)}}function Ca(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let s=0;s<n;s++)t[s]=-1;return t}return-1}function Zi(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function to(e){return e==null?"":e}function Sa(e){return e&&Zt(e.destroy)?e.destroy:N}function eo(e){const t=typeof e=="string"&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const ka=typeof window<"u";let Dn=ka?()=>window.performance.now():()=>Date.now(),ei=ka?e=>requestAnimationFrame(e):N;const De=new Set;function Da(e){De.forEach(t=>{t.c(e)||(De.delete(t),t.f())}),De.size!==0&&ei(Da)}function An(e){let t;return De.size===0&&ei(Da),{promise:new Promise(n=>{De.add(t={c:e,f:n})}),abort(){De.delete(t)}}}function F(e,t){e.appendChild(t)}function Aa(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function ul(e){const t=V("style");return ll(Aa(e),t),t.sheet}function ll(e,t){return F(e.head||e,t),t.sheet}function U(e,t,n){e.insertBefore(t,n||null)}function P(e){e.parentNode&&e.parentNode.removeChild(e)}function hl(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function V(e){return document.createElement(e)}function fl(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function ue(e){return document.createTextNode(e)}function ot(){return ue(" ")}function Ot(){return ue("")}function Et(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function S(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function dl(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const s in t)t[s]==null?e.removeAttribute(s):s==="style"?e.style.cssText=t[s]:s==="__value"?e.value=e[s]=t[s]:n[s]&&n[s].set?e[s]=t[s]:S(e,s,t[s])}function pl(e,t){Object.keys(t).forEach(n=>{ml(e,n,t[n])})}function ml(e,t,n){t in e?e[t]=typeof e[t]=="boolean"&&n===""?!0:n:S(e,t,n)}function gl(e){return/-/.test(e)?pl:dl}function yl(e){return Array.from(e.childNodes)}function un(e,t){t=""+t,e.data!==t&&(e.data=t)}function Ce(e,t){e.value=t==null?"":t}function Se(e,t,n){e.classList[n?"add":"remove"](t)}function Na(e,t,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,s,t),r}class vl{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,s=null){this.e||(this.is_svg?this.e=fl(n.nodeName):this.e=V(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(t)),this.i(s)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)U(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(P)}}function no(e,t){return new e(t)}const rs=new Map;let is=0;function wl(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function _l(e,t){const n={stylesheet:ul(t),rules:{}};return rs.set(e,n),n}function ln(e,t,n,s,r,i,o,a=0){const c=16.666/s;let u=`{
`;for(let v=0;v<=1;v+=c){const w=t+(n-t)*i(v);u+=v*100+`%{${o(w,1-w)}}
`}const l=u+`100% {${o(n,1-n)}}
}`,h=`__svelte_${wl(l)}_${a}`,f=Aa(e),{stylesheet:d,rules:p}=rs.get(f)||_l(f,e);p[h]||(p[h]=!0,d.insertRule(`@keyframes ${h} ${l}`,d.cssRules.length));const m=e.style.animation||"";return e.style.animation=`${m?`${m}, `:""}${h} ${s}ms linear ${r}ms 1 both`,is+=1,h}function hn(e,t){const n=(e.style.animation||"").split(", "),s=n.filter(t?i=>i.indexOf(t)<0:i=>i.indexOf("__svelte")===-1),r=n.length-s.length;r&&(e.style.animation=s.join(", "),is-=r,is||El())}function El(){ei(()=>{is||(rs.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&P(t)}),rs.clear())})}function bl(e,t,n,s){if(!t)return N;const r=e.getBoundingClientRect();if(t.left===r.left&&t.right===r.right&&t.top===r.top&&t.bottom===r.bottom)return N;const{delay:i=0,duration:o=300,easing:a=de,start:c=Dn()+i,end:u=c+o,tick:l=N,css:h}=n(e,{from:t,to:r},s);let f=!0,d=!1,p;function m(){h&&(p=ln(e,0,1,o,i,a,h)),i||(d=!0)}function v(){h&&hn(e,p),f=!1}return An(w=>{if(!d&&w>=c&&(d=!0),d&&w>=u&&(l(1,0),v()),!f)return!1;if(d){const T=w-c,b=0+1*a(T/o);l(b,1-b)}return!0}),m(),l(0,1),v}function Tl(e){const t=getComputedStyle(e);if(t.position!=="absolute"&&t.position!=="fixed"){const{width:n,height:s}=t,r=e.getBoundingClientRect();e.style.position="absolute",e.style.width=n,e.style.height=s,Ra(e,r)}}function Ra(e,t){const n=e.getBoundingClientRect();if(t.left!==n.left||t.top!==n.top){const s=getComputedStyle(e),r=s.transform==="none"?"":s.transform;e.style.transform=`${r} translate(${t.left-n.left}px, ${t.top-n.top}px)`}}let fn;function xt(e){fn=e}function Ss(){if(!fn)throw new Error("Function called outside component initialization");return fn}function Il(e){Ss().$$.on_mount.push(e)}function Cl(e){Ss().$$.on_destroy.push(e)}function hy(){const e=Ss();return(t,n,{cancelable:s=!1}={})=>{const r=e.$$.callbacks[t];if(r){const i=Na(t,n,{cancelable:s});return r.slice().forEach(o=>{o.call(e,i)}),!i.defaultPrevented}return!0}}const be=[],Tr=[];let Ae=[];const so=[],Sl=Promise.resolve();let Ir=!1;function kl(){Ir||(Ir=!0,Sl.then(ni))}function Qt(e){Ae.push(e)}const ir=new Set;let we=0;function ni(){if(we!==0)return;const e=fn;do{try{for(;we<be.length;){const t=be[we];we++,xt(t),Dl(t.$$)}}catch(t){throw be.length=0,we=0,t}for(xt(null),be.length=0,we=0;Tr.length;)Tr.pop()();for(let t=0;t<Ae.length;t+=1){const n=Ae[t];ir.has(n)||(ir.add(n),n())}Ae.length=0}while(be.length);for(;so.length;)so.pop()();Ir=!1,ir.clear(),xt(e)}function Dl(e){if(e.fragment!==null){e.update(),bt(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Qt)}}function Al(e){const t=[],n=[];Ae.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),Ae=t}let Xe;function si(){return Xe||(Xe=Promise.resolve(),Xe.then(()=>{Xe=null})),Xe}function oe(e,t,n){e.dispatchEvent(Na(`${t?"intro":"outro"}${n}`))}const Zn=new Set;let St;function Lt(){St={r:0,c:[],p:St}}function Mt(){St.r||bt(St.c),St=St.p}function x(e,t){e&&e.i&&(Zn.delete(e),e.i(t))}function B(e,t,n,s){if(e&&e.o){if(Zn.has(e))return;Zn.add(e),St.c.push(()=>{Zn.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}const ri={duration:0};function Nl(e,t,n){const s={direction:"in"};let r=t(e,n,s),i=!1,o,a,c=0;function u(){o&&hn(e,o)}function l(){const{delay:f=0,duration:d=300,easing:p=de,tick:m=N,css:v}=r||ri;v&&(o=ln(e,0,1,d,f,p,v,c++)),m(0,1);const w=Dn()+f,T=w+d;a&&a.abort(),i=!0,Qt(()=>oe(e,!0,"start")),a=An(b=>{if(i){if(b>=T)return m(1,0),oe(e,!0,"end"),u(),i=!1;if(b>=w){const L=p((b-w)/d);m(L,1-L)}}return i})}let h=!1;return{start(){h||(h=!0,hn(e),Zt(r)?(r=r(s),si().then(l)):l())},invalidate(){h=!1},end(){i&&(u(),i=!1)}}}function Rl(e,t,n){const s={direction:"out"};let r=t(e,n,s),i=!0,o;const a=St;a.r+=1;function c(){const{delay:u=0,duration:l=300,easing:h=de,tick:f=N,css:d}=r||ri;d&&(o=ln(e,1,0,l,u,h,d));const p=Dn()+u,m=p+l;Qt(()=>oe(e,!1,"start")),An(v=>{if(i){if(v>=m)return f(0,1),oe(e,!1,"end"),--a.r||bt(a.c),!1;if(v>=p){const w=h((v-p)/l);f(1-w,w)}}return i})}return Zt(r)?si().then(()=>{r=r(s),c()}):c(),{end(u){u&&r.tick&&r.tick(1,0),i&&(o&&hn(e,o),i=!1)}}}function ro(e,t,n,s){const r={direction:"both"};let i=t(e,n,r),o=s?0:1,a=null,c=null,u=null;function l(){u&&hn(e,u)}function h(d,p){const m=d.b-o;return p*=Math.abs(m),{a:o,b:d.b,d:m,duration:p,start:d.start,end:d.start+p,group:d.group}}function f(d){const{delay:p=0,duration:m=300,easing:v=de,tick:w=N,css:T}=i||ri,b={start:Dn()+p,b:d};d||(b.group=St,St.r+=1),a||c?c=b:(T&&(l(),u=ln(e,o,d,m,p,v,T)),d&&w(0,1),a=h(b,m),Qt(()=>oe(e,d,"start")),An(L=>{if(c&&L>c.start&&(a=h(c,m),c=null,oe(e,a.b,"start"),T&&(l(),u=ln(e,o,a.b,a.duration,0,v,i.css))),a){if(L>=a.end)w(o=a.b,1-o),oe(e,a.b,"end"),c||(a.b?l():--a.group.r||bt(a.group.c)),a=null;else if(L>=a.start){const st=L-a.start;o=a.a+a.d*v(st/a.duration),w(o,1-o)}}return!!(a||c)}))}return{run(d){Zt(i)?si().then(()=>{i=i(r),f(d)}):f(d)},end(){l(),a=c=null}}}function os(e,t){const n=t.token={};function s(r,i,o,a){if(t.token!==n)return;t.resolved=a;let c=t.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const u=r&&(t.current=r)(c);let l=!1;t.block&&(t.blocks?t.blocks.forEach((h,f)=>{f!==i&&h&&(Lt(),B(h,1,1,()=>{t.blocks[f]===h&&(t.blocks[f]=null)}),Mt())}):t.block.d(1),u.c(),x(u,1),u.m(t.mount(),t.anchor),l=!0),t.block=u,t.blocks&&(t.blocks[i]=u),l&&ni()}if(ol(e)){const r=Ss();if(e.then(i=>{xt(r),s(t.then,1,t.value,i),xt(null)},i=>{if(xt(r),s(t.catch,2,t.error,i),xt(null),!t.hasCatch)throw i}),t.current!==t.pending)return s(t.pending,0),!0}else{if(t.current!==t.then)return s(t.then,1,t.value,e),!0;t.resolved=e}}function Oa(e,t,n){const s=t.slice(),{resolved:r}=e;e.current===e.then&&(s[e.value]=r),e.current===e.catch&&(s[e.error]=r),e.block.p(s,n)}function Ol(e,t){B(e,1,1,()=>{t.delete(e.key)})}function Ll(e,t){e.f(),Ol(e,t)}function Ml(e,t,n,s,r,i,o,a,c,u,l,h){let f=e.length,d=i.length,p=f;const m={};for(;p--;)m[e[p].key]=p;const v=[],w=new Map,T=new Map,b=[];for(p=d;p--;){const H=h(r,i,p),rt=n(H);let yt=o.get(rt);yt?s&&b.push(()=>yt.p(H,t)):(yt=u(rt,H),yt.c()),w.set(rt,v[p]=yt),rt in m&&T.set(rt,Math.abs(p-m[rt]))}const L=new Set,st=new Set;function It(H){x(H,1),H.m(a,l),o.set(H.key,H),l=H.first,d--}for(;f&&d;){const H=v[d-1],rt=e[f-1],yt=H.key,ve=rt.key;H===rt?(l=H.first,f--,d--):w.has(ve)?!o.has(yt)||L.has(yt)?It(H):st.has(ve)?f--:T.get(yt)>T.get(ve)?(st.add(yt),It(H)):(L.add(ve),f--):(c(rt,o),f--)}for(;f--;){const H=e[f];w.has(H.key)||c(H,o)}for(;d;)It(v[d-1]);return bt(b),v}function xl(e,t){const n={},s={},r={$$scope:1};let i=e.length;for(;i--;){const o=e[i],a=t[i];if(a){for(const c in o)c in a||(s[c]=1);for(const c in a)r[c]||(n[c]=a[c],r[c]=1);e[i]=a}else for(const c in o)r[c]=1}for(const o in s)o in n||(n[o]=void 0);return n}function Pl(e){return typeof e=="object"&&e!==null?e:{}}function Vt(e){e&&e.c()}function Dt(e,t,n,s){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),s||Qt(()=>{const o=e.$$.on_mount.map(wa).filter(Zt);e.$$.on_destroy?e.$$.on_destroy.push(...o):bt(o),e.$$.on_mount=[]}),i.forEach(Qt)}function At(e,t){const n=e.$$;n.fragment!==null&&(Al(n.after_update),bt(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Fl(e,t){e.$$.dirty[0]===-1&&(be.push(e),kl(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function qe(e,t,n,s,r,i,o,a=[-1]){const c=fn;xt(e);const u=e.$$={fragment:null,ctx:[],props:i,update:N,not_equal:r,bound:Ji(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Ji(),dirty:a,skip_bound:!1,root:t.target||c.$$.root};o&&o(u.root);let l=!1;if(u.ctx=n?n(e,t.props||{},(h,f,...d)=>{const p=d.length?d[0]:f;return u.ctx&&r(u.ctx[h],u.ctx[h]=p)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](p),l&&Fl(e,h)),f}):[],u.update(),l=!0,bt(u.before_update),u.fragment=s?s(u.ctx):!1,t.target){if(t.hydrate){const h=yl(t.target);u.fragment&&u.fragment.l(h),h.forEach(P)}else u.fragment&&u.fragment.c();t.intro&&x(e.$$.fragment),Dt(e,t.target,t.anchor,t.customElement),ni()}xt(c)}class ze{$destroy(){At(this,1),this.$destroy=N}$on(t,n){if(!Zt(n))return N;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!al(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const La=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Vl=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Ma={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,u=c?e[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,d=u&63;c||(d=64,o||(f=64)),s.push(n[l],n[h],n[f],n[d])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(La(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Vl(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const h=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw new Ul;const f=i<<2|a>>4;if(s.push(f),u!==64){const d=a<<4&240|u>>2;if(s.push(d),h!==64){const p=u<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ul extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bl=function(e){const t=La(e);return Ma.encodeByteArray(t,!0)},as=function(e){return Bl(e).replace(/\./g,"")},$l=function(e){try{return Ma.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function jl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ql=()=>jl().__FIREBASE_DEFAULTS__,zl=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Hl=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&$l(e[1]);return t&&JSON.parse(t)},xa=()=>{try{return ql()||zl()||Hl()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Kl=e=>{var t,n;return(n=(t=xa())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Gl=e=>{const t=Kl(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},Ql=()=>{var e;return(e=xa())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function Yl(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[as(JSON.stringify(n)),as(JSON.stringify(o)),a].join(".")}function Xl(){try{return typeof indexedDB=="object"}catch{return!1}}function Jl(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl="FirebaseError";class He extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Zl,Object.setPrototypeOf(this,He.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pa.prototype.create)}}class Pa{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?th(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new He(r,a,s)}}function th(e,t){return e.replace(eh,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const eh=/\{\$([^}]+)}/g;function Cr(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(io(i)&&io(o)){if(!Cr(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function io(e){return e!==null&&typeof e=="object"}/**
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
 */function Wt(e){return e&&e._delegate?e._delegate:e}class dn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ne="[DEFAULT]";/**
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
 */class nh{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Wl;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(rh(t))try{this.getOrInitializeService({instanceIdentifier:ne})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=ne){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ne){return this.instances.has(t)}getOptions(t=ne){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:sh(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=ne){return this.component?this.component.multipleInstances?t:ne:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sh(e){return e===ne?void 0:e}function rh(e){return e.instantiationMode==="EAGER"}/**
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
 */class ih{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new nh(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})($||($={}));const oh={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},ah=$.INFO,ch={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},uh=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=ch[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Fa{constructor(t){this.name=t,this._logLevel=ah,this._logHandler=uh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?oh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const lh=(e,t)=>t.some(n=>e instanceof n);let oo,ao;function hh(){return oo||(oo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fh(){return ao||(ao=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Va=new WeakMap,Sr=new WeakMap,Ua=new WeakMap,or=new WeakMap,ii=new WeakMap;function dh(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(zt(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Va.set(n,e)}).catch(()=>{}),ii.set(t,e),t}function ph(e){if(Sr.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Sr.set(e,t)}let kr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Sr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ua.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function mh(e){kr=e(kr)}function gh(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(ar(this),t,...n);return Ua.set(s,t.sort?t.sort():[t]),zt(s)}:fh().includes(e)?function(...t){return e.apply(ar(this),t),zt(Va.get(this))}:function(...t){return zt(e.apply(ar(this),t))}}function yh(e){return typeof e=="function"?gh(e):(e instanceof IDBTransaction&&ph(e),lh(e,hh())?new Proxy(e,kr):e)}function zt(e){if(e instanceof IDBRequest)return dh(e);if(or.has(e))return or.get(e);const t=yh(e);return t!==e&&(or.set(e,t),ii.set(t,e)),t}const ar=e=>ii.get(e);function vh(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=zt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(zt(o.result),c.oldVersion,c.newVersion,zt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const wh=["get","getKey","getAll","getAllKeys","count"],_h=["put","add","delete","clear"],cr=new Map;function co(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(cr.get(t))return cr.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=_h.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||wh.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return cr.set(t,i),i}mh(e=>({...e,get:(t,n,s)=>co(t,n)||e.get(t,n,s),has:(t,n)=>!!co(t,n)||e.has(t,n)}));/**
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
 */class Eh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bh(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function bh(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Dr="@firebase/app",uo="0.9.7";/**
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
 */const le=new Fa("@firebase/app"),Th="@firebase/app-compat",Ih="@firebase/analytics-compat",Ch="@firebase/analytics",Sh="@firebase/app-check-compat",kh="@firebase/app-check",Dh="@firebase/auth",Ah="@firebase/auth-compat",Nh="@firebase/database",Rh="@firebase/database-compat",Oh="@firebase/functions",Lh="@firebase/functions-compat",Mh="@firebase/installations",xh="@firebase/installations-compat",Ph="@firebase/messaging",Fh="@firebase/messaging-compat",Vh="@firebase/performance",Uh="@firebase/performance-compat",Bh="@firebase/remote-config",$h="@firebase/remote-config-compat",jh="@firebase/storage",qh="@firebase/storage-compat",zh="@firebase/firestore",Hh="@firebase/firestore-compat",Kh="firebase",Gh="9.19.1";/**
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
 */const Ar="[DEFAULT]",Qh={[Dr]:"fire-core",[Th]:"fire-core-compat",[Ch]:"fire-analytics",[Ih]:"fire-analytics-compat",[kh]:"fire-app-check",[Sh]:"fire-app-check-compat",[Dh]:"fire-auth",[Ah]:"fire-auth-compat",[Nh]:"fire-rtdb",[Rh]:"fire-rtdb-compat",[Oh]:"fire-fn",[Lh]:"fire-fn-compat",[Mh]:"fire-iid",[xh]:"fire-iid-compat",[Ph]:"fire-fcm",[Fh]:"fire-fcm-compat",[Vh]:"fire-perf",[Uh]:"fire-perf-compat",[Bh]:"fire-rc",[$h]:"fire-rc-compat",[jh]:"fire-gcs",[qh]:"fire-gcs-compat",[zh]:"fire-fst",[Hh]:"fire-fst-compat","fire-js":"fire-js",[Kh]:"fire-js-all"};/**
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
 */const cs=new Map,Nr=new Map;function Wh(e,t){try{e.container.addComponent(t)}catch(n){le.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function us(e){const t=e.name;if(Nr.has(t))return le.debug(`There were multiple attempts to register component ${t}.`),!1;Nr.set(t,e);for(const n of cs.values())Wh(n,e);return!0}function Yh(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Xh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ht=new Pa("app","Firebase",Xh);/**
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
 */class Jh{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
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
 */const Zh=Gh;function Ba(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Ar,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw Ht.create("bad-app-name",{appName:String(r)});if(n||(n=Ql()),!n)throw Ht.create("no-options");const i=cs.get(r);if(i){if(Cr(n,i.options)&&Cr(s,i.config))return i;throw Ht.create("duplicate-app",{appName:r})}const o=new ih(r);for(const c of Nr.values())o.addComponent(c);const a=new Jh(n,s,o);return cs.set(r,a),a}function tf(e=Ar){const t=cs.get(e);if(!t&&e===Ar)return Ba();if(!t)throw Ht.create("no-app",{appName:e});return t}function Ne(e,t,n){var s;let r=(s=Qh[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),le.warn(a.join(" "));return}us(new dn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const ef="firebase-heartbeat-database",nf=1,pn="firebase-heartbeat-store";let ur=null;function $a(){return ur||(ur=vh(ef,nf,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(pn)}}}).catch(e=>{throw Ht.create("idb-open",{originalErrorMessage:e.message})})),ur}async function sf(e){try{return(await $a()).transaction(pn).objectStore(pn).get(ja(e))}catch(t){if(t instanceof He)le.warn(t.message);else{const n=Ht.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});le.warn(n.message)}}}async function lo(e,t){try{const s=(await $a()).transaction(pn,"readwrite");return await s.objectStore(pn).put(t,ja(e)),s.done}catch(n){if(n instanceof He)le.warn(n.message);else{const s=Ht.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});le.warn(s.message)}}}function ja(e){return`${e.name}!${e.options.appId}`}/**
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
 */const rf=1024,of=30*24*60*60*1e3;class af{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uf(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ho();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=of}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ho(),{heartbeatsToSend:n,unsentEntries:s}=cf(this._heartbeatsCache.heartbeats),r=as(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ho(){return new Date().toISOString().substring(0,10)}function cf(e,t=rf){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),fo(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),fo(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class uf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xl()?Jl().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await sf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return lo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return lo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function fo(e){return as(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function lf(e){us(new dn("platform-logger",t=>new Eh(t),"PRIVATE")),us(new dn("heartbeat",t=>new af(t),"PRIVATE")),Ne(Dr,uo,e),Ne(Dr,uo,"esm2017"),Ne("fire-js","")}lf("");var hf="firebase",ff="9.19.1";/**
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
 */Ne(hf,ff,"app");var df=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_,oi=oi||{},D=df||self;function ls(){}function ks(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Nn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function pf(e){return Object.prototype.hasOwnProperty.call(e,lr)&&e[lr]||(e[lr]=++mf)}var lr="closure_uid_"+(1e9*Math.random()>>>0),mf=0;function gf(e,t,n){return e.call.apply(e.bind,arguments)}function yf(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function dt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?dt=gf:dt=yf,dt.apply(null,arguments)}function Hn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function ct(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function te(){this.s=this.s,this.o=this.o}var vf=0;te.prototype.s=!1;te.prototype.na=function(){!this.s&&(this.s=!0,this.M(),vf!=0)&&pf(this)};te.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const qa=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function ai(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function po(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ks(s)){const r=e.length||0,i=s.length||0;e.length=r+i;for(let o=0;o<i;o++)e[r+o]=s[o]}else e.push(s)}}function pt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}pt.prototype.h=function(){this.defaultPrevented=!0};var wf=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{D.addEventListener("test",ls,t),D.removeEventListener("test",ls,t)}catch{}return e}();function hs(e){return/^[\s\xa0]*$/.test(e)}var mo=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function hr(e,t){return e<t?-1:e>t?1:0}function Ds(){var e=D.navigator;return e&&(e=e.userAgent)?e:""}function Ct(e){return Ds().indexOf(e)!=-1}function ci(e){return ci[" "](e),e}ci[" "]=ls;function _f(e){var t=Tf;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Ef=Ct("Opera"),Me=Ct("Trident")||Ct("MSIE"),za=Ct("Edge"),Rr=za||Me,Ha=Ct("Gecko")&&!(Ds().toLowerCase().indexOf("webkit")!=-1&&!Ct("Edge"))&&!(Ct("Trident")||Ct("MSIE"))&&!Ct("Edge"),bf=Ds().toLowerCase().indexOf("webkit")!=-1&&!Ct("Edge");function Ka(){var e=D.document;return e?e.documentMode:void 0}var fs;t:{var fr="",dr=function(){var e=Ds();if(Ha)return/rv:([^\);]+)(\)|;)/.exec(e);if(za)return/Edge\/([\d\.]+)/.exec(e);if(Me)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(bf)return/WebKit\/(\S+)/.exec(e);if(Ef)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(dr&&(fr=dr?dr[1]:""),Me){var pr=Ka();if(pr!=null&&pr>parseFloat(fr)){fs=String(pr);break t}}fs=fr}var Tf={};function If(){return _f(function(){let e=0;const t=mo(String(fs)).split("."),n=mo("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=hr(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||hr(r[2].length==0,i[2].length==0)||hr(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var Or;if(D.document&&Me){var go=Ka();Or=go||parseInt(fs,10)||void 0}else Or=void 0;var Cf=Or;function mn(e,t){if(pt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ha){t:{try{ci(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Sf[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&mn.X.h.call(this)}}ct(mn,pt);var Sf={2:"touch",3:"pen",4:"mouse"};mn.prototype.h=function(){mn.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Rn="closure_listenable_"+(1e6*Math.random()|0),kf=0;function Df(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=r,this.key=++kf,this.ba=this.ea=!1}function As(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ui(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Ga(e){const t={};for(const n in e)t[n]=e[n];return t}const yo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qa(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<yo.length;i++)n=yo[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Ns(e){this.src=e,this.g={},this.h=0}Ns.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Mr(e,t,s,r);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new Df(t,this.src,i,!!s,r),t.ea=n,e.push(t)),t};function Lr(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=qa(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(As(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Mr(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ba&&i.listener==t&&i.capture==!!n&&i.ha==s)return r}return-1}var li="closure_lm_"+(1e6*Math.random()|0),mr={};function Wa(e,t,n,s,r){if(s&&s.once)return Xa(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Wa(e,t[i],n,s,r);return null}return n=di(n),e&&e[Rn]?e.N(t,n,Nn(s)?!!s.capture:!!s,r):Ya(e,t,n,!1,s,r)}function Ya(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=Nn(r)?!!r.capture:!!r,a=fi(e);if(a||(e[li]=a=new Ns(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=Af(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)wf||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(Za(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Af(){function e(n){return t.call(e.src,e.listener,n)}const t=Nf;return e}function Xa(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Xa(e,t[i],n,s,r);return null}return n=di(n),e&&e[Rn]?e.O(t,n,Nn(s)?!!s.capture:!!s,r):Ya(e,t,n,!0,s,r)}function Ja(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)Ja(e,t[i],n,s,r);else s=Nn(s)?!!s.capture:!!s,n=di(n),e&&e[Rn]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Mr(i,n,s,r),-1<n&&(As(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=fi(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Mr(t,n,s,r)),(n=-1<e?t[e]:null)&&hi(n))}function hi(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[Rn])Lr(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Za(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=fi(t))?(Lr(n,e),n.h==0&&(n.src=null,t[li]=null)):As(e)}}}function Za(e){return e in mr?mr[e]:mr[e]="on"+e}function Nf(e,t){if(e.ba)e=!0;else{t=new mn(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&hi(e),e=n.call(s,t)}return e}function fi(e){return e=e[li],e instanceof Ns?e:null}var gr="__closure_events_fn_"+(1e9*Math.random()>>>0);function di(e){return typeof e=="function"?e:(e[gr]||(e[gr]=function(t){return e.handleEvent(t)}),e[gr])}function nt(){te.call(this),this.i=new Ns(this),this.P=this,this.I=null}ct(nt,te);nt.prototype[Rn]=!0;nt.prototype.removeEventListener=function(e,t,n,s){Ja(this,e,t,n,s)};function at(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new pt(t,e);else if(t instanceof pt)t.target=t.target||e;else{var r=t;t=new pt(s,e),Qa(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=Kn(o,s,!0,t)&&r}if(o=t.g=e,r=Kn(o,s,!0,t)&&r,r=Kn(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=Kn(o,s,!1,t)&&r}nt.prototype.M=function(){if(nt.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)As(n[s]);delete e.g[t],e.h--}}this.I=null};nt.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};nt.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Kn(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Lr(e.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var pi=D.JSON.stringify;function Rf(){var e=nc;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Of{constructor(){this.h=this.g=null}add(t,n){const s=tc.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var tc=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Lf,e=>e.reset());class Lf{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Mf(e){D.setTimeout(()=>{throw e},0)}function ec(e,t){xr||xf(),Pr||(xr(),Pr=!0),nc.add(e,t)}var xr;function xf(){var e=D.Promise.resolve(void 0);xr=function(){e.then(Pf)}}var Pr=!1,nc=new Of;function Pf(){for(var e;e=Rf();){try{e.h.call(e.g)}catch(n){Mf(n)}var t=tc;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Pr=!1}function Rs(e,t){nt.call(this),this.h=e||1,this.g=t||D,this.j=dt(this.lb,this),this.l=Date.now()}ct(Rs,nt);_=Rs.prototype;_.ca=!1;_.R=null;_.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),at(this,"tick"),this.ca&&(mi(this),this.start()))}};_.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function mi(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}_.M=function(){Rs.X.M.call(this),mi(this),delete this.g};function gi(e,t,n){if(typeof e=="function")n&&(e=dt(e,n));else if(e&&typeof e.handleEvent=="function")e=dt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:D.setTimeout(e,t||0)}function sc(e){e.g=gi(()=>{e.g=null,e.i&&(e.i=!1,sc(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Ff extends te{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:sc(this)}M(){super.M(),this.g&&(D.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gn(e){te.call(this),this.h=e,this.g={}}ct(gn,te);var vo=[];function rc(e,t,n,s){Array.isArray(n)||(n&&(vo[0]=n.toString()),n=vo);for(var r=0;r<n.length;r++){var i=Wa(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function ic(e){ui(e.g,function(t,n){this.g.hasOwnProperty(n)&&hi(t)},e),e.g={}}gn.prototype.M=function(){gn.X.M.call(this),ic(this)};gn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Os(){this.g=!0}Os.prototype.Aa=function(){this.g=!1};function Vf(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function Uf(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function ke(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+$f(e,n)+(s?" "+s:"")})}function Bf(e,t){e.info(function(){return"TIMEOUT: "+t})}Os.prototype.info=function(){};function $f(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return pi(n)}catch{return t}}var pe={},wo=null;function Ls(){return wo=wo||new nt}pe.Pa="serverreachability";function oc(e){pt.call(this,pe.Pa,e)}ct(oc,pt);function yn(e){const t=Ls();at(t,new oc(t))}pe.STAT_EVENT="statevent";function ac(e,t){pt.call(this,pe.STAT_EVENT,e),this.stat=t}ct(ac,pt);function gt(e){const t=Ls();at(t,new ac(t,e))}pe.Qa="timingevent";function cc(e,t){pt.call(this,pe.Qa,e),this.size=t}ct(cc,pt);function On(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return D.setTimeout(function(){e()},t)}var Ms={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},uc={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function yi(){}yi.prototype.h=null;function _o(e){return e.h||(e.h=e.i())}function lc(){}var Ln={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function vi(){pt.call(this,"d")}ct(vi,pt);function wi(){pt.call(this,"c")}ct(wi,pt);var Fr;function xs(){}ct(xs,yi);xs.prototype.g=function(){return new XMLHttpRequest};xs.prototype.i=function(){return{}};Fr=new xs;function Mn(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new gn(this),this.O=jf,e=Rr?125:void 0,this.T=new Rs(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new hc}function hc(){this.i=null,this.g="",this.h=!1}var jf=45e3,Vr={},ds={};_=Mn.prototype;_.setTimeout=function(e){this.O=e};function Ur(e,t,n){e.K=1,e.v=Fs(Ut(t)),e.s=n,e.P=!0,fc(e,null)}function fc(e,t){e.F=Date.now(),xn(e),e.A=Ut(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),_c(n.i,"t",s),e.C=0,n=e.l.H,e.h=new hc,e.g=$c(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Ff(dt(e.La,e,e.g),e.N)),rc(e.S,e.g,"readystatechange",e.ib),t=e.H?Ga(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),yn(),Vf(e.j,e.u,e.A,e.m,e.U,e.s)}_.ib=function(e){e=e.target;const t=this.L;t&&Pt(e)==3?t.l():this.La(e)};_.La=function(e){try{if(e==this.g)t:{const l=Pt(this.g);var t=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Rr||this.g&&(this.h.h||this.g.fa()||Io(this.g)))){this.I||l!=4||t==7||(t==8||0>=h?yn(3):yn(2)),Ps(this);var n=this.g.aa();this.Y=n;e:if(dc(this)){var s=Io(this.g);e="";var r=s.length,i=Pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){se(this),sn(this);var o="";break e}this.h.i=new D.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Uf(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!hs(a)){var u=a;break e}}u=null}if(n=u)ke(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Br(this,n);else{this.i=!1,this.o=3,gt(12),se(this),sn(this);break t}}this.P?(pc(this,l,o),Rr&&this.i&&l==3&&(rc(this.S,this.T,"tick",this.hb),this.T.start())):(ke(this.j,this.m,o,null),Br(this,o)),l==4&&se(this),this.i&&!this.I&&(l==4?Fc(this.l,this):(this.i=!1,xn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,gt(12)):(this.o=0,gt(13)),se(this),sn(this)}}}catch{}finally{}};function dc(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function pc(e,t,n){let s=!0,r;for(;!e.I&&e.C<n.length;)if(r=qf(e,n),r==ds){t==4&&(e.o=4,gt(14),s=!1),ke(e.j,e.m,null,"[Incomplete Response]");break}else if(r==Vr){e.o=4,gt(15),ke(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else ke(e.j,e.m,r,null),Br(e,r);dc(e)&&r!=ds&&r!=Vr&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,gt(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Si(t),t.K=!0,gt(11))):(ke(e.j,e.m,n,"[Invalid Chunked Response]"),se(e),sn(e))}_.hb=function(){if(this.g){var e=Pt(this.g),t=this.g.fa();this.C<t.length&&(Ps(this),pc(this,e,t),this.i&&e!=4&&xn(this))}};function qf(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?ds:(n=Number(t.substring(n,s)),isNaN(n)?Vr:(s+=1,s+n>t.length?ds:(t=t.substr(s,n),e.C=s+n,t)))}_.cancel=function(){this.I=!0,se(this)};function xn(e){e.V=Date.now()+e.O,mc(e,e.O)}function mc(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=On(dt(e.gb,e),t)}function Ps(e){e.B&&(D.clearTimeout(e.B),e.B=null)}_.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Bf(this.j,this.A),this.K!=2&&(yn(),gt(17)),se(this),this.o=2,sn(this)):mc(this,this.V-e)};function sn(e){e.l.G==0||e.I||Fc(e.l,e)}function se(e){Ps(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,mi(e.T),ic(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Br(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||$r(n.h,e))){if(!e.J&&$r(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)gs(n),Bs(n);else break t;Ci(n),gt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=On(dt(n.cb,n),6e3));if(1>=Tc(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else re(n,11)}else if((e.J||n.g==e)&&gs(n),!hs(t))for(r=n.Fa.g.parse(t),t=0;t<r.length;t++){let u=r[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=e.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=s.h;i.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(_i(i,i.h),i.h=null))}if(s.D){const m=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(s.za=m,K(s.F,s.D,m))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=Bc(s,s.H?s.ka:null,s.V),o.J){Ic(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Ps(a),xn(a)),s.g=o}else xc(s);0<n.i.length&&$s(n)}else u[0]!="stop"&&u[0]!="close"||re(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?re(n,7):Ii(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}yn(4)}catch{}}function zf(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(ks(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Hf(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(ks(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function gc(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(ks(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Hf(e),s=zf(e),r=s.length,i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}var yc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kf(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function ae(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof ae){this.h=t!==void 0?t:e.h,ps(this,e.j),this.s=e.s,this.g=e.g,ms(this,e.m),this.l=e.l,t=e.i;var n=new vn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Eo(this,n),this.o=e.o}else e&&(n=String(e).match(yc))?(this.h=!!t,ps(this,n[1]||"",!0),this.s=Ze(n[2]||""),this.g=Ze(n[3]||"",!0),ms(this,n[4]),this.l=Ze(n[5]||"",!0),Eo(this,n[6]||"",!0),this.o=Ze(n[7]||"")):(this.h=!!t,this.i=new vn(null,this.h))}ae.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tn(t,bo,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(tn(t,bo,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(tn(n,n.charAt(0)=="/"?Wf:Qf,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",tn(n,Xf)),e.join("")};function Ut(e){return new ae(e)}function ps(e,t,n){e.j=n?Ze(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ms(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Eo(e,t,n){t instanceof vn?(e.i=t,Jf(e.i,e.h)):(n||(t=tn(t,Yf)),e.i=new vn(t,e.h))}function K(e,t,n){e.i.set(t,n)}function Fs(e){return K(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ze(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tn(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Gf),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Gf(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var bo=/[#\/\?@]/g,Qf=/[#\?:]/g,Wf=/[#\?]/g,Yf=/[#\?@]/g,Xf=/#/g;function vn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ee(e){e.g||(e.g=new Map,e.h=0,e.i&&Kf(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}_=vn.prototype;_.add=function(e,t){ee(this),this.i=null,e=Ke(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function vc(e,t){ee(e),t=Ke(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function wc(e,t){return ee(e),t=Ke(e,t),e.g.has(t)}_.forEach=function(e,t){ee(this),this.g.forEach(function(n,s){n.forEach(function(r){e.call(t,r,s,this)},this)},this)};_.oa=function(){ee(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const r=e[s];for(let i=0;i<r.length;i++)n.push(t[s])}return n};_.W=function(e){ee(this);let t=[];if(typeof e=="string")wc(this,e)&&(t=t.concat(this.g.get(Ke(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};_.set=function(e,t){return ee(this),this.i=null,e=Ke(this,e),wc(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};_.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function _c(e,t,n){vc(e,t),0<n.length&&(e.i=null,e.g.set(Ke(e,t),ai(n)),e.h+=n.length)}_.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),e.push(r)}}return this.i=e.join("&")};function Ke(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Jf(e,t){t&&!e.j&&(ee(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(vc(this,s),_c(this,r,n))},e)),e.j=t}var Zf=class{constructor(e,t){this.h=e,this.g=t}};function Ec(e){this.l=e||td,D.PerformanceNavigationTiming?(e=D.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(D.g&&D.g.Ga&&D.g.Ga()&&D.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var td=10;function bc(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Tc(e){return e.h?1:e.g?e.g.size:0}function $r(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function _i(e,t){e.g?e.g.add(t):e.h=t}function Ic(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Ec.prototype.cancel=function(){if(this.i=Cc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Cc(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return ai(e.i)}function Ei(){}Ei.prototype.stringify=function(e){return D.JSON.stringify(e,void 0)};Ei.prototype.parse=function(e){return D.JSON.parse(e,void 0)};function ed(){this.g=new Ei}function nd(e,t,n){const s=n||"";try{gc(e,function(r,i){let o=r;Nn(r)&&(o=pi(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function sd(e,t){const n=new Os;if(D.Image){const s=new Image;s.onload=Hn(Gn,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Hn(Gn,n,s,"TestLoadImage: error",!1,t),s.onabort=Hn(Gn,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Hn(Gn,n,s,"TestLoadImage: timeout",!1,t),D.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Gn(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function Pn(e){this.l=e.ac||null,this.j=e.jb||!1}ct(Pn,yi);Pn.prototype.g=function(){return new Vs(this.l,this.j)};Pn.prototype.i=function(e){return function(){return e}}({});function Vs(e,t){nt.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=bi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ct(Vs,nt);var bi=0;_=Vs.prototype;_.open=function(e,t){if(this.readyState!=bi)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,wn(this)};_.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||D).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};_.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fn(this)),this.readyState=bi};_.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,wn(this)),this.g&&(this.readyState=3,wn(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof D.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sc(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function Sc(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}_.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Fn(this):wn(this),this.readyState==3&&Sc(this)}};_.Va=function(e){this.g&&(this.response=this.responseText=e,Fn(this))};_.Ua=function(e){this.g&&(this.response=e,Fn(this))};_.ga=function(){this.g&&Fn(this)};function Fn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,wn(e)}_.setRequestHeader=function(e,t){this.v.append(e,t)};_.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};_.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function wn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Vs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var rd=D.JSON.parse;function Q(e){nt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=kc,this.K=this.L=!1}ct(Q,nt);var kc="",id=/^https?$/i,od=["POST","PUT"];_=Q.prototype;_.Ka=function(e){this.L=e};_.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Fr.g(),this.C=this.u?_o(this.u):_o(Fr),this.g.onreadystatechange=dt(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){To(this,i);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=D.FormData&&e instanceof D.FormData,!(0<=qa(od,t))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Nc(this),0<this.B&&((this.K=ad(this.g))?(this.g.timeout=this.B,this.g.ontimeout=dt(this.qa,this)):this.A=gi(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){To(this,i)}};function ad(e){return Me&&If()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}_.qa=function(){typeof oi<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,at(this,"timeout"),this.abort(8))};function To(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Dc(e),Us(e)}function Dc(e){e.D||(e.D=!0,at(e,"complete"),at(e,"error"))}_.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,at(this,"complete"),at(this,"abort"),Us(this))};_.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Us(this,!0)),Q.X.M.call(this)};_.Ha=function(){this.s||(this.F||this.v||this.l?Ac(this):this.fb())};_.fb=function(){Ac(this)};function Ac(e){if(e.h&&typeof oi<"u"&&(!e.C[1]||Pt(e)!=4||e.aa()!=2)){if(e.v&&Pt(e)==4)gi(e.Ha,0,e);else if(at(e,"readystatechange"),Pt(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(yc)[1]||null;if(!r&&D.self&&D.self.location){var i=D.self.location.protocol;r=i.substr(0,i.length-1)}s=!id.test(r?r.toLowerCase():"")}n=s}if(n)at(e,"complete"),at(e,"success");else{e.m=6;try{var o=2<Pt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",Dc(e)}}finally{Us(e)}}}}function Us(e,t){if(e.g){Nc(e);const n=e.g,s=e.C[0]?ls:null;e.g=null,e.C=null,t||at(e,"ready");try{n.onreadystatechange=s}catch{}}}function Nc(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(D.clearTimeout(e.A),e.A=null)}function Pt(e){return e.g?e.g.readyState:0}_.aa=function(){try{return 2<Pt(this)?this.g.status:-1}catch{return-1}};_.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};_.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),rd(t)}};function Io(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case kc:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}_.Ea=function(){return this.m};_.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Rc(e){let t="";return ui(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Ti(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Rc(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):K(e,t,n))}function Je(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Oc(e){this.Ca=0,this.i=[],this.j=new Os,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Je("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Je("baseRetryDelayMs",5e3,e),this.bb=Je("retryDelaySeedMs",1e4,e),this.$a=Je("forwardChannelMaxRetries",2,e),this.ta=Je("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Ec(e&&e.concurrentRequestLimit),this.Fa=new ed,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}_=Oc.prototype;_.ma=8;_.G=1;function Ii(e){if(Lc(e),e.G==3){var t=e.U++,n=Ut(e.F);K(n,"SID",e.I),K(n,"RID",t),K(n,"TYPE","terminate"),Vn(e,n),t=new Mn(e,e.j,t,void 0),t.K=2,t.v=Fs(Ut(n)),n=!1,D.navigator&&D.navigator.sendBeacon&&(n=D.navigator.sendBeacon(t.v.toString(),"")),!n&&D.Image&&(new Image().src=t.v,n=!0),n||(t.g=$c(t.l,null),t.g.da(t.v)),t.F=Date.now(),xn(t)}Uc(e)}function Bs(e){e.g&&(Si(e),e.g.cancel(),e.g=null)}function Lc(e){Bs(e),e.u&&(D.clearTimeout(e.u),e.u=null),gs(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&D.clearTimeout(e.m),e.m=null)}function $s(e){bc(e.h)||e.m||(e.m=!0,ec(e.Ja,e),e.C=0)}function cd(e,t){return Tc(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=On(dt(e.Ja,e,t),Vc(e,e.C)),e.C++,!0)}_.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const r=new Mn(this,this.j,e,void 0);let i=this.s;if(this.S&&(i?(i=Ga(i),Qa(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Mc(this,r,t),n=Ut(this.F),K(n,"RID",e),K(n,"CVER",22),this.D&&K(n,"X-HTTP-Session-Id",this.D),Vn(this,n),i&&(this.N?t="headers="+encodeURIComponent(String(Rc(i)))+"&"+t:this.o&&Ti(n,this.o,i)),_i(this.h,r),this.Ya&&K(n,"TYPE","init"),this.O?(K(n,"$req",t),K(n,"SID","null"),r.Z=!0,Ur(r,n,null)):Ur(r,n,t),this.G=2}}else this.G==3&&(e?Co(this,e):this.i.length==0||bc(this.h)||Co(this))};function Co(e,t){var n;t?n=t.m:n=e.U++;const s=Ut(e.F);K(s,"SID",e.I),K(s,"RID",n),K(s,"AID",e.T),Vn(e,s),e.o&&e.s&&Ti(s,e.o,e.s),n=new Mn(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Mc(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),_i(e.h,n),Ur(n,s,t)}function Vn(e,t){e.ia&&ui(e.ia,function(n,s){K(t,s,n)}),e.l&&gc({},function(n,s){K(t,s,n)})}function Mc(e,t,n){n=Math.min(e.i.length,n);var s=e.l?dt(e.l.Ra,e.l,e):null;t:{var r=e.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{nd(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function xc(e){e.g||e.u||(e.Z=1,ec(e.Ia,e),e.A=0)}function Ci(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=On(dt(e.Ia,e),Vc(e,e.A)),e.A++,!0)}_.Ia=function(){if(this.u=null,Pc(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=On(dt(this.eb,this),e)}};_.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,gt(10),Bs(this),Pc(this))};function Si(e){e.B!=null&&(D.clearTimeout(e.B),e.B=null)}function Pc(e){e.g=new Mn(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=Ut(e.sa);K(t,"RID","rpc"),K(t,"SID",e.I),K(t,"CI",e.L?"0":"1"),K(t,"AID",e.T),K(t,"TYPE","xmlhttp"),Vn(e,t),e.o&&e.s&&Ti(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Fs(Ut(t)),n.s=null,n.P=!0,fc(n,e)}_.cb=function(){this.v!=null&&(this.v=null,Bs(this),Ci(this),gt(19))};function gs(e){e.v!=null&&(D.clearTimeout(e.v),e.v=null)}function Fc(e,t){var n=null;if(e.g==t){gs(e),Si(e),e.g=null;var s=2}else if($r(e.h,t))n=t.D,Ic(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;s=Ls(),at(s,new cc(s,n)),$s(e)}else xc(e);else if(r=t.o,r==3||r==0&&0<e.pa||!(s==1&&cd(e,t)||s==2&&Ci(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:re(e,5);break;case 4:re(e,10);break;case 3:re(e,6);break;default:re(e,2)}}}function Vc(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function re(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=dt(e.kb,e);n||(n=new ae("//www.google.com/images/cleardot.gif"),D.location&&D.location.protocol=="http"||ps(n,"https"),Fs(n)),sd(n.toString(),s)}else gt(2);e.G=0,e.l&&e.l.va(t),Uc(e),Lc(e)}_.kb=function(e){e?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function Uc(e){if(e.G=0,e.la=[],e.l){const t=Cc(e.h);(t.length!=0||e.i.length!=0)&&(po(e.la,t),po(e.la,e.i),e.h.i.length=0,ai(e.i),e.i.length=0),e.l.ua()}}function Bc(e,t,n){var s=n instanceof ae?Ut(n):new ae(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),ms(s,s.m);else{var r=D.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var i=new ae(null,void 0);s&&ps(i,s),t&&(i.g=t),r&&ms(i,r),n&&(i.l=n),s=i}return n=e.D,t=e.za,n&&t&&K(s,n,t),K(s,"VER",e.ma),Vn(e,s),s}function $c(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new Q(new Pn({jb:!0})):new Q(e.ra),t.Ka(e.H),t}function jc(){}_=jc.prototype;_.xa=function(){};_.wa=function(){};_.va=function(){};_.ua=function(){};_.Ra=function(){};function ys(){if(Me&&!(10<=Number(Cf)))throw Error("Environmental error: no available transport.")}ys.prototype.g=function(e,t){return new _t(e,t)};function _t(e,t){nt.call(this),this.g=new Oc(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!hs(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!hs(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ge(this)}ct(_t,nt);_t.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;gt(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Bc(e,null,e.V),$s(e)};_t.prototype.close=function(){Ii(this.g)};_t.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=pi(e),e=n);t.i.push(new Zf(t.ab++,e)),t.G==3&&$s(t)};_t.prototype.M=function(){this.g.l=null,delete this.j,Ii(this.g),delete this.g,_t.X.M.call(this)};function qc(e){vi.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}ct(qc,vi);function zc(){wi.call(this),this.status=1}ct(zc,wi);function Ge(e){this.g=e}ct(Ge,jc);Ge.prototype.xa=function(){at(this.g,"a")};Ge.prototype.wa=function(e){at(this.g,new qc(e))};Ge.prototype.va=function(e){at(this.g,new zc)};Ge.prototype.ua=function(){at(this.g,"b")};ys.prototype.createWebChannel=ys.prototype.g;_t.prototype.send=_t.prototype.u;_t.prototype.open=_t.prototype.m;_t.prototype.close=_t.prototype.close;Ms.NO_ERROR=0;Ms.TIMEOUT=8;Ms.HTTP_ERROR=6;uc.COMPLETE="complete";lc.EventType=Ln;Ln.OPEN="a";Ln.CLOSE="b";Ln.ERROR="c";Ln.MESSAGE="d";nt.prototype.listen=nt.prototype.N;Q.prototype.listenOnce=Q.prototype.O;Q.prototype.getLastError=Q.prototype.Oa;Q.prototype.getLastErrorCode=Q.prototype.Ea;Q.prototype.getStatus=Q.prototype.aa;Q.prototype.getResponseJson=Q.prototype.Sa;Q.prototype.getResponseText=Q.prototype.fa;Q.prototype.send=Q.prototype.da;Q.prototype.setWithCredentials=Q.prototype.Ka;var ud=function(){return new ys},ld=function(){return Ls()},yr=Ms,hd=uc,fd=pe,So={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},dd=Pn,Qn=lc,pd=Q;const ko="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const he=new Fa("@firebase/firestore");function Do(){return he.logLevel}function E(e,...t){if(he.logLevel<=$.DEBUG){const n=t.map(ki);he.debug(`Firestore (${Qe}): ${e}`,...n)}}function Bt(e,...t){if(he.logLevel<=$.ERROR){const n=t.map(ki);he.error(`Firestore (${Qe}): ${e}`,...n)}}function vs(e,...t){if(he.logLevel<=$.WARN){const n=t.map(ki);he.warn(`Firestore (${Qe}): ${e}`,...n)}}function ki(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
 */function k(e="Unexpected state"){const t=`FIRESTORE (${Qe}) INTERNAL ASSERTION FAILED: `+e;throw Bt(t),new Error(t)}function z(e,t){e||k()}function R(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends He{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class md{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class gd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yd{constructor(t){this.t=t,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Kt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Kt,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{E("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(E("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Kt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(E("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(z(typeof s.accessToken=="string"),new Hc(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return z(t===null||typeof t=="string"),new lt(t)}}class vd{constructor(t,n,s){this.h=t,this.l=n,this.m=s,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class wd{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new vd(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _d{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ed{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const s=i=>{i.error!=null&&E("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,E("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{E("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):E("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(z(typeof n.token=="string"),this.T=n.token,new _d(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function bd(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=bd(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function j(e,t){return e<t?-1:e>t?1:0}function xe(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new C(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new C(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new C(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new C(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return J.fromMillis(Date.now())}static fromDate(t){return J.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new J(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t){this.timestamp=t}static fromTimestamp(t){return new A(t)}static min(){return new A(new J(0,0))}static max(){return new A(new J(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(t,n,s){n===void 0?n=0:n>t.length&&k(),s===void 0?s=t.length-n:s>t.length-n&&k(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return _n.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof _n?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class G extends _n{construct(t,n,s){return new G(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new C(g.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new G(n)}static emptyPath(){return new G([])}}const Td=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends _n{construct(t,n,s){return new ft(t,n,s)}static isValidIdentifier(t){return Td.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new C(g.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new C(g.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new C(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new C(g.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ft(n)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t){this.path=t}static fromPath(t){return new I(G.fromString(t))}static fromName(t){return new I(G.fromString(t).popFirst(5))}static empty(){return new I(G.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&G.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return G.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new I(new G(t.slice()))}}function Id(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=A.fromTimestamp(s===1e9?new J(n+1,0):new J(n,s));return new Yt(r,I.empty(),t)}function Cd(e){return new Yt(e.readTime,e.key,-1)}class Yt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Yt(A.min(),I.empty(),-1)}static max(){return new Yt(A.max(),I.empty(),-1)}}function Sd(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=I.comparator(e.documentKey,t.documentKey),n!==0?n:j(e.largestBatchId,t.largestBatchId))}/**
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
 */const kd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Dd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Un(e){if(e.code!==g.FAILED_PRECONDITION||e.message!==kd)throw e;E("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&k(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new y((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof y?n:y.resolve(n)}catch(n){return y.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):y.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):y.reject(n)}static resolve(t){return new y((n,s)=>{n(t)})}static reject(t){return new y((n,s)=>{s(t)})}static waitFor(t){return new y((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(t){let n=y.resolve(!1);for(const s of t)n=n.next(r=>r?y.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new y((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(t[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(t,n){return new y((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function Bn(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Di{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}Di.ct=-1;function js(e){return e==null}function ws(e){return e===0&&1/e==-1/0}function Ad(e){return typeof e=="number"&&Number.isInteger(e)&&!ws(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function me(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Gc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t,n){this.comparator=t,this.root=n||it.EMPTY}insert(t,n){return new tt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(t){return new tt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,it.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Wn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Wn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Wn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Wn(this.root,t,this.comparator,!0)}}class Wn{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class it{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s!=null?s:it.RED,this.left=r!=null?r:it.EMPTY,this.right=i!=null?i:it.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new it(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return it.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw k();const t=this.left.check();if(t!==this.right.check())throw k();return t+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw k()}get value(){throw k()}get color(){throw k()}get left(){throw k()}get right(){throw k()}copy(e,t,n,s,r){return this}insert(e,t,n){return new it(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.comparator=t,this.data=new tt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new No(this.data.getIterator())}getIteratorFrom(t){return new No(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof Z)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Z(this.comparator);return n.data=t,n}}class No{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Tt{constructor(t){this.fields=t,t.sort(ft.comparator)}static empty(){return new Tt([])}unionWith(t){let n=new Z(ft.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new Tt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return xe(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Nd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class mt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Nd("Invalid base64 string: "+r):r}}(t);return new mt(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new mt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const Rd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xt(e){if(z(!!e),typeof e=="string"){let t=0;const n=Rd.exec(e);if(z(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:Y(e.seconds),nanos:Y(e.nanos)}}function Y(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Pe(e){return typeof e=="string"?mt.fromBase64String(e):mt.fromUint8Array(e)}/**
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
 */function Qc(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Wc(e){const t=e.mapValue.fields.__previous_value__;return Qc(t)?Wc(t):t}function En(e){const t=Xt(e.mapValue.fields.__local_write_time__.timestampValue);return new J(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(t,n,s,r,i,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class bn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new bn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof bn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Yn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fe(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Qc(e)?4:Ld(e)?9007199254740991:10:k()}function Nt(e,t){if(e===t)return!0;const n=fe(e);if(n!==fe(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return En(e).isEqual(En(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Xt(s.timestampValue),o=Xt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return Pe(s.bytesValue).isEqual(Pe(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return Y(s.geoPointValue.latitude)===Y(r.geoPointValue.latitude)&&Y(s.geoPointValue.longitude)===Y(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Y(s.integerValue)===Y(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Y(s.doubleValue),o=Y(r.doubleValue);return i===o?ws(i)===ws(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return xe(e.arrayValue.values||[],t.arrayValue.values||[],Nt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Ao(i)!==Ao(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Nt(i[a],o[a])))return!1;return!0}(e,t);default:return k()}}function Tn(e,t){return(e.values||[]).find(n=>Nt(n,t))!==void 0}function Fe(e,t){if(e===t)return 0;const n=fe(e),s=fe(t);if(n!==s)return j(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return j(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=Y(r.integerValue||r.doubleValue),a=Y(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Ro(e.timestampValue,t.timestampValue);case 4:return Ro(En(e),En(t));case 5:return j(e.stringValue,t.stringValue);case 6:return function(r,i){const o=Pe(r),a=Pe(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=j(o[c],a[c]);if(u!==0)return u}return j(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=j(Y(r.latitude),Y(i.latitude));return o!==0?o:j(Y(r.longitude),Y(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Fe(o[c],a[c]);if(u)return u}return j(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===Yn.mapValue&&i===Yn.mapValue)return 0;if(r===Yn.mapValue)return 1;if(i===Yn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=j(a[l],u[l]);if(h!==0)return h;const f=Fe(o[a[l]],c[u[l]]);if(f!==0)return f}return j(a.length,u.length)}(e.mapValue,t.mapValue);default:throw k()}}function Ro(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return j(e,t);const n=Xt(e),s=Xt(t),r=j(n.seconds,s.seconds);return r!==0?r:j(n.nanos,s.nanos)}function Ve(e){return jr(e)}function jr(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=Xt(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Pe(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,I.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=jr(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${jr(s.fields[a])}`;return i+"}"}(e.mapValue):k();var t,n}function qr(e){return!!e&&"integerValue"in e}function Ai(e){return!!e&&"arrayValue"in e}function Oo(e){return!!e&&"nullValue"in e}function Lo(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ts(e){return!!e&&"mapValue"in e}function rn(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return me(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=rn(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=rn(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Ld(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.value=t}static empty(){return new vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!ts(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=rn(n)}setAll(t){let n=ft.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=rn(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());ts(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Nt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];ts(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){me(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new vt(rn(this.value))}}function Yc(e){const t=[];return me(e.fields,(n,s)=>{const r=new ft([n]);if(ts(s)){const i=Yc(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new Tt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t,n,s,r,i,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new ht(t,0,A.min(),A.min(),A.min(),vt.empty(),0)}static newFoundDocument(t,n,s,r){return new ht(t,1,n,A.min(),s,r,0)}static newNoDocument(t,n){return new ht(t,2,n,A.min(),A.min(),vt.empty(),0)}static newUnknownDocument(t,n){return new ht(t,3,n,A.min(),A.min(),vt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(A.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=A.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ht&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class _s{constructor(t,n){this.position=t,this.inclusive=n}}function Mo(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=I.comparator(I.fromName(o.referenceValue),n.key):s=Fe(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function xo(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Nt(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class on{constructor(t,n="asc"){this.field=t,this.dir=n}}function Md(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Xc{}class X extends Xc{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new Pd(t,n,s):n==="array-contains"?new Ud(t,s):n==="in"?new Bd(t,s):n==="not-in"?new $d(t,s):n==="array-contains-any"?new jd(t,s):new X(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new Fd(t,s):new Vd(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Fe(n,this.value)):n!==null&&fe(this.value)===fe(n)&&this.matchesComparison(Fe(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return k()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Rt extends Xc{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new Rt(t,n)}matches(t){return Jc(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Jc(e){return e.op==="and"}function Zc(e){return xd(e)&&Jc(e)}function xd(e){for(const t of e.filters)if(t instanceof Rt)return!1;return!0}function zr(e){if(e instanceof X)return e.field.canonicalString()+e.op.toString()+Ve(e.value);if(Zc(e))return e.filters.map(t=>zr(t)).join(",");{const t=e.filters.map(n=>zr(n)).join(",");return`${e.op}(${t})`}}function tu(e,t){return e instanceof X?function(n,s){return s instanceof X&&n.op===s.op&&n.field.isEqual(s.field)&&Nt(n.value,s.value)}(e,t):e instanceof Rt?function(n,s){return s instanceof Rt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&tu(i,s.filters[o]),!0):!1}(e,t):void k()}function eu(e){return e instanceof X?function(t){return`${t.field.canonicalString()} ${t.op} ${Ve(t.value)}`}(e):e instanceof Rt?function(t){return t.op.toString()+" {"+t.getFilters().map(eu).join(" ,")+"}"}(e):"Filter"}class Pd extends X{constructor(t,n,s){super(t,n,s),this.key=I.fromName(s.referenceValue)}matches(t){const n=I.comparator(t.key,this.key);return this.matchesComparison(n)}}class Fd extends X{constructor(t,n){super(t,"in",n),this.keys=nu("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Vd extends X{constructor(t,n){super(t,"not-in",n),this.keys=nu("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function nu(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>I.fromName(s.referenceValue))}class Ud extends X{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Ai(n)&&Tn(n.arrayValue,this.value)}}class Bd extends X{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Tn(this.value.arrayValue,n)}}class $d extends X{constructor(t,n){super(t,"not-in",n)}matches(t){if(Tn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Tn(this.value.arrayValue,n)}}class jd extends X{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Ai(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Tn(this.value.arrayValue,s))}}/**
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
 */class qd{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Po(e,t=null,n=[],s=[],r=null,i=null,o=null){return new qd(e,t,n,s,r,i,o)}function Ni(e){const t=R(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>zr(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),js(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Ve(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Ve(s)).join(",")),t.ft=n}return t.ft}function Ri(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Md(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!tu(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!xo(e.startAt,t.startAt)&&xo(e.endAt,t.endAt)}function Hr(e){return I.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function zd(e,t,n,s,r,i,o,a){return new qs(e,t,n,s,r,i,o,a)}function zs(e){return new qs(e)}function Fo(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Hd(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Kd(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Gd(e){return e.collectionGroup!==null}function Re(e){const t=R(e);if(t.dt===null){t.dt=[];const n=Kd(t),s=Hd(t);if(n!==null&&s===null)n.isKeyField()||t.dt.push(new on(n)),t.dt.push(new on(ft.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new on(ft.keyField(),i))}}}return t.dt}function $t(e){const t=R(e);if(!t.wt)if(t.limitType==="F")t.wt=Po(t.path,t.collectionGroup,Re(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of Re(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new on(i.field,o))}const s=t.endAt?new _s(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new _s(t.startAt.position,t.startAt.inclusive):null;t.wt=Po(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t.wt}function Kr(e,t,n){return new qs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Hs(e,t){return Ri($t(e),$t(t))&&e.limitType===t.limitType}function su(e){return`${Ni($t(e))}|lt:${e.limitType}`}function Gr(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>eu(s)).join(", ")}]`),js(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Ve(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Ve(s)).join(",")),`Target(${n})`}($t(e))}; limitType=${e.limitType})`}function Ks(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):I.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of Re(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Mo(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Re(n),s)||n.endAt&&!function(r,i,o){const a=Mo(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Re(n),s))}(e,t)}function Qd(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ru(e){return(t,n)=>{let s=!1;for(const r of Re(e)){const i=Wd(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Wd(e,t,n){const s=e.field.isKeyField()?I.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Fe(a,c):k()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return k()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){me(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return Gc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd=new tt(I.comparator);function jt(){return Yd}const iu=new tt(I.comparator);function en(...e){let t=iu;for(const n of e)t=t.insert(n.key,n);return t}function ou(e){let t=iu;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function ie(){return an()}function au(){return an()}function an(){return new We(e=>e.toString(),(e,t)=>e.isEqual(t))}const Xd=new tt(I.comparator),Jd=new Z(I.comparator);function O(...e){let t=Jd;for(const n of e)t=t.add(n);return t}const Zd=new Z(j);function cu(){return Zd}/**
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
 */function uu(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ws(t)?"-0":t}}function lu(e){return{integerValue:""+e}}function tp(e,t){return Ad(t)?lu(t):uu(e,t)}/**
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
 */class Gs{constructor(){this._=void 0}}function ep(e,t,n){return e instanceof Es?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof Ue?fu(e,t):e instanceof In?du(e,t):function(s,r){const i=hu(s,r),o=Vo(i)+Vo(s._t);return qr(i)&&qr(s._t)?lu(o):uu(s.serializer,o)}(e,t)}function np(e,t,n){return e instanceof Ue?fu(e,t):e instanceof In?du(e,t):n}function hu(e,t){return e instanceof bs?qr(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class Es extends Gs{}class Ue extends Gs{constructor(t){super(),this.elements=t}}function fu(e,t){const n=pu(t);for(const s of e.elements)n.some(r=>Nt(r,s))||n.push(s);return{arrayValue:{values:n}}}class In extends Gs{constructor(t){super(),this.elements=t}}function du(e,t){let n=pu(t);for(const s of e.elements)n=n.filter(r=>!Nt(r,s));return{arrayValue:{values:n}}}class bs extends Gs{constructor(t,n){super(),this.serializer=t,this._t=n}}function Vo(e){return Y(e.integerValue||e.doubleValue)}function pu(e){return Ai(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(t,n){this.field=t,this.transform=n}}function rp(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Ue&&s instanceof Ue||n instanceof In&&s instanceof In?xe(n.elements,s.elements,Nt):n instanceof bs&&s instanceof bs?Nt(n._t,s._t):n instanceof Es&&s instanceof Es}(e.transform,t.transform)}class ip{constructor(t,n){this.version=t,this.transformResults=n}}class Ft{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ft}static exists(t){return new Ft(void 0,t)}static updateTime(t){return new Ft(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function es(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Qs{}function mu(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new yu(e.key,Ft.none()):new Ws(e.key,e.data,Ft.none());{const n=e.data,s=vt.empty();let r=new Z(ft.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ge(e.key,s,new Tt(r.toArray()),Ft.none())}}function op(e,t,n){e instanceof Ws?function(s,r,i){const o=s.value.clone(),a=Bo(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof ge?function(s,r,i){if(!es(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Bo(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(gu(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function cn(e,t,n,s){return e instanceof Ws?function(r,i,o,a){if(!es(r.precondition,i))return o;const c=r.value.clone(),u=$o(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof ge?function(r,i,o,a){if(!es(r.precondition,i))return o;const c=$o(r.fieldTransforms,a,i),u=i.data;return u.setAll(gu(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(e,t,n,s):function(r,i,o){return es(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function ap(e,t){let n=null;for(const s of e.fieldTransforms){const r=t.data.field(s.field),i=hu(s.transform,r||null);i!=null&&(n===null&&(n=vt.empty()),n.set(s.field,i))}return n||null}function Uo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&xe(n,s,(r,i)=>rp(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Ws extends Qs{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ge extends Qs{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gu(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Bo(e,t,n){const s=new Map;z(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,np(o,a,n[r]))}return s}function $o(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,ep(i,o,t))}return s}class yu extends Qs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cp extends Qs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&op(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=cn(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=cn(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=au();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=mu(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(A.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),O())}isEqual(t){return this.batchId===t.batchId&&xe(this.mutations,t.mutations,(n,s)=>Uo(n,s))&&xe(this.baseMutations,t.baseMutations,(n,s)=>Uo(n,s))}}class Oi{constructor(t,n,s,r){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(t,n,s){z(t.mutations.length===s.length);let r=Xd;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Oi(t,n,s,r)}}/**
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
 */class lp{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class hp{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W,M;function fp(e){switch(e){default:return k();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function vu(e){if(e===void 0)return Bt("GRPC error has no .code"),g.UNKNOWN;switch(e){case W.OK:return g.OK;case W.CANCELLED:return g.CANCELLED;case W.UNKNOWN:return g.UNKNOWN;case W.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case W.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case W.INTERNAL:return g.INTERNAL;case W.UNAVAILABLE:return g.UNAVAILABLE;case W.UNAUTHENTICATED:return g.UNAUTHENTICATED;case W.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case W.NOT_FOUND:return g.NOT_FOUND;case W.ALREADY_EXISTS:return g.ALREADY_EXISTS;case W.PERMISSION_DENIED:return g.PERMISSION_DENIED;case W.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case W.ABORTED:return g.ABORTED;case W.OUT_OF_RANGE:return g.OUT_OF_RANGE;case W.UNIMPLEMENTED:return g.UNIMPLEMENTED;case W.DATA_LOSS:return g.DATA_LOSS;default:return k()}}(M=W||(W={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Li{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Xn}static getOrCreateInstance(){return Xn===null&&(Xn=new Li),Xn}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let Xn=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const r=new Map;return r.set(t,$n.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Ys(A.min(),r,cu(),jt(),O())}}class $n{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new $n(s,n,O(),O(),O())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(t,n,s,r){this.It=t,this.removedTargetIds=n,this.key=s,this.Tt=r}}class wu{constructor(t,n){this.targetId=t,this.Et=n}}class _u{constructor(t,n,s=mt.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class jo{constructor(){this.At=0,this.Rt=zo(),this.vt=mt.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(t){t.approximateByteSize()>0&&(this.Pt=!0,this.vt=t)}Ct(){let t=O(),n=O(),s=O();return this.Rt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:k()}}),new $n(this.vt,this.bt,t,n,s)}xt(){this.Pt=!1,this.Rt=zo()}Nt(t,n){this.Pt=!0,this.Rt=this.Rt.insert(t,n)}kt(t){this.Pt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class dp{constructor(t){this.Ft=t,this.Bt=new Map,this.Lt=jt(),this.qt=qo(),this.Ut=new Z(j)}Kt(t){for(const n of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(n,t.Tt):this.Qt(n,t.key,t.Tt);for(const n of t.removedTargetIds)this.Qt(n,t.key,t.Tt)}zt(t){this.forEachTarget(t,n=>{const s=this.jt(n);switch(t.state){case 0:this.Wt(n)&&s.Dt(t.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(t.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(t.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(t.resumeToken));break;default:k()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.Wt(r)&&n(r)})}Jt(t){var n;const s=t.targetId,r=t.Et.count,i=this.Yt(s);if(i){const o=i.target;if(Hr(o))if(r===0){const a=new I(o.path);this.Qt(s,a,ht.newNoDocument(a,A.min()))}else z(r===1);else{const a=this.Zt(s);a!==r&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=Li.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:t.Et.count}))}}}Xt(t){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Hr(a.target)){const c=new I(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,ht.newNoDocument(c,t))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=O();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(t));const r=new Ys(t,n,this.Ut,this.Lt,s);return this.Lt=jt(),this.qt=qo(),this.Ut=new Z(j),r}Gt(t,n){if(!this.Wt(t))return;const s=this.te(t,n.key)?2:0;this.jt(t).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(t))}Qt(t,n,s){if(!this.Wt(t))return;const r=this.jt(t);this.te(t,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(t)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(t){this.Bt.delete(t)}Zt(t){const n=this.jt(t).Ct();return this.Ft.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ot(t){this.jt(t).Ot()}jt(t){let n=this.Bt.get(t);return n||(n=new jo,this.Bt.set(t,n)),n}ee(t){let n=this.qt.get(t);return n||(n=new Z(j),this.qt=this.qt.insert(t,n)),n}Wt(t){const n=this.Yt(t)!==null;return n||E("WatchChangeAggregator","Detected inactive target",t),n}Yt(t){const n=this.Bt.get(t);return n&&n.Vt?null:this.Ft.ne(t)}Ht(t){this.Bt.set(t,new jo),this.Ft.getRemoteKeysForTarget(t).forEach(n=>{this.Qt(t,n,null)})}te(t,n){return this.Ft.getRemoteKeysForTarget(t).has(n)}}function qo(){return new tt(I.comparator)}function zo(){return new tt(I.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),mp=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),gp=(()=>({and:"AND",or:"OR"}))();class yp{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Ts(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Eu(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function vp(e,t){return Ts(e,t.toTimestamp())}function kt(e){return z(!!e),A.fromTimestamp(function(t){const n=Xt(t);return new J(n.seconds,n.nanos)}(e))}function Mi(e,t){return function(n){return new G(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function bu(e){const t=G.fromString(e);return z(Su(t)),t}function Qr(e,t){return Mi(e.databaseId,t.path)}function vr(e,t){const n=bu(t);if(n.get(1)!==e.databaseId.projectId)throw new C(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new C(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new I(Tu(n))}function Wr(e,t){return Mi(e.databaseId,t)}function wp(e){const t=bu(e);return t.length===4?G.emptyPath():Tu(t)}function Yr(e){return new G(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Tu(e){return z(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Ho(e,t,n){return{name:Qr(e,t),fields:n.value.mapValue.fields}}function _p(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:k()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(z(u===void 0||typeof u=="string"),mt.fromBase64String(u||"")):(z(u===void 0||u instanceof Uint8Array),mt.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?g.UNKNOWN:vu(c.code);return new C(u,c.message||"")}(o);n=new _u(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=vr(e,s.document.name),i=kt(s.document.updateTime),o=s.document.createTime?kt(s.document.createTime):A.min(),a=new vt({mapValue:{fields:s.document.fields}}),c=ht.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new ns(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=vr(e,s.document),i=s.readTime?kt(s.readTime):A.min(),o=ht.newNoDocument(r,i),a=s.removedTargetIds||[];n=new ns([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=vr(e,s.document),i=s.removedTargetIds||[];n=new ns([],i,r,null)}else{if(!("filter"in t))return k();{t.filter;const s=t.filter;s.targetId;const r=s.count||0,i=new hp(r),o=s.targetId;n=new wu(o,i)}}return n}function Ep(e,t){let n;if(t instanceof Ws)n={update:Ho(e,t.key,t.value)};else if(t instanceof yu)n={delete:Qr(e,t.key)};else if(t instanceof ge)n={update:Ho(e,t.key,t.data),updateMask:Np(t.fieldMask)};else{if(!(t instanceof cp))return k();n={verify:Qr(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Es)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ue)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof In)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof bs)return{fieldPath:i.field.canonicalString(),increment:o._t};throw k()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:vp(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:k()}(e,t.precondition)),n}function bp(e,t){return e&&e.length>0?(z(t!==void 0),e.map(n=>function(s,r){let i=s.updateTime?kt(s.updateTime):kt(r);return i.isEqual(A.min())&&(i=kt(r)),new ip(i,s.transformResults||[])}(n,t))):[]}function Tp(e,t){return{documents:[Wr(e,t.path)]}}function Ip(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Wr(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Wr(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Cu(Rt.create(c,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Te(l.field),direction:kp(l.dir)}}(u))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.useProto3Json||js(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function Cp(e){let t=wp(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){z(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:t=t.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=Iu(l);return h instanceof Rt&&Zc(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new on(Ie(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,js(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new _s(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new _s(f,h)}(n.endAt)),zd(t,r,o,i,a,"F",c,u)}function Sp(e,t){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return k()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Iu(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Ie(t.unaryFilter.field);return X.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ie(t.unaryFilter.field);return X.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ie(t.unaryFilter.field);return X.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ie(t.unaryFilter.field);return X.create(i,"!=",{nullValue:"NULL_VALUE"});default:return k()}}(e):e.fieldFilter!==void 0?function(t){return X.create(Ie(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return k()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return Rt.create(t.compositeFilter.filters.map(n=>Iu(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return k()}}(t.compositeFilter.op))}(e):k()}function kp(e){return pp[e]}function Dp(e){return mp[e]}function Ap(e){return gp[e]}function Te(e){return{fieldPath:e.canonicalString()}}function Ie(e){return ft.fromServerFormat(e.fieldPath)}function Cu(e){return e instanceof X?function(t){if(t.op==="=="){if(Lo(t.value))return{unaryFilter:{field:Te(t.field),op:"IS_NAN"}};if(Oo(t.value))return{unaryFilter:{field:Te(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Lo(t.value))return{unaryFilter:{field:Te(t.field),op:"IS_NOT_NAN"}};if(Oo(t.value))return{unaryFilter:{field:Te(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Te(t.field),op:Dp(t.op),value:t.value}}}(e):e instanceof Rt?function(t){const n=t.getFilters().map(s=>Cu(s));return n.length===1?n[0]:{compositeFilter:{op:Ap(t.op),filters:n}}}(e):k()}function Np(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Su(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(t,n,s,r,i=A.min(),o=A.min(),a=mt.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new ce(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new ce(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new ce(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(t){this.se=t}}function Op(e){const t=Cp({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Kr(t,t.limit,"L"):t}/**
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
 */class Lp{constructor(){this.He=new Mp}addToCollectionParentIndex(t,n){return this.He.add(n),y.resolve()}getCollectionParents(t,n){return y.resolve(this.He.getEntries(n))}addFieldIndex(t,n){return y.resolve()}deleteFieldIndex(t,n){return y.resolve()}getDocumentsMatchingTarget(t,n){return y.resolve(null)}getIndexType(t,n){return y.resolve(0)}getFieldIndexes(t,n){return y.resolve([])}getNextCollectionGroupToUpdate(t){return y.resolve(null)}getMinOffset(t,n){return y.resolve(Yt.min())}getMinOffsetFromCollectionGroup(t,n){return y.resolve(Yt.min())}updateCollectionGroup(t,n,s){return y.resolve()}updateIndexEntries(t,n){return y.resolve()}}class Mp{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new Z(G.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new Z(G.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xp{constructor(){this.changes=new We(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ht.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?y.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Pp{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(s!==null&&cn(s.mutation,r,Tt.empty(),J.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,O()).next(()=>s))}getLocalViewOfDocuments(t,n,s=O()){const r=ie();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=en();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=ie();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,O()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=jt();const o=an(),a=an();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof ge)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),cn(l.mutation,u,l.mutation.getFieldMask(),J.now())):o.set(u.key,Tt.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new Pp(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const s=an();let r=new tt((o,a)=>o-a),i=O();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||Tt.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||O()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=au();l.forEach(f=>{if(!i.has(f)){const d=mu(n.get(f),s.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return y.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return I.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Gd(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):y.resolve(ie());let a=-1,c=i;return o.next(u=>y.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?y.resolve():this.remoteDocumentCache.getEntry(t,l).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,c,u,O())).next(l=>({batchId:a,changes:ou(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new I(n)).next(s=>{let r=en();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=en();return this.indexManager.getCollectionParents(t,r).next(o=>y.forEach(o,a=>{const c=function(u,l){return new qs(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,ht.newInvalidDocument(u)))});let o=en();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&cn(u.mutation,c,Tt.empty(),J.now()),Ks(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class Vp{constructor(t){this.serializer=t,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(t,n){return y.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:kt(s.createTime)}),y.resolve()}getNamedQuery(t,n){return y.resolve(this.Xn.get(n))}saveNamedQuery(t,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:Op(s.bundledQuery),readTime:kt(s.readTime)}}(n)),y.resolve()}}/**
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
 */class Up{constructor(){this.overlays=new tt(I.comparator),this.ts=new Map}getOverlay(t,n){return y.resolve(this.overlays.get(n))}getOverlays(t,n){const s=ie();return y.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.re(t,n,i)}),y.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.ts.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ts.delete(s)),y.resolve()}getOverlaysForCollection(t,n,s){const r=ie(),i=n.length+1,o=new I(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return y.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new tt((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=ie(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=ie(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return y.resolve(a)}re(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ts.get(r.largestBatchId).delete(s.key);this.ts.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new lp(n,s));let i=this.ts.get(n);i===void 0&&(i=O(),this.ts.set(n,i)),this.ts.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(){this.es=new Z(et.ns),this.ss=new Z(et.rs)}isEmpty(){return this.es.isEmpty()}addReference(t,n){const s=new et(t,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.us(new et(t,n))}cs(t,n){t.forEach(s=>this.removeReference(s,n))}hs(t){const n=new I(new G([])),s=new et(n,t),r=new et(n,t+1),i=[];return this.ss.forEachInRange([s,r],o=>{this.us(o),i.push(o.key)}),i}ls(){this.es.forEach(t=>this.us(t))}us(t){this.es=this.es.delete(t),this.ss=this.ss.delete(t)}fs(t){const n=new I(new G([])),s=new et(n,t),r=new et(n,t+1);let i=O();return this.ss.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new et(t,0),s=this.es.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class et{constructor(t,n){this.key=t,this.ds=n}static ns(t,n){return I.comparator(t.key,n.key)||j(t.ds,n.ds)}static rs(t,n){return j(t.ds,n.ds)||I.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Z(et.ns)}checkEmpty(t){return y.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new up(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this._s=this._s.add(new et(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return y.resolve(o)}lookupMutationBatch(t,n){return y.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.ys(s),i=r<0?0:r;return y.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return y.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new et(n,0),r=new et(n,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([s,r],o=>{const a=this.gs(o.ds);i.push(a)}),y.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Z(j);return n.forEach(r=>{const i=new et(r,0),o=new et(r,Number.POSITIVE_INFINITY);this._s.forEachInRange([i,o],a=>{s=s.add(a.ds)})}),y.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;I.isDocumentKey(i)||(i=i.child(""));const o=new et(new I(i),0);let a=new Z(j);return this._s.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.ds)),!0)},o),y.resolve(this.ps(a))}ps(t){const n=[];return t.forEach(s=>{const r=this.gs(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){z(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return y.forEach(n.mutations,r=>{const i=new et(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this._s=s})}En(t){}containsKey(t,n){const s=new et(n,0),r=this._s.firstAfterOrEqual(s);return y.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,y.resolve()}Is(t,n){return this.ys(t)}ys(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}gs(t){const n=this.ys(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(t){this.Ts=t,this.docs=new tt(I.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return y.resolve(s?s.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(t,n){let s=jt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ht.newInvalidDocument(r))}),y.resolve(s)}getDocumentsMatchingQuery(t,n,s,r){let i=jt();const o=n.path,a=new I(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Sd(Cd(l),s)<=0||(r.has(l.key)||Ks(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return y.resolve(i)}getAllFromCollectionGroup(t,n,s,r){k()}Es(t,n){return y.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new jp(this)}getSize(t){return y.resolve(this.size)}}class jp extends xp{constructor(t){super(),this.Jn=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Jn.addEntry(t,r)):this.Jn.removeEntry(s)}),y.waitFor(n)}getFromCache(t,n){return this.Jn.getEntry(t,n)}getAllFromCache(t,n){return this.Jn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(t){this.persistence=t,this.As=new We(n=>Ni(n),Ri),this.lastRemoteSnapshotVersion=A.min(),this.highestTargetId=0,this.Rs=0,this.vs=new xi,this.targetCount=0,this.bs=Be.vn()}forEachTarget(t,n){return this.As.forEach((s,r)=>n(r)),y.resolve()}getLastRemoteSnapshotVersion(t){return y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return y.resolve(this.Rs)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),y.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),y.resolve()}Sn(t){this.As.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.bs=new Be(n),this.highestTargetId=n),t.sequenceNumber>this.Rs&&(this.Rs=t.sequenceNumber)}addTargetData(t,n){return this.Sn(n),this.targetCount+=1,y.resolve()}updateTargetData(t,n){return this.Sn(n),y.resolve()}removeTargetData(t,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,y.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),y.waitFor(i).next(()=>r)}getTargetCount(t){return y.resolve(this.targetCount)}getTargetData(t,n){const s=this.As.get(n)||null;return y.resolve(s)}addMatchingKeys(t,n,s){return this.vs.os(n,s),y.resolve()}removeMatchingKeys(t,n,s){this.vs.cs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),y.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.vs.hs(n),y.resolve()}getMatchingKeysForTargetId(t,n){const s=this.vs.fs(n);return y.resolve(s)}containsKey(t,n){return y.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(t,n){this.Ps={},this.overlays={},this.Vs=new Di(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=t(this),this.Ds=new qp(this),this.indexManager=new Lp,this.remoteDocumentCache=function(s){return new $p(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new Rp(n),this.xs=new Vp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Up,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Ps[t.toKey()];return s||(s=new Bp(n,this.referenceDelegate),this.Ps[t.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(t,n,s){E("MemoryPersistence","Starting transaction:",t);const r=new Hp(this.Vs.next());return this.referenceDelegate.Ns(),s(r).next(i=>this.referenceDelegate.ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(t,n){return y.or(Object.values(this.Ps).map(s=>()=>s.containsKey(t,n)))}}class Hp extends Dd{constructor(t){super(),this.currentSequenceNumber=t}}class Pi{constructor(t){this.persistence=t,this.$s=new xi,this.Ms=null}static Fs(t){return new Pi(t)}get Bs(){if(this.Ms)return this.Ms;throw k()}addReference(t,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),y.resolve()}removeReference(t,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),y.resolve()}markPotentiallyOrphaned(t,n){return this.Bs.add(n.toString()),y.resolve()}removeTarget(t,n){this.$s.hs(n.targetId).forEach(r=>this.Bs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Bs.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}Ns(){this.Ms=new Set}ks(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return y.forEach(this.Bs,s=>{const r=I.fromPath(s);return this.Ls(t,r).next(i=>{i||n.removeEntry(r,A.min())})}).next(()=>(this.Ms=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ls(t,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(t){return 0}Ls(t,n){return y.or([()=>y.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Os(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Vi=s,this.Si=r}static Di(t,n){let s=O(),r=O();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Fi(t,n.fromCache,s,r)}}/**
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
 */class Kp{constructor(){this.Ci=!1}initialize(t,n){this.xi=t,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(t,n,s,r){return this.Ni(t,n).next(i=>i||this.ki(t,n,r,s)).next(i=>i||this.Oi(t,n))}Ni(t,n){if(Fo(n))return y.resolve(null);let s=$t(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Kr(n,null,"F"),s=$t(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=O(...i);return this.xi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const u=this.$i(n,a);return this.Mi(n,u,o,c.readTime)?this.Ni(t,Kr(n,null,"F")):this.Fi(t,u,n,c)}))})))}ki(t,n,s,r){return Fo(n)||r.isEqual(A.min())?this.Oi(t,n):this.xi.getDocuments(t,s).next(i=>{const o=this.$i(n,i);return this.Mi(n,o,s,r)?this.Oi(t,n):(Do()<=$.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Gr(n)),this.Fi(t,o,n,Id(r,-1)))})}$i(t,n){let s=new Z(ru(t));return n.forEach((r,i)=>{Ks(t,i)&&(s=s.add(i))}),s}Mi(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(t,n){return Do()<=$.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",Gr(n)),this.xi.getDocumentsMatchingQuery(t,n,Yt.min())}Fi(t,n,s,r){return this.xi.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Gp{constructor(t,n,s,r){this.persistence=t,this.Bi=n,this.serializer=r,this.Li=new tt(j),this.qi=new We(i=>Ni(i),Ri),this.Ui=new Map,this.Ki=t.getRemoteDocumentCache(),this.Ds=t.getTargetCache(),this.xs=t.getBundleCache(),this.Gi(s)}Gi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Fp(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Li))}}function Qp(e,t,n,s){return new Gp(e,t,n,s)}async function ku(e,t){const n=R(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Gi(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=O();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function Wp(e,t){const n=R(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=y.resolve();return h.forEach(d=>{f=f.next(()=>u.getEntry(a,d)).next(p=>{const m=c.docVersions.get(d);z(m!==null),p.version.compareTo(m)<0&&(l.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),u.addEntry(p)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,t,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=O();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,r))})}function Du(e){const t=R(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ds.getLastRemoteSnapshotVersion(n))}function Yp(e,t){const n=R(e),s=t.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const a=[];t.targetChanges.forEach((l,h)=>{const f=r.get(h);if(!f)return;a.push(n.Ds.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(i,l.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.has(h)?d=d.withResumeToken(mt.EMPTY_BYTE_STRING,A.min()).withLastLimboFreeSnapshotVersion(A.min()):l.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(l.resumeToken,s)),r=r.insert(h,d),function(p,m,v){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(f,d,l)&&a.push(n.Ds.updateTargetData(i,d))});let c=jt(),u=O();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Xp(i,o,t.documentUpdates).next(l=>{c=l.zi,u=l.ji})),!s.isEqual(A.min())){const l=n.Ds.getLastRemoteSnapshotVersion(i).next(h=>n.Ds.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return y.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Li=r,i))}function Xp(e,t,n){let s=O(),r=O();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=jt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(A.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):E("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{zi:o,ji:r}})}function Jp(e,t){const n=R(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function Zp(e,t){const n=R(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ds.getTargetData(s,t).next(i=>i?(r=i,y.resolve(r)):n.Ds.allocateTargetId(s).next(o=>(r=new ce(t,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Li.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(t,s.targetId)),s})}async function Xr(e,t,n){const s=R(e),r=s.Li.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Bn(o))throw o;E("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Li=s.Li.remove(t),s.qi.delete(r.target)}function Ko(e,t,n){const s=R(e);let r=A.min(),i=O();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=R(a),h=l.qi.get(u);return h!==void 0?y.resolve(l.Li.get(h)):l.Ds.getTargetData(c,u)}(s,o,$t(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,t,n?r:A.min(),n?i:O())).next(a=>(tm(s,Qd(t),a),{documents:a,Wi:i})))}function tm(e,t,n){let s=e.Ui.get(t)||A.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.Ui.set(t,s)}class Go{constructor(){this.activeTargetIds=cu()}tr(t){this.activeTargetIds=this.activeTargetIds.add(t)}er(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class em{constructor(){this.Br=new Go,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Br.tr(t),this.Lr[t]||"not-current"}updateQueryState(t,n,s){this.Lr[t]=n}removeLocalQueryTarget(t){this.Br.er(t)}isLocalQueryTarget(t){return this.Br.activeTargetIds.has(t)}clearQueryState(t){delete this.Lr[t]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(t){return this.Br.activeTargetIds.has(t)}start(){return this.Br=new Go,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class nm{qr(t){}shutdown(){}}/**
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
 */class Qo{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(t){this.zr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){E("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.zr)t(0)}Qr(){E("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.zr)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Jn=null;function wr(){return Jn===null?Jn=268435456+Math.round(2147483648*Math.random()):Jn++,"0x"+Jn.toString(16)}/**
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
 */const sm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(t){this.Wr=t.Wr,this.Hr=t.Hr}Jr(t){this.Yr=t}Zr(t){this.Xr=t}onMessage(t){this.eo=t}close(){this.Hr()}send(t){this.Wr(t)}no(){this.Yr()}so(t){this.Xr(t)}io(t){this.eo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection";class im extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.ro=n+"://"+t.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(t,n,s,r,i){const o=wr(),a=this.ao(t,n);E("RestConnection",`Sending RPC '${t}' ${o}:`,a,s);const c={};return this.ho(c,r,i),this.lo(t,a,c,s).then(u=>(E("RestConnection",`Received RPC '${t}' ${o}: `,u),u),u=>{throw vs("RestConnection",`RPC '${t}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}fo(t,n,s,r,i,o){return this.co(t,n,s,r,i)}ho(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Qe,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}ao(t,n){const s=sm[t];return`${this.ro}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,n,s,r){const i=wr();return new Promise((o,a)=>{const c=new pd;c.setWithCredentials(!0),c.listenOnce(hd.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case yr.NO_ERROR:const l=c.getResponseJson();E(ut,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(l)),o(l);break;case yr.TIMEOUT:E(ut,`RPC '${t}' ${i} timed out`),a(new C(g.DEADLINE_EXCEEDED,"Request time out"));break;case yr.HTTP_ERROR:const h=c.getStatus();if(E(ut,`RPC '${t}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(m){const v=m.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(v)>=0?v:g.UNKNOWN}(d.status);a(new C(p,d.message))}else a(new C(g.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new C(g.UNAVAILABLE,"Connection failed."));break;default:k()}}finally{E(ut,`RPC '${t}' ${i} completed.`)}});const u=JSON.stringify(r);E(ut,`RPC '${t}' ${i} sending request:`,r),c.send(n,"POST",u,s,15)})}wo(t,n,s){const r=wr(),i=[this.ro,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=ud(),a=ld(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new dd({})),this.ho(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");E(ut,`Creating RPC '${t}' stream ${r}: ${u}`,c);const l=o.createWebChannel(u,c);let h=!1,f=!1;const d=new rm({Wr:m=>{f?E(ut,`Not sending because RPC '${t}' stream ${r} is closed:`,m):(h||(E(ut,`Opening RPC '${t}' stream ${r} transport.`),l.open(),h=!0),E(ut,`RPC '${t}' stream ${r} sending:`,m),l.send(m))},Hr:()=>l.close()}),p=(m,v,w)=>{m.listen(v,T=>{try{w(T)}catch(b){setTimeout(()=>{throw b},0)}})};return p(l,Qn.EventType.OPEN,()=>{f||E(ut,`RPC '${t}' stream ${r} transport opened.`)}),p(l,Qn.EventType.CLOSE,()=>{f||(f=!0,E(ut,`RPC '${t}' stream ${r} transport closed`),d.so())}),p(l,Qn.EventType.ERROR,m=>{f||(f=!0,vs(ut,`RPC '${t}' stream ${r} transport errored:`,m),d.so(new C(g.UNAVAILABLE,"The operation could not be completed")))}),p(l,Qn.EventType.MESSAGE,m=>{var v;if(!f){const w=m.data[0];z(!!w);const T=w,b=T.error||((v=T[0])===null||v===void 0?void 0:v.error);if(b){E(ut,`RPC '${t}' stream ${r} received error:`,b);const L=b.status;let st=function(H){const rt=W[H];if(rt!==void 0)return vu(rt)}(L),It=b.message;st===void 0&&(st=g.INTERNAL,It="Unknown error status: "+L+" with message "+b.message),f=!0,d.so(new C(st,It)),l.close()}else E(ut,`RPC '${t}' stream ${r} received:`,w),d.io(w)}}),p(a,fd.STAT_EVENT,m=>{m.stat===So.PROXY?E(ut,`RPC '${t}' stream ${r} detected buffering proxy`):m.stat===So.NOPROXY&&E(ut,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{d.no()},0),d}}function _r(){return typeof document<"u"?document:null}/**
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
 */function Xs(e){return new yp(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(t,n,s=1e3,r=1.5,i=6e4){this.Ws=t,this.timerId=n,this._o=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&E("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),t())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(t,n,s,r,i,o,a,c){this.Ws=t,this.bo=s,this.Po=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Au(t,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(t){this.Bo(),this.stream.send(t)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(t,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,t!==4?this.Co.reset():n&&n.code===g.RESOURCE_EXHAUSTED?(Bt(n.toString()),Bt("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const t=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Vo===n&&this.Ko(s,r)},s=>{t(()=>{const r=new C(g.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(r)})})}Ko(t,n){const s=this.Uo(this.Vo);this.stream=this.Qo(t,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(r=>{s(()=>this.Go(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(t){return E("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===t?n():(E("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class om extends Nu{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}Qo(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.Co.reset();const n=_p(this.serializer,t),s=function(r){if(!("targetChange"in r))return A.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?A.min():i.readTime?kt(i.readTime):A.min()}(t);return this.listener.zo(n,s)}jo(t){const n={};n.database=Yr(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;return o=Hr(a)?{documents:Tp(r,a)}:{query:Ip(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Eu(r,i.resumeToken):i.snapshotVersion.compareTo(A.min())>0&&(o.readTime=Ts(r,i.snapshotVersion.toTimestamp())),o}(this.serializer,t);const s=Sp(this.serializer,t);s&&(n.labels=s),this.Fo(n)}Wo(t){const n={};n.database=Yr(this.serializer),n.removeTarget=t,this.Fo(n)}}class am extends Nu{constructor(t,n,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(z(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Ho){this.Co.reset();const n=bp(t.writeResults,t.commitTime),s=kt(t.commitTime);return this.listener.Zo(s,n)}return z(!t.writeResults||t.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const t={};t.database=Yr(this.serializer),this.Fo(t)}Yo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Ep(this.serializer,s))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new C(g.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.co(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new C(g.UNKNOWN,r.toString())})}fo(t,n,s,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.fo(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(g.UNKNOWN,i.toString())})}terminate(){this.eu=!0}}class um{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(t){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.uu("Offline")))}set(t){this.hu(),this.su=0,t==="Online"&&(this.ru=!1),this.uu(t)}uu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}cu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Bt(n),this.ru=!1):E("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(o=>{s.enqueueAndForget(async()=>{ye(this)&&(E("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=R(a);c.du.add(4),await jn(c),c.mu.set("Unknown"),c.du.delete(4),await Js(c)}(this))})}),this.mu=new um(s,r)}}async function Js(e){if(ye(e))for(const t of e.wu)await t(!0)}async function jn(e){for(const t of e.wu)await t(!1)}function Ru(e,t){const n=R(e);n.fu.has(t.targetId)||(n.fu.set(t.targetId,t),Bi(n)?Ui(n):Ye(n).No()&&Vi(n,t))}function Ou(e,t){const n=R(e),s=Ye(n);n.fu.delete(t),s.No()&&Lu(n,t),n.fu.size===0&&(s.No()?s.$o():ye(n)&&n.mu.set("Unknown"))}function Vi(e,t){e.gu.Ot(t.targetId),Ye(e).jo(t)}function Lu(e,t){e.gu.Ot(t),Ye(e).Wo(t)}function Ui(e){e.gu=new dp({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.fu.get(t)||null}),Ye(e).start(),e.mu.ou()}function Bi(e){return ye(e)&&!Ye(e).xo()&&e.fu.size>0}function ye(e){return R(e).du.size===0}function Mu(e){e.gu=void 0}async function hm(e){e.fu.forEach((t,n)=>{Vi(e,t)})}async function fm(e,t){Mu(e),Bi(e)?(e.mu.au(t),Ui(e)):e.mu.set("Unknown")}async function dm(e,t,n){if(e.mu.set("Online"),t instanceof _u&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.fu.delete(o),s.gu.removeTarget(o))}(e,t)}catch(s){E("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Is(e,s)}else if(t instanceof ns?e.gu.Kt(t):t instanceof wu?e.gu.Jt(t):e.gu.zt(t),!n.isEqual(A.min()))try{const s=await Du(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.gu.Xt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.fu.get(c);u&&r.fu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.fu.get(a);if(!c)return;r.fu.set(a,c.withResumeToken(mt.EMPTY_BYTE_STRING,c.snapshotVersion)),Lu(r,a);const u=new ce(c.target,a,1,c.sequenceNumber);Vi(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){E("RemoteStore","Failed to raise snapshot:",s),await Is(e,s)}}async function Is(e,t,n){if(!Bn(t))throw t;e.du.add(1),await jn(e),e.mu.set("Offline"),n||(n=()=>Du(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{E("RemoteStore","Retrying IndexedDB access"),await n(),e.du.delete(1),await Js(e)})}function xu(e,t){return t().catch(n=>Is(e,n,t))}async function Zs(e){const t=R(e),n=Jt(t);let s=t.lu.length>0?t.lu[t.lu.length-1].batchId:-1;for(;pm(t);)try{const r=await Jp(t.localStore,s);if(r===null){t.lu.length===0&&n.$o();break}s=r.batchId,mm(t,r)}catch(r){await Is(t,r)}Pu(t)&&Fu(t)}function pm(e){return ye(e)&&e.lu.length<10}function mm(e,t){e.lu.push(t);const n=Jt(e);n.No()&&n.Jo&&n.Yo(t.mutations)}function Pu(e){return ye(e)&&!Jt(e).xo()&&e.lu.length>0}function Fu(e){Jt(e).start()}async function gm(e){Jt(e).tu()}async function ym(e){const t=Jt(e);for(const n of e.lu)t.Yo(n.mutations)}async function vm(e,t,n){const s=e.lu.shift(),r=Oi.from(s,t,n);await xu(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await Zs(e)}async function wm(e,t){t&&Jt(e).Jo&&await async function(n,s){if(r=s.code,fp(r)&&r!==g.ABORTED){const i=n.lu.shift();Jt(n).Oo(),await xu(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Zs(n)}var r}(e,t),Pu(e)&&Fu(e)}async function Wo(e,t){const n=R(e);n.asyncQueue.verifyOperationInProgress(),E("RemoteStore","RemoteStore received new credentials");const s=ye(n);n.du.add(3),await jn(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.du.delete(3),await Js(n)}async function _m(e,t){const n=R(e);t?(n.du.delete(2),await Js(n)):t||(n.du.add(2),await jn(n),n.mu.set("Unknown"))}function Ye(e){return e.yu||(e.yu=function(t,n,s){const r=R(t);return r.nu(),new om(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(e.datastore,e.asyncQueue,{Jr:hm.bind(null,e),Zr:fm.bind(null,e),zo:dm.bind(null,e)}),e.wu.push(async t=>{t?(e.yu.Oo(),Bi(e)?Ui(e):e.mu.set("Unknown")):(await e.yu.stop(),Mu(e))})),e.yu}function Jt(e){return e.pu||(e.pu=function(t,n,s){const r=R(t);return r.nu(),new am(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(e.datastore,e.asyncQueue,{Jr:gm.bind(null,e),Zr:wm.bind(null,e),Xo:ym.bind(null,e),Zo:vm.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Oo(),await Zs(e)):(await e.pu.stop(),e.lu.length>0&&(E("RemoteStore",`Stopping write stream with ${e.lu.length} pending writes`),e.lu=[]))})),e.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new $i(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(g.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ji(e,t){if(Bt("AsyncQueue",`${t}: ${e}`),Bn(e))return new C(g.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t){this.comparator=t?(n,s)=>t(n,s)||I.comparator(n.key,s.key):(n,s)=>I.comparator(n.key,s.key),this.keyedMap=en(),this.sortedSet=new tt(this.comparator)}static emptySet(t){return new Oe(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Oe)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Oe;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(){this.Iu=new tt(I.comparator)}track(t){const n=t.doc.key,s=this.Iu.get(n);s?t.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,t):t.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Iu=this.Iu.remove(n):t.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:t.doc}):k():this.Iu=this.Iu.insert(n,t)}Tu(){const t=[];return this.Iu.inorderTraversal((n,s)=>{t.push(s)}),t}}class $e{constructor(t,n,s,r,i,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new $e(t,n,Oe.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Hs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(){this.Eu=void 0,this.listeners=[]}}class bm{constructor(){this.queries=new We(t=>su(t),Hs),this.onlineState="Unknown",this.Au=new Set}}async function Vu(e,t){const n=R(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Em),r)try{i.Eu=await n.onListen(s)}catch(o){const a=ji(o,`Initialization of query '${Gr(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.Ru(n.onlineState),i.Eu&&t.vu(i.Eu)&&qi(n)}async function Uu(e,t){const n=R(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Tm(e,t){const n=R(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.vu(r)&&(s=!0);o.Eu=r}}s&&qi(n)}function Im(e,t,n){const s=R(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function qi(e){e.Au.forEach(t=>{t.next()})}class Bu{constructor(t,n,s){this.query=t,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new $e(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Pu?this.Su(t)&&(this.bu.next(t),n=!0):this.Du(t,this.onlineState)&&(this.Cu(t),n=!0),this.Vu=t,n}onError(t){this.bu.error(t)}Ru(t){this.onlineState=t;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,t)&&(this.Cu(this.Vu),n=!0),n}Du(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Su(t){if(t.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(t){t=$e.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Pu=!0,this.bu.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(t){this.key=t}}class ju{constructor(t){this.key=t}}class Cm{constructor(t,n){this.query=t,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=O(),this.mutatedKeys=O(),this.Ku=ru(t),this.Gu=new Oe(this.Ku)}get Qu(){return this.Lu}zu(t,n){const s=n?n.ju:new Yo,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((l,h)=>{const f=r.get(l),d=Ks(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),m=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let v=!1;f&&d?f.data.isEqual(d.data)?p!==m&&(s.track({type:3,doc:d}),v=!0):this.Wu(f,d)||(s.track({type:2,doc:d}),v=!0,(c&&this.Ku(d,c)>0||u&&this.Ku(d,u)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),v=!0):f&&!d&&(s.track({type:1,doc:f}),v=!0,(c||u)&&(a=!0)),v&&(d?(o=o.add(d),i=m?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Gu:o,ju:s,Mi:a,mutatedKeys:i}}Wu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.Gu;this.Gu=t.Gu,this.mutatedKeys=t.mutatedKeys;const i=t.ju.Tu();i.sort((u,l)=>function(h,f){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return k()}};return d(h)-d(f)}(u.type,l.type)||this.Ku(u.doc,l.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new $e(this.query,t.Gu,r,i,t.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Yo,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(t){return!this.Lu.has(t)&&!!this.Gu.has(t)&&!this.Gu.get(t).hasLocalMutations}Hu(t){t&&(t.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=t.current)}Ju(){if(!this.current)return[];const t=this.Uu;this.Uu=O(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return t.forEach(s=>{this.Uu.has(s)||n.push(new ju(s))}),this.Uu.forEach(s=>{t.has(s)||n.push(new $u(s))}),n}Xu(t){this.Lu=t.Wi,this.Uu=O();const n=this.zu(t.documents);return this.applyChanges(n,!0)}tc(){return $e.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Sm{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class km{constructor(t){this.key=t,this.ec=!1}}class Dm{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new We(a=>su(a),Hs),this.ic=new Map,this.rc=new Set,this.oc=new tt(I.comparator),this.uc=new Map,this.cc=new xi,this.ac={},this.hc=new Map,this.lc=Be.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function Am(e,t){const n=Um(e);let s,r;const i=n.sc.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await Zp(n.localStore,$t(t));n.isPrimaryClient&&Ru(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Nm(n,t,s,a==="current",o.resumeToken)}return r}async function Nm(e,t,n,s,r){e.dc=(h,f,d)=>async function(p,m,v,w){let T=m.view.zu(v);T.Mi&&(T=await Ko(p.localStore,m.query,!1).then(({documents:st})=>m.view.zu(st,T)));const b=w&&w.targetChanges.get(m.targetId),L=m.view.applyChanges(T,p.isPrimaryClient,b);return Jo(p,m.targetId,L.Yu),L.snapshot}(e,h,f,d);const i=await Ko(e.localStore,t,!0),o=new Cm(t,i.Wi),a=o.zu(i.documents),c=$n.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",r),u=o.applyChanges(a,e.isPrimaryClient,c);Jo(e,n,u.Yu);const l=new Sm(t,n,o);return e.sc.set(t,l),e.ic.has(n)?e.ic.get(n).push(t):e.ic.set(n,[t]),u.snapshot}async function Rm(e,t){const n=R(e),s=n.sc.get(t),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!Hs(i,t))),void n.sc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Xr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ou(n.remoteStore,s.targetId),Jr(n,s.targetId)}).catch(Un)):(Jr(n,s.targetId),await Xr(n.localStore,s.targetId,!0))}async function Om(e,t,n){const s=Bm(e);try{const r=await function(i,o){const a=R(i),c=J.now(),u=o.reduce((f,d)=>f.add(d.key),O());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=jt(),p=O();return a.Ki.getEntries(f,u).next(m=>{d=m,d.forEach((v,w)=>{w.isValidDocument()||(p=p.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(m=>{l=m;const v=[];for(const w of o){const T=ap(w,l.get(w.key).overlayedDocument);T!=null&&v.push(new ge(w.key,T,Yc(T.value.mapValue),Ft.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,v,o)}).next(m=>{h=m;const v=m.applyToLocalDocumentSet(l,p);return a.documentOverlayCache.saveOverlays(f,m.batchId,v)})}).then(()=>({batchId:h.batchId,changes:ou(l)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new tt(j)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(s,r.batchId,n),await qn(s,r.changes),await Zs(s.remoteStore)}catch(r){const i=ji(r,"Failed to persist write");n.reject(i)}}async function qu(e,t){const n=R(e);try{const s=await Yp(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(z(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?z(o.ec):r.removedDocuments.size>0&&(z(o.ec),o.ec=!1))}),await qn(n,s,t)}catch(s){await Un(s)}}function Xo(e,t,n){const s=R(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.Ru(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=R(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Ru(o)&&(c=!0)}),c&&qi(a)}(s.eventManager,t),r.length&&s.nc.zo(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Lm(e,t,n){const s=R(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.uc.get(t),i=r&&r.key;if(i){let o=new tt(I.comparator);o=o.insert(i,ht.newNoDocument(i,A.min()));const a=O().add(i),c=new Ys(A.min(),new Map,new Z(j),o,a);await qu(s,c),s.oc=s.oc.remove(i),s.uc.delete(t),zi(s)}else await Xr(s.localStore,t,!1).then(()=>Jr(s,t,n)).catch(Un)}async function Mm(e,t){const n=R(e),s=t.batch.batchId;try{const r=await Wp(n.localStore,t);Hu(n,s,null),zu(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await qn(n,r)}catch(r){await Un(r)}}async function xm(e,t,n){const s=R(e);try{const r=await function(i,o){const a=R(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(z(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,t);Hu(s,t,n),zu(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await qn(s,r)}catch(r){await Un(r)}}function zu(e,t){(e.hc.get(t)||[]).forEach(n=>{n.resolve()}),e.hc.delete(t)}function Hu(e,t,n){const s=R(e);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),s.ac[s.currentUser.toKey()]=r}}function Jr(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.ic.get(t))e.sc.delete(s),n&&e.nc.wc(s,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.hs(t).forEach(s=>{e.cc.containsKey(s)||Ku(e,s)})}function Ku(e,t){e.rc.delete(t.path.canonicalString());const n=e.oc.get(t);n!==null&&(Ou(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),zi(e))}function Jo(e,t,n){for(const s of n)s instanceof $u?(e.cc.addReference(s.key,t),Pm(e,s)):s instanceof ju?(E("SyncEngine","Document no longer in limbo: "+s.key),e.cc.removeReference(s.key,t),e.cc.containsKey(s.key)||Ku(e,s.key)):k()}function Pm(e,t){const n=t.key,s=n.path.canonicalString();e.oc.get(n)||e.rc.has(s)||(E("SyncEngine","New document in limbo: "+n),e.rc.add(s),zi(e))}function zi(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){const t=e.rc.values().next().value;e.rc.delete(t);const n=new I(G.fromString(t)),s=e.lc.next();e.uc.set(s,new km(n)),e.oc=e.oc.insert(n,s),Ru(e.remoteStore,new ce($t(zs(n.path)),s,2,Di.ct))}}async function qn(e,t,n){const s=R(e),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,t,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=Fi.Di(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.nc.zo(r),await async function(a,c){const u=R(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>y.forEach(c,h=>y.forEach(h.Vi,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>y.forEach(h.Si,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!Bn(l))throw l;E("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.Li.get(h),d=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(d);u.Li=u.Li.insert(h,p)}}}(s.localStore,i))}async function Fm(e,t){const n=R(e);if(!n.currentUser.isEqual(t)){E("SyncEngine","User change. New user:",t.toKey());const s=await ku(n.localStore,t);n.currentUser=t,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new C(g.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await qn(n,s.Qi)}}function Vm(e,t){const n=R(e),s=n.uc.get(t);if(s&&s.ec)return O().add(s.key);{let r=O();const i=n.ic.get(t);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function Um(e){const t=R(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=qu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Lm.bind(null,t),t.nc.zo=Tm.bind(null,t.eventManager),t.nc.wc=Im.bind(null,t.eventManager),t}function Bm(e){const t=R(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Mm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=xm.bind(null,t),t}class Zo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Xs(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Qp(this.persistence,new Kp,t.initialUser,this.serializer)}createPersistence(t){return new zp(Pi.Fs,this.serializer)}createSharedClientState(t){return new em}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class $m{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Xo(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fm.bind(null,this.syncEngine),await _m(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new bm}createDatastore(t){const n=Xs(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new im(r));var r;return function(i,o,a,c){return new cm(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>Xo(this.syncEngine,a,0),o=Qo.D()?new Qo:new nm,new lm(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,c,u){const l=new Dm(s,r,i,o,a,c);return u&&(l.fc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=R(t);E("RemoteStore","RemoteStore shutting down."),n.du.add(5),await jn(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */class Gu{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.gc(this.observer.next,t)}error(t){this.observer.error?this.gc(this.observer.error,t):Bt("Uncaught Error in snapshot listener:",t.toString())}yc(){this.muted=!0}gc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=lt.UNAUTHENTICATED,this.clientId=Kc.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{E("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(E("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=ji(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Er(e,t){e.asyncQueue.verifyOperationInProgress(),E("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await ku(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ta(e,t){e.asyncQueue.verifyOperationInProgress();const n=await zm(e);E("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>Wo(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>Wo(t.remoteStore,i)),e._onlineComponents=t}function qm(e){return e.name==="FirebaseError"?e.code===g.FAILED_PRECONDITION||e.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function zm(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){E("FirestoreClient","Using user provided OfflineComponentProvider");try{await Er(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!qm(n))throw n;vs("Error using user provided cache. Falling back to memory cache: "+n),await Er(e,new Zo)}}else E("FirestoreClient","Using default OfflineComponentProvider"),await Er(e,new Zo);return e._offlineComponents}async function Qu(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(E("FirestoreClient","Using user provided OnlineComponentProvider"),await ta(e,e._uninitializedComponentsProvider._online)):(E("FirestoreClient","Using default OnlineComponentProvider"),await ta(e,new $m))),e._onlineComponents}function Hm(e){return Qu(e).then(t=>t.syncEngine)}async function Zr(e){const t=await Qu(e),n=t.eventManager;return n.onListen=Am.bind(null,t.syncEngine),n.onUnlisten=Rm.bind(null,t.syncEngine),n}function Km(e,t,n={}){const s=new Kt;return e.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Gu({next:h=>{i.enqueueAndForget(()=>Uu(r,l));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new C(g.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new C(g.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Bu(zs(o.path),u,{includeMetadataChanges:!0,xu:!0});return Vu(r,l)}(await Zr(e),e.asyncQueue,t,n,s)),s.promise}/**
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
 */function Gm(e,t,n){if(!n)throw new C(g.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Qm(e,t,n,s){if(t===!0&&s===!0)throw new C(g.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function na(e){if(!I.isDocumentKey(e))throw new C(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Hi(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":k()}function Gt(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new C(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hi(e);throw new C(g.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class sa{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new C(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new C(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Qm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class Ki{constructor(t,n,s,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sa({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new C(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new C(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sa(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new md;switch(n.type){case"firstParty":return new wd(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new C(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=ea.get(t);n&&(E("ComponentProvider","Removing Datastore"),ea.delete(t),n.terminate())}(this),Promise.resolve()}}function Wm(e,t,n,s={}){var r;const i=(e=Gt(e,Ki))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==t&&vs("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=lt.MOCK_USER;else{o=Yl(s.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new C(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new lt(c)}e._authCredentials=new gd(new Hc(o,a))}}/**
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
 */class wt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new wt(this.firestore,t,this._key)}}class tr{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new tr(this.firestore,t,this._query)}}class Cn extends tr{constructor(t,n,s){super(t,n,zs(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new wt(this.firestore,null,new I(t))}withConverter(t){return new Cn(this.firestore,t,this._path)}}function Ym(e,t,...n){if(e=Wt(e),arguments.length===1&&(t=Kc.A()),Gm("doc","path",t),e instanceof Ki){const s=G.fromString(t,...n);return na(s),new wt(e,null,new I(s))}{if(!(e instanceof wt||e instanceof Cn))throw new C(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(G.fromString(t,...n));return na(s),new wt(e.firestore,e instanceof Cn?e.converter:null,new I(s))}}/**
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
 */class Xm{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Au(this,"async_queue_retry"),this.qc=()=>{const n=_r();n&&E("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const t=_r();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Uc(),this.Kc(t)}enterRestrictedMode(t){if(!this.Oc){this.Oc=!0,this.Bc=t||!1;const n=_r();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(t){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Kt;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.kc.push(t),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(t){if(!Bn(t))throw t;E("AsyncQueue","Operation failed with retryable error: "+t)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(t){const n=this.Nc.then(()=>(this.Fc=!0,t().catch(s=>{this.Mc=s,this.Fc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Bt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(t,n,s){this.Uc(),this.Lc.indexOf(t)>-1&&(n=0);const r=$i.createAndSchedule(this,t,n,s,i=>this.Qc(i));return this.$c.push(r),r}Uc(){this.Mc&&k()}verifyOperationInProgress(){}async zc(){let t;do t=this.Nc,await t;while(t!==this.Nc)}jc(t){for(const n of this.$c)if(n.timerId===t)return!0;return!1}Wc(t){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.zc()})}Hc(t){this.Lc.push(t)}Qc(t){const n=this.$c.indexOf(t);this.$c.splice(n,1)}}function ra(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(e,["next","error","complete"])}class Sn extends Ki{constructor(t,n,s,r){super(t,n,s,r),this.type="firestore",this._queue=new Xm,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Wu(this),this._firestoreClient.terminate()}}function Jm(e,t){const n=typeof e=="object"?e:tf(),s=typeof e=="string"?e:t||"(default)",r=Yh(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Gl("firestore");i&&Wm(r,...i)}return r}function Gi(e){return e._firestoreClient||Wu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Wu(e){var t,n,s;const r=e._freezeSettings(),i=function(o,a,c,u){return new Od(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new jm(e._authCredentials,e._appCheckCredentials,e._queue,i),((n=r.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((s=r.cache)===null||s===void 0?void 0:s._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class je{constructor(t){this._byteString=t}static fromBase64String(t){try{return new je(mt.fromBase64String(t))}catch(n){throw new C(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new je(mt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class er{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new C(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class nr{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new C(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new C(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=/^__.*__$/;class Yu{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new ge(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Xu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw k()}}class sr{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(t){return new sr(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.Zc({path:s,ta:!1});return r.ea(t),r}na(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.Zc({path:s,ta:!1});return r.Jc(),r}sa(t){return this.Zc({path:void 0,ta:!0})}ia(t){return Cs(t,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let t=0;t<this.path.length;t++)this.ea(this.path.get(t))}ea(t){if(t.length===0)throw this.ia("Document fields must not be empty");if(Xu(this.Yc)&&Zm.test(t))throw this.ia('Document fields cannot begin and end with "__"')}}class tg{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||Xs(t)}ua(t,n,s,r=!1){return new sr({Yc:t,methodName:n,oa:s,path:ft.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function eg(e){const t=e._freezeSettings(),n=Xs(e._databaseId);return new tg(e._databaseId,!!t.ignoreUndefinedProperties,n)}class rr extends nr{_toFieldTransform(t){if(t.Yc!==2)throw t.Yc===1?t.ia(`${this._methodName}() can only appear at the top level of your update data`):t.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof rr}}function ng(e,t,n){return new sr({Yc:3,oa:t.settings.oa,methodName:e._methodName,ta:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class sg extends nr{constructor(t,n){super(t),this.ca=n}_toFieldTransform(t){const n=ng(this,t,!0),s=this.ca.map(i=>zn(i,n)),r=new Ue(s);return new sp(t.path,r)}isEqual(t){return this===t}}function rg(e,t,n,s){const r=e.ua(1,t,n);Zu("Data must be an object, but it was:",r,s);const i=[],o=vt.empty();me(s,(c,u)=>{const l=Wi(t,c,n);u=Wt(u);const h=r.na(l);if(u instanceof rr)i.push(l);else{const f=zn(u,h);f!=null&&(i.push(l),o.set(l,f))}});const a=new Tt(i);return new Yu(o,a,r.fieldTransforms)}function ig(e,t,n,s,r,i){const o=e.ua(1,t,n),a=[ia(t,s,n)],c=[r];if(i.length%2!=0)throw new C(g.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(ia(t,i[f])),c.push(i[f+1]);const u=[],l=vt.empty();for(let f=a.length-1;f>=0;--f)if(!cg(u,a[f])){const d=a[f];let p=c[f];p=Wt(p);const m=o.na(d);if(p instanceof rr)u.push(d);else{const v=zn(p,m);v!=null&&(u.push(d),l.set(d,v))}}const h=new Tt(u);return new Yu(l,h,o.fieldTransforms)}function zn(e,t){if(Ju(e=Wt(e)))return Zu("Unsupported field value:",t,e),og(e,t);if(e instanceof nr)return function(n,s){if(!Xu(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ta&&t.Yc!==4)throw t.ia("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=zn(o,s.sa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=Wt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return tp(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=J.fromDate(n);return{timestampValue:Ts(s.serializer,r)}}if(n instanceof J){const r=new J(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ts(s.serializer,r)}}if(n instanceof Qi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof je)return{bytesValue:Eu(s.serializer,n._byteString)};if(n instanceof wt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Mi(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${Hi(n)}`)}(e,t)}function og(e,t){const n={};return Gc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):me(e,(s,r)=>{const i=zn(r,t.Xc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Ju(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof J||e instanceof Qi||e instanceof je||e instanceof wt||e instanceof nr)}function Zu(e,t,n){if(!Ju(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Hi(n);throw s==="an object"?t.ia(e+" a custom object"):t.ia(e+" "+s)}}function ia(e,t,n){if((t=Wt(t))instanceof er)return t._internalPath;if(typeof t=="string")return Wi(e,t);throw Cs("Field path arguments must be of type string or ",e,!1,void 0,n)}const ag=new RegExp("[~\\*/\\[\\]]");function Wi(e,t,n){if(t.search(ag)>=0)throw Cs(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new er(...t.split("."))._internalPath}catch{throw Cs(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Cs(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new C(g.INVALID_ARGUMENT,a+e+c)}function cg(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class tl{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ug(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(el("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ug extends tl{data(){return super.data()}}function el(e,t){return typeof t=="string"?Wi(e,t):t instanceof er?t._internalPath:t._delegate._internalPath}/**
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
 */function lg(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new C(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hg{convertValue(t,n="none"){switch(fe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Y(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Pe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw k()}}convertObject(t,n){const s={};return me(t.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new Qi(Y(t.latitude),Y(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Wc(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(En(t));default:return null}}convertTimestamp(t){const n=Xt(t);return new J(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=G.fromString(t);z(Su(s));const r=new bn(s.get(1),s.get(3)),i=new I(s.popFirst(5));return r.isEqual(n)||Bt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class nn{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class nl extends tl{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new ss(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(el("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ss extends nl{data(t={}){return super.data(t)}}class fg{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new nn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new ss(this._firestore,this._userDataWriter,s.key,s,new nn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new C(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new ss(s._firestore,s._userDataWriter,o.doc.key,o.doc,new nn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new ss(s._firestore,s._userDataWriter,o.doc.key,o.doc,new nn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:dg(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function dg(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return k()}}/**
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
 */function pg(e){e=Gt(e,wt);const t=Gt(e.firestore,Sn);return Km(Gi(t),e._key).then(n=>rl(t,e,n))}class sl extends hg{constructor(t){super(),this.firestore=t}convertBytes(t){return new je(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function mg(e,t,n,...s){e=Gt(e,wt);const r=Gt(e.firestore,Sn),i=eg(r);let o;return o=typeof(t=Wt(t))=="string"||t instanceof er?ig(i,"updateDoc",e._key,t,n,s):rg(i,"updateDoc",e._key,t),yg(r,[o.toMutation(e._key,Ft.exists(!0))])}function gg(e,...t){var n,s,r;e=Wt(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||ra(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(ra(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),t[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,u,l;if(e instanceof wt)u=Gt(e.firestore,Sn),l=zs(e._key.path),c={next:h=>{t[o]&&t[o](rl(u,e,h))},error:t[o+1],complete:t[o+2]};else{const h=Gt(e,tr);u=Gt(h.firestore,Sn),l=h._query;const f=new sl(u);c={next:d=>{t[o]&&t[o](new fg(u,f,h,d))},error:t[o+1],complete:t[o+2]},lg(e._query)}return function(h,f,d,p){const m=new Gu(p),v=new Bu(f,m,d);return h.asyncQueue.enqueueAndForget(async()=>Vu(await Zr(h),v)),()=>{m.yc(),h.asyncQueue.enqueueAndForget(async()=>Uu(await Zr(h),v))}}(Gi(u),l,a,c)}function yg(e,t){return function(n,s){const r=new Kt;return n.asyncQueue.enqueueAndForget(async()=>Om(await Hm(n),s,r)),r.promise}(Gi(e),t)}function rl(e,t,n){const s=n.docs.get(t._key),r=new sl(e);return new nl(e,r,t._key,s,new nn(n.hasPendingWrites,n.fromCache),t.converter)}function vg(...e){return new sg("arrayUnion",e)}(function(e,t=!0){(function(n){Qe=n})(Zh),us(new dn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Sn(new yd(n.getProvider("auth-internal")),new Ed(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new C(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bn(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Ne(ko,"3.10.0",e),Ne(ko,"3.10.0","esm2017")})();const wg={apiKey:"AIzaSyDbBV7DT8DNmxyLPUB_w0skCx6bQjDIDhE",authDomain:"nocontextquotes-86d30.firebaseapp.com",projectId:"nocontextquotes-86d30",storageBucket:"nocontextquotes-86d30.appspot.com",messagingSenderId:"704558739601",appId:"1:704558739601:web:f92bb50736b7c0cb360f30",measurementId:"G-RHFY5NDBMG"},_g=Ba(wg),Eg=Jm(_g);function Yi(e){const t=e-1;return t*t*t+1}function oa(e){return--e*e*e*e*e+1}function bg(e,{delay:t=0,duration:n=400,easing:s=de}={}){const r=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:s,css:i=>`opacity: ${i*r}`}}function Tg(e,{delay:t=0,duration:n=400,easing:s=Yi,x:r=0,y:i=0,opacity:o=0}={}){const a=getComputedStyle(e),c=+a.opacity,u=a.transform==="none"?"":a.transform,l=c*(1-o),[h,f]=eo(r),[d,p]=eo(i);return{delay:t,duration:n,easing:s,css:(m,v)=>`
			transform: ${u} translate(${(1-m)*h}${f}, ${(1-m)*d}${p});
			opacity: ${c-l*v}`}}function aa(e,{delay:t=0,duration:n=400,easing:s=Yi,start:r=0,opacity:i=0}={}){const o=getComputedStyle(e),a=+o.opacity,c=o.transform==="none"?"":o.transform,u=1-r,l=a*(1-i);return{delay:t,duration:n,easing:s,css:(h,f)=>`
			transform: ${c} scale(${1-u*f});
			opacity: ${a-l*f}
		`}}function Ig(e,{from:t,to:n},s={}){const r=getComputedStyle(e),i=r.transform==="none"?"":r.transform,[o,a]=r.transformOrigin.split(" ").map(parseFloat),c=t.left+t.width*o/n.width-(n.left+o),u=t.top+t.height*a/n.height-(n.top+a),{delay:l=0,duration:h=d=>Math.sqrt(d)*120,easing:f=Yi}=s;return{delay:l,duration:Zt(h)?h(Math.sqrt(c*c+u*u)):h,easing:f,css:(d,p)=>{const m=p*c,v=p*u,w=d+p*t.width/n.width,T=d+p*t.height/n.height;return`transform: ${i} translate(${m}px, ${v}px) scale(${w}, ${T});`}}}const _e=[];function il(e,t=N){let n;const s=new Set;function r(a){if(qt(e,a)&&(e=a,n)){const c=!_e.length;for(const u of s)u[1](),_e.push(u,e);if(c){for(let u=0;u<_e.length;u+=2)_e[u][0](_e[u+1]);_e.length=0}}}function i(a){r(a(e))}function o(a,c=N){const u=[a,c];return s.add(u),s.size===1&&(n=t(r)||N),a(e),()=>{s.delete(u),s.size===0&&n&&(n(),n=null)}}return{set:r,update:i,subscribe:o}}const Cg={duration:4e3,initial:1,next:0,pausable:!1,dismissable:!0,reversed:!1,intro:{x:256}},Sg=()=>{const{subscribe:e,update:t}=il([]);let n=0;const s={},r=u=>u instanceof Object;return{subscribe:e,push:(u,l={})=>{const h={target:"default",...r(u)?u:{...l,msg:u}},f=s[h.target]||{},d={...Cg,...f,...h,theme:{...f.theme,...h.theme},classes:[...f.classes||[],...h.classes||[]],id:++n};return t(p=>d.reversed?[...p,d]:[d,...p]),n},pop:u=>{t(l=>{if(!l.length||u===0)return[];if(r(u))return l.filter(f=>u(f));const h=u||Math.max(...l.map(f=>f.id));return l.filter(f=>f.id!==h)})},set:(u,l={})=>{const h=r(u)?{...u}:{...l,id:u};t(f=>{const d=f.findIndex(p=>p.id===h.id);return d>-1&&(f[d]={...f[d],...h}),f})},_init:(u="default",l={})=>(s[u]=l,s)}},kn=Sg();function ca(e){return Object.prototype.toString.call(e)==="[object Date]"}function ti(e,t){if(e===t||e!==e)return()=>e;const n=typeof e;if(n!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const s=t.map((r,i)=>ti(e[i],r));return r=>s.map(i=>i(r))}if(n==="object"){if(!e||!t)throw new Error("Object cannot be null");if(ca(e)&&ca(t)){e=e.getTime(),t=t.getTime();const i=t-e;return o=>new Date(e+o*i)}const s=Object.keys(t),r={};return s.forEach(i=>{r[i]=ti(e[i],t[i])}),i=>{const o={};return s.forEach(a=>{o[a]=r[a](i)}),o}}if(n==="number"){const s=t-e;return r=>e+r*s}throw new Error(`Cannot interpolate ${n} values`)}function kg(e,t={}){const n=il(e);let s,r=e;function i(o,a){if(e==null)return n.set(e=o),Promise.resolve();r=o;let c=s,u=!1,{delay:l=0,duration:h=400,easing:f=de,interpolate:d=ti}=Le(Le({},t),a);if(h===0)return c&&(c.abort(),c=null),n.set(e=r),Promise.resolve();const p=Dn()+l;let m;return s=An(v=>{if(v<p)return!0;u||(m=d(e,o),typeof h=="function"&&(h=h(e,o)),u=!0),c&&(c.abort(),c=null);const w=v-p;return w>h?(n.set(e=o),!1):(n.set(e=m(f(w/h))),!0)}),s.promise}return{set:i,update:(o,a)=>i(o(r,e),a),subscribe:n.subscribe}}function Dg(e){let t,n=e[0].msg+"",s;return{c(){t=new vl(!1),s=Ot(),t.a=s},m(r,i){t.m(n,r,i),U(r,s,i)},p(r,i){i&1&&n!==(n=r[0].msg+"")&&t.p(n)},i:N,o:N,d(r){r&&P(s),r&&t.d()}}}function Ag(e){let t,n,s;const r=[e[2]];var i=e[0].component.src;function o(a){let c={};for(let u=0;u<r.length;u+=1)c=Le(c,r[u]);return{props:c}}return i&&(t=no(i,o())),{c(){t&&Vt(t.$$.fragment),n=Ot()},m(a,c){t&&Dt(t,a,c),U(a,n,c),s=!0},p(a,c){const u=c&4?xl(r,[Pl(a[2])]):{};if(c&1&&i!==(i=a[0].component.src)){if(t){Lt();const l=t;B(l.$$.fragment,1,0,()=>{At(l,1)}),Mt()}i?(t=no(i,o()),Vt(t.$$.fragment),x(t.$$.fragment,1),Dt(t,n.parentNode,n)):t=null}else i&&t.$set(u)},i(a){s||(t&&x(t.$$.fragment,a),s=!0)},o(a){t&&B(t.$$.fragment,a),s=!1},d(a){a&&P(n),t&&At(t,a)}}}function ua(e){let t,n,s;return{c(){t=V("div"),S(t,"class","_toastBtn pe svelte-l65oht"),S(t,"role","button"),S(t,"tabindex","0")},m(r,i){U(r,t,i),n||(s=[Et(t,"click",e[4]),Et(t,"keydown",e[8])],n=!0)},p:N,d(r){r&&P(t),n=!1,bt(s)}}}function Ng(e){let t,n,s,r,i,o,a,c,u,l;const h=[Ag,Dg],f=[];function d(m,v){return m[0].component?0:1}s=d(e),r=f[s]=h[s](e);let p=e[0].dismissable&&ua(e);return{c(){t=V("div"),n=V("div"),r.c(),i=ot(),p&&p.c(),o=ot(),a=V("progress"),S(n,"role","status"),S(n,"class","_toastMsg svelte-l65oht"),Se(n,"pe",e[0].component),S(a,"class","_toastBar svelte-l65oht"),a.value=e[1],S(t,"class","_toastItem svelte-l65oht"),Se(t,"pe",e[0].pausable)},m(m,v){U(m,t,v),F(t,n),f[s].m(n,null),F(t,i),p&&p.m(t,null),F(t,o),F(t,a),c=!0,u||(l=[Et(t,"mouseenter",e[9]),Et(t,"mouseleave",e[6])],u=!0)},p(m,[v]){let w=s;s=d(m),s===w?f[s].p(m,v):(Lt(),B(f[w],1,1,()=>{f[w]=null}),Mt(),r=f[s],r?r.p(m,v):(r=f[s]=h[s](m),r.c()),x(r,1),r.m(n,null)),(!c||v&1)&&Se(n,"pe",m[0].component),m[0].dismissable?p?p.p(m,v):(p=ua(m),p.c(),p.m(t,o)):p&&(p.d(1),p=null),(!c||v&2)&&(a.value=m[1]),(!c||v&1)&&Se(t,"pe",m[0].pausable)},i(m){c||(x(r),c=!0)},o(m){B(r),c=!1},d(m){m&&P(t),f[s].d(),p&&p.d(),u=!1,bt(l)}}}function Rg(e,t,n){let s,{item:r}=t;const i=kg(r.initial,{duration:r.duration,easing:de});_a(e,i,b=>n(1,s=b));const o=()=>kn.pop(r.id),a=()=>{(s===1||s===0)&&o()};let c=r.initial,u=c,l=!1;const h=()=>{!l&&s!==c&&(i.set(s,{duration:0}),l=!0)},f=()=>{if(l){const b=r.duration,L=b-b*((s-u)/(c-u));i.set(c,{duration:L}).then(a),l=!1}};let d={};const p=(b,L="undefined")=>typeof b===L;let m;Il((b=document)=>{if(p(b.hidden))return;const L=()=>b.hidden?h():f(),st="visibilitychange";b.addEventListener(st,L),m=()=>b.removeEventListener(st,L),L()}),Cl(()=>{p(r.onpop,"function")&&r.onpop(r.id),m&&m()});const w=b=>{b instanceof KeyboardEvent&&["Enter"," "].includes(b.key)&&o()},T=()=>{r.pausable&&h()};return e.$$set=b=>{"item"in b&&n(0,r=b.item)},e.$$.update=()=>{if(e.$$.dirty&1&&(p(r.progress)||n(0,r.next=r.progress,r)),e.$$.dirty&131&&c!==r.next&&(n(7,c=r.next),u=s,l=!1,i.set(c).then(a)),e.$$.dirty&1&&r.component){const{props:b={},sendIdTo:L}=r.component;n(2,d={...b,...L&&{[L]:r.id}})}},[r,s,d,i,o,h,f,c,w,T]}class Og extends ze{constructor(t){super(),qe(this,t,Rg,Ng,qt,{item:0})}}function la(e,t,n){const s=e.slice();return s[5]=t[n],s}function ha(e,t){let n,s,r,i,o,a,c,u,l=N,h;return s=new Og({props:{item:t[5]}}),{key:e,first:null,c(){n=V("li"),Vt(s.$$.fragment),r=ot(),S(n,"class",i=to(t[5].classes.join(" "))+" svelte-yh90az"),S(n,"style",o=t[1](t[5].theme)),this.first=n},m(f,d){U(f,n,d),Dt(s,n,null),F(n,r),h=!0},p(f,d){t=f;const p={};d&1&&(p.item=t[5]),s.$set(p),(!h||d&1&&i!==(i=to(t[5].classes.join(" "))+" svelte-yh90az"))&&S(n,"class",i),(!h||d&1&&o!==(o=t[1](t[5].theme)))&&S(n,"style",o)},r(){u=n.getBoundingClientRect()},f(){Tl(n),l(),Ra(n,u)},a(){l(),l=bl(n,u,Ig,{duration:200})},i(f){h||(x(s.$$.fragment,f),Qt(()=>{!h||(c&&c.end(1),a=Nl(n,Tg,t[5].intro),a.start())}),h=!0)},o(f){B(s.$$.fragment,f),a&&a.invalidate(),c=Rl(n,bg,{}),h=!1},d(f){f&&P(n),At(s),f&&c&&c.end()}}}function Lg(e){let t,n=[],s=new Map,r,i=e[0];const o=a=>a[5].id;for(let a=0;a<i.length;a+=1){let c=la(e,i,a),u=o(c);s.set(u,n[a]=ha(u,c))}return{c(){t=V("ul");for(let a=0;a<n.length;a+=1)n[a].c();S(t,"class","_toastContainer svelte-yh90az")},m(a,c){U(a,t,c);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(t,null);r=!0},p(a,[c]){if(c&3){i=a[0],Lt();for(let u=0;u<n.length;u+=1)n[u].r();n=Ml(n,c,o,1,a,i,s,t,Ll,ha,null,la);for(let u=0;u<n.length;u+=1)n[u].a();Mt()}},i(a){if(!r){for(let c=0;c<i.length;c+=1)x(n[c]);r=!0}},o(a){for(let c=0;c<n.length;c+=1)B(n[c]);r=!1},d(a){a&&P(t);for(let c=0;c<n.length;c+=1)n[c].d()}}}function Mg(e,t,n){let s;_a(e,kn,c=>n(4,s=c));let{options:r={}}=t,{target:i="default"}=t,o;const a=c=>Object.keys(c).reduce((u,l)=>`${u}${l}:${c[l]};`,"");return e.$$set=c=>{"options"in c&&n(2,r=c.options),"target"in c&&n(3,i=c.target)},e.$$.update=()=>{e.$$.dirty&12&&kn._init(i,r),e.$$.dirty&24&&n(0,o=s.filter(c=>c.target===i))},[o,a,r,i,s]}class xg extends ze{constructor(t){super(),qe(this,t,Mg,Lg,qt,{options:2,target:3})}}const Pg="modulepreload",Fg=function(e){return"/"+e},fa={},Ee=function(t,n,s){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Fg(i),i in fa)return;fa[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let l=r.length-1;l>=0;l--){const h=r[l];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Pg,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};function Vg(e){let t,n,s,r={ctx:e,current:null,token:null,hasCatch:!1,pending:Hg,then:$g,catch:Bg,blocks:[,,,]};return os(n=e[6](),r),{c(){t=Ot(),r.block.c()},m(i,o){U(i,t,o),r.block.m(i,r.anchor=o),r.mount=()=>t.parentNode,r.anchor=t,s=!0},p(i,o){e=i,r.ctx=e,o&64&&n!==(n=e[6]())&&os(n,r)||Oa(r,e,o)},i(i){s||(x(r.block),s=!0)},o(i){for(let o=0;o<3;o+=1){const a=r.blocks[o];B(a)}s=!1},d(i){i&&P(t),r.block.d(i),r.token=null,r=null}}}function Ug(e){let t,n;const s=e[24].default,r=Ea(s,e,e[23],null);return{c(){t=V("div"),r&&r.c(),S(t,"class","typewriter-container svelte-1gv2i7t")},m(i,o){U(i,t,o),r&&r.m(t,null),n=!0},p(i,o){r&&r.p&&(!n||o&8388608)&&Ia(r,s,i,i[23],n?Ta(s,i[23],o,null):Ca(i[23]),null)},i(i){n||(x(r,i),n=!0)},o(i){B(r,i),n=!1},d(i){i&&P(t),r&&r.d(i)}}}function Bg(e){return{c:N,m:N,p:N,i:N,o:N,d:N}}function $g(e){let t,n,s,r={ctx:e,current:null,token:null,hasCatch:!1,pending:zg,then:qg,catch:jg,value:25,blocks:[,,,]};return os(n=e[7][e[0]](),r),{c(){t=Ot(),r.block.c()},m(i,o){U(i,t,o),r.block.m(i,r.anchor=o),r.mount=()=>t.parentNode,r.anchor=t,s=!0},p(i,o){e=i,r.ctx=e,o&1&&n!==(n=e[7][e[0]]())&&os(n,r)||Oa(r,e,o)},i(i){s||(x(r.block),s=!0)},o(i){for(let o=0;o<3;o+=1){const a=r.blocks[o];B(a)}s=!1},d(i){i&&P(t),r.block.d(i),r.token=null,r=null}}}function jg(e){return{c:N,m:N,p:N,i:N,o:N,d:N}}function qg(e){let t=e[4],n,s,r=e[4]&&br(e);return{c(){r&&r.c(),n=Ot()},m(i,o){r&&r.m(i,o),U(i,n,o),s=!0},p(i,o){i[4]?t?qt(t,i[4])?(r.d(1),r=br(i),t=i[4],r.c(),r.m(n.parentNode,n)):r.p(i,o):(r=br(i),t=i[4],r.c(),r.m(n.parentNode,n)):t&&(r.d(1),r=null,t=i[4])},i(i){s||(x(r),s=!0)},o(i){B(r),s=!1},d(i){i&&P(n),r&&r.d(i)}}}function br(e){let t,n,s,r,i;const o=e[24].default,a=Ea(o,e,e[23],null);return{c(){t=V(e[4]),a&&a.c(),gl(e[4])(t,{class:"typewriter-container svelte-1gv2i7t"}),Se(t,"cursor",e[1])},m(c,u){U(c,t,u),a&&a.m(t,null),s=!0,r||(i=Sa(n=e[25].default(t,e[5])),r=!0)},p(c,u){a&&a.p&&(!s||u&8388608)&&Ia(a,o,c,c[23],s?Ta(o,c[23],u,null):Ca(c[23]),null),n&&Zt(n.update)&&u&32&&n.update.call(null,c[5]),(!s||u&2)&&Se(t,"cursor",c[1])},i(c){s||(x(a,c),s=!0)},o(c){B(a,c),s=!1},d(c){c&&P(t),a&&a.d(c),r=!1,i()}}}function zg(e){return{c:N,m:N,p:N,i:N,o:N,d:N}}function Hg(e){let t,n=e[2]&&da();return{c(){n&&n.c(),t=Ot()},m(s,r){n&&n.m(s,r),U(s,t,r)},p(s,r){s[2]?n||(n=da(),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:N,o:N,d(s){n&&n.d(s),s&&P(t)}}}function da(e){let t;return{c(){t=V("div"),t.innerHTML='<p class="typing"></p>',S(t,"class","typewriter-container cursor svelte-1gv2i7t")},m(n,s){U(n,t,s)},d(n){n&&P(t)}}}function pa(e){let t,n,s,r;const i=[Ug,Vg],o=[];function a(c,u){return c[3]?0:1}return t=a(e),n=o[t]=i[t](e),{c(){n.c(),s=Ot()},m(c,u){o[t].m(c,u),U(c,s,u),r=!0},p(c,u){let l=t;t=a(c),t===l?o[t].p(c,u):(Lt(),B(o[l],1,1,()=>{o[l]=null}),Mt(),n=o[t],n?n.p(c,u):(n=o[t]=i[t](c),n.c()),x(n,1),n.m(s.parentNode,s))},i(c){r||(x(n),r=!0)},o(c){B(n),r=!1},d(c){o[t].d(c),c&&P(s)}}}function Kg(e){let t,n=e[8],s,r,i=pa(e);return{c(){t=ot(),i.c(),s=Ot()},m(o,a){U(o,t,a),i.m(o,a),U(o,s,a),r=!0},p(o,[a]){a&256&&qt(n,n=o[8])?(Lt(),B(i,1,1,N),Mt(),i=pa(o),i.c(),x(i,1),i.m(s.parentNode,s)):i.p(o,a)},i(o){r||(x(i),r=!0)},o(o){B(i),r=!1},d(o){o&&P(t),o&&P(s),i.d(o)}}}function Gg(e,t,n){let s,r,i,o,a,c,u,l,h,{$$slots:f={},$$scope:d}=t,{mode:p="concurrent"}=t,{interval:m=30}=t,{cursor:v=!0}=t,{keepCursorOnFinish:w=!1}=t,{delay:T=0}=t,{showCursorOnDelay:b=!1}=t,{disabled:L=!1}=t,{element:st="div"}=t,{scrambleDuration:It=3e3}=t,{scrambleSlowdown:H=!0}=t,{unwriteInterval:rt=30}=t,{wordInterval:yt=1500}=t;const ve={concurrent:()=>Ee(()=>import("./concurrent.5a90255b.js"),["assets/concurrent.5a90255b.js","assets/writeEffect.35eef34a.js","assets/animationSetup.55270200.js"]),cascade:()=>Ee(()=>import("./cascade.dbfd3b4c.js"),["assets/cascade.dbfd3b4c.js","assets/writeEffect.35eef34a.js","assets/animationSetup.55270200.js"]),loop:()=>Ee(()=>import("./loop.a8076811.js"),["assets/loop.a8076811.js","assets/writeAndUnwriteText.598bd20b.js","assets/writeEffect.35eef34a.js","assets/animationSetup.55270200.js","assets/unwriteEffect.f21adb41.js"]),loopOnce:()=>Ee(()=>import("./loopOnce.b38c3d5b.js"),["assets/loopOnce.b38c3d5b.js","assets/animationSetup.55270200.js","assets/writeEffect.35eef34a.js","assets/unwriteEffect.f21adb41.js"]),loopRandom:()=>Ee(()=>import("./loopRandom.c91daa42.js"),["assets/loopRandom.c91daa42.js","assets/writeAndUnwriteText.598bd20b.js","assets/writeEffect.35eef34a.js","assets/animationSetup.55270200.js","assets/unwriteEffect.f21adb41.js"]),scramble:()=>Ee(()=>import("./scramble.5aff4f2d.js"),["assets/scramble.5aff4f2d.js","assets/animationSetup.55270200.js"])};return e.$$set=q=>{n(8,t=Le(Le({},t),Zi(q))),"mode"in q&&n(0,p=q.mode),"interval"in q&&n(9,m=q.interval),"cursor"in q&&n(1,v=q.cursor),"keepCursorOnFinish"in q&&n(10,w=q.keepCursorOnFinish),"delay"in q&&n(11,T=q.delay),"showCursorOnDelay"in q&&n(2,b=q.showCursorOnDelay),"disabled"in q&&n(3,L=q.disabled),"element"in q&&n(4,st=q.element),"scrambleDuration"in q&&n(12,It=q.scrambleDuration),"scrambleSlowdown"in q&&n(13,H=q.scrambleSlowdown),"unwriteInterval"in q&&n(14,rt=q.unwriteInterval),"wordInterval"in q&&n(15,yt=q.wordInterval),"$$scope"in q&&n(23,d=q.$$scope)},e.$$.update=()=>{e.$$.dirty&1&&n(21,s=/^loop(Once|Random)?$/.test(p)),e.$$.dirty&1&&n(22,r=["concurrent","cascade","loopOnce"].includes(p)),e.$$.dirty&4195328&&n(20,i=!r&&w),e.$$.dirty&2052&&n(19,o=T<1&&b),n(18,a=!s&&(t.unwriteInterval||t.wordInterval)),n(17,c=p!=="scramble"&&(t.scrambleDuration||t.scrambleSlowdown)),e.$$.dirty&1024&&n(16,u=typeof w=="number"&&w<1),e.$$.dirty&1048576&&i&&console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' is compatible only with finite modes"),e.$$.dirty&524288&&o&&console.warn("[svelte-typewriter] The prop 'showCursorOnDelay' has no effect if the delay is 0"),e.$$.dirty&262144&&a&&console.warn("[svelte-typewriter] The props 'unwriteInterval' and 'wordInterval' are only compatible with loop modes"),e.$$.dirty&131072&&c&&console.warn("[svelte-typewriter] The props 'scrambleDuration' and 'scrambleSlowdown' are only compatible with scramble mode"),e.$$.dirty&65536&&u&&console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' has no effect with values lower than 1"),e.$$.dirty&2048&&n(6,l=()=>new Promise(q=>setTimeout(()=>q(T),T))),e.$$.dirty&65054&&n(5,h={interval:m,cursor:v,keepCursorOnFinish:w,delay:T,showCursorOnDelay:b,disabled:L,element:st,scrambleDuration:It,scrambleSlowdown:H,unwriteInterval:rt,wordInterval:yt})},t=Zi(t),[p,v,b,L,st,h,l,ve,t,m,w,T,It,H,rt,yt,u,c,a,o,i,s,r,d,f]}class Xi extends ze{constructor(t){super(),qe(this,t,Gg,Kg,qt,{mode:0,interval:9,cursor:1,keepCursorOnFinish:10,delay:11,showCursorOnDelay:2,disabled:3,element:4,scrambleDuration:12,scrambleSlowdown:13,unwriteInterval:14,wordInterval:15})}}function Qg(e){const t=n=>{e&&!e.contains(n.target)&&!n.defaultPrevented&&e.dispatchEvent(new CustomEvent("click_outside",e))};return document.addEventListener("click",t,!0),{destroy(){document.removeEventListener("click",t,!0)}}}function ma(e,t,n){const s=e.slice();return s[8]=t[n],s}function ga(e){let t,n,s,r,i,o,a,c,u,l=e[0],h=[];for(let f=0;f<l.length;f+=1)h[f]=ya(ma(e,l,f));return{c(){t=V("table"),n=V("caption"),n.textContent="Leaderboard",s=ot(),r=V("tr"),r.innerHTML=`<th class="svelte-1p7eiwr">Author</th> 
            <th class="svelte-1p7eiwr">Quote Count</th>`,i=ot();for(let f=0;f<h.length;f+=1)h[f].c();S(n,"class","svelte-1p7eiwr"),S(r,"class","svelte-1p7eiwr"),S(t,"class","leaderboard svelte-1p7eiwr")},m(f,d){U(f,t,d),F(t,n),F(t,s),F(t,r),F(t,i);for(let p=0;p<h.length;p+=1)h[p]&&h[p].m(t,null);a=!0,c||(u=[Sa(Qg.call(null,t)),Et(t,"click_outside",e[3])],c=!0)},p(f,d){if(e=f,d&1){l=e[0];let p;for(p=0;p<l.length;p+=1){const m=ma(e,l,p);h[p]?h[p].p(m,d):(h[p]=ya(m),h[p].c(),h[p].m(t,null))}for(;p<h.length;p+=1)h[p].d(1);h.length=l.length}},i(f){a||(Qt(()=>{!a||(o||(o=ro(t,aa,{duration:250,opacity:.5,easing:oa},!0)),o.run(1))}),a=!0)},o(f){o||(o=ro(t,aa,{duration:250,opacity:.5,easing:oa},!1)),o.run(0),a=!1},d(f){f&&P(t),hl(h,f),f&&o&&o.end(),c=!1,bt(u)}}}function ya(e){let t,n,s=e[8].author+"",r,i,o,a=e[8].count+"",c,u;return{c(){t=V("tr"),n=V("td"),r=ue(s),i=ot(),o=V("td"),c=ue(a),u=ot(),S(n,"class","svelte-1p7eiwr"),S(o,"class","svelte-1p7eiwr"),S(t,"class","svelte-1p7eiwr")},m(l,h){U(l,t,h),F(t,n),F(n,r),F(t,i),F(t,o),F(o,c),F(t,u)},p(l,h){h&1&&s!==(s=l[8].author+"")&&un(r,s),h&1&&a!==(a=l[8].count+"")&&un(c,a)},d(l){l&&P(t)}}}function Wg(e){let t,n,s,r,i,o,a=e[1]&&ga(e);return{c(){t=V("div"),t.innerHTML='<img src="https://cdn-icons-png.flaticon.com/512/4489/4489655.png" alt="Leaderboard button" class="svelte-1p7eiwr"/>',n=ot(),a&&a.c(),s=Ot(),S(t,"class","icon svelte-1p7eiwr")},m(c,u){U(c,t,u),e[6](t),U(c,n,u),a&&a.m(c,u),U(c,s,u),r=!0,i||(o=Et(t,"click",e[3]),i=!0)},p(c,[u]){c[1]?a?(a.p(c,u),u&2&&x(a,1)):(a=ga(c),a.c(),x(a,1),a.m(s.parentNode,s)):a&&(Lt(),B(a,1,1,()=>{a=null}),Mt())},i(c){r||(x(a),r=!0)},o(c){B(a),r=!1},d(c){c&&P(t),e[6](null),c&&P(n),a&&a.d(c),c&&P(s),i=!1,o()}}}function Yg(e,t,n){let{stringList:s=[]}=t;const r={Matthew:"Cube",Alistair:"Ali","Maximilian Joseph Williamson III":"Max",Grant:"Hendo",Dov:"David"};let i,o,a=!1,c;function u(){n(1,a=!a),a?n(2,c.style["pointer-events"]="none",c):n(2,c.style["pointer-events"]="all",c)}function l(h){Tr[h?"unshift":"push"](()=>{c=h,n(2,c)})}return e.$$set=h=>{"stringList"in h&&n(4,s=h.stringList)},e.$$.update=()=>{e.$$.dirty&16&&n(5,i=s.reduce((h,{author:f})=>((f.includes(" & ")?f.split(" & "):[f]).forEach(p=>{const m=r[p]||p;h[m]=(h[m]||0)+1}),h),{})),e.$$.dirty&32&&n(0,o=Object.entries(i).map(([h,f])=>({author:h,count:f})).sort((h,f)=>f.count-h.count))},[o,a,c,u,s,i,l]}class Xg extends ze{constructor(t){super(),qe(this,t,Yg,Wg,qt,{stringList:4})}}function va(e){let t,n,s,r,i,o;t=new Xi({props:{mode:"concurrent",keepCursorOnFinish:!0,$$slots:{default:[Jg]},$$scope:{ctx:e}}});const a=[ty,Zg],c=[];function u(l,h){return l[1]?0:1}return s=u(e),r=c[s]=a[s](e),{c(){Vt(t.$$.fragment),n=ot(),r.c(),i=Ot()},m(l,h){Dt(t,l,h),U(l,n,h),c[s].m(l,h),U(l,i,h),o=!0},p(l,h){const f={};h&8208&&(f.$$scope={dirty:h,ctx:l}),t.$set(f);let d=s;s=u(l),s===d?c[s].p(l,h):(Lt(),B(c[d],1,1,()=>{c[d]=null}),Mt(),r=c[s],r?r.p(l,h):(r=c[s]=a[s](l),r.c()),x(r,1),r.m(i.parentNode,i))},i(l){o||(x(t.$$.fragment,l),x(r),o=!0)},o(l){B(t.$$.fragment,l),B(r),o=!1},d(l){At(t,l),l&&P(n),c[s].d(l),l&&P(i)}}}function Jg(e){let t,n=e[4].quote+"",s;return{c(){t=V("h1"),s=ue(n),S(t,"class","random-text svelte-1fkk7go")},m(r,i){U(r,t,i),F(t,s)},p(r,i){i&16&&n!==(n=r[4].quote+"")&&un(s,n)},d(r){r&&P(t)}}}function Zg(e){let t,n;return t=new Xi({props:{mode:"concurrent",cursor:!1,$$slots:{default:[ey]},$$scope:{ctx:e}}}),{c(){Vt(t.$$.fragment)},m(s,r){Dt(t,s,r),n=!0},p(s,r){const i={};r&8208&&(i.$$scope={dirty:r,ctx:s}),t.$set(i)},i(s){n||(x(t.$$.fragment,s),n=!0)},o(s){B(t.$$.fragment,s),n=!1},d(s){At(t,s)}}}function ty(e){let t,n;return t=new Xi({props:{mode:"concurrent",cursor:!1,$$slots:{default:[ny]},$$scope:{ctx:e}}}),{c(){Vt(t.$$.fragment)},m(s,r){Dt(t,s,r),n=!0},p(s,r){const i={};r&8210&&(i.$$scope={dirty:r,ctx:s}),t.$set(i)},i(s){n||(x(t.$$.fragment,s),n=!0)},o(s){B(t.$$.fragment,s),n=!1},d(s){At(t,s)}}}function ey(e){let t,n=e[4].author+"",s;return{c(){t=V("h1"),s=ue(n),S(t,"class","random-text svelte-1fkk7go")},m(r,i){U(r,t,i),F(t,s)},p(r,i){i&16&&n!==(n=r[4].author+"")&&un(s,n)},d(r){r&&P(t)}}}function ny(e){let t,n=e[4].author==""?"":"Click to Reveal",s,r,i;return{c(){t=V("h1"),s=ue(n),S(t,"id","spoiler-author"),S(t,"class","random-text svelte-1fkk7go")},m(o,a){U(o,t,a),F(t,s),r||(i=Et(t,"click",e[7]),r=!0)},p(o,a){a&16&&n!==(n=o[4].author==""?"":"Click to Reveal")&&un(s,n)},d(o){o&&P(t),r=!1,i()}}}function sy(e){let t,n,s,r,i,o,a,c,u,l,h,f,d,p,m,v;t=new Xg({props:{stringList:e[0]}});let w=typeof e[4]<"u"&&va(e);return{c(){Vt(t.$$.fragment),n=ot(),s=V("div"),r=V("div"),i=V("div"),w&&w.c(),o=ot(),a=V("button"),a.textContent="Load Random Quote",c=ot(),u=V("input"),l=ot(),h=V("input"),f=ot(),d=V("button"),d.textContent="Add Quote",S(i,"class","typewriter-block svelte-1fkk7go"),S(a,"class","random-button load-quote svelte-1fkk7go"),S(u,"id","new-quote-input"),S(u,"type","text"),S(u,"placeholder","Submit a new quote here"),S(u,"class","svelte-1fkk7go"),S(h,"id","new-quote-input-author"),S(h,"type","text"),S(h,"placeholder","Write quote author here. If multiple, separate with &"),S(h,"class","svelte-1fkk7go"),S(d,"class","random-button svelte-1fkk7go"),S(r,"class","heading svelte-1fkk7go"),S(s,"class","quote_container svelte-1fkk7go")},m(T,b){Dt(t,T,b),U(T,n,b),U(T,s,b),F(s,r),F(r,i),w&&w.m(i,null),F(r,o),F(r,a),F(r,c),F(r,u),Ce(u,e[2]),F(r,l),F(r,h),Ce(h,e[3]),F(r,f),F(r,d),p=!0,m||(v=[Et(a,"click",e[5]),Et(u,"input",e[8]),Et(h,"input",e[9]),Et(d,"click",e[6])],m=!0)},p(T,[b]){const L={};b&1&&(L.stringList=T[0]),t.$set(L),typeof T[4]<"u"?w?(w.p(T,b),b&16&&x(w,1)):(w=va(T),w.c(),x(w,1),w.m(i,null)):w&&(Lt(),B(w,1,1,()=>{w=null}),Mt()),b&4&&u.value!==T[2]&&Ce(u,T[2]),b&8&&h.value!==T[3]&&Ce(h,T[3])},i(T){p||(x(t.$$.fragment,T),x(w),p=!0)},o(T){B(t.$$.fragment,T),B(w),p=!1},d(T){At(t,T),T&&P(n),T&&P(s),w&&w.d(),m=!1,bt(v)}}}function ry(e,t,n){let s=[];const r=Ym(Eg,"quotes","quote_list");gg(r,m=>{n(0,s=m.data().quote_list)});let i=!0,o="",a="",c={quote:"",author:""},u=-1;async function l(){if(n(1,i=!0),s.length===0){const m=await pg(r);n(0,s=m.data().quote_list)}u=Math.floor(Math.random()*s.length),n(4,c=s[u]),n(4,c.quote+=" ",c),s.splice(u,1)}async function h(){if(o!=""&&a!=""){let m={quote:o.trim(),author:a.trim()};kn.push("Submitting quote..."),await mg(r,{quote_list:vg(m)}).then(()=>{kn.push("Quote submitted!"),n(2,o=""),n(3,a="")})}}const f=()=>n(1,i=!1);function d(){o=this.value,n(2,o)}function p(){a=this.value,n(3,a)}return[s,i,o,a,c,l,h,f,d,p]}class iy extends ze{constructor(t){super(),qe(this,t,ry,sy,qt,{})}}function oy(e){let t,n,s,r,i,o;return{c(){t=V("div"),n=V("label"),n.textContent="Password:",s=ot(),r=V("input"),S(n,"for","password"),S(n,"class","svelte-1hfjgsa"),S(r,"id","password"),S(r,"type","password"),S(r,"class","svelte-1hfjgsa"),S(t,"id","password-container"),S(t,"class","svelte-1hfjgsa")},m(a,c){U(a,t,c),F(t,n),F(t,s),F(t,r),Ce(r,e[0]),i||(o=Et(r,"input",e[2]),i=!0)},p(a,c){c&1&&r.value!==a[0]&&Ce(r,a[0])},i:N,o:N,d(a){a&&P(t),i=!1,o()}}}function ay(e){let t,n;return t=new iy({}),{c(){Vt(t.$$.fragment)},m(s,r){Dt(t,s,r),n=!0},p:N,i(s){n||(x(t.$$.fragment,s),n=!0)},o(s){B(t.$$.fragment,s),n=!1},d(s){At(t,s)}}}function cy(e){let t,n,s,r,i,o;const a=[ay,oy],c=[];function u(l,h){return h&1&&(t=null),t==null&&(t=l[1](l[0])===1252560117),t?0:1}return n=u(e,-1),s=c[n]=a[n](e),i=new xg({}),{c(){s.c(),r=ot(),Vt(i.$$.fragment)},m(l,h){c[n].m(l,h),U(l,r,h),Dt(i,l,h),o=!0},p(l,[h]){let f=n;n=u(l,h),n===f?c[n].p(l,h):(Lt(),B(c[f],1,1,()=>{c[f]=null}),Mt(),s=c[n],s?s.p(l,h):(s=c[n]=a[n](l),s.c()),x(s,1),s.m(r.parentNode,r))},i(l){o||(x(s),x(i.$$.fragment,l),o=!0)},o(l){B(s),B(i.$$.fragment,l),o=!1},d(l){c[n].d(l),l&&P(r),At(i,l)}}}function uy(e,t,n){let s="";const r=o=>o.split("").reduce((a,c)=>(a=(a<<5)-a+c.charCodeAt(0),a&a),0);function i(){s=this.value,n(0,s)}return[s,r,i]}class ly extends ze{constructor(t){super(),qe(this,t,uy,cy,qt,{})}}new ly({target:document.getElementById("app")});export{hy as c};
