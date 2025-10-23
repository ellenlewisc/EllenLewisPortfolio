import styles from "./page.module.css";
import { Box, Typography, Chip, Stack, Avatar } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Home() {
  const technologies = [
    "C#", ".NET", "React", "Next.js", "SQL", "Git",
    "JavaScript", "Python", "Java", "Vue.js", "APIs"
  ];

  return (
    <div className={styles.page}>

      {/* About + Image section */}
      <Box className={styles.fadeUp}
        component="main"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 6, md: 8 },
          px: 3,
          maxWidth: '90%',
          mx: "auto",
        }}
      >
        {/* Profile Image */}
        <Box
          sx={{
            flex: { xs: "auto", md: 1 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2
          }}
        >
          <Avatar
            alt="Ellen Lewis"
            src="/images/profile.jpg"
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


          {/* Location under the image */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#555",
              fontWeight: 600,
              fontSize: { xs: "1.2rem", md: "1.3rem" },
              gap: 0.5,
              mt: 1, // margin-top for spacing
            }}
          >
            <LocationOnIcon sx={{ color: "#ff69b4", fontSize: { xs: 22, md: 26 } }} />
            Halifax & Truro, NS
          </Box>


          {/* LinkedIn */}
          <Box sx={{ mt: 1 }}>
            <a
              href="https://www.linkedin.com/in/ellen-lewis/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "1.2rem",
                color: "#555",
                transition: "transform 0.3s ease",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <LinkedInIcon sx={{ fontSize: { xs: 22, md: 26 }, color: "#0072b1" }} />
                Connect
              </Box>
            </a>
          </Box>

        </Box>


        {/* About + Technologies Card*/}
        <Box
          sx={{
            flex: { xs: "auto", md: 3 },
            background: "linear-gradient(135deg, #f9f9f9 0%, #fff0f5 100%)",
            borderRadius: 3,
            p: { xs: 5, md: 6 },
            boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
            textAlign: { xs: "center", md: "left" },
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >

          {/* Intro */}
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
            <Box
              component="span"
              sx={{
                color: "#ff69b4",
                fontWeight: 700,
                display: "inline-block",
                transition: "transform 0.3s ease",
              }}
            >
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
                display: "inline-block",
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
            After Graduating from computer science at Dalhouise University, I have been developing custom web applications and software solutions ever since.
          </Typography>

          {/* Technologies */}
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
              direction={{ xs: "column", md: "row" }}
              flexWrap="wrap"
              justifyContent={{ xs: "center", md: "flex-start" }}
              spacing={1.5}
              gap={1.5}
            >

              {technologies.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  sx={{
                    fontWeight: "bold",
                    backgroundColor: "#ffe0f0",
                    color: "#ff69b4",
                    borderRadius: "16px",
                    px: 2,
                    py: 0.5,
                    fontSize: { xs: "0.85rem", md: "0.95rem" },
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
