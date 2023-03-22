/// QUESTIONS
var questions = [{
	"question": "Based on information in paragraph 2, it can be understood that an animal with small eyes",
	"option1": "must be diurnal",
	"option2": "has trouble seeing in the dark",
	"option3": "can see very well at night",
	"option4": "is likely to be eaten by an owl",
	"answer": "2"
}, {
	"question": "In paragraph 3 the author writes, 'This helps owls catch their prey even when it is very dark.' Based on its use in the passage, we can understand that prey is",
	"option1": "a noise that an animal makes during the night",
	"option2": "a small animal such as a pet dog or cat",
	"option3": "an animal that is hunted by other animals",
	"option4": "an animals that hunts other animals",
	"answer": "3"
}, {
	"question": "Based on information in the final paragraph, it can be understood that mice sleep during the day in order to",
	"option1": "find food that other animals can not",
	"option2": "keep themselves safe",
	"option3": "store energy for night time activities",
	"option4": "release stress",
	"answer": "2"
}, {
	"question": "Based on information in the final paragraph, it can be understood that",
	"option1": "owls hunt mice",
	"option2": "mice can hide from owls",
	"option3": "mice and owls both hide from birds, snakes, and lizards",
	"option4": "birds and snakes often hunt lizards",
	"answer": "1"
}];

//javaScript for functionality

var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextButton = document.getElementById("nextButton");
var prevButton = document.getElementById("prevButton");
var resultCont = document.getElementById("result");

function loadQuestion(questionIndex) {
  var q = questions[questionIndex];
  questionEl.textContent = questionIndex + 1 + ". " + q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
}

function loadNextQuestion() {
  var selectedOption = document.querySelector("input[type=radio]:checked");
  if (!selectedOption) {
    alert("Please select your best answer for you!");
    return;
  }

  var answer = selectedOption.value;
  if (questions[currentQuestion].answer == answer) {
    score += 5;
  }
  selectedOption.checked = false;
  currentQuestion++;
  if (currentQuestion == totQuestions - 1) {
    nextButton.textContent = "Finish";
  }
  if (currentQuestion == totQuestions) {
    container.style.display = "none";
    resultCont.style.display = "";
    resultCont.textContent = "Your Score: " + score;
    return;
  }
  prevButton.disabled = false;
  loadQuestion(currentQuestion);
}

function loadPreviousQuestion() {
  if (currentQuestion >= 1) {
    console.log(currentQuestion);
    currentQuestion--;
    loadQuestion(currentQuestion);
    if (currentQuestion == 0) {
      prevButton.disabled = true;
    }
  }
}
loadQuestion(currentQuestion);