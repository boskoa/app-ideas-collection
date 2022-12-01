import { Button, Paper, Stack, Typography, Fade } from "@mui/material";
import { apps } from "../../../applications";
import AmountInput from "./AmountInput";
import CurrencyInput from "./CurrencyInput";
import useConvert from "./useConvert";

const CurrencyConverter = () => {
  const { from, amount, to, result, rate, setFrom, setAmount, setTo } =
    useConvert();
  const app = apps[9];

  return (
    <Stack alignItems="center">
      <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
        {app.name}
      </Typography>
      <Stack sx={{ flexDirection: { md: "row" }, mt: 5 }}>
        <Stack sx={{ m: 1, flexDirection: { sm: "row" } }}>
          <AmountInput amount={amount} setAmount={setAmount} />
          <CurrencyInput currency={from} setCurrency={setFrom} label="From" />
        </Stack>
        <Button
          variant="outlined"
          sx={{ m: 2 }}
          onClick={() => {
            const prev = from;
            setFrom(to);
            setTo(prev);
          }}
        >
          Switch
        </Button>
        <Stack sx={{ m: 1, flexDirection: { sm: "row" } }}>
          <CurrencyInput currency={to} setCurrency={setTo} label="To" />
          <AmountInput disabled amount={result} setAmount={() => {}} />
        </Stack>
      </Stack>
      <Fade in={Boolean(rate)}>
        <Paper sx={{ mt: 5, width: "15em", height: "3em", p: "0.7em" }}>
          <Typography sx={{ width: "100%", textAlign: "center" }}>
            Exchange rate is: {rate}
          </Typography>
        </Paper>
      </Fade>
    </Stack>
  );
};

export default CurrencyConverter;
