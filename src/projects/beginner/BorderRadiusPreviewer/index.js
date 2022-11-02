import { Stack, Typography } from "@mui/material";
import { apps } from "../../../applications";
import ShapeContainer from "./ShapeContainer";

const BorderRadiusPreviewer = () => {
  const app = apps[1];

  return (
    <Stack alignItems="center">
      <Typography align="center" variant="h4" gutterBottom>
        {app.name}
      </Typography>
      <Typography variant="body1">{app.description}</Typography>
      <ShapeContainer />
    </Stack>
  );
};

export default BorderRadiusPreviewer;
