// const Auth = "563492ad6f917000010000016186f050c31f47d88e0552f916d1c04e";
const Auth = "563492ad6f9170000100000177a1d0217c0347f6998f25fbd6ba932d";
const search = document.querySelector('.search');
const search_btn = document.querySelector('.search_btn');
const gallery = document.querySelector('.gallery');


async function createdPhotos(){
    const response = await fetch("https://api.pexels.com/v1/curated",{
        method : "GET",
        headers : {
            Accept : "application/json",
            Authorization : Auth
        }
    });
    const data = await response.json();
    console.log(data.photos);
    data.photos.forEach(photo => {
        const galleryImg = document.createElement("div");
        galleryImg.classList.add("galleryImg");
        galleryImg.setAttribute("data-img",photo.photographer);
        galleryImg.innerHTML = `<img src=${photo.src.large} alt=${photo.alt} class="galleryImg_child">
        <p class="galleryImg_photographer">${photo.photographer}</p>`;
        gallery.appendChild(galleryImg);
    });
}
createdPhotos();