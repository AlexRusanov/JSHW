const inputPasswordIcon = document.getElementById("input-password-icon"),
      confirmPasswordIcon = document.getElementById("confirm-password-icon"),
      submitBtn = document.querySelector(".btn"),
      passwordInput = document.getElementById("input-password"),
      passwordConfirm = document.getElementById("confirm-password");

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

submitBtn.onclick = (event) => {
    event.preventDefault();
    let validationAlert;
    if (passwordInput.value === passwordConfirm.value) {
        alert("You are welcome");
    } else {
        validationAlert = document.createElement("div");
        validationAlert.innerText = "Нужно ввести одинаковые значения!!!";
        validationAlert.style.color = "red";
        confirmPasswordIcon.after(validationAlert);
        setTimeout(() => {
            validationAlert.remove();
        }, 3000);
    }
};