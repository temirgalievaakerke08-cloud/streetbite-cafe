const contactForm = document.getElementById("contactForm");
const contactFeedback = document.getElementById("contactFeedback");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    contactForm.classList.add("was-validated");

    if (!contactForm.checkValidity()) {
        contactFeedback.textContent =
            "Please correct the highlighted fields and try again.";
        contactFeedback.style.color = "#e94b35";
        return;
    }

    contactFeedback.textContent =
        "Success! Your demo form is valid.";
    contactFeedback.style.color = "green";

    // Demo only: no information is sent or stored.
});
