function editNav() {
  let myTopNav = document.getElementById("myTopnav");
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
let inputNom = document.getElementById("last");
let inputPrenom = document.getElementById("first");
let inputEmail = document.getElementById("email");
let inputAnniversaire = document.getElementById("birthdate");
let buttonSubmit = document.getElementById("submitButton");
let inputCheckbox = document.getElementsByClassName("checkbox-input");
let textControl = document.getElementsByClassName("text-control");

function consoleLog (value) {
  console.log(value);
}


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

//Fonction pour vérifié si un champ est vide
function verifierChamp(champ) {
  if (champ === "") {
    throw new Error("Veuillez renseigner ce champ")
  } else {
    console.log("Ce champ est rempli")
  }
}

//Fonction pour valider les checkbox
function validerCheckbox(input) {
  if (input === false) {
    console.log(input);
    throw new Error("Il faut selectionner au moins un checkbox");
  }
}

//Fonction permettant de valider les deux caractères
function validerCaractere(champ) {
  if (champ.length < 2) {
    console.log("2 carctère putain");
    throw new Error("Le champ doit contenir au moins 2 caractères");
  }
}

//Fonction valider l'email
function validerEmail(champ) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  if (!emailRegExp.test(champ)) {
    console.log("email de merde")
    throw new Error("l'e-mail n'est pas valide");
  }
}

//Fonction valider l'anniverssaire
function validerAnniversaire(champ) {
  let annivRegExp = new RegExp("[1-9]+-[1-9]+-[1-9]+");
  if (!annivRegExp.test(champ)) {
    console.log(inputAnniversaire.value);
    throw new Error("Veuillez renseigner une date valide");
  }
}

//Fonction pour afficher les erreurs formulaire
function afficherMessageErreur(message) {
  let spanError = document.getElementById("errorMessage");
  if (!spanError) {
    let errorPopup = document.querySelector(".errorPopup");
    spanError = document.createElement("span");
    spanError.id = "errorMessage";
    errorPopup.appendChild(spanError);
  }
  spanError.innerText = message;
}

//Fonction de gestion du formulaire
function gererFormulaire() {
  buttonSubmit.addEventListener("click", function () {
    try {
      validerCaractere(inputPrenom.value)
      validerCaractere(inputNom.value)
      validerEmail(inputEmail.value)
      validerAnniversaire(inputAnniversaire.value)
      verifierChamp(textControl.value);
      validerCheckbox(inputCheckbox);
      console.log("Ok")
      afficherMessageErreur("");
      validate();
    } catch (error) {
      afficherMessageErreur(error.message);
    }
  })
}

function validate() {
  window.location.href = "http://localhost:63342/GameOn-website-FR/HTML/index.html?_ijt=a6l3thnr8i4p9pqp0jmjubqh3r";
}


