import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Chewy",
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
  },
});
