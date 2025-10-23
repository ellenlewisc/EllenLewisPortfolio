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
import { useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

export default function TopNav({ children }) {
  return (
    <NavBar>{children}</NavBar>
  );
}

function NavBar({ children }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleMenuOpen = (event) => setMenuAnchorEl(event.currentTarget);
  const handleMenuClose = () => setMenuAnchorEl(null);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#ff69b4" }}>
        <Toolbar>
          <Button 
            href="/" 
            sx={{ 
              color: "#fff", 
              fontWeight: "bold", 
              fontSize: { xs: "1.1rem", sm: "1.3rem" },
              textTransform: "none"
            }}
          >
            Ellen Lewis
          </Button>
          <Box sx={{ flexGrow: 1 }} />
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
           <Button href="/resume" color="inherit" sx={{ textTransform: "none" }}>
              Resume
            </Button>
            <Button href="/contact" color="inherit" sx={{ textTransform: "none" }}>
              Contact
            </Button>
          </Box>

          <IconButton 
            color="inherit" 
            onClick={handleMenuOpen}
            sx={{ display: { xs: 'flex', md: 'none' } }}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          
          <Menu
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            disableScrollLock={true}
          >
            <MenuItem onClick={handleMenuClose} component="a" href="/resume">
              Projects
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="/contact">
              Contact
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        {children}
      </Box>
    </Box>
  );
}
