import { Box, Button, Chip, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import FlightTakeoffRoundedIcon from "@mui/icons-material/FlightTakeoffRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import Link from "next/link";
import { socialLinks } from "./components/socialLinks";
import { BrowserWindow, Monitor, Scene, ScreenImage } from "./components/deviceMockup";
import FlightTrackingScreen from "./components/flightTrackingScreen";

const experience = [
  {
    role: "Software Developer",
    company: "ImmediaC",
    icon: "code",
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
    icon: "flight",
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
    icon: "school",
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
    icon: "rocket",
    location: "Halifax, NS",
    dates: "Jan 2021 – May 2021",
    points: [
      "Led youth workshops and helped design content introducing computer science through coding, animation and hands-on activities.",
      "Designed and developed a website for the launch of a new high school space program.",
    ],
    tech: [],
  },
];

const volunteering = [
  {
    role: "Volleyball Coach",
    company: "Nova Knights U16 girls",
    dates: "2026 – Present",
    description:
      "Plan and run practices and set goals for the season, coordinating schedules, games and logistics with players, parents and the club.",
  },
  {
    role: "Wish Volunteer",
    company: "Make-A-Wish",
    dates: "2025 – Present",
    description:
      "Plan and coordinate wish reveals for children and their families, working with families and Make-A-Wish staff on timing, logistics and details.",
  },
];

const work = [
  {
    title: "NSTU Member Registry",
    context: "ImmediaC client project",
    year: "2026",
    description:
      "Led the full replacement of the Nova Scotia Teachers Union's legacy membership registry, managing 40,000+ member records. Admin and member portals with finely scoped role permissions, single sign-on with nstu.ca, a communication centre for bulk email and SMS, and mail-merge document generation to PDF.",
    tech: [".NET", "C#", "SQL", "Hangfire", "Tailwind"],
    visual: { screenshot: "/images/work/nstu-registry.webp", tone: "dark", wall: "linear-gradient(160deg, #2c63a6 0%, #114787 55%, #0b3266 100%)" },
    caseStudy: "https://immediac.com/our-work/nstu",
  },
  {
    title: "NSTU Conference Platform",
    context: "ImmediaC client project",
    year: "2026",
    description:
      "A conference registration and management platform for the Nova Scotia Teachers Union. Staff build each conference with fees, workshop sessions, custom registration questions and seat limits, or have AI generate the full setup from a filled-in template. Members register, rank their workshop choices and pay through Stripe, while the platform handles workshop moves, refunds and publishing to nstu.ca.",
    tech: [".NET", "C#", "Stripe", "Hangfire", "AI"],
    visual: { screenshot: "/images/work/nstu-conference.webp", tone: "dark", wall: "linear-gradient(160deg, #ec6d62 0%, #da3d34 55%, #b72d26 100%)" },
    caseStudy: "https://immediac.com/our-work/nstu",
  },
  {
    title: "Energy Trading Platform",
    context: "ImmediaC client project",
    year: "2026",
    description:
      "A data management and visualization platform that replaced an energy arbitrage client's legacy Access database and imported all of their existing data. A built-in MCP server lets AI clients such as ChatGPT retrieve transactions and run daily data imports.",
    tech: [".NET", "C#", "MCP Servers", "AI"],
    visual: { screenshot: "/images/work/energy-trading.webp", tone: "dark", wall: "linear-gradient(160deg, #1f6fae 0%, #00457c 55%, #002f56 100%)" },
    caseStudy: "https://immediac.com/our-work/energy-atlantica",
  },
  {
    title: "VMO Operations Control API",
    context: "Cougar Helicopters",
    year: "2025",
    description:
      "A .NET Web API connecting Cougar Helicopters' VMO flight management system to their internal systems, synchronizing flight data in real time with legacy display and monitoring screens.",
    tech: [".NET", "C#", "SQL", "REST APIs"],
    visual: { flightMap: true, tone: "dark", wall: "linear-gradient(160deg, #e2a865 0%, #c08f55 50%, #8e5f31 100%)" },
  },
  {
    title: "Pilot Training Platform",
    context: "Cougar Helicopters",
    year: "2024 – 2025",
    description:
      "A custom training platform that replaced legacy systems for tracking pilot and engineer certifications, later expanded to all company training and related data, with role-based authentication.",
    tech: [".NET", "C#", "Next.js", "React", "SQL", "OpenIddict"],
  },
  {
    title: "BIDR Platform",
    context: "ImmediaC client project",
    year: "2026",
    description:
      "A marketplace-style app for iOS, Android and the web, built as one of two developers, where customers describe a job to an AI assistant that turns the conversation into a structured service request. Local providers browse matching requests nearby, AI moderation screens every post, and customers choose which contact details to share.",
    tech: ["React Native", "Expo", ".NET", "C#", "Azure OpenAI"],
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

const keycapColours = [
  { face: "#3a2824", edge: "#1c1311", text: "#f6ecea" },
  { face: "#b36a73", edge: "#7f434b", text: "#ffffff" },
  { face: "#f3e2e2", edge: "#d6b9b8", text: "#2a1d1b" },
  { face: "#fbf8f6", edge: "#ddd2cd", text: "#2a1d1b" },
];

function SkillKeyboard() {
  return (
    <Box
      sx={{
        borderRadius: { xs: "20px", md: "28px" },
        p: { xs: 2.5, md: 4 },
        bgcolor: "bloom.main",
        border: 1,
        borderColor: "divider",
        boxShadow: "inset 0 2px 0 rgba(255,255,255,0.7), 0 30px 50px -40px rgba(42,29,27,0.5)",
      }}
    >
      {skills.map((skill, row) => {
        const colour = keycapColours[row % keycapColours.length];

        return (
          <Box
            key={skill.group}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "220px 1fr" },
              alignItems: "center",
              gap: { xs: 1.5, md: 3 },
              py: { xs: 2, md: 2.25 },
              borderTop: row === 0 ? 0 : "1px dashed",
              borderColor: "divider",
            }}
          >
            <Typography
              component="h3"
              sx={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 700, fontSize: { xs: "1.2rem", md: "1.35rem" }, letterSpacing: "-0.02em" }}
            >
              {skill.group}
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, display: "flex", flexWrap: "wrap", gap: { xs: 1.25, md: 1.5 } }}>
              {skill.items.map((item) => (
                <Box
                  component="li"
                  key={item}
                  sx={{
                    px: { xs: 1.75, md: 2.25 },
                    py: { xs: 1, md: 1.25 },
                    minWidth: 56,
                    textAlign: "center",
                    borderRadius: "10px",
                    bgcolor: colour.face,
                    color: colour.text,
                    fontWeight: 600,
                    fontSize: { xs: "0.9rem", md: "0.95rem" },
                    boxShadow: `inset 0 1px 0 rgba(255,255,255,0.25), 0 5px 0 ${colour.edge}, 0 9px 12px -6px rgba(42,29,27,0.35)`,
                    transform: "translateY(0)",
                    transition: "transform 120ms ease, box-shadow 120ms ease",
                    cursor: "default",
                    userSelect: "none",
                    "&:hover": {
                      transform: "translateY(4px)",
                      boxShadow: `inset 0 1px 0 rgba(255,255,255,0.25), 0 1px 0 ${colour.edge}, 0 3px 6px -4px rgba(42,29,27,0.35)`,
                    },
                    "@media (prefers-reduced-motion: reduce)": { transition: "none" },
                  }}
                >
                  {item}
                </Box>
              ))}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

const doodleStroke = { fill: "none", stroke: "currentColor", strokeWidth: 2.2, strokeLinecap: "round", strokeLinejoin: "round" };

function VolleyballDoodle() {
  return (
    <svg viewBox="0 0 64 64" width="100%" height="100%" aria-hidden="true">
      <path {...doodleStroke} d="M33 7.5c13.6.4 24 11.6 23.5 25.3-.5 13.4-11.8 24-25.2 23.6C17.6 56 7 44.9 7.6 31.4 8.1 18 19.4 7.2 33 7.5Z" />
      <path {...doodleStroke} d="M15.5 14.5c11.4 6.3 18.6 18.9 17.4 41" />
      <path {...doodleStroke} d="M8.3 36.4c13.6-5.2 31-4.1 45.6-15.9" />
      <path {...doodleStroke} d="M31.6 7.9c6.8 9.3 17.4 18.4 24.7 36.6" />
      <path {...doodleStroke} d="M2.5 46.5l5-1.5M4.5 53l5.5-2.8" />
    </svg>
  );
}

function WishStarDoodle() {
  return (
    <svg viewBox="0 0 64 64" width="100%" height="100%" aria-hidden="true">
      <path {...doodleStroke} d="M44 8.5l3 7.6 8.2.4-6.5 5.1 2.3 8-7-4.6-6.9 4.5 2.4-7.9-6.4-5.3 8.3-.2Z" />
      <path {...doodleStroke} d="M31 32.5c-7.4 7.3-14.8 12.6-26.5 17.2" />
      <path {...doodleStroke} d="M35.6 38.5c-5.5 7.7-12.2 13.4-22.4 19" />
      <path {...doodleStroke} d="M24 26.5c-5 2.6-10.4 4.2-17.5 4.6" />
    </svg>
  );
}

const volunteerDoodles = {
  "Volleyball Coach": VolleyballDoodle,
  "Wish Volunteer": WishStarDoodle,
};

function EducationAndVolunteering() {
  return (
    <Box component="section" id="education" sx={{ bgcolor: "bloom.main", borderTop: 1, borderColor: "divider" }}>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <SectionHeading title="Education & volunteering" />

        <Grid container columnSpacing={{ md: 8 }} rowSpacing={{ xs: 6, md: 0 }} alignItems="stretch">
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 3, md: 4 }, pt: { md: 1 } }}>
              <Box>
                <Typography
                  component="h3"
                  sx={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontWeight: 700,
                    fontSize: { xs: "2.4rem", md: "3.1rem" },
                    lineHeight: 1.02,
                    letterSpacing: "-0.035em",
                  }}
                >
                  Bachelor of Computer Science
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 2.5, fontSize: "1.1rem" }}>
                  Dalhousie University, Halifax, NS
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontWeight: 700,
                  fontSize: { xs: "3rem", md: "4.5rem" },
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  color: "transparent",
                  WebkitTextStroke: "1.5px #a35d66",
                }}
              >
                2018 – 2023
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: { xs: "20px", md: "28px" },
                px: { xs: 3, md: 5 },
                py: { xs: 1, md: 2 },
                color: "#f6ecea",
                background: "radial-gradient(80% 70% at 100% 0%, rgba(181,114,122,0.28), transparent 65%), linear-gradient(160deg, #4a332d 0%, #2a1d1b 100%)",
              }}
            >
              {volunteering.map((item, index) => {
                const Doodle = volunteerDoodles[item.role];

                return (
                  <Box
                    key={item.role}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "52px 1fr", md: "68px 1fr" },
                      columnGap: { xs: 2.5, md: 3.5 },
                      py: { xs: 3.5, md: 4.5 },
                      borderTop: index === 0 ? 0 : "1px solid rgba(246,236,234,0.14)",
                    }}
                  >
                    <Box sx={{ color: "#dba1a9", width: { xs: 52, md: 68 }, height: { xs: 52, md: 68 }, transform: index % 2 ? "rotate(6deg)" : "rotate(-8deg)" }}>
                      {Doodle && <Doodle />}
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ color: "#dba1a9", fontWeight: 600 }}>
                        {item.dates}
                      </Typography>
                      <Typography
                        component="h3"
                        sx={{ mt: 0.5, fontFamily: "var(--font-display), Georgia, serif", fontWeight: 700, fontSize: { xs: "1.5rem", md: "1.75rem" }, lineHeight: 1.15, letterSpacing: "-0.02em" }}
                      >
                        {item.role}
                      </Typography>
                      <Typography sx={{ color: "#cdb9b4" }}>{item.company}</Typography>
                      <Typography sx={{ color: "#e6d8d4", lineHeight: 1.7, mt: 1.5 }}>{item.description}</Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

function startValue(dates) {
  const [, month, year] = dates.match(/([A-Za-z]+)\s+(\d{4})/);
  return Number(year) * 12 + months.indexOf(month.slice(0, 3).toLowerCase());
}

const timelineIcons = {
  code: CodeRoundedIcon,
  flight: FlightTakeoffRoundedIcon,
  school: SchoolRoundedIcon,
  rocket: RocketLaunchRoundedIcon,
};

function ExperienceTimeline({ jobs }) {
  return (
    <Box
      component="ol"
      sx={{
        listStyle: "none",
        p: 0,
        m: 0,
        position: "relative",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: `repeat(${jobs.length}, 1fr)` },
        columnGap: 4,
        "&::before": {
          content: '""',
          position: "absolute",
          bgcolor: "divider",
          backgroundImage: { md: "linear-gradient(90deg, #f3e2e2 0%, #a35d66 100%)" },
          top: { xs: 28, md: 27 },
          bottom: { xs: 28, md: "auto" },
          left: { xs: 27, md: 28 },
          right: { md: 28 },
          width: { xs: 2, md: "auto" },
          height: { md: 2 },
        },
      }}
    >
      {jobs.map((job) => {
        const Icon = timelineIcons[job.icon];
        const isCurrent = job.dates.includes("Present");

        return (
          <Box
            component="li"
            key={`${job.company}-${job.role}`}
            sx={{ position: "relative", pl: { xs: 9, md: 0 }, pb: { xs: 5, md: 0 }, "&:last-of-type": { pb: 0 }, "&:hover .timeline-node": { transform: "scale(1.08) rotate(-6deg)" } }}
          >
            <Box
              className="timeline-node"
              aria-hidden="true"
              sx={{
                position: { xs: "absolute", md: "relative" },
                left: { xs: 0 },
                top: { xs: 0 },
                zIndex: 1,
                width: 56,
                height: 56,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: isCurrent ? "secondary.main" : "background.paper",
                color: isCurrent ? "secondary.contrastText" : "secondary.main",
                border: 2,
                borderColor: "secondary.main",
                boxShadow: "0 0 0 6px #ffffff",
                mb: { md: 3 },
                transition: "transform 250ms ease",
                "@media (prefers-reduced-motion: reduce)": { transition: "none" },
              }}
            >
              <Icon />
            </Box>

            <Stack direction="row" alignItems="baseline" spacing={1.5}>
              <Typography sx={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 700, fontSize: "2rem", lineHeight: 1, letterSpacing: "-0.03em" }}>
                {job.dates.match(/\d{4}/)[0]}
              </Typography>
              {isCurrent && (
                <Typography variant="body2" sx={{ fontWeight: 700, color: "secondary.main" }}>
                  Now
                </Typography>
              )}
            </Stack>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {job.dates}
            </Typography>
            <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 600, lineHeight: 1.3, mt: 1.5 }}>
              {job.role}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {job.company}, {job.location}
            </Typography>

            <Box
              component="details"
              sx={{
                mt: 1.5,
                "& > summary": {
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.5,
                  cursor: "pointer",
                  listStyle: "none",
                  color: "secondary.main",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  "&::-webkit-details-marker": { display: "none" },
                  "&:hover": { color: "primary.main" },
                },
                "& .chevron": { transition: "transform 200ms ease" },
                "&[open] .chevron": { transform: "rotate(180deg)" },
              }}
            >
              <summary>
                Highlights
                <ExpandMoreRoundedIcon className="chevron" fontSize="small" />
              </summary>
              <Box component="ul" sx={{ pl: 2.5, m: 0, mt: 1.5, color: "text.secondary" }}>
                {job.points.map((point) => (
                  <Typography component="li" key={point} variant="body2" sx={{ lineHeight: 1.7, mb: 0.75 }}>
                    {point}
                  </Typography>
                ))}
              </Box>
              <TechList items={job.tech} />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

function ProjectVisual({ project, index }) {
  const { visual } = project;
  if (!visual) return null;

  const scene = (
    <Scene wall={visual.wall} tone={visual.tone} sx={{ alignItems: "center", py: { xs: "7%", md: "6.5%" } }}>
      <BrowserWindow width={{ xs: "90%", md: "80%" }} tilt={index % 2 === 0 ? "left" : "right"} label={project.title}>
        {visual.flightMap ? <FlightTrackingScreen /> : <ScreenImage src={visual.screenshot} alt={`${project.title} screenshot`} />}
      </BrowserWindow>
    </Scene>
  );

  if (!project.caseStudy) return scene;

  return (
    <Box
      component="a"
      href={project.caseStudy}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.title} case study on immediac.com`}
      sx={{ display: "block", borderRadius: { xs: "16px", md: "28px" }, "&:focus-visible": { outline: "3px solid #a35d66", outlineOffset: 4 } }}
    >
      {scene}
    </Box>
  );
}

const screenSizes = {
  screen: { role: "1.9cqw", place: "1.6cqw", body: "1.8cqw", button: "1.7cqw", buttonPad: "0.9cqw 2.2cqw", icon: "4.6cqw", iconGlyph: "2.4cqw", gap: "1cqw", top: "2.2cqw" },
  page: { role: "1.1rem", place: "0.875rem", body: "1.05rem", button: "1rem", buttonPad: "10px 22px", icon: "46px", iconGlyph: "24px", gap: "12px", top: "28px" },
};

function HeroRole({ size }) {
  const s = screenSizes[size];

  return (
    <>
      <Typography sx={{ fontWeight: 600, fontSize: s.role, lineHeight: 1.3 }}>Full-stack software developer</Typography>
      <Stack direction="row" alignItems="center" sx={{ color: "text.secondary", gap: "0.3em", fontSize: s.place }}>
        <LocationOnOutlinedIcon sx={{ fontSize: "1.1em" }} />
        <Typography sx={{ fontSize: "inherit" }}>Halifax & Truro, NS</Typography>
      </Stack>
    </>
  );
}

function HeroName() {
  return (
    <Typography variant="h1" sx={{ fontSize: { xs: "12cqw", md: "11cqw" }, lineHeight: 0.86, letterSpacing: "-0.055em" }}>
      Ellen
      <br />
      Lewis
      <Box component="span" aria-hidden="true" sx={{ color: "secondary.main" }}>
        .
      </Box>
    </Typography>
  );
}

function HeroIntro({ size }) {
  const s = screenSizes[size];

  return (
    <>
      <Typography color="text.secondary" sx={{ fontSize: s.body, lineHeight: 1.65, maxWidth: size === "page" ? 460 : "none" }}>
        Software developer at{" "}
        <Box
          component="a"
          href="https://immediac.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "text.primary",
            fontWeight: 600,
            textDecoration: "underline",
            textDecorationColor: "rgba(163,93,102,0.4)",
            textUnderlineOffset: "0.25em",
            "&:hover": { color: "secondary.main" },
          }}
        >
          ImmediaC
        </Box>{" "}
        in Halifax, delivering client solutions for over 5 years.
      </Typography>

      <Stack direction="row" flexWrap="wrap" useFlexGap alignItems="center" sx={{ mt: s.top, gap: s.gap }}>
        <Button component={Link} href="/contact" variant="contained" sx={{ fontSize: s.button, p: s.buttonPad, minWidth: 0 }}>
          Get in touch
        </Button>
        <Button component={Link} href="/resume" variant="outlined" sx={{ fontSize: s.button, p: s.buttonPad, minWidth: 0 }}>
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
              width: s.icon,
              height: s.icon,
              p: 0,
              fontSize: s.iconGlyph,
              border: 1,
              borderColor: "rgba(42,29,27,0.5)",
              color: "primary.main",
              "&:hover": { bgcolor: "secondary.light", borderColor: "secondary.main" },
            }}
          >
            <Icon sx={{ fontSize: "inherit" }} />
          </IconButton>
        ))}
      </Stack>
    </>
  );
}

export default function Home() {
  return (
    <>
      <Box component="section" sx={{ bgcolor: "bloom.main", borderBottom: 1, borderColor: "divider" }}>
        <Container maxWidth="lg" sx={{ pt: { xs: 3, md: 5 }, pb: { xs: 7, md: 10 } }}>
          <Scene
            wall="radial-gradient(80% 70% at 100% 0%, rgba(181,114,122,0.28), transparent 65%), linear-gradient(160deg, #4a332d 0%, #2a1d1b 100%)"
            tone="dark"
            desk="linear-gradient(180deg, #3d2b27 0%, #2a1d1b 100%)"
            sx={{ pt: { xs: "9%", md: "5.5%" }, pb: { xs: "5%", md: "3.5%" } }}
          >
            <Monitor width={{ xs: "92%", md: "80%" }}>
              <Box sx={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "57% 43%" }}>
                <Box
                  sx={{
                    p: "5.5cqw 4cqw 5cqw 5.5cqw",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: { xs: "center", md: "space-between" },
                    background: "linear-gradient(180deg, #ffffff 0%, #faf5f3 100%)",
                  }}
                >
                  <Box sx={{ display: { xs: "none", md: "block" } }}>
                    <HeroRole size="screen" />
                  </Box>
                  <HeroName />
                  <Box sx={{ display: { xs: "none", md: "block" } }}>
                    <HeroIntro size="screen" />
                  </Box>
                </Box>
                <Box sx={{ overflow: "hidden" }}>
                  <Box
                    component="img"
                    src="/images/ellen-lewis.jpg"
                    alt="Ellen Lewis"
                    sx={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", transform: "scale(1.15)", transformOrigin: "50% 22%" }}
                  />
                </Box>
              </Box>
            </Monitor>
          </Scene>

          <Box sx={{ display: { xs: "block", md: "none" }, mt: 4 }}>
            <HeroRole size="page" />
            <Box sx={{ mt: 2.5 }}>
              <HeroIntro size="page" />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component="section" id="experience">
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          <SectionHeading title="Where I've worked" />

          <ExperienceTimeline jobs={[...experience].sort((a, b) => startValue(a.dates) - startValue(b.dates))} />
        </Container>
      </Box>

      <Box component="section" id="work" sx={{ borderTop: 1, borderBottom: 1, borderColor: "divider" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          <SectionHeading title="Recent projects" />

          <Stack spacing={{ xs: 8, md: 12 }}>
            {work.map((project, index) => (
              <Box key={project.title}>
                <ProjectVisual project={project} index={index} />
                <Grid container columnSpacing={6} rowSpacing={2} sx={{ mt: project.visual ? { xs: 3, md: 4 } : 0 }}>
                  <Grid size={{ xs: 12, md: 5 }}>
                    <Stack direction="row" justifyContent="space-between" spacing={2} sx={{ mb: 1 }}>
                      <Typography variant="body2" color="secondary" sx={{ fontWeight: 600 }}>
                        {project.context}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: "nowrap" }}>
                        {project.year}
                      </Typography>
                    </Stack>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 600, fontSize: { md: "1.75rem" } }}>
                      {project.title}
                    </Typography>
                    {project.caseStudy && (
                      <Box
                        component="a"
                        href={project.caseStudy}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: "inline-block",
                          mt: 1.5,
                          color: "secondary.main",
                          fontWeight: 600,
                          textDecoration: "underline",
                          textUnderlineOffset: "4px",
                          "&:hover": { color: "primary.main" },
                        }}
                      >
                        Case study on immediac.com
                      </Box>
                    )}
                  </Grid>
                  <Grid size={{ xs: 12, md: 7 }}>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {project.description}
                    </Typography>
                    <TechList items={project.tech} />
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      <EducationAndVolunteering />

      <Box component="section" id="skills" sx={{ borderTop: 1, borderColor: "divider" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          <SectionHeading title="What I work with" />
          <SkillKeyboard />
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
              Let&apos;s connect
            </Typography>
            <Typography sx={{ color: "#e3cfcc", maxWidth: 520 }}>
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
