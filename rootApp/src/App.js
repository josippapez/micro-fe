import React, { useEffect, useState, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import isMobileView from "./checkForMobileView";
import NewComponent from "./Components/NewComponent";
import useCalculateEachDayOfMonth from "./Hooks/calculateEachDayOfMonth";
import logo from "./logo.svg";
import { decreaseCounter, increaseCounter } from "./store/reducers/counter";
import {
  decreaseCount,
  increaseCount,
} from "./store/reduxActions/counterActions";

const ComponentFromSecondApp = React.lazy(() => import("app/App"));

function RootApp() {
  const state = useSelector(state => state);
  const [navigate, setNavigate] = useState({ id: 1, name: "Home" });
  const mobileView = isMobileView();
  const eachDayOfMonth = useCalculateEachDayOfMonth({
    year: 2022,
    month: 7,
  }).dates;

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);

  const getEventsById = async id => {
    if (id) {
      console.log(id);
    }
  };

  // useEffect(() => {
  //   if (navigate && navigate.id) {
  //     getEventsById(navigate.id);
  //   }
  // }, [navigate]);

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <ComponentFromSecondApp />
      </Suspense>
      <NewComponent />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          data-testid="app-link"
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>{counter}</div>
        <button
          data-testid="increase-counter"
          onClick={() => {
            dispatch({ type: "INCREASE_COUNT" });
            dispatch(increaseCounter());
            dispatch(increaseCount());
          }}
        >
          Increase count
        </button>
        <button
          data-testid="decrease-counter"
          onClick={() => {
            dispatch({ type: "DECREASE_COUNT" });
            dispatch(decreaseCounter());
            dispatch(decreaseCount());
          }}
        >
          Decrease count
        </button>
      </header>
    </div>
  );
}

export default RootApp;
