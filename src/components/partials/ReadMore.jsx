import React from "react";
import img from "../../assests/blog1.jpg"; // Adjust the path as needed

const ReadMore = () => {

  
  return (
    <div style={styles.pageContainer}>
      {/* Main Content */}
      <div style={styles.mainContent}>
        <img
          src={img}
          alt="Best Divorce Lawyer in Delhi"
          style={styles.heroImage}
        />
        <h1 style={styles.heading}>
          Meet the Best Divorce Lawyer in Delhi for Hassle-Free Separation
        </h1>
        <p style={styles.paragraph}>
          Divorce isn’t just a legal event—it’s an emotional and life-altering
          transition. Whether it’s mutual consent or contested, a separation
          requires more than paperwork—it demands compassion, strategy, and
          professional expertise. That’s why hiring the <b>Best Divorce Lawyer in Delhi</b> isn’t just helpful—it’s essential.
        </p>

        <h2 style={styles.subHeading}>Who We Are – Sandhya Gupta and Associates</h2>
        <p style={styles.paragraph}>
          Founded in 2010, <b>Sandhya Gupta and Associates</b> is a Delhi-based law
          firm known for its ethical practice and result-oriented representation.
          Our mission is to simplify complex legal procedures and help our
          clients rebuild their lives with dignity.
        </p>
        <p style={styles.paragraph}>
          Led by <b>Advocate Sandhya Gupta</b>, widely recognized as the <b>Best Divorce Lawyer in East Delhi</b>, the firm has carved a niche in family and
          matrimonial law. With countless successful cases in Family Courts,
          High Courts, and even the <b>Supreme Court</b>, we bring unmatched experience and empathy to every matter we handle.
        </p>

        <h2 style={styles.subHeading}>Here’s Why Our Clients Choose Us:</h2>
        <ul style={styles.list}>
          <li>✅ Detailed legal analysis for every case</li>
          <li>✅ Strong representation in all levels of courts</li>
          <li>✅ Personalized legal solutions, not one-size-fits-all</li>
          <li>✅ Honest communication and consistent updates</li>
          <li>✅ Complete confidentiality and professional ethics</li>
        </ul>

        <h2 style={styles.subHeading}>Our Core Services in Divorce and Matrimonial Law</h2>
        <p style={styles.paragraph}>
          We specialize in all types of matrimonial cases and related legal issues.
          From amicable mutual divorce filings to complex child custody battles,
          our firm handles it all.
        </p>

        <h3 style={styles.expertiseHeading}>Our Expertise Includes:</h3>
        <ul style={styles.list}>
          <li>🔹 Mutual Consent Divorce (Hindu, Muslim, Christian, Special Marriage Act)</li>
          <li>🔹 Contested Divorce (Grounds: cruelty, desertion, adultery, etc.)</li>
          <li>🔹 Alimony & Maintenance (CrPC 125, HMA, etc.)</li>
          <li>🔹 Child Custody & Visitation Rights</li>
          <li>🔹 Domestic Violence & Dowry Cases (498A IPC)</li>
          <li>🔹 Annulment & Judicial Separation</li>
          <li>🔹 Supreme Court Divorce Appeals</li>
        </ul>
      </div>

      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h3 style={styles.sidebarHeading}>Recent Posts</h3>
        <ul style={styles.sidebarList}>
          <li><a href="/read-more">Meet the Best Divorce Lawyer in Delhi for Hassle-Free Separation</a></li>
          <li><a href="/read-more">How to File Mutual Divorce in Delhi in 2025</a></li>
          <li><a href="/read-more">Best Lady Divorce Lawyer in Delhi | Trusted Legal Expert</a></li>
          <li><a href="/read-more">Legal Consultants in Delhi | Experienced Law Firms</a></li>
          <li><a href="/read-more">Child Custody & Family Lawyer in Delhi</a></li>
        </ul>

        <h3 style={styles.sidebarHeading}>Archives</h3>
        <ul style={styles.sidebarList}>
          <li><a href="/read-more">July 2025</a></li>
          <li><a href="/read-more">June 2025</a></li>
        </ul>

        <h3 style={styles.sidebarHeading}>Categories</h3>
        <ul style={styles.sidebarList}>
          <li><a href="/read-more">Divorce Law</a></li>
          <li><a href="/read-more">Child Custody</a></li>
          <li><a href="/read-more">Legal Services</a></li>
          <li><a href="/read-more">Court Marriage</a></li>
          <li><a href="/read-more">Criminal Law</a></li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    padding: "30px",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
    color: "#222",
  },
  mainContent: {
    flex: 3,
    backgroundColor: "#fff",
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
    color: "#003168",
  },
  subHeading: {
    fontSize: "22px",
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
  expertiseHeading: {
    fontSize: "20px",
    marginTop: "20px",
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
  sidebarListItem: {
    marginBottom: "10px",
  },
};

export default ReadMore;
