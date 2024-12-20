import React from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText, Badge, Typography, Avatar, Divider } from "@mui/material";
import ActivityIcon from "@mui/icons-material/Notifications";
import HistoryIcon from "@mui/icons-material/History";
import companyLogo from "../../assets/Krisala-Developers-Logo-Image..jpeg"; // Replace with the correct path to your logo file

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 270,
        height: "100vh",
        bgcolor: "#f4f4f4",
        padding: 2,
        boxShadow: 2,
      }}
    >
      {/* Logo and Help Desk Section */}
      <Box
        mb={3}
        display="flex"
        alignItems="center"
      >
        <Avatar
          src={companyLogo}
          alt="Company Logo"
          sx={{ width: 50, height: 50, marginRight: 1 }}
        />
        <Box>
          <Typography variant="h6" fontWeight="bold">
            Help Desk
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Executive Name
          </Typography>
         
        </Box>
        
      </Box>
      <Divider/>
      {/* Navigation List */}
      <List>
        <ListItem button>
          <ListItemIcon>
            <Badge badgeContent={12} color="primary">
              <ActivityIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText primary="Activity" />
        </ListItem>
        <Divider/>
        <ListItem button>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary="History" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
