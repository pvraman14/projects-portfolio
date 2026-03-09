const quizData = [
  {
    questions: "Who is India's Prime Minister",
    a: "Modiji",
    b: "Kejriwal",
    c: "Rahul Gandhi",
    d: "Lalu Yadav",
    correct: "a",
  },
  {
    questions: "What is the capital of India?",
    a: "Dehradun",
    b: "Maharashtra",
    c: "Jharkhand",
    d: "Delhi",
    correct: "d",
  },
  {
    questions: "Where is Coditas?",
    a: "Wadgaon Sheri",
    b: "Hadapsar",
    c: "Viman Nagar",
    d: "Kalyani Nagar",
    correct: "c",
  },
  {
    questions: "First Lady Prime Minister?",
    a: "Indira Gandhi",
    b: "Sonia Gandhi",
    c: "Mamta ",
    d: "Alia Bhatt",
    correct: "a",
  },
  {
    questions: "Who is India's Prime Minister",
    a: "Modiji",
    b: "Kejriwal",
    c: "Rahul Gandhi",
    d: "Lalu Yadav",
    correct: "a",
  },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.questions;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>

             <button onclick = "location.reload()">reload</button>`;
    }
  }
});
