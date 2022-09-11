import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon
} from "@mui/material";
import { Link } from "gatsby";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupsIcon from "@mui/icons-material/Groups";
import InfoIcon from "@mui/icons-material/Info";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useLocation } from "@reach/router";

const navItems = [
  {
    text: "Home",
    icon: <HomeIcon />,
    path: "/"
  },
  {
    text: "Events",
    icon: <CalendarMonthIcon />,
    path: "/events"
  },
  {
    text: "Team",
    icon: <GroupsIcon />,
    path: "/team"
  },
  {
    text: "About",
    icon: <InfoIcon />,
    path: "/about"
  },
  {
    text: "Contact",
    icon: <LocalPhoneIcon />,
    path: "/contact"
  }
];

const drawerWidth = 300;

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Typography variant="h6" sx={{ mx: 2, my: 1 }}>
        Turing Hut
      </Typography>
      <Divider />
      <List>
        {navItems.map(item => (
          <Link
            key={item.text}
            to={item.path}
            style={{ textDecoration: "none" }}
          >
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ color: "#000" }}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar component="nav" sx={{ bgcolor: "#fff" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Turing Hut
          </Typography>
          <Box sx={{ display: { sm: "none", md: "block" } }}>
            {navItems.map(item => (
              <Link
                key={item.text}
                to={item.path}
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    color: "#000",
                    ":hover": {
                      bgcolor:
                        location.pathname === item.path ? "#e0e0e0" : "#f5f5f5"
                    },
                    bgcolor:
                      location.pathname === item.path ? "#e0e0e0" : "#fff",
                    textTransform: "none",
                    textDecoration: "none",
                    px: 3,
                    mx: 0.5
                  }}
                >
                  {item.text}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          display: { sm: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth }
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
