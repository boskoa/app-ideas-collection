import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "inherit",
}));

const AppLink = ({ name }) => {
  return <StyledLink to={name}>Open app</StyledLink>;
};

export default AppLink;
