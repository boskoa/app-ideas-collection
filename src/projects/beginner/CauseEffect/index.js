import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { apps } from "../../../applications";
import "./index.css";

const CauseEffect = () => {
  const [persons, setPersons] = useState([]);
  const [selected, setSelected] = useState(null);
  const dark = useTheme().palette.mode === "dark";
  const ref = useRef();
  const containerRef = useRef();
  const app = apps[4];

  const fetchPersons = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setPersons(response.data);
  };

  useEffect(() => {
    fetchPersons();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setSelected(null);
      }
    };

    containerRef.current.addEventListener("mousedown", handleClickOutside);
    return () => {
      containerRef.current?.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [ref]);

  return (
    <div id="container" ref={containerRef}>
      <Typography align="center" variant="h4" gutterBottom>
        {app.name}
      </Typography>
      <Typography sx={{ m: 2 }} variant="body1">
        {app.description}
      </Typography>
      <div id="main">
        <ul className={dark ? "dark" : "light"} ref={ref}>
          {persons.map((p) => (
            <li
              key={p.id}
              tabIndex="0"
              onClick={() => setSelected(persons[p.id - 1])}
            >
              <Typography sx={{ display: "inline" }}>{p.name}</Typography>
            </li>
          ))}
        </ul>
        <div
          id="info"
          className={`${dark ? "dark" : "light"} ${!selected && "none"}`}
        >
          <Typography>Name: {selected?.name}</Typography>
          <Typography>
            Address: {selected?.address.street}, {selected?.address.suite},{" "}
            {selected?.address.city}
          </Typography>
          <Typography>Phone: {selected?.phone}</Typography>
          <Typography>Email: {selected?.email}</Typography>
          <Typography>Website: {selected?.website}</Typography>
        </div>
      </div>
    </div>
  );
};

export default CauseEffect;
