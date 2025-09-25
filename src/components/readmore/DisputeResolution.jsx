import React from "react";
import img from "../../assests/new/blog1.webp"; 
import tick from "../../assests/new/tick .png"; 

function DisputeResolution() {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.mainContent}>
        <img
          src={img} loading="lazy"
          alt="Advocate Sukhjurist"
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
          <li><span style={{color:"#561c24", paddingRight:"5px"}} > <img src={tick} alt="Advocate Sukhjurist" style={{width:"23px" , height:"20px"}} /></span> Arbitration, mediation, and conciliation expertise</li>
          <li><span style={{color:"#561c24", paddingRight:"5px"}} > <img src={tick} alt="Advocate Sukhjurist" style={{width:"23px" , height:"20px"}} /></span> Pre-litigation strategies for faster outcomes</li>
          <li><span style={{color:"#561c24", paddingRight:"5px"}} > <img src={tick} alt="Advocate Sukhjurist" style={{width:"23px" , height:"20px"}} /></span> Sector-specific dispute handling (real estate, banking, etc.)</li>
        </ul>
      </div>


    </div>
  );
}

const styles = {
 pageContainer: {
  display: "flex",
  justifyContent: "center",      // Center horizontally
  alignItems: "center",          // Center vertically (optional)
  padding: "20px",
  backgroundColor: "#e8d8c4",
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
    color: "#561c24",
  },
  subHeading: {
    fontSize: "22px",
    marginTop: "30px",
    color: "#561c24",
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
    listStyleType:"none"
  },
  sidebarHeading: {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#561c24",
  },
  sidebarList: {
    listStyleType: "none",
    padding: 0,
    marginBottom: "20px",
    lineHeight: "1.8",
  },
};

export default DisputeResolution;
