import { connect } from "react-redux";
import { Spin } from "antd";
import React, { Component } from "react";

import * as actions from "../../../store/actions";
import QuestionsList from "../../../components/Question/QuestionsList/QuestionsList";

class Science extends Component {
  componentDidMount() {
    this.props.getQuestions(10, "science", "boolean");
  }

  generateNewQuestion = () => {
    this.props.getQuestions(10, "science", "boolean");
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
      <div className="Science">
        <div>Science Page</div>
        {this.props.scienceQuestions ? (
          <QuestionsList
            questions={this.props.scienceQuestions}
            onAnswer={this.answerItemClicked}
          />
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
    scienceQuestions: state.internet.scienceQuestions
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
)(Science);
