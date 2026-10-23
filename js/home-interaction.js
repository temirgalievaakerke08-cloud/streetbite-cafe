const nameInput = document.getElementById("visitorName");
const welcomeBtn = document.querySelector("#welcomeBtn");
const welcomeMessage = document.getElementById("welcomeMessage");

welcomeBtn.addEventListener("click", function () {
    const name = nameInput.value.trim();

    if (name === "") {
        welcomeMessage.textContent = "Please enter your name.";
    } else {
        welcomeMessage.textContent =
            "Welcome to FAMOUZ Burger, " + name + "!";
    }
});

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeBtn.textContent = "LIGHT MODE";
    } else {
        themeBtn.textContent = "DARK MODE";
    }
});
