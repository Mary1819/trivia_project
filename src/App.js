import React, { useState } from "react";
import "./App.css";
import Question from "./components/Question";
import NextQuestion from "./components/NextQuestion";
import data from "./sample_data.json";

function App() {
  let [currentQuestionNumber, setQuestionNum] = useState(0);
  let [answerDisplayed, setAnsDisplayed] = useState(null);

  function getCorrectAnswer(questionNum) {
    let currentQue = data[questionNum].question;
    let correctAnsIndex = currentQue.correct_choice_index;
    let correctAns = currentQue.choices[correctAnsIndex];

    return correctAns;
  }

  function QuestionAnswered() {
    if (answerDisplayed === null) {
      return "Click an answer above";
    } else if (answerDisplayed === getCorrectAnswer(currentQuestionNumber)) {
      return "You are correct!";
    } else {
      return "You are incorrect :(";
    }
  }

  function goToNextQuestion() {
    setQuestionNum(currentQuestionNumber + 1);
    setAnsDisplayed(null);
    if (currentQuestionNumber === 4) {
      setQuestionNum(0);
    } else {
    }
  }

  return (
    <div className="app">
      <h1 className="title">Trivia </h1>
      <Question
        question={data[currentQuestionNumber].question.text}
        answer={data[currentQuestionNumber].question.choices}
        setAnsDisplayed={setAnsDisplayed}
      />
      <NextQuestion
        goToNextQuestion={goToNextQuestion}
        currentQue={currentQuestionNumber + 1}
      />
      <p> {QuestionAnswered()} </p>
    </div>
  );
}

export default App;
