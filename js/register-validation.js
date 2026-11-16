const form = document.getElementById("registerForm");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const feedback = document.getElementById("registerFeedback");
function checkPasswords() { confirmPassword.setCustomValidity(confirmPassword.value === password.value ? "" : "Passwords do not match."); }
password.addEventListener("input", checkPasswords); confirmPassword.addEventListener("input", checkPasswords);
form.addEventListener("submit", event => {
 event.preventDefault(); checkPasswords(); form.classList.add("was-validated");
 if (!form.checkValidity()) { feedback.textContent = "Please correct the highlighted fields and try again."; return; }
 const email = document.getElementById("registerEmail").value.trim().toLowerCase();
 const users = JSON.parse(localStorage.getItem("famouzUsers") || "[]");
 if (users.some(user => user.email === email)) { feedback.textContent = "This email is already registered. Please log in."; return; }
 users.push({firstName: document.getElementById("firstName").value.trim(), lastName: document.getElementById("lastName").value.trim(), email, password: password.value, country: document.getElementById("country").value});
 localStorage.setItem("famouzUsers", JSON.stringify(users)); localStorage.setItem("famouzCurrentUser", email); location.href = "profile.html";
});
form.addEventListener("reset", () => { form.classList.remove("was-validated"); feedback.textContent = ""; confirmPassword.setCustomValidity(""); });
