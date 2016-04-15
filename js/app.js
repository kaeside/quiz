var currentQuestionIndex = 0;
var quiz = [{
    question: "What team plays in New York?",
    choices: ["knicks", "Lakers", "Bulls"],
    answer: 0
}, {
    question: "What teams play in Charlotte?",
    choices: ["Pelicans", "Hornets", "Bobcats"],
    answer: 1
}, {
    question: "What teams play in Oakland?",
    choices: ["knicks", "Warriors", "Pistons"],
    answer: 1
}, {
    question: "What teams play in Phoenix?",
    choices: ["Thunder", "Spurs", "Suns"],
    answer: 2
}];

function buildQuestion(num) {
    $('.question').text(quiz[num].question);
    for (var i = 0; i < quiz[num].choices.length; i++) {
        $('.allChoices').append("<p>" + quiz[num].choices[i] + "</p>");
    }

}

$(function() {
    console.log("hello");

    buildQuestion(currentQuestionIndex);
    currentQuestionIndex++;

    $('#nextButton').click(function() {
        $(".allChoices").empty();
        buildQuestion(currentQuestionIndex);
        currentQuestionIndex++;
        if (currentQuestionIndex === 4) {
            $('#nextButton').hide();
            alert('done');
        }
    });
    $(".allChoices").on("click", "p", function(){
        var userAnswer = $(this).text();
        var correctAnswerIndex = quiz[currentQuestionIndex].answer;
        var correctAnswer = quiz[currentQuestionIndex].choices[correctAnswerIndex];
        if (userAnswer === correctAnswer) {
          alert("YOU GOT IT!");
        } else {
            alert("WRONG!");
          }
    });

});





// Make an array
//Should have objects within the array
// The objects should contain of the questions, multiple choices, actual answer
