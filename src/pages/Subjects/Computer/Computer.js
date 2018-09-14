import { connect } from "react-redux";
import { Spin } from "antd";
import React, { Component } from "react";

import * as actions from "../../../store/actions";
import QuestionsList from "../../../components/Question/QuestionsList/QuestionsList";

import "./Computer.css";

class Computer extends Component {
  state = {
    result: "",
    questionType: "boolean"
  };

  componentDidMount() {
    this.props.getQuestions(10, "computer", this.state.questionType);
  }

  generateNewQuestion = () => {
    this.props.getQuestions(10, "computer", this.state.questionType);
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
      <div className="Computer">
        <div>Computer Page</div>

        <button onClick={this.generateNewQuestion}>New Question Set</button>

        {" " + this.state.result}

        <br />
        <br />

        {this.props.computerQuestions ? (
          <QuestionsList
            questions={this.props.computerQuestions}
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
    computerQuestions: state.internet.computerQuestions
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
)(Computer);
