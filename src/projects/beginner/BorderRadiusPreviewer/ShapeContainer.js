import { Box, Slide, Typography } from "@mui/material";
import { useState } from "react";
import CopyBox from "./CopyBox";
import InputContainer from "./InputContainer";
import SimpleSlideContainer from "./SimpleSlideContainer";
import SlideContainer from "./SlideContainer";

const boxStyle = {
  minWidth: "300px",
  minHeight: "300px",
  width: "35vw",
  height: "35vw",
  backgroundColor: "warning.main",
  mt: 2,
  borderRadius: 2,
};

const slideStyle = {
  width: "350px",
  height: "350px",
  backgroundColor: "warning.main",
  mt: 2,
  borderRadius: 2,
  position: "relative",
};

const ShapeContainer = ({ variant }) => {
  const [ulu, setUlu] = useState(0);
  const [uru, setUru] = useState(0);
  const [lll, setLll] = useState(0);
  const [lrl, setLrl] = useState(0);
  const [ull, setUll] = useState(0);
  const [llu, setLlu] = useState(0);
  const [url, setUrl] = useState(0);
  const [lru, setLru] = useState(0);
  const [show, setShow] = useState(false);

  const copyStyle = {
    minWidth: "300px",
    width: variant === "slide" ? "350px" : "35vw",
    backgroundColor: "warning.main",
    mt: 2,
    borderRadius: 2,
    p: 1,
  };

  const borderRadius = `${ulu || 0}% ${uru || 0}% ${lrl || 0}% ${lll || 0}% / ${
    ull || 0
  }% ${url || 0}% ${lru || 0}% ${llu || 0}%`;

  return (
    <Box sx={variant === "slide" ? slideStyle : boxStyle}>
      {variant === "input" && (
        <InputContainer
          setUlu={setUlu}
          setUru={setUru}
          setLll={setLll}
          setLrl={setLrl}
          setUll={setUll}
          setLlu={setLlu}
          setUrl={setUrl}
          setLru={setLru}
          borderRadius={borderRadius}
          ulu={ulu}
          uru={uru}
          lll={lll}
          lrl={lll}
          ull={ull}
          llu={llu}
          url={url}
          lru={lru}
        />
      )}
      {variant === "slide" && (
        <SlideContainer
          setUlu={setUlu}
          setUru={setUru}
          setLll={setLll}
          setLrl={setLrl}
          setUll={setUll}
          setLlu={setLlu}
          setUrl={setUrl}
          setLru={setLru}
          borderRadius={borderRadius}
          ulu={ulu}
          uru={uru}
          lll={lll}
          lrl={lrl}
          ull={ull}
          llu={llu}
          url={url}
          lru={lru}
        />
      )}
      {variant === "simple" && (
        <SimpleSlideContainer
          setUlu={setUlu}
          setUru={setUru}
          setLll={setLll}
          setLrl={setLrl}
          setUll={setUll}
          setLlu={setLlu}
          setUrl={setUrl}
          setLru={setLru}
          borderRadius={borderRadius}
          ulu={ulu}
          lrl={lrl}
          llu={llu}
          url={url}
        />
      )}
      <CopyBox
        copyStyle={copyStyle}
        borderRadius={borderRadius}
        setShow={setShow}
      />
      <Slide direction="right" in={show} mountOnEnter unmountOnExit>
        <Box
          sx={{
            minWidth: "300px",
            width: variant === "slide" ? "350px" : "35vw",
            backgroundColor: "warning.main",
            mt: 2,
            borderRadius: 2,
            p: 1,
          }}
        >
          <Typography align="center">Copied to clipboard</Typography>
        </Box>
      </Slide>
    </Box>
  );
};

export default ShapeContainer;
