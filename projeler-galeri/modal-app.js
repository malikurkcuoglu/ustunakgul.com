var modal = document.getElementById("modal");

var imgs = document.getElementsByClassName("img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for(let i = 0; i<imgs.length; i++) {
    imgs[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = imgs[i].src;
        captionText.innerHTML = imgs[i].alt;
      }
}



var span = document.getElementsByClassName("close")[0];


modal.onclick = function(e) {

  if(e.target !== modalImg) {
    modal.style.display = "none"
  }
}