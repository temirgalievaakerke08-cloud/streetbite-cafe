
$(document).ready(function () {

    $("#welcomeBtn").on("click", function () {

        const name = $("#visitorName").val().trim();

        if (name === "") {
            $("#welcomeMessage")
                .text("Please enter your name.")
                .addClass("error-message");
        } else {
            $("#welcomeMessage")
                .text("Welcome to FAMOUZ Burger, " + name + "!")
                .removeClass("error-message")
                .addClass("success-message");
        }

    });

    $("#themeBtn").on("click", function () {

        $("body").toggleClass("dark-theme");

        if ($("body").hasClass("dark-theme")) {
            $(this).text("LIGHT MODE");
        } else {
            $(this).text("DARK MODE");
        }

    });

});
