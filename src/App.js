import { CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useEffect, useState } from "react";
import MyAppBar from "./components/MyAppBar";
import { darkTheme, lightTheme } from "./themes";

export const ThemeContext = createContext({
  dark: false,
  setDark: (dark) => dark,
});

const App = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedDark = window.localStorage.getItem("appsTheme");
    setDark(Boolean(Number(savedDark)));
  }, []);

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <CssBaseline />
      <ThemeContext.Provider value={{ dark, setDark }}>
        <MyAppBar dark={dark} setDark={setDark} />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default App;
