import { Box, Button, Typography } from "@mui/material";

const CopyBox = ({ borderRadius, setShow, copyStyle }) => {
  const copyToClipboard = () => {
    const copyElement = document.getElementById("borderR");

    navigator.clipboard.writeText(copyElement.firstChild.nodeValue);

    setShow(true);
    setTimeout(() => setShow(false), 2000);
  };

  return (
    <Box sx={copyStyle}>
      <Typography variant="body1" align="center" id="borderR">
        {borderRadius}
        <Button
          size="small"
          variant="outlined"
          color="error"
          sx={{ ml: "10px" }}
          onClick={copyToClipboard}
        >
          Copy style
        </Button>
      </Typography>
    </Box>
  );
};

export default CopyBox;
