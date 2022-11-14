import { Button, Modal, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { apps } from "../../../applications";
import InfoBox from "./InfoBox";
import useJ2C from "./useJ2C";

const JSON2CSV = () => {
  const { json, setJson, csv, setCsv, error, setError, clicked, setClicked } =
    useJ2C();
  const [on, setOn] = useState(false);
  const [text, setText] = useState("");
  const [color, setColor] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [file, setFile] = useState(null);
  const linkRef = useRef(null);

  const app = apps[5];

  const handleCopy = () => {
    navigator.clipboard.writeText(csv);
    setText("Copied!");
    setColor("success.dark");
    setOn(true);
    const index = setTimeout(() => {
      setOn(false);
    }, 3000);
    return () => clearTimeout(index);
  };

  const handleOpen = (e) => {
    if (!e.target.files) {
      setError("No file selected");
      return;
    }

    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsText(e.target.files[0]);
      reader.onload = function () {
        try {
          JSON.parse(reader.result);
        } catch (err) {
          setError(err.message);
          setOpenModal(false);
          const index = setTimeout(() => setError(""), 3500);
          return () => clearTimeout(index);
        }
        setFile(reader.result);
      };

      reader.onerror = function () {
        setError(reader.error);
      };
    }

    return;
  };

  const handleSave = () => {
    if (!csv.length) {
      setError("No CSV to save");
      const index = setTimeout(() => setError(""), 3500);
      return () => clearTimeout(index);
    }
    const blob = new Blob([csv], { type: "text/plain;charset=utf-8" });
    linkRef.current.href = URL.createObjectURL(blob);
    linkRef.current.download = "sample.txt";
  };

  useEffect(() => {
    if (error) {
      setText(error);
      setColor("error.dark");
      setOn(true);
      const index = setTimeout(() => {
        setOn(false);
      }, 3000);
      return () => clearTimeout(index);
    }
  }, [error]);

  return (
    <Stack sx={{ m: 1, position: "relative", height: "85vh" }}>
      <InfoBox text={text} color={color} on={on} />
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Stack
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 200,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            gap: 2,
          }}
        >
          <Button variant="contained" component="label">
            <Typography>Select file</Typography>
            <input onChange={handleOpen} type="file" hidden />
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setJson(file);
              setOpenModal(false);
            }}
          >
            <Typography>Open</Typography>
          </Button>
        </Stack>
      </Modal>
      <Typography align="center" variant="h4" gutterBottom>
        {app.name}
      </Typography>
      <Typography sx={{ m: 2 }} variant="body1" gutterBottom>
        {app.description}
      </Typography>
      <Stack
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "center", sm: "start" },
          justifyContent: { xs: "start", sm: "center" },
          mt: 2,
        }}
      >
        <TextField
          multiline
          value={json}
          onChange={(e) => setJson(e.target.value)}
          label="JSON"
          minRows={6}
          maxRows={10}
          placeholder="Enter JSON"
        />
        <Stack
          direction={{ xs: "row", sm: "column" }}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          sx={{
            ml: 1,
            mr: 1,
            mt: { xs: 1, sm: 0 },
            mb: { xs: 1, sm: 0 },
            gap: "4px",
          }}
        >
          <Button
            sx={{ width: 20 }}
            variant="outlined"
            size="small"
            onClick={() => setClicked(!clicked)}
          >
            Convert
          </Button>
          <Button
            sx={{ width: 20 }}
            variant="outlined"
            size="small"
            onClick={handleCopy}
          >
            Copy
          </Button>
          <Button
            sx={{ width: 20 }}
            variant="outlined"
            size="small"
            onClick={handleSave}
          >
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              ref={linkRef}
            >
              Save
            </a>
          </Button>
          <Button
            sx={{ width: 20 }}
            variant="outlined"
            size="small"
            onClick={() => setOpenModal(true)}
          >
            Open
          </Button>
          <Button
            sx={{ width: 20 }}
            variant="outlined"
            size="small"
            onClick={() => {
              setCsv("");
              setJson("");
            }}
          >
            Clear
          </Button>
        </Stack>
        <TextField multiline value={csv} label="CSV" minRows={6} maxRows={10} />
      </Stack>
    </Stack>
  );
};

export default JSON2CSV;
