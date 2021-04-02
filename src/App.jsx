import React from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <div>
      <h2 className="max-w-md mx-auto text-poll-red text-center font-bold text-4xl">
        Hello Friend, <span className="text-poll-blue">Bonsoir :)</span>
        </h2>
    </div>
  );
};

render(<App />, document.getElementById("root"));
