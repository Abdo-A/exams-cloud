import { connect } from "react-redux";
import { Spin } from "antd";
import React, { Component } from "react";

import * as actions from "../../../store/actions";
import QuestionsList from "../../../components/Question/QuestionsList/QuestionsList";

import "./History.css";

class History extends Component {
  state = {
    result: "",
    questionType: "boolean"
  };

  componentDidMount() {
    this.props.getQuestions(10, "history", this.state.questionType);
  }

  generateNewQuestion = () => {
    this.props.getQuestions(10, "history", this.state.questionType);
  };

  answerItemClicked = (clickedItem, correctAnswer) => {
    if (clickedItem === correctAnswer) {
      console.log("Yabn el la3eeba");
      this.setState(() => ({
        result: "CORRECT!"
      }));
    } else {
      console.log("Ya homar");
      this.setState(() => ({
        result: "WRONG!"
      }));
    }
  };

  render() {
    return (
      <div className="History">
        <div>History Page</div>

        <button onClick={this.generateNewQuestion}>New Question Set</button>

        {" " + this.state.result}

        <br />
        <br />

        {this.props.historyQuestions ? (
          <QuestionsList
            questions={this.props.historyQuestions}
            onAnswer={this.answerItemClicked}
          />
        ) : (
          <Spin />
        )}
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
