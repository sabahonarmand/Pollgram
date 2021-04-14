import React from "react";
import { render } from "react-dom";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core";
import Button from './components/button';
const App = () => {
    // const classes = useStyle();
    return (
        <div>
            <Button/>
            <ThemeProvider theme={theme}>
            </ThemeProvider>
        </div>
    );
};

render(<App />, document.getElementById("root"));