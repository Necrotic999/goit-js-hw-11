export function getImages(userValue) {
    const BASE_URL = "https://pixabay.com";
    const END_POINT = "/api/";
    const MY_KEY = "42754365-919be7dc6da81f3ebd6558a71";
    const params = new URLSearchParams({
        key: MY_KEY,
        q: userValue.trim(),
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });
    const url = `${BASE_URL}${END_POINT}?${params}`;

    return fetch(url).then(res => { 
        if (!res.ok) { 
            throw new Error(res.status);
        }
        return res.json();
    })
}
