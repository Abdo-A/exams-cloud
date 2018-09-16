import React from "react";
import Question from "../Question";

const questionsList = props => {
  return (
    <div className="QuestionsList">
      {props.questions
        ? props.questions.map(question => {
            return (
              <div key={question.question}>
                <Question
                  question={question.question}
                  correctAnswer={question.correctAnswer}
                  answers={question.answers}
                  onAnswer={props.onAnswer}
                />
              </div>
            );
          })
        : "hi"}
    </div>
  );
};

export default questionsList;
