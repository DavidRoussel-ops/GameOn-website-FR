function editNav() {
  var myTopNav = document.getElementById("myTopnav");
  if (myTopNav.className === "topnav") {
    myTopNav.className += " responsive";
  } else {
    myTopNav.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeSpan = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//Fermer le formulaire
closeSpan.addEventListener("click", closeForm);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Fonction pour fermer le formulaire
function closeForm() {
  modalbg.style.display = "none";
}


