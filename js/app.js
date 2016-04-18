// Globar variables
var currentQuestionIndex = 0,
    quiz = [{
        question: "What team plays in New York?",
        choices: ["Knicks", "Lakers", "Bulls"],
        answer: 0
    }, {
        question: "What team plays in Charlotte?",
        choices: ["Pelicans", "Hornets", "Bobcats"],
        answer: 1
    }, {
        question: "What team plays in Oakland?",
        choices: ["Knicks", "Warriors", "Pistons"],
        answer: 1
    }, {
        question: "What team plays in Phoenix?",
        choices: ["Thunder", "Spurs", "Suns"],
        answer: 2
    }, {
        question: "What team plays in Milwaukee?",
        choices: ["Bucks", "Hawks", "Nuggets"],
        answer: 0
    }],
    userScore = 0;

/*  score = "#score"
    if (userAnswer === correctAnswer) {
    score + 100;
} else {
    score = score;
}
 after clicking on seeing results button
  function() {
    $("section").hide();
    $("scoreSection").show();
  }
*/

function buildQuestion(num) {
    $('.question--header').text(quiz[num].question);
    for (var i = 0; i < quiz[num].choices.length; i++) {
        $('.allChoices').append("<p>" + quiz[num].choices[i] + "</p>");
    }
}

var showResult = $("#results--button").click(function() {
    $(".results").removeAttr("hidden");
    $("#quizButtons--newGame").show();
    if (userAnswer === correctAnswer) {
        $(".results--scores").text(100);
    }
});

function showResultsButton() {
    if (currentQuestionIndex === 5) {
        $('#results--button').removeAttr("hidden");
    }
}

$(function() {

    //Building Questions from Object Array
    buildQuestion(currentQuestionIndex);
    $('#quizButtons--next').click(function() {
        $(".allChoices").empty();
        currentQuestionIndex++;
        showResultsButton();
        if (currentQuestionIndex === 5) {
            $('#quizButtons--next').hide();
            $('#quizButtons--newGame').hide();
            $(".question").empty();
            $(".allChoices").text("<p>End of Regulation!</p>");
            // show user results
        }
        // start a new game
        else {
            buildQuestion(currentQuestionIndex);
        }
    });
    $(".allChoices").on("click", "p", function() {
        var userAnswer = $(this).text(),
            correctAnswerIndex = quiz[currentQuestionIndex].answer,
            correctAnswer = quiz[currentQuestionIndex].choices[correctAnswerIndex];
        console.log(correctAnswer);

        // when user click on the right answer color: green else red.
        /* if (userAnswer === correctAnswer) {
            $('.allChoices').append("<p>" + userScore + 100 + "</p>");
        } else {
            $(this).css('background-color', '#fb4a68');
        } */
    });

});
