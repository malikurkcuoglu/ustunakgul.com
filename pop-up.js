const popUpContainer = document.querySelector(".pop-up-container");
const popUpClose = document.querySelector(".pop-up-close");
const popUp = document.querySelector(".pop-up");


document.querySelector("body").onload = function(e){
    popUpContainer.style.opacity = "1";
}

popUpContainer.addEventListener("click", function(e){
    if(!popUp.contains(e.target) || e.target == popUpClose) {
        popUpContainer.style.opacity = "0";
        setTimeout(function(){
            popUpContainer.style.display = "none";
        },300)
    }
})