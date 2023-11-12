//Call function
function launchPage() {
  validate();
  showHideForm();
  showNav();
  changeCheckbox();
  closeFinish();
}

//Function to close form and refresh
function closeFinish() {
  let btnClose = document.getElementById("closeButton");
  btnClose.addEventListener("click", function () {
    window.location.href = "http://localhost:63342/GameOn-website-FR/HTML/index.html?_ijt=a6l3thnr8i4p9pqp0jmjubqh3r";
  });
}

//Function show hide form elements
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

//Function to validate form
function validate() {
  const inputFirstname = document.getElementById("first");
  const inputLastname = document.getElementById("last");
  const inputEmail = document.getElementById("email");
  const inputBirthdate = document.getElementById("birthdate");
  const quantity = document.getElementById("quantity");
  const inputCheckbox1 = document.getElementById("checkbox1");
  const buttonSubmit = document.getElementById("submitButton");
  buttonSubmit.addEventListener("click", function () {
    if (checkFirstname(inputFirstname.value) &&
    checkLastname(inputLastname.value) &&
    checkEmail(inputEmail.value) &&
    checkBirthdate(inputBirthdate.value) &&
    checkField(quantity.value) &&
    checkCheckbox(inputCheckbox1.value) === true) {
      changePage();
    }
  })
}

//Function to validate checkbox
function checkCheckbox() {
  const inputCheckbox1 = document.getElementById("checkbox1");
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
  } else {
    inputCheckbox1.classList.remove("errorInput");
    let spanErrorCheckbox = document.getElementById("errorMessageCheckbox");
    let errorPopupCheckbox = document.getElementById("errorPopupCheckbox")
    if (spanErrorCheckbox) {
      errorPopupCheckbox.removeChild(spanErrorCheckbox);
    }
  return true;
  }
}

//Event when the checkbox change value
function changeCheckbox() {
  const inputCheckbox1 = document.getElementById("checkbox1");
  inputCheckbox1.addEventListener("change", function () {
    if (inputCheckbox1.value === "non") {
      inputCheckbox1.value = "oui";
    } else {
      inputCheckbox1.value = "non";
    }
  });
}

//Function to check if a field is empty
function checkField(champ) {
  const quantity = document.getElementById("quantity");
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
  } else {
    quantity.classList.remove("errorInput");
    let spanErrorQuantite = document.getElementById("errorMessageQuantite");
    let errorPopupQuantite = document.getElementById("errorPopupQuantite")
    if (spanErrorQuantite) {
      errorPopupQuantite.removeChild(spanErrorQuantite);
    }
    return true;
  }
}

//Function to validate birthdate
function checkBirthdate(champ) {
  const inputBirthdate = document.getElementById("birthdate");
  let birthdateRegExp = new RegExp("[1-9]+-[1-9]+-[1-9]+");
  if (!birthdateRegExp.test(champ)) {
    inputBirthdate.classList.add("errorInput");
    let spanErrorBirthdate = document.getElementById("errorMessageAnniv");
    if (!spanErrorBirthdate) {
      let errorPopupBirthdate = document.getElementById("errorPopupAnniv");
      spanErrorBirthdate = document.createElement("span");
      spanErrorBirthdate.id = "errorMessageAnniv";
      spanErrorBirthdate.classList.add("errorMessage");
      errorPopupBirthdate.appendChild(spanErrorBirthdate);
      spanErrorBirthdate.textContent = "Veuillez renseigner une date valide";
      throw new Error("Veuillez renseigner une date valide");
    }
  } else {
    inputBirthdate.classList.remove("errorInput");
    let spanErrorBirthdate = document.getElementById("errorMessageAnniv");
    let spanPopupBirthdate = document.getElementById("errorPopupAnniv")
    if (spanErrorBirthdate) {
      spanPopupBirthdate.removeChild(spanErrorBirthdate);
    }
    return true;
  }
}

//Function to validate email
function checkEmail(champ) {
  const inputEmail = document.getElementById("email");
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
  } else {
    inputEmail.classList.remove("errorInput");
    let spanErrorEmail = document.getElementById("errorMessageEmail");
    let errorPopupEmail = document.getElementById("errorPopupEmail")
    if (spanErrorEmail) {
      errorPopupEmail.removeChild(spanErrorEmail);
    }
    return true;
  }
}

//Function to validate the two characters in the lastname
function checkLastname(champ) {
  const inputLastname = document.getElementById("last");
  if (champ.length < 2) {
    inputLastname.classList.add("errorInput");
    let spanErrorLastname = document.getElementById("errorMessageNom");
    if (!spanErrorLastname) {
      let errorPopupLastname = document.getElementById("errorPopupNom");
      spanErrorLastname = document.createElement("span");
      spanErrorLastname.id = "errorMessageNom";
      spanErrorLastname.classList.add("errorMessage");
      errorPopupLastname.appendChild(spanErrorLastname);
      spanErrorLastname.innerText = "Le champ doit contenir au moins 2 caractères";
      throw new Error("Le champ doit contenir au moins 2 caractères");
    }
  } else {
    inputLastname.classList.remove("errorInput");
    let spanErrorlastname = document.getElementById("errorMessageNom");
    let errorPopuplastname = document.getElementById("errorPopupNom")
    if (spanErrorlastname) {
      errorPopuplastname.removeChild(spanErrorlastname);
    }
    return true;
  }
}

//Function allowing you to validate the two characters in the first name
function checkFirstname(champ) {
  const inputFirstname = document.getElementById("first");
  if (champ.length < 2) {
    inputFirstname.classList.add("errorInput");
    let spanErrorFirstname = document.getElementById("errorMessagePrenom");
    if (!spanErrorFirstname) {
      let errorPopupFirstname = document.getElementById("errorPopupPrenom");
      spanErrorFirstname = document.createElement("span");
      spanErrorFirstname.id = "errorMessagePrenom";
      spanErrorFirstname.classList.add("errorMessage");
      errorPopupFirstname.appendChild(spanErrorFirstname);
      spanErrorFirstname.innerText = "Le champ doit contenir au moins 2 caractères";
      throw new Error("Le champ doit contenir au moins 2 caractères");
    }
  } else {
    inputFirstname.classList.remove("errorInput");
    let spanErrorFirstname = document.getElementById("errorMessagePrenom");
    let errorPopupFirstname = document.getElementById("errorPopupPrenom")
    if (spanErrorFirstname) {
      errorPopupFirstname.removeChild(spanErrorFirstname);
    }
    return true;
  }
}

//Function close the form and refresh
function closeForm() {
  const modalbg = document.querySelector(".bground");
  modalbg.style.display = "none";
  window.location.href = "http://localhost:63342/GameOn-website-FR/HTML/index.html?_ijt=a6l3thnr8i4p9pqp0jmjubqh3r";
}

//function show hide form
function showHideForm() {
  const modalBtn = document.querySelectorAll(".modal-btn");
  const closeSpan = document.querySelector(".close");
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  closeSpan.addEventListener("click", closeForm);
}

// launch modal form
function launchModal() {
  const modalbg = document.querySelector(".bground");
  const footer = document.getElementById("footer");
  modalbg.style.display = "block";
  footer.classList.add("none");
}

//function show hide nav
function showNav() {
  const btnNav = document.getElementById("btnNav");
  const myTopNav = document.getElementById("myTopnav");
  btnNav.addEventListener("click", function () {
    if (myTopNav.className === "topnav") {
      myTopNav.classList.add("responsive");
    } else {
      myTopNav.classList.remove("responsive");
    }
  })
}

launchPage();



































