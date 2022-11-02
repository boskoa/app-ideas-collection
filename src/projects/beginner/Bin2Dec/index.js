import { Box, Stack, Typography } from "@mui/material";
import { apps } from "../../../applications";
import BinaryInput from "./BinaryInput";

const Bin2Dec = () => {
  const app = apps[0];

  return (
    <Box
      sx={{
        mt: "3%",
        ml: "5%",
        mb: "3%",
        mr: "5%",
        paddingTop: 1,
        paddingBottom: 1,
        backgroundColor: "success.dark",
        minHeight: "70vh",
        borderRadius: 5,
      }}
    >
      <Stack sx={{ m: 2 }} alignItems="center">
        <Typography align="center" variant="h4" gutterBottom>
          {app.name}
        </Typography>
        <Typography variant="body1">{app.description}</Typography>
        <BinaryInput />
      </Stack>
    </Box>
  );
};

export default Bin2Dec;
