/// QUESTIONS
var questions = [{
	"question": "Which of the following words best describes the way Lilly feels about living in her new town?",
	"option1": "skeptical, meaning questioning or showing doubt",
	"option2": "apprehensive, meaning anxious or worried",
	"option3": "overjoyed, meaning extremely happy",
	"option4": "content, meaning satisfied with what one is or has",
	"answer": "3"
}, {
	"question": "This passage is mainly about",
	"option1": "Lilly’s favorite season",
	"option2": "Lilly and the four seasons",
	"option3": "Lilly’s favorite activities during winter",
	"option4": "Lilly's favorite Halloween costumes",
	"answer": "2"
}, {
	"question": "What is Lilly’s favorite thing about her new town?",
	"option1": "her school",
	"option2": "going to the pool",
	"option3": "the food",
	"option4": "the seasons",
	"answer": "4"
}, {
	"question": "In paragraph 2 the author writes, 'She also wears a scarf around her neck.' What is the best way to rewrite this sentence while keeping its original meaning?",
	"option1": "In addition, she wears a scarf around her neck.",
	"option2": "However, she wears a scarf around her neck.",
	"option3": "Nevertheless, she wears a scarf around her neck.",
	"option4": "As a result, she wears a scarf around her neck.",
	"answer": "1"
}, {
	"question": "Which of the following best describes the structure of this passage?",
	"option1": "The author talks about Lily's new town, and then talks about how the seasons are changing.",
	"option2": "The author introduces Lilly, and then describes her in relation to the four seasons.",
	"option3": "The author introduces Lilly, and then explains why autumn is her favorite season.",
	"option4": "The author discusses the four seasons, and then describes which one Lilly likes best.",
	"answer": "2"
}, {
	"question": "Based on information in paragraph 5, which of the following costumes is Lilly most likely to wear next year?",
	"option1": "a princess costume",
	"option2": "a fairy costume",
	"option3": "a ghost costume",
	"option4": "a bird costume",
	"answer": "4"
}, {
	"question": "Based on information in the passage, we can understand that, which season has two names?",
	"option1": "spring",
	"option2": "summer",
	"option3": "fall",
	"option4": "winter",
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