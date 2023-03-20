/// QUESTIONS
var questions = [{
	"question": "The author apparently thinks that puppies are",
	"option1": "bad pets because they take too much work to own",
	"option2": "friendly, playful, and a lot of work",
	"option3": "not as cute as adult dogs",
	"option4": "not as playful as adult dogs",
	"answer": "2"
}, {
	"question": "As used in paragraph 2, which is the best synonym for behave?",
	"option1": "listen",
	"option2": "understand",
	"option3": "train",
	"option4": "act",
	"answer": "4"
}, {
	"question": "The main purpose of paragraph 2 is to explain how puppies",
	"option1": "are very immature",
	"option2": "do not make good pets",
	"option3": "can be very destructive",
	"option4": "are a lot of work",
	"answer": "4"
}, {
	"question": "As used in paragraph 2, which is the best example of a dog that is housebroken?",
	"option1": "Spot goes outside to use the bathroom.",
	"option2": "Rex always breaks things inside of the house.",
	"option3": "Rover never jumps on guests.",
	"option4": "Muffin chews on people’s shoes.",
	"answer": "1"
}, {
	"question": "Based on information in the passage, which of the following statements is false?",
	"option1": "Puppies have a lot of energy.",
	"option2": "Puppies need a lot of attention.",
	"option3": "Adult dogs do not like to play.",
	"option4": "Adult dogs do not need eat very much.",
	"answer": "3"
}, {
	"question": "As used in paragraph 4, which is the best synonym for relax?",
	"option1": "work",
	"option2": "leave",
	"option3": "play",
	"option4": "rest",
	"answer": "4"
}, {
	"question": "The author begins paragraphs 3 and 5 with the phrase, 'On the other hand'. This phrase is used to",
	"option1": "highlight an example",
	"option2": "contrast previous information",
	"option3": "contradict a later statement",
	"option4": "support the upcoming paragraph",
	"answer": "2"
}, {
	"question": " Based on information in the passage, it can be understood that someone who owns a puppy must be",
	"option1": "strict",
	"option2": "serious",
	"option3": "careful",
	"option4": "responsible",
	"answer": "4"
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