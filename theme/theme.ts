import { createTheme } from "@mui/material";
import { grey, red, teal, yellow } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: teal[300],
    },
    secondary: {
      main: yellow[300],
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