import { Box } from "@mui/material";

const Shape = ({ borderRadius }) => {
  const boxStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "error.main",
    borderRadius,
  };

  return <Box sx={boxStyle}></Box>;
};

export default Shape;
