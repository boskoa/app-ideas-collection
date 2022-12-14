import {
  alpha,
  Stack,
  styled,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { DarkContext, FilterContext, SetFilterContext } from "../../Provider";

const MyToggleButtonGroup = styled(ToggleButtonGroup, {
  shouldForwardProp: (prop) => prop !== "dark",
})(({ theme, dark }) => ({
  backgroundColor: !dark
    ? alpha("#000000", 0.55)
    : alpha(theme.palette.success.light, 0.65),
}));

const MyButton = styled(ToggleButton, {
  shouldForwardProp: (prop) => prop !== "dark",
})(({ dark }) => ({
  width: "6rem",
  textTransform: "none",
  color: !dark && "lime",
}));

const AppsMenu = () => {
  const appsFilter = useContext(FilterContext);
  const setAppsFilter = useContext(SetFilterContext);
  const dark = useContext(DarkContext);
  console.log("rendering Apps Menu");
  const handleFilter = (event, newFilter) => {
    setAppsFilter(newFilter);
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      flexGrow={1}
      overflow="hidden"
    >
      <MyToggleButtonGroup
        color="warning"
        size="small"
        exclusive
        value={appsFilter}
        onChange={handleFilter}
        dark={dark}
      >
        <MyButton color="primary" value="beginner" dark={dark}>
          <Typography variant="body2" overflow="hidden">
            Beginner
          </Typography>
        </MyButton>
        <MyButton value="intermediate" dark={dark}>
          <Typography variant="body2" overflow="hidden">
            Intermediate
          </Typography>
        </MyButton>
        <MyButton color="error" value="advanced" dark={dark}>
          <Typography variant="body2" overflow="hidden">
            Advanced
          </Typography>
        </MyButton>
      </MyToggleButtonGroup>
    </Stack>
  );
};

export default AppsMenu;
