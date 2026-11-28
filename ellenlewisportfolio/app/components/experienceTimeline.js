"use client";
import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import FlightTakeoffRoundedIcon from "@mui/icons-material/FlightTakeoffRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import SpaRoundedIcon from "@mui/icons-material/SpaRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import TechList from "./techList";

const timelineIcons = {
  code: CodeRoundedIcon,
  flight: FlightTakeoffRoundedIcon,
  school: SchoolRoundedIcon,
  rocket: RocketLaunchRoundedIcon,
  leaf: SpaRoundedIcon,
  degree: WorkspacePremiumRoundedIcon,
};

function jobKey(job) {
  return `${job.company}-${job.role}`;
}

function HighlightsPanel({ job }) {
  return (
    <Box
      role="region"
      aria-label={`${job.role} highlights`}
      sx={{
        bgcolor: "background.paper",
        border: 1,
        borderColor: "divider",
        borderRadius: 3,
        p: { xs: 2.5, md: 4 },
      }}
    >
      <Typography sx={{ fontWeight: 600 }}>
        {job.role}
        <Box component="span" sx={{ color: "text.secondary", fontWeight: 400 }}>
          {" "}· {job.company}
        </Box>
      </Typography>
      {job.points.length > 0 && (
        <Box
          component="ul"
          sx={{
            pl: 2.5,
            m: 0,
            mt: 1.5,
            color: "text.secondary",
            columnCount: { xs: 1, md: job.points.length > 2 ? 2 : 1 },
            columnGap: 6,
          }}
        >
          {job.points.map((point) => (
            <Typography component="li" key={point} variant="body2" sx={{ lineHeight: 1.7, mb: 1, breakInside: "avoid" }}>
              {point}
            </Typography>
          ))}
        </Box>
      )}
      <TechList items={job.tech} />
    </Box>
  );
}

export default function ExperienceTimeline({ jobs }) {
  const current = jobs.find((job) => job.dates.includes("Present")) ?? jobs[jobs.length - 1];
  const [selectedKey, setSelectedKey] = useState(jobKey(current));
  const selected = jobs.find((job) => jobKey(job) === selectedKey);

  return (
    <>
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
          const key = jobKey(job);
          const isSelected = key === selectedKey;

          return (
            <Box
              component="li"
              key={key}
              sx={{ position: "relative", pl: { xs: 9, md: 0 }, pb: { xs: 4, md: 0 }, "&:last-of-type": { pb: 0 } }}
            >
              <Box
                component="button"
                type="button"
                onClick={() => setSelectedKey(key)}
                aria-expanded={isSelected}
                sx={{
                  all: "unset",
                  display: "block",
                  width: "100%",
                  cursor: "pointer",
                  borderRadius: 2,
                  "&:focus-visible": { outline: "2px solid", outlineColor: "secondary.main", outlineOffset: 4 },
                  "&:hover .timeline-node": { transform: "scale(1.08) rotate(-6deg)" },
                  "&:hover .timeline-role": { color: "secondary.main" },
                }}
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
                    bgcolor: isSelected ? "secondary.main" : "background.paper",
                    color: isSelected ? "secondary.contrastText" : "secondary.main",
                    border: 2,
                    borderColor: "secondary.main",
                    boxShadow: "0 0 0 6px #ffffff",
                    mb: { md: 3 },
                    transition: "transform 250ms ease, background-color 200ms ease",
                    "@media (prefers-reduced-motion: reduce)": { transition: "none" },
                  }}
                >
                  <Icon />
                </Box>

                <Typography
                  className="timeline-role"
                  variant="subtitle1"
                  component="h3"
                  sx={{ fontWeight: 600, lineHeight: 1.3, color: isSelected ? "secondary.main" : "text.primary", transition: "color 200ms ease" }}
                >
                  {job.role}
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 0.5, mb: 0.25 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: "secondary.main" }}>
                    {job.dates}
                  </Typography>
                  {job.dates.includes("Present") && (
                    <Box
                      component="span"
                      sx={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: "secondary.main", bgcolor: "secondary.light", borderRadius: 1, px: 0.75, py: 0.25 }}
                    >
                      Now
                    </Box>
                  )}
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  {job.company}, {job.location}
                </Typography>
              </Box>

              {isSelected && (
                <Box sx={{ display: { xs: "block", md: "none" }, mt: 2 }}>
                  <HighlightsPanel job={job} />
                </Box>
              )}
            </Box>
          );
        })}
      </Box>

      {selected && (
        <Box sx={{ display: { xs: "none", md: "block" }, mt: 4 }}>
          <HighlightsPanel job={selected} />
        </Box>
      )}
    </>
  );
}
