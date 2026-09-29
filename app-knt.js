document.querySelector("#icon-knt").onclick = function(){
    let navLinks = document.querySelector("#navLinks");
    if(navLinks.style.display ==="block"){
        navLinks.style.display = "none";
    } else {
        navLinks.style.display ="block";
    }
  }