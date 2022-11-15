import { useEffect, useState } from "react";

const useJ2C = (direction) => {
  const [json, setJson] = useState("");
  const [csv, setCsv] = useState("");
  const [error, setError] = useState("");
  const [clicked, setClicked] = useState(false);

  const convertc2j = () => {
    setJson("");
    if (!csv.length) {
      setError("Empty CSV text box");
      const index = setTimeout(() => setError(""), 3500);
      return () => clearTimeout(index);
    }

    let jArray = [];
    try {
      const cArray = csv.split("\n");
      const props = cArray[0].split(",");
      for (const a of cArray.slice(1)) {
        const littleArray = a.split(",");
        const object = {};
        for (let i = 0; i < props.length; i++) {
          object[`${props[i]}`] = littleArray[i];
        }
        jArray.push(object);
      }
    } catch (err) {
      setError(err.message);
      const index = setTimeout(() => setError(""), 3500);
      return () => clearTimeout(index);
    }
    setJson(JSON.stringify(jArray));
  };

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
      if (direction === "CSV") {
        convertJ2C();
      } else {
        convertc2j();
      }
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
