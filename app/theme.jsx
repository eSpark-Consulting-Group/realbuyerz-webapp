"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fb631c",
    },
    secondary: {
      main: "#EDF7FF",
    },
    customColor: {
      main: "#1176AD",
    },
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#000",
      primaryinvert: "#fff",
      secondary: "#333",
      primaryinvert: "#bfbfbf",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontSize: "40px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "36px",
      fontWeight: 600,
    },
    h3: {
      fontSize: "30px",
      fontWeight: 600,
    },
    h4: {
      fontSize: "24px",
      fontWeight: 700,
    },
    h5: {
      fontSize: "20px",
      fontWeight: 600,
    },
    h6: {
      fontSize: "16px",
      fontWeight: 700,
    },
    body1: {
      fontSize: "14px",
    },
    button: {
      textTransform: "capitalize",
    },
    link: {
      textDecoration: "none",
      color: "#fb631c",
      "&:hover": {
        color: "#EDF7FF",
      },
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 5,
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "primary" },
          style: {
            textTransform: "capitalize",
            backgroundColor: "#fb631c !important",
            borderRadius: "5px",
            color: "#fff",
            position: "relative",
            "&:hover": {
              backgroundColor: "#EDF7FF",
              // color: '#fb631c',
              color: "#fff",
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            textTransform: "capitalize",
            borderColor: "#fb631c",
            color: "#fb631c",
            "&:hover": {
              backgroundColor: "#fb631c",
              color: "#fff",
            },
          },
        },
      ],
    },
    MuiLink: {
      defaultProps: {
        variant: "link",
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#fb631c",
          "&:hover": {
            backgroundColor: "#EDF7FF",
            color: "#fb631c",
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "1920px",
          margin: "0 auto",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
