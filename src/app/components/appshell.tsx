import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupIcon from "@mui/icons-material/Group";
import CampaignIcon from "@mui/icons-material/Campaign";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import PeopleIcon from "@mui/icons-material/People";
import { ReactNode } from "react";

const DRAWER_WIDTH = 240;

interface AppshelProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppshelProps) {
  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "Settings", icon: <SettingsIcon /> },
    { text: "Team", icon: <GroupIcon /> },
    { text: "Campaigns", icon: <CampaignIcon /> },
    { text: "Integrations", icon: <IntegrationInstructionsIcon /> },
    { text: "Customers", icon: <PeopleIcon /> },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
            backgroundColor: "#f8f9fa",
          },
        }}
      >
        <Box sx={{ overflow: "auto", mt: 2 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "white" }}
      >
        {children}
      </Box>
    </Box>
  );
}
