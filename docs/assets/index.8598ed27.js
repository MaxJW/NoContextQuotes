(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function j(){}const Ie=e=>e;function ei(e,t){for(const n in t)e[n]=t[n];return e}function $o(e){return e()}function kr(){return Object.create(null)}function Dt(e){e.forEach($o)}function on(e){return typeof e=="function"}function an(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Eu(e){return Object.keys(e).length===0}function Tu(e,...t){if(e==null)return j;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Uo(e,t,n){e.$$.on_destroy.push(Tu(t,n))}function Nr(e){return e==null?"":e}const Bo=typeof window<"u";let os=Bo?()=>window.performance.now():()=>Date.now(),Oi=Bo?e=>requestAnimationFrame(e):j;const ae=new Set;function qo(e){ae.forEach(t=>{t.c(e)||(ae.delete(t),t.f())}),ae.size!==0&&Oi(qo)}function as(e){let t;return ae.size===0&&Oi(qo),{promise:new Promise(n=>{ae.add(t={c:e,f:n})}),abort(){ae.delete(t)}}}function rt(e,t){e.appendChild(t)}function jo(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function _u(e){const t=at("style");return bu(jo(e),t),t.sheet}function bu(e,t){return rt(e.head||e,t),t.sheet}function kt(e,t,n){e.insertBefore(t,n||null)}function pt(e){e.parentNode&&e.parentNode.removeChild(e)}function at(e){return document.createElement(e)}function Iu(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function Li(e){return document.createTextNode(e)}function jt(){return Li(" ")}function Ko(){return Li("")}function Kt(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function F(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Su(e){return Array.from(e.childNodes)}function Cu(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function xr(e,t){e.value=t==null?"":t}function In(e,t,n){e.classList[n?"add":"remove"](t)}function Au(e,t,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n,s,t),i}class Du{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,s=null){this.e||(this.is_svg?this.e=Iu(n.nodeName):this.e=at(n.nodeName),this.t=n,this.c(t)),this.i(s)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)kt(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(pt)}}function Rr(e,t){return new e(t)}const Fn=new Map;let Vn=0;function ku(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Nu(e,t){const n={stylesheet:_u(t),rules:{}};return Fn.set(e,n),n}function Mi(e,t,n,s,i,r,o,a=0){const c=16.666/s;let u=`{
`;for(let v=0;v<=1;v+=c){const C=t+(n-t)*r(v);u+=v*100+`%{${o(C,1-C)}}
`}const l=u+`100% {${o(n,1-n)}}
}`,h=`__svelte_${ku(l)}_${a}`,f=jo(e),{stylesheet:d,rules:p}=Fn.get(f)||Nu(f,e);p[h]||(p[h]=!0,d.insertRule(`@keyframes ${h} ${l}`,d.cssRules.length));const y=e.style.animation||"";return e.style.animation=`${y?`${y}, `:""}${h} ${s}ms linear ${i}ms 1 both`,Vn+=1,h}function $n(e,t){const n=(e.style.animation||"").split(", "),s=n.filter(t?r=>r.indexOf(t)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(e.style.animation=s.join(", "),Vn-=i,Vn||xu())}function xu(){Oi(()=>{Vn||(Fn.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&pt(t)}),Fn.clear())})}function Ru(e,t,n,s){if(!t)return j;const i=e.getBoundingClientRect();if(t.left===i.left&&t.right===i.right&&t.top===i.top&&t.bottom===i.bottom)return j;const{delay:r=0,duration:o=300,easing:a=Ie,start:c=os()+r,end:u=c+o,tick:l=j,css:h}=n(e,{from:t,to:i},s);let f=!0,d=!1,p;function y(){h&&(p=Mi(e,0,1,o,r,a,h)),r||(d=!0)}function v(){h&&$n(e,p),f=!1}return as(C=>{if(!d&&C>=c&&(d=!0),d&&C>=u&&(l(1,0),v()),!f)return!1;if(d){const O=C-c,k=0+1*a(O/o);l(k,1-k)}return!0}),y(),l(0,1),v}function Ou(e){const t=getComputedStyle(e);if(t.position!=="absolute"&&t.position!=="fixed"){const{width:n,height:s}=t,i=e.getBoundingClientRect();e.style.position="absolute",e.style.width=n,e.style.height=s,Ho(e,i)}}function Ho(e,t){const n=e.getBoundingClientRect();if(t.left!==n.left||t.top!==n.top){const s=getComputedStyle(e),i=s.transform==="none"?"":s.transform;e.style.transform=`${i} translate(${t.left-n.left}px, ${t.top-n.top}px)`}}let je;function Fe(e){je=e}function zo(){if(!je)throw new Error("Function called outside component initialization");return je}function Lu(e){zo().$$.on_mount.push(e)}function Mu(e){zo().$$.on_destroy.push(e)}const se=[],Or=[],xn=[],Lr=[],Pu=Promise.resolve();let ni=!1;function Fu(){ni||(ni=!0,Pu.then(Go))}function fe(e){xn.push(e)}const Us=new Set;let ee=0;function Go(){if(ee!==0)return;const e=je;do{try{for(;ee<se.length;){const t=se[ee];ee++,Fe(t),Vu(t.$$)}}catch(t){throw se.length=0,ee=0,t}for(Fe(null),se.length=0,ee=0;Or.length;)Or.pop()();for(let t=0;t<xn.length;t+=1){const n=xn[t];Us.has(n)||(Us.add(n),n())}xn.length=0}while(se.length);for(;Lr.length;)Lr.pop()();ni=!1,Us.clear(),Fe(e)}function Vu(e){if(e.fragment!==null){e.update(),Dt(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(fe)}}let xe;function Qo(){return xe||(xe=Promise.resolve(),xe.then(()=>{xe=null})),xe}function Un(e,t,n){e.dispatchEvent(Au(`${t?"intro":"outro"}${n}`))}const Rn=new Set;let Nt;function Pi(){Nt={r:0,c:[],p:Nt}}function Fi(){Nt.r||Dt(Nt.c),Nt=Nt.p}function vt(e,t){e&&e.i&&(Rn.delete(e),e.i(t))}function bt(e,t,n,s){if(e&&e.o){if(Rn.has(e))return;Rn.add(e),Nt.c.push(()=>{Rn.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}const Wo={duration:0};function $u(e,t,n){const s={direction:"in"};let i=t(e,n,s),r=!1,o,a,c=0;function u(){o&&$n(e,o)}function l(){const{delay:f=0,duration:d=300,easing:p=Ie,tick:y=j,css:v}=i||Wo;v&&(o=Mi(e,0,1,d,f,p,v,c++)),y(0,1);const C=os()+f,O=C+d;a&&a.abort(),r=!0,fe(()=>Un(e,!0,"start")),a=as(k=>{if(r){if(k>=O)return y(1,0),Un(e,!0,"end"),u(),r=!1;if(k>=C){const P=p((k-C)/d);y(P,1-P)}}return r})}let h=!1;return{start(){h||(h=!0,$n(e),on(i)?(i=i(s),Qo().then(l)):l())},invalidate(){h=!1},end(){r&&(u(),r=!1)}}}function Uu(e,t,n){const s={direction:"out"};let i=t(e,n,s),r=!0,o;const a=Nt;a.r+=1;function c(){const{delay:u=0,duration:l=300,easing:h=Ie,tick:f=j,css:d}=i||Wo;d&&(o=Mi(e,1,0,l,u,h,d));const p=os()+u,y=p+l;fe(()=>Un(e,!1,"start")),as(v=>{if(r){if(v>=y)return f(0,1),Un(e,!1,"end"),--a.r||Dt(a.c),!1;if(v>=p){const C=h((v-p)/l);f(1-C,C)}}return r})}return on(i)?Qo().then(()=>{i=i(s),c()}):c(),{end(u){u&&i.tick&&i.tick(1,0),r&&(o&&$n(e,o),r=!1)}}}function Bu(e,t){bt(e,1,1,()=>{t.delete(e.key)})}function qu(e,t){e.f(),Bu(e,t)}function ju(e,t,n,s,i,r,o,a,c,u,l,h){let f=e.length,d=r.length,p=f;const y={};for(;p--;)y[e[p].key]=p;const v=[],C=new Map,O=new Map;for(p=d;p--;){const U=h(i,r,p),ct=n(U);let gt=o.get(ct);gt?s&&gt.p(U,t):(gt=u(ct,U),gt.c()),C.set(ct,v[p]=gt),ct in y&&O.set(ct,Math.abs(p-y[ct]))}const k=new Set,P=new Set;function ft(U){vt(U,1),U.m(a,l),o.set(U.key,U),l=U.first,d--}for(;f&&d;){const U=v[d-1],ct=e[f-1],gt=U.key,bn=ct.key;U===ct?(l=U.first,f--,d--):C.has(bn)?!o.has(gt)||k.has(gt)?ft(U):P.has(bn)?f--:O.get(gt)>O.get(bn)?(P.add(gt),ft(U)):(k.add(bn),f--):(c(ct,o),f--)}for(;f--;){const U=e[f];C.has(U.key)||c(U,o)}for(;d;)ft(v[d-1]);return v}function Ku(e,t){const n={},s={},i={$$scope:1};let r=e.length;for(;r--;){const o=e[r],a=t[r];if(a){for(const c in o)c in a||(s[c]=1);for(const c in a)i[c]||(n[c]=a[c],i[c]=1);e[r]=a}else for(const c in o)i[c]=1}for(const o in s)o in n||(n[o]=void 0);return n}function Hu(e){return typeof e=="object"&&e!==null?e:{}}function Ke(e){e&&e.c()}function de(e,t,n,s){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),s||fe(()=>{const o=e.$$.on_mount.map($o).filter(on);e.$$.on_destroy?e.$$.on_destroy.push(...o):Dt(o),e.$$.on_mount=[]}),r.forEach(fe)}function pe(e,t){const n=e.$$;n.fragment!==null&&(Dt(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function zu(e,t){e.$$.dirty[0]===-1&&(se.push(e),Fu(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function cs(e,t,n,s,i,r,o,a=[-1]){const c=je;Fe(e);const u=e.$$={fragment:null,ctx:[],props:r,update:j,not_equal:i,bound:kr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:kr(),dirty:a,skip_bound:!1,root:t.target||c.$$.root};o&&o(u.root);let l=!1;if(u.ctx=n?n(e,t.props||{},(h,f,...d)=>{const p=d.length?d[0]:f;return u.ctx&&i(u.ctx[h],u.ctx[h]=p)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](p),l&&zu(e,h)),f}):[],u.update(),l=!0,Dt(u.before_update),u.fragment=s?s(u.ctx):!1,t.target){if(t.hydrate){const h=Su(t.target);u.fragment&&u.fragment.l(h),h.forEach(pt)}else u.fragment&&u.fragment.c();t.intro&&vt(e.$$.fragment),de(e,t.target,t.anchor,t.customElement),Go()}Fe(c)}class us{$destroy(){pe(this,1),this.$destroy=j}$on(t,n){if(!on(n))return j;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(t){this.$$set&&!Eu(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Xo=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Gu=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},Yo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,l=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|u>>6,d=u&63;c||(d=64,o||(f=64)),s.push(n[l],n[h],n[f],n[d])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Xo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Gu(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||u==null||h==null)throw Error();const f=r<<2|a>>4;if(s.push(f),u!==64){const d=a<<4&240|u>>2;if(s.push(d),h!==64){const p=u<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Qu=function(e){const t=Xo(e);return Yo.encodeByteArray(t,!0)},Bn=function(e){return Qu(e).replace(/\./g,"")},Wu=function(e){try{return Yo.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Xu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Yu=()=>Xu().__FIREBASE_DEFAULTS__,Ju=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Zu=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Wu(e[1]);return t&&JSON.parse(t)},Jo=()=>{try{return Yu()||Ju()||Zu()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},tl=e=>{var t,n;return(n=(t=Jo())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},el=e=>{const t=tl(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},nl=()=>{var e;return(e=Jo())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function il(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Bn(JSON.stringify(n)),Bn(JSON.stringify(o)),a].join(".")}function rl(){try{return typeof indexedDB=="object"}catch{return!1}}function ol(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al="FirebaseError";class Se extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=al,Object.setPrototypeOf(this,Se.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zo.prototype.create)}}class Zo{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?cl(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Se(i,a,s)}}function cl(e,t){return e.replace(ul,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const ul=/\{\$([^}]+)}/g;function si(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(Mr(r)&&Mr(o)){if(!si(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Mr(e){return e!==null&&typeof e=="object"}/**
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
 */function Ot(e){return e&&e._delegate?e._delegate:e}class He{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const $t="[DEFAULT]";/**
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
 */class ll{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new sl;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(fl(t))try{this.getOrInitializeService({instanceIdentifier:$t})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=$t){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=$t){return this.instances.has(t)}getOptions(t=$t){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:hl(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=$t){return this.component?this.component.multipleInstances?t:$t:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hl(e){return e===$t?void 0:e}function fl(e){return e.instantiationMode==="EAGER"}/**
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
 */class dl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ll(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(x||(x={}));const pl={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},gl=x.INFO,ml={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},yl=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=ml[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ta{constructor(t){this.name=t,this._logLevel=gl,this._logHandler=yl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in x))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?pl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...t),this._logHandler(this,x.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...t),this._logHandler(this,x.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,x.INFO,...t),this._logHandler(this,x.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,x.WARN,...t),this._logHandler(this,x.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...t),this._logHandler(this,x.ERROR,...t)}}const vl=(e,t)=>t.some(n=>e instanceof n);let Pr,Fr;function wl(){return Pr||(Pr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function El(){return Fr||(Fr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ea=new WeakMap,ii=new WeakMap,na=new WeakMap,Bs=new WeakMap,Vi=new WeakMap;function Tl(e){const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(xt(e.result)),i()},o=()=>{s(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&ea.set(n,e)}).catch(()=>{}),Vi.set(t,e),t}function _l(e){if(ii.has(e))return;const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});ii.set(e,t)}let ri={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ii.get(e);if(t==="objectStoreNames")return e.objectStoreNames||na.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function bl(e){ri=e(ri)}function Il(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(qs(this),t,...n);return na.set(s,t.sort?t.sort():[t]),xt(s)}:El().includes(e)?function(...t){return e.apply(qs(this),t),xt(ea.get(this))}:function(...t){return xt(e.apply(qs(this),t))}}function Sl(e){return typeof e=="function"?Il(e):(e instanceof IDBTransaction&&_l(e),vl(e,wl())?new Proxy(e,ri):e)}function xt(e){if(e instanceof IDBRequest)return Tl(e);if(Bs.has(e))return Bs.get(e);const t=Sl(e);return t!==e&&(Bs.set(e,t),Vi.set(t,e)),t}const qs=e=>Vi.get(e);function Cl(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(e,t),a=xt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(xt(o.result),c.oldVersion,c.newVersion,xt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Al=["get","getKey","getAll","getAllKeys","count"],Dl=["put","add","delete","clear"],js=new Map;function Vr(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(js.get(t))return js.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=Dl.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Al.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return js.set(t,r),r}bl(e=>({...e,get:(t,n,s)=>Vr(t,n)||e.get(t,n,s),has:(t,n)=>!!Vr(t,n)||e.has(t,n)}));/**
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
 */class kl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nl(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Nl(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const oi="@firebase/app",$r="0.9.1";/**
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
 */const Qt=new ta("@firebase/app"),xl="@firebase/app-compat",Rl="@firebase/analytics-compat",Ol="@firebase/analytics",Ll="@firebase/app-check-compat",Ml="@firebase/app-check",Pl="@firebase/auth",Fl="@firebase/auth-compat",Vl="@firebase/database",$l="@firebase/database-compat",Ul="@firebase/functions",Bl="@firebase/functions-compat",ql="@firebase/installations",jl="@firebase/installations-compat",Kl="@firebase/messaging",Hl="@firebase/messaging-compat",zl="@firebase/performance",Gl="@firebase/performance-compat",Ql="@firebase/remote-config",Wl="@firebase/remote-config-compat",Xl="@firebase/storage",Yl="@firebase/storage-compat",Jl="@firebase/firestore",Zl="@firebase/firestore-compat",th="firebase",eh="9.16.0";/**
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
 */const ai="[DEFAULT]",nh={[oi]:"fire-core",[xl]:"fire-core-compat",[Ol]:"fire-analytics",[Rl]:"fire-analytics-compat",[Ml]:"fire-app-check",[Ll]:"fire-app-check-compat",[Pl]:"fire-auth",[Fl]:"fire-auth-compat",[Vl]:"fire-rtdb",[$l]:"fire-rtdb-compat",[Ul]:"fire-fn",[Bl]:"fire-fn-compat",[ql]:"fire-iid",[jl]:"fire-iid-compat",[Kl]:"fire-fcm",[Hl]:"fire-fcm-compat",[zl]:"fire-perf",[Gl]:"fire-perf-compat",[Ql]:"fire-rc",[Wl]:"fire-rc-compat",[Xl]:"fire-gcs",[Yl]:"fire-gcs-compat",[Jl]:"fire-fst",[Zl]:"fire-fst-compat","fire-js":"fire-js",[th]:"fire-js-all"};/**
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
 */const qn=new Map,ci=new Map;function sh(e,t){try{e.container.addComponent(t)}catch(n){Qt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function jn(e){const t=e.name;if(ci.has(t))return Qt.debug(`There were multiple attempts to register component ${t}.`),!1;ci.set(t,e);for(const n of qn.values())sh(n,e);return!0}function ih(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const rh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rt=new Zo("app","Firebase",rh);/**
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
 */class oh{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new He("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
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
 */const ah=eh;function sa(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:ai,automaticDataCollectionEnabled:!1},t),i=s.name;if(typeof i!="string"||!i)throw Rt.create("bad-app-name",{appName:String(i)});if(n||(n=nl()),!n)throw Rt.create("no-options");const r=qn.get(i);if(r){if(si(n,r.options)&&si(s,r.config))return r;throw Rt.create("duplicate-app",{appName:i})}const o=new dl(i);for(const c of ci.values())o.addComponent(c);const a=new oh(n,s,o);return qn.set(i,a),a}function ch(e=ai){const t=qn.get(e);if(!t&&e===ai)return sa();if(!t)throw Rt.create("no-app",{appName:e});return t}function ce(e,t,n){var s;let i=(s=nh[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Qt.warn(a.join(" "));return}jn(new He(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const uh="firebase-heartbeat-database",lh=1,ze="firebase-heartbeat-store";let Ks=null;function ia(){return Ks||(Ks=Cl(uh,lh,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ze)}}}).catch(e=>{throw Rt.create("idb-open",{originalErrorMessage:e.message})})),Ks}async function hh(e){try{return(await ia()).transaction(ze).objectStore(ze).get(ra(e))}catch(t){if(t instanceof Se)Qt.warn(t.message);else{const n=Rt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Qt.warn(n.message)}}}async function Ur(e,t){try{const s=(await ia()).transaction(ze,"readwrite");return await s.objectStore(ze).put(t,ra(e)),s.done}catch(n){if(n instanceof Se)Qt.warn(n.message);else{const s=Rt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qt.warn(s.message)}}}function ra(e){return`${e.name}!${e.options.appId}`}/**
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
 */const fh=1024,dh=30*24*60*60*1e3;class ph{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Br();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=dh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Br(),{heartbeatsToSend:n,unsentEntries:s}=gh(this._heartbeatsCache.heartbeats),i=Bn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Br(){return new Date().toISOString().substring(0,10)}function gh(e,t=fh){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),qr(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qr(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class mh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rl()?ol().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await hh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ur(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ur(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function qr(e){return Bn(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function yh(e){jn(new He("platform-logger",t=>new kl(t),"PRIVATE")),jn(new He("heartbeat",t=>new ph(t),"PRIVATE")),ce(oi,$r,e),ce(oi,$r,"esm2017"),ce("fire-js","")}yh("");var vh="firebase",wh="9.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ce(vh,wh,"app");var Eh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w,$i=$i||{},I=Eh||self;function Kn(){}function ls(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function cn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Th(e){return Object.prototype.hasOwnProperty.call(e,Hs)&&e[Hs]||(e[Hs]=++_h)}var Hs="closure_uid_"+(1e9*Math.random()>>>0),_h=0;function bh(e,t,n){return e.call.apply(e.bind,arguments)}function Ih(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function nt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?nt=bh:nt=Ih,nt.apply(null,arguments)}function Sn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function J(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function Ft(){this.s=this.s,this.o=this.o}var Sh=0;Ft.prototype.s=!1;Ft.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Sh!=0)&&Th(this)};Ft.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const oa=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ui(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function jr(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ls(s)){const i=e.length||0,r=s.length||0;e.length=i+r;for(let o=0;o<r;o++)e[i+o]=s[o]}else e.push(s)}}function st(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var Ch=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{I.addEventListener("test",Kn,t),I.removeEventListener("test",Kn,t)}catch{}return e}();function Hn(e){return/^[\s\xa0]*$/.test(e)}var Kr=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function zs(e,t){return e<t?-1:e>t?1:0}function hs(){var e=I.navigator;return e&&(e=e.userAgent)?e:""}function mt(e){return hs().indexOf(e)!=-1}function Bi(e){return Bi[" "](e),e}Bi[" "]=Kn;function Ah(e){var t=Nh;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Dh=mt("Opera"),ge=mt("Trident")||mt("MSIE"),aa=mt("Edge"),ui=aa||ge,ca=mt("Gecko")&&!(hs().toLowerCase().indexOf("webkit")!=-1&&!mt("Edge"))&&!(mt("Trident")||mt("MSIE"))&&!mt("Edge"),kh=hs().toLowerCase().indexOf("webkit")!=-1&&!mt("Edge");function ua(){var e=I.document;return e?e.documentMode:void 0}var zn;t:{var Gs="",Qs=function(){var e=hs();if(ca)return/rv:([^\);]+)(\)|;)/.exec(e);if(aa)return/Edge\/([\d\.]+)/.exec(e);if(ge)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(kh)return/WebKit\/(\S+)/.exec(e);if(Dh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Qs&&(Gs=Qs?Qs[1]:""),ge){var Ws=ua();if(Ws!=null&&Ws>parseFloat(Gs)){zn=String(Ws);break t}}zn=Gs}var Nh={};function xh(){return Ah(function(){let e=0;const t=Kr(String(zn)).split("."),n=Kr("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=zs(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||zs(i[2].length==0,r[2].length==0)||zs(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var li;if(I.document&&ge){var Hr=ua();li=Hr||parseInt(zn,10)||void 0}else li=void 0;var Rh=li;function Ge(e,t){if(st.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(ca){t:{try{Bi(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Oh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ge.X.h.call(this)}}J(Ge,st);var Oh={2:"touch",3:"pen",4:"mouse"};Ge.prototype.h=function(){Ge.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var un="closure_listenable_"+(1e6*Math.random()|0),Lh=0;function Mh(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=i,this.key=++Lh,this.ba=this.ea=!1}function fs(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function qi(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function la(e){const t={};for(const n in e)t[n]=e[n];return t}const zr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ha(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<zr.length;r++)n=zr[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function ds(e){this.src=e,this.g={},this.h=0}ds.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=fi(e,t,s,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new Mh(t,this.src,r,!!s,i),t.ea=n,e.push(t)),t};function hi(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=oa(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(fs(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function fi(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ba&&r.listener==t&&r.capture==!!n&&r.ha==s)return i}return-1}var ji="closure_lm_"+(1e6*Math.random()|0),Xs={};function fa(e,t,n,s,i){if(s&&s.once)return pa(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)fa(e,t[r],n,s,i);return null}return n=zi(n),e&&e[un]?e.N(t,n,cn(s)?!!s.capture:!!s,i):da(e,t,n,!1,s,i)}function da(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=cn(i)?!!i.capture:!!i,a=Hi(e);if(a||(e[ji]=a=new ds(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=Ph(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Ch||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(ma(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ph(){function e(n){return t.call(e.src,e.listener,n)}const t=Fh;return e}function pa(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)pa(e,t[r],n,s,i);return null}return n=zi(n),e&&e[un]?e.O(t,n,cn(s)?!!s.capture:!!s,i):da(e,t,n,!0,s,i)}function ga(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)ga(e,t[r],n,s,i);else s=cn(s)?!!s.capture:!!s,n=zi(n),e&&e[un]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=fi(r,n,s,i),-1<n&&(fs(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Hi(e))&&(t=e.g[t.toString()],e=-1,t&&(e=fi(t,n,s,i)),(n=-1<e?t[e]:null)&&Ki(n))}function Ki(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[un])hi(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(ma(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Hi(t))?(hi(n,e),n.h==0&&(n.src=null,t[ji]=null)):fs(e)}}}function ma(e){return e in Xs?Xs[e]:Xs[e]="on"+e}function Fh(e,t){if(e.ba)e=!0;else{t=new Ge(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&Ki(e),e=n.call(s,t)}return e}function Hi(e){return e=e[ji],e instanceof ds?e:null}var Ys="__closure_events_fn_"+(1e9*Math.random()>>>0);function zi(e){return typeof e=="function"?e:(e[Ys]||(e[Ys]=function(t){return e.handleEvent(t)}),e[Ys])}function W(){Ft.call(this),this.i=new ds(this),this.P=this,this.I=null}J(W,Ft);W.prototype[un]=!0;W.prototype.removeEventListener=function(e,t,n,s){ga(this,e,t,n,s)};function Y(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new st(t,e);else if(t instanceof st)t.target=t.target||e;else{var i=t;t=new st(s,e),ha(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=Cn(o,s,!0,t)&&i}if(o=t.g=e,i=Cn(o,s,!0,t)&&i,i=Cn(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=Cn(o,s,!1,t)&&i}W.prototype.M=function(){if(W.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)fs(n[s]);delete e.g[t],e.h--}}this.I=null};W.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};W.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Cn(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&hi(e.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Gi=I.JSON.stringify;function Vh(){var e=wa;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class $h{constructor(){this.h=this.g=null}add(t,n){const s=ya.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var ya=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Uh,e=>e.reset());class Uh{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Bh(e){I.setTimeout(()=>{throw e},0)}function va(e,t){di||qh(),pi||(di(),pi=!0),wa.add(e,t)}var di;function qh(){var e=I.Promise.resolve(void 0);di=function(){e.then(jh)}}var pi=!1,wa=new $h;function jh(){for(var e;e=Vh();){try{e.h.call(e.g)}catch(n){Bh(n)}var t=ya;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}pi=!1}function ps(e,t){W.call(this),this.h=e||1,this.g=t||I,this.j=nt(this.lb,this),this.l=Date.now()}J(ps,W);w=ps.prototype;w.ca=!1;w.R=null;w.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Y(this,"tick"),this.ca&&(Qi(this),this.start()))}};w.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Qi(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}w.M=function(){ps.X.M.call(this),Qi(this),delete this.g};function Wi(e,t,n){if(typeof e=="function")n&&(e=nt(e,n));else if(e&&typeof e.handleEvent=="function")e=nt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:I.setTimeout(e,t||0)}function Ea(e){e.g=Wi(()=>{e.g=null,e.i&&(e.i=!1,Ea(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Kh extends Ft{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ea(this)}M(){super.M(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qe(e){Ft.call(this),this.h=e,this.g={}}J(Qe,Ft);var Gr=[];function Ta(e,t,n,s){Array.isArray(n)||(n&&(Gr[0]=n.toString()),n=Gr);for(var i=0;i<n.length;i++){var r=fa(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function _a(e){qi(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ki(t)},e),e.g={}}Qe.prototype.M=function(){Qe.X.M.call(this),_a(this)};Qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function gs(){this.g=!0}gs.prototype.Aa=function(){this.g=!1};function Hh(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function zh(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function oe(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Qh(e,n)+(s?" "+s:"")})}function Gh(e,t){e.info(function(){return"TIMEOUT: "+t})}gs.prototype.info=function(){};function Qh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Gi(n)}catch{return t}}var Yt={},Qr=null;function ms(){return Qr=Qr||new W}Yt.Pa="serverreachability";function ba(e){st.call(this,Yt.Pa,e)}J(ba,st);function We(e){const t=ms();Y(t,new ba(t))}Yt.STAT_EVENT="statevent";function Ia(e,t){st.call(this,Yt.STAT_EVENT,e),this.stat=t}J(Ia,st);function ot(e){const t=ms();Y(t,new Ia(t,e))}Yt.Qa="timingevent";function Sa(e,t){st.call(this,Yt.Qa,e),this.size=t}J(Sa,st);function ln(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){e()},t)}var ys={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Ca={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Xi(){}Xi.prototype.h=null;function Wr(e){return e.h||(e.h=e.i())}function Aa(){}var hn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Yi(){st.call(this,"d")}J(Yi,st);function Ji(){st.call(this,"c")}J(Ji,st);var gi;function vs(){}J(vs,Xi);vs.prototype.g=function(){return new XMLHttpRequest};vs.prototype.i=function(){return{}};gi=new vs;function fn(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new Qe(this),this.O=Wh,e=ui?125:void 0,this.T=new ps(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Da}function Da(){this.i=null,this.g="",this.h=!1}var Wh=45e3,mi={},Gn={};w=fn.prototype;w.setTimeout=function(e){this.O=e};function yi(e,t,n){e.K=1,e.v=Es(It(t)),e.s=n,e.P=!0,ka(e,null)}function ka(e,t){e.F=Date.now(),dn(e),e.A=It(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),Fa(n.i,"t",s),e.C=0,n=e.l.H,e.h=new Da,e.g=ic(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Kh(nt(e.La,e,e.g),e.N)),Ta(e.S,e.g,"readystatechange",e.ib),t=e.H?la(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),We(),Hh(e.j,e.u,e.A,e.m,e.U,e.s)}w.ib=function(e){e=e.target;const t=this.L;t&&Tt(e)==3?t.l():this.La(e)};w.La=function(e){try{if(e==this.g)t:{const l=Tt(this.g);var t=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||ui||this.g&&(this.h.h||this.g.fa()||Zr(this.g)))){this.I||l!=4||t==7||(t==8||0>=h?We(3):We(2)),ws(this);var n=this.g.aa();this.Y=n;e:if(Na(this)){var s=Zr(this.g);e="";var i=s.length,r=Tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ut(this),Ve(this);var o="";break e}this.h.i=new I.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,zh(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Hn(a)){var u=a;break e}}u=null}if(n=u)oe(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,vi(this,n);else{this.i=!1,this.o=3,ot(12),Ut(this),Ve(this);break t}}this.P?(xa(this,l,o),ui&&this.i&&l==3&&(Ta(this.S,this.T,"tick",this.hb),this.T.start())):(oe(this.j,this.m,o,null),vi(this,o)),l==4&&Ut(this),this.i&&!this.I&&(l==4?tc(this.l,this):(this.i=!1,dn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ot(12)):(this.o=0,ot(13)),Ut(this),Ve(this)}}}catch{}finally{}};function Na(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function xa(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=Xh(e,n),i==Gn){t==4&&(e.o=4,ot(14),s=!1),oe(e.j,e.m,null,"[Incomplete Response]");break}else if(i==mi){e.o=4,ot(15),oe(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else oe(e.j,e.m,i,null),vi(e,i);Na(e)&&i!=Gn&&i!=mi&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,ot(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),rr(t),t.K=!0,ot(11))):(oe(e.j,e.m,n,"[Invalid Chunked Response]"),Ut(e),Ve(e))}w.hb=function(){if(this.g){var e=Tt(this.g),t=this.g.fa();this.C<t.length&&(ws(this),xa(this,e,t),this.i&&e!=4&&dn(this))}};function Xh(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Gn:(n=Number(t.substring(n,s)),isNaN(n)?mi:(s+=1,s+n>t.length?Gn:(t=t.substr(s,n),e.C=s+n,t)))}w.cancel=function(){this.I=!0,Ut(this)};function dn(e){e.V=Date.now()+e.O,Ra(e,e.O)}function Ra(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=ln(nt(e.gb,e),t)}function ws(e){e.B&&(I.clearTimeout(e.B),e.B=null)}w.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Gh(this.j,this.A),this.K!=2&&(We(),ot(17)),Ut(this),this.o=2,Ve(this)):Ra(this,this.V-e)};function Ve(e){e.l.G==0||e.I||tc(e.l,e)}function Ut(e){ws(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Qi(e.T),_a(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function vi(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||wi(n.h,e))){if(!e.J&&wi(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Xn(n),bs(n);else break t;ir(n),ot(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=ln(nt(n.cb,n),6e3));if(1>=Ua(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Bt(n,11)}else if((e.J||n.g==e)&&Xn(n),!Hn(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=e.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=s.h;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Zi(r,r.h),r.h=null))}if(s.D){const y=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.za=y,M(s.F,s.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=sc(s,s.H?s.ka:null,s.V),o.J){Ba(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(ws(a),dn(a)),s.g=o}else Ja(s);0<n.i.length&&Is(n)}else u[0]!="stop"&&u[0]!="close"||Bt(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Bt(n,7):sr(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}We(4)}catch{}}function Yh(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(ls(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Jh(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(ls(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function Oa(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(ls(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Jh(e),s=Yh(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}var La=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zh(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ht(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ht){this.h=t!==void 0?t:e.h,Qn(this,e.j),this.s=e.s,this.g=e.g,Wn(this,e.m),this.l=e.l,t=e.i;var n=new Xe;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Xr(this,n),this.o=e.o}else e&&(n=String(e).match(La))?(this.h=!!t,Qn(this,n[1]||"",!0),this.s=Oe(n[2]||""),this.g=Oe(n[3]||"",!0),Wn(this,n[4]),this.l=Oe(n[5]||"",!0),Xr(this,n[6]||"",!0),this.o=Oe(n[7]||"")):(this.h=!!t,this.i=new Xe(null,this.h))}Ht.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Le(t,Yr,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Le(t,Yr,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Le(n,n.charAt(0)=="/"?nf:ef,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Le(n,rf)),e.join("")};function It(e){return new Ht(e)}function Qn(e,t,n){e.j=n?Oe(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Wn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Xr(e,t,n){t instanceof Xe?(e.i=t,of(e.i,e.h)):(n||(t=Le(t,sf)),e.i=new Xe(t,e.h))}function M(e,t,n){e.i.set(t,n)}function Es(e){return M(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Oe(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Le(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,tf),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tf(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Yr=/[#\/\?@]/g,ef=/[#\?:]/g,nf=/[#\?]/g,sf=/[#\?@]/g,rf=/#/g;function Xe(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Vt(e){e.g||(e.g=new Map,e.h=0,e.i&&Zh(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}w=Xe.prototype;w.add=function(e,t){Vt(this),this.i=null,e=Ce(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Ma(e,t){Vt(e),t=Ce(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Pa(e,t){return Vt(e),t=Ce(e,t),e.g.has(t)}w.forEach=function(e,t){Vt(this),this.g.forEach(function(n,s){n.forEach(function(i){e.call(t,i,s,this)},this)},this)};w.oa=function(){Vt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let r=0;r<i.length;r++)n.push(t[s])}return n};w.W=function(e){Vt(this);let t=[];if(typeof e=="string")Pa(this,e)&&(t=t.concat(this.g.get(Ce(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};w.set=function(e,t){return Vt(this),this.i=null,e=Ce(this,e),Pa(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};w.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function Fa(e,t,n){Ma(e,t),0<n.length&&(e.i=null,e.g.set(Ce(e,t),Ui(n)),e.h+=n.length)}w.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),e.push(i)}}return this.i=e.join("&")};function Ce(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function of(e,t){t&&!e.j&&(Vt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Ma(this,s),Fa(this,i,n))},e)),e.j=t}var af=class{constructor(e,t){this.h=e,this.g=t}};function Va(e){this.l=e||cf,I.PerformanceNavigationTiming?(e=I.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(I.g&&I.g.Ga&&I.g.Ga()&&I.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cf=10;function $a(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Ua(e){return e.h?1:e.g?e.g.size:0}function wi(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Zi(e,t){e.g?e.g.add(t):e.h=t}function Ba(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Va.prototype.cancel=function(){if(this.i=qa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function qa(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Ui(e.i)}function tr(){}tr.prototype.stringify=function(e){return I.JSON.stringify(e,void 0)};tr.prototype.parse=function(e){return I.JSON.parse(e,void 0)};function uf(){this.g=new tr}function lf(e,t,n){const s=n||"";try{Oa(e,function(i,r){let o=i;cn(i)&&(o=Gi(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function hf(e,t){const n=new gs;if(I.Image){const s=new Image;s.onload=Sn(An,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Sn(An,n,s,"TestLoadImage: error",!1,t),s.onabort=Sn(An,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Sn(An,n,s,"TestLoadImage: timeout",!1,t),I.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function An(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function pn(e){this.l=e.ac||null,this.j=e.jb||!1}J(pn,Xi);pn.prototype.g=function(){return new Ts(this.l,this.j)};pn.prototype.i=function(e){return function(){return e}}({});function Ts(e,t){W.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=er,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}J(Ts,W);var er=0;w=Ts.prototype;w.open=function(e,t){if(this.readyState!=er)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ye(this)};w.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||I).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};w.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gn(this)),this.readyState=er};w.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ye(this)),this.g&&(this.readyState=3,Ye(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof I.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ja(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function ja(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}w.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?gn(this):Ye(this),this.readyState==3&&ja(this)}};w.Va=function(e){this.g&&(this.response=this.responseText=e,gn(this))};w.Ua=function(e){this.g&&(this.response=e,gn(this))};w.ga=function(){this.g&&gn(this)};function gn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ye(e)}w.setRequestHeader=function(e,t){this.v.append(e,t)};w.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};w.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ye(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Ts.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var ff=I.JSON.parse;function $(e){W.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ka,this.K=this.L=!1}J($,W);var Ka="",df=/^https?$/i,pf=["POST","PUT"];w=$.prototype;w.Ka=function(e){this.L=e};w.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():gi.g(),this.C=this.u?Wr(this.u):Wr(gi),this.g.onreadystatechange=nt(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){Jr(this,r);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=I.FormData&&e instanceof I.FormData,!(0<=oa(pf,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ga(this),0<this.B&&((this.K=gf(this.g))?(this.g.timeout=this.B,this.g.ontimeout=nt(this.qa,this)):this.A=Wi(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Jr(this,r)}};function gf(e){return ge&&xh()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}w.qa=function(){typeof $i<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Y(this,"timeout"),this.abort(8))};function Jr(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ha(e),_s(e)}function Ha(e){e.D||(e.D=!0,Y(e,"complete"),Y(e,"error"))}w.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Y(this,"complete"),Y(this,"abort"),_s(this))};w.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_s(this,!0)),$.X.M.call(this)};w.Ha=function(){this.s||(this.F||this.v||this.l?za(this):this.fb())};w.fb=function(){za(this)};function za(e){if(e.h&&typeof $i<"u"&&(!e.C[1]||Tt(e)!=4||e.aa()!=2)){if(e.v&&Tt(e)==4)Wi(e.Ha,0,e);else if(Y(e,"readystatechange"),Tt(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(La)[1]||null;if(!i&&I.self&&I.self.location){var r=I.self.location.protocol;i=r.substr(0,r.length-1)}s=!df.test(i?i.toLowerCase():"")}n=s}if(n)Y(e,"complete"),Y(e,"success");else{e.m=6;try{var o=2<Tt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",Ha(e)}}finally{_s(e)}}}}function _s(e,t){if(e.g){Ga(e);const n=e.g,s=e.C[0]?Kn:null;e.g=null,e.C=null,t||Y(e,"ready");try{n.onreadystatechange=s}catch{}}}function Ga(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(I.clearTimeout(e.A),e.A=null)}function Tt(e){return e.g?e.g.readyState:0}w.aa=function(){try{return 2<Tt(this)?this.g.status:-1}catch{return-1}};w.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};w.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),ff(t)}};function Zr(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Ka:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}w.Ea=function(){return this.m};w.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Qa(e){let t="";return qi(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function nr(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Qa(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):M(e,t,n))}function Re(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Wa(e){this.Ca=0,this.i=[],this.j=new gs,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Re("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Re("baseRetryDelayMs",5e3,e),this.bb=Re("retryDelaySeedMs",1e4,e),this.$a=Re("forwardChannelMaxRetries",2,e),this.ta=Re("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Va(e&&e.concurrentRequestLimit),this.Fa=new uf,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}w=Wa.prototype;w.ma=8;w.G=1;function sr(e){if(Xa(e),e.G==3){var t=e.U++,n=It(e.F);M(n,"SID",e.I),M(n,"RID",t),M(n,"TYPE","terminate"),mn(e,n),t=new fn(e,e.j,t,void 0),t.K=2,t.v=Es(It(n)),n=!1,I.navigator&&I.navigator.sendBeacon&&(n=I.navigator.sendBeacon(t.v.toString(),"")),!n&&I.Image&&(new Image().src=t.v,n=!0),n||(t.g=ic(t.l,null),t.g.da(t.v)),t.F=Date.now(),dn(t)}nc(e)}function bs(e){e.g&&(rr(e),e.g.cancel(),e.g=null)}function Xa(e){bs(e),e.u&&(I.clearTimeout(e.u),e.u=null),Xn(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&I.clearTimeout(e.m),e.m=null)}function Is(e){$a(e.h)||e.m||(e.m=!0,va(e.Ja,e),e.C=0)}function mf(e,t){return Ua(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=ln(nt(e.Ja,e,t),ec(e,e.C)),e.C++,!0)}w.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new fn(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=la(r),ha(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Ya(this,i,t),n=It(this.F),M(n,"RID",e),M(n,"CVER",22),this.D&&M(n,"X-HTTP-Session-Id",this.D),mn(this,n),r&&(this.N?t="headers="+encodeURIComponent(String(Qa(r)))+"&"+t:this.o&&nr(n,this.o,r)),Zi(this.h,i),this.Ya&&M(n,"TYPE","init"),this.O?(M(n,"$req",t),M(n,"SID","null"),i.Z=!0,yi(i,n,null)):yi(i,n,t),this.G=2}}else this.G==3&&(e?to(this,e):this.i.length==0||$a(this.h)||to(this))};function to(e,t){var n;t?n=t.m:n=e.U++;const s=It(e.F);M(s,"SID",e.I),M(s,"RID",n),M(s,"AID",e.T),mn(e,s),e.o&&e.s&&nr(s,e.o,e.s),n=new fn(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Ya(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Zi(e.h,n),yi(n,s,t)}function mn(e,t){e.ia&&qi(e.ia,function(n,s){M(t,s,n)}),e.l&&Oa({},function(n,s){M(t,s,n)})}function Ya(e,t,n){n=Math.min(e.i.length,n);var s=e.l?nt(e.l.Ra,e.l,e):null;t:{var i=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let u=i[c].h;const l=i[c].g;if(u-=r,0>u)r=Math.max(0,i[c].h-100),a=!1;else try{lf(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function Ja(e){e.g||e.u||(e.Z=1,va(e.Ia,e),e.A=0)}function ir(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=ln(nt(e.Ia,e),ec(e,e.A)),e.A++,!0)}w.Ia=function(){if(this.u=null,Za(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=ln(nt(this.eb,this),e)}};w.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ot(10),bs(this),Za(this))};function rr(e){e.B!=null&&(I.clearTimeout(e.B),e.B=null)}function Za(e){e.g=new fn(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=It(e.sa);M(t,"RID","rpc"),M(t,"SID",e.I),M(t,"CI",e.L?"0":"1"),M(t,"AID",e.T),M(t,"TYPE","xmlhttp"),mn(e,t),e.o&&e.s&&nr(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Es(It(t)),n.s=null,n.P=!0,ka(n,e)}w.cb=function(){this.v!=null&&(this.v=null,bs(this),ir(this),ot(19))};function Xn(e){e.v!=null&&(I.clearTimeout(e.v),e.v=null)}function tc(e,t){var n=null;if(e.g==t){Xn(e),rr(e),e.g=null;var s=2}else if(wi(e.h,t))n=t.D,Ba(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=ms(),Y(s,new Sa(s,n)),Is(e)}else Ja(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(s==1&&mf(e,t)||s==2&&ir(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Bt(e,5);break;case 4:Bt(e,10);break;case 3:Bt(e,6);break;default:Bt(e,2)}}}function ec(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Bt(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=nt(e.kb,e);n||(n=new Ht("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||Qn(n,"https"),Es(n)),hf(n.toString(),s)}else ot(2);e.G=0,e.l&&e.l.va(t),nc(e),Xa(e)}w.kb=function(e){e?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function nc(e){if(e.G=0,e.la=[],e.l){const t=qa(e.h);(t.length!=0||e.i.length!=0)&&(jr(e.la,t),jr(e.la,e.i),e.h.i.length=0,Ui(e.i),e.i.length=0),e.l.ua()}}function sc(e,t,n){var s=n instanceof Ht?It(n):new Ht(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),Wn(s,s.m);else{var i=I.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new Ht(null,void 0);s&&Qn(r,s),t&&(r.g=t),i&&Wn(r,i),n&&(r.l=n),s=r}return n=e.D,t=e.za,n&&t&&M(s,n,t),M(s,"VER",e.ma),mn(e,s),s}function ic(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new $(new pn({jb:!0})):new $(e.ra),t.Ka(e.H),t}function rc(){}w=rc.prototype;w.xa=function(){};w.wa=function(){};w.va=function(){};w.ua=function(){};w.Ra=function(){};function Yn(){if(ge&&!(10<=Number(Rh)))throw Error("Environmental error: no available transport.")}Yn.prototype.g=function(e,t){return new lt(e,t)};function lt(e,t){W.call(this),this.g=new Wa(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Hn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Hn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ae(this)}J(lt,W);lt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;ot(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=sc(e,null,e.V),Is(e)};lt.prototype.close=function(){sr(this.g)};lt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Gi(e),e=n);t.i.push(new af(t.ab++,e)),t.G==3&&Is(t)};lt.prototype.M=function(){this.g.l=null,delete this.j,sr(this.g),delete this.g,lt.X.M.call(this)};function oc(e){Yi.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}J(oc,Yi);function ac(){Ji.call(this),this.status=1}J(ac,Ji);function Ae(e){this.g=e}J(Ae,rc);Ae.prototype.xa=function(){Y(this.g,"a")};Ae.prototype.wa=function(e){Y(this.g,new oc(e))};Ae.prototype.va=function(e){Y(this.g,new ac)};Ae.prototype.ua=function(){Y(this.g,"b")};Yn.prototype.createWebChannel=Yn.prototype.g;lt.prototype.send=lt.prototype.u;lt.prototype.open=lt.prototype.m;lt.prototype.close=lt.prototype.close;ys.NO_ERROR=0;ys.TIMEOUT=8;ys.HTTP_ERROR=6;Ca.COMPLETE="complete";Aa.EventType=hn;hn.OPEN="a";hn.CLOSE="b";hn.ERROR="c";hn.MESSAGE="d";W.prototype.listen=W.prototype.N;$.prototype.listenOnce=$.prototype.O;$.prototype.getLastError=$.prototype.Oa;$.prototype.getLastErrorCode=$.prototype.Ea;$.prototype.getStatus=$.prototype.aa;$.prototype.getResponseJson=$.prototype.Sa;$.prototype.getResponseText=$.prototype.fa;$.prototype.send=$.prototype.da;$.prototype.setWithCredentials=$.prototype.Ka;var yf=function(){return new Yn},vf=function(){return ms()},Js=ys,wf=Ca,Ef=Yt,eo={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Tf=pn,Dn=Aa,_f=$;const no="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Z.UNAUTHENTICATED=new Z(null),Z.GOOGLE_CREDENTIALS=new Z("google-credentials-uid"),Z.FIRST_PARTY=new Z("first-party-uid"),Z.MOCK_USER=new Z("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let De="9.16.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new ta("@firebase/firestore");function so(){return Wt.logLevel}function E(e,...t){if(Wt.logLevel<=x.DEBUG){const n=t.map(or);Wt.debug(`Firestore (${De}): ${e}`,...n)}}function St(e,...t){if(Wt.logLevel<=x.ERROR){const n=t.map(or);Wt.error(`Firestore (${De}): ${e}`,...n)}}function Ei(e,...t){if(Wt.logLevel<=x.WARN){const n=t.map(or);Wt.warn(`Firestore (${De}): ${e}`,...n)}}function or(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function b(e="Unexpected state"){const t=`FIRESTORE (${De}) INTERNAL ASSERTION FAILED: `+e;throw St(t),new Error(t)}function L(e,t){e||b()}function A(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends Se{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class bf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Z.UNAUTHENTICATED))}shutdown(){}}class If{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Sf{constructor(t){this.t=t,this.currentUser=Z.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new zt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new zt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{E("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(E("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new zt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(E("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(L(typeof s.accessToken=="string"),new cc(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return L(t===null||typeof t=="string"),new Z(t)}}class Cf{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Z.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(L(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Af{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new Cf(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(Z.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Df{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kf{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=r=>{r.error!=null&&E("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,E("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{E("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):E("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(L(typeof n.token=="string"),this.A=n.token,new Df(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Nf(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function R(e,t){return e<t?-1:e>t?1:0}function me(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new _(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new _(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new _(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new _(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return H.fromMillis(Date.now())}static fromDate(t){return H.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new H(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?R(this.nanoseconds,t.nanoseconds):R(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.timestamp=t}static fromTimestamp(t){return new S(t)}static min(){return new S(new H(0,0))}static max(){return new S(new H(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t,n,s){n===void 0?n=0:n>t.length&&b(),s===void 0?s=t.length-n:s>t.length-n&&b(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Je.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Je?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class V extends Je{construct(t,n,s){return new V(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new _(m.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new V(n)}static emptyPath(){return new V([])}}const xf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends Je{construct(t,n,s){return new et(t,n,s)}static isValidIdentifier(t){return xf.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new _(m.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new _(m.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new _(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new _(m.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new et(n)}static emptyPath(){return new et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t){this.path=t}static fromPath(t){return new T(V.fromString(t))}static fromName(t){return new T(V.fromString(t).popFirst(5))}static empty(){return new T(V.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&V.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return V.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new T(new V(t.slice()))}}function Rf(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=S.fromTimestamp(s===1e9?new H(n+1,0):new H(n,s));return new Lt(i,T.empty(),t)}function Of(e){return new Lt(e.readTime,e.key,-1)}class Lt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Lt(S.min(),T.empty(),-1)}static max(){return new Lt(S.max(),T.empty(),-1)}}function Lf(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=T.comparator(e.documentKey,t.documentKey),n!==0?n:R(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yn(e){if(e.code!==m.FAILED_PRECONDITION||e.message!==Mf)throw e;E("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new g((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):g.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):g.reject(n)}static resolve(t){return new g((n,s)=>{n(t)})}static reject(t){return new g((n,s)=>{s(t)})}static waitFor(t){return new g((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(t){let n=g.resolve(!1);for(const s of t)n=n.next(i=>i?g.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(t,n){return new g((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;n(t[u]).next(l=>{o[u]=l,++a,a===r&&s(o)},l=>i(l))}})}static doWhile(t,n){return new g((s,i)=>{const r=()=>{t()===!0?n().next(()=>{r()},i):s()};r()})}}function vn(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class ar{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}ar.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(t,n,s,i,r,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ze{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ze("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ze&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Jt(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function lc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(e){return e==null}function Jn(e){return e===0&&1/e==-1/0}function Vf(e){return typeof e=="number"&&Number.isInteger(e)&&!Jn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new it(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new it(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return R(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}it.EMPTY_BYTE_STRING=new it("");const $f=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mt(e){if(L(!!e),typeof e=="string"){let t=0;const n=$f.exec(e);if(L(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:q(e.seconds),nanos:q(e.nanos)}}function q(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function ye(e){return typeof e=="string"?it.fromBase64String(e):it.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function fc(e){const t=e.mapValue.fields.__previous_value__;return hc(t)?fc(t):t}function tn(e){const t=Mt(e.mapValue.fields.__local_write_time__.timestampValue);return new H(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Xt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?hc(e)?4:Uf(e)?9007199254740991:10:b()}function wt(e,t){if(e===t)return!0;const n=Xt(e);if(n!==Xt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return tn(e).isEqual(tn(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Mt(s.timestampValue),o=Mt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return ye(s.bytesValue).isEqual(ye(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return q(s.geoPointValue.latitude)===q(i.geoPointValue.latitude)&&q(s.geoPointValue.longitude)===q(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return q(s.integerValue)===q(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=q(s.doubleValue),o=q(i.doubleValue);return r===o?Jn(r)===Jn(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return me(e.arrayValue.values||[],t.arrayValue.values||[],wt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(io(r)!==io(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!wt(r[a],o[a])))return!1;return!0}(e,t);default:return b()}}function en(e,t){return(e.values||[]).find(n=>wt(n,t))!==void 0}function ve(e,t){if(e===t)return 0;const n=Xt(e),s=Xt(t);if(n!==s)return R(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return R(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=q(i.integerValue||i.doubleValue),a=q(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return ro(e.timestampValue,t.timestampValue);case 4:return ro(tn(e),tn(t));case 5:return R(e.stringValue,t.stringValue);case 6:return function(i,r){const o=ye(i),a=ye(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=R(o[c],a[c]);if(u!==0)return u}return R(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=R(q(i.latitude),q(r.latitude));return o!==0?o:R(q(i.longitude),q(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=ve(o[c],a[c]);if(u)return u}return R(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===kn.mapValue&&r===kn.mapValue)return 0;if(i===kn.mapValue)return 1;if(r===kn.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=R(a[l],u[l]);if(h!==0)return h;const f=ve(o[a[l]],c[u[l]]);if(f!==0)return f}return R(a.length,u.length)}(e.mapValue,t.mapValue);default:throw b()}}function ro(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return R(e,t);const n=Mt(e),s=Mt(t),i=R(n.seconds,s.seconds);return i!==0?i:R(n.nanos,s.nanos)}function we(e){return Ti(e)}function Ti(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=Mt(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ye(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,T.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Ti(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Ti(s.fields[a])}`;return r+"}"}(e.mapValue):b();var t,n}function _i(e){return!!e&&"integerValue"in e}function cr(e){return!!e&&"arrayValue"in e}function oo(e){return!!e&&"nullValue"in e}function ao(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function On(e){return!!e&&"mapValue"in e}function $e(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Jt(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=$e(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=$e(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Uf(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Zn{constructor(t,n){this.position=t,this.inclusive=n}}function co(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=T.comparator(T.fromName(o.referenceValue),n.key):s=ve(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function uo(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!wt(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class dc{}class K extends dc{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new qf(t,n,s):n==="array-contains"?new Hf(t,s):n==="in"?new zf(t,s):n==="not-in"?new Gf(t,s):n==="array-contains-any"?new Qf(t,s):new K(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new jf(t,s):new Kf(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ve(n,this.value)):n!==null&&Xt(this.value)===Xt(n)&&this.matchesComparison(ve(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Et extends dc{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new Et(t,n)}matches(t){return pc(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function pc(e){return e.op==="and"}function gc(e){return Bf(e)&&pc(e)}function Bf(e){for(const t of e.filters)if(t instanceof Et)return!1;return!0}function bi(e){if(e instanceof K)return e.field.canonicalString()+e.op.toString()+we(e.value);if(gc(e))return e.filters.map(t=>bi(t)).join(",");{const t=e.filters.map(n=>bi(n)).join(",");return`${e.op}(${t})`}}function mc(e,t){return e instanceof K?function(n,s){return s instanceof K&&n.op===s.op&&n.field.isEqual(s.field)&&wt(n.value,s.value)}(e,t):e instanceof Et?function(n,s){return s instanceof Et&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&mc(r,s.filters[o]),!0):!1}(e,t):void b()}function yc(e){return e instanceof K?function(t){return`${t.field.canonicalString()} ${t.op} ${we(t.value)}`}(e):e instanceof Et?function(t){return t.op.toString()+" {"+t.getFilters().map(yc).join(" ,")+"}"}(e):"Filter"}class qf extends K{constructor(t,n,s){super(t,n,s),this.key=T.fromName(s.referenceValue)}matches(t){const n=T.comparator(t.key,this.key);return this.matchesComparison(n)}}class jf extends K{constructor(t,n){super(t,"in",n),this.keys=vc("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Kf extends K{constructor(t,n){super(t,"not-in",n),this.keys=vc("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function vc(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>T.fromName(s.referenceValue))}class Hf extends K{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return cr(n)&&en(n.arrayValue,this.value)}}class zf extends K{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&en(this.value.arrayValue,n)}}class Gf extends K{constructor(t,n){super(t,"not-in",n)}matches(t){if(en(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!en(this.value.arrayValue,n)}}class Qf extends K{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!cr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>en(this.value.arrayValue,s))}}/**
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
 */class Ue{constructor(t,n="asc"){this.field=t,this.dir=n}}function Wf(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t,n){this.comparator=t,this.root=n||X.EMPTY}insert(t,n){return new G(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,X.BLACK,null,null))}remove(t){return new G(this.comparator,this.root.remove(t,this.comparator).copy(null,null,X.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Nn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Nn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Nn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Nn(this.root,t,this.comparator,!0)}}class Nn{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class X{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:X.RED,this.left=i!=null?i:X.EMPTY,this.right=r!=null?r:X.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new X(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return X.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return X.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,X.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,X.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const t=this.left.check();if(t!==this.right.check())throw b();return t+(this.isRed()?0:1)}}X.EMPTY=null,X.RED=!0,X.BLACK=!1;X.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(e,t,n,s,i){return this}insert(e,t,n){return new X(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t){this.comparator=t,this.data=new G(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new lo(this.data.getIterator())}getIteratorFrom(t){return new lo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof z)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new z(this.comparator);return n.data=t,n}}class lo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.fields=t,t.sort(et.comparator)}static empty(){return new dt([])}unionWith(t){let n=new z(et.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new dt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return me(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.value=t}static empty(){return new ut({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!On(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=$e(n)}setAll(t){let n=et.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=$e(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());On(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return wt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];On(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){Jt(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new ut($e(this.value))}}function wc(e){const t=[];return Jt(e.fields,(n,s)=>{const i=new et([n]);if(On(s)){const r=wc(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new dt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t,n,s,i,r,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new tt(t,0,S.min(),S.min(),S.min(),ut.empty(),0)}static newFoundDocument(t,n,s,i){return new tt(t,1,n,S.min(),s,i,0)}static newNoDocument(t,n){return new tt(t,2,n,S.min(),S.min(),ut.empty(),0)}static newUnknownDocument(t,n){return new tt(t,3,n,S.min(),S.min(),ut.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(S.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ut.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Xf{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function ho(e,t=null,n=[],s=[],i=null,r=null,o=null){return new Xf(e,t,n,s,i,r,o)}function ur(e){const t=A(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>bi(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Ss(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>we(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>we(s)).join(",")),t.ft=n}return t.ft}function lr(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Wf(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!mc(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!uo(e.startAt,t.startAt)&&uo(e.endAt,t.endAt)}function Ii(e){return T.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function Yf(e,t,n,s,i,r,o,a){return new Cs(e,t,n,s,i,r,o,a)}function hr(e){return new Cs(e)}function fo(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Jf(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Zf(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function td(e){return e.collectionGroup!==null}function ue(e){const t=A(e);if(t.dt===null){t.dt=[];const n=Zf(t),s=Jf(t);if(n!==null&&s===null)n.isKeyField()||t.dt.push(new Ue(n)),t.dt.push(new Ue(et.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new Ue(et.keyField(),r))}}}return t.dt}function Ct(e){const t=A(e);if(!t._t)if(t.limitType==="F")t._t=ho(t.path,t.collectionGroup,ue(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of ue(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new Ue(r.field,o))}const s=t.endAt?new Zn(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Zn(t.startAt.position,t.startAt.inclusive):null;t._t=ho(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t._t}function Si(e,t,n){return new Cs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function As(e,t){return lr(Ct(e),Ct(t))&&e.limitType===t.limitType}function Ec(e){return`${ur(Ct(e))}|lt:${e.limitType}`}function Ci(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>yc(s)).join(", ")}]`),Ss(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>we(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>we(s)).join(",")),`Target(${n})`}(Ct(e))}; limitType=${e.limitType})`}function fr(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):T.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of ue(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=co(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,ue(n),s)||n.endAt&&!function(i,r,o){const a=co(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,ue(n),s))}(e,t)}function ed(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Tc(e){return(t,n)=>{let s=!1;for(const i of ue(e)){const r=nd(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function nd(e,t,n){const s=e.field.isKeyField()?T.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?ve(a,c):b()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return b()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jn(t)?"-0":t}}function bc(e){return{integerValue:""+e}}function sd(e,t){return Vf(t)?bc(t):_c(e,t)}/**
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
 */class Ds{constructor(){this._=void 0}}function id(e,t,n){return e instanceof ts?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof Ee?Sc(e,t):e instanceof nn?Cc(e,t):function(s,i){const r=Ic(s,i),o=po(r)+po(s.gt);return _i(r)&&_i(s.gt)?bc(o):_c(s.yt,o)}(e,t)}function rd(e,t,n){return e instanceof Ee?Sc(e,t):e instanceof nn?Cc(e,t):n}function Ic(e,t){return e instanceof es?_i(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class ts extends Ds{}class Ee extends Ds{constructor(t){super(),this.elements=t}}function Sc(e,t){const n=Ac(t);for(const s of e.elements)n.some(i=>wt(i,s))||n.push(s);return{arrayValue:{values:n}}}class nn extends Ds{constructor(t){super(),this.elements=t}}function Cc(e,t){let n=Ac(t);for(const s of e.elements)n=n.filter(i=>!wt(i,s));return{arrayValue:{values:n}}}class es extends Ds{constructor(t,n){super(),this.yt=t,this.gt=n}}function po(e){return q(e.integerValue||e.doubleValue)}function Ac(e){return cr(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(t,n){this.field=t,this.transform=n}}function ad(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Ee&&s instanceof Ee||n instanceof nn&&s instanceof nn?me(n.elements,s.elements,wt):n instanceof es&&s instanceof es?wt(n.gt,s.gt):n instanceof ts&&s instanceof ts}(e.transform,t.transform)}class cd{constructor(t,n){this.version=t,this.transformResults=n}}class _t{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new _t}static exists(t){return new _t(void 0,t)}static updateTime(t){return new _t(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ln(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class ks{}function Dc(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Nc(e.key,_t.none()):new Ns(e.key,e.data,_t.none());{const n=e.data,s=ut.empty();let i=new z(et.comparator);for(let r of t.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Zt(e.key,s,new dt(i.toArray()),_t.none())}}function ud(e,t,n){e instanceof Ns?function(s,i,r){const o=s.value.clone(),a=mo(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Zt?function(s,i,r){if(!Ln(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=mo(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(kc(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function Be(e,t,n,s){return e instanceof Ns?function(i,r,o,a){if(!Ln(i.precondition,r))return o;const c=i.value.clone(),u=yo(i.fieldTransforms,a,r);return c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof Zt?function(i,r,o,a){if(!Ln(i.precondition,r))return o;const c=yo(i.fieldTransforms,a,r),u=r.data;return u.setAll(kc(i)),u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(e,t,n,s):function(i,r,o){return Ln(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function ld(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=Ic(s.transform,i||null);r!=null&&(n===null&&(n=ut.empty()),n.set(s.field,r))}return n||null}function go(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&me(n,s,(i,r)=>ad(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Ns extends ks{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Zt extends ks{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function kc(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function mo(e,t,n){const s=new Map;L(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,rd(o,a,n[i]))}return s}function yo(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,id(r,o,t))}return s}class Nc extends ks{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hd extends ks{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B,N;function dd(e){switch(e){default:return b();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function xc(e){if(e===void 0)return St("GRPC error has no .code"),m.UNKNOWN;switch(e){case B.OK:return m.OK;case B.CANCELLED:return m.CANCELLED;case B.UNKNOWN:return m.UNKNOWN;case B.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case B.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case B.INTERNAL:return m.INTERNAL;case B.UNAVAILABLE:return m.UNAVAILABLE;case B.UNAUTHENTICATED:return m.UNAUTHENTICATED;case B.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case B.NOT_FOUND:return m.NOT_FOUND;case B.ALREADY_EXISTS:return m.ALREADY_EXISTS;case B.PERMISSION_DENIED:return m.PERMISSION_DENIED;case B.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case B.ABORTED:return m.ABORTED;case B.OUT_OF_RANGE:return m.OUT_OF_RANGE;case B.UNIMPLEMENTED:return m.UNIMPLEMENTED;case B.DATA_LOSS:return m.DATA_LOSS;default:return b()}}(N=B||(B={}))[N.OK=0]="OK",N[N.CANCELLED=1]="CANCELLED",N[N.UNKNOWN=2]="UNKNOWN",N[N.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",N[N.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",N[N.NOT_FOUND=5]="NOT_FOUND",N[N.ALREADY_EXISTS=6]="ALREADY_EXISTS",N[N.PERMISSION_DENIED=7]="PERMISSION_DENIED",N[N.UNAUTHENTICATED=16]="UNAUTHENTICATED",N[N.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",N[N.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",N[N.ABORTED=10]="ABORTED",N[N.OUT_OF_RANGE=11]="OUT_OF_RANGE",N[N.UNIMPLEMENTED=12]="UNIMPLEMENTED",N[N.INTERNAL=13]="INTERNAL",N[N.UNAVAILABLE=14]="UNAVAILABLE",N[N.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Jt(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return lc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd=new G(T.comparator);function At(){return pd}const Rc=new G(T.comparator);function Me(...e){let t=Rc;for(const n of e)t=t.insert(n.key,n);return t}function Oc(e){let t=Rc;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function qt(){return qe()}function Lc(){return qe()}function qe(){return new ke(e=>e.toString(),(e,t)=>e.isEqual(t))}const gd=new G(T.comparator),md=new z(T.comparator);function D(...e){let t=md;for(const n of e)t=t.add(n);return t}const yd=new z(R);function Mc(){return yd}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const i=new Map;return i.set(t,wn.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new xs(S.min(),i,Mc(),At(),D())}}class wn{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new wn(s,n,D(),D(),D())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t,n,s,i){this.It=t,this.removedTargetIds=n,this.key=s,this.Tt=i}}class Pc{constructor(t,n){this.targetId=t,this.Et=n}}class Fc{constructor(t,n,s=it.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class vo{constructor(){this.At=0,this.Rt=Eo(),this.bt=it.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(t){t.approximateByteSize()>0&&(this.vt=!0,this.bt=t)}Ct(){let t=D(),n=D(),s=D();return this.Rt.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:b()}}),new wn(this.bt,this.Pt,t,n,s)}xt(){this.vt=!1,this.Rt=Eo()}Nt(t,n){this.vt=!0,this.Rt=this.Rt.insert(t,n)}kt(t){this.vt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class vd{constructor(t){this.$t=t,this.Bt=new Map,this.Lt=At(),this.qt=wo(),this.Ut=new z(R)}Kt(t){for(const n of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(n,t.Tt):this.Qt(n,t.key,t.Tt);for(const n of t.removedTargetIds)this.Qt(n,t.key,t.Tt)}jt(t){this.forEachTarget(t,n=>{const s=this.Wt(n);switch(t.state){case 0:this.zt(n)&&s.Dt(t.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(t.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(t.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(t.resumeToken));break;default:b()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.zt(i)&&n(i)})}Jt(t){const n=t.targetId,s=t.Et.count,i=this.Yt(n);if(i){const r=i.target;if(Ii(r))if(s===0){const o=new T(r.path);this.Qt(n,o,tt.newNoDocument(o,S.min()))}else L(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(t){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&Ii(a.target)){const c=new T(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,tt.newNoDocument(c,t))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=D();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(t));const i=new xs(t,n,this.Ut,this.Lt,s);return this.Lt=At(),this.qt=wo(),this.Ut=new z(R),i}Gt(t,n){if(!this.zt(t))return;const s=this.te(t,n.key)?2:0;this.Wt(t).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(t))}Qt(t,n,s){if(!this.zt(t))return;const i=this.Wt(t);this.te(t,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(t)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(t){this.Bt.delete(t)}Xt(t){const n=this.Wt(t).Ct();return this.$t.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ot(t){this.Wt(t).Ot()}Wt(t){let n=this.Bt.get(t);return n||(n=new vo,this.Bt.set(t,n)),n}ee(t){let n=this.qt.get(t);return n||(n=new z(R),this.qt=this.qt.insert(t,n)),n}zt(t){const n=this.Yt(t)!==null;return n||E("WatchChangeAggregator","Detected inactive target",t),n}Yt(t){const n=this.Bt.get(t);return n&&n.Vt?null:this.$t.ne(t)}Ht(t){this.Bt.set(t,new vo),this.$t.getRemoteKeysForTarget(t).forEach(n=>{this.Qt(t,n,null)})}te(t,n){return this.$t.getRemoteKeysForTarget(t).has(n)}}function wo(){return new G(T.comparator)}function Eo(){return new G(T.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ed=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Td=(()=>({and:"AND",or:"OR"}))();class _d{constructor(t,n){this.databaseId=t,this.wt=n}}function ns(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Vc(e,t){return e.wt?t.toBase64():t.toUint8Array()}function bd(e,t){return ns(e,t.toTimestamp())}function yt(e){return L(!!e),S.fromTimestamp(function(t){const n=Mt(t);return new H(n.seconds,n.nanos)}(e))}function dr(e,t){return function(n){return new V(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function $c(e){const t=V.fromString(e);return L(jc(t)),t}function Ai(e,t){return dr(e.databaseId,t.path)}function Zs(e,t){const n=$c(t);if(n.get(1)!==e.databaseId.projectId)throw new _(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new _(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new T(Uc(n))}function Di(e,t){return dr(e.databaseId,t)}function Id(e){const t=$c(e);return t.length===4?V.emptyPath():Uc(t)}function ki(e){return new V(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Uc(e){return L(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function To(e,t,n){return{name:Ai(e,t),fields:n.value.mapValue.fields}}function Sd(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:b()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(c,u){return c.wt?(L(u===void 0||typeof u=="string"),it.fromBase64String(u||"")):(L(u===void 0||u instanceof Uint8Array),it.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?m.UNKNOWN:xc(c.code);return new _(u,c.message||"")}(o);n=new Fc(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=Zs(e,s.document.name),r=yt(s.document.updateTime),o=s.document.createTime?yt(s.document.createTime):S.min(),a=new ut({mapValue:{fields:s.document.fields}}),c=tt.newFoundDocument(i,r,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new Mn(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=Zs(e,s.document),r=s.readTime?yt(s.readTime):S.min(),o=tt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Mn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=Zs(e,s.document),r=s.removedTargetIds||[];n=new Mn([],r,i,null)}else{if(!("filter"in t))return b();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new fd(i),o=s.targetId;n=new Pc(o,r)}}return n}function Cd(e,t){let n;if(t instanceof Ns)n={update:To(e,t.key,t.value)};else if(t instanceof Nc)n={delete:Ai(e,t.key)};else if(t instanceof Zt)n={update:To(e,t.key,t.data),updateMask:Md(t.fieldMask)};else{if(!(t instanceof hd))return b();n={verify:Ai(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof ts)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ee)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof nn)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof es)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw b()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:bd(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:b()}(e,t.precondition)),n}function Ad(e,t){return e&&e.length>0?(L(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?yt(s.updateTime):yt(i);return r.isEqual(S.min())&&(r=yt(i)),new cd(r,s.transformResults||[])}(n,t))):[]}function Dd(e,t){return{documents:[Di(e,t.path)]}}function kd(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Di(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Di(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return qc(Et.create(c,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:ie(l.field),direction:Rd(l.dir)}}(u))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,u){return c.wt||Ss(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function Nd(e){let t=Id(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){L(s===1);const l=n.from[0];l.allDescendants?i=l.collectionId:t=t.child(l.collectionId)}let r=[];n.where&&(r=function(l){const h=Bc(l);return h instanceof Et&&gc(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Ue(re(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Ss(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new Zn(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new Zn(f,h)}(n.endAt)),Yf(t,i,o,r,a,"F",c,u)}function xd(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return b()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Bc(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=re(t.unaryFilter.field);return K.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=re(t.unaryFilter.field);return K.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=re(t.unaryFilter.field);return K.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=re(t.unaryFilter.field);return K.create(r,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(e):e.fieldFilter!==void 0?function(t){return K.create(re(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return Et.create(t.compositeFilter.filters.map(n=>Bc(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return b()}}(t.compositeFilter.op))}(e):b()}function Rd(e){return wd[e]}function Od(e){return Ed[e]}function Ld(e){return Td[e]}function ie(e){return{fieldPath:e.canonicalString()}}function re(e){return et.fromServerFormat(e.fieldPath)}function qc(e){return e instanceof K?function(t){if(t.op==="=="){if(ao(t.value))return{unaryFilter:{field:ie(t.field),op:"IS_NAN"}};if(oo(t.value))return{unaryFilter:{field:ie(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ao(t.value))return{unaryFilter:{field:ie(t.field),op:"IS_NOT_NAN"}};if(oo(t.value))return{unaryFilter:{field:ie(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ie(t.field),op:Od(t.op),value:t.value}}}(e):e instanceof Et?function(t){const n=t.getFilters().map(s=>qc(s));return n.length===1?n[0]:{compositeFilter:{op:Ld(t.op),filters:n}}}(e):b()}function Md(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function jc(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&ud(r,t,s[i])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Be(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Be(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Lc();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=Dc(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(S.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),D())}isEqual(t){return this.batchId===t.batchId&&me(this.mutations,t.mutations,(n,s)=>go(n,s))&&me(this.baseMutations,t.baseMutations,(n,s)=>go(n,s))}}class pr{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){L(t.mutations.length===s.length);let i=gd;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new pr(t,n,s,i)}}/**
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
 */class Fd{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Gt{constructor(t,n,s,i,r=S.min(),o=S.min(),a=it.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Gt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(t){this.ie=t}}function $d(e){const t=Nd({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Si(t,t.limit,"L"):t}/**
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
 */class Ud{constructor(){this.Je=new Bd}addToCollectionParentIndex(t,n){return this.Je.add(n),g.resolve()}getCollectionParents(t,n){return g.resolve(this.Je.getEntries(n))}addFieldIndex(t,n){return g.resolve()}deleteFieldIndex(t,n){return g.resolve()}getDocumentsMatchingTarget(t,n){return g.resolve(null)}getIndexType(t,n){return g.resolve(0)}getFieldIndexes(t,n){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,n){return g.resolve(Lt.min())}getMinOffsetFromCollectionGroup(t,n){return g.resolve(Lt.min())}updateCollectionGroup(t,n,s){return g.resolve()}updateIndexEntries(t,n){return g.resolve()}}class Bd{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new z(V.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new z(V.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Te(0)}static vn(){return new Te(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this.changes=new ke(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,tt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?g.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class jd{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t,n,s,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(s!==null&&Be(s.mutation,i,dt.empty(),H.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,D()).next(()=>s))}getLocalViewOfDocuments(t,n,s=D()){const i=qt();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,s).next(r=>{let o=Me();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=qt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,D()))}populateOverlays(t,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,i){let r=At();const o=qe(),a=qe();return n.forEach((c,u)=>{const l=s.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof Zt)?r=r.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Be(l.mutation,u,l.mutation.getFieldMask(),H.now())):o.set(u.key,dt.empty())}),this.recalculateAndSaveOverlays(t,r).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new jd(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const s=qe();let i=new G((o,a)=>o-a),r=D();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||dt.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(i.get(a.batchId)||D()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Lc();l.forEach(f=>{if(!r.has(f)){const d=Dc(n.get(f),s.get(f));d!==null&&h.set(f,d),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return g.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return T.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):td(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,i-r.size):g.resolve(qt());let a=-1,c=r;return o.next(u=>g.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(l)?g.resolve():this.remoteDocumentCache.getEntry(t,l).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(t,u,r)).next(()=>this.computeViews(t,c,u,D())).next(l=>({batchId:a,changes:Oc(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new T(n)).next(s=>{let i=Me();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const i=n.collectionGroup;let r=Me();return this.indexManager.getCollectionParents(t,i).next(o=>g.forEach(o,a=>{const c=function(u,l){return new Cs(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(u=>{u.forEach((l,h)=>{r=r.insert(l,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(t,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId))).next(r=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,tt.newInvalidDocument(u)))});let o=Me();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&Be(u.mutation,c,dt.empty(),H.now()),fr(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return g.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:yt(s.createTime)}),g.resolve()}getNamedQuery(t,n){return g.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(s){return{name:s.name,query:$d(s.bundledQuery),readTime:yt(s.readTime)}}(n)),g.resolve()}}/**
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
 */class zd{constructor(){this.overlays=new G(T.comparator),this.es=new Map}getOverlay(t,n){return g.resolve(this.overlays.get(n))}getOverlays(t,n){const s=qt();return g.forEach(n,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.oe(t,n,r)}),g.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),g.resolve()}getOverlaysForCollection(t,n,s){const i=qt(),r=n.length+1,o=new T(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return g.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new G((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=r.get(u.largestBatchId);l===null&&(l=qt(),r=r.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=qt(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return g.resolve(a)}oe(t,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Fd(n,s));let r=this.es.get(n);r===void 0&&(r=D(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){this.ns=new z(Q.ss),this.rs=new z(Q.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const s=new Q(t,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.cs(new Q(t,n))}hs(t,n){t.forEach(s=>this.removeReference(s,n))}ls(t){const n=new T(new V([])),s=new Q(n,t),i=new Q(n,t+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new T(new V([])),s=new Q(n,t),i=new Q(n,t+1);let r=D();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new Q(t,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Q{constructor(t,n){this.key=t,this._s=n}static ss(t,n){return T.comparator(t.key,n.key)||R(t._s,n._s)}static os(t,n){return R(t._s,n._s)||T.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new z(Q.ss)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Pd(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Q(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,n){return g.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return g.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Q(n,0),i=new Q(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),g.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new z(R);return n.forEach(i=>{const r=new Q(i,0),o=new Q(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),g.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;T.isDocumentKey(r)||(r=r.child(""));const o=new Q(new T(r),0);let a=new z(R);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c._s)),!0)},o),g.resolve(this.Is(a))}Is(t){const n=[];return t.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){L(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return g.forEach(n.mutations,i=>{const r=new Q(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.gs=s})}An(t){}containsKey(t,n){const s=new Q(n,0),i=this.gs.firstAfterOrEqual(s);return g.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(t){this.Es=t,this.docs=new G(T.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return g.resolve(s?s.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(t,n){let s=At();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():tt.newInvalidDocument(i))}),g.resolve(s)}getAllFromCollection(t,n,s){let i=At();const r=new T(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Lf(Of(c),s)<=0||(i=i.insert(c.key,c.mutableCopy()))}return g.resolve(i)}getAllFromCollectionGroup(t,n,s,i){b()}As(t,n){return g.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Wd(this)}getSize(t){return g.resolve(this.size)}}class Wd extends qd{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(t,i)):this.Yn.removeEntry(s)}),g.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(t){this.persistence=t,this.Rs=new ke(n=>ur(n),lr),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.bs=0,this.Ps=new gr,this.targetCount=0,this.vs=Te.Pn()}forEachTarget(t,n){return this.Rs.forEach((s,i)=>n(i)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),g.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new Te(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,g.resolve()}updateTargetData(t,n){return this.Dn(n),g.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),g.waitFor(r).next(()=>i)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,n){const s=this.Rs.get(n)||null;return g.resolve(s)}addMatchingKeys(t,n,s){return this.Ps.us(n,s),g.resolve()}removeMatchingKeys(t,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),g.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),g.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Ps.ds(n);return g.resolve(s)}containsKey(t,n){return g.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new ar(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Xd(this),this.indexManager=new Ud,this.remoteDocumentCache=function(s){return new Qd(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new Vd(n),this.Ns=new Hd(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new zd,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Vs[t.toKey()];return s||(s=new Gd(n,this.referenceDelegate),this.Vs[t.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,s){E("MemoryPersistence","Starting transaction:",t);const i=new Jd(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(t,n){return g.or(Object.values(this.Vs).map(s=>()=>s.containsKey(t,n)))}}class Jd extends Pf{constructor(t){super(),this.currentSequenceNumber=t}}class mr{constructor(t){this.persistence=t,this.Fs=new gr,this.$s=null}static Bs(t){return new mr(t)}get Ls(){if(this.$s)return this.$s;throw b()}addReference(t,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),g.resolve()}removeReference(t,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),g.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),g.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}ks(){this.$s=new Set}Os(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Ls,s=>{const i=T.fromPath(s);return this.qs(t,i).next(r=>{r||n.removeEntry(i,S.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.qs(t,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}qs(t,n){return g.or([()=>g.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ms(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Si=s,this.Di=i}static Ci(t,n){let s=D(),i=D();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new yr(t,n.fromCache,s,i)}}/**
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
 */class Zd{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,s,i){return this.ki(t,n).next(r=>r||this.Oi(t,n,i,s)).next(r=>r||this.Mi(t,n))}ki(t,n){if(fo(n))return g.resolve(null);let s=Ct(n);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Si(n,null,"F"),s=Ct(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=D(...r);return this.Ni.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(t,Si(n,null,"F")):this.Bi(t,u,n,c)}))})))}Oi(t,n,s,i){return fo(n)||i.isEqual(S.min())?this.Mi(t,n):this.Ni.getDocuments(t,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(t,n):(so()<=x.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ci(n)),this.Bi(t,o,n,Rf(i,-1)))})}Fi(t,n){let s=new z(Tc(t));return n.forEach((i,r)=>{fr(t,r)&&(s=s.add(r))}),s}$i(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(t,n){return so()<=x.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",Ci(n)),this.Ni.getDocumentsMatchingQuery(t,n,Lt.min())}Bi(t,n,s,i){return this.Ni.getDocumentsMatchingQuery(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(t,n,s,i){this.persistence=t,this.Li=n,this.yt=i,this.qi=new G(R),this.Ui=new ke(r=>ur(r),lr),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(s)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Kd(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.qi))}}function ep(e,t,n,s){return new tp(e,t,n,s)}async function Kc(e,t){const n=A(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(t),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=D();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of r){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function np(e,t){const n=A(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=g.resolve();return h.forEach(d=>{f=f.next(()=>u.getEntry(a,d)).next(p=>{const y=c.docVersions.get(d);L(y!==null),p.version.compareTo(y)<0&&(l.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),u.addEntry(p)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=D();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,i))})}function Hc(e){const t=A(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function sp(e,t){const n=A(e),s=t.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];t.targetChanges.forEach((l,h)=>{const f=i.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(r,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(r,l.addedDocuments,h)));let d=f.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(h)?d=d.withResumeToken(it.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):l.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(l.resumeToken,s)),i=i.insert(h,d),function(p,y,v){return p.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(f,d,l)&&a.push(n.Cs.updateTargetData(r,d))});let c=At(),u=D();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,l))}),a.push(ip(r,o,t.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!s.isEqual(S.min())){const l=n.Cs.getLastRemoteSnapshotVersion(r).next(h=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(l)}return g.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(n.qi=i,r))}function ip(e,t,n){let s=D(),i=D();return n.forEach(r=>s=s.add(r)),t.getEntries(e,s).next(r=>{let o=At();return n.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(S.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):E("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:i}})}function rp(e,t){const n=A(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function op(e,t){const n=A(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,t).next(r=>r?(i=r,g.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new Gt(t,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.qi.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(t,s.targetId)),s})}async function Ni(e,t,n){const s=A(e),i=s.qi.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!vn(o))throw o;E("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.qi=s.qi.remove(t),s.Ui.delete(i.target)}function _o(e,t,n){const s=A(e);let i=S.min(),r=D();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=A(a),h=l.Ui.get(u);return h!==void 0?g.resolve(l.qi.get(h)):l.Cs.getTargetData(c,u)}(s,o,Ct(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,t,n?i:S.min(),n?r:D())).next(a=>(ap(s,ed(t),a),{documents:a,Hi:r})))}function ap(e,t,n){let s=e.Ki.get(t)||S.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.Ki.set(t,s)}class bo{constructor(){this.activeTargetIds=Mc()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class cp{constructor(){this.Lr=new bo,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,n,s){this.qr[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new bo,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class up{Ur(t){}shutdown(){}}/**
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
 */class Io{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){E("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){E("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,n,s,i,r){const o=this.ho(t,n);E("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(t,o,a,s).then(c=>(E("RestConnection","Received: ",c),c),c=>{throw Ei("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}_o(t,n,s,i,r,o){return this.ao(t,n,s,i,r)}lo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+De,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}ho(t,n){const s=lp[t];return`${this.oo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,n,s,i){return new Promise((r,o)=>{const a=new _f;a.setWithCredentials(!0),a.listenOnce(wf.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Js.NO_ERROR:const u=a.getResponseJson();E("Connection","XHR received:",JSON.stringify(u)),r(u);break;case Js.TIMEOUT:E("Connection",'RPC "'+t+'" timed out'),o(new _(m.DEADLINE_EXCEEDED,"Request time out"));break;case Js.HTTP_ERROR:const l=a.getStatus();if(E("Connection",'RPC "'+t+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const d=function(p){const y=p.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(y)>=0?y:m.UNKNOWN}(f.status);o(new _(d,f.message))}else o(new _(m.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new _(m.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{E("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}wo(t,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=yf(),o=vf(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Tf({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=i.join("");E("Connection","Creating WebChannel: "+c,a);const u=r.createWebChannel(c,a);let l=!1,h=!1;const f=new hp({Hr:p=>{h?E("Connection","Not sending because WebChannel is closed:",p):(l||(E("Connection","Opening WebChannel transport."),u.open(),l=!0),E("Connection","WebChannel sending:",p),u.send(p))},Jr:()=>u.close()}),d=(p,y,v)=>{p.listen(y,C=>{try{v(C)}catch(O){setTimeout(()=>{throw O},0)}})};return d(u,Dn.EventType.OPEN,()=>{h||E("Connection","WebChannel transport opened.")}),d(u,Dn.EventType.CLOSE,()=>{h||(h=!0,E("Connection","WebChannel transport closed"),f.io())}),d(u,Dn.EventType.ERROR,p=>{h||(h=!0,Ei("Connection","WebChannel transport errored:",p),f.io(new _(m.UNAVAILABLE,"The operation could not be completed")))}),d(u,Dn.EventType.MESSAGE,p=>{var y;if(!h){const v=p.data[0];L(!!v);const C=v,O=C.error||((y=C[0])===null||y===void 0?void 0:y.error);if(O){E("Connection","WebChannel received error:",O);const k=O.status;let P=function(U){const ct=B[U];if(ct!==void 0)return xc(ct)}(k),ft=O.message;P===void 0&&(P=m.INTERNAL,ft="Unknown error status: "+k+" with message "+O.message),h=!0,f.io(new _(P,ft)),u.close()}else E("Connection","WebChannel received:",v),f.ro(v)}}),d(o,Ef.STAT_EVENT,p=>{p.stat===eo.PROXY?E("Connection","Detected buffering proxy"):p.stat===eo.NOPROXY&&E("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function ti(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(e){return new _d(e,!0)}class zc{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Hs=t,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&E("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t,n,s,i,r,o,a,c){this.Hs=t,this.vo=s,this.Vo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new zc(t,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,t!==4?this.xo.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(St(n.toString()),St("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===n&&this.Go(s,i)},s=>{t(()=>{const i=new _(m.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(t,n){const s=this.Ko(this.So);this.stream=this.jo(t,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(t){return E("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return n=>{this.Hs.enqueueAndForget(()=>this.So===t?n():(E("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dp extends Gc{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.yt=r}jo(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.xo.reset();const n=Sd(this.yt,t),s=function(i){if(!("targetChange"in i))return S.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?S.min():r.readTime?yt(r.readTime):S.min()}(t);return this.listener.Wo(n,s)}zo(t){const n={};n.database=ki(this.yt),n.addTarget=function(i,r){let o;const a=r.target;return o=Ii(a)?{documents:Dd(i,a)}:{query:kd(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Vc(i,r.resumeToken):r.snapshotVersion.compareTo(S.min())>0&&(o.readTime=ns(i,r.snapshotVersion.toTimestamp())),o}(this.yt,t);const s=xd(this.yt,t);s&&(n.labels=s),this.Bo(n)}Ho(t){const n={};n.database=ki(this.yt),n.removeTarget=t,this.Bo(n)}}class pp extends Gc{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.yt=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(L(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const n=Ad(t.writeResults,t.commitTime),s=yt(t.commitTime);return this.listener.Zo(s,n)}return L(!t.writeResults||t.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=ki(this.yt),this.Bo(t)}Xo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Cd(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.yt=i,this.nu=!1}su(){if(this.nu)throw new _(m.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ao(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new _(m.UNKNOWN,i.toString())})}_o(t,n,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(t,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new _(m.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class mp{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,t==="Online"&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(St(n),this.ou=!1):E("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{te(this)&&(E("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=A(a);c._u.add(4),await En(c),c.gu.set("Unknown"),c._u.delete(4),await Os(c)}(this))})}),this.gu=new mp(s,i)}}async function Os(e){if(te(e))for(const t of e.wu)await t(!0)}async function En(e){for(const t of e.wu)await t(!1)}function Qc(e,t){const n=A(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Er(n)?wr(n):Ne(n).ko()&&vr(n,t))}function Wc(e,t){const n=A(e),s=Ne(n);n.du.delete(t),s.ko()&&Xc(n,t),n.du.size===0&&(s.ko()?s.Fo():te(n)&&n.gu.set("Unknown"))}function vr(e,t){e.yu.Ot(t.targetId),Ne(e).zo(t)}function Xc(e,t){e.yu.Ot(t),Ne(e).Ho(t)}function wr(e){e.yu=new vd({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),Ne(e).start(),e.gu.uu()}function Er(e){return te(e)&&!Ne(e).No()&&e.du.size>0}function te(e){return A(e)._u.size===0}function Yc(e){e.yu=void 0}async function vp(e){e.du.forEach((t,n)=>{vr(e,t)})}async function wp(e,t){Yc(e),Er(e)?(e.gu.hu(t),wr(e)):e.gu.set("Unknown")}async function Ep(e,t,n){if(e.gu.set("Online"),t instanceof Fc&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.du.delete(o),s.yu.removeTarget(o))}(e,t)}catch(s){E("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await ss(e,s)}else if(t instanceof Mn?e.yu.Kt(t):t instanceof Pc?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(S.min()))try{const s=await Hc(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.yu.Zt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(c);u&&i.du.set(c,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.du.get(a);if(!c)return;i.du.set(a,c.withResumeToken(it.EMPTY_BYTE_STRING,c.snapshotVersion)),Xc(i,a);const u=new Gt(c.target,a,1,c.sequenceNumber);vr(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){E("RemoteStore","Failed to raise snapshot:",s),await ss(e,s)}}async function ss(e,t,n){if(!vn(t))throw t;e._u.add(1),await En(e),e.gu.set("Offline"),n||(n=()=>Hc(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{E("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await Os(e)})}function Jc(e,t){return t().catch(n=>ss(e,n,t))}async function Ls(e){const t=A(e),n=Pt(t);let s=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;Tp(t);)try{const i=await rp(t.localStore,s);if(i===null){t.fu.length===0&&n.Fo();break}s=i.batchId,_p(t,i)}catch(i){await ss(t,i)}Zc(t)&&tu(t)}function Tp(e){return te(e)&&e.fu.length<10}function _p(e,t){e.fu.push(t);const n=Pt(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function Zc(e){return te(e)&&!Pt(e).No()&&e.fu.length>0}function tu(e){Pt(e).start()}async function bp(e){Pt(e).eu()}async function Ip(e){const t=Pt(e);for(const n of e.fu)t.Xo(n.mutations)}async function Sp(e,t,n){const s=e.fu.shift(),i=pr.from(s,t,n);await Jc(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Ls(e)}async function Cp(e,t){t&&Pt(e).Yo&&await async function(n,s){if(i=s.code,dd(i)&&i!==m.ABORTED){const r=n.fu.shift();Pt(n).Mo(),await Jc(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Ls(n)}var i}(e,t),Zc(e)&&tu(e)}async function So(e,t){const n=A(e);n.asyncQueue.verifyOperationInProgress(),E("RemoteStore","RemoteStore received new credentials");const s=te(n);n._u.add(3),await En(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await Os(n)}async function Ap(e,t){const n=A(e);t?(n._u.delete(2),await Os(n)):t||(n._u.add(2),await En(n),n.gu.set("Unknown"))}function Ne(e){return e.pu||(e.pu=function(t,n,s){const i=A(t);return i.su(),new dp(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(e.datastore,e.asyncQueue,{Yr:vp.bind(null,e),Zr:wp.bind(null,e),Wo:Ep.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Mo(),Er(e)?wr(e):e.gu.set("Unknown")):(await e.pu.stop(),Yc(e))})),e.pu}function Pt(e){return e.Iu||(e.Iu=function(t,n,s){const i=A(t);return i.su(),new pp(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(e.datastore,e.asyncQueue,{Yr:bp.bind(null,e),Zr:Cp.bind(null,e),tu:Ip.bind(null,e),Zo:Sp.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Mo(),await Ls(e)):(await e.Iu.stop(),e.fu.length>0&&(E("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new Tr(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(m.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _r(e,t){if(St("AsyncQueue",`${t}: ${e}`),vn(e))return new _(m.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t){this.comparator=t?(n,s)=>t(n,s)||T.comparator(n.key,s.key):(n,s)=>T.comparator(n.key,s.key),this.keyedMap=Me(),this.sortedSet=new G(this.comparator)}static emptySet(t){return new le(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof le)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new le;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.Tu=new G(T.comparator)}track(t){const n=t.doc.key,s=this.Tu.get(n);s?t.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,t):t.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Tu=this.Tu.remove(n):t.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):b():this.Tu=this.Tu.insert(n,t)}Eu(){const t=[];return this.Tu.inorderTraversal((n,s)=>{t.push(s)}),t}}class _e{constructor(t,n,s,i,r,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new _e(t,n,le.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&As(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(){this.Au=void 0,this.listeners=[]}}class kp{constructor(){this.queries=new ke(t=>Ec(t),As),this.onlineState="Unknown",this.Ru=new Set}}async function Np(e,t){const n=A(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Dp),i)try{r.Au=await n.onListen(s)}catch(o){const a=_r(o,`Initialization of query '${Ci(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.bu(n.onlineState),r.Au&&t.Pu(r.Au)&&br(n)}async function xp(e,t){const n=A(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Rp(e,t){const n=A(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Pu(i)&&(s=!0);o.Au=i}}s&&br(n)}function Op(e,t,n){const s=A(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function br(e){e.Ru.forEach(t=>{t.next()})}class Lp{constructor(t,n,s){this.query=t,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new _e(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),n=!0):this.Cu(t,this.onlineState)&&(this.xu(t),n=!0),this.Su=t,n}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),n=!0),n}Cu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Du(t){if(t.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(t){t=_e.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(t){this.key=t}}class nu{constructor(t){this.key=t}}class Mp{constructor(t,n){this.query=t,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=D(),this.mutatedKeys=D(),this.Gu=Tc(t),this.Qu=new le(this.Gu)}get ju(){return this.qu}Wu(t,n){const s=n?n.zu:new Co,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((l,h)=>{const f=i.get(l),d=fr(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),y=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let v=!1;f&&d?f.data.isEqual(d.data)?p!==y&&(s.track({type:3,doc:d}),v=!0):this.Hu(f,d)||(s.track({type:2,doc:d}),v=!0,(c&&this.Gu(d,c)>0||u&&this.Gu(d,u)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),v=!0):f&&!d&&(s.track({type:1,doc:f}),v=!0,(c||u)&&(a=!0)),v&&(d?(o=o.add(d),r=y?r.add(l):r.delete(l)):(o=o.delete(l),r=r.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),r=r.delete(l.key),s.track({type:1,doc:l})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const r=t.zu.Eu();r.sort((u,l)=>function(h,f){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return d(h)-d(f)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,r.length!==0||c?{snapshot:new _e(this.query,t.Qu,i,r,t.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Co,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.qu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=D(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return t.forEach(s=>{this.Ku.has(s)||n.push(new nu(s))}),this.Ku.forEach(s=>{t.has(s)||n.push(new eu(s))}),n}tc(t){this.qu=t.Hi,this.Ku=D();const n=this.Wu(t.documents);return this.applyChanges(n,!0)}ec(){return _e.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class Pp{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Fp{constructor(t){this.key=t,this.nc=!1}}class Vp{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new ke(a=>Ec(a),As),this.rc=new Map,this.oc=new Set,this.uc=new G(T.comparator),this.cc=new Map,this.ac=new gr,this.hc={},this.lc=new Map,this.fc=Te.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function $p(e,t){const n=Wp(e);let s,i;const r=n.ic.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await op(n.localStore,Ct(t));n.isPrimaryClient&&Qc(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Up(n,t,s,a==="current",o.resumeToken)}return i}async function Up(e,t,n,s,i){e._c=(h,f,d)=>async function(p,y,v,C){let O=y.view.Wu(v);O.$i&&(O=await _o(p.localStore,y.query,!1).then(({documents:ft})=>y.view.Wu(ft,O)));const k=C&&C.targetChanges.get(y.targetId),P=y.view.applyChanges(O,p.isPrimaryClient,k);return Do(p,y.targetId,P.Xu),P.snapshot}(e,h,f,d);const r=await _o(e.localStore,t,!0),o=new Mp(t,r.Hi),a=o.Wu(r.documents),c=wn.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",i),u=o.applyChanges(a,e.isPrimaryClient,c);Do(e,n,u.Xu);const l=new Pp(t,n,o);return e.ic.set(t,l),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),u.snapshot}async function Bp(e,t){const n=A(e),s=n.ic.get(t),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!As(r,t))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ni(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Wc(n.remoteStore,s.targetId),xi(n,s.targetId)}).catch(yn)):(xi(n,s.targetId),await Ni(n.localStore,s.targetId,!0))}async function qp(e,t,n){const s=Xp(e);try{const i=await function(r,o){const a=A(r),c=H.now(),u=o.reduce((f,d)=>f.add(d.key),D());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=At(),p=D();return a.Gi.getEntries(f,u).next(y=>{d=y,d.forEach((v,C)=>{C.isValidDocument()||(p=p.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(y=>{l=y;const v=[];for(const C of o){const O=ld(C,l.get(C.key).overlayedDocument);O!=null&&v.push(new Zt(C.key,O,wc(O.value.mapValue),_t.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,v,o)}).next(y=>{h=y;const v=y.applyToLocalDocumentSet(l,p);return a.documentOverlayCache.saveOverlays(f,y.batchId,v)})}).then(()=>({batchId:h.batchId,changes:Oc(l)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.hc[r.currentUser.toKey()];c||(c=new G(R)),c=c.insert(o,a),r.hc[r.currentUser.toKey()]=c}(s,i.batchId,n),await Tn(s,i.changes),await Ls(s.remoteStore)}catch(i){const r=_r(i,"Failed to persist write");n.reject(r)}}async function su(e,t){const n=A(e);try{const s=await sp(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(L(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?L(o.nc):i.removedDocuments.size>0&&(L(o.nc),o.nc=!1))}),await Tn(n,s,t)}catch(s){await yn(s)}}function Ao(e,t,n){const s=A(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.bu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=A(r);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&br(a)}(s.eventManager,t),i.length&&s.sc.Wo(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function jp(e,t,n){const s=A(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.cc.get(t),r=i&&i.key;if(r){let o=new G(T.comparator);o=o.insert(r,tt.newNoDocument(r,S.min()));const a=D().add(r),c=new xs(S.min(),new Map,new z(R),o,a);await su(s,c),s.uc=s.uc.remove(r),s.cc.delete(t),Ir(s)}else await Ni(s.localStore,t,!1).then(()=>xi(s,t,n)).catch(yn)}async function Kp(e,t){const n=A(e),s=t.batch.batchId;try{const i=await np(n.localStore,t);ru(n,s,null),iu(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Tn(n,i)}catch(i){await yn(i)}}async function Hp(e,t,n){const s=A(e);try{const i=await function(r,o){const a=A(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(L(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,t);ru(s,t,n),iu(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Tn(s,i)}catch(i){await yn(i)}}function iu(e,t){(e.lc.get(t)||[]).forEach(n=>{n.resolve()}),e.lc.delete(t)}function ru(e,t,n){const s=A(e);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.hc[s.currentUser.toKey()]=i}}function xi(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.rc.get(t))e.ic.delete(s),n&&e.sc.wc(s,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(s=>{e.ac.containsKey(s)||ou(e,s)})}function ou(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);n!==null&&(Wc(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),Ir(e))}function Do(e,t,n){for(const s of n)s instanceof eu?(e.ac.addReference(s.key,t),zp(e,s)):s instanceof nu?(E("SyncEngine","Document no longer in limbo: "+s.key),e.ac.removeReference(s.key,t),e.ac.containsKey(s.key)||ou(e,s.key)):b()}function zp(e,t){const n=t.key,s=n.path.canonicalString();e.uc.get(n)||e.oc.has(s)||(E("SyncEngine","New document in limbo: "+n),e.oc.add(s),Ir(e))}function Ir(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new T(V.fromString(t)),s=e.fc.next();e.cc.set(s,new Fp(n)),e.uc=e.uc.insert(n,s),Qc(e.remoteStore,new Gt(Ct(hr(n.path)),s,2,ar.at))}}async function Tn(e,t,n){const s=A(e),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,t,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=yr.Ci(c.targetId,u);r.push(l)}}))}),await Promise.all(o),s.sc.Wo(i),await async function(a,c){const u=A(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>g.forEach(c,h=>g.forEach(h.Si,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>g.forEach(h.Di,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!vn(l))throw l;E("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.qi.get(h),d=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(d);u.qi=u.qi.insert(h,p)}}}(s.localStore,r))}async function Gp(e,t){const n=A(e);if(!n.currentUser.isEqual(t)){E("SyncEngine","User change. New user:",t.toKey());const s=await Kc(n.localStore,t);n.currentUser=t,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new _(m.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Tn(n,s.ji)}}function Qp(e,t){const n=A(e),s=n.cc.get(t);if(s&&s.nc)return D().add(s.key);{let i=D();const r=n.rc.get(t);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function Wp(e){const t=A(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=su.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Qp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=jp.bind(null,t),t.sc.Wo=Rp.bind(null,t.eventManager),t.sc.wc=Op.bind(null,t.eventManager),t}function Xp(e){const t=A(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Kp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Hp.bind(null,t),t}class Yp{constructor(){this.synchronizeTabs=!1}async initialize(t){this.yt=Rs(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,n){return null}Ec(t,n){return null}Ic(t){return ep(this.persistence,new Zd,t.initialUser,this.yt)}yc(t){return new Yd(mr.Bs,this.yt)}gc(t){return new cp}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Jp{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ao(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gp.bind(null,this.syncEngine),await Ap(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new kp}createDatastore(t){const n=Rs(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new fp(i));var i;return function(r,o,a,c){return new gp(r,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>Ao(this.syncEngine,a,0),o=Io.C()?new Io:new up,new yp(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,c,u){const l=new Vp(s,i,r,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=A(t);E("RemoteStore","RemoteStore shutting down."),n._u.add(5),await En(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(e,t,n){if(!n)throw new _(m.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function tg(e,t,n,s){if(t===!0&&s===!0)throw new _(m.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function ko(e){if(!T.isDocumentKey(e))throw new _(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Sr(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":b()}function he(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new _(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sr(e);throw new _(m.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new Map;class xo{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new _(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new _(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,tg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(t,n,s,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new _(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xo(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new bf;switch(n.type){case"gapi":const s=n.client;return new Af(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new _(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=No.get(t);n&&(E("ComponentProvider","Removing Datastore"),No.delete(t),n.terminate())}(this),Promise.resolve()}}function eg(e,t,n,s={}){var i;const r=(e=he(e,Cr))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==t&&Ei("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Z.MOCK_USER;else{o=il(s.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new _(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Z(c)}e._authCredentials=new If(new cc(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ht(this.firestore,t,this._key)}}class Ms{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Ms(this.firestore,t,this._query)}}class sn extends Ms{constructor(t,n,s){super(t,n,hr(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ht(this.firestore,null,new T(t))}withConverter(t){return new sn(this.firestore,t,this._path)}}function ng(e,t,...n){if(e=Ot(e),arguments.length===1&&(t=uc.R()),Zp("doc","path",t),e instanceof Cr){const s=V.fromString(t,...n);return ko(s),new ht(e,null,new T(s))}{if(!(e instanceof ht||e instanceof sn))throw new _(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(V.fromString(t,...n));return ko(s),new ht(e.firestore,e instanceof sn?e.converter:null,new T(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sg{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):St("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Z.UNAUTHENTICATED,this.clientId=uc.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{E("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(E("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=_r(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function rg(e,t){e.asyncQueue.verifyOperationInProgress(),E("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Kc(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function og(e,t){e.asyncQueue.verifyOperationInProgress();const n=await ag(e);E("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>So(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>So(t.remoteStore,r)),e.onlineComponents=t}async function ag(e){return e.offlineComponents||(E("FirestoreClient","Using default OfflineComponentProvider"),await rg(e,new Yp)),e.offlineComponents}async function au(e){return e.onlineComponents||(E("FirestoreClient","Using default OnlineComponentProvider"),await og(e,new Jp)),e.onlineComponents}function cg(e){return au(e).then(t=>t.syncEngine)}async function Ro(e){const t=await au(e),n=t.eventManager;return n.onListen=$p.bind(null,t.syncEngine),n.onUnlisten=Bp.bind(null,t.syncEngine),n}class ug{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new zc(this,"async_queue_retry"),this.Wc=()=>{const n=ti();n&&E("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=ti();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const n=ti();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise(()=>{});const n=new zt;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!vn(t))throw t;E("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw St("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(t,n,s){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const i=Tr.createAndSchedule(this,t,n,s,r=>this.Yc(r));return this.Uc.push(i),i}zc(){this.Kc&&b()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.Uc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.Uc.indexOf(t);this.Uc.splice(n,1)}}function Oo(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class is extends Cr{constructor(t,n,s,i){super(t,n,s,i),this.type="firestore",this._queue=new ug,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||uu(this),this._firestoreClient.terminate()}}function lg(e,t){const n=typeof e=="object"?e:ch(),s=typeof e=="string"?e:t||"(default)",i=ih(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=el("firestore");r&&eg(i,...r)}return i}function cu(e){return e._firestoreClient||uu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function uu(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new Ff(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new ig(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class be{constructor(t){this._byteString=t}static fromBase64String(t){try{return new be(it.fromBase64String(t))}catch(n){throw new _(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new be(it.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new _(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new _(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new _(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return R(this._lat,t._lat)||R(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=/^__.*__$/;class lu{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new Zt(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function hu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class Vs{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new Vs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ia({path:s,oa:!1});return i.ua(t),i}ca(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ia({path:s,oa:!1});return i.na(),i}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return rs(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(t.length===0)throw this.ha("Document fields must not be empty");if(hu(this.sa)&&hg.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class fg{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.yt=s||Rs(t)}da(t,n,s,i=!1){return new Vs({sa:t,methodName:n,fa:s,path:et.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function dg(e){const t=e._freezeSettings(),n=Rs(e._databaseId);return new fg(e._databaseId,!!t.ignoreUndefinedProperties,n)}class $s extends Fs{_toFieldTransform(t){if(t.sa!==2)throw t.sa===1?t.ha(`${this._methodName}() can only appear at the top level of your update data`):t.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof $s}}function pg(e,t,n){return new Vs({sa:3,fa:t.settings.fa,methodName:e._methodName,oa:n},t.databaseId,t.yt,t.ignoreUndefinedProperties)}class gg extends Fs{constructor(t,n){super(t),this._a=n}_toFieldTransform(t){const n=pg(this,t,!0),s=this._a.map(r=>_n(r,n)),i=new Ee(s);return new od(t.path,i)}isEqual(t){return this===t}}function mg(e,t,n,s){const i=e.da(1,t,n);du("Data must be an object, but it was:",i,s);const r=[],o=ut.empty();Jt(s,(c,u)=>{const l=Dr(t,c,n);u=Ot(u);const h=i.ca(l);if(u instanceof $s)r.push(l);else{const f=_n(u,h);f!=null&&(r.push(l),o.set(l,f))}});const a=new dt(r);return new lu(o,a,i.fieldTransforms)}function yg(e,t,n,s,i,r){const o=e.da(1,t,n),a=[Lo(t,s,n)],c=[i];if(r.length%2!=0)throw new _(m.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(Lo(t,r[f])),c.push(r[f+1]);const u=[],l=ut.empty();for(let f=a.length-1;f>=0;--f)if(!Eg(u,a[f])){const d=a[f];let p=c[f];p=Ot(p);const y=o.ca(d);if(p instanceof $s)u.push(d);else{const v=_n(p,y);v!=null&&(u.push(d),l.set(d,v))}}const h=new dt(u);return new lu(l,h,o.fieldTransforms)}function _n(e,t){if(fu(e=Ot(e)))return du("Unsupported field value:",t,e),vg(e,t);if(e instanceof Fs)return function(n,s){if(!hu(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&t.sa!==4)throw t.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=_n(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=Ot(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return sd(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=H.fromDate(n);return{timestampValue:ns(s.yt,i)}}if(n instanceof H){const i=new H(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ns(s.yt,i)}}if(n instanceof Ar)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof be)return{bytesValue:Vc(s.yt,n._byteString)};if(n instanceof ht){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:dr(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Sr(n)}`)}(e,t)}function vg(e,t){const n={};return lc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Jt(e,(s,i)=>{const r=_n(i,t.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function fu(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof H||e instanceof Ar||e instanceof be||e instanceof ht||e instanceof Fs)}function du(e,t,n){if(!fu(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Sr(n);throw s==="an object"?t.ha(e+" a custom object"):t.ha(e+" "+s)}}function Lo(e,t,n){if((t=Ot(t))instanceof Ps)return t._internalPath;if(typeof t=="string")return Dr(e,t);throw rs("Field path arguments must be of type string or ",e,!1,void 0,n)}const wg=new RegExp("[~\\*/\\[\\]]");function Dr(e,t,n){if(t.search(wg)>=0)throw rs(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ps(...t.split("."))._internalPath}catch{throw rs(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function rs(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new _(m.INVALID_ARGUMENT,a+e+c)}function Eg(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Tg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(gu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Tg extends pu{data(){return super.data()}}function gu(e,t){return typeof t=="string"?Dr(e,t):t instanceof Ps?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new _(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bg{convertValue(t,n="none"){switch(Xt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return q(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(ye(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw b()}}convertObject(t,n){const s={};return Jt(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new Ar(q(t.latitude),q(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=fc(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(tn(t));default:return null}}convertTimestamp(t){const n=Mt(t);return new H(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=V.fromString(t);L(jc(s));const i=new Ze(s.get(1),s.get(3)),r=new T(s.popFirst(5));return i.isEqual(n)||St(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class mu extends pu{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Pn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(gu("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Pn extends mu{data(t={}){return super.data(t)}}class Ig{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Pe(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Pn(this._firestore,this._userDataWriter,s.key,s,new Pe(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new _(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new Pn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Pe(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Pn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Pe(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:Sg(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Sg(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}class yu extends bg{constructor(t){super(),this.firestore=t}convertBytes(t){return new be(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ht(this.firestore,null,n)}}function Cg(e,t,n,...s){e=he(e,ht);const i=he(e.firestore,is),r=dg(i);let o;return o=typeof(t=Ot(t))=="string"||t instanceof Ps?yg(r,"updateDoc",e._key,t,n,s):mg(r,"updateDoc",e._key,t),Dg(i,[o.toMutation(e._key,_t.exists(!0))])}function Ag(e,...t){var n,s,i;e=Ot(e);let r={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Oo(t[o])||(r=t[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Oo(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),t[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(e instanceof ht)u=he(e.firestore,is),l=hr(e._key.path),c={next:h=>{t[o]&&t[o](kg(u,e,h))},error:t[o+1],complete:t[o+2]};else{const h=he(e,Ms);u=he(h.firestore,is),l=h._query;const f=new yu(u);c={next:d=>{t[o]&&t[o](new Ig(u,f,h,d))},error:t[o+1],complete:t[o+2]},_g(e._query)}return function(h,f,d,p){const y=new sg(p),v=new Lp(f,y,d);return h.asyncQueue.enqueueAndForget(async()=>Np(await Ro(h),v)),()=>{y.bc(),h.asyncQueue.enqueueAndForget(async()=>xp(await Ro(h),v))}}(cu(u),l,a,c)}function Dg(e,t){return function(n,s){const i=new zt;return n.asyncQueue.enqueueAndForget(async()=>qp(await cg(n),s,i)),i.promise}(cu(e),t)}function kg(e,t,n){const s=n.docs.get(t._key),i=new yu(e);return new mu(e,i,t._key,s,new Pe(n.hasPendingWrites,n.fromCache),t.converter)}function Ng(...e){return new gg("arrayUnion",e)}(function(e,t=!0){(function(n){De=n})(ah),jn(new He("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new is(new Sf(n.getProvider("auth-internal")),new kf(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new _(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ze(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),ce(no,"3.8.1",e),ce(no,"3.8.1","esm2017")})();const xg={apiKey:"AIzaSyDbBV7DT8DNmxyLPUB_w0skCx6bQjDIDhE",authDomain:"nocontextquotes-86d30.firebaseapp.com",projectId:"nocontextquotes-86d30",storageBucket:"nocontextquotes-86d30.appspot.com",messagingSenderId:"704558739601",appId:"1:704558739601:web:f92bb50736b7c0cb360f30",measurementId:"G-RHFY5NDBMG"},Rg=sa(xg),Og=lg(Rg);function vu(e){const t=e-1;return t*t*t+1}function Lg(e,{delay:t=0,duration:n=400,easing:s=Ie}={}){const i=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:s,css:r=>`opacity: ${r*i}`}}function Mg(e,{delay:t=0,duration:n=400,easing:s=vu,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(e),c=+a.opacity,u=a.transform==="none"?"":a.transform,l=c*(1-o);return{delay:t,duration:n,easing:s,css:(h,f)=>`
			transform: ${u} translate(${(1-h)*i}px, ${(1-h)*r}px);
			opacity: ${c-l*f}`}}function Pg(e,{from:t,to:n},s={}){const i=getComputedStyle(e),r=i.transform==="none"?"":i.transform,[o,a]=i.transformOrigin.split(" ").map(parseFloat),c=t.left+t.width*o/n.width-(n.left+o),u=t.top+t.height*a/n.height-(n.top+a),{delay:l=0,duration:h=d=>Math.sqrt(d)*120,easing:f=vu}=s;return{delay:l,duration:on(h)?h(Math.sqrt(c*c+u*u)):h,easing:f,css:(d,p)=>{const y=p*c,v=p*u,C=d+p*t.width/n.width,O=d+p*t.height/n.height;return`transform: ${r} translate(${y}px, ${v}px) scale(${C}, ${O});`}}}const ne=[];function wu(e,t=j){let n;const s=new Set;function i(a){if(an(e,a)&&(e=a,n)){const c=!ne.length;for(const u of s)u[1](),ne.push(u,e);if(c){for(let u=0;u<ne.length;u+=2)ne[u][0](ne[u+1]);ne.length=0}}}function r(a){i(a(e))}function o(a,c=j){const u=[a,c];return s.add(u),s.size===1&&(n=t(i)||j),a(e),()=>{s.delete(u),s.size===0&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}const Fg={duration:4e3,initial:1,next:0,pausable:!1,dismissable:!0,reversed:!1,intro:{x:256}},Vg=()=>{const{subscribe:e,update:t}=wu([]);let n=0;const s={},i=u=>u instanceof Object;return{subscribe:e,push:(u,l={})=>{const h={target:"default",...i(u)?u:{...l,msg:u}},f=s[h.target]||{},d={...Fg,...f,...h,theme:{...f.theme,...h.theme},classes:[...f.classes||[],...h.classes||[]],id:++n};return t(p=>d.reversed?[...p,d]:[d,...p]),n},pop:u=>{t(l=>{if(!l.length||u===0)return[];if(i(u))return l.filter(f=>u(f));const h=u||Math.max(...l.map(f=>f.id));return l.filter(f=>f.id!==h)})},set:(u,l={})=>{const h=i(u)?{...u}:{...l,id:u};t(f=>{const d=f.findIndex(p=>p.id===h.id);return d>-1&&(f[d]={...f[d],...h}),f})},_init:(u="default",l={})=>(s[u]=l,s)}},rn=Vg();function Mo(e){return Object.prototype.toString.call(e)==="[object Date]"}function Ri(e,t){if(e===t||e!==e)return()=>e;const n=typeof e;if(n!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const s=t.map((i,r)=>Ri(e[r],i));return i=>s.map(r=>r(i))}if(n==="object"){if(!e||!t)throw new Error("Object cannot be null");if(Mo(e)&&Mo(t)){e=e.getTime(),t=t.getTime();const r=t-e;return o=>new Date(e+o*r)}const s=Object.keys(t),i={};return s.forEach(r=>{i[r]=Ri(e[r],t[r])}),r=>{const o={};return s.forEach(a=>{o[a]=i[a](r)}),o}}if(n==="number"){const s=t-e;return i=>e+i*s}throw new Error(`Cannot interpolate ${n} values`)}function $g(e,t={}){const n=wu(e);let s,i=e;function r(o,a){if(e==null)return n.set(e=o),Promise.resolve();i=o;let c=s,u=!1,{delay:l=0,duration:h=400,easing:f=Ie,interpolate:d=Ri}=ei(ei({},t),a);if(h===0)return c&&(c.abort(),c=null),n.set(e=i),Promise.resolve();const p=os()+l;let y;return s=as(v=>{if(v<p)return!0;u||(y=d(e,o),typeof h=="function"&&(h=h(e,o)),u=!0),c&&(c.abort(),c=null);const C=v-p;return C>h?(n.set(e=o),!1):(n.set(e=y(f(C/h))),!0)}),s.promise}return{set:r,update:(o,a)=>r(o(i,e),a),subscribe:n.subscribe}}function Ug(e){let t,n=e[0].msg+"",s;return{c(){t=new Du(!1),s=Ko(),t.a=s},m(i,r){t.m(n,i,r),kt(i,s,r)},p(i,r){r&1&&n!==(n=i[0].msg+"")&&t.p(n)},i:j,o:j,d(i){i&&pt(s),i&&t.d()}}}function Bg(e){let t,n,s;const i=[e[2]];var r=e[0].component.src;function o(a){let c={};for(let u=0;u<i.length;u+=1)c=ei(c,i[u]);return{props:c}}return r&&(t=Rr(r,o())),{c(){t&&Ke(t.$$.fragment),n=Ko()},m(a,c){t&&de(t,a,c),kt(a,n,c),s=!0},p(a,c){const u=c&4?Ku(i,[Hu(a[2])]):{};if(r!==(r=a[0].component.src)){if(t){Pi();const l=t;bt(l.$$.fragment,1,0,()=>{pe(l,1)}),Fi()}r?(t=Rr(r,o()),Ke(t.$$.fragment),vt(t.$$.fragment,1),de(t,n.parentNode,n)):t=null}else r&&t.$set(u)},i(a){s||(t&&vt(t.$$.fragment,a),s=!0)},o(a){t&&bt(t.$$.fragment,a),s=!1},d(a){a&&pt(n),t&&pe(t,a)}}}function Po(e){let t,n,s;return{c(){t=at("div"),F(t,"class","_toastBtn pe svelte-l65oht"),F(t,"role","button"),F(t,"tabindex","0")},m(i,r){kt(i,t,r),n||(s=[Kt(t,"click",e[4]),Kt(t,"keydown",e[8])],n=!0)},p:j,d(i){i&&pt(t),n=!1,Dt(s)}}}function qg(e){let t,n,s,i,r,o,a,c,u,l;const h=[Bg,Ug],f=[];function d(y,v){return y[0].component?0:1}s=d(e),i=f[s]=h[s](e);let p=e[0].dismissable&&Po(e);return{c(){t=at("div"),n=at("div"),i.c(),r=jt(),p&&p.c(),o=jt(),a=at("progress"),F(n,"role","status"),F(n,"class","_toastMsg svelte-l65oht"),In(n,"pe",e[0].component),F(a,"class","_toastBar svelte-l65oht"),a.value=e[1],F(t,"class","_toastItem svelte-l65oht"),In(t,"pe",e[0].pausable)},m(y,v){kt(y,t,v),rt(t,n),f[s].m(n,null),rt(t,r),p&&p.m(t,null),rt(t,o),rt(t,a),c=!0,u||(l=[Kt(t,"mouseenter",e[9]),Kt(t,"mouseleave",e[6])],u=!0)},p(y,[v]){let C=s;s=d(y),s===C?f[s].p(y,v):(Pi(),bt(f[C],1,1,()=>{f[C]=null}),Fi(),i=f[s],i?i.p(y,v):(i=f[s]=h[s](y),i.c()),vt(i,1),i.m(n,null)),(!c||v&1)&&In(n,"pe",y[0].component),y[0].dismissable?p?p.p(y,v):(p=Po(y),p.c(),p.m(t,o)):p&&(p.d(1),p=null),(!c||v&2)&&(a.value=y[1]),(!c||v&1)&&In(t,"pe",y[0].pausable)},i(y){c||(vt(i),c=!0)},o(y){bt(i),c=!1},d(y){y&&pt(t),f[s].d(),p&&p.d(),u=!1,Dt(l)}}}function jg(e,t,n){let s,{item:i}=t;const r=$g(i.initial,{duration:i.duration,easing:Ie});Uo(e,r,k=>n(1,s=k));const o=()=>rn.pop(i.id),a=()=>{(s===1||s===0)&&o()};let c=i.initial,u=c,l=!1;const h=()=>{!l&&s!==c&&(r.set(s,{duration:0}),l=!0)},f=()=>{if(l){const k=i.duration,P=k-k*((s-u)/(c-u));r.set(c,{duration:P}).then(a),l=!1}};let d={};const p=(k,P="undefined")=>typeof k===P;let y;Lu((k=document)=>{if(p(k.hidden))return;const P=()=>k.hidden?h():f(),ft="visibilitychange";k.addEventListener(ft,P),y=()=>k.removeEventListener(ft,P),P()}),Mu(()=>{p(i.onpop,"function")&&i.onpop(i.id),y&&y()});const C=k=>{k instanceof KeyboardEvent&&["Enter"," "].includes(k.key)&&o()},O=()=>{i.pausable&&h()};return e.$$set=k=>{"item"in k&&n(0,i=k.item)},e.$$.update=()=>{if(e.$$.dirty&1&&(p(i.progress)||n(0,i.next=i.progress,i)),e.$$.dirty&131&&c!==i.next&&(n(7,c=i.next),u=s,l=!1,r.set(c).then(a)),e.$$.dirty&1&&i.component){const{props:k={},sendIdTo:P}=i.component;n(2,d={...k,...P&&{[P]:i.id}})}},[i,s,d,r,o,h,f,c,C,O]}class Kg extends us{constructor(t){super(),cs(this,t,jg,qg,an,{item:0})}}function Fo(e,t,n){const s=e.slice();return s[5]=t[n],s}function Vo(e,t){let n,s,i,r,o,a,c,u,l=j,h;return s=new Kg({props:{item:t[5]}}),{key:e,first:null,c(){n=at("li"),Ke(s.$$.fragment),i=jt(),F(n,"class",r=Nr(t[5].classes.join(" "))+" svelte-yh90az"),F(n,"style",o=t[1](t[5].theme)),this.first=n},m(f,d){kt(f,n,d),de(s,n,null),rt(n,i),h=!0},p(f,d){t=f;const p={};d&1&&(p.item=t[5]),s.$set(p),(!h||d&1&&r!==(r=Nr(t[5].classes.join(" "))+" svelte-yh90az"))&&F(n,"class",r),(!h||d&1&&o!==(o=t[1](t[5].theme)))&&F(n,"style",o)},r(){u=n.getBoundingClientRect()},f(){Ou(n),l(),Ho(n,u)},a(){l(),l=Ru(n,u,Pg,{duration:200})},i(f){h||(vt(s.$$.fragment,f),fe(()=>{c&&c.end(1),a=$u(n,Mg,t[5].intro),a.start()}),h=!0)},o(f){bt(s.$$.fragment,f),a&&a.invalidate(),c=Uu(n,Lg,{}),h=!1},d(f){f&&pt(n),pe(s),f&&c&&c.end()}}}function Hg(e){let t,n=[],s=new Map,i,r=e[0];const o=a=>a[5].id;for(let a=0;a<r.length;a+=1){let c=Fo(e,r,a),u=o(c);s.set(u,n[a]=Vo(u,c))}return{c(){t=at("ul");for(let a=0;a<n.length;a+=1)n[a].c();F(t,"class","_toastContainer svelte-yh90az")},m(a,c){kt(a,t,c);for(let u=0;u<n.length;u+=1)n[u].m(t,null);i=!0},p(a,[c]){if(c&3){r=a[0],Pi();for(let u=0;u<n.length;u+=1)n[u].r();n=ju(n,c,o,1,a,r,s,t,qu,Vo,null,Fo);for(let u=0;u<n.length;u+=1)n[u].a();Fi()}},i(a){if(!i){for(let c=0;c<r.length;c+=1)vt(n[c]);i=!0}},o(a){for(let c=0;c<n.length;c+=1)bt(n[c]);i=!1},d(a){a&&pt(t);for(let c=0;c<n.length;c+=1)n[c].d()}}}function zg(e,t,n){let s;Uo(e,rn,c=>n(4,s=c));let{options:i={}}=t,{target:r="default"}=t,o;const a=c=>Object.keys(c).reduce((u,l)=>`${u}${l}:${c[l]};`,"");return e.$$set=c=>{"options"in c&&n(2,i=c.options),"target"in c&&n(3,r=c.target)},e.$$.update=()=>{e.$$.dirty&12&&rn._init(r,i),e.$$.dirty&24&&n(0,o=s.filter(c=>c.target===r))},[o,a,i,r,s]}class Gg extends us{constructor(t){super(),cs(this,t,zg,Hg,an,{options:2,target:3})}}function Qg(e){let t,n,s,i,r,o,a,c,u,l,h,f;return{c(){t=at("div"),n=at("div"),s=at("h1"),i=Li(e[1]),r=jt(),o=at("button"),o.textContent="Load Random Quote",a=jt(),c=at("input"),u=jt(),l=at("button"),l.textContent="Add Quote",F(s,"id","random-text"),F(s,"class","svelte-14xde71"),F(o,"class","random-button svelte-14xde71"),F(c,"id","new-quote-input"),F(c,"type","text"),F(c,"placeholder","Submit a new quote here"),F(c,"class","svelte-14xde71"),F(l,"class","random-button svelte-14xde71"),F(n,"class","heading svelte-14xde71"),F(t,"class","profile svelte-14xde71")},m(d,p){kt(d,t,p),rt(t,n),rt(n,s),rt(s,i),rt(n,r),rt(n,o),rt(n,a),rt(n,c),xr(c,e[0]),rt(n,u),rt(n,l),h||(f=[Kt(o,"click",e[2]),Kt(c,"input",e[4]),Kt(l,"click",e[3])],h=!0)},p(d,[p]){p&2&&Cu(i,d[1]),p&1&&c.value!==d[0]&&xr(c,d[0])},i:j,o:j,d(d){d&&pt(t),h=!1,Dt(f)}}}function Wg(e,t,n){const s=ng(Og,"quotes","quote_list");Ag(s,l=>{r=l.data().quote_list,console.log(r)});let i="",r=[],o=".";function a(){let l=o;for(;o==l;)n(1,o=r[Math.floor(Math.random()*r.length)])}async function c(){i!=""&&(rn.push("Submitting quote..."),await Cg(s,{quote_list:Ng(i)}).then(()=>{rn.push("Quote submitted!"),n(0,i="")}))}function u(){i=this.value,n(0,i)}return[i,o,a,c,u]}class Xg extends us{constructor(t){super(),cs(this,t,Wg,Qg,an,{})}}function Yg(e){let t,n,s,i;return t=new Xg({}),s=new Gg({}),{c(){Ke(t.$$.fragment),n=jt(),Ke(s.$$.fragment)},m(r,o){de(t,r,o),kt(r,n,o),de(s,r,o),i=!0},p:j,i(r){i||(vt(t.$$.fragment,r),vt(s.$$.fragment,r),i=!0)},o(r){bt(t.$$.fragment,r),bt(s.$$.fragment,r),i=!1},d(r){pe(t,r),r&&pt(n),pe(s,r)}}}class Jg extends us{constructor(t){super(),cs(this,t,null,Yg,an,{})}}new Jg({target:document.getElementById("app")});
