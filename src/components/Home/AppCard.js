import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { memo } from "react";
import AppLink from "./AppLink";

const AppCard = ({ app }) => {
  return (
    <Card
      sx={{
        maxWidth: 275,
        m: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent sx={{ flexGrow: 2 }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Level: {app.level}
        </Typography>
        <Typography variant="h5" component="div" gutterBottom>
          {app.name}
        </Typography>
        <Typography variant="body2">{app.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <AppLink name={app.name} />
        </Button>
      </CardActions>
    </Card>
  );
};

export default memo(AppCard);
