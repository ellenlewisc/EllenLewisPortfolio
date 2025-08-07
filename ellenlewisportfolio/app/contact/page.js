"use client";
import { Box, Typography, TextField, Button } from "@mui/material";

export default function Contact() {
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
          mb: 4,
          letterSpacing: "0.05em",
        }}
      >
        Contact
      </Typography>
      <Box
        component="form"
        name="contact"
        method="POST"
        data-netlify="true"
        sx={{
          background: "#fff",
          borderRadius: 2,
          boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
          p: 4,
          minWidth: 320,
          maxWidth: 400,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <input type="hidden" name="form-name" value="contact" />

        <TextField
          name="name"
          placeholder="Your Name"
          required
          fullWidth
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 1,
            },
          }}
        />
        <TextField
          type="email"
          name="email"
          placeholder="Your Email"
          required
          fullWidth
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 1,
            },
          }}
        />
        <TextField
          name="message"
          placeholder="Your Message"
          required
          fullWidth
          multiline
          rows={5}
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 1,
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            background: "#ff69b4",
            color: "#fff",
            borderRadius: 1,
            py: 1.5,
            fontSize: "1.1rem",
            fontWeight: "bold",
            "&:hover": {
              background: "#e55ca3",
            },
          }}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
}
