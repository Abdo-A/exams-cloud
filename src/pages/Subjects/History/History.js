import { connect } from "react-redux";
import { Spin } from "antd";
import React, { Component } from "react";

import * as actions from "../../../store/actions";

class History extends Component {
  componentDidMount() {
    this.props.getQuestions(10, "history", "boolean");
  }

  generateNewQuestion = () => {
    this.props.getQuestions(10, "history", "boolean");
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
      <div className="History">
        <div>History Page</div>
        {this.props.historyQuestions ? (
          <div>
            Question: {this.props.historyQuestions[0].question}
            <br />
            <a>
              {this.props.historyQuestions[0].answers.map(answer => (
                <li
                  key={answer}
                  onClick={() =>
                    this.answerItemClicked(
                      answer,
                      this.props.historyQuestions[0].correctAnswer
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
    historyQuestions: state.internet.historyQuestions
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
)(History);
