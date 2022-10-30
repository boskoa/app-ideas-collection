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
  },
});
