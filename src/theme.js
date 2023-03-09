import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#070e13",
    },
    secondary: {
      main: "#232b39",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "2.25rem",
          padding: "14px 20px",
        },
      },
    },
  },
  typography: {
    fontFamily: "Readex Pro",
  },
});
export default theme;
