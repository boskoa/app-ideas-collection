import { Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { apps } from "../../../applications";
import InfoBox from "./InfoBox";
import useJ2C from "./useJ2C";

const JSON2CSV = () => {
  const { json, setJson, csv, setCsv, error, clicked, setClicked } = useJ2C();
  const [on, setOn] = useState(false);
  const [text, setText] = useState("");
  const [color, setColor] = useState("");

  const app = apps[5];

  const handleCopy = () => {
    navigator.clipboard.writeText(csv);
    setText("Copied!");
    setColor("success.main");
    setOn(true);
    const index = setTimeout(() => {
      setOn(false);
    }, 3000);
    return () => clearTimeout(index);
  };

  useEffect(() => {
    if (error) {
      setText(error);
      setColor("error.main");
      setOn(true);
      const index = setTimeout(() => {
        setOn(false);
      }, 3000);
      return () => clearTimeout(index);
    }
  }, [error]);

  return (
    <Stack sx={{ m: 1, position: "relative", height: "85vh" }}>
      <InfoBox text={text} color={color} on={on} />
      <Typography align="center" variant="h4" gutterBottom>
        {app.name}
      </Typography>
      <Typography sx={{ m: 2 }} variant="body1" gutterBottom>
        {app.description}
      </Typography>
      <Stack
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "center", sm: "start" },
          justifyContent: { xs: "start", sm: "center" },
          mt: 2,
        }}
      >
        <TextField
          multiline
          value={json}
          onChange={(e) => setJson(e.target.value)}
          label="JSON"
          minRows={4}
          maxRows={10}
          placeholder="Enter JSON"
        />
        <Stack spacing={1} sx={{ m: 1 }}>
          <Button
            variant="outlined"
            size="small"
            onClick={() => setClicked(!clicked)}
          >
            convert
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              setCsv("");
              setJson("");
            }}
          >
            clear
          </Button>
          <Button variant="outlined" size="small" onClick={handleCopy}>
            copy
          </Button>
        </Stack>
        <TextField multiline value={csv} label="CSV" minRows={4} maxRows={10} />
      </Stack>
    </Stack>
  );
};

export default JSON2CSV;
