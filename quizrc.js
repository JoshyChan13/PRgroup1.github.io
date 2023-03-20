/// QUESTIONS
var questions = [{
	"question": "As used in paragraph 1, which is the best antonym for reticent?",
	"option1": "Nosy",
	"option2": "Talkative",
	"option3": "Reserved",
	"option4": "Concerned",
	"answer": "2"
}, {
	"question": "As used in paragraph 2, which is the best definition for esoteric?",
	"option1": "Risky or dangerous",
	"option2": "Highly scientific",
	"option3": "Kept secret",
	"option4": "Understood by few",
	"answer": "4"
}, {
	"question": "According to the paragraph 2, which of the following is directly responsible for energy production?",
	"option1": "The turning of the turbine blades",
	"option2": "The escape of pressurized steam",
	"option3": "The removal of the control rod",
	"option4": "The positioning of the uranium fuel rods",
	"answer": "1"
}, {
	"question": "Based on information in the passage, it can be inferred that, after the explosion and subsequent meltdown, the reactor was",
	"option1": "Not mentioned in any official documents about the incident",
	"option2": "Contaminated with toxic elements",
	"option3": "Completely annihilated",
	"option4": "Honored as a memorial to the tragic incident",
	"answer": "2"
}, {
	"question": "The tone of the author can best be described as",
	"option1": "Neutral",
	"option2": "Dejected",
	"option3": "Sarcastic",
	"option4": "Ominous",
	"answer": "4"
}, {
	"question": "Based on information in the final paragraph, which of the following statements would the author likely agree with?",
	"option1": "Official reports about the disaster were detailed and conclusive.",
	"option2": "Legg, Byrnes, and McKinley were best friends.",
	"option3": "Byrnes deliberately yanked the control rod.",
	"option4": "Rumors about the disaster are dubious and uninteresting.",
	"answer": "3"
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