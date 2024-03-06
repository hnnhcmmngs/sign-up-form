const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmpassword");
const passwordMessage = document.querySelector("span");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
    if (password.value != confirmPassword.value) {
        e.preventDefault();
        password.style.outline = "1px solid red";
        confirmPassword.style.outline = "1px solid red";
        passwordMessage.style.visibility = "visible";
        return false;
    } else {
        document.form.submit();
        return true;
    }
});

let resetError = function() {
    password.style.outline = "none";
    confirmPassword.style.outline = "none";
    passwordMessage.style.visibility = "hidden";
};

password.addEventListener("keyup", resetError);
confirmPassword.addEventListener("keyup", resetError);