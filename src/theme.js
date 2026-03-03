import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2E3A5C", // Logo Navy
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#F4B400", // Logo Gold
      contrastText: "#000000",
    },
    background: {
      default: "#F9FAFB",
      paper: "#ffffff",
    },
    text: {
      primary: "#2E3A5C",
      secondary: "#6B7280",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontWeight: 700,
      color: "#2E3A5C",
    },
    h2: {
      fontWeight: 600,
      color: "#2E3A5C",
    },
    h3: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: "#2E3A5C",
          "&:hover": {
            backgroundColor: "#1f2942",
          },
        },
        containedSecondary: {
          backgroundColor: "#F4B400",
          color: "#000",
          "&:hover": {
            backgroundColor: "#d99e00",
          },
        },
      },
    },
  },
});

export default theme;
