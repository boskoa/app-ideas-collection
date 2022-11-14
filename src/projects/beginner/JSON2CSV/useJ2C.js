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
    let properties = [];
    let endResult = [];

    for (const property in jsObjects[0]) {
      properties.push(property);
    }
    csvArray.push(properties);

    for (const el of jsObjects) {
      csvArray.push(Object.values(el));
    }

    for (let el of csvArray) {
      el = el.join(",");
      el = el.replace(/\n/g, " ");
      endResult.push(el);
    }

    setCsv(endResult.join("\n"));
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
    setError,
    clicked,
    setClicked,
  };
};

export default useJ2C;
