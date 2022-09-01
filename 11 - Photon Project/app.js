// const Auth = "563492ad6f917000010000016186f050c31f47d88e0552f916d1c04e";
const Auth = "563492ad6f9170000100000177a1d0217c0347f6998f25fbd6ba932d";
const search = document.querySelector('.search');
const search_btn = document.querySelector('.search_btn');
const gallery = document.querySelector('.gallery');
const search_form = document.querySelector('.search_form');
const mor_btn = document.querySelector('.mor_btn');
let currentValue;
let Link;
let page = 1;
let searchValue;

//ADD EventListener

search.addEventListener("input",(e)=>{
    searchValue = e.target.value;
});

search_form.addEventListener("submit",(e) =>{
    e.preventDefault();
    currentValue = search.value;
    searchPhotos(searchValue);
});

mor_btn.addEventListener("click",() => {
    loadMore();
});
// Add Functions

async function fetchData(url){
    const response = await fetch(url,{
        method : "GET",
        headers : {
            Accept : "application/json",
            Authorization : Auth
        }
    });
    const data = await response.json();
    return data;
}

function GeneratePictures(data){

    data.photos.forEach(photo => {
        const galleryImg = document.createElement("div");
        galleryImg.classList.add("galleryImg");
        galleryImg.setAttribute("data-img",photo.photographer);
        galleryImg.innerHTML = `<div class="galleryImg_info">
        <p class="galleryImg_photographer">${photo.photographer}</p>
        <a href="${photo.src.original}" target="_blank">Download</a></div>
        <img src=${photo.src.large} alt=${photo.alt} class="galleryImg_child">`;
        gallery.appendChild(galleryImg);
    });
}

function clear(){
    gallery.innerHTML = '';
    search.value = "";
}
async function createdPhotos(){
    const data = await fetchData("https://api.pexels.com/v1/curated");
    GeneratePictures(data);
}
async function searchPhotos(query){
    clear();
    const data = await fetchData(`https://api.pexels.com/v1/search?query=${query}&per_page=15&page=1`);
    GeneratePictures(data);
}
async function loadMore(){
    page++;
    if(currentValue){
        Link = `https://api.pexels.com/v1/search?query=${currentValue}&per_page=15&page=${page}`;
    }
    else{
        // Link = `https://api.pexels.com/v1/curated?per_page=15&page=${page}`;
        Link = `https://api.pexels.com/v1/curated?page=${page}`;
    }
    const data = await fetchData(Link);
    GeneratePictures(data);
}
createdPhotos();