import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "inherit",
}));

const AppLink = ({ name }) => {
  const appLink = name.replaceAll(" ", "-");
  return <StyledLink to={appLink}>Open app</StyledLink>;
};

export default AppLink;
