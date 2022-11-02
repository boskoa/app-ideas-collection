import { Box } from "@mui/material";

const Shape = ({ ulu, uru, ull, llu, url, lru, lll, lrl }) => {
  const boxStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "error.main",
    borderRadius: `${ulu}% ${uru}% ${lll}% ${lrl}% / ${ull}% ${url}% ${lru}% ${llu}%`,
  };
  console.log("rendering shape", boxStyle.borderRadius);
  return <Box sx={boxStyle}></Box>;
};

export default Shape;
