import { TextField } from "@mui/material";
import { useState } from "react";

const AmountInput = ({ amount, setAmount }) => {
  const [error, setError] = useState(false);

  return (
    <TextField
      error={error}
      sx={{ width: "10em", m: 1 }}
      size="small"
      value={amount}
      max={10000000000000}
      label={error ? "Incorrect entry" : "Amount"}
      onChange={(e) => {
        if (isNaN(e.target.value)) {
          setError(true);
        } else if (e.target.value.length > 14) {
          return null;
        } else {
          setError(false);
          setAmount(Number(e.target.value));
        }
      }}
    />
  );
};

export default AmountInput;
