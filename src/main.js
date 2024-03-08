import { getImages } from "./js/pixabay-api";
import { ulEl ,imagesTemplate } from "./js/render-functions";
import error from "./img/error-icon.svg";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const formEl = document.querySelector(".js-form");
const loadEl = document.querySelector(".loader");

formEl.addEventListener("submit", onBtnSubmit);

function onBtnSubmit(e) { 
    e.preventDefault();
    const inputValue = e.target.elements.photo.value;
    if (!inputValue.trim()) return;
    showLoader();
    
    getImages(inputValue).then(({hits}) => { 
        if (hits.length === 0) {
            return iziToast.show({
                iconUrl: error,
                color: "#ef4040",
                messageColor: "#fff",
                position: "topRight",
                message: "Sorry, there are no images matching your search query. Please try again!"
            });
        } 
    }).finally(() => { 
        hideLoader();
    });

    getImages(inputValue).then(({ hits }) => { 
        showLoader();

        const markup = imagesTemplate({ hits });
        ulEl.innerHTML = markup;
        new SimpleLightbox(".gallery a", {
            captionsData: "alt",
            captionDelay: 200,
        });
        refresh();
    }).finally(() => { 
        hideLoader();
    });
    e.target.reset();
}

function showLoader() { 
    loadEl.classList.remove("is-hidden");
}

function hideLoader() { 
    loadEl.classList.add("is-hidden");
}