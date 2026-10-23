const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const answerId = question.getAttribute("aria-controls");
        const answer = document.getElementById(answerId);

        answer.hidden = !answer.hidden;

        question.setAttribute(
            "aria-expanded",
            String(!answer.hidden)
        );

    });

});
