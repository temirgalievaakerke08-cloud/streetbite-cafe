const registerForm = document.getElementById("registerForm");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const registerFeedback = document.getElementById("registerFeedback");

function validatePasswords() {
    if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordInput.setCustomValidity("Passwords do not match.");
    } else {
        confirmPasswordInput.setCustomValidity("");
    }
}

passwordInput.addEventListener("input", validatePasswords);
confirmPasswordInput.addEventListener("input", validatePasswords);

registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    validatePasswords();
    registerForm.classList.add("was-validated");

    if (!registerForm.checkValidity()) {
        registerFeedback.textContent =
            "Please correct the highlighted fields and try again.";
        registerFeedback.style.color = "#e94b35";
        return;
    }

    registerFeedback.textContent =
        "Success! Your registration form is valid. This is a demo only.";
    registerFeedback.style.color = "green";
});

registerForm.addEventListener("reset", function () {
    registerForm.classList.remove("was-validated");
    registerFeedback.textContent = "";
    passwordInput.setCustomValidity("");
    confirmPasswordInput.setCustomValidity("");
});
