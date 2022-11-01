import { useContext } from "react";
import { FilterContext } from "../Provider";

const Dufus = () => {
  const { appsFilter } = useContext(FilterContext);
  console.log("HAI", appsFilter);
  return <div>HAI</div>;
};

export default Dufus;
