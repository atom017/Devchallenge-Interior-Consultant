let menu = document.getElementById("menu-icon");
let menuClose = document.getElementById("menu-close");

menu.addEventListener('click',function(e){
    e.preventDefault();
  if (menuClose.style.display == "none") {
    menuClose.style.display = "inline";
    menu.style.display = "none";
    document.getElementById("overlay").style.display = "block";
  } else {
    menuClose.style.display = "none";
  }

  let wholePage = document.querySelector(".whole-container");
  
});

menuClose.addEventListener('click',function(e){
    e.preventDefault();
    
  if (menu.style.display == "none") {
    menu.style.display = "inline";
    menuClose.style.display = "none";
    document.getElementById("overlay").style.display = "none";
  } else {
    menu.style.display = "none";
  }

  
});