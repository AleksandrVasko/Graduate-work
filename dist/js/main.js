(()=>{"use strict";(()=>{const e=document.querySelector(".services-elements"),t=document.querySelector(".modal-overlay"),a=document.querySelector(".modal-callback"),l=document.querySelector(".modal-close"),n=document.querySelector(".header").querySelector(".callback-btn"),c=document.querySelector(".button-services");let o;const s=()=>{t.style.display="block",a.style.display="block",(({timing:e,draw:t,duration:a})=>{let l=performance.now();requestAnimationFrame((function n(c){let o=(c-l)/a;o>1&&(o=1);let s=e(o);t(s),o<1&&requestAnimationFrame(n)}))})({duration:1500,timing:o,draw:function(e){a.style.left=50*e+"%"}})},r=e=>function(t){return 1-e(1-t)},i=e=>{for(let t=0,a=1;;t+=a,a/=2)if(e>=(7-4*t)/11)return-Math.pow((11-6*t-11*e)/4,2)+Math.pow(a,2)};n.addEventListener("click",(e=>{o=r(i),e.target.classList.contains("fancyboxModal")?s():e.target.classList.contains("modal-close")})),e.addEventListener("click",(e=>{o=r(i),e.target.classList.contains("fancyboxModal")?s():e.target.classList.contains("modal-close")})),c.addEventListener("click",(e=>{o=r(i),e.target.classList.contains("fancyboxModal")?s():e.target.classList.contains("modal-close")})),t.addEventListener("click",(e=>{e.target.closest(".modal-callback")||(a.style.display="none",t.style.display="none")})),l.addEventListener("click",(e=>{a.style.display="none",t.style.display="none"}))})()})();