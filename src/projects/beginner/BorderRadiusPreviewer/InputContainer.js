import { Stack } from "@mui/material";
import Shape from "./Shape";

const InputContainer = ({
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
        sx={{ width: "77%", height: "15%" }}
      >
        <input
          name="ulu"
          value={ulu}
          onChange={(e) => setUlu(e.target.value)}
          size="1"
          style={{ marginBottom: "2px" }}
        />
        <input
          name="uru"
          value={uru}
          onChange={(e) => setUru(e.target.value)}
          size="1"
          style={{ marginBottom: "2px" }}
        />
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ width: "100%", flexGrow: 3 }}
      >
        <Stack
          justifyContent="space-between"
          alignItems="flex-end"
          sx={{ width: "15%" }}
        >
          <input
            name="ull"
            value={ull}
            onChange={(e) => setUll(e.target.value)}
            size="1"
            style={{ marginRight: "2px" }}
          />
          <input
            name="llu"
            value={llu}
            onChange={(e) => setLlu(e.target.value)}
            size="1"
            style={{ marginRight: "2px" }}
          />
        </Stack>
        <Shape borderRadius={borderRadius} />
        <Stack
          justifyContent="space-between"
          alignItems="flex-start"
          sx={{ width: "15%" }}
        >
          <input
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            size="1"
            style={{ marginLeft: "2px" }}
          />
          <input
            name="lru"
            value={lru}
            onChange={(e) => setLru(e.target.value)}
            size="1"
            style={{ marginLeft: "2px" }}
          />
        </Stack>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ width: "77%", height: "15%" }}
      >
        <input
          name="lll"
          value={lll}
          onChange={(e) => setLll(e.target.value)}
          size="1"
          style={{ marginTop: "2px" }}
        />
        <input
          name="lrl"
          value={lrl}
          onChange={(e) => setLrl(e.target.value)}
          size="1"
          style={{ marginTop: "2px" }}
        />
      </Stack>
    </Stack>
  );
};

export default InputContainer;
