import { Spin } from "antd";
import axios from "axios";
import React, { Component } from "react";

import "./Math.css";

class math extends Component {
  state = {
    question: null,
    correct_answer: null,
    incorrect_answers_array: null,
    answers: null
  };

  componentDidMount() {
    this.generateNewQuestion();
  }

  generateNewQuestion = () => {
    this.setState(() => ({
      question: null,
      correct_answer: null,
      answers: null
    }));

    axios
      .get(
        "https://opentdb.com/api.php?amount=1&category=19&difficulty=easy&type=multiple"
      )
      .then(res => {
        //Getting answers_array
        const answers_array = res.data.results[0].incorrect_answers.map(
          answer => {
            const parsedAnswer = new DOMParser().parseFromString(
              answer,
              "text/html"
            ).body.innerHTML;
            return parsedAnswer;
          }
        );

        //Getting correct_answer
        const correct_answer = new DOMParser().parseFromString(
          res.data.results[0].correct_answer,
          "text/html"
        ).body.innerHTML;

        //Inserting correct asnwers randomly into answers array
        const random_number = Math.floor(Math.random() * 4);
        answers_array.splice(random_number, 0, correct_answer);

        //Getting question
        const question = new DOMParser().parseFromString(
          res.data.results[0].question,
          "text/html"
        ).body.innerHTML;

        this.setState(() => ({
          question: question,
          correct_answer: correct_answer,
          answers: answers_array
        }));
      })
      .catch(error => {
        console.log(error);
      });
  };

  answerItemClicked = clickedItem => {
    if (clickedItem === this.state.correct_answer) {
      console.log("Yabn el la3eeba");
    } else {
      console.log("Ya homar");
    }
  };

  render() {
    return (
      <div className="Math">
        <div>Math Page</div>
        <div>
          Question: {this.state.question ? this.state.question : <Spin />}
        </div>
        <br />
        <a>
          {this.state.answers &&
            this.state.answers.map(answer => (
              <li
                key={answer}
                className="Answer"
                onClick={() => this.answerItemClicked(answer)}
              >
                {answer}
              </li>
            ))}
        </a>
        <button onClick={this.generateNewQuestion}>New Question</button>
      </div>
    );
  }
}

export default math;
