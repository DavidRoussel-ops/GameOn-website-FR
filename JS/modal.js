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
let inputCheckbox1 = document.getElementById("checkbox1");
let quantity = document.getElementById("quantity");
let footer = document.getElementById("footer");

inputCheckbox1.addEventListener("change", function () {
  if (inputCheckbox1.value === "non") {
    inputCheckbox1.value = "oui";
    console.log(inputCheckbox1.value);
  } else {
    inputCheckbox1.value = "non";
    console.log(inputCheckbox1.value);
  }
});

function changePage() {
  let msgEnd = document.getElementById("msgEnd");
  let p = document.getElementById("pId");
  let input = document.getElementById("closeButton")
  let form = document.getElementById("formId");
  let modalBody = document.getElementById("modalBody");
  msgEnd.classList.remove("none");
  p.classList.remove("none");
  input.classList.remove("none");
  form.classList.add("none");
  modalBody.classList.add("none");
}

function closeFinish() {
  let btnClose = document.getElementById("closeButton");
  btnClose.addEventListener("click", function () {
    window.location.href = "http://localhost:63342/GameOn-website-FR/HTML/index.html?_ijt=a6l3thnr8i4p9pqp0jmjubqh3r";
  });
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//Fermer le formulaire
closeSpan.addEventListener("click", closeForm);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  footer.classList.add("none");
}

//Fonction pour fermer le formulaire
function closeForm() {
  modalbg.style.display = "none";
  window.location.href = "http://localhost:63342/GameOn-website-FR/HTML/index.html?_ijt=a6l3thnr8i4p9pqp0jmjubqh3r";
}

//Fonction pour vérifié si un champ est vide
function verifierChamp(champ) {
  if (champ === "") {
    quantity.classList.add("errorInput");
    let spanErrorQuantite = document.getElementById("errorMessageQuantite");
    if (!spanErrorQuantite) {
      let errorPopupQuantite = document.getElementById("errorPopupQuantite");
      spanErrorQuantite = document.createElement("span");
      spanErrorQuantite.id = "errorMessageQuantite";
      spanErrorQuantite.classList.add("errorMessage");
      errorPopupQuantite.appendChild(spanErrorQuantite);
      spanErrorQuantite.innerText = "Veuillez renseigner ce champ";
      throw new Error("Veuillez renseigner ce champ");
    }
  }
}

//Fonction pour valider les checkbox
function validerCheckbox() {
  if (inputCheckbox1.value === "non") {
    inputCheckbox1.classList.add("errorInput");
    let spanErrorCheckbox = document.getElementById("errorMessageCheckbox");
    if (!spanErrorCheckbox) {
      let errorPopupCheckbox = document.getElementById("errorPopupCheckbox");
      spanErrorCheckbox = document.createElement("span");
      spanErrorCheckbox.id = "errorMessageCheckbox";
      spanErrorCheckbox.classList.add("errorMessage");
      errorPopupCheckbox.appendChild(spanErrorCheckbox);
      spanErrorCheckbox.innerText = "Vous devez accepter les conditions de participation";
      throw new Error("Vous devez accepter les conditions de participation");
    }
  }
}

//Fonction permettant de valider les deux caractères au prénom
function validerPrenom(champ) {
  if (champ.length < 2) {
    inputPrenom.classList.add("errorInput");
    let spanErrorPrenom = document.getElementById("errorMessagePrenom");
    if (!spanErrorPrenom) {
      let errorPopupPrenom = document.getElementById("errorPopupPrenom");
      spanErrorPrenom = document.createElement("span");
      spanErrorPrenom.id = "errorMessagePrenom";
      spanErrorPrenom.classList.add("errorMessage");
      errorPopupPrenom.appendChild(spanErrorPrenom);
      spanErrorPrenom.innerText = "Le champ doit contenir au moins 2 caractères";
      throw new Error("Le champ doit contenir au moins 2 caractères");
    }
  }
}

//Fonction permettant de valider les deux caractères au nom
function validerNom(champ) {
  if (champ.length < 2) {
    inputNom.classList.add("errorInput");
    let spanErrorNom = document.getElementById("errorMessageNom");
    if (!spanErrorNom) {
      let errorPopupNom = document.getElementById("errorPopupNom");
      spanErrorNom = document.createElement("span");
      spanErrorNom.id = "errorMessageNom";
      spanErrorNom.classList.add("errorMessage");
      errorPopupNom.appendChild(spanErrorNom);
      spanErrorNom.innerText = "Le champ doit contenir au moins 2 caractères";
      throw new Error("Le champ doit contenir au moins 2 caractères");
    }
  }
}

//Fonction valider l'email
function validerEmail(champ) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  if (!emailRegExp.test(champ)) {
    inputEmail.classList.add("errorInput");
    let spanErrorEmail = document.getElementById("errorMessageEmail");
    if (!spanErrorEmail) {
      let errorPopupEmail = document.getElementById("errorPopupEmail");
      spanErrorEmail = document.createElement("span");
      spanErrorEmail.id = "errorMessageEmail";
      spanErrorEmail.classList.add("errorMessage");
      errorPopupEmail.appendChild(spanErrorEmail);
      spanErrorEmail.innerText = "L'e-mail n'est pas valide";
      throw new Error("L'e-mail n'est pas valide");
    }
  }
}

//Fonction valider l'anniverssaire
function validerAnniversaire(champ) {
  let annivRegExp = new RegExp("[1-9]+-[1-9]+-[1-9]+");
  if (!annivRegExp.test(champ)) {
    inputAnniversaire.classList.add("errorInput");
    let spanErrorAnniv = document.getElementById("errorMessageAnniv");
    if (!spanErrorAnniv) {
      let errorPopupAnniv = document.getElementById("errorPopupAnniv");
      spanErrorAnniv = document.createElement("span");
      spanErrorAnniv.id = "errorMessageAnniv";
      spanErrorAnniv.classList.add("errorMessage");
      errorPopupAnniv.appendChild(spanErrorAnniv);
      spanErrorAnniv.textContent = "Veuillez renseigner une date valide";
      throw new Error("Veuillez renseigner une date valide");
    }
  }
}

//Fonction de gestion du formulaire
  function gererFormulaire() {
    buttonSubmit.addEventListener("click", function () {
      try {
        validerPrenom(inputPrenom.value)
        validerNom(inputNom.value)
        validerEmail(inputEmail.value)
        validerAnniversaire(inputAnniversaire.value)
        verifierChamp(quantity.value);
        validerCheckbox();
        console.log("Ok")
        changePage();
      } catch (error) {
        console.log(error);
      }
    })
  }

  function validate() {
    gererFormulaire();
  }



