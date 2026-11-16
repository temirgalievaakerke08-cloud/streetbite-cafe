const form = document.getElementById("registerForm");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const feedback = document.getElementById("registerFeedback");
const nameInputs = [document.getElementById("firstName"), document.getElementById("lastName")];
const emailInput = document.getElementById("registerEmail");
function validateName(input) { input.setCustomValidity(input.value.trim().length >= 2 ? "" : "Please enter at least 2 characters."); }
function validateEmail() { emailInput.setCustomValidity(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim()) ? "" : "Enter a valid email address."); }
nameInputs.forEach(input => input.addEventListener("input", () => validateName(input)));
emailInput.addEventListener("input", validateEmail);
function checkPasswords() { confirmPassword.setCustomValidity(confirmPassword.value === password.value ? "" : "Passwords do not match."); }
password.addEventListener("input", checkPasswords); confirmPassword.addEventListener("input", checkPasswords);
form.addEventListener("submit", event => {
 event.preventDefault(); checkPasswords(); nameInputs.forEach(validateName); validateEmail(); form.classList.add("was-validated");
 if (!form.checkValidity()) { feedback.textContent = "Please correct the highlighted fields and try again."; return; }
 const email = document.getElementById("registerEmail").value.trim().toLowerCase();
 const users = JSON.parse(localStorage.getItem("famouzUsers") || "[]");
 if (users.some(user => user.email === email)) { feedback.textContent = "This email is already registered. Please log in."; return; }
 users.push({firstName: document.getElementById("firstName").value.trim(), lastName: document.getElementById("lastName").value.trim(), email, password: password.value, country: document.getElementById("country").value});
 localStorage.setItem("famouzUsers", JSON.stringify(users)); localStorage.setItem("famouzCurrentUser", email); location.href = "profile.html";
});
form.addEventListener("reset", () => { form.classList.remove("was-validated"); feedback.textContent = ""; confirmPassword.setCustomValidity(""); emailInput.setCustomValidity(""); nameInputs.forEach(input => input.setCustomValidity("")); });
