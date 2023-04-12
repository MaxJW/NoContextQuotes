(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function R(){}const fe=e=>e;function ae(e,t){for(const n in t)e[n]=t[n];return e}function Gu(e){return!!e&&(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"}function la(e){return e()}function ji(){return Object.create(null)}function Nt(e){e.forEach(la)}function Xt(e){return typeof e=="function"}function Ut(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Qu(e){return Object.keys(e).length===0}function Wu(e,...t){if(e==null)return R;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function ha(e,t,n){e.$$.on_destroy.push(Wu(t,n))}function fa(e,t,n,s){if(e){const r=da(e,t,n,s);return e[0](r)}}function da(e,t,n,s){return e[1]&&s?ae(n.ctx.slice(),e[1](s(t))):n.ctx}function pa(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const i=[],o=Math.max(t.dirty.length,r.length);for(let a=0;a<o;a+=1)i[a]=t.dirty[a]|r[a];return i}return t.dirty|r}return t.dirty}function ma(e,t,n,s,r,i){if(r){const o=da(t,n,s,i);e.p(o,r)}}function ga(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let s=0;s<n;s++)t[s]=-1;return t}return-1}function Hi(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function Ki(e){return e==null?"":e}function Xu(e){return e&&Xt(e.destroy)?e.destroy:R}const ya=typeof window<"u";let In=ya?()=>window.performance.now():()=>Date.now(),zr=ya?e=>requestAnimationFrame(e):R;const Se=new Set;function va(e){Se.forEach(t=>{t.c(e)||(Se.delete(t),t.f())}),Se.size!==0&&zr(va)}function Cn(e){let t;return Se.size===0&&zr(va),{promise:new Promise(n=>{Se.add(t={c:e,f:n})}),abort(){Se.delete(t)}}}function F(e,t){e.appendChild(t)}function wa(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Yu(e){const t=q("style");return Ju(wa(e),t),t.sheet}function Ju(e,t){return F(e.head||e,t),t.sheet}function H(e,t,n){e.insertBefore(t,n||null)}function U(e){e.parentNode&&e.parentNode.removeChild(e)}function Zu(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function q(e){return document.createElement(e)}function tl(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function ce(e){return document.createTextNode(e)}function at(){return ce(" ")}function Bt(){return ce("")}function Et(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function C(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function zi(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const s in t)t[s]==null?e.removeAttribute(s):s==="style"?e.style.cssText=t[s]:s==="__value"?e.value=e[s]=t[s]:n[s]&&n[s].set?e[s]=t[s]:C(e,s,t[s])}function Gi(e,t){Object.keys(t).forEach(n=>{el(e,n,t[n])})}function el(e,t,n){t in e?e[t]=typeof e[t]=="boolean"&&n===""?!0:n:C(e,t,n)}function nl(e){return Array.from(e.childNodes)}function on(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Te(e,t){e.value=t==null?"":t}function Ie(e,t,n){e.classList[n?"add":"remove"](t)}function _a(e,t,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,s,t),r}class sl{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,s=null){this.e||(this.is_svg?this.e=tl(n.nodeName):this.e=q(n.nodeName),this.t=n,this.c(t)),this.i(s)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)H(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(U)}}function Qi(e,t){return new e(t)}const ts=new Map;let es=0;function rl(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function il(e,t){const n={stylesheet:Yu(t),rules:{}};return ts.set(e,n),n}function an(e,t,n,s,r,i,o,a=0){const c=16.666/s;let u=`{
`;for(let v=0;v<=1;v+=c){const _=t+(n-t)*i(v);u+=v*100+`%{${o(_,1-_)}}
`}const l=u+`100% {${o(n,1-n)}}
}`,h=`__svelte_${rl(l)}_${a}`,f=wa(e),{stylesheet:d,rules:p}=ts.get(f)||il(f,e);p[h]||(p[h]=!0,d.insertRule(`@keyframes ${h} ${l}`,d.cssRules.length));const m=e.style.animation||"";return e.style.animation=`${m?`${m}, `:""}${h} ${s}ms linear ${r}ms 1 both`,es+=1,h}function cn(e,t){const n=(e.style.animation||"").split(", "),s=n.filter(t?i=>i.indexOf(t)<0:i=>i.indexOf("__svelte")===-1),r=n.length-s.length;r&&(e.style.animation=s.join(", "),es-=r,es||ol())}function ol(){zr(()=>{es||(ts.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&U(t)}),ts.clear())})}function al(e,t,n,s){if(!t)return R;const r=e.getBoundingClientRect();if(t.left===r.left&&t.right===r.right&&t.top===r.top&&t.bottom===r.bottom)return R;const{delay:i=0,duration:o=300,easing:a=fe,start:c=In()+i,end:u=c+o,tick:l=R,css:h}=n(e,{from:t,to:r},s);let f=!0,d=!1,p;function m(){h&&(p=an(e,0,1,o,i,a,h)),i||(d=!0)}function v(){h&&cn(e,p),f=!1}return Cn(_=>{if(!d&&_>=c&&(d=!0),d&&_>=u&&(l(1,0),v()),!f)return!1;if(d){const A=_-c,I=0+1*a(A/o);l(I,1-I)}return!0}),m(),l(0,1),v}function cl(e){const t=getComputedStyle(e);if(t.position!=="absolute"&&t.position!=="fixed"){const{width:n,height:s}=t,r=e.getBoundingClientRect();e.style.position="absolute",e.style.width=n,e.style.height=s,Ea(e,r)}}function Ea(e,t){const n=e.getBoundingClientRect();if(t.left!==n.left||t.top!==n.top){const s=getComputedStyle(e),r=s.transform==="none"?"":s.transform;e.style.transform=`${r} translate(${t.left-n.left}px, ${t.top-n.top}px)`}}let un;function Rt(e){un=e}function bs(){if(!un)throw new Error("Function called outside component initialization");return un}function ul(e){bs().$$.on_mount.push(e)}function ll(e){bs().$$.on_destroy.push(e)}function Xg(){const e=bs();return(t,n,{cancelable:s=!1}={})=>{const r=e.$$.callbacks[t];if(r){const i=_a(t,n,{cancelable:s});return r.slice().forEach(o=>{o.call(e,i)}),!i.defaultPrevented}return!0}}const _e=[],Wi=[],Qn=[],Xi=[],hl=Promise.resolve();let mr=!1;function fl(){mr||(mr=!0,hl.then(Gr))}function Kt(e){Qn.push(e)}const Zs=new Set;let ye=0;function Gr(){if(ye!==0)return;const e=un;do{try{for(;ye<_e.length;){const t=_e[ye];ye++,Rt(t),dl(t.$$)}}catch(t){throw _e.length=0,ye=0,t}for(Rt(null),_e.length=0,ye=0;Wi.length;)Wi.pop()();for(let t=0;t<Qn.length;t+=1){const n=Qn[t];Zs.has(n)||(Zs.add(n),n())}Qn.length=0}while(_e.length);for(;Xi.length;)Xi.pop()();mr=!1,Zs.clear(),Rt(e)}function dl(e){if(e.fragment!==null){e.update(),Nt(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Kt)}}let Qe;function Qr(){return Qe||(Qe=Promise.resolve(),Qe.then(()=>{Qe=null})),Qe}function se(e,t,n){e.dispatchEvent(_a(`${t?"intro":"outro"}${n}`))}const Wn=new Set;let It;function $t(){It={r:0,c:[],p:It}}function qt(){It.r||Nt(It.c),It=It.p}function V(e,t){e&&e.i&&(Wn.delete(e),e.i(t))}function j(e,t,n,s){if(e&&e.o){if(Wn.has(e))return;Wn.add(e),It.c.push(()=>{Wn.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}const Wr={duration:0};function pl(e,t,n){const s={direction:"in"};let r=t(e,n,s),i=!1,o,a,c=0;function u(){o&&cn(e,o)}function l(){const{delay:f=0,duration:d=300,easing:p=fe,tick:m=R,css:v}=r||Wr;v&&(o=an(e,0,1,d,f,p,v,c++)),m(0,1);const _=In()+f,A=_+d;a&&a.abort(),i=!0,Kt(()=>se(e,!0,"start")),a=Cn(I=>{if(i){if(I>=A)return m(1,0),se(e,!0,"end"),u(),i=!1;if(I>=_){const x=p((I-_)/d);m(x,1-x)}}return i})}let h=!1;return{start(){h||(h=!0,cn(e),Xt(r)?(r=r(s),Qr().then(l)):l())},invalidate(){h=!1},end(){i&&(u(),i=!1)}}}function ml(e,t,n){const s={direction:"out"};let r=t(e,n,s),i=!0,o;const a=It;a.r+=1;function c(){const{delay:u=0,duration:l=300,easing:h=fe,tick:f=R,css:d}=r||Wr;d&&(o=an(e,1,0,l,u,h,d));const p=In()+u,m=p+l;Kt(()=>se(e,!1,"start")),Cn(v=>{if(i){if(v>=m)return f(0,1),se(e,!1,"end"),--a.r||Nt(a.c),!1;if(v>=p){const _=h((v-p)/l);f(1-_,_)}}return i})}return Xt(r)?Qr().then(()=>{r=r(s),c()}):c(),{end(u){u&&r.tick&&r.tick(1,0),i&&(o&&cn(e,o),i=!1)}}}function Yi(e,t,n,s){const r={direction:"both"};let i=t(e,n,r),o=s?0:1,a=null,c=null,u=null;function l(){u&&cn(e,u)}function h(d,p){const m=d.b-o;return p*=Math.abs(m),{a:o,b:d.b,d:m,duration:p,start:d.start,end:d.start+p,group:d.group}}function f(d){const{delay:p=0,duration:m=300,easing:v=fe,tick:_=R,css:A}=i||Wr,I={start:In()+p,b:d};d||(I.group=It,It.r+=1),a||c?c=I:(A&&(l(),u=an(e,o,d,m,p,v,A)),d&&_(0,1),a=h(I,m),Kt(()=>se(e,d,"start")),Cn(x=>{if(c&&x>c.start&&(a=h(c,m),c=null,se(e,a.b,"start"),A&&(l(),u=an(e,o,a.b,a.duration,0,v,i.css))),a){if(x>=a.end)_(o=a.b,1-o),se(e,a.b,"end"),c||(a.b?l():--a.group.r||Nt(a.group.c)),a=null;else if(x>=a.start){const G=x-a.start;o=a.a+a.d*v(G/a.duration),_(o,1-o)}}return!!(a||c)}))}return{run(d){Xt(i)?Qr().then(()=>{i=i(r),f(d)}):f(d)},end(){l(),a=c=null}}}function ns(e,t){const n=t.token={};function s(r,i,o,a){if(t.token!==n)return;t.resolved=a;let c=t.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const u=r&&(t.current=r)(c);let l=!1;t.block&&(t.blocks?t.blocks.forEach((h,f)=>{f!==i&&h&&($t(),j(h,1,1,()=>{t.blocks[f]===h&&(t.blocks[f]=null)}),qt())}):t.block.d(1),u.c(),V(u,1),u.m(t.mount(),t.anchor),l=!0),t.block=u,t.blocks&&(t.blocks[i]=u),l&&Gr()}if(Gu(e)){const r=bs();if(e.then(i=>{Rt(r),s(t.then,1,t.value,i),Rt(null)},i=>{if(Rt(r),s(t.catch,2,t.error,i),Rt(null),!t.hasCatch)throw i}),t.current!==t.pending)return s(t.pending,0),!0}else{if(t.current!==t.then)return s(t.then,1,t.value,e),!0;t.resolved=e}}function ba(e,t,n){const s=t.slice(),{resolved:r}=e;e.current===e.then&&(s[e.value]=r),e.current===e.catch&&(s[e.error]=r),e.block.p(s,n)}function gl(e,t){j(e,1,1,()=>{t.delete(e.key)})}function yl(e,t){e.f(),gl(e,t)}function vl(e,t,n,s,r,i,o,a,c,u,l,h){let f=e.length,d=i.length,p=f;const m={};for(;p--;)m[e[p].key]=p;const v=[],_=new Map,A=new Map;for(p=d;p--;){const K=h(r,i,p),D=n(K);let z=o.get(D);z?s&&z.p(K,t):(z=u(D,K),z.c()),_.set(D,v[p]=z),D in m&&A.set(D,Math.abs(p-m[D]))}const I=new Set,x=new Set;function G(K){V(K,1),K.m(a,l),o.set(K.key,K),l=K.first,d--}for(;f&&d;){const K=v[d-1],D=e[f-1],z=K.key,_t=D.key;K===D?(l=K.first,f--,d--):_.has(_t)?!o.has(z)||I.has(z)?G(K):x.has(_t)?f--:A.get(z)>A.get(_t)?(x.add(z),G(K)):(I.add(_t),f--):(c(D,o),f--)}for(;f--;){const K=e[f];_.has(K.key)||c(K,o)}for(;d;)G(v[d-1]);return v}function Ta(e,t){const n={},s={},r={$$scope:1};let i=e.length;for(;i--;){const o=e[i],a=t[i];if(a){for(const c in o)c in a||(s[c]=1);for(const c in a)r[c]||(n[c]=a[c],r[c]=1);e[i]=a}else for(const c in o)r[c]=1}for(const o in s)o in n||(n[o]=void 0);return n}function wl(e){return typeof e=="object"&&e!==null?e:{}}function xt(e){e&&e.c()}function St(e,t,n,s){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),s||Kt(()=>{const o=e.$$.on_mount.map(la).filter(Xt);e.$$.on_destroy?e.$$.on_destroy.push(...o):Nt(o),e.$$.on_mount=[]}),i.forEach(Kt)}function kt(e,t){const n=e.$$;n.fragment!==null&&(Nt(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function _l(e,t){e.$$.dirty[0]===-1&&(_e.push(e),fl(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Be(e,t,n,s,r,i,o,a=[-1]){const c=un;Rt(e);const u=e.$$={fragment:null,ctx:[],props:i,update:R,not_equal:r,bound:ji(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:ji(),dirty:a,skip_bound:!1,root:t.target||c.$$.root};o&&o(u.root);let l=!1;if(u.ctx=n?n(e,t.props||{},(h,f,...d)=>{const p=d.length?d[0]:f;return u.ctx&&r(u.ctx[h],u.ctx[h]=p)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](p),l&&_l(e,h)),f}):[],u.update(),l=!0,Nt(u.before_update),u.fragment=s?s(u.ctx):!1,t.target){if(t.hydrate){const h=nl(t.target);u.fragment&&u.fragment.l(h),h.forEach(U)}else u.fragment&&u.fragment.c();t.intro&&V(e.$$.fragment),St(e,t.target,t.anchor,t.customElement),Gr()}Rt(c)}class $e{$destroy(){kt(this,1),this.$destroy=R}$on(t,n){if(!Xt(n))return R;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!Qu(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ia=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},El=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Ca={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,u=c?e[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,d=u&63;c||(d=64,o||(f=64)),s.push(n[l],n[h],n[f],n[d])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ia(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):El(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const h=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),u!==64){const d=a<<4&240|u>>2;if(s.push(d),h!==64){const p=u<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},bl=function(e){const t=Ia(e);return Ca.encodeByteArray(t,!0)},ss=function(e){return bl(e).replace(/\./g,"")},Tl=function(e){try{return Ca.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Il(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cl=()=>Il().__FIREBASE_DEFAULTS__,Sl=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},kl=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Tl(e[1]);return t&&JSON.parse(t)},Sa=()=>{try{return Cl()||Sl()||kl()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Dl=e=>{var t,n;return(n=(t=Sa())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Al=e=>{const t=Dl(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},Nl=()=>{var e;return(e=Sa())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function Ol(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[ss(JSON.stringify(n)),ss(JSON.stringify(o)),a].join(".")}function Ll(){try{return typeof indexedDB=="object"}catch{return!1}}function xl(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml="FirebaseError";class qe extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Ml,Object.setPrototypeOf(this,qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ka.prototype.create)}}class ka{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?Pl(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new qe(r,a,s)}}function Pl(e,t){return e.replace(Fl,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Fl=/\{\$([^}]+)}/g;function gr(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(Ji(i)&&Ji(o)){if(!gr(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Ji(e){return e!==null&&typeof e=="object"}/**
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
 */function zt(e){return e&&e._delegate?e._delegate:e}class ln{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Zt="[DEFAULT]";/**
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
 */class Vl{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Rl;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Bl(t))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=Zt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Zt){return this.instances.has(t)}getOptions(t=Zt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ul(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Zt){return this.component?this.component.multipleInstances?t:Zt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ul(e){return e===Zt?void 0:e}function Bl(e){return e.instantiationMode==="EAGER"}/**
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
 */class $l{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Vl(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(B||(B={}));const ql={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},jl=B.INFO,Hl={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Kl=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=Hl[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Da{constructor(t){this.name=t,this._logLevel=jl,this._logHandler=Kl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in B))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ql[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...t),this._logHandler(this,B.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...t),this._logHandler(this,B.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,B.INFO,...t),this._logHandler(this,B.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,B.WARN,...t),this._logHandler(this,B.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...t),this._logHandler(this,B.ERROR,...t)}}const zl=(e,t)=>t.some(n=>e instanceof n);let Zi,to;function Gl(){return Zi||(Zi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ql(){return to||(to=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Aa=new WeakMap,yr=new WeakMap,Na=new WeakMap,tr=new WeakMap,Xr=new WeakMap;function Wl(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(jt(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Aa.set(n,e)}).catch(()=>{}),Xr.set(t,e),t}function Xl(e){if(yr.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});yr.set(e,t)}let vr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return yr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Na.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Yl(e){vr=e(vr)}function Jl(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(er(this),t,...n);return Na.set(s,t.sort?t.sort():[t]),jt(s)}:Ql().includes(e)?function(...t){return e.apply(er(this),t),jt(Aa.get(this))}:function(...t){return jt(e.apply(er(this),t))}}function Zl(e){return typeof e=="function"?Jl(e):(e instanceof IDBTransaction&&Xl(e),zl(e,Gl())?new Proxy(e,vr):e)}function jt(e){if(e instanceof IDBRequest)return Wl(e);if(tr.has(e))return tr.get(e);const t=Zl(e);return t!==e&&(tr.set(e,t),Xr.set(t,e)),t}const er=e=>Xr.get(e);function th(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=jt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(jt(o.result),c.oldVersion,c.newVersion,jt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const eh=["get","getKey","getAll","getAllKeys","count"],nh=["put","add","delete","clear"],nr=new Map;function eo(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(nr.get(t))return nr.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=nh.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||eh.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return nr.set(t,i),i}Yl(e=>({...e,get:(t,n,s)=>eo(t,n)||e.get(t,n,s),has:(t,n)=>!!eo(t,n)||e.has(t,n)}));/**
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
 */class sh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rh(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function rh(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const wr="@firebase/app",no="0.9.1";/**
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
 */const ue=new Da("@firebase/app"),ih="@firebase/app-compat",oh="@firebase/analytics-compat",ah="@firebase/analytics",ch="@firebase/app-check-compat",uh="@firebase/app-check",lh="@firebase/auth",hh="@firebase/auth-compat",fh="@firebase/database",dh="@firebase/database-compat",ph="@firebase/functions",mh="@firebase/functions-compat",gh="@firebase/installations",yh="@firebase/installations-compat",vh="@firebase/messaging",wh="@firebase/messaging-compat",_h="@firebase/performance",Eh="@firebase/performance-compat",bh="@firebase/remote-config",Th="@firebase/remote-config-compat",Ih="@firebase/storage",Ch="@firebase/storage-compat",Sh="@firebase/firestore",kh="@firebase/firestore-compat",Dh="firebase",Ah="9.16.0";/**
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
 */const _r="[DEFAULT]",Nh={[wr]:"fire-core",[ih]:"fire-core-compat",[ah]:"fire-analytics",[oh]:"fire-analytics-compat",[uh]:"fire-app-check",[ch]:"fire-app-check-compat",[lh]:"fire-auth",[hh]:"fire-auth-compat",[fh]:"fire-rtdb",[dh]:"fire-rtdb-compat",[ph]:"fire-fn",[mh]:"fire-fn-compat",[gh]:"fire-iid",[yh]:"fire-iid-compat",[vh]:"fire-fcm",[wh]:"fire-fcm-compat",[_h]:"fire-perf",[Eh]:"fire-perf-compat",[bh]:"fire-rc",[Th]:"fire-rc-compat",[Ih]:"fire-gcs",[Ch]:"fire-gcs-compat",[Sh]:"fire-fst",[kh]:"fire-fst-compat","fire-js":"fire-js",[Dh]:"fire-js-all"};/**
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
 */const rs=new Map,Er=new Map;function Rh(e,t){try{e.container.addComponent(t)}catch(n){ue.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function is(e){const t=e.name;if(Er.has(t))return ue.debug(`There were multiple attempts to register component ${t}.`),!1;Er.set(t,e);for(const n of rs.values())Rh(n,e);return!0}function Oh(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Lh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ht=new ka("app","Firebase",Lh);/**
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
 */class xh{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
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
 */const Mh=Ah;function Ra(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:_r,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw Ht.create("bad-app-name",{appName:String(r)});if(n||(n=Nl()),!n)throw Ht.create("no-options");const i=rs.get(r);if(i){if(gr(n,i.options)&&gr(s,i.config))return i;throw Ht.create("duplicate-app",{appName:r})}const o=new $l(r);for(const c of Er.values())o.addComponent(c);const a=new xh(n,s,o);return rs.set(r,a),a}function Ph(e=_r){const t=rs.get(e);if(!t&&e===_r)return Ra();if(!t)throw Ht.create("no-app",{appName:e});return t}function ke(e,t,n){var s;let r=(s=Nh[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ue.warn(a.join(" "));return}is(new ln(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Fh="firebase-heartbeat-database",Vh=1,hn="firebase-heartbeat-store";let sr=null;function Oa(){return sr||(sr=th(Fh,Vh,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(hn)}}}).catch(e=>{throw Ht.create("idb-open",{originalErrorMessage:e.message})})),sr}async function Uh(e){try{return(await Oa()).transaction(hn).objectStore(hn).get(La(e))}catch(t){if(t instanceof qe)ue.warn(t.message);else{const n=Ht.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ue.warn(n.message)}}}async function so(e,t){try{const s=(await Oa()).transaction(hn,"readwrite");return await s.objectStore(hn).put(t,La(e)),s.done}catch(n){if(n instanceof qe)ue.warn(n.message);else{const s=Ht.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ue.warn(s.message)}}}function La(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Bh=1024,$h=30*24*60*60*1e3;class qh{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ro();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=$h}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ro(),{heartbeatsToSend:n,unsentEntries:s}=jh(this._heartbeatsCache.heartbeats),r=ss(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ro(){return new Date().toISOString().substring(0,10)}function jh(e,t=Bh){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),io(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),io(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Hh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ll()?xl().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Uh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return so(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return so(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function io(e){return ss(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Kh(e){is(new ln("platform-logger",t=>new sh(t),"PRIVATE")),is(new ln("heartbeat",t=>new qh(t),"PRIVATE")),ke(wr,no,e),ke(wr,no,"esm2017"),ke("fire-js","")}Kh("");var zh="firebase",Gh="9.16.0";/**
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
 */ke(zh,Gh,"app");var Qh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w,Yr=Yr||{},k=Qh||self;function os(){}function Ts(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Sn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Wh(e){return Object.prototype.hasOwnProperty.call(e,rr)&&e[rr]||(e[rr]=++Xh)}var rr="closure_uid_"+(1e9*Math.random()>>>0),Xh=0;function Yh(e,t,n){return e.call.apply(e.bind,arguments)}function Jh(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function dt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?dt=Yh:dt=Jh,dt.apply(null,arguments)}function qn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function ut(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function Yt(){this.s=this.s,this.o=this.o}var Zh=0;Yt.prototype.s=!1;Yt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Zh!=0)&&Wh(this)};Yt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const xa=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Jr(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function oo(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ts(s)){const r=e.length||0,i=s.length||0;e.length=r+i;for(let o=0;o<i;o++)e[r+o]=s[o]}else e.push(s)}}function pt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}pt.prototype.h=function(){this.defaultPrevented=!0};var tf=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{k.addEventListener("test",os,t),k.removeEventListener("test",os,t)}catch{}return e}();function as(e){return/^[\s\xa0]*$/.test(e)}var ao=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function ir(e,t){return e<t?-1:e>t?1:0}function Is(){var e=k.navigator;return e&&(e=e.userAgent)?e:""}function Tt(e){return Is().indexOf(e)!=-1}function Zr(e){return Zr[" "](e),e}Zr[" "]=os;function ef(e){var t=rf;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var nf=Tt("Opera"),Re=Tt("Trident")||Tt("MSIE"),Ma=Tt("Edge"),br=Ma||Re,Pa=Tt("Gecko")&&!(Is().toLowerCase().indexOf("webkit")!=-1&&!Tt("Edge"))&&!(Tt("Trident")||Tt("MSIE"))&&!Tt("Edge"),sf=Is().toLowerCase().indexOf("webkit")!=-1&&!Tt("Edge");function Fa(){var e=k.document;return e?e.documentMode:void 0}var cs;t:{var or="",ar=function(){var e=Is();if(Pa)return/rv:([^\);]+)(\)|;)/.exec(e);if(Ma)return/Edge\/([\d\.]+)/.exec(e);if(Re)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(sf)return/WebKit\/(\S+)/.exec(e);if(nf)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(ar&&(or=ar?ar[1]:""),Re){var cr=Fa();if(cr!=null&&cr>parseFloat(or)){cs=String(cr);break t}}cs=or}var rf={};function of(){return ef(function(){let e=0;const t=ao(String(cs)).split("."),n=ao("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=ir(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||ir(r[2].length==0,i[2].length==0)||ir(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var Tr;if(k.document&&Re){var co=Fa();Tr=co||parseInt(cs,10)||void 0}else Tr=void 0;var af=Tr;function fn(e,t){if(pt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Pa){t:{try{Zr(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:cf[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&fn.X.h.call(this)}}ut(fn,pt);var cf={2:"touch",3:"pen",4:"mouse"};fn.prototype.h=function(){fn.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var kn="closure_listenable_"+(1e6*Math.random()|0),uf=0;function lf(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=r,this.key=++uf,this.ba=this.ea=!1}function Cs(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ti(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Va(e){const t={};for(const n in e)t[n]=e[n];return t}const uo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ua(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<uo.length;i++)n=uo[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Ss(e){this.src=e,this.g={},this.h=0}Ss.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Cr(e,t,s,r);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new lf(t,this.src,i,!!s,r),t.ea=n,e.push(t)),t};function Ir(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=xa(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Cs(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Cr(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ba&&i.listener==t&&i.capture==!!n&&i.ha==s)return r}return-1}var ei="closure_lm_"+(1e6*Math.random()|0),ur={};function Ba(e,t,n,s,r){if(s&&s.once)return qa(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Ba(e,t[i],n,s,r);return null}return n=ri(n),e&&e[kn]?e.N(t,n,Sn(s)?!!s.capture:!!s,r):$a(e,t,n,!1,s,r)}function $a(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=Sn(r)?!!r.capture:!!r,a=si(e);if(a||(e[ei]=a=new Ss(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=hf(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)tf||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(Ha(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function hf(){function e(n){return t.call(e.src,e.listener,n)}const t=ff;return e}function qa(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)qa(e,t[i],n,s,r);return null}return n=ri(n),e&&e[kn]?e.O(t,n,Sn(s)?!!s.capture:!!s,r):$a(e,t,n,!0,s,r)}function ja(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)ja(e,t[i],n,s,r);else s=Sn(s)?!!s.capture:!!s,n=ri(n),e&&e[kn]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Cr(i,n,s,r),-1<n&&(Cs(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=si(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Cr(t,n,s,r)),(n=-1<e?t[e]:null)&&ni(n))}function ni(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[kn])Ir(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Ha(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=si(t))?(Ir(n,e),n.h==0&&(n.src=null,t[ei]=null)):Cs(e)}}}function Ha(e){return e in ur?ur[e]:ur[e]="on"+e}function ff(e,t){if(e.ba)e=!0;else{t=new fn(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&ni(e),e=n.call(s,t)}return e}function si(e){return e=e[ei],e instanceof Ss?e:null}var lr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ri(e){return typeof e=="function"?e:(e[lr]||(e[lr]=function(t){return e.handleEvent(t)}),e[lr])}function it(){Yt.call(this),this.i=new Ss(this),this.P=this,this.I=null}ut(it,Yt);it.prototype[kn]=!0;it.prototype.removeEventListener=function(e,t,n,s){ja(this,e,t,n,s)};function ct(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new pt(t,e);else if(t instanceof pt)t.target=t.target||e;else{var r=t;t=new pt(s,e),Ua(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=jn(o,s,!0,t)&&r}if(o=t.g=e,r=jn(o,s,!0,t)&&r,r=jn(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=jn(o,s,!1,t)&&r}it.prototype.M=function(){if(it.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Cs(n[s]);delete e.g[t],e.h--}}this.I=null};it.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};it.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function jn(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Ir(e.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var ii=k.JSON.stringify;function df(){var e=Ga;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class pf{constructor(){this.h=this.g=null}add(t,n){const s=Ka.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Ka=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new mf,e=>e.reset());class mf{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function gf(e){k.setTimeout(()=>{throw e},0)}function za(e,t){Sr||yf(),kr||(Sr(),kr=!0),Ga.add(e,t)}var Sr;function yf(){var e=k.Promise.resolve(void 0);Sr=function(){e.then(vf)}}var kr=!1,Ga=new pf;function vf(){for(var e;e=df();){try{e.h.call(e.g)}catch(n){gf(n)}var t=Ka;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}kr=!1}function ks(e,t){it.call(this),this.h=e||1,this.g=t||k,this.j=dt(this.lb,this),this.l=Date.now()}ut(ks,it);w=ks.prototype;w.ca=!1;w.R=null;w.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ct(this,"tick"),this.ca&&(oi(this),this.start()))}};w.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function oi(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}w.M=function(){ks.X.M.call(this),oi(this),delete this.g};function ai(e,t,n){if(typeof e=="function")n&&(e=dt(e,n));else if(e&&typeof e.handleEvent=="function")e=dt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:k.setTimeout(e,t||0)}function Qa(e){e.g=ai(()=>{e.g=null,e.i&&(e.i=!1,Qa(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class wf extends Yt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Qa(this)}M(){super.M(),this.g&&(k.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dn(e){Yt.call(this),this.h=e,this.g={}}ut(dn,Yt);var lo=[];function Wa(e,t,n,s){Array.isArray(n)||(n&&(lo[0]=n.toString()),n=lo);for(var r=0;r<n.length;r++){var i=Ba(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Xa(e){ti(e.g,function(t,n){this.g.hasOwnProperty(n)&&ni(t)},e),e.g={}}dn.prototype.M=function(){dn.X.M.call(this),Xa(this)};dn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ds(){this.g=!0}Ds.prototype.Aa=function(){this.g=!1};function _f(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function Ef(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function Ce(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Tf(e,n)+(s?" "+s:"")})}function bf(e,t){e.info(function(){return"TIMEOUT: "+t})}Ds.prototype.info=function(){};function Tf(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return ii(n)}catch{return t}}var de={},ho=null;function As(){return ho=ho||new it}de.Pa="serverreachability";function Ya(e){pt.call(this,de.Pa,e)}ut(Ya,pt);function pn(e){const t=As();ct(t,new Ya(t))}de.STAT_EVENT="statevent";function Ja(e,t){pt.call(this,de.STAT_EVENT,e),this.stat=t}ut(Ja,pt);function gt(e){const t=As();ct(t,new Ja(t,e))}de.Qa="timingevent";function Za(e,t){pt.call(this,de.Qa,e),this.size=t}ut(Za,pt);function Dn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return k.setTimeout(function(){e()},t)}var Ns={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},tc={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ci(){}ci.prototype.h=null;function fo(e){return e.h||(e.h=e.i())}function ec(){}var An={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ui(){pt.call(this,"d")}ut(ui,pt);function li(){pt.call(this,"c")}ut(li,pt);var Dr;function Rs(){}ut(Rs,ci);Rs.prototype.g=function(){return new XMLHttpRequest};Rs.prototype.i=function(){return{}};Dr=new Rs;function Nn(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new dn(this),this.O=If,e=br?125:void 0,this.T=new ks(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new nc}function nc(){this.i=null,this.g="",this.h=!1}var If=45e3,Ar={},us={};w=Nn.prototype;w.setTimeout=function(e){this.O=e};function Nr(e,t,n){e.K=1,e.v=Ls(Mt(t)),e.s=n,e.P=!0,sc(e,null)}function sc(e,t){e.F=Date.now(),Rn(e),e.A=Mt(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),hc(n.i,"t",s),e.C=0,n=e.l.H,e.h=new nc,e.g=Oc(e.l,n?t:null,!e.s),0<e.N&&(e.L=new wf(dt(e.La,e,e.g),e.N)),Wa(e.S,e.g,"readystatechange",e.ib),t=e.H?Va(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),pn(),_f(e.j,e.u,e.A,e.m,e.U,e.s)}w.ib=function(e){e=e.target;const t=this.L;t&&Ot(e)==3?t.l():this.La(e)};w.La=function(e){try{if(e==this.g)t:{const l=Ot(this.g);var t=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||br||this.g&&(this.h.h||this.g.fa()||yo(this.g)))){this.I||l!=4||t==7||(t==8||0>=h?pn(3):pn(2)),Os(this);var n=this.g.aa();this.Y=n;e:if(rc(this)){var s=yo(this.g);e="";var r=s.length,i=Ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){te(this),tn(this);var o="";break e}this.h.i=new k.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Ef(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!as(a)){var u=a;break e}}u=null}if(n=u)Ce(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Rr(this,n);else{this.i=!1,this.o=3,gt(12),te(this),tn(this);break t}}this.P?(ic(this,l,o),br&&this.i&&l==3&&(Wa(this.S,this.T,"tick",this.hb),this.T.start())):(Ce(this.j,this.m,o,null),Rr(this,o)),l==4&&te(this),this.i&&!this.I&&(l==4?Dc(this.l,this):(this.i=!1,Rn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,gt(12)):(this.o=0,gt(13)),te(this),tn(this)}}}catch{}finally{}};function rc(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function ic(e,t,n){let s=!0,r;for(;!e.I&&e.C<n.length;)if(r=Cf(e,n),r==us){t==4&&(e.o=4,gt(14),s=!1),Ce(e.j,e.m,null,"[Incomplete Response]");break}else if(r==Ar){e.o=4,gt(15),Ce(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Ce(e.j,e.m,r,null),Rr(e,r);rc(e)&&r!=us&&r!=Ar&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,gt(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),yi(t),t.K=!0,gt(11))):(Ce(e.j,e.m,n,"[Invalid Chunked Response]"),te(e),tn(e))}w.hb=function(){if(this.g){var e=Ot(this.g),t=this.g.fa();this.C<t.length&&(Os(this),ic(this,e,t),this.i&&e!=4&&Rn(this))}};function Cf(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?us:(n=Number(t.substring(n,s)),isNaN(n)?Ar:(s+=1,s+n>t.length?us:(t=t.substr(s,n),e.C=s+n,t)))}w.cancel=function(){this.I=!0,te(this)};function Rn(e){e.V=Date.now()+e.O,oc(e,e.O)}function oc(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Dn(dt(e.gb,e),t)}function Os(e){e.B&&(k.clearTimeout(e.B),e.B=null)}w.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(bf(this.j,this.A),this.K!=2&&(pn(),gt(17)),te(this),this.o=2,tn(this)):oc(this,this.V-e)};function tn(e){e.l.G==0||e.I||Dc(e.l,e)}function te(e){Os(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,oi(e.T),Xa(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Rr(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Or(n.h,e))){if(!e.J&&Or(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)fs(n),Ps(n);else break t;gi(n),gt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Dn(dt(n.cb,n),6e3));if(1>=pc(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ee(n,11)}else if((e.J||n.g==e)&&fs(n),!as(t))for(r=n.Fa.g.parse(t),t=0;t<r.length;t++){let u=r[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=e.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=s.h;i.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(hi(i,i.h),i.h=null))}if(s.D){const m=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(s.za=m,W(s.F,s.D,m))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=Rc(s,s.H?s.ka:null,s.V),o.J){mc(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Os(a),Rn(a)),s.g=o}else Sc(s);0<n.i.length&&Fs(n)}else u[0]!="stop"&&u[0]!="close"||ee(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ee(n,7):mi(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}pn(4)}catch{}}function Sf(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Ts(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function kf(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Ts(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function ac(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Ts(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=kf(e),s=Sf(e),r=s.length,i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}var cc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Df(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function re(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof re){this.h=t!==void 0?t:e.h,ls(this,e.j),this.s=e.s,this.g=e.g,hs(this,e.m),this.l=e.l,t=e.i;var n=new mn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),po(this,n),this.o=e.o}else e&&(n=String(e).match(cc))?(this.h=!!t,ls(this,n[1]||"",!0),this.s=Xe(n[2]||""),this.g=Xe(n[3]||"",!0),hs(this,n[4]),this.l=Xe(n[5]||"",!0),po(this,n[6]||"",!0),this.o=Xe(n[7]||"")):(this.h=!!t,this.i=new mn(null,this.h))}re.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ye(t,mo,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ye(t,mo,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ye(n,n.charAt(0)=="/"?Rf:Nf,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ye(n,Lf)),e.join("")};function Mt(e){return new re(e)}function ls(e,t,n){e.j=n?Xe(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function hs(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function po(e,t,n){t instanceof mn?(e.i=t,xf(e.i,e.h)):(n||(t=Ye(t,Of)),e.i=new mn(t,e.h))}function W(e,t,n){e.i.set(t,n)}function Ls(e){return W(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Xe(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ye(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Af),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Af(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var mo=/[#\/\?@]/g,Nf=/[#\?:]/g,Rf=/[#\?]/g,Of=/[#\?@]/g,Lf=/#/g;function mn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Jt(e){e.g||(e.g=new Map,e.h=0,e.i&&Df(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}w=mn.prototype;w.add=function(e,t){Jt(this),this.i=null,e=je(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function uc(e,t){Jt(e),t=je(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function lc(e,t){return Jt(e),t=je(e,t),e.g.has(t)}w.forEach=function(e,t){Jt(this),this.g.forEach(function(n,s){n.forEach(function(r){e.call(t,r,s,this)},this)},this)};w.oa=function(){Jt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const r=e[s];for(let i=0;i<r.length;i++)n.push(t[s])}return n};w.W=function(e){Jt(this);let t=[];if(typeof e=="string")lc(this,e)&&(t=t.concat(this.g.get(je(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};w.set=function(e,t){return Jt(this),this.i=null,e=je(this,e),lc(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};w.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function hc(e,t,n){uc(e,t),0<n.length&&(e.i=null,e.g.set(je(e,t),Jr(n)),e.h+=n.length)}w.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),e.push(r)}}return this.i=e.join("&")};function je(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function xf(e,t){t&&!e.j&&(Jt(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(uc(this,s),hc(this,r,n))},e)),e.j=t}var Mf=class{constructor(e,t){this.h=e,this.g=t}};function fc(e){this.l=e||Pf,k.PerformanceNavigationTiming?(e=k.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(k.g&&k.g.Ga&&k.g.Ga()&&k.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Pf=10;function dc(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function pc(e){return e.h?1:e.g?e.g.size:0}function Or(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function hi(e,t){e.g?e.g.add(t):e.h=t}function mc(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}fc.prototype.cancel=function(){if(this.i=gc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function gc(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Jr(e.i)}function fi(){}fi.prototype.stringify=function(e){return k.JSON.stringify(e,void 0)};fi.prototype.parse=function(e){return k.JSON.parse(e,void 0)};function Ff(){this.g=new fi}function Vf(e,t,n){const s=n||"";try{ac(e,function(r,i){let o=r;Sn(r)&&(o=ii(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function Uf(e,t){const n=new Ds;if(k.Image){const s=new Image;s.onload=qn(Hn,n,s,"TestLoadImage: loaded",!0,t),s.onerror=qn(Hn,n,s,"TestLoadImage: error",!1,t),s.onabort=qn(Hn,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=qn(Hn,n,s,"TestLoadImage: timeout",!1,t),k.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Hn(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function On(e){this.l=e.ac||null,this.j=e.jb||!1}ut(On,ci);On.prototype.g=function(){return new xs(this.l,this.j)};On.prototype.i=function(e){return function(){return e}}({});function xs(e,t){it.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=di,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ut(xs,it);var di=0;w=xs.prototype;w.open=function(e,t){if(this.readyState!=di)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,gn(this)};w.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||k).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};w.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ln(this)),this.readyState=di};w.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,gn(this)),this.g&&(this.readyState=3,gn(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof k.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;yc(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function yc(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}w.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ln(this):gn(this),this.readyState==3&&yc(this)}};w.Va=function(e){this.g&&(this.response=this.responseText=e,Ln(this))};w.Ua=function(e){this.g&&(this.response=e,Ln(this))};w.ga=function(){this.g&&Ln(this)};function Ln(e){e.readyState=4,e.l=null,e.j=null,e.A=null,gn(e)}w.setRequestHeader=function(e,t){this.v.append(e,t)};w.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};w.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function gn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(xs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Bf=k.JSON.parse;function Y(e){it.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=vc,this.K=this.L=!1}ut(Y,it);var vc="",$f=/^https?$/i,qf=["POST","PUT"];w=Y.prototype;w.Ka=function(e){this.L=e};w.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Dr.g(),this.C=this.u?fo(this.u):fo(Dr),this.g.onreadystatechange=dt(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){go(this,i);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=k.FormData&&e instanceof k.FormData,!(0<=xa(qf,t))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ec(this),0<this.B&&((this.K=jf(this.g))?(this.g.timeout=this.B,this.g.ontimeout=dt(this.qa,this)):this.A=ai(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){go(this,i)}};function jf(e){return Re&&of()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}w.qa=function(){typeof Yr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ct(this,"timeout"),this.abort(8))};function go(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,wc(e),Ms(e)}function wc(e){e.D||(e.D=!0,ct(e,"complete"),ct(e,"error"))}w.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ct(this,"complete"),ct(this,"abort"),Ms(this))};w.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ms(this,!0)),Y.X.M.call(this)};w.Ha=function(){this.s||(this.F||this.v||this.l?_c(this):this.fb())};w.fb=function(){_c(this)};function _c(e){if(e.h&&typeof Yr<"u"&&(!e.C[1]||Ot(e)!=4||e.aa()!=2)){if(e.v&&Ot(e)==4)ai(e.Ha,0,e);else if(ct(e,"readystatechange"),Ot(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(cc)[1]||null;if(!r&&k.self&&k.self.location){var i=k.self.location.protocol;r=i.substr(0,i.length-1)}s=!$f.test(r?r.toLowerCase():"")}n=s}if(n)ct(e,"complete"),ct(e,"success");else{e.m=6;try{var o=2<Ot(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",wc(e)}}finally{Ms(e)}}}}function Ms(e,t){if(e.g){Ec(e);const n=e.g,s=e.C[0]?os:null;e.g=null,e.C=null,t||ct(e,"ready");try{n.onreadystatechange=s}catch{}}}function Ec(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(k.clearTimeout(e.A),e.A=null)}function Ot(e){return e.g?e.g.readyState:0}w.aa=function(){try{return 2<Ot(this)?this.g.status:-1}catch{return-1}};w.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};w.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Bf(t)}};function yo(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case vc:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}w.Ea=function(){return this.m};w.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function bc(e){let t="";return ti(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function pi(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=bc(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):W(e,t,n))}function We(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Tc(e){this.Ca=0,this.i=[],this.j=new Ds,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=We("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=We("baseRetryDelayMs",5e3,e),this.bb=We("retryDelaySeedMs",1e4,e),this.$a=We("forwardChannelMaxRetries",2,e),this.ta=We("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new fc(e&&e.concurrentRequestLimit),this.Fa=new Ff,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}w=Tc.prototype;w.ma=8;w.G=1;function mi(e){if(Ic(e),e.G==3){var t=e.U++,n=Mt(e.F);W(n,"SID",e.I),W(n,"RID",t),W(n,"TYPE","terminate"),xn(e,n),t=new Nn(e,e.j,t,void 0),t.K=2,t.v=Ls(Mt(n)),n=!1,k.navigator&&k.navigator.sendBeacon&&(n=k.navigator.sendBeacon(t.v.toString(),"")),!n&&k.Image&&(new Image().src=t.v,n=!0),n||(t.g=Oc(t.l,null),t.g.da(t.v)),t.F=Date.now(),Rn(t)}Nc(e)}function Ps(e){e.g&&(yi(e),e.g.cancel(),e.g=null)}function Ic(e){Ps(e),e.u&&(k.clearTimeout(e.u),e.u=null),fs(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&k.clearTimeout(e.m),e.m=null)}function Fs(e){dc(e.h)||e.m||(e.m=!0,za(e.Ja,e),e.C=0)}function Hf(e,t){return pc(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Dn(dt(e.Ja,e,t),Ac(e,e.C)),e.C++,!0)}w.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const r=new Nn(this,this.j,e,void 0);let i=this.s;if(this.S&&(i?(i=Va(i),Ua(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Cc(this,r,t),n=Mt(this.F),W(n,"RID",e),W(n,"CVER",22),this.D&&W(n,"X-HTTP-Session-Id",this.D),xn(this,n),i&&(this.N?t="headers="+encodeURIComponent(String(bc(i)))+"&"+t:this.o&&pi(n,this.o,i)),hi(this.h,r),this.Ya&&W(n,"TYPE","init"),this.O?(W(n,"$req",t),W(n,"SID","null"),r.Z=!0,Nr(r,n,null)):Nr(r,n,t),this.G=2}}else this.G==3&&(e?vo(this,e):this.i.length==0||dc(this.h)||vo(this))};function vo(e,t){var n;t?n=t.m:n=e.U++;const s=Mt(e.F);W(s,"SID",e.I),W(s,"RID",n),W(s,"AID",e.T),xn(e,s),e.o&&e.s&&pi(s,e.o,e.s),n=new Nn(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Cc(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),hi(e.h,n),Nr(n,s,t)}function xn(e,t){e.ia&&ti(e.ia,function(n,s){W(t,s,n)}),e.l&&ac({},function(n,s){W(t,s,n)})}function Cc(e,t,n){n=Math.min(e.i.length,n);var s=e.l?dt(e.l.Ra,e.l,e):null;t:{var r=e.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{Vf(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function Sc(e){e.g||e.u||(e.Z=1,za(e.Ia,e),e.A=0)}function gi(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Dn(dt(e.Ia,e),Ac(e,e.A)),e.A++,!0)}w.Ia=function(){if(this.u=null,kc(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Dn(dt(this.eb,this),e)}};w.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,gt(10),Ps(this),kc(this))};function yi(e){e.B!=null&&(k.clearTimeout(e.B),e.B=null)}function kc(e){e.g=new Nn(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=Mt(e.sa);W(t,"RID","rpc"),W(t,"SID",e.I),W(t,"CI",e.L?"0":"1"),W(t,"AID",e.T),W(t,"TYPE","xmlhttp"),xn(e,t),e.o&&e.s&&pi(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Ls(Mt(t)),n.s=null,n.P=!0,sc(n,e)}w.cb=function(){this.v!=null&&(this.v=null,Ps(this),gi(this),gt(19))};function fs(e){e.v!=null&&(k.clearTimeout(e.v),e.v=null)}function Dc(e,t){var n=null;if(e.g==t){fs(e),yi(e),e.g=null;var s=2}else if(Or(e.h,t))n=t.D,mc(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;s=As(),ct(s,new Za(s,n)),Fs(e)}else Sc(e);else if(r=t.o,r==3||r==0&&0<e.pa||!(s==1&&Hf(e,t)||s==2&&gi(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:ee(e,5);break;case 4:ee(e,10);break;case 3:ee(e,6);break;default:ee(e,2)}}}function Ac(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function ee(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=dt(e.kb,e);n||(n=new re("//www.google.com/images/cleardot.gif"),k.location&&k.location.protocol=="http"||ls(n,"https"),Ls(n)),Uf(n.toString(),s)}else gt(2);e.G=0,e.l&&e.l.va(t),Nc(e),Ic(e)}w.kb=function(e){e?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function Nc(e){if(e.G=0,e.la=[],e.l){const t=gc(e.h);(t.length!=0||e.i.length!=0)&&(oo(e.la,t),oo(e.la,e.i),e.h.i.length=0,Jr(e.i),e.i.length=0),e.l.ua()}}function Rc(e,t,n){var s=n instanceof re?Mt(n):new re(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),hs(s,s.m);else{var r=k.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var i=new re(null,void 0);s&&ls(i,s),t&&(i.g=t),r&&hs(i,r),n&&(i.l=n),s=i}return n=e.D,t=e.za,n&&t&&W(s,n,t),W(s,"VER",e.ma),xn(e,s),s}function Oc(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new Y(new On({jb:!0})):new Y(e.ra),t.Ka(e.H),t}function Lc(){}w=Lc.prototype;w.xa=function(){};w.wa=function(){};w.va=function(){};w.ua=function(){};w.Ra=function(){};function ds(){if(Re&&!(10<=Number(af)))throw Error("Environmental error: no available transport.")}ds.prototype.g=function(e,t){return new vt(e,t)};function vt(e,t){it.call(this),this.g=new Tc(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!as(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!as(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new He(this)}ut(vt,it);vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;gt(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Rc(e,null,e.V),Fs(e)};vt.prototype.close=function(){mi(this.g)};vt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=ii(e),e=n);t.i.push(new Mf(t.ab++,e)),t.G==3&&Fs(t)};vt.prototype.M=function(){this.g.l=null,delete this.j,mi(this.g),delete this.g,vt.X.M.call(this)};function xc(e){ui.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}ut(xc,ui);function Mc(){li.call(this),this.status=1}ut(Mc,li);function He(e){this.g=e}ut(He,Lc);He.prototype.xa=function(){ct(this.g,"a")};He.prototype.wa=function(e){ct(this.g,new xc(e))};He.prototype.va=function(e){ct(this.g,new Mc)};He.prototype.ua=function(){ct(this.g,"b")};ds.prototype.createWebChannel=ds.prototype.g;vt.prototype.send=vt.prototype.u;vt.prototype.open=vt.prototype.m;vt.prototype.close=vt.prototype.close;Ns.NO_ERROR=0;Ns.TIMEOUT=8;Ns.HTTP_ERROR=6;tc.COMPLETE="complete";ec.EventType=An;An.OPEN="a";An.CLOSE="b";An.ERROR="c";An.MESSAGE="d";it.prototype.listen=it.prototype.N;Y.prototype.listenOnce=Y.prototype.O;Y.prototype.getLastError=Y.prototype.Oa;Y.prototype.getLastErrorCode=Y.prototype.Ea;Y.prototype.getStatus=Y.prototype.aa;Y.prototype.getResponseJson=Y.prototype.Sa;Y.prototype.getResponseText=Y.prototype.fa;Y.prototype.send=Y.prototype.da;Y.prototype.setWithCredentials=Y.prototype.Ka;var Kf=function(){return new ds},zf=function(){return As()},hr=Ns,Gf=tc,Qf=de,wo={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Wf=On,Kn=ec,Xf=Y;const _o="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Ke="9.16.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=new Da("@firebase/firestore");function Eo(){return le.logLevel}function E(e,...t){if(le.logLevel<=B.DEBUG){const n=t.map(vi);le.debug(`Firestore (${Ke}): ${e}`,...n)}}function Pt(e,...t){if(le.logLevel<=B.ERROR){const n=t.map(vi);le.error(`Firestore (${Ke}): ${e}`,...n)}}function Lr(e,...t){if(le.logLevel<=B.WARN){const n=t.map(vi);le.warn(`Firestore (${Ke}): ${e}`,...n)}}function vi(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
 */function S(e="Unexpected state"){const t=`FIRESTORE (${Ke}) INTERNAL ASSERTION FAILED: `+e;throw Pt(t),new Error(t)}function Q(e,t){e||S()}function O(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends qe{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Yf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class Jf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Zf{constructor(t){this.t=t,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new ie;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ie,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{E("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(E("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ie)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(E("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Q(typeof s.accessToken=="string"),new Pc(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Q(t===null||typeof t=="string"),new lt(t)}}class td{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Q(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class ed{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new td(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nd{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sd{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=i=>{i.error!=null&&E("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,E("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{E("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):E("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Q(typeof n.token=="string"),this.A=n.token,new nd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function rd(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=rd(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function $(e,t){return e<t?-1:e>t?1:0}function Oe(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new T(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new T(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new T(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new T(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return et.fromMillis(Date.now())}static fromDate(t){return et.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new et(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?$(this.nanoseconds,t.nanoseconds):$(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this.timestamp=t}static fromTimestamp(t){return new N(t)}static min(){return new N(new et(0,0))}static max(){return new N(new et(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(t,n,s){n===void 0?n=0:n>t.length&&S(),s===void 0?s=t.length-n:s>t.length-n&&S(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return yn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof yn?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class X extends yn{construct(t,n,s){return new X(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new T(y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new X(n)}static emptyPath(){return new X([])}}const id=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends yn{construct(t,n,s){return new ft(t,n,s)}static isValidIdentifier(t){return id.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new T(y.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new T(y.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new T(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new T(y.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ft(n)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t){this.path=t}static fromPath(t){return new b(X.fromString(t))}static fromName(t){return new b(X.fromString(t).popFirst(5))}static empty(){return new b(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return X.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new b(new X(t.slice()))}}function od(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=N.fromTimestamp(s===1e9?new et(n+1,0):new et(n,s));return new Gt(r,b.empty(),t)}function ad(e){return new Gt(e.readTime,e.key,-1)}class Gt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Gt(N.min(),b.empty(),-1)}static max(){return new Gt(N.max(),b.empty(),-1)}}function cd(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=b.comparator(e.documentKey,t.documentKey),n!==0?n:$(e.largestBatchId,t.largestBatchId))}/**
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
 */const ud="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ld{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mn(e){if(e.code!==y.FAILED_PRECONDITION||e.message!==ud)throw e;E("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&S(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new g((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):g.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):g.reject(n)}static resolve(t){return new g((n,s)=>{n(t)})}static reject(t){return new g((n,s)=>{s(t)})}static waitFor(t){return new g((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(t){let n=g.resolve(!1);for(const s of t)n=n.next(r=>r?g.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new g((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(t[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(t,n){return new g((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function Pn(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class wi{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}wi.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(t,n,s,r,i,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class vn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new vn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof vn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function pe(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Vc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(e){return e==null}function ps(e){return e===0&&1/e==-1/0}function fd(e){return typeof e=="number"&&Number.isInteger(e)&&!ps(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */class mt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new mt(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new mt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return $(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const dd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qt(e){if(Q(!!e),typeof e=="string"){let t=0;const n=dd.exec(e);if(Q(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:Z(e.seconds),nanos:Z(e.nanos)}}function Z(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Le(e){return typeof e=="string"?mt.fromBase64String(e):mt.fromUint8Array(e)}/**
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
 */function Uc(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Bc(e){const t=e.mapValue.fields.__previous_value__;return Uc(t)?Bc(t):t}function wn(e){const t=Qt(e.mapValue.fields.__local_write_time__.timestampValue);return new et(t.seconds,t.nanos)}/**
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
 */const zn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function he(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Uc(e)?4:pd(e)?9007199254740991:10:S()}function Dt(e,t){if(e===t)return!0;const n=he(e);if(n!==he(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return wn(e).isEqual(wn(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Qt(s.timestampValue),o=Qt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return Le(s.bytesValue).isEqual(Le(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return Z(s.geoPointValue.latitude)===Z(r.geoPointValue.latitude)&&Z(s.geoPointValue.longitude)===Z(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Z(s.integerValue)===Z(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Z(s.doubleValue),o=Z(r.doubleValue);return i===o?ps(i)===ps(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return Oe(e.arrayValue.values||[],t.arrayValue.values||[],Dt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(bo(i)!==bo(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Dt(i[a],o[a])))return!1;return!0}(e,t);default:return S()}}function _n(e,t){return(e.values||[]).find(n=>Dt(n,t))!==void 0}function xe(e,t){if(e===t)return 0;const n=he(e),s=he(t);if(n!==s)return $(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return $(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=Z(r.integerValue||r.doubleValue),a=Z(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return To(e.timestampValue,t.timestampValue);case 4:return To(wn(e),wn(t));case 5:return $(e.stringValue,t.stringValue);case 6:return function(r,i){const o=Le(r),a=Le(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=$(o[c],a[c]);if(u!==0)return u}return $(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=$(Z(r.latitude),Z(i.latitude));return o!==0?o:$(Z(r.longitude),Z(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=xe(o[c],a[c]);if(u)return u}return $(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===zn.mapValue&&i===zn.mapValue)return 0;if(r===zn.mapValue)return 1;if(i===zn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=$(a[l],u[l]);if(h!==0)return h;const f=xe(o[a[l]],c[u[l]]);if(f!==0)return f}return $(a.length,u.length)}(e.mapValue,t.mapValue);default:throw S()}}function To(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return $(e,t);const n=Qt(e),s=Qt(t),r=$(n.seconds,s.seconds);return r!==0?r:$(n.nanos,s.nanos)}function Me(e){return xr(e)}function xr(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=Qt(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Le(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,b.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=xr(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${xr(s.fields[a])}`;return i+"}"}(e.mapValue):S();var t,n}function Mr(e){return!!e&&"integerValue"in e}function _i(e){return!!e&&"arrayValue"in e}function Io(e){return!!e&&"nullValue"in e}function Co(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Xn(e){return!!e&&"mapValue"in e}function en(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return pe(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=en(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=en(e.arrayValue.values[n]);return t}return Object.assign({},e)}function pd(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ms{constructor(t,n){this.position=t,this.inclusive=n}}function So(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=b.comparator(b.fromName(o.referenceValue),n.key):s=xe(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function ko(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Dt(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class $c{}class tt extends $c{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new gd(t,n,s):n==="array-contains"?new wd(t,s):n==="in"?new _d(t,s):n==="not-in"?new Ed(t,s):n==="array-contains-any"?new bd(t,s):new tt(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new yd(t,s):new vd(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(xe(n,this.value)):n!==null&&he(this.value)===he(n)&&this.matchesComparison(xe(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return S()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class At extends $c{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new At(t,n)}matches(t){return qc(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function qc(e){return e.op==="and"}function jc(e){return md(e)&&qc(e)}function md(e){for(const t of e.filters)if(t instanceof At)return!1;return!0}function Pr(e){if(e instanceof tt)return e.field.canonicalString()+e.op.toString()+Me(e.value);if(jc(e))return e.filters.map(t=>Pr(t)).join(",");{const t=e.filters.map(n=>Pr(n)).join(",");return`${e.op}(${t})`}}function Hc(e,t){return e instanceof tt?function(n,s){return s instanceof tt&&n.op===s.op&&n.field.isEqual(s.field)&&Dt(n.value,s.value)}(e,t):e instanceof At?function(n,s){return s instanceof At&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Hc(i,s.filters[o]),!0):!1}(e,t):void S()}function Kc(e){return e instanceof tt?function(t){return`${t.field.canonicalString()} ${t.op} ${Me(t.value)}`}(e):e instanceof At?function(t){return t.op.toString()+" {"+t.getFilters().map(Kc).join(" ,")+"}"}(e):"Filter"}class gd extends tt{constructor(t,n,s){super(t,n,s),this.key=b.fromName(s.referenceValue)}matches(t){const n=b.comparator(t.key,this.key);return this.matchesComparison(n)}}class yd extends tt{constructor(t,n){super(t,"in",n),this.keys=zc("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class vd extends tt{constructor(t,n){super(t,"not-in",n),this.keys=zc("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function zc(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>b.fromName(s.referenceValue))}class wd extends tt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return _i(n)&&_n(n.arrayValue,this.value)}}class _d extends tt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&_n(this.value.arrayValue,n)}}class Ed extends tt{constructor(t,n){super(t,"not-in",n)}matches(t){if(_n(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!_n(this.value.arrayValue,n)}}class bd extends tt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!_i(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>_n(this.value.arrayValue,s))}}/**
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
 */class nn{constructor(t,n="asc"){this.field=t,this.dir=n}}function Td(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t,n){this.comparator=t,this.root=n||ot.EMPTY}insert(t,n){return new st(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(t){return new st(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ot.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Gn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Gn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Gn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Gn(this.root,t,this.comparator,!0)}}class Gn{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ot{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s!=null?s:ot.RED,this.left=r!=null?r:ot.EMPTY,this.right=i!=null?i:ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new ot(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return ot.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw S();const t=this.left.check();if(t!==this.right.check())throw S();return t+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw S()}get value(){throw S()}get color(){throw S()}get left(){throw S()}get right(){throw S()}copy(e,t,n,s,r){return this}insert(e,t,n){return new ot(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.comparator=t,this.data=new st(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Do(this.data.getIterator())}getIteratorFrom(t){return new Do(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof nt)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new nt(this.comparator);return n.data=t,n}}class Do{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class bt{constructor(t){this.fields=t,t.sort(ft.comparator)}static empty(){return new bt([])}unionWith(t){let n=new nt(ft.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new bt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Oe(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.value=t}static empty(){return new yt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Xn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=en(n)}setAll(t){let n=ft.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=en(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());Xn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Dt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];Xn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){pe(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new yt(en(this.value))}}function Gc(e){const t=[];return pe(e.fields,(n,s)=>{const r=new ft([n]);if(Xn(s)){const i=Gc(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new bt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t,n,s,r,i,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new ht(t,0,N.min(),N.min(),N.min(),yt.empty(),0)}static newFoundDocument(t,n,s,r){return new ht(t,1,n,N.min(),s,r,0)}static newNoDocument(t,n){return new ht(t,2,n,N.min(),N.min(),yt.empty(),0)}static newUnknownDocument(t,n){return new ht(t,3,n,N.min(),N.min(),yt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(N.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=N.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ht&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Id{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Ao(e,t=null,n=[],s=[],r=null,i=null,o=null){return new Id(e,t,n,s,r,i,o)}function Ei(e){const t=O(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Pr(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Vs(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Me(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Me(s)).join(",")),t.ft=n}return t.ft}function bi(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Td(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Hc(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ko(e.startAt,t.startAt)&&ko(e.endAt,t.endAt)}function Fr(e){return b.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function Cd(e,t,n,s,r,i,o,a){return new Us(e,t,n,s,r,i,o,a)}function Ti(e){return new Us(e)}function No(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Sd(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function kd(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Dd(e){return e.collectionGroup!==null}function De(e){const t=O(e);if(t.dt===null){t.dt=[];const n=kd(t),s=Sd(t);if(n!==null&&s===null)n.isKeyField()||t.dt.push(new nn(n)),t.dt.push(new nn(ft.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new nn(ft.keyField(),i))}}}return t.dt}function Ft(e){const t=O(e);if(!t._t)if(t.limitType==="F")t._t=Ao(t.path,t.collectionGroup,De(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of De(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new nn(i.field,o))}const s=t.endAt?new ms(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ms(t.startAt.position,t.startAt.inclusive):null;t._t=Ao(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t._t}function Vr(e,t,n){return new Us(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Bs(e,t){return bi(Ft(e),Ft(t))&&e.limitType===t.limitType}function Qc(e){return`${Ei(Ft(e))}|lt:${e.limitType}`}function Ur(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Kc(s)).join(", ")}]`),Vs(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Me(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Me(s)).join(",")),`Target(${n})`}(Ft(e))}; limitType=${e.limitType})`}function Ii(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):b.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of De(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=So(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,De(n),s)||n.endAt&&!function(r,i,o){const a=So(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,De(n),s))}(e,t)}function Ad(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Wc(e){return(t,n)=>{let s=!1;for(const r of De(e)){const i=Nd(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Nd(e,t,n){const s=e.field.isKeyField()?b.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?xe(a,c):S()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return S()}}/**
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
 */function Xc(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ps(t)?"-0":t}}function Yc(e){return{integerValue:""+e}}function Rd(e,t){return fd(t)?Yc(t):Xc(e,t)}/**
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
 */class $s{constructor(){this._=void 0}}function Od(e,t,n){return e instanceof gs?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof Pe?Zc(e,t):e instanceof En?tu(e,t):function(s,r){const i=Jc(s,r),o=Ro(i)+Ro(s.gt);return Mr(i)&&Mr(s.gt)?Yc(o):Xc(s.yt,o)}(e,t)}function Ld(e,t,n){return e instanceof Pe?Zc(e,t):e instanceof En?tu(e,t):n}function Jc(e,t){return e instanceof ys?Mr(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class gs extends $s{}class Pe extends $s{constructor(t){super(),this.elements=t}}function Zc(e,t){const n=eu(t);for(const s of e.elements)n.some(r=>Dt(r,s))||n.push(s);return{arrayValue:{values:n}}}class En extends $s{constructor(t){super(),this.elements=t}}function tu(e,t){let n=eu(t);for(const s of e.elements)n=n.filter(r=>!Dt(r,s));return{arrayValue:{values:n}}}class ys extends $s{constructor(t,n){super(),this.yt=t,this.gt=n}}function Ro(e){return Z(e.integerValue||e.doubleValue)}function eu(e){return _i(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(t,n){this.field=t,this.transform=n}}function Md(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Pe&&s instanceof Pe||n instanceof En&&s instanceof En?Oe(n.elements,s.elements,Dt):n instanceof ys&&s instanceof ys?Dt(n.gt,s.gt):n instanceof gs&&s instanceof gs}(e.transform,t.transform)}class Pd{constructor(t,n){this.version=t,this.transformResults=n}}class Lt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Lt}static exists(t){return new Lt(void 0,t)}static updateTime(t){return new Lt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Yn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class qs{}function nu(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new ru(e.key,Lt.none()):new js(e.key,e.data,Lt.none());{const n=e.data,s=yt.empty();let r=new nt(ft.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new me(e.key,s,new bt(r.toArray()),Lt.none())}}function Fd(e,t,n){e instanceof js?function(s,r,i){const o=s.value.clone(),a=Lo(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof me?function(s,r,i){if(!Yn(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Lo(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(su(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function sn(e,t,n,s){return e instanceof js?function(r,i,o,a){if(!Yn(r.precondition,i))return o;const c=r.value.clone(),u=xo(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof me?function(r,i,o,a){if(!Yn(r.precondition,i))return o;const c=xo(r.fieldTransforms,a,i),u=i.data;return u.setAll(su(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(e,t,n,s):function(r,i,o){return Yn(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function Vd(e,t){let n=null;for(const s of e.fieldTransforms){const r=t.data.field(s.field),i=Jc(s.transform,r||null);i!=null&&(n===null&&(n=yt.empty()),n.set(s.field,i))}return n||null}function Oo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Oe(n,s,(r,i)=>Md(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class js extends qs{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class me extends qs{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function su(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Lo(e,t,n){const s=new Map;Q(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,Ld(o,a,n[r]))}return s}function xo(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Od(i,o,t))}return s}class ru extends qs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ud extends qs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J,M;function $d(e){switch(e){default:return S();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function iu(e){if(e===void 0)return Pt("GRPC error has no .code"),y.UNKNOWN;switch(e){case J.OK:return y.OK;case J.CANCELLED:return y.CANCELLED;case J.UNKNOWN:return y.UNKNOWN;case J.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case J.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case J.INTERNAL:return y.INTERNAL;case J.UNAVAILABLE:return y.UNAVAILABLE;case J.UNAUTHENTICATED:return y.UNAUTHENTICATED;case J.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case J.NOT_FOUND:return y.NOT_FOUND;case J.ALREADY_EXISTS:return y.ALREADY_EXISTS;case J.PERMISSION_DENIED:return y.PERMISSION_DENIED;case J.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case J.ABORTED:return y.ABORTED;case J.OUT_OF_RANGE:return y.OUT_OF_RANGE;case J.UNIMPLEMENTED:return y.UNIMPLEMENTED;case J.DATA_LOSS:return y.DATA_LOSS;default:return S()}}(M=J||(J={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){pe(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return Vc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd=new st(b.comparator);function Vt(){return qd}const ou=new st(b.comparator);function Je(...e){let t=ou;for(const n of e)t=t.insert(n.key,n);return t}function au(e){let t=ou;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function ne(){return rn()}function cu(){return rn()}function rn(){return new ze(e=>e.toString(),(e,t)=>e.isEqual(t))}const jd=new st(b.comparator),Hd=new nt(b.comparator);function L(...e){let t=Hd;for(const n of e)t=t.add(n);return t}const Kd=new nt($);function uu(){return Kd}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const r=new Map;return r.set(t,Fn.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Hs(N.min(),r,uu(),Vt(),L())}}class Fn{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Fn(s,n,L(),L(),L())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(t,n,s,r){this.It=t,this.removedTargetIds=n,this.key=s,this.Tt=r}}class lu{constructor(t,n){this.targetId=t,this.Et=n}}class hu{constructor(t,n,s=mt.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Mo{constructor(){this.At=0,this.Rt=Fo(),this.bt=mt.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(t){t.approximateByteSize()>0&&(this.vt=!0,this.bt=t)}Ct(){let t=L(),n=L(),s=L();return this.Rt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:S()}}),new Fn(this.bt,this.Pt,t,n,s)}xt(){this.vt=!1,this.Rt=Fo()}Nt(t,n){this.vt=!0,this.Rt=this.Rt.insert(t,n)}kt(t){this.vt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class zd{constructor(t){this.$t=t,this.Bt=new Map,this.Lt=Vt(),this.qt=Po(),this.Ut=new nt($)}Kt(t){for(const n of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(n,t.Tt):this.Qt(n,t.key,t.Tt);for(const n of t.removedTargetIds)this.Qt(n,t.key,t.Tt)}jt(t){this.forEachTarget(t,n=>{const s=this.Wt(n);switch(t.state){case 0:this.zt(n)&&s.Dt(t.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(t.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(t.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(t.resumeToken));break;default:S()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(t){const n=t.targetId,s=t.Et.count,r=this.Yt(n);if(r){const i=r.target;if(Fr(i))if(s===0){const o=new b(i.path);this.Qt(n,o,ht.newNoDocument(o,N.min()))}else Q(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(t){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Fr(a.target)){const c=new b(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,ht.newNoDocument(c,t))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=L();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(t));const r=new Hs(t,n,this.Ut,this.Lt,s);return this.Lt=Vt(),this.qt=Po(),this.Ut=new nt($),r}Gt(t,n){if(!this.zt(t))return;const s=this.te(t,n.key)?2:0;this.Wt(t).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(t))}Qt(t,n,s){if(!this.zt(t))return;const r=this.Wt(t);this.te(t,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(t)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(t){this.Bt.delete(t)}Xt(t){const n=this.Wt(t).Ct();return this.$t.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ot(t){this.Wt(t).Ot()}Wt(t){let n=this.Bt.get(t);return n||(n=new Mo,this.Bt.set(t,n)),n}ee(t){let n=this.qt.get(t);return n||(n=new nt($),this.qt=this.qt.insert(t,n)),n}zt(t){const n=this.Yt(t)!==null;return n||E("WatchChangeAggregator","Detected inactive target",t),n}Yt(t){const n=this.Bt.get(t);return n&&n.Vt?null:this.$t.ne(t)}Ht(t){this.Bt.set(t,new Mo),this.$t.getRemoteKeysForTarget(t).forEach(n=>{this.Qt(t,n,null)})}te(t,n){return this.$t.getRemoteKeysForTarget(t).has(n)}}function Po(){return new st(b.comparator)}function Fo(){return new st(b.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Qd=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Wd=(()=>({and:"AND",or:"OR"}))();class Xd{constructor(t,n){this.databaseId=t,this.wt=n}}function vs(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function fu(e,t){return e.wt?t.toBase64():t.toUint8Array()}function Yd(e,t){return vs(e,t.toTimestamp())}function Ct(e){return Q(!!e),N.fromTimestamp(function(t){const n=Qt(t);return new et(n.seconds,n.nanos)}(e))}function Ci(e,t){return function(n){return new X(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function du(e){const t=X.fromString(e);return Q(yu(t)),t}function Br(e,t){return Ci(e.databaseId,t.path)}function fr(e,t){const n=du(t);if(n.get(1)!==e.databaseId.projectId)throw new T(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new T(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new b(pu(n))}function $r(e,t){return Ci(e.databaseId,t)}function Jd(e){const t=du(e);return t.length===4?X.emptyPath():pu(t)}function qr(e){return new X(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function pu(e){return Q(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Vo(e,t,n){return{name:Br(e,t),fields:n.value.mapValue.fields}}function Zd(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:S()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(c,u){return c.wt?(Q(u===void 0||typeof u=="string"),mt.fromBase64String(u||"")):(Q(u===void 0||u instanceof Uint8Array),mt.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?y.UNKNOWN:iu(c.code);return new T(u,c.message||"")}(o);n=new hu(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=fr(e,s.document.name),i=Ct(s.document.updateTime),o=s.document.createTime?Ct(s.document.createTime):N.min(),a=new yt({mapValue:{fields:s.document.fields}}),c=ht.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new Jn(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=fr(e,s.document),i=s.readTime?Ct(s.readTime):N.min(),o=ht.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Jn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=fr(e,s.document),i=s.removedTargetIds||[];n=new Jn([],i,r,null)}else{if(!("filter"in t))return S();{t.filter;const s=t.filter;s.targetId;const r=s.count||0,i=new Bd(r),o=s.targetId;n=new lu(o,i)}}return n}function tp(e,t){let n;if(t instanceof js)n={update:Vo(e,t.key,t.value)};else if(t instanceof ru)n={delete:Br(e,t.key)};else if(t instanceof me)n={update:Vo(e,t.key,t.data),updateMask:up(t.fieldMask)};else{if(!(t instanceof Ud))return S();n={verify:Br(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof gs)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Pe)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof En)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ys)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw S()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Yd(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:S()}(e,t.precondition)),n}function ep(e,t){return e&&e.length>0?(Q(t!==void 0),e.map(n=>function(s,r){let i=s.updateTime?Ct(s.updateTime):Ct(r);return i.isEqual(N.min())&&(i=Ct(r)),new Pd(i,s.transformResults||[])}(n,t))):[]}function np(e,t){return{documents:[$r(e,t.path)]}}function sp(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=$r(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=$r(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return gu(At.create(c,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Ee(l.field),direction:op(l.dir)}}(u))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.wt||Vs(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function rp(e){let t=Jd(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Q(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:t=t.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=mu(l);return h instanceof At&&jc(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new nn(be(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Vs(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new ms(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new ms(f,h)}(n.endAt)),Cd(t,r,o,i,a,"F",c,u)}function ip(e,t){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return S()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function mu(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=be(t.unaryFilter.field);return tt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=be(t.unaryFilter.field);return tt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=be(t.unaryFilter.field);return tt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=be(t.unaryFilter.field);return tt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return S()}}(e):e.fieldFilter!==void 0?function(t){return tt.create(be(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return S()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return At.create(t.compositeFilter.filters.map(n=>mu(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return S()}}(t.compositeFilter.op))}(e):S()}function op(e){return Gd[e]}function ap(e){return Qd[e]}function cp(e){return Wd[e]}function Ee(e){return{fieldPath:e.canonicalString()}}function be(e){return ft.fromServerFormat(e.fieldPath)}function gu(e){return e instanceof tt?function(t){if(t.op==="=="){if(Co(t.value))return{unaryFilter:{field:Ee(t.field),op:"IS_NAN"}};if(Io(t.value))return{unaryFilter:{field:Ee(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Co(t.value))return{unaryFilter:{field:Ee(t.field),op:"IS_NOT_NAN"}};if(Io(t.value))return{unaryFilter:{field:Ee(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ee(t.field),op:ap(t.op),value:t.value}}}(e):e instanceof At?function(t){const n=t.getFilters().map(s=>gu(s));return n.length===1?n[0]:{compositeFilter:{op:cp(t.op),filters:n}}}(e):S()}function up(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function yu(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&Fd(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=sn(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=sn(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=cu();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=nu(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(N.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),L())}isEqual(t){return this.batchId===t.batchId&&Oe(this.mutations,t.mutations,(n,s)=>Oo(n,s))&&Oe(this.baseMutations,t.baseMutations,(n,s)=>Oo(n,s))}}class Si{constructor(t,n,s,r){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(t,n,s){Q(t.mutations.length===s.length);let r=jd;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Si(t,n,s,r)}}/**
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
 */class hp{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class oe{constructor(t,n,s,r,i=N.min(),o=N.min(),a=mt.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new oe(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new oe(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new oe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(t){this.ie=t}}function dp(e){const t=rp({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Vr(t,t.limit,"L"):t}/**
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
 */class pp{constructor(){this.Je=new mp}addToCollectionParentIndex(t,n){return this.Je.add(n),g.resolve()}getCollectionParents(t,n){return g.resolve(this.Je.getEntries(n))}addFieldIndex(t,n){return g.resolve()}deleteFieldIndex(t,n){return g.resolve()}getDocumentsMatchingTarget(t,n){return g.resolve(null)}getIndexType(t,n){return g.resolve(0)}getFieldIndexes(t,n){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,n){return g.resolve(Gt.min())}getMinOffsetFromCollectionGroup(t,n){return g.resolve(Gt.min())}updateCollectionGroup(t,n,s){return g.resolve()}updateIndexEntries(t,n){return g.resolve()}}class mp{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new nt(X.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new nt(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Fe(0)}static vn(){return new Fe(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(){this.changes=new ze(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ht.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?g.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class yp{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(s!==null&&sn(s.mutation,r,bt.empty(),et.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,L()).next(()=>s))}getLocalViewOfDocuments(t,n,s=L()){const r=ne();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=Je();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=ne();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,L()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=Vt();const o=rn(),a=rn();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof me)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),sn(l.mutation,u,l.mutation.getFieldMask(),et.now())):o.set(u.key,bt.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new yp(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const s=rn();let r=new st((o,a)=>o-a),i=L();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||bt.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||L()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=cu();l.forEach(f=>{if(!i.has(f)){const d=nu(n.get(f),s.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return g.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return b.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Dd(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):g.resolve(ne());let a=-1,c=i;return o.next(u=>g.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?g.resolve():this.remoteDocumentCache.getEntry(t,l).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,c,u,L())).next(l=>({batchId:a,changes:au(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new b(n)).next(s=>{let r=Je();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=Je();return this.indexManager.getCollectionParents(t,r).next(o=>g.forEach(o,a=>{const c=function(u,l){return new Us(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(t,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,ht.newInvalidDocument(u)))});let o=Je();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&sn(u.mutation,c,bt.empty(),et.now()),Ii(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class wp{constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return g.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Ct(s.createTime)}),g.resolve()}getNamedQuery(t,n){return g.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(s){return{name:s.name,query:dp(s.bundledQuery),readTime:Ct(s.readTime)}}(n)),g.resolve()}}/**
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
 */class _p{constructor(){this.overlays=new st(b.comparator),this.es=new Map}getOverlay(t,n){return g.resolve(this.overlays.get(n))}getOverlays(t,n){const s=ne();return g.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.oe(t,n,i)}),g.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),g.resolve()}getOverlaysForCollection(t,n,s){const r=ne(),i=n.length+1,o=new b(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return g.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new st((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=ne(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=ne(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return g.resolve(a)}oe(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new hp(n,s));let i=this.es.get(n);i===void 0&&(i=L(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this.ns=new nt(rt.ss),this.rs=new nt(rt.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const s=new rt(t,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.cs(new rt(t,n))}hs(t,n){t.forEach(s=>this.removeReference(s,n))}ls(t){const n=new b(new X([])),s=new rt(n,t),r=new rt(n,t+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new b(new X([])),s=new rt(n,t),r=new rt(n,t+1);let i=L();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new rt(t,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class rt{constructor(t,n){this.key=t,this._s=n}static ss(t,n){return b.comparator(t.key,n.key)||$(t._s,n._s)}static os(t,n){return $(t._s,n._s)||b.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new nt(rt.ss)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lp(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new rt(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,n){return g.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return g.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new rt(n,0),r=new rt(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),g.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new nt($);return n.forEach(r=>{const i=new rt(r,0),o=new rt(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),g.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;b.isDocumentKey(i)||(i=i.child(""));const o=new rt(new b(i),0);let a=new nt($);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),g.resolve(this.Is(a))}Is(t){const n=[];return t.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){Q(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return g.forEach(n.mutations,r=>{const i=new rt(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.gs=s})}An(t){}containsKey(t,n){const s=new rt(n,0),r=this.gs.firstAfterOrEqual(s);return g.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(t){this.Es=t,this.docs=new st(b.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return g.resolve(s?s.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(t,n){let s=Vt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ht.newInvalidDocument(r))}),g.resolve(s)}getAllFromCollection(t,n,s){let r=Vt();const i=new b(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||cd(ad(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return g.resolve(r)}getAllFromCollectionGroup(t,n,s,r){S()}As(t,n){return g.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Tp(this)}getSize(t){return g.resolve(this.size)}}class Tp extends gp{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(t,r)):this.Yn.removeEntry(s)}),g.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(t){this.persistence=t,this.Rs=new ze(n=>Ei(n),bi),this.lastRemoteSnapshotVersion=N.min(),this.highestTargetId=0,this.bs=0,this.Ps=new ki,this.targetCount=0,this.vs=Fe.Pn()}forEachTarget(t,n){return this.Rs.forEach((s,r)=>n(r)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),g.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new Fe(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,g.resolve()}updateTargetData(t,n){return this.Dn(n),g.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),g.waitFor(i).next(()=>r)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,n){const s=this.Rs.get(n)||null;return g.resolve(s)}addMatchingKeys(t,n,s){return this.Ps.us(n,s),g.resolve()}removeMatchingKeys(t,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),g.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),g.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Ps.ds(n);return g.resolve(s)}containsKey(t,n){return g.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new wi(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Ip(this),this.indexManager=new pp,this.remoteDocumentCache=function(s){return new bp(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new fp(n),this.Ns=new wp(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new _p,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Vs[t.toKey()];return s||(s=new Ep(n,this.referenceDelegate),this.Vs[t.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,s){E("MemoryPersistence","Starting transaction:",t);const r=new Sp(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(t,n){return g.or(Object.values(this.Vs).map(s=>()=>s.containsKey(t,n)))}}class Sp extends ld{constructor(t){super(),this.currentSequenceNumber=t}}class Di{constructor(t){this.persistence=t,this.Fs=new ki,this.$s=null}static Bs(t){return new Di(t)}get Ls(){if(this.$s)return this.$s;throw S()}addReference(t,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),g.resolve()}removeReference(t,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),g.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),g.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}ks(){this.$s=new Set}Os(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Ls,s=>{const r=b.fromPath(s);return this.qs(t,r).next(i=>{i||n.removeEntry(r,N.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.qs(t,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}qs(t,n){return g.or([()=>g.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ms(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Si=s,this.Di=r}static Ci(t,n){let s=L(),r=L();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ai(t,n.fromCache,s,r)}}/**
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
 */class kp{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,s,r){return this.ki(t,n).next(i=>i||this.Oi(t,n,r,s)).next(i=>i||this.Mi(t,n))}ki(t,n){if(No(n))return g.resolve(null);let s=Ft(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Vr(n,null,"F"),s=Ft(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=L(...i);return this.Ni.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(t,Vr(n,null,"F")):this.Bi(t,u,n,c)}))})))}Oi(t,n,s,r){return No(n)||r.isEqual(N.min())?this.Mi(t,n):this.Ni.getDocuments(t,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(t,n):(Eo()<=B.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ur(n)),this.Bi(t,o,n,od(r,-1)))})}Fi(t,n){let s=new nt(Wc(t));return n.forEach((r,i)=>{Ii(t,i)&&(s=s.add(i))}),s}$i(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(t,n){return Eo()<=B.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",Ur(n)),this.Ni.getDocumentsMatchingQuery(t,n,Gt.min())}Bi(t,n,s,r){return this.Ni.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Dp{constructor(t,n,s,r){this.persistence=t,this.Li=n,this.yt=r,this.qi=new st($),this.Ui=new ze(i=>Ei(i),bi),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(s)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new vp(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.qi))}}function Ap(e,t,n,s){return new Dp(e,t,n,s)}async function vu(e,t){const n=O(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=L();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function Np(e,t){const n=O(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=g.resolve();return h.forEach(d=>{f=f.next(()=>u.getEntry(a,d)).next(p=>{const m=c.docVersions.get(d);Q(m!==null),p.version.compareTo(m)<0&&(l.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),u.addEntry(p)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,t,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=L();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,r))})}function wu(e){const t=O(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function Rp(e,t){const n=O(e),s=t.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];t.targetChanges.forEach((l,h)=>{const f=r.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.has(h)?d=d.withResumeToken(mt.EMPTY_BYTE_STRING,N.min()).withLastLimboFreeSnapshotVersion(N.min()):l.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(l.resumeToken,s)),r=r.insert(h,d),function(p,m,v){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(f,d,l)&&a.push(n.Cs.updateTargetData(i,d))});let c=Vt(),u=L();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Op(i,o,t.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!s.isEqual(N.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return g.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.qi=r,i))}function Op(e,t,n){let s=L(),r=L();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=Vt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(N.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):E("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function Lp(e,t){const n=O(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function xp(e,t){const n=O(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,t).next(i=>i?(r=i,g.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new oe(t,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(t,s.targetId)),s})}async function jr(e,t,n){const s=O(e),r=s.qi.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Pn(o))throw o;E("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.qi=s.qi.remove(t),s.Ui.delete(r.target)}function Uo(e,t,n){const s=O(e);let r=N.min(),i=L();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=O(a),h=l.Ui.get(u);return h!==void 0?g.resolve(l.qi.get(h)):l.Cs.getTargetData(c,u)}(s,o,Ft(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,t,n?r:N.min(),n?i:L())).next(a=>(Mp(s,Ad(t),a),{documents:a,Hi:i})))}function Mp(e,t,n){let s=e.Ki.get(t)||N.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.Ki.set(t,s)}class Bo{constructor(){this.activeTargetIds=uu()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Pp{constructor(){this.Lr=new Bo,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,n,s){this.qr[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new Bo,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Fp{Ur(t){}shutdown(){}}/**
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
 */class $o{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){E("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){E("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Vp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,n,s,r,i){const o=this.ho(t,n);E("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(t,o,a,s).then(c=>(E("RestConnection","Received: ",c),c),c=>{throw Lr("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}_o(t,n,s,r,i,o){return this.ao(t,n,s,r,i)}lo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ke,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}ho(t,n){const s=Vp[t];return`${this.oo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,n,s,r){return new Promise((i,o)=>{const a=new Xf;a.setWithCredentials(!0),a.listenOnce(Gf.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case hr.NO_ERROR:const u=a.getResponseJson();E("Connection","XHR received:",JSON.stringify(u)),i(u);break;case hr.TIMEOUT:E("Connection",'RPC "'+t+'" timed out'),o(new T(y.DEADLINE_EXCEEDED,"Request time out"));break;case hr.HTTP_ERROR:const l=a.getStatus();if(E("Connection",'RPC "'+t+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const d=function(p){const m=p.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(m)>=0?m:y.UNKNOWN}(f.status);o(new T(d,f.message))}else o(new T(y.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new T(y.UNAVAILABLE,"Connection failed."));break;default:S()}}finally{E("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(t,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Kf(),o=zf(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Wf({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");E("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const f=new Up({Hr:p=>{h?E("Connection","Not sending because WebChannel is closed:",p):(l||(E("Connection","Opening WebChannel transport."),u.open(),l=!0),E("Connection","WebChannel sending:",p),u.send(p))},Jr:()=>u.close()}),d=(p,m,v)=>{p.listen(m,_=>{try{v(_)}catch(A){setTimeout(()=>{throw A},0)}})};return d(u,Kn.EventType.OPEN,()=>{h||E("Connection","WebChannel transport opened.")}),d(u,Kn.EventType.CLOSE,()=>{h||(h=!0,E("Connection","WebChannel transport closed"),f.io())}),d(u,Kn.EventType.ERROR,p=>{h||(h=!0,Lr("Connection","WebChannel transport errored:",p),f.io(new T(y.UNAVAILABLE,"The operation could not be completed")))}),d(u,Kn.EventType.MESSAGE,p=>{var m;if(!h){const v=p.data[0];Q(!!v);const _=v,A=_.error||((m=_[0])===null||m===void 0?void 0:m.error);if(A){E("Connection","WebChannel received error:",A);const I=A.status;let x=function(K){const D=J[K];if(D!==void 0)return iu(D)}(I),G=A.message;x===void 0&&(x=y.INTERNAL,G="Unknown error status: "+I+" with message "+A.message),h=!0,f.io(new T(x,G)),u.close()}else E("Connection","WebChannel received:",v),f.ro(v)}}),d(o,Qf.STAT_EVENT,p=>{p.stat===wo.PROXY?E("Connection","Detected buffering proxy"):p.stat===wo.NOPROXY&&E("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function dr(){return typeof document<"u"?document:null}/**
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
 */function Ks(e){return new Xd(e,!0)}class _u{constructor(t,n,s=1e3,r=1.5,i=6e4){this.Hs=t,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&E("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(t,n,s,r,i,o,a,c){this.Hs=t,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new _u(t,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,t!==4?this.xo.reset():n&&n.code===y.RESOURCE_EXHAUSTED?(Pt(n.toString()),Pt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{t(()=>{const r=new T(y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(t,n){const s=this.Ko(this.So);this.stream=this.jo(t,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(t){return E("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return n=>{this.Hs.enqueueAndForget(()=>this.So===t?n():(E("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $p extends Eu{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.xo.reset();const n=Zd(this.yt,t),s=function(r){if(!("targetChange"in r))return N.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?N.min():i.readTime?Ct(i.readTime):N.min()}(t);return this.listener.Wo(n,s)}zo(t){const n={};n.database=qr(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=Fr(a)?{documents:np(r,a)}:{query:sp(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=fu(r,i.resumeToken):i.snapshotVersion.compareTo(N.min())>0&&(o.readTime=vs(r,i.snapshotVersion.toTimestamp())),o}(this.yt,t);const s=ip(this.yt,t);s&&(n.labels=s),this.Bo(n)}Ho(t){const n={};n.database=qr(this.yt),n.removeTarget=t,this.Bo(n)}}class qp extends Eu{constructor(t,n,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(Q(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const n=ep(t.writeResults,t.commitTime),s=Ct(t.commitTime);return this.listener.Zo(s,n)}return Q(!t.writeResults||t.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=qr(this.yt),this.Bo(t)}Xo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>tp(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new T(y.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new T(y.UNKNOWN,r.toString())})}_o(t,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new T(y.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class Hp{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,t==="Online"&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Pt(n),this.ou=!1):E("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{ge(this)&&(E("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=O(a);c._u.add(4),await Vn(c),c.gu.set("Unknown"),c._u.delete(4),await zs(c)}(this))})}),this.gu=new Hp(s,r)}}async function zs(e){if(ge(e))for(const t of e.wu)await t(!0)}async function Vn(e){for(const t of e.wu)await t(!1)}function bu(e,t){const n=O(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Oi(n)?Ri(n):Ge(n).ko()&&Ni(n,t))}function Tu(e,t){const n=O(e),s=Ge(n);n.du.delete(t),s.ko()&&Iu(n,t),n.du.size===0&&(s.ko()?s.Fo():ge(n)&&n.gu.set("Unknown"))}function Ni(e,t){e.yu.Ot(t.targetId),Ge(e).zo(t)}function Iu(e,t){e.yu.Ot(t),Ge(e).Ho(t)}function Ri(e){e.yu=new zd({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),Ge(e).start(),e.gu.uu()}function Oi(e){return ge(e)&&!Ge(e).No()&&e.du.size>0}function ge(e){return O(e)._u.size===0}function Cu(e){e.yu=void 0}async function zp(e){e.du.forEach((t,n)=>{Ni(e,t)})}async function Gp(e,t){Cu(e),Oi(e)?(e.gu.hu(t),Ri(e)):e.gu.set("Unknown")}async function Qp(e,t,n){if(e.gu.set("Online"),t instanceof hu&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(e,t)}catch(s){E("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await ws(e,s)}else if(t instanceof Jn?e.yu.Kt(t):t instanceof lu?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(N.min()))try{const s=await wu(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.du.get(c);u&&r.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(mt.EMPTY_BYTE_STRING,c.snapshotVersion)),Iu(r,a);const u=new oe(c.target,a,1,c.sequenceNumber);Ni(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){E("RemoteStore","Failed to raise snapshot:",s),await ws(e,s)}}async function ws(e,t,n){if(!Pn(t))throw t;e._u.add(1),await Vn(e),e.gu.set("Offline"),n||(n=()=>wu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{E("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await zs(e)})}function Su(e,t){return t().catch(n=>ws(e,n,t))}async function Gs(e){const t=O(e),n=Wt(t);let s=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;Wp(t);)try{const r=await Lp(t.localStore,s);if(r===null){t.fu.length===0&&n.Fo();break}s=r.batchId,Xp(t,r)}catch(r){await ws(t,r)}ku(t)&&Du(t)}function Wp(e){return ge(e)&&e.fu.length<10}function Xp(e,t){e.fu.push(t);const n=Wt(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function ku(e){return ge(e)&&!Wt(e).No()&&e.fu.length>0}function Du(e){Wt(e).start()}async function Yp(e){Wt(e).eu()}async function Jp(e){const t=Wt(e);for(const n of e.fu)t.Xo(n.mutations)}async function Zp(e,t,n){const s=e.fu.shift(),r=Si.from(s,t,n);await Su(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await Gs(e)}async function tm(e,t){t&&Wt(e).Yo&&await async function(n,s){if(r=s.code,$d(r)&&r!==y.ABORTED){const i=n.fu.shift();Wt(n).Mo(),await Su(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Gs(n)}var r}(e,t),ku(e)&&Du(e)}async function qo(e,t){const n=O(e);n.asyncQueue.verifyOperationInProgress(),E("RemoteStore","RemoteStore received new credentials");const s=ge(n);n._u.add(3),await Vn(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await zs(n)}async function em(e,t){const n=O(e);t?(n._u.delete(2),await zs(n)):t||(n._u.add(2),await Vn(n),n.gu.set("Unknown"))}function Ge(e){return e.pu||(e.pu=function(t,n,s){const r=O(t);return r.su(),new $p(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(e.datastore,e.asyncQueue,{Yr:zp.bind(null,e),Zr:Gp.bind(null,e),Wo:Qp.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Mo(),Oi(e)?Ri(e):e.gu.set("Unknown")):(await e.pu.stop(),Cu(e))})),e.pu}function Wt(e){return e.Iu||(e.Iu=function(t,n,s){const r=O(t);return r.su(),new qp(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(e.datastore,e.asyncQueue,{Yr:Yp.bind(null,e),Zr:tm.bind(null,e),tu:Jp.bind(null,e),Zo:Zp.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Mo(),await Gs(e)):(await e.Iu.stop(),e.fu.length>0&&(E("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new ie,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new Li(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new T(y.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xi(e,t){if(Pt("AsyncQueue",`${t}: ${e}`),Pn(e))return new T(y.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(t){this.comparator=t?(n,s)=>t(n,s)||b.comparator(n.key,s.key):(n,s)=>b.comparator(n.key,s.key),this.keyedMap=Je(),this.sortedSet=new st(this.comparator)}static emptySet(t){return new Ae(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ae)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Ae;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(){this.Tu=new st(b.comparator)}track(t){const n=t.doc.key,s=this.Tu.get(n);s?t.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,t):t.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Tu=this.Tu.remove(n):t.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):S():this.Tu=this.Tu.insert(n,t)}Eu(){const t=[];return this.Tu.inorderTraversal((n,s)=>{t.push(s)}),t}}class Ve{constructor(t,n,s,r,i,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ve(t,n,Ae.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Bs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(){this.Au=void 0,this.listeners=[]}}class sm{constructor(){this.queries=new ze(t=>Qc(t),Bs),this.onlineState="Unknown",this.Ru=new Set}}async function rm(e,t){const n=O(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new nm),r)try{i.Au=await n.onListen(s)}catch(o){const a=xi(o,`Initialization of query '${Ur(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.bu(n.onlineState),i.Au&&t.Pu(i.Au)&&Mi(n)}async function im(e,t){const n=O(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function om(e,t){const n=O(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Mi(n)}function am(e,t,n){const s=O(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function Mi(e){e.Ru.forEach(t=>{t.next()})}class cm{constructor(t,n,s){this.query=t,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new Ve(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),n=!0):this.Cu(t,this.onlineState)&&(this.xu(t),n=!0),this.Su=t,n}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),n=!0),n}Cu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Du(t){if(t.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(t){t=Ve.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(t){this.key=t}}class Nu{constructor(t){this.key=t}}class um{constructor(t,n){this.query=t,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=L(),this.mutatedKeys=L(),this.Gu=Wc(t),this.Qu=new Ae(this.Gu)}get ju(){return this.qu}Wu(t,n){const s=n?n.zu:new jo,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((l,h)=>{const f=r.get(l),d=Ii(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),m=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let v=!1;f&&d?f.data.isEqual(d.data)?p!==m&&(s.track({type:3,doc:d}),v=!0):this.Hu(f,d)||(s.track({type:2,doc:d}),v=!0,(c&&this.Gu(d,c)>0||u&&this.Gu(d,u)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),v=!0):f&&!d&&(s.track({type:1,doc:f}),v=!0,(c||u)&&(a=!0)),v&&(d?(o=o.add(d),i=m?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const i=t.zu.Eu();i.sort((u,l)=>function(h,f){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return S()}};return d(h)-d(f)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new Ve(this.query,t.Qu,r,i,t.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new jo,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.qu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=L(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return t.forEach(s=>{this.Ku.has(s)||n.push(new Nu(s))}),this.Ku.forEach(s=>{t.has(s)||n.push(new Au(s))}),n}tc(t){this.qu=t.Hi,this.Ku=L();const n=this.Wu(t.documents);return this.applyChanges(n,!0)}ec(){return Ve.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class lm{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class hm{constructor(t){this.key=t,this.nc=!1}}class fm{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new ze(a=>Qc(a),Bs),this.rc=new Map,this.oc=new Set,this.uc=new st(b.comparator),this.cc=new Map,this.ac=new ki,this.hc={},this.lc=new Map,this.fc=Fe.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function dm(e,t){const n=Tm(e);let s,r;const i=n.ic.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await xp(n.localStore,Ft(t));n.isPrimaryClient&&bu(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await pm(n,t,s,a==="current",o.resumeToken)}return r}async function pm(e,t,n,s,r){e._c=(h,f,d)=>async function(p,m,v,_){let A=m.view.Wu(v);A.$i&&(A=await Uo(p.localStore,m.query,!1).then(({documents:G})=>m.view.Wu(G,A)));const I=_&&_.targetChanges.get(m.targetId),x=m.view.applyChanges(A,p.isPrimaryClient,I);return Ko(p,m.targetId,x.Xu),x.snapshot}(e,h,f,d);const i=await Uo(e.localStore,t,!0),o=new um(t,i.Hi),a=o.Wu(i.documents),c=Fn.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",r),u=o.applyChanges(a,e.isPrimaryClient,c);Ko(e,n,u.Xu);const l=new lm(t,n,o);return e.ic.set(t,l),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),u.snapshot}async function mm(e,t){const n=O(e),s=n.ic.get(t),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Bs(i,t))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await jr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Tu(n.remoteStore,s.targetId),Hr(n,s.targetId)}).catch(Mn)):(Hr(n,s.targetId),await jr(n.localStore,s.targetId,!0))}async function gm(e,t,n){const s=Im(e);try{const r=await function(i,o){const a=O(i),c=et.now(),u=o.reduce((f,d)=>f.add(d.key),L());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=Vt(),p=L();return a.Gi.getEntries(f,u).next(m=>{d=m,d.forEach((v,_)=>{_.isValidDocument()||(p=p.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(m=>{l=m;const v=[];for(const _ of o){const A=Vd(_,l.get(_.key).overlayedDocument);A!=null&&v.push(new me(_.key,A,Gc(A.value.mapValue),Lt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,v,o)}).next(m=>{h=m;const v=m.applyToLocalDocumentSet(l,p);return a.documentOverlayCache.saveOverlays(f,m.batchId,v)})}).then(()=>({batchId:h.batchId,changes:au(l)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new st($)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Un(s,r.changes),await Gs(s.remoteStore)}catch(r){const i=xi(r,"Failed to persist write");n.reject(i)}}async function Ru(e,t){const n=O(e);try{const s=await Rp(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(Q(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?Q(o.nc):r.removedDocuments.size>0&&(Q(o.nc),o.nc=!1))}),await Un(n,s,t)}catch(s){await Mn(s)}}function Ho(e,t,n){const s=O(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=O(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&Mi(a)}(s.eventManager,t),r.length&&s.sc.Wo(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function ym(e,t,n){const s=O(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.cc.get(t),i=r&&r.key;if(i){let o=new st(b.comparator);o=o.insert(i,ht.newNoDocument(i,N.min()));const a=L().add(i),c=new Hs(N.min(),new Map,new nt($),o,a);await Ru(s,c),s.uc=s.uc.remove(i),s.cc.delete(t),Pi(s)}else await jr(s.localStore,t,!1).then(()=>Hr(s,t,n)).catch(Mn)}async function vm(e,t){const n=O(e),s=t.batch.batchId;try{const r=await Np(n.localStore,t);Lu(n,s,null),Ou(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Un(n,r)}catch(r){await Mn(r)}}async function wm(e,t,n){const s=O(e);try{const r=await function(i,o){const a=O(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(Q(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,t);Lu(s,t,n),Ou(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Un(s,r)}catch(r){await Mn(r)}}function Ou(e,t){(e.lc.get(t)||[]).forEach(n=>{n.resolve()}),e.lc.delete(t)}function Lu(e,t,n){const s=O(e);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),s.hc[s.currentUser.toKey()]=r}}function Hr(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.rc.get(t))e.ic.delete(s),n&&e.sc.wc(s,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(s=>{e.ac.containsKey(s)||xu(e,s)})}function xu(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);n!==null&&(Tu(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),Pi(e))}function Ko(e,t,n){for(const s of n)s instanceof Au?(e.ac.addReference(s.key,t),_m(e,s)):s instanceof Nu?(E("SyncEngine","Document no longer in limbo: "+s.key),e.ac.removeReference(s.key,t),e.ac.containsKey(s.key)||xu(e,s.key)):S()}function _m(e,t){const n=t.key,s=n.path.canonicalString();e.uc.get(n)||e.oc.has(s)||(E("SyncEngine","New document in limbo: "+n),e.oc.add(s),Pi(e))}function Pi(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new b(X.fromString(t)),s=e.fc.next();e.cc.set(s,new hm(n)),e.uc=e.uc.insert(n,s),bu(e.remoteStore,new oe(Ft(Ti(n.path)),s,2,wi.at))}}async function Un(e,t,n){const s=O(e),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,t,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=Ai.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const u=O(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>g.forEach(c,h=>g.forEach(h.Si,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>g.forEach(h.Di,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!Pn(l))throw l;E("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.qi.get(h),d=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(d);u.qi=u.qi.insert(h,p)}}}(s.localStore,i))}async function Em(e,t){const n=O(e);if(!n.currentUser.isEqual(t)){E("SyncEngine","User change. New user:",t.toKey());const s=await vu(n.localStore,t);n.currentUser=t,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new T(y.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Un(n,s.ji)}}function bm(e,t){const n=O(e),s=n.cc.get(t);if(s&&s.nc)return L().add(s.key);{let r=L();const i=n.rc.get(t);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function Tm(e){const t=O(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ru.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=bm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ym.bind(null,t),t.sc.Wo=om.bind(null,t.eventManager),t.sc.wc=am.bind(null,t.eventManager),t}function Im(e){const t=O(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=vm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=wm.bind(null,t),t}class Cm{constructor(){this.synchronizeTabs=!1}async initialize(t){this.yt=Ks(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,n){return null}Ec(t,n){return null}Ic(t){return Ap(this.persistence,new kp,t.initialUser,this.yt)}yc(t){return new Cp(Di.Bs,this.yt)}gc(t){return new Pp}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Sm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ho(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Em.bind(null,this.syncEngine),await em(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new sm}createDatastore(t){const n=Ks(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new Bp(r));var r;return function(i,o,a,c){return new jp(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>Ho(this.syncEngine,a,0),o=$o.C()?new $o:new Fp,new Kp(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,c,u){const l=new fm(s,r,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=O(t);E("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Vn(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(e,t,n){if(!n)throw new T(y.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Dm(e,t,n,s){if(t===!0&&s===!0)throw new T(y.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function zo(e){if(!b.isDocumentKey(e))throw new T(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Fi(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":S()}function Ne(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new T(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fi(e);throw new T(y.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */const Go=new Map;class Qo{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new T(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new T(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Dm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class Vi{constructor(t,n,s,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new T(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qo(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Yf;switch(n.type){case"gapi":const s=n.client;return new ed(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new T(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Go.get(t);n&&(E("ComponentProvider","Removing Datastore"),Go.delete(t),n.terminate())}(this),Promise.resolve()}}function Am(e,t,n,s={}){var r;const i=(e=Ne(e,Vi))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==t&&Lr("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=lt.MOCK_USER;else{o=Ol(s.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new T(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new lt(c)}e._authCredentials=new Jf(new Pc(o,a))}}/**
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
 */class wt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new wt(this.firestore,t,this._key)}}class Qs{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Qs(this.firestore,t,this._query)}}class bn extends Qs{constructor(t,n,s){super(t,n,Ti(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new wt(this.firestore,null,new b(t))}withConverter(t){return new bn(this.firestore,t,this._path)}}function Nm(e,t,...n){if(e=zt(e),arguments.length===1&&(t=Fc.R()),km("doc","path",t),e instanceof Vi){const s=X.fromString(t,...n);return zo(s),new wt(e,null,new b(s))}{if(!(e instanceof wt||e instanceof bn))throw new T(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(X.fromString(t,...n));return zo(s),new wt(e.firestore,e instanceof bn?e.converter:null,new b(s))}}/**
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
 */class Rm{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):Pt("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=lt.UNAUTHENTICATED,this.clientId=Fc.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{E("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(E("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ie;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=xi(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Lm(e,t){e.asyncQueue.verifyOperationInProgress(),E("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await vu(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function xm(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Mm(e);E("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>qo(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>qo(t.remoteStore,i)),e.onlineComponents=t}async function Mm(e){return e.offlineComponents||(E("FirestoreClient","Using default OfflineComponentProvider"),await Lm(e,new Cm)),e.offlineComponents}async function Mu(e){return e.onlineComponents||(E("FirestoreClient","Using default OnlineComponentProvider"),await xm(e,new Sm)),e.onlineComponents}function Pm(e){return Mu(e).then(t=>t.syncEngine)}async function Wo(e){const t=await Mu(e),n=t.eventManager;return n.onListen=dm.bind(null,t.syncEngine),n.onUnlisten=mm.bind(null,t.syncEngine),n}class Fm{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new _u(this,"async_queue_retry"),this.Wc=()=>{const n=dr();n&&E("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=dr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const n=dr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise(()=>{});const n=new ie;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!Pn(t))throw t;E("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Pt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(t,n,s){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const r=Li.createAndSchedule(this,t,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&S()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.Uc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.Uc.indexOf(t);this.Uc.splice(n,1)}}function Xo(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(e,["next","error","complete"])}class _s extends Vi{constructor(t,n,s,r){super(t,n,s,r),this.type="firestore",this._queue=new Fm,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Fu(this),this._firestoreClient.terminate()}}function Vm(e,t){const n=typeof e=="object"?e:Ph(),s=typeof e=="string"?e:t||"(default)",r=Oh(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Al("firestore");i&&Am(r,...i)}return r}function Pu(e){return e._firestoreClient||Fu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Fu(e){var t;const n=e._freezeSettings(),s=function(r,i,o,a){return new hd(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Om(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
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
 */class Ue{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ue(mt.fromBase64String(t))}catch(n){throw new T(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ue(mt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Ws{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new T(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Xs{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new T(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new T(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return $(this._lat,t._lat)||$(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=/^__.*__$/;class Vu{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new me(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Uu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw S()}}class Ys{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new Ys(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ia({path:s,oa:!1});return r.ua(t),r}ca(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ia({path:s,oa:!1});return r.na(),r}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return Es(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(t.length===0)throw this.ha("Document fields must not be empty");if(Uu(this.sa)&&Um.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class Bm{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.yt=s||Ks(t)}da(t,n,s,r=!1){return new Ys({sa:t,methodName:n,fa:s,path:ft.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function $m(e){const t=e._freezeSettings(),n=Ks(e._databaseId);return new Bm(e._databaseId,!!t.ignoreUndefinedProperties,n)}class Js extends Xs{_toFieldTransform(t){if(t.sa!==2)throw t.sa===1?t.ha(`${this._methodName}() can only appear at the top level of your update data`):t.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Js}}function qm(e,t,n){return new Ys({sa:3,fa:t.settings.fa,methodName:e._methodName,oa:n},t.databaseId,t.yt,t.ignoreUndefinedProperties)}class jm extends Xs{constructor(t,n){super(t),this._a=n}_toFieldTransform(t){const n=qm(this,t,!0),s=this._a.map(i=>Bn(i,n)),r=new Pe(s);return new xd(t.path,r)}isEqual(t){return this===t}}function Hm(e,t,n,s){const r=e.da(1,t,n);$u("Data must be an object, but it was:",r,s);const i=[],o=yt.empty();pe(s,(c,u)=>{const l=Bi(t,c,n);u=zt(u);const h=r.ca(l);if(u instanceof Js)i.push(l);else{const f=Bn(u,h);f!=null&&(i.push(l),o.set(l,f))}});const a=new bt(i);return new Vu(o,a,r.fieldTransforms)}function Km(e,t,n,s,r,i){const o=e.da(1,t,n),a=[Yo(t,s,n)],c=[r];if(i.length%2!=0)throw new T(y.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Yo(t,i[f])),c.push(i[f+1]);const u=[],l=yt.empty();for(let f=a.length-1;f>=0;--f)if(!Qm(u,a[f])){const d=a[f];let p=c[f];p=zt(p);const m=o.ca(d);if(p instanceof Js)u.push(d);else{const v=Bn(p,m);v!=null&&(u.push(d),l.set(d,v))}}const h=new bt(u);return new Vu(l,h,o.fieldTransforms)}function Bn(e,t){if(Bu(e=zt(e)))return $u("Unsupported field value:",t,e),zm(e,t);if(e instanceof Xs)return function(n,s){if(!Uu(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&t.sa!==4)throw t.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Bn(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=zt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Rd(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=et.fromDate(n);return{timestampValue:vs(s.yt,r)}}if(n instanceof et){const r=new et(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:vs(s.yt,r)}}if(n instanceof Ui)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ue)return{bytesValue:fu(s.yt,n._byteString)};if(n instanceof wt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ci(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Fi(n)}`)}(e,t)}function zm(e,t){const n={};return Vc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):pe(e,(s,r)=>{const i=Bn(r,t.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Bu(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof et||e instanceof Ui||e instanceof Ue||e instanceof wt||e instanceof Xs)}function $u(e,t,n){if(!Bu(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Fi(n);throw s==="an object"?t.ha(e+" a custom object"):t.ha(e+" "+s)}}function Yo(e,t,n){if((t=zt(t))instanceof Ws)return t._internalPath;if(typeof t=="string")return Bi(e,t);throw Es("Field path arguments must be of type string or ",e,!1,void 0,n)}const Gm=new RegExp("[~\\*/\\[\\]]");function Bi(e,t,n){if(t.search(Gm)>=0)throw Es(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ws(...t.split("."))._internalPath}catch{throw Es(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Es(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new T(y.INVALID_ARGUMENT,a+e+c)}function Qm(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class qu{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Wm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(ju("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Wm extends qu{data(){return super.data()}}function ju(e,t){return typeof t=="string"?Bi(e,t):t instanceof Ws?t._internalPath:t._delegate._internalPath}/**
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
 */function Xm(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new T(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ym{convertValue(t,n="none"){switch(he(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Le(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw S()}}convertObject(t,n){const s={};return pe(t.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new Ui(Z(t.latitude),Z(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Bc(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(wn(t));default:return null}}convertTimestamp(t){const n=Qt(t);return new et(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=X.fromString(t);Q(yu(s));const r=new vn(s.get(1),s.get(3)),i=new b(s.popFirst(5));return r.isEqual(n)||Pt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class Ze{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Hu extends qu{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Zn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(ju("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Zn extends Hu{data(t={}){return super.data(t)}}class Jm{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new Ze(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Zn(this._firestore,this._userDataWriter,s.key,s,new Ze(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new T(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Zn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ze(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Zn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ze(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:Zm(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Zm(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return S()}}class Ku extends Ym{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ue(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function tg(e,t,n,...s){e=Ne(e,wt);const r=Ne(e.firestore,_s),i=$m(r);let o;return o=typeof(t=zt(t))=="string"||t instanceof Ws?Km(i,"updateDoc",e._key,t,n,s):Hm(i,"updateDoc",e._key,t),ng(r,[o.toMutation(e._key,Lt.exists(!0))])}function eg(e,...t){var n,s,r;e=zt(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Xo(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Xo(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),t[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,u,l;if(e instanceof wt)u=Ne(e.firestore,_s),l=Ti(e._key.path),c={next:h=>{t[o]&&t[o](sg(u,e,h))},error:t[o+1],complete:t[o+2]};else{const h=Ne(e,Qs);u=Ne(h.firestore,_s),l=h._query;const f=new Ku(u);c={next:d=>{t[o]&&t[o](new Jm(u,f,h,d))},error:t[o+1],complete:t[o+2]},Xm(e._query)}return function(h,f,d,p){const m=new Rm(p),v=new cm(f,m,d);return h.asyncQueue.enqueueAndForget(async()=>rm(await Wo(h),v)),()=>{m.bc(),h.asyncQueue.enqueueAndForget(async()=>im(await Wo(h),v))}}(Pu(u),l,a,c)}function ng(e,t){return function(n,s){const r=new ie;return n.asyncQueue.enqueueAndForget(async()=>gm(await Pm(n),s,r)),r.promise}(Pu(e),t)}function sg(e,t,n){const s=n.docs.get(t._key),r=new Ku(e);return new Hu(e,r,t._key,s,new Ze(n.hasPendingWrites,n.fromCache),t.converter)}function rg(...e){return new jm("arrayUnion",e)}(function(e,t=!0){(function(n){Ke=n})(Mh),is(new ln("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new _s(new Zf(n.getProvider("auth-internal")),new sd(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new T(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vn(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),ke(_o,"3.8.1",e),ke(_o,"3.8.1","esm2017")})();const ig={apiKey:"AIzaSyDbBV7DT8DNmxyLPUB_w0skCx6bQjDIDhE",authDomain:"nocontextquotes-86d30.firebaseapp.com",projectId:"nocontextquotes-86d30",storageBucket:"nocontextquotes-86d30.appspot.com",messagingSenderId:"704558739601",appId:"1:704558739601:web:f92bb50736b7c0cb360f30",measurementId:"G-RHFY5NDBMG"},og=Ra(ig),ag=Vm(og);function $i(e){const t=e-1;return t*t*t+1}function Jo(e){return--e*e*e*e*e+1}function cg(e,{delay:t=0,duration:n=400,easing:s=fe}={}){const r=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:s,css:i=>`opacity: ${i*r}`}}function ug(e,{delay:t=0,duration:n=400,easing:s=$i,x:r=0,y:i=0,opacity:o=0}={}){const a=getComputedStyle(e),c=+a.opacity,u=a.transform==="none"?"":a.transform,l=c*(1-o);return{delay:t,duration:n,easing:s,css:(h,f)=>`
			transform: ${u} translate(${(1-h)*r}px, ${(1-h)*i}px);
			opacity: ${c-l*f}`}}function Zo(e,{delay:t=0,duration:n=400,easing:s=$i,start:r=0,opacity:i=0}={}){const o=getComputedStyle(e),a=+o.opacity,c=o.transform==="none"?"":o.transform,u=1-r,l=a*(1-i);return{delay:t,duration:n,easing:s,css:(h,f)=>`
			transform: ${c} scale(${1-u*f});
			opacity: ${a-l*f}
		`}}function lg(e,{from:t,to:n},s={}){const r=getComputedStyle(e),i=r.transform==="none"?"":r.transform,[o,a]=r.transformOrigin.split(" ").map(parseFloat),c=t.left+t.width*o/n.width-(n.left+o),u=t.top+t.height*a/n.height-(n.top+a),{delay:l=0,duration:h=d=>Math.sqrt(d)*120,easing:f=$i}=s;return{delay:l,duration:Xt(h)?h(Math.sqrt(c*c+u*u)):h,easing:f,css:(d,p)=>{const m=p*c,v=p*u,_=d+p*t.width/n.width,A=d+p*t.height/n.height;return`transform: ${i} translate(${m}px, ${v}px) scale(${_}, ${A});`}}}const ve=[];function zu(e,t=R){let n;const s=new Set;function r(a){if(Ut(e,a)&&(e=a,n)){const c=!ve.length;for(const u of s)u[1](),ve.push(u,e);if(c){for(let u=0;u<ve.length;u+=2)ve[u][0](ve[u+1]);ve.length=0}}}function i(a){r(a(e))}function o(a,c=R){const u=[a,c];return s.add(u),s.size===1&&(n=t(r)||R),a(e),()=>{s.delete(u),s.size===0&&(n(),n=null)}}return{set:r,update:i,subscribe:o}}const hg={duration:4e3,initial:1,next:0,pausable:!1,dismissable:!0,reversed:!1,intro:{x:256}},fg=()=>{const{subscribe:e,update:t}=zu([]);let n=0;const s={},r=u=>u instanceof Object;return{subscribe:e,push:(u,l={})=>{const h={target:"default",...r(u)?u:{...l,msg:u}},f=s[h.target]||{},d={...hg,...f,...h,theme:{...f.theme,...h.theme},classes:[...f.classes||[],...h.classes||[]],id:++n};return t(p=>d.reversed?[...p,d]:[d,...p]),n},pop:u=>{t(l=>{if(!l.length||u===0)return[];if(r(u))return l.filter(f=>u(f));const h=u||Math.max(...l.map(f=>f.id));return l.filter(f=>f.id!==h)})},set:(u,l={})=>{const h=r(u)?{...u}:{...l,id:u};t(f=>{const d=f.findIndex(p=>p.id===h.id);return d>-1&&(f[d]={...f[d],...h}),f})},_init:(u="default",l={})=>(s[u]=l,s)}},Tn=fg();function ta(e){return Object.prototype.toString.call(e)==="[object Date]"}function Kr(e,t){if(e===t||e!==e)return()=>e;const n=typeof e;if(n!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const s=t.map((r,i)=>Kr(e[i],r));return r=>s.map(i=>i(r))}if(n==="object"){if(!e||!t)throw new Error("Object cannot be null");if(ta(e)&&ta(t)){e=e.getTime(),t=t.getTime();const i=t-e;return o=>new Date(e+o*i)}const s=Object.keys(t),r={};return s.forEach(i=>{r[i]=Kr(e[i],t[i])}),i=>{const o={};return s.forEach(a=>{o[a]=r[a](i)}),o}}if(n==="number"){const s=t-e;return r=>e+r*s}throw new Error(`Cannot interpolate ${n} values`)}function dg(e,t={}){const n=zu(e);let s,r=e;function i(o,a){if(e==null)return n.set(e=o),Promise.resolve();r=o;let c=s,u=!1,{delay:l=0,duration:h=400,easing:f=fe,interpolate:d=Kr}=ae(ae({},t),a);if(h===0)return c&&(c.abort(),c=null),n.set(e=r),Promise.resolve();const p=In()+l;let m;return s=Cn(v=>{if(v<p)return!0;u||(m=d(e,o),typeof h=="function"&&(h=h(e,o)),u=!0),c&&(c.abort(),c=null);const _=v-p;return _>h?(n.set(e=o),!1):(n.set(e=m(f(_/h))),!0)}),s.promise}return{set:i,update:(o,a)=>i(o(r,e),a),subscribe:n.subscribe}}function pg(e){let t,n=e[0].msg+"",s;return{c(){t=new sl(!1),s=Bt(),t.a=s},m(r,i){t.m(n,r,i),H(r,s,i)},p(r,i){i&1&&n!==(n=r[0].msg+"")&&t.p(n)},i:R,o:R,d(r){r&&U(s),r&&t.d()}}}function mg(e){let t,n,s;const r=[e[2]];var i=e[0].component.src;function o(a){let c={};for(let u=0;u<r.length;u+=1)c=ae(c,r[u]);return{props:c}}return i&&(t=Qi(i,o())),{c(){t&&xt(t.$$.fragment),n=Bt()},m(a,c){t&&St(t,a,c),H(a,n,c),s=!0},p(a,c){const u=c&4?Ta(r,[wl(a[2])]):{};if(i!==(i=a[0].component.src)){if(t){$t();const l=t;j(l.$$.fragment,1,0,()=>{kt(l,1)}),qt()}i?(t=Qi(i,o()),xt(t.$$.fragment),V(t.$$.fragment,1),St(t,n.parentNode,n)):t=null}else i&&t.$set(u)},i(a){s||(t&&V(t.$$.fragment,a),s=!0)},o(a){t&&j(t.$$.fragment,a),s=!1},d(a){a&&U(n),t&&kt(t,a)}}}function ea(e){let t,n,s;return{c(){t=q("div"),C(t,"class","_toastBtn pe svelte-l65oht"),C(t,"role","button"),C(t,"tabindex","0")},m(r,i){H(r,t,i),n||(s=[Et(t,"click",e[4]),Et(t,"keydown",e[8])],n=!0)},p:R,d(r){r&&U(t),n=!1,Nt(s)}}}function gg(e){let t,n,s,r,i,o,a,c,u,l;const h=[mg,pg],f=[];function d(m,v){return m[0].component?0:1}s=d(e),r=f[s]=h[s](e);let p=e[0].dismissable&&ea(e);return{c(){t=q("div"),n=q("div"),r.c(),i=at(),p&&p.c(),o=at(),a=q("progress"),C(n,"role","status"),C(n,"class","_toastMsg svelte-l65oht"),Ie(n,"pe",e[0].component),C(a,"class","_toastBar svelte-l65oht"),a.value=e[1],C(t,"class","_toastItem svelte-l65oht"),Ie(t,"pe",e[0].pausable)},m(m,v){H(m,t,v),F(t,n),f[s].m(n,null),F(t,i),p&&p.m(t,null),F(t,o),F(t,a),c=!0,u||(l=[Et(t,"mouseenter",e[9]),Et(t,"mouseleave",e[6])],u=!0)},p(m,[v]){let _=s;s=d(m),s===_?f[s].p(m,v):($t(),j(f[_],1,1,()=>{f[_]=null}),qt(),r=f[s],r?r.p(m,v):(r=f[s]=h[s](m),r.c()),V(r,1),r.m(n,null)),(!c||v&1)&&Ie(n,"pe",m[0].component),m[0].dismissable?p?p.p(m,v):(p=ea(m),p.c(),p.m(t,o)):p&&(p.d(1),p=null),(!c||v&2)&&(a.value=m[1]),(!c||v&1)&&Ie(t,"pe",m[0].pausable)},i(m){c||(V(r),c=!0)},o(m){j(r),c=!1},d(m){m&&U(t),f[s].d(),p&&p.d(),u=!1,Nt(l)}}}function yg(e,t,n){let s,{item:r}=t;const i=dg(r.initial,{duration:r.duration,easing:fe});ha(e,i,I=>n(1,s=I));const o=()=>Tn.pop(r.id),a=()=>{(s===1||s===0)&&o()};let c=r.initial,u=c,l=!1;const h=()=>{!l&&s!==c&&(i.set(s,{duration:0}),l=!0)},f=()=>{if(l){const I=r.duration,x=I-I*((s-u)/(c-u));i.set(c,{duration:x}).then(a),l=!1}};let d={};const p=(I,x="undefined")=>typeof I===x;let m;ul((I=document)=>{if(p(I.hidden))return;const x=()=>I.hidden?h():f(),G="visibilitychange";I.addEventListener(G,x),m=()=>I.removeEventListener(G,x),x()}),ll(()=>{p(r.onpop,"function")&&r.onpop(r.id),m&&m()});const _=I=>{I instanceof KeyboardEvent&&["Enter"," "].includes(I.key)&&o()},A=()=>{r.pausable&&h()};return e.$$set=I=>{"item"in I&&n(0,r=I.item)},e.$$.update=()=>{if(e.$$.dirty&1&&(p(r.progress)||n(0,r.next=r.progress,r)),e.$$.dirty&131&&c!==r.next&&(n(7,c=r.next),u=s,l=!1,i.set(c).then(a)),e.$$.dirty&1&&r.component){const{props:I={},sendIdTo:x}=r.component;n(2,d={...I,...x&&{[x]:r.id}})}},[r,s,d,i,o,h,f,c,_,A]}class vg extends $e{constructor(t){super(),Be(this,t,yg,gg,Ut,{item:0})}}function na(e,t,n){const s=e.slice();return s[5]=t[n],s}function sa(e,t){let n,s,r,i,o,a,c,u,l=R,h;return s=new vg({props:{item:t[5]}}),{key:e,first:null,c(){n=q("li"),xt(s.$$.fragment),r=at(),C(n,"class",i=Ki(t[5].classes.join(" "))+" svelte-yh90az"),C(n,"style",o=t[1](t[5].theme)),this.first=n},m(f,d){H(f,n,d),St(s,n,null),F(n,r),h=!0},p(f,d){t=f;const p={};d&1&&(p.item=t[5]),s.$set(p),(!h||d&1&&i!==(i=Ki(t[5].classes.join(" "))+" svelte-yh90az"))&&C(n,"class",i),(!h||d&1&&o!==(o=t[1](t[5].theme)))&&C(n,"style",o)},r(){u=n.getBoundingClientRect()},f(){cl(n),l(),Ea(n,u)},a(){l(),l=al(n,u,lg,{duration:200})},i(f){h||(V(s.$$.fragment,f),Kt(()=>{c&&c.end(1),a=pl(n,ug,t[5].intro),a.start()}),h=!0)},o(f){j(s.$$.fragment,f),a&&a.invalidate(),c=ml(n,cg,{}),h=!1},d(f){f&&U(n),kt(s),f&&c&&c.end()}}}function wg(e){let t,n=[],s=new Map,r,i=e[0];const o=a=>a[5].id;for(let a=0;a<i.length;a+=1){let c=na(e,i,a),u=o(c);s.set(u,n[a]=sa(u,c))}return{c(){t=q("ul");for(let a=0;a<n.length;a+=1)n[a].c();C(t,"class","_toastContainer svelte-yh90az")},m(a,c){H(a,t,c);for(let u=0;u<n.length;u+=1)n[u].m(t,null);r=!0},p(a,[c]){if(c&3){i=a[0],$t();for(let u=0;u<n.length;u+=1)n[u].r();n=vl(n,c,o,1,a,i,s,t,yl,sa,null,na);for(let u=0;u<n.length;u+=1)n[u].a();qt()}},i(a){if(!r){for(let c=0;c<i.length;c+=1)V(n[c]);r=!0}},o(a){for(let c=0;c<n.length;c+=1)j(n[c]);r=!1},d(a){a&&U(t);for(let c=0;c<n.length;c+=1)n[c].d()}}}function _g(e,t,n){let s;ha(e,Tn,c=>n(4,s=c));let{options:r={}}=t,{target:i="default"}=t,o;const a=c=>Object.keys(c).reduce((u,l)=>`${u}${l}:${c[l]};`,"");return e.$$set=c=>{"options"in c&&n(2,r=c.options),"target"in c&&n(3,i=c.target)},e.$$.update=()=>{e.$$.dirty&12&&Tn._init(i,r),e.$$.dirty&24&&n(0,o=s.filter(c=>c.target===i))},[o,a,r,i,s]}class Eg extends $e{constructor(t){super(),Be(this,t,_g,wg,Ut,{options:2,target:3})}}const bg="modulepreload",Tg=function(e){return"/"+e},ra={},we=function(t,n,s){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Tg(i),i in ra)return;ra[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let l=r.length-1;l>=0;l--){const h=r[l];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":bg,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};function Ig(e){let t,n,s,r={ctx:e,current:null,token:null,hasCatch:!1,pending:Rg,then:kg,catch:Sg,blocks:[,,,]};return ns(n=e[6](),r),{c(){t=Bt(),r.block.c()},m(i,o){H(i,t,o),r.block.m(i,r.anchor=o),r.mount=()=>t.parentNode,r.anchor=t,s=!0},p(i,o){e=i,r.ctx=e,o&64&&n!==(n=e[6]())&&ns(n,r)||ba(r,e,o)},i(i){s||(V(r.block),s=!0)},o(i){for(let o=0;o<3;o+=1){const a=r.blocks[o];j(a)}s=!1},d(i){i&&U(t),r.block.d(i),r.token=null,r=null}}}function Cg(e){let t,n;const s=e[24].default,r=fa(s,e,e[23],null);return{c(){t=q("div"),r&&r.c(),C(t,"class","typewriter-container svelte-1gv2i7t")},m(i,o){H(i,t,o),r&&r.m(t,null),n=!0},p(i,o){r&&r.p&&(!n||o&8388608)&&ma(r,s,i,i[23],n?pa(s,i[23],o,null):ga(i[23]),null)},i(i){n||(V(r,i),n=!0)},o(i){j(r,i),n=!1},d(i){i&&U(t),r&&r.d(i)}}}function Sg(e){return{c:R,m:R,p:R,i:R,o:R,d:R}}function kg(e){let t,n,s,r={ctx:e,current:null,token:null,hasCatch:!1,pending:Ng,then:Ag,catch:Dg,value:25,blocks:[,,,]};return ns(n=e[7][e[0]](),r),{c(){t=Bt(),r.block.c()},m(i,o){H(i,t,o),r.block.m(i,r.anchor=o),r.mount=()=>t.parentNode,r.anchor=t,s=!0},p(i,o){e=i,r.ctx=e,o&1&&n!==(n=e[7][e[0]]())&&ns(n,r)||ba(r,e,o)},i(i){s||(V(r.block),s=!0)},o(i){for(let o=0;o<3;o+=1){const a=r.blocks[o];j(a)}s=!1},d(i){i&&U(t),r.block.d(i),r.token=null,r=null}}}function Dg(e){return{c:R,m:R,p:R,i:R,o:R,d:R}}function Ag(e){let t=e[4],n,s,r=e[4]&&pr(e);return{c(){r&&r.c(),n=Bt()},m(i,o){r&&r.m(i,o),H(i,n,o),s=!0},p(i,o){i[4]?t?Ut(t,i[4])?(r.d(1),r=pr(i),r.c(),r.m(n.parentNode,n)):r.p(i,o):(r=pr(i),r.c(),r.m(n.parentNode,n)):t&&(r.d(1),r=null),t=i[4]},i(i){s||(V(r),s=!0)},o(i){j(r),s=!1},d(i){i&&U(n),r&&r.d(i)}}}function pr(e){let t,n,s,r,i;const o=e[24].default,a=fa(o,e,e[23],null);let c=[{class:"typewriter-container svelte-1gv2i7t"}],u={};for(let l=0;l<c.length;l+=1)u=ae(u,c[l]);return{c(){t=q(e[4]),a&&a.c(),/-/.test(e[4])?Gi(t,u):zi(t,u),Ie(t,"cursor",e[1])},m(l,h){H(l,t,h),a&&a.m(t,null),s=!0,r||(i=Xu(n=e[25].default(t,e[5])),r=!0)},p(l,h){a&&a.p&&(!s||h&8388608)&&ma(a,o,l,l[23],s?pa(o,l[23],h,null):ga(l[23]),null),u=Ta(c,[{class:"typewriter-container svelte-1gv2i7t"}]),/-/.test(l[4])?Gi(t,u):zi(t,u),n&&Xt(n.update)&&h&32&&n.update.call(null,l[5]),Ie(t,"cursor",l[1])},i(l){s||(V(a,l),s=!0)},o(l){j(a,l),s=!1},d(l){l&&U(t),a&&a.d(l),r=!1,i()}}}function Ng(e){return{c:R,m:R,p:R,i:R,o:R,d:R}}function Rg(e){let t,n=e[2]&&ia();return{c(){n&&n.c(),t=Bt()},m(s,r){n&&n.m(s,r),H(s,t,r)},p(s,r){s[2]?n||(n=ia(),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:R,o:R,d(s){n&&n.d(s),s&&U(t)}}}function ia(e){let t;return{c(){t=q("div"),t.innerHTML='<p class="typing"></p>',C(t,"class","typewriter-container cursor svelte-1gv2i7t")},m(n,s){H(n,t,s)},d(n){n&&U(t)}}}function oa(e){let t,n,s,r;const i=[Cg,Ig],o=[];function a(c,u){return c[3]?0:1}return t=a(e),n=o[t]=i[t](e),{c(){n.c(),s=Bt()},m(c,u){o[t].m(c,u),H(c,s,u),r=!0},p(c,u){let l=t;t=a(c),t===l?o[t].p(c,u):($t(),j(o[l],1,1,()=>{o[l]=null}),qt(),n=o[t],n?n.p(c,u):(n=o[t]=i[t](c),n.c()),V(n,1),n.m(s.parentNode,s))},i(c){r||(V(n),r=!0)},o(c){j(n),r=!1},d(c){o[t].d(c),c&&U(s)}}}function Og(e){let t,n=e[8],s,r,i=oa(e);return{c(){t=at(),i.c(),s=Bt()},m(o,a){H(o,t,a),i.m(o,a),H(o,s,a),r=!0},p(o,[a]){a&256&&Ut(n,n=o[8])?($t(),j(i,1,1,R),qt(),i=oa(o),i.c(),V(i,1),i.m(s.parentNode,s)):i.p(o,a)},i(o){r||(V(i),r=!0)},o(o){j(i),r=!1},d(o){o&&U(t),o&&U(s),i.d(o)}}}function Lg(e,t,n){let s,r,i,o,a,c,u,l,h,{$$slots:f={},$$scope:d}=t,{mode:p="concurrent"}=t,{interval:m=30}=t,{cursor:v=!0}=t,{keepCursorOnFinish:_=!1}=t,{delay:A=0}=t,{showCursorOnDelay:I=!1}=t,{disabled:x=!1}=t,{element:G="div"}=t,{scrambleDuration:K=3e3}=t,{scrambleSlowdown:D=!0}=t,{unwriteInterval:z=30}=t,{wordInterval:_t=1500}=t;const $n={concurrent:()=>we(()=>import("./concurrent.a197f214.js"),["assets/concurrent.a197f214.js","assets/writeEffect.5d9dd4df.js","assets/animationSetup.acf1beaa.js"]),cascade:()=>we(()=>import("./cascade.f6df173a.js"),["assets/cascade.f6df173a.js","assets/writeEffect.5d9dd4df.js","assets/animationSetup.acf1beaa.js"]),loop:()=>we(()=>import("./loop.0288393a.js"),["assets/loop.0288393a.js","assets/writeAndUnwriteText.82c65c77.js","assets/writeEffect.5d9dd4df.js","assets/animationSetup.acf1beaa.js","assets/unwriteEffect.05e4a4c1.js"]),loopOnce:()=>we(()=>import("./loopOnce.5912ba27.js"),["assets/loopOnce.5912ba27.js","assets/animationSetup.acf1beaa.js","assets/writeEffect.5d9dd4df.js","assets/unwriteEffect.05e4a4c1.js"]),loopRandom:()=>we(()=>import("./loopRandom.03d934f8.js"),["assets/loopRandom.03d934f8.js","assets/writeAndUnwriteText.82c65c77.js","assets/writeEffect.5d9dd4df.js","assets/animationSetup.acf1beaa.js","assets/unwriteEffect.05e4a4c1.js"]),scramble:()=>we(()=>import("./scramble.e443c323.js"),["assets/scramble.e443c323.js","assets/animationSetup.acf1beaa.js"])};return e.$$set=P=>{n(8,t=ae(ae({},t),Hi(P))),"mode"in P&&n(0,p=P.mode),"interval"in P&&n(9,m=P.interval),"cursor"in P&&n(1,v=P.cursor),"keepCursorOnFinish"in P&&n(10,_=P.keepCursorOnFinish),"delay"in P&&n(11,A=P.delay),"showCursorOnDelay"in P&&n(2,I=P.showCursorOnDelay),"disabled"in P&&n(3,x=P.disabled),"element"in P&&n(4,G=P.element),"scrambleDuration"in P&&n(12,K=P.scrambleDuration),"scrambleSlowdown"in P&&n(13,D=P.scrambleSlowdown),"unwriteInterval"in P&&n(14,z=P.unwriteInterval),"wordInterval"in P&&n(15,_t=P.wordInterval),"$$scope"in P&&n(23,d=P.$$scope)},e.$$.update=()=>{e.$$.dirty&1&&n(21,s=/^loop(Once|Random)?$/.test(p)),e.$$.dirty&1&&n(22,r=["concurrent","cascade","loopOnce"].includes(p)),e.$$.dirty&4195328&&n(20,i=!r&&_),e.$$.dirty&2052&&n(19,o=A<1&&I),n(18,a=!s&&(t.unwriteInterval||t.wordInterval)),n(17,c=p!=="scramble"&&(t.scrambleDuration||t.scrambleSlowdown)),e.$$.dirty&1024&&n(16,u=typeof _=="number"&&_<1),e.$$.dirty&1048576&&i&&console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' is compatible only with finite modes"),e.$$.dirty&524288&&o&&console.warn("[svelte-typewriter] The prop 'showCursorOnDelay' has no effect if the delay is 0"),e.$$.dirty&262144&&a&&console.warn("[svelte-typewriter] The props 'unwriteInterval' and 'wordInterval' are only compatible with loop modes"),e.$$.dirty&131072&&c&&console.warn("[svelte-typewriter] The props 'scrambleDuration' and 'scrambleSlowdown' are only compatible with scramble mode"),e.$$.dirty&65536&&u&&console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' has no effect with values lower than 1"),e.$$.dirty&2048&&n(6,l=()=>new Promise(P=>setTimeout(()=>P(A),A))),e.$$.dirty&65054&&n(5,h={interval:m,cursor:v,keepCursorOnFinish:_,delay:A,showCursorOnDelay:I,disabled:x,element:G,scrambleDuration:K,scrambleSlowdown:D,unwriteInterval:z,wordInterval:_t})},t=Hi(t),[p,v,I,x,G,h,l,$n,t,m,_,A,K,D,z,_t,u,c,a,o,i,s,r,d,f]}class qi extends $e{constructor(t){super(),Be(this,t,Lg,Og,Ut,{mode:0,interval:9,cursor:1,keepCursorOnFinish:10,delay:11,showCursorOnDelay:2,disabled:3,element:4,scrambleDuration:12,scrambleSlowdown:13,unwriteInterval:14,wordInterval:15})}}function aa(e,t,n){const s=e.slice();return s[5]=t[n],s}function ca(e){let t,n,s,r,i,o,a,c=e[0],u=[];for(let l=0;l<c.length;l+=1)u[l]=ua(aa(e,c,l));return{c(){t=q("table"),n=q("caption"),n.textContent="Leaderboard",s=at(),r=q("tr"),r.innerHTML=`<th class="svelte-sqk0o8">Author</th> 
            <th class="svelte-sqk0o8">Quote Count</th>`,i=at();for(let l=0;l<u.length;l+=1)u[l].c();C(n,"class","svelte-sqk0o8"),C(r,"class","svelte-sqk0o8"),C(t,"class","leaderboard svelte-sqk0o8")},m(l,h){H(l,t,h),F(t,n),F(t,s),F(t,r),F(t,i);for(let f=0;f<u.length;f+=1)u[f].m(t,null);a=!0},p(l,h){if(e=l,h&1){c=e[0];let f;for(f=0;f<c.length;f+=1){const d=aa(e,c,f);u[f]?u[f].p(d,h):(u[f]=ua(d),u[f].c(),u[f].m(t,null))}for(;f<u.length;f+=1)u[f].d(1);u.length=c.length}},i(l){a||(Kt(()=>{o||(o=Yi(t,Zo,{duration:250,opacity:.5,easing:Jo},!0)),o.run(1)}),a=!0)},o(l){o||(o=Yi(t,Zo,{duration:250,opacity:.5,easing:Jo},!1)),o.run(0),a=!1},d(l){l&&U(t),Zu(u,l),l&&o&&o.end()}}}function ua(e){let t,n,s=e[5].author+"",r,i,o,a=e[5].count+"",c,u;return{c(){t=q("tr"),n=q("td"),r=ce(s),i=at(),o=q("td"),c=ce(a),u=at(),C(n,"class","svelte-sqk0o8"),C(o,"class","svelte-sqk0o8"),C(t,"class","svelte-sqk0o8")},m(l,h){H(l,t,h),F(t,n),F(n,r),F(t,i),F(t,o),F(o,c),F(t,u)},p(l,h){h&1&&s!==(s=l[5].author+"")&&on(r,s),h&1&&a!==(a=l[5].count+"")&&on(c,a)},d(l){l&&U(t)}}}function xg(e){let t,n,s,r,i,o,a=e[1]&&ca(e);return{c(){t=q("div"),t.innerHTML='<img src="https://cdn-icons-png.flaticon.com/512/4489/4489655.png" class="svelte-sqk0o8"/>',n=at(),a&&a.c(),s=Bt(),C(t,"class","icon svelte-sqk0o8")},m(c,u){H(c,t,u),H(c,n,u),a&&a.m(c,u),H(c,s,u),r=!0,i||(o=Et(t,"click",e[2]),i=!0)},p(c,[u]){c[1]?a?(a.p(c,u),u&2&&V(a,1)):(a=ca(c),a.c(),V(a,1),a.m(s.parentNode,s)):a&&($t(),j(a,1,1,()=>{a=null}),qt())},i(c){r||(V(a),r=!0)},o(c){j(a),r=!1},d(c){c&&U(t),c&&U(n),a&&a.d(c),c&&U(s),i=!1,o()}}}function Mg(e,t,n){let{stringList:s=[]}=t,r,i,o=!1;function a(){n(1,o=!o)}return e.$$set=c=>{"stringList"in c&&n(3,s=c.stringList)},e.$$.update=()=>{e.$$.dirty&8&&n(4,r=s.reduce((c,{author:u})=>(c[u]=(c[u]||0)+1,c),{})),e.$$.dirty&16&&n(0,i=Object.entries(r).map(([c,u])=>({author:c,count:u})).sort((c,u)=>u.count-c.count))},[i,o,a,s,r]}class Pg extends $e{constructor(t){super(),Be(this,t,Mg,xg,Ut,{stringList:3})}}function Fg(e){let t,n=e[4].quote+"",s;return{c(){t=q("h1"),s=ce(n),C(t,"class","random-text svelte-103w3wf")},m(r,i){H(r,t,i),F(t,s)},p(r,i){i&16&&n!==(n=r[4].quote+"")&&on(s,n)},d(r){r&&U(t)}}}function Vg(e){let t,n;return t=new qi({props:{mode:"concurrent",cursor:!1,$$slots:{default:[Bg]},$$scope:{ctx:e}}}),{c(){xt(t.$$.fragment)},m(s,r){St(t,s,r),n=!0},p(s,r){const i={};r&4112&&(i.$$scope={dirty:r,ctx:s}),t.$set(i)},i(s){n||(V(t.$$.fragment,s),n=!0)},o(s){j(t.$$.fragment,s),n=!1},d(s){kt(t,s)}}}function Ug(e){let t,n;return t=new qi({props:{mode:"concurrent",cursor:!1,$$slots:{default:[$g]},$$scope:{ctx:e}}}),{c(){xt(t.$$.fragment)},m(s,r){St(t,s,r),n=!0},p(s,r){const i={};r&4113&&(i.$$scope={dirty:r,ctx:s}),t.$set(i)},i(s){n||(V(t.$$.fragment,s),n=!0)},o(s){j(t.$$.fragment,s),n=!1},d(s){kt(t,s)}}}function Bg(e){let t,n=e[4].author+"",s;return{c(){t=q("h1"),s=ce(n),C(t,"class","random-text svelte-103w3wf")},m(r,i){H(r,t,i),F(t,s)},p(r,i){i&16&&n!==(n=r[4].author+"")&&on(s,n)},d(r){r&&U(t)}}}function $g(e){let t,n=e[4].author==""?"":"> Click to Reveal <",s,r,i;return{c(){t=q("h1"),s=ce(n),C(t,"id","spoiler-author"),C(t,"class","random-text svelte-103w3wf")},m(o,a){H(o,t,a),F(t,s),r||(i=Et(t,"click",e[7]),r=!0)},p(o,a){a&16&&n!==(n=o[4].author==""?"":"> Click to Reveal <")&&on(s,n)},d(o){o&&U(t),r=!1,i()}}}function qg(e){let t,n,s,r,i,o,a,c,u,l,h,f,d,p,m,v,_,A,I;t=new Pg({props:{stringList:e[3]}}),i=new qi({props:{mode:"concurrent",keepCursorOnFinish:!0,$$slots:{default:[Fg]},$$scope:{ctx:e}}});const x=[Ug,Vg],G=[];function K(D,z){return D[0]?0:1}return a=K(e),c=G[a]=x[a](e),{c(){xt(t.$$.fragment),n=at(),s=q("div"),r=q("div"),xt(i.$$.fragment),o=at(),c.c(),u=at(),l=q("button"),l.textContent="Load Random Quote",h=at(),f=q("input"),d=at(),p=q("input"),m=at(),v=q("button"),v.textContent="Add Quote",C(l,"class","random-button svelte-103w3wf"),C(f,"id","new-quote-input"),C(f,"type","text"),C(f,"placeholder","Submit a new quote here"),C(f,"class","svelte-103w3wf"),C(p,"id","new-quote-input-author"),C(p,"type","text"),C(p,"placeholder","Write the author of the quote here"),C(p,"class","svelte-103w3wf"),C(v,"class","random-button svelte-103w3wf"),C(r,"class","heading svelte-103w3wf"),C(s,"class","quote_container svelte-103w3wf")},m(D,z){St(t,D,z),H(D,n,z),H(D,s,z),F(s,r),St(i,r,null),F(r,o),G[a].m(r,null),F(r,u),F(r,l),F(r,h),F(r,f),Te(f,e[1]),F(r,d),F(r,p),Te(p,e[2]),F(r,m),F(r,v),_=!0,A||(I=[Et(l,"click",e[5]),Et(f,"input",e[8]),Et(p,"input",e[9]),Et(v,"click",e[6])],A=!0)},p(D,[z]){const _t={};z&8&&(_t.stringList=D[3]),t.$set(_t);const $n={};z&4112&&($n.$$scope={dirty:z,ctx:D}),i.$set($n);let P=a;a=K(D),a===P?G[a].p(D,z):($t(),j(G[P],1,1,()=>{G[P]=null}),qt(),c=G[a],c?c.p(D,z):(c=G[a]=x[a](D),c.c()),V(c,1),c.m(r,u)),z&2&&f.value!==D[1]&&Te(f,D[1]),z&4&&p.value!==D[2]&&Te(p,D[2])},i(D){_||(V(t.$$.fragment,D),V(i.$$.fragment,D),V(c),_=!0)},o(D){j(t.$$.fragment,D),j(i.$$.fragment,D),j(c),_=!1},d(D){kt(t,D),D&&U(n),D&&U(s),kt(i),G[a].d(),A=!1,Nt(I)}}}function jg(e,t,n){const s=Nm(ag,"quotes","quote_list");eg(s,p=>{n(3,a=p.data().quote_list)});let r=!0,i="",o="",a=[],c={quote:"",author:""};function u(){n(0,r=!0);let p=c;for(;c==p;)n(4,c=a[Math.floor(Math.random()*a.length)])}async function l(){if(i!=""&&o!=""){let p={quote:i,author:o};Tn.push("Submitting quote..."),await tg(s,{quote_list:rg(p)}).then(()=>{Tn.push("Quote submitted!"),n(1,i=""),n(2,o="")})}}const h=()=>n(0,r=!1);function f(){i=this.value,n(1,i)}function d(){o=this.value,n(2,o)}return[r,i,o,a,c,u,l,h,f,d]}class Hg extends $e{constructor(t){super(),Be(this,t,jg,qg,Ut,{})}}function Kg(e){let t,n,s,r,i,o;return{c(){t=q("div"),n=q("label"),n.textContent="Password:",s=at(),r=q("input"),C(n,"for","password"),C(n,"class","svelte-1hfjgsa"),C(r,"id","password"),C(r,"type","password"),C(r,"class","svelte-1hfjgsa"),C(t,"id","password-container"),C(t,"class","svelte-1hfjgsa")},m(a,c){H(a,t,c),F(t,n),F(t,s),F(t,r),Te(r,e[0]),i||(o=Et(r,"input",e[2]),i=!0)},p(a,c){c&1&&r.value!==a[0]&&Te(r,a[0])},i:R,o:R,d(a){a&&U(t),i=!1,o()}}}function zg(e){let t,n;return t=new Hg({}),{c(){xt(t.$$.fragment)},m(s,r){St(t,s,r),n=!0},p:R,i(s){n||(V(t.$$.fragment,s),n=!0)},o(s){j(t.$$.fragment,s),n=!1},d(s){kt(t,s)}}}function Gg(e){let t,n,s,r,i,o;const a=[zg,Kg],c=[];function u(l,h){return h&1&&(t=null),t==null&&(t=l[1](l[0])===1252560117),t?0:1}return n=u(e,-1),s=c[n]=a[n](e),i=new Eg({}),{c(){s.c(),r=at(),xt(i.$$.fragment)},m(l,h){c[n].m(l,h),H(l,r,h),St(i,l,h),o=!0},p(l,[h]){let f=n;n=u(l,h),n===f?c[n].p(l,h):($t(),j(c[f],1,1,()=>{c[f]=null}),qt(),s=c[n],s?s.p(l,h):(s=c[n]=a[n](l),s.c()),V(s,1),s.m(r.parentNode,r))},i(l){o||(V(s),V(i.$$.fragment,l),o=!0)},o(l){j(s),j(i.$$.fragment,l),o=!1},d(l){c[n].d(l),l&&U(r),kt(i,l)}}}function Qg(e,t,n){let s="";const r=o=>o.split("").reduce((a,c)=>(a=(a<<5)-a+c.charCodeAt(0),a&a),0);function i(){s=this.value,n(0,s)}return[s,r,i]}class Wg extends $e{constructor(t){super(),Be(this,t,Qg,Gg,Ut,{})}}new Wg({target:document.getElementById("app")});export{Xg as c};
