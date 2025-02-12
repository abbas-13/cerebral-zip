import {
  Box,
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

export const Sidebar = () => {
  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "Settings", icon: <SettingsIcon /> },
    { text: "Team", icon: <GroupIcon /> },
    { text: "Campaigns", icon: <CampaignIcon /> },
    { text: "Integrations", icon: <IntegrationInstructionsIcon /> },
    { text: "Customers", icon: <PeopleIcon /> },
  ];

  return (
    <div>
      <Box sx={{ overflow: "auto" }}>
        <List>
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
                  <Typography sx={{ fontFamily: "Lato, sans-serif" }}>
                    {item.text}
                  </Typography>
                }
              />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </div>
  );
};
