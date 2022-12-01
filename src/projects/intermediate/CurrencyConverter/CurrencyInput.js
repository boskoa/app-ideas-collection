import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { symbols } from "./utils";

const CurrencyInput = ({ currency, setCurrency, label }) => {
  const symbolArray = Object.keys(symbols);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <FormControl sx={{ width: "15em", m: 1 }} size="small">
      <InputLabel id="currency-label">{label}</InputLabel>
      <Select
        labelId="currency-label"
        id="currency-select"
        value={currency}
        label="Age"
        onChange={handleChange}
      >
        {symbolArray.map((s) => (
          <MenuItem key={s} value={s}>
            <Typography variant="caption">{symbols[s]}</Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CurrencyInput;
