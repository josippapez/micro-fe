import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";

const App = () => {
  const state = useSelector(state => state);
  const [fetchedData, setFetchedData] = useState([]);
  console.log("remoteApp", state);
  console.info("remoteApp", fetchedData);

  const handleFetch = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_REMOTE_BE_URL}/random`
    ).then(res => {
      return res.json();
    });
    if (response) {
      setFetchedData(response);
    }
  };

  return (
    <div className="App">
      First app, {state.counter.counter}
      <button onClick={() => handleFetch()}>Fetch</button>
      <div
        style={{
          maxHeight: "200px",
          overflow: "auto",
          scrollBehavior: "smooth",
        }}
      >
        {fetchedData.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
