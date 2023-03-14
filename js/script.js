// creo delle slide dinamiche
const arrayImages = ["img/01.jpg", "img/02.jpg","img/03.jpg", "img/04.jpg", "img/05.jpg"];

const slideContImg = document.querySelector(".slide-img");
console.log(slideContImg);

for(let i = 0; i < arrayImages.length; i++) {
    const slideImage = arrayImages[i];

    const slideDiv = `
        <div class="image">
            <img src="${slideImage}" alt="">
        </div>`;
    console.log(slideDiv);
    slideContImg.innerHTML += slideDiv;
}

// ora devo prendere la prima immagine in active
const allImages = document.getElementsByClassName("image");
console.log(allImages);

let activeImage = 0;
allImages[activeImage].classList.add("active");

// click bottone avanti
const btnDown = document.querySelector(".down");
btnDown.addEventListener("click", function() {
    if (activeImage < (allImages.length - 1)) {
        // rimuovo active 
        allImages[activeImage].classList.remove("active");

        // do un incremento alla prima immagine 
        activeImage++;

        // aggiungo active alla successiva
        allImages[activeImage].classList.add("active");

        if (activeImage === allImages.length - 1) {
            btnDown.classList.add("hidden");
        }
    } 
});


