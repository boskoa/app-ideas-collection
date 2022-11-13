import { Slide, Typography } from "@mui/material";

const InfoBox = ({ text, color, on }) => {
  return (
    <Slide
      sx={{
        position: "absolute",
        left: 15,
        bottom: 10,
        zIndex: 2,
        backgroundColor: color,
        p: 2,
        borderRadius: "10px",
      }}
      direction="right"
      in={on}
      mountOnEnter
      unmountOnExit
    >
      <Typography>{text}</Typography>
    </Slide>
  );
};

export default InfoBox;
