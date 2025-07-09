"use client";

export default function Contact() {
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
          marginBottom: "2rem",
          letterSpacing: "0.05em",
        }}
      >
        Contact
      </h1>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        style={{
          background: "#fff",
          borderRadius: "1rem",
          boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
          padding: "2rem",
          minWidth: 320,
          maxWidth: 400,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
        }}
      >
        <input type="hidden" name="form-name" value="contact" />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={{
            padding: "0.8rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
            fontSize: "1rem",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={{
            padding: "0.8rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
            fontSize: "1rem",
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          style={{
            padding: "0.8rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
            fontSize: "1rem",
            resize: "vertical",
          }}
        />
        <button
          type="submit"
          style={{
            background: "#ff69b4",
            color: "#fff",
            border: "none",
            borderRadius: "0.5rem",
            padding: "0.9rem",
            fontSize: "1.1rem",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
