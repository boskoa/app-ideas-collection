import { Stack } from "@mui/material";
import Shape from "./Shape";
import { useEffect } from "react";
import SimpleSliderA from "./SimpleSliderA";
import SimpleSliderB from "./SimpleSliderB";
import SimpleSliderC from "./SimpleSliderC";
import SimpleSliderD from "./SimpleSliderD";

const SimpleSlideContainer = ({
  setUlu,
  setUru,
  setLll,
  setLrl,
  setUll,
  setLlu,
  setUrl,
  setLru,
  borderRadius,
  ulu,
  lrl,
  llu,
  url,
}) => {
  useEffect(() => {
    setUru(100 - ulu);
    setLll(100 - lrl);
    setUll(100 - llu);
    setLru(100 - url);
  }, []);

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100%", width: "100%" }}
    >
      <Stack
        sx={{
          width: "90%",
          height: "90%",
          position: "relative",
          border: "1px dotted black",
        }}
      >
        <SimpleSliderA setA={setUlu} setB={setUru} />
        <SimpleSliderC setA={setUll} setB={setLlu} />
        <Shape borderRadius={borderRadius} />
        <SimpleSliderD setA={setUrl} setB={setLru} />
        <SimpleSliderB setA={setLrl} setB={setLll} />
      </Stack>
    </Stack>
  );
};

export default SimpleSlideContainer;
