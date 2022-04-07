import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

interface IUserProps {
  id: number;
  name: string,
  username?: string,
  email?: string
};

const UserCard: React.FC<IUserProps> = ({ name }) => (
  <Card
    sx={{
      position: "relative",
      width: { md: "calc(33.33% - 20px)", sm: "calc(50% - 20px)", xs: "100%" },
      margin: "20px 0 0 20px"
    }}
  >
    <IconButton aria-label="settings" sx={{ position: "absolute", right: 0 }}>
      <MoreVertIcon />
    </IconButton>
    <CardContent sx={{ padding: "20px" }}>
      <Avatar
        area-label="user"
        sx={{
          width: "50%",
          height: "50%",
          margin: "auto",
          aspectRatio: "1 / 1",
        }} />
      <Typography textAlign="center" mt={1} variant="body2" color="text.secondary">
        {name}
      </Typography>
    </CardContent>
  </Card>
);

export default UserCard;
