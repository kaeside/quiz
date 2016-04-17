// Globar variables
var currentQuestionIndex = 0;

var quiz = [{
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
}];

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
    $('.question').text(quiz[num].question);
    for (var i = 0; i < quiz[num].choices.length; i++) {
        $('.allChoices').append("<p>" + quiz[num].choices[i] + "</p>");
    }

}

$(function() {
    buildQuestion(currentQuestionIndex);
    $('#nextButton').click(function() {
        $(".allChoices").empty();
        currentQuestionIndex++;
        if (currentQuestionIndex === 5) {
            $('#nextButton').hide();
            $(".question").hide();
            // show user results
            $('results').click(function() {

            });
        }
        // start a new game
        else {
            buildQuestion(currentQuestionIndex);
        }
    });
    $(".allChoices").on("click", "p", function() {
        var userAnswer = $(this).text();
        console.log(userAnswer);
        var correctAnswerIndex = quiz[currentQuestionIndex].answer;
        var correctAnswer = quiz[currentQuestionIndex].choices[correctAnswerIndex];
        console.log(correctAnswer);

        // when user click on the right answer color: green else red.
        if (userAnswer === correctAnswer) {
            $(this).css('background-color', 'green');
        } else {
            $(this).css('background-color', '#fb4a68');
        }
    });


    $('#newGameButton').click(function() {
        console.log('yes start again');


    });

});



// make an array newGame that allow user to start a new game

// Make an array
//Should have objects within the array
// The objects should contain of the questions, multiple choices, actual answer