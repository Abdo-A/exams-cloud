import { BrowserRouter } from "react-router-dom";
import { compose, applyMiddleware, createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";

import App from "./App";
import internetReducer from "./store/reducers/internetReducer";
import mainReducer from "./store/reducers/mainReducer";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

const reducer = combineReducers({
  main: mainReducer,
  internet: internetReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
