const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const dob = document.getElementById("dob");
const termsAndConditions = document.getElementById("tac");
const submitBtn = document.getElementById("submit-button");
const form = document.getElementById("my-form");

const nameErr = document.getElementById("name-span");
const emailErr = document.getElementById("email-span");
const passwordErr = document.getElementById("password-span");
const dobErr = document.getElementById("dob-span");
const tacErr = document.getElementById("tac-span");

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const mainContent = document.getElementById("main-content");

form.addEventListener("submit", (e) => {
    let isValid = true;

    //Clear previous errors
    nameErr.textContent = "";
    emailErr.textContent = "";
    passwordErr.textContent = "";
    dobErr.textContent = "";
    tacErr.textContent = "";

  if (!name.value) {
    nameErr.textContent = "Please enter your name";
    isValid = false;
  }

  if (!email.value) {
    emailErr.textContent = "Please enter your email";
    isValid = false;
  }

  if (!password.value) {
    passwordErr.textContent = "Please enter your password";
    isValid = false;
  }

  if (!dob.value) {
    dobErr.textContent = "Please enter your date of birth";
    isValid = false;
  }

  if (!termsAndConditions.checked){
    tacErr.textContent = "Please agree to the terms and conditions";
    isValid = false;
  }
    
  if (!isValid) {
    e.preventDefault();
    alert("please fill all the fields");
  } else {
    e.preventDefault();
    modal.style.display = "block";
    mainContent.classList.add("blur");
  }
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    mainContent.classList.remove("blur");
  });
