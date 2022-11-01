import InputBase from "@mui/material/InputBase";
import { alpha } from "@mui/material/styles";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { memo, useContext } from "react";
import { SearchContext, SetSearchContext } from "../../Provider";

const MySearch = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginBottom: 5,
  marginTop: 5,
  width: "100%",
  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(1),
    marginBottom: 0,
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    height: "14px",
    [theme.breakpoints.up("md")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Search = () => {
  const searchFilter = useContext(SearchContext);
  const setSearchFilter = useContext(SetSearchContext);
  console.log("rendering search");
  return (
    <Box width="100%">
      <MySearch>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value.toLowerCase())}
        />
      </MySearch>
    </Box>
  );
};

export default memo(Search);
