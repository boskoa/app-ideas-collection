import styled from "@emotion/styled";
import { Box, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Light = styled("div", {
  shouldForwardProp: (prop) =>
    prop !== "on" &&
    prop !== "color" &&
    prop !== "power" &&
    prop !== "intensity",
})(({ theme, on, color, power, intensity }) => ({
  width: "90%",
  height: "90%",
  borderRadius: "50% 50% 50% 50% / 50% 50% 50% 50%",
  backgroundColor: color,
  opacity: !power ? 0.5 : on ? 1 : 0.8,
  boxShadow: on
    ? `0px 0px ${intensity}px ${intensity / 2}px ${color}`
    : `0px 0px 0px 0px ${color}`,
  transition: `${theme.transitions.create(
    ["box-shadow", "opacity", "transform"],
    {
      duration: 500,
    }
  )}`,
}));

const colors = ["red", "cyan", "yellow", "lime", "fuchsia"];

const Bulb = ({ power, time, position, color, handleColor, id, intensity }) => {
  const [on, setOn] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    let lightInterval;
    if (power && position % 2) {
      setOn((p) => !p);
      lightInterval = setInterval(() => setOn((p) => !p), time);
    } else if (power && !(position % 2)) {
      setTimeout(() => {
        setOn((p) => !p);
        return (lightInterval = setInterval(() => setOn((p) => !p), time));
      }, time);
    } else {
      setOn(false);
    }

    return () => clearInterval(lightInterval);
  }, [power, time]);

  useEffect(() => {
    handleColor(id, colors[colorIndex]);
  }, [colorIndex]);

  return (
    <Box
      sx={{ width: "7vw", height: "7vw", m: 3 }}
      onClick={() => setColorIndex((p) => (p === 4 ? 0 : p + 1))}
    >
      <Tooltip
        title={
          <Typography variant="caption">
            Click on the bulb to change the color
          </Typography>
        }
      >
        <Light on={on} color={color} power={power} intensity={intensity} />
      </Tooltip>
    </Box>
  );
};

export default Bulb;
