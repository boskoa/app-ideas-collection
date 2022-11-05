import {
  Button,
  Slide,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { apps } from "../../../applications";
import ShapeContainer from "./ShapeContainer";

const BorderRadiusPreviewer = () => {
  const [menu, setMenu] = useState(false);
  const [variant, setVariant] = useState("slide");
  console.log(setVariant, variant);
  const app = apps[1];

  return (
    <Stack alignItems="center" sx={{ position: "relative" }}>
      <Slide
        sx={{ position: "absolute", left: 1, top: 150, zIndex: 2 }}
        direction="right"
        in={menu}
        mountOnEnter
        unmountOnExit
      >
        <ToggleButtonGroup
          orientation="vertical"
          color="primary"
          exclusive
          value={variant}
          onChange={(e, n) => {
            if (n !== null) setVariant(n);
          }}
        >
          <ToggleButton value="input">Input</ToggleButton>
          <ToggleButton value="slide">Slide</ToggleButton>
          <ToggleButton value="simple">Simple</ToggleButton>
        </ToggleButtonGroup>
      </Slide>
      <Typography align="center" variant="h4" gutterBottom>
        {app.name}
      </Typography>
      <Typography variant="body1">
        {app.description}{" "}
        <Button sx={{ textTransform: "none" }} onClick={() => setMenu(!menu)}>
          Set variant
        </Button>
      </Typography>
      <ShapeContainer variant={variant} />
    </Stack>
  );
};

export default BorderRadiusPreviewer;
