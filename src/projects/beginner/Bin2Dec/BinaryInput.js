import {
  Box,
  Button,
  Slide,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { converter, validator } from "./converter";

const BinaryInput = () => {
  const [binary, setBinary] = useState("");
  const [error, setError] = useState("");
  const [decimal, setDecimal] = useState();
  const [checked, setChecked] = useState(false);

  const handleBinary = (e) => {
    setError(validator(e.target.value));
    setBinary(e.target.value);
  };

  const handleConvert = () => {
    if (!error) {
      setDecimal(converter(binary));
      setChecked(true);
    }
  };

  console.log("DECIMAL", decimal);

  console.log("BINARY", binary), setError;

  return (
    <Stack sx={{ mt: 2 }} alignItems="center">
      <Box
        sx={{
          width: "90%",
          maxWidth: "20rem",
        }}
        overflow="hidden"
      >
        <TextField
          sx={{ mt: "8px" }}
          error={Boolean(error)}
          label="Binary number"
          fullWidth
          type="text"
          value={binary}
          placeholder="Enter a binary number (max 8 digits long)"
          onChange={handleBinary}
          helperText={error}
          onFocus={() => setChecked(false)}
        />
        <Button
          sx={{ mt: 2 }}
          disabled={Boolean(error)}
          onClick={handleConvert}
        >
          Convert
        </Button>
      </Box>
      <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        <Button
          sx={{ mt: 2, pointerEvents: "none" }}
          color="warning"
          variant="contained"
        >
          <Typography variant="body1">
            Converted number is: {decimal}
          </Typography>
        </Button>
      </Slide>
    </Stack>
  );
};

export default BinaryInput;
