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
const closeSpan = document.querySelector(".close");
let inputNom = document.getElementById("last").value;
let inputPrenom = document.getElementById("first").value;
console.log(inputPrenom);
let inputEmail = document.getElementById("email").value;
let inputAnniversaire = document.getElementById("birthdate").value;
let buttonSubmit = document.getElementById("submitButton");

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

//Fonction permettant de valider les deux caractères
function validerCaractere(champ) {
  if (champ.length < 2) {
    throw new Error("Le champ doit contenir au moins 2 caractères");
  }
}

//Fonction valider l'email
function validerEmail(champ) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  if (!emailRegExp.test(champ)) {
    throw new Error("l'e-mail n'est pas valide");
  }
}

//Fonction pour afficher les erreurs formulaire
function afficherMessageErreur(message) {
  let spanError = document.getElementById("errorMessage");
  if (!spanError) {
    let formData = document.querySelector(".formData");
    spanError = document.createElement("span");
    spanError.id = "errorMessage";
    formData.appendChild(spanError);
  }
  spanError.innerText = message;
}

//Fonction de gestion du formulaire
function gererFormulaire() {
  try {
    validerCaractere(inputPrenom);
    validerCaractere(inputNom);
    validerEmail(inputEmail);
    afficherMessageErreur("");
  } catch (error) {
    afficherMessageErreur(error.message);
  }
}

//Récupération du formulaire
let formulaire = document.querySelector("form");

formulaire.addEventListener("submit", (e) => {
  console.log(inputPrenom);
  e.preventDefault();
  gererFormulaire();
});

function validate() {
  gererFormulaire();
}


