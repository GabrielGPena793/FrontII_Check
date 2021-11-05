const titulo = document.querySelector("#titulo");
const descricao = document.querySelector("#descricao");
const url = document.querySelector("#url");
const adicionar = document.querySelector("button[type=submit]");
const cards = document.querySelector(".container-cards")


const banner = document.getElementsByClassName('banner')[0]
const blocks = document.getElementsByClassName("blocks");


adicionar.addEventListener("click" , (event) => {
    event.preventDefault();

    let divBanner = document.createElement('div');
    let divBlocks = document.createElement("div");
    let p = document.createElement('p');
    let h2 = document.createElement("h2");

    divBanner.setAttribute("class", 'banner')
    divBlocks.setAttribute("class", "blocks")

    divBanner.appendChild(divBlocks);
    document.body.appendChild(divBanner);


    
    for(let i = 1; i < 400; i++){
        divBanner.innerHTML += "<div class='blocks'></div>";
        const duration = Math.random() * 2.5;
        blocks[i].style.animationDuration = 2+duration + 's';
        blocks[i].style.animationDelay= duration + 's';
   
    }
    
    divBlocks.animate([
        {
            transform:  'translateZ(2000px)',
            background: 'url(https://www.androidguys.com/wp-content/uploads/2015/12/Wave-Wallpapers-1.jpg) ',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            boxShadow: '0 5px 15px rgba(0,0,0,0.5)'
        },
        {
            transform:  'translateZ(0px)',
            background: 'url(https://www.androidguys.com/wp-content/uploads/2015/12/Wave-Wallpapers-1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
        }
    ]);



})


