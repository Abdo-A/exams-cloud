import { connect } from "react-redux";
import { Spin } from "antd";
import React, { Component } from "react";

import * as actions from "../../../store/actions";

import "./Math.css";

class math extends Component {
  componentDidMount() {
    this.props.getQuestions(10, "math", "boolean");
  }

  generateNewQuestion = () => {
    this.props.getQuestions(10, "math", "boolean");
  };

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
        {this.props.mathQuestions ? (
          <div>
            Question: {this.props.mathQuestions[0].question}
            <br />
            <a>
              {this.props.mathQuestions[0].answers.map(answer => (
                <li
                  key={answer}
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
          </div>
        ) : (
          <Spin />
        )}
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
