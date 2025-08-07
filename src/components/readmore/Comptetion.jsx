import React from "react";
// import img from "../../assests/blog1.jpg";
// import { Link } from "react-router-dom";

function Competition() {
  return (
    <>
      <style>
        {`
          .banking-container {
            display: flex;
            flex-wrap: wrap;
            padding: 40px;
            background-color: #f9f9f9;
            font-family: Arial, sans-serif;
            color: #222;
            animation: fadeIn 0.8s ease-in-out;
          }

          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .main-content {
            flex: 3;
            background: #fff;
            padding: 30px;
            border-radius: 12px;
            margin-right: 30px;
            box-shadow: 0 0 12px rgba(0,0,0,0.08);
            animation: fadeInUp 0.9s ease-in-out;
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .section {
            margin-bottom: 40px;
          }

          .section-divider {
            height: 2px;
            background: #e0e0e0;
            margin: 30px 0;
            border-radius: 5px;
          }

          .sidebar {
            flex: 1;
            background: #fff;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 0 12px rgba(0,0,0,0.08);
            transition: transform 0.3s ease;
          }

          .sidebar:hover {
            transform: translateY(-5px);
          }

          .hero-img {
            width: 100%;
            border-radius: 10px;
            margin-bottom: 25px;
          }

          .heading {
            font-size: 30px;
            margin-bottom: 20px;
            color: #003168;
          }

          .subheading {
            font-size: 24px;
            margin-bottom: 15px;
            color: #003168;
          }

          .paragraph {
            margin-bottom: 15px;
            line-height: 1.7;
            color: #444;
          }

          .list {
            margin-left: 20px;
            margin-bottom: 20px;
          }

          .list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
            transition: color 0.3s ease;
          }

          .list li::before {
            content: "✔";
            position: absolute;
            left: 0;
            color: #0070c0;
          }

          .list li:hover {
            color: #003168;
            cursor: pointer;
          }

          .sidebar h3 {
            font-size: 22px;
            margin-bottom: 15px;
            color: #003168;
          }

          .sidebar ul {
            list-style: none;
            padding: 0;
          }

          .sidebar ul li {
            margin-bottom: 12px;
          }

          .sidebar ul li a {
            text-decoration: none;
            color: #333;
            font-size: 16px;
            position: relative;
            padding-left: 20px;
            display: inline-block;
            transition: color 0.3s ease;
          }

          .sidebar ul li a::before {
            content: "➡";
            position: absolute;
            left: 0;
            color: #003168;
            transition: transform 0.3s ease;
          }

          .sidebar ul li a:hover {
            color: #003168;
            font-weight: 500;
          }

          .sidebar ul li a:hover::before {
            transform: translateX(4px);
          }

          @media (max-width: 768px) {
            .banking-container {
              flex-direction: column;
              padding: 20px;
            }

            .main-content {
              margin-right: 0;
              margin-bottom: 30px;
              padding: 20px;
            }

            .sidebar {
              padding: 20px;
            }

            .heading {
              font-size: 24px;
            }

            .subheading {
              font-size: 20px;
            }
          }
        `}
      </style>

      <div className="banking-container">
        <div className="main-content">
          {/* <img src={img} alt="Competition Law Services" className="hero-img" /> */}

          <div className="section">
            <h1 className="heading">Competition Law Experts in Delhi</h1>
            <p className="paragraph">
              Our Competition Law practice ensures compliance with anti-trust regulations,
              helping clients avoid penalties and maintain fair market competition.
            </p>
            <p className="paragraph">
              We advise on merger control, abuse of dominance, cartel investigations,
              and representation before the Competition Commission of India (CCI).
            </p>
          </div>

          <div className="section-divider"></div>

          <div className="section">
            <h2 className="subheading">Our Services Include:</h2>
            <ul className="list">
              <li>Competition compliance audits</li>
              <li>Handling CCI investigations & litigation</li>
              <li>Advising on anti-competitive agreements & dominance</li>
              <li>Merger filings & approvals</li>
              <li>Risk assessment of strategic collaborations</li>
            </ul>
          </div>

          <div className="section-divider"></div>

          <div className="section">
            <p className="paragraph">
              Whether you're a startup or a multinational, our legal team ensures your
              business practices align with India’s competition laws—strategically and compliantly.
            </p>
          </div>
        </div>

        {/* <div className="sidebar">
          <h3>More Practice Areas</h3>
          <ul>
            <li><Link to="/readmore/litigation" onClick={() => window.scrollTo(0, 0)}>Litigation</Link></li>
<li><Link to="/readmore/corporate-advisory" onClick={() => window.scrollTo(0, 0)}>Corporate Advisory</Link></li>
<li><Link to="/readmore/dispute-resolution" onClick={() => window.scrollTo(0, 0)}>Dispute Resolution</Link></li>
<li><Link to="/readmore/competition" onClick={() => window.scrollTo(0, 0)}>Competition Law</Link></li>
<li><Link to="/readmore/technology-media" onClick={() => window.scrollTo(0, 0)}>Technology & Media</Link></li>

          </ul>
        </div> */}
      </div>
    </>
  );
}

export default Competition;
