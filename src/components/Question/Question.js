import { Icon } from "semantic-ui-react";
import React from "react";

import "./Question.css";

const question = props => {
  return (
    <div className="Question">
      <div>
        <div className="Question__Head">
          <Icon name="question" />
          {props.question}
        </div>

        <div className="Question__Answers">
          {props.answers.map(answer => (
            <span
              key={answer}
              className="Question__Answer"
              onClick={() => props.onAnswer(answer, props.correctAnswer)}
            >
              {answer}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

//Expected props:
//question, answers, correctAnswer

export default question;
