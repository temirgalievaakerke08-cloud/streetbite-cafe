
$(document).ready(function () {


    $("#contactForm").on("submit", function (event) {
        event.preventDefault();

        const name = $("#full-name").val().trim();
        const email = $("#email").val().trim();
        const message = $("#message").val().trim();

        let isValid = true;

        if (name.length < 2) {
            $("#full-name").addClass("is-invalid").removeClass("is-valid");
            isValid = false;
        } else {
            $("#full-name").removeClass("is-invalid").addClass("is-valid");
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            $("#email").addClass("is-invalid").removeClass("is-valid");
            isValid = false;
        } else {
            $("#email").removeClass("is-invalid").addClass("is-valid");
        }

        const phone = $("#phone").val().trim();
        const phoneDigits = phone.replace(/\D/g, "");
        if (phone && (!/^\+?[0-9 ()-]+$/.test(phone) || phoneDigits.length < 7 || phoneDigits.length > 15)) {
            $("#phone").addClass("is-invalid").removeClass("is-valid");
            isValid = false;
        } else {
            $("#phone").removeClass("is-invalid").toggleClass("is-valid", Boolean(phone));
        }

        if (message.length < 10 || message.length > 500) {
            $("#message").addClass("is-invalid").removeClass("is-valid");
            isValid = false;
        } else {
            $("#message").removeClass("is-invalid").addClass("is-valid");
        }

        if (isValid) {
            $("#contactFeedback")
                .text("Success! Your demo form is valid.")
                .removeClass("form-error").addClass("form-success");
        } else {
            $("#contactFeedback")
                .text("Please correct the highlighted fields and try again.")
                .removeClass("form-success").addClass("form-error");
        }
    });

});
