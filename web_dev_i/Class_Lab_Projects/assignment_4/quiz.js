const quizQuestions = [
  { question: "What does HTML stand for?", answer: "hypertext markup language" },
  { question: "Which keyword is used to declare a variable in JavaScript?", answer: "let" },
  { question: "Which symbol is used for single-line comments in JavaScript?", answer: "//" },
  { question: "What method converts text to lowercase?", answer: "tolowercase" },
  { question: "Which loop is used to iterate over an array?", answer: "for" }
];

function runQuiz() {
  let score = 0;

  for (let i = 0; i < quizQuestions.length; i++) {
    let userAnswer = prompt(quizQuestions[i].question);

    if (userAnswer === null) {
      alert("Quiz cancelled.");
      return;
    }

    userAnswer = userAnswer.toLowerCase().trim();

    if (userAnswer === quizQuestions[i].answer) {
      score++;
      alert("Correct!");
    } else {
      alert(
        "Wrong! Correct answer is: " + quizQuestions[i].answer
      );
    }
  }

  alert(`Quiz Completed!\nYour Score: ${score} / ${quizQuestions.length}`);
}

runQuiz();
