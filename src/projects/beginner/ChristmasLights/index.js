import {
  Box,
  Button,
  IconButton,
  Paper,
  Slide,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useEffect, useState } from "react";
import { apps } from "../../../applications";
import Bulb from "./Bulb";

const initialBulb = {
  id: 0,
  color: "red",
  interval: 2000,
  intensity: 30,
};

const ChristmasLights = () => {
  const [power, setPower] = useState(false);
  const [time, setTime] = useState(2000);
  const [quantity, setQuantity] = useState(7);
  const [bulbs, setBulbs] = useState([]);
  const [checked, setChecked] = useState(false);
  const [settings, setSettings] = useState(false);
  const [intensity, setIntensity] = useState(30);
  console.log(setTime, setQuantity);

  const app = apps[3];

  const handleColor = (id, color) => {
    setBulbs((p) => p.map((b) => (b.id !== id ? b : { ...b, color: color })));
  };

  console.log("NEWNEW", bulbs);

  useEffect(() => {
    setBulbs(
      [...Array(quantity).keys()].map((b) => ({
        ...initialBulb,
        id: b,
        interval: time,
      }))
    );
  }, [quantity]);

  useEffect(() => {
    console.log("NEWSETTINGS");
    setBulbs((p) =>
      p.map((b) => ({
        ...b,
        interval: time,
        intensity,
      }))
    );
  }, [settings]);

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
        position: "relative",
      }}
    >
      <Stack sx={{ m: 2 }} alignItems="center">
        <IconButton
          sx={{ position: "absolute", top: -10, right: -20 }}
          onClick={() => setChecked(!checked)}
        >
          <SettingsIcon />
        </IconButton>
        <Box
          sx={{
            width: 150,
            position: "absolute",
            top: 40,
            right: -20,
            zIndex: 2000,
          }}
        >
          <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
            <Paper sx={{ p: 1 }}>
              <Stack spacing={1}>
                <TextField
                  value={time / 1000}
                  onChange={(e) => setTime(Number(e.target.value) * 1000)}
                  size="small"
                  type="number"
                  label="Set interval"
                />
                <TextField
                  value={intensity / 10}
                  onChange={(e) => setIntensity(Number(e.target.value) * 10)}
                  size="small"
                  type="number"
                  label="Set intensity"
                />
                <TextField
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  size="small"
                  type="number"
                  label="Set quantity"
                  InputProps={{
                    inputProps: {
                      max: 35,
                      min: 1,
                    },
                  }}
                />
                <Button size="small" onClick={() => setSettings((p) => !p)}>
                  Set
                </Button>
              </Stack>
            </Paper>
          </Slide>
        </Box>
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
          flexWrap="wrap"
          sx={{ mt: 5, mb: 5 }}
        >
          {bulbs.map((p) => (
            <Bulb
              key={p.id}
              id={p.id}
              position={p.id}
              power={power}
              time={p.interval}
              color={p.color}
              intensity={p.intensity}
              handleColor={handleColor}
            />
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
