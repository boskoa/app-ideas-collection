import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Chewy",
    },
  },
  palette: {
    calc: {
      main: "#414141",
      light: "#525252",
      dark: "#313131",
      contrastText: "#FFEFEF",
    },
    lights: {
      main: "#1b5e20",
      contrastText: "#ffff00",
    },
  },
});

export const darkTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Chewy",
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff",
    },
    calc: {
      main: "#414141",
      light: "#525252",
      dark: "#313131",
      contrastText: "#FFEFEF",
    },
    lights: {
      main: "#121212",
    },
  },
});
