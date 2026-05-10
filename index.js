import{a as b,S,i as c}from"./assets/vendor-73qhTu8_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const q="https://pixabay.com/api/",P="55702629-61a52a53581ffbc81075bfc8f",E=15;async function u(a,t){const o={key:P,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:E};return(await b.get(q,{params:o})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),y=document.querySelector(".load-more"),$=new S(".gallery a",{captionsData:"alt",captionDelay:250});function h(a){const t=a.map(o=>`
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
  `).join("");f.insertAdjacentHTML("beforeend",t),$.refresh()}function B(){f.innerHTML=""}function p(){m.classList.add("active")}function g(){m.classList.remove("active")}function M(){y.classList.remove("hidden")}function L(){y.classList.add("hidden")}const w=document.querySelector(".form"),A=document.querySelector(".load-more");let n=1,i="",d=0;const v=15;w.addEventListener("submit",O);A.addEventListener("click",R);async function O(a){if(a.preventDefault(),i=a.target.elements["search-text"].value.trim(),!!i){n=1,B(),L(),p();try{const t=await u(i,n);if(d=t.totalHits,t.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(t.hits),d>v&&M()}catch{c.error({message:"Something went wrong!"})}finally{g(),w.reset()}}}async function R(){n+=1,p();try{const a=await u(i,n);h(a.hits),n*v>=d&&(L(),c.info({message:"We're sorry, but you've reached the end of search results."}));const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}catch{c.error({message:"Load more failed!"})}finally{g()}}
//# sourceMappingURL=index.js.map
