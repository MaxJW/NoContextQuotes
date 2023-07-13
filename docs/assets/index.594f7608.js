(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function O(){}const Ve=e=>e;function Je(e,t){for(const n in t)e[n]=t[n];return e}function rh(e){return!!e&&(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"}function pl(e){return e()}function Fo(){return Object.create(null)}function kt(e){e.forEach(pl)}function me(e){return typeof e=="function"}function Ct(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function sh(e){return Object.keys(e).length===0}function ih(e,...t){if(e==null)return O;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Ae(e,t,n){e.$$.on_destroy.push(ih(t,n))}function un(e,t,n,r){if(e){const s=gl(e,t,n,r);return e[0](s)}}function gl(e,t,n,r){return e[1]&&r?Je(n.ctx.slice(),e[1](r(t))):n.ctx}function cn(e,t,n,r){if(e[2]&&r){const s=e[2](r(n));if(t.dirty===void 0)return s;if(typeof s=="object"){const i=[],o=Math.max(t.dirty.length,s.length);for(let a=0;a<o;a+=1)i[a]=t.dirty[a]|s[a];return i}return t.dirty|s}return t.dirty}function hn(e,t,n,r,s,i){if(s){const o=gl(t,n,r,i);e.p(o,s)}}function fn(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let r=0;r<n;r++)t[r]=-1;return t}return-1}function xo(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function Uo(e){return e==null?"":e}function _l(e){return e&&me(e.destroy)?e.destroy:O}function Bo(e){const t=typeof e=="string"&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const yl=typeof window<"u";let Zn=yl?()=>window.performance.now():()=>Date.now(),ki=yl?e=>requestAnimationFrame(e):O;const He=new Set;function El(e){He.forEach(t=>{t.c(e)||(He.delete(t),t.f())}),He.size!==0&&ki(El)}function tr(e){let t;return He.size===0&&ki(El),{promise:new Promise(n=>{He.add(t={c:e,f:n})}),abort(){He.delete(t)}}}function b(e,t){e.appendChild(t)}function vl(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function oh(e){const t=N("style");return ah(vl(e),t),t.sheet}function ah(e,t){return b(e.head||e,t),t.sheet}function D(e,t,n){e.insertBefore(t,n||null)}function P(e){e.parentNode&&e.parentNode.removeChild(e)}function Di(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function N(e){return document.createElement(e)}function Te(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function Kt(e){return document.createTextNode(e)}function Y(){return Kt(" ")}function Lt(){return Kt("")}function ut(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function _(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}const lh=["width","height"];function uh(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)t[r]==null?e.removeAttribute(r):r==="style"?e.style.cssText=t[r]:r==="__value"?e.value=e[r]=t[r]:n[r]&&n[r].set&&lh.indexOf(r)===-1?e[r]=t[r]:_(e,r,t[r])}function ch(e,t){Object.keys(t).forEach(n=>{hh(e,n,t[n])})}function hh(e,t,n){t in e?e[t]=typeof e[t]=="boolean"&&n===""?!0:n:_(e,t,n)}function fh(e){return/-/.test(e)?ch:uh}function dh(e){return Array.from(e.childNodes)}function ue(e,t){t=""+t,e.data!==t&&(e.data=t)}function re(e,t){e.value=t==null?"":t}function jo(e,t,n){for(let r=0;r<e.options.length;r+=1){const s=e.options[r];if(s.__value===t){s.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function mh(e){const t=e.querySelector(":checked");return t&&t.__value}function Nt(e,t,n){e.classList[n?"add":"remove"](t)}function Tl(e,t,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(e,n,r,t),s}class ph{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,r=null){this.e||(this.is_svg?this.e=Te(n.nodeName):this.e=N(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(t)),this.i(r)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)D(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(P)}}function qo(e,t){return new e(t)}const kr=new Map;let Dr=0;function gh(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function _h(e,t){const n={stylesheet:oh(t),rules:{}};return kr.set(e,n),n}function Dn(e,t,n,r,s,i,o,a=0){const l=16.666/r;let u=`{
`;for(let y=0;y<=1;y+=l){const p=t+(n-t)*i(y);u+=y*100+`%{${o(p,1-p)}}
`}const c=u+`100% {${o(n,1-n)}}
}`,h=`__svelte_${gh(c)}_${a}`,f=vl(e),{stylesheet:d,rules:m}=kr.get(f)||_h(f,e);m[h]||(m[h]=!0,d.insertRule(`@keyframes ${h} ${c}`,d.cssRules.length));const g=e.style.animation||"";return e.style.animation=`${g?`${g}, `:""}${h} ${r}ms linear ${s}ms 1 both`,Dr+=1,h}function Nn(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?i=>i.indexOf(t)<0:i=>i.indexOf("__svelte")===-1),s=n.length-r.length;s&&(e.style.animation=r.join(", "),Dr-=s,Dr||yh())}function yh(){ki(()=>{Dr||(kr.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&P(t)}),kr.clear())})}function Eh(e,t,n,r){if(!t)return O;const s=e.getBoundingClientRect();if(t.left===s.left&&t.right===s.right&&t.top===s.top&&t.bottom===s.bottom)return O;const{delay:i=0,duration:o=300,easing:a=Ve,start:l=Zn()+i,end:u=l+o,tick:c=O,css:h}=n(e,{from:t,to:s},r);let f=!0,d=!1,m;function g(){h&&(m=Dn(e,0,1,o,i,a,h)),i||(d=!0)}function y(){h&&Nn(e,m),f=!1}return tr(p=>{if(!d&&p>=l&&(d=!0),d&&p>=u&&(c(1,0),y()),!f)return!1;if(d){const w=p-l,T=0+1*a(w/o);c(T,1-T)}return!0}),g(),c(0,1),y}function vh(e){const t=getComputedStyle(e);if(t.position!=="absolute"&&t.position!=="fixed"){const{width:n,height:r}=t,s=e.getBoundingClientRect();e.style.position="absolute",e.style.width=n,e.style.height=r,wl(e,s)}}function wl(e,t){const n=e.getBoundingClientRect();if(t.left!==n.left||t.top!==n.top){const r=getComputedStyle(e),s=r.transform==="none"?"":r.transform;e.style.transform=`${s} translate(${t.left-n.left}px, ${t.top-n.top}px)`}}let On;function Xt(e){On=e}function ke(){if(!On)throw new Error("Function called outside component initialization");return On}function Ni(e){ke().$$.on_mount.push(e)}function Th(e){ke().$$.after_update.push(e)}function Il(e){ke().$$.on_destroy.push(e)}function Hy(){const e=ke();return(t,n,{cancelable:r=!1}={})=>{const s=e.$$.callbacks[t];if(s){const i=Tl(t,n,{cancelable:r});return s.slice().forEach(o=>{o.call(e,i)}),!i.defaultPrevented}return!0}}function wh(e,t){return ke().$$.context.set(e,t),t}function Al(e){return ke().$$.context.get(e)}const Be=[],Nr=[];let Ke=[];const zo=[],Rl=Promise.resolve();let Ys=!1;function Cl(){Ys||(Ys=!0,Rl.then(Oi))}function Ih(){return Cl(),Rl}function St(e){Ke.push(e)}const ks=new Set;let Le=0;function Oi(){if(Le!==0)return;const e=On;do{try{for(;Le<Be.length;){const t=Be[Le];Le++,Xt(t),Ah(t.$$)}}catch(t){throw Be.length=0,Le=0,t}for(Xt(null),Be.length=0,Le=0;Nr.length;)Nr.pop()();for(let t=0;t<Ke.length;t+=1){const n=Ke[t];ks.has(n)||(ks.add(n),n())}Ke.length=0}while(Be.length);for(;zo.length;)zo.pop()();Ys=!1,ks.clear(),Xt(e)}function Ah(e){if(e.fragment!==null){e.update(),kt(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(St)}}function Rh(e){const t=[],n=[];Ke.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),Ke=t}let En;function Mi(){return En||(En=Promise.resolve(),En.then(()=>{En=null})),En}function we(e,t,n){e.dispatchEvent(Tl(`${t?"intro":"outro"}${n}`))}const Cr=new Set;let qt;function Ft(){qt={r:0,c:[],p:qt}}function xt(){qt.r||kt(qt.c),qt=qt.p}function V(e,t){e&&e.i&&(Cr.delete(e),e.i(t))}function L(e,t,n,r){if(e&&e.o){if(Cr.has(e))return;Cr.add(e),qt.c.push(()=>{Cr.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}const Li={duration:0};function Ch(e,t,n){const r={direction:"in"};let s=t(e,n,r),i=!1,o,a,l=0;function u(){o&&Nn(e,o)}function c(){const{delay:f=0,duration:d=300,easing:m=Ve,tick:g=O,css:y}=s||Li;y&&(o=Dn(e,0,1,d,f,m,y,l++)),g(0,1);const p=Zn()+f,w=p+d;a&&a.abort(),i=!0,St(()=>we(e,!0,"start")),a=tr(T=>{if(i){if(T>=w)return g(1,0),we(e,!0,"end"),u(),i=!1;if(T>=p){const M=m((T-p)/d);g(M,1-M)}}return i})}let h=!1;return{start(){h||(h=!0,Nn(e),me(s)?(s=s(r),Mi().then(c)):c())},invalidate(){h=!1},end(){i&&(u(),i=!1)}}}function Ph(e,t,n){const r={direction:"out"};let s=t(e,n,r),i=!0,o;const a=qt;a.r+=1;function l(){const{delay:u=0,duration:c=300,easing:h=Ve,tick:f=O,css:d}=s||Li;d&&(o=Dn(e,1,0,c,u,h,d));const m=Zn()+u,g=m+c;St(()=>we(e,!1,"start")),tr(y=>{if(i){if(y>=g)return f(0,1),we(e,!1,"end"),--a.r||kt(a.c),!1;if(y>=m){const p=h((y-m)/c);f(1-p,p)}}return i})}return me(s)?Mi().then(()=>{s=s(r),l()}):l(),{end(u){u&&s.tick&&s.tick(1,0),i&&(o&&Nn(e,o),i=!1)}}}function Gt(e,t,n,r){const s={direction:"both"};let i=t(e,n,s),o=r?0:1,a=null,l=null,u=null;function c(){u&&Nn(e,u)}function h(d,m){const g=d.b-o;return m*=Math.abs(g),{a:o,b:d.b,d:g,duration:m,start:d.start,end:d.start+m,group:d.group}}function f(d){const{delay:m=0,duration:g=300,easing:y=Ve,tick:p=O,css:w}=i||Li,T={start:Zn()+m,b:d};d||(T.group=qt,qt.r+=1),a||l?l=T:(w&&(c(),u=Dn(e,o,d,g,m,y,w)),d&&p(0,1),a=h(T,g),St(()=>we(e,d,"start")),tr(M=>{if(l&&M>l.start&&(a=h(l,g),l=null,we(e,a.b,"start"),w&&(c(),u=Dn(e,o,a.b,a.duration,0,y,i.css))),a){if(M>=a.end)p(o=a.b,1-o),we(e,a.b,"end"),l||(a.b?c():--a.group.r||kt(a.group.c)),a=null;else if(M>=a.start){const G=M-a.start;o=a.a+a.d*y(G/a.duration),p(o,1-o)}}return!!(a||l)}))}return{run(d){me(i)?Mi().then(()=>{i=i(s),f(d)}):f(d)},end(){c(),a=l=null}}}function Or(e,t){const n=t.token={};function r(s,i,o,a){if(t.token!==n)return;t.resolved=a;let l=t.ctx;o!==void 0&&(l=l.slice(),l[o]=a);const u=s&&(t.current=s)(l);let c=!1;t.block&&(t.blocks?t.blocks.forEach((h,f)=>{f!==i&&h&&(Ft(),L(h,1,1,()=>{t.blocks[f]===h&&(t.blocks[f]=null)}),xt())}):t.block.d(1),u.c(),V(u,1),u.m(t.mount(),t.anchor),c=!0),t.block=u,t.blocks&&(t.blocks[i]=u),c&&Oi()}if(rh(e)){const s=ke();if(e.then(i=>{Xt(s),r(t.then,1,t.value,i),Xt(null)},i=>{if(Xt(s),r(t.catch,2,t.error,i),Xt(null),!t.hasCatch)throw i}),t.current!==t.pending)return r(t.pending,0),!0}else{if(t.current!==t.then)return r(t.then,1,t.value,e),!0;t.resolved=e}}function Pl(e,t,n){const r=t.slice(),{resolved:s}=e;e.current===e.then&&(r[e.value]=s),e.current===e.catch&&(r[e.error]=s),e.block.p(r,n)}function bh(e,t){L(e,1,1,()=>{t.delete(e.key)})}function Sh(e,t){e.f(),bh(e,t)}function Vh(e,t,n,r,s,i,o,a,l,u,c,h){let f=e.length,d=i.length,m=f;const g={};for(;m--;)g[e[m].key]=m;const y=[],p=new Map,w=new Map,T=[];for(m=d;m--;){const A=h(s,i,m),q=n(A);let j=o.get(q);j?r&&T.push(()=>j.p(A,t)):(j=u(q,A),j.c()),p.set(q,y[m]=j),q in g&&w.set(q,Math.abs(m-g[q]))}const M=new Set,G=new Set;function z(A){V(A,1),A.m(a,c),o.set(A.key,A),c=A.first,d--}for(;f&&d;){const A=y[d-1],q=e[f-1],j=A.key,C=q.key;A===q?(c=A.first,f--,d--):p.has(C)?!o.has(j)||M.has(j)?z(A):G.has(C)?f--:w.get(j)>w.get(C)?(G.add(j),z(A)):(M.add(C),f--):(l(q,o),f--)}for(;f--;){const A=e[f];p.has(A.key)||l(A,o)}for(;d;)z(y[d-1]);return kt(T),y}function kh(e,t){const n={},r={},s={$$scope:1};let i=e.length;for(;i--;){const o=e[i],a=t[i];if(a){for(const l in o)l in a||(r[l]=1);for(const l in a)s[l]||(n[l]=a[l],s[l]=1);e[i]=a}else for(const l in o)s[l]=1}for(const o in r)o in n||(n[o]=void 0);return n}function Dh(e){return typeof e=="object"&&e!==null?e:{}}function at(e){e&&e.c()}function rt(e,t,n,r){const{fragment:s,after_update:i}=e.$$;s&&s.m(t,n),r||St(()=>{const o=e.$$.on_mount.map(pl).filter(me);e.$$.on_destroy?e.$$.on_destroy.push(...o):kt(o),e.$$.on_mount=[]}),i.forEach(St)}function st(e,t){const n=e.$$;n.fragment!==null&&(Rh(n.after_update),kt(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Nh(e,t){e.$$.dirty[0]===-1&&(Be.push(e),Cl(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ut(e,t,n,r,s,i,o,a=[-1]){const l=On;Xt(e);const u=e.$$={fragment:null,ctx:[],props:i,update:O,not_equal:s,bound:Fo(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:Fo(),dirty:a,skip_bound:!1,root:t.target||l.$$.root};o&&o(u.root);let c=!1;if(u.ctx=n?n(e,t.props||{},(h,f,...d)=>{const m=d.length?d[0]:f;return u.ctx&&s(u.ctx[h],u.ctx[h]=m)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](m),c&&Nh(e,h)),f}):[],u.update(),c=!0,kt(u.before_update),u.fragment=r?r(u.ctx):!1,t.target){if(t.hydrate){const h=dh(t.target);u.fragment&&u.fragment.l(h),h.forEach(P)}else u.fragment&&u.fragment.c();t.intro&&V(e.$$.fragment),rt(e,t.target,t.anchor,t.customElement),Oi()}Xt(l)}class Bt{$destroy(){st(this,1),this.$destroy=O}$on(t,n){if(!me(n))return O;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!sh(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const gr=parseFloat;function Js(e,t=";"){let n;if(Array.isArray(e))n=e.filter(r=>r);else{n=[];for(const r in e)e[r]&&n.push(`${r}:${e[r]}`)}return n.join(t)}function Oh(e,t,n,r){let s,i;const o="1em";let a,l,u,c="-.125em";const h="visible";return r&&(u="center",i="1.25em"),n&&(s=n),t&&(t=="lg"?(l="1.33333em",a=".75em",c="-.225em"):t=="xs"?l=".75em":t=="sm"?l=".875em":l=t.replace("x","em")),Js([Js({float:s,width:i,height:o,"line-height":a,"font-size":l,"text-align":u,"vertical-align":c,"transform-origin":"center",overflow:h}),e])}function Mh(e,t,n,r,s,i=1,o="",a=""){let l=1,u=1;return s&&(s=="horizontal"?l=-1:s=="vertical"?u=-1:l=u=-1),Js([`translate(${gr(t)*i}${o},${gr(n)*i}${o})`,`scale(${l*gr(e)},${u*gr(e)})`,r&&`rotate(${r}${a})`]," ")}function $o(e){let t,n,r,s,i,o,a,l;function u(f,d){return typeof f[10][4]=="string"?Fh:Lh}let c=u(e),h=c(e);return{c(){t=Te("svg"),n=Te("g"),r=Te("g"),h.c(),_(r,"transform",e[12]),_(n,"transform",s="translate("+e[10][0]/2+" "+e[10][1]/2+")"),_(n,"transform-origin",i=e[10][0]/4+" 0"),_(t,"id",o=e[1]||void 0),_(t,"class",a="svelte-fa "+e[0]+" svelte-1cj2gr0"),_(t,"style",e[11]),_(t,"viewBox",l="0 0 "+e[10][0]+" "+e[10][1]),_(t,"aria-hidden","true"),_(t,"role","img"),_(t,"xmlns","http://www.w3.org/2000/svg"),Nt(t,"pulse",e[4]),Nt(t,"spin",e[3])},m(f,d){D(f,t,d),b(t,n),b(n,r),h.m(r,null)},p(f,d){c===(c=u(f))&&h?h.p(f,d):(h.d(1),h=c(f),h&&(h.c(),h.m(r,null))),d&4096&&_(r,"transform",f[12]),d&1024&&s!==(s="translate("+f[10][0]/2+" "+f[10][1]/2+")")&&_(n,"transform",s),d&1024&&i!==(i=f[10][0]/4+" 0")&&_(n,"transform-origin",i),d&2&&o!==(o=f[1]||void 0)&&_(t,"id",o),d&1&&a!==(a="svelte-fa "+f[0]+" svelte-1cj2gr0")&&_(t,"class",a),d&2048&&_(t,"style",f[11]),d&1024&&l!==(l="0 0 "+f[10][0]+" "+f[10][1])&&_(t,"viewBox",l),d&17&&Nt(t,"pulse",f[4]),d&9&&Nt(t,"spin",f[3])},d(f){f&&P(t),h.d()}}}function Lh(e){let t,n,r,s,i,o,a,l,u,c;return{c(){t=Te("path"),o=Te("path"),_(t,"d",n=e[10][4][0]),_(t,"fill",r=e[6]||e[2]||"currentColor"),_(t,"fill-opacity",s=e[9]!=!1?e[7]:e[8]),_(t,"transform",i="translate("+e[10][0]/-2+" "+e[10][1]/-2+")"),_(o,"d",a=e[10][4][1]),_(o,"fill",l=e[5]||e[2]||"currentColor"),_(o,"fill-opacity",u=e[9]!=!1?e[8]:e[7]),_(o,"transform",c="translate("+e[10][0]/-2+" "+e[10][1]/-2+")")},m(h,f){D(h,t,f),D(h,o,f)},p(h,f){f&1024&&n!==(n=h[10][4][0])&&_(t,"d",n),f&68&&r!==(r=h[6]||h[2]||"currentColor")&&_(t,"fill",r),f&896&&s!==(s=h[9]!=!1?h[7]:h[8])&&_(t,"fill-opacity",s),f&1024&&i!==(i="translate("+h[10][0]/-2+" "+h[10][1]/-2+")")&&_(t,"transform",i),f&1024&&a!==(a=h[10][4][1])&&_(o,"d",a),f&36&&l!==(l=h[5]||h[2]||"currentColor")&&_(o,"fill",l),f&896&&u!==(u=h[9]!=!1?h[8]:h[7])&&_(o,"fill-opacity",u),f&1024&&c!==(c="translate("+h[10][0]/-2+" "+h[10][1]/-2+")")&&_(o,"transform",c)},d(h){h&&P(t),h&&P(o)}}}function Fh(e){let t,n,r,s;return{c(){t=Te("path"),_(t,"d",n=e[10][4]),_(t,"fill",r=e[2]||e[5]||"currentColor"),_(t,"transform",s="translate("+e[10][0]/-2+" "+e[10][1]/-2+")")},m(i,o){D(i,t,o)},p(i,o){o&1024&&n!==(n=i[10][4])&&_(t,"d",n),o&36&&r!==(r=i[2]||i[5]||"currentColor")&&_(t,"fill",r),o&1024&&s!==(s="translate("+i[10][0]/-2+" "+i[10][1]/-2+")")&&_(t,"transform",s)},d(i){i&&P(t)}}}function xh(e){let t,n=e[10][4]&&$o(e);return{c(){n&&n.c(),t=Lt()},m(r,s){n&&n.m(r,s),D(r,t,s)},p(r,[s]){r[10][4]?n?n.p(r,s):(n=$o(r),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:O,o:O,d(r){n&&n.d(r),r&&P(t)}}}function Uh(e,t,n){let{class:r=""}=t,{id:s=""}=t,{style:i=""}=t,{icon:o}=t,{size:a=""}=t,{color:l=""}=t,{fw:u=!1}=t,{pull:c=""}=t,{scale:h=1}=t,{translateX:f=0}=t,{translateY:d=0}=t,{rotate:m=""}=t,{flip:g=!1}=t,{spin:y=!1}=t,{pulse:p=!1}=t,{primaryColor:w=""}=t,{secondaryColor:T=""}=t,{primaryOpacity:M=1}=t,{secondaryOpacity:G=.4}=t,{swapOpacity:z=!1}=t,A,q,j;return e.$$set=C=>{"class"in C&&n(0,r=C.class),"id"in C&&n(1,s=C.id),"style"in C&&n(13,i=C.style),"icon"in C&&n(14,o=C.icon),"size"in C&&n(15,a=C.size),"color"in C&&n(2,l=C.color),"fw"in C&&n(16,u=C.fw),"pull"in C&&n(17,c=C.pull),"scale"in C&&n(18,h=C.scale),"translateX"in C&&n(19,f=C.translateX),"translateY"in C&&n(20,d=C.translateY),"rotate"in C&&n(21,m=C.rotate),"flip"in C&&n(22,g=C.flip),"spin"in C&&n(3,y=C.spin),"pulse"in C&&n(4,p=C.pulse),"primaryColor"in C&&n(5,w=C.primaryColor),"secondaryColor"in C&&n(6,T=C.secondaryColor),"primaryOpacity"in C&&n(7,M=C.primaryOpacity),"secondaryOpacity"in C&&n(8,G=C.secondaryOpacity),"swapOpacity"in C&&n(9,z=C.swapOpacity)},e.$$.update=()=>{e.$$.dirty&16384&&n(10,A=o&&o.icon||[0,0,"",[],""]),e.$$.dirty&237568&&n(11,q=Oh(i,a,c,u)),e.$$.dirty&8126464&&n(12,j=Mh(h,f,d,m,g,512))},[r,s,l,y,p,w,T,M,G,z,A,q,j,i,o,a,u,c,h,f,d,m,g]}class Fi extends Bt{constructor(t){super(),Ut(this,t,Uh,xh,Ct,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}}var Bh={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},jh=Bh,qh={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},zh=qh,$h={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]};let Hh=1;function bl(){return`svelte-tabs-${Hh++}`}const Fe=[];function ze(e,t=O){let n;const r=new Set;function s(a){if(Ct(e,a)&&(e=a,n)){const l=!Fe.length;for(const u of r)u[1](),Fe.push(u,e);if(l){for(let u=0;u<Fe.length;u+=2)Fe[u][0](Fe[u+1]);Fe.length=0}}}function i(a){s(a(e))}function o(a,l=O){const u=[a,l];return r.add(u),r.size===1&&(n=t(s)||O),a(e),()=>{r.delete(u),r.size===0&&n&&(n(),n=null)}}return{set:s,update:i,subscribe:o}}function Kh(e){let t,n,r,s;const i=e[4].default,o=un(i,e,e[3],null);return{c(){t=N("div"),o&&o.c(),_(t,"class","svelte-tabs")},m(a,l){D(a,t,l),o&&o.m(t,null),n=!0,r||(s=ut(t,"keydown",e[1]),r=!0)},p(a,[l]){o&&o.p&&(!n||l&8)&&hn(o,i,a,a[3],n?cn(i,a[3],l,null):fn(a[3]),null)},i(a){n||(V(o,a),n=!0)},o(a){L(o,a),n=!1},d(a){a&&P(t),o&&o.d(a),r=!1,s()}}}const xi={};function Gh(e,t,n){const r=e.indexOf(t);e.splice(r,1),n.update(s=>s===t?e[r]||e[e.length-1]:s)}function Qh(e,t,n){let r,{$$slots:s={},$$scope:i}=t,{initialSelectedIndex:o=0}=t;const a=[],l=[],u=[],c=ze({}),h=ze({}),f=ze(null);Ae(e,f,p=>n(5,r=p));const d=ze(null);function m(p,w,T){p.push(w),T.update(M=>M||w),Il(()=>Gh(p,w,T))}function g(p){const w=l.indexOf(p);f.set(p),d.set(u[w])}wh(xi,{registerTab(p){m(l,p,f)},registerTabElement(p){a.push(p)},registerPanel(p){m(u,p,d)},selectTab:g,selectedTab:f,selectedPanel:d,controls:c,labeledBy:h}),Ni(()=>{g(l[o])}),Th(()=>{for(let p=0;p<l.length;p++)c.update(w=>({...w,[l[p].id]:u[p].id})),h.update(w=>({...w,[u[p].id]:l[p].id}))});async function y(p){if(p.target.classList.contains("svelte-tabs__tab")){let w=l.indexOf(r);switch(p.key){case"ArrowRight":w+=1,w>l.length-1&&(w=0),g(l[w]),a[w].focus();break;case"ArrowLeft":w-=1,w<0&&(w=l.length-1),g(l[w]),a[w].focus()}}}return e.$$set=p=>{"initialSelectedIndex"in p&&n(2,o=p.initialSelectedIndex),"$$scope"in p&&n(3,i=p.$$scope)},[f,y,o,i,s]}class Wh extends Bt{constructor(t){super(),Ut(this,t,Qh,Kh,Ct,{initialSelectedIndex:2})}}function Xh(e){let t,n,r,s,i,o;const a=e[9].default,l=un(a,e,e[8],null);return{c(){t=N("li"),l&&l.c(),_(t,"role","tab"),_(t,"id",e[3].id),_(t,"aria-controls",n=e[2][e[3].id]),_(t,"aria-selected",e[1]),_(t,"tabindex",r=e[1]?0:-1),_(t,"class","svelte-tabs__tab svelte-1fbofsd"),Nt(t,"svelte-tabs__selected",e[1])},m(u,c){D(u,t,c),l&&l.m(t,null),e[10](t),s=!0,i||(o=ut(t,"click",e[11]),i=!0)},p(u,[c]){l&&l.p&&(!s||c&256)&&hn(l,a,u,u[8],s?cn(a,u[8],c,null):fn(u[8]),null),(!s||c&4&&n!==(n=u[2][u[3].id]))&&_(t,"aria-controls",n),(!s||c&2)&&_(t,"aria-selected",u[1]),(!s||c&2&&r!==(r=u[1]?0:-1))&&_(t,"tabindex",r),(!s||c&2)&&Nt(t,"svelte-tabs__selected",u[1])},i(u){s||(V(l,u),s=!0)},o(u){L(l,u),s=!1},d(u){u&&P(t),l&&l.d(u),e[10](null),i=!1,o()}}}function Yh(e,t,n){let r,s,{$$slots:i={},$$scope:o}=t,a;const l={id:bl()},{registerTab:u,registerTabElement:c,selectTab:h,selectedTab:f,controls:d}=Al(xi);Ae(e,f,p=>n(7,r=p)),Ae(e,d,p=>n(2,s=p));let m;u(l),Ni(async()=>{await Ih(),c(a)});function g(p){Nr[p?"unshift":"push"](()=>{a=p,n(0,a)})}const y=()=>h(l);return e.$$set=p=>{"$$scope"in p&&n(8,o=p.$$scope)},e.$$.update=()=>{e.$$.dirty&128&&n(1,m=r===l)},[a,m,s,l,h,f,d,r,o,i,g,y]}class Ds extends Bt{constructor(t){super(),Ut(this,t,Yh,Xh,Ct,{})}}function Jh(e){let t,n;const r=e[1].default,s=un(r,e,e[0],null);return{c(){t=N("ul"),s&&s.c(),_(t,"role","tablist"),_(t,"class","svelte-tabs__tab-list svelte-12yby2a")},m(i,o){D(i,t,o),s&&s.m(t,null),n=!0},p(i,[o]){s&&s.p&&(!n||o&1)&&hn(s,r,i,i[0],n?cn(r,i[0],o,null):fn(i[0]),null)},i(i){n||(V(s,i),n=!0)},o(i){L(s,i),n=!1},d(i){i&&P(t),s&&s.d(i)}}}function Zh(e,t,n){let{$$slots:r={},$$scope:s}=t;return e.$$set=i=>{"$$scope"in i&&n(0,s=i.$$scope)},[s,r]}class tf extends Bt{constructor(t){super(),Ut(this,t,Zh,Jh,Ct,{})}}function Ho(e){let t;const n=e[6].default,r=un(n,e,e[5],null);return{c(){r&&r.c()},m(s,i){r&&r.m(s,i),t=!0},p(s,i){r&&r.p&&(!t||i&32)&&hn(r,n,s,s[5],t?cn(n,s[5],i,null):fn(s[5]),null)},i(s){t||(V(r,s),t=!0)},o(s){L(r,s),t=!1},d(s){r&&r.d(s)}}}function ef(e){let t,n,r,s=e[1]===e[2]&&Ho(e);return{c(){t=N("div"),s&&s.c(),_(t,"id",e[2].id),_(t,"aria-labelledby",n=e[0][e[2].id]),_(t,"class","svelte-tabs__tab-panel svelte-epfyet"),_(t,"role","tabpanel")},m(i,o){D(i,t,o),s&&s.m(t,null),r=!0},p(i,[o]){i[1]===i[2]?s?(s.p(i,o),o&2&&V(s,1)):(s=Ho(i),s.c(),V(s,1),s.m(t,null)):s&&(Ft(),L(s,1,1,()=>{s=null}),xt()),(!r||o&1&&n!==(n=i[0][i[2].id]))&&_(t,"aria-labelledby",n)},i(i){r||(V(s),r=!0)},o(i){L(s),r=!1},d(i){i&&P(t),s&&s.d()}}}function nf(e,t,n){let r,s,{$$slots:i={},$$scope:o}=t;const a={id:bl()},{registerPanel:l,selectedPanel:u,labeledBy:c}=Al(xi);return Ae(e,u,h=>n(1,s=h)),Ae(e,c,h=>n(0,r=h)),l(a),e.$$set=h=>{"$$scope"in h&&n(5,o=h.$$scope)},[r,s,a,u,c,o,i]}class Ns extends Bt{constructor(t){super(),Ut(this,t,nf,ef,Ct,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Sl=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},rf=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Vl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,l=s+2<e.length,u=l?e[s+2]:0,c=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,d=u&63;l||(d=64,o||(f=64)),r.push(n[c],n[h],n[f],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Sl(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):rf(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const u=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new sf;const f=i<<2|a>>4;if(r.push(f),u!==64){const d=a<<4&240|u>>2;if(r.push(d),h!==64){const m=u<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class sf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const of=function(e){const t=Sl(e);return Vl.encodeByteArray(t,!0)},Mr=function(e){return of(e).replace(/\./g,"")},af=function(e){try{return Vl.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function lf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uf=()=>lf().__FIREBASE_DEFAULTS__,cf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},hf=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&af(e[1]);return t&&JSON.parse(t)},kl=()=>{try{return uf()||cf()||hf()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ff=e=>{var t,n;return(n=(t=kl())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},df=e=>{const t=ff(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Dl=()=>{var e;return(e=kl())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function pf(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Mr(JSON.stringify(n)),Mr(JSON.stringify(o)),a].join(".")}function gf(){try{return typeof indexedDB=="object"}catch{return!1}}function _f(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="FirebaseError";class dn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=yf,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nl.prototype.create)}}class Nl{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Ef(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new dn(s,a,r)}}function Ef(e,t){return e.replace(vf,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const vf=/\{\$([^}]+)}/g;function Zs(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(Ko(i)&&Ko(o)){if(!Zs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ko(e){return e!==null&&typeof e=="object"}/**
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
 */function ce(e){return e&&e._delegate?e._delegate:e}class Mn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const _e="[DEFAULT]";/**
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
 */class Tf{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new mf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(If(t))try{this.getOrInitializeService({instanceIdentifier:_e})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=_e){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=_e){return this.instances.has(t)}getOptions(t=_e){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wf(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=_e){return this.component?this.component.multipleInstances?t:_e:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wf(e){return e===_e?void 0:e}function If(e){return e.instantiationMode==="EAGER"}/**
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
 */class Af{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Tf(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(W||(W={}));const Rf={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},Cf=W.INFO,Pf={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},bf=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Pf[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ol{constructor(t){this.name=t,this._logLevel=Cf,this._logHandler=bf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in W))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Rf[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...t),this._logHandler(this,W.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...t),this._logHandler(this,W.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,W.INFO,...t),this._logHandler(this,W.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,W.WARN,...t),this._logHandler(this,W.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...t),this._logHandler(this,W.ERROR,...t)}}const Sf=(e,t)=>t.some(n=>e instanceof n);let Go,Qo;function Vf(){return Go||(Go=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kf(){return Qo||(Qo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ml=new WeakMap,ti=new WeakMap,Ll=new WeakMap,Os=new WeakMap,Ui=new WeakMap;function Df(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(ie(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Ml.set(n,e)}).catch(()=>{}),Ui.set(t,e),t}function Nf(e){if(ti.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});ti.set(e,t)}let ei={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ti.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ll.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ie(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Of(e){ei=e(ei)}function Mf(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ms(this),t,...n);return Ll.set(r,t.sort?t.sort():[t]),ie(r)}:kf().includes(e)?function(...t){return e.apply(Ms(this),t),ie(Ml.get(this))}:function(...t){return ie(e.apply(Ms(this),t))}}function Lf(e){return typeof e=="function"?Mf(e):(e instanceof IDBTransaction&&Nf(e),Sf(e,Vf())?new Proxy(e,ei):e)}function ie(e){if(e instanceof IDBRequest)return Df(e);if(Os.has(e))return Os.get(e);const t=Lf(e);return t!==e&&(Os.set(e,t),Ui.set(t,e)),t}const Ms=e=>Ui.get(e);function Ff(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=ie(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ie(o.result),l.oldVersion,l.newVersion,ie(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const xf=["get","getKey","getAll","getAllKeys","count"],Uf=["put","add","delete","clear"],Ls=new Map;function Wo(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ls.get(t))return Ls.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Uf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||xf.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return Ls.set(t,i),i}Of(e=>({...e,get:(t,n,r)=>Wo(t,n)||e.get(t,n,r),has:(t,n)=>!!Wo(t,n)||e.has(t,n)}));/**
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
 */class Bf{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jf(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ni="@firebase/app",Xo="0.9.14";/**
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
 */const Re=new Ol("@firebase/app"),qf="@firebase/app-compat",zf="@firebase/analytics-compat",$f="@firebase/analytics",Hf="@firebase/app-check-compat",Kf="@firebase/app-check",Gf="@firebase/auth",Qf="@firebase/auth-compat",Wf="@firebase/database",Xf="@firebase/database-compat",Yf="@firebase/functions",Jf="@firebase/functions-compat",Zf="@firebase/installations",td="@firebase/installations-compat",ed="@firebase/messaging",nd="@firebase/messaging-compat",rd="@firebase/performance",sd="@firebase/performance-compat",id="@firebase/remote-config",od="@firebase/remote-config-compat",ad="@firebase/storage",ld="@firebase/storage-compat",ud="@firebase/firestore",cd="@firebase/firestore-compat",hd="firebase",fd="10.0.0";/**
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
 */const ri="[DEFAULT]",dd={[ni]:"fire-core",[qf]:"fire-core-compat",[$f]:"fire-analytics",[zf]:"fire-analytics-compat",[Kf]:"fire-app-check",[Hf]:"fire-app-check-compat",[Gf]:"fire-auth",[Qf]:"fire-auth-compat",[Wf]:"fire-rtdb",[Xf]:"fire-rtdb-compat",[Yf]:"fire-fn",[Jf]:"fire-fn-compat",[Zf]:"fire-iid",[td]:"fire-iid-compat",[ed]:"fire-fcm",[nd]:"fire-fcm-compat",[rd]:"fire-perf",[sd]:"fire-perf-compat",[id]:"fire-rc",[od]:"fire-rc-compat",[ad]:"fire-gcs",[ld]:"fire-gcs-compat",[ud]:"fire-fst",[cd]:"fire-fst-compat","fire-js":"fire-js",[hd]:"fire-js-all"};/**
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
 */const Lr=new Map,si=new Map;function md(e,t){try{e.container.addComponent(t)}catch(n){Re.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Fr(e){const t=e.name;if(si.has(t))return Re.debug(`There were multiple attempts to register component ${t}.`),!1;si.set(t,e);for(const n of Lr.values())md(n,e);return!0}function pd(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const gd={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},oe=new Nl("app","Firebase",gd);/**
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
 */class _d{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw oe.create("app-deleted",{appName:this._name})}}/**
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
 */const yd=fd;function Fl(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ri,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw oe.create("bad-app-name",{appName:String(s)});if(n||(n=Dl()),!n)throw oe.create("no-options");const i=Lr.get(s);if(i){if(Zs(n,i.options)&&Zs(r,i.config))return i;throw oe.create("duplicate-app",{appName:s})}const o=new Af(s);for(const l of si.values())o.addComponent(l);const a=new _d(n,r,o);return Lr.set(s,a),a}function Ed(e=ri){const t=Lr.get(e);if(!t&&e===ri&&Dl())return Fl();if(!t)throw oe.create("no-app",{appName:e});return t}function Ge(e,t,n){var r;let s=(r=dd[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Re.warn(a.join(" "));return}Fr(new Mn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const vd="firebase-heartbeat-database",Td=1,Ln="firebase-heartbeat-store";let Fs=null;function xl(){return Fs||(Fs=Ff(vd,Td,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ln)}}}).catch(e=>{throw oe.create("idb-open",{originalErrorMessage:e.message})})),Fs}async function wd(e){try{return await(await xl()).transaction(Ln).objectStore(Ln).get(Ul(e))}catch(t){if(t instanceof dn)Re.warn(t.message);else{const n=oe.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Re.warn(n.message)}}}async function Yo(e,t){try{const r=(await xl()).transaction(Ln,"readwrite");await r.objectStore(Ln).put(t,Ul(e)),await r.done}catch(n){if(n instanceof dn)Re.warn(n.message);else{const r=oe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Re.warn(r.message)}}}function Ul(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Id=1024,Ad=30*24*60*60*1e3;class Rd{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pd(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Jo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Ad}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Jo(),{heartbeatsToSend:n,unsentEntries:r}=Cd(this._heartbeatsCache.heartbeats),s=Mr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Jo(){return new Date().toISOString().substring(0,10)}function Cd(e,t=Id){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Zo(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Zo(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gf()?_f().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await wd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Zo(e){return Mr(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function bd(e){Fr(new Mn("platform-logger",t=>new Bf(t),"PRIVATE")),Fr(new Mn("heartbeat",t=>new Rd(t),"PRIVATE")),Ge(ni,Xo,e),Ge(ni,Xo,"esm2017"),Ge("fire-js","")}bd("");var Sd="firebase",Vd="10.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ge(Sd,Vd,"app");var kd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},I,Bi=Bi||{},x=kd||self;function Zr(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function er(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Dd(e){return Object.prototype.hasOwnProperty.call(e,xs)&&e[xs]||(e[xs]=++Nd)}var xs="closure_uid_"+(1e9*Math.random()>>>0),Nd=0;function Od(e,t,n){return e.call.apply(e.bind,arguments)}function Md(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function Tt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Tt=Od:Tt=Md,Tt.apply(null,arguments)}function _r(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function dt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function pe(){this.s=this.s,this.o=this.o}var Ld=0;pe.prototype.s=!1;pe.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Ld!=0)&&Dd(this)};pe.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Bl=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function ji(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function ta(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Zr(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function wt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}wt.prototype.h=function(){this.defaultPrevented=!0};var Fd=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{x.addEventListener("test",()=>{},t),x.removeEventListener("test",()=>{},t)}catch{}return e}();function Fn(e){return/^[\s\xa0]*$/.test(e)}function ts(){var e=x.navigator;return e&&(e=e.userAgent)?e:""}function jt(e){return ts().indexOf(e)!=-1}function qi(e){return qi[" "](e),e}qi[" "]=function(){};function xd(e,t){var n=Vm;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Ud=jt("Opera"),Ze=jt("Trident")||jt("MSIE"),jl=jt("Edge"),ii=jl||Ze,ql=jt("Gecko")&&!(ts().toLowerCase().indexOf("webkit")!=-1&&!jt("Edge"))&&!(jt("Trident")||jt("MSIE"))&&!jt("Edge"),Bd=ts().toLowerCase().indexOf("webkit")!=-1&&!jt("Edge");function zl(){var e=x.document;return e?e.documentMode:void 0}var oi;t:{var Us="",Bs=function(){var e=ts();if(ql)return/rv:([^\);]+)(\)|;)/.exec(e);if(jl)return/Edge\/([\d\.]+)/.exec(e);if(Ze)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Bd)return/WebKit\/(\S+)/.exec(e);if(Ud)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Bs&&(Us=Bs?Bs[1]:""),Ze){var js=zl();if(js!=null&&js>parseFloat(Us)){oi=String(js);break t}}oi=Us}var ai;if(x.document&&Ze){var ea=zl();ai=ea||parseInt(oi,10)||void 0}else ai=void 0;var jd=ai;function xn(e,t){if(wt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(ql){t:{try{qi(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:qd[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&xn.$.h.call(this)}}dt(xn,wt);var qd={2:"touch",3:"pen",4:"mouse"};xn.prototype.h=function(){xn.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var nr="closure_listenable_"+(1e6*Math.random()|0),zd=0;function $d(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++zd,this.fa=this.ia=!1}function es(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function zi(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Hd(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function $l(e){const t={};for(const n in e)t[n]=e[n];return t}const na="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Hl(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<na.length;i++)n=na[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ns(e){this.src=e,this.g={},this.h=0}ns.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=ui(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new $d(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function li(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=Bl(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(es(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ui(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var $i="closure_lm_"+(1e6*Math.random()|0),qs={};function Kl(e,t,n,r,s){if(r&&r.once)return Ql(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Kl(e,t[i],n,r,s);return null}return n=Gi(n),e&&e[nr]?e.O(t,n,er(r)?!!r.capture:!!r,s):Gl(e,t,n,!1,r,s)}function Gl(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=er(s)?!!s.capture:!!s,a=Ki(e);if(a||(e[$i]=a=new ns(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=Kd(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Fd||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(Xl(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Kd(){function e(n){return t.call(e.src,e.listener,n)}const t=Gd;return e}function Ql(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Ql(e,t[i],n,r,s);return null}return n=Gi(n),e&&e[nr]?e.P(t,n,er(r)?!!r.capture:!!r,s):Gl(e,t,n,!0,r,s)}function Wl(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)Wl(e,t[i],n,r,s);else r=er(r)?!!r.capture:!!r,n=Gi(n),e&&e[nr]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=ui(i,n,r,s),-1<n&&(es(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ki(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ui(t,n,r,s)),(n=-1<e?t[e]:null)&&Hi(n))}function Hi(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[nr])li(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Xl(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ki(t))?(li(n,e),n.h==0&&(n.src=null,t[$i]=null)):es(e)}}}function Xl(e){return e in qs?qs[e]:qs[e]="on"+e}function Gd(e,t){if(e.fa)e=!0;else{t=new xn(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Hi(e),e=n.call(r,t)}return e}function Ki(e){return e=e[$i],e instanceof ns?e:null}var zs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gi(e){return typeof e=="function"?e:(e[zs]||(e[zs]=function(t){return e.handleEvent(t)}),e[zs])}function ft(){pe.call(this),this.i=new ns(this),this.S=this,this.J=null}dt(ft,pe);ft.prototype[nr]=!0;ft.prototype.removeEventListener=function(e,t,n,r){Wl(this,e,t,n,r)};function gt(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new wt(t,e);else if(t instanceof wt)t.target=t.target||e;else{var s=t;t=new wt(r,e),Hl(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=yr(o,r,!0,t)&&s}if(o=t.g=e,s=yr(o,r,!0,t)&&s,s=yr(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=yr(o,r,!1,t)&&s}ft.prototype.N=function(){if(ft.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)es(n[r]);delete e.g[t],e.h--}}this.J=null};ft.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};ft.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function yr(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&li(e.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Qi=x.JSON.stringify;class Qd{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Wd(){var e=Wi;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Xd{constructor(){this.h=this.g=null}add(t,n){const r=Yl.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Yl=new Qd(()=>new Yd,e=>e.reset());class Yd{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Jd(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Zd(e){x.setTimeout(()=>{throw e},0)}let Un,Bn=!1,Wi=new Xd,Jl=()=>{const e=x.Promise.resolve(void 0);Un=()=>{e.then(tm)}};var tm=()=>{for(var e;e=Wd();){try{e.h.call(e.g)}catch(n){Zd(n)}var t=Yl;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Bn=!1};function rs(e,t){ft.call(this),this.h=e||1,this.g=t||x,this.j=Tt(this.qb,this),this.l=Date.now()}dt(rs,ft);I=rs.prototype;I.ga=!1;I.T=null;I.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),gt(this,"tick"),this.ga&&(Xi(this),this.start()))}};I.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Xi(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}I.N=function(){rs.$.N.call(this),Xi(this),delete this.g};function Yi(e,t,n){if(typeof e=="function")n&&(e=Tt(e,n));else if(e&&typeof e.handleEvent=="function")e=Tt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:x.setTimeout(e,t||0)}function Zl(e){e.g=Yi(()=>{e.g=null,e.i&&(e.i=!1,Zl(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class em extends pe{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Zl(this)}N(){super.N(),this.g&&(x.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jn(e){pe.call(this),this.h=e,this.g={}}dt(jn,pe);var ra=[];function tu(e,t,n,r){Array.isArray(n)||(n&&(ra[0]=n.toString()),n=ra);for(var s=0;s<n.length;s++){var i=Kl(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function eu(e){zi(e.g,function(t,n){this.g.hasOwnProperty(n)&&Hi(t)},e),e.g={}}jn.prototype.N=function(){jn.$.N.call(this),eu(this)};jn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ss(){this.g=!0}ss.prototype.Ea=function(){this.g=!1};function nm(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function rm(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function $e(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+im(e,n)+(r?" "+r:"")})}function sm(e,t){e.info(function(){return"TIMEOUT: "+t})}ss.prototype.info=function(){};function im(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Qi(n)}catch{return t}}var De={},sa=null;function is(){return sa=sa||new ft}De.Ta="serverreachability";function nu(e){wt.call(this,De.Ta,e)}dt(nu,wt);function qn(e){const t=is();gt(t,new nu(t))}De.STAT_EVENT="statevent";function ru(e,t){wt.call(this,De.STAT_EVENT,e),this.stat=t}dt(ru,wt);function Rt(e){const t=is();gt(t,new ru(t,e))}De.Ua="timingevent";function su(e,t){wt.call(this,De.Ua,e),this.size=t}dt(su,wt);function rr(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return x.setTimeout(function(){e()},t)}var os={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},iu={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ji(){}Ji.prototype.h=null;function ia(e){return e.h||(e.h=e.i())}function ou(){}var sr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Zi(){wt.call(this,"d")}dt(Zi,wt);function to(){wt.call(this,"c")}dt(to,wt);var ci;function as(){}dt(as,Ji);as.prototype.g=function(){return new XMLHttpRequest};as.prototype.i=function(){return{}};ci=new as;function ir(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new jn(this),this.P=om,e=ii?125:void 0,this.V=new rs(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new au}function au(){this.i=null,this.g="",this.h=!1}var om=45e3,hi={},xr={};I=ir.prototype;I.setTimeout=function(e){this.P=e};function fi(e,t,n){e.L=1,e.v=us(Zt(t)),e.s=n,e.S=!0,lu(e,null)}function lu(e,t){e.G=Date.now(),or(e),e.A=Zt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),gu(n.i,"t",r),e.C=0,n=e.l.J,e.h=new au,e.g=Fu(e.l,n?t:null,!e.s),0<e.O&&(e.M=new em(Tt(e.Pa,e,e.g),e.O)),tu(e.U,e.g,"readystatechange",e.nb),t=e.I?$l(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),qn(),nm(e.j,e.u,e.A,e.m,e.W,e.s)}I.nb=function(e){e=e.target;const t=this.M;t&&zt(e)==3?t.l():this.Pa(e)};I.Pa=function(e){try{if(e==this.g)t:{const c=zt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||ii||this.g&&(this.h.h||this.g.ja()||ua(this.g)))){this.J||c!=4||t==7||(t==8||0>=h?qn(3):qn(2)),ls(this);var n=this.g.da();this.ca=n;e:if(uu(this)){var r=ua(this.g);e="";var s=r.length,i=zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ye(this),Pn(this);var o="";break e}this.h.i=new x.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,rm(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Fn(a)){var u=a;break e}}u=null}if(n=u)$e(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,di(this,n);else{this.i=!1,this.o=3,Rt(12),ye(this),Pn(this);break t}}this.S?(cu(this,c,o),ii&&this.i&&c==3&&(tu(this.U,this.V,"tick",this.mb),this.V.start())):($e(this.j,this.m,o,null),di(this,o)),c==4&&ye(this),this.i&&!this.J&&(c==4?Nu(this.l,this):(this.i=!1,or(this)))}else Pm(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Rt(12)):(this.o=0,Rt(13)),ye(this),Pn(this)}}}catch{}finally{}};function uu(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function cu(e,t,n){let r=!0,s;for(;!e.J&&e.C<n.length;)if(s=am(e,n),s==xr){t==4&&(e.o=4,Rt(14),r=!1),$e(e.j,e.m,null,"[Incomplete Response]");break}else if(s==hi){e.o=4,Rt(15),$e(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else $e(e.j,e.m,s,null),di(e,s);uu(e)&&s!=xr&&s!=hi&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Rt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),oo(t),t.M=!0,Rt(11))):($e(e.j,e.m,n,"[Invalid Chunked Response]"),ye(e),Pn(e))}I.mb=function(){if(this.g){var e=zt(this.g),t=this.g.ja();this.C<t.length&&(ls(this),cu(this,e,t),this.i&&e!=4&&or(this))}};function am(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?xr:(n=Number(t.substring(n,r)),isNaN(n)?hi:(r+=1,r+n>t.length?xr:(t=t.slice(r,r+n),e.C=r+n,t)))}I.cancel=function(){this.J=!0,ye(this)};function or(e){e.Y=Date.now()+e.P,hu(e,e.P)}function hu(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=rr(Tt(e.lb,e),t)}function ls(e){e.B&&(x.clearTimeout(e.B),e.B=null)}I.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(sm(this.j,this.A),this.L!=2&&(qn(),Rt(17)),ye(this),this.o=2,Pn(this)):hu(this,this.Y-e)};function Pn(e){e.l.H==0||e.J||Nu(e.l,e)}function ye(e){ls(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Xi(e.V),eu(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function di(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||mi(n.i,e))){if(!e.K&&mi(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)jr(n),fs(n);else break t;io(n),Rt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=rr(Tt(n.ib,n),6e3));if(1>=Eu(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ee(n,11)}else if((e.K||n.g==e)&&jr(n),!Fn(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let u=s[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const m=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.i;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(eo(i,i.h),i.h=null))}if(r.F){const g=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(r.Da=g,J(r.I,r.F,g))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Lu(r,r.J?r.pa:null,r.Y),o.K){vu(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(ls(a),or(a)),r.g=o}else ku(r);0<n.j.length&&ds(n)}else u[0]!="stop"&&u[0]!="close"||Ee(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ee(n,7):so(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}qn(4)}catch{}}function lm(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Zr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function um(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Zr(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function fu(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Zr(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=um(e),r=lm(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var du=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cm(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ie(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ie){this.h=e.h,Ur(this,e.j),this.s=e.s,this.g=e.g,Br(this,e.m),this.l=e.l;var t=e.i,n=new zn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),oa(this,n),this.o=e.o}else e&&(t=String(e).match(du))?(this.h=!1,Ur(this,t[1]||"",!0),this.s=wn(t[2]||""),this.g=wn(t[3]||"",!0),Br(this,t[4]),this.l=wn(t[5]||"",!0),oa(this,t[6]||"",!0),this.o=wn(t[7]||"")):(this.h=!1,this.i=new zn(null,this.h))}Ie.prototype.toString=function(){var e=[],t=this.j;t&&e.push(In(t,aa,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(In(t,aa,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(In(n,n.charAt(0)=="/"?dm:fm,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",In(n,pm)),e.join("")};function Zt(e){return new Ie(e)}function Ur(e,t,n){e.j=n?wn(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Br(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function oa(e,t,n){t instanceof zn?(e.i=t,gm(e.i,e.h)):(n||(t=In(t,mm)),e.i=new zn(t,e.h))}function J(e,t,n){e.i.set(t,n)}function us(e){return J(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function wn(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function In(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,hm),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function hm(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var aa=/[#\/\?@]/g,fm=/[#\?:]/g,dm=/[#\?]/g,mm=/[#\?@]/g,pm=/#/g;function zn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ge(e){e.g||(e.g=new Map,e.h=0,e.i&&cm(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}I=zn.prototype;I.add=function(e,t){ge(this),this.i=null,e=mn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function mu(e,t){ge(e),t=mn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function pu(e,t){return ge(e),t=mn(e,t),e.g.has(t)}I.forEach=function(e,t){ge(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};I.ta=function(){ge(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};I.Z=function(e){ge(this);let t=[];if(typeof e=="string")pu(this,e)&&(t=t.concat(this.g.get(mn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};I.set=function(e,t){return ge(this),this.i=null,e=mn(this,e),pu(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};I.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function gu(e,t,n){mu(e,t),0<n.length&&(e.i=null,e.g.set(mn(e,t),ji(n)),e.h+=n.length)}I.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function mn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function gm(e,t){t&&!e.j&&(ge(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(mu(this,r),gu(this,s,n))},e)),e.j=t}var _m=class{constructor(e,t){this.g=e,this.map=t}};function _u(e){this.l=e||ym,x.PerformanceNavigationTiming?(e=x.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(x.g&&x.g.Ka&&x.g.Ka()&&x.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ym=10;function yu(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Eu(e){return e.h?1:e.g?e.g.size:0}function mi(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function eo(e,t){e.g?e.g.add(t):e.h=t}function vu(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}_u.prototype.cancel=function(){if(this.i=Tu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Tu(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return ji(e.i)}var Em=class{stringify(e){return x.JSON.stringify(e,void 0)}parse(e){return x.JSON.parse(e,void 0)}};function vm(){this.g=new Em}function Tm(e,t,n){const r=n||"";try{fu(e,function(s,i){let o=s;er(s)&&(o=Qi(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function wm(e,t){const n=new ss;if(x.Image){const r=new Image;r.onload=_r(Er,n,r,"TestLoadImage: loaded",!0,t),r.onerror=_r(Er,n,r,"TestLoadImage: error",!1,t),r.onabort=_r(Er,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=_r(Er,n,r,"TestLoadImage: timeout",!1,t),x.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Er(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function ar(e){this.l=e.fc||null,this.j=e.ob||!1}dt(ar,Ji);ar.prototype.g=function(){return new cs(this.l,this.j)};ar.prototype.i=function(e){return function(){return e}}({});function cs(e,t){ft.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=no,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}dt(cs,ft);var no=0;I=cs.prototype;I.open=function(e,t){if(this.readyState!=no)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,$n(this)};I.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||x).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};I.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,lr(this)),this.readyState=no};I.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,$n(this)),this.g&&(this.readyState=3,$n(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof x.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;wu(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function wu(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}I.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?lr(this):$n(this),this.readyState==3&&wu(this)}};I.Za=function(e){this.g&&(this.response=this.responseText=e,lr(this))};I.Ya=function(e){this.g&&(this.response=e,lr(this))};I.ka=function(){this.g&&lr(this)};function lr(e){e.readyState=4,e.l=null,e.j=null,e.A=null,$n(e)}I.setRequestHeader=function(e,t){this.v.append(e,t)};I.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};I.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function $n(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(cs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Im=x.JSON.parse;function nt(e){ft.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Iu,this.L=this.M=!1}dt(nt,ft);var Iu="",Am=/^https?$/i,Rm=["POST","PUT"];I=nt.prototype;I.Oa=function(e){this.M=e};I.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ci.g(),this.C=this.u?ia(this.u):ia(ci),this.g.onreadystatechange=Tt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){la(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=x.FormData&&e instanceof x.FormData,!(0<=Bl(Rm,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Cu(this),0<this.B&&((this.L=Cm(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Tt(this.ua,this)):this.A=Yi(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){la(this,i)}};function Cm(e){return Ze&&typeof e.timeout=="number"&&e.ontimeout!==void 0}I.ua=function(){typeof Bi<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,gt(this,"timeout"),this.abort(8))};function la(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Au(e),hs(e)}function Au(e){e.F||(e.F=!0,gt(e,"complete"),gt(e,"error"))}I.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,gt(this,"complete"),gt(this,"abort"),hs(this))};I.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),hs(this,!0)),nt.$.N.call(this)};I.La=function(){this.s||(this.G||this.v||this.l?Ru(this):this.kb())};I.kb=function(){Ru(this)};function Ru(e){if(e.h&&typeof Bi<"u"&&(!e.C[1]||zt(e)!=4||e.da()!=2)){if(e.v&&zt(e)==4)Yi(e.La,0,e);else if(gt(e,"readystatechange"),zt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(du)[1]||null;!s&&x.self&&x.self.location&&(s=x.self.location.protocol.slice(0,-1)),r=!Am.test(s?s.toLowerCase():"")}n=r}if(n)gt(e,"complete"),gt(e,"success");else{e.m=6;try{var i=2<zt(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",Au(e)}}finally{hs(e)}}}}function hs(e,t){if(e.g){Cu(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||gt(e,"ready");try{n.onreadystatechange=r}catch{}}}function Cu(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(x.clearTimeout(e.A),e.A=null)}I.isActive=function(){return!!this.g};function zt(e){return e.g?e.g.readyState:0}I.da=function(){try{return 2<zt(this)?this.g.status:-1}catch{return-1}};I.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};I.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Im(t)}};function ua(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Iu:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Pm(e){const t={};e=(e.g&&2<=zt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Fn(e[r]))continue;var n=Jd(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}Hd(t,function(r){return r.join(", ")})}I.Ia=function(){return this.m};I.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Pu(e){let t="";return zi(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function ro(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Pu(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):J(e,t,n))}function vn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function bu(e){this.Ga=0,this.j=[],this.l=new ss,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=vn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=vn("baseRetryDelayMs",5e3,e),this.hb=vn("retryDelaySeedMs",1e4,e),this.eb=vn("forwardChannelMaxRetries",2,e),this.xa=vn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new _u(e&&e.concurrentRequestLimit),this.Ja=new vm,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}I=bu.prototype;I.ra=8;I.H=1;function so(e){if(Su(e),e.H==3){var t=e.W++,n=Zt(e.I);if(J(n,"SID",e.K),J(n,"RID",t),J(n,"TYPE","terminate"),ur(e,n),t=new ir(e,e.l,t),t.L=2,t.v=us(Zt(n)),n=!1,x.navigator&&x.navigator.sendBeacon)try{n=x.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&x.Image&&(new Image().src=t.v,n=!0),n||(t.g=Fu(t.l,null),t.g.ha(t.v)),t.G=Date.now(),or(t)}Mu(e)}function fs(e){e.g&&(oo(e),e.g.cancel(),e.g=null)}function Su(e){fs(e),e.u&&(x.clearTimeout(e.u),e.u=null),jr(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&x.clearTimeout(e.m),e.m=null)}function ds(e){if(!yu(e.i)&&!e.m){e.m=!0;var t=e.Na;Un||Jl(),Bn||(Un(),Bn=!0),Wi.add(t,e),e.C=0}}function bm(e,t){return Eu(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=rr(Tt(e.Na,e,t),Ou(e,e.C)),e.C++,!0)}I.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new ir(this,this.l,e);let i=this.s;if(this.U&&(i?(i=$l(i),Hl(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Vu(this,s,t),n=Zt(this.I),J(n,"RID",e),J(n,"CVER",22),this.F&&J(n,"X-HTTP-Session-Id",this.F),ur(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(Pu(i)))+"&"+t:this.o&&ro(n,this.o,i)),eo(this.i,s),this.bb&&J(n,"TYPE","init"),this.P?(J(n,"$req",t),J(n,"SID","null"),s.aa=!0,fi(s,n,null)):fi(s,n,t),this.H=2}}else this.H==3&&(e?ca(this,e):this.j.length==0||yu(this.i)||ca(this))};function ca(e,t){var n;t?n=t.m:n=e.W++;const r=Zt(e.I);J(r,"SID",e.K),J(r,"RID",n),J(r,"AID",e.V),ur(e,r),e.o&&e.s&&ro(r,e.o,e.s),n=new ir(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Vu(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),eo(e.i,n),fi(n,r,t)}function ur(e,t){e.na&&zi(e.na,function(n,r){J(t,r,n)}),e.h&&fu({},function(n,r){J(t,r,n)})}function Vu(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Tt(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let u=s[l].g;const c=s[l].map;if(u-=i,0>u)i=Math.max(0,s[l].g-100),a=!1;else try{Tm(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function ku(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Un||Jl(),Bn||(Un(),Bn=!0),Wi.add(t,e),e.A=0}}function io(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=rr(Tt(e.Ma,e),Ou(e,e.A)),e.A++,!0)}I.Ma=function(){if(this.u=null,Du(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=rr(Tt(this.jb,this),e)}};I.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Rt(10),fs(this),Du(this))};function oo(e){e.B!=null&&(x.clearTimeout(e.B),e.B=null)}function Du(e){e.g=new ir(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Zt(e.wa);J(t,"RID","rpc"),J(t,"SID",e.K),J(t,"AID",e.V),J(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&J(t,"TO",e.qa),J(t,"TYPE","xmlhttp"),ur(e,t),e.o&&e.s&&ro(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=us(Zt(t)),n.s=null,n.S=!0,lu(n,e)}I.ib=function(){this.v!=null&&(this.v=null,fs(this),io(this),Rt(19))};function jr(e){e.v!=null&&(x.clearTimeout(e.v),e.v=null)}function Nu(e,t){var n=null;if(e.g==t){jr(e),oo(e),e.g=null;var r=2}else if(mi(e.i,t))n=t.F,vu(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var s=e.C;r=is(),gt(r,new su(r,n)),ds(e)}else ku(e);else if(s=t.o,s==3||s==0&&0<t.ca||!(r==1&&bm(e,t)||r==2&&io(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Ee(e,5);break;case 4:Ee(e,10);break;case 3:Ee(e,6);break;default:Ee(e,2)}}}function Ou(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Ee(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Tt(e.pb,e);n||(n=new Ie("//www.google.com/images/cleardot.gif"),x.location&&x.location.protocol=="http"||Ur(n,"https"),us(n)),wm(n.toString(),r)}else Rt(2);e.H=0,e.h&&e.h.za(t),Mu(e),Su(e)}I.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Rt(2)):(this.l.info("Failed to ping google.com"),Rt(1))};function Mu(e){if(e.H=0,e.ma=[],e.h){const t=Tu(e.i);(t.length!=0||e.j.length!=0)&&(ta(e.ma,t),ta(e.ma,e.j),e.i.i.length=0,ji(e.j),e.j.length=0),e.h.ya()}}function Lu(e,t,n){var r=n instanceof Ie?Zt(n):new Ie(n);if(r.g!="")t&&(r.g=t+"."+r.g),Br(r,r.m);else{var s=x.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new Ie(null);r&&Ur(i,r),t&&(i.g=t),s&&Br(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&J(r,n,t),J(r,"VER",e.ra),ur(e,r),r}function Fu(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new nt(new ar({ob:!0})):new nt(e.va),t.Oa(e.J),t}I.isActive=function(){return!!this.h&&this.h.isActive(this)};function xu(){}I=xu.prototype;I.Ba=function(){};I.Aa=function(){};I.za=function(){};I.ya=function(){};I.isActive=function(){return!0};I.Va=function(){};function qr(){if(Ze&&!(10<=Number(jd)))throw Error("Environmental error: no available transport.")}qr.prototype.g=function(e,t){return new Vt(e,t)};function Vt(e,t){ft.call(this),this.g=new bu(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Fn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Fn(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new pn(this)}dt(Vt,ft);Vt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Rt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Lu(e,null,e.Y),ds(e)};Vt.prototype.close=function(){so(this.g)};Vt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Qi(e),e=n);t.j.push(new _m(t.fb++,e)),t.H==3&&ds(t)};Vt.prototype.N=function(){this.g.h=null,delete this.j,so(this.g),delete this.g,Vt.$.N.call(this)};function Uu(e){Zi.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}dt(Uu,Zi);function Bu(){to.call(this),this.status=1}dt(Bu,to);function pn(e){this.g=e}dt(pn,xu);pn.prototype.Ba=function(){gt(this.g,"a")};pn.prototype.Aa=function(e){gt(this.g,new Uu(e))};pn.prototype.za=function(e){gt(this.g,new Bu)};pn.prototype.ya=function(){gt(this.g,"b")};function Sm(){this.blockSize=-1}function Mt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}dt(Mt,Sm);Mt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function $s(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}Mt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)$s(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){$s(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){$s(this,r),s=0;break}}this.h=s,this.i+=t};Mt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function X(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var Vm={};function ao(e){return-128<=e&&128>e?xd(e,function(t){return new X([t|0],0>t?-1:0)}):new X([e|0],0>e?-1:0)}function $t(e){if(isNaN(e)||!isFinite(e))return Qe;if(0>e)return pt($t(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=pi;return new X(t,0)}function ju(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return pt(ju(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=$t(Math.pow(t,8)),r=Qe,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=$t(Math.pow(t,i)),r=r.R(i).add($t(o))):(r=r.R(n),r=r.add($t(o)))}return r}var pi=4294967296,Qe=ao(0),gi=ao(1),ha=ao(16777216);I=X.prototype;I.ea=function(){if(Dt(this))return-pt(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:pi+r)*t,t*=pi}return e};I.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Yt(this))return"0";if(Dt(this))return"-"+pt(this).toString(e);for(var t=$t(Math.pow(e,6)),n=this,r="";;){var s=$r(n,t).g;n=zr(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,Yt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};I.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Yt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Dt(e){return e.h==-1}I.X=function(e){return e=zr(this,e),Dt(e)?-1:Yt(e)?0:1};function pt(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new X(n,~e.h).add(gi)}I.abs=function(){return Dt(this)?pt(this):this};I.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new X(n,n[n.length-1]&-2147483648?-1:0)};function zr(e,t){return e.add(pt(t))}I.R=function(e){if(Yt(this)||Yt(e))return Qe;if(Dt(this))return Dt(e)?pt(this).R(pt(e)):pt(pt(this).R(e));if(Dt(e))return pt(this.R(pt(e)));if(0>this.X(ha)&&0>e.X(ha))return $t(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,l=e.D(s)&65535;n[2*r+2*s]+=o*l,vr(n,2*r+2*s),n[2*r+2*s+1]+=i*l,vr(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,vr(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,vr(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new X(n,0)};function vr(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Tn(e,t){this.g=e,this.h=t}function $r(e,t){if(Yt(t))throw Error("division by zero");if(Yt(e))return new Tn(Qe,Qe);if(Dt(e))return t=$r(pt(e),t),new Tn(pt(t.g),pt(t.h));if(Dt(t))return t=$r(e,pt(t)),new Tn(pt(t.g),t.h);if(30<e.g.length){if(Dt(e)||Dt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=gi,r=t;0>=r.X(e);)n=fa(n),r=fa(r);var s=xe(n,1),i=xe(r,1);for(r=xe(r,2),n=xe(n,2);!Yt(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=xe(r,1),n=xe(n,1)}return t=zr(e,s.R(t)),new Tn(s,t)}for(s=Qe;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=$t(n),o=i.R(t);Dt(o)||0<o.X(e);)n-=r,i=$t(n),o=i.R(t);Yt(i)&&(i=gi),s=s.add(i),e=zr(e,o)}return new Tn(s,e)}I.gb=function(e){return $r(this,e).h};I.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new X(n,this.h&e.h)};I.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new X(n,this.h|e.h)};I.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new X(n,this.h^e.h)};function fa(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new X(n,e.h)}function xe(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new X(s,e.h)}qr.prototype.createWebChannel=qr.prototype.g;Vt.prototype.send=Vt.prototype.u;Vt.prototype.open=Vt.prototype.m;Vt.prototype.close=Vt.prototype.close;os.NO_ERROR=0;os.TIMEOUT=8;os.HTTP_ERROR=6;iu.COMPLETE="complete";ou.EventType=sr;sr.OPEN="a";sr.CLOSE="b";sr.ERROR="c";sr.MESSAGE="d";ft.prototype.listen=ft.prototype.O;nt.prototype.listenOnce=nt.prototype.P;nt.prototype.getLastError=nt.prototype.Sa;nt.prototype.getLastErrorCode=nt.prototype.Ia;nt.prototype.getStatus=nt.prototype.da;nt.prototype.getResponseJson=nt.prototype.Wa;nt.prototype.getResponseText=nt.prototype.ja;nt.prototype.send=nt.prototype.ha;nt.prototype.setWithCredentials=nt.prototype.Oa;Mt.prototype.digest=Mt.prototype.l;Mt.prototype.reset=Mt.prototype.reset;Mt.prototype.update=Mt.prototype.j;X.prototype.add=X.prototype.add;X.prototype.multiply=X.prototype.R;X.prototype.modulo=X.prototype.gb;X.prototype.compare=X.prototype.X;X.prototype.toNumber=X.prototype.ea;X.prototype.toString=X.prototype.toString;X.prototype.getBits=X.prototype.D;X.fromNumber=$t;X.fromString=ju;var km=function(){return new qr},Dm=function(){return is()},Hs=os,Nm=iu,Om=De,da={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Mm=ar,Tr=ou,Lm=nt,Fm=Mt,We=X;const ma="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gn="10.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce=new Ol("@firebase/firestore");function pa(){return Ce.logLevel}function R(e,...t){if(Ce.logLevel<=W.DEBUG){const n=t.map(lo);Ce.debug(`Firestore (${gn}): ${e}`,...n)}}function te(e,...t){if(Ce.logLevel<=W.ERROR){const n=t.map(lo);Ce.error(`Firestore (${gn}): ${e}`,...n)}}function tn(e,...t){if(Ce.logLevel<=W.WARN){const n=t.map(lo);Ce.warn(`Firestore (${gn}): ${e}`,...n)}}function lo(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e="Unexpected state"){const t=`FIRESTORE (${gn}) INTERNAL ASSERTION FAILED: `+e;throw te(t),new Error(t)}function Z(e,t){e||F()}function B(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends dn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qu{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class xm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class Um{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Bm{constructor(t){this.t=t,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new ae;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ae,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ae)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string"),new qu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Z(t===null||typeof t=="string"),new yt(t)}}class jm{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class qm{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new jm(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zm{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $m{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Z(typeof n.token=="string"),this.R=n.token,new zm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Hm(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function Q(e,t){return e<t?-1:e>t?1:0}function en(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new S(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new S(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new S(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new S(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ct.fromMillis(Date.now())}static fromDate(t){return ct.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new ct(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Q(this.nanoseconds,t.nanoseconds):Q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t){this.timestamp=t}static fromTimestamp(t){return new U(t)}static min(){return new U(new ct(0,0))}static max(){return new U(new ct(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t,n,r){n===void 0?n=0:n>t.length&&F(),r===void 0?r=t.length-n:r>t.length-n&&F(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Hn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Hn?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class et extends Hn{construct(t,n,r){return new et(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new S(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new et(n)}static emptyPath(){return new et([])}}const Km=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends Hn{construct(t,n,r){return new vt(t,n,r)}static isValidIdentifier(t){return Km.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vt(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new S(E.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new S(E.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new S(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new S(E.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new vt(n)}static emptyPath(){return new vt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t){this.path=t}static fromPath(t){return new k(et.fromString(t))}static fromName(t){return new k(et.fromString(t).popFirst(5))}static empty(){return new k(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&et.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return et.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new k(new et(t.slice()))}}function Gm(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=U.fromTimestamp(r===1e9?new ct(n+1,0):new ct(n,r));return new he(s,k.empty(),t)}function Qm(e){return new he(e.readTime,e.key,-1)}class he{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new he(U.min(),k.empty(),-1)}static max(){return new he(U.max(),k.empty(),-1)}}function Wm(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=k.comparator(e.documentKey,t.documentKey),n!==0?n:Q(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ym{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cr(e){if(e.code!==E.FAILED_PRECONDITION||e.message!==Xm)throw e;R("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new v((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof v?n:v.resolve(n)}catch(n){return v.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):v.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):v.reject(n)}static resolve(t){return new v((n,r)=>{n(t)})}static reject(t){return new v((n,r)=>{r(t)})}static waitFor(t){return new v((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(t){let n=v.resolve(!1);for(const r of t)n=n.next(s=>s?v.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new v((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(t[u]).next(c=>{o[u]=c,++a,a===i&&r(o)},c=>s(c))}})}static doWhile(t,n){return new v((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function hr(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class uo{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}uo.ae=-1;function ms(e){return e==null}function Hr(e){return e===0&&1/e==-1/0}function Jm(e){return typeof e=="number"&&Number.isInteger(e)&&!Hr(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ne(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function $u(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t,n){this.comparator=t,this.root=n||mt.EMPTY}insert(t,n){return new tt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(t){return new tt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,mt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new wr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new wr(this.root,t,this.comparator,!1)}getReverseIterator(){return new wr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new wr(this.root,t,this.comparator,!0)}}class wr{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class mt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r!=null?r:mt.RED,this.left=s!=null?s:mt.EMPTY,this.right=i!=null?i:mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new mt(t!=null?t:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return mt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const t=this.left.check();if(t!==this.right.check())throw F();return t+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,n,r,s,i){return this}insert(t,n,r){return new mt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.comparator=t,this.data=new tt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new _a(this.data.getIterator())}getIteratorFrom(t){return new _a(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof It)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new It(this.comparator);return n.data=t,n}}class _a{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.fields=t,t.sort(vt.comparator)}static empty(){return new Ot([])}unionWith(t){let n=new It(vt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Ot(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return en(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Hu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Hu("Invalid base64 string: "+i):i}}(t);return new At(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new At(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}At.EMPTY_BYTE_STRING=new At("");const Zm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fe(e){if(Z(!!e),typeof e=="string"){let t=0;const n=Zm.exec(e);if(Z(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ot(e.seconds),nanos:ot(e.nanos)}}function ot(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Pe(e){return typeof e=="string"?At.fromBase64String(e):At.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ho(e){const t=e.mapValue.fields.__previous_value__;return co(t)?ho(t):t}function Kn(e){const t=fe(e.mapValue.fields.__local_write_time__.timestampValue);return new ct(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(t,n,r,s,i,o,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Gn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Gn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Gn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function be(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?co(e)?4:ep(e)?9007199254740991:10:F()}function Qt(e,t){if(e===t)return!0;const n=be(e);if(n!==be(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Kn(e).isEqual(Kn(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=fe(s.timestampValue),a=fe(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Pe(s.bytesValue).isEqual(Pe(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return ot(s.geoPointValue.latitude)===ot(i.geoPointValue.latitude)&&ot(s.geoPointValue.longitude)===ot(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ot(s.integerValue)===ot(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ot(s.doubleValue),a=ot(i.doubleValue);return o===a?Hr(o)===Hr(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return en(e.arrayValue.values||[],t.arrayValue.values||[],Qt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(ga(o)!==ga(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Qt(o[l],a[l])))return!1;return!0}(e,t);default:return F()}}function Qn(e,t){return(e.values||[]).find(n=>Qt(n,t))!==void 0}function nn(e,t){if(e===t)return 0;const n=be(e),r=be(t);if(n!==r)return Q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Q(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=ot(i.integerValue||i.doubleValue),l=ot(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return ya(e.timestampValue,t.timestampValue);case 4:return ya(Kn(e),Kn(t));case 5:return Q(e.stringValue,t.stringValue);case 6:return function(i,o){const a=Pe(i),l=Pe(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=Q(a[u],l[u]);if(c!==0)return c}return Q(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=Q(ot(i.latitude),ot(o.latitude));return a!==0?a:Q(ot(i.longitude),ot(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=nn(a[u],l[u]);if(c)return c}return Q(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===Ir.mapValue&&o===Ir.mapValue)return 0;if(i===Ir.mapValue)return 1;if(o===Ir.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const f=Q(l[h],c[h]);if(f!==0)return f;const d=nn(a[l[h]],u[c[h]]);if(d!==0)return d}return Q(l.length,c.length)}(e.mapValue,t.mapValue);default:throw F()}}function ya(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return Q(e,t);const n=fe(e),r=fe(t),s=Q(n.seconds,r.seconds);return s!==0?s:Q(n.nanos,r.nanos)}function rn(e){return _i(e)}function _i(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=fe(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Pe(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return k.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=_i(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${_i(n.fields[o])}`;return s+"}"}(e.mapValue):F()}function yi(e){return!!e&&"integerValue"in e}function fo(e){return!!e&&"arrayValue"in e}function Ea(e){return!!e&&"nullValue"in e}function va(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Pr(e){return!!e&&"mapValue"in e}function bn(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ne(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=bn(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=bn(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ep(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.value=t}static empty(){return new Pt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Pr(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=bn(n)}setAll(t){let n=vt.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=bn(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Pr(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Qt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Pr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){Ne(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new Pt(bn(this.value))}}function Ku(e){const t=[];return Ne(e.fields,(n,r)=>{const s=new vt([n]);if(Pr(r)){const i=Ku(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new Ot(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Et(t,0,U.min(),U.min(),U.min(),Pt.empty(),0)}static newFoundDocument(t,n,r,s){return new Et(t,1,n,U.min(),r,s,0)}static newNoDocument(t,n){return new Et(t,2,n,U.min(),U.min(),Pt.empty(),0)}static newUnknownDocument(t,n){return new Et(t,3,n,U.min(),U.min(),Pt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Et&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Kr{constructor(t,n){this.position=t,this.inclusive=n}}function Ta(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=k.comparator(k.fromName(o.referenceValue),n.key):r=nn(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function wa(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Qt(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Sn{constructor(t,n="asc"){this.field=t,this.dir=n}}function np(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Gu{}class lt extends Gu{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new sp(t,n,r):n==="array-contains"?new ap(t,r):n==="in"?new lp(t,r):n==="not-in"?new up(t,r):n==="array-contains-any"?new cp(t,r):new lt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new ip(t,r):new op(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(nn(n,this.value)):n!==null&&be(this.value)===be(n)&&this.matchesComparison(nn(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Wt extends Gu{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new Wt(t,n)}matches(t){return Qu(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Qu(e){return e.op==="and"}function Wu(e){return rp(e)&&Qu(e)}function rp(e){for(const t of e.filters)if(t instanceof Wt)return!1;return!0}function Ei(e){if(e instanceof lt)return e.field.canonicalString()+e.op.toString()+rn(e.value);if(Wu(e))return e.filters.map(t=>Ei(t)).join(",");{const t=e.filters.map(n=>Ei(n)).join(",");return`${e.op}(${t})`}}function Xu(e,t){return e instanceof lt?function(r,s){return s instanceof lt&&r.op===s.op&&r.field.isEqual(s.field)&&Qt(r.value,s.value)}(e,t):e instanceof Wt?function(r,s){return s instanceof Wt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Xu(o,s.filters[a]),!0):!1}(e,t):void F()}function Yu(e){return e instanceof lt?function(n){return`${n.field.canonicalString()} ${n.op} ${rn(n.value)}`}(e):e instanceof Wt?function(n){return n.op.toString()+" {"+n.getFilters().map(Yu).join(" ,")+"}"}(e):"Filter"}class sp extends lt{constructor(t,n,r){super(t,n,r),this.key=k.fromName(r.referenceValue)}matches(t){const n=k.comparator(t.key,this.key);return this.matchesComparison(n)}}class ip extends lt{constructor(t,n){super(t,"in",n),this.keys=Ju("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class op extends lt{constructor(t,n){super(t,"not-in",n),this.keys=Ju("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Ju(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>k.fromName(r.referenceValue))}class ap extends lt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return fo(n)&&Qn(n.arrayValue,this.value)}}class lp extends lt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Qn(this.value.arrayValue,n)}}class up extends lt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Qn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Qn(this.value.arrayValue,n)}}class cp extends lt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!fo(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Qn(this.value.arrayValue,r))}}/**
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
 */class hp{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function Ia(e,t=null,n=[],r=[],s=null,i=null,o=null){return new hp(e,t,n,r,s,i,o)}function mo(e){const t=B(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Ei(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ms(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>rn(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>rn(r)).join(",")),t.he=n}return t.he}function po(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!np(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Xu(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!wa(e.startAt,t.startAt)&&wa(e.endAt,t.endAt)}function vi(e){return k.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function fp(e,t,n,r,s,i,o,a){return new ps(e,t,n,r,s,i,o,a)}function gs(e){return new ps(e)}function Aa(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function dp(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function mp(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function pp(e){return e.collectionGroup!==null}function Xe(e){const t=B(e);if(t.Pe===null){t.Pe=[];const n=mp(t),r=dp(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new Sn(n)),t.Pe.push(new Sn(vt.keyField(),"asc"));else{let s=!1;for(const i of t.explicitOrderBy)t.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new Sn(vt.keyField(),i))}}}return t.Pe}function ee(e){const t=B(e);if(!t.Ie)if(t.limitType==="F")t.Ie=Ia(t.path,t.collectionGroup,Xe(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of Xe(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new Sn(i.field,o))}const r=t.endAt?new Kr(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Kr(t.startAt.position,t.startAt.inclusive):null;t.Ie=Ia(t.path,t.collectionGroup,n,t.filters,t.limit,r,s)}return t.Ie}function Ti(e,t,n){return new ps(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function _s(e,t){return po(ee(e),ee(t))&&e.limitType===t.limitType}function Zu(e){return`${mo(ee(e))}|lt:${e.limitType}`}function wi(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Yu(s)).join(", ")}]`),ms(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>rn(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>rn(s)).join(",")),`Target(${r})`}(ee(e))}; limitType=${e.limitType})`}function ys(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):k.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of Xe(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=Ta(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Xe(r),s)||r.endAt&&!function(o,a,l){const u=Ta(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Xe(r),s))}(e,t)}function gp(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function tc(e){return(t,n)=>{let r=!1;for(const s of Xe(e)){const i=_p(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function _p(e,t,n){const r=e.field.isKeyField()?k.comparator(t.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?nn(l,u):F()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ne(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return $u(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp=new tt(k.comparator);function ne(){return yp}const ec=new tt(k.comparator);function An(...e){let t=ec;for(const n of e)t=t.insert(n.key,n);return t}function nc(e){let t=ec;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function ve(){return Vn()}function rc(){return Vn()}function Vn(){return new _n(e=>e.toString(),(e,t)=>e.isEqual(t))}const Ep=new tt(k.comparator),vp=new It(k.comparator);function $(...e){let t=vp;for(const n of e)t=t.add(n);return t}const Tp=new It(Q);function wp(){return Tp}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hr(t)?"-0":t}}function ic(e){return{integerValue:""+e}}function Ip(e,t){return Jm(t)?ic(t):sc(e,t)}/**
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
 */class Es{constructor(){this._=void 0}}function Ap(e,t,n){return e instanceof Gr?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&co(i)&&(i=ho(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof sn?ac(e,t):e instanceof Wn?lc(e,t):function(s,i){const o=oc(s,i),a=Ra(o)+Ra(s.Te);return yi(o)&&yi(s.Te)?ic(a):sc(s.serializer,a)}(e,t)}function Rp(e,t,n){return e instanceof sn?ac(e,t):e instanceof Wn?lc(e,t):n}function oc(e,t){return e instanceof Qr?function(r){return yi(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Gr extends Es{}class sn extends Es{constructor(t){super(),this.elements=t}}function ac(e,t){const n=uc(t);for(const r of e.elements)n.some(s=>Qt(s,r))||n.push(r);return{arrayValue:{values:n}}}class Wn extends Es{constructor(t){super(),this.elements=t}}function lc(e,t){let n=uc(t);for(const r of e.elements)n=n.filter(s=>!Qt(s,r));return{arrayValue:{values:n}}}class Qr extends Es{constructor(t,n){super(),this.serializer=t,this.Te=n}}function Ra(e){return ot(e.integerValue||e.doubleValue)}function uc(e){return fo(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(t,n){this.field=t,this.transform=n}}function Pp(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof sn&&s instanceof sn||r instanceof Wn&&s instanceof Wn?en(r.elements,s.elements,Qt):r instanceof Qr&&s instanceof Qr?Qt(r.Te,s.Te):r instanceof Gr&&s instanceof Gr}(e.transform,t.transform)}class bp{constructor(t,n){this.version=t,this.transformResults=n}}class Jt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Jt}static exists(t){return new Jt(void 0,t)}static updateTime(t){return new Jt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function br(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class vs{}function cc(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new fc(e.key,Jt.none()):new Ts(e.key,e.data,Jt.none());{const n=e.data,r=Pt.empty();let s=new It(vt.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Oe(e.key,r,new Ot(s.toArray()),Jt.none())}}function Sp(e,t,n){e instanceof Ts?function(s,i,o){const a=s.value.clone(),l=Pa(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Oe?function(s,i,o){if(!br(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Pa(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(hc(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function kn(e,t,n,r){return e instanceof Ts?function(i,o,a,l){if(!br(i.precondition,o))return a;const u=i.value.clone(),c=ba(i.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof Oe?function(i,o,a,l){if(!br(i.precondition,o))return a;const u=ba(i.fieldTransforms,l,o),c=o.data;return c.setAll(hc(i)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,o,a){return br(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function Vp(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=oc(r.transform,s||null);i!=null&&(n===null&&(n=Pt.empty()),n.set(r.field,i))}return n||null}function Ca(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&en(r,s,(i,o)=>Pp(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Ts extends vs{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Oe extends vs{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function hc(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Pa(e,t,n){const r=new Map;Z(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,Rp(o,a,n[s]))}return r}function ba(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Ap(i,o,t))}return r}class fc extends vs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kp extends vs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&Sp(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=kn(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=kn(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=rc();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=cc(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),$())}isEqual(t){return this.batchId===t.batchId&&en(this.mutations,t.mutations,(n,r)=>Ca(n,r))&&en(this.baseMutations,t.baseMutations,(n,r)=>Ca(n,r))}}class go{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){Z(t.mutations.length===r.length);let s=function(){return Ep}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new go(t,n,r,s)}}/**
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
 */class Np{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Op{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it,H;function Mp(e){switch(e){default:return F();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function dc(e){if(e===void 0)return te("GRPC error has no .code"),E.UNKNOWN;switch(e){case it.OK:return E.OK;case it.CANCELLED:return E.CANCELLED;case it.UNKNOWN:return E.UNKNOWN;case it.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case it.INTERNAL:return E.INTERNAL;case it.UNAVAILABLE:return E.UNAVAILABLE;case it.UNAUTHENTICATED:return E.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case it.NOT_FOUND:return E.NOT_FOUND;case it.ALREADY_EXISTS:return E.ALREADY_EXISTS;case it.PERMISSION_DENIED:return E.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case it.ABORTED:return E.ABORTED;case it.OUT_OF_RANGE:return E.OUT_OF_RANGE;case it.UNIMPLEMENTED:return E.UNIMPLEMENTED;case it.DATA_LOSS:return E.DATA_LOSS;default:return F()}}(H=it||(it={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class _o{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ar}static getOrCreateInstance(){return Ar===null&&(Ar=new _o),Ar}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let Ar=null;/**
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
 */function Lp(){return new TextEncoder}/**
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
 */const Fp=new We([4294967295,4294967295],0);function Sa(e){const t=Lp().encode(e),n=new Fm;return n.update(t),new Uint8Array(n.digest())}function Va(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new We([n,r],0),new We([s,i],0)]}class yo{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Rn(`Invalid padding: ${n}`);if(r<0)throw new Rn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Rn(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Rn(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*t.length-n,this.Ae=We.fromNumber(this.de)}Re(t,n,r){let s=t.add(n.multiply(We.fromNumber(r)));return s.compare(Fp)===1&&(s=new We([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ae).toNumber()}Ve(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.de===0)return!1;const n=Sa(t),[r,s]=Va(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);if(!this.Ve(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new yo(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.de===0)return;const n=Sa(t),[r,s]=Va(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);this.me(o)}}me(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Rn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,fr.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new ws(U.min(),s,new tt(Q),ne(),$())}}class fr{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new fr(r,n,$(),$(),$())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t,n,r,s){this.fe=t,this.removedTargetIds=n,this.key=r,this.ge=s}}class mc{constructor(t,n){this.targetId=t,this.pe=n}}class pc{constructor(t,n,r=At.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ka{constructor(){this.ye=0,this.we=Na(),this.Se=At.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(t){t.approximateByteSize()>0&&(this.De=!0,this.Se=t)}Me(){let t=$(),n=$(),r=$();return this.we.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:F()}}),new fr(this.Se,this.be,t,n,r)}xe(){this.De=!1,this.we=Na()}Oe(t,n){this.De=!0,this.we=this.we.insert(t,n)}Ne(t){this.De=!0,this.we=this.we.remove(t)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class xp{constructor(t){this.qe=t,this.Qe=new Map,this.Ke=ne(),this.$e=Da(),this.Ue=new tt(Q)}We(t){for(const n of t.fe)t.ge&&t.ge.isFoundDocument()?this.Ge(n,t.ge):this.ze(n,t.key,t.ge);for(const n of t.removedTargetIds)this.ze(n,t.key,t.ge)}je(t){this.forEachTarget(t,n=>{const r=this.He(n);switch(t.state){case 0:this.Je(n)&&r.Fe(t.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(t.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(t.resumeToken));break;default:F()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(t){var n,r;const s=t.targetId,i=t.pe.count,o=this.Xe(s);if(o){const a=o.target;if(vi(a))if(i===0){const l=new k(a.path);this.ze(s,l,Et.newNoDocument(l,U.min()))}else Z(i===1);else{const l=this.et(s);if(l!==i){const u=this.tt(t,l);if(u.status!==0){this.Ye(s);const c=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(s,c)}(n=_o.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,f,d,m){var g,y,p,w,T,M;const G={localCacheCount:d,existenceFilterCount:m.count},z=m.unchangedNames;return z&&(G.bloomFilter={applied:h===0,hashCount:(g=z==null?void 0:z.hashCount)!==null&&g!==void 0?g:0,bitmapLength:(w=(p=(y=z==null?void 0:z.bits)===null||y===void 0?void 0:y.bitmap)===null||p===void 0?void 0:p.length)!==null&&w!==void 0?w:0,padding:(M=(T=z==null?void 0:z.bits)===null||T===void 0?void 0:T.padding)!==null&&M!==void 0?M:0},f&&(G.bloomFilter.mightContain=f)),G}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,l,t.pe))}}}}tt(t,n){const{unchangedNames:r,count:s}=t.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Pe(i).toUint8Array()}catch(h){if(h instanceof Hu)return tn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new yo(l,o,a)}catch(h){return tn(h instanceof Rn?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const c=h=>{const f=this.qe.rt();return u.mightContain(`projects/${f.projectId}/databases/${f.database}/documents/${h}`)};return u.de===0?{status:1}:{status:s===n-this.it(t.targetId,c)?0:2,nt:c}}it(t,n){const r=this.qe.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{n(i.path.canonicalString())||(this.ze(t,i,null),s++)}),s}st(t){const n=new Map;this.Qe.forEach((i,o)=>{const a=this.Xe(o);if(a){if(i.current&&vi(a.target)){const l=new k(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,Et.newNoDocument(l,t))}i.Ce&&(n.set(o,i.Me()),i.xe())}});let r=$();this.$e.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Ke.forEach((i,o)=>o.setReadTime(t));const s=new ws(t,n,this.Ue,this.Ke,r);return this.Ke=ne(),this.$e=Da(),this.Ue=new tt(Q),s}Ge(t,n){if(!this.Je(t))return;const r=this.ot(t,n.key)?2:0;this.He(t).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(t))}ze(t,n,r){if(!this.Je(t))return;const s=this.He(t);this.ot(t,n)?s.Oe(n,1):s.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(t)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(t){this.Qe.delete(t)}et(t){const n=this.He(t).Me();return this.qe.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Be(t){this.He(t).Be()}He(t){let n=this.Qe.get(t);return n||(n=new ka,this.Qe.set(t,n)),n}_t(t){let n=this.$e.get(t);return n||(n=new It(Q),this.$e=this.$e.insert(t,n)),n}Je(t){const n=this.Xe(t)!==null;return n||R("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){const n=this.Qe.get(t);return n&&n.ve?null:this.qe.ut(t)}Ye(t){this.Qe.set(t,new ka),this.qe.getRemoteKeysForTarget(t).forEach(n=>{this.ze(t,n,null)})}ot(t,n){return this.qe.getRemoteKeysForTarget(t).has(n)}}function Da(){return new tt(k.comparator)}function Na(){return new tt(k.comparator)}const Up=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Bp=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),jp=(()=>({and:"AND",or:"OR"}))();class qp{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Ii(e,t){return e.useProto3Json||ms(t)?t:{value:t}}function Wr(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function gc(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function zp(e,t){return Wr(e,t.toTimestamp())}function Ht(e){return Z(!!e),U.fromTimestamp(function(n){const r=fe(n);return new ct(r.seconds,r.nanos)}(e))}function Eo(e,t){return function(r){return new et(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function _c(e){const t=et.fromString(e);return Z(Tc(t)),t}function Ai(e,t){return Eo(e.databaseId,t.path)}function Ks(e,t){const n=_c(t);if(n.get(1)!==e.databaseId.projectId)throw new S(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new S(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new k(yc(n))}function Ri(e,t){return Eo(e.databaseId,t)}function $p(e){const t=_c(e);return t.length===4?et.emptyPath():yc(t)}function Ci(e){return new et(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function yc(e){return Z(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Oa(e,t,n){return{name:Ai(e,t),fields:n.value.mapValue.fields}}function Hp(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:F()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(u,c){return u.useProto3Json?(Z(c===void 0||typeof c=="string"),At.fromBase64String(c||"")):(Z(c===void 0||c instanceof Uint8Array),At.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?E.UNKNOWN:dc(u.code);return new S(c,u.message||"")}(o);n=new pc(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ks(e,r.document.name),i=Ht(r.document.updateTime),o=r.document.createTime?Ht(r.document.createTime):U.min(),a=new Pt({mapValue:{fields:r.document.fields}}),l=Et.newFoundDocument(s,i,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Sr(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Ks(e,r.document),i=r.readTime?Ht(r.readTime):U.min(),o=Et.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Sr([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Ks(e,r.document),i=r.removedTargetIds||[];n=new Sr([],i,s,null)}else{if(!("filter"in t))return F();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Op(s,i),a=r.targetId;n=new mc(a,o)}}return n}function Kp(e,t){let n;if(t instanceof Ts)n={update:Oa(e,t.key,t.value)};else if(t instanceof fc)n={delete:Ai(e,t.key)};else if(t instanceof Oe)n={update:Oa(e,t.key,t.data),updateMask:eg(t.fieldMask)};else{if(!(t instanceof kp))return F();n={verify:Ai(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Gr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof sn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Wn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Qr)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw F()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:zp(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F()}(e,t.precondition)),n}function Gp(e,t){return e&&e.length>0?(Z(t!==void 0),e.map(n=>function(s,i){let o=s.updateTime?Ht(s.updateTime):Ht(i);return o.isEqual(U.min())&&(o=Ht(i)),new bp(o,s.transformResults||[])}(n,t))):[]}function Qp(e,t){return{documents:[Ri(e,t.path)]}}function Wp(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Ri(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Ri(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return vc(Wt.create(l,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:je(h.field),direction:Jp(h.dir)}}(u))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Ii(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),n}function Xp(e){let t=$p(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Z(r===1);const c=n.from[0];c.allDescendants?s=c.collectionId:t=t.child(c.collectionId)}let i=[];n.where&&(i=function(h){const f=Ec(h);return f instanceof Wt&&Wu(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(m){return new Sn(qe(m.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,ms(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new Kr(d,f)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const f=!h.before,d=h.values||[];return new Kr(d,f)}(n.endAt)),fp(t,s,o,i,a,"F",l,u)}function Yp(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Ec(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=qe(n.unaryFilter.field);return lt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=qe(n.unaryFilter.field);return lt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=qe(n.unaryFilter.field);return lt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=qe(n.unaryFilter.field);return lt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(e):e.fieldFilter!==void 0?function(n){return lt.create(qe(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Wt.create(n.compositeFilter.filters.map(r=>Ec(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F()}}(n.compositeFilter.op))}(e):F()}function Jp(e){return Up[e]}function Zp(e){return Bp[e]}function tg(e){return jp[e]}function je(e){return{fieldPath:e.canonicalString()}}function qe(e){return vt.fromServerFormat(e.fieldPath)}function vc(e){return e instanceof lt?function(n){if(n.op==="=="){if(va(n.value))return{unaryFilter:{field:je(n.field),op:"IS_NAN"}};if(Ea(n.value))return{unaryFilter:{field:je(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(va(n.value))return{unaryFilter:{field:je(n.field),op:"IS_NOT_NAN"}};if(Ea(n.value))return{unaryFilter:{field:je(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:je(n.field),op:Zp(n.op),value:n.value}}}(e):e instanceof Wt?function(n){const r=n.getFilters().map(s=>vc(s));return r.length===1?r[0]:{compositeFilter:{op:tg(n.op),filters:r}}}(e):F()}function eg(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Tc(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t,n,r,s,i=U.min(),o=U.min(),a=At.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new se(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new se(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new se(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new se(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(t){this.ct=t}}function rg(e){const t=Xp({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Ti(t,t.limit,"L"):t}/**
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
 */class sg{constructor(){this.sn=new ig}addToCollectionParentIndex(t,n){return this.sn.add(n),v.resolve()}getCollectionParents(t,n){return v.resolve(this.sn.getEntries(n))}addFieldIndex(t,n){return v.resolve()}deleteFieldIndex(t,n){return v.resolve()}getDocumentsMatchingTarget(t,n){return v.resolve(null)}getIndexType(t,n){return v.resolve(0)}getFieldIndexes(t,n){return v.resolve([])}getNextCollectionGroupToUpdate(t){return v.resolve(null)}getMinOffset(t,n){return v.resolve(he.min())}getMinOffsetFromCollectionGroup(t,n){return v.resolve(he.min())}updateCollectionGroup(t,n,r){return v.resolve()}updateIndexEntries(t,n){return v.resolve()}}class ig{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new It(et.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new It(et.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t){this.Mn=t}next(){return this.Mn+=2,this.Mn}static xn(){return new on(0)}static On(){return new on(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(){this.changes=new _n(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Et.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?v.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ag{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&kn(r.mutation,s,Ot.empty(),ct.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,$()).next(()=>r))}getLocalViewOfDocuments(t,n,r=$()){const s=ve();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=An();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=ve();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,$()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=ne();const o=Vn(),a=function(){return Vn()}();return n.forEach((l,u)=>{const c=r.get(u.key);s.has(u.key)&&(c===void 0||c.mutation instanceof Oe)?i=i.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),kn(c.mutation,u,c.mutation.getFieldMask(),ct.now())):o.set(u.key,Ot.empty())}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new ag(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Vn();let s=new tt((o,a)=>o-a),i=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Ot.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(s.get(a.batchId)||$()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=rc();c.forEach(f=>{if(!i.has(f)){const d=cc(n.get(f),r.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return v.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(i){return k.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):pp(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):v.resolve(ve());let a=-1,l=i;return o.next(u=>v.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(c)?v.resolve():this.remoteDocumentCache.getEntry(t,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,l,u,$())).next(c=>({batchId:a,changes:nc(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new k(n)).next(r=>{let s=An();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const s=n.collectionGroup;let i=An();return this.indexManager.getCollectionParents(t,s).next(o=>v.forEach(o,a=>{const l=function(c,h){return new ps(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(t,l,r).next(u=>{u.forEach((c,h)=>{i=i.insert(c,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s))).next(i=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,Et.newInvalidDocument(u)))});let o=An();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&kn(u.mutation,l,Ot.empty(),ct.now()),ys(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,n){return v.resolve(this.ar.get(n))}saveBundleMetadata(t,n){return this.ar.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Ht(s.createTime)}}(n)),v.resolve()}getNamedQuery(t,n){return v.resolve(this.ur.get(n))}saveNamedQuery(t,n){return this.ur.set(n.name,function(s){return{name:s.name,query:rg(s.bundledQuery),readTime:Ht(s.readTime)}}(n)),v.resolve()}}/**
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
 */class cg{constructor(){this.overlays=new tt(k.comparator),this.cr=new Map}getOverlay(t,n){return v.resolve(this.overlays.get(n))}getOverlays(t,n){const r=ve();return v.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.ht(t,n,i)}),v.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.cr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.cr.delete(r)),v.resolve()}getOverlaysForCollection(t,n,r){const s=ve(),i=n.length+1,o=new k(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return v.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new tt((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=i.get(u.largestBatchId);c===null&&(c=ve(),i=i.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=ve(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=s)););return v.resolve(a)}ht(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.cr.get(s.largestBatchId).delete(r.key);this.cr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Np(n,r));let i=this.cr.get(n);i===void 0&&(i=$(),this.cr.set(n,i)),this.cr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.lr=new It(ht.hr),this.Pr=new It(ht.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,n){const r=new ht(t,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Er(new ht(t,n))}dr(t,n){t.forEach(r=>this.removeReference(r,n))}Ar(t){const n=new k(new et([])),r=new ht(n,t),s=new ht(n,t+1),i=[];return this.Pr.forEachInRange([r,s],o=>{this.Er(o),i.push(o.key)}),i}Rr(){this.lr.forEach(t=>this.Er(t))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){const n=new k(new et([])),r=new ht(n,t),s=new ht(n,t+1);let i=$();return this.Pr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new ht(t,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class ht{constructor(t,n){this.key=t,this.mr=n}static hr(t,n){return k.comparator(t.key,n.key)||Q(t.mr,n.mr)}static Ir(t,n){return Q(t.mr,n.mr)||k.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new It(ht.hr)}checkEmpty(t){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Dp(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.pr=this.pr.add(new ht(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return v.resolve(o)}lookupMutationBatch(t,n){return v.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.wr(r),i=s<0?0:s;return v.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(t){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new ht(n,0),s=new ht(n,Number.POSITIVE_INFINITY),i=[];return this.pr.forEachInRange([r,s],o=>{const a=this.yr(o.mr);i.push(a)}),v.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new It(Q);return n.forEach(s=>{const i=new ht(s,0),o=new ht(s,Number.POSITIVE_INFINITY);this.pr.forEachInRange([i,o],a=>{r=r.add(a.mr)})}),v.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;k.isDocumentKey(i)||(i=i.child(""));const o=new ht(new k(i),0);let a=new It(Q);return this.pr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.mr)),!0)},o),v.resolve(this.Sr(a))}Sr(t){const n=[];return t.forEach(r=>{const s=this.yr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){Z(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return v.forEach(n.mutations,s=>{const i=new ht(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.pr=r})}Cn(t){}containsKey(t,n){const r=new ht(n,0),s=this.pr.firstAfterOrEqual(r);return v.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,v.resolve()}br(t,n){return this.wr(t)}wr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}yr(t){const n=this.wr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(t){this.Dr=t,this.docs=function(){return new tt(k.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return v.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(t,n){let r=ne();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Et.newInvalidDocument(s))}),v.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=ne();const o=n.path,a=new k(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Wm(Qm(c),r)<=0||(s.has(c.key)||ys(n,c))&&(i=i.insert(c.key,c.mutableCopy()))}return v.resolve(i)}getAllFromCollectionGroup(t,n,r,s){F()}vr(t,n){return v.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new dg(this)}getSize(t){return v.resolve(this.size)}}class dg extends og{constructor(t){super(),this.sr=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.sr.addEntry(t,s)):this.sr.removeEntry(r)}),v.waitFor(n)}getFromCache(t,n){return this.sr.getEntry(t,n)}getAllFromCache(t,n){return this.sr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(t){this.persistence=t,this.Cr=new _n(n=>mo(n),po),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new vo,this.targetCount=0,this.Or=on.xn()}forEachTarget(t,n){return this.Cr.forEach((r,s)=>n(s)),v.resolve()}getLastRemoteSnapshotVersion(t){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return v.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),v.resolve()}Ln(t){this.Cr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Or=new on(n),this.highestTargetId=n),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,n){return this.Ln(n),this.targetCount+=1,v.resolve()}updateTargetData(t,n){return this.Ln(n),v.resolve()}removeTargetData(t,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,v.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),v.waitFor(i).next(()=>s)}getTargetCount(t){return v.resolve(this.targetCount)}getTargetData(t,n){const r=this.Cr.get(n)||null;return v.resolve(r)}addMatchingKeys(t,n,r){return this.Mr.Tr(n,r),v.resolve()}removeMatchingKeys(t,n,r){this.Mr.dr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),v.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Mr.Ar(n),v.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Mr.Vr(n);return v.resolve(r)}containsKey(t,n){return v.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(t,n){this.Nr={},this.overlays={},this.Br=new uo(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new mg(this),this.indexManager=new sg,this.remoteDocumentCache=function(s){return new fg(s)}(r=>this.referenceDelegate.qr(r)),this.serializer=new ng(n),this.Qr=new ug(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new cg,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Nr[t.toKey()];return r||(r=new hg(n,this.referenceDelegate),this.Nr[t.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,n,r){R("MemoryPersistence","Starting transaction:",t);const s=new gg(this.Br.next());return this.referenceDelegate.Kr(),r(s).next(i=>this.referenceDelegate.$r(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ur(t,n){return v.or(Object.values(this.Nr).map(r=>()=>r.containsKey(t,n)))}}class gg extends Ym{constructor(t){super(),this.currentSequenceNumber=t}}class To{constructor(t){this.persistence=t,this.Wr=new vo,this.Gr=null}static zr(t){return new To(t)}get jr(){if(this.Gr)return this.Gr;throw F()}addReference(t,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),v.resolve()}removeReference(t,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),v.resolve()}markPotentiallyOrphaned(t,n){return this.jr.add(n.toString()),v.resolve()}removeTarget(t,n){this.Wr.Ar(n.targetId).forEach(s=>this.jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.jr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Kr(){this.Gr=new Set}$r(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.jr,r=>{const s=k.fromPath(r);return this.Hr(t,s).next(i=>{i||n.removeEntry(s,U.min())})}).next(()=>(this.Gr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hr(t,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(t){return 0}Hr(t,n){return v.or([()=>v.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ur(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.Li=r,this.ki=s}static qi(t,n){let r=$(),s=$();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new wo(t,n.fromCache,r,s)}}/**
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
 */class _g{constructor(){this.Qi=!1}initialize(t,n){this.Ki=t,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(t,n,r,s){return this.$i(t,n).next(i=>i||this.Ui(t,n,s,r)).next(i=>i||this.Wi(t,n))}$i(t,n){if(Aa(n))return v.resolve(null);let r=ee(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ti(n,null,"F"),r=ee(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=$(...i);return this.Ki.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const u=this.Gi(n,a);return this.zi(n,u,o,l.readTime)?this.$i(t,Ti(n,null,"F")):this.ji(t,u,n,l)}))})))}Ui(t,n,r,s){return Aa(n)||s.isEqual(U.min())?this.Wi(t,n):this.Ki.getDocuments(t,r).next(i=>{const o=this.Gi(n,i);return this.zi(n,o,r,s)?this.Wi(t,n):(pa()<=W.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),wi(n)),this.ji(t,o,n,Gm(s,-1)))})}Gi(t,n){let r=new It(tc(t));return n.forEach((s,i)=>{ys(t,i)&&(r=r.add(i))}),r}zi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Wi(t,n){return pa()<=W.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",wi(n)),this.Ki.getDocumentsMatchingQuery(t,n,he.min())}ji(t,n,r,s){return this.Ki.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(t,n,r,s){this.persistence=t,this.Hi=n,this.serializer=s,this.Ji=new tt(Q),this.Yi=new _n(i=>mo(i),po),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(r)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new lg(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}}function Eg(e,t,n,r){return new yg(e,t,n,r)}async function wc(e,t){const n=B(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.es(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=$();for(const u of s){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of i){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function vg(e,t){const n=B(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,f=h.keys();let d=v.resolve();return f.forEach(m=>{d=d.next(()=>c.getEntry(l,m)).next(g=>{const y=u.docVersions.get(m);Z(y!==null),g.version.compareTo(y)<0&&(h.applyToRemoteDocument(g,u),g.isValidDocument()&&(g.setReadTime(u.commitVersion),c.addEntry(g)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=$();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function Ic(e){const t=B(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.kr.getLastRemoteSnapshotVersion(n))}function Tg(e,t){const n=B(e),r=t.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];t.targetChanges.forEach((c,h)=>{const f=s.get(h);if(!f)return;a.push(n.kr.removeMatchingKeys(i,c.removedDocuments,h).next(()=>n.kr.addMatchingKeys(i,c.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?d=d.withResumeToken(At.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):c.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(c.resumeToken,r)),s=s.insert(h,d),function(g,y,p){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(f,d,c)&&a.push(n.kr.updateTargetData(i,d))});let l=ne(),u=$();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,c))}),a.push(wg(i,o,t.documentUpdates).next(c=>{l=c.ns,u=c.rs})),!r.isEqual(U.min())){const c=n.kr.getLastRemoteSnapshotVersion(i).next(h=>n.kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(c)}return v.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.Ji=s,i))}function wg(e,t,n){let r=$(),s=$();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=ne();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(U.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ns:o,rs:s}})}function Ig(e,t){const n=B(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Ag(e,t){const n=B(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.kr.getTargetData(r,t).next(i=>i?(s=i,v.resolve(s)):n.kr.allocateTargetId(r).next(o=>(s=new se(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ji.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(t,r.targetId)),r})}async function Pi(e,t,n){const r=B(e),s=r.Ji.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!hr(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(s.target)}function Ma(e,t,n){const r=B(e);let s=U.min(),i=$();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,u,c){const h=B(l),f=h.Yi.get(c);return f!==void 0?v.resolve(h.Ji.get(f)):h.kr.getTargetData(u,c)}(r,o,ee(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,t,n?s:U.min(),n?i:$())).next(a=>(Rg(r,gp(t),a),{documents:a,ss:i})))}function Rg(e,t,n){let r=e.Zi.get(t)||U.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.Zi.set(t,r)}class La{constructor(){this.activeTargetIds=wp()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Cg{constructor(){this.Hs=new La,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,n,r){this.Js[t]=n}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new La,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Pg{Ys(t){}shutdown(){}}/**
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
 */class Fa{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ro)t(0)}no(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ro)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Rr=null;function Gs(){return Rr===null?Rr=function(){return 268435456+Math.round(2147483648*Math.random())}():Rr++,"0x"+Rr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection";class Vg extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http";this.To=r+"://"+n.host,this.Eo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get Ao(){return!1}Ro(n,r,s,i,o){const a=Gs(),l=this.Vo(n,r);R("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const u={};return this.mo(u,i,o),this.fo(n,l,u,s).then(c=>(R("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw tn("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",s),c})}po(n,r,s,i,o,a){return this.Ro(n,r,s,i,o)}mo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gn}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Vo(n,r){const s=bg[n];return`${this.To}/v1/${r}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}fo(t,n,r,s){const i=Gs();return new Promise((o,a)=>{const l=new Lm;l.setWithCredentials(!0),l.listenOnce(Nm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Hs.NO_ERROR:const c=l.getResponseJson();R(_t,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(c)),o(c);break;case Hs.TIMEOUT:R(_t,`RPC '${t}' ${i} timed out`),a(new S(E.DEADLINE_EXCEEDED,"Request time out"));break;case Hs.HTTP_ERROR:const h=l.getStatus();if(R(_t,`RPC '${t}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const m=function(y){const p=y.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(p)>=0?p:E.UNKNOWN}(d.status);a(new S(m,d.message))}else a(new S(E.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new S(E.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{R(_t,`RPC '${t}' ${i} completed.`)}});const u=JSON.stringify(s);R(_t,`RPC '${t}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}yo(t,n,r){const s=Gs(),i=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=km(),a=Dm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new Mm({})),this.mo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=i.join("");R(_t,`Creating RPC '${t}' stream ${s}: ${c}`,l);const h=o.createWebChannel(c,l);let f=!1,d=!1;const m=new Sg({so:y=>{d?R(_t,`Not sending because RPC '${t}' stream ${s} is closed:`,y):(f||(R(_t,`Opening RPC '${t}' stream ${s} transport.`),h.open(),f=!0),R(_t,`RPC '${t}' stream ${s} sending:`,y),h.send(y))},oo:()=>h.close()}),g=(y,p,w)=>{y.listen(p,T=>{try{w(T)}catch(M){setTimeout(()=>{throw M},0)}})};return g(h,Tr.EventType.OPEN,()=>{d||R(_t,`RPC '${t}' stream ${s} transport opened.`)}),g(h,Tr.EventType.CLOSE,()=>{d||(d=!0,R(_t,`RPC '${t}' stream ${s} transport closed`),m.Po())}),g(h,Tr.EventType.ERROR,y=>{d||(d=!0,tn(_t,`RPC '${t}' stream ${s} transport errored:`,y),m.Po(new S(E.UNAVAILABLE,"The operation could not be completed")))}),g(h,Tr.EventType.MESSAGE,y=>{var p;if(!d){const w=y.data[0];Z(!!w);const T=w,M=T.error||((p=T[0])===null||p===void 0?void 0:p.error);if(M){R(_t,`RPC '${t}' stream ${s} received error:`,M);const G=M.status;let z=function(j){const C=it[j];if(C!==void 0)return dc(C)}(G),A=M.message;z===void 0&&(z=E.INTERNAL,A="Unknown error status: "+G+" with message "+M.message),d=!0,m.Po(new S(z,A)),h.close()}else R(_t,`RPC '${t}' stream ${s} received:`,w),m.Io(w)}}),g(a,Om.STAT_EVENT,y=>{y.stat===da.PROXY?R(_t,`RPC '${t}' stream ${s} detected buffering proxy`):y.stat===da.NOPROXY&&R(_t,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{m.ho()},0),m}}function Qs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(e){return new qp(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(t,n,r=1e3,s=1.5,i=6e4){this.ii=t,this.timerId=n,this.wo=r,this.So=s,this.bo=i,this.Do=0,this.vo=null,this.Co=Date.now(),this.reset()}reset(){this.Do=0}Fo(){this.Do=this.bo}Mo(t){this.cancel();const n=Math.floor(this.Do+this.xo()),r=Math.max(0,Date.now()-this.Co),s=Math.max(0,n-r);s>0&&R("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Do} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.vo=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),t())),this.Do*=this.So,this.Do<this.wo&&(this.Do=this.wo),this.Do>this.bo&&(this.Do=this.bo)}Oo(){this.vo!==null&&(this.vo.skipDelay(),this.vo=null)}cancel(){this.vo!==null&&(this.vo.cancel(),this.vo=null)}xo(){return(Math.random()-.5)*this.Do}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t,n,r,s,i,o,a,l){this.ii=t,this.No=r,this.Bo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Lo=0,this.ko=null,this.qo=null,this.stream=null,this.Qo=new Ac(t,n)}Ko(){return this.state===1||this.state===5||this.$o()}$o(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Uo()}async stop(){this.Ko()&&await this.close(0)}Wo(){this.state=0,this.Qo.reset()}Go(){this.$o()&&this.ko===null&&(this.ko=this.ii.enqueueAfterDelay(this.No,6e4,()=>this.zo()))}jo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.$o())return this.close(0)}Ho(){this.ko&&(this.ko.cancel(),this.ko=null)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}async close(t,n){this.Ho(),this.Jo(),this.Qo.cancel(),this.Lo++,t!==4?this.Qo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(te(n.toString()),te("Using maximum backoff delay to prevent overloading the backend."),this.Qo.Fo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.uo(n)}Yo(){}auth(){this.state=1;const t=this.Zo(this.Lo),n=this.Lo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Lo===n&&this.Xo(r,s)},r=>{t(()=>{const s=new S(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.e_(s)})})}Xo(t,n){const r=this.Zo(this.Lo);this.stream=this.t_(t,n),this.stream._o(()=>{r(()=>(this.state=2,this.qo=this.ii.enqueueAfterDelay(this.Bo,1e4,()=>(this.$o()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(s=>{r(()=>this.e_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Uo(){this.state=5,this.Qo.Mo(async()=>{this.state=0,this.start()})}e_(t){return R("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Zo(t){return n=>{this.ii.enqueueAndForget(()=>this.Lo===t?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kg extends Rc{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}t_(t,n){return this.connection.yo("Listen",t,n)}onMessage(t){this.Qo.reset();const n=Hp(this.serializer,t),r=function(i){if(!("targetChange"in i))return U.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?U.min():o.readTime?Ht(o.readTime):U.min()}(t);return this.listener.n_(n,r)}r_(t){const n={};n.database=Ci(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=vi(l)?{documents:Qp(i,l)}:{query:Wp(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=gc(i,o.resumeToken);const u=Ii(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(U.min())>0){a.readTime=Wr(i,o.snapshotVersion.toTimestamp());const u=Ii(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=Yp(this.serializer,t);r&&(n.labels=r),this.jo(n)}i_(t){const n={};n.database=Ci(this.serializer),n.removeTarget=t,this.jo(n)}}class Dg extends Rc{constructor(t,n,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.s_=!1}get o_(){return this.s_}start(){this.s_=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.s_&&this.__([])}t_(t,n){return this.connection.yo("Write",t,n)}onMessage(t){if(Z(!!t.streamToken),this.lastStreamToken=t.streamToken,this.s_){this.Qo.reset();const n=Gp(t.writeResults,t.commitTime),r=Ht(t.commitTime);return this.listener.a_(r,n)}return Z(!t.writeResults||t.writeResults.length===0),this.s_=!0,this.listener.u_()}c_(){const t={};t.database=Ci(this.serializer),this.jo(t)}__(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>Kp(this.serializer,r))};this.jo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.l_=!1}h_(){if(this.l_)throw new S(E.FAILED_PRECONDITION,"The client has already been terminated.")}Ro(t,n,r){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Ro(t,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new S(E.UNKNOWN,s.toString())})}po(t,n,r,s){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.po(t,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new S(E.UNKNOWN,i.toString())})}terminate(){this.l_=!0}}class Og{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.I_=0,this.T_=null,this.E_=!0}d_(){this.I_===0&&(this.A_("Unknown"),this.T_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.T_=null,this.R_("Backend didn't respond within 10 seconds."),this.A_("Offline"),Promise.resolve())))}V_(t){this.state==="Online"?this.A_("Unknown"):(this.I_++,this.I_>=1&&(this.m_(),this.R_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.A_("Offline")))}set(t){this.m_(),this.I_=0,t==="Online"&&(this.E_=!1),this.A_(t)}A_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}R_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.E_?(te(n),this.E_=!1):R("OnlineStateTracker",n)}m_(){this.T_!==null&&(this.T_.cancel(),this.T_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.f_=[],this.g_=new Map,this.p_=new Set,this.y_=[],this.w_=i,this.w_.Ys(o=>{r.enqueueAndForget(async()=>{Me(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=B(l);u.p_.add(4),await dr(u),u.S_.set("Unknown"),u.p_.delete(4),await As(u)}(this))})}),this.S_=new Og(r,s)}}async function As(e){if(Me(e))for(const t of e.y_)await t(!0)}async function dr(e){for(const t of e.y_)await t(!1)}function Cc(e,t){const n=B(e);n.g_.has(t.targetId)||(n.g_.set(t.targetId,t),Ro(n)?Ao(n):yn(n).$o()&&Io(n,t))}function Pc(e,t){const n=B(e),r=yn(n);n.g_.delete(t),r.$o()&&bc(n,t),n.g_.size===0&&(r.$o()?r.Go():Me(n)&&n.S_.set("Unknown"))}function Io(e,t){if(e.b_.Be(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}yn(e).r_(t)}function bc(e,t){e.b_.Be(t),yn(e).i_(t)}function Ao(e){e.b_=new xp({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.g_.get(t)||null,rt:()=>e.datastore.serializer.databaseId}),yn(e).start(),e.S_.d_()}function Ro(e){return Me(e)&&!yn(e).Ko()&&e.g_.size>0}function Me(e){return B(e).p_.size===0}function Sc(e){e.b_=void 0}async function Lg(e){e.g_.forEach((t,n)=>{Io(e,t)})}async function Fg(e,t){Sc(e),Ro(e)?(e.S_.V_(t),Ao(e)):e.S_.set("Unknown")}async function xg(e,t,n){if(e.S_.set("Online"),t instanceof pc&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.g_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.g_.delete(a),s.b_.removeTarget(a))}(e,t)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Xr(e,r)}else if(t instanceof Sr?e.b_.We(t):t instanceof mc?e.b_.Ze(t):e.b_.je(t),!n.isEqual(U.min()))try{const r=await Ic(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.b_.st(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=i.g_.get(u);c&&i.g_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=i.g_.get(l);if(!c)return;i.g_.set(l,c.withResumeToken(At.EMPTY_BYTE_STRING,c.snapshotVersion)),bc(i,l);const h=new se(c.target,l,u,c.sequenceNumber);Io(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await Xr(e,r)}}async function Xr(e,t,n){if(!hr(t))throw t;e.p_.add(1),await dr(e),e.S_.set("Offline"),n||(n=()=>Ic(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),e.p_.delete(1),await As(e)})}function Vc(e,t){return t().catch(n=>Xr(e,n,t))}async function Rs(e){const t=B(e),n=de(t);let r=t.f_.length>0?t.f_[t.f_.length-1].batchId:-1;for(;Ug(t);)try{const s=await Ig(t.localStore,r);if(s===null){t.f_.length===0&&n.Go();break}r=s.batchId,Bg(t,s)}catch(s){await Xr(t,s)}kc(t)&&Dc(t)}function Ug(e){return Me(e)&&e.f_.length<10}function Bg(e,t){e.f_.push(t);const n=de(e);n.$o()&&n.o_&&n.__(t.mutations)}function kc(e){return Me(e)&&!de(e).Ko()&&e.f_.length>0}function Dc(e){de(e).start()}async function jg(e){de(e).c_()}async function qg(e){const t=de(e);for(const n of e.f_)t.__(n.mutations)}async function zg(e,t,n){const r=e.f_.shift(),s=go.from(r,t,n);await Vc(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Rs(e)}async function $g(e,t){t&&de(e).o_&&await async function(r,s){if(function(o){return Mp(o)&&o!==E.ABORTED}(s.code)){const i=r.f_.shift();de(r).Wo(),await Vc(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Rs(r)}}(e,t),kc(e)&&Dc(e)}async function xa(e,t){const n=B(e);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=Me(n);n.p_.add(3),await dr(n),r&&n.S_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.p_.delete(3),await As(n)}async function Hg(e,t){const n=B(e);t?(n.p_.delete(2),await As(n)):t||(n.p_.add(2),await dr(n),n.S_.set("Unknown"))}function yn(e){return e.D_||(e.D_=function(n,r,s){const i=B(n);return i.h_(),new kg(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{_o:Lg.bind(null,e),uo:Fg.bind(null,e),n_:xg.bind(null,e)}),e.y_.push(async t=>{t?(e.D_.Wo(),Ro(e)?Ao(e):e.S_.set("Unknown")):(await e.D_.stop(),Sc(e))})),e.D_}function de(e){return e.v_||(e.v_=function(n,r,s){const i=B(n);return i.h_(),new Dg(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{_o:jg.bind(null,e),uo:$g.bind(null,e),u_:qg.bind(null,e),a_:zg.bind(null,e)}),e.y_.push(async t=>{t?(e.v_.Wo(),await Rs(e)):(await e.v_.stop(),e.f_.length>0&&(R("RemoteStore",`Stopping write stream with ${e.f_.length} pending writes`),e.f_=[]))})),e.v_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ae,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new Co(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new S(E.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Po(e,t){if(te("AsyncQueue",`${t}: ${e}`),hr(e))return new S(E.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t){this.comparator=t?(n,r)=>t(n,r)||k.comparator(n.key,r.key):(n,r)=>k.comparator(n.key,r.key),this.keyedMap=An(),this.sortedSet=new tt(this.comparator)}static emptySet(t){return new Ye(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ye)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Ye;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(){this.C_=new tt(k.comparator)}track(t){const n=t.doc.key,r=this.C_.get(n);r?t.type!==0&&r.type===3?this.C_=this.C_.insert(n,t):t.type===3&&r.type!==1?this.C_=this.C_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.C_=this.C_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.C_=this.C_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.C_=this.C_.remove(n):t.type===1&&r.type===2?this.C_=this.C_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.C_=this.C_.insert(n,{type:2,doc:t.doc}):F():this.C_=this.C_.insert(n,t)}F_(){const t=[];return this.C_.inorderTraversal((n,r)=>{t.push(r)}),t}}class an{constructor(t,n,r,s,i,o,a,l,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new an(t,n,Ye.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&_s(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(){this.M_=void 0,this.listeners=[]}}class Gg{constructor(){this.queries=new _n(t=>Zu(t),_s),this.onlineState="Unknown",this.x_=new Set}}async function Nc(e,t){const n=B(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Kg),s)try{i.M_=await n.onListen(r)}catch(o){const a=Po(o,`Initialization of query '${wi(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,i),i.listeners.push(t),t.O_(n.onlineState),i.M_&&t.N_(i.M_)&&bo(n)}async function Oc(e,t){const n=B(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Qg(e,t){const n=B(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.N_(s)&&(r=!0);o.M_=s}}r&&bo(n)}function Wg(e,t,n){const r=B(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function bo(e){e.x_.forEach(t=>{t.next()})}class Mc{constructor(t,n,r){this.query=t,this.B_=n,this.L_=!1,this.k_=null,this.onlineState="Unknown",this.options=r||{}}N_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new an(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.L_?this.q_(t)&&(this.B_.next(t),n=!0):this.Q_(t,this.onlineState)&&(this.K_(t),n=!0),this.k_=t,n}onError(t){this.B_.error(t)}O_(t){this.onlineState=t;let n=!1;return this.k_&&!this.L_&&this.Q_(this.k_,t)&&(this.K_(this.k_),n=!0),n}Q_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.U_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}q_(t){if(t.docChanges.length>0)return!0;const n=this.k_&&this.k_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}K_(t){t=an.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.L_=!0,this.B_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(t){this.key=t}}class Fc{constructor(t){this.key=t}}class Xg{constructor(t,n){this.query=t,this.Z_=n,this.X_=null,this.hasCachedResults=!1,this.current=!1,this.ea=$(),this.mutatedKeys=$(),this.ta=tc(t),this.na=new Ye(this.ta)}get ra(){return this.Z_}ia(t,n){const r=n?n.sa:new Ua,s=n?n.na:this.na;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((c,h)=>{const f=s.get(c),d=ys(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),g=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let y=!1;f&&d?f.data.isEqual(d.data)?m!==g&&(r.track({type:3,doc:d}),y=!0):this.oa(f,d)||(r.track({type:2,doc:d}),y=!0,(l&&this.ta(d,l)>0||u&&this.ta(d,u)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),y=!0):f&&!d&&(r.track({type:1,doc:f}),y=!0,(l||u)&&(a=!0)),y&&(d?(o=o.add(d),i=g?i.add(c):i.delete(c)):(o=o.delete(c),i=i.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),i=i.delete(c.key),r.track({type:1,doc:c})}return{na:o,sa:r,zi:a,mutatedKeys:i}}oa(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const s=this.na;this.na=t.na,this.mutatedKeys=t.mutatedKeys;const i=t.sa.F_();i.sort((u,c)=>function(f,d){const m=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return m(f)-m(d)}(u.type,c.type)||this.ta(u.doc,c.doc)),this._a(r);const o=n?this.aa():[],a=this.ea.size===0&&this.current?1:0,l=a!==this.X_;return this.X_=a,i.length!==0||l?{snapshot:new an(this.query,t.na,s,i,t.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ua:o}:{ua:o}}O_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({na:this.na,sa:new Ua,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ua:[]}}ca(t){return!this.Z_.has(t)&&!!this.na.has(t)&&!this.na.get(t).hasLocalMutations}_a(t){t&&(t.addedDocuments.forEach(n=>this.Z_=this.Z_.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Z_=this.Z_.delete(n)),this.current=t.current)}aa(){if(!this.current)return[];const t=this.ea;this.ea=$(),this.na.forEach(r=>{this.ca(r.key)&&(this.ea=this.ea.add(r.key))});const n=[];return t.forEach(r=>{this.ea.has(r)||n.push(new Fc(r))}),this.ea.forEach(r=>{t.has(r)||n.push(new Lc(r))}),n}la(t){this.Z_=t.ss,this.ea=$();const n=this.ia(t.documents);return this.applyChanges(n,!0)}ha(){return an.fromInitialDocuments(this.query,this.na,this.mutatedKeys,this.X_===0,this.hasCachedResults)}}class Yg{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Jg{constructor(t){this.key=t,this.Pa=!1}}class Zg{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ia={},this.Ta=new _n(a=>Zu(a),_s),this.Ea=new Map,this.da=new Set,this.Aa=new tt(k.comparator),this.Ra=new Map,this.Va=new vo,this.ma={},this.fa=new Map,this.ga=on.On(),this.onlineState="Unknown",this.pa=void 0}get isPrimaryClient(){return this.pa===!0}}async function t_(e,t){const n=c_(e);let r,s;const i=n.Ta.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ha();else{const o=await Ag(n.localStore,ee(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await e_(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&Cc(n.remoteStore,o)}return s}async function e_(e,t,n,r,s){e.ya=(h,f,d)=>async function(g,y,p,w){let T=y.view.ia(p);T.zi&&(T=await Ma(g.localStore,y.query,!1).then(({documents:z})=>y.view.ia(z,T)));const M=w&&w.targetChanges.get(y.targetId),G=y.view.applyChanges(T,g.isPrimaryClient,M);return ja(g,y.targetId,G.ua),G.snapshot}(e,h,f,d);const i=await Ma(e.localStore,t,!0),o=new Xg(t,i.ss),a=o.ia(i.documents),l=fr.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),u=o.applyChanges(a,e.isPrimaryClient,l);ja(e,n,u.ua);const c=new Yg(t,n,o);return e.Ta.set(t,c),e.Ea.has(n)?e.Ea.get(n).push(t):e.Ea.set(n,[t]),u.snapshot}async function n_(e,t){const n=B(e),r=n.Ta.get(t),s=n.Ea.get(r.targetId);if(s.length>1)return n.Ea.set(r.targetId,s.filter(i=>!_s(i,t))),void n.Ta.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Pi(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Pc(n.remoteStore,r.targetId),bi(n,r.targetId)}).catch(cr)):(bi(n,r.targetId),await Pi(n.localStore,r.targetId,!0))}async function r_(e,t,n){const r=h_(e);try{const s=await function(o,a){const l=B(o),u=ct.now(),c=a.reduce((d,m)=>d.add(m.key),$());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=ne(),g=$();return l.Xi.getEntries(d,c).next(y=>{m=y,m.forEach((p,w)=>{w.isValidDocument()||(g=g.add(p))})}).next(()=>l.localDocuments.getOverlayedDocuments(d,m)).next(y=>{h=y;const p=[];for(const w of a){const T=Vp(w,h.get(w.key).overlayedDocument);T!=null&&p.push(new Oe(w.key,T,Ku(T.value.mapValue),Jt.exists(!0)))}return l.mutationQueue.addMutationBatch(d,u,p,a)}).next(y=>{f=y;const p=y.applyToLocalDocumentSet(h,g);return l.documentOverlayCache.saveOverlays(d,y.batchId,p)})}).then(()=>({batchId:f.batchId,changes:nc(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.ma[o.currentUser.toKey()];u||(u=new tt(Q)),u=u.insert(a,l),o.ma[o.currentUser.toKey()]=u}(r,s.batchId,n),await mr(r,s.changes),await Rs(r.remoteStore)}catch(s){const i=Po(s,"Failed to persist write");n.reject(i)}}async function xc(e,t){const n=B(e);try{const r=await Tg(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.Ra.get(i);o&&(Z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Pa=!0:s.modifiedDocuments.size>0?Z(o.Pa):s.removedDocuments.size>0&&(Z(o.Pa),o.Pa=!1))}),await mr(n,r,t)}catch(r){await cr(r)}}function Ba(e,t,n){const r=B(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Ta.forEach((i,o)=>{const a=o.view.O_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=B(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const f of h.listeners)f.O_(a)&&(u=!0)}),u&&bo(l)}(r.eventManager,t),s.length&&r.Ia.n_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function s_(e,t,n){const r=B(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Ra.get(t),i=s&&s.key;if(i){let o=new tt(k.comparator);o=o.insert(i,Et.newNoDocument(i,U.min()));const a=$().add(i),l=new ws(U.min(),new Map,new tt(Q),o,a);await xc(r,l),r.Aa=r.Aa.remove(i),r.Ra.delete(t),So(r)}else await Pi(r.localStore,t,!1).then(()=>bi(r,t,n)).catch(cr)}async function i_(e,t){const n=B(e),r=t.batch.batchId;try{const s=await vg(n.localStore,t);Bc(n,r,null),Uc(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await mr(n,s)}catch(s){await cr(s)}}async function o_(e,t,n){const r=B(e);try{const s=await function(o,a){const l=B(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(Z(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,t);Bc(r,t,n),Uc(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await mr(r,s)}catch(s){await cr(s)}}function Uc(e,t){(e.fa.get(t)||[]).forEach(n=>{n.resolve()}),e.fa.delete(t)}function Bc(e,t,n){const r=B(e);let s=r.ma[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.ma[r.currentUser.toKey()]=s}}function bi(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Ea.get(t))e.Ta.delete(r),n&&e.Ia.wa(r,n);e.Ea.delete(t),e.isPrimaryClient&&e.Va.Ar(t).forEach(r=>{e.Va.containsKey(r)||jc(e,r)})}function jc(e,t){e.da.delete(t.path.canonicalString());const n=e.Aa.get(t);n!==null&&(Pc(e.remoteStore,n),e.Aa=e.Aa.remove(t),e.Ra.delete(n),So(e))}function ja(e,t,n){for(const r of n)r instanceof Lc?(e.Va.addReference(r.key,t),a_(e,r)):r instanceof Fc?(R("SyncEngine","Document no longer in limbo: "+r.key),e.Va.removeReference(r.key,t),e.Va.containsKey(r.key)||jc(e,r.key)):F()}function a_(e,t){const n=t.key,r=n.path.canonicalString();e.Aa.get(n)||e.da.has(r)||(R("SyncEngine","New document in limbo: "+n),e.da.add(r),So(e))}function So(e){for(;e.da.size>0&&e.Aa.size<e.maxConcurrentLimboResolutions;){const t=e.da.values().next().value;e.da.delete(t);const n=new k(et.fromString(t)),r=e.ga.next();e.Ra.set(r,new Jg(n)),e.Aa=e.Aa.insert(n,r),Cc(e.remoteStore,new se(ee(gs(n.path)),r,"TargetPurposeLimboResolution",uo.ae))}}async function mr(e,t,n){const r=B(e),s=[],i=[],o=[];r.Ta.isEmpty()||(r.Ta.forEach((a,l)=>{o.push(r.ya(l,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const c=wo.qi(l.targetId,u);i.push(c)}}))}),await Promise.all(o),r.Ia.n_(s),await async function(l,u){const c=B(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>v.forEach(u,f=>v.forEach(f.Li,d=>c.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>v.forEach(f.ki,d=>c.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!hr(h))throw h;R("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const f=h.targetId;if(!h.fromCache){const d=c.Ji.get(f),m=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(m);c.Ji=c.Ji.insert(f,g)}}}(r.localStore,i))}async function l_(e,t){const n=B(e);if(!n.currentUser.isEqual(t)){R("SyncEngine","User change. New user:",t.toKey());const r=await wc(n.localStore,t);n.currentUser=t,function(i,o){i.fa.forEach(a=>{a.forEach(l=>{l.reject(new S(E.CANCELLED,o))})}),i.fa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await mr(n,r.ts)}}function u_(e,t){const n=B(e),r=n.Ra.get(t);if(r&&r.Pa)return $().add(r.key);{let s=$();const i=n.Ea.get(t);if(!i)return s;for(const o of i){const a=n.Ta.get(o);s=s.unionWith(a.view.ra)}return s}}function c_(e){const t=B(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=xc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=u_.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=s_.bind(null,t),t.Ia.n_=Qg.bind(null,t.eventManager),t.Ia.wa=Wg.bind(null,t.eventManager),t}function h_(e){const t=B(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=i_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=o_.bind(null,t),t}class qa{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Is(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Eg(this.persistence,new _g,t.initialUser,this.serializer)}createPersistence(t){return new pg(To.zr,this.serializer)}createSharedClientState(t){return new Cg}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class f_{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ba(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=l_.bind(null,this.syncEngine),await Hg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Gg}()}createDatastore(t){const n=Is(t.databaseInfo.databaseId),r=function(i){return new Vg(i)}(t.databaseInfo);return function(i,o,a,l){return new Ng(i,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new Mg(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Ba(this.syncEngine,n,0),function(){return Fa.v()?new Fa:new Pg}())}createSyncEngine(t,n){return function(s,i,o,a,l,u,c){const h=new Zg(s,i,o,a,l,u);return c&&(h.pa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=B(n);R("RemoteStore","RemoteStore shutting down."),r.p_.add(5),await dr(r),r.w_.shutdown(),r.S_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qc{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Da(this.observer.next,t)}error(t){this.observer.error?this.Da(this.observer.error,t):te("Uncaught Error in snapshot listener:",t.toString())}va(){this.muted=!0}Da(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=zu.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{R("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(R("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ae;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Po(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ws(e,t){e.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await wc(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function za(e,t){e.asyncQueue.verifyOperationInProgress();const n=await p_(e);R("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(s=>xa(t.remoteStore,s)),e.setAppCheckTokenChangeListener((s,i)=>xa(t.remoteStore,i)),e._onlineComponents=t}function m_(e){return e.name==="FirebaseError"?e.code===E.FAILED_PRECONDITION||e.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function p_(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){R("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ws(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!m_(n))throw n;tn("Error using user provided cache. Falling back to memory cache: "+n),await Ws(e,new qa)}}else R("FirestoreClient","Using default OfflineComponentProvider"),await Ws(e,new qa);return e._offlineComponents}async function zc(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(R("FirestoreClient","Using user provided OnlineComponentProvider"),await za(e,e._uninitializedComponentsProvider._online)):(R("FirestoreClient","Using default OnlineComponentProvider"),await za(e,new f_))),e._onlineComponents}function g_(e){return zc(e).then(t=>t.syncEngine)}async function Si(e){const t=await zc(e),n=t.eventManager;return n.onListen=t_.bind(null,t.syncEngine),n.onUnlisten=n_.bind(null,t.syncEngine),n}function __(e,t,n={}){const r=new ae;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const c=new qc({next:f=>{o.enqueueAndForget(()=>Oc(i,h));const d=f.docs.has(a);!d&&f.fromCache?u.reject(new S(E.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&f.fromCache&&l&&l.source==="server"?u.reject(new S(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(f)},error:f=>u.reject(f)}),h=new Mc(gs(a.path),c,{includeMetadataChanges:!0,U_:!0});return Nc(i,h)}(await Si(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */function $c(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(e,t,n){if(!n)throw new S(E.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function E_(e,t,n,r){if(t===!0&&r===!0)throw new S(E.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ha(e){if(!k.isDocumentKey(e))throw new S(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Vo(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":F()}function le(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new S(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vo(e);throw new S(E.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new S(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new S(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}E_("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$c((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new S(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new S(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new S(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ko{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ka({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new S(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ka(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new xm;switch(r.type){case"firstParty":return new qm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new S(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=$a.get(n);r&&(R("ComponentProvider","Removing Datastore"),$a.delete(n),r.terminate())}(this),Promise.resolve()}}function v_(e,t,n,r={}){var s;const i=(e=le(e,ko))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&tn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=yt.MOCK_USER;else{a=pf(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new S(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new yt(u)}e._authCredentials=new Um(new qu(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Cs(this.firestore,t,this._query)}}class bt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new bt(this.firestore,t,this._key)}}class Xn extends Cs{constructor(t,n,r){super(t,n,gs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new bt(this.firestore,null,new k(t))}withConverter(t){return new Xn(this.firestore,t,this._path)}}function T_(e,t,...n){if(e=ce(e),arguments.length===1&&(t=zu.V()),y_("doc","path",t),e instanceof ko){const r=et.fromString(t,...n);return Ha(r),new bt(e,null,new k(r))}{if(!(e instanceof bt||e instanceof Xn))throw new S(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(et.fromString(t,...n));return Ha(r),new bt(e.firestore,e instanceof Xn?e.converter:null,new k(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(){this.Ua=Promise.resolve(),this.Wa=[],this.Ga=!1,this.za=[],this.ja=null,this.Ha=!1,this.Ja=!1,this.Ya=[],this.Qo=new Ac(this,"async_queue_retry"),this.Za=()=>{const n=Qs();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Qo.Oo()};const t=Qs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Za)}get isShuttingDown(){return this.Ga}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Xa(),this.eu(t)}enterRestrictedMode(t){if(!this.Ga){this.Ga=!0,this.Ja=t||!1;const n=Qs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Za)}}enqueue(t){if(this.Xa(),this.Ga)return new Promise(()=>{});const n=new ae;return this.eu(()=>this.Ga&&this.Ja?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Wa.push(t),this.tu()))}async tu(){if(this.Wa.length!==0){try{await this.Wa[0](),this.Wa.shift(),this.Qo.reset()}catch(t){if(!hr(t))throw t;R("AsyncQueue","Operation failed with retryable error: "+t)}this.Wa.length>0&&this.Qo.Mo(()=>this.tu())}}eu(t){const n=this.Ua.then(()=>(this.Ha=!0,t().catch(r=>{this.ja=r,this.Ha=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw te("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ha=!1,r))));return this.Ua=n,n}enqueueAfterDelay(t,n,r){this.Xa(),this.Ya.indexOf(t)>-1&&(n=0);const s=Co.createAndSchedule(this,t,n,r,i=>this.nu(i));return this.za.push(s),s}Xa(){this.ja&&F()}verifyOperationInProgress(){}async ru(){let t;do t=this.Ua,await t;while(t!==this.Ua)}iu(t){for(const n of this.za)if(n.timerId===t)return!0;return!1}su(t){return this.ru().then(()=>{this.za.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.za)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ru()})}ou(t){this.Ya.push(t)}nu(t){const n=this.za.indexOf(t);this.za.splice(n,1)}}function Ga(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class Yn extends ko{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new w_}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Hc(this),this._firestoreClient.terminate()}}function I_(e,t){const n=typeof e=="object"?e:Ed(),r=typeof e=="string"?e:t||"(default)",s=pd(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=df("firestore");i&&v_(s,...i)}return s}function Do(e){return e._firestoreClient||Hc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Hc(e){var t,n,r;const s=e._freezeSettings(),i=function(a,l,u,c){return new tp(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,$c(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new d_(e._authCredentials,e._appCheckCredentials,e._queue,i),((n=s.localCache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=s.localCache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ln(At.fromBase64String(t))}catch(n){throw new S(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ln(At.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new S(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new S(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new S(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Q(this._lat,t._lat)||Q(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=/^__.*__$/;class Kc{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new Oe(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Gc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class Ss{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this._u(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get au(){return this.settings.au}uu(t){return new Ss(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}cu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.uu({path:r,lu:!1});return s.hu(t),s}Pu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.uu({path:r,lu:!1});return s._u(),s}Iu(t){return this.uu({path:void 0,lu:!0})}Tu(t){return Yr(t,this.settings.methodName,this.settings.Eu||!1,this.path,this.settings.du)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}_u(){if(this.path)for(let t=0;t<this.path.length;t++)this.hu(this.path.get(t))}hu(t){if(t.length===0)throw this.Tu("Document fields must not be empty");if(Gc(this.au)&&A_.test(t))throw this.Tu('Document fields cannot begin and end with "__"')}}class R_{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Is(t)}Au(t,n,r,s=!1){return new Ss({au:t,methodName:n,du:r,path:vt.emptyPath(),lu:!1,Eu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function C_(e){const t=e._freezeSettings(),n=Is(e._databaseId);return new R_(e._databaseId,!!t.ignoreUndefinedProperties,n)}class Vs extends bs{_toFieldTransform(t){if(t.au!==2)throw t.au===1?t.Tu(`${this._methodName}() can only appear at the top level of your update data`):t.Tu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Vs}}function P_(e,t,n){return new Ss({au:3,du:t.settings.du,methodName:e._methodName,lu:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class b_ extends bs{constructor(t,n){super(t),this.Ru=n}_toFieldTransform(t){const n=P_(this,t,!0),r=this.Ru.map(i=>pr(i,n)),s=new sn(r);return new Cp(t.path,s)}isEqual(t){return this===t}}function S_(e,t,n,r){const s=e.Au(1,t,n);Wc("Data must be an object, but it was:",s,r);const i=[],o=Pt.empty();Ne(r,(l,u)=>{const c=Oo(t,l,n);u=ce(u);const h=s.Pu(c);if(u instanceof Vs)i.push(c);else{const f=pr(u,h);f!=null&&(i.push(c),o.set(c,f))}});const a=new Ot(i);return new Kc(o,a,s.fieldTransforms)}function V_(e,t,n,r,s,i){const o=e.Au(1,t,n),a=[Qa(t,r,n)],l=[s];if(i.length%2!=0)throw new S(E.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Qa(t,i[f])),l.push(i[f+1]);const u=[],c=Pt.empty();for(let f=a.length-1;f>=0;--f)if(!N_(u,a[f])){const d=a[f];let m=l[f];m=ce(m);const g=o.Pu(d);if(m instanceof Vs)u.push(d);else{const y=pr(m,g);y!=null&&(u.push(d),c.set(d,y))}}const h=new Ot(u);return new Kc(c,h,o.fieldTransforms)}function pr(e,t){if(Qc(e=ce(e)))return Wc("Unsupported field value:",t,e),k_(e,t);if(e instanceof bs)return function(r,s){if(!Gc(s.au))throw s.Tu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Tu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.lu&&t.au!==4)throw t.Tu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=pr(a,s.Iu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=ce(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ip(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ct.fromDate(r);return{timestampValue:Wr(s.serializer,i)}}if(r instanceof ct){const i=new ct(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wr(s.serializer,i)}}if(r instanceof No)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ln)return{bytesValue:gc(s.serializer,r._byteString)};if(r instanceof bt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Tu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Eo(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Tu(`Unsupported field value: ${Vo(r)}`)}(e,t)}function k_(e,t){const n={};return $u(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ne(e,(r,s)=>{const i=pr(s,t.cu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Qc(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof ct||e instanceof No||e instanceof ln||e instanceof bt||e instanceof bs)}function Wc(e,t,n){if(!Qc(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Vo(n);throw r==="an object"?t.Tu(e+" a custom object"):t.Tu(e+" "+r)}}function Qa(e,t,n){if((t=ce(t))instanceof Ps)return t._internalPath;if(typeof t=="string")return Oo(e,t);throw Yr("Field path arguments must be of type string or ",e,!1,void 0,n)}const D_=new RegExp("[~\\*/\\[\\]]");function Oo(e,t,n){if(t.search(D_)>=0)throw Yr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ps(...t.split("."))._internalPath}catch{throw Yr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Yr(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new S(E.INVALID_ARGUMENT,a+e+l)}function N_(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new O_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Yc("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class O_ extends Xc{data(){return super.data()}}function Yc(e,t){return typeof t=="string"?Oo(e,t):t instanceof Ps?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new S(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class L_{convertValue(t,n="none"){switch(be(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ot(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Pe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw F()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Ne(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new No(ot(t.latitude),ot(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=ho(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Kn(t));default:return null}}convertTimestamp(t){const n=fe(t);return new ct(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=et.fromString(t);Z(Tc(r));const s=new Gn(r.get(1),r.get(3)),i=new k(r.popFirst(5));return s.isEqual(n)||te(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Jc extends Xc{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Vr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Yc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Vr extends Jc{data(t={}){return super.data(t)}}class F_{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Cn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Vr(this._firestore,this._userDataWriter,r.key,r,new Cn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new S(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Vr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Cn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Vr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Cn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:x_(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function x_(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(e){e=le(e,bt);const t=le(e.firestore,Yn);return __(Do(t),e._key).then(n=>th(t,e,n))}class Zc extends L_{constructor(t){super(),this.firestore=t}convertBytes(t){return new ln(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new bt(this.firestore,null,n)}}function B_(e,t,n,...r){e=le(e,bt);const s=le(e.firestore,Yn),i=C_(s);let o;return o=typeof(t=ce(t))=="string"||t instanceof Ps?V_(i,"updateDoc",e._key,t,n,r):S_(i,"updateDoc",e._key,t),q_(s,[o.toMutation(e._key,Jt.exists(!0))])}function j_(e,...t){var n,r,s;e=ce(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Ga(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Ga(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,u,c;if(e instanceof bt)u=le(e.firestore,Yn),c=gs(e._key.path),l={next:h=>{t[o]&&t[o](th(u,e,h))},error:t[o+1],complete:t[o+2]};else{const h=le(e,Cs);u=le(h.firestore,Yn),c=h._query;const f=new Zc(u);l={next:d=>{t[o]&&t[o](new F_(u,f,h,d))},error:t[o+1],complete:t[o+2]},M_(e._query)}return function(f,d,m,g){const y=new qc(g),p=new Mc(d,y,m);return f.asyncQueue.enqueueAndForget(async()=>Nc(await Si(f),p)),()=>{y.va(),f.asyncQueue.enqueueAndForget(async()=>Oc(await Si(f),p))}}(Do(u),c,a,l)}function q_(e,t){return function(r,s){const i=new ae;return r.asyncQueue.enqueueAndForget(async()=>r_(await g_(r),s,i)),i.promise}(Do(e),t)}function th(e,t,n){const r=n.docs.get(t._key),s=new Zc(e);return new Jc(e,s,t._key,r,new Cn(n.hasPendingWrites,n.fromCache),t.converter)}function z_(...e){return new b_("arrayUnion",e)}(function(t,n=!0){(function(s){gn=s})(yd),Fr(new Mn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Yn(new Bm(r.getProvider("auth-internal")),new $m(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new S(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gn(u.options.projectId,c)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Ge(ma,"4.0.0",t),Ge(ma,"4.0.0","esm2017")})();const $_={apiKey:"AIzaSyDbBV7DT8DNmxyLPUB_w0skCx6bQjDIDhE",authDomain:"nocontextquotes-86d30.firebaseapp.com",projectId:"nocontextquotes-86d30",storageBucket:"nocontextquotes-86d30.appspot.com",messagingSenderId:"704558739601",appId:"1:704558739601:web:f92bb50736b7c0cb360f30",measurementId:"G-RHFY5NDBMG"},H_=Fl($_),K_=I_(H_);function Mo(e){const t=e-1;return t*t*t+1}function Wa(e){return--e*e*e*e*e+1}function Se(e,{delay:t=0,duration:n=400,easing:r=Ve}={}){const s=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:r,css:i=>`opacity: ${i*s}`}}function G_(e,{delay:t=0,duration:n=400,easing:r=Mo,x:s=0,y:i=0,opacity:o=0}={}){const a=getComputedStyle(e),l=+a.opacity,u=a.transform==="none"?"":a.transform,c=l*(1-o),[h,f]=Bo(s),[d,m]=Bo(i);return{delay:t,duration:n,easing:r,css:(g,y)=>`
			transform: ${u} translate(${(1-g)*h}${f}, ${(1-g)*d}${m});
			opacity: ${l-c*y}`}}function Jr(e,{delay:t=0,duration:n=400,easing:r=Mo,start:s=0,opacity:i=0}={}){const o=getComputedStyle(e),a=+o.opacity,l=o.transform==="none"?"":o.transform,u=1-s,c=a*(1-i);return{delay:t,duration:n,easing:r,css:(h,f)=>`
			transform: ${l} scale(${1-u*f});
			opacity: ${a-c*f}
		`}}function Q_(e,{from:t,to:n},r={}){const s=getComputedStyle(e),i=s.transform==="none"?"":s.transform,[o,a]=s.transformOrigin.split(" ").map(parseFloat),l=t.left+t.width*o/n.width-(n.left+o),u=t.top+t.height*a/n.height-(n.top+a),{delay:c=0,duration:h=d=>Math.sqrt(d)*120,easing:f=Mo}=r;return{delay:c,duration:me(h)?h(Math.sqrt(l*l+u*u)):h,easing:f,css:(d,m)=>{const g=m*l,y=m*u,p=d+m*t.width/n.width,w=d+m*t.height/n.height;return`transform: ${i} translate(${g}px, ${y}px) scale(${p}, ${w});`}}}const W_={duration:4e3,initial:1,next:0,pausable:!1,dismissable:!0,reversed:!1,intro:{x:256}},X_=()=>{const{subscribe:e,update:t}=ze([]);let n=0;const r={},s=u=>u instanceof Object;return{subscribe:e,push:(u,c={})=>{const h={target:"default",...s(u)?u:{...c,msg:u}},f=r[h.target]||{},d={...W_,...f,...h,theme:{...f.theme,...h.theme},classes:[...f.classes||[],...h.classes||[]],id:++n};return t(m=>d.reversed?[...m,d]:[d,...m]),n},pop:u=>{t(c=>{if(!c.length||u===0)return[];if(s(u))return c.filter(f=>u(f));const h=u||Math.max(...c.map(f=>f.id));return c.filter(f=>f.id!==h)})},set:(u,c={})=>{const h=s(u)?{...u}:{...c,id:u};t(f=>{const d=f.findIndex(m=>m.id===h.id);return d>-1&&(f[d]={...f[d],...h}),f})},_init:(u="default",c={})=>(r[u]=c,r)}},Jn=X_();function Xa(e){return Object.prototype.toString.call(e)==="[object Date]"}function Vi(e,t){if(e===t||e!==e)return()=>e;const n=typeof e;if(n!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const r=t.map((s,i)=>Vi(e[i],s));return s=>r.map(i=>i(s))}if(n==="object"){if(!e||!t)throw new Error("Object cannot be null");if(Xa(e)&&Xa(t)){e=e.getTime(),t=t.getTime();const i=t-e;return o=>new Date(e+o*i)}const r=Object.keys(t),s={};return r.forEach(i=>{s[i]=Vi(e[i],t[i])}),i=>{const o={};return r.forEach(a=>{o[a]=s[a](i)}),o}}if(n==="number"){const r=t-e;return s=>e+s*r}throw new Error(`Cannot interpolate ${n} values`)}function Y_(e,t={}){const n=ze(e);let r,s=e;function i(o,a){if(e==null)return n.set(e=o),Promise.resolve();s=o;let l=r,u=!1,{delay:c=0,duration:h=400,easing:f=Ve,interpolate:d=Vi}=Je(Je({},t),a);if(h===0)return l&&(l.abort(),l=null),n.set(e=s),Promise.resolve();const m=Zn()+c;let g;return r=tr(y=>{if(y<m)return!0;u||(g=d(e,o),typeof h=="function"&&(h=h(e,o)),u=!0),l&&(l.abort(),l=null);const p=y-m;return p>h?(n.set(e=o),!1):(n.set(e=g(f(p/h))),!0)}),r.promise}return{set:i,update:(o,a)=>i(o(s,e),a),subscribe:n.subscribe}}function J_(e){let t,n=e[0].msg+"",r;return{c(){t=new ph(!1),r=Lt(),t.a=r},m(s,i){t.m(n,s,i),D(s,r,i)},p(s,i){i&1&&n!==(n=s[0].msg+"")&&t.p(n)},i:O,o:O,d(s){s&&P(r),s&&t.d()}}}function Z_(e){let t,n,r;const s=[e[2]];var i=e[0].component.src;function o(a){let l={};for(let u=0;u<s.length;u+=1)l=Je(l,s[u]);return{props:l}}return i&&(t=qo(i,o())),{c(){t&&at(t.$$.fragment),n=Lt()},m(a,l){t&&rt(t,a,l),D(a,n,l),r=!0},p(a,l){const u=l&4?kh(s,[Dh(a[2])]):{};if(l&1&&i!==(i=a[0].component.src)){if(t){Ft();const c=t;L(c.$$.fragment,1,0,()=>{st(c,1)}),xt()}i?(t=qo(i,o()),at(t.$$.fragment),V(t.$$.fragment,1),rt(t,n.parentNode,n)):t=null}else i&&t.$set(u)},i(a){r||(t&&V(t.$$.fragment,a),r=!0)},o(a){t&&L(t.$$.fragment,a),r=!1},d(a){a&&P(n),t&&st(t,a)}}}function Ya(e){let t,n,r;return{c(){t=N("div"),_(t,"class","_toastBtn pe svelte-l65oht"),_(t,"role","button"),_(t,"tabindex","0")},m(s,i){D(s,t,i),n||(r=[ut(t,"click",e[4]),ut(t,"keydown",e[8])],n=!0)},p:O,d(s){s&&P(t),n=!1,kt(r)}}}function ty(e){let t,n,r,s,i,o,a,l,u,c;const h=[Z_,J_],f=[];function d(g,y){return g[0].component?0:1}r=d(e),s=f[r]=h[r](e);let m=e[0].dismissable&&Ya(e);return{c(){t=N("div"),n=N("div"),s.c(),i=Y(),m&&m.c(),o=Y(),a=N("progress"),_(n,"role","status"),_(n,"class","_toastMsg svelte-l65oht"),Nt(n,"pe",e[0].component),_(a,"class","_toastBar svelte-l65oht"),a.value=e[1],_(t,"class","_toastItem svelte-l65oht"),Nt(t,"pe",e[0].pausable)},m(g,y){D(g,t,y),b(t,n),f[r].m(n,null),b(t,i),m&&m.m(t,null),b(t,o),b(t,a),l=!0,u||(c=[ut(t,"mouseenter",e[9]),ut(t,"mouseleave",e[6])],u=!0)},p(g,[y]){let p=r;r=d(g),r===p?f[r].p(g,y):(Ft(),L(f[p],1,1,()=>{f[p]=null}),xt(),s=f[r],s?s.p(g,y):(s=f[r]=h[r](g),s.c()),V(s,1),s.m(n,null)),(!l||y&1)&&Nt(n,"pe",g[0].component),g[0].dismissable?m?m.p(g,y):(m=Ya(g),m.c(),m.m(t,o)):m&&(m.d(1),m=null),(!l||y&2)&&(a.value=g[1]),(!l||y&1)&&Nt(t,"pe",g[0].pausable)},i(g){l||(V(s),l=!0)},o(g){L(s),l=!1},d(g){g&&P(t),f[r].d(),m&&m.d(),u=!1,kt(c)}}}function ey(e,t,n){let r,{item:s}=t;const i=Y_(s.initial,{duration:s.duration,easing:Ve});Ae(e,i,T=>n(1,r=T));const o=()=>Jn.pop(s.id),a=()=>{(r===1||r===0)&&o()};let l=s.initial,u=l,c=!1;const h=()=>{!c&&r!==l&&(i.set(r,{duration:0}),c=!0)},f=()=>{if(c){const T=s.duration,M=T-T*((r-u)/(l-u));i.set(l,{duration:M}).then(a),c=!1}};let d={};const m=(T,M="undefined")=>typeof T===M;let g;Ni((T=document)=>{if(m(T.hidden))return;const M=()=>T.hidden?h():f(),G="visibilitychange";T.addEventListener(G,M),g=()=>T.removeEventListener(G,M),M()}),Il(()=>{m(s.onpop,"function")&&s.onpop(s.id),g&&g()});const p=T=>{T instanceof KeyboardEvent&&["Enter"," "].includes(T.key)&&o()},w=()=>{s.pausable&&h()};return e.$$set=T=>{"item"in T&&n(0,s=T.item)},e.$$.update=()=>{if(e.$$.dirty&1&&(m(s.progress)||n(0,s.next=s.progress,s)),e.$$.dirty&131&&l!==s.next&&(n(7,l=s.next),u=r,c=!1,i.set(l).then(a)),e.$$.dirty&1&&s.component){const{props:T={},sendIdTo:M}=s.component;n(2,d={...T,...M&&{[M]:s.id}})}},[s,r,d,i,o,h,f,l,p,w]}class ny extends Bt{constructor(t){super(),Ut(this,t,ey,ty,Ct,{item:0})}}function Ja(e,t,n){const r=e.slice();return r[5]=t[n],r}function Za(e,t){let n,r,s,i,o,a,l,u,c=O,h;return r=new ny({props:{item:t[5]}}),{key:e,first:null,c(){n=N("li"),at(r.$$.fragment),s=Y(),_(n,"class",i=Uo(t[5].classes.join(" "))+" svelte-yh90az"),_(n,"style",o=t[1](t[5].theme)),this.first=n},m(f,d){D(f,n,d),rt(r,n,null),b(n,s),h=!0},p(f,d){t=f;const m={};d&1&&(m.item=t[5]),r.$set(m),(!h||d&1&&i!==(i=Uo(t[5].classes.join(" "))+" svelte-yh90az"))&&_(n,"class",i),(!h||d&1&&o!==(o=t[1](t[5].theme)))&&_(n,"style",o)},r(){u=n.getBoundingClientRect()},f(){vh(n),c(),wl(n,u)},a(){c(),c=Eh(n,u,Q_,{duration:200})},i(f){h||(V(r.$$.fragment,f),St(()=>{!h||(l&&l.end(1),a=Ch(n,G_,t[5].intro),a.start())}),h=!0)},o(f){L(r.$$.fragment,f),a&&a.invalidate(),l=Ph(n,Se,{}),h=!1},d(f){f&&P(n),st(r),f&&l&&l.end()}}}function ry(e){let t,n=[],r=new Map,s,i=e[0];const o=a=>a[5].id;for(let a=0;a<i.length;a+=1){let l=Ja(e,i,a),u=o(l);r.set(u,n[a]=Za(u,l))}return{c(){t=N("ul");for(let a=0;a<n.length;a+=1)n[a].c();_(t,"class","_toastContainer svelte-yh90az")},m(a,l){D(a,t,l);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(t,null);s=!0},p(a,[l]){if(l&3){i=a[0],Ft();for(let u=0;u<n.length;u+=1)n[u].r();n=Vh(n,l,o,1,a,i,r,t,Sh,Za,null,Ja);for(let u=0;u<n.length;u+=1)n[u].a();xt()}},i(a){if(!s){for(let l=0;l<i.length;l+=1)V(n[l]);s=!0}},o(a){for(let l=0;l<n.length;l+=1)L(n[l]);s=!1},d(a){a&&P(t);for(let l=0;l<n.length;l+=1)n[l].d()}}}function sy(e,t,n){let r;Ae(e,Jn,l=>n(4,r=l));let{options:s={}}=t,{target:i="default"}=t,o;const a=l=>Object.keys(l).reduce((u,c)=>`${u}${c}:${l[c]};`,"");return e.$$set=l=>{"options"in l&&n(2,s=l.options),"target"in l&&n(3,i=l.target)},e.$$.update=()=>{e.$$.dirty&12&&Jn._init(i,s),e.$$.dirty&24&&n(0,o=r.filter(l=>l.target===i))},[o,a,s,i,r]}class iy extends Bt{constructor(t){super(),Ut(this,t,sy,ry,Ct,{options:2,target:3})}}const oy="modulepreload",ay=function(e){return"/"+e},tl={},Ue=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=ay(i),i in tl)return;tl[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let c=s.length-1;c>=0;c--){const h=s[c];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":oy,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((c,h)=>{u.addEventListener("load",c),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};function ly(e){let t,n,r,s={ctx:e,current:null,token:null,hasCatch:!1,pending:py,then:hy,catch:cy,blocks:[,,,]};return Or(n=e[6](),s),{c(){t=Lt(),s.block.c()},m(i,o){D(i,t,o),s.block.m(i,s.anchor=o),s.mount=()=>t.parentNode,s.anchor=t,r=!0},p(i,o){e=i,s.ctx=e,o&64&&n!==(n=e[6]())&&Or(n,s)||Pl(s,e,o)},i(i){r||(V(s.block),r=!0)},o(i){for(let o=0;o<3;o+=1){const a=s.blocks[o];L(a)}r=!1},d(i){i&&P(t),s.block.d(i),s.token=null,s=null}}}function uy(e){let t,n;const r=e[24].default,s=un(r,e,e[23],null);return{c(){t=N("div"),s&&s.c(),_(t,"class","typewriter-container svelte-1gv2i7t")},m(i,o){D(i,t,o),s&&s.m(t,null),n=!0},p(i,o){s&&s.p&&(!n||o&8388608)&&hn(s,r,i,i[23],n?cn(r,i[23],o,null):fn(i[23]),null)},i(i){n||(V(s,i),n=!0)},o(i){L(s,i),n=!1},d(i){i&&P(t),s&&s.d(i)}}}function cy(e){return{c:O,m:O,p:O,i:O,o:O,d:O}}function hy(e){let t,n,r,s={ctx:e,current:null,token:null,hasCatch:!1,pending:my,then:dy,catch:fy,value:25,blocks:[,,,]};return Or(n=e[7][e[0]](),s),{c(){t=Lt(),s.block.c()},m(i,o){D(i,t,o),s.block.m(i,s.anchor=o),s.mount=()=>t.parentNode,s.anchor=t,r=!0},p(i,o){e=i,s.ctx=e,o&1&&n!==(n=e[7][e[0]]())&&Or(n,s)||Pl(s,e,o)},i(i){r||(V(s.block),r=!0)},o(i){for(let o=0;o<3;o+=1){const a=s.blocks[o];L(a)}r=!1},d(i){i&&P(t),s.block.d(i),s.token=null,s=null}}}function fy(e){return{c:O,m:O,p:O,i:O,o:O,d:O}}function dy(e){let t=e[4],n,r,s=e[4]&&Xs(e);return{c(){s&&s.c(),n=Lt()},m(i,o){s&&s.m(i,o),D(i,n,o),r=!0},p(i,o){i[4]?t?Ct(t,i[4])?(s.d(1),s=Xs(i),t=i[4],s.c(),s.m(n.parentNode,n)):s.p(i,o):(s=Xs(i),t=i[4],s.c(),s.m(n.parentNode,n)):t&&(s.d(1),s=null,t=i[4])},i(i){r||(V(s),r=!0)},o(i){L(s),r=!1},d(i){i&&P(n),s&&s.d(i)}}}function Xs(e){let t,n,r,s,i;const o=e[24].default,a=un(o,e,e[23],null);return{c(){t=N(e[4]),a&&a.c(),fh(e[4])(t,{class:"typewriter-container svelte-1gv2i7t"}),Nt(t,"cursor",e[1])},m(l,u){D(l,t,u),a&&a.m(t,null),r=!0,s||(i=_l(n=e[25].default(t,e[5])),s=!0)},p(l,u){a&&a.p&&(!r||u&8388608)&&hn(a,o,l,l[23],r?cn(o,l[23],u,null):fn(l[23]),null),n&&me(n.update)&&u&32&&n.update.call(null,l[5]),(!r||u&2)&&Nt(t,"cursor",l[1])},i(l){r||(V(a,l),r=!0)},o(l){L(a,l),r=!1},d(l){l&&P(t),a&&a.d(l),s=!1,i()}}}function my(e){return{c:O,m:O,p:O,i:O,o:O,d:O}}function py(e){let t,n=e[2]&&el();return{c(){n&&n.c(),t=Lt()},m(r,s){n&&n.m(r,s),D(r,t,s)},p(r,s){r[2]?n||(n=el(),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:O,o:O,d(r){n&&n.d(r),r&&P(t)}}}function el(e){let t;return{c(){t=N("div"),t.innerHTML='<p class="typing"></p>',_(t,"class","typewriter-container cursor svelte-1gv2i7t")},m(n,r){D(n,t,r)},d(n){n&&P(t)}}}function nl(e){let t,n,r,s;const i=[uy,ly],o=[];function a(l,u){return l[3]?0:1}return t=a(e),n=o[t]=i[t](e),{c(){n.c(),r=Lt()},m(l,u){o[t].m(l,u),D(l,r,u),s=!0},p(l,u){let c=t;t=a(l),t===c?o[t].p(l,u):(Ft(),L(o[c],1,1,()=>{o[c]=null}),xt(),n=o[t],n?n.p(l,u):(n=o[t]=i[t](l),n.c()),V(n,1),n.m(r.parentNode,r))},i(l){s||(V(n),s=!0)},o(l){L(n),s=!1},d(l){o[t].d(l),l&&P(r)}}}function gy(e){let t,n=e[8],r,s,i=nl(e);return{c(){t=Y(),i.c(),r=Lt()},m(o,a){D(o,t,a),i.m(o,a),D(o,r,a),s=!0},p(o,[a]){a&256&&Ct(n,n=o[8])?(Ft(),L(i,1,1,O),xt(),i=nl(o),i.c(),V(i,1),i.m(r.parentNode,r)):i.p(o,a)},i(o){s||(V(i),s=!0)},o(o){L(i),s=!1},d(o){o&&P(t),o&&P(r),i.d(o)}}}function _y(e,t,n){let r,s,i,o,a,l,u,c,h,{$$slots:f={},$$scope:d}=t,{mode:m="concurrent"}=t,{interval:g=30}=t,{cursor:y=!0}=t,{keepCursorOnFinish:p=!1}=t,{delay:w=0}=t,{showCursorOnDelay:T=!1}=t,{disabled:M=!1}=t,{element:G="div"}=t,{scrambleDuration:z=3e3}=t,{scrambleSlowdown:A=!0}=t,{unwriteInterval:q=30}=t,{wordInterval:j=1500}=t;const C={concurrent:()=>Ue(()=>import("./concurrent.dac4f202.js"),["assets/concurrent.dac4f202.js","assets/writeEffect.60f3e6cc.js","assets/animationSetup.c794d8f8.js"]),cascade:()=>Ue(()=>import("./cascade.fe8b7e33.js"),["assets/cascade.fe8b7e33.js","assets/writeEffect.60f3e6cc.js","assets/animationSetup.c794d8f8.js"]),loop:()=>Ue(()=>import("./loop.77ca4dba.js"),["assets/loop.77ca4dba.js","assets/writeAndUnwriteText.a36d75d9.js","assets/writeEffect.60f3e6cc.js","assets/animationSetup.c794d8f8.js","assets/unwriteEffect.49e8b8e4.js"]),loopOnce:()=>Ue(()=>import("./loopOnce.8a9e8bfa.js"),["assets/loopOnce.8a9e8bfa.js","assets/animationSetup.c794d8f8.js","assets/writeEffect.60f3e6cc.js","assets/unwriteEffect.49e8b8e4.js"]),loopRandom:()=>Ue(()=>import("./loopRandom.d57f5fa1.js"),["assets/loopRandom.d57f5fa1.js","assets/writeAndUnwriteText.a36d75d9.js","assets/writeEffect.60f3e6cc.js","assets/animationSetup.c794d8f8.js","assets/unwriteEffect.49e8b8e4.js"]),scramble:()=>Ue(()=>import("./scramble.1f9e8b1e.js"),["assets/scramble.1f9e8b1e.js","assets/animationSetup.c794d8f8.js"])};return e.$$set=K=>{n(8,t=Je(Je({},t),xo(K))),"mode"in K&&n(0,m=K.mode),"interval"in K&&n(9,g=K.interval),"cursor"in K&&n(1,y=K.cursor),"keepCursorOnFinish"in K&&n(10,p=K.keepCursorOnFinish),"delay"in K&&n(11,w=K.delay),"showCursorOnDelay"in K&&n(2,T=K.showCursorOnDelay),"disabled"in K&&n(3,M=K.disabled),"element"in K&&n(4,G=K.element),"scrambleDuration"in K&&n(12,z=K.scrambleDuration),"scrambleSlowdown"in K&&n(13,A=K.scrambleSlowdown),"unwriteInterval"in K&&n(14,q=K.unwriteInterval),"wordInterval"in K&&n(15,j=K.wordInterval),"$$scope"in K&&n(23,d=K.$$scope)},e.$$.update=()=>{e.$$.dirty&1&&n(21,r=/^loop(Once|Random)?$/.test(m)),e.$$.dirty&1&&n(22,s=["concurrent","cascade","loopOnce"].includes(m)),e.$$.dirty&4195328&&n(20,i=!s&&p),e.$$.dirty&2052&&n(19,o=w<1&&T),n(18,a=!r&&(t.unwriteInterval||t.wordInterval)),n(17,l=m!=="scramble"&&(t.scrambleDuration||t.scrambleSlowdown)),e.$$.dirty&1024&&n(16,u=typeof p=="number"&&p<1),e.$$.dirty&1048576&&i&&console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' is compatible only with finite modes"),e.$$.dirty&524288&&o&&console.warn("[svelte-typewriter] The prop 'showCursorOnDelay' has no effect if the delay is 0"),e.$$.dirty&262144&&a&&console.warn("[svelte-typewriter] The props 'unwriteInterval' and 'wordInterval' are only compatible with loop modes"),e.$$.dirty&131072&&l&&console.warn("[svelte-typewriter] The props 'scrambleDuration' and 'scrambleSlowdown' are only compatible with scramble mode"),e.$$.dirty&65536&&u&&console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' has no effect with values lower than 1"),e.$$.dirty&2048&&n(6,c=()=>new Promise(K=>setTimeout(()=>K(w),w))),e.$$.dirty&65054&&n(5,h={interval:g,cursor:y,keepCursorOnFinish:p,delay:w,showCursorOnDelay:T,disabled:M,element:G,scrambleDuration:z,scrambleSlowdown:A,unwriteInterval:q,wordInterval:j})},t=xo(t),[m,y,T,M,G,h,c,C,t,g,p,w,z,A,q,j,u,l,a,o,i,r,s,d,f]}class Lo extends Bt{constructor(t){super(),Ut(this,t,_y,gy,Ct,{mode:0,interval:9,cursor:1,keepCursorOnFinish:10,delay:11,showCursorOnDelay:2,disabled:3,element:4,scrambleDuration:12,scrambleSlowdown:13,unwriteInterval:14,wordInterval:15})}}function yy(e){const t=n=>{e&&!e.contains(n.target)&&!n.defaultPrevented&&e.dispatchEvent(new CustomEvent("click_outside",e))};return document.addEventListener("click",t,!0),{destroy(){document.removeEventListener("click",t,!0)}}}function rl(e,t,n){const r=e.slice();return r[7]=t[n],r}function sl(e){let t,n,r,s,i,o,a,l,u,c=e[0],h=[];for(let f=0;f<c.length;f+=1)h[f]=il(rl(e,c,f));return{c(){t=N("table"),n=N("caption"),n.textContent="Leaderboard",r=Y(),s=N("tr"),s.innerHTML=`<th class="svelte-1wtm20f">Author</th> 
            <th class="svelte-1wtm20f">Quote Count</th>`,i=Y();for(let f=0;f<h.length;f+=1)h[f].c();_(n,"class","svelte-1wtm20f"),_(s,"class","svelte-1wtm20f"),_(t,"class","leaderboard svelte-1wtm20f")},m(f,d){D(f,t,d),b(t,n),b(t,r),b(t,s),b(t,i);for(let m=0;m<h.length;m+=1)h[m]&&h[m].m(t,null);a=!0,l||(u=[_l(yy.call(null,t)),ut(t,"click_outside",e[3])],l=!0)},p(f,d){if(e=f,d&1){c=e[0];let m;for(m=0;m<c.length;m+=1){const g=rl(e,c,m);h[m]?h[m].p(g,d):(h[m]=il(g),h[m].c(),h[m].m(t,null))}for(;m<h.length;m+=1)h[m].d(1);h.length=c.length}},i(f){a||(St(()=>{!a||(o||(o=Gt(t,Jr,{duration:250,opacity:.5,easing:Wa},!0)),o.run(1))}),a=!0)},o(f){o||(o=Gt(t,Jr,{duration:250,opacity:.5,easing:Wa},!1)),o.run(0),a=!1},d(f){f&&P(t),Di(h,f),f&&o&&o.end(),l=!1,kt(u)}}}function il(e){let t,n,r=e[7].author+"",s,i,o,a=e[7].count+"",l,u;return{c(){t=N("tr"),n=N("td"),s=Kt(r),i=Y(),o=N("td"),l=Kt(a),u=Y(),_(n,"class","svelte-1wtm20f"),_(o,"class","svelte-1wtm20f"),_(t,"class","svelte-1wtm20f")},m(c,h){D(c,t,h),b(t,n),b(n,s),b(t,i),b(t,o),b(o,l),b(t,u)},p(c,h){h&1&&r!==(r=c[7].author+"")&&ue(s,r),h&1&&a!==(a=c[7].count+"")&&ue(l,a)},d(c){c&&P(t)}}}function Ey(e){let t,n,r,s,i,o,a,l=e[1]&&sl(e);return{c(){t=N("div"),t.innerHTML='<img src="https://cdn-icons-png.flaticon.com/512/4489/4489655.png" alt="Leaderboard button" class="svelte-1wtm20f"/>',r=Y(),l&&l.c(),s=Lt(),_(t,"class","icon svelte-1wtm20f")},m(u,c){D(u,t,c),e[6](t),D(u,r,c),l&&l.m(u,c),D(u,s,c),i=!0,o||(a=ut(t,"click",e[3]),o=!0)},p(u,[c]){u[1]?l?(l.p(u,c),c&2&&V(l,1)):(l=sl(u),l.c(),V(l,1),l.m(s.parentNode,s)):l&&(Ft(),L(l,1,1,()=>{l=null}),xt())},i(u){i||(St(()=>{!i||(n||(n=Gt(t,Jr,{},!0)),n.run(1))}),V(l),i=!0)},o(u){n||(n=Gt(t,Jr,{},!1)),n.run(0),L(l),i=!1},d(u){u&&P(t),e[6](null),u&&n&&n.end(),u&&P(r),l&&l.d(u),u&&P(s),o=!1,a()}}}function vy(e,t,n){let{stringList:r=[]}=t,s,i,o=!1,a;function l(){n(1,o=!o),o?n(2,a.style["pointer-events"]="none",a):n(2,a.style["pointer-events"]="all",a)}function u(c){Nr[c?"unshift":"push"](()=>{a=c,n(2,a)})}return e.$$set=c=>{"stringList"in c&&n(4,r=c.stringList)},e.$$.update=()=>{e.$$.dirty&16&&n(5,s=r.reduce((c,{author:h})=>((h.includes(" & ")?h.split(" & "):[h]).forEach(d=>{const m=d;c[m]=(c[m]||0)+1}),c),{})),e.$$.dirty&32&&n(0,i=Object.entries(s).map(([c,h])=>({author:c,count:h})).sort((c,h)=>h.count-c.count))},[i,o,a,l,r,s,u]}class Ty extends Bt{constructor(t){super(),Ut(this,t,vy,Ey,Ct,{stringList:4})}}function ol(e,t,n){const r=e.slice();return r[22]=t[n],r[24]=n,r}function al(e,t,n){const r=e.slice();return r[25]=t[n],r}function wy(e){let t,n;return t=new Fi({props:{icon:jh,size:"lg"}}),{c(){at(t.$$.fragment)},m(r,s){rt(t,r,s),n=!0},p:O,i(r){n||(V(t.$$.fragment,r),n=!0)},o(r){L(t.$$.fragment,r),n=!1},d(r){st(t,r)}}}function Iy(e){let t,n;return t=new Fi({props:{icon:$h,size:"lg"}}),{c(){at(t.$$.fragment)},m(r,s){rt(t,r,s),n=!0},p:O,i(r){n||(V(t.$$.fragment,r),n=!0)},o(r){L(t.$$.fragment,r),n=!1},d(r){st(t,r)}}}function Ay(e){let t,n;return t=new Fi({props:{icon:zh,size:"lg"}}),{c(){at(t.$$.fragment)},m(r,s){rt(t,r,s),n=!0},p:O,i(r){n||(V(t.$$.fragment,r),n=!0)},o(r){L(t.$$.fragment,r),n=!1},d(r){st(t,r)}}}function Ry(e){let t,n,r,s,i,o;return t=new Ds({props:{$$slots:{default:[wy]},$$scope:{ctx:e}}}),r=new Ds({props:{$$slots:{default:[Iy]},$$scope:{ctx:e}}}),i=new Ds({props:{$$slots:{default:[Ay]},$$scope:{ctx:e}}}),{c(){at(t.$$.fragment),n=Y(),at(r.$$.fragment),s=Y(),at(i.$$.fragment)},m(a,l){rt(t,a,l),D(a,n,l),rt(r,a,l),D(a,s,l),rt(i,a,l),o=!0},p(a,l){const u={};l&268435456&&(u.$$scope={dirty:l,ctx:a}),t.$set(u);const c={};l&268435456&&(c.$$scope={dirty:l,ctx:a}),r.$set(c);const h={};l&268435456&&(h.$$scope={dirty:l,ctx:a}),i.$set(h)},i(a){o||(V(t.$$.fragment,a),V(r.$$.fragment,a),V(i.$$.fragment,a),o=!0)},o(a){L(t.$$.fragment,a),L(r.$$.fragment,a),L(i.$$.fragment,a),o=!1},d(a){st(t,a),a&&P(n),st(r,a),a&&P(s),st(i,a)}}}function ll(e){let t,n,r,s,i,o;t=new Lo({props:{mode:"concurrent",keepCursorOnFinish:!0,$$slots:{default:[Cy]},$$scope:{ctx:e}}});const a=[by,Py],l=[];function u(c,h){return c[1]?0:1}return r=u(e),s=l[r]=a[r](e),{c(){at(t.$$.fragment),n=Y(),s.c(),i=Lt()},m(c,h){rt(t,c,h),D(c,n,h),l[r].m(c,h),D(c,i,h),o=!0},p(c,h){const f={};h&268435472&&(f.$$scope={dirty:h,ctx:c}),t.$set(f);let d=r;r=u(c),r===d?l[r].p(c,h):(Ft(),L(l[d],1,1,()=>{l[d]=null}),xt(),s=l[r],s?s.p(c,h):(s=l[r]=a[r](c),s.c()),V(s,1),s.m(i.parentNode,i))},i(c){o||(V(t.$$.fragment,c),V(s),o=!0)},o(c){L(t.$$.fragment,c),L(s),o=!1},d(c){st(t,c),c&&P(n),l[r].d(c),c&&P(i)}}}function Cy(e){let t,n=e[4].quote+"",r;return{c(){t=N("h1"),r=Kt(n),_(t,"class","random-text svelte-4wzs0n")},m(s,i){D(s,t,i),b(t,r)},p(s,i){i&16&&n!==(n=s[4].quote+"")&&ue(r,n)},d(s){s&&P(t)}}}function Py(e){let t,n;return t=new Lo({props:{mode:"concurrent",cursor:!1,$$slots:{default:[Sy]},$$scope:{ctx:e}}}),{c(){at(t.$$.fragment)},m(r,s){rt(t,r,s),n=!0},p(r,s){const i={};s&268435472&&(i.$$scope={dirty:s,ctx:r}),t.$set(i)},i(r){n||(V(t.$$.fragment,r),n=!0)},o(r){L(t.$$.fragment,r),n=!1},d(r){st(t,r)}}}function by(e){let t,n;return t=new Lo({props:{mode:"concurrent",cursor:!1,$$slots:{default:[Vy]},$$scope:{ctx:e}}}),{c(){at(t.$$.fragment)},m(r,s){rt(t,r,s),n=!0},p(r,s){const i={};s&268435474&&(i.$$scope={dirty:s,ctx:r}),t.$set(i)},i(r){n||(V(t.$$.fragment,r),n=!0)},o(r){L(t.$$.fragment,r),n=!1},d(r){st(t,r)}}}function Sy(e){let t,n=e[4].author+"",r;return{c(){t=N("h1"),r=Kt(n),_(t,"class","random-text svelte-4wzs0n")},m(s,i){D(s,t,i),b(t,r)},p(s,i){i&16&&n!==(n=s[4].author+"")&&ue(r,n)},d(s){s&&P(t)}}}function Vy(e){let t,n=e[4].author==""?"":"Click to Reveal",r,s,i;return{c(){t=N("h1"),r=Kt(n),_(t,"id","spoiler-author"),_(t,"class","random-text svelte-4wzs0n")},m(o,a){D(o,t,a),b(t,r),s||(i=ut(t,"click",e[14]),s=!0)},p(o,a){a&16&&n!==(n=o[4].author==""?"":"Click to Reveal")&&ue(r,n)},d(o){o&&P(t),s=!1,i()}}}function ky(e){let t,n,r,s,i,o,a,l,u,c,h;n=new Ty({props:{stringList:e[0]}});let f=typeof e[4]<"u"&&ll(e);return{c(){t=N("div"),at(n.$$.fragment),r=Y(),s=N("div"),i=N("div"),f&&f.c(),o=Y(),a=N("button"),a.textContent="Load Random Quote",_(i,"class","typewriter-block svelte-4wzs0n"),_(a,"class","random-button load-quote svelte-4wzs0n"),_(s,"class","heading svelte-4wzs0n"),_(t,"class","parent-div quotes svelte-4wzs0n")},m(d,m){D(d,t,m),rt(n,t,null),b(t,r),b(t,s),b(s,i),f&&f.m(i,null),b(s,o),b(s,a),u=!0,c||(h=ut(a,"click",e[9]),c=!0)},p(d,m){const g={};m&1&&(g.stringList=d[0]),n.$set(g),typeof d[4]<"u"?f?(f.p(d,m),m&16&&V(f,1)):(f=ll(d),f.c(),V(f,1),f.m(i,null)):f&&(Ft(),L(f,1,1,()=>{f=null}),xt())},i(d){u||(V(n.$$.fragment,d),V(f),St(()=>{!u||(l||(l=Gt(t,Se,{duration:100},!0)),l.run(1))}),u=!0)},o(d){L(n.$$.fragment,d),L(f),l||(l=Gt(t,Se,{duration:100},!1)),l.run(0),u=!1},d(d){d&&P(t),st(n),f&&f.d(),d&&l&&l.end(),c=!1,h()}}}function Dy(e){let t,n,r,s,i,o,a,l,u,c;return{c(){t=N("div"),n=N("input"),r=Y(),s=N("input"),i=Y(),o=N("button"),o.textContent="Add Quote",_(n,"id","new-quote-input"),_(n,"type","text"),_(n,"placeholder","Submit a new quote here"),_(n,"class","svelte-4wzs0n"),_(s,"id","new-quote-input-author"),_(s,"type","text"),_(s,"placeholder","Write quote author here. If multiple, separate with &"),_(s,"class","svelte-4wzs0n"),_(o,"class","random-button svelte-4wzs0n"),_(t,"class","parent-div quotes svelte-4wzs0n")},m(h,f){D(h,t,f),b(t,n),re(n,e[2]),b(t,r),b(t,s),re(s,e[3]),b(t,i),b(t,o),l=!0,u||(c=[ut(n,"input",e[15]),ut(s,"input",e[16]),ut(o,"click",e[10])],u=!0)},p(h,f){f&4&&n.value!==h[2]&&re(n,h[2]),f&8&&s.value!==h[3]&&re(s,h[3])},i(h){l||(St(()=>{!l||(a||(a=Gt(t,Se,{duration:100},!0)),a.run(1))}),l=!0)},o(h){a||(a=Gt(t,Se,{duration:100},!1)),a.run(0),l=!1},d(h){h&&P(t),h&&a&&a.end(),u=!1,kt(c)}}}function ul(e){let t,n,r;return{c(){t=N("button"),t.innerHTML='<span class="svelte-4wzs0n">\xD7</span>',_(t,"class","clear-button svelte-4wzs0n")},m(s,i){D(s,t,i),n||(r=ut(t,"click",e[13]),n=!0)},p:O,d(s){s&&P(t),n=!1,r()}}}function cl(e){let t,n=e[25]+"",r,s;return{c(){t=N("option"),r=Kt(n),t.__value=s=e[25],t.value=t.__value},m(i,o){D(i,t,o),b(t,r)},p(i,o){o&1&&n!==(n=i[25]+"")&&ue(r,n),o&1&&s!==(s=i[25])&&(t.__value=s,t.value=t.__value)},d(i){i&&P(t)}}}function Ny(e){let t,n=e[7],r=[];for(let s=0;s<n.length;s+=1)r[s]=hl(ol(e,n,s));return{c(){t=N("ul");for(let s=0;s<r.length;s+=1)r[s].c();_(t,"class","quote-list svelte-4wzs0n")},m(s,i){D(s,t,i);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(t,null)},p(s,i){if(i&128){n=s[7];let o;for(o=0;o<n.length;o+=1){const a=ol(s,n,o);r[o]?r[o].p(a,i):(r[o]=hl(a),r[o].c(),r[o].m(t,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(s){s&&P(t),Di(r,s)}}}function Oy(e){let t;return{c(){t=N("ul"),t.innerHTML='<li class="svelte-4wzs0n">No results found.</li>',_(t,"class","quote-list svelte-4wzs0n")},m(n,r){D(n,t,r)},p:O,d(n){n&&P(t)}}}function hl(e){let t,n,r=e[22].quote+"",s,i,o,a=e[22].author+"",l,u;return{c(){t=N("li"),n=N("span"),s=Kt(r),i=Y(),o=N("span"),l=Kt(a),u=Y(),_(n,"class","quote svelte-4wzs0n"),_(o,"class","author svelte-4wzs0n"),_(t,"class","svelte-4wzs0n")},m(c,h){D(c,t,h),b(t,n),b(n,s),b(t,i),b(t,o),b(o,l),b(t,u)},p(c,h){h&128&&r!==(r=c[22].quote+"")&&ue(s,r),h&128&&a!==(a=c[22].author+"")&&ue(l,a)},d(c){c&&P(t)}}}function My(e){let t,n,r,s,i,o,a,l,u,c,h,f,d,m,g,y,p=e[5]&&ul(e),w=Array.from(new Set(e[0].map(fl))).filter(dl).sort(ml),T=[];for(let A=0;A<w.length;A+=1)T[A]=cl(al(e,w,A));function M(A,q){return A[8]?Oy:Ny}let G=M(e),z=G(e);return{c(){t=N("div"),n=N("h2"),n.textContent="Search",r=Y(),s=N("div"),i=N("input"),o=Y(),p&&p.c(),a=Y(),l=N("button"),l.textContent="Search",u=Y(),c=N("select"),h=N("option"),h.textContent="All Authors";for(let A=0;A<T.length;A+=1)T[A].c();f=Y(),z.c(),_(i,"type","text"),_(i,"placeholder","Search..."),_(i,"class","svelte-4wzs0n"),_(l,"class","random-button svelte-4wzs0n"),_(s,"class","search-container svelte-4wzs0n"),h.__value="",h.value=h.__value,e[6]===void 0&&St(()=>e[18].call(c)),_(t,"class","parent-div search svelte-4wzs0n")},m(A,q){D(A,t,q),b(t,n),b(t,r),b(t,s),b(s,i),re(i,e[5]),b(s,o),p&&p.m(s,null),b(s,a),b(s,l),b(t,u),b(t,c),b(c,h);for(let j=0;j<T.length;j+=1)T[j]&&T[j].m(c,null);jo(c,e[6],!0),b(t,f),z.m(t,null),m=!0,g||(y=[ut(i,"input",e[17]),ut(l,"click",e[11]),ut(c,"change",e[18]),ut(c,"change",e[12])],g=!0)},p(A,q){if(q&32&&i.value!==A[5]&&re(i,A[5]),A[5]?p?p.p(A,q):(p=ul(A),p.c(),p.m(s,a)):p&&(p.d(1),p=null),q&1){w=Array.from(new Set(A[0].map(fl))).filter(dl).sort(ml);let j;for(j=0;j<w.length;j+=1){const C=al(A,w,j);T[j]?T[j].p(C,q):(T[j]=cl(C),T[j].c(),T[j].m(c,null))}for(;j<T.length;j+=1)T[j].d(1);T.length=w.length}q&65&&jo(c,A[6]),G===(G=M(A))&&z?z.p(A,q):(z.d(1),z=G(A),z&&(z.c(),z.m(t,null)))},i(A){m||(St(()=>{!m||(d||(d=Gt(t,Se,{duration:100},!0)),d.run(1))}),m=!0)},o(A){d||(d=Gt(t,Se,{duration:100},!1)),d.run(0),m=!1},d(A){A&&P(t),p&&p.d(),Di(T,A),z.d(),A&&d&&d.end(),g=!1,kt(y)}}}function Ly(e){let t,n,r,s,i,o,a,l;return t=new tf({props:{$$slots:{default:[Ry]},$$scope:{ctx:e}}}),r=new Ns({props:{$$slots:{default:[ky]},$$scope:{ctx:e}}}),i=new Ns({props:{$$slots:{default:[Dy]},$$scope:{ctx:e}}}),a=new Ns({props:{$$slots:{default:[My]},$$scope:{ctx:e}}}),{c(){at(t.$$.fragment),n=Y(),at(r.$$.fragment),s=Y(),at(i.$$.fragment),o=Y(),at(a.$$.fragment)},m(u,c){rt(t,u,c),D(u,n,c),rt(r,u,c),D(u,s,c),rt(i,u,c),D(u,o,c),rt(a,u,c),l=!0},p(u,c){const h={};c&268435456&&(h.$$scope={dirty:c,ctx:u}),t.$set(h);const f={};c&268435475&&(f.$$scope={dirty:c,ctx:u}),r.$set(f);const d={};c&268435468&&(d.$$scope={dirty:c,ctx:u}),i.$set(d);const m={};c&268435937&&(m.$$scope={dirty:c,ctx:u}),a.$set(m)},i(u){l||(V(t.$$.fragment,u),V(r.$$.fragment,u),V(i.$$.fragment,u),V(a.$$.fragment,u),l=!0)},o(u){L(t.$$.fragment,u),L(r.$$.fragment,u),L(i.$$.fragment,u),L(a.$$.fragment,u),l=!1},d(u){st(t,u),u&&P(n),st(r,u),u&&P(s),st(i,u),u&&P(o),st(a,u)}}}function Fy(e){let t,n;return t=new Wh({props:{$$slots:{default:[Ly]},$$scope:{ctx:e}}}),{c(){at(t.$$.fragment)},m(r,s){rt(t,r,s),n=!0},p(r,[s]){const i={};s&268435967&&(i.$$scope={dirty:s,ctx:r}),t.$set(i)},i(r){n||(V(t.$$.fragment,r),n=!0)},o(r){L(t.$$.fragment,r),n=!1},d(r){st(t,r)}}}const fl=e=>e.author,dl=e=>!e.includes("&"),ml=(e,t)=>e.localeCompare(t);function xy(e,t,n){let r=[];const s=T_(K_,"quotes","quote_list");j_(s,q=>{n(0,r=q.data().quote_list),y()});let i=!0,o="",a="",l={quote:"",author:""},u=-1;async function c(){if(n(1,i=!0),r.length===0){const q=await U_(s);n(0,r=q.data().quote_list)}u=Math.floor(Math.random()*r.length),n(4,l=r[u]),n(4,l.quote+=" ",l),r.splice(u,1)}async function h(){if(o!=""&&a!=""){let q={quote:o.trim(),author:a.trim()};Jn.push("Submitting quote..."),await B_(s,{quote_list:z_(q)}).then(()=>{Jn.push("Quote submitted!"),n(2,o=""),n(3,a="")})}}let f="",d="",m=[],g=!1;function y(){n(7,m=r.filter(q=>{const j=f.toLowerCase(),C=q.quote.toLowerCase(),K=q.author.toLowerCase(),eh=K.split(/[&,]/).map(nh=>nh.trim());return(C.includes(j)||K.includes(j))&&(d===""||eh.includes(d.toLowerCase()))})),m.reverse(),n(8,g=m.length===0)}function p(q){n(6,d=q.target.value),y()}function w(){n(5,f="")}const T=()=>n(1,i=!1);function M(){o=this.value,n(2,o)}function G(){a=this.value,n(3,a)}function z(){f=this.value,n(5,f)}function A(){d=mh(this),n(6,d),n(0,r)}return[r,i,o,a,l,f,d,m,g,c,h,y,p,w,T,M,G,z,A]}class Uy extends Bt{constructor(t){super(),Ut(this,t,xy,Fy,Ct,{})}}function By(e){let t,n,r,s,i,o;return{c(){t=N("div"),n=N("label"),n.textContent="Password:",r=Y(),s=N("input"),_(n,"for","password"),_(n,"class","svelte-1hfjgsa"),_(s,"id","password"),_(s,"type","password"),_(s,"class","svelte-1hfjgsa"),_(t,"id","password-container"),_(t,"class","svelte-1hfjgsa")},m(a,l){D(a,t,l),b(t,n),b(t,r),b(t,s),re(s,e[0]),i||(o=ut(s,"input",e[2]),i=!0)},p(a,l){l&1&&s.value!==a[0]&&re(s,a[0])},i:O,o:O,d(a){a&&P(t),i=!1,o()}}}function jy(e){let t,n;return t=new Uy({}),{c(){at(t.$$.fragment)},m(r,s){rt(t,r,s),n=!0},p:O,i(r){n||(V(t.$$.fragment,r),n=!0)},o(r){L(t.$$.fragment,r),n=!1},d(r){st(t,r)}}}function qy(e){let t,n,r,s,i,o;const a=[jy,By],l=[];function u(c,h){return h&1&&(t=null),t==null&&(t=c[1](c[0])===1252560117),t?0:1}return n=u(e,-1),r=l[n]=a[n](e),i=new iy({}),{c(){r.c(),s=Y(),at(i.$$.fragment)},m(c,h){l[n].m(c,h),D(c,s,h),rt(i,c,h),o=!0},p(c,[h]){let f=n;n=u(c,h),n===f?l[n].p(c,h):(Ft(),L(l[f],1,1,()=>{l[f]=null}),xt(),r=l[n],r?r.p(c,h):(r=l[n]=a[n](c),r.c()),V(r,1),r.m(s.parentNode,s))},i(c){o||(V(r),V(i.$$.fragment,c),o=!0)},o(c){L(r),L(i.$$.fragment,c),o=!1},d(c){l[n].d(c),c&&P(s),st(i,c)}}}function zy(e,t,n){let r="";const s=o=>o.split("").reduce((a,l)=>(a=(a<<5)-a+l.charCodeAt(0),a&a),0);function i(){r=this.value,n(0,r)}return[r,s,i]}class $y extends Bt{constructor(t){super(),Ut(this,t,zy,qy,Ct,{})}}new $y({target:document.getElementById("app")});export{Hy as c};
