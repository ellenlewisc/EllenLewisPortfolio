import styles from "./page.module.css";
import { Box, Typography, Chip, Stack, Avatar, IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Home() {
  const technologies = [
    "C#", ".NET", "React", "Next.js", "SQL", "Git",
    "JavaScript", "Python", "Java", "Vue.js", "APIs"
  ];

  return (
    <div className={styles.page}>
      {/* Main layout: image + text side-by-side on desktop */}
      <Box
        className={styles.fadeUp}
        component="main"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: "center",
          gap: { xs: 0, md: 8 },
          width: "100%",
          maxWidth: "1400px",
          mx: "auto",
        }}
      >
        {/* Left side — profile info */}
        <Box
          sx={{
            flex: { xs: "auto", md: 1 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            p: { xs: 4, md: 6 },
          }}
        >
          <Avatar
            alt="Ellen Lewis"
            src="/images/ellenlewis9.jpg"
            sx={{
              width: { xs: 180, md: 220 },
              height: { xs: 180, md: 220 },
              borderRadius: 4,
              boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 16px 40px rgba(0,0,0,0.25)",
              },
            }}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#555",
              fontWeight: 600,
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              mt: 2,
              gap: 0.5,
            }}
          >
            <LocationOnIcon sx={{ color: "#ff69b4", fontSize: { xs: 22, md: 26 } }} />
            Halifax & Truro, NS
          </Box>

          <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/ellen-lewis/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#0072b1",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "translateY(-3px)" },
              }}
            >
              <LinkedInIcon sx={{ fontSize: { xs: 26, md: 28 } }} />
            </IconButton>

            <IconButton
              component="a"
              href="https://github.com/ellenlewisc"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#000",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "translateY(-3px)" },
              }}
            >
              <GitHubIcon sx={{ fontSize: { xs: 26, md: 28 } }} />
            </IconButton>
          </Box>
        </Box>

        {/* Right side — full-width pink box (desktop constrained, mobile full-bleed) */}
        <Box
          sx={{
            flex: { xs: "auto", md: 2 },
            background: "linear-gradient(135deg, #f9f9f9 0%, #fff0f5 100%)",
            borderRadius: { xs: 0, md: 3 },
            p: { xs: 4, sm: 5, md: 6 },
            boxShadow: { xs: "none", md: "0 8px 25px rgba(0,0,0,0.1)" },
            display: "flex",
            flexDirection: "column",
            gap: 4,
            width: "100%",
            maxWidth: { md: "none" }, // allow full width on mobile
            "@media (max-width: 900px)": {
              position: "relative",
              width: "100vw",
              left: 0,
              marginLeft: 0,
              marginRight: 0,
              borderRadius: 0,
              p: 4, // padding inside the box
            },
          }}
        >


          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#222",
              fontSize: { xs: "1.35rem", md: "1.6rem" },
              lineHeight: 1.5,
            }}
          >
            Hi! I'm{" "}
            <Box component="span" sx={{ color: "#ff69b4", fontWeight: 700 }}>
              Ellen Lewis
            </Box>
            , a full-stack software developer at{" "}
            <Box
              component="a"
              href="https://immediac.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontWeight: "bold",
                textDecoration: "none",
                color: "#000",
                transition: "transform 0.3s ease, color 0.3s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  color: "#ff69b4",
                },
              }}
            >
              ImmediaC
            </Box>
            .
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#555",
              fontSize: { xs: "1.05rem", md: "1.1rem" },
              lineHeight: 1.9,
            }}
          >
            After graduating from Computer Science at Dalhousie University, I’ve been developing
            custom web applications and software solutions ever since.
          </Typography>

          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#333",
                mb: 2,
                fontSize: { xs: "1.2rem", md: "1.35rem" },
              }}
            >
              Technologies & Skills
            </Typography>

            <Stack
              direction="row"
              flexWrap="wrap"
              justifyContent={{ xs: "center", md: "flex-start" }}
              spacing={1.5}
              useFlexGap
            >
              {technologies.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  sx={{
                    flexBasis: { xs: "30%", sm: "22%", md: "auto" },
                    textAlign: "center",
                    fontWeight: "bold",
                    backgroundColor: "#ffe0f0",
                    color: "#ff69b4",
                    borderRadius: "16px",
                    px: 2,
                    py: 0.5,
                    fontSize: { xs: "0.8rem", md: "0.95rem" },
                    transition: "transform 0.2s, background-color 0.2s",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      backgroundColor: "#ffccde",
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
