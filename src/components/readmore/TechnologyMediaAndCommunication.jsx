import React, { useEffect } from "react";
import img from "../../assests/new/blog1.webp";
import tick from "../../assests/new/tick .png";
function TechnologyMediaAndCommunication() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @media (max-width: 768px) {
        .tech-container {
          flex-direction: column;
          padding: 15px !important;
        }

        .main-content {
          margin-right: 0 !important;
          margin-bottom: 20px !important;
          padding: 20px !important;
        }

        .sidebar {
          padding: 20px !important;
        }

        .heading {
          font-size: 22px !important;
        }

        .subheading {
          font-size: 18px !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="tech-container" style={styles.pageContainer}>
      <div className="main-content" style={styles.mainContent}>
        <img loading="lazy"
          src={img}
          alt="Advocate Sukhjurist"
          style={styles.heroImage}
        />
        <h1 className="heading" style={styles.heading}>
          Technology, Media & Communication Law Experts in Delhi
        </h1>
        <p style={styles.paragraph}>
          We provide specialised legal services in the fast-evolving domains of technology, media, and communication. Our lawyers offer practical legal guidance to help businesses and creatives navigate the complex digital world.
        </p>

        <h2 className="subheading" style={styles.subHeading}>Our Services Include</h2>
        <ul style={styles.list}>
          <li><span style={{color:"#c44618", paddingRight:"5px"}} >✔</span> Data protection and privacy compliance.</li>
          <li><span style={{color:"#c44618", paddingRight:"5px"}} >✔</span> IT contracts and software licensing.</li>
          <li><span style={{color:"#c44618", paddingRight:"5px"}} >✔</span> Media & entertainment law advisory.</li>
          <li><span style={{color:"#c44618", paddingRight:"5px"}} >✔</span> Online defamation & cybercrime resolution.</li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    display: "flex",
    padding: "30px",
    backgroundColor: "white",
    fontFamily: "Arial, sans-serif",
    color: "#222",
  },
  mainContent: {
    flex: 3,
    backgroundColor: "#e8d8c4",
    padding: "30px",
    borderRadius: "10px",
    marginRight: "30px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  sidebar: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
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
  },
  list: {
    marginTop: "10px",
    // marginLeft: "20px",
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

export default TechnologyMediaAndCommunication;
