import{a as b,S as q,i as c}from"./assets/vendor-73qhTu8_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const P="https://pixabay.com/api/",E="55702629-61a52a53581ffbc81075bfc8f",$=15;async function u(a,t){const o={key:E,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:$};return(await b.get(P,{params:o})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),y=document.querySelector(".load-more"),B=new q(".gallery a",{captionsData:"alt",captionDelay:250});function h(a){const t=a.map(o=>`
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
  `).join("");f.insertAdjacentHTML("beforeend",t),B.refresh()}function M(){f.innerHTML=""}function p(){m.classList.add("active")}function g(){m.classList.remove("active")}function L(){y.classList.remove("hidden")}function w(){y.classList.add("hidden")}const v=document.querySelector(".form"),A=document.querySelector(".load-more");let s=1,i="",d=0;const S=15;v.addEventListener("submit",O);A.addEventListener("click",R);async function O(a){if(a.preventDefault(),i=a.target.elements["search-text"].value.trim(),!!i){s=1,M(),w(),p();try{const t=await u(i,s);if(d=t.totalHits,t.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(t.hits),d>S&&L()}catch{c.error({message:"Something went wrong!"})}finally{g(),v.reset()}}}async function R(){s+=1,w(),p();try{const a=await u(i,s);h(a.hits),s*S>=d?c.info({message:"We're sorry, but you've reached the end of search results."}):L();const n=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:n*2,behavior:"smooth"})}catch{c.error({message:"Something went wrong!"})}finally{g()}}
//# sourceMappingURL=index.js.map
