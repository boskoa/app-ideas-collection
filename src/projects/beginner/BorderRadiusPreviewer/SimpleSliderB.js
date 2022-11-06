import styled from "@emotion/styled";
import { IconButton, Stack } from "@mui/material";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import { useRef } from "react";

const Slider = styled(Stack)(() => ({
  width: "104%",
  position: "absolute",
  bottom: -6,
  left: "-1.8%",
  flexDirection: "row",
  justifyContent: "end",
}));

const SimpleSliderB = ({ setA, setB }) => {
  const sliderRef = useRef();
  const thumbRef = useRef();
  const diff = useRef();

  const getPercentage = (current, max) => {
    return (96 * current) / max;
  };
  const getLeft = (percentage) => `calc(${percentage}%)`;

  const handleMouseDown = (event) => {
    diff.current =
      event.clientX - thumbRef.current.getBoundingClientRect().right;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event) => {
    let newX =
      sliderRef.current.getBoundingClientRect().right -
      diff.current -
      event.clientX;

    const end = 0;
    const start = sliderRef.current.offsetWidth - thumbRef.current.offsetWidth;
    if (newX > start) {
      newX = start;
    }
    if (newX < end) {
      newX = end;
    }
    const newPercentage = getPercentage(newX, start);
    thumbRef.current.style.right = getLeft(newPercentage);
    const newAxis = Math.round(newPercentage + (4 * newPercentage) / 100);
    setA(newAxis);
    setB(100 - newAxis);
  };

  return (
    <Slider ref={sliderRef} onMouseDown={handleMouseDown}>
      <IconButton
        ref={thumbRef}
        size="small"
        sx={{
          height: 10,
          width: 10,
          zIndex: 3,
        }}
      >
        <TripOriginIcon color="success" />
      </IconButton>
    </Slider>
  );
};

export default SimpleSliderB;
