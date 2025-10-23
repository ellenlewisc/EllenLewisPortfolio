import {
  Container,
  Typography,
  Box,
  Button,
  Chip,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { ArrowBack, Launch, Code } from "@mui/icons-material";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return Object.keys(projectData).map((id) => ({ id }));
}

const projectData = {
  "pilot-training-web-app": {
    title: "Pilot Training Web App",
    longDescription: `A custom training platform for Cougar Helicopters to replace legacy systems and improve usability for tracking pilot and engineer certifications. The app was orginally built with a scope only for pilot training tracking, but due to the success and improved usability, they requested expansion to all training and related data management. Complete with secure user authentication and role based functionality using OpenIddict`,
    image: "/images/entries-page.png",
    technologies: [".NET", "C#", "Next.js", "React", "SQL", "OpenIddict", "JWT"],
    features: [
      "Training data management",
      "User authentication and roles",
      "Email notifications",
    ],
    challenges: [
      "Handling user roles and permissions",
      "Optimizing database queries for large datasets",
      "Integrating with existing legacy systems / importing exisitng data",
    ],
    liveUrl: "https://training.cougar.ca",
    githubUrl: null,
  },
  "cat-gallery-website": {
    title: "Cat Gallery Website",
    longDescription: `A fun gallery/blog stlye personal project to display memories, built as a birthday surprise for a cat-lover. All users are able to browse the images, however a login flow was added to lock down image upload and deletion functionality. Built with Next.js and uses Supabase's databse to store the image keys, captions, and uses their blob storage and user authentication.`,
    image: "/images/cat-gallery.png",
    technologies: ["Next.js", "Supabase", "JWT", "Blob storage"],
    features: [
      "Image upload, deletion, and display with blob storage",
      "API integration with Supabase",
      "Responsive gallery layout",
      "Login/Logout authentication flow",
    ],
    challenges: [
      "Optimizing gallery performance for many images using pagination and blob storage",
      "Designing it to be cute / funny and responsive across devices",
    ],
    liveUrl: "https://spencercats.netlify.app/",
    githubUrl: "https://github.com/ellenlewisc/spencercats",
  },
  "frampton-lab-web-app": {
    title: "Frampton Lab Web App",
    longDescription: "A web app built on Immediac's content management system (ImmediaCMS: https://immediac.com/content-management-system) which handles the user authentication flow and most of the static content layout. The custom part of the solution I worked on integrates Python data processing in a .NET environment and allows researchers to execute scripts and test chemical solutions directly in the browser.",
    image: "/images/frampton-lab-home.png",
    technologies: [".NET", "C#", "Python", "ImmediaCms"],
    features: ["Browser-based Python script execution", "Chemical database management"],
    challenges: ["Integrating Python with .NET", "Displaying real-time calculation results from the python scripts. It was difficult for me to ensure they were running correctly and involved a lot of client communication to understand the complex scientific results for aquesous solutions. (a little out of my speciality!)"],
    liveUrl: "https://phasexplorer.framptonlab.com/",
    githubUrl: null,
  },
  "vmo-operations-control-api": {
    title: "VMO Operations Control API",
    longDescription: `A .NET Web API connecting Cougar Helicopters’ VMO system to legacy databases, enabling real-time flight data synchronization. This project acted as the "middleman" recieving data from the VMO API whenever flights were updated, handled and inserted it into a modern database then using a databse trigger, updated the legacy system to display on their existing UI.`,
    image: "/images/vmo-api.png",
    technologies: [".NET", "C#", "SQL", "APIs"],
    features: ["Real-time flight data sync", "Legacy system components", "API integration"],
    challenges: ["Integrating with another API can always be challenging with figuring out their documentation, data formats, and authorization.", "Handling authorization coming from the VMO api itself to ensure security.", "Ensuring the correct data is being inserted / updated."],
    liveUrl: null,
    githubUrl: null,
  },
  "personal-portfolio": {
    title: "Personal Portfolio Website",
    longDescription: `A portfolio site to showcase client and personal projects and demonstrate the technologies used. Built with Next.js my favorite javscript framework and connected the contact form to a Supabase SQL database using their API. Tested out using claude code AI to generate an intial draft of the site and customized it from there.`,
    image: "/images/portfolio.png",
    technologies: ["Next.js", "SQL"],
    features: ["Project showcase", "Responsive design", "Backend integration with Supabase and Netlify"],
    challenges: ["Making it look nice, since I am not specialized in design. Fortunatlely, Immediac has a few amazing front end designers who take on this role, but it's fun to give it a go on my own once in a while.", "Deciding where to host and what database to use. Typically all of the client projects I've worked on have been hosted on Azure. For simplicity sake, I went with Netlify and Supabase as they integrate well together quickly at a free cost."],
    githubUrl: "https://github.com/ellenlewisc/EllenLewisPortfolio",
  },
};

export default function ProjectDetail({ params }) {
  const project = projectData[params.id];

  if (!project) notFound();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Button
          href="/projects"
          startIcon={<ArrowBack />}
          sx={{
            mb: 2,
            color: "#ff69b4",
            "&:hover": { backgroundColor: "rgba(255, 105, 180, 0.1)" },
          }}
        >
          Back to Projects
        </Button>

        <Typography variant="h3" component="h1" gutterBottom>
          {project.title}
        </Typography>

        <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
          {project.liveUrl && (
            <Button
              variant="contained"
              startIcon={<Launch />}
              href={project.liveUrl}
              target="_blank"
              sx={{
                backgroundColor: "#ff69b4",
                "&:hover": { backgroundColor: "#e91e63" },
              }}
            >
              Live Site
            </Button>
          )}
          {project.githubUrl && (
            <Button
              variant="outlined"
              startIcon={<Code />}
              href={project.githubUrl}
              target="_blank"
              sx={{
                borderColor: "#ff69b4",
                color: "#ff69b4",
                "&:hover": {
                  backgroundColor: "rgba(255, 105, 180, 0.1)",
                  borderColor: "#e91e63",
                },
              }}
            >
              View Code
            </Button>
          )}
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {project.technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              sx={{
                backgroundColor: "#ff69b4",
                color: "white",
                "&:hover": { backgroundColor: "#e91e63" },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Project Image */}
      <Box
        sx={{
          width: "100%",
          height: 400,
          backgroundColor: "#f5f5f5",
          border: "1px solid #e0e0e0",
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 4,
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "8px" }}
        />
      </Box>

      {/* Project Details Grid */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                About This Project
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: 1.8, whiteSpace: "pre-line" }}
              >
                {project.longDescription}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Key Features
              </Typography>
              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                {project.features.map((feature, index) => (
                  <Typography
                    component="li"
                    variant="body2"
                    key={index}
                    sx={{ mb: 1 }}
                  >
                    {feature}
                  </Typography>
                ))}
              </Box>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Technical Challenges
              </Typography>
              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                {project.challenges.map((challenge, index) => (
                  <Typography
                    component="li"
                    variant="body2"
                    key={index}
                    sx={{ mb: 1, color: "text.secondary" }}
                  >
                    {challenge}
                  </Typography>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
