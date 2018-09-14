import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  mathQuestions: null,
  historyQuestions: null,
  scienceQuestions: null,
  computerQuestions: null,
  errorFetchingQuestions: null
};

const internetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_QUESTIONS:
      if (action.error) {
        return {
          ...state,
          errorFetchingQuestions: action.error
        };
      }
      return {
        ...state,
        // Filling this specific type of questions:
        [action.questionsCategory + "Questions"]: action.questions //ex:mathQuestions
      };

    default:
      return state;
  }
};

export default internetReducer;
