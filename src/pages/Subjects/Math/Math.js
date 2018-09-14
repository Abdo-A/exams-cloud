import { connect } from "react-redux";
import { Spin } from "antd";
import axios from "axios";
import React, { Component } from "react";

import * as actions from "../../../store/actions";

import "./Math.css";

class math extends Component {
  componentDidMount() {
    this.props.getQuestions(10, "math", "boolean");
  }

  answerItemClicked = (clickedItem, correctAnswer) => {
    if (clickedItem === correctAnswer) {
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
          Question:{" "}
          {this.props.mathQuestions ? (
            this.props.mathQuestions[0].question
          ) : (
            <Spin />
          )}
        </div>
        <br />
        <a>
          {this.props.mathQuestions &&
            this.props.mathQuestions[0].answers.map(answer => (
              <li
                key={answer}
                className="Answer"
                onClick={() =>
                  this.answerItemClicked(
                    answer,
                    this.props.mathQuestions[0].correctAnswer
                  )
                }
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

const mapStateToProps = state => {
  return {
    mathQuestions: state.internet.mathQuestions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getQuestions: (a, b, c, d) => dispatch(actions.getQuestions(a, b, c, d))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(math);
