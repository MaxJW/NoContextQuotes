import{s as g,r as l,b as c}from"./animationSetup.cf6d32e0.js";const f=async e=>g(Array.isArray(e)?e[l(0,e.length)]:e),y=async({currentNode:e,text:s},i)=>{c(e,i.parentElement,n=>{const a=e===n?"typing":"finished-typing";n.classList.add(a)});const r=[...new Intl.Segmenter("en",{granularity:"grapheme"}).segment(s)];let t=!1;for(const{segment:n,index:a}of r){if(n===">"){t=!1;continue}else if(n==="<"){t=!0;continue}else if(t)continue;e.innerHTML=s.slice(0,a),await f(i.interval)}e.innerHTML=s};export{f as t,y as w};
