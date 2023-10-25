function NextQuestion(props) {
  return (
    <div>
      <button onClick={props.goToNextQuestion}>Next Question</button>
      <p class="allQues"> Question #{props.currentQue} </p>
    </div>
  );
}

export default NextQuestion;
