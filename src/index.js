import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./redux/reducres"; 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <Provider store={store}>
    <App />
  </Provider>

);
reportWebVitals();
