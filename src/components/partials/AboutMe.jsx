import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AboutMe = () => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
        fontFamily: "Segoe UI, sans-serif",
        lineHeight: "1.8",
        color: "#1c1c1c",
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {/* Title */}
      <div>
        <h2
          style={{
            fontSize: "38px",
            fontWeight: "bold",
            color: "#561C24",
            marginBottom: "10px",
          }}
        >
          About Me
        </h2>
        <div
          style={{
            height: "3px",
            width: "70px",
            backgroundColor: "#561C24",
            margin: "0 auto",
            marginBottom: "30px",
          }}
        ></div>
      </div>

      {/* Paragraphs */}
      <div style={{ maxWidth: "750px", padding: "0 15px" }}>
        <p>
          I am a professionally qualified Advocate practicing since 2019, with a strong foundation in both civil and criminal law. My legal practice is built on integrity, strategic thinking, and a commitment to achieving practical outcomes for my clients.
        </p>
        <p>
          Over the years, I have handled a diverse range of cases involving litigation, client counseling, legal drafting, and alternate dispute resolution (ADR). I believe that every client deserves personal attention, clear communication, and honest legal advice—and that is exactly what I strive to provide in every matter I take on.
        </p>
      </div>

      {/* Read More Button */}
      <div style={{ marginTop: "30px" }}>
        <button
          onClick={() => navigate("/about")}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            backgroundColor: hovered ? "#ad162aff" : "#561C24",
            color: "#fff",
            padding: "10px 25px",
            border: "none",
            borderRadius: "6px",
            fontWeight: "500",
            cursor: "pointer",
            fontSize: "14px",
            transition: "all 0.3s ease",
            transform: hovered ? "scale(1.08)" : "scale(1)",
          }}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
