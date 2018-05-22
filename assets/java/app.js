
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
var timer2 = "1:30";
var interval = setInterval(function() {


    var timer = timer2.split(':');
    var minutes = parseInt(timer[0], 10);
    var seconds = parseInt(timer[1], 10);
    --seconds;
    minutes = (seconds < 0) ? --minutes : minutes;
    if (minutes < 0) clearInterval(interval);
    seconds = (seconds < 0) ? 59 : seconds;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    $('.countdown').html(minutes + ':' + seconds);
    timer2 = minutes + ':' + seconds;
  }, 1000);


(function () {
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
        },
        {
            question: "Wich are ninjas favorite shoes?",
            answers: {
                a: "Flip-flops",
                b: "Sneakers",
                c: "High hills",

            },
            correctAnswer: "b"
        },
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
        resultsContainer.innerHTML = numCorrect + ' out of ' + theQuestions.length;
    }
    function showSlide(s) {
        slides[currentSlide].classList.remove("active-slide");
        slides[s].classList.add("active-slide");
        currentSlide = s;

        if (currentSlide === 0) {
            previousButton.style.display = "none";
        } else {
            previousButton.style.display = "inline-block";
        }

        if (currentSlide === slides.length - 1) {
            nextButton.style.display = "none";
            submitButton.style.display = "inline-block";
        } else {
            nextButton.style.display = "inline-block";
            submitButton.style.display = "none";
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");

    // display quiz 
    quizGen();

    var previousButton = document.getElementById("previous");
    var nextButton = document.getElementById("next");
    var slides = document.querySelectorAll(".slide");
    var currentSlide = 0;

    Results(0);

    // on submit, show results
    submitButton.addEventListener("click", Results);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();




