
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

        if (message.length < 10 || message.length > 500) {
            $("#message").addClass("is-invalid").removeClass("is-valid");
            isValid = false;
        } else {
            $("#message").removeClass("is-invalid").addClass("is-valid");
        }

        if (isValid) {
            $("#contactFeedback")
                .text("Success! Your demo form is valid.")
                .css("color", "green");
        } else {
            $("#contactFeedback")
                .text("Please correct the highlighted fields and try again.")
                .css("color", "#e94b35");
        }
    });

});
