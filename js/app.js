// variable declaration
const main = document.querySelector("main");
const slideDivs = document.querySelectorAll("main>div");

const nextBtn = document.querySelector("#nextBTN");
const prevBtn = document.querySelector("#prevBTN");
// eventlisteners
nextBtn.addEventListener("click", nextSide);
prevBtn.addEventListener("click", prevSide);
main.addEventListener("transitionend",function () {
    if (slideDivs[counter].classList.contains("firstClone")) {
        main.style.transition = `none`;
        counter = 1;
        main.style.transform = `translateX(-${counter * size}px)`;
    }
    if (slideDivs[counter].classList.contains("lastClone")) {
        main.style.transition = `none`;
        counter = slideDivs.length -2;
        main.style.transform = `translateX(-${counter * size}px)`;
    }
    console.log(counter);
});

//// counter
let counter = 1;
//// size
const size = slideDivs[0].clientWidth;

main.style.transform = `translateX(-${counter * size}px)`;

// functions
function nextSide() {
    if (counter > (slideDivs.length -2)) return;
    main.style.transition = `all .4s ease-in-out`;
    counter++;
    main.style.transform = `translateX(-${counter*size}px)`;
}

function prevSide() {
    if (counter <= 0) return; 
    main.style.transition = `all .4s ease-in-out`;
    counter--;
    main.style.transform = `translateX(-${counter * size}px)`;
}
