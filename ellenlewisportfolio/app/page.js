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
      "Design, build and maintain websites and custom web applications for clients using .NET, SQL Server, Azure and a range of front-end frameworks.",
      "Meet with clients to define scope, set timelines, demo new features and gather feedback.",
      "Integrate third-party services, including payment processors, CRMs and AI tools.",
      "Write project plans before development and test documentation before launch, so the team and client can give feedback early.",
    ],
    tech: [".NET", "C#", "SQL", "Azure", "JavaScript"],
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
  {
    role: "Bachelor of Computer Science",
    company: "Dalhousie University",
    icon: "degree",
    location: "Halifax, NS",
    dates: "2018 – 2023",
    points: [],
    tech: [],
  },
];

const volunteering = [
  {
    role: "Volleyball Coach",
    company: "Nova Knights U16 girls",
    dates: "2026 – Present",
    description:
      "Plan and run practices, set goals for the season, and organize games with players, parents and the club.",
  },
  {
    role: "Wish Volunteer",
    company: "Make-A-Wish",
    dates: "2025 – Present",
    description:
      "Help plan and deliver wish reveals, working with families and Make-A-Wish staff to make each one special.",
  },
];

const work = [
  {
    title: "NSTU Member Registry",
    context: "ImmediaC client project",
    year: "2026",
    description:
      "The Nova Scotia Teachers Union's member registry, holding 40,000+ member records. It includes staff and member portals with permissions limited to each user's local, site or regional council, case management, bulk email and SMS, and PDF document generation. Members use one login across three platforms through the union's website accounts, with required 2FA. I led the rebuild in .NET 9 and Azure, migrating the records from the old system and keeping the API the conference and website apps rely on working through the switch.",
    tech: [".NET", "C#", "SQL", "Azure", "Tailwind"],
    visual: { screenshot: "/images/work/nstu-registry.webp" },
    caseStudy: "https://immediac.com/our-work/nstu",
  },
  {
    title: "NSTU Conference Platform",
    context: "ImmediaC client project",
    year: "2026",
    description:
      "The Nova Scotia Teachers Union's conference registration and management platform. In the member portal, teachers register for a conference, rank their workshop choices and pay through Stripe. If they change their registration after paying, the platform works out the price difference and charges or refunds it automatically. In the admin portal, staff set up each conference with fees, workshops, custom questions and capacity limits, or use an AI feature to build it from a template submitted by volunteers. Each conference syncs to the NSTU public website. I led the rebuild of their legacy system into the platform they use today.",
    tech: [".NET", "C#", "Stripe", "AI"],
    visual: { screenshot: "/images/work/nstu-conference.webp" },
    caseStudy: "https://immediac.com/our-work/nstu",
  },
  {
    title: "Energy Trading Platform",
    context: "ImmediaC client project",
    year: "2026",
    description:
      "A data management and visualization platform for an energy arbitrage client, replacing their legacy Access database. Staff track daily pricing and transaction data in one place, and an MCP server lets them pull up and upload that data from within the AI tools they already use. At the client's request, data uploaded through AI is held for review before it's saved. I led development and migrated all of their existing data from the old database.",
    tech: [".NET", "C#", "MCP Servers", "AI"],
    visual: { energyDashboard: true },
    caseStudy: "https://immediac.com/our-work/energy-atlantica",
  },
  {
    title: "VMO Operations Control API",
    context: "Cougar Helicopters",
    year: "2025",
    description:
      "A .NET Web API that connects Cougar Helicopters' VMO flight management system (their scheduling and dispatch software) to their internal systems. It syncs flight data in real time to the legacy display and monitoring screens used around the base, so everyone sees the same flight information.",
    tech: [".NET", "C#", "SQL", "REST APIs"],
    visual: { flightMap: true },
  },
  {
    title: "Pilot Training Platform",
    context: "Cougar Helicopters",
    year: "2024 – 2025",
    description:
      "Built a custom training platform to replace the client's old systems for tracking pilot and engineer certifications, with access based on each user's role. The client later expanded it to cover all company training and related records.",
    tech: [".NET", "C#", "Next.js", "React", "SQL", "OpenIddict"],
    visual: { trainingDashboard: true },
  },
  {
    title: "BIDR Platform",
    context: "ImmediaC client project",
    year: "2026",
    description:
      "A marketplace app for iOS, Android and the web that connects customers with local service providers. Customers describe a job to an AI assistant, which turns the conversation into a structured service request, and providers browse matching requests nearby. Every post goes through AI moderation before it goes live, and customers choose which contact details each provider can see. Built with React Native and Expo on a .NET backend, using Azure OpenAI for the AI features. I was one of three developers on the project.",
    tech: ["React Native", "Expo", ".NET", "C#", "Azure OpenAI"],
    visual: { bidrPhones: true },
  },
];

const skills = [
  { group: "Technical", items: [".NET", "Azure", "React", "Next.js", "Vue.js", "APIs", "Git", "AI & MCP integrations"] },
  { group: "Languages", items: ["C#", "JavaScript", "SQL", "Python", "Java"] },
  { group: "People & delivery", items: ["Client communication & demos", "Coaching & teaching", "Requirements gathering", "Scoping & estimation", "Planning & tracking", "Risk management"] },
  { group: "Documentation", items: ["Project plans", "Decision records", "Test plans"] },
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

function SkillGroups() {
  return (
    <Grid container spacing={{ xs: 4, md: 6 }}>
      {skills.map((skill) => (
        <Grid key={skill.group} size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography component="h3" sx={{ fontWeight: 700, fontSize: "1.15rem", pb: 1.5, mb: 1.5, borderBottom: 2, borderColor: "secondary.main" }}>
            {skill.group}
          </Typography>
          <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0 }}>
            {skill.items.map((item) => (
              <Typography component="li" key={item} color="text.secondary" sx={{ py: 0.5 }}>
                {item}
              </Typography>
            ))}
          </Box>
        </Grid>
      ))}
    </Grid>
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

function Volunteering() {
  return (
    <Box component="section" id="volunteering" sx={{ bgcolor: "bloom.main", borderTop: 1, borderColor: "divider" }}>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <SectionHeading title="Volunteering" />

        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            columnGap: 8,
            borderRadius: { xs: "20px", md: "28px" },
            px: { xs: 3, md: 6 },
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
                  borderTop: { xs: index === 0 ? 0 : "1px solid rgba(246,236,234,0.14)", md: 0 },
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
                    sx={{ mt: 0.5, fontWeight: 700, fontSize: { xs: "1.5rem", md: "1.75rem" }, lineHeight: 1.15, letterSpacing: "-0.02em" }}
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
      </Container>
    </Box>
  );
}

const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

function isCurrent(job) {
  return job.dates.includes("Present");
}

function startValue(dates) {
  const [, month, year] = dates.match(/(?:([A-Za-z]+)\s+)?(\d{4})/);
  return Number(year) * 12 + (month ? months.indexOf(month.slice(0, 3).toLowerCase()) : 0);
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
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  alignItems: "center",
                  columnGap: "4cqw",
                  p: "5.5cqw 6.5cqw 5cqw 5.5cqw",
                  background: "radial-gradient(50% 80% at 85% 55%, rgba(243,226,226,0.95), transparent 70%), linear-gradient(180deg, #ffffff 0%, #faf5f3 100%)",
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: { xs: "center", md: "space-between" },
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
                <Box
                  sx={{
                    width: "29cqw",
                    aspectRatio: "4 / 5",
                    borderRadius: "1.4cqw",
                    overflow: "hidden",
                    border: "0.55cqw solid #ffffff",
                    boxShadow: "0 0 0 1px #ece3e0, 0 2cqw 4cqw rgba(42,29,27,0.18)",
                  }}
                >
                  <Box
                    component="img"
                    src="/images/ellen-lewis.jpg"
                    alt="Ellen Lewis"
                    sx={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", transform: "scale(1.1)", transformOrigin: "50% 25%" }}
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
          <SectionHeading title="Experience" />

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
            NSTU screenshots are from ImmediaC&apos;s published case study, using test data. Other project images are illustrative mockups.
          </Typography>
        </Container>
      </Box>

      <Volunteering />

      <Box component="section" id="skills" sx={{ borderTop: 1, borderColor: "divider" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          <SectionHeading title="How I work" />
          <SkillGroups />
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
              Have a question about something here? Send me a message and I&apos;ll get back to you.
            </Typography>
          </Box>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            size="large"
            sx={{ bgcolor: "#ffffff", color: "primary.main", "&:hover": { bgcolor: "secondary.light" } }}
          >
            Contact
          </Button>
        </Container>
      </Box>
    </>
  );
}
