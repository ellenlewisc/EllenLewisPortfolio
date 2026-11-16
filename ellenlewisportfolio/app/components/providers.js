"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const displayFont = "var(--font-display), Georgia, serif";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#0f172a", contrastText: "#ffffff" },
    secondary: { main: "#0f766e", light: "#ccfbf1", contrastText: "#ffffff" },
    text: { primary: "#0f172a", secondary: "#475569" },
    divider: "#e2e8f0",
    background: { default: "#ffffff", paper: "#ffffff" },
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: "var(--font-sans), system-ui, -apple-system, 'Segoe UI', sans-serif",
    h1: { fontFamily: displayFont, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1 },
    h2: { fontFamily: displayFont, fontWeight: 600, letterSpacing: "-0.015em", lineHeight: 1.2 },
    h3: { fontFamily: displayFont, fontWeight: 600, letterSpacing: "-0.01em" },
    overline: { fontWeight: 600, letterSpacing: "0.12em", lineHeight: 1.6 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 8, paddingInline: 20 },
        sizeLarge: { paddingBlock: 10, fontSize: "1rem" },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 6, fontWeight: 500 },
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
