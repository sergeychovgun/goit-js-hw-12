import{a as S,S as q,i as n}from"./assets/vendor-73qhTu8_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const P="https://pixabay.com/api/",E="55702629-61a52a53581ffbc81075bfc8f",$=15;async function u(s,t){const o={key:E,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:$};return(await S.get(P,{params:o})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=document.querySelector(".load-more"),B=new q(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const t=s.map(o=>`
    <li class="gallery-item">
      <a href="${o.largeImageURL}">
        <img src="${o.webformatURL}" alt="${o.tags}" />
      </a>
      <div class="info">
        <p>Likes: ${o.likes}</p>
        <p>Views: ${o.views}</p>
        <p>Comments: ${o.comments}</p>
        <p>Downloads: ${o.downloads}</p>
      </div>
    </li>
  `).join("");f.insertAdjacentHTML("beforeend",t),B.refresh()}function M(){f.innerHTML=""}function p(){m.classList.add("active")}function g(){m.classList.remove("active")}function L(){h.classList.remove("hidden")}function w(){h.classList.add("hidden")}const v=document.querySelector(".form"),A=document.querySelector(".load-more");let i=1,c="",d=0;const b=15;v.addEventListener("submit",O);A.addEventListener("click",R);async function O(s){if(s.preventDefault(),c=s.target.elements["search-text"].value.trim(),!!c){i=1,M(),w(),p();try{const t=await u(c,i);if(d=t.totalHits,t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(t.hits),d>b?L():n.info({message:"We're sorry, but you've reached the end of search results."})}catch{n.error({message:"Something went wrong!"})}finally{g(),v.reset()}}}async function R(){i+=1,w(),p();try{const s=await u(c,i);y(s.hits),i*b>=d?n.info({message:"We're sorry, but you've reached the end of search results."}):L();const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}catch{n.error({message:"Something went wrong!"})}finally{g()}}
//# sourceMappingURL=index.js.map
