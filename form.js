const signUp = document.querySelector(".header__buttons-signUp");
const elemSign = document.querySelector(".sign-up");
const elemLogin = document.querySelector(".sign-in");
const logIn = document.querySelector(".header__buttons-login");
const Close = document.querySelector(".closeX");
const Close2 = document.querySelector(".closeX2");
const modal = document.querySelector(".sign-up__wrapper");

signUp.addEventListener("click", () => {
  elemSign.style.display = "block";
  document.body.style.overflow = "hidden";
});

logIn.addEventListener("click", () => {
  elemLogin.style.display = "block";
  document.body.style.overflow = "hidden";
});

Close.addEventListener("click", () => {
  elemSign.style.display = "none";
  document.body.style.overflow = "auto";
});

Close2.addEventListener("click", () => {
  elemLogin.style.display = "none";
  document.body.style.overflow = "auto";
});

elemSign.addEventListener("click", (e) => {
  if (!e.target.id == false) {
    elemSign.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

elemLogin.addEventListener("click", (e) => {
  if (!e.target.id == false) {
    elemLogin.style.display = "none";
    document.body.style.overflow = "auto";
  }
});
