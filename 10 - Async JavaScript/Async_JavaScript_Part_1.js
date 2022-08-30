const btn = document.querySelector(".button-36");

btn.addEventListener("click",(e) =>{
    // console.log(e);
    let xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all",true);
    xhr.onload = () =>{
        if (xhr.status == 200){
            let Countries = JSON.parse(xhr.response);
            console.log(Countries);
            Countries.forEach(element => {
                let Countrie = document.createElement("div");
                Countrie.classList.add("Countrie");
                let CountrieName = document.createElement("h2");
                Countrie.classList.add("CountrieName");
                CountrieName.innerText = element.name.common;
                let CountrieImg = document.createElement("img");
                CountrieImg.classList.add("CountrieImg");
                CountrieImg.src = element.flags.png;
                Countrie.appendChild(CountrieName);
                Countrie.appendChild(CountrieImg);
                document.querySelector(".container").appendChild(Countrie);
                // console.log(element.name.common);
                // console.log(element.flags.png);
            });
        }
    }
    xhr.send();
});