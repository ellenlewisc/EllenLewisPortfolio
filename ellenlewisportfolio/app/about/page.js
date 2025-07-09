export default function About() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "5rem",
      fontFamily: "'Segoe UI', Arial, sans-serif"
    }}>
      <h1 style={{
        color: "#ff69b4",
        fontSize: "2.8rem",
        fontWeight: "bold",
        marginBottom: "2rem",
        letterSpacing: "0.05em"
      }}>
        About
      </h1>
      <p style={{
        color: "#333",
        fontSize: "1.25rem",
        maxWidth: 600,
        textAlign: "center",
        lineHeight: 1.7
      }}>
        Hi! I'm Ellen Lewis, a software developer at ImmediaC.<br />
        <a
          href="https://www.linkedin.com/in/ellen-lewis"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#ff69b4",
            textDecoration: "underline",
            fontWeight: "bold",
            marginTop: "1rem",
            display: "inline-block"
          }}
        >www.linkedin.com/in/ellen-lewis
        </a>
      </p>
    </main>
  );
}