import styled from "@emotion/styled";
import { IconButton, Stack } from "@mui/material";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import { useRef } from "react";

const Slider = styled(Stack)(() => ({
  height: "105%",
  position: "absolute",
  top: -9,
  right: "-2%",
}));

const SimpleSliderD = ({ setA, setB }) => {
  const sliderRef = useRef();
  const thumbRef = useRef();
  const diff = useRef();

  const getPercentage = (current, max) => (96 * current) / max;
  const getLeft = (percentage) => `calc(${percentage}%)`;

  const handleMouseDown = (event) => {
    diff.current =
      event.clientY - thumbRef.current.getBoundingClientRect().bottom;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event) => {
    let newY =
      event.clientY -
      sliderRef.current.getBoundingClientRect().top -
      diff.current;

    const end = 0;
    const start =
      sliderRef.current.offsetHeight - thumbRef.current.offsetHeight;
    if (newY > start) {
      newY = start;
    }
    if (newY < end) {
      newY = end;
    }
    const newPercentage = getPercentage(newY, start);
    thumbRef.current.style.top = getLeft(newPercentage);
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
        <TripOriginIcon color="info" />
      </IconButton>
    </Slider>
  );
};

export default SimpleSliderD;
