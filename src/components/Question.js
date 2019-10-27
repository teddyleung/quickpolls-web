import React from 'react';

const Question = props => {
  const { question, answers } = props.question;
  const answerInputs = Object.entries(answers).map(([uuid, answer], index) => (
    <div key={uuid}>
      <label>
        Choice {index}
        <input
          type="text"
          data-question={props.uuid}
          data-answer={uuid}
          value={answer}
          onChange={props.handleAnswerChange}
        />
      </label>
    </div>
  ));

  return (
    <div>
      <h3>Question {props.index + 1}</h3>
      <label>
        Question
        <input
          type="text"
          data-question={props.uuid}
          value={question}
          onChange={props.handleQuestionChange}
        />
      </label>
      { answerInputs }
    </div>
  );
}

export default Question;