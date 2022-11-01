import { Stack, Typography } from "@mui/material";
import { apps } from "../../../applications";
import BinaryInput from "./BinaryInput";

const Bin2Dec = () => {
  const app = apps[0];

  return (
    <Stack sx={{ m: 2 }}>
      <Typography align="center" variant="h4" gutterBottom>
        {app.name}
      </Typography>
      <Typography variant="body1">{app.description}</Typography>
      <BinaryInput />
    </Stack>
  );
};

export default Bin2Dec;
