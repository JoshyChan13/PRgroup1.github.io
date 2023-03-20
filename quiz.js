/// QUESTIONS
var questions = [{
	"question": "MY _____ IS THE BEST, what is the missing word?",
	"option1": "SON",
	"option2": "BOY",
	"option3": "GIRL",
	"option4": "MOTHER",
	"answer": "4"
}, {
	"question": "BOY HAS A _____, what is the missing word?",
	"option1": "JEEP",
	"option2": "LAMP",
	"option3": "LION",
	"option4": "NEST",
	"answer": "2"
}, {
	"question": "MY _____ IS DARK, what is the missing word?",
	"option1": "ROOM",
	"option2": "BALL",
	"option3": "BELL",
	"option4": "SACK",
	"answer": "1"
}, {
	"question": "_____ MADE A CAKE, what is the missing word?",
	"option1": "MOTHER",
	"option2": "BOY",
	"option3": "GIRL",
	"option4": "MAN",
	"answer": "1"
}, {
	"question": "What is the total voice records you saw earlier? (Ano ang kabuuang record ng boses na nakita mo kanina?)",
	"option1": "16",
	"option2": "42",
	"option3": "36",
	"option4": "49",
	"answer": "3"
}, {
	"question": "YOU _____ MY SACK NEAR THE WALL, what is the missing word?",
	"option1": "PACK",
	"option2": "ROLL",
	"option3": "WRECK",
	"option4": "BELL",
	"answer": "1"
}, {
	"question": "MAN _____ TO THE MALL, what is the missing word?",
	"option1": "GOING",
	"option2": "WANT",
	"option3": "WENT",
	"option4": "GO",
	"answer": "2"
}, {
	"question": "",
	"option1": "",
	"option2": "",
	"option3": "",
	"option4": "",
	"answer": ""
}, {
	"question": "",
	"option1": "",
	"option2": "",
	"option3": "",
	"option4": "",
	"answer": ""
}, {
	"question": "",
	"option1": "",
	"option2": "",
	"option3": "",
	"option4": "",
	"answer": ""
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