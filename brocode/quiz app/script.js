const questions = [
  {
    question: "What does HTML stand for?",
    choices: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language"
    ],
    correctAnswer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    choices: [
      "HTML",
      "JQuery",
      "CSS",
      "XML"
    ],
    correctAnswer: 2
  },
  {
    question: "Which is not a JavaScript framework?",
    choices: [
      "Python",
      "React",
      "Angular",
      "Vue"
    ],
    correctAnswer: 0
  },
  {
    question: "Which tag is used to link a CSS file?",
    choices: [
      "<style>",
      "<css>",
      "<link>",
      "<script>"
    ],
    correctAnswer: 2
  },
  {
    question: "Which property is used to center items using Flexbox?",
    choices: [
      "align",
      "center-items",
      "justify-content",
      "float"
    ],
    correctAnswer: 2
  }
];
let   currentQuestionIndex=0;
let score=0;
const startBtn=document.getElementById("start-btn");
const nextBtn=document.getElementById("next-btn");
const questionContainer=document.getElementById("question-container");
const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-button");
const resultsContainer=document.getElementById("results");
const scoreElement=document.getElementById("score");
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
function startQuiz(){
    startBtn.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    currentQuestionIndex=0;
    score=0;
    showQuestion(questions[  currentQuestionIndex]);
}
function showQuestion(question) {
    questionElement.innerHTML = question.question;
    answerButton.innerHTML = "";

    question.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.innerText = choice;
        button.classList.add("btn");

        button.addEventListener("click", () => selectanswer(index));
        answerButton.appendChild(button);
    });
}

function selectanswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].correctAnswer;
    const buttons = answerButton.children;

    // Loop through all answer buttons
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;

        if (i === correctIndex) {
            buttons[i].classList.add("correct");
        }

        if (i === selectedIndex && i !== correctIndex) {
            buttons[i].classList.add("wrong");
        }
    }

    if (selectedIndex === correctIndex) {
        score++;
    }
    if (selectedIndex === correctIndex) {
    score++;
    showCelebrate();
}


    nextBtn.classList.remove("hidden");
}

function nextQuestion(){
    currentQuestionIndex++;
    if(currentQuestionIndex <questions.length) {
        showQuestion(questions[  currentQuestionIndex]);
        nextBtn.classList.add("hidden");
    }
    else{
        endQuiz();

        
    }
}
function endQuiz(){
    questionContainer.classList.add("hidden");
    resultsContainer.classList.remove("hidden");
    scoreElement.innerText=`${score}/${questions.length}`;
}
function restartQuiz(){
    resultsContainer.classList.add("hidden");
    startBtn.classList.remove('hidden');
    scoreElement.innerText= `${score}/${questions.length}`;

}
function showCelebrate() {
    const img = document.getElementById("celebrate-img");

    img.classList.remove("hidden");

    // Restart animation
    img.style.animation = "none";
    img.offsetHeight;
    img.style.animation = "";

    setTimeout(() => {
        img.classList.add("hidden");
    }, 1000);
}
