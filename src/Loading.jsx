import React from "react";

const Loading = () => {
  return (
    <div className="loading-container">
      <h2>Loading...</h2>
      <img
        src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
        alt="Loading"
        style={{ width: "200px", height: "200px" }}
      />
      <p>Please wait while we fetch the data.</p>
    </div>
  );
};

export default Loading;
