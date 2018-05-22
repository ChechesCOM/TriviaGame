const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

(function() {
    var theQuestions = [
      {
        question: "What is it that lives if it is fed, and dies if you give it a drink?",
        answers: {
            a: "Cactus",
            b: "Fire",
            c: "Plants"
        },
        correctAnswer: "b"
    },
    {
        question: "Wich is bigger Texas, Alaska, or Germany?",
        answers: {
            a: "Alaska",
            b: "Germany",
            c: "Texas"
        },
        correctAnswer: "a"
    },
    {
        question: "Wich is heavier an oz. of gold or an oz. of silver?",
        answers: {
            a: "Gold",
            b: "Equal",
            c: "Silver",

        },
        correctAnswer: "a"
      }
    ];

function quizGen() {
    var output = [];
    theQuestions.forEach((currentQuestion, questionNumber) => {

        var answers = [];


        for (letter in currentQuestion.answers) {

            // ...add an html radio button
            answers.push(
                `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
            );
        }

        output.push(
            `<div class="slide">
               <div class="question"> ${currentQuestion.question} </div>
               <div class="answers"> ${answers.join("")} </div>
             </div>`
        );
    }
    );
    quizContainer.innerHTML = output.join("");
}

function Results() {
    var answerContainers = quizContainer.querySelectorAll('.answers');


    var numCorrect = 0;

    // for each question...
    theQuestions.forEach((currentQuestion, questionNumber) => {

        // find selected answer
        var answerContainer = answerContainers[questionNumber];
        var selector = 'input[name=question' + questionNumber + ']:checked';
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {

            numCorrect++;


            answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else {

            answerContainers[questionNumber].style.color = 'red';
        }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}

// display quiz 
quizGen();

var previousButton = document.getElementById("previous");
  var nextButton = document.getElementById("next");
  var slides = document.querySelectorAll(".slide");
  var currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();




