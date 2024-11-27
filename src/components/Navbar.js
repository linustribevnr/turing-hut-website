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
  ListItemIcon,
  Avatar
} from "@mui/material";

import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupsIcon from "@mui/icons-material/Groups";
import InfoIcon from "@mui/icons-material/Info";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useLocation } from "@reach/router";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

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
  },
  {
    text: "Turing Cup",
    icon: <EmojiEventsIcon />,
    path: "/turingcup"
  },
  {
    text: "Newsletters",
    icon: <EmailOutlinedIcon />,
    path: "/newsletters"
  }
];

const drawerWidth = 300;

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const data = useStaticQuery(graphql`
    query Logo {
      file(relativePath: { eq: "turinghut_logo.png" }) {
        childImageSharp {
          fluid {
            srcSet
          }
        }
      }
    }
  `);
  const logoSrcSet = data.file.childImageSharp.fluid.srcSet;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ color: "black" }}>
      <Typography variant="h6" sx={{ mx: 2, my: 1 }}>
        Turing Hut
      </Typography>
      <Divider />
      <List>
        {navItems.map(item => {
          return (
            <Link
              key={item.text}
              to={item.path}
              style={{ textDecoration: "none" }}
            >
              <ListItem key={item} disablePadding>
                <ListItemButton
                  sx={{
                    color: "#000",
                    bgcolor:
                      location.pathname === item.path ||
                      location.pathname === item.path.concat("/")
                        ? "#e0e0e0"
                        : "#fff"
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Box>
  );

  return (
    <div>
      {location.pathname.includes("/turingcup") ||
      location.pathname.includes("/register") ? (
        <Box>
          <AppBar component="nav" sx={{ bgcolor: "#101820FF" }}>
            <Toolbar>
              <IconButton
                color="secondary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Link to="/">
                <Avatar srcSet={logoSrcSet} sx={{ mx: 1 }} />
              </Link>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, color: "#e0e0e0" }}
              >
                Turing Cup
              </Typography>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                {navItems.map(item => (
                  <Link
                    key={item.text}
                    to={item.path}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      sx={{
                        color:
                          location.pathname === item.path ||
                          location.pathname === item.path.concat("/")
                            ? "#F2AA4DFF"
                            : "white",
                        ":hover": {
                          color: "#F2AA4CFF"
                        },
                        bgcolor: "#101820FF",
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
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth
              }
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      ) : (
        <Box>
          <AppBar component="nav" sx={{ bgcolor: "white" }}>
            <Toolbar>
              <IconButton
                color="secondary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Link to="/">
                <Avatar srcSet={logoSrcSet} sx={{ mx: 1 }}></Avatar>
              </Link>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, color: "black" }}
              >
                Turing Hut
              </Typography>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
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
                            location.pathname === item.path ||
                            location.pathname === item.path.concat("/")
                              ? "#e0e0e0"
                              : "#f5f5f5"
                        },
                        bgcolor:
                          location.pathname === item.path ||
                          location.pathname === item.path.concat("/")
                            ? "#e0e0e0"
                            : "#fff",
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
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth
              }
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      )}
    </div>
  );
}
