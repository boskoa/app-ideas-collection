import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "./utils";

const useConvert = () => {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);
  const [rates, setRates] = useState({});
  const [rate, setRate] = useState(null);

  const getRates = async () => {
    const response = await axios.get(
      `https://api.apilayer.com/fixer/latest?base=${from}`,
      config
    );
    setRates(response.data.rates);
  };

  const convert = () => {
    setResult((amount * rate).toFixed(2));
  };

  useEffect(() => {
    if (from.length) {
      getRates();
    }
  }, [from]);

  useEffect(() => {
    if (to.length && rates[to]) {
      setRate(rates[to]);
    }
  }, [to, rates]);

  useEffect(() => {
    if (amount && rate) {
      convert();
    }
  }, [amount, rate]);

  return { to, from, amount, setTo, setFrom, setAmount, result, rate };
};

export default useConvert;
