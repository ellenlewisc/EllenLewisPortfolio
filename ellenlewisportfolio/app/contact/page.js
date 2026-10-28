"use client";
import { Box, Typography, TextField, Button, Alert, CircularProgress } from "@mui/material";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import styles from "./page.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
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
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Bots fill the hidden field; show them success without saving anything.
      if (!honeypot) {
        const { error } = await supabase
          .from('ContactForm')
          .insert([{
            full_name: formData.full_name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
          }]);

        if (error) throw error;
      }

      setSubmitStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
      setFormData({ full_name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      className={styles.fadeUp}
      sx={{
        minHeight: "100vh",
        borderRadius: 3,
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
        onSubmit={handleSubmit}
        sx={{
          background: "linear-gradient(135deg, #f9f9f9 0%, #fff0f5 100%)",
          borderRadius: 2,
          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
          p: 4,
          minWidth: 320,
          maxWidth: 400,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {submitStatus && (
          <Alert severity={submitStatus.type} sx={{ mb: 2 }}>
            {submitStatus.message}
          </Alert>
        )}

        <Box
          component="input"
          type="text"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          sx={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
        />
        <TextField
          name="full_name"
          placeholder="Your Name"
          value={formData.full_name}
          onChange={handleChange}
          required
          fullWidth
          variant="outlined"
          disabled={isSubmitting}
          slotProps={{ htmlInput: { maxLength: 100, "aria-label": "Your Name" } }}
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
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
          variant="outlined"
          disabled={isSubmitting}
          slotProps={{ htmlInput: { maxLength: 254, "aria-label": "Your Email" } }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 1,
            },
          }}
        />
        <TextField
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          fullWidth
          multiline
          rows={5}
          variant="outlined"
          disabled={isSubmitting}
          slotProps={{ htmlInput: { maxLength: 2000, "aria-label": "Your Message" } }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 1,
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          disabled={isSubmitting}
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
            "&:disabled": {
              background: "#ccc",
            },
          }}
        >
          {isSubmitting ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CircularProgress size={20} color="inherit" />
              Sending...
            </Box>
          ) : (
            "Send Message"
          )}
        </Button>
      </Box>
    </Box>
  );
}
