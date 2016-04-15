var quiz = [{
        question: "What team play in New York",
        choices:["knicks","Lakers", "Bulls"],
        answer:0
    }, {
        question: "What team play in Charlotte",
        choices:["Pelicans","Hornets", "Bobcats"],
        answer:1
    }, {
        question: "What team play in Oakland",
        choices:["knicks","Warriors", "Pistons"],
        answer:1
    }
];

$(function() {
    console.log("hello");
    $('.question').append("<h2>" + quiz[0].question + "</h2>");
});





// Make an array
//Should have objects within the array
// The objects should contain of the questions, multiple choices, actual answer
