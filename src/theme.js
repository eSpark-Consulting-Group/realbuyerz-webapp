"use client";
import { createTheme, ThemeProvider } from "@mui/material";
import { lightGreen, purple } from "@mui/material/colors";
const Theme = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: { main: "#ed6c02", dark: "#e65100" },
      // secondary: purple,
    },
    typography: {
      fontFamily: "monospace",
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default Theme;
