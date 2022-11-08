import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const Light = styled("div", {
  shouldForwardProp: (prop) => prop !== "on",
})(({ theme, on }) => ({
  width: "90%",
  height: "90%",
  borderRadius: "50% 50% 50% 50% / 50% 50% 50% 50%",
  backgroundColor: "red",
  boxShadow: on ? "0px 0px 30px 15px red" : "0px 0px 0px 0px red",
  transition: `${theme.transitions.create(["box-shadow", "transform"], {
    duration: 1000,
  })}`,
}));

const Bulb = ({ power, time, position }) => {
  const [on, setOn] = useState(false);

  useEffect(() => {
    let lightInterval;
    if (power && position % 2) {
      lightInterval = setInterval(() => setOn((p) => !p), time);
    } else if (power && !(position % 2)) {
      setTimeout(
        () => (lightInterval = setInterval(() => setOn((p) => !p), time)),
        time
      );
    } else {
      setOn(false);
    }

    return () => clearInterval(lightInterval);
  }, [power]);

  return (
    <Box sx={{ width: "7vw", height: "7vw" }}>
      <Light on={on} />
    </Box>
  );
};

export default Bulb;
