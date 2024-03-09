import{S as u,i as d}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function p(r){const s="https://pixabay.com",n="/api/",o="42754365-919be7dc6da81f3ebd6558a71",e=new URLSearchParams({key:o,q:r.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0}),t=`${s}${n}?${e}`;return fetch(t).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}const a=document.querySelector(".gallery");function m(r){const{webformatURL:s,largeImageURL:n,tags:o,likes:e,views:t,comments:i,downloads:l}=r;return`<li class="list-item">
        <a href="${n}"><img src="${s}" alt="${o}" class="item-img" /></a>
        <div class="list-wrapper">
          <div class="text-wrapper">
            <h5 class="title">Likes</h5>
            <p class="text">${e}</p>
          </div>
          <div class="text-wrapper">
            <h5 class="title">Views</h5>
            <p class="text">${t}</p>
          </div>
          <div class="text-wrapper">
            <h5 class="title">Comments</h5>
            <p class="text">${i}</p>
          </div>
          <div class="text-wrapper">
            <h5 class="title">Downloads</h5>
            <p class="text">${l}</p>
          </div>
        </div>
      </li>`}function f({hits:r}){return r.map(m).join("")}const h="/goit-js-hw-11/assets/error-icon-77b820ef.svg",g=new u(".gallery a",{captionsData:"alt",captionDelay:200}),y=document.querySelector(".js-form"),c=document.querySelector(".loader");y.addEventListener("submit",v);function v(r){r.preventDefault();const s=r.target.elements.photo.value;s.trim()&&(w(),p(s).then(({hits:n})=>{const o=f({hits:n});if(n.length===0)return a.innerHTML=o,d.show({iconUrl:h,color:"#ef4040",messageColor:"#fff",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});a.innerHTML=o,g.refresh()}).finally(()=>{L()}),r.target.reset())}function w(){c.classList.remove("is-hidden")}function L(){c.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
