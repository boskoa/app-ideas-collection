import { Box, Stack } from "@mui/material";
import { useState } from "react";
import Shape from "./Shape";

const boxStyle = {
  minWidth: "300px",
  minHeight: "300px",
  width: "38vw",
  height: "38vw",
  backgroundColor: "warning.main",
  mt: 2,
  borderRadius: 2,
};

const ShapeContainer = () => {
  const [ulu, setUlu] = useState(1);
  const [uru, setUru] = useState(1);
  const [lll, setLll] = useState(1);
  const [lrl, setLrl] = useState(1);
  const [ull, setUll] = useState(ulu);
  const [llu, setLlu] = useState(lrl);
  const [url, setUrl] = useState(uru);
  const [lru, setLru] = useState(lll);

  return (
    <Box sx={boxStyle}>
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
          <Shape
            ulu={ulu}
            uru={uru}
            ull={ull}
            llu={llu}
            url={url}
            lru={lru}
            lll={lll}
            lrl={lrl}
          />
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
    </Box>
  );
};

export default ShapeContainer;
