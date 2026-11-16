"use client";
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  Menu,
  MenuItem,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { socialLinks } from "./socialLinks";

const navLinks = [
  { href: "/#experience", label: "Experience" },
  { href: "/#work", label: "Work" },
  { href: "/#skills", label: "Skills" },
  { href: "/resume", label: "Resume" },
];

export default function Navigation({ children }) {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const pathname = usePathname();

  const handleMenuOpen = (event) => setMenuAnchorEl(event.currentTarget);
  const handleMenuClose = () => setMenuAnchorEl(null);

  const linkSx = (href) => ({
    color: pathname === href ? "text.primary" : "text.secondary",
    fontWeight: 500,
    fontSize: "0.95rem",
    px: 1.5,
    minWidth: 0,
    "&:hover": { backgroundColor: "transparent", color: "text.primary" },
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: 1,
          borderColor: "divider",
          color: "text.primary",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64 } }}>
            <Box
              component={Link}
              href="/"
              sx={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontWeight: 600,
                fontSize: { xs: "1.2rem", sm: "1.35rem" },
                letterSpacing: "-0.01em",
              }}
            >
              Ellen Lewis
            </Box>
            <Box sx={{ flexGrow: 1 }} />

            <Box component="nav" sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.5 }}>
              {navLinks.map((link) => (
                <Button key={link.href} component={Link} href={link.href} disableRipple sx={linkSx(link.href)}>
                  {link.label}
                </Button>
              ))}
              <Button component={Link} href="/contact" variant="contained" color="primary" sx={{ ml: 1.5 }}>
                Contact
              </Button>
            </Box>

            <IconButton
              onClick={handleMenuOpen}
              sx={{ display: { xs: "flex", md: "none" }, color: "text.primary" }}
              aria-label="Open menu"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={menuAnchorEl}
              open={Boolean(menuAnchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              disableScrollLock={true}
            >
              {[...navLinks, { href: "/contact", label: "Contact" }].map((link) => (
                <MenuItem key={link.href} onClick={handleMenuClose} component={Link} href={link.href}>
                  {link.label}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1, pt: 8 }}>
        {children}
      </Box>

      <Box component="footer" sx={{ borderTop: 1, borderColor: "divider", py: 4 }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Ellen Lewis · Halifax, Nova Scotia
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            {socialLinks.map(({ href, label, Icon }) => (
              <IconButton
                key={label}
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                size="small"
                sx={{ color: "text.secondary", "&:hover": { color: "text.primary" } }}
              >
                <Icon fontSize="small" />
              </IconButton>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
