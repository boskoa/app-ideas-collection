import { createContext, useEffect, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./themes";

export const FilterContext = createContext();
export const SetFilterContext = createContext();
export const DarkContext = createContext();
export const SetDarkContext = createContext();
export const SearchContext = createContext();
export const SetSearchContext = createContext();

const Provider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const [appsFilter, setAppsFilter] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedDark = window.localStorage.getItem("appsTheme");
    setDark(Boolean(Number(savedDark)));
  }, []);

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <CssBaseline />
      <FilterContext.Provider value={appsFilter}>
        <SetFilterContext.Provider value={setAppsFilter}>
          <DarkContext.Provider value={dark}>
            <SetDarkContext.Provider value={setDark}>
              <SearchContext.Provider value={search}>
                <SetSearchContext.Provider value={setSearch}>
                  {children}
                </SetSearchContext.Provider>
              </SearchContext.Provider>
            </SetDarkContext.Provider>
          </DarkContext.Provider>
        </SetFilterContext.Provider>
      </FilterContext.Provider>
    </ThemeProvider>
  );
};

export default Provider;
