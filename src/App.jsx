import React from "react";
import { render } from "react-dom";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core";

const App = () => {
  const classes = useStyle();
  return (
    <div>
      <ThemeProvider theme={theme}></ThemeProvider>
    </div>
  );
};

render(<App />, document.getElementById("root"));
