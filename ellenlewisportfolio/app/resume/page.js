"use client";
import { Box, Button, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

export default function ResumePage() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundColor: "#fff",
                px: 2,
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 850,
                    height: "90vh",
                    borderRadius: 2,
                    overflow: "hidden",
                    mb: 3,
                    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                }}
            >
                <iframe
                    src="/resume.pdf#view=FitH"
                    title="Ellen Lewis resume"
                    width="100%"
                    height="100%"
                ></iframe>

            </Box>

            <Button
                component="a"
                href="/resume.pdf"
                download="Ellen-Lewis-Resume.pdf"
                variant="contained"
                startIcon={<DownloadIcon />}
                sx={{
                    backgroundColor: "#ff69b4",
                    color: "#fff",
                    fontWeight: "bold",
                    textTransform: "none",
                    px: 3,
                    py: 1.2,
                    fontSize: "1rem",
                    borderRadius: "8px",
                    "&:hover": {
                        backgroundColor: "#e65fa4",
                    },
                }}
            >
                Download Resume
            </Button>
        </Box>
    );
}
