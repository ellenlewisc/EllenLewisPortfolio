import { Box, Button, Container, Stack, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

export default function ResumePage() {
    return (
        <Container maxWidth="md" sx={{ py: { xs: 6, md: 8 } }} className="fadeUp">
            <Stack
                direction={{ xs: "column", sm: "row" }}
                alignItems={{ xs: "flex-start", sm: "flex-end" }}
                justifyContent="space-between"
                spacing={2}
                sx={{ mb: 4 }}
            >
                <Box>
                    <Typography variant="overline" component="p" color="secondary">
                        Resume
                    </Typography>
                    <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "3rem" } }}>
                        Experience & education
                    </Typography>
                </Box>
                <Button
                    component="a"
                    href="/resume.pdf"
                    download="Ellen-Lewis-Resume.pdf"
                    variant="contained"
                    startIcon={<DownloadIcon />}
                >
                    Download PDF
                </Button>
            </Stack>

            <Box
                sx={{
                    height: { xs: "75vh", md: "85vh" },
                    border: 1,
                    borderColor: "divider",
                    borderRadius: 3,
                    overflow: "hidden",
                    bgcolor: "#f8fafc",
                    boxShadow: "0 20px 40px -28px rgba(15,23,42,0.35)",
                }}
            >
                <Box
                    component="iframe"
                    src="/resume.pdf#view=FitH"
                    title="Ellen Lewis resume"
                    sx={{ width: "100%", height: "100%", border: 0, display: "block" }}
                />
            </Box>
        </Container>
    );
}
