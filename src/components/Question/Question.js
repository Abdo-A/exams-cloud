import React from "react";

const question = props => {
  return (
    <div className="Question">
      <div>
        Question: {props.question}
        <br />
        <a>
          {props.answers.map(answer => (
            <li
              key={answer}
              onClick={() => props.onAnswer(answer, props.correctAnswer)}
            >
              {answer}
            </li>
          ))}
        </a>
      </div>
    </div>
  );
};

//Expected props:
//question, answers, correctAnswer

export default question;
