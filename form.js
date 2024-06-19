const signUp = document.querySelector(".header__buttons-signUp");
const elemSign = document.querySelector(".sign-up");
const elemLogin = document.querySelector(".sign-in");
const logIn = document.querySelector(".header__buttons-login");
const closeSign = document.querySelector(".closeX");
const closeLogin = document.querySelector(".closeX2");
const modal = document.querySelector(".sign-up__wrapper");

const toggleBodyOverflow = () => {
  if (document.body.style.overflow === "hidden") {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }
};

const toggleElemSignDisplay = () => {
  if (elemSign.style.display === "block") {
    elemSign.style.display = "none";
  } else {
    elemSign.style.display = "block";
  }
};

const toggleElemLoginDisplay = () => {
  if (elemLogin.style.display === "block") {
    elemLogin.style.display = "none";
  } else {
    elemLogin.style.display = "block";
  }
};

signUp.addEventListener("click", () => {
  toggleElemSignDisplay();
  toggleBodyOverflow();
});

logIn.addEventListener("click", () => {
  toggleElemLoginDisplay();
  toggleBodyOverflow();
});

closeSign.addEventListener("click", () => {
  toggleElemSignDisplay();
  toggleBodyOverflow();
});

closeLogin.addEventListener("click", () => {
  toggleElemLoginDisplay();
  toggleBodyOverflow();
});

elemSign.addEventListener("click", (e) => {
  if (!e.target.id == false) {
    toggleElemSignDisplay();
    toggleBodyOverflow();
  }
});

elemLogin.addEventListener("click", (e) => {
  if (!e.target.id == false) {
    toggleElemLoginDisplay();
    toggleBodyOverflow();
  }
});
