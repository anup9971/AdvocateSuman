import React from "react";
import img from "../../assests/new/blog1.webp";
import tick from "../../assests/new/tick .png";
// import { Link } from "react-router-dom";

function BankingAndFinance() {
    return (
        <>
            <style>
                {`
          .banking-container {
            display: flex;
            flex-wrap: wrap;
            padding: 40px;
            background-color: white;
            font-family: Arial, sans-serif;
            color: #222;
            animation: fadeIn 0.8s ease-in-out;
          }
            .list li::before {
            content: "✔";
            position: absolute;
            left: 0;
            color: #c44618;
          }

          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .main-content {
            flex: 3;
         
            background: #e8d8c4;
            padding: 30px;
            border-radius: 12px;
            margin-right: 0px;
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
            color: #561c24;
          }

          .subheading {
            font-size: 24px;
            margin-bottom: 15px;
            color: #561c24;
          }

          .paragraph {
            margin-bottom: 15px;
            line-height: 1.7;
            color: #444;
          }

          .list {
            // margin-left: 20px;
            margin-bottom: 20px;
            list-style-type: none;
          }

          .list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
            transition: color 0.3s ease;
          }

       

          .list li:hover {
            color: #561c24;
            cursor: pointer;
          }

          .sidebar h3 {
            font-size: 22px;
            margin-bottom: 15px;
            color: #561c24;
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
            color: #561c24;
            transition: transform 0.3s ease;
          }

          .sidebar ul li a:hover {
            color: #561c24;
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

                <div className="   banking-container">
                <div className="main-content">
                    <img src={img} loading="lazy" alt="Advocate Sukhjurist" className="hero-img" />

                    <div className="section">
                        <h1 className="heading">Trusted Banking and Finance Legal Services in Delhi</h1>
                        <p className="paragraph">
                          The financial world is constantly evolving—with stricter regulations, rapid digitisation, and increasing risks. Our legal team helps you stay compliant and protected while advancing your financial interests.
                        </p>
                    </div>

                    <div className="section-divider"></div>

                    <div className="section">
                        <h2 className="subheading">Why Work with Our Banking & Finance Legal Experts?</h2>
                        <p className="paragraph">
                            With over a decade of experience, we specialise in structuring secure financial transactions, mitigating risks, and ensuring regulatory compliance.
                        </p>
                        <ul className="list">
                            <li>Drafting and vetting of loan agreements, term sheets, and security documents.</li>
                            <li>Due diligence, financial structuring, and compliance advisory.</li>
                            <li>Representation before DRT, DRAT, NCLT, and High Courts.</li>
                            <li>Expertise in RBI, SEBI, and FEMA regulations.</li>
                            <li>Strategic legal support for banking fraud and asset recovery cases.</li>
                        </ul>
                    </div>

                    <div className="section-divider"></div>

                    <div className="section">
                        <h2 className="subheading">Our Core Services in Banking & Financial Law.</h2>
                        <ul className="list">
                            <li> Project and Infrastructure Finance.</li>
                            <li> Debt Recovery & Restructuring (SARFAESI, IBC, etc.)</li>
                            <li> FinTech Legal Advisory & Compliance.</li>
                            <li> NBFC Licensing and Operational Support.</li>
                            <li> International Banking Transactions and Cross-Border Financing.</li>
                            <li> Regulatory Compliance for Banks, NBFCs, and Financial Institutions.</li>
                        </ul>
                    </div>

                    <div className="section-divider"></div>

                    <div className="section">
                        <p className="paragraph">
                            Whether you're dealing with complex loan documentation or navigating financial regulations, our legal experts are here to provide strategic guidance with clarity and confidence.
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

export default BankingAndFinance;
