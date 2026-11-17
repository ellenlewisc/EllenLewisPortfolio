import { Box } from "@mui/material";

const brushedAluminium =
  "linear-gradient(90deg, #8f9095 0%, #c9cacf 14%, #e9eaee 34%, #f6f6f8 50%, #e4e5e9 66%, #c3c4c9 86%, #8c8d92 100%)";

export function Monitor({ children, width = "76%", screenRatio = "16 / 10", sx }) {
  return (
    <Box
      className="monitor"
      sx={{ width, mx: "auto", position: "relative", zIndex: 1, transition: "transform 450ms cubic-bezier(.2,.7,.2,1)", ...sx }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          p: "0.35%",
          borderRadius: { xs: "10px", md: "20px" },
          background: "linear-gradient(180deg, #f2f2f4 0%, #c9cace 45%, #a9aaaf 100%)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(0,0,0,0.25), 0 2px 3px rgba(0,0,0,0.25), 0 28px 40px -18px rgba(15,8,6,0.55), 0 70px 90px -50px rgba(15,8,6,0.6)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            p: "1.15%",
            borderRadius: { xs: "8px", md: "17px" },
            background: "linear-gradient(180deg, #161618 0%, #0a0a0b 100%)",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 1px rgba(255,255,255,0.08)",
          }}
        >
          <Box
            aria-hidden="true"
            sx={{
              position: "absolute",
              top: "0.45%",
              left: "50%",
              transform: "translate(-50%, 0)",
              width: { xs: 3, md: 6 },
              height: { xs: 3, md: 6 },
              borderRadius: "50%",
              background: "radial-gradient(circle at 35% 35%, #3a4a5c 0%, #101418 60%)",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.05)",
            }}
          />
          <Box
            sx={{
              position: "relative",
              aspectRatio: screenRatio,
              overflow: "hidden",
              borderRadius: { xs: "2px", md: "4px" },
              bgcolor: "#ffffff",
              containerType: "inline-size",
            }}
          >
            {children}
            <Box
              aria-hidden="true"
              sx={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background:
                  "linear-gradient(112deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.05) 26%, rgba(255,255,255,0) 26.5%), linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,0.05) 100%)",
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box aria-hidden="true" sx={{ position: "relative", width: "17%", mx: "auto", mt: "-0.6%" }}>
        <Box
          sx={{
            aspectRatio: "1 / 0.82",
            background: brushedAluminium,
            borderRadius: "0 0 2px 2px",
            boxShadow: "inset 0 18px 22px -10px rgba(0,0,0,0.45), inset 1px 0 0 rgba(255,255,255,0.35), inset -1px 0 0 rgba(0,0,0,0.15)",
          }}
        />
        <Box
          sx={{
            position: "relative",
            width: "190%",
            ml: "-45%",
            aspectRatio: "26 / 1",
            borderRadius: "3px 3px 50% 50% / 3px 3px 100% 100%",
            background: "linear-gradient(180deg, #f4f4f6 0%, #d3d4d8 45%, #9a9ba0 100%)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.95), 0 1px 1px rgba(0,0,0,0.25)",
            "&::after": {
              content: '""',
              position: "absolute",
              left: "-12%",
              right: "-12%",
              top: "55%",
              height: "320%",
              background: "radial-gradient(closest-side, rgba(10,5,4,0.5), rgba(10,5,4,0.18) 55%, transparent)",
              filter: "blur(2px)",
              zIndex: -1,
            },
          }}
        />
      </Box>
    </Box>
  );
}

const sceneLight = {
  light: { beam: 0.22, glow: 0.75, rim: 0.65 },
  dark: { beam: 0.06, glow: 0.16, rim: 0.12 },
};

function WindowLight() {
  return (
    <Box
      aria-hidden="true"
      sx={{
        position: "absolute",
        inset: "-10%",
        zIndex: 0,
        pointerEvents: "none",
        mixBlendMode: "screen",
        filter: "blur(22px)",
        opacity: 0.55,
        background:
          "linear-gradient(118deg, transparent 8%, rgba(255,214,190,0.32) 12%, rgba(255,214,190,0.32) 20%, transparent 24%, transparent 30%, rgba(255,214,190,0.26) 34%, rgba(255,214,190,0.26) 41%, transparent 45%, transparent 63%, rgba(255,214,190,0.18) 67%, rgba(255,214,190,0.18) 72%, transparent 76%)",
        maskImage: "linear-gradient(180deg, #000 0%, #000 55%, transparent 92%)",
      }}
    />
  );
}

export function Scene({ wall, desk, tone = "light", sunlight = false, sx, children }) {
  const { beam, glow, rim } = sceneLight[tone];

  return (
    <Box
      sx={{
        position: "relative",
        isolation: "isolate",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        borderRadius: { xs: "16px", md: "28px" },
        background: `linear-gradient(115deg, transparent 28%, rgba(255,255,255,${beam}) 36%, transparent 46%), radial-gradient(70% 60% at 20% 12%, rgba(255,255,255,${glow}), transparent 62%), ${wall}`,
        "&::before": desk && {
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "15%",
          background: desk,
          borderTop: `1px solid rgba(255,255,255,${rim})`,
          zIndex: 0,
        },
        "&:hover .monitor": { transform: "translateY(-6px)" },
        "@media (prefers-reduced-motion: reduce)": { "&:hover .monitor": { transform: "none" } },
        ...sx,
      }}
    >
      {sunlight && <WindowLight />}
      {children}
    </Box>
  );
}
