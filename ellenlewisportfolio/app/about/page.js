import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function About() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "5rem",
        fontFamily: "'Segoe UI', Arial, sans-serif",
      }}
    >
      <h1
        style={{
          color: "#ff69b4",
          fontSize: "2.8rem",
          fontWeight: "bold",
          marginBottom: "0.5rem",
          letterSpacing: "0.05em",
        }}
      >
        About
      </h1>
       <div
        style={{
          display: "flex",
          alignItems: "center",
          color: "#222",
          fontWeight: "bold",
          fontSize: "1.15rem",
          marginTop: "0.5rem",
          marginBottom: "2rem",
          gap: "0.4rem",
        }}
      >
        <LocationOnIcon sx={{ color: "#ff69b4" }} />
        Halifax, NS
      </div>
      <p
        style={{
          color: "#333",
          fontSize: "1.3rem",
          maxWidth: 600,
          textAlign: "center",
          lineHeight: 1.8,
          marginBottom: "0.8rem",
          background: "#f9f9f9",
          borderRadius: "1rem",
          padding: "2rem 2.5rem",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        }}
      >
        Hi! I'm{" "}
        <span style={{ color: "#ff69b4", fontWeight: "bold" }}>Ellen Lewis</span>, a software developer at ImmediaC.
        <br />
        <a
          href="https://www.linkedin.com/in/ellen-lewis"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#ff69b4",
            textDecoration: "underline",
            fontWeight: "bold",
            marginTop: "1rem",
            display: "inline-block",
            fontSize: "1.1rem",
          }}
        >
          www.linkedin.com/in/ellen-lewis
        </a>
      </p>
    </main>
  );
}