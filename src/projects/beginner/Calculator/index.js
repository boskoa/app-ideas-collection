/* eslint-disable indent */
import styled from "@emotion/styled";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { apps } from "../../../applications";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.calc.light,
  width: "310px",
  margin: 20,
}));

const Calculator = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [operation, setOperation] = useState("");
  const [entered, setEntered] = useState(false);
  const [prefix, setPrefix] = useState(false);
  const [point, setPoint] = useState(false);
  const [power, setPower] = useState(true);
  const [decPlaces, setDecPlaces] = useState(0);

  const enterNum = (prev, cur) => {
    if (!entered) {
      let point = 0;
      if (prev.includes(".")) {
        const arr = prev.split(".");
        point++;
        console.log("DECPLACES", decPlaces);
        if (arr[1].length > 2) {
          return prev;
        }
      }
      if (prev.length < 8 - point) {
        return prev + cur;
      } else {
        return prev;
      }
    } else {
      setEntered(false);
      return cur;
    }
  };

  const calculate = () => {
    switch (operation) {
      case "+":
        console.log("PLOS");
        return (Number(second) + Number(first)).toFixed(decPlaces);
      case "-":
        console.log("MINUS", first, second);
        return (Number(second) - Number(first)).toFixed(decPlaces);
      case "×":
        return (Number(second) * Number(first)).toFixed(decPlaces);
      case "÷":
        return (Number(second) / Number(first)).toFixed(decPlaces);
      default:
        return "err";
    }
  };

  const handleOperation = (op) => {
    setPoint(false);
    if (operation) {
      const result = calculate();
      setFirst(result);
      console.log("FIRST", first, op, second);
      setSecond(result);
      setOperation(op);
      console.log("FIRST AGAIN", first, second);
    } else {
      setSecond(first);
      setOperation;
      setEntered(true);
      setOperation(op);
    }
  };

  const handleEquals = () => {
    setFirst(calculate());
    setSecond("");
    setOperation("");
  };

  const handleClear = () => {
    setFirst("");
    setSecond("");
    setOperation("");
    setEntered(false);
    setPrefix(false);
    setPoint(false);
    setDecPlaces(0);
  };

  const handlePrefix = () => {
    if (first === "") {
      return null;
    }
    setPrefix((prev) => !prev);
    if (prefix) {
      setFirst((prev) => "-" + prev);
    } else {
      setFirst((prev) => prev.substring(1));
    }
  };

  const handlePoint = () => {
    if (!point) {
      setFirst((prev) => enterNum(prev, "."));
      setPoint(true);
    }
  };

  const app = apps[2];

  useEffect(() => {
    if (point) {
      const arr = first.split(".");
      if (arr[1]?.length > decPlaces) {
        setDecPlaces(arr[1].length);
      }
    }
    console.log("DECIMALE", decPlaces);
  }, [first]);

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
        <Typography align="center" variant="h4" gutterBottom>
          {app.name}
        </Typography>
        <StyledPaper sx={{ boxShadow: power && "0px 0px 20px 5px #2cfa1f" }}>
          <Stack>
            <Box
              sx={{
                color: "#2cfa1f",
                backgroundColor: "calc.dark",
                m: 2,
                height: 40,
                boxShadow:
                  power && "inset 0px 0px 10px 1px rgba(44,250,31,0.1)",
                border: "0.8px groove rgba(0,0,0,0.1)",
                borderRadius: "2px",
              }}
            >
              {power && (
                <Typography align="right" sx={{ mr: 1, mt: 1, mb: 1 }}>
                  {first || "0"}
                </Typography>
              )}
            </Box>
            <Stack sx={{ m: 2 }} spacing={1}>
              <Stack direction="row" spacing={1}>
                <Button
                  size="small"
                  variant="contained"
                  color="calc"
                  onClick={() => setFirst("")}
                >
                  C
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="calc"
                  onClick={handleClear}
                >
                  AC
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="calc"
                  onClick={handlePrefix}
                >
                  +/-
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="calc"
                  onClick={() => setPower((prev) => !prev)}
                >
                  ON/OFF
                </Button>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Button
                  size="small"
                  variant="contained"
                  color="calc"
                  onClick={() => setFirst((prev) => enterNum(prev, "7"))}
                >
                  <Typography>7</Typography>
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="calc"
                  onClick={() => setFirst((prev) => enterNum(prev, "8"))}
                >
                  <Typography>8</Typography>
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="calc"
                  onClick={() => setFirst((prev) => enterNum(prev, "9"))}
                >
                  <Typography>9</Typography>
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="calc"
                  onClick={() => handleOperation("÷")}
                >
                  <Typography>÷</Typography>
                </Button>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Button
                  size="small"
                  variant="contained"
                  color="calc"
                  onClick={() => setFirst((prev) => enterNum(prev, "4"))}
                >
                  <Typography>4</Typography>
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="calc"
                  onClick={() => setFirst((prev) => enterNum(prev, "5"))}
                >
                  <Typography>5</Typography>
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="calc"
                  onClick={() => setFirst((prev) => enterNum(prev, "6"))}
                >
                  <Typography>6</Typography>
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="calc"
                  onClick={() => handleOperation("×")}
                >
                  <Typography>×</Typography>
                </Button>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Button
                  size="small"
                  variant="contained"
                  color="calc"
                  onClick={() => setFirst((prev) => enterNum(prev, "1"))}
                >
                  <Typography>1</Typography>
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="calc"
                  onClick={() => setFirst((prev) => enterNum(prev, "2"))}
                >
                  <Typography>2</Typography>
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="calc"
                  onClick={() => setFirst((prev) => enterNum(prev, "3"))}
                >
                  <Typography>3</Typography>
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="calc"
                  onClick={() => handleOperation("-")}
                >
                  <Typography>-</Typography>
                </Button>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Button
                  size="small"
                  variant="contained"
                  color="calc"
                  onClick={() =>
                    setFirst((prev) =>
                      prev === "0" || prev === "" ? "" : enterNum(prev, "0")
                    )
                  }
                >
                  <Typography>0</Typography>
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="calc"
                  onClick={handlePoint}
                >
                  <Typography>.</Typography>
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="calc"
                  onClick={handleEquals}
                >
                  <Typography>=</Typography>
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="calc"
                  onClick={() => handleOperation("+")}
                >
                  <Typography>+</Typography>
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </StyledPaper>
      </Stack>
    </Box>
  );
};

export default Calculator;
