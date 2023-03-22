/// QUESTIONS
var questions = [{
	"question": "According to the passage, Mary and Dan want to put the new carpet in their",
	"option1": "bedroom",
	"option2": "dining room",
	"option3": "living room",
	"option4": "bathroom",
	"answer": "3"
}, {
	"question": "According to the passage, the pink and purple carpet",
	"option1": "has dots",
	"option2": "has stripes",
	"option3": "is too small",
	"option4": "is too plain",
	"answer": "1"
}, {
	"question": "According to the passage, the green and red carpet",
	"option1": "is plain",
	"option2": "has dots",
	"option3": "is too big",
	"option4": "is too small",
	"answer": "4"
}, {
	"question": "According to the passage, both Mary and Dan like the",
	"option1": "pink and purple carpet",
	"option2": "green and red carpet",
	"option3": "tan carpet",
	"option4": "blue carpet",
	"answer": "3"
}, {
	"question": "Mary and Dan do not see a",
	"option1": "black and blue carpet",
	"option2": "pink and purple carpet",
	"option3": "tan carpet",
	"option4": "green and red carpet",
	"answer": "1"
}, {
	"question": "Based on information in the passage, it can be understood that both Mary and Dan would like which of the following carpets best?",
	"option1": "a grey carpet with no dots or stripes",
	"option2": "a pink and yellow carpet with dots",
	"option3": "a blue and green carpet with stripes",
	"option4": "a black and white carpet with both dots and stripes",
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