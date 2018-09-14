//import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  score: 0
};

const mainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case actionTypes.:
    //     return {
    //         ...state,
    //         ...action.payload
    //     };
    default:
      return state;
  }
};

export default mainReducer;
