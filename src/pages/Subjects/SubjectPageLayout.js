import { connect } from "react-redux";
import { Spin } from "antd";
import React, { Component } from "react";

import * as actions from "../../store/actions";
import QuestionsList from "../../components/Question/QuestionsList/QuestionsList";

class SubjectPageLayout extends Component {
  state = {
    result: ""
  };

  componentDidMount() {
    this.props.getQuestions(
      10,
      this.props.questionCategory,
      this.props.questionType
    );
  }

  generateNewQuestion = () => {
    this.props.getQuestions(
      10,
      this.props.questionCategory,
      this.props.questionType
    );
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
    let questions =
      this.props.questionCategory === "math"
        ? this.props.mathQuestions
        : this.props.questionCategory === "history"
          ? this.props.historyQuestions
          : this.props.questionCategory === "science"
            ? this.props.scienceQuestions
            : this.props.questionCategory === "computer"
              ? this.props.computerQuestions
              : "";

    return (
      <div className="SubjectPageLayout">
        <div>{this.props.questionCategory} Page</div>

        <button onClick={this.generateNewQuestion}>New Question Set</button>

        {" " + this.state.result}

        <br />
        <br />

        {questions ? (
          <QuestionsList
            questions={questions}
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
    mathQuestions: state.internet.mathQuestions,
    scienceQuestions: state.internet.scienceQuestions,
    historyQuestions: state.internet.scienceQuestions,
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
)(SubjectPageLayout);

//expected props:
//questionCategory
//questionType
