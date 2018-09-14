import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  mathQuestions: null,
  historyQuestions: null,
  scienceQuestions: null,
  computerQuestions: null
};

const internetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_QUESTIONS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default internetReducer;
