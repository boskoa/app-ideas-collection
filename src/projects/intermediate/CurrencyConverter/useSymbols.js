import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "./utils";

// Excluded because of lower API use.
const useSymbols = () => {
  const [symbols, setSymbols] = useState([]);
  const temp = false;

  const getSymbols = async () => {
    const response = await axios.get(
      "https://api.apilayer.com/fixer/symbols",
      config
    );

    setSymbols(response.data.symbols);
  };

  useEffect(() => {
    if (temp) {
      getSymbols();
    }
  }, []);

  return symbols;
};

export default useSymbols;
