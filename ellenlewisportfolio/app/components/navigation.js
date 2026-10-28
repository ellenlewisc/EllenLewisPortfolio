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
import { usePathname } from "next/navigation";
import Link from "next/link";
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

  const pathname = usePathname();

  const handleMenuOpen = (event) => setMenuAnchorEl(event.currentTarget);
  const handleMenuClose = () => setMenuAnchorEl(null);

  const linkSx = (href) => ({
    position: "relative",
    color: pathname === href ? "#111" : "#555",
    fontWeight: 600,
    fontSize: "0.95rem",
    textTransform: "none",
    px: 1.5,
    minWidth: 0,
    "&:hover": { backgroundColor: "transparent", color: "#111" },
    "&::after": {
      content: '""',
      position: "absolute",
      left: 12,
      right: 12,
      bottom: 4,
      height: 2,
      borderRadius: 1,
      backgroundColor: "#ff69b4",
      transform: pathname === href ? "scaleX(1)" : "scaleX(0)",
      transformOrigin: "left",
      transition: "transform 0.25s ease",
    },
    "&:hover::after": { transform: "scaleX(1)" },
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          color: "#111",
        }}
      >
        <Toolbar sx={{ width: "100%", maxWidth: 1400, mx: "auto", px: { xs: 2, md: 4 } }}>
          <Button
            component={Link}
            href="/"
            disableRipple
            sx={{
              color: "#111",
              fontWeight: 800,
              fontSize: { xs: "1.15rem", sm: "1.3rem" },
              letterSpacing: "-0.02em",
              textTransform: "none",
              px: 0,
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            Ellen Lewis
            <Box component="span" sx={{ color: "#ff69b4" }}>.</Box>
          </Button>
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: "center", gap: 1 }}>
            <Button component={Link} href="/resume" disableRipple sx={linkSx("/resume")}>
              Resume
            </Button>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              disableElevation
              sx={{
                ml: 1,
                backgroundColor: "#ff69b4",
                color: "#fff",
                fontWeight: 600,
                textTransform: "none",
                borderRadius: 999,
                px: 2.5,
                "&:hover": { backgroundColor: "#e65fa4" },
              }}
            >
              Contact
            </Button>
          </Box>

          <IconButton
            onClick={handleMenuOpen}
            sx={{ display: { xs: 'flex', md: 'none' }, color: "#111" }}
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
            <MenuItem onClick={handleMenuClose} component={Link} href="/resume">
              Resume
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} href="/contact">
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
