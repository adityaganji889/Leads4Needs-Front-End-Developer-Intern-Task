import { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import "./App.css";

const questions = [
  {
    questionText: "Qual o idiomafalado no Brasil?",
    answerOptions: [
      { answerText: "Português", isCorrect: true },
      { answerText: "Inglês", isCorrect: false },
      { answerText: "Francês", isCorrect: false },
      { answerText: "Alemão", isCorrect: false },
    ],
  },
  {
    questionText:
      "Quais os países que têm a maior e a menor expectativa de vida do mundo?",
    answerOptions: [
      { answerText: "Japão e Serra Leoa", isCorrect: true },
      { answerText: "Austrália e Afeganistã", isCorrect: false },
      { answerText: "Itália e Chade", isCorrect: false },
      { answerText: "Brasil e Congo", isCorrect: false },
    ],
  },
  {
    questionText: "Qual empresa criou o Iphone?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "Como aprender a programar?",
    answerOptions: [
      { answerText: "Praticando o que se aprende", isCorrect: true },
      { answerText: "Vendo vídeo", isCorrect: false },
      { answerText: "Lendo", isCorrect: false },
      { answerText: "Dormindo", isCorrect: false },
    ],
  },
];

function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [correctAnsCount, setCorrectAnsCount] = useState(0);
  const [correctAnsScore, setCorrectAnsScore] = useState(0);
  const [incorrectAnsCount, setInCorrectAnsCount] = useState(0);
  const [incorrectAnsScore, setInCorrectAnsScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore(score + 25);
      setCorrectAnsCount(correctAnsCount+1)
      setCorrectAnsScore(correctAnsScore+25)
    }
    else{
      setInCorrectAnsCount(incorrectAnsCount+1)
      setInCorrectAnsScore(incorrectAnsScore+25)
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <>
      <section className="my-5">
        <div className="mb-5 d-flex flex-row justify-content-between w-full">
          <div className="w-100 mt-2">
          <ProgressBar variant="success" now={correctAnsScore} className="w-100"/>
          <div className="text-dark">{correctAnsCount} / {questions.length}</div>
          </div>
          <div className="text-center mx-5">
          <div className="rounded-circle text-white bg-dark p-2 fw-bold">
          {score}
          </div>
          </div>
          <div className="w-100 mt-2">
          <ProgressBar variant="danger" now={incorrectAnsScore} className="w-100"/>
          <div className="text-dark">{incorrectAnsCount} / {questions.length}</div>
          </div>
        </div>
      </section>
      <div className="app">
      {showScore ? (
        <div className="score-section">
          Você pontuou {score} de 100
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Questão {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  onClick={() => handleAnswer(answerOption.isCorrect)}
                  key={index}
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
    </>
  );
}

export default App;
