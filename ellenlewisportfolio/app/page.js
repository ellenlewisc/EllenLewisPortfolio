import { Box, Button, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Link from "next/link";
import { socialLinks } from "./components/socialLinks";
import { Monitor, Scene } from "./components/deviceMockup";
import FlightTrackingScreen from "./components/flightTrackingScreen";
import EnergyDashboardScreen from "./components/energyDashboardScreen";
import TrainingDashboardScreen from "./components/trainingDashboardScreen";
import BidrPhonesScreen from "./components/bidrPhonesScreen";
import TechList from "./components/techList";
import ExperienceTimeline from "./components/experienceTimeline";

const experience = [
  {
    role: "Software Developer",
    company: "ImmediaC",
    icon: "code",
    location: "Halifax, NS",
    dates: "Sept 2021 – Present",
    points: [
      "Design, build and maintain client websites and custom web applications, from initial requirements through deployment.",
      "Work both independently and as part of the team, owning projects end to end or collaborating on larger systems.",
      "Work directly with clients across sectors (a teachers' union, energy trading, senior living, retail) to define scope and timelines, and turn their needs into clear, buildable requirements.",
      "Deliver third-party API integrations such as Stripe payments, Yardi CRM and AI tools.",
      "Write project plans before building and testing documentation before launch, so the team and client share one understanding of the approach and can give feedback early.",
    ],
    tech: [".NET", "C#", "SQL", "JavaScript"],
  },
  {
    role: "Software Developer (Contract through ImmediaC)",
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
      "Designed and initiated the development of a website for the launch of a new high school space program.",
    ],
    tech: [],
  },
  {
    role: "Conference Website Manager & Research Assistant",
    company: "Wild Blueberry Research, Dalhousie co-op",
    icon: "leaf",
    location: "Truro, NS",
    dates: "June 2020 – Sept 2020",
    points: [
      "Built and maintained two websites for the research program, keeping their platform up to date with conference information.",
      "Supported day-to-day research operations: analyzing plant samples and keeping data records accurate.",
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
      "Led the full replacement of the Nova Scotia Teachers Union's registry. Migrated 40,000+ member records and kept the old system's API compatible, so the conference platform kept working through the switch. Built admin and member portals with granular, role-based access scoped by local, site or regional council. The platform also includes single sign-on with nstu.ca, a communication centre for bulk email and SMS, and mail-merge document generation to PDF.",
    tech: [".NET", "C#", "SQL", "Tailwind"],
    visual: { screenshot: "/images/work/nstu-registry.webp" },
    caseStudy: "https://immediac.com/our-work/nstu",
  },
  {
    title: "NSTU Conference Platform",
    context: "ImmediaC client project",
    year: "2026",
    description:
      "Led the redesign of the Nova Scotia Teachers Union's conference registration and management platform. Staff build each conference with fees, workshop sessions, custom registration questions and seat limits, or have AI generate the full setup from a filled-in template. Members register, rank their workshop choices and pay through Stripe, while the platform handles workshop moves, refunds and publishing to nstu.ca. Before launch, spotted a seat-overselling risk carried over from the legacy system, fixed it before any member was affected, and laid out the trade-offs so the team could make an informed call.",
    tech: [".NET", "C#", "Stripe", "AI"],
    visual: { screenshot: "/images/work/nstu-conference.webp" },
    caseStudy: "https://immediac.com/our-work/nstu",
  },
  {
    title: "Energy Trading Platform",
    context: "ImmediaC client project",
    year: "2026",
    description:
      "Led development of a data management and visualization platform that replaced an energy arbitrage client's legacy Access database, and migrated all of their existing data. Built an MCP server so staff can pull up and upload daily pricing and transaction data from within the AI tools they use frequently. AI submissions land in an awaiting-approval state, as requested by the client, to ensure correctness.",
    tech: [".NET", "C#", "MCP Servers", "AI"],
    visual: { energyDashboard: true },
    caseStudy: "https://immediac.com/our-work/energy-atlantica",
  },
  {
    title: "VMO Operations Control API",
    context: "Cougar Helicopters",
    year: "2025",
    description:
      "Built a .NET Web API connecting Cougar Helicopters' VMO flight management system (scheduling and dispatch software) to their internal systems. It synchronizes flight data in real time with legacy display and monitoring screens. Worked with internal teams to keep flight information secure and accurate across every system it touched.",
    tech: [".NET", "C#", "SQL", "REST APIs"],
    visual: { flightMap: true },
  },
  {
    title: "Pilot Training Platform",
    context: "Cougar Helicopters",
    year: "2024 – 2025",
    description:
      "Built a custom training platform with role-based authentication that replaced legacy systems for tracking pilot and engineer certifications. Its success led the client to expand its scope from pilot training to all company training and related data.",
    tech: [".NET", "C#", "Next.js", "React", "SQL", "OpenIddict"],
    visual: { trainingDashboard: true },
  },
  {
    title: "BIDR Platform",
    context: "ImmediaC client project",
    year: "2026",
    description:
      "Built a marketplace-style app for iOS, Android and the web as one of two developers. Customers describe a job to an AI assistant, which turns the conversation into a structured service request. Local providers browse matching requests nearby. AI moderation screens every post and fails safe: if it can't run, the post is held for admin review instead of going live. Customers choose exactly which contact details each provider sees, keeping them in control of their privacy.",
    tech: ["React Native", "Expo", ".NET", "C#", "Azure OpenAI"],
    visual: { bidrPhones: true },
  },
];

const skills = [
  { group: "Technical", items: [".NET", "React", "Next.js", "Vue.js", "APIs", "Git", "AI & MCP integrations"] },
  { group: "Languages", items: ["C#", "JavaScript", "SQL", "Python", "Java"] },
  { group: "People & delivery", items: ["Client communication", "Coaching & teaching", "Requirements gathering", "Scoping & estimation", "Planning & tracking", "Risk management"] },
  { group: "Documentation", items: ["Project plans", "Decision records", "Test plans", "Launch readiness"] },
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

function isCurrent(job) {
  return job.dates.includes("Present");
}

function startValue(dates) {
  const [, month, year] = dates.match(/([A-Za-z]+)\s+(\d{4})/);
  return Number(year) * 12 + months.indexOf(month.slice(0, 3).toLowerCase());
}

function ProjectVisual({ project }) {
  const { visual } = project;
  if (!visual) return null;

  const media = (
    <Box
      sx={{
        position: "relative",
        aspectRatio: "16 / 10",
        overflow: "hidden",
        borderRadius: { xs: "14px", md: "18px" },
        border: 1,
        borderColor: "divider",
        bgcolor: visual.flightMap ? "#0b1726" : "#ffffff",
        boxShadow: "0 24px 40px -30px rgba(42,29,27,0.45)",
        "& .media": { transition: "transform 600ms cubic-bezier(.2,.7,.2,1)", transformOrigin: "left top" },
        "&:hover .media": { transform: "scale(1.03)" },
        "@media (prefers-reduced-motion: reduce)": { "& .media": { transition: "none" } },
      }}
    >
      <Box className="media" sx={{ height: "100%" }}>
        {visual.flightMap ? (
          <FlightTrackingScreen />
        ) : visual.energyDashboard ? (
          <EnergyDashboardScreen />
        ) : visual.trainingDashboard ? (
          <TrainingDashboardScreen />
        ) : visual.bidrPhones ? (
          <BidrPhonesScreen />
        ) : (
          <Box
            component="img"
            src={visual.screenshot}
            alt={`${project.title} screenshot`}
            loading="lazy"
            sx={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "left top" }}
          />
        )}
      </Box>
    </Box>
  );

  return (
    <Box>
      {project.caseStudy ? (
        <Box
          component="a"
          href={project.caseStudy}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} on immediac.com`}
          sx={{ display: "block", borderRadius: { xs: "16px", md: "20px" }, "&:focus-visible": { outline: "3px solid #a35d66", outlineOffset: 4 } }}
        >
          {media}
        </Box>
      ) : (
        media
      )}
      {!visual.screenshot && (
        <Typography variant="caption" color="text.secondary" component="p" sx={{ mt: 0.75 }}>
          Illustrative mockup, not the actual product
        </Typography>
      )}
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
      <Stack direction="row" alignItems="center" sx={{ color: "text.secondary", gap: "0.3em", fontSize: s.place, mt: "0.35em" }}>
        <LocationOnOutlinedIcon sx={{ fontSize: "1.1em" }} />
        <Typography sx={{ fontSize: "inherit" }}>Halifax, NS · Truro, NS · St. John&apos;s, NL</Typography>
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
              color: "primary.main",
              "&:hover": { bgcolor: "transparent", color: "secondary.main" },
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
            sunlight
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

          <ExperienceTimeline jobs={[...experience].sort((a, b) => isCurrent(a) - isCurrent(b) || startValue(a.dates) - startValue(b.dates))} />
        </Container>
      </Box>

      <Box component="section" id="work" sx={{ borderTop: 1, borderBottom: 1, borderColor: "divider" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          <SectionHeading title="Recent projects" />

          <Grid container columnSpacing={{ xs: 0, md: 5 }} rowSpacing={{ xs: 7, md: 9 }}>
            {work.map((project) => (
              <Grid key={project.title} size={{ xs: 12, md: 6 }}>
                <ProjectVisual project={project} />
                <Box sx={{ mt: project.visual ? 2.5 : 0 }}>
                  <Stack direction="row" justifyContent="space-between" spacing={2} sx={{ mb: 0.75 }}>
                    <Typography variant="body2" color="secondary" sx={{ fontWeight: 600 }}>
                      {project.context}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: "nowrap" }}>
                      {project.year}
                    </Typography>
                  </Stack>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                    {project.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.7, mt: 1.25 }}>
                    {project.description}
                  </Typography>
                  <TechList items={project.tech} />
                  {project.caseStudy && (
                    <Box
                      component="a"
                      href={project.caseStudy}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on immediac.com`}
                      sx={{
                        display: "inline-block",
                        mt: 2,
                        color: "secondary.main",
                        fontWeight: 600,
                        textDecoration: "underline",
                        textUnderlineOffset: "4px",
                        "&:hover": { color: "primary.main" },
                      }}
                    >
                      More about this project on immediac.com <Box component="span" aria-hidden="true">↗</Box>
                    </Box>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
          <Typography variant="body2" color="text.secondary" sx={{ mt: { xs: 6, md: 8 }, maxWidth: 640 }}>
            NSTU screens are from ImmediaC&apos;s published case study with test data. All other project images are illustrative mockups, not actual
            product screens or client data.
          </Typography>
        </Container>
      </Box>

      <EducationAndVolunteering />

      <Box component="section" id="skills" sx={{ borderTop: 1, borderColor: "divider" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          <SectionHeading title="How I work" />
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
