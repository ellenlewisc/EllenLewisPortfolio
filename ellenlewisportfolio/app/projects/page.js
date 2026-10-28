"use client";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import Link from "next/link";
import styles from "./page.module.css";

const mockProjects = [
  {
    id: "pilot-training-web-app",
    title: "Pilot Training Web App",
    description:
      "A custom training platform built for Cougar Helicopters to replace their legacy systems and improve usability for tracking pilot and engineer certifications/authorizations, and better management of courses, reports, and more.",
    image: "/images/entries-page.png",
    technologies: [".NET", "C#", "Next.js", "React", "SQL", "OpenIddict"],
  },
  {
    id: "cat-gallery-website",
    title: "Cat Gallery Website",
    link: "https://spencercats.netlify.app/",
    description:
      "A simple but fun personal project showcasing photos with authentication and image upload/deletion features, built as a birthday surprise for a cat-lover.",
    image: "/images/cat-gallery.png",
    technologies: ["Next.js", "React", "Supabase", "JWT", "Blob storage"],
  },
  {
    id: "frampton-lab-web-app",
    title: "Frampton Lab Web App",
    description:
      "Integrates Python data processing within a .NET environment, allowing researchers to execute scripts directly in the browser and test their chemical solutions.",
    image: "/images/frampton-lab-home.png",
    technologies: [".NET", "C#", "Python", "ImmediaCMS"],
  },
  {
    id: "vmo-operations-control-api",
    title: "VMO Operations Control API",
    link: null,
    description:
      "A .NET Web API that connects Cougar Helicopters’ VMO flight management system to their legacy databases, enabling real-time flight data synchronization.",
    image: "/images/vmo-api.png",
    technologies: [".NET", "C#", "SQL", "REST APIs"],
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    description:
      "A side project to showcase client and personal projects. Built using Next.js with a Supabase SQL backend and deployed via Netlify for free hosting.",
    image: "/images/portfolio.png",
    technologies: ["Next.js", "SQL", "React", "Netlify"],
  },
];

export default function Projects() {
  return (
    <Container className={styles.fadeUp} maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        align="center"
        sx={{
          mb: 4,
          color: "#ff69b4",
          fontSize: "2.8rem",
          fontWeight: "bold",
          letterSpacing: "0.05em",
        }}
      >
        Projects
      </Typography>

      <Typography
        variant="h6"
        component="p"
        align="center"
        color="text.secondary"
        sx={{ mb: 5 }}
      >
        Here are some of the projects I've worked on for clients at Immediac,
        internal projects at Cougar Helicopters, and some personal ones I've done
        on the side.
      </Typography>

      <Grid container spacing={4}>
        {mockProjects.map((project) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition:
                  "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 4,
                },
              }}
            >
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                sx={{
                  height: 400,
                  objectFit: "cover",
                  borderBottom: "1px solid #e0e0e0",
                }}
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h2">
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {project.description}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {project.technologies.map((tech) => (
                    <Typography
                      key={tech}
                      variant="caption"
                      sx={{
                        backgroundColor: "#ff69b4",
                        color: "white",
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                        fontSize: "0.7rem",
                      }}
                    >
                      {tech}
                    </Typography>
                  ))}
                </Box>
              </CardContent>

              <CardActions>
                <Button
                  size="small"
                  component={Link}
                  href={`/projects/${project.id}`}
                  sx={{
                    color: "#ff69b4",
                    "&:hover": {
                      backgroundColor: "rgba(255, 105, 180, 0.1)",
                    },
                  }}
                >
                  View Details
                </Button>

                {project.link && (
                  <Button
                    size="small"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                    sx={{
                      "&:hover": {
                        backgroundColor: "rgba(25, 118, 210, 0.1)",
                      },
                    }}
                  >
                    Live Site
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
