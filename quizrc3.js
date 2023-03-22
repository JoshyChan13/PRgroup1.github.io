/// QUESTIONS
var questions = [{
	"question": "Which holiday does the author like most?",
	"option1": "christmas",
	"option2": "halloween",
	"option3": "easter",
	"option4": "",
	"answer": "1"
}, {
	"question": "Based on the things the author gets for Christmas, we can understand that he likes",
	"option1": "sports",
	"option2": "art",
	"option3": "music",
	"option4": "",
	"answer": "2"
}, {
	"question": "What is the author’s favorite thing about holidays?",
	"option1": "not going to school",
	"option2": "eating candy",
	"option3": "getting presents",
	"option4": "",
	"answer": "3"
}, {
	"question": "What costume did the author wear for Halloween last year?",
	"option1": "a skeleton costume",
	"option2": "a zombie costume",
	"option3": "a pumpkin costume",
	"option4": "",
	"answer": "1"
}, {
	"question": "Based on what you know about the author, what costume will he probably wear next year?",
	"option1": "a pumpkin costume",
	"option2": "a flower costume",
	"option3": "a ghost costume",
	"option4": "",
	"answer": "3"
}, {
	"question": "This story is mainly about",
	"option1": "why the author likes some holidays",
	"option2": "how someone can get out of school",
	"option3": "which foods are the best to eat on different holidays",
	"option4": "",
	"answer": "1"
}, {
	"question": "What is the best title for this passage?",
	"option1": "The Holidays I Like",
	"option2": "Why Christmas is Best",
	"option3": "Hot Dogs and Salad",
	"option4": "",
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