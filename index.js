import{a as f,S as p,i as a}from"./assets/vendor-DFA_L3eI.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",m="55702629-61a52a53581ffbc81075bfc8f";function h(s){const o={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(d,{params:o}).then(t=>t.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new p(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(t=>`
    <li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <div class="info">
        <p>Likes: ${t.likes}</p>
        <p>Views: ${t.views}</p>
        <p>Comments: ${t.comments}</p>
        <p>Downloads: ${t.downloads}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function L(){c.innerHTML=""}function b(){l.classList.add("active")}function v(){l.classList.remove("active")}const u=document.querySelector(".form");u.addEventListener("submit",w);function w(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){a.warning({message:"Please enter a search query!",position:"topRight"});return}L(),b(),h(o).then(t=>{if(t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits)}).catch(()=>{a.error({message:"Something went wrong. Try again later!",position:"topRight"})}).finally(()=>{v(),u.reset()})}
//# sourceMappingURL=index.js.map
