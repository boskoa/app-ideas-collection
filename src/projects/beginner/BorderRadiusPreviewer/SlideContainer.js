import { Slider, Stack } from "@mui/material";
import Shape from "./Shape";

const SlideContainer = ({
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
  uru,
  lll,
  lrl,
  ull,
  llu,
  url,
  lru,
}) => {
  return (
    <Stack
      alignItems="center"
      justifyContent="space-between"
      sx={{ height: "100%", width: "100%" }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
        sx={{ width: "77%", height: "15%", position: "relative" }}
      >
        <Slider
          value={ulu}
          size="small"
          sx={{ position: "absolute", top: 0, right: 18 }}
          color="info"
          onChange={(e) => setUlu(e.target.value)}
        />
        <Slider
          value={Math.abs(uru - 100)}
          size="small"
          sx={{ position: "absolute", left: 1, bottom: 5 }}
          color="success"
          track="inverted"
          onChange={(e) => setUru(Math.abs(e.target.value - 100))}
        />
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ width: "100%", flexGrow: 3, position: "relative" }}
      >
        <Stack
          justifyContent="space-between"
          alignItems="flex-end"
          sx={{ width: "15%" }}
        >
          <Slider
            value={llu}
            orientation="vertical"
            size="small"
            color="error"
            sx={{ position: "absolute", left: 10, top: 4 }}
            onChange={(e) => setLlu(e.target.value)}
          />
          <Slider
            value={Math.abs(ull - 100)}
            orientation="vertical"
            size="small"
            sx={{ position: "absolute", left: -5, top: -15 }}
            color="info"
            track="inverted"
            onChange={(e) => setUll(Math.abs(e.target.value - 100))}
          />
        </Stack>
        <Shape borderRadius={borderRadius} />
        <Stack
          justifyContent="space-between"
          alignItems="flex-start"
          sx={{ width: "15%", position: "relative" }}
        >
          <Slider
            value={Math.abs(url - 100)}
            orientation="vertical"
            size="small"
            sx={{ position: "absolute", right: 10, bottom: 3 }}
            color="success"
            track="inverted"
            onChange={(e) => setUrl(Math.abs(e.target.value - 100))}
          />
          <Slider
            value={lru}
            orientation="vertical"
            size="small"
            sx={{ position: "absolute", left: 18, top: 17 }}
            color="primary"
            onChange={(e) => setLru(e.target.value)}
          />
        </Stack>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ width: "77%", height: "15%", position: "relative" }}
      >
        <Slider
          value={Math.abs(lrl - 100)}
          size="small"
          sx={{ position: "absolute", bottom: 1, left: 15 }}
          color="primary"
          track="inverted"
          onChange={(e) => setLrl(Math.abs(e.target.value - 100))}
        />
        <Slider
          value={lll}
          size="small"
          sx={{ position: "absolute", top: 5, right: 3 }}
          color="error"
          onChange={(e) => setLll(e.target.value)}
        />
      </Stack>
    </Stack>
  );
};

export default SlideContainer;
