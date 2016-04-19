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
var userScore = 0;

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
        $('.allChoices').append("<input type='radio' name='choice' value='" + quiz[num].choices[i] + "'> " + quiz[num].choices[i] + "<br>");
    }
}

function showResult() {
    $("#results--button").click(function() {
        $(".results").removeAttr("hidden");
        $("#quizButtons--newGame").show();
        $(".results--scores").html('<h1>' + userScore + '</h1>');
    });
}

function showResultsButton() {
    if (currentQuestionIndex === quiz.length) {
        $('#results--button').removeAttr("hidden");
        showResult();
    }
}

function nextQuestion() {
    $(".allChoices").empty();
    currentQuestionIndex++;
    showResultsButton();
    if (currentQuestionIndex === quiz.length) {
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
}

// FUNCTIONS THAT LOAD WHEN PAGE LOADS

$(function() {
    // Storing function that advances questions
    buildQuestion(currentQuestionIndex);
    $(".quizButtons").click("#quizButtons--newGame", function() {
        
    });

    //Building Questions from Object Array
    $('#quizButtons--next').click(function() {
        var userAnswer = $("input:checked").val();
        var correctAnswerIndex = quiz[currentQuestionIndex].answer;
        var correctAnswer = quiz[currentQuestionIndex].choices[correctAnswerIndex];
        if (userAnswer === correctAnswer) {
            // console.log(userAnswer);
            userScore += 100;
        }
        if (userAnswer !== undefined) {
            nextQuestion();
        } else {
            alert("Come on man, don't get dunked on without responding!");
        }
    });
    //$(".allChoices").on("click", "p", function(event) {
    // var userAnswer = $(this).val();
    // console.log(userAnswer);
    // var correctAnswerIndex = quiz[currentQuestionIndex].answer;
    // var correctAnswer = quiz[currentQuestionIndex].choices[correctAnswerIndex];
    // if (userAnswer === correctAnswer) {
    //     // console.log('Correct Answer: %s', correctAnswer);
    //     userScore += 100;
    // }
    // console.log(userScore);
    //nextQuestion();
    //});

});
