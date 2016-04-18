// Global variables
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
    totalScore = 0;

function buildQuestion(num) {
    $('.question').text(quiz[num].question);
    for (var i = 0; i < quiz[num].choices.length; i++) {
        $('.allChoices').append("<p>" + quiz[num].choices[i] + "</p>");
    }
}

function showResults() {
    if (currentQuestionIndex === 5) {
        $('#results').removeAttr("hidden");
    }
}
function nextQuestion() {
    $(".allChoices").empty();
    currentQuestionIndex++;
    showResults();
    if (currentQuestionIndex === 5) {
        $('#nextButton').hide();
        $(".question").empty();
        // show user results
        $('#results').click(function() {
            $(".scoreHeader").text("Your Score is - " + totalScore);
        });
    }
    // start a new game
    else {
        buildQuestion(currentQuestionIndex);
    }
}

$(function() {

    //Building Questions from Object Array
    buildQuestion(currentQuestionIndex);
    $('#nextButton').click(function() {
        nextQuestion();
    });
    $(".allChoices").on("click", "p", function() {
        var userAnswer = $(this).text(),
            correctAnswerIndex = quiz[currentQuestionIndex].answer,
            correctAnswer = quiz[currentQuestionIndex].choices[correctAnswerIndex];
        console.log(correctAnswer);

        // when user click on the right answer color: green else red.
        if (userAnswer === correctAnswer) {
            $(this).css('background-color', 'green');
            totalScore += 20;
        } else {
            $(this).css('background-color', '#fb4a68');

        }
        console.log(totalScore , 'score');
        nextQuestion();
    });


    $('#newGameButton').click(function() {
        console.log('yes start again');


    });

});
