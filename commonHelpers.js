import{i as p,S as f}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function n(s){const r="https://pixabay.com",o="/api/",a="42754365-919be7dc6da81f3ebd6558a71",e=new URLSearchParams({key:a,q:s.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0}),t=`${r}${o}?${e}`;return fetch(t).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}const m=document.querySelector(".gallery");function h(s){const{webformatURL:r,largeImageURL:o,tags:a,likes:e,views:t,comments:i,downloads:d}=s;return`<li class="list-item">
        <a href="${o}"><img src="${r}" alt="${a}" class="item-img" /></a>
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
            <p class="text">${d}</p>
          </div>
        </div>
      </li>`}function g({hits:s}){return s.map(h).join("")}const y="/goit-js-hw-11/assets/error-icon-77b820ef.svg",v=document.querySelector(".js-form"),u=document.querySelector(".loader");v.addEventListener("submit",w);function w(s){s.preventDefault();const r=s.target.elements.photo.value;r.trim()&&(l(),n(r).then(({hits:o})=>{if(o.length===0)return p.show({iconUrl:y,color:"#ef4040",messageColor:"#fff",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{c()}),n(r).then(({hits:o})=>{l();const a=g({hits:o});m.innerHTML=a,new f(".gallery a",{captionsData:"alt",captionDelay:200}),refresh()}).finally(()=>{c()}),s.target.reset())}function l(){u.classList.remove("is-hidden")}function c(){u.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
