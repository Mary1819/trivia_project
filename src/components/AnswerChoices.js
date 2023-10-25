function AnswerChoices(props) {
  return (
    <div className="answer-choice" 
    onClick={() => props.setAnsDisplayed(props.answer)}>
      {props.answer}
    </div>
  );
}

export default AnswerChoices;
