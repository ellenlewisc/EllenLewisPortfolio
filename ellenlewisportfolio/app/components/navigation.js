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
import useMediaQuery from "@mui/material/useMediaQuery";

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
                href="/contact"
                color="inherit"
              >
                Contact
              </Button>
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
                disableScrollLock={true}
              >
                <MenuItem onClick={handleMenuClose} component="a" href="/">
                  Portfolio
                </MenuItem>
                <MenuItem onClick={handleMenuClose} component="a" href="/about">
                  About
                </MenuItem>
                <MenuItem onClick={handleMenuClose} component="a" href="/contact">
                  Contact
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
