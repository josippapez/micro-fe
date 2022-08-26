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
      "https://jsonplaceholder.typicode.com/posts"
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
          <div key={item.id} style={{
            padding: '20px'
          }}>
            {item.title}
            <div>{item.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
