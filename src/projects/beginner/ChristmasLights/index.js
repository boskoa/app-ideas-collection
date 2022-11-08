import { Box, Stack, Switch, Typography } from "@mui/material";
import { useState } from "react";
import { apps } from "../../../applications";
import Bulb from "./Bulb";

const ChristmasLights = () => {
  const [power, setPower] = useState(false);
  const [time, setTime] = useState(2000);
  const [bulbs, setBulbs] = useState(7);
  console.log(setTime, setBulbs);

  const app = apps[3];

  return (
    <Box
      sx={{
        mt: "3%",
        ml: "5%",
        mb: "3%",
        mr: "5%",
        paddingTop: 1,
        paddingBottom: 1,
        minHeight: "70vh",
        borderRadius: 5,
      }}
    >
      <Stack sx={{ m: 2 }} alignItems="center">
        <Typography
          align="center"
          variant="h4"
          gutterBottom
          sx={{ textShadow: "0px 0px 20px" }}
        >
          {app.name}
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          spacing={2}
          sx={{ mt: 5, mb: 5 }}
        >
          {[...Array(bulbs).keys()].map((p) => (
            <Bulb key={p} position={p} power={power} time={time} />
          ))}
        </Stack>
        <Stack direction="row" alignItems="center">
          <Typography variant="body2">off</Typography>
          <Switch
            size="large"
            color="error"
            value={power}
            onClick={() => setPower((prev) => !prev)}
          />
          <Typography variant="body2">on</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ChristmasLights;
