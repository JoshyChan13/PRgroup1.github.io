/// QUESTIONS
var questions = [{
	"question": "This passage would most likely be found in? (Ang talatang ito ay malamang na matatagpuan sa?)",
	"option1": "An encyclopedia",
	"option2": "A blog",
	"option3": "A magazine",
	"option4": "A newspaper",
	"answer": "1"
}, {
	"question": "Based on information in the passage, it can be inferred that the phrase “a tactile quality” suggests that Monet’s canvases were?",
	"option1": "Smooth",
	"option2": "Rough",
	"option3": "Beautiful",
	"option4": "Colorful",
	"answer": "2"
}, {
	"question": "According to the passage, Monet moved to Paris in 1859 to? (Ayon sa sipi, lumipat si Monet sa Paris noong 1859 upang?)",
	"option1": "Paint cathedrals",
	"option2": "Build an elaborate garden",
	"option3": "Become a professional artist",
	"option4": "Join the impressionism movement",
	"answer": "3"
}, {
	"question": "The tone of the passage can best be described as? (Ang tono ng sipi ay maaaring mailarawan bilang?)",
	"option1": "Clever",
	"option2": "Factual",
	"option3": "Adoring",
	"option4": "Passionate",
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