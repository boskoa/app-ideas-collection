import { Stack } from "@mui/material";
import { useContext } from "react";
import { FilterContext, SearchContext } from "../../Provider";
import { apps } from "../../applications";
import AppCard from "./AppCard";

const Home = () => {
  const appsFilter = useContext(FilterContext);
  const searchFilter = useContext(SearchContext);

  const filteredApps = !appsFilter
    ? apps
    : apps.filter((a) => a.level === appsFilter);

  const searchedApps = !searchFilter
    ? filteredApps
    : filteredApps.filter((f) => f.name.toLowerCase().includes(searchFilter));

  return (
    <Stack direction="row" flexWrap="wrap">
      {searchedApps.map((a) => (
        <AppCard key={a.id} app={a}></AppCard>
      ))}
    </Stack>
  );
};

export default Home;
