import React, { useState, useEffect } from "react";
import img from "../../assests/blog1.jpg";
import { Link } from "react-router-dom";

function Litigation() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    pageContainer: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      padding: isMobile ? "15px" : "30px",
      backgroundColor: "#f9f9f9",
      fontFamily: "Arial, sans-serif",
      color: "#222",
    },
    mainContent: {
      flex: 3,
      backgroundColor: "#fff",
      padding: isMobile ? "20px" : "30px",
      borderRadius: "10px",
      marginRight: isMobile ? "0" : "30px",
      marginBottom: isMobile ? "20px" : "0",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    },
    sidebar: {
      flex: 1,
      backgroundColor: "#fff",
      padding: isMobile ? "20px" : "20px",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    },
    heroImage: {
      width: "100%",
      borderRadius: "8px",
      marginBottom: "20px",
    },
    heading: {
      fontSize: isMobile ? "22px" : "28px",
      marginBottom: "20px",
      color: "#003168",
    },
    subHeading: {
      fontSize: isMobile ? "18px" : "22px",
      marginTop: "30px",
      color: "#003168",
    },
    paragraph: {
      marginBottom: "15px",
    },
    list: {
      marginTop: "10px",
      marginLeft: "20px",
      marginBottom: "20px",
    },
    sidebarHeading: {
      fontSize: "20px",
      marginBottom: "10px",
      color: "#003168",
    },
    sidebarList: {
      listStyleType: "none",
      padding: 0,
      marginBottom: "20px",
    },
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.mainContent}>
        <img src={img} alt="Litigation Law Services" style={styles.heroImage} />
        <h1 style={styles.heading}>Expert Litigation Services in Delhi</h1>
        <p style={styles.paragraph}>
          Our litigation team provides strategic advice and strong courtroom representation.
          From civil to criminal matters, we ensure our clients are heard and protected.
        </p>
        <h2 style={styles.subHeading}>Why Choose Us?</h2>
        <ul style={styles.list}>
          <li>✅ Decades of courtroom experience</li>
          <li>✅ Civil, criminal, and commercial litigation</li>
          <li>✅ Dedicated legal team for every case</li>
        </ul>
      </div>

      <div style={styles.sidebar}>
        <h3 style={styles.sidebarHeading}>More Practice Areas</h3>
        <ul style={styles.sidebarList}>
         <li><Link to="/readmore/litigation" onClick={() => window.scrollTo(0, 0)}>Litigation</Link></li>
<li><Link to="/readmore/corporate-advisory" onClick={() => window.scrollTo(0, 0)}>Corporate Advisory</Link></li>
<li><Link to="/readmore/dispute-resolution" onClick={() => window.scrollTo(0, 0)}>Dispute Resolution</Link></li>
<li><Link to="/readmore/competition" onClick={() => window.scrollTo(0, 0)}>Competition Law</Link></li>
<li><Link to="/readmore/technology-media" onClick={() => window.scrollTo(0, 0)}>Technology & Media</Link></li>

        </ul>
      </div>
    </div>
  );
}

export default Litigation;
