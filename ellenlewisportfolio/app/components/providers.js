"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const sansFont = "var(--font-sans), system-ui, -apple-system, 'Segoe UI', sans-serif";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#2a1d1b", contrastText: "#ffffff" },
    secondary: { main: "#a35d66", light: "#f3e2e2", contrastText: "#ffffff" },
    text: { primary: "#2a1d1b", secondary: "#635653" },
    divider: "#ece3e0",
    background: { default: "#ffffff", paper: "#ffffff" },
    bloom: { main: "#f8f2f0" },
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: sansFont,
    h1: { fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1.05 },
    h2: { fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.15 },
    h3: { fontWeight: 650, letterSpacing: "-0.015em" },
    h5: { fontWeight: 650, letterSpacing: "-0.015em" },
    h6: { fontWeight: 650, letterSpacing: "-0.01em" },
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
