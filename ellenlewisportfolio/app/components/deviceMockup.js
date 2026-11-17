import { Box } from "@mui/material";

const aluminium = "linear-gradient(90deg, #a7a7ad 0%, #e4e4e8 22%, #f4f4f6 50%, #d6d6db 78%, #9d9da3 100%)";

export function Monitor({ children, width = "76%", screenRatio = "16 / 10", sx }) {
  return (
    <Box
      className="monitor"
      sx={{ width, mx: "auto", position: "relative", zIndex: 1, transition: "transform 450ms cubic-bezier(.2,.7,.2,1)", ...sx }}
    >
      <Box
        sx={{
          background: "linear-gradient(180deg, #2b2b2f 0%, #121214 100%)",
          borderRadius: { xs: "8px", md: "16px" },
          p: "1.4%",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08), 0 50px 70px -35px rgba(20,10,40,0.6)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            aspectRatio: screenRatio,
            overflow: "hidden",
            borderRadius: { xs: "3px", md: "5px" },
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
              background: "linear-gradient(118deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.04) 30%, transparent 31%)",
              pointerEvents: "none",
            }}
          />
        </Box>
      </Box>
      <Box
        aria-hidden="true"
        sx={{ width: "15%", aspectRatio: "1.25 / 1", mx: "auto", background: aluminium, clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0 100%)" }}
      />
      <Box
        aria-hidden="true"
        sx={{
          position: "relative",
          width: "30%",
          aspectRatio: "16 / 1",
          mx: "auto",
          background: aluminium,
          borderRadius: "2px 2px 5px 5px",
          boxShadow: "0 1px 0 rgba(255,255,255,0.6) inset",
          "&::after": {
            content: '""',
            position: "absolute",
            left: "-35%",
            right: "-35%",
            top: "40%",
            height: "300%",
            background: "radial-gradient(closest-side, rgba(20,10,40,0.38), transparent)",
            zIndex: -1,
          },
        }}
      />
    </Box>
  );
}

export function BrowserWindow({ children, label, tilt = "left", width = "82%" }) {
  const rotate = tilt === "left" ? "rotateY(-12deg) rotateX(7deg) rotateZ(1.5deg)" : "rotateY(12deg) rotateX(7deg) rotateZ(-1.5deg)";

  return (
    <Box sx={{ width, mx: "auto", perspective: "2200px", position: "relative", zIndex: 1 }}>
      <Box
        className="browser"
        sx={{
          borderRadius: { xs: "8px", md: "14px" },
          overflow: "hidden",
          bgcolor: "#ffffff",
          transform: { xs: "none", md: rotate },
          transformOrigin: "center",
          transition: "transform 700ms cubic-bezier(.2,.7,.2,1)",
          boxShadow: "0 2px 0 rgba(255,255,255,0.5) inset, 0 60px 90px -40px rgba(10,20,15,0.55), 0 20px 30px -20px rgba(10,20,15,0.35)",
          "@media (prefers-reduced-motion: reduce)": { transition: "none" },
        }}
      >
        <Box
          aria-hidden="true"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "5px", md: "8px" },
            px: { xs: 1.25, md: 2 },
            height: { xs: 22, md: 38 },
            bgcolor: "#f1f3ef",
            borderBottom: "1px solid #e1e6dd",
          }}
        >
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <Box key={c} sx={{ width: { xs: 7, md: 11 }, height: { xs: 7, md: 11 }, borderRadius: "50%", bgcolor: c }} />
          ))}
          {label && (
            <Box
              sx={{
                mx: "auto",
                px: { xs: 1.5, md: 3 },
                py: { xs: "1px", md: "4px" },
                borderRadius: 999,
                bgcolor: "#ffffff",
                border: "1px solid #e1e6dd",
                color: "#56605a",
                fontSize: { xs: "0.55rem", md: "0.78rem" },
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              {label}
            </Box>
          )}
        </Box>
        <Box sx={{ position: "relative", aspectRatio: "16 / 10", overflow: "hidden" }}>{children}</Box>
      </Box>
    </Box>
  );
}

export function ScreenImage({ src, alt }) {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      loading="lazy"
      sx={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
    />
  );
}

const sceneLight = {
  light: { beam: 0.22, glow: 0.75, rim: 0.65 },
  dark: { beam: 0.06, glow: 0.16, rim: 0.12 },
};

export function Scene({ wall, desk, tone = "light", sx, children }) {
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
        "&:hover .browser": { transform: "none" },
        "@media (prefers-reduced-motion: reduce)": { "&:hover .monitor": { transform: "none" } },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
