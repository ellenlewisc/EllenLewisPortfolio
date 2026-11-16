import { Box, Button, Chip, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Link from "next/link";
import { socialLinks } from "./components/socialLinks";

const experience = [
  {
    role: "Software Developer",
    company: "ImmediaC",
    location: "Halifax, NS",
    dates: "Sept 2021 – Present",
    points: [
      "Design, build and maintain client websites and custom web applications, from initial requirements through deployment.",
      "Work with the team to deliver responsive, accessible solutions tailored to each client's needs.",
    ],
    tech: [".NET", "C#", "SQL", "JavaScript"],
  },
  {
    role: "Software Developer (Contract)",
    company: "Cougar Helicopters",
    location: "St. John's, NL",
    dates: "Mar 2024 – Dec 2025",
    points: [
      "Modernized internal systems by analyzing legacy codebases and rebuilding them as clean, maintainable web applications.",
      "Built a custom training platform and multiple APIs to improve employee certification tracking and company data management.",
    ],
    tech: [".NET", "C#", "SQL", "Next.js", "React"],
  },
  {
    role: "Teaching Assistant",
    company: "Dalhousie University",
    location: "Halifax, NS",
    dates: "May 2021 – Sept 2021",
    points: [
      "Led labs for CSCI 1105: Intro to Computer Science, and marked Java assignments and quizzes.",
    ],
    tech: ["Java"],
  },
  {
    role: "Computer Science Instructor",
    company: "SuperNOVA, Dalhousie co-op",
    location: "Halifax, NS",
    dates: "Jan 2021 – May 2021",
    points: [
      "Led youth workshops and helped design content introducing computer science through coding, animation and hands-on activities.",
      "Designed and developed a website for the launch of a new high school space program.",
    ],
    tech: [],
  },
];

const work = [
  {
    title: "NSTU Conference Platform",
    context: "ImmediaC client project",
    year: "2026",
    description:
      "A live web application for 40,000+ combined teachers, administrators and other members of the Nova Scotia Teachers Union, with admin and member portals for conference setup, registration with Stripe payments, and capacity management.",
    tech: [".NET", "C#", "REST APIs", "Stripe"],
  },
  {
    title: "Energy Trading Platform",
    context: "ImmediaC client project",
    year: "2026",
    description:
      "A data management and visualization platform that replaced an energy arbitrage client's legacy Access database and imported all of their existing data. A built-in MCP server lets AI clients such as ChatGPT retrieve transactions and run daily data imports.",
    tech: [".NET", "C#", "MCP Servers", "AI"],
  },
  {
    title: "VMO Operations Control API",
    context: "Cougar Helicopters",
    year: "2025",
    description:
      "A .NET Web API connecting Cougar Helicopters' VMO flight management system to their internal systems, synchronizing flight data in real time with legacy display and monitoring screens.",
    tech: [".NET", "C#", "SQL", "REST APIs"],
  },
  {
    title: "Pilot Training Platform",
    context: "Cougar Helicopters",
    year: "2024 – 2025",
    description:
      "A custom training platform that replaced legacy systems for tracking pilot and engineer certifications, later expanded to all company training and related data, with role-based authentication.",
    tech: [".NET", "C#", "Next.js", "React", "SQL", "OpenIddict"],
  },
];

const skills = [
  { group: "Backend", items: ["C#", ".NET", "REST APIs", "SQL"] },
  { group: "Frontend", items: ["React", "Next.js", "Vue.js", "JavaScript"] },
  { group: "AI & integrations", items: ["MCP servers", "AI integrations", "Stripe", "Third-party APIs"] },
  { group: "Tools & languages", items: ["Git", "Python", "Java"] },
];

function SectionHeading({ title }) {
  return (
    <Box sx={{ mb: { xs: 4, md: 6 } }}>
      <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "2.4rem" } }}>
        {title}
      </Typography>
    </Box>
  );
}

function TechList({ items }) {
  if (!items.length) return null;

  return (
    <Stack direction="row" flexWrap="wrap" useFlexGap spacing={1} sx={{ mt: 2 }}>
      {items.map((item) => (
        <Chip
          key={item}
          label={item}
          size="small"
          variant="outlined"
          sx={{ bgcolor: "secondary.light", border: 0, color: "primary.main" }}
        />
      ))}
    </Stack>
  );
}

export default function Home() {
  return (
    <>
      <Box component="section" sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Container maxWidth="lg" sx={{ pt: { xs: 5, md: 9 }, pb: { xs: 7, md: 11 } }} className="fadeUp">
          <Stack direction="row" alignItems="center" spacing={{ xs: 2, md: 3 }} sx={{ mb: { xs: 3, md: 5 } }}>
            <Box
              component="img"
              src="/images/ellen-lewis.jpg"
              alt="Ellen Lewis"
              sx={{
                width: { xs: 88, md: 128 },
                height: { xs: 88, md: 128 },
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center 15%",
                boxShadow: "0 0 0 3px #ffffff, 0 0 0 5px #dcd8f2",
              }}
            />
            <Box>
              <Typography sx={{ fontWeight: 600, fontSize: { xs: "1.05rem", md: "1.2rem" } }}>Full-stack software developer</Typography>
              <Stack direction="row" alignItems="center" spacing={0.5} sx={{ color: "text.secondary" }}>
                <LocationOnOutlinedIcon sx={{ fontSize: 16 }} />
                <Typography variant="body2">Halifax & Truro, NS</Typography>
              </Stack>
            </Box>
          </Stack>

          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-end">
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="h1"
                sx={{ fontSize: { xs: "4.5rem", sm: "6.5rem", md: "8.75rem" }, lineHeight: 0.86, letterSpacing: "-0.055em" }}
              >
                Ellen
                <br />
                Lewis
                <Box component="span" aria-hidden="true" sx={{ color: "secondary.main" }}>
                  .
                </Box>
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography color="text.secondary" sx={{ fontSize: { xs: "1.05rem", md: "1.15rem" }, lineHeight: 1.7, maxWidth: 460 }}>
                  I build custom web applications and APIs with .NET, C# and React, taking projects from
                  first requirements through to deployment. Currently a software developer at{" "}
                  <Box
                    component="a"
                    href="https://immediac.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "text.primary",
                      fontWeight: 600,
                      textDecoration: "underline",
                      textDecorationColor: "rgba(75,63,158,0.4)",
                      textUnderlineOffset: "4px",
                      "&:hover": { color: "secondary.main" },
                    }}
                  >
                    ImmediaC
                  </Box>{" "}
                  in Halifax, Nova Scotia.
              </Typography>

              <Stack direction="row" flexWrap="wrap" useFlexGap spacing={1.5} alignItems="center" sx={{ mt: 3.5 }}>
                <Button component={Link} href="/contact" variant="contained" size="large">
                  Get in touch
                </Button>
                <Button component={Link} href="/resume" variant="outlined" size="large">
                  View resume
                </Button>
                {socialLinks.map(({ href, label, Icon }) => (
                  <IconButton
                    key={label}
                    component="a"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    sx={{
                      width: 46,
                      height: 46,
                      border: 1,
                      borderColor: "rgba(34,29,61,0.5)",
                      color: "primary.main",
                      "&:hover": { bgcolor: "secondary.light", borderColor: "secondary.main" },
                    }}
                  >
                    <Icon />
                  </IconButton>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" id="experience">
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          <SectionHeading title="Where I've worked" />

          <Stack spacing={0}>
            {experience.map((job, index) => (
              <Grid
                container
                key={`${job.company}-${job.role}`}
                spacing={{ xs: 1, md: 4 }}
                sx={{ py: 4, borderTop: index === 0 ? 0 : 1, borderColor: "divider" }}
              >
                <Grid size={{ xs: 12, md: 3 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500, pt: { md: 0.5 } }}>
                    {job.dates}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 9 }}>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 600, lineHeight: 1.3 }}>
                    {job.role}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 1.5 }}>
                    {job.company}, {job.location}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2.5, m: 0, color: "text.secondary" }}>
                    {job.points.map((point) => (
                      <Typography component="li" key={point} sx={{ lineHeight: 1.7, mb: 0.5 }}>
                        {point}
                      </Typography>
                    ))}
                  </Box>
                  <TechList items={job.tech} />
                </Grid>
              </Grid>
            ))}

            <Grid container spacing={{ xs: 1, md: 4 }} sx={{ py: 4, borderTop: 1, borderColor: "divider" }}>
              <Grid size={{ xs: 12, md: 3 }}>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500, pt: { md: 0.5 } }}>
                  2018 – 2023
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 9 }}>
                <Typography variant="overline" component="p" color="secondary">
                  Education
                </Typography>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 600, lineHeight: 1.3 }}>
                  Bachelor of Computer Science
                </Typography>
                <Typography color="text.secondary">Dalhousie University, Halifax, NS</Typography>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>

      <Box component="section" id="work" sx={{ bgcolor: "bloom.main", borderTop: 1, borderBottom: 1, borderColor: "divider" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          <SectionHeading title="Recent projects" />

          <Grid container columnSpacing={6} rowSpacing={{ xs: 6, md: 8 }}>
            {work.map((project) => (
              <Grid size={{ xs: 12, md: 6 }} key={project.title}>
                <Box
                  sx={{
                    height: "100%",
                    pt: 3,
                    borderTop: 3,
                    borderColor: "secondary.main",
                  }}
                >
                  <Stack direction="row" justifyContent="space-between" spacing={2} sx={{ mb: 1 }}>
                    <Typography variant="body2" color="secondary" sx={{ fontWeight: 600 }}>
                      {project.context}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: "nowrap" }}>
                      {project.year}
                    </Typography>
                  </Stack>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 1.5 }}>
                    {project.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {project.description}
                  </Typography>
                  <TechList items={project.tech} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" id="skills">
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          <SectionHeading title="What I work with" />

          <Grid container spacing={{ xs: 4, md: 3 }}>
            {skills.map((skill) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={skill.group}>
                <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 600, mb: 1.5 }}>
                  {skill.group}
                </Typography>
                <Stack spacing={1}>
                  {skill.items.map((item) => (
                    <Typography key={item} color="text.secondary">
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}>
        <Container
          maxWidth="lg"
          sx={{
            py: { xs: 7, md: 9 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" }, mb: 1 }}>
              Let&apos;s talk
            </Typography>
            <Typography sx={{ color: "#cfcbe6", maxWidth: 520 }}>
              Have a question or a project in mind? Send me a message and I&apos;ll get back to you.
            </Typography>
          </Box>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            size="large"
            sx={{ bgcolor: "#ffffff", color: "primary.main", "&:hover": { bgcolor: "#e2e8f0" } }}
          >
            Get in touch
          </Button>
        </Container>
      </Box>
    </>
  );
}
