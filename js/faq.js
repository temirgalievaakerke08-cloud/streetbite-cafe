
$(document).ready(function () {

    $(".faq-question").on("click", function () {

        const question = $(this);
        const answerId = question.attr("aria-controls");
        const answer = $("#" + answerId);
        const isExpanded = question.attr("aria-expanded") === "true";

        $(".faq-question").not(question).attr("aria-expanded", "false");

        $(".faq-answer").not(answer).stop(true, true).slideUp(300, function () {
            $(this).attr("hidden", true);
        });

        if (isExpanded) {

            question.attr("aria-expanded", "false");

            answer.stop(true, true).slideUp(300, function () {
                $(this).attr("hidden", true);
            });

            showFaqStatus("Answer closed.");

        } else {

            question.attr("aria-expanded", "true");

            answer.removeAttr("hidden");
            answer.stop(true, true).slideDown(300);

            showFaqStatus("Answer opened.");

        }

    });

    function showFaqStatus(message) {

        $("#faqStatus")
            .stop(true, true)
            .removeAttr("hidden")
            .hide()
            .text(message)
            .fadeIn(300)
            .delay(1500)
            .fadeOut(300);

    }

});

