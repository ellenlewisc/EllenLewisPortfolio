"use client";
import { Alert, Box, Button, CircularProgress, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { socialLinks } from "../components/socialLinks";

const emptyForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Read before disabling the inputs, since disabled fields are excluded from FormData.
    const body = new URLSearchParams(new FormData(e.currentTarget)).toString();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (!response.ok) throw new Error(`Form submission failed with status ${response.status}`);

      setSubmitStatus({ type: "success", message: "Thanks for reaching out! I'll get back to you soon." });
      setFormData(emptyForm);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({ type: "error", message: "Something went wrong sending your message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }} className="fadeUp">
      <Grid container spacing={{ xs: 5, md: 8 }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "3.25rem" }, mb: 2 }}>
            Get in touch
          </Typography>
          <Typography color="text.secondary" sx={{ fontSize: "1.1rem", lineHeight: 1.75, mb: 4 }}>
            Have a question about something here? Send me a message and I&apos;ll get back to you.
          </Typography>

          <Stack spacing={1.5}>
            {socialLinks.map(({ href, label, Icon }) => (
              <Box
                key={label}
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.5,
                  color: "text.secondary",
                  fontWeight: 500,
                  width: "fit-content",
                  "&:hover": { color: "text.primary" },
                }}
              >
                <Icon fontSize="small" />
                {label}
              </Box>
            ))}
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Box
            component="form"
            name="contact"
            onSubmit={handleSubmit}
            sx={{
              bgcolor: "bloom.main",
              border: 1,
              borderColor: "divider",
              borderRadius: 3,
              p: { xs: 3, md: 5 },
              display: "flex",
              flexDirection: "column",
              gap: 2.5,
            }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <Box
              component="input"
              type="text"
              name="bot-field"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              sx={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
            />

            {submitStatus && <Alert severity={submitStatus.type}>{submitStatus.message}</Alert>}

            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
              disabled={isSubmitting}
              slotProps={{ htmlInput: { maxLength: 100 } }}
            />
            <TextField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
              disabled={isSubmitting}
              slotProps={{ htmlInput: { maxLength: 254 } }}
            />
            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              fullWidth
              multiline
              rows={6}
              disabled={isSubmitting}
              slotProps={{ htmlInput: { maxLength: 2000 } }}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={isSubmitting}
              startIcon={isSubmitting ? <CircularProgress size={18} color="inherit" /> : null}
              sx={{ alignSelf: { xs: "stretch", sm: "flex-start" } }}
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
