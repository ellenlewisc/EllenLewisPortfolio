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
    context: "Client project · ImmediaC",
    year: "2026",
    description:
      "A live web application for 40,000+ combined teachers, administrators and other members of the Nova Scotia Teachers Union, with admin and member portals for conference setup, registration with Stripe payments, and capacity management.",
    tech: [".NET", "C#", "REST APIs", "Stripe"],
  },
  {
    title: "Energy Trading Platform",
    context: "Client project · ImmediaC",
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

function SectionHeading({ eyebrow, title }) {
  return (
    <Box sx={{ mb: { xs: 4, md: 6 } }}>
      <Typography variant="overline" component="p" color="secondary">
        {eyebrow}
      </Typography>
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
          sx={{ bgcolor: "#f8fafc", borderColor: "divider", color: "text.secondary" }}
        />
      ))}
    </Stack>
  );
}

export default function Home() {
  return (
    <>
      <Box component="section" sx={{ bgcolor: "#f8fafc", borderBottom: 1, borderColor: "divider" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center" className="fadeUp">
            <Grid size={{ xs: 12, md: 7 }} sx={{ order: { xs: 2, md: 1 } }}>
              <Typography variant="overline" component="p" color="secondary">
                Full-stack software developer
              </Typography>
              <Typography variant="h1" sx={{ fontSize: { xs: "2.75rem", md: "4rem" }, mb: 3 }}>
                Ellen Lewis
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ fontSize: { xs: "1.05rem", md: "1.2rem" }, lineHeight: 1.75, maxWidth: 560 }}
              >
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
                    textDecorationColor: "rgba(15,118,110,0.4)",
                    textUnderlineOffset: "4px",
                    "&:hover": { color: "secondary.main" },
                  }}
                >
                  ImmediaC
                </Box>{" "}
                in Halifax, Nova Scotia.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 4 }}>
                <Button component={Link} href="/contact" variant="contained" size="large">
                  Get in touch
                </Button>
                <Button component={Link} href="/resume" variant="outlined" size="large">
                  View resume
                </Button>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 4, color: "text.secondary" }}>
                <Stack direction="row" alignItems="center" spacing={0.5}>
                  <LocationOnOutlinedIcon fontSize="small" />
                  <Typography variant="body2">Halifax & Truro, NS</Typography>
                </Stack>
                <Box sx={{ width: "1px", height: 20, bgcolor: "divider" }} />
                <Stack direction="row" spacing={0.5}>
                  {socialLinks.map(({ href, label, Icon }) => (
                    <IconButton
                      key={label}
                      component="a"
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      size="small"
                      sx={{ color: "text.secondary", "&:hover": { color: "text.primary" } }}
                    >
                      <Icon fontSize="small" />
                    </IconButton>
                  ))}
                </Stack>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }} sx={{ order: { xs: 1, md: 2 } }}>
              <Box
                component="img"
                src="/images/ellen-lewis.jpg"
                alt="Ellen Lewis"
                sx={{
                  display: "block",
                  width: "100%",
                  maxWidth: { xs: 320, md: 420 },
                  mx: "auto",
                  aspectRatio: "4 / 5",
                  objectFit: "cover",
                  objectPosition: "center 15%",
                  borderRadius: 3,
                  border: 1,
                  borderColor: "divider",
                  boxShadow: "0 20px 40px -24px rgba(15,23,42,0.35)",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" id="experience">
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          <SectionHeading eyebrow="Experience" title="Where I've worked" />

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
                    {job.company} · {job.location}
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
                <Typography color="text.secondary">Dalhousie University · Halifax, NS</Typography>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>

      <Box component="section" id="work" sx={{ bgcolor: "#f8fafc", borderTop: 1, borderBottom: 1, borderColor: "divider" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          <SectionHeading eyebrow="Selected work" title="Recent projects" />

          <Grid container spacing={3}>
            {work.map((project) => (
              <Grid size={{ xs: 12, md: 6 }} key={project.title}>
                <Box
                  sx={{
                    height: "100%",
                    p: { xs: 3, md: 4 },
                    bgcolor: "background.paper",
                    border: 1,
                    borderColor: "divider",
                    borderRadius: 3,
                    transition: "border-color 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      borderColor: "#cbd5e1",
                      boxShadow: "0 12px 32px -20px rgba(15,23,42,0.3)",
                    },
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
          <SectionHeading eyebrow="Skills" title="What I work with" />

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
            <Typography sx={{ color: "#cbd5e1", maxWidth: 520 }}>
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
