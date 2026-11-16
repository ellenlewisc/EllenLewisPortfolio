"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const displayFont = "var(--font-display), Georgia, serif";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#221d3d", contrastText: "#ffffff" },
    secondary: { main: "#4b3f9e", light: "#dcd8f2", contrastText: "#ffffff" },
    text: { primary: "#221d3d", secondary: "#57536e" },
    divider: "#e3e1ee",
    background: { default: "#ffffff", paper: "#ffffff" },
    bloom: { main: "#f1f0f8" },
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: "var(--font-sans), system-ui, -apple-system, 'Segoe UI', sans-serif",
    h1: { fontFamily: displayFont, fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1.05 },
    h2: { fontFamily: displayFont, fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.15 },
    h3: { fontFamily: displayFont, fontWeight: 650, letterSpacing: "-0.015em" },
    h5: { fontFamily: displayFont, fontWeight: 650, letterSpacing: "-0.015em" },
    h6: { fontFamily: displayFont, fontWeight: 650, letterSpacing: "-0.01em" },
    overline: { fontWeight: 600, fontSize: "0.95rem", letterSpacing: 0, lineHeight: 1.6, textTransform: "none" },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 999, paddingInline: 22 },
        sizeLarge: { paddingBlock: 10, fontSize: "1rem" },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 999, fontWeight: 500 },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: { backgroundColor: "#ffffff" },
      },
    },
  },
});

export default function Providers({ children }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
