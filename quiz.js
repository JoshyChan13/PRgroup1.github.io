/// QUESTIONS
var questions = [{
	"question": "A _____ SITS ON THE RUG, what is the missing word? (Ano ang nawawalang salita?)",
	"option1": "DOG",
	"option2": "CAT",
	"option3": "PIG",
	"option4": "WIG",
	"answer": "2"
}, {
	"question": "THE DOG CAN _____, what is the missing word? (Ano ang nawawalang salita?)",
	"option1": "DIG",
	"option2": "WET",
	"option3": "WIG",
	"option4": "VAN",
	"answer": "1"
}, {
	"question": "THE _____ IS HOT, what is the missing word? (Ano ang nawawalang salita?)",
	"option1": "JAR",
	"option2": "VAN",
	"option3": "SUN",
	"option4": "MAP",
	"answer": "3"
}, {
	"question": "THE _____ IS SAD, what is the missing word? (Ano ang nawawalang salita?)",
	"option1": "MAN",
	"option2": "BOY",
	"option3": "DOG",
	"option4": "PIG",
	"answer": "2"
}, {
	"question": "What is the total voice records you saw earlier? (Ano ang kabuuang record ng boses na nakita mo kanina?)",
	"option1": "10",
	"option2": "20",
	"option3": "30",
	"option4": "15",
	"answer": "3"
}, {
	"question": "THE _____ HAS A MAP, what is the missing word? (Ano ang nawawalang salita?)",
	"option1": "BOY",
	"option2": "MAN",
	"option3": "SUN",
	"option4": "VAN",
	"answer": "2"
}, {
	"question": "_____ IN A JAR, what is the missing word? (Ano ang nawawalang salita?)",
	"option1": "PIG",
	"option2": "CAT",
	"option3": "HAM",
	"option4": "WIG",
	"answer": "3"
}, {
	"question": "What is the title of this WEBSITE? (Ano ang pamagat ng WEBSITE na ito?)",
	"option1": "ROBLOX",
	"option2": "SVNHS",
	"option3": "ROBLOX SVNHS",
	"option4": "SVNHS ROBLOX",
	"answer": "3"
}, {
	"question": "A DOG ON A _____, what is the missing word? (Ano ang nawawalang salita?)",
	"option1": "VAN",
	"option2": "LOG",
	"option3": "MAP",
	"option4": "WET",
	"answer": "2"
}, {
	"question": "Having a high temperature because of? (pagkakaroon ng mataas na temperatura dahil sa?)",
	"option1": "VAN",
	"option2": "SUN",
	"option3": "EARTH",
	"option4": "WET",
	"answer": "2"
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
    score += 10;
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
