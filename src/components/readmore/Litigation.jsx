import React, { useState, useEffect } from "react";
import img from "../../assests/new/blog1.webp";
import tick from "../../assests/new/tick .png";
// import { Link } from "react-router-dom";

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
      backgroundColor: "#e8d8c4",
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
      color: "#561c24",
    },
    subHeading: {
      fontSize: isMobile ? "18px" : "22px",
      marginTop: "30px",
      color: "#561c24",
    },
    paragraph: {
      marginBottom: "15px",
    },
   
    list: {
      marginTop: "10px",
      marginLeft: "20px",
      marginBottom: "20px",
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
    },
  };

  return (
    <div style={styles.pageContainer}>
      
      <div style={styles.mainContent}>
        <img src={img} loading="lazy" alt="Advocate Sukhjurist" style={styles.heroImage} />
        <h1 style={styles.heading} >Expert Litigation Services in Delhi</h1>
        <p style={styles.paragraph}>
        Providing diligent representation in a wide range of civil and criminal disputes. Each case is handled with thorough preparation, clear communication, and a focus on the client’s interests both inside and outside the courtroom.
        </p>
        <h2 style={styles.subHeading}>Why Choose Us?</h2>
        <ul style={styles.list} >
          <li> <span style={{color:"#c44618", paddingRight:"5px"}} >✔</span>Decades of courtroom experience.</li>
          <li><span style={{color:"#c44618", paddingRight:"5px"}} >✔</span>Civil, criminal, and commercial litigation.</li>
          <li><span style={{color:"#c44618", paddingRight:"5px"}} >✔</span>Dedicated legal team for every case.</li>
        </ul>
      </div>

 
    </div>
  );
}

export default Litigation;
