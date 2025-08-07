import React from "react";
import img from "../../assests/blog1.jpg"; // Replace with actual image if different
// import { Link } from "react-router-dom";

function DisputeResolution() {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.mainContent}>
        <img
          src={img}
          alt="Dispute Resolution Services"
          style={styles.heroImage}
        />
        <h1 style={styles.heading}>
          Effective Dispute Resolution Services in Delhi
        </h1>
        <p style={styles.paragraph}>
          Our Dispute Resolution team offers a practical, result-oriented approach
          to resolving commercial, contractual, and regulatory disputes. We aim to
          avoid lengthy litigation and provide smart, strategic alternatives.
        </p>

        <h2 style={styles.subHeading}>What We Offer</h2>
        <ul style={styles.list}>
          <li>✅ Arbitration, mediation, and conciliation expertise</li>
          <li>✅ Pre-litigation strategies for faster outcomes</li>
          <li>✅ Sector-specific dispute handling (real estate, banking, etc.)</li>
        </ul>
      </div>

      {/* <div style={styles.sidebar}>
        <h3 style={styles.sidebarHeading}>More Practice Areas</h3>
        <ul style={styles.sidebarList}>
          <li><Link to="/readmore/litigation" onClick={() => window.scrollTo(0, 0)}>Litigation</Link></li>
<li><Link to="/readmore/corporate-advisory" onClick={() => window.scrollTo(0, 0)}>Corporate Advisory</Link></li>
<li><Link to="/readmore/dispute-resolution" onClick={() => window.scrollTo(0, 0)}>Dispute Resolution</Link></li>
<li><Link to="/readmore/competition" onClick={() => window.scrollTo(0, 0)}>Competition Law</Link></li>
<li><Link to="/readmore/technology-media" onClick={() => window.scrollTo(0, 0)}>Technology & Media</Link></li>

        </ul>
      </div> */}
    </div>
  );
}

const styles = {
 pageContainer: {
  display: "flex",
  justifyContent: "center",      // Center horizontally
  alignItems: "center",          // Center vertically (optional)
  padding: "20px",
  backgroundColor: "#f9f9f9",
  fontFamily: "Arial, sans-serif",
  color: "#222",
  flexWrap: "wrap",
},

 mainContent: {
  width: "100%",
  maxWidth: "700px",             // Card max width
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  margin: "0 auto",
},

  sidebar: {
    flex: "1",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    minWidth: "250px",
    flexBasis: "35%",
    marginTop: "20px",
  },
  heroImage: {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#003168",
  },
  subHeading: {
    fontSize: "22px",
    marginTop: "30px",
    color: "#003168",
  },
  paragraph: {
    marginBottom: "15px",
    lineHeight: "1.6",
  },
  list: {
    marginTop: "10px",
    marginLeft: "20px",
    marginBottom: "20px",
    lineHeight: "1.6",
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
    lineHeight: "1.8",
  },
};

export default DisputeResolution;
