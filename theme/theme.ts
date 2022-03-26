import { createTheme } from "@mui/material";
import { red, teal } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: teal[300],
    },
    secondary: {
      main: '#ffc107',
    },
    error: {
      main: red[300],
    },
    warning: {
      main: '#ff9800',
    },
    success: {
      main: '#6cc76f',
    },
  },
})

export default theme