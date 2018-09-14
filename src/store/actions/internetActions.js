import axios from "axios";

import * as actionTypes from "./actionTypes";

//
//
//Getting questions
//
//
export const getQuestions = (
  questionsNumber,
  questionsCategory,
  questionsType,
  questionsDifficulty
) => {
  //questionsCategory is required, can be: science (17), computer (18), math (19), history (23)
  //questionsNumber is required.
  //questionsType is required, can be: multiple, boolean
  //questionsDifficulty is optional, can be: easy, medium, hard

  //
  //creating customized URL
  //
  let category =
    questionsCategory === "science"
      ? 17
      : questionsCategory === "computer"
        ? 18
        : questionsCategory === "math"
          ? 19
          : questionsCategory === "history"
            ? 23
            : 9;

  const url = `https://opentdb.com/api.php?amount=${questionsNumber}&category=${category}${
    questionsDifficulty ? "&difficulty=" + questionsDifficulty : ""
  }&type=${questionsType}`;

  return dispatch => {
    //making it null before initiating the API call
    dispatch(setQuestions(null, questionsCategory, null));

    axios
      .get(url)
      .then(res => {
        //console.log("res.data.results", res.data.results);

        //Creating processed questions array:

        const results = res.data.results.map(questionBody => {
          let question, answers_array, correct_answer;

          //Getting answers_array
          answers_array = questionBody.incorrect_answers.map(answer => {
            const parsedAnswer = new DOMParser().parseFromString(
              answer,
              "text/html"
            ).body.innerHTML;
            return parsedAnswer;
          });

          //Getting correct_answer
          correct_answer = new DOMParser().parseFromString(
            questionBody.correct_answer,
            "text/html"
          ).body.innerHTML;

          //Inserting correct asnwers randomly into answers array
          let random_number = Math.floor(
            Math.random() * [questionBody.incorrect_answers].length + 1
          );
          if (questionsType === "boolean") {
            random_number = Math.random() >= 0.5 ? 1 : 0;
          }

          answers_array.splice(random_number, 0, correct_answer);

          //Getting question
          question = new DOMParser().parseFromString(
            questionBody.question,
            "text/html"
          ).body.innerHTML;

          return {
            question: question,
            answers: answers_array,
            correctAnswer: correct_answer,
            type: questionsType
          };
        });

        //console.log("results", results);
        dispatch(setQuestions(results, questionsCategory, null));
      })
      .catch(error => {
        dispatch(setQuestions(null, questionsCategory, error));
      });
  };
};

//
//
//Setting questions
//
//
const setQuestions = (questions, questionsCategory, error) => {
  return {
    type: actionTypes.SET_QUESTIONS,
    questions: questions,
    questionsCategory: questionsCategory,
    error: error
  };
};
