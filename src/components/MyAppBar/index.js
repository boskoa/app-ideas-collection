import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppsMenu from "./AppsMenu";
import ThemeSwitch from "./ThemeSwitch";
import { useContext } from "react";
import { DarkContext } from "../../Provider";
import { IconButton, Stack } from "@mui/material";
import styled from "@emotion/styled";
import Search from "./Search";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const MyToolbar = styled(Toolbar, {
  shouldForwardProp: (prop) => prop !== "dark",
})(({ theme, dark }) => ({
  backgroundColor: dark
    ? theme.palette.success.dark
    : theme.palette.success.light,
  justifyContent: "space-between",
  width: "100vw",
  flexWrap: "wrap-reverse",
}));

const MyStack = styled(Stack)(({ theme }) => ({
  flexGrow: 0,
  [theme.breakpoints.down("md")]: {
    flexGrow: 1,
  },
}));

const MyAppBar = () => {
  const dark = useContext(DarkContext);
  console.log("rendering MyAppBar");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <MyToolbar dark={dark}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", md: "block" } }}
            >
              App Ideas
            </Typography>
            <IconButton
              sx={{ height: "2.5rem", display: { xs: "block", md: "none" } }}
            >
              <HomeIcon />
            </IconButton>
          </Link>
          <AppsMenu />
          <MyStack direction="row" justifyContent="flex-end">
            <Search />
            <ThemeSwitch />
          </MyStack>
        </MyToolbar>
      </AppBar>
    </Box>
  );
};

export default MyAppBar;
