import styled from "@emotion/styled";
import { IconButton, Stack } from "@mui/material";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import { useRef } from "react";

const Slider = styled(Stack)(() => ({
  width: "105%",
  position: "absolute",
  top: -6,
  left: "-1.8%",
  flexDirection: "row",
}));

const SimpleSliderA = ({ setA, setB }) => {
  const sliderRef = useRef();
  const thumbRef = useRef();
  const diff = useRef();

  const getPercentage = (current, max) => (96 * current) / max;
  const getLeft = (percentage) => `calc(${percentage}%)`;

  const handleMouseDown = (event) => {
    diff.current =
      event.clientX - thumbRef.current.getBoundingClientRect().left;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event) => {
    let newX =
      event.clientX -
      diff.current -
      sliderRef.current.getBoundingClientRect().left;

    const end = sliderRef.current.offsetWidth - thumbRef.current.offsetWidth;
    const start = 0;
    if (newX < start) {
      newX = 0;
    }
    if (newX > end) {
      newX = end;
    }
    const newPercentage = getPercentage(newX, end);
    thumbRef.current.style.left = getLeft(newPercentage);
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
        <TripOriginIcon color="primary" />
      </IconButton>
    </Slider>
  );
};

export default SimpleSliderA;
