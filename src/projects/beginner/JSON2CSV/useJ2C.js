import { useEffect, useState } from "react";

const useJ2C = () => {
  const [json, setJson] = useState("");
  const [csv, setCsv] = useState("");
  const [error, setError] = useState("");
  const [clicked, setClicked] = useState(false);

  const convertJ2C = () => {
    setCsv("");
    if (!json.length) {
      setError("Empty JSON text box");
      const index = setTimeout(() => setError(""), 3500);
      return () => clearTimeout(index);
    }

    let jsObjects = [];

    try {
      jsObjects = jsObjects.concat(JSON.parse(json));
    } catch (err) {
      setError(err.message);
      const index = setTimeout(() => setError(""), 3500);
      return () => clearTimeout(index);
    }

    let csvArray = [];

    for (const property in jsObjects[0]) {
      csvArray.push(property);
    }

    for (const el of jsObjects) {
      csvArray = csvArray.concat(Object.values(el));
    }

    setCsv(csvArray.join(","));
  };

  useEffect(() => {
    if (clicked) {
      convertJ2C(json);
      setClicked(false);
    }
  }, [clicked]);

  return {
    json,
    setJson,
    csv,
    setCsv,
    error,
    clicked,
    setClicked,
  };
};

export default useJ2C;
