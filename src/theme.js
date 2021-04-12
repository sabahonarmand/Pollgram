import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F7444E",
    },
    secondary: {
      main: "#26BCCD",
    },
    text: {
      primary: "#002C3E",
      secondary: "#6E6E6E", //description
      disabled: "#B2B2B2", //placeholder
    },
    background: {
      default: "#F7F8F3", //input bg and main bg
      paper: "#ffffff", //white
    },
    grey: {
      100: "#E9E9E9", // input border
      500: "#BABABA", //poll options bg
    },
  },
});

export default theme;
