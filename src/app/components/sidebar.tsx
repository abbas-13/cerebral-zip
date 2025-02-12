import {
  Avatar,
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupIcon from "@mui/icons-material/Group";
import CampaignIcon from "@mui/icons-material/Campaign";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import PeopleIcon from "@mui/icons-material/People";
import Image from "next/image";

import Logo from "../../../public/assets/logo_pR.png";

export const Sidebar = () => {
  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon sx={{ height: "20px" }} /> },
    { text: "Campaigns", icon: <CampaignIcon sx={{ height: "20px" }} /> },
    {
      text: "Integrations",
      icon: <IntegrationInstructionsIcon sx={{ height: "20px" }} />,
    },
    { text: "Customers", icon: <PeopleIcon sx={{ height: "20px" }} /> },
  ];

  return (
    <div className="flex flex-col justify-between">
      <Box sx={{ overflow: "auto" }}>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <Image src={Logo} height={35} width={35} alt="logo" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    fontFamily: "Lato, sans-serif",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                  }}
                >
                  Salesway
                </Typography>
              }
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon sx={{ height: "20px" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    fontFamily: "Lato, sans-serif",
                    fontSize: "0.9rem",
                  }}
                >
                  Settings
                </Typography>
              }
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <GroupIcon sx={{ height: "20px" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    fontFamily: "Lato, sans-serif",
                    fontSize: "0.9rem",
                  }}
                >
                  Team
                </Typography>
              }
            />
          </ListItemButton>
          <Divider sx={{ marginY: "1rem" }} />
          {menuItems.map((item) => (
            <ListItemButton key={item.text}>
              <ListItemIcon
                sx={{
                  "&.MuiListItemIcon-root": {
                    minWidth: "auto",
                    marginRight: "1rem",
                  },
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    sx={{ fontFamily: "Lato, sans-serif", fontSize: "0.9rem" }}
                  >
                    {item.text}
                  </Typography>
                }
              />
            </ListItemButton>
          ))}
        </List>
      </Box>
      <div className="flex gap-2 p-2 items-center">
        <Avatar
          alt="cory wong"
          sx={{ width: 40, height: 40 }}
          src="/assets/cory wong.jpg"
        />
        <Typography
          sx={{
            fontFamily: "Lato, sans-serif",
            fontSize: "0.9rem",
          }}
        >
          Cory Wong
        </Typography>
      </div>
    </div>
  );
};
