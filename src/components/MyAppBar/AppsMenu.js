import { Button, Stack, styled, Typography } from "@mui/material";

const MyButton = styled(Button)(() => ({
  width: "6rem",
  textTransform: "none",
  margin: 4,
  color: "white",
}));

const AppsMenu = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      flexGrow={1}
      overflow="hidden"
    >
      <MyButton variant="contained" color="success" size="small">
        <Typography variant="body2" overflow="hidden">
          Beginner
        </Typography>
      </MyButton>
      <MyButton variant="contained" color="warning" size="small">
        <Typography variant="body2" overflow="hidden">
          Intermediate
        </Typography>
      </MyButton>
      <MyButton variant="contained" color="error" size="small">
        <Typography variant="body2" overflow="hidden">
          Advanced
        </Typography>
      </MyButton>
    </Stack>
  );
};

export default AppsMenu;
