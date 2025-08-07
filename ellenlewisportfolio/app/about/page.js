import { Box, Typography, Link } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function About() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 2,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "#ff69b4",
          fontSize: "2.8rem",
          fontWeight: "bold",
          mb: 0.5,
          letterSpacing: "0.05em",
        }}
      >
        About
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "#222",
          fontWeight: "bold",
          fontSize: "1.15rem",
          mt: 0.5,
          mb: 4,
          gap: 0.5,
        }}
      >
        <LocationOnIcon sx={{ color: "#ff69b4" }} />
        Halifax, NS
      </Box>
      <Box
        sx={{
          color: "#333",
          fontSize: "1.3rem",
          maxWidth: 600,
          textAlign: "center",
          lineHeight: 1.8,
          mb: 1,
          background: "#f9f9f9",
          borderRadius: 2,
          p: 4,
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        }}
      >
        Hi! I'm{" "}
        <Box component="span" sx={{ color: "#ff69b4", fontWeight: "bold" }}>Ellen Lewis</Box>, a software developer at ImmediaC.
        <br />
        <Link
          href="https://www.linkedin.com/in/ellen-lewis"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#ff69b4",
            textDecoration: "underline",
            fontWeight: "bold",
            mt: 2,
            display: "inline-block",
            fontSize: "1.1rem",
          }}
        >
          www.linkedin.com/in/ellen-lewis
        </Link>
      </Box>
    </Box>
  );
}