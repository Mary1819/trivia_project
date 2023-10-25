import AnswerChoices from "./AnswerChoices";

function Question(props) {
  return (
    <div class="allQues">
      <p> {props.question} </p>
      {props.answer.map((answer) => (
        <AnswerChoices
          answer={answer}
          onClick={() => props.clickFunction()}
          setAnsDisplayed={props.setAnsDisplayed}
        />
      ))}
    </div>
  );
}

export default Question;
