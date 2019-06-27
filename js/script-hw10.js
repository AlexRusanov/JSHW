const inputPasswordIcon = document.getElementById("input-password-icon"),
      confirmPasswordIcon = document.getElementById("confirm-password-icon"),
      submitBtn = document.querySelector(".btn"),
      passwordInput = document.getElementById("input-password"),
      passwordConfirm = document.getElementById("confirm-password"),
      secondInputWrapper = document.getElementsByClassName("input-wrapper")[1];

const showHidePassword = (passwordEyeIcon) => {
    passwordEyeIcon.classList.toggle("fa-eye-slash");
    passwordEyeIcon.classList.toggle("fa-eye");
    if (passwordEyeIcon.classList.contains("fa-eye")) {
        passwordEyeIcon.previousElementSibling.setAttribute("type", "text");
    } else {
        passwordEyeIcon.previousElementSibling.setAttribute("type", "password");
    }
};

inputPasswordIcon.onclick = (event) => {
    showHidePassword(event.target);

};

confirmPasswordIcon.onclick = (event) => {
    showHidePassword(event.target);
};

let validationAlert = document.createElement("div");
validationAlert.innerText = "Нужно ввести одинаковые значения!!!";
validationAlert.style.color = "red";

submitBtn.onclick = (event) => {
    event.preventDefault();
    if (passwordInput.value && passwordInput.value === passwordConfirm.value) {
        if (secondInputWrapper.lastElementChild === validationAlert) {
            validationAlert.remove();
        }
        alert("You are welcome");
    } else {
        if (secondInputWrapper.lastElementChild !== validationAlert) {
            confirmPasswordIcon.after(validationAlert);
        }
    }
};