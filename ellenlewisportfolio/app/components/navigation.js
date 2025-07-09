"use client";
import {
  AppBar,
  Toolbar,
  Box,
  Menu,
  MenuItem,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AppsIcon from '@mui/icons-material/Apps';
import ListIcon from "@mui/icons-material/List";
import AddIcon from "@mui/icons-material/Add";
import AssignmentIcon from '@mui/icons-material/Assignment';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import FlightIcon from '@mui/icons-material/Flight';
import GroupsIcon from '@mui/icons-material/Groups';
import CategoryIcon from '@mui/icons-material/Category';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

export default function TopNav({ children }) {
  return (
    <NavBar>{children}</NavBar>
  );
}

function NavBar({ children }) {
  const isDesktop = useMediaQuery("(min-width: 900px)");
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [adminAnchorEl, setAdminAnchorEl] = useState(null);

  const handleMenuOpen = (event) => setMenuAnchorEl(event.currentTarget);
  const handleMenuClose = () => setMenuAnchorEl(null);

  const handleAdminOpen = (event) => setAdminAnchorEl(event.currentTarget);
  const handleAdminClose = () => setAdminAnchorEl(null);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#ff69b4" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="h6" href="/" sx={{ color: "#fff", fontWeight: "bold", fontSize: "1.3rem" }}>
            Portfolio
          </Button>
          <Box sx={{ flexGrow: 1 }} />
          {isDesktop ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
              <Button
                href="/about"
                color="inherit"
              >
                About
              </Button>
              <Button
                color="inherit"
                startIcon={<AppsIcon />}
                aria-controls={adminAnchorEl ? 'admin-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={adminAnchorEl ? 'true' : undefined}
                onClick={handleAdminOpen}
              >
                More
              </Button>
              <Menu
                id="admin-menu"
                anchorEl={adminAnchorEl}
                open={Boolean(adminAnchorEl)}
                onClose={handleAdminClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} // changed from 'left' to 'right'
                transformOrigin={{ vertical: 'top', horizontal: 'right' }} // changed from 'left' to 'right'
                disableScrollLock={true} // prevents layout shift
              >
                <MenuItem onClick={handleAdminClose} component="a" href="/">
                    Portfolio 
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <>
              <IconButton color="inherit" onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={menuAnchorEl}
                open={Boolean(menuAnchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                <MenuItem onClick={handleMenuClose} component="a" href="/entries">
                  <ListIcon sx={{ marginRight: 1 }} />Portfolio
                </MenuItem>
                <MenuItem onClick={handleMenuClose} component="a" href="/about">
                  <AddIcon sx={{ marginRight: 1 }} />About
                </MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        {children}
      </Box>
    </Box>
  );
}
