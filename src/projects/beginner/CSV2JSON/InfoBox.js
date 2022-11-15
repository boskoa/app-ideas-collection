import { Slide, Typography } from "@mui/material";

const InfoBox = ({ text, color, on }) => {
  return (
    <Slide
      sx={{
        position: "absolute",
        left: 15,
        bottom: 10,
        zIndex: 2,
        color: color,
        p: 2,
        border: 1,
        borderColor: color,
        borderRadius: "10px",
        boxShadow: 5,
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
