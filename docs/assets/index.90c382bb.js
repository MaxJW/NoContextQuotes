(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function M(){}const Qt=t=>t;function vn(t,e){for(const n in e)t[n]=e[n];return t}function cd(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function Uc(t){return t()}function $a(){return Object.create(null)}function Ce(t){t.forEach(Uc)}function Ct(t){return typeof t=="function"}function ke(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ud(t){return Object.keys(t).length===0}function hd(t,...e){if(t==null)return M;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function jt(t,e,n){t.$$.on_destroy.push(hd(e,n))}function Dn(t,e,n,r){if(t){const i=xc(t,e,n,r);return t[0](i)}}function xc(t,e,n,r){return t[1]&&r?vn(n.ctx.slice(),t[1](r(e))):n.ctx}function Vn(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|i[a];return s}return e.dirty|i}return e.dirty}function Nn(t,e,n,r,i,s){if(i){const o=xc(e,n,r,s);t.p(o,i)}}function On(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function za(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Ha(t){return t==null?"":t}function Bc(t){return t&&Ct(t.destroy)?t.destroy:M}function Ka(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const jc=typeof window<"u";let wr=jc?()=>window.performance.now():()=>Date.now(),Po=jc?t=>requestAnimationFrame(t):M;const hn=new Set;function qc(t){hn.forEach(e=>{e.c(t)||(hn.delete(e),e.f())}),hn.size!==0&&Po(qc)}function Ar(t){let e;return hn.size===0&&Po(qc),{promise:new Promise(n=>{hn.add(e={c:t,f:n})}),abort(){hn.delete(e)}}}function R(t,e){t.appendChild(e)}function $c(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function fd(t){const e=S("style");return dd($c(t),e),e.sheet}function dd(t,e){return R(t.head||t,e),e.sheet}function O(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode&&t.parentNode.removeChild(t)}function So(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function S(t){return document.createElement(t)}function Ft(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Je(t){return document.createTextNode(t)}function X(){return Je(" ")}function xe(){return Je("")}function le(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function _(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const pd=["width","height"];function md(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set&&pd.indexOf(r)===-1?t[r]=e[r]:_(t,r,e[r])}function gd(t,e){Object.keys(e).forEach(n=>{_d(t,n,e[n])})}function _d(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:_(t,e,n)}function yd(t){return/-/.test(t)?gd:md}function vd(t){return Array.from(t.childNodes)}function Rt(t,e){e=""+e,t.data!==e&&(t.data=e)}function yt(t,e){t.value=e==null?"":e}function Wa(t,e,n){for(let r=0;r<t.options.length;r+=1){const i=t.options[r];if(i.__value===e){i.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Ed(t){const e=t.querySelector(":checked");return e&&e.__value}function Le(t,e,n){t.classList[n?"add":"remove"](e)}function zc(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}class Td{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,r=null){this.e||(this.is_svg?this.e=Ft(n.nodeName):this.e=S(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(r)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)O(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(C)}}function Ga(t,e){return new t(e)}const pi=new Map;let mi=0;function Id(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function wd(t,e){const n={stylesheet:fd(e),rules:{}};return pi.set(t,n),n}function tr(t,e,n,r,i,s,o,a=0){const l=16.666/r;let c=`{
`;for(let y=0;y<=1;y+=l){const m=e+(n-e)*s(y);c+=y*100+`%{${o(m,1-m)}}
`}const u=c+`100% {${o(n,1-n)}}
}`,h=`__svelte_${Id(u)}_${a}`,f=$c(t),{stylesheet:d,rules:p}=pi.get(f)||wd(f,t);p[h]||(p[h]=!0,d.insertRule(`@keyframes ${h} ${u}`,d.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${h} ${r}ms linear ${i}ms 1 both`,mi+=1,h}function nr(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),mi-=i,mi||Ad())}function Ad(){Po(()=>{mi||(pi.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&C(e)}),pi.clear())})}function Rd(t,e,n,r){if(!e)return M;const i=t.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return M;const{delay:s=0,duration:o=300,easing:a=Qt,start:l=wr()+s,end:c=l+o,tick:u=M,css:h}=n(t,{from:e,to:i},r);let f=!0,d=!1,p;function g(){h&&(p=tr(t,0,1,o,s,a,h)),s||(d=!0)}function y(){h&&nr(t,p),f=!1}return Ar(m=>{if(!d&&m>=l&&(d=!0),d&&m>=c&&(u(1,0),y()),!f)return!1;if(d){const I=m-l,T=0+1*a(I/o);u(T,1-T)}return!0}),g(),u(0,1),y}function bd(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:r}=e,i=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=r,Hc(t,i)}}function Hc(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const r=getComputedStyle(t),i=r.transform==="none"?"":r.transform;t.style.transform=`${i} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let rr;function rt(t){rr=t}function Xt(){if(!rr)throw new Error("Function called outside component initialization");return rr}function Co(t){Xt().$$.on_mount.push(t)}function Pd(t){Xt().$$.after_update.push(t)}function Kc(t){Xt().$$.on_destroy.push(t)}function Z0(){const t=Xt();return(e,n,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[e];if(i){const s=zc(e,n,{cancelable:r});return i.slice().forEach(o=>{o.call(t,s)}),!s.defaultPrevented}return!0}}function Sd(t,e){return Xt().$$.context.set(t,e),e}function Wc(t){return Xt().$$.context.get(t)}const on=[],gi=[];let fn=[];const Qa=[],Gc=Promise.resolve();let Hs=!1;function Qc(){Hs||(Hs=!0,Gc.then(ko))}function Cd(){return Qc(),Gc}function Ne(t){fn.push(t)}const Is=new Set;let tn=0;function ko(){if(tn!==0)return;const t=rr;do{try{for(;tn<on.length;){const e=on[tn];tn++,rt(e),kd(e.$$)}}catch(e){throw on.length=0,tn=0,e}for(rt(null),on.length=0,tn=0;gi.length;)gi.pop()();for(let e=0;e<fn.length;e+=1){const n=fn[e];Is.has(n)||(Is.add(n),n())}fn.length=0}while(on.length);for(;Qa.length;)Qa.pop()();Hs=!1,Is.clear(),rt(t)}function kd(t){if(t.fragment!==null){t.update(),Ce(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ne)}}function Dd(t){const e=[],n=[];fn.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),fn=e}let jn;function Do(){return jn||(jn=Promise.resolve(),jn.then(()=>{jn=null})),jn}function Ut(t,e,n){t.dispatchEvent(zc(`${e?"intro":"outro"}${n}`))}const ii=new Set;let He;function Be(){He={r:0,c:[],p:He}}function je(){He.r||Ce(He.c),He=He.p}function V(t,e){t&&t.i&&(ii.delete(t),t.i(e))}function L(t,e,n,r){if(t&&t.o){if(ii.has(t))return;ii.add(t),He.c.push(()=>{ii.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const Vo={duration:0};function Vd(t,e,n){const r={direction:"in"};let i=e(t,n,r),s=!1,o,a,l=0;function c(){o&&nr(t,o)}function u(){const{delay:f=0,duration:d=300,easing:p=Qt,tick:g=M,css:y}=i||Vo;y&&(o=tr(t,0,1,d,f,p,y,l++)),g(0,1);const m=wr()+f,I=m+d;a&&a.abort(),s=!0,Ne(()=>Ut(t,!0,"start")),a=Ar(T=>{if(s){if(T>=I)return g(1,0),Ut(t,!0,"end"),c(),s=!1;if(T>=m){const k=p((T-m)/d);g(k,1-k)}}return s})}let h=!1;return{start(){h||(h=!0,nr(t),Ct(i)?(i=i(r),Do().then(u)):u())},invalidate(){h=!1},end(){s&&(c(),s=!1)}}}function Nd(t,e,n){const r={direction:"out"};let i=e(t,n,r),s=!0,o;const a=He;a.r+=1;function l(){const{delay:c=0,duration:u=300,easing:h=Qt,tick:f=M,css:d}=i||Vo;d&&(o=tr(t,1,0,u,c,h,d));const p=wr()+c,g=p+u;Ne(()=>Ut(t,!1,"start")),Ar(y=>{if(s){if(y>=g)return f(0,1),Ut(t,!1,"end"),--a.r||Ce(a.c),!1;if(y>=p){const m=h((y-p)/u);f(1-m,m)}}return s})}return Ct(i)?Do().then(()=>{i=i(r),l()}):l(),{end(c){c&&i.tick&&i.tick(1,0),s&&(o&&nr(t,o),s=!1)}}}function Ye(t,e,n,r){const i={direction:"both"};let s=e(t,n,i),o=r?0:1,a=null,l=null,c=null;function u(){c&&nr(t,c)}function h(d,p){const g=d.b-o;return p*=Math.abs(g),{a:o,b:d.b,d:g,duration:p,start:d.start,end:d.start+p,group:d.group}}function f(d){const{delay:p=0,duration:g=300,easing:y=Qt,tick:m=M,css:I}=s||Vo,T={start:wr()+p,b:d};d||(T.group=He,He.r+=1),a||l?l=T:(I&&(u(),c=tr(t,o,d,g,p,y,I)),d&&m(0,1),a=h(T,g),Ne(()=>Ut(t,d,"start")),Ar(k=>{if(l&&k>l.start&&(a=h(l,g),l=null,Ut(t,a.b,"start"),I&&(u(),c=tr(t,o,a.b,a.duration,0,y,s.css))),a){if(k>=a.end)m(o=a.b,1-o),Ut(t,a.b,"end"),l||(a.b?u():--a.group.r||Ce(a.group.c)),a=null;else if(k>=a.start){const K=k-a.start;o=a.a+a.d*y(K/a.duration),m(o,1-o)}}return!!(a||l)}))}return{run(d){Ct(s)?Do().then(()=>{s=s(i),f(d)}):f(d)},end(){u(),a=l=null}}}function _i(t,e){const n=e.token={};function r(i,s,o,a){if(e.token!==n)return;e.resolved=a;let l=e.ctx;o!==void 0&&(l=l.slice(),l[o]=a);const c=i&&(e.current=i)(l);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,f)=>{f!==s&&h&&(Be(),L(h,1,1,()=>{e.blocks[f]===h&&(e.blocks[f]=null)}),je())}):e.block.d(1),c.c(),V(c,1),c.m(e.mount(),e.anchor),u=!0),e.block=c,e.blocks&&(e.blocks[s]=c),u&&ko()}if(cd(t)){const i=Xt();if(t.then(s=>{rt(i),r(e.then,1,e.value,s),rt(null)},s=>{if(rt(i),r(e.catch,2,e.error,s),rt(null),!e.hasCatch)throw s}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function Xc(t,e,n){const r=e.slice(),{resolved:i}=t;t.current===t.then&&(r[t.value]=i),t.current===t.catch&&(r[t.error]=i),t.block.p(r,n)}function Od(t,e){L(t,1,1,()=>{e.delete(t.key)})}function Md(t,e){t.f(),Od(t,e)}function Ld(t,e,n,r,i,s,o,a,l,c,u,h){let f=t.length,d=s.length,p=f;const g={};for(;p--;)g[t[p].key]=p;const y=[],m=new Map,I=new Map,T=[];for(p=d;p--;){const A=h(i,s,p),q=n(A);let F=o.get(q);F?r&&T.push(()=>F.p(A,e)):(F=c(q,A),F.c()),m.set(q,y[p]=F),q in g&&I.set(q,Math.abs(p-g[q]))}const k=new Set,K=new Set;function z(A){V(A,1),A.m(a,u),o.set(A.key,A),u=A.first,d--}for(;f&&d;){const A=y[d-1],q=t[f-1],F=A.key,P=q.key;A===q?(u=A.first,f--,d--):m.has(P)?!o.has(F)||k.has(F)?z(A):K.has(P)?f--:I.get(F)>I.get(P)?(K.add(F),z(A)):(k.add(P),f--):(l(q,o),f--)}for(;f--;){const A=t[f];m.has(A.key)||l(A,o)}for(;d;)z(y[d-1]);return Ce(T),y}function Fd(t,e){const n={},r={},i={$$scope:1};let s=t.length;for(;s--;){const o=t[s],a=e[s];if(a){for(const l in o)l in a||(r[l]=1);for(const l in a)i[l]||(n[l]=a[l],i[l]=1);t[s]=a}else for(const l in o)i[l]=1}for(const o in r)o in n||(n[o]=void 0);return n}function Ud(t){return typeof t=="object"&&t!==null?t:{}}function ce(t){t&&t.c()}function ie(t,e,n,r){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),r||Ne(()=>{const o=t.$$.on_mount.map(Uc).filter(Ct);t.$$.on_destroy?t.$$.on_destroy.push(...o):Ce(o),t.$$.on_mount=[]}),s.forEach(Ne)}function se(t,e){const n=t.$$;n.fragment!==null&&(Dd(n.after_update),Ce(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function xd(t,e){t.$$.dirty[0]===-1&&(on.push(t),Qc(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function qe(t,e,n,r,i,s,o,a=[-1]){const l=rr;rt(t);const c=t.$$={fragment:null,ctx:[],props:s,update:M,not_equal:i,bound:$a(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:$a(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(h,f,...d)=>{const p=d.length?d[0]:f;return c.ctx&&i(c.ctx[h],c.ctx[h]=p)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](p),u&&xd(t,h)),f}):[],c.update(),u=!0,Ce(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const h=vd(e.target);c.fragment&&c.fragment.l(h),h.forEach(C)}else c.fragment&&c.fragment.c();e.intro&&V(t.$$.fragment),ie(t,e.target,e.anchor,e.customElement),ko()}rt(l)}class $e{$destroy(){se(this,1),this.$destroy=M}$on(e,n){if(!Ct(n))return M;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!ud(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Jc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Bd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Yc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),r.push(n[u],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Bd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new jd;const f=s<<2|a>>4;if(r.push(f),c!==64){const d=a<<4&240|c>>2;if(r.push(d),h!==64){const p=c<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qd=function(t){const e=Jc(t);return Yc.encodeByteArray(e,!0)},yi=function(t){return qd(t).replace(/\./g,"")},Zc=function(t){try{return Yc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function $d(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zd=()=>$d().__FIREBASE_DEFAULTS__,Hd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Kd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zc(t[1]);return e&&JSON.parse(e)},No=()=>{try{return zd()||Hd()||Kd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},eu=t=>{var e,n;return(n=(e=No())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Wd=t=>{const e=eu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},tu=()=>{var t;return(t=No())===null||t===void 0?void 0:t.config},nu=t=>{var e;return(e=No())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Qd(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[yi(JSON.stringify(n)),yi(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function Jd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Yd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zd(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ep(){try{return typeof indexedDB=="object"}catch{return!1}}function tp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np="FirebaseError";class dt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=np,Object.setPrototypeOf(this,dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rr.prototype.create)}}class Rr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?rp(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new dt(i,a,r)}}function rp(t,e){return t.replace(ip,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ip=/\{\$([^}]+)}/g;function sp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Xa(s)&&Xa(o)){if(!vi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Xa(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function op(t,e){const n=new ap(t,e);return n.subscribe.bind(n)}class ap{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");lp(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ws),i.error===void 0&&(i.error=ws),i.complete===void 0&&(i.complete=ws);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ws(){}/**
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
 */function Se(t){return t&&t._delegate?t._delegate:t}class qt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class cp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Gd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hp(e))try{this.getOrInitializeService({instanceIdentifier:Vt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vt){return this.instances.has(e)}getOptions(e=Vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:up(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vt){return this.component?this.component.multipleInstances?e:Vt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function up(t){return t===Vt?void 0:t}function hp(t){return t.instantiationMode==="EAGER"}/**
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
 */class fp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const dp={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},pp=Q.INFO,mp={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},gp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=mp[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oo{constructor(e){this.name=e,this._logLevel=pp,this._logHandler=gp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const _p=(t,e)=>e.some(n=>t instanceof n);let Ja,Ya;function yp(){return Ja||(Ja=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vp(){return Ya||(Ya=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ru=new WeakMap,Ks=new WeakMap,iu=new WeakMap,As=new WeakMap,Mo=new WeakMap;function Ep(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Et(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ru.set(n,t)}).catch(()=>{}),Mo.set(e,t),e}function Tp(t){if(Ks.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ks.set(t,e)}let Ws={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ks.get(t);if(e==="objectStoreNames")return t.objectStoreNames||iu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Et(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ip(t){Ws=t(Ws)}function wp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rs(this),e,...n);return iu.set(r,e.sort?e.sort():[e]),Et(r)}:vp().includes(t)?function(...e){return t.apply(Rs(this),e),Et(ru.get(this))}:function(...e){return Et(t.apply(Rs(this),e))}}function Ap(t){return typeof t=="function"?wp(t):(t instanceof IDBTransaction&&Tp(t),_p(t,yp())?new Proxy(t,Ws):t)}function Et(t){if(t instanceof IDBRequest)return Ep(t);if(As.has(t))return As.get(t);const e=Ap(t);return e!==t&&(As.set(t,e),Mo.set(e,t)),e}const Rs=t=>Mo.get(t);function Rp(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Et(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Et(o.result),l.oldVersion,l.newVersion,Et(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const bp=["get","getKey","getAll","getAllKeys","count"],Pp=["put","add","delete","clear"],bs=new Map;function Za(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bs.get(e))return bs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Pp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bp.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return bs.set(e,s),s}Ip(t=>({...t,get:(e,n,r)=>Za(e,n)||t.get(e,n,r),has:(e,n)=>!!Za(e,n)||t.has(e,n)}));/**
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
 */class Sp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Cp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Cp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gs="@firebase/app",el="0.9.14";/**
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
 */const $t=new Oo("@firebase/app"),kp="@firebase/app-compat",Dp="@firebase/analytics-compat",Vp="@firebase/analytics",Np="@firebase/app-check-compat",Op="@firebase/app-check",Mp="@firebase/auth",Lp="@firebase/auth-compat",Fp="@firebase/database",Up="@firebase/database-compat",xp="@firebase/functions",Bp="@firebase/functions-compat",jp="@firebase/installations",qp="@firebase/installations-compat",$p="@firebase/messaging",zp="@firebase/messaging-compat",Hp="@firebase/performance",Kp="@firebase/performance-compat",Wp="@firebase/remote-config",Gp="@firebase/remote-config-compat",Qp="@firebase/storage",Xp="@firebase/storage-compat",Jp="@firebase/firestore",Yp="@firebase/firestore-compat",Zp="firebase",em="10.0.0";/**
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
 */const Qs="[DEFAULT]",tm={[Gs]:"fire-core",[kp]:"fire-core-compat",[Vp]:"fire-analytics",[Dp]:"fire-analytics-compat",[Op]:"fire-app-check",[Np]:"fire-app-check-compat",[Mp]:"fire-auth",[Lp]:"fire-auth-compat",[Fp]:"fire-rtdb",[Up]:"fire-rtdb-compat",[xp]:"fire-fn",[Bp]:"fire-fn-compat",[jp]:"fire-iid",[qp]:"fire-iid-compat",[$p]:"fire-fcm",[zp]:"fire-fcm-compat",[Hp]:"fire-perf",[Kp]:"fire-perf-compat",[Wp]:"fire-rc",[Gp]:"fire-rc-compat",[Qp]:"fire-gcs",[Xp]:"fire-gcs-compat",[Jp]:"fire-fst",[Yp]:"fire-fst-compat","fire-js":"fire-js",[Zp]:"fire-js-all"};/**
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
 */const Ei=new Map,Xs=new Map;function nm(t,e){try{t.container.addComponent(e)}catch(n){$t.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function En(t){const e=t.name;if(Xs.has(e))return $t.debug(`There were multiple attempts to register component ${e}.`),!1;Xs.set(e,t);for(const n of Ei.values())nm(n,t);return!0}function Lo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const rm={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Tt=new Rr("app","Firebase",rm);/**
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
 */class im{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tt.create("app-deleted",{appName:this._name})}}/**
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
 */const Mn=em;function su(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qs,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Tt.create("bad-app-name",{appName:String(i)});if(n||(n=tu()),!n)throw Tt.create("no-options");const s=Ei.get(i);if(s){if(vi(n,s.options)&&vi(r,s.config))return s;throw Tt.create("duplicate-app",{appName:i})}const o=new fp(i);for(const l of Xs.values())o.addComponent(l);const a=new im(n,r,o);return Ei.set(i,a),a}function ou(t=Qs){const e=Ei.get(t);if(!e&&t===Qs&&tu())return su();if(!e)throw Tt.create("no-app",{appName:t});return e}function It(t,e,n){var r;let i=(r=tm[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$t.warn(a.join(" "));return}En(new qt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const sm="firebase-heartbeat-database",om=1,ir="firebase-heartbeat-store";let Ps=null;function au(){return Ps||(Ps=Rp(sm,om,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ir)}}}).catch(t=>{throw Tt.create("idb-open",{originalErrorMessage:t.message})})),Ps}async function am(t){try{return await(await au()).transaction(ir).objectStore(ir).get(lu(t))}catch(e){if(e instanceof dt)$t.warn(e.message);else{const n=Tt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$t.warn(n.message)}}}async function tl(t,e){try{const r=(await au()).transaction(ir,"readwrite");await r.objectStore(ir).put(e,lu(t)),await r.done}catch(n){if(n instanceof dt)$t.warn(n.message);else{const r=Tt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$t.warn(r.message)}}}function lu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const lm=1024,cm=30*24*60*60*1e3;class um{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=nl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=cm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nl(),{heartbeatsToSend:n,unsentEntries:r}=hm(this._heartbeatsCache.heartbeats),i=yi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function nl(){return new Date().toISOString().substring(0,10)}function hm(t,e=lm){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),rl(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rl(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ep()?tp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await am(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function rl(t){return yi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function dm(t){En(new qt("platform-logger",e=>new Sp(e),"PRIVATE")),En(new qt("heartbeat",e=>new um(e),"PRIVATE")),It(Gs,el,t),It(Gs,el,"esm2017"),It("fire-js","")}dm("");var pm="firebase",mm="10.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It(pm,mm,"app");function Fo(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function cu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gm=cu,uu=new Rr("auth","Firebase",cu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=new Oo("@firebase/auth");function _m(t,...e){Ti.logLevel<=Q.WARN&&Ti.warn(`Auth (${Mn}): ${t}`,...e)}function si(t,...e){Ti.logLevel<=Q.ERROR&&Ti.error(`Auth (${Mn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t,...e){throw Uo(t,...e)}function Ge(t,...e){return Uo(t,...e)}function hu(t,e,n){const r=Object.assign(Object.assign({},gm()),{[e]:n});return new Rr("auth","Firebase",r).create(e,{appName:t.name})}function ym(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ze(t,"argument-error"),hu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Uo(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return uu.create(t,...e)}function j(t,e,...n){if(!t)throw Uo(e,...n)}function it(t){const e="INTERNAL ASSERTION FAILED: "+t;throw si(e),new Error(e)}function lt(t,e){t||it(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vm(){return il()==="http:"||il()==="https:"}function il(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vm()||Jd()||"connection"in navigator)?navigator.onLine:!0}function Tm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n){this.shortDelay=e,this.longDelay=n,lt(n>e,"Short delay should be less than long delay!"),this.isMobile=Xd()||Yd()}get(){return Em()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(t,e){lt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;it("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;it("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;it("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=new Pr(3e4,6e4);function du(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Sr(t,e,n,r,i={}){return pu(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=br(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),fu.fetch()(mu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function pu(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Im),e);try{const i=new Rm(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Wr(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Wr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Wr(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw hu(t,u,c);Ze(t,u)}}catch(i){if(i instanceof dt)throw i;Ze(t,"network-request-failed",{message:String(i)})}}async function Am(t,e,n,r,i={}){const s=await Sr(t,e,n,r,i);return"mfaPendingCredential"in s&&Ze(t,"multi-factor-auth-required",{_serverResponse:s}),s}function mu(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?xo(t.config,i):`${t.config.apiScheme}://${i}`}class Rm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),wm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ge(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bm(t,e){return Sr(t,"POST","/v1/accounts:delete",e)}async function Pm(t,e){return Sr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sm(t,e=!1){const n=Se(t),r=await n.getIdToken(e),i=Bo(r);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Qn(Ss(i.auth_time)),issuedAtTime:Qn(Ss(i.iat)),expirationTime:Qn(Ss(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ss(t){return Number(t)*1e3}function Bo(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return si("JWT malformed, contained fewer than 3 sections"),null;try{const i=Zc(n);return i?JSON.parse(i):(si("Failed to decode base64 JWT payload"),null)}catch(i){return si("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Cm(t){const e=Bo(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof dt&&km(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function km({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qn(this.lastLoginAt),this.creationTime=Qn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ii(t){var e;const n=t.auth,r=await t.getIdToken(),i=await sr(t,Pm(n,{idToken:r}));j(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Om(s.providerUserInfo):[],a=Nm(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new gu(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Vm(t){const e=Se(t);await Ii(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Nm(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Om(t){return t.map(e=>{var{providerId:n}=e,r=Fo(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mm(t,e){const n=await pu(t,{},async()=>{const r=br({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=mu(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Mm(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new or;return r&&(j(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(j(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(j(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new or,this.toJSON())}_performRefresh(){return it("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Fo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Dm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await sr(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Sm(this,e)}reload(){return Vm(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ii(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await sr(this,bm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,d=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(c=n.createdAt)!==null&&c!==void 0?c:void 0,I=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:T,emailVerified:k,isAnonymous:K,providerData:z,stsTokenManager:A}=n;j(T&&A,e,"internal-error");const q=or.fromJSON(this.name,A);j(typeof T=="string",e,"internal-error"),pt(h,e.name),pt(f,e.name),j(typeof k=="boolean",e,"internal-error"),j(typeof K=="boolean",e,"internal-error"),pt(d,e.name),pt(p,e.name),pt(g,e.name),pt(y,e.name),pt(m,e.name),pt(I,e.name);const F=new xt({uid:T,auth:e,email:f,emailVerified:k,displayName:h,isAnonymous:K,photoURL:p,phoneNumber:d,tenantId:g,stsTokenManager:q,createdAt:m,lastLoginAt:I});return z&&Array.isArray(z)&&(F.providerData=z.map(P=>Object.assign({},P))),y&&(F._redirectEventId=y),F}static async _fromIdTokenResponse(e,n,r=!1){const i=new or;i.updateFromServerResponse(n);const s=new xt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ii(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=new Map;function st(t){lt(t instanceof Function,"Expected a class definition");let e=sl.get(t);return e?(lt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sl.set(t,e),e)}/**
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
 */class _u{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_u.type="NONE";const ol=_u;/**
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
 */function oi(t,e,n){return`firebase:${t}:${e}:${n}`}class dn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=oi(this.userKey,i.apiKey,s),this.fullPersistenceKey=oi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new dn(st(ol),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||st(ol);const o=oi(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=xt._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new dn(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new dn(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Eu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Iu(e))return"Blackberry";if(wu(e))return"Webos";if(jo(e))return"Safari";if((e.includes("chrome/")||vu(e))&&!e.includes("edge/"))return"Chrome";if(Tu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yu(t=Re()){return/firefox\//i.test(t)}function jo(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vu(t=Re()){return/crios\//i.test(t)}function Eu(t=Re()){return/iemobile/i.test(t)}function Tu(t=Re()){return/android/i.test(t)}function Iu(t=Re()){return/blackberry/i.test(t)}function wu(t=Re()){return/webos/i.test(t)}function ji(t=Re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Lm(t=Re()){var e;return ji(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Fm(){return Zd()&&document.documentMode===10}function Au(t=Re()){return ji(t)||Tu(t)||wu(t)||Iu(t)||/windows phone/i.test(t)||Eu(t)}function Um(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(t,e=[]){let n;switch(t){case"Browser":n=al(Re());break;case"Worker":n=`${al(Re())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mn}/${r}`}async function bu(t,e){return Sr(t,"GET","/v2/recaptchaConfig",du(t,e))}function ll(t){return t!==void 0&&t.enterprise!==void 0}class Pu{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Su(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ge("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",xm().appendChild(r)})}function Bm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const jm="https://www.google.com/recaptcha/enterprise.js?render=",qm="recaptcha-enterprise",$m="NO_RECAPTCHA";class zm{constructor(e){this.type=qm,this.auth=Cr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{bu(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Pu(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;ll(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o($m)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ll(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Su(jm+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class Hm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cl(this),this.idTokenSubscription=new cl(this),this.beforeStateQueue=new Hm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=st(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await dn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ii(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Tm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Se(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(st(e))})}async initializeRecaptchaConfig(){const e=await bu(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Pu(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new zm(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Rr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&st(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await dn.create(this,[st(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ru(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&_m(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Cr(t){return Se(t)}class cl{constructor(e){this.auth=e,this.observer=null,this.addObserver=op(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(t,e){const n=Lo(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(vi(s,e!=null?e:{}))return i;Ze(i,"already-initialized")}return n.initialize({options:e})}function Gm(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(st);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Qm(t,e,n){const r=Cr(t);j(r._canInitEmulator,r,"emulator-config-failed"),j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Cu(e),{host:o,port:a}=Xm(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Jm()}function Cu(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Xm(t){const e=Cu(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ul(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ul(o)}}}function ul(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Jm(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return it("not implemented")}_getIdTokenResponse(e){return it("not implemented")}_linkToIdToken(e,n){return it("not implemented")}_getReauthenticationResolver(e){return it("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(t,e){return Am(t,"POST","/v1/accounts:signInWithIdp",du(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym="http://localhost";class zt extends ku{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ze("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Fo(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new zt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return pn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,pn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pn(e,n)}buildRequest(){const e={requestUri:Ym,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=br(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class kr extends qo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nt extends kr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zt._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return nt.credential(n,r)}catch{return null}}}nt.GOOGLE_SIGN_IN_METHOD="google.com";nt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _t extends kr{constructor(){super("twitter.com")}static credential(e,n){return zt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _t.credential(n,r)}catch{return null}}}_t.TWITTER_SIGN_IN_METHOD="twitter.com";_t.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await xt._fromIdTokenResponse(e,r,i),o=hl(r);return new Tn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=hl(r);return new Tn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function hl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends dt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new wi(e,n,r,i)}}function Du(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?wi._fromErrorAndOperation(t,s,e,r):s})}async function Zm(t,e,n=!1){const r=await sr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Tn._forOperation(t,"link",r)}/**
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
 */async function eg(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await sr(t,Du(r,i,e,t),n);j(s.idToken,r,"internal-error");const o=Bo(s.idToken);j(o,r,"internal-error");const{sub:a}=o;return j(t.uid===a,r,"user-mismatch"),Tn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ze(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tg(t,e,n=!1){const r="signIn",i=await Du(t,r,e),s=await Tn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(t,e){return Se(t).setPersistence(e)}function rg(t,e,n,r){return Se(t).onIdTokenChanged(e,n,r)}function ig(t,e,n){return Se(t).beforeAuthStateChanged(e,n)}const Ai="__sak";/**
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
 */class Vu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ai,"1"),this.storage.removeItem(Ai),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(){const t=Re();return jo(t)||ji(t)}const og=1e3,ag=10;class Nu extends Vu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=sg()&&Um(),this.fallbackToPolling=Au(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Fm()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ag):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},og)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nu.type="LOCAL";const Ou=Nu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu extends Vu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Mu.type="SESSION";const Lu=Mu;/**
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
 */function lg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class qi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new qi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await lg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class cg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=$o("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return window}function ug(t){Qe().location.href=t}/**
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
 */function Fu(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function hg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function dg(){return Fu()?self:null}/**
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
 */const Uu="firebaseLocalStorageDb",pg=1,Ri="firebaseLocalStorage",xu="fbase_key";class Dr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $i(t,e){return t.transaction([Ri],e?"readwrite":"readonly").objectStore(Ri)}function mg(){const t=indexedDB.deleteDatabase(Uu);return new Dr(t).toPromise()}function Ys(){const t=indexedDB.open(Uu,pg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ri,{keyPath:xu})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ri)?e(r):(r.close(),await mg(),e(await Ys()))})})}async function fl(t,e,n){const r=$i(t,!0).put({[xu]:e,value:n});return new Dr(r).toPromise()}async function gg(t,e){const n=$i(t,!1).get(e),r=await new Dr(n).toPromise();return r===void 0?null:r.value}function dl(t,e){const n=$i(t,!0).delete(e);return new Dr(n).toPromise()}const _g=800,yg=3;class Bu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ys(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>yg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qi._getInstance(dg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hg(),!this.activeServiceWorker)return;this.sender=new cg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ys();return await fl(e,Ai,"1"),await dl(e,Ai),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fl(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=$i(i,!1).getAll();return new Dr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_g)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bu.type="LOCAL";const vg=Bu;new Pr(3e4,6e4);/**
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
 */function ju(t,e){return e?st(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class zo extends ku{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Eg(t){return tg(t.auth,new zo(t),t.bypassAuthState)}function Tg(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),eg(n,new zo(t),t.bypassAuthState)}async function Ig(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),Zm(n,new zo(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Eg;case"linkViaPopup":case"linkViaRedirect":return Ig;case"reauthViaPopup":case"reauthViaRedirect":return Tg;default:Ze(this.auth,"internal-error")}}resolve(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg=new Pr(2e3,1e4);async function Ag(t,e,n){const r=Cr(t);ym(t,e,qo);const i=ju(r,n);return new Nt(r,"signInViaPopup",e,i).executeNotNull()}class Nt extends qu{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Nt.currentPopupAction&&Nt.currentPopupAction.cancel(),Nt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){lt(this.filter.length===1,"Popup operations only handle one event");const e=$o();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wg.get())};e()}}Nt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg="pendingRedirect",ai=new Map;class bg extends qu{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ai.get(this.auth._key());if(!e){try{const r=await Pg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ai.set(this.auth._key(),e)}return this.bypassAuthState||ai.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Pg(t,e){const n=kg(e),r=Cg(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Sg(t,e){ai.set(t._key(),e)}function Cg(t){return st(t._redirectPersistence)}function kg(t){return oi(Rg,t.config.apiKey,t.name)}async function Dg(t,e,n=!1){const r=Cr(t),i=ju(r,e),o=await new bg(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=10*60*1e3;class Ng{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Og(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!$u(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ge(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Vg&&this.cachedEventUids.clear(),this.cachedEventUids.has(pl(e))}saveEventToCache(e){this.cachedEventUids.add(pl(e)),this.lastProcessedEventTime=Date.now()}}function pl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $u({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Og(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $u(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mg(t,e={}){return Sr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fg=/^https?/;async function Ug(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Mg(t);for(const n of e)try{if(xg(n))return}catch{}Ze(t,"unauthorized-domain")}function xg(t){const e=Js(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Fg.test(n))return!1;if(Lg.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Bg=new Pr(3e4,6e4);function ml(){const t=Qe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jg(t){return new Promise((e,n)=>{var r,i,s;function o(){ml(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ml(),n(Ge(t,"network-request-failed"))},timeout:Bg.get()})}if(!((i=(r=Qe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Qe().gapi)===null||s===void 0)&&s.load)o();else{const a=Bm("iframefcb");return Qe()[a]=()=>{gapi.load?o():n(Ge(t,"network-request-failed"))},Su(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw li=null,e})}let li=null;function qg(t){return li=li||jg(t),li}/**
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
 */const $g=new Pr(5e3,15e3),zg="__/auth/iframe",Hg="emulator/auth/iframe",Kg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gg(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xo(e,Hg):`https://${t.config.authDomain}/${zg}`,r={apiKey:e.apiKey,appName:t.name,v:Mn},i=Wg.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${br(r).slice(1)}`}async function Qg(t){const e=await qg(t),n=Qe().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:Gg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kg,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ge(t,"network-request-failed"),a=Qe().setTimeout(()=>{s(o)},$g.get());function l(){Qe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Xg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jg=500,Yg=600,Zg="_blank",e_="http://localhost";class gl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function t_(t,e,n,r=Jg,i=Yg){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Xg),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Re().toLowerCase();n&&(a=vu(c)?Zg:n),yu(c)&&(e=e||e_,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[d,p])=>`${f}${d}=${p},`,"");if(Lm(c)&&a!=="_self")return n_(e||"",a),new gl(null);const h=window.open(e||"",a,u);j(h,t,"popup-blocked");try{h.focus()}catch{}return new gl(h)}function n_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const r_="__/auth/handler",i_="emulator/auth/handler",s_=encodeURIComponent("fac");async function _l(t,e,n,r,i,s){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Mn,eventId:i};if(e instanceof qo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof kr){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${s_}=${encodeURIComponent(l)}`:"";return`${o_(t)}?${br(a).slice(1)}${c}`}function o_({config:t}){return t.emulator?xo(t,i_):`https://${t.authDomain}/${r_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="webStorageSupport";class a_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lu,this._completeRedirectFn=Dg,this._overrideRedirectResult=Sg}async _openPopup(e,n,r,i){var s;lt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await _l(e,n,r,Js(),i);return t_(e,o,$o())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await _l(e,n,r,Js(),i);return ug(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(lt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Qg(e),r=new Ng(e);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cs,{type:Cs},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Cs];o!==void 0&&n(!!o),Ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ug(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Au()||jo()||ji()}}const l_=a_;var yl="@firebase/auth",vl="1.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function h_(t){En(new qt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ru(t)},c=new Km(r,i,s,l);return Gm(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),En(new qt("auth-internal",e=>{const n=Cr(e.getProvider("auth").getImmediate());return(r=>new c_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),It(yl,vl,u_(t)),It(yl,vl,"esm2017")}/**
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
 */const f_=5*60,d_=nu("authIdTokenMaxAge")||f_;let El=null;const p_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>d_)return;const i=n==null?void 0:n.token;El!==i&&(El=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function m_(t=ou()){const e=Lo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Wm(t,{popupRedirectResolver:l_,persistence:[vg,Ou,Lu]}),r=nu("authTokenSyncURL");if(r){const s=p_(r);ig(n,s,()=>s(n.currentUser)),rg(n,o=>s(o))}const i=eu("auth");return i&&Qm(n,`http://${i}`),n}h_("Browser");var g_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w,Ho=Ho||{},x=g_||self;function zi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Vr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function __(t){return Object.prototype.hasOwnProperty.call(t,ks)&&t[ks]||(t[ks]=++y_)}var ks="closure_uid_"+(1e9*Math.random()>>>0),y_=0;function v_(t,e,n){return t.call.apply(t.bind,arguments)}function E_(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ie(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ie=v_:Ie=E_,Ie.apply(null,arguments)}function Gr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function pe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function kt(){this.s=this.s,this.o=this.o}var T_=0;kt.prototype.s=!1;kt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),T_!=0)&&__(this)};kt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const zu=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ko(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Tl(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(zi(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function we(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}we.prototype.h=function(){this.defaultPrevented=!0};var I_=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{x.addEventListener("test",()=>{},e),x.removeEventListener("test",()=>{},e)}catch{}return t}();function ar(t){return/^[\s\xa0]*$/.test(t)}function Hi(){var t=x.navigator;return t&&(t=t.userAgent)?t:""}function ze(t){return Hi().indexOf(t)!=-1}function Wo(t){return Wo[" "](t),t}Wo[" "]=function(){};function w_(t,e){var n=my;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var A_=ze("Opera"),In=ze("Trident")||ze("MSIE"),Hu=ze("Edge"),Zs=Hu||In,Ku=ze("Gecko")&&!(Hi().toLowerCase().indexOf("webkit")!=-1&&!ze("Edge"))&&!(ze("Trident")||ze("MSIE"))&&!ze("Edge"),R_=Hi().toLowerCase().indexOf("webkit")!=-1&&!ze("Edge");function Wu(){var t=x.document;return t?t.documentMode:void 0}var eo;e:{var Ds="",Vs=function(){var t=Hi();if(Ku)return/rv:([^\);]+)(\)|;)/.exec(t);if(Hu)return/Edge\/([\d\.]+)/.exec(t);if(In)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(R_)return/WebKit\/(\S+)/.exec(t);if(A_)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Vs&&(Ds=Vs?Vs[1]:""),In){var Ns=Wu();if(Ns!=null&&Ns>parseFloat(Ds)){eo=String(Ns);break e}}eo=Ds}var to;if(x.document&&In){var Il=Wu();to=Il||parseInt(eo,10)||void 0}else to=void 0;var b_=to;function lr(t,e){if(we.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ku){e:{try{Wo(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:P_[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&lr.$.h.call(this)}}pe(lr,we);var P_={2:"touch",3:"pen",4:"mouse"};lr.prototype.h=function(){lr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Nr="closure_listenable_"+(1e6*Math.random()|0),S_=0;function C_(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++S_,this.fa=this.ia=!1}function Ki(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Go(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function k_(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Gu(t){const e={};for(const n in t)e[n]=t[n];return e}const wl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qu(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<wl.length;s++)n=wl[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Wi(t){this.src=t,this.g={},this.h=0}Wi.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=ro(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new C_(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function no(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=zu(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ki(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ro(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Qo="closure_lm_"+(1e6*Math.random()|0),Os={};function Xu(t,e,n,r,i){if(r&&r.once)return Yu(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Xu(t,e[s],n,r,i);return null}return n=Yo(n),t&&t[Nr]?t.O(e,n,Vr(r)?!!r.capture:!!r,i):Ju(t,e,n,!1,r,i)}function Ju(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Vr(i)?!!i.capture:!!i,a=Jo(t);if(a||(t[Qo]=a=new Wi(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=D_(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)I_||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(eh(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function D_(){function t(n){return e.call(t.src,t.listener,n)}const e=V_;return t}function Yu(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Yu(t,e[s],n,r,i);return null}return n=Yo(n),t&&t[Nr]?t.P(e,n,Vr(r)?!!r.capture:!!r,i):Ju(t,e,n,!0,r,i)}function Zu(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Zu(t,e[s],n,r,i);else r=Vr(r)?!!r.capture:!!r,n=Yo(n),t&&t[Nr]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=ro(s,n,r,i),-1<n&&(Ki(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Jo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ro(e,n,r,i)),(n=-1<t?e[t]:null)&&Xo(n))}function Xo(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Nr])no(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(eh(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Jo(e))?(no(n,t),n.h==0&&(n.src=null,e[Qo]=null)):Ki(t)}}}function eh(t){return t in Os?Os[t]:Os[t]="on"+t}function V_(t,e){if(t.fa)t=!0;else{e=new lr(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Xo(t),t=n.call(r,e)}return t}function Jo(t){return t=t[Qo],t instanceof Wi?t:null}var Ms="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yo(t){return typeof t=="function"?t:(t[Ms]||(t[Ms]=function(e){return t.handleEvent(e)}),t[Ms])}function de(){kt.call(this),this.i=new Wi(this),this.S=this,this.J=null}pe(de,kt);de.prototype[Nr]=!0;de.prototype.removeEventListener=function(t,e,n,r){Zu(this,t,e,n,r)};function _e(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new we(e,t);else if(e instanceof we)e.target=e.target||t;else{var i=e;e=new we(r,t),Qu(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Qr(o,r,!0,e)&&i}if(o=e.g=t,i=Qr(o,r,!0,e)&&i,i=Qr(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Qr(o,r,!1,e)&&i}de.prototype.N=function(){if(de.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ki(n[r]);delete t.g[e],t.h--}}this.J=null};de.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};de.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Qr(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&no(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Zo=x.JSON.stringify;class N_{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function O_(){var t=ea;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class M_{constructor(){this.h=this.g=null}add(e,n){const r=th.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var th=new N_(()=>new L_,t=>t.reset());class L_{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function F_(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function U_(t){x.setTimeout(()=>{throw t},0)}let cr,ur=!1,ea=new M_,nh=()=>{const t=x.Promise.resolve(void 0);cr=()=>{t.then(x_)}};var x_=()=>{for(var t;t=O_();){try{t.h.call(t.g)}catch(n){U_(n)}var e=th;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ur=!1};function Gi(t,e){de.call(this),this.h=t||1,this.g=e||x,this.j=Ie(this.qb,this),this.l=Date.now()}pe(Gi,de);w=Gi.prototype;w.ga=!1;w.T=null;w.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),_e(this,"tick"),this.ga&&(ta(this),this.start()))}};w.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ta(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}w.N=function(){Gi.$.N.call(this),ta(this),delete this.g};function na(t,e,n){if(typeof t=="function")n&&(t=Ie(t,n));else if(t&&typeof t.handleEvent=="function")t=Ie(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:x.setTimeout(t,e||0)}function rh(t){t.g=na(()=>{t.g=null,t.i&&(t.i=!1,rh(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class B_ extends kt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:rh(this)}N(){super.N(),this.g&&(x.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hr(t){kt.call(this),this.h=t,this.g={}}pe(hr,kt);var Al=[];function ih(t,e,n,r){Array.isArray(n)||(n&&(Al[0]=n.toString()),n=Al);for(var i=0;i<n.length;i++){var s=Xu(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function sh(t){Go(t.g,function(e,n){this.g.hasOwnProperty(n)&&Xo(e)},t),t.g={}}hr.prototype.N=function(){hr.$.N.call(this),sh(this)};hr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Qi(){this.g=!0}Qi.prototype.Ea=function(){this.g=!1};function j_(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function q_(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function cn(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+z_(t,n)+(r?" "+r:"")})}function $_(t,e){t.info(function(){return"TIMEOUT: "+e})}Qi.prototype.info=function(){};function z_(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Zo(n)}catch{return e}}var Jt={},Rl=null;function Xi(){return Rl=Rl||new de}Jt.Ta="serverreachability";function oh(t){we.call(this,Jt.Ta,t)}pe(oh,we);function fr(t){const e=Xi();_e(e,new oh(e))}Jt.STAT_EVENT="statevent";function ah(t,e){we.call(this,Jt.STAT_EVENT,t),this.stat=e}pe(ah,we);function Pe(t){const e=Xi();_e(e,new ah(e,t))}Jt.Ua="timingevent";function lh(t,e){we.call(this,Jt.Ua,t),this.size=e}pe(lh,we);function Or(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return x.setTimeout(function(){t()},e)}var Ji={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ch={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ra(){}ra.prototype.h=null;function bl(t){return t.h||(t.h=t.i())}function uh(){}var Mr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ia(){we.call(this,"d")}pe(ia,we);function sa(){we.call(this,"c")}pe(sa,we);var io;function Yi(){}pe(Yi,ra);Yi.prototype.g=function(){return new XMLHttpRequest};Yi.prototype.i=function(){return{}};io=new Yi;function Lr(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new hr(this),this.P=H_,t=Zs?125:void 0,this.V=new Gi(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new hh}function hh(){this.i=null,this.g="",this.h=!1}var H_=45e3,so={},bi={};w=Lr.prototype;w.setTimeout=function(t){this.P=t};function oo(t,e,n){t.L=1,t.v=es(ct(e)),t.s=n,t.S=!0,fh(t,null)}function fh(t,e){t.G=Date.now(),Fr(t),t.A=ct(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Eh(n.i,"t",r),t.C=0,n=t.l.J,t.h=new hh,t.g=jh(t.l,n?e:null,!t.s),0<t.O&&(t.M=new B_(Ie(t.Pa,t,t.g),t.O)),ih(t.U,t.g,"readystatechange",t.nb),e=t.I?Gu(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),fr(),j_(t.j,t.u,t.A,t.m,t.W,t.s)}w.nb=function(t){t=t.target;const e=this.M;e&&Ke(t)==3?e.l():this.Pa(t)};w.Pa=function(t){try{if(t==this.g)e:{const u=Ke(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Zs||this.g&&(this.h.h||this.g.ja()||kl(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?fr(3):fr(2)),Zi(this);var n=this.g.da();this.ca=n;t:if(dh(this)){var r=kl(this.g);t="";var i=r.length,s=Ke(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ot(this),Xn(this);var o="";break t}this.h.i=new x.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,q_(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ar(a)){var c=a;break t}}c=null}if(n=c)cn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ao(this,n);else{this.i=!1,this.o=3,Pe(12),Ot(this),Xn(this);break e}}this.S?(ph(this,u,o),Zs&&this.i&&u==3&&(ih(this.U,this.V,"tick",this.mb),this.V.start())):(cn(this.j,this.m,o,null),ao(this,o)),u==4&&Ot(this),this.i&&!this.J&&(u==4?Fh(this.l,this):(this.i=!1,Fr(this)))}else fy(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Pe(12)):(this.o=0,Pe(13)),Ot(this),Xn(this)}}}catch{}finally{}};function dh(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function ph(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=K_(t,n),i==bi){e==4&&(t.o=4,Pe(14),r=!1),cn(t.j,t.m,null,"[Incomplete Response]");break}else if(i==so){t.o=4,Pe(15),cn(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else cn(t.j,t.m,i,null),ao(t,i);dh(t)&&i!=bi&&i!=so&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Pe(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ha(e),e.M=!0,Pe(11))):(cn(t.j,t.m,n,"[Invalid Chunked Response]"),Ot(t),Xn(t))}w.mb=function(){if(this.g){var t=Ke(this.g),e=this.g.ja();this.C<e.length&&(Zi(this),ph(this,t,e),this.i&&t!=4&&Fr(this))}};function K_(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?bi:(n=Number(e.substring(n,r)),isNaN(n)?so:(r+=1,r+n>e.length?bi:(e=e.slice(r,r+n),t.C=r+n,e)))}w.cancel=function(){this.J=!0,Ot(this)};function Fr(t){t.Y=Date.now()+t.P,mh(t,t.P)}function mh(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Or(Ie(t.lb,t),e)}function Zi(t){t.B&&(x.clearTimeout(t.B),t.B=null)}w.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?($_(this.j,this.A),this.L!=2&&(fr(),Pe(17)),Ot(this),this.o=2,Xn(this)):mh(this,this.Y-t)};function Xn(t){t.l.H==0||t.J||Fh(t.l,t)}function Ot(t){Zi(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,ta(t.V),sh(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function ao(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||lo(n.i,t))){if(!t.K&&lo(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ci(n),rs(n);else break e;ua(n),Pe(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Or(Ie(n.ib,n),6e3));if(1>=wh(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Mt(n,11)}else if((t.K||n.g==t)&&Ci(n),!ar(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.i;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(oa(s,s.h),s.h=null))}if(r.F){const g=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(r.Da=g,Z(r.I,r.F,g))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Bh(r,r.J?r.pa:null,r.Y),o.K){Ah(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Zi(a),Fr(a)),r.g=o}else Mh(r);0<n.j.length&&is(n)}else c[0]!="stop"&&c[0]!="close"||Mt(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Mt(n,7):ca(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}fr(4)}catch{}}function W_(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(zi(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function G_(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(zi(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function gh(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(zi(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=G_(t),r=W_(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var _h=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Q_(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Bt(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Bt){this.h=t.h,Pi(this,t.j),this.s=t.s,this.g=t.g,Si(this,t.m),this.l=t.l;var e=t.i,n=new dr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Pl(this,n),this.o=t.o}else t&&(e=String(t).match(_h))?(this.h=!1,Pi(this,e[1]||"",!0),this.s=zn(e[2]||""),this.g=zn(e[3]||"",!0),Si(this,e[4]),this.l=zn(e[5]||"",!0),Pl(this,e[6]||"",!0),this.o=zn(e[7]||"")):(this.h=!1,this.i=new dr(null,this.h))}Bt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Hn(e,Sl,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Hn(e,Sl,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Hn(n,n.charAt(0)=="/"?Y_:J_,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Hn(n,ey)),t.join("")};function ct(t){return new Bt(t)}function Pi(t,e,n){t.j=n?zn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Si(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Pl(t,e,n){e instanceof dr?(t.i=e,ty(t.i,t.h)):(n||(e=Hn(e,Z_)),t.i=new dr(e,t.h))}function Z(t,e,n){t.i.set(e,n)}function es(t){return Z(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function zn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Hn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,X_),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function X_(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Sl=/[#\/\?@]/g,J_=/[#\?:]/g,Y_=/[#\?]/g,Z_=/[#\?@]/g,ey=/#/g;function dr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Dt(t){t.g||(t.g=new Map,t.h=0,t.i&&Q_(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}w=dr.prototype;w.add=function(t,e){Dt(this),this.i=null,t=Ln(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function yh(t,e){Dt(t),e=Ln(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function vh(t,e){return Dt(t),e=Ln(t,e),t.g.has(e)}w.forEach=function(t,e){Dt(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};w.ta=function(){Dt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};w.Z=function(t){Dt(this);let e=[];if(typeof t=="string")vh(this,t)&&(e=e.concat(this.g.get(Ln(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};w.set=function(t,e){return Dt(this),this.i=null,t=Ln(this,t),vh(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};w.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Eh(t,e,n){yh(t,e),0<n.length&&(t.i=null,t.g.set(Ln(t,e),Ko(n)),t.h+=n.length)}w.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ln(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ty(t,e){e&&!t.j&&(Dt(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(yh(this,r),Eh(this,i,n))},t)),t.j=e}var ny=class{constructor(t,e){this.g=t,this.map=e}};function Th(t){this.l=t||ry,x.PerformanceNavigationTiming?(t=x.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(x.g&&x.g.Ka&&x.g.Ka()&&x.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ry=10;function Ih(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function wh(t){return t.h?1:t.g?t.g.size:0}function lo(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function oa(t,e){t.g?t.g.add(e):t.h=e}function Ah(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Th.prototype.cancel=function(){if(this.i=Rh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Rh(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ko(t.i)}var iy=class{stringify(t){return x.JSON.stringify(t,void 0)}parse(t){return x.JSON.parse(t,void 0)}};function sy(){this.g=new iy}function oy(t,e,n){const r=n||"";try{gh(t,function(i,s){let o=i;Vr(i)&&(o=Zo(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function ay(t,e){const n=new Qi;if(x.Image){const r=new Image;r.onload=Gr(Xr,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Gr(Xr,n,r,"TestLoadImage: error",!1,e),r.onabort=Gr(Xr,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Gr(Xr,n,r,"TestLoadImage: timeout",!1,e),x.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Xr(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ur(t){this.l=t.fc||null,this.j=t.ob||!1}pe(Ur,ra);Ur.prototype.g=function(){return new ts(this.l,this.j)};Ur.prototype.i=function(t){return function(){return t}}({});function ts(t,e){de.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=aa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}pe(ts,de);var aa=0;w=ts.prototype;w.open=function(t,e){if(this.readyState!=aa)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,pr(this)};w.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||x).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};w.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xr(this)),this.readyState=aa};w.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,pr(this)),this.g&&(this.readyState=3,pr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof x.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;bh(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function bh(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}w.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?xr(this):pr(this),this.readyState==3&&bh(this)}};w.Za=function(t){this.g&&(this.response=this.responseText=t,xr(this))};w.Ya=function(t){this.g&&(this.response=t,xr(this))};w.ka=function(){this.g&&xr(this)};function xr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,pr(t)}w.setRequestHeader=function(t,e){this.v.append(t,e)};w.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};w.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function pr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ts.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ly=x.JSON.parse;function re(t){de.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ph,this.L=this.M=!1}pe(re,de);var Ph="",cy=/^https?$/i,uy=["POST","PUT"];w=re.prototype;w.Oa=function(t){this.M=t};w.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():io.g(),this.C=this.u?bl(this.u):bl(io),this.g.onreadystatechange=Ie(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Cl(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=x.FormData&&t instanceof x.FormData,!(0<=zu(uy,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{kh(this),0<this.B&&((this.L=hy(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ie(this.ua,this)):this.A=na(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Cl(this,s)}};function hy(t){return In&&typeof t.timeout=="number"&&t.ontimeout!==void 0}w.ua=function(){typeof Ho<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_e(this,"timeout"),this.abort(8))};function Cl(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Sh(t),ns(t)}function Sh(t){t.F||(t.F=!0,_e(t,"complete"),_e(t,"error"))}w.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,_e(this,"complete"),_e(this,"abort"),ns(this))};w.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ns(this,!0)),re.$.N.call(this)};w.La=function(){this.s||(this.G||this.v||this.l?Ch(this):this.kb())};w.kb=function(){Ch(this)};function Ch(t){if(t.h&&typeof Ho<"u"&&(!t.C[1]||Ke(t)!=4||t.da()!=2)){if(t.v&&Ke(t)==4)na(t.La,0,t);else if(_e(t,"readystatechange"),Ke(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(_h)[1]||null;!i&&x.self&&x.self.location&&(i=x.self.location.protocol.slice(0,-1)),r=!cy.test(i?i.toLowerCase():"")}n=r}if(n)_e(t,"complete"),_e(t,"success");else{t.m=6;try{var s=2<Ke(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",Sh(t)}}finally{ns(t)}}}}function ns(t,e){if(t.g){kh(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||_e(t,"ready");try{n.onreadystatechange=r}catch{}}}function kh(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(x.clearTimeout(t.A),t.A=null)}w.isActive=function(){return!!this.g};function Ke(t){return t.g?t.g.readyState:0}w.da=function(){try{return 2<Ke(this)?this.g.status:-1}catch{return-1}};w.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};w.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ly(e)}};function kl(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Ph:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function fy(t){const e={};t=(t.g&&2<=Ke(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ar(t[r]))continue;var n=F_(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}k_(e,function(r){return r.join(", ")})}w.Ia=function(){return this.m};w.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Dh(t){let e="";return Go(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function la(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Dh(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Z(t,e,n))}function qn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Vh(t){this.Ga=0,this.j=[],this.l=new Qi,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=qn("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=qn("baseRetryDelayMs",5e3,t),this.hb=qn("retryDelaySeedMs",1e4,t),this.eb=qn("forwardChannelMaxRetries",2,t),this.xa=qn("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Th(t&&t.concurrentRequestLimit),this.Ja=new sy,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}w=Vh.prototype;w.ra=8;w.H=1;function ca(t){if(Nh(t),t.H==3){var e=t.W++,n=ct(t.I);if(Z(n,"SID",t.K),Z(n,"RID",e),Z(n,"TYPE","terminate"),Br(t,n),e=new Lr(t,t.l,e),e.L=2,e.v=es(ct(n)),n=!1,x.navigator&&x.navigator.sendBeacon)try{n=x.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&x.Image&&(new Image().src=e.v,n=!0),n||(e.g=jh(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Fr(e)}xh(t)}function rs(t){t.g&&(ha(t),t.g.cancel(),t.g=null)}function Nh(t){rs(t),t.u&&(x.clearTimeout(t.u),t.u=null),Ci(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&x.clearTimeout(t.m),t.m=null)}function is(t){if(!Ih(t.i)&&!t.m){t.m=!0;var e=t.Na;cr||nh(),ur||(cr(),ur=!0),ea.add(e,t),t.C=0}}function dy(t,e){return wh(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Or(Ie(t.Na,t,e),Uh(t,t.C)),t.C++,!0)}w.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Lr(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Gu(s),Qu(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Oh(this,i,e),n=ct(this.I),Z(n,"RID",t),Z(n,"CVER",22),this.F&&Z(n,"X-HTTP-Session-Id",this.F),Br(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Dh(s)))+"&"+e:this.o&&la(n,this.o,s)),oa(this.i,i),this.bb&&Z(n,"TYPE","init"),this.P?(Z(n,"$req",e),Z(n,"SID","null"),i.aa=!0,oo(i,n,null)):oo(i,n,e),this.H=2}}else this.H==3&&(t?Dl(this,t):this.j.length==0||Ih(this.i)||Dl(this))};function Dl(t,e){var n;e?n=e.m:n=t.W++;const r=ct(t.I);Z(r,"SID",t.K),Z(r,"RID",n),Z(r,"AID",t.V),Br(t,r),t.o&&t.s&&la(r,t.o,t.s),n=new Lr(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Oh(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),oa(t.i,n),oo(n,r,e)}function Br(t,e){t.na&&Go(t.na,function(n,r){Z(e,r,n)}),t.h&&gh({},function(n,r){Z(e,r,n)})}function Oh(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Ie(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=s,0>c)s=Math.max(0,i[l].g-100),a=!1;else try{oy(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Mh(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;cr||nh(),ur||(cr(),ur=!0),ea.add(e,t),t.A=0}}function ua(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Or(Ie(t.Ma,t),Uh(t,t.A)),t.A++,!0)}w.Ma=function(){if(this.u=null,Lh(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Or(Ie(this.jb,this),t)}};w.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Pe(10),rs(this),Lh(this))};function ha(t){t.B!=null&&(x.clearTimeout(t.B),t.B=null)}function Lh(t){t.g=new Lr(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=ct(t.wa);Z(e,"RID","rpc"),Z(e,"SID",t.K),Z(e,"AID",t.V),Z(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Z(e,"TO",t.qa),Z(e,"TYPE","xmlhttp"),Br(t,e),t.o&&t.s&&la(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=es(ct(e)),n.s=null,n.S=!0,fh(n,t)}w.ib=function(){this.v!=null&&(this.v=null,rs(this),ua(this),Pe(19))};function Ci(t){t.v!=null&&(x.clearTimeout(t.v),t.v=null)}function Fh(t,e){var n=null;if(t.g==e){Ci(t),ha(t),t.g=null;var r=2}else if(lo(t.i,e))n=e.F,Ah(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Xi(),_e(r,new lh(r,n)),is(t)}else Mh(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&dy(t,e)||r==2&&ua(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Mt(t,5);break;case 4:Mt(t,10);break;case 3:Mt(t,6);break;default:Mt(t,2)}}}function Uh(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Mt(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Ie(t.pb,t);n||(n=new Bt("//www.google.com/images/cleardot.gif"),x.location&&x.location.protocol=="http"||Pi(n,"https"),es(n)),ay(n.toString(),r)}else Pe(2);t.H=0,t.h&&t.h.za(e),xh(t),Nh(t)}w.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Pe(2)):(this.l.info("Failed to ping google.com"),Pe(1))};function xh(t){if(t.H=0,t.ma=[],t.h){const e=Rh(t.i);(e.length!=0||t.j.length!=0)&&(Tl(t.ma,e),Tl(t.ma,t.j),t.i.i.length=0,Ko(t.j),t.j.length=0),t.h.ya()}}function Bh(t,e,n){var r=n instanceof Bt?ct(n):new Bt(n);if(r.g!="")e&&(r.g=e+"."+r.g),Si(r,r.m);else{var i=x.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Bt(null);r&&Pi(s,r),e&&(s.g=e),i&&Si(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Z(r,n,e),Z(r,"VER",t.ra),Br(t,r),r}function jh(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new re(new Ur({ob:!0})):new re(t.va),e.Oa(t.J),e}w.isActive=function(){return!!this.h&&this.h.isActive(this)};function qh(){}w=qh.prototype;w.Ba=function(){};w.Aa=function(){};w.za=function(){};w.ya=function(){};w.isActive=function(){return!0};w.Va=function(){};function ki(){if(In&&!(10<=Number(b_)))throw Error("Environmental error: no available transport.")}ki.prototype.g=function(t,e){return new Oe(t,e)};function Oe(t,e){de.call(this),this.g=new Vh(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ar(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ar(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Fn(this)}pe(Oe,de);Oe.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Pe(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Bh(t,null,t.Y),is(t)};Oe.prototype.close=function(){ca(this.g)};Oe.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Zo(t),t=n);e.j.push(new ny(e.fb++,t)),e.H==3&&is(e)};Oe.prototype.N=function(){this.g.h=null,delete this.j,ca(this.g),delete this.g,Oe.$.N.call(this)};function $h(t){ia.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}pe($h,ia);function zh(){sa.call(this),this.status=1}pe(zh,sa);function Fn(t){this.g=t}pe(Fn,qh);Fn.prototype.Ba=function(){_e(this.g,"a")};Fn.prototype.Aa=function(t){_e(this.g,new $h(t))};Fn.prototype.za=function(t){_e(this.g,new zh)};Fn.prototype.ya=function(){_e(this.g,"b")};function py(){this.blockSize=-1}function Ue(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}pe(Ue,py);Ue.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ls(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Ue.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Ls(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Ls(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Ls(this,r),i=0;break}}this.h=i,this.i+=e};Ue.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Y(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var my={};function fa(t){return-128<=t&&128>t?w_(t,function(e){return new Y([e|0],0>e?-1:0)}):new Y([t|0],0>t?-1:0)}function We(t){if(isNaN(t)||!isFinite(t))return mn;if(0>t)return ge(We(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=co;return new Y(e,0)}function Hh(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ge(Hh(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=We(Math.pow(e,8)),r=mn,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=We(Math.pow(e,s)),r=r.R(s).add(We(o))):(r=r.R(n),r=r.add(We(o)))}return r}var co=4294967296,mn=fa(0),uo=fa(1),Vl=fa(16777216);w=Y.prototype;w.ea=function(){if(Me(this))return-ge(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:co+r)*e,e*=co}return t};w.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(ot(this))return"0";if(Me(this))return"-"+ge(this).toString(t);for(var e=We(Math.pow(t,6)),n=this,r="";;){var i=Vi(n,e).g;n=Di(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,ot(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};w.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function ot(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Me(t){return t.h==-1}w.X=function(t){return t=Di(this,t),Me(t)?-1:ot(t)?0:1};function ge(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Y(n,~t.h).add(uo)}w.abs=function(){return Me(this)?ge(this):this};w.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Y(n,n[n.length-1]&-2147483648?-1:0)};function Di(t,e){return t.add(ge(e))}w.R=function(t){if(ot(this)||ot(t))return mn;if(Me(this))return Me(t)?ge(this).R(ge(t)):ge(ge(this).R(t));if(Me(t))return ge(this.R(ge(t)));if(0>this.X(Vl)&&0>t.X(Vl))return We(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Jr(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Jr(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Jr(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Jr(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Y(n,0)};function Jr(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function $n(t,e){this.g=t,this.h=e}function Vi(t,e){if(ot(e))throw Error("division by zero");if(ot(t))return new $n(mn,mn);if(Me(t))return e=Vi(ge(t),e),new $n(ge(e.g),ge(e.h));if(Me(e))return e=Vi(t,ge(e)),new $n(ge(e.g),e.h);if(30<t.g.length){if(Me(t)||Me(e))throw Error("slowDivide_ only works with positive integers.");for(var n=uo,r=e;0>=r.X(t);)n=Nl(n),r=Nl(r);var i=nn(n,1),s=nn(r,1);for(r=nn(r,2),n=nn(n,2);!ot(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=nn(r,1),n=nn(n,1)}return e=Di(t,i.R(e)),new $n(i,e)}for(i=mn;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=We(n),o=s.R(e);Me(o)||0<o.X(t);)n-=r,s=We(n),o=s.R(e);ot(s)&&(s=uo),i=i.add(s),t=Di(t,o)}return new $n(i,t)}w.gb=function(t){return Vi(this,t).h};w.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Y(n,this.h&t.h)};w.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Y(n,this.h|t.h)};w.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Y(n,this.h^t.h)};function Nl(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Y(n,t.h)}function nn(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Y(i,t.h)}ki.prototype.createWebChannel=ki.prototype.g;Oe.prototype.send=Oe.prototype.u;Oe.prototype.open=Oe.prototype.m;Oe.prototype.close=Oe.prototype.close;Ji.NO_ERROR=0;Ji.TIMEOUT=8;Ji.HTTP_ERROR=6;ch.COMPLETE="complete";uh.EventType=Mr;Mr.OPEN="a";Mr.CLOSE="b";Mr.ERROR="c";Mr.MESSAGE="d";de.prototype.listen=de.prototype.O;re.prototype.listenOnce=re.prototype.P;re.prototype.getLastError=re.prototype.Sa;re.prototype.getLastErrorCode=re.prototype.Ia;re.prototype.getStatus=re.prototype.da;re.prototype.getResponseJson=re.prototype.Wa;re.prototype.getResponseText=re.prototype.ja;re.prototype.send=re.prototype.ha;re.prototype.setWithCredentials=re.prototype.Oa;Ue.prototype.digest=Ue.prototype.l;Ue.prototype.reset=Ue.prototype.reset;Ue.prototype.update=Ue.prototype.j;Y.prototype.add=Y.prototype.add;Y.prototype.multiply=Y.prototype.R;Y.prototype.modulo=Y.prototype.gb;Y.prototype.compare=Y.prototype.X;Y.prototype.toNumber=Y.prototype.ea;Y.prototype.toString=Y.prototype.toString;Y.prototype.getBits=Y.prototype.D;Y.fromNumber=We;Y.fromString=Hh;var gy=function(){return new ki},_y=function(){return Xi()},Fs=Ji,yy=ch,vy=Jt,Ol={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ey=Ur,Yr=uh,Ty=re,Iy=Ue,gn=Y;const Ml="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Un="10.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht=new Oo("@firebase/firestore");function Ll(){return Ht.logLevel}function b(t,...e){if(Ht.logLevel<=Q.DEBUG){const n=e.map(da);Ht.debug(`Firestore (${Un}): ${t}`,...n)}}function ut(t,...e){if(Ht.logLevel<=Q.ERROR){const n=e.map(da);Ht.error(`Firestore (${Un}): ${t}`,...n)}}function wn(t,...e){if(Ht.logLevel<=Q.WARN){const n=e.map(da);Ht.warn(`Firestore (${Un}): ${t}`,...n)}}function da(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t="Unexpected state"){const e=`FIRESTORE (${Un}) INTERNAL ASSERTION FAILED: `+t;throw ut(e),new Error(e)}function ee(t,e){t||U()}function $(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends dt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ve.UNAUTHENTICATED))}shutdown(){}}class Ay{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ry{constructor(e){this.t=e,this.currentUser=ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new wt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new wt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new wt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ee(typeof r.accessToken=="string"),new Kh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ee(e===null||typeof e=="string"),new ve(e)}}class by{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ve.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Py{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new by(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Sy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Cy{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,b("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ee(typeof n.token=="string"),this.R=n.token,new Sy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=ky(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function J(t,e){return t<e?-1:t>e?1:0}function An(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new D(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new D(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new he(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class mr{constructor(e,n,r){n===void 0?n=0:n>e.length&&U(),r===void 0?r=e.length-n:r>e.length-n&&U(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return mr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof mr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ne extends mr{construct(e,n,r){return new ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(v.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ne(n)}static emptyPath(){return new ne([])}}const Dy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Te extends mr{construct(e,n,r){return new Te(e,n,r)}static isValidIdentifier(e){return Dy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Te.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Te(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new D(v.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new D(v.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new D(v.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Te(n)}static emptyPath(){return new Te([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.path=e}static fromPath(e){return new N(ne.fromString(e))}static fromName(e){return new N(ne.fromString(e).popFirst(5))}static empty(){return new N(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new N(new ne(e.slice()))}}function Vy(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=B.fromTimestamp(r===1e9?new he(n+1,0):new he(n,r));return new bt(i,N.empty(),e)}function Ny(t){return new bt(t.readTime,t.key,-1)}class bt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new bt(B.min(),N.empty(),-1)}static max(){return new bt(B.max(),N.empty(),-1)}}function Oy(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=N.comparator(t.documentKey,e.documentKey),n!==0?n:J(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ly{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(t){if(t.code!==v.FAILED_PRECONDITION||t.message!==My)throw t;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,r)=>{n(e)})}static reject(e){return new E((n,r)=>{r(e)})}static waitFor(e){return new E((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=E.resolve(!1);for(const r of e)n=n.next(i=>i?E.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new E((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new E((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function qr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class pa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}pa.ae=-1;function ss(t){return t==null}function Ni(t){return t===0&&1/t==-1/0}function Fy(t){return typeof t=="number"&&Number.isInteger(t)&&!Ni(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Yt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Gh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,n){this.comparator=e,this.root=n||me.EMPTY}insert(e,n){return new te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,me.BLACK,null,null))}remove(e){return new te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,me.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zr(this.root,e,this.comparator,!0)}}class Zr{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class me{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:me.RED,this.left=i!=null?i:me.EMPTY,this.right=s!=null?s:me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new me(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return me.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}me.EMPTY=null,me.RED=!0,me.BLACK=!1;me.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(e,n,r,i,s){return this}insert(e,n,r){return new me(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.comparator=e,this.data=new te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ul(this.data.getIterator())}getIteratorFrom(e){return new Ul(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ae)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ae(this.comparator);return n.data=e,n}}class Ul{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.fields=e,e.sort(Te.comparator)}static empty(){return new Fe([])}unionWith(e){let n=new Ae(Te.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Fe(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return An(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Qh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Qh("Invalid base64 string: "+s):s}}(e);return new be(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new be(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}be.EMPTY_BYTE_STRING=new be("");const Uy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pt(t){if(ee(!!t),typeof t=="string"){let e=0;const n=Uy.exec(t);if(ee(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ae(t.seconds),nanos:ae(t.nanos)}}function ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Kt(t){return typeof t=="string"?be.fromBase64String(t):be.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ga(t){const e=t.mapValue.fields.__previous_value__;return ma(e)?ga(e):e}function gr(t){const e=Pt(t.mapValue.fields.__local_write_time__.timestampValue);return new he(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class _r{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new _r("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof _r&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ma(t)?4:By(t)?9007199254740991:10:U()}function et(t,e){if(t===e)return!0;const n=Wt(t);if(n!==Wt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return gr(t).isEqual(gr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Pt(i.timestampValue),a=Pt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Kt(i.bytesValue).isEqual(Kt(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ae(i.geoPointValue.latitude)===ae(s.geoPointValue.latitude)&&ae(i.geoPointValue.longitude)===ae(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ae(i.integerValue)===ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ae(i.doubleValue),a=ae(s.doubleValue);return o===a?Ni(o)===Ni(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return An(t.arrayValue.values||[],e.arrayValue.values||[],et);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Fl(o)!==Fl(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!et(o[l],a[l])))return!1;return!0}(t,e);default:return U()}}function yr(t,e){return(t.values||[]).find(n=>et(n,e))!==void 0}function Rn(t,e){if(t===e)return 0;const n=Wt(t),r=Wt(e);if(n!==r)return J(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ae(s.integerValue||s.doubleValue),l=ae(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return xl(t.timestampValue,e.timestampValue);case 4:return xl(gr(t),gr(e));case 5:return J(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Kt(s),l=Kt(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=J(a[c],l[c]);if(u!==0)return u}return J(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=J(ae(s.latitude),ae(o.latitude));return a!==0?a:J(ae(s.longitude),ae(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Rn(a[c],l[c]);if(u)return u}return J(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===ei.mapValue&&o===ei.mapValue)return 0;if(s===ei.mapValue)return 1;if(o===ei.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const f=J(l[h],u[h]);if(f!==0)return f;const d=Rn(a[l[h]],c[u[h]]);if(d!==0)return d}return J(l.length,u.length)}(t.mapValue,e.mapValue);default:throw U()}}function xl(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=Pt(t),r=Pt(e),i=J(n.seconds,r.seconds);return i!==0?i:J(n.nanos,r.nanos)}function bn(t){return ho(t)}function ho(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Pt(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Kt(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return N.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ho(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ho(n.fields[o])}`;return i+"}"}(t.mapValue):U()}function fo(t){return!!t&&"integerValue"in t}function _a(t){return!!t&&"arrayValue"in t}function Bl(t){return!!t&&"nullValue"in t}function jl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ci(t){return!!t&&"mapValue"in t}function Jn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Yt(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Jn(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Jn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function By(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.value=e}static empty(){return new De({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ci(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jn(n)}setAll(e){let n=Te.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Jn(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ci(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return et(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ci(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Yt(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new De(Jn(this.value))}}function Xh(t){const e=[];return Yt(t.fields,(n,r)=>{const i=new Te([n]);if(ci(r)){const s=Xh(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Fe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ee(e,0,B.min(),B.min(),B.min(),De.empty(),0)}static newFoundDocument(e,n,r,i){return new Ee(e,1,n,B.min(),r,i,0)}static newNoDocument(e,n){return new Ee(e,2,n,B.min(),B.min(),De.empty(),0)}static newUnknownDocument(e,n){return new Ee(e,3,n,B.min(),B.min(),De.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=De.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=De.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Oi{constructor(e,n){this.position=e,this.inclusive=n}}function ql(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=N.comparator(N.fromName(o.referenceValue),n.key):r=Rn(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function $l(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!et(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Yn{constructor(e,n="asc"){this.field=e,this.dir=n}}function jy(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Jh{}class ue extends Jh{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new $y(e,n,r):n==="array-contains"?new Ky(e,r):n==="in"?new Wy(e,r):n==="not-in"?new Gy(e,r):n==="array-contains-any"?new Qy(e,r):new ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new zy(e,r):new Hy(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Rn(n,this.value)):n!==null&&Wt(this.value)===Wt(n)&&this.matchesComparison(Rn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class tt extends Jh{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new tt(e,n)}matches(e){return Yh(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Yh(t){return t.op==="and"}function Zh(t){return qy(t)&&Yh(t)}function qy(t){for(const e of t.filters)if(e instanceof tt)return!1;return!0}function po(t){if(t instanceof ue)return t.field.canonicalString()+t.op.toString()+bn(t.value);if(Zh(t))return t.filters.map(e=>po(e)).join(",");{const e=t.filters.map(n=>po(n)).join(",");return`${t.op}(${e})`}}function ef(t,e){return t instanceof ue?function(r,i){return i instanceof ue&&r.op===i.op&&r.field.isEqual(i.field)&&et(r.value,i.value)}(t,e):t instanceof tt?function(r,i){return i instanceof tt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&ef(o,i.filters[a]),!0):!1}(t,e):void U()}function tf(t){return t instanceof ue?function(n){return`${n.field.canonicalString()} ${n.op} ${bn(n.value)}`}(t):t instanceof tt?function(n){return n.op.toString()+" {"+n.getFilters().map(tf).join(" ,")+"}"}(t):"Filter"}class $y extends ue{constructor(e,n,r){super(e,n,r),this.key=N.fromName(r.referenceValue)}matches(e){const n=N.comparator(e.key,this.key);return this.matchesComparison(n)}}class zy extends ue{constructor(e,n){super(e,"in",n),this.keys=nf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Hy extends ue{constructor(e,n){super(e,"not-in",n),this.keys=nf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>N.fromName(r.referenceValue))}class Ky extends ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return _a(n)&&yr(n.arrayValue,this.value)}}class Wy extends ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&yr(this.value.arrayValue,n)}}class Gy extends ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(yr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!yr(this.value.arrayValue,n)}}class Qy extends ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!_a(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>yr(this.value.arrayValue,r))}}/**
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
 */class Xy{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function zl(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Xy(t,e,n,r,i,s,o)}function ya(t){const e=$(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>po(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ss(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>bn(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>bn(r)).join(",")),e.he=n}return e.he}function va(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!jy(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ef(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$l(t.startAt,e.startAt)&&$l(t.endAt,e.endAt)}function mo(t){return N.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function Jy(t,e,n,r,i,s,o,a){return new os(t,e,n,r,i,s,o,a)}function as(t){return new os(t)}function Hl(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Yy(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Zy(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function ev(t){return t.collectionGroup!==null}function _n(t){const e=$(t);if(e.Pe===null){e.Pe=[];const n=Zy(e),r=Yy(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Yn(n)),e.Pe.push(new Yn(Te.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Yn(Te.keyField(),s))}}}return e.Pe}function ht(t){const e=$(t);if(!e.Ie)if(e.limitType==="F")e.Ie=zl(e.path,e.collectionGroup,_n(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of _n(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Yn(s.field,o))}const r=e.endAt?new Oi(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Oi(e.startAt.position,e.startAt.inclusive):null;e.Ie=zl(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.Ie}function go(t,e,n){return new os(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ls(t,e){return va(ht(t),ht(e))&&t.limitType===e.limitType}function rf(t){return`${ya(ht(t))}|lt:${t.limitType}`}function _o(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>tf(i)).join(", ")}]`),ss(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>bn(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>bn(i)).join(",")),`Target(${r})`}(ht(t))}; limitType=${t.limitType})`}function cs(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):N.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of _n(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=ql(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,_n(r),i)||r.endAt&&!function(o,a,l){const c=ql(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,_n(r),i))}(t,e)}function tv(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function sf(t){return(e,n)=>{let r=!1;for(const i of _n(t)){const s=nv(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function nv(t,e,n){const r=t.field.isKeyField()?N.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?Rn(l,c):U()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Yt(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Gh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv=new te(N.comparator);function ft(){return rv}const of=new te(N.comparator);function Kn(...t){let e=of;for(const n of t)e=e.insert(n.key,n);return e}function af(t){let e=of;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Lt(){return Zn()}function lf(){return Zn()}function Zn(){return new xn(t=>t.toString(),(t,e)=>t.isEqual(e))}const iv=new te(N.comparator),sv=new Ae(N.comparator);function H(...t){let e=sv;for(const n of t)e=e.add(n);return e}const ov=new Ae(J);function av(){return ov}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ni(e)?"-0":e}}function uf(t){return{integerValue:""+t}}function lv(t,e){return Fy(e)?uf(e):cf(t,e)}/**
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
 */class us{constructor(){this._=void 0}}function cv(t,e,n){return t instanceof Mi?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ma(s)&&(s=ga(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Pn?ff(t,e):t instanceof vr?df(t,e):function(i,s){const o=hf(i,s),a=Kl(o)+Kl(i.Te);return fo(o)&&fo(i.Te)?uf(a):cf(i.serializer,a)}(t,e)}function uv(t,e,n){return t instanceof Pn?ff(t,e):t instanceof vr?df(t,e):n}function hf(t,e){return t instanceof Li?function(r){return fo(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Mi extends us{}class Pn extends us{constructor(e){super(),this.elements=e}}function ff(t,e){const n=pf(e);for(const r of t.elements)n.some(i=>et(i,r))||n.push(r);return{arrayValue:{values:n}}}class vr extends us{constructor(e){super(),this.elements=e}}function df(t,e){let n=pf(e);for(const r of t.elements)n=n.filter(i=>!et(i,r));return{arrayValue:{values:n}}}class Li extends us{constructor(e,n){super(),this.serializer=e,this.Te=n}}function Kl(t){return ae(t.integerValue||t.doubleValue)}function pf(t){return _a(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,n){this.field=e,this.transform=n}}function fv(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Pn&&i instanceof Pn||r instanceof vr&&i instanceof vr?An(r.elements,i.elements,et):r instanceof Li&&i instanceof Li?et(r.Te,i.Te):r instanceof Mi&&i instanceof Mi}(t.transform,e.transform)}class dv{constructor(e,n){this.version=e,this.transformResults=n}}class at{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new at}static exists(e){return new at(void 0,e)}static updateTime(e){return new at(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ui(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hs{}function mf(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _f(t.key,at.none()):new fs(t.key,t.data,at.none());{const n=t.data,r=De.empty();let i=new Ae(Te.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Zt(t.key,r,new Fe(i.toArray()),at.none())}}function pv(t,e,n){t instanceof fs?function(i,s,o){const a=i.value.clone(),l=Gl(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Zt?function(i,s,o){if(!ui(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Gl(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(gf(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function er(t,e,n,r){return t instanceof fs?function(s,o,a,l){if(!ui(s.precondition,o))return a;const c=s.value.clone(),u=Ql(s.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Zt?function(s,o,a,l){if(!ui(s.precondition,o))return a;const c=Ql(s.fieldTransforms,l,o),u=o.data;return u.setAll(gf(s)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return ui(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function mv(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=hf(r.transform,i||null);s!=null&&(n===null&&(n=De.empty()),n.set(r.field,s))}return n||null}function Wl(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&An(r,i,(s,o)=>fv(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class fs extends hs{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Zt extends hs{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function gf(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Gl(t,e,n){const r=new Map;ee(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,uv(o,a,n[i]))}return r}function Ql(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,cv(s,o,e))}return r}class _f extends hs{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gv extends hs{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&pv(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=er(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=er(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=lf();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=mf(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),H())}isEqual(e){return this.batchId===e.batchId&&An(this.mutations,e.mutations,(n,r)=>Wl(n,r))&&An(this.baseMutations,e.baseMutations,(n,r)=>Wl(n,r))}}class Ea{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ee(e.mutations.length===r.length);let i=function(){return iv}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ea(e,n,r,i)}}/**
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
 */class yv{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class vv{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe,W;function Ev(t){switch(t){default:return U();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0}}function yf(t){if(t===void 0)return ut("GRPC error has no .code"),v.UNKNOWN;switch(t){case oe.OK:return v.OK;case oe.CANCELLED:return v.CANCELLED;case oe.UNKNOWN:return v.UNKNOWN;case oe.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case oe.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case oe.INTERNAL:return v.INTERNAL;case oe.UNAVAILABLE:return v.UNAVAILABLE;case oe.UNAUTHENTICATED:return v.UNAUTHENTICATED;case oe.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case oe.NOT_FOUND:return v.NOT_FOUND;case oe.ALREADY_EXISTS:return v.ALREADY_EXISTS;case oe.PERMISSION_DENIED:return v.PERMISSION_DENIED;case oe.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case oe.ABORTED:return v.ABORTED;case oe.OUT_OF_RANGE:return v.OUT_OF_RANGE;case oe.UNIMPLEMENTED:return v.UNIMPLEMENTED;case oe.DATA_LOSS:return v.DATA_LOSS;default:return U()}}(W=oe||(oe={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ta{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ti}static getOrCreateInstance(){return ti===null&&(ti=new Ta),ti}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ti=null;/**
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
 */function Tv(){return new TextEncoder}/**
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
 */const Iv=new gn([4294967295,4294967295],0);function Xl(t){const e=Tv().encode(t),n=new Iy;return n.update(e),new Uint8Array(n.digest())}function Jl(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new gn([n,r],0),new gn([i,s],0)]}class Ia{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Wn(`Invalid padding: ${n}`);if(r<0)throw new Wn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Wn(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Wn(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=gn.fromNumber(this.de)}Re(e,n,r){let i=e.add(n.multiply(gn.fromNumber(r)));return i.compare(Iv)===1&&(i=new gn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=Xl(e),[r,i]=Jl(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ia(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=Xl(e),[r,i]=Jl(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Wn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,$r.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ds(B.min(),i,new te(J),ft(),H())}}class $r{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new $r(r,n,H(),H(),H())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n,r,i){this.fe=e,this.removedTargetIds=n,this.key=r,this.ge=i}}class vf{constructor(e,n){this.targetId=e,this.pe=n}}class Ef{constructor(e,n,r=be.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Yl{constructor(){this.ye=0,this.we=ec(),this.Se=be.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=H(),n=H(),r=H();return this.we.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:U()}}),new $r(this.Se,this.be,e,n,r)}xe(){this.De=!1,this.we=ec()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class wv{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=ft(),this.$e=Zl(),this.Ue=new te(J)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){var n,r;const i=e.targetId,s=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(mo(a))if(s===0){const l=new N(a.path);this.ze(i,l,Ee.newNoDocument(l,B.min()))}else ee(s===1);else{const l=this.et(i);if(l!==s){const c=this.tt(e,l);if(c.status!==0){this.Ye(i);const u=c.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,u)}(n=Ta.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,f,d,p){var g,y,m,I,T,k;const K={localCacheCount:d,existenceFilterCount:p.count},z=p.unchangedNames;return z&&(K.bloomFilter={applied:h===0,hashCount:(g=z==null?void 0:z.hashCount)!==null&&g!==void 0?g:0,bitmapLength:(I=(m=(y=z==null?void 0:z.bits)===null||y===void 0?void 0:y.bitmap)===null||m===void 0?void 0:m.length)!==null&&I!==void 0?I:0,padding:(k=(T=z==null?void 0:z.bits)===null||T===void 0?void 0:T.padding)!==null&&k!==void 0?k:0},f&&(K.bloomFilter.mightContain=f)),K}(c.status,(r=c.nt)!==null&&r!==void 0?r:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:r,count:i}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,c;try{l=Kt(s).toUint8Array()}catch(h){if(h instanceof Qh)return wn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{c=new Ia(l,o,a)}catch(h){return wn(h instanceof Wn?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const f=this.qe.rt();return c.mightContain(`projects/${f.projectId}/databases/${f.database}/documents/${h}`)};return c.de===0?{status:1}:{status:i===n-this.it(e.targetId,u)?0:2,nt:u}}it(e,n){const r=this.qe.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{n(s.path.canonicalString())||(this.ze(e,s,null),i++)}),i}st(e){const n=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&mo(a.target)){const l=new N(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,Ee.newNoDocument(l,e))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let r=H();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xe(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const i=new ds(e,n,this.Ue,this.Ke,r);return this.Ke=ft(),this.$e=Zl(),this.Ue=new te(J),i}Ge(e,n){if(!this.Je(e))return;const r=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ot(e,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new Yl,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Ae(J),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||b("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new Yl),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function Zl(){return new te(N.comparator)}function ec(){return new te(N.comparator)}const Av=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Rv=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),bv=(()=>({and:"AND",or:"OR"}))();class Pv{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function yo(t,e){return t.useProto3Json||ss(e)?e:{value:e}}function Fi(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tf(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Sv(t,e){return Fi(t,e.toTimestamp())}function Xe(t){return ee(!!t),B.fromTimestamp(function(n){const r=Pt(n);return new he(r.seconds,r.nanos)}(t))}function wa(t,e){return function(r){return new ne(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function If(t){const e=ne.fromString(t);return ee(bf(e)),e}function vo(t,e){return wa(t.databaseId,e.path)}function Us(t,e){const n=If(e);if(n.get(1)!==t.databaseId.projectId)throw new D(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new D(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new N(wf(n))}function Eo(t,e){return wa(t.databaseId,e)}function Cv(t){const e=If(t);return e.length===4?ne.emptyPath():wf(e)}function To(t){return new ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wf(t){return ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function tc(t,e,n){return{name:vo(t,e),fields:n.value.mapValue.fields}}function kv(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(ee(u===void 0||typeof u=="string"),be.fromBase64String(u||"")):(ee(u===void 0||u instanceof Uint8Array),be.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?v.UNKNOWN:yf(c.code);return new D(u,c.message||"")}(o);n=new Ef(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Us(t,r.document.name),s=Xe(r.document.updateTime),o=r.document.createTime?Xe(r.document.createTime):B.min(),a=new De({mapValue:{fields:r.document.fields}}),l=Ee.newFoundDocument(i,s,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new hi(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Us(t,r.document),s=r.readTime?Xe(r.readTime):B.min(),o=Ee.newNoDocument(i,s),a=r.removedTargetIds||[];n=new hi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Us(t,r.document),s=r.removedTargetIds||[];n=new hi([],s,i,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new vv(i,s),a=r.targetId;n=new vf(a,o)}}return n}function Dv(t,e){let n;if(e instanceof fs)n={update:tc(t,e.key,e.value)};else if(e instanceof _f)n={delete:vo(t,e.key)};else if(e instanceof Zt)n={update:tc(t,e.key,e.data),updateMask:Bv(e.fieldMask)};else{if(!(e instanceof gv))return U();n={verify:vo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Mi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Pn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof vr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Li)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw U()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Sv(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:U()}(t,e.precondition)),n}function Vv(t,e){return t&&t.length>0?(ee(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Xe(i.updateTime):Xe(s);return o.isEqual(B.min())&&(o=Xe(s)),new dv(o,i.transformResults||[])}(n,e))):[]}function Nv(t,e){return{documents:[Eo(t,e.path)]}}function Ov(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Eo(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Eo(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return Rf(tt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:an(h.field),direction:Fv(h.dir)}}(c))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=yo(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Mv(t){let e=Cv(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ee(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(h){const f=Af(h);return f instanceof tt&&Zh(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(p){return new Yn(ln(p.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,ss(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new Oi(d,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,d=h.values||[];return new Oi(d,f)}(n.endAt)),Jy(e,i,o,s,a,"F",l,c)}function Lv(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Af(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ln(n.unaryFilter.field);return ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ln(n.unaryFilter.field);return ue.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ln(n.unaryFilter.field);return ue.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ln(n.unaryFilter.field);return ue.create(o,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(t):t.fieldFilter!==void 0?function(n){return ue.create(ln(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return tt.create(n.compositeFilter.filters.map(r=>Af(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return U()}}(n.compositeFilter.op))}(t):U()}function Fv(t){return Av[t]}function Uv(t){return Rv[t]}function xv(t){return bv[t]}function an(t){return{fieldPath:t.canonicalString()}}function ln(t){return Te.fromServerFormat(t.fieldPath)}function Rf(t){return t instanceof ue?function(n){if(n.op==="=="){if(jl(n.value))return{unaryFilter:{field:an(n.field),op:"IS_NAN"}};if(Bl(n.value))return{unaryFilter:{field:an(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(jl(n.value))return{unaryFilter:{field:an(n.field),op:"IS_NOT_NAN"}};if(Bl(n.value))return{unaryFilter:{field:an(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:an(n.field),op:Uv(n.op),value:n.value}}}(t):t instanceof tt?function(n){const r=n.getFilters().map(i=>Rf(i));return r.length===1?r[0]:{compositeFilter:{op:xv(n.op),filters:r}}}(t):U()}function Bv(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function bf(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n,r,i,s=B.min(),o=B.min(),a=be.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new vt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new vt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e){this.ct=e}}function qv(t){const e=Mv({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?go(e,e.limit,"L"):e}/**
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
 */class $v{constructor(){this.sn=new zv}addToCollectionParentIndex(e,n){return this.sn.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return E.resolve()}deleteFieldIndex(e,n){return E.resolve()}getDocumentsMatchingTarget(e,n){return E.resolve(null)}getIndexType(e,n){return E.resolve(0)}getFieldIndexes(e,n){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,n){return E.resolve(bt.min())}getMinOffsetFromCollectionGroup(e,n){return E.resolve(bt.min())}updateCollectionGroup(e,n,r){return E.resolve()}updateIndexEntries(e,n){return E.resolve()}}class zv{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ae(ne.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ae(ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Sn(0)}static On(){return new Sn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(){this.changes=new xn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?E.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Kv{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&er(r.mutation,i,Fe.empty(),he.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,H()).next(()=>r))}getLocalViewOfDocuments(e,n,r=H()){const i=Lt();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Kn();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Lt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,H()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=ft();const o=Zn(),a=function(){return Zn()}();return n.forEach((l,c)=>{const u=r.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Zt)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),er(u.mutation,c,u.mutation.getFieldMask(),he.now())):o.set(c.key,Fe.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new Kv(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Zn();let i=new te((o,a)=>o-a),s=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||Fe.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(i.get(a.batchId)||H()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=lf();u.forEach(f=>{if(!s.has(f)){const d=mf(n.get(f),r.get(f));d!==null&&h.set(f,d),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return E.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return N.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ev(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):E.resolve(Lt());let a=-1,l=s;return o.next(c=>E.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?E.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,H())).next(u=>({batchId:a,changes:af(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new N(n)).next(r=>{let i=Kn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Kn();return this.indexManager.getCollectionParents(e,i).next(o=>E.forEach(o,a=>{const l=function(u,h){return new os(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(c=>{c.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const c=l.getKey();s.get(c)===null&&(s=s.insert(c,Ee.newInvalidDocument(c)))});let o=Kn();return s.forEach((a,l)=>{const c=i.get(a);c!==void 0&&er(c.mutation,l,Fe.empty(),he.now()),cs(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return E.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Xe(i.createTime)}}(n)),E.resolve()}getNamedQuery(e,n){return E.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(i){return{name:i.name,query:qv(i.bundledQuery),readTime:Xe(i.readTime)}}(n)),E.resolve()}}/**
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
 */class Qv{constructor(){this.overlays=new te(N.comparator),this.cr=new Map}getOverlay(e,n){return E.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Lt();return E.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),E.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),E.resolve()}getOverlaysForCollection(e,n,r){const i=Lt(),s=n.length+1,o=new N(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return E.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new te((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=s.get(c.largestBatchId);u===null&&(u=Lt(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Lt(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return E.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new yv(n,r));let s=this.cr.get(n);s===void 0&&(s=H(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(){this.lr=new Ae(fe.hr),this.Pr=new Ae(fe.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new fe(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new fe(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new N(new ne([])),r=new fe(n,e),i=new fe(n,e+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new N(new ne([])),r=new fe(n,e),i=new fe(n,e+1);let s=H();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new fe(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class fe{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return N.comparator(e.key,n.key)||J(e.mr,n.mr)}static Ir(e,n){return J(e.mr,n.mr)||N.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new Ae(fe.hr)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _v(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new fe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.wr(r),s=i<0?0:i;return E.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new fe(n,0),i=new fe(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),E.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ae(J);return n.forEach(i=>{const s=new fe(i,0),o=new fe(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),E.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;N.isDocumentKey(s)||(s=s.child(""));const o=new fe(new N(s),0);let a=new Ae(J);return this.pr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.mr)),!0)},o),E.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(r=>{const i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ee(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return E.forEach(n.mutations,i=>{const s=new fe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new fe(n,0),i=this.pr.firstAfterOrEqual(r);return E.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e){this.Dr=e,this.docs=function(){return new te(N.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return E.resolve(r?r.document.mutableCopy():Ee.newInvalidDocument(n))}getEntries(e,n){let r=ft();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ee.newInvalidDocument(i))}),E.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ft();const o=n.path,a=new N(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Oy(Ny(u),r)<=0||(i.has(u.key)||cs(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return E.resolve(s)}getAllFromCollectionGroup(e,n,r,i){U()}vr(e,n){return E.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Yv(this)}getSize(e){return E.resolve(this.size)}}class Yv extends Hv{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(e,i)):this.sr.removeEntry(r)}),E.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e){this.persistence=e,this.Cr=new xn(n=>ya(n),va),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Aa,this.targetCount=0,this.Or=Sn.xn()}forEachTarget(e,n){return this.Cr.forEach((r,i)=>n(i)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),E.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new Sn(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.Ln(n),E.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),E.waitFor(s).next(()=>i)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return E.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),E.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),E.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),E.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return E.resolve(r)}containsKey(e,n){return E.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,n){this.Nr={},this.overlays={},this.Br=new pa(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new Zv(this),this.indexManager=new $v,this.remoteDocumentCache=function(i){return new Jv(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new jv(n),this.Qr=new Gv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Qv,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new Xv(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){b("MemoryPersistence","Starting transaction:",e);const i=new tE(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(e,n){return E.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class tE extends Ly{constructor(e){super(),this.currentSequenceNumber=e}}class Ra{constructor(e){this.persistence=e,this.Wr=new Aa,this.Gr=null}static zr(e){return new Ra(e)}get jr(){if(this.Gr)return this.Gr;throw U()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),E.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),E.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.jr,r=>{const i=N.fromPath(r);return this.Hr(e,i).next(s=>{s||n.removeEntry(i,B.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return E.or([()=>E.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=i}static qi(e,n){let r=H(),i=H();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ba(e,n.fromCache,r,i)}}/**
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
 */class nE{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.$i(e,n).next(s=>s||this.Ui(e,n,i,r)).next(s=>s||this.Wi(e,n))}$i(e,n){if(Hl(n))return E.resolve(null);let r=ht(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=go(n,null,"F"),r=ht(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=H(...s);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Gi(n,a);return this.zi(n,c,o,l.readTime)?this.$i(e,go(n,null,"F")):this.ji(e,c,n,l)}))})))}Ui(e,n,r,i){return Hl(n)||i.isEqual(B.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(s=>{const o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(e,n):(Ll()<=Q.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_o(n)),this.ji(e,o,n,Vy(i,-1)))})}Gi(e,n){let r=new Ae(sf(e));return n.forEach((i,s)=>{cs(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(e,n){return Ll()<=Q.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",_o(n)),this.Ki.getDocumentsMatchingQuery(e,n,bt.min())}ji(e,n,r,i){return this.Ki.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new te(J),this.Yi=new xn(s=>ya(s),va),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Wv(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function iE(t,e,n,r){return new rE(t,e,n,r)}async function Pf(t,e){const n=$(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=H();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function sE(t,e){const n=$(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,f=h.keys();let d=E.resolve();return f.forEach(p=>{d=d.next(()=>u.getEntry(l,p)).next(g=>{const y=c.docVersions.get(p);ee(y!==null),g.version.compareTo(y)<0&&(h.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),u.addEntry(g)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=H();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Sf(t){const e=$(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function oE(t,e){const n=$(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const f=i.get(h);if(!f)return;a.push(n.kr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.kr.addMatchingKeys(s,u.addedDocuments,h)));let d=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(be.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),i=i.insert(h,d),function(g,y,m){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(f,d,u)&&a.push(n.kr.updateTargetData(s,d))});let l=ft(),c=H();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(aE(s,o,e.documentUpdates).next(u=>{l=u.ns,c=u.rs})),!r.isEqual(B.min())){const u=n.kr.getLastRemoteSnapshotVersion(s).next(h=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return E.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.Ji=i,s))}function aE(t,e,n){let r=H(),i=H();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ft();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(B.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):b("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ns:o,rs:i}})}function lE(t,e){const n=$(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function cE(t,e){const n=$(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.kr.getTargetData(r,e).next(s=>s?(i=s,E.resolve(i)):n.kr.allocateTargetId(r).next(o=>(i=new vt(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Io(t,e,n){const r=$(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!qr(o))throw o;b("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function nc(t,e,n){const r=$(t);let i=B.min(),s=H();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,c,u){const h=$(l),f=h.Yi.get(u);return f!==void 0?E.resolve(h.Ji.get(f)):h.kr.getTargetData(c,u)}(r,o,ht(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:B.min(),n?s:H())).next(a=>(uE(r,tv(e),a),{documents:a,ss:s})))}function uE(t,e,n){let r=t.Zi.get(e)||B.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Zi.set(e,r)}class rc{constructor(){this.activeTargetIds=av()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hE{constructor(){this.Hs=new rc,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new rc,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class fE{Ys(e){}shutdown(){}}/**
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
 */class ic{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const dE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="WebChannelConnection";class mE extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http";this.To=r+"://"+n.host,this.Eo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get Ao(){return!1}Ro(n,r,i,s,o){const a=xs(),l=this.Vo(n,r);b("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={};return this.mo(c,s,o),this.fo(n,l,c,i).then(u=>(b("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw wn("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}po(n,r,i,s,o,a){return this.Ro(n,r,i,s,o)}mo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Un}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Vo(n,r){const i=dE[n];return`${this.To}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}fo(e,n,r,i){const s=xs();return new Promise((o,a)=>{const l=new Ty;l.setWithCredentials(!0),l.listenOnce(yy.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Fs.NO_ERROR:const u=l.getResponseJson();b(ye,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case Fs.TIMEOUT:b(ye,`RPC '${e}' ${s} timed out`),a(new D(v.DEADLINE_EXCEEDED,"Request time out"));break;case Fs.HTTP_ERROR:const h=l.getStatus();if(b(ye,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(y){const m=y.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(m)>=0?m:v.UNKNOWN}(d.status);a(new D(p,d.message))}else a(new D(v.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new D(v.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{b(ye,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);b(ye,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}yo(e,n,r){const i=xs(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=gy(),a=_y(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new Ey({})),this.mo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");b(ye,`Creating RPC '${e}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let f=!1,d=!1;const p=new pE({so:y=>{d?b(ye,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(f||(b(ye,`Opening RPC '${e}' stream ${i} transport.`),h.open(),f=!0),b(ye,`RPC '${e}' stream ${i} sending:`,y),h.send(y))},oo:()=>h.close()}),g=(y,m,I)=>{y.listen(m,T=>{try{I(T)}catch(k){setTimeout(()=>{throw k},0)}})};return g(h,Yr.EventType.OPEN,()=>{d||b(ye,`RPC '${e}' stream ${i} transport opened.`)}),g(h,Yr.EventType.CLOSE,()=>{d||(d=!0,b(ye,`RPC '${e}' stream ${i} transport closed`),p.Po())}),g(h,Yr.EventType.ERROR,y=>{d||(d=!0,wn(ye,`RPC '${e}' stream ${i} transport errored:`,y),p.Po(new D(v.UNAVAILABLE,"The operation could not be completed")))}),g(h,Yr.EventType.MESSAGE,y=>{var m;if(!d){const I=y.data[0];ee(!!I);const T=I,k=T.error||((m=T[0])===null||m===void 0?void 0:m.error);if(k){b(ye,`RPC '${e}' stream ${i} received error:`,k);const K=k.status;let z=function(F){const P=oe[F];if(P!==void 0)return yf(P)}(K),A=k.message;z===void 0&&(z=v.INTERNAL,A="Unknown error status: "+K+" with message "+k.message),d=!0,p.Po(new D(z,A)),h.close()}else b(ye,`RPC '${e}' stream ${i} received:`,I),p.Io(I)}}),g(a,vy.STAT_EVENT,y=>{y.stat===Ol.PROXY?b(ye,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===Ol.NOPROXY&&b(ye,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.ho()},0),p}}function Bs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(t){return new Pv(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.wo=r,this.So=i,this.bo=s,this.Do=0,this.vo=null,this.Co=Date.now(),this.reset()}reset(){this.Do=0}Fo(){this.Do=this.bo}Mo(e){this.cancel();const n=Math.floor(this.Do+this.xo()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&b("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Do} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.vo=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.Do*=this.So,this.Do<this.wo&&(this.Do=this.wo),this.Do>this.bo&&(this.Do=this.bo)}Oo(){this.vo!==null&&(this.vo.skipDelay(),this.vo=null)}cancel(){this.vo!==null&&(this.vo.cancel(),this.vo=null)}xo(){return(Math.random()-.5)*this.Do}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.No=r,this.Bo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Lo=0,this.ko=null,this.qo=null,this.stream=null,this.Qo=new Cf(e,n)}Ko(){return this.state===1||this.state===5||this.$o()}$o(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Uo()}async stop(){this.Ko()&&await this.close(0)}Wo(){this.state=0,this.Qo.reset()}Go(){this.$o()&&this.ko===null&&(this.ko=this.ii.enqueueAfterDelay(this.No,6e4,()=>this.zo()))}jo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.$o())return this.close(0)}Ho(){this.ko&&(this.ko.cancel(),this.ko=null)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}async close(e,n){this.Ho(),this.Jo(),this.Qo.cancel(),this.Lo++,e!==4?this.Qo.reset():n&&n.code===v.RESOURCE_EXHAUSTED?(ut(n.toString()),ut("Using maximum backoff delay to prevent overloading the backend."),this.Qo.Fo()):n&&n.code===v.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Yo(){}auth(){this.state=1;const e=this.Zo(this.Lo),n=this.Lo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Lo===n&&this.Xo(r,i)},r=>{e(()=>{const i=new D(v.UNKNOWN,"Fetching auth token failed: "+r.message);return this.e_(i)})})}Xo(e,n){const r=this.Zo(this.Lo);this.stream=this.t_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.qo=this.ii.enqueueAfterDelay(this.Bo,1e4,()=>(this.$o()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.e_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Uo(){this.state=5,this.Qo.Mo(async()=>{this.state=0,this.start()})}e_(e){return b("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Zo(e){return n=>{this.ii.enqueueAndForget(()=>this.Lo===e?n():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gE extends kf{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}t_(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.Qo.reset();const n=kv(this.serializer,e),r=function(s){if(!("targetChange"in s))return B.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?B.min():o.readTime?Xe(o.readTime):B.min()}(e);return this.listener.n_(n,r)}r_(e){const n={};n.database=To(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=mo(l)?{documents:Nv(s,l)}:{query:Ov(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Tf(s,o.resumeToken);const c=yo(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(B.min())>0){a.readTime=Fi(s,o.snapshotVersion.toTimestamp());const c=yo(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=Lv(this.serializer,e);r&&(n.labels=r),this.jo(n)}i_(e){const n={};n.database=To(this.serializer),n.removeTarget=e,this.jo(n)}}class _E extends kf{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.s_=!1}get o_(){return this.s_}start(){this.s_=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.s_&&this.__([])}t_(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.s_){this.Qo.reset();const n=Vv(e.writeResults,e.commitTime),r=Xe(e.commitTime);return this.listener.a_(r,n)}return ee(!e.writeResults||e.writeResults.length===0),this.s_=!0,this.listener.u_()}c_(){const e={};e.database=To(this.serializer),this.jo(e)}__(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Dv(this.serializer,r))};this.jo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.l_=!1}h_(){if(this.l_)throw new D(v.FAILED_PRECONDITION,"The client has already been terminated.")}Ro(e,n,r){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Ro(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(v.UNKNOWN,i.toString())})}po(e,n,r,i){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.po(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new D(v.UNKNOWN,s.toString())})}terminate(){this.l_=!0}}class vE{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.I_=0,this.T_=null,this.E_=!0}d_(){this.I_===0&&(this.A_("Unknown"),this.T_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.T_=null,this.R_("Backend didn't respond within 10 seconds."),this.A_("Offline"),Promise.resolve())))}V_(e){this.state==="Online"?this.A_("Unknown"):(this.I_++,this.I_>=1&&(this.m_(),this.R_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.A_("Offline")))}set(e){this.m_(),this.I_=0,e==="Online"&&(this.E_=!1),this.A_(e)}A_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}R_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.E_?(ut(n),this.E_=!1):b("OnlineStateTracker",n)}m_(){this.T_!==null&&(this.T_.cancel(),this.T_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.f_=[],this.g_=new Map,this.p_=new Set,this.y_=[],this.w_=s,this.w_.Ys(o=>{r.enqueueAndForget(async()=>{en(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=$(l);c.p_.add(4),await zr(c),c.S_.set("Unknown"),c.p_.delete(4),await ms(c)}(this))})}),this.S_=new vE(r,i)}}async function ms(t){if(en(t))for(const e of t.y_)await e(!0)}async function zr(t){for(const e of t.y_)await e(!1)}function Df(t,e){const n=$(t);n.g_.has(e.targetId)||(n.g_.set(e.targetId,e),Ca(n)?Sa(n):Bn(n).$o()&&Pa(n,e))}function Vf(t,e){const n=$(t),r=Bn(n);n.g_.delete(e),r.$o()&&Nf(n,e),n.g_.size===0&&(r.$o()?r.Go():en(n)&&n.S_.set("Unknown"))}function Pa(t,e){if(t.b_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Bn(t).r_(e)}function Nf(t,e){t.b_.Be(e),Bn(t).i_(e)}function Sa(t){t.b_=new wv({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.g_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),Bn(t).start(),t.S_.d_()}function Ca(t){return en(t)&&!Bn(t).Ko()&&t.g_.size>0}function en(t){return $(t).p_.size===0}function Of(t){t.b_=void 0}async function TE(t){t.g_.forEach((e,n)=>{Pa(t,e)})}async function IE(t,e){Of(t),Ca(t)?(t.S_.V_(e),Sa(t)):t.S_.set("Unknown")}async function wE(t,e,n){if(t.S_.set("Online"),e instanceof Ef&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.g_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.g_.delete(a),i.b_.removeTarget(a))}(t,e)}catch(r){b("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ui(t,r)}else if(e instanceof hi?t.b_.We(e):e instanceof vf?t.b_.Ze(e):t.b_.je(e),!n.isEqual(B.min()))try{const r=await Sf(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.b_.st(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=s.g_.get(c);u&&s.g_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=s.g_.get(l);if(!u)return;s.g_.set(l,u.withResumeToken(be.EMPTY_BYTE_STRING,u.snapshotVersion)),Nf(s,l);const h=new vt(u.target,l,c,u.sequenceNumber);Pa(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){b("RemoteStore","Failed to raise snapshot:",r),await Ui(t,r)}}async function Ui(t,e,n){if(!qr(e))throw e;t.p_.add(1),await zr(t),t.S_.set("Offline"),n||(n=()=>Sf(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await n(),t.p_.delete(1),await ms(t)})}function Mf(t,e){return e().catch(n=>Ui(t,n,e))}async function gs(t){const e=$(t),n=St(e);let r=e.f_.length>0?e.f_[e.f_.length-1].batchId:-1;for(;AE(e);)try{const i=await lE(e.localStore,r);if(i===null){e.f_.length===0&&n.Go();break}r=i.batchId,RE(e,i)}catch(i){await Ui(e,i)}Lf(e)&&Ff(e)}function AE(t){return en(t)&&t.f_.length<10}function RE(t,e){t.f_.push(e);const n=St(t);n.$o()&&n.o_&&n.__(e.mutations)}function Lf(t){return en(t)&&!St(t).Ko()&&t.f_.length>0}function Ff(t){St(t).start()}async function bE(t){St(t).c_()}async function PE(t){const e=St(t);for(const n of t.f_)e.__(n.mutations)}async function SE(t,e,n){const r=t.f_.shift(),i=Ea.from(r,e,n);await Mf(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await gs(t)}async function CE(t,e){e&&St(t).o_&&await async function(r,i){if(function(o){return Ev(o)&&o!==v.ABORTED}(i.code)){const s=r.f_.shift();St(r).Wo(),await Mf(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await gs(r)}}(t,e),Lf(t)&&Ff(t)}async function sc(t,e){const n=$(t);n.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const r=en(n);n.p_.add(3),await zr(n),r&&n.S_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.p_.delete(3),await ms(n)}async function kE(t,e){const n=$(t);e?(n.p_.delete(2),await ms(n)):e||(n.p_.add(2),await zr(n),n.S_.set("Unknown"))}function Bn(t){return t.D_||(t.D_=function(n,r,i){const s=$(n);return s.h_(),new gE(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:TE.bind(null,t),uo:IE.bind(null,t),n_:wE.bind(null,t)}),t.y_.push(async e=>{e?(t.D_.Wo(),Ca(t)?Sa(t):t.S_.set("Unknown")):(await t.D_.stop(),Of(t))})),t.D_}function St(t){return t.v_||(t.v_=function(n,r,i){const s=$(n);return s.h_(),new _E(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:bE.bind(null,t),uo:CE.bind(null,t),u_:PE.bind(null,t),a_:SE.bind(null,t)}),t.y_.push(async e=>{e?(t.v_.Wo(),await gs(t)):(await t.v_.stop(),t.f_.length>0&&(b("RemoteStore",`Stopping write stream with ${t.f_.length} pending writes`),t.f_=[]))})),t.v_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ka(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(v.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Da(t,e){if(ut("AsyncQueue",`${e}: ${t}`),qr(t))return new D(v.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.comparator=e?(n,r)=>e(n,r)||N.comparator(n.key,r.key):(n,r)=>N.comparator(n.key,r.key),this.keyedMap=Kn(),this.sortedSet=new te(this.comparator)}static emptySet(e){return new yn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof yn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new yn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(){this.C_=new te(N.comparator)}track(e){const n=e.doc.key,r=this.C_.get(n);r?e.type!==0&&r.type===3?this.C_=this.C_.insert(n,e):e.type===3&&r.type!==1?this.C_=this.C_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.C_=this.C_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.C_=this.C_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.C_=this.C_.remove(n):e.type===1&&r.type===2?this.C_=this.C_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.C_=this.C_.insert(n,{type:2,doc:e.doc}):U():this.C_=this.C_.insert(n,e)}F_(){const e=[];return this.C_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Cn{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Cn(e,n,yn.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ls(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(){this.M_=void 0,this.listeners=[]}}class VE{constructor(){this.queries=new xn(e=>rf(e),ls),this.onlineState="Unknown",this.x_=new Set}}async function Uf(t,e){const n=$(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new DE),i)try{s.M_=await n.onListen(r)}catch(o){const a=Da(o,`Initialization of query '${_o(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.O_(n.onlineState),s.M_&&e.N_(s.M_)&&Va(n)}async function xf(t,e){const n=$(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function NE(t,e){const n=$(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.N_(i)&&(r=!0);o.M_=i}}r&&Va(n)}function OE(t,e,n){const r=$(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Va(t){t.x_.forEach(e=>{e.next()})}class Bf{constructor(e,n,r){this.query=e,this.B_=n,this.L_=!1,this.k_=null,this.onlineState="Unknown",this.options=r||{}}N_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Cn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.L_?this.q_(e)&&(this.B_.next(e),n=!0):this.Q_(e,this.onlineState)&&(this.K_(e),n=!0),this.k_=e,n}onError(e){this.B_.error(e)}O_(e){this.onlineState=e;let n=!1;return this.k_&&!this.L_&&this.Q_(this.k_,e)&&(this.K_(this.k_),n=!0),n}Q_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.U_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}q_(e){if(e.docChanges.length>0)return!0;const n=this.k_&&this.k_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}K_(e){e=Cn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.L_=!0,this.B_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e){this.key=e}}class qf{constructor(e){this.key=e}}class ME{constructor(e,n){this.query=e,this.Z_=n,this.X_=null,this.hasCachedResults=!1,this.current=!1,this.ea=H(),this.mutatedKeys=H(),this.ta=sf(e),this.na=new yn(this.ta)}get ra(){return this.Z_}ia(e,n){const r=n?n.sa:new oc,i=n?n.na:this.na;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const f=i.get(u),d=cs(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),g=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let y=!1;f&&d?f.data.isEqual(d.data)?p!==g&&(r.track({type:3,doc:d}),y=!0):this.oa(f,d)||(r.track({type:2,doc:d}),y=!0,(l&&this.ta(d,l)>0||c&&this.ta(d,c)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),y=!0):f&&!d&&(r.track({type:1,doc:f}),y=!0,(l||c)&&(a=!0)),y&&(d?(o=o.add(d),s=g?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{na:o,sa:r,zi:a,mutatedKeys:s}}oa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.na;this.na=e.na,this.mutatedKeys=e.mutatedKeys;const s=e.sa.F_();s.sort((c,u)=>function(f,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return p(f)-p(d)}(c.type,u.type)||this.ta(c.doc,u.doc)),this._a(r);const o=n?this.aa():[],a=this.ea.size===0&&this.current?1:0,l=a!==this.X_;return this.X_=a,s.length!==0||l?{snapshot:new Cn(this.query,e.na,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ua:o}:{ua:o}}O_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({na:this.na,sa:new oc,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ua:[]}}ca(e){return!this.Z_.has(e)&&!!this.na.has(e)&&!this.na.get(e).hasLocalMutations}_a(e){e&&(e.addedDocuments.forEach(n=>this.Z_=this.Z_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Z_=this.Z_.delete(n)),this.current=e.current)}aa(){if(!this.current)return[];const e=this.ea;this.ea=H(),this.na.forEach(r=>{this.ca(r.key)&&(this.ea=this.ea.add(r.key))});const n=[];return e.forEach(r=>{this.ea.has(r)||n.push(new qf(r))}),this.ea.forEach(r=>{e.has(r)||n.push(new jf(r))}),n}la(e){this.Z_=e.ss,this.ea=H();const n=this.ia(e.documents);return this.applyChanges(n,!0)}ha(){return Cn.fromInitialDocuments(this.query,this.na,this.mutatedKeys,this.X_===0,this.hasCachedResults)}}class LE{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class FE{constructor(e){this.key=e,this.Pa=!1}}class UE{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ia={},this.Ta=new xn(a=>rf(a),ls),this.Ea=new Map,this.da=new Set,this.Aa=new te(N.comparator),this.Ra=new Map,this.Va=new Aa,this.ma={},this.fa=new Map,this.ga=Sn.On(),this.onlineState="Unknown",this.pa=void 0}get isPrimaryClient(){return this.pa===!0}}async function xE(t,e){const n=QE(t);let r,i;const s=n.Ta.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ha();else{const o=await cE(n.localStore,ht(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await BE(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Df(n.remoteStore,o)}return i}async function BE(t,e,n,r,i){t.ya=(h,f,d)=>async function(g,y,m,I){let T=y.view.ia(m);T.zi&&(T=await nc(g.localStore,y.query,!1).then(({documents:z})=>y.view.ia(z,T)));const k=I&&I.targetChanges.get(y.targetId),K=y.view.applyChanges(T,g.isPrimaryClient,k);return lc(g,y.targetId,K.ua),K.snapshot}(t,h,f,d);const s=await nc(t.localStore,e,!0),o=new ME(e,s.ss),a=o.ia(s.documents),l=$r.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);lc(t,n,c.ua);const u=new LE(e,n,o);return t.Ta.set(e,u),t.Ea.has(n)?t.Ea.get(n).push(e):t.Ea.set(n,[e]),c.snapshot}async function jE(t,e){const n=$(t),r=n.Ta.get(e),i=n.Ea.get(r.targetId);if(i.length>1)return n.Ea.set(r.targetId,i.filter(s=>!ls(s,e))),void n.Ta.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Io(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Vf(n.remoteStore,r.targetId),wo(n,r.targetId)}).catch(jr)):(wo(n,r.targetId),await Io(n.localStore,r.targetId,!0))}async function qE(t,e,n){const r=XE(t);try{const i=await function(o,a){const l=$(o),c=he.now(),u=a.reduce((d,p)=>d.add(p.key),H());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=ft(),g=H();return l.Xi.getEntries(d,u).next(y=>{p=y,p.forEach((m,I)=>{I.isValidDocument()||(g=g.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(d,p)).next(y=>{h=y;const m=[];for(const I of a){const T=mv(I,h.get(I.key).overlayedDocument);T!=null&&m.push(new Zt(I.key,T,Xh(T.value.mapValue),at.exists(!0)))}return l.mutationQueue.addMutationBatch(d,c,m,a)}).next(y=>{f=y;const m=y.applyToLocalDocumentSet(h,g);return l.documentOverlayCache.saveOverlays(d,y.batchId,m)})}).then(()=>({batchId:f.batchId,changes:af(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.ma[o.currentUser.toKey()];c||(c=new te(J)),c=c.insert(a,l),o.ma[o.currentUser.toKey()]=c}(r,i.batchId,n),await Hr(r,i.changes),await gs(r.remoteStore)}catch(i){const s=Da(i,"Failed to persist write");n.reject(s)}}async function $f(t,e){const n=$(t);try{const r=await oE(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ra.get(s);o&&(ee(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Pa=!0:i.modifiedDocuments.size>0?ee(o.Pa):i.removedDocuments.size>0&&(ee(o.Pa),o.Pa=!1))}),await Hr(n,r,e)}catch(r){await jr(r)}}function ac(t,e,n){const r=$(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ta.forEach((s,o)=>{const a=o.view.O_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=$(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const f of h.listeners)f.O_(a)&&(c=!0)}),c&&Va(l)}(r.eventManager,e),i.length&&r.Ia.n_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $E(t,e,n){const r=$(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ra.get(e),s=i&&i.key;if(s){let o=new te(N.comparator);o=o.insert(s,Ee.newNoDocument(s,B.min()));const a=H().add(s),l=new ds(B.min(),new Map,new te(J),o,a);await $f(r,l),r.Aa=r.Aa.remove(s),r.Ra.delete(e),Na(r)}else await Io(r.localStore,e,!1).then(()=>wo(r,e,n)).catch(jr)}async function zE(t,e){const n=$(t),r=e.batch.batchId;try{const i=await sE(n.localStore,e);Hf(n,r,null),zf(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Hr(n,i)}catch(i){await jr(i)}}async function HE(t,e,n){const r=$(t);try{const i=await function(o,a){const l=$(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(ee(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);Hf(r,e,n),zf(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Hr(r,i)}catch(i){await jr(i)}}function zf(t,e){(t.fa.get(e)||[]).forEach(n=>{n.resolve()}),t.fa.delete(e)}function Hf(t,e,n){const r=$(t);let i=r.ma[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ma[r.currentUser.toKey()]=i}}function wo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ea.get(e))t.Ta.delete(r),n&&t.Ia.wa(r,n);t.Ea.delete(e),t.isPrimaryClient&&t.Va.Ar(e).forEach(r=>{t.Va.containsKey(r)||Kf(t,r)})}function Kf(t,e){t.da.delete(e.path.canonicalString());const n=t.Aa.get(e);n!==null&&(Vf(t.remoteStore,n),t.Aa=t.Aa.remove(e),t.Ra.delete(n),Na(t))}function lc(t,e,n){for(const r of n)r instanceof jf?(t.Va.addReference(r.key,e),KE(t,r)):r instanceof qf?(b("SyncEngine","Document no longer in limbo: "+r.key),t.Va.removeReference(r.key,e),t.Va.containsKey(r.key)||Kf(t,r.key)):U()}function KE(t,e){const n=e.key,r=n.path.canonicalString();t.Aa.get(n)||t.da.has(r)||(b("SyncEngine","New document in limbo: "+n),t.da.add(r),Na(t))}function Na(t){for(;t.da.size>0&&t.Aa.size<t.maxConcurrentLimboResolutions;){const e=t.da.values().next().value;t.da.delete(e);const n=new N(ne.fromString(e)),r=t.ga.next();t.Ra.set(r,new FE(n)),t.Aa=t.Aa.insert(n,r),Df(t.remoteStore,new vt(ht(as(n.path)),r,"TargetPurposeLimboResolution",pa.ae))}}async function Hr(t,e,n){const r=$(t),i=[],s=[],o=[];r.Ta.isEmpty()||(r.Ta.forEach((a,l)=>{o.push(r.ya(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=ba.qi(l.targetId,c);s.push(u)}}))}),await Promise.all(o),r.Ia.n_(i),await async function(l,c){const u=$(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>E.forEach(c,f=>E.forEach(f.Li,d=>u.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>E.forEach(f.ki,d=>u.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!qr(h))throw h;b("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const d=u.Ji.get(f),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);u.Ji=u.Ji.insert(f,g)}}}(r.localStore,s))}async function WE(t,e){const n=$(t);if(!n.currentUser.isEqual(e)){b("SyncEngine","User change. New user:",e.toKey());const r=await Pf(n.localStore,e);n.currentUser=e,function(s,o){s.fa.forEach(a=>{a.forEach(l=>{l.reject(new D(v.CANCELLED,o))})}),s.fa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Hr(n,r.ts)}}function GE(t,e){const n=$(t),r=n.Ra.get(e);if(r&&r.Pa)return H().add(r.key);{let i=H();const s=n.Ea.get(e);if(!s)return i;for(const o of s){const a=n.Ta.get(o);i=i.unionWith(a.view.ra)}return i}}function QE(t){const e=$(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=$f.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$E.bind(null,e),e.Ia.n_=NE.bind(null,e.eventManager),e.Ia.wa=OE.bind(null,e.eventManager),e}function XE(t){const e=$(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=HE.bind(null,e),e}class cc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ps(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return iE(this.persistence,new nE,e.initialUser,this.serializer)}createPersistence(e){return new eE(Ra.zr,this.serializer)}createSharedClientState(e){return new hE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class JE{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ac(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=WE.bind(null,this.syncEngine),await kE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new VE}()}createDatastore(e){const n=ps(e.databaseInfo.databaseId),r=function(s){return new mE(s)}(e.databaseInfo);return function(s,o,a,l){return new yE(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new EE(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>ac(this.syncEngine,n,0),function(){return ic.v()?new ic:new fE}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,u){const h=new UE(i,s,o,a,l,c);return u&&(h.pa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=$(n);b("RemoteStore","RemoteStore shutting down."),r.p_.add(5),await zr(r),r.w_.shutdown(),r.S_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Wf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Da(this.observer.next,e)}error(e){this.observer.error?this.Da(this.observer.error,e):ut("Uncaught Error in snapshot listener:",e.toString())}va(){this.muted=!0}Da(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ve.UNAUTHENTICATED,this.clientId=Wh.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{b("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(b("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Da(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function js(t,e){t.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Pf(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function uc(t,e){t.asyncQueue.verifyOperationInProgress();const n=await eT(t);b("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>sc(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>sc(e.remoteStore,s)),t._onlineComponents=e}function ZE(t){return t.name==="FirebaseError"?t.code===v.FAILED_PRECONDITION||t.code===v.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function eT(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await js(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!ZE(n))throw n;wn("Error using user provided cache. Falling back to memory cache: "+n),await js(t,new cc)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await js(t,new cc);return t._offlineComponents}async function Gf(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await uc(t,t._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await uc(t,new JE))),t._onlineComponents}function tT(t){return Gf(t).then(e=>e.syncEngine)}async function Ao(t){const e=await Gf(t),n=e.eventManager;return n.onListen=xE.bind(null,e.syncEngine),n.onUnlisten=jE.bind(null,e.syncEngine),n}function nT(t,e,n={}){const r=new wt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const u=new Wf({next:f=>{o.enqueueAndForget(()=>xf(s,h));const d=f.docs.has(a);!d&&f.fromCache?c.reject(new D(v.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&f.fromCache&&l&&l.source==="server"?c.reject(new D(v.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new Bf(as(a.path),u,{includeMetadataChanges:!0,U_:!0});return Uf(s,h)}(await Ao(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Qf(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(t,e,n){if(!n)throw new D(v.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function iT(t,e,n,r){if(e===!0&&r===!0)throw new D(v.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fc(t){if(!N.isDocumentKey(t))throw new D(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Oa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function At(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new D(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Oa(t);throw new D(v.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new D(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}iT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Qf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new D(v.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new D(v.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new D(v.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ma{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wy;switch(r.type){case"firstParty":return new Py(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=hc.get(n);r&&(b("ComponentProvider","Removing Datastore"),hc.delete(n),r.terminate())}(this),Promise.resolve()}}function sT(t,e,n,r={}){var i;const s=(t=At(t,Ma))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=ve.MOCK_USER;else{a=Qd(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new D(v.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ve(c)}t._authCredentials=new Ay(new Kh(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _s(this.firestore,e,this._query)}}class Ve{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ve(this.firestore,e,this._key)}}class Er extends _s{constructor(e,n,r){super(e,n,as(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ve(this.firestore,null,new N(e))}withConverter(e){return new Er(this.firestore,e,this._path)}}function oT(t,e,...n){if(t=Se(t),arguments.length===1&&(e=Wh.V()),rT("doc","path",e),t instanceof Ma){const r=ne.fromString(e,...n);return fc(r),new Ve(t,null,new N(r))}{if(!(t instanceof Ve||t instanceof Er))throw new D(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ne.fromString(e,...n));return fc(r),new Ve(t.firestore,t instanceof Er?t.converter:null,new N(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(){this.Ua=Promise.resolve(),this.Wa=[],this.Ga=!1,this.za=[],this.ja=null,this.Ha=!1,this.Ja=!1,this.Ya=[],this.Qo=new Cf(this,"async_queue_retry"),this.Za=()=>{const n=Bs();n&&b("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Qo.Oo()};const e=Bs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Za)}get isShuttingDown(){return this.Ga}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xa(),this.eu(e)}enterRestrictedMode(e){if(!this.Ga){this.Ga=!0,this.Ja=e||!1;const n=Bs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Za)}}enqueue(e){if(this.Xa(),this.Ga)return new Promise(()=>{});const n=new wt;return this.eu(()=>this.Ga&&this.Ja?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Wa.push(e),this.tu()))}async tu(){if(this.Wa.length!==0){try{await this.Wa[0](),this.Wa.shift(),this.Qo.reset()}catch(e){if(!qr(e))throw e;b("AsyncQueue","Operation failed with retryable error: "+e)}this.Wa.length>0&&this.Qo.Mo(()=>this.tu())}}eu(e){const n=this.Ua.then(()=>(this.Ha=!0,e().catch(r=>{this.ja=r,this.Ha=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ut("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ha=!1,r))));return this.Ua=n,n}enqueueAfterDelay(e,n,r){this.Xa(),this.Ya.indexOf(e)>-1&&(n=0);const i=ka.createAndSchedule(this,e,n,r,s=>this.nu(s));return this.za.push(i),i}Xa(){this.ja&&U()}verifyOperationInProgress(){}async ru(){let e;do e=this.Ua,await e;while(e!==this.Ua)}iu(e){for(const n of this.za)if(n.timerId===e)return!0;return!1}su(e){return this.ru().then(()=>{this.za.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.za)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ru()})}ou(e){this.Ya.push(e)}nu(e){const n=this.za.indexOf(e);this.za.splice(n,1)}}function pc(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Tr extends Ma{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new aT}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Xf(this),this._firestoreClient.terminate()}}function lT(t,e){const n=typeof t=="object"?t:ou(),r=typeof t=="string"?t:e||"(default)",i=Lo(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Wd("firestore");s&&sT(i,...s)}return i}function La(t){return t._firestoreClient||Xf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Xf(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,u){return new xy(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Qf(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new YE(t._authCredentials,t._appCheckCredentials,t._queue,s),((n=i.localCache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.localCache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kn(be.fromBase64String(e))}catch(n){throw new D(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new kn(be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new D(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Te(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new D(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new D(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT=/^__.*__$/;class Jf{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Zt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Yf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Es{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this._u(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get au(){return this.settings.au}uu(e){return new Es(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.uu({path:r,lu:!1});return i.hu(e),i}Pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.uu({path:r,lu:!1});return i._u(),i}Iu(e){return this.uu({path:void 0,lu:!0})}Tu(e){return xi(e,this.settings.methodName,this.settings.Eu||!1,this.path,this.settings.du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}_u(){if(this.path)for(let e=0;e<this.path.length;e++)this.hu(this.path.get(e))}hu(e){if(e.length===0)throw this.Tu("Document fields must not be empty");if(Yf(this.au)&&cT.test(e))throw this.Tu('Document fields cannot begin and end with "__"')}}class uT{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ps(e)}Au(e,n,r,i=!1){return new Es({au:e,methodName:n,du:r,path:Te.emptyPath(),lu:!1,Eu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hT(t){const e=t._freezeSettings(),n=ps(t._databaseId);return new uT(t._databaseId,!!e.ignoreUndefinedProperties,n)}class Ts extends vs{_toFieldTransform(e){if(e.au!==2)throw e.au===1?e.Tu(`${this._methodName}() can only appear at the top level of your update data`):e.Tu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ts}}function fT(t,e,n){return new Es({au:3,du:e.settings.du,methodName:t._methodName,lu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class dT extends vs{constructor(e,n){super(e),this.Ru=n}_toFieldTransform(e){const n=fT(this,e,!0),r=this.Ru.map(s=>Kr(s,n)),i=new Pn(r);return new hv(e.path,i)}isEqual(e){return this===e}}function pT(t,e,n,r){const i=t.Au(1,e,n);ed("Data must be an object, but it was:",i,r);const s=[],o=De.empty();Yt(r,(l,c)=>{const u=Ua(e,l,n);c=Se(c);const h=i.Pu(u);if(c instanceof Ts)s.push(u);else{const f=Kr(c,h);f!=null&&(s.push(u),o.set(u,f))}});const a=new Fe(s);return new Jf(o,a,i.fieldTransforms)}function mT(t,e,n,r,i,s){const o=t.Au(1,e,n),a=[mc(e,r,n)],l=[i];if(s.length%2!=0)throw new D(v.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(mc(e,s[f])),l.push(s[f+1]);const c=[],u=De.empty();for(let f=a.length-1;f>=0;--f)if(!yT(c,a[f])){const d=a[f];let p=l[f];p=Se(p);const g=o.Pu(d);if(p instanceof Ts)c.push(d);else{const y=Kr(p,g);y!=null&&(c.push(d),u.set(d,y))}}const h=new Fe(c);return new Jf(u,h,o.fieldTransforms)}function Kr(t,e){if(Zf(t=Se(t)))return ed("Unsupported field value:",e,t),gT(t,e);if(t instanceof vs)return function(r,i){if(!Yf(i.au))throw i.Tu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Tu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.lu&&e.au!==4)throw e.Tu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Kr(a,i.Iu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return lv(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=he.fromDate(r);return{timestampValue:Fi(i.serializer,s)}}if(r instanceof he){const s=new he(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fi(i.serializer,s)}}if(r instanceof Fa)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof kn)return{bytesValue:Tf(i.serializer,r._byteString)};if(r instanceof Ve){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Tu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:wa(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Tu(`Unsupported field value: ${Oa(r)}`)}(t,e)}function gT(t,e){const n={};return Gh(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yt(t,(r,i)=>{const s=Kr(i,e.cu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Zf(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof he||t instanceof Fa||t instanceof kn||t instanceof Ve||t instanceof vs)}function ed(t,e,n){if(!Zf(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Oa(n);throw r==="an object"?e.Tu(t+" a custom object"):e.Tu(t+" "+r)}}function mc(t,e,n){if((e=Se(e))instanceof ys)return e._internalPath;if(typeof e=="string")return Ua(t,e);throw xi("Field path arguments must be of type string or ",t,!1,void 0,n)}const _T=new RegExp("[~\\*/\\[\\]]");function Ua(t,e,n){if(e.search(_T)>=0)throw xi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ys(...e.split("."))._internalPath}catch{throw xi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xi(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new D(v.INVALID_ARGUMENT,a+t+l)}function yT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(nd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class vT extends td{data(){return super.data()}}function nd(t,e){return typeof e=="string"?Ua(t,e):e instanceof ys?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new D(v.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class TT{convertValue(e,n="none"){switch(Wt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Kt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Yt(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Fa(ae(e.latitude),ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ga(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(gr(e));default:return null}}convertTimestamp(e){const n=Pt(e);return new he(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ne.fromString(e);ee(bf(r));const i=new _r(r.get(1),r.get(3)),s=new N(r.popFirst(5));return i.isEqual(n)||ut(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rd extends td{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(nd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class fi extends rd{data(e={}){return super.data(e)}}class IT{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Gn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new fi(this._firestore,this._userDataWriter,r.key,r,new Gn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(v.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new fi(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Gn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new fi(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Gn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:wT(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function wT(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(t){t=At(t,Ve);const e=At(t.firestore,Tr);return nT(La(e),t._key).then(n=>sd(e,t,n))}class id extends TT{constructor(e){super(),this.firestore=e}convertBytes(e){return new kn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ve(this.firestore,null,n)}}function RT(t,e,n,...r){t=At(t,Ve);const i=At(t.firestore,Tr),s=hT(i);let o;return o=typeof(e=Se(e))=="string"||e instanceof ys?mT(s,"updateDoc",t._key,e,n,r):pT(s,"updateDoc",t._key,e),PT(i,[o.toMutation(t._key,at.exists(!0))])}function bT(t,...e){var n,r,i;t=Se(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||pc(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(pc(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof Ve)c=At(t.firestore,Tr),u=as(t._key.path),l={next:h=>{e[o]&&e[o](sd(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=At(t,_s);c=At(h.firestore,Tr),u=h._query;const f=new id(c);l={next:d=>{e[o]&&e[o](new IT(c,f,h,d))},error:e[o+1],complete:e[o+2]},ET(t._query)}return function(f,d,p,g){const y=new Wf(g),m=new Bf(d,y,p);return f.asyncQueue.enqueueAndForget(async()=>Uf(await Ao(f),m)),()=>{y.va(),f.asyncQueue.enqueueAndForget(async()=>xf(await Ao(f),m))}}(La(c),u,a,l)}function PT(t,e){return function(r,i){const s=new wt;return r.asyncQueue.enqueueAndForget(async()=>qE(await tT(r),i,s)),s.promise}(La(t),e)}function sd(t,e,n){const r=n.docs.get(e._key),i=new id(t);return new rd(t,i,e._key,r,new Gn(n.hasPendingWrites,n.fromCache),e.converter)}function ST(...t){return new dT("arrayUnion",t)}(function(e,n=!0){(function(i){Un=i})(Mn),En(new qt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Tr(new Ry(r.getProvider("auth-internal")),new Cy(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new D(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _r(c.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),It(Ml,"4.0.0",e),It(Ml,"4.0.0","esm2017")})();const CT={apiKey:"AIzaSyDbBV7DT8DNmxyLPUB_w0skCx6bQjDIDhE",authDomain:"nocontextquotes-86d30.firebaseapp.com",projectId:"nocontextquotes-86d30",storageBucket:"nocontextquotes-86d30.appspot.com",messagingSenderId:"704558739601",appId:"1:704558739601:web:f92bb50736b7c0cb360f30",measurementId:"G-RHFY5NDBMG"},kT=su(CT),di=m_();(async()=>await ng(di,Ou))();const DT=lT(kT),ri=parseFloat;function Ro(t,e=";"){let n;if(Array.isArray(t))n=t.filter(r=>r);else{n=[];for(const r in t)t[r]&&n.push(`${r}:${t[r]}`)}return n.join(e)}function VT(t,e,n,r){let i,s;const o="1em";let a,l,c,u="-.125em";const h="visible";return r&&(c="center",s="1.25em"),n&&(i=n),e&&(e=="lg"?(l="1.33333em",a=".75em",u="-.225em"):e=="xs"?l=".75em":e=="sm"?l=".875em":l=e.replace("x","em")),Ro([Ro({float:i,width:s,height:o,"line-height":a,"font-size":l,"text-align":c,"vertical-align":u,"transform-origin":"center",overflow:h}),t])}function NT(t,e,n,r,i,s=1,o="",a=""){let l=1,c=1;return i&&(i=="horizontal"?l=-1:i=="vertical"?c=-1:l=c=-1),Ro([`translate(${ri(e)*s}${o},${ri(n)*s}${o})`,`scale(${l*ri(t)},${c*ri(t)})`,r&&`rotate(${r}${a})`]," ")}function gc(t){let e,n,r,i,s,o,a,l;function c(f,d){return typeof f[10][4]=="string"?MT:OT}let u=c(t),h=u(t);return{c(){e=Ft("svg"),n=Ft("g"),r=Ft("g"),h.c(),_(r,"transform",t[12]),_(n,"transform",i="translate("+t[10][0]/2+" "+t[10][1]/2+")"),_(n,"transform-origin",s=t[10][0]/4+" 0"),_(e,"id",o=t[1]||void 0),_(e,"class",a="svelte-fa "+t[0]+" svelte-1cj2gr0"),_(e,"style",t[11]),_(e,"viewBox",l="0 0 "+t[10][0]+" "+t[10][1]),_(e,"aria-hidden","true"),_(e,"role","img"),_(e,"xmlns","http://www.w3.org/2000/svg"),Le(e,"pulse",t[4]),Le(e,"spin",t[3])},m(f,d){O(f,e,d),R(e,n),R(n,r),h.m(r,null)},p(f,d){u===(u=c(f))&&h?h.p(f,d):(h.d(1),h=u(f),h&&(h.c(),h.m(r,null))),d&4096&&_(r,"transform",f[12]),d&1024&&i!==(i="translate("+f[10][0]/2+" "+f[10][1]/2+")")&&_(n,"transform",i),d&1024&&s!==(s=f[10][0]/4+" 0")&&_(n,"transform-origin",s),d&2&&o!==(o=f[1]||void 0)&&_(e,"id",o),d&1&&a!==(a="svelte-fa "+f[0]+" svelte-1cj2gr0")&&_(e,"class",a),d&2048&&_(e,"style",f[11]),d&1024&&l!==(l="0 0 "+f[10][0]+" "+f[10][1])&&_(e,"viewBox",l),d&17&&Le(e,"pulse",f[4]),d&9&&Le(e,"spin",f[3])},d(f){f&&C(e),h.d()}}}function OT(t){let e,n,r,i,s,o,a,l,c,u;return{c(){e=Ft("path"),o=Ft("path"),_(e,"d",n=t[10][4][0]),_(e,"fill",r=t[6]||t[2]||"currentColor"),_(e,"fill-opacity",i=t[9]!=!1?t[7]:t[8]),_(e,"transform",s="translate("+t[10][0]/-2+" "+t[10][1]/-2+")"),_(o,"d",a=t[10][4][1]),_(o,"fill",l=t[5]||t[2]||"currentColor"),_(o,"fill-opacity",c=t[9]!=!1?t[8]:t[7]),_(o,"transform",u="translate("+t[10][0]/-2+" "+t[10][1]/-2+")")},m(h,f){O(h,e,f),O(h,o,f)},p(h,f){f&1024&&n!==(n=h[10][4][0])&&_(e,"d",n),f&68&&r!==(r=h[6]||h[2]||"currentColor")&&_(e,"fill",r),f&896&&i!==(i=h[9]!=!1?h[7]:h[8])&&_(e,"fill-opacity",i),f&1024&&s!==(s="translate("+h[10][0]/-2+" "+h[10][1]/-2+")")&&_(e,"transform",s),f&1024&&a!==(a=h[10][4][1])&&_(o,"d",a),f&36&&l!==(l=h[5]||h[2]||"currentColor")&&_(o,"fill",l),f&896&&c!==(c=h[9]!=!1?h[8]:h[7])&&_(o,"fill-opacity",c),f&1024&&u!==(u="translate("+h[10][0]/-2+" "+h[10][1]/-2+")")&&_(o,"transform",u)},d(h){h&&C(e),h&&C(o)}}}function MT(t){let e,n,r,i;return{c(){e=Ft("path"),_(e,"d",n=t[10][4]),_(e,"fill",r=t[2]||t[5]||"currentColor"),_(e,"transform",i="translate("+t[10][0]/-2+" "+t[10][1]/-2+")")},m(s,o){O(s,e,o)},p(s,o){o&1024&&n!==(n=s[10][4])&&_(e,"d",n),o&36&&r!==(r=s[2]||s[5]||"currentColor")&&_(e,"fill",r),o&1024&&i!==(i="translate("+s[10][0]/-2+" "+s[10][1]/-2+")")&&_(e,"transform",i)},d(s){s&&C(e)}}}function LT(t){let e,n=t[10][4]&&gc(t);return{c(){n&&n.c(),e=xe()},m(r,i){n&&n.m(r,i),O(r,e,i)},p(r,[i]){r[10][4]?n?n.p(r,i):(n=gc(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:M,o:M,d(r){n&&n.d(r),r&&C(e)}}}function FT(t,e,n){let{class:r=""}=e,{id:i=""}=e,{style:s=""}=e,{icon:o}=e,{size:a=""}=e,{color:l=""}=e,{fw:c=!1}=e,{pull:u=""}=e,{scale:h=1}=e,{translateX:f=0}=e,{translateY:d=0}=e,{rotate:p=""}=e,{flip:g=!1}=e,{spin:y=!1}=e,{pulse:m=!1}=e,{primaryColor:I=""}=e,{secondaryColor:T=""}=e,{primaryOpacity:k=1}=e,{secondaryOpacity:K=.4}=e,{swapOpacity:z=!1}=e,A,q,F;return t.$$set=P=>{"class"in P&&n(0,r=P.class),"id"in P&&n(1,i=P.id),"style"in P&&n(13,s=P.style),"icon"in P&&n(14,o=P.icon),"size"in P&&n(15,a=P.size),"color"in P&&n(2,l=P.color),"fw"in P&&n(16,c=P.fw),"pull"in P&&n(17,u=P.pull),"scale"in P&&n(18,h=P.scale),"translateX"in P&&n(19,f=P.translateX),"translateY"in P&&n(20,d=P.translateY),"rotate"in P&&n(21,p=P.rotate),"flip"in P&&n(22,g=P.flip),"spin"in P&&n(3,y=P.spin),"pulse"in P&&n(4,m=P.pulse),"primaryColor"in P&&n(5,I=P.primaryColor),"secondaryColor"in P&&n(6,T=P.secondaryColor),"primaryOpacity"in P&&n(7,k=P.primaryOpacity),"secondaryOpacity"in P&&n(8,K=P.secondaryOpacity),"swapOpacity"in P&&n(9,z=P.swapOpacity)},t.$$.update=()=>{t.$$.dirty&16384&&n(10,A=o&&o.icon||[0,0,"",[],""]),t.$$.dirty&237568&&n(11,q=VT(s,a,u,c)),t.$$.dirty&8126464&&n(12,F=NT(h,f,d,p,g,512))},[r,i,l,y,m,I,T,k,K,z,A,q,F,s,o,a,c,u,h,f,d,p,g]}class xa extends $e{constructor(e){super(),qe(this,e,FT,LT,ke,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}}var UT={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},xT=UT,BT={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},jT=BT,qT={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]};let $T=1;function od(){return`svelte-tabs-${$T++}`}const rn=[];function un(t,e=M){let n;const r=new Set;function i(a){if(ke(t,a)&&(t=a,n)){const l=!rn.length;for(const c of r)c[1](),rn.push(c,t);if(l){for(let c=0;c<rn.length;c+=2)rn[c][0](rn[c+1]);rn.length=0}}}function s(a){i(a(t))}function o(a,l=M){const c=[a,l];return r.add(c),r.size===1&&(n=e(i)||M),a(t),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:i,update:s,subscribe:o}}function zT(t){let e,n,r,i;const s=t[4].default,o=Dn(s,t,t[3],null);return{c(){e=S("div"),o&&o.c(),_(e,"class","svelte-tabs")},m(a,l){O(a,e,l),o&&o.m(e,null),n=!0,r||(i=le(e,"keydown",t[1]),r=!0)},p(a,[l]){o&&o.p&&(!n||l&8)&&Nn(o,s,a,a[3],n?Vn(s,a[3],l,null):On(a[3]),null)},i(a){n||(V(o,a),n=!0)},o(a){L(o,a),n=!1},d(a){a&&C(e),o&&o.d(a),r=!1,i()}}}const Ba={};function HT(t,e,n){const r=t.indexOf(e);t.splice(r,1),n.update(i=>i===e?t[r]||t[t.length-1]:i)}function KT(t,e,n){let r,{$$slots:i={},$$scope:s}=e,{initialSelectedIndex:o=0}=e;const a=[],l=[],c=[],u=un({}),h=un({}),f=un(null);jt(t,f,m=>n(5,r=m));const d=un(null);function p(m,I,T){m.push(I),T.update(k=>k||I),Kc(()=>HT(m,I,T))}function g(m){const I=l.indexOf(m);f.set(m),d.set(c[I])}Sd(Ba,{registerTab(m){p(l,m,f)},registerTabElement(m){a.push(m)},registerPanel(m){p(c,m,d)},selectTab:g,selectedTab:f,selectedPanel:d,controls:u,labeledBy:h}),Co(()=>{g(l[o])}),Pd(()=>{for(let m=0;m<l.length;m++)u.update(I=>({...I,[l[m].id]:c[m].id})),h.update(I=>({...I,[c[m].id]:l[m].id}))});async function y(m){if(m.target.classList.contains("svelte-tabs__tab")){let I=l.indexOf(r);switch(m.key){case"ArrowRight":I+=1,I>l.length-1&&(I=0),g(l[I]),a[I].focus();break;case"ArrowLeft":I-=1,I<0&&(I=l.length-1),g(l[I]),a[I].focus()}}}return t.$$set=m=>{"initialSelectedIndex"in m&&n(2,o=m.initialSelectedIndex),"$$scope"in m&&n(3,s=m.$$scope)},[f,y,o,s,i]}class WT extends $e{constructor(e){super(),qe(this,e,KT,zT,ke,{initialSelectedIndex:2})}}function GT(t){let e,n,r,i,s,o;const a=t[9].default,l=Dn(a,t,t[8],null);return{c(){e=S("li"),l&&l.c(),_(e,"role","tab"),_(e,"id",t[3].id),_(e,"aria-controls",n=t[2][t[3].id]),_(e,"aria-selected",t[1]),_(e,"tabindex",r=t[1]?0:-1),_(e,"class","svelte-tabs__tab svelte-1fbofsd"),Le(e,"svelte-tabs__selected",t[1])},m(c,u){O(c,e,u),l&&l.m(e,null),t[10](e),i=!0,s||(o=le(e,"click",t[11]),s=!0)},p(c,[u]){l&&l.p&&(!i||u&256)&&Nn(l,a,c,c[8],i?Vn(a,c[8],u,null):On(c[8]),null),(!i||u&4&&n!==(n=c[2][c[3].id]))&&_(e,"aria-controls",n),(!i||u&2)&&_(e,"aria-selected",c[1]),(!i||u&2&&r!==(r=c[1]?0:-1))&&_(e,"tabindex",r),(!i||u&2)&&Le(e,"svelte-tabs__selected",c[1])},i(c){i||(V(l,c),i=!0)},o(c){L(l,c),i=!1},d(c){c&&C(e),l&&l.d(c),t[10](null),s=!1,o()}}}function QT(t,e,n){let r,i,{$$slots:s={},$$scope:o}=e,a;const l={id:od()},{registerTab:c,registerTabElement:u,selectTab:h,selectedTab:f,controls:d}=Wc(Ba);jt(t,f,m=>n(7,r=m)),jt(t,d,m=>n(2,i=m));let p;c(l),Co(async()=>{await Cd(),u(a)});function g(m){gi[m?"unshift":"push"](()=>{a=m,n(0,a)})}const y=()=>h(l);return t.$$set=m=>{"$$scope"in m&&n(8,o=m.$$scope)},t.$$.update=()=>{t.$$.dirty&128&&n(1,p=r===l)},[a,p,i,l,h,f,d,r,o,s,g,y]}class qs extends $e{constructor(e){super(),qe(this,e,QT,GT,ke,{})}}function XT(t){let e,n;const r=t[1].default,i=Dn(r,t,t[0],null);return{c(){e=S("ul"),i&&i.c(),_(e,"role","tablist"),_(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(s,o){O(s,e,o),i&&i.m(e,null),n=!0},p(s,[o]){i&&i.p&&(!n||o&1)&&Nn(i,r,s,s[0],n?Vn(r,s[0],o,null):On(s[0]),null)},i(s){n||(V(i,s),n=!0)},o(s){L(i,s),n=!1},d(s){s&&C(e),i&&i.d(s)}}}function JT(t,e,n){let{$$slots:r={},$$scope:i}=e;return t.$$set=s=>{"$$scope"in s&&n(0,i=s.$$scope)},[i,r]}class YT extends $e{constructor(e){super(),qe(this,e,JT,XT,ke,{})}}function _c(t){let e;const n=t[6].default,r=Dn(n,t,t[5],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&32)&&Nn(r,n,i,i[5],e?Vn(n,i[5],s,null):On(i[5]),null)},i(i){e||(V(r,i),e=!0)},o(i){L(r,i),e=!1},d(i){r&&r.d(i)}}}function ZT(t){let e,n,r,i=t[1]===t[2]&&_c(t);return{c(){e=S("div"),i&&i.c(),_(e,"id",t[2].id),_(e,"aria-labelledby",n=t[0][t[2].id]),_(e,"class","svelte-tabs__tab-panel svelte-epfyet"),_(e,"role","tabpanel")},m(s,o){O(s,e,o),i&&i.m(e,null),r=!0},p(s,[o]){s[1]===s[2]?i?(i.p(s,o),o&2&&V(i,1)):(i=_c(s),i.c(),V(i,1),i.m(e,null)):i&&(Be(),L(i,1,1,()=>{i=null}),je()),(!r||o&1&&n!==(n=s[0][s[2].id]))&&_(e,"aria-labelledby",n)},i(s){r||(V(i),r=!0)},o(s){L(i),r=!1},d(s){s&&C(e),i&&i.d()}}}function e0(t,e,n){let r,i,{$$slots:s={},$$scope:o}=e;const a={id:od()},{registerPanel:l,selectedPanel:c,labeledBy:u}=Wc(Ba);return jt(t,c,h=>n(1,i=h)),jt(t,u,h=>n(0,r=h)),l(a),t.$$set=h=>{"$$scope"in h&&n(5,o=h.$$scope)},[r,i,a,c,u,o,s]}class $s extends $e{constructor(e){super(),qe(this,e,e0,ZT,ke,{})}}function ja(t){const e=t-1;return e*e*e+1}function yc(t){return--t*t*t*t*t+1}function Gt(t,{delay:e=0,duration:n=400,easing:r=Qt}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:s=>`opacity: ${s*i}`}}function t0(t,{delay:e=0,duration:n=400,easing:r=ja,x:i=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(t),l=+a.opacity,c=a.transform==="none"?"":a.transform,u=l*(1-o),[h,f]=Ka(i),[d,p]=Ka(s);return{delay:e,duration:n,easing:r,css:(g,y)=>`
			transform: ${c} translate(${(1-g)*h}${f}, ${(1-g)*d}${p});
			opacity: ${l-u*y}`}}function Bi(t,{delay:e=0,duration:n=400,easing:r=ja,start:i=0,opacity:s=0}={}){const o=getComputedStyle(t),a=+o.opacity,l=o.transform==="none"?"":o.transform,c=1-i,u=a*(1-s);return{delay:e,duration:n,easing:r,css:(h,f)=>`
			transform: ${l} scale(${1-c*f});
			opacity: ${a-u*f}
		`}}function n0(t,{from:e,to:n},r={}){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform,[o,a]=i.transformOrigin.split(" ").map(parseFloat),l=e.left+e.width*o/n.width-(n.left+o),c=e.top+e.height*a/n.height-(n.top+a),{delay:u=0,duration:h=d=>Math.sqrt(d)*120,easing:f=ja}=r;return{delay:u,duration:Ct(h)?h(Math.sqrt(l*l+c*c)):h,easing:f,css:(d,p)=>{const g=p*l,y=p*c,m=d+p*e.width/n.width,I=d+p*e.height/n.height;return`transform: ${s} translate(${g}px, ${y}px) scale(${m}, ${I});`}}}const r0={duration:4e3,initial:1,next:0,pausable:!1,dismissable:!0,reversed:!1,intro:{x:256}},i0=()=>{const{subscribe:t,update:e}=un([]);let n=0;const r={},i=c=>c instanceof Object;return{subscribe:t,push:(c,u={})=>{const h={target:"default",...i(c)?c:{...u,msg:c}},f=r[h.target]||{},d={...r0,...f,...h,theme:{...f.theme,...h.theme},classes:[...f.classes||[],...h.classes||[]],id:++n};return e(p=>d.reversed?[...p,d]:[d,...p]),n},pop:c=>{e(u=>{if(!u.length||c===0)return[];if(i(c))return u.filter(f=>c(f));const h=c||Math.max(...u.map(f=>f.id));return u.filter(f=>f.id!==h)})},set:(c,u={})=>{const h=i(c)?{...c}:{...u,id:c};e(f=>{const d=f.findIndex(p=>p.id===h.id);return d>-1&&(f[d]={...f[d],...h}),f})},_init:(c="default",u={})=>(r[c]=u,r)}},Ir=i0();function vc(t){return Object.prototype.toString.call(t)==="[object Date]"}function bo(t,e){if(t===e||t!==t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const r=e.map((i,s)=>bo(t[s],i));return i=>r.map(s=>s(i))}if(n==="object"){if(!t||!e)throw new Error("Object cannot be null");if(vc(t)&&vc(e)){t=t.getTime(),e=e.getTime();const s=e-t;return o=>new Date(t+o*s)}const r=Object.keys(e),i={};return r.forEach(s=>{i[s]=bo(t[s],e[s])}),s=>{const o={};return r.forEach(a=>{o[a]=i[a](s)}),o}}if(n==="number"){const r=e-t;return i=>t+i*r}throw new Error(`Cannot interpolate ${n} values`)}function s0(t,e={}){const n=un(t);let r,i=t;function s(o,a){if(t==null)return n.set(t=o),Promise.resolve();i=o;let l=r,c=!1,{delay:u=0,duration:h=400,easing:f=Qt,interpolate:d=bo}=vn(vn({},e),a);if(h===0)return l&&(l.abort(),l=null),n.set(t=i),Promise.resolve();const p=wr()+u;let g;return r=Ar(y=>{if(y<p)return!0;c||(g=d(t,o),typeof h=="function"&&(h=h(t,o)),c=!0),l&&(l.abort(),l=null);const m=y-p;return m>h?(n.set(t=o),!1):(n.set(t=g(f(m/h))),!0)}),r.promise}return{set:s,update:(o,a)=>s(o(i,t),a),subscribe:n.subscribe}}function o0(t){let e,n=t[0].msg+"",r;return{c(){e=new Td(!1),r=xe(),e.a=r},m(i,s){e.m(n,i,s),O(i,r,s)},p(i,s){s&1&&n!==(n=i[0].msg+"")&&e.p(n)},i:M,o:M,d(i){i&&C(r),i&&e.d()}}}function a0(t){let e,n,r;const i=[t[2]];var s=t[0].component.src;function o(a){let l={};for(let c=0;c<i.length;c+=1)l=vn(l,i[c]);return{props:l}}return s&&(e=Ga(s,o())),{c(){e&&ce(e.$$.fragment),n=xe()},m(a,l){e&&ie(e,a,l),O(a,n,l),r=!0},p(a,l){const c=l&4?Fd(i,[Ud(a[2])]):{};if(l&1&&s!==(s=a[0].component.src)){if(e){Be();const u=e;L(u.$$.fragment,1,0,()=>{se(u,1)}),je()}s?(e=Ga(s,o()),ce(e.$$.fragment),V(e.$$.fragment,1),ie(e,n.parentNode,n)):e=null}else s&&e.$set(c)},i(a){r||(e&&V(e.$$.fragment,a),r=!0)},o(a){e&&L(e.$$.fragment,a),r=!1},d(a){a&&C(n),e&&se(e,a)}}}function Ec(t){let e,n,r;return{c(){e=S("div"),_(e,"class","_toastBtn pe svelte-l65oht"),_(e,"role","button"),_(e,"tabindex","0")},m(i,s){O(i,e,s),n||(r=[le(e,"click",t[4]),le(e,"keydown",t[8])],n=!0)},p:M,d(i){i&&C(e),n=!1,Ce(r)}}}function l0(t){let e,n,r,i,s,o,a,l,c,u;const h=[a0,o0],f=[];function d(g,y){return g[0].component?0:1}r=d(t),i=f[r]=h[r](t);let p=t[0].dismissable&&Ec(t);return{c(){e=S("div"),n=S("div"),i.c(),s=X(),p&&p.c(),o=X(),a=S("progress"),_(n,"role","status"),_(n,"class","_toastMsg svelte-l65oht"),Le(n,"pe",t[0].component),_(a,"class","_toastBar svelte-l65oht"),a.value=t[1],_(e,"class","_toastItem svelte-l65oht"),Le(e,"pe",t[0].pausable)},m(g,y){O(g,e,y),R(e,n),f[r].m(n,null),R(e,s),p&&p.m(e,null),R(e,o),R(e,a),l=!0,c||(u=[le(e,"mouseenter",t[9]),le(e,"mouseleave",t[6])],c=!0)},p(g,[y]){let m=r;r=d(g),r===m?f[r].p(g,y):(Be(),L(f[m],1,1,()=>{f[m]=null}),je(),i=f[r],i?i.p(g,y):(i=f[r]=h[r](g),i.c()),V(i,1),i.m(n,null)),(!l||y&1)&&Le(n,"pe",g[0].component),g[0].dismissable?p?p.p(g,y):(p=Ec(g),p.c(),p.m(e,o)):p&&(p.d(1),p=null),(!l||y&2)&&(a.value=g[1]),(!l||y&1)&&Le(e,"pe",g[0].pausable)},i(g){l||(V(i),l=!0)},o(g){L(i),l=!1},d(g){g&&C(e),f[r].d(),p&&p.d(),c=!1,Ce(u)}}}function c0(t,e,n){let r,{item:i}=e;const s=s0(i.initial,{duration:i.duration,easing:Qt});jt(t,s,T=>n(1,r=T));const o=()=>Ir.pop(i.id),a=()=>{(r===1||r===0)&&o()};let l=i.initial,c=l,u=!1;const h=()=>{!u&&r!==l&&(s.set(r,{duration:0}),u=!0)},f=()=>{if(u){const T=i.duration,k=T-T*((r-c)/(l-c));s.set(l,{duration:k}).then(a),u=!1}};let d={};const p=(T,k="undefined")=>typeof T===k;let g;Co((T=document)=>{if(p(T.hidden))return;const k=()=>T.hidden?h():f(),K="visibilitychange";T.addEventListener(K,k),g=()=>T.removeEventListener(K,k),k()}),Kc(()=>{p(i.onpop,"function")&&i.onpop(i.id),g&&g()});const m=T=>{T instanceof KeyboardEvent&&["Enter"," "].includes(T.key)&&o()},I=()=>{i.pausable&&h()};return t.$$set=T=>{"item"in T&&n(0,i=T.item)},t.$$.update=()=>{if(t.$$.dirty&1&&(p(i.progress)||n(0,i.next=i.progress,i)),t.$$.dirty&131&&l!==i.next&&(n(7,l=i.next),c=r,u=!1,s.set(l).then(a)),t.$$.dirty&1&&i.component){const{props:T={},sendIdTo:k}=i.component;n(2,d={...T,...k&&{[k]:i.id}})}},[i,r,d,s,o,h,f,l,m,I]}class u0 extends $e{constructor(e){super(),qe(this,e,c0,l0,ke,{item:0})}}function Tc(t,e,n){const r=t.slice();return r[5]=e[n],r}function Ic(t,e){let n,r,i,s,o,a,l,c,u=M,h;return r=new u0({props:{item:e[5]}}),{key:t,first:null,c(){n=S("li"),ce(r.$$.fragment),i=X(),_(n,"class",s=Ha(e[5].classes.join(" "))+" svelte-yh90az"),_(n,"style",o=e[1](e[5].theme)),this.first=n},m(f,d){O(f,n,d),ie(r,n,null),R(n,i),h=!0},p(f,d){e=f;const p={};d&1&&(p.item=e[5]),r.$set(p),(!h||d&1&&s!==(s=Ha(e[5].classes.join(" "))+" svelte-yh90az"))&&_(n,"class",s),(!h||d&1&&o!==(o=e[1](e[5].theme)))&&_(n,"style",o)},r(){c=n.getBoundingClientRect()},f(){bd(n),u(),Hc(n,c)},a(){u(),u=Rd(n,c,n0,{duration:200})},i(f){h||(V(r.$$.fragment,f),Ne(()=>{!h||(l&&l.end(1),a=Vd(n,t0,e[5].intro),a.start())}),h=!0)},o(f){L(r.$$.fragment,f),a&&a.invalidate(),l=Nd(n,Gt,{}),h=!1},d(f){f&&C(n),se(r),f&&l&&l.end()}}}function h0(t){let e,n=[],r=new Map,i,s=t[0];const o=a=>a[5].id;for(let a=0;a<s.length;a+=1){let l=Tc(t,s,a),c=o(l);r.set(c,n[a]=Ic(c,l))}return{c(){e=S("ul");for(let a=0;a<n.length;a+=1)n[a].c();_(e,"class","_toastContainer svelte-yh90az")},m(a,l){O(a,e,l);for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(e,null);i=!0},p(a,[l]){if(l&3){s=a[0],Be();for(let c=0;c<n.length;c+=1)n[c].r();n=Ld(n,l,o,1,a,s,r,e,Md,Ic,null,Tc);for(let c=0;c<n.length;c+=1)n[c].a();je()}},i(a){if(!i){for(let l=0;l<s.length;l+=1)V(n[l]);i=!0}},o(a){for(let l=0;l<n.length;l+=1)L(n[l]);i=!1},d(a){a&&C(e);for(let l=0;l<n.length;l+=1)n[l].d()}}}function f0(t,e,n){let r;jt(t,Ir,l=>n(4,r=l));let{options:i={}}=e,{target:s="default"}=e,o;const a=l=>Object.keys(l).reduce((c,u)=>`${c}${u}:${l[u]};`,"");return t.$$set=l=>{"options"in l&&n(2,i=l.options),"target"in l&&n(3,s=l.target)},t.$$.update=()=>{t.$$.dirty&12&&Ir._init(s,i),t.$$.dirty&24&&n(0,o=r.filter(l=>l.target===s))},[o,a,i,s,r]}class d0 extends $e{constructor(e){super(),qe(this,e,f0,h0,ke,{options:2,target:3})}}const p0="modulepreload",m0=function(t){return"/"+t},wc={},sn=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=m0(s),s in wc)return;wc[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":p0,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};function g0(t){let e,n,r,i={ctx:t,current:null,token:null,hasCatch:!1,pending:w0,then:v0,catch:y0,blocks:[,,,]};return _i(n=t[6](),i),{c(){e=xe(),i.block.c()},m(s,o){O(s,e,o),i.block.m(s,i.anchor=o),i.mount=()=>e.parentNode,i.anchor=e,r=!0},p(s,o){t=s,i.ctx=t,o&64&&n!==(n=t[6]())&&_i(n,i)||Xc(i,t,o)},i(s){r||(V(i.block),r=!0)},o(s){for(let o=0;o<3;o+=1){const a=i.blocks[o];L(a)}r=!1},d(s){s&&C(e),i.block.d(s),i.token=null,i=null}}}function _0(t){let e,n;const r=t[24].default,i=Dn(r,t,t[23],null);return{c(){e=S("div"),i&&i.c(),_(e,"class","typewriter-container svelte-1gv2i7t")},m(s,o){O(s,e,o),i&&i.m(e,null),n=!0},p(s,o){i&&i.p&&(!n||o&8388608)&&Nn(i,r,s,s[23],n?Vn(r,s[23],o,null):On(s[23]),null)},i(s){n||(V(i,s),n=!0)},o(s){L(i,s),n=!1},d(s){s&&C(e),i&&i.d(s)}}}function y0(t){return{c:M,m:M,p:M,i:M,o:M,d:M}}function v0(t){let e,n,r,i={ctx:t,current:null,token:null,hasCatch:!1,pending:I0,then:T0,catch:E0,value:25,blocks:[,,,]};return _i(n=t[7][t[0]](),i),{c(){e=xe(),i.block.c()},m(s,o){O(s,e,o),i.block.m(s,i.anchor=o),i.mount=()=>e.parentNode,i.anchor=e,r=!0},p(s,o){t=s,i.ctx=t,o&1&&n!==(n=t[7][t[0]]())&&_i(n,i)||Xc(i,t,o)},i(s){r||(V(i.block),r=!0)},o(s){for(let o=0;o<3;o+=1){const a=i.blocks[o];L(a)}r=!1},d(s){s&&C(e),i.block.d(s),i.token=null,i=null}}}function E0(t){return{c:M,m:M,p:M,i:M,o:M,d:M}}function T0(t){let e=t[4],n,r,i=t[4]&&zs(t);return{c(){i&&i.c(),n=xe()},m(s,o){i&&i.m(s,o),O(s,n,o),r=!0},p(s,o){s[4]?e?ke(e,s[4])?(i.d(1),i=zs(s),e=s[4],i.c(),i.m(n.parentNode,n)):i.p(s,o):(i=zs(s),e=s[4],i.c(),i.m(n.parentNode,n)):e&&(i.d(1),i=null,e=s[4])},i(s){r||(V(i),r=!0)},o(s){L(i),r=!1},d(s){s&&C(n),i&&i.d(s)}}}function zs(t){let e,n,r,i,s;const o=t[24].default,a=Dn(o,t,t[23],null);return{c(){e=S(t[4]),a&&a.c(),yd(t[4])(e,{class:"typewriter-container svelte-1gv2i7t"}),Le(e,"cursor",t[1])},m(l,c){O(l,e,c),a&&a.m(e,null),r=!0,i||(s=Bc(n=t[25].default(e,t[5])),i=!0)},p(l,c){a&&a.p&&(!r||c&8388608)&&Nn(a,o,l,l[23],r?Vn(o,l[23],c,null):On(l[23]),null),n&&Ct(n.update)&&c&32&&n.update.call(null,l[5]),(!r||c&2)&&Le(e,"cursor",l[1])},i(l){r||(V(a,l),r=!0)},o(l){L(a,l),r=!1},d(l){l&&C(e),a&&a.d(l),i=!1,s()}}}function I0(t){return{c:M,m:M,p:M,i:M,o:M,d:M}}function w0(t){let e,n=t[2]&&Ac();return{c(){n&&n.c(),e=xe()},m(r,i){n&&n.m(r,i),O(r,e,i)},p(r,i){r[2]?n||(n=Ac(),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:M,o:M,d(r){n&&n.d(r),r&&C(e)}}}function Ac(t){let e;return{c(){e=S("div"),e.innerHTML='<p class="typing"></p>',_(e,"class","typewriter-container cursor svelte-1gv2i7t")},m(n,r){O(n,e,r)},d(n){n&&C(e)}}}function Rc(t){let e,n,r,i;const s=[_0,g0],o=[];function a(l,c){return l[3]?0:1}return e=a(t),n=o[e]=s[e](t),{c(){n.c(),r=xe()},m(l,c){o[e].m(l,c),O(l,r,c),i=!0},p(l,c){let u=e;e=a(l),e===u?o[e].p(l,c):(Be(),L(o[u],1,1,()=>{o[u]=null}),je(),n=o[e],n?n.p(l,c):(n=o[e]=s[e](l),n.c()),V(n,1),n.m(r.parentNode,r))},i(l){i||(V(n),i=!0)},o(l){L(n),i=!1},d(l){o[e].d(l),l&&C(r)}}}function A0(t){let e,n=t[8],r,i,s=Rc(t);return{c(){e=X(),s.c(),r=xe()},m(o,a){O(o,e,a),s.m(o,a),O(o,r,a),i=!0},p(o,[a]){a&256&&ke(n,n=o[8])?(Be(),L(s,1,1,M),je(),s=Rc(o),s.c(),V(s,1),s.m(r.parentNode,r)):s.p(o,a)},i(o){i||(V(s),i=!0)},o(o){L(s),i=!1},d(o){o&&C(e),o&&C(r),s.d(o)}}}function R0(t,e,n){let r,i,s,o,a,l,c,u,h,{$$slots:f={},$$scope:d}=e,{mode:p="concurrent"}=e,{interval:g=30}=e,{cursor:y=!0}=e,{keepCursorOnFinish:m=!1}=e,{delay:I=0}=e,{showCursorOnDelay:T=!1}=e,{disabled:k=!1}=e,{element:K="div"}=e,{scrambleDuration:z=3e3}=e,{scrambleSlowdown:A=!0}=e,{unwriteInterval:q=30}=e,{wordInterval:F=1500}=e;const P={concurrent:()=>sn(()=>import("./concurrent.37ba753b.js"),["assets/concurrent.37ba753b.js","assets/writeEffect.74deb112.js","assets/animationSetup.f482437b.js"]),cascade:()=>sn(()=>import("./cascade.30ada0a2.js"),["assets/cascade.30ada0a2.js","assets/writeEffect.74deb112.js","assets/animationSetup.f482437b.js"]),loop:()=>sn(()=>import("./loop.7a8716b1.js"),["assets/loop.7a8716b1.js","assets/writeAndUnwriteText.b7508315.js","assets/writeEffect.74deb112.js","assets/animationSetup.f482437b.js","assets/unwriteEffect.2599803d.js"]),loopOnce:()=>sn(()=>import("./loopOnce.e8f144e8.js"),["assets/loopOnce.e8f144e8.js","assets/animationSetup.f482437b.js","assets/writeEffect.74deb112.js","assets/unwriteEffect.2599803d.js"]),loopRandom:()=>sn(()=>import("./loopRandom.b5f3b4f7.js"),["assets/loopRandom.b5f3b4f7.js","assets/writeAndUnwriteText.b7508315.js","assets/writeEffect.74deb112.js","assets/animationSetup.f482437b.js","assets/unwriteEffect.2599803d.js"]),scramble:()=>sn(()=>import("./scramble.f39a0e3c.js"),["assets/scramble.f39a0e3c.js","assets/animationSetup.f482437b.js"])};return t.$$set=G=>{n(8,e=vn(vn({},e),za(G))),"mode"in G&&n(0,p=G.mode),"interval"in G&&n(9,g=G.interval),"cursor"in G&&n(1,y=G.cursor),"keepCursorOnFinish"in G&&n(10,m=G.keepCursorOnFinish),"delay"in G&&n(11,I=G.delay),"showCursorOnDelay"in G&&n(2,T=G.showCursorOnDelay),"disabled"in G&&n(3,k=G.disabled),"element"in G&&n(4,K=G.element),"scrambleDuration"in G&&n(12,z=G.scrambleDuration),"scrambleSlowdown"in G&&n(13,A=G.scrambleSlowdown),"unwriteInterval"in G&&n(14,q=G.unwriteInterval),"wordInterval"in G&&n(15,F=G.wordInterval),"$$scope"in G&&n(23,d=G.$$scope)},t.$$.update=()=>{t.$$.dirty&1&&n(21,r=/^loop(Once|Random)?$/.test(p)),t.$$.dirty&1&&n(22,i=["concurrent","cascade","loopOnce"].includes(p)),t.$$.dirty&4195328&&n(20,s=!i&&m),t.$$.dirty&2052&&n(19,o=I<1&&T),n(18,a=!r&&(e.unwriteInterval||e.wordInterval)),n(17,l=p!=="scramble"&&(e.scrambleDuration||e.scrambleSlowdown)),t.$$.dirty&1024&&n(16,c=typeof m=="number"&&m<1),t.$$.dirty&1048576&&s&&console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' is compatible only with finite modes"),t.$$.dirty&524288&&o&&console.warn("[svelte-typewriter] The prop 'showCursorOnDelay' has no effect if the delay is 0"),t.$$.dirty&262144&&a&&console.warn("[svelte-typewriter] The props 'unwriteInterval' and 'wordInterval' are only compatible with loop modes"),t.$$.dirty&131072&&l&&console.warn("[svelte-typewriter] The props 'scrambleDuration' and 'scrambleSlowdown' are only compatible with scramble mode"),t.$$.dirty&65536&&c&&console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' has no effect with values lower than 1"),t.$$.dirty&2048&&n(6,u=()=>new Promise(G=>setTimeout(()=>G(I),I))),t.$$.dirty&65054&&n(5,h={interval:g,cursor:y,keepCursorOnFinish:m,delay:I,showCursorOnDelay:T,disabled:k,element:K,scrambleDuration:z,scrambleSlowdown:A,unwriteInterval:q,wordInterval:F})},e=za(e),[p,y,T,k,K,h,u,P,e,g,m,I,z,A,q,F,c,l,a,o,s,r,i,d,f]}class qa extends $e{constructor(e){super(),qe(this,e,R0,A0,ke,{mode:0,interval:9,cursor:1,keepCursorOnFinish:10,delay:11,showCursorOnDelay:2,disabled:3,element:4,scrambleDuration:12,scrambleSlowdown:13,unwriteInterval:14,wordInterval:15})}}function b0(t){const e=n=>{t&&!t.contains(n.target)&&!n.defaultPrevented&&t.dispatchEvent(new CustomEvent("click_outside",t))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}function bc(t,e,n){const r=t.slice();return r[7]=e[n],r}function Pc(t){let e,n,r,i,s,o,a,l,c,u=t[0],h=[];for(let f=0;f<u.length;f+=1)h[f]=Sc(bc(t,u,f));return{c(){e=S("table"),n=S("caption"),n.textContent="Leaderboard",r=X(),i=S("tr"),i.innerHTML=`<th class="svelte-1wtm20f">Author</th> 
            <th class="svelte-1wtm20f">Quote Count</th>`,s=X();for(let f=0;f<h.length;f+=1)h[f].c();_(n,"class","svelte-1wtm20f"),_(i,"class","svelte-1wtm20f"),_(e,"class","leaderboard svelte-1wtm20f")},m(f,d){O(f,e,d),R(e,n),R(e,r),R(e,i),R(e,s);for(let p=0;p<h.length;p+=1)h[p]&&h[p].m(e,null);a=!0,l||(c=[Bc(b0.call(null,e)),le(e,"click_outside",t[3])],l=!0)},p(f,d){if(t=f,d&1){u=t[0];let p;for(p=0;p<u.length;p+=1){const g=bc(t,u,p);h[p]?h[p].p(g,d):(h[p]=Sc(g),h[p].c(),h[p].m(e,null))}for(;p<h.length;p+=1)h[p].d(1);h.length=u.length}},i(f){a||(Ne(()=>{!a||(o||(o=Ye(e,Bi,{duration:250,opacity:.5,easing:yc},!0)),o.run(1))}),a=!0)},o(f){o||(o=Ye(e,Bi,{duration:250,opacity:.5,easing:yc},!1)),o.run(0),a=!1},d(f){f&&C(e),So(h,f),f&&o&&o.end(),l=!1,Ce(c)}}}function Sc(t){let e,n,r=t[7].author+"",i,s,o,a=t[7].count+"",l,c;return{c(){e=S("tr"),n=S("td"),i=Je(r),s=X(),o=S("td"),l=Je(a),c=X(),_(n,"class","svelte-1wtm20f"),_(o,"class","svelte-1wtm20f"),_(e,"class","svelte-1wtm20f")},m(u,h){O(u,e,h),R(e,n),R(n,i),R(e,s),R(e,o),R(o,l),R(e,c)},p(u,h){h&1&&r!==(r=u[7].author+"")&&Rt(i,r),h&1&&a!==(a=u[7].count+"")&&Rt(l,a)},d(u){u&&C(e)}}}function P0(t){let e,n,r,i,s,o,a,l=t[1]&&Pc(t);return{c(){e=S("div"),e.innerHTML='<img src="https://cdn-icons-png.flaticon.com/512/4489/4489655.png" alt="Leaderboard button" class="svelte-1wtm20f"/>',r=X(),l&&l.c(),i=xe(),_(e,"class","icon svelte-1wtm20f")},m(c,u){O(c,e,u),t[6](e),O(c,r,u),l&&l.m(c,u),O(c,i,u),s=!0,o||(a=le(e,"click",t[3]),o=!0)},p(c,[u]){c[1]?l?(l.p(c,u),u&2&&V(l,1)):(l=Pc(c),l.c(),V(l,1),l.m(i.parentNode,i)):l&&(Be(),L(l,1,1,()=>{l=null}),je())},i(c){s||(Ne(()=>{!s||(n||(n=Ye(e,Bi,{},!0)),n.run(1))}),V(l),s=!0)},o(c){n||(n=Ye(e,Bi,{},!1)),n.run(0),L(l),s=!1},d(c){c&&C(e),t[6](null),c&&n&&n.end(),c&&C(r),l&&l.d(c),c&&C(i),o=!1,a()}}}function S0(t,e,n){let{stringList:r=[]}=e,i,s,o=!1,a;function l(){n(1,o=!o),o?n(2,a.style["pointer-events"]="none",a):n(2,a.style["pointer-events"]="all",a)}function c(u){gi[u?"unshift":"push"](()=>{a=u,n(2,a)})}return t.$$set=u=>{"stringList"in u&&n(4,r=u.stringList)},t.$$.update=()=>{t.$$.dirty&16&&n(5,i=r.reduce((u,{author:h})=>((h.includes(" & ")?h.split(" & "):[h]).forEach(d=>{const p=d;u[p]=(u[p]||0)+1}),u),{})),t.$$.dirty&32&&n(0,s=Object.entries(i).map(([u,h])=>({author:u,count:h})).sort((u,h)=>h.count-u.count))},[s,o,a,l,r,i,c]}class C0 extends $e{constructor(e){super(),qe(this,e,S0,P0,ke,{stringList:4})}}function Cc(t,e,n){const r=t.slice();return r[22]=e[n],r[24]=n,r}function kc(t,e,n){const r=t.slice();return r[25]=e[n],r}function k0(t){let e,n;return e=new xa({props:{icon:xT,size:"lg"}}),{c(){ce(e.$$.fragment)},m(r,i){ie(e,r,i),n=!0},p:M,i(r){n||(V(e.$$.fragment,r),n=!0)},o(r){L(e.$$.fragment,r),n=!1},d(r){se(e,r)}}}function D0(t){let e,n;return e=new xa({props:{icon:qT,size:"lg"}}),{c(){ce(e.$$.fragment)},m(r,i){ie(e,r,i),n=!0},p:M,i(r){n||(V(e.$$.fragment,r),n=!0)},o(r){L(e.$$.fragment,r),n=!1},d(r){se(e,r)}}}function V0(t){let e,n;return e=new xa({props:{icon:jT,size:"lg"}}),{c(){ce(e.$$.fragment)},m(r,i){ie(e,r,i),n=!0},p:M,i(r){n||(V(e.$$.fragment,r),n=!0)},o(r){L(e.$$.fragment,r),n=!1},d(r){se(e,r)}}}function N0(t){let e,n,r,i,s,o;return e=new qs({props:{$$slots:{default:[k0]},$$scope:{ctx:t}}}),r=new qs({props:{$$slots:{default:[D0]},$$scope:{ctx:t}}}),s=new qs({props:{$$slots:{default:[V0]},$$scope:{ctx:t}}}),{c(){ce(e.$$.fragment),n=X(),ce(r.$$.fragment),i=X(),ce(s.$$.fragment)},m(a,l){ie(e,a,l),O(a,n,l),ie(r,a,l),O(a,i,l),ie(s,a,l),o=!0},p(a,l){const c={};l&268435456&&(c.$$scope={dirty:l,ctx:a}),e.$set(c);const u={};l&268435456&&(u.$$scope={dirty:l,ctx:a}),r.$set(u);const h={};l&268435456&&(h.$$scope={dirty:l,ctx:a}),s.$set(h)},i(a){o||(V(e.$$.fragment,a),V(r.$$.fragment,a),V(s.$$.fragment,a),o=!0)},o(a){L(e.$$.fragment,a),L(r.$$.fragment,a),L(s.$$.fragment,a),o=!1},d(a){se(e,a),a&&C(n),se(r,a),a&&C(i),se(s,a)}}}function Dc(t){let e,n,r,i,s,o;e=new qa({props:{mode:"concurrent",keepCursorOnFinish:!0,$$slots:{default:[O0]},$$scope:{ctx:t}}});const a=[L0,M0],l=[];function c(u,h){return u[1]?0:1}return r=c(t),i=l[r]=a[r](t),{c(){ce(e.$$.fragment),n=X(),i.c(),s=xe()},m(u,h){ie(e,u,h),O(u,n,h),l[r].m(u,h),O(u,s,h),o=!0},p(u,h){const f={};h&268435472&&(f.$$scope={dirty:h,ctx:u}),e.$set(f);let d=r;r=c(u),r===d?l[r].p(u,h):(Be(),L(l[d],1,1,()=>{l[d]=null}),je(),i=l[r],i?i.p(u,h):(i=l[r]=a[r](u),i.c()),V(i,1),i.m(s.parentNode,s))},i(u){o||(V(e.$$.fragment,u),V(i),o=!0)},o(u){L(e.$$.fragment,u),L(i),o=!1},d(u){se(e,u),u&&C(n),l[r].d(u),u&&C(s)}}}function O0(t){let e,n=t[4].quote+"",r;return{c(){e=S("h1"),r=Je(n),_(e,"class","random-text svelte-oo10y6")},m(i,s){O(i,e,s),R(e,r)},p(i,s){s&16&&n!==(n=i[4].quote+"")&&Rt(r,n)},d(i){i&&C(e)}}}function M0(t){let e,n;return e=new qa({props:{mode:"concurrent",cursor:!1,$$slots:{default:[F0]},$$scope:{ctx:t}}}),{c(){ce(e.$$.fragment)},m(r,i){ie(e,r,i),n=!0},p(r,i){const s={};i&268435472&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(V(e.$$.fragment,r),n=!0)},o(r){L(e.$$.fragment,r),n=!1},d(r){se(e,r)}}}function L0(t){let e,n;return e=new qa({props:{mode:"concurrent",cursor:!1,$$slots:{default:[U0]},$$scope:{ctx:t}}}),{c(){ce(e.$$.fragment)},m(r,i){ie(e,r,i),n=!0},p(r,i){const s={};i&268435474&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(V(e.$$.fragment,r),n=!0)},o(r){L(e.$$.fragment,r),n=!1},d(r){se(e,r)}}}function F0(t){let e,n=t[4].author+"",r;return{c(){e=S("h1"),r=Je(n),_(e,"class","random-text svelte-oo10y6")},m(i,s){O(i,e,s),R(e,r)},p(i,s){s&16&&n!==(n=i[4].author+"")&&Rt(r,n)},d(i){i&&C(e)}}}function U0(t){let e,n=t[4].author==""?"":"Click to Reveal",r,i,s;return{c(){e=S("h1"),r=Je(n),_(e,"id","spoiler-author"),_(e,"class","random-text svelte-oo10y6")},m(o,a){O(o,e,a),R(e,r),i||(s=le(e,"click",t[14]),i=!0)},p(o,a){a&16&&n!==(n=o[4].author==""?"":"Click to Reveal")&&Rt(r,n)},d(o){o&&C(e),i=!1,s()}}}function x0(t){let e,n,r,i,s,o,a,l,c,u,h;n=new C0({props:{stringList:t[0]}});let f=typeof t[4]<"u"&&Dc(t);return{c(){e=S("div"),ce(n.$$.fragment),r=X(),i=S("div"),s=S("div"),f&&f.c(),o=X(),a=S("button"),a.textContent="Load Random Quote",_(s,"class","typewriter-block svelte-oo10y6"),_(a,"class","custom-button load-quote svelte-oo10y6"),_(i,"class","heading svelte-oo10y6"),_(e,"class","parent-div quotes svelte-oo10y6")},m(d,p){O(d,e,p),ie(n,e,null),R(e,r),R(e,i),R(i,s),f&&f.m(s,null),R(i,o),R(i,a),c=!0,u||(h=le(a,"click",t[9]),u=!0)},p(d,p){const g={};p&1&&(g.stringList=d[0]),n.$set(g),typeof d[4]<"u"?f?(f.p(d,p),p&16&&V(f,1)):(f=Dc(d),f.c(),V(f,1),f.m(s,null)):f&&(Be(),L(f,1,1,()=>{f=null}),je())},i(d){c||(V(n.$$.fragment,d),V(f),Ne(()=>{!c||(l||(l=Ye(e,Gt,{duration:100},!0)),l.run(1))}),c=!0)},o(d){L(n.$$.fragment,d),L(f),l||(l=Ye(e,Gt,{duration:100},!1)),l.run(0),c=!1},d(d){d&&C(e),se(n),f&&f.d(),d&&l&&l.end(),u=!1,h()}}}function B0(t){let e,n,r,i,s,o,a,l,c,u,h,f;return{c(){e=S("div"),n=S("h2"),n.textContent="Submit a new quote",r=X(),i=S("input"),s=X(),o=S("input"),a=X(),l=S("button"),l.textContent="Add Quote",_(n,"class","center-header svelte-oo10y6"),_(i,"id","new-quote-input"),_(i,"type","text"),_(i,"placeholder","Submit a new quote here"),_(i,"class","svelte-oo10y6"),_(o,"id","new-quote-input-author"),_(o,"type","text"),_(o,"placeholder","Write quote author here. If multiple, separate with &"),_(o,"class","svelte-oo10y6"),_(l,"class","custom-button"),_(e,"class","parent-div quotes svelte-oo10y6")},m(d,p){O(d,e,p),R(e,n),R(e,r),R(e,i),yt(i,t[2]),R(e,s),R(e,o),yt(o,t[3]),R(e,a),R(e,l),u=!0,h||(f=[le(i,"input",t[15]),le(o,"input",t[16]),le(l,"click",t[10])],h=!0)},p(d,p){p&4&&i.value!==d[2]&&yt(i,d[2]),p&8&&o.value!==d[3]&&yt(o,d[3])},i(d){u||(Ne(()=>{!u||(c||(c=Ye(e,Gt,{duration:100},!0)),c.run(1))}),u=!0)},o(d){c||(c=Ye(e,Gt,{duration:100},!1)),c.run(0),u=!1},d(d){d&&C(e),d&&c&&c.end(),h=!1,Ce(f)}}}function Vc(t){let e,n,r;return{c(){e=S("button"),e.innerHTML='<span class="svelte-oo10y6">\xD7</span>',_(e,"class","clear-button svelte-oo10y6")},m(i,s){O(i,e,s),n||(r=le(e,"click",t[13]),n=!0)},p:M,d(i){i&&C(e),n=!1,r()}}}function Nc(t){let e,n=t[25]+"",r,i;return{c(){e=S("option"),r=Je(n),e.__value=i=t[25],e.value=e.__value},m(s,o){O(s,e,o),R(e,r)},p(s,o){o&1&&n!==(n=s[25]+"")&&Rt(r,n),o&1&&i!==(i=s[25])&&(e.__value=i,e.value=e.__value)},d(s){s&&C(e)}}}function j0(t){let e,n=t[7],r=[];for(let i=0;i<n.length;i+=1)r[i]=Oc(Cc(t,n,i));return{c(){e=S("ul");for(let i=0;i<r.length;i+=1)r[i].c();_(e,"class","quote-list svelte-oo10y6")},m(i,s){O(i,e,s);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null)},p(i,s){if(s&128){n=i[7];let o;for(o=0;o<n.length;o+=1){const a=Cc(i,n,o);r[o]?r[o].p(a,s):(r[o]=Oc(a),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(i){i&&C(e),So(r,i)}}}function q0(t){let e;return{c(){e=S("ul"),e.innerHTML='<li class="svelte-oo10y6">No results found.</li>',_(e,"class","quote-list svelte-oo10y6")},m(n,r){O(n,e,r)},p:M,d(n){n&&C(e)}}}function Oc(t){let e,n,r=t[22].quote+"",i,s,o,a=t[22].author+"",l,c;return{c(){e=S("li"),n=S("span"),i=Je(r),s=X(),o=S("span"),l=Je(a),c=X(),_(n,"class","quote svelte-oo10y6"),_(o,"class","author svelte-oo10y6"),_(e,"class","svelte-oo10y6")},m(u,h){O(u,e,h),R(e,n),R(n,i),R(e,s),R(e,o),R(o,l),R(e,c)},p(u,h){h&128&&r!==(r=u[22].quote+"")&&Rt(i,r),h&128&&a!==(a=u[22].author+"")&&Rt(l,a)},d(u){u&&C(e)}}}function $0(t){let e,n,r,i,s,o,a,l,c,u,h,f,d,p,g,y,m=t[5]&&Vc(t),I=Array.from(new Set(t[0].map(Mc))).filter(Lc).sort(Fc),T=[];for(let A=0;A<I.length;A+=1)T[A]=Nc(kc(t,I,A));function k(A,q){return A[8]?q0:j0}let K=k(t),z=K(t);return{c(){e=S("div"),n=S("h2"),n.textContent="Search",r=X(),i=S("div"),s=S("input"),o=X(),m&&m.c(),a=X(),l=S("button"),l.textContent="Search",c=X(),u=S("select"),h=S("option"),h.textContent="All Authors";for(let A=0;A<T.length;A+=1)T[A].c();f=X(),z.c(),_(s,"type","text"),_(s,"placeholder","Search..."),_(s,"class","svelte-oo10y6"),_(l,"class","custom-button svelte-oo10y6"),_(i,"class","search-container svelte-oo10y6"),h.__value="",h.value=h.__value,t[6]===void 0&&Ne(()=>t[18].call(u)),_(e,"class","parent-div search svelte-oo10y6")},m(A,q){O(A,e,q),R(e,n),R(e,r),R(e,i),R(i,s),yt(s,t[5]),R(i,o),m&&m.m(i,null),R(i,a),R(i,l),R(e,c),R(e,u),R(u,h);for(let F=0;F<T.length;F+=1)T[F]&&T[F].m(u,null);Wa(u,t[6],!0),R(e,f),z.m(e,null),p=!0,g||(y=[le(s,"input",t[17]),le(l,"click",t[11]),le(u,"change",t[18]),le(u,"change",t[12])],g=!0)},p(A,q){if(q&32&&s.value!==A[5]&&yt(s,A[5]),A[5]?m?m.p(A,q):(m=Vc(A),m.c(),m.m(i,a)):m&&(m.d(1),m=null),q&1){I=Array.from(new Set(A[0].map(Mc))).filter(Lc).sort(Fc);let F;for(F=0;F<I.length;F+=1){const P=kc(A,I,F);T[F]?T[F].p(P,q):(T[F]=Nc(P),T[F].c(),T[F].m(u,null))}for(;F<T.length;F+=1)T[F].d(1);T.length=I.length}q&65&&Wa(u,A[6]),K===(K=k(A))&&z?z.p(A,q):(z.d(1),z=K(A),z&&(z.c(),z.m(e,null)))},i(A){p||(Ne(()=>{!p||(d||(d=Ye(e,Gt,{duration:100},!0)),d.run(1))}),p=!0)},o(A){d||(d=Ye(e,Gt,{duration:100},!1)),d.run(0),p=!1},d(A){A&&C(e),m&&m.d(),So(T,A),z.d(),A&&d&&d.end(),g=!1,Ce(y)}}}function z0(t){let e,n,r,i,s,o,a,l;return e=new YT({props:{$$slots:{default:[N0]},$$scope:{ctx:t}}}),r=new $s({props:{$$slots:{default:[x0]},$$scope:{ctx:t}}}),s=new $s({props:{$$slots:{default:[B0]},$$scope:{ctx:t}}}),a=new $s({props:{$$slots:{default:[$0]},$$scope:{ctx:t}}}),{c(){ce(e.$$.fragment),n=X(),ce(r.$$.fragment),i=X(),ce(s.$$.fragment),o=X(),ce(a.$$.fragment)},m(c,u){ie(e,c,u),O(c,n,u),ie(r,c,u),O(c,i,u),ie(s,c,u),O(c,o,u),ie(a,c,u),l=!0},p(c,u){const h={};u&268435456&&(h.$$scope={dirty:u,ctx:c}),e.$set(h);const f={};u&268435475&&(f.$$scope={dirty:u,ctx:c}),r.$set(f);const d={};u&268435468&&(d.$$scope={dirty:u,ctx:c}),s.$set(d);const p={};u&268435937&&(p.$$scope={dirty:u,ctx:c}),a.$set(p)},i(c){l||(V(e.$$.fragment,c),V(r.$$.fragment,c),V(s.$$.fragment,c),V(a.$$.fragment,c),l=!0)},o(c){L(e.$$.fragment,c),L(r.$$.fragment,c),L(s.$$.fragment,c),L(a.$$.fragment,c),l=!1},d(c){se(e,c),c&&C(n),se(r,c),c&&C(i),se(s,c),c&&C(o),se(a,c)}}}function H0(t){let e,n;return e=new WT({props:{$$slots:{default:[z0]},$$scope:{ctx:t}}}),{c(){ce(e.$$.fragment)},m(r,i){ie(e,r,i),n=!0},p(r,[i]){const s={};i&268435967&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(V(e.$$.fragment,r),n=!0)},o(r){L(e.$$.fragment,r),n=!1},d(r){se(e,r)}}}const Mc=t=>t.author,Lc=t=>!t.includes("&"),Fc=(t,e)=>t.localeCompare(e);function K0(t,e,n){let r=[];const i=oT(DT,"quotes","quote_list");bT(i,q=>{if(r!==q.data().quote_list){let F=r.length;n(0,r=q.data().quote_list),F!==0&&new Notification("New Quote Added",{body:r.at(-1).quote})}y()});let s=!0,o="",a="",l={quote:"",author:""},c=-1;"Notification"in window&&Notification.permission!=="denied"&&Notification.permission!=="granted"&&Notification.requestPermission();async function u(){if(n(1,s=!0),r.length===0){const q=await AT(i);n(0,r=q.data().quote_list)}c=Math.floor(Math.random()*r.length),n(4,l=r[c]),n(4,l.quote+=" ",l),r.splice(c,1)}async function h(){if(o!=""&&a!=""){let q={quote:o.trim(),author:a.trim()};Ir.push("Submitting quote..."),await RT(i,{quote_list:ST(q)}).then(()=>{Ir.push("Quote submitted!"),n(2,o=""),n(3,a="")})}}let f="",d="",p=[],g=!1;function y(){n(7,p=r.filter(q=>{const F=f.toLowerCase(),P=q.quote.toLowerCase(),G=q.author.toLowerCase(),ad=G.split(/[&,]/).map(ld=>ld.trim());return(P.includes(F)||G.includes(F))&&(d===""||ad.includes(d.toLowerCase()))})),p.reverse(),n(8,g=p.length===0)}function m(q){n(6,d=q.target.value),y()}function I(){n(5,f="")}const T=()=>n(1,s=!1);function k(){o=this.value,n(2,o)}function K(){a=this.value,n(3,a)}function z(){f=this.value,n(5,f)}function A(){d=Ed(this),n(6,d),n(0,r)}return[r,s,o,a,l,f,d,p,g,u,h,y,m,I,T,k,K,z,A]}class W0 extends $e{constructor(e){super(),qe(this,e,K0,H0,ke,{})}}function G0(t){let e,n,r,i,s,o,a,l,c,u,h,f;return{c(){e=S("div"),n=S("button"),n.textContent="Sign In with Google",r=X(),i=S("p"),i.textContent="(This means no more typing in a password each time)",s=X(),o=S("h1"),o.textContent="OR",a=X(),l=S("label"),l.textContent="Password:",c=X(),u=S("input"),_(n,"id","login"),_(n,"class","custom-button svelte-od2gfg"),_(i,"class","svelte-od2gfg"),_(l,"for","password"),_(l,"class","svelte-od2gfg"),_(u,"id","password"),_(u,"type","password"),_(u,"class","svelte-od2gfg"),_(e,"id","login-container"),_(e,"class","svelte-od2gfg")},m(d,p){O(d,e,p),R(e,n),R(e,r),R(e,i),R(e,s),R(e,o),R(e,a),R(e,l),R(e,c),R(e,u),yt(u,t[1]),h||(f=[le(n,"click",t[2]),le(u,"input",t[4])],h=!0)},p(d,p){p&2&&u.value!==d[1]&&yt(u,d[1])},i:M,o:M,d(d){d&&C(e),h=!1,Ce(f)}}}function Q0(t){let e,n;return e=new W0({}),{c(){ce(e.$$.fragment)},m(r,i){ie(e,r,i),n=!0},p:M,i(r){n||(V(e.$$.fragment,r),n=!0)},o(r){L(e.$$.fragment,r),n=!1},d(r){se(e,r)}}}function X0(t){let e,n,r,i,s,o;const a=[Q0,G0],l=[];function c(u,h){return h&3&&(e=null),e==null&&(e=!!(u[0]||u[3](u[1])===1252560117)),e?0:1}return n=c(t,-1),r=l[n]=a[n](t),s=new d0({}),{c(){r.c(),i=X(),ce(s.$$.fragment)},m(u,h){l[n].m(u,h),O(u,i,h),ie(s,u,h),o=!0},p(u,[h]){let f=n;n=c(u,h),n===f?l[n].p(u,h):(Be(),L(l[f],1,1,()=>{l[f]=null}),je(),r=l[n],r?r.p(u,h):(r=l[n]=a[n](u),r.c()),V(r,1),r.m(i.parentNode,i))},i(u){o||(V(r),V(s.$$.fragment,u),o=!0)},o(u){L(r),L(s.$$.fragment,u),o=!1},d(u){l[n].d(u),u&&C(i),se(s,u)}}}function J0(t,e,n){const r=new nt;let i=di.currentUser;di.onAuthStateChanged(c=>{n(0,i=c)});function s(){Ag(di,r).then(c=>{n(0,i=c.user)}).catch(c=>{console.log(c.code,c.message)})}let o="";const a=c=>c.split("").reduce((u,h)=>(u=(u<<5)-u+h.charCodeAt(0),u&u),0);function l(){o=this.value,n(1,o)}return[i,o,s,a,l]}class Y0 extends $e{constructor(e){super(),qe(this,e,J0,X0,ke,{})}}new Y0({target:document.getElementById("app")});export{Z0 as c};
